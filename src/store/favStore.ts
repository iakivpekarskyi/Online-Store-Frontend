import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IProduct } from '@/types/Products'
import { addFavs, getFavs, removeFavItem } from '@/services/apiFavService'
import { getProductByIds } from '@/services/apiService'
import { IFavPushItems } from '@/types/Fav'

export interface FavSliceState {
  favouriteIds: string[]
  favourites: IProduct[]
  loading: boolean
  count: number
  isFavSync: boolean
  token: string | null
}

interface FavSliceActions {
  addFavourite: (id: string, token: string | null) => Promise<void>
  removeFavourite: (id: string, token: string | null) => Promise<void>
  getFavouriteProducts: () => Promise<void>
  setLoading: (loading: boolean) => void
  syncBackendFav: (token: string, reqItems: IFavPushItems) => Promise<void>
}
export type FavStoreState = FavSliceState & FavSliceActions

const initialState: FavSliceState = {
  favouriteIds: [],
  favourites: [],
  count: 0,
  loading: false,
  isFavSync: false,
  token: null,
}

export const useFavouritesStore = create<FavStoreState>()(
  persist(
    (set, get) => ({
      ...initialState,
      setLoading: (loading) => set({ loading }),

      addFavourite: async (
        productId: string,
        token: string | null,
      ): Promise<void> => {
        if (!token) {
          const products = await getProductByIds([productId])

          set((state) => ({
            ...state,
            favouriteIds: [...state.favouriteIds, productId],
            favourites: [...state.favourites, ...products],
          }))
        } else {
          try {
            console.log('Sending request to addFavs with data:', {
              productIds: [productId],
            })
            await addFavs(token, { productIds: [productId] })
            set((state) => ({
              ...state,
              favouriteIds: [...state.favouriteIds, productId],
              favourites: [...state.favourites],
            }))
            await get().syncBackendFav(token, { productIds: [productId] })
          } catch (error) {
            console.error('Error in addFavourite:', error)

            throw new Error('Failed to add favorite')
          }
        }
      },

      removeFavourite: async (
        id: string,
        token: string | null,
      ): Promise<void> => {
        try {
          if (token) {
            set((state) => ({
              ...state,
              favouriteIds: state.favouriteIds.filter((favId) => favId !== id),
              favourites: state.favourites.filter((fav) => fav.id !== id),
            }))
            await removeFavItem(token, id)
            await get().syncBackendFav(token, { productIds: [id] })
          } else {
            set((state) => ({
              ...state,
              favouriteIds: state.favouriteIds.filter((favId) => favId !== id),
              favourites: state.favourites.filter((fav) => fav.id !== id),
            }))
          }
        } catch (error) {
          throw new Error((error as Error).message)
        }
      },

      getFavouriteProducts: async (): Promise<void> => {
        try {
          const token = get().token
          const products: IProduct[] = await getFavs(token)

          set((state) => ({
            ...state,
            favourites: products,
            count: products.length,
          }))
        } catch (error) {
          console.error('Error in getFavouriteProducts:', error)
          throw new Error('Failed to get favorite products')
        }
      },

      syncBackendFav: async (token: string, reqItems: IFavPushItems) => {
        try {
          if (token) {
            const response = await addFavs(token, reqItems)
            const { products } = response

            set((state) => ({
              ...state,
              favouriteIds: [...state.favouriteIds],
              favourites: products,
              isFavSync: true,
            }))
          } else {
            await get().getFavouriteProducts()
          }
        } catch (error) {
          console.error('Error during syncBackendFav:', error)

          throw new Error('Failed to sync favorites with the server')
        }
      },
    }),
    {
      name: 'fav-storage',
      partialize: (state) => ({
        favouriteIds: state.favouriteIds,
        favourites: state.favourites,
      }),
    },
  ),
)

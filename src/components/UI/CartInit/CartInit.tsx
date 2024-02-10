'use client'
import { useAuthStore } from '@/store/authStore'
import { useFavouritesStore } from '@/store/favStore'
import { useCombinedStore } from '@/store/store'
import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'

export default function CartInit() {
  const itemsIds = useCombinedStore(useShallow((state) => state.itemsIds))
  const getCartItems = useCombinedStore((state) => state.getCartItems)
  const syncBackendCart = useCombinedStore((state) => state.syncBackendCart)
  const isSync = useCombinedStore((state) => state.isSync)
  const reset = useCombinedStore((state) => state.resetCart)
  const { token } = useAuthStore()

  const { favouriteIds, getFavouriteProducts, syncBackendFav, isFavSync, setLoading } = useFavouritesStore()

  useEffect(() => {
    const updateFavorites = async () => {
      try {
        setLoading(true)

        if (token) {
          if (!isFavSync) {
            await syncBackendFav(token, { productIds: favouriteIds })
          }
        } else {
          await getFavouriteProducts()
        }

        setLoading(false)
      } catch (error) {
        console.error('Error during initialization:', error)
        setLoading(false)
      }
    }

    const initializeCartAndFavorites = async () => {
      try {
        if (!token) {
          if (isSync) {
            reset()
          }
          if (itemsIds.length) {
            await getCartItems()
          }
        } else if (!isSync) {
          await syncBackendCart(token)
        }

        await updateFavorites()
      } catch (error) {
        console.error('Error during cart and favorites initialization:', error)
      }
    }

    void initializeCartAndFavorites()
  }, [token, itemsIds, isSync, getCartItems, syncBackendCart, reset, syncBackendFav, isFavSync, favouriteIds, getFavouriteProducts, setLoading])

  return null
}

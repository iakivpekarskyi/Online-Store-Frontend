import { StateCreator } from 'zustand'
import { IProduct } from '@/models/Products'
import { productsList } from '@/data/products'

export interface FavSliceState {
  items: IProduct[]
}

const initialState: FavSliceState = { items: productsList.products! }

interface FavSliceActions {
  add: (id: string) => void
  remove: (id: string) => void
  resetFav: () => void
}

export type FavSliceStore = FavSliceState & FavSliceActions

export const createFavSlice: StateCreator<
  FavSliceStore,
  [],
  [],
  FavSliceStore
> = (set, get) => ({
  ...initialState,
  add: (id: string) => {
    const { items } = get()
    const updatedItems = addToFav(id, items)

    set({ items: updatedItems })
  },

  remove: (id: string) => {
    const { items } = get()
    const updatedItems = items.filter((item) => item.id !== id)

    set({ items: updatedItems })
  },

  resetFav: () => {
    set({ items: [] })
  },
})

function addToFav(id: string, favList: IProduct[]): IProduct[] {
  if (favList.some((item) => item.id === id)) {
    return [...favList]
  } else {
    const newFavItem: IProduct = { id }

    return [...favList, newFavItem]
  }
}

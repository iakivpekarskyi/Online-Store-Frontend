import { StateCreator } from 'zustand'

export interface FavItem {
  id: string
}

interface FavSliceState {
  items: FavItem[]
}

interface CartSliceActions {
  add: (id: string) => void
  remove: (id: string) => void
  resetFav: () => void
}

export type CoffeeItem = {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
}

export const mockCoffeeItems: CoffeeItem[] = [
  {
    id: 'c1',
    name: 'Espresso',
    description:
      'A strong, concentrated coffee beverage made by forcing hot water through finely-ground coffee beans.',
    price: 3.99,
    imageUrl: 'https://www.pexels.com/photo/13374767/',
  },
  {
    id: 'c2',
    name: 'Cappuccino',
    description:
      'A coffee drink made with espresso, steamed milk, and foamed milk.',
    price: 4.99,
    imageUrl: 'https://www.pexels.com/photo/11403844/',
  },
  {
    id: 'c3',
    name: 'Mocha',
    description:
      'A chocolate-flavored coffee drink made with espresso, steamed milk, chocolate syrup, and whipped cream.',
    price: 5.99,
    imageUrl: 'https://www.pexels.com/photo/10220971/',
  },
]

export type FavSliceStore = FavSliceState & CartSliceActions

const initialState: FavSliceState = { items: mockCoffeeItems }

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

function addToFav(id: string, favList: FavItem[]): FavItem[] {
  if (favList.some((item) => item.id === id)) {
    return [...favList]
  } else {
    const newFavItem: FavItem = { id }

    return [...favList, newFavItem]
  }
}

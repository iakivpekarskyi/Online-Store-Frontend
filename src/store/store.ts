import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type CartSliceStore, createCartSlice } from './cartSlice'
import { type FavSliceStore, createFavSlice } from './favSlice'

export type CombinedStateStore = {
  cart: CartSliceStore
  fav: FavSliceStore
}

export const useCombinedStore = create<CombinedStateStore>()(
  persist(
    (...a) => ({
      cart: createCartSlice(...a),
      fav: createFavSlice(...a),
    }),
    {
      name: 'combined-storage',
      partialize: (state) => ({
        cart: {
          items: state.cart.items,
          count: state.cart.count,
          totalPrice: state.cart.totalPrice,
        },
        fav: {
          items: state.fav.items,
        },
      }),
    },
  ),
)

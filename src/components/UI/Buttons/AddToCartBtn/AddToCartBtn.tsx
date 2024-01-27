'use client'

import Image from 'next/image'
import cart_full from '../../../../../public/cart_full.svg'
import cart_empty from '../../../../../public/cart_empty.svg'
import { useCombinedStore } from '@/store/store'
import { useAuthStore } from '@/store/authStore'


interface Props {
  productId: string;
  onClick: () => void;
}

export default function AddToCartBtn({ productId }: Props) {
  const { add, remove, isItemInCart } = useCombinedStore(state => ({
    add: state.add,
    remove: state.remove,
    isItemInCart: state.isItemInCart(productId),
  }))


  const handleAddToCart = () => {
    if (isItemInCart) {
      remove(productId, token)
    } else {
      add(productId, token)
    }
  }

  const token = useAuthStore((state) => state.token)

  return (
    <button
      className="relative h-12 w-12 cursor-pointer rounded-full bg-black hover:bg-fullpage-tint focus:bg-inverted active:bg-fullpage-tint hover:scale-110 transition ease-in-out m-2"
      onClick={handleAddToCart}

    >
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={isItemInCart ? cart_full : cart_empty} alt={isItemInCart ? 'remove from cart' : 'add to cart'} className="relative" style={{ right: '2px' }} />
      </div>
    </button>
  )
}

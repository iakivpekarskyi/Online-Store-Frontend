'use client'

import Button from '@/components/ui/Button'
import FavElement from './FavElement'

// import { FavItem } from '@/store/favSlice';
import { IProduct } from '@/models/Products'
import Link from 'next/link'

import { useCombinedStore } from '@/store/store'

export default function Favourites() {
  const { favItems } = useCombinedStore()

  if (!favItems) {
    return <div>Loading...</div>
  }

  return (
    <div className="mx-auto flex h-[513px] min-w-[328px] flex-col px-4 md:max-w-[800px]">
      <h2 className="mx-4 my-6 text-left text-4xl">Favourites</h2>
      <div>
        {favItems.map((item: IProduct) => (
          <FavElement key={item.id} product={item} />
        ))}
      </div>

      <div className="flex w-full justify-center">
        <Link href={'/'}>
          <Button className="my-6 h-14  text-lg font-medium sm:w-[211px]">
            Go to checkout
          </Button>
        </Link>
      </div>
    </div>
  )
}

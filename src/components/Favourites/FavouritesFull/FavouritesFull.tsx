'use client'
import Button from '@/components/UI/Buttons/Button/Button'
import Link from 'next/link'
import FavElement from '../FavElement/FavElement'
import { IProduct } from '@/types/Products'
import { useFavouritesStore } from '@/store/favStore'




export default function FavouritesFull() {
  const { favourites } = useFavouritesStore()




  return (
    <div className="mx-auto flex min-w-[328px] flex-col px-4 md:max-w-[800px]">
      <h2 className="mx-4 my-6 text-left text-4xl">Favourite Products</h2>
      <div>
        {favourites.map?.((item: IProduct) => (
          <FavElement key={item.id} product={item}

          />
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

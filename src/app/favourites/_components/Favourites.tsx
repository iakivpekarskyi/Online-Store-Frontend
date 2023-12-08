import Button from '@/components/ui/Button'
import FavElement from './FavElement'
import { useCombinedStore } from '@/store/store'
import { FavItem } from '@/store/favSlice'
import Link from 'next/link'

export default function Favourites() {
  const { items, add, remove } = useCombinedStore().fav

  return (
    <div className="h-{513px} mx-auto flex min-w-[328px] flex-col px-4 md:max-w-[800px]">
      <h2 className="mx-4 my-6 text-left text-4xl">Favourites</h2>
      <div>
        {items.map((item: FavItem) => (
          <FavElement key={item.id} product={item} remove={remove} add={add} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="my-6 h-14 w-full text-lg font-medium sm:w-[211px]">
          <Link href={'/'} passHref>
            Go to checkout
          </Link>
        </Button>
      </div>
    </div>
  )
}

'use client'

import FavouritesEmpty from '../../components/Favourites/FavouritesEmpty/FavouritesEmpty'
import FavouritesFull from '../../components/Favourites/FavouritesFull/FavouritesFull'
import { useFavouritesStore } from '@/store/favStore'
import { useStoreData } from '@/hooks/useStoreData'

export default function Fav() {
  const length = useStoreData(useFavouritesStore, (state) => state.favouriteIds)?.length ?? 0

  console.log(length)

  return (
    <>
      {length > 0 ? <FavouritesFull /> : <FavouritesEmpty />}
    </>
  )
}
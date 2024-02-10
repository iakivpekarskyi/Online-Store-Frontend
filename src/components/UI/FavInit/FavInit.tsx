// import { useEffect } from 'react'
// import { useAuthStore } from '@/store/authStore'
// import { useFavouritesStore } from '@/store/favStore'

// export default function FavouritesInit() {
//   const { favouriteIds, getFavouriteProducts, syncBackendFav, isSync, setLoading } = useFavouritesStore()
//   const { token } = useAuthStore()

//   const initializeFavourites = async () => {
//     try {
//       setLoading(true)

//       if (token) {
//         if (!isSync) {
//           await syncBackendFav(token, { productIds: favouriteIds })
//         }
//       } else {
//         await getFavouriteProducts()
//       }

//       setLoading(false)
//     } catch (error) {
//       console.error('Error during initialization:', error)
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     void initializeFavourites()
//   }, [token, favouriteIds, isSync, getFavouriteProducts, syncBackendFav, setLoading])

//   return null
// }

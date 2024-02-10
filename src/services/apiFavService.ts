import { ErrorResponse } from '@/types/ErrorResponse'
import { handleResponse } from '@/utils/handleResponse'
import { ServerError } from './authService'
import { FavResponse, IFavPushItems } from '@/types/Fav'
import { IProduct } from '@/types/Products'

export async function addFavs(
  token: string,
  favIds: IFavPushItems,
): Promise<FavResponse> {
  try {
    console.log('Sending request to addFavs with data:', favIds)

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST_REMOTE}/favorites`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(favIds),
      },
    )

    console.log('Received response from addFavs:', response)

    if (!response.ok) {
      throw new Error('Failed to add favorites to the server')
    }

    return handleResponse<FavResponse, ErrorResponse>(response)
  } catch (error) {
    console.error('Error in addFavs:', error)

    throw new ServerError('Something went wrong while adding favs')
  }
}

export async function removeFavItem(
  token: string,
  id: string,
): Promise<FavResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST_REMOTE}/favorites/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )

    return handleResponse<FavResponse, ErrorResponse>(response)
  } catch (error) {
    throw new ServerError('Something went wrong while deleting fav')
  }
}

export async function getFavs(token: string | null): Promise<IProduct[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_HOST_REMOTE}/favorites`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )

    return handleResponse<IProduct[], ErrorResponse>(response)
  } catch (error) {
    throw new ServerError('Something went wrong')
  }
}

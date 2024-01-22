import Image from 'next/image'
import active_heart from '../../../../public/active_heart.svg'
import not_active_heart from '../../../../public/not_active_heart.svg'
import { twMerge } from 'tailwind-merge'
import { ButtonHeartProps } from '@/types/ButtonHeart'

export default function ButtonHeart({ active, onClick, className }: Readonly<ButtonHeartProps>) {
  const imageUrl = active ? active_heart : not_active_heart

  return (
    <button
      onClick={onClick}
      className={twMerge(
        'duration-400 flex md:h-[54px] md:w-[54px] h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-secondary transition ease-in-out hover:scale-110  hover:bg-hover-heart m-3',
        className,
      )}
    >
      <Image src={imageUrl} alt={`heart ${active ? 'liked' : 'unliked'}`} />
    </button>
  )
}



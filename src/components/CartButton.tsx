import Image from 'next/image'
import cart_icon from '../../public/cart_icon.svg'

interface CartButtonProps {
  onClick: () => void
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={
          'flex items-center gap-2 rounded-full px-4 py-2 font-medium text-primary sm:bg-secondary'
        }
      >
        <div className={'h-[20px] w-[20px] sm:h-[17px] sm:w-[16px]'}>
          <Image src={cart_icon} width={20} height={20} alt="Cart" priority />
        </div>
        <p className={'hidden items-center sm:flex'}>Cart</p>
      </button>
    </div>
  )
}

export default CartButton

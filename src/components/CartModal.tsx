import Button from '@/components/ui/Button'
import Image from 'next/image'
import search from '../../public/search_cart.png'

interface CartModalProps {
  onClose: () => void
  isLoggedIn: boolean
}

const CartModal: React.FC<CartModalProps> = ({ onClose, isLoggedIn }) => {
  return (
    <div className="fixed inset-0">
      <div
        className="absolute inset-0 overflow-hidden bg-black opacity-40"
        onClick={onClose}
      ></div>

      <div className="absolute right-0 h-full w-full bg-white  sm:w-[500px]">
        <h2 className="m-8 text-4xl">Shopping cart</h2>
        <div className="mt-12 flex flex-col items-center ">
          <Image
            src={search}
            width={240}
            height={205}
            alt="search icon"
            priority
          />
          <div className=" mt-12  flex flex-col items-center gap-6 py-4">
            <p>Your card is empty</p>
            <Button className="h-14 w-[211px] text-lg font-medium">
              Continue Shopping
            </Button>
            {!isLoggedIn && (
              <Button className="h-14 w-[211px] text-lg font-medium">
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal

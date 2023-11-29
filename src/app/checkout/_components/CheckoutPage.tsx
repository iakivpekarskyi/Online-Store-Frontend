import React from 'react'
import AddToCartButton from '@/components/ui/Button'

export default function CheckoutPage() {
  return (
    <div className="mx-24 mt-8 flex items-center justify-center">
      <div className="w-1/2 p-4">
        {/* Checkout form */}
        <form>
          <div>
            <h2 className="mb-4 pt-6 text-4xl font-medium text-slate-950">
              Contact
            </h2>
            <div className="flex justify-between">
              <label className=" text-sm font-medium text-gray-600">
                Email
              </label>
              <p>Have an account? Log in</p>
            </div>
            <input
              className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>

          {/* Delivery */}
          <h2 className="mb-4 pt-6 text-4xl font-medium text-slate-950">
            Delivery
          </h2>

          <div className="flex gap-6">
            <div className="w-1/2">
              <label className=" text-sm font-medium text-gray-600">
                First Name
              </label>

              <input
                className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
                type="text"
                placeholder="First Name"
              />
            </div>

            <div className=" w-1/2 ">
              <label className=" text-sm font-medium text-gray-600">
                Last Name
              </label>

              <input
                className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <label className=" text-sm font-medium text-gray-600">
            Phone number
          </label>

          <input
            className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
            type="phone"
            placeholder="Phone number"
          />
          <label className=" text-sm font-medium text-gray-600">Country</label>

          <input
            className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
            type="text"
            placeholder="Select country"
          />
          <label className=" text-sm font-medium text-gray-600">Address</label>

          <input
            className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
            type="text"
            placeholder="Address"
          />
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className=" text-sm font-medium text-gray-600">City</label>

              <input
                className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
                type="text"
                placeholder="City"
              />
            </div>

            <div className=" w-1/2 ">
              <label className=" text-sm font-medium text-gray-600">
                Zip code
              </label>

              <input
                className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
                type="text"
                placeholder=" Zip code"
              />
            </div>
          </div>
          <label className=" text-lg font-medium text-gray-600">
            Shipping method
          </label>

          <input
            className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
            type="text"
            placeholder="International shipping 6$"
          />
          {/* Payment*/}

          <h2 className="mb-4 pt-6 text-4xl font-medium text-slate-950">
            Payment
          </h2>

          <label className=" text-sm font-medium text-gray-600">
            Card number
          </label>

          <input
            className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
            type="text"
            placeholder=" Card number"
          />
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className=" text-sm font-medium text-gray-600">
                Expiration date
              </label>

              <input
                className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
                type="text"
                placeholder="Expiration date (MM YY)"
              />
            </div>

            <div className=" w-1/2 ">
              <label className=" text-sm font-medium text-gray-600">
                Security code
              </label>

              <input
                className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
                type="text"
                placeholder=" Security code"
              />
            </div>
          </div>

          <label className=" text-sm font-medium text-gray-600">
            Name on the card
          </label>

          <input
            className=" my-4 w-full  rounded-md border bg-gray-100 p-2"
            type="text"
            placeholder=" Name on the card"
          />

          <AddToCartButton className="mb-20 w-full">Pay now</AddToCartButton>
        </form>
      </div>
      <div className="w-1/2  p-4">
        {/* Summary section */}
        <div className="w-[564px] border">
          <div className="mb-4 flex items-center">
            <img
              src="item-image-1.jpg"
              alt="Item 1"
              className="mr-2 h-16 w-16"
            />
            <div>
              <p>Item Name 1</p>
              <p>Weight: 1 lb</p>
              <p>Price: $10.00</p>
            </div>
          </div>
          {/* Repeat the above structure for each item */}
          <div className="mb-4">
            <p>Subtotal: $xx.xx</p>
            <p>Shipping: $xx.xx</p>
            <p>Tax: $x.xx</p>
          </div>
          <div>
            <p>Total: $xxx.xx</p>
          </div>
        </div>
      </div>
    </div>
  )
}

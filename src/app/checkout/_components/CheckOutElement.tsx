import React from 'react'

import Image from 'next/image'
import search from '../../../../public/cof.png'

interface CheckOutElementProps {
  itemName: string
  weight: string
  price: number
  id: number
}

export default function CheckOutElement({
  itemName,
  weight,
  price,
}: CheckOutElementProps) {
  return (
    <div className="mb-6 flex items-center">
      {/* Left side: Picture */}
      <div className="flex justify-center border bg-slate-100">
        <Image
          src={search}
          alt={itemName}
          width={150}
          height={150}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side: Data */}
      <div className="ml-4 w-full ">
        <p className="text-lg font-semibold">{itemName}</p>
        <p className="text-slate-950 text-opacity-50">{` ${weight}.`}</p>
        <div className="mt-10 flex justify-between">
          <p className="mr-20">1pcs</p>
          <p className="text-lg font-semibold">{`$${price.toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  )
}

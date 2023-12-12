'use client'

import React from 'react'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import productImg from '../../../../public/coffee.png'
import heart from '../../../../public/heart_full.svg'

import { IProduct } from '@/models/Products'

interface FavElementProps {
  product: IProduct
}

export default function FavElement({ product }: FavElementProps) {
  return (
    <div className="flex items-center justify-between border-b p-4 pr-0">
      {/* Left side: Picture */}
      <div className="flex justify-center">
        <Image
          src={productImg}
          alt={product.name}
          width={100}
          height={100}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side: Data */}
      <div className="relative ml-4 grow">
        <p className="text-lg font-semibold">{product.name}</p>
        <p
          className={'font-medium text-placeholder'}
        >{` ${product.quantity} g.`}</p>
        <p className="right-0 top-0 text-lg font-semibold sm:absolute">{`$${product?.price?.toFixed(
          2,
        )}`}</p>
        <div className="mt-[22px] flex justify-start">
          <Button className=" bg-white">
            <Image
              src={heart}
              width={24}
              height={24}
              alt="Favourites"
              priority
            />
          </Button>
        </div>
      </div>
    </div>
  )
}

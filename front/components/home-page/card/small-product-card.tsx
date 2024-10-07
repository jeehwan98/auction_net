'use client';

import Link from "next/link";
import productImage from '@/app/favicon.ico';
import Image from "next/image";

interface ProductCardProps {
  productDetails: ProductDetailProps;
}

export default function SmallProductCard({ productDetails }: ProductCardProps) {

  return (
    <div className="flex">
      <div className="border border-gray-400 pt-5 pb-2 px-5 mb-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:opacity-90">
        <div className="max-w-full h-auto mb-2">
          <div className="max-w-full">
            <Link href={`/auction-list/${productDetails.productId}`}>
              <Image
                className="max-w-full h-auto mb-5"
                src={productImage}
                alt="Music Blog Image"
                width={150}
                height={200}
              />
            </Link>
            <p className="text-xl mb-2 font-bold">{productDetails.productName}</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center">
                <Image
                  className="rounded-full"
                  src={productImage}
                  alt='profile picture'
                  height={40}
                />
                <div className="ml-3">by <span className='font-bold'>{productDetails.user.username}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
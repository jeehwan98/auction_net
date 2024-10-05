import Link from "next/link";
import productImage from '@/app/favicon.ico';
import Image from "next/image";

interface ProductCardProps {
  product: ProductDetailProps;  // Adjust this interface as needed
}

export default function ProductCard({ productDetails }: ProductCardProps) {
  console.log('product?:', productDetails);
  return (
    <div className="flex justify-center align-middle">
      <div className="border border-gray-400 p-6 mb-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:opacity-90">
        <div className="max-w-full h-auto mb-2">
          <div className="max-w-full">
            <Link href={`/products/${productDetails.id}`}>
              <Image
                className="max-w-full h-auto mb-4"
                src={productImage}
                alt="Music Blog Image"
                width={300}
                height={350}
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
              <button>
                {/* heart icon needed. if not liked, white heart, if not black heart */}
                <Link href="/blogs/blog-id" className='button-text'>더 읽기</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
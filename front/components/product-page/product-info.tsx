import Image from "next/image";
import productImage from '@/app/favicon.ico';

interface ProductDetailProps {
  productId: number;  // Use the same name as in the backend response
  productName: string;
  status: string;
  description: string;
  startingPrice: number;  // Change to number to match backend
  startDate: string;
  expireDate: string;  // Set to string to match the ISO format in backend
  productImage: string;
  user: {  // Include the complete user structure based on backend response
    id: number;
    userId: string;
    username: string;
    imageUrl: string | null;
  };
  category: {  // Match category structure
    categoryId: number;
    categoryName: string;
  };
}

interface ProductDetailCardProps {
  product: ProductDetailProps;  // Define the interface for the component props
}

export default function ProductDetailCard({ product }: ProductDetailCardProps) {
  console.log(product);
  return (
    <div className="mb-10">
      <Image
        className="mb-10"
        src={productImage}
        width={300}
        height={400}
        alt={`${product.productName}`}
      />
      <div className="text-2xl">
        <div className="flex mb-2">
          Current Bid :
          <div className="font-bold">{ }</div>
        </div>
        <div className="flex mb-2">
          Starting Bid :
          <div className="ml-2 font-bold">{product.startingPrice}</div>
        </div>
        <div className="flex">
          Bid Interval :
          <div className="ml-2 font-bold">$1.00</div>
        </div>
      </div>
    </div>
  )
}
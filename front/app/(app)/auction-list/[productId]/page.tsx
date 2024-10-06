import { fetchSpecificProduct } from "@/api/productAPICalls";
import BiddingInfo from "@/components/product-page/bidding-info";
import ProductDetailCard from "@/components/product-page/product-info";

interface ProductProps {
  params: {
    productId: string
  }
}

export default async function ProductPage({ params }: ProductProps) {
  const product = await fetchSpecificProduct(params.productId);

  return (
    <main className="p-20 text-black min-h-screen bg-gray-50">
      <div className="flex gap-10">
        {/* left */}
        <div className="w-5/12">
          <h1 className="text-3xl mb-10 flex">Auction for
            <div className="font-bold ml-3">
              {product.productName}
            </div>
          </h1>
          <ProductDetailCard product={product} />
        </div>
        {/* right */}
        <div className="w-7/12">
          <h1 className="text-3xl mb-5 font-bold">Current Bids</h1>
          <BiddingInfo />
        </div>
      </div>
    </main>
  );
}

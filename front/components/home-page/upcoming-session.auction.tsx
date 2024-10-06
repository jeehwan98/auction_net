import SmallProductCard from "./card/small-product-card";
import IndividualHeaders from "./header/individual-headers";

interface ProductDetailProps {
  productId: number;
  productName: string;
  status: string;
  description: string;
  startingPrice: number;
  startDate: string;
  expireDate: string;
  productImage: string;
}

interface UpcomingSessionAuctionPage {
  products: ProductDetailProps[];
}

export default function UpcomingSessionAuction({ products }: UpcomingSessionAuctionPage) {
  return (
    <div className="mb-20">
      <IndividualHeaders title="Upcoming" />
      {products.map(productDetail => (
        <SmallProductCard key={productDetail.productId} productDetails={productDetail} />
      ))}
    </div>
  )
}
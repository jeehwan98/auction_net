import ProductCard from "../products-page/product-card";
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

interface ActiveSessionAuctionPage {
  products: ProductDetailProps[];
}


export default function ActiveSessionAuction({ products }: ActiveSessionAuctionPage) {
  return (
    <div className="mb-20">
      <IndividualHeaders title="Active" />
      {products.map(productDetail => (
        <SmallProductCard key={productDetail.productId} productDetails={productDetail} />
      ))}
    </div>
  );
}

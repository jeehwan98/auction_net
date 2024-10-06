import { fetchAllProducts } from "@/api/productAPICalls";
import ProductCard from "@/components/products-page/product-card";

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



export default async function ProductsPage() {

  const productsDetail: ProductDetailProps[] = await fetchAllProducts();

  return (
    <main className="p-20 text-black min-h-screen bg-gray-50">
      <div className="home-page title">
        <h1 className="text-3xl font-bold mb-5">Products for Auction</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 justify-center items-center">
        {productsDetail.map(productDetail => (
          <ProductCard key={productDetail.productId} productDetails={productDetail} />
        ))}
      </div>
    </main>
  )
}
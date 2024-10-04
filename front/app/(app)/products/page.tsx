import { fetchAllProducts } from "@/api/productAPICalls";
import ProductCard from "@/components/product-page/product-card";

interface ProductDetailProps {
  id: number;
  productName: string;
  status: string;
  description: string;
  startingPrice: number;
  expireDate: number[];
  startDate: number[];
  productImage: string;
  category: {
    categoryId: number;
    categoryName: string;
    products: ProductDetailProps[] | null
  }
}

export default async function ProductsPage() {

  const products: ProductDetailProps[] = await fetchAllProducts();
  // const products = await fetchAllProducts();

  return (
    <main className="p-20 text-black min-h-screen bg-gray-50">
      <div className="home-page title">
        <h1 className="text-3xl font-bold mb-5">Products for Auction</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 justify-center items-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
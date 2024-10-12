import { fetchAllProducts } from "@/api/productAPICalls";
import ActiveSessionAuction from "@/components/home-page/active-section-auction"
import ResultSessionAuction from "@/components/home-page/result-session-auction"
import UpcomingSessionAuction from "@/components/home-page/upcoming-session.auction"

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

export default async function HomePage() {

  const productsDetail: ProductDetailProps[] = await fetchAllProducts();

  // console.log(productsDetail);
  const activeProducts = productsDetail.filter((product) => product.status === "active");
  const upcomingProducts = productsDetail.filter((product) => product.status === "upcoming");
  const resultProducts = productsDetail.filter((product) => product.status === "result");

  return (
    // <main className="p-20 text-black min-h-screen bg-gray-50">
    <main className="p-20 text-black min-h-screen bg-gray-50">
      <ActiveSessionAuction products={activeProducts} />
      <UpcomingSessionAuction products={upcomingProducts} />
      <ResultSessionAuction products={resultProducts} />
    </main>
  )
}
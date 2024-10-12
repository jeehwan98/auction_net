'use client';

import { loggedInUser } from "@/api/authAPICalls";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MyAuctionPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserData() {
      const userDetails = await loggedInUser();
      console.log(userDetails);
      if (userDetails.message === 'user not logged in') {
        console.log('🩷');
        setIsAuthenticated(false);
        alert('You have to be logged in');
        router.push('/');
      } else {
        setIsAuthenticated(true);
      }
    }
    fetchUserData();
  }, []);
  return (
    <main className="p-20 text-black min-h-screen bg-gray-50">
      My auction page
    </main>
  )
}
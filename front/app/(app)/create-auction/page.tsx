'use client';

import createProductAction from "@/actions/create-product-action";
import { loggedInUser } from "@/api/authAPICalls";
import RegisterAuctionForm from "@/components/create-auction/register-auction-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function PostPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserData() {
      const userDetails = await loggedInUser();
      console.log(userDetails);
      if (userDetails.message === 'user not logged in') {
        console.log('🩷');
        setIsAuthenticated(false);
        alert('You have to log to create an auction');
        router.push('/');
      } else {
        setIsAuthenticated(true);
      }
    }
    fetchUserData();
  }, []);

  const [formState, formAction] = useFormState(createProductAction, {});

  if (!isAuthenticated) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <main className="p-10 md:p-20 text-black bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-8 text-center">Create New Auction</h1>
        <RegisterAuctionForm />
      </div>
    </main>
  );
}

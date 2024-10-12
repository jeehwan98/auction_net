"use client";

import { loggedInUser } from "@/api/authAPICalls";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface UserProfileProps {
  params: {
    userId: string
  }
}

interface UserProfile {
  id: number;
  userId: string;
  username: string;
  role: string;
  imageUrl: string | StaticImport | undefined;
  userStatus: string;
}

export default function UserPage({ params }: UserProfileProps) {

  const [userInfo, setUserInfo] = useState<UserProfile | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      const userDetails = await loggedInUser();
      if (userDetails.message === 'user not logged in') {
        setUserInfo(null);
      } else {
        console.log(userInfo);
        setUserInfo(userDetails);
      }
    }
    fetchUserData();
  }, []);

  const userId = params.userId;

  if (!userId) {
    notFound();
  }

  return (
    <main className="p-20 text-black bg-gray-50">
      <div>{userId}&apos;s Profile Page</div>
      <div>{userInfo?.username}&apos;s Profile Page</div>
    </main>
  )
}
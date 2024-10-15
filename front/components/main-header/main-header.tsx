"use client";

import Link from "next/link";
import RightLinkHeader from "./links/right-link";
import NavLink from "./links/navlink";
import { useEffect, useState } from "react";
import { loggedInUser } from "@/api/authAPICalls";
import { useRouter } from "next/navigation";
import MainLink from "./links/main-link";

interface UserProfile {
  id: number;
  userId: string;
  username: string;
  role: string;
  imageUrl: string | undefined;
  userStatus: string;
}

export default function Header() {
  const [userInfo, setUserInfo] = useState<UserProfile | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      const userDetails = await loggedInUser();
      if (userDetails.message === 'user not logged in') {
        setUserInfo(null);
      } else {
        setUserInfo(userDetails);
      }
    }
    fetchUserData();
  }, []);

  return (
    <header
      className="flex justify-between items-center px-6 py-4 bg-white"
      style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
    >

      <div className="flex items-center">
        <Link href="/" className='text-black text-2xl font-semibold hover:font-extrabold'>
          Auction Net
        </Link>
      </div>
      <MainLink userInfo={userInfo} />
      <RightLinkHeader userInfo={userInfo} setUserInfo={setUserInfo} />
    </header>
  )
}
"use client";

import Link from "next/link";
import RightLinkHeader from "./links/right-link";
import NavLink from "./links/navlink";
import { useEffect, useState } from "react";
import { loggedInUser } from "@/api/userAPICalls";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface UserProfile {
  id: number;
  userId: string;
  username: string;
  role: string;
  imageUrl: string | StaticImport | undefined;
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
    // <header className="flex justify-between items-center px-6 py-4 bg-white shadow-2xl">
    <header
      className="flex justify-between items-center px-6 py-4 bg-white"
      style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
    >

      <div className="flex items-center">
        <Link href="/" className='text-black text-2xl font-semibold hover:scale-105'>
          Auction Net
        </Link>
      </div>
      <nav className="flex space-x-2 text-gray-700 font-semibold">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/auction-list">All Auctions</NavLink>
        {userInfo && <NavLink href="/create-auction">Create Auction</NavLink>}
        {userInfo && <NavLink href="/my-auctions">My Auctions</NavLink>}
      </nav>
      <RightLinkHeader userInfo={userInfo} setUserInfo={setUserInfo} />
    </header>
  )
}
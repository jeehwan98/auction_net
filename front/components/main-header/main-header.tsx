"use client";

import Link from "next/link";
import RightLinkHeader from "./links/right-link";
import NavLink from "./links/navlink";

export default function Header() {

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-xl">
      <div className="flex items-center">
        <Link href="/" className='text-black text-2xl font-semibold hover:scale-105'>
          Auction Net
        </Link>
      </div>
      <nav className="flex space-x-2 text-gray-700 font-semibold">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/products">All Auctions</NavLink>
        <NavLink href="/post">Create Auction</NavLink>
        <NavLink href="/post">My Auctions</NavLink>
      </nav>
      <RightLinkHeader />
    </header>
  )
}
import Image from "next/image";
import { useEffect, useState } from "react";
import { loggedInUser } from "@/api/userAPICalls";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import NavLink from "./navlink";

interface UserProfile {
  id: number;
  userId: string;
  username: string;
  role: string;
  imageUrl: string | StaticImport | undefined;
  userStatus: string;
}

interface RightLinkHeaderProps {
  userInfo?: UserProfile | null;
}

export default function RightLinkHeader({ userInfo }: RightLinkHeaderProps) {

  return (
    <div className="rounded-full overflow-hidden">
      {userInfo?.userId ? (
        <>
          <Link href={userInfo.userId} className="text-black" >

            <div>{userInfo.username}</div>
            {/* <Image
              src={imageUrl}
              loader={imageLoader}
              alt='profile picture'
              width={50}
              height={50}
              className="rounded-full hover:scale-105"
            /> */}
          </Link>
          {/* <button>Logout</button> */}
        </>
      ) : (
        <nav className="flex text-gray-700 font-semibold">
          <NavLink href='/login'>Login</NavLink>
        </nav>
      )
      }
    </div >
  )
}
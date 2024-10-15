import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./navlink";
import { logoutAPI } from "@/api/authAPICalls";
import { useRouter } from "next/navigation";
import defaultProfileImage from '@/app/defaultImage.jpg';

interface UserProfile {
  id: number;
  userId: string;
  username: string;
  role: string;
  imageUrl: string | undefined;
  userStatus: string;
}

interface RightLinkHeaderProps {
  userInfo?: UserProfile | null;
  setUserInfo?: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

export default function RightLinkHeader({ userInfo, setUserInfo }: RightLinkHeaderProps) {
  console.log('userInfo details:::', userInfo);
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  // dropdown menu
  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  // logout action
  const handleLogout = async () => {
    const logoutResult = await logoutAPI();
    if (logoutResult === 'success') {
      setShowDropdown(false); // hide dropdown
      if (setUserInfo) setUserInfo(null); // clear userInfo
      router.push('/');
      router.refresh();
    }
  };

  function imageLoader(config: any) {
    const urlStart = config.src.split('upload/')[0];
    const urlEnd = config.src.split('upload/')[1];
    const transformations = `w_200,q_${config.quality}`;
    return `${urlStart}upload/${transformations}/${urlEnd}`;
  }

  return (
    <div className="relative">
      {userInfo?.userId ? (
        <>
          <div onClick={handleDropdownToggle} className="cursor-pointer text-black flex items-center space-x-3">
            <div>{userInfo.username}</div>

            {!userInfo.imageUrl && (
              <Image
                src={defaultProfileImage}
                alt={userInfo.username}
                width={30}
                height={30}
                className="rounded-full hover:scale-105"
              />
            )}
            {userInfo.imageUrl && (
              <Image
                src={userInfo.imageUrl}
                loader={imageLoader}
                alt={`${userInfo.username}'s profile picture`}
                width={30}
                height={30}
                className="rounded-full hover:scale-105"
              />
            )}

          </div>

          {/* dropdown menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
              {/* Close dropdown when profile is clicked */}
              <Link
                href={`/${userInfo.userId}`}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setShowDropdown(false)} // Hide dropdown on profile click
              >
                Profile
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <nav className="flex text-gray-700 font-semibold">
          <NavLink href="/login">Login</NavLink>
        </nav>
      )}
    </div>
  );
}

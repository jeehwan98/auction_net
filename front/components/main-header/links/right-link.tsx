// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";
// import NavLink from "./navlink";
// import { logoutAPI } from "@/api/authAPICalls";
// import { useRouter } from "next/navigation";

// interface UserProfile {
//   id: number;
//   userId: string;
//   username: string;
//   role: string;
//   imageUrl: string | StaticImport | undefined;
//   userStatus: string;
// }

// interface RightLinkHeaderProps {
//   userInfo?: UserProfile | null;
//   setUserInfo?: React.Dispatch<React.SetStateAction<UserProfile | null>>;
// }

// export default function RightLinkHeader({ userInfo, setUserInfo }: RightLinkHeaderProps) {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const router = useRouter();

//   const handleDropdownToggle = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   const handleLogout = async () => {
//     const logoutResult = await logoutAPI();
//     if (logoutResult === 'success') {
//       setShowDropdown(false);
//       if (setUserInfo) setUserInfo(null);
//       router.push('/');
//       router.refresh();
//     }
//   }

//   return (
//     <div className="relative">
//       {userInfo?.userId ? (
//         <>
//           <div onClick={handleDropdownToggle} className="cursor-pointer text-black flex items-center space-x-2">
//             <div>{userInfo.username}</div>
//             {/* 
//             <Image
//               src={userInfo.imageUrl}
//               alt="profile picture"
//               width={30}
//               height={30}
//               className="rounded-full hover:scale-105"
//             />
//             */}
//           </div>

//           {/* dropdown menu */}
//           {showDropdown && (
//             <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
//               <Link href={`/${userInfo.userId}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
//                 Profile
//               </Link>
//               <button
//                 className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </>
//       ) : (
//         <nav className="flex text-gray-700 font-semibold">
//           <NavLink href="/login">Login</NavLink>
//         </nav>
//       )}
//     </div>
//   );
// }


import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import NavLink from "./navlink";
import { logoutAPI } from "@/api/authAPICalls";
import { useRouter } from "next/navigation";

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
  setUserInfo?: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

export default function RightLinkHeader({ userInfo, setUserInfo }: RightLinkHeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  // Toggle dropdown visibility
  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  // Handle logout action
  const handleLogout = async () => {
    const logoutResult = await logoutAPI();
    if (logoutResult === 'success') {
      setShowDropdown(false); // Hide dropdown
      if (setUserInfo) setUserInfo(null); // Clear user info
      router.push('/'); // Redirect to home page
      router.refresh(); // Refresh the page
    }
  };

  return (
    <div className="relative">
      {userInfo?.userId ? (
        <>
          <div onClick={handleDropdownToggle} className="cursor-pointer text-black flex items-center space-x-2">
            <div>{userInfo.username}</div>
            {/* 
            <Image
              src={userInfo.imageUrl}
              alt="profile picture"
              width={30}
              height={30}
              className="rounded-full hover:scale-105"
            />
            */}
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

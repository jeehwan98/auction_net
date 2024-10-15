import { useRouter } from "next/navigation";
import { useState } from "react";
import NavLink from "./navlink";
import Link from "next/link";

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
}

export default function MainLink({ userInfo }: RightLinkHeaderProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <nav className="flex space-x-2 text-gray-700 font-semibold relative">
      <NavLink href="/">Home</NavLink>
      <div className="relative">
        <div
          className={`cursor-pointer px-3 py-2 flex items-center space-x-3 hover:text-blue-500 ${showDropdown ? "text-blue-500" : "text-gray-700"
            }`}
          onClick={handleDropdownToggle}
        >
          All Auctions
        </div>
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-auto bg-white border border-gray-200 rounded-md shadow-lg">
            <Link
              href="/auction-list/active"
              className="block px-4 py-2 text-gray-700 hover:text-blue-500"
              onClick={() => setShowDropdown(false)}
            >
              Active
            </Link>
            <Link
              href="/auction-list/ended"
              className="block px-4 py-2 text-gray-700 hover:text-blue-500"
              onClick={() => setShowDropdown(false)}
            >
              Ended
            </Link>
            <Link
              href="/auction-list/ongoing"
              className="block px-4 py-2 text-gray-700 hover:text-blue-500"
              onClick={() => setShowDropdown(false)}
            >
              Ongoing
            </Link>
          </div>
        )}
      </div>

      {userInfo && <NavLink href="/create-auction">Create Auction</NavLink>}
      {userInfo && <NavLink href="/my-auctions">My Auctions</NavLink>}
    </nav>
  );
}

// import NavLink from "./navlink";
// import Link from "next/link";

// interface UserProfile {
//   id: number;
//   userId: string;
//   username: string;
//   role: string;
//   imageUrl: string | undefined;
//   userStatus: string;
// }

// interface RightLinkHeaderProps {
//   userInfo?: UserProfile | null;
// }

// export default function MainLink({ userInfo }: RightLinkHeaderProps) {
//   return (
//     <nav className="flex space-x-2 text-gray-700 font-semibold relative">
//       <NavLink href="/">Home</NavLink>

//       <div className="relative group">
//         <div className="cursor-pointer px-3 py-2 flex items-center space-x-3 text-gray-700 group-hover:text-blue-500">
//           All Auctions
//         </div>
//         {/* Dropdown Menu */}
//         <div className="absolute right-0 mt-2 w-auto bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible group-hover:block">
//           <Link
//             href="/auction-list/active"
//             className="block px-4 py-2 text-gray-700 hover:text-blue-500"
//           >
//             Active
//           </Link>
//           <Link
//             href="/auction-list/ended"
//             className="block px-4 py-2 text-gray-700 hover:text-blue-500"
//           >
//             Ended
//           </Link>
//           <Link
//             href="/auction-list/ongoing"
//             className="block px-4 py-2 text-gray-700 hover:text-blue-500"
//           >
//             Ongoing
//           </Link>
//         </div>
//       </div>

//       {userInfo && <NavLink href="/create-auction">Create Auction</NavLink>}
//       {userInfo && <NavLink href="/my-auctions">My Auctions</NavLink>}
//     </nav>
//   );
// }

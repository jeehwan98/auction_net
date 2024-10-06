// import Link from "next/link";

// export default function ActiveSessionAuction() {
//   return (
//     <div className="mb-20">
//       <div className="flex justify-between">
//         <h1 className="text-3xl mb-5 font-bold">Active Auction</h1>
//         <Link
//           href="auction-list/active"
//           className="hover:font-bold"
//         >To Active Auction</Link>
//       </div>
//       <div>Active Session</div>
//     </div>
//   )
// }

import Link from "next/link";
import IndividualHeaders from "./header/individual-headers";

export default function ActiveSessionAuction() {
  return (
    <div className="mb-20">
      <IndividualHeaders title="Active" />
      <div>Active Session</div>
    </div>
  );
}

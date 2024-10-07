// 'use client';

// import createProductAction from "@/actions/create-product-action";
// import { useFormState } from "react-dom";

// export default function PostPage() {

//   const [formState, formAction] = useFormState(createProductAction, {});

//   return (
//     <main className="p-20 text-black min-h-screen bg-gray-50">
//       <form action={formAction}>
//         <input
//           type="file"
//           placeholder="image"
//           required
//         />
//         <input
//           className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
//           placeholder="Name your product"
//           name="productName"
//         />
//         <input
//           name="bid"
//           type="number"
//           placeholder="Bid"
//           required
//         />
//         <textarea
//           name="descrption"
//           typeof="text"
//           placeholder="Description"
//           required
//         />
//         <input
//           name="expireDate"
//           type="date"
//           placeholder="Expire Date"
//           required
//         />
//         <input
//           name="startDate"
//           type="date"
//           required
//         />
//         <button type="submit">Place Bid</button>
//       </form>
//     </main>
//   )
// }

'use client';

import createProductAction from "@/actions/create-product-action";
import RegisterAuctionForm from "@/components/create-auction/register-auction-form";
import { useFormState } from "react-dom";

export default function PostPage() {
  const [formState, formAction] = useFormState(createProductAction, {});

  return (
    <main className="p-10 md:p-20 text-black min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-8 text-center">Create New Auction</h1>
        <RegisterAuctionForm />
      </div>
    </main>
  );
}

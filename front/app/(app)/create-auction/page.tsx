'use client';

import createProductAction from "@/actions/create-product-action";
import { useFormState } from "react-dom";

export default function PostPage() {

  const [formState, formAction] = useFormState(createProductAction, {});

  return (
    <main className="p-20 text-black min-h-screen bg-gray-50">
      <form action={formAction}>
        <input
          className="w-full p-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Name your product"
          name="productName"
        />
        <input name="bid" type="number" placeholder="Bid" required />
        <button type="submit">Place Bid</button>
      </form>
    </main>
  )
}
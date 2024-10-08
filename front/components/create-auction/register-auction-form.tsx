import createProductAction from "@/actions/create-product-action";
import { fetchAllCategories } from "@/api/categoryAPICalls";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import UploadAuctionImage from "./upload-auction-image";
export default function RegisterAuctionForm() {
  const [formState, formAction] = useFormState(createProductAction, {});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const categoryData = await fetchAllCategories();
      setCategories(categoryData);
    }
    getCategories();
  }, []);

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="image" className="block text-sm font-semibold mb-1">Product Image</label>
        {/* <div className="flex justify-center mb-6"> */}
        <UploadAuctionImage name="productImage" />
        {/* </div> */}
        {/* <input
          type="file"
          accept='image/png, image/jpeg'
          id="image"
          name="productImage"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        /> */}
      </div>
      <div>
        <label htmlFor="productName" className="block text-sm font-semibold mb-1">Product Name</label>
        <input
          id="productName"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Name your product"
          name="productName"
          required
        />
      </div>
      <div>
        <label htmlFor="startingPrice" className="block text-sm font-semibold mb-1">Starting Bid</label>
        <input
          id="startingPrice"
          name="startingPrice"
          type="number"
          placeholder="Enter starting bid"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-semibold mb-1">Product Description</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Write a description of the product"
          required
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-semibold mb-1">Category</label>
        <select
          id="category"
          name="category"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        >
          <option value="">Select a category</option>
          {categories.map((category: any) => (
            <option key={category.categoryId} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="startDate" className="block text-sm font-semibold mb-1">Start Date</label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div>
        <label htmlFor="expireDate" className="block text-sm font-semibold mb-1">Expire Date</label>
        <input
          id="expireDate"
          name="expireDate"
          type="date"
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Place Bid
        </button>
      </div>
    </form>
  );
}

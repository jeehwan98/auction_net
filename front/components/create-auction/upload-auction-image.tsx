// "use client";

// import Image from "next/image";
// import { ChangeEvent, useRef, useState } from "react";

// interface UploadAuctionImageProps {
//   name: string
// }

// export default function UploadAuctionImage({ name }: UploadAuctionImageProps) {
//   const imageInput = useRef<HTMLInputElement>(null);
//   const [pickedImage, setPickedImage] = useState<string | null>(null);

//   function handlePickClick() {
//     imageInput.current?.click();
//   }

//   function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
//     const file = event.target.files?.[0];
//     if (!file) {
//       setPickedImage(null);
//       return;
//     }
//     const fileReader = new FileReader();
//     fileReader.onload = () => {
//       setPickedImage(fileReader.result as string);
//     };
//     fileReader.readAsDataURL(file);
//   }

//   return (
//     <div className="">
//       {/* <label htmlFor='image'>{label}</label> */}
//       <div className="">
//         <div className="">
//           {!pickedImage && <p>사진 등록</p>}
//           {pickedImage && (
//             <Image
//               src={pickedImage}
//               alt='The image selected by the user'
//               fill
//             />
//           )}
//         </div>
//         <input
//           className=""
//           type='file'
//           id='image'
//           accept='image/png, image/jpeg'
//           name={name}
//           ref={imageInput}
//           onChange={handleImageChange}
//           required
//         />
//         <button
//           className=""
//           type="button"
//           onClick={handlePickClick}
//         >
//           Pick an image
//         </button>
//       </div>
//     </div>
//   )
// }

"use client";

import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

interface UploadAuctionImageProps {
  name: string;
}

export default function UploadAuctionImage({ name }: UploadAuctionImageProps) {
  const imageInput = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  function handlePickClick() {
    imageInput.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col items-center">
      {/* Image Preview Container */}
      <div className="w-48 h-48 bg-gray-100 border border-gray-300 rounded-md overflow-hidden mb-4 flex items-center justify-center">
        {!pickedImage ? (
          <span className="text-gray-500">No image selected</span>
        ) : (
          <Image
            src={pickedImage}
            alt="The image selected by the user"
            width={200}  // Fixed width for preview
            height={200} // Fixed height for preview
            className="object-cover"
          />
        )}
      </div>

      {/* Hidden File Input */}
      <input
        className="hidden"
        type="file"
        id="image"
        accept="image/png, image/jpeg"
        name={name}
        ref={imageInput}
        onChange={handleImageChange}
        required
      />

      {/* Button to Trigger File Input */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        type="button"
        onClick={handlePickClick}
      >
        Pick an image
      </button>
    </div>
  );
}

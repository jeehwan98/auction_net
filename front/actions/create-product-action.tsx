import { uploadImage } from "@/lib/cloudinary";
import { registerProductAction } from "./bid-action";

type FormState = {
  message: string;
}

export default async function createProductAction(prevState: FormState, formData: FormData) {
  const productName = formData.get('productName') as string;
  const description = formData.get('description') as string;
  const startingPrice = formData.get('startingPrice');
  const expireDate = new Date(formData.get('expireDate') as string).toISOString().slice(0, 19); // Convert to ISO without milliseconds
  const startDate = new Date(formData.get('startDate') as string).toISOString().slice(0, 19);
  const productImage = formData.get('productImage') as File;

  console.log('💦', productImage);

  const errors: string[] = [];

  if (!productName || productName.trim().length === 0) {
    errors.push("Product Name is required");
  }

  if (!description || description.trim().length === 0) {
    errors.push("Description is required");
  }

  if (!startingPrice) {
    errors.push('Starting Price is required');
  }

  if (!expireDate || !startDate) {
    errors.push("Date has to be set");
  } else if (expireDate <= startDate) {
    errors.push("Expiration Date must be after the Start Date");
  }

  if (!productImage) {
    errors.push("Product image is required.");
  } else if (!['image/jpeg', 'image/png', 'image/gif'].includes(productImage.type)) {
    errors.push("Product image must be a valid image file (jpeg, png, gif).");
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(productImage);
  } catch (error) {
    throw new Error('Image upoad failed, post was not created. Please try again later');
  }

  const registerProductDetails = {
    productName,
    description,
    startingPrice: Number(startingPrice),
    startDate,
    expireDate,
    productImage: imageUrl
  };

  const result = await registerProductAction(registerProductDetails);

  return { message: "Product successfully registered", result };
}
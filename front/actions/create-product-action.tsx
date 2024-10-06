import { registerProduct } from "./bid-action";

type FormState = {
  message: string;
}

export default function createProductAction(prevState: FormState, formData: FormData) {

  const productName = formData.get('productName') as string;
  const description = formData.get('description') as string;
  const startingPrice = formData.get('startingPrice');
  const expireDate = new Date(formData.get('expireDate') as string).toISOString().slice(0, 19); // Convert to ISO without milliseconds
  const startDate = new Date(formData.get('startDate') as string).toISOString().slice(0, 19);
  // const expireDate = formData.get('expireDate') as string;
  // const startDate = formData.get('startDate') as string;
  // const productImage = formData.get('productImage') as File;

  const registerProductDetails = {
    productName,
    // productImage,
    description,
    startingPrice: Number(startingPrice),
    startDate,
    expireDate
  };

  const result = registerProduct(registerProductDetails);
}
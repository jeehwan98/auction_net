type FormState = {
  message: string;
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const HEADERS = {
  'Content-Type': 'application/json',
}

export async function bidAction(prevState: FormState, formData: FormData) {

  console.log(formData.get('bid') as string);
}

interface RegisterProductProps {
  productName: string;
  description: string;
  startingPrice: number;
  expireDate: Date;
  startDate: Date;
  productImage: File;
}

export async function registerProduct(registerProductDetails: FormData) {
  console.log(registerProductDetails);
  try {
    const response = await fetch(`${baseURL}/products`, {
      method: 'POST',
      headers: HEADERS,
      credentials: 'include',
      body: JSON.stringify(registerProductDetails),
    });

    const responseData = response.json();
    console.log('responseData::', responseData);
  } catch (error) {
    throw error;
  }
}
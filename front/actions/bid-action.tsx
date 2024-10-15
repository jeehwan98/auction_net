const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const HEADERS = {
  'Content-Type': 'application/json',
}

interface RegisterProductProps {
  productName: string;
  description: string;
  startingPrice: number;
  expireDate: string;
  startDate: string;
  productImage: string;
}

export async function registerProductAction(registerProductDetails: RegisterProductProps) {
  console.log(registerProductDetails);
  // try {
  //   const response = await fetch(`${baseURL}/products`, {
  //     method: 'POST',
  //     headers: HEADERS,
  //     credentials: 'include',
  //     body: JSON.stringify(registerProductDetails),
  //   });

  //   const responseData = response.json();
  //   console.log('responseData::', responseData);
  // } catch (error) {
  //   throw error;
  // }
}
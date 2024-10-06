const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const HEADERS = {
  'Content-Type': 'application/json',
}

export async function fetchAllProducts() {
  try {
    const response = await fetch(`${baseURL}/products/all`, {
      method: 'GET',
      headers: HEADERS,
      credentials: 'include'
    });

    const responseData = await response.json();
    if (response.ok) {
      return responseData;
    }

  } catch (error) {
    return error;
  }
}

export async function fetchSpecificProduct(productId: string) {
  try {
    const response = await fetch(`${baseURL}/products/${productId}`, {
      method: 'GET',
      headers: HEADERS,
      credentials: 'include'
    });

    const responseData = await response.json();
    if (response.ok) {
      return responseData;
    }
  } catch (error) {
    return error;
  }
}
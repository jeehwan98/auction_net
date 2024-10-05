const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function fetchAllProducts() {
  try {
    const response = await fetch(`${baseURL}/products/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
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
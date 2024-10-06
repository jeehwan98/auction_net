const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const HEADERS = {
  'Content-Type': 'application/json',
}

export async function fetchAllCategories() {
  try {
    const response = await fetch(`${baseURL}/category`, {
      headers: HEADERS,
      credentials: 'include',
    });

    const responseData = await response.json();
    console.log('💦', responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
}
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const HEADERS = {
  'Content-Type': 'application/json',
}

export async function loggedInUser() {
  try {
    const response = await fetch(`${baseURL}/users`, {
      method: 'GET',
      headers: HEADERS,
      credentials: 'include'
    });

    const responseData = await response.json();

    if (response.ok) {
      return responseData;
    }

  } catch (error) {
    throw error;
  }
}


export async function loggedInUser() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include'
    });

    const responseData = await response.json();
    console.log(responseData.message);

    if (response.ok) {
      return responseData;
    }

  } catch (error) {
    throw error;
  }
}

export async function fetchLoggedInUser(userId: string) {

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${userId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': '*/*',
        'Authorization': tokenInfo
      }
    })

    const responseData = await response.json();
    if (response.ok) {
      return responseData;
    }
  } catch (error) {
    throw error;
  }
}
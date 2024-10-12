import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface LoginUserInfoProps {
  userId: string;
  password: string;
}

interface LoginResponse {
  role: string | null;
  message: string | null;
  token: string | null;
  failType: string | null;
}

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const HEADERS = { 'Content-Type': 'application/json' };

export async function loginAPI(loginInfo: LoginUserInfoProps) {
  try {
    const response = await fetch(`${baseURL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(loginInfo)
    });

    const responseData: LoginResponse = await response.json();

    if (responseData.failType) {
      return {
        errors: {
          error: responseData.failType
        }
      };
    }

    if (responseData.message == 'login success') {
      console.log(responseData);
      revalidatePath('/user');
      redirect('/');
      return null;
    }
  } catch (error) {
    throw error;
  }
}

interface RegisterUserProps {
  userId: string;
  username: string;
  password: string;
  // imageUrl: File;
}

export async function registerUserAPI(user: RegisterUserProps) {
  try {
    const response = await fetch(`${baseURL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(user),
    });

    const responseData = await response.json();

    if (response.ok) {
      if (responseData.message === 'register success') {
        revalidatePath('/login');
        redirect('/login');
      }
    }

  } catch (error) {
    throw error;
  }
}

// export async function loggedInUser() {
//   try {
//     const response = await fetch(`${baseURL}/users`, {
//       method: 'GET',
//       headers: HEADERS,
//       credentials: 'include'
//     });


//     const responseData = await response.json();
//     console.log(responseData);

//     // if (response.ok) {
//     //   console.log(responseData);
//     //   return responseData.message;
//     // } else {
//     //   console.log(responseData);
//     //   if (responseData.error === 'user not logged in') {
//     //     console.log('not logged in');
//     //     return null;
//     //   }
//     //   return null;
//     // }
//   } catch (error) {
//     console.log('no error')
//     throw error;
//   }
// }


export async function logoutAPI() {
  try {
    const response = await fetch(`${baseURL}/auth/logout`, {
      method: 'POST',
      headers: HEADERS,
      credentials: 'include'
    });

    if (response.ok) {
      const responseData = await response.json();
      if (responseData.message === 'logout success') {
        return "success";
        // revalidatePath('/');
        // redirect('/');
      }

    }
  } catch (error) {
    throw error;
  }
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
import { SignInRequest } from "../../../../../types/auth";

export async function signIn(data: SignInRequest) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-in`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    next: { tags: ['sign-in'] }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res
}

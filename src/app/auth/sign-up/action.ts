import { SignUpRequest } from "../../../../types/auth"

export async function signUp(data: SignUpRequest) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-up`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ['sign-up'] }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res
}

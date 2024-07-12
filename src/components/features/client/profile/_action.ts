import { UpdateProfileRequest } from "../../../../../types/client/profile"

export async function updateProfile(data: UpdateProfileRequest) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/update`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    next: { tags: ['update-profile'] }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res
}

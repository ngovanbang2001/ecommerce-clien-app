'use client'
import { SignInRequest } from "../../../utils/types/auth"

export async function getProductList(data: SignInRequest) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/list`, {
    method: 'GET',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    next: { tags: ['product'] }
  })

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Failed to fetch data: ${errorMessage}`); 
  }

  return res;
}

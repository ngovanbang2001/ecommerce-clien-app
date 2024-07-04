export async function getInfo() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["get-info"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res;
}

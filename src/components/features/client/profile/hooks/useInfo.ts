import { User } from "@/utils/types";
import { useEffect, useState } from "react";

export const useInfo = () => {
    const [user, setUser] = useState<User>()

    const handleGetInfo = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/info`, {
                method: "GET",
                credentials: 'include',
                next: { tags: ["get-info"] },
            });

            const { user } = await res.json()
            setUser(user)
        }
        catch (error: any) {
            console.error(error?.message)
        }
    }

    useEffect(() => {
        handleGetInfo()
    }, [])

    return {
        user
    }
}
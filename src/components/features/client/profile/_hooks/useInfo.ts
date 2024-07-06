import { useEffect, useState } from "react";
import { User } from "../../../../../../types/common";

export const useInfo = () => {
    const [user, setUser] = useState<User>()

    const handleGetInfo = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/info`, {
                method: "GET",
                credentials: 'include',
                next: { tags: ["get-info"] },
            });

            const user = await res.json()
            setUser(user)
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleGetInfo()
    }, [])

    return {
        user
    }
}
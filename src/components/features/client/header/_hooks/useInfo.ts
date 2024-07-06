'use client'
import { useEffect, useState } from "react";
import { User } from "../../../../../../types/common";
import { useRouter } from "next/navigation";

export const useInfo = () => {
    const [user, setUser] = useState<User>()
    const router = useRouter()

    const handleGetInfo = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/info`, {
                method: "GET",
                credentials: 'include',
                next: { tags: ["get-info"] },
            });

            const user = await res.json()
            console.log({ user });
            setUser(user)
        }
        catch (error) {
            console.error(error)
        }
    }

    const handleSignOut = async() => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-out`, {
                method: "GET",
                credentials: 'include',
            });
        router.push('/auth/sign-in')
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handleGetInfo()
    }, [])

    return {
        user,
        handleSignOut
    }
}
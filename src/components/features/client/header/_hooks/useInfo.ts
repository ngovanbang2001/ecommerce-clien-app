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

            const { user: userRes } = await res.json()
            if(userRes) { 
                setUser(userRes)
            }
        }
        catch (error: any) {
            console.error(error?.message)
        }
    }

    const handleSignOut = async() => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sign-out`, {
                method: "POST",
                credentials: 'include',
            });
        router.push('/auth/sign-in')
        }
        catch (error: any) {
            console.error(error?.message || "")
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
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { User } from '@/utils/types'

interface Store {
  loading: boolean
  user: User | null
  login: (userData: any) => void
  logout: () => void
  setLoading: (isLoading: boolean) => void
}

const useStore = create(
  persist<Store>(
    (set) => ({
      loading: false,
      user: null,
      login: (userData: any) => set({ user: userData }),
      logout: () => set({ user: null }),
      setLoading: (isLoading: boolean) => set({ loading: isLoading }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)

const useStateGlobal = () => {
  const {
    user,
    login,
    logout,
    setLoading,
    loading,
  } = useStore()

  return {
    user,
    login,
    logout,
    setLoading,
    loading,
  }
}

export default useStateGlobal

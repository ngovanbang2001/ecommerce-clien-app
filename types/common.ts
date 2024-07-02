export type NavbarAdmin = {
  title: string
  icon: React.ReactNode
  path: string
}

export type Tab = {
  id: number
  title: string
  icon: React.ReactNode
  content:  React.ReactNode
}

export type User = {
  id: number
  name: string
  email: string
  avatar: string | null
  phoneNumber: string
  role: string
  address: string | null
  icon: React.ReactNode
  content:  React.ReactNode
}
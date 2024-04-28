import Footer from '../basic/footer'
import Header from '../basic/header'

type MainLayoutProps = {
  children: React.ReactElement
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

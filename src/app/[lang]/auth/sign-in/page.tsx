import SignInForm from "@/containers/auth/sign-in"

const SignIn = async({ params: { lang } }: { params: { lang: string } }) => {

  return (
    <SignInForm />
  )
}

export default SignIn

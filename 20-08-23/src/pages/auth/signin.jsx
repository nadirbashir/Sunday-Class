import { Form } from "@/components/form";
import { signIn } from "next-auth/react"
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter(); 

  const onSignIn = async (email, password) => {
    try {
      const data = await signIn('credentials', {redirect: false, email, password})
      console.log(data)
      if(data.ok){
        router.replace('/profile')
      }
    }catch (err) {
      console.log(err.message);
    }
  } 

  return <div className="flex justify-center items-center">
    <Form signIn onFormSubmit={onSignIn} />
  </div>;
}

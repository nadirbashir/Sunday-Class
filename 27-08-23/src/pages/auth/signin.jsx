import { Form } from "@/components/form";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SignIn() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);

  // console.log(status);
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/profile");
      } else {
        setIsLoading(false);
      }
    });
  }, [status]);

  if (isLoading) {
    return <p>...Loading</p>;
  }

  const onSignIn = async (email, password) => {
    const data = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    // console.log(data);
    if (data.ok) {
      router.replace("/profile");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Form signIn onFormSubmit={onSignIn} />
    </div>
  );
}

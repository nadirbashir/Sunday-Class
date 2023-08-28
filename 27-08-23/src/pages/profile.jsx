import { getSession } from "next-auth/react";

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req: req });
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/signin",
      },
    };
  }

  return {
    props: {
      email: session.user.email,
    },
  };
}
export default function Profile() {
  return (
    <div className="h-[70vh] flex items-center justify-center">
      <h1 className="text-3xl font-semibold">My profile page</h1>
    </div>
  );
}

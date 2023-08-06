import Head from "next/head";

export async function getServerSideProps (context) {
    const { params, req, res } = context;
  // can use req/params to fetch specifc data and validate/authorise    

    return {
        props: {
            user: params.uid,
        },
    } 
}

export default function MyProfile (props) {
     const { user } = props
    return (<>
        <Head>
            <title>User Profile</title>
            <meta name="description" content="Second description" key={'1'} />
        </Head>
        <div>{user}</div>
        </>
    )
}
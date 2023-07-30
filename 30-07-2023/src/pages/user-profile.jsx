
export async function getServerSideProps () {

    console.log('just in time server side props ====');
    // if(true){
    //     return {
    //         redirect: {
    //             destination: '/'
    //         }
    //     }
    // }
    return {
        props: {
            userName: 'Nadir'
        },
    }
}

export default function UserProfilePage (props) {
     const { userName } = props
    return (
        <div>{userName}</div>
    )
}
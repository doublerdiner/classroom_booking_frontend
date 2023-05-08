import { useAuth0 } from "@auth0/auth0-react"
const Home = ()=>{
    const {isAuthenticated, user} = useAuth0()

    console.log(user)

    return(
        
        <>
        {isAuthenticated ? 
        <h1>Home</h1>
        :<h1>Not Authenticated</h1>}
        </>
    )
}
export default Home
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"

const Auth0 = ()=>{

    const {loginWithRedirect, isAuthenticated} = useAuth0()

    return(
        <>
        <h1>Classroom System</h1>
        {!isAuthenticated?
        <i>Please Login to continue</i>
        : <></>}
        <LoginButton/>
        <LogoutButton/>
        {isAuthenticated?
        <>
        <button><Link to="/home">Enter</Link></button>
        </>:<></>}
        </>
    )
}
export default Auth0
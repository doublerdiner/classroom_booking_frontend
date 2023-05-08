import { Button, Typography } from "@mui/material"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"

const Auth0 = ()=>{

    const {loginWithRedirect, isAuthenticated} = useAuth0()

    return(
        <>
        <Typography variant="h1">Classroom System</Typography>
        {!isAuthenticated?
        <Typography>Please Login to continue</Typography>
        : <></>}
        <LoginButton/>
        <LogoutButton/>
        {isAuthenticated?
        <>
        <Button variant="outlined"><Link to="/home">Enter</Link></Button>
        </>:<></>}
        </>
    )
}
export default Auth0
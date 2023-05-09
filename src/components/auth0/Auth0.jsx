import { Box, Button, Paper, Typography } from "@mui/material"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom"

const Auth0 = ()=>{

    const {loginWithRedirect, isAuthenticated} = useAuth0()

    return(
        <>
        <div className="bg animate"></div>
        <div className="bg animate bg2"></div>
        <div className="bg animate bg3"></div>
        <div className="login">
        <Paper sx={{
            width: 500,
            height: 250,
            backgroundColor: 'primary.dark',
            padding: "3vh"
            }}>
            <Typography variant="h2" align="center">School Register</Typography>
            {!isAuthenticated?
            <Typography align="center">Please Login to continue</Typography>
            : <></>}
            <div className="center topPadding3vh">
                <LoginButton/>
                <LogoutButton/>
            </div>
            {isAuthenticated?
            <>
            <div className="center topPadding3vh">
                <Button variant="contained" ><Link to="/home" className="buttonLink">Enter</Link></Button>
            </div>
            </>:<></>}
        </Paper>
        </div>
        </>
    )
}
export default Auth0
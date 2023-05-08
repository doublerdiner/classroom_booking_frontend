import { useAuth0 } from "@auth0/auth0-react"
import { Typography } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import Menu from "../menu/Menu"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Home = ()=>{
    const {isAuthenticated, user} = useAuth0()

    return(
        
        <>
        {isAuthenticated ? 
        <>
            <Grid2 container>
                <Grid2 xs={1}>
                    <Menu/>
                </Grid2>
                <Grid2 xs={11}>
                    <Typography variant="h1">Home</Typography>
                    <Routes>
                        <Route></Route>
                    </Routes>
                </Grid2>
            </Grid2>
        </>






        :
        <Typography variant="h1">Not Authenticated</Typography>
        }
        </>
    )
}
export default Home
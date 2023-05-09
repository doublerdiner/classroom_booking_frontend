import { useAuth0 } from "@auth0/auth0-react"
import { Paper, Typography } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import Menu from "../menu/Menu"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const Home = ()=>{
    const {isAuthenticated, user} = useAuth0()

    return(
        
        <>
        {isAuthenticated ? 
        <>
            <div className="bg"></div>
            <div className="bg"></div>
            <Grid2 container>
                <Grid2 xs={12}>
                    <Menu/>
                </Grid2>
                <Grid2 xs={.5}></Grid2>
                <Grid2 xs={11}>
                    <Paper>
                        <Typography>Home</Typography>
                    <Routes>
                        <Route></Route>
                    </Routes>
                    </Paper>
                </Grid2>
                <Grid2 xs={.5}></Grid2>
            </Grid2>
        </>






        :
        <Typography variant="h1">Not Authenticated</Typography>
        }
        </>
    )
}
export default Home
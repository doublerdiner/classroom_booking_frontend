import { useAuth0 } from "@auth0/auth0-react"
import { Paper, Typography } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import Menu from "../menu/Menu"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import Homepage from "./Homepage"
import { useEffect, useState } from "react"
import { getIndex } from "../service/Service"
import { findThisUser} from "../service/Helpers"

const Home = ()=>{
    const {isAuthenticated, user} = useAuth0()
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        const getUser = ()=>{
            getIndex('users').then(data =>{
             const newUser = findThisUser(data, user)
             setCurrentUser(newUser)
            }) 
         }
        getUser()
        
    },[user])



    return(
        
        <>
        {isAuthenticated && currentUser? 
        <>
            <div className="bg"></div>
            <div className="bg"></div>
            <Grid2 container>
                <Grid2 xs={12}>
                    <Menu user={currentUser}/>
                </Grid2>
                <Grid2 xs={.5}></Grid2>
                <Grid2 xs={11}>
                    <Paper sx={{marginTop:"3vh"}}>
                    <Routes>
                        <Route path="/" element={<Homepage user={currentUser}/>}></Route>
                    </Routes>
                    </Paper>
                </Grid2>
                <Grid2 xs={.5}></Grid2>
            </Grid2>
        </>






        :
        <Typography variant="h1">Loading</Typography>
        }
        </>
    )
}
export default Home
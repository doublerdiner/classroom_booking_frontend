import { Typography } from "@mui/material"
import LogoutButton from "../auth0/LogoutButton"

const Menu = ()=>{
    return(
        <>
            <section>
                <Typography sx={{height:'100vh', border:'1px', borderStyle:'solid'}}>Home Menu</Typography>
                <LogoutButton/>
            </section>
        </>
    )
}
export default Menu
import { AppBar, Button, Toolbar, Typography } from "@mui/material"
import LogoutButton from "../auth0/LogoutButton"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';

const Menu = ()=>{
    
    return(
        <>
            <section>
                 <AppBar position="static">
                    <Toolbar variant="dense">
                        <div className="menuIcon">
                                <HomeIcon></HomeIcon>
                                <Typography>Home</Typography>
                        </div>
                        <div className="menuIcon">
                            <SchoolIcon></SchoolIcon>
                            <Typography>Your Lessons</Typography>
                        </div>
                        <div className="menuIcon">
                            <GroupIcon></GroupIcon>
                            <Typography>All Pupils</Typography>
                        </div>
                        <div className="menuIcon">
                            <SettingsIcon></SettingsIcon>
                            <Typography>Settings</Typography>
                        </div>
                        <div className="menuIcon">
                            <LogoutButton/>
                        </div>
                    </Toolbar>
                 </AppBar>
            </section>
        </>
    )
}
export default Menu
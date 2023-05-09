import { AppBar, Button, MenuItem, Toolbar, Typography } from "@mui/material"
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
                                <MenuItem>
                                    <HomeIcon></HomeIcon>
                                    <Typography sx={{paddingLeft:".5rem"}}>Home</Typography>
                                </MenuItem>
                        </div>
                        <div className="menuIcon">
                            <MenuItem>
                                <SchoolIcon></SchoolIcon>
                                <Typography sx={{paddingLeft:".5rem"}}>Your Lessons</Typography>
                            </MenuItem>
                        </div>
                        <div className="menuIcon">
                            <MenuItem>
                                <GroupIcon></GroupIcon>
                                <Typography sx={{paddingLeft:".5rem"}}>All Pupils</Typography>
                            </MenuItem>
                        </div>
                        <div className="menuIcon">
                            <MenuItem>
                                <SettingsIcon></SettingsIcon>
                                <Typography sx={{paddingLeft:".5rem"}}>Settings</Typography>
                            </MenuItem>
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
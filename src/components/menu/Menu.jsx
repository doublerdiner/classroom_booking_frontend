import { AppBar, Button, MenuItem, Toolbar, Typography } from "@mui/material"
import LogoutButton from "../auth0/LogoutButton"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from "react-router-dom";

const Menu = ({user})=>{
    
    return(
        <>
            <section>
                 <AppBar position="static">
                    <Toolbar variant="dense">
                            <div className="menuIcon">
                                    <MenuItem>
                                        <HomeIcon><Link to="/"></Link></HomeIcon>
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
                                    <Typography sx={{paddingLeft:".5rem"}}><Link to="/pupils">All Pupils</Link></Typography>
                                </MenuItem>
                            </div>
                            <div>
                                <Typography variant="h2">School Register</Typography>
                            </div>
                            <div className="spaceRight">
                                <div>
                                    <Typography sx={{paddingTop:"15px"}}>{user.firstName} {user.lastName}</Typography>
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
                            </div>
                    </Toolbar>
                 </AppBar>
            </section>
        </>
    )
}
export default Menu
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
                                    <Link to="">
                                    <MenuItem>
                                        <HomeIcon></HomeIcon>
                                        <Typography sx={{paddingLeft:".5rem"}}>Home</Typography>
                                    </MenuItem>
                                    </Link>
                            </div>
                            <div className="menuIcon">
                                <Link to="lessons">
                                <MenuItem>
                                    <SchoolIcon></SchoolIcon>
                                    <Typography sx={{paddingLeft:".5rem"}}>Your Lessons</Typography>
                                </MenuItem>
                                </Link>
                            </div>
                            <div className="menuIcon">
                                <Link to="pupils">
                                <MenuItem>
                                    <GroupIcon></GroupIcon>
                                    <Typography sx={{paddingLeft:".5rem"}}>All Pupils</Typography>
                                </MenuItem>
                                </Link>
                            </div>
                            <div>
                                <Typography variant="h2">School Register</Typography>
                            </div>
                            <div className="spaceRight">
                                <div>
                                    <Typography sx={{paddingTop:"15px"}}>{user.firstName} {user.lastName}</Typography>
                                </div>
                                <div className="menuIcon">
                                    <Link to="settings">
                                    <MenuItem>
                                        <SettingsIcon></SettingsIcon>
                                        <Typography sx={{paddingLeft:".5rem"}}>Settings</Typography>
                                    </MenuItem>
                                    </Link>
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
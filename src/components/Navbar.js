import { Link } from "react-router-dom";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { BottomNavigationAction, BottomNavigation } from "@mui/material";
import VideocamIcon from '@mui/icons-material/Videocam';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
    const [value, setValue] = React.useState(0);

    return ( 
        
        <>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#6D9BF3' }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}>
                <BottomNavigationAction icon={<HomeIcon />}
                component={Link}
                to='/home'
                />
                <BottomNavigationAction icon={<VideocamIcon />} 
                component={Link}
                to='/blog-list'
                />
                <BottomNavigationAction icon={<NotificationsIcon />} 
                component={Link}
                to='/'
                />
                <BottomNavigationAction icon={<PersonIcon />} 
                component={Link}
                to='/'
                />
            </BottomNavigation>
      </Paper>
        </>
     );
}

export default Navbar;
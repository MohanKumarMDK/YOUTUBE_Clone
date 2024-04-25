import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import './Menu.css'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RestoreIcon from '@mui/icons-material/Restore';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


const Menu = ({setSidebar,}) => {
    const [state, setState] = React.useState({
        left: false,   
      });
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setState({ ...state, [anchor]: open });
      };
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <MenuIcon onClick={()=>setSidebar(prev=>prev===false?true:false)}/>
                    <div className='search-logo'>
        <img   src='https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg' alt='logo' /></div>
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>
          </List>
            
        <Divider />
          <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <WhatshotSharpIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Trending"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <SubscriptionsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Subscriptions"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <SportsEsportsIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Gaming"}/>
                </ListItemButton>
            </ListItem>
          </List>
          
          <Divider />
          <List>
          <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <PlayCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Library"}/>
                </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <RestoreIcon />
                    </ListItemIcon>
                    <ListItemText primary={"History"}/>
                </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <PlaylistPlayIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Playlist"}/>
                </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <WatchLaterIcon />
                    </ListItemIcon>
                    <ListItemText primary={"WatchLater"}/>
                </ListItemButton>
            </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <ThumbUpOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Liked videos"}/>
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <SettingsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Settings"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <OutlinedFlagRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Report History"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <HelpOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Help"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
                    <ListItemIcon>
                    <FeedbackOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Send Feedback"}/>
                </ListItemButton>
            </ListItem>
          </List>
        </Box>
      );


  return (
    <div className='menu-bar'>

      <React.Fragment>
        <MenuIcon onClick={toggleDrawer("left",true)}/>
        <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)} >
            {list("left")}
          </Drawer>
      </React.Fragment>
    </div>
  )
}

export default Menu
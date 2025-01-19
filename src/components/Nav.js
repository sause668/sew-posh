import { ButtonGroup, IconButton, Tooltip, useMediaQuery, Menu, MenuItem, MenuList } from "@mui/material";
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import ReviewsIcon from '@mui/icons-material/Reviews';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
    const mobile = useMediaQuery('(min-width:1000px)');
    const router = useRouter()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <div  >
            {!mobile ? (<div>
            {/* Mobile Menu Button */}
            <ButtonGroup 
                orientation="vertical" 
                sx={{
                    position: 'fixed',
                    zIndex: '99',
            }}>
                <div style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'black',
                        borderRadius: '10px'
                }}/>
                <IconButton color="primary" size="large" onClick={handleMenuClick} >
                    <MenuIcon fontSize="large"/>
                </IconButton>
            </ButtonGroup>
            {/* Mobile Menu */}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        backgroundColor: 'black',
                        color: 'primary.main',
                        borderRadius: '7px',
                    }
                  }}
            >
                <MenuItem 
                    component={Link}  
                    href='/'
                >
                    <HomeIcon/>
                    Profile
                </MenuItem>
                <MenuItem 
                    component={Link}  
                    href='/gallary'
                >
                    <CollectionsIcon/>
                    Gallery
                </MenuItem>
                <MenuItem 
                    component={Link}  
                    href='/reviews'
                >
                    <ReviewsIcon/>
                    Reviews
                </MenuItem>
                <MenuItem 
                    component={Link}  
                    href='/about'
                >
                    <InfoIcon/>
                    About
                </MenuItem>
                {/* <MenuItem 
                    component={Link}  
                    href='https://sewposh-upholstery.squarespace.com/book-now'
                >
                    <CalendarMonthIcon/>
                    Appointment
                </MenuItem> */}
            </Menu>
            {/* Mobile Links */}
            <ButtonGroup sx={{
                    position: 'fixed',
                    right: '0px',
                    zIndex: '98',
            }}>
                <div style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'black',
                        borderRadius: '10px'
                }}/>
                <IconButton color="primary" href="https://www.instagram.com/sewposhdesignandupholstery" >
                    <InstagramIcon fontSize="large"/>
                </IconButton>
                <IconButton color="primary" href="https://www.facebook.com/sewposhdesignandupholstery">
                    <FacebookIcon fontSize="large"/>
                </IconButton>
            </ButtonGroup>
            </div>) : (<div>
            {/* Links */}
            <ButtonGroup 
                orientation="vertical" 
                sx={{
                    position: 'fixed',
                    top: '5%',
                    zIndex: '99',
            }}>
                <div style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'black',
                        opacity: '.8',
                        borderRadius: '10px'
                }}/>
                <IconButton color="primary" href="https://www.instagram.com/sewposhdesignandupholstery" >
                    <InstagramIcon fontSize="large"/>
                </IconButton>
                <IconButton color="primary" href="https://www.facebook.com/sewposhdesignandupholstery">
                    <FacebookIcon fontSize="large"/>
                </IconButton>
            </ButtonGroup>
            {/* Menu */}
            <MenuList 
                sx={{
                    position: 'fixed',
                    top: '50%',
                    transform: 'translate(0%, -50%)',
                    color: 'primary.main',
                    borderRadius: '7px',
                    zIndex: '99',
                }}
            >
                <div style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'black',
                        opacity: '.8',
                        borderRadius: '7px'
                     }}/>
                <MenuItem 
                    component={Link}  
                    href='/'
                    selected={(router.asPath == '/') ? true : false}
                >
                    <Tooltip placement="right" title='Home'>
                       <HomeIcon/>
                    </Tooltip>
                </MenuItem>
                <MenuItem 
                    component={Link}  
                    href='/gallary'
                    selected={(router.asPath == '/gallary') ? true : false}
                >
                    <Tooltip placement="right" title='Gallery'>
                        <CollectionsIcon/>
                    </Tooltip>
                </MenuItem>
                <MenuItem 
                    component={Link}  
                    href='/reviews'
                    selected={(router.asPath == '/reviews') ? true : false}
                >
                    <Tooltip placement="right" title='Reviews'>
                        <ReviewsIcon/>
                    </Tooltip>
                </MenuItem>
                <MenuItem 
                    component={Link}  
                    href='/about'
                    selected={(router.asPath == '/about') ? true : false}
                >
                    <Tooltip placement="right" title='About'>
                        <InfoIcon/>
                    </Tooltip>
                </MenuItem>
                {/* <MenuItem 
                    component={Link}  
                    href='https://sewposh-upholstery.squarespace.com/book-now'
                    selected={(router.asPath == '/appointment') ? true : false}
                >
                    <Tooltip placement="right" title='Appointment'>
                        <CalendarMonthIcon/>
                    </Tooltip>
                </MenuItem> */}
            </MenuList>
            </div>)}
        </div>
        //</Container>
    );
}
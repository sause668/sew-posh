import { Button, ButtonGroup, IconButton, Link, Tooltip, useMediaQuery, Menu, MenuItem, MenuList } from "@mui/material";
import { useState, useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import ReviewsIcon from '@mui/icons-material/Reviews';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import Home from "./Home";

export default function Nav() {
    const mobile = useMediaQuery('(min-width:1000px)');
    const [section, setSection] = useState('Home');
    const [menu, setMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    function scroll(id) {
        var elm = document.getElementById(id);
        elm.scrollIntoView({behavior: "smooth"}); 
    }
    
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
        const handleScroll = (event) => {
            var home = document.getElementById('Home');
            var gallary = document.getElementById('Gallary');
            var reviews = document.getElementById('Reviews');
            var about = document.getElementById('About');
            var appointment = document.getElementById('Appointment');
            var contact = document.getElementById('Contact');
            let scroll = window.scrollY + window.innerHeight*.3;

            if (home.offsetTop < scroll && scroll < gallary.offsetTop) {
                setSection('Home');
            }else if (gallary.offsetTop < scroll && scroll<reviews.offsetTop) {
                setSection('Gallary');
            }else if (reviews.offsetTop < scroll && scroll<about.offsetTop) {
                setSection('Reviews');
            }else if (about.offsetTop < scroll && scroll<appointment.offsetTop) {
                setSection('About');
            }else if (appointment.offsetTop < scroll && scroll<contact.offsetTop-200) {
                setSection('Appointment');
            }else if (contact.offsetTop-200 < scroll) {
                setSection('Contact');
            }
        
        };
    
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
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
                <MenuItem onClick={()=>scroll('Home')} selected={(section=="Home") ? true : false}>
                    <HomeIcon/>
                    Profile
                </MenuItem>
                <MenuItem onClick={()=>scroll('Gallary')} selected={(section=="Gallary") ? true : false}>
                    <CollectionsIcon/>
                    Gallary
                </MenuItem>
                <MenuItem onClick={()=>scrollTo('Reviews')} selected={(section=="Reviews") ? true : false}>
                    <ReviewsIcon/>
                    Reviews
                </MenuItem>
                <MenuItem onClick={()=>scroll('About')} selected={(section=="About") ? true : false}>
                    <InfoIcon/>
                    About
                </MenuItem>
                <MenuItem onClick={()=>scroll('Appointment')} selected={(section=="Appointment") ? true : false}>
                    <CalendarMonthIcon/>
                    Appointment
                </MenuItem>
                <MenuItem onClick={()=>scroll('Contact')} selected={(section=="Contact") ? true : false}>
                    <CallIcon/>
                    Contact
                </MenuItem>
            </Menu>
            {/* Mobile Links */}
            <ButtonGroup sx={{
                    position: 'fixed',
                    right: '0px',
                    // right: menu ? '0px':'-300px',
                    // transition: 'right 0.3s',
                    zIndex: '98',
            }}>
                <div style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'black',
                        borderRadius: '10px'
                }}/>
                <IconButton color="primary"  >
                    <Link href="https://www.instagram.com/sewposhdesignandupholstery">
                        <InstagramIcon fontSize="large"/>
                    </Link>
                </IconButton>
                <IconButton color="primary">
                    <Link href="https://www.facebook.com/sewposhdesignandupholstery">
                        <FacebookIcon fontSize="large"/>
                    </Link>
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
                <IconButton color="primary"  >
                    <Link href="https://www.instagram.com/sewposhdesignandupholstery">
                        <InstagramIcon fontSize="large"/>
                    </Link>
                </IconButton>
                <IconButton color="primary">
                    <Link href="https://www.facebook.com/sewposhdesignandupholstery">
                        <FacebookIcon fontSize="large"/>
                    </Link>
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
                <MenuItem onClick={()=>scroll('Home')} selected={(section=="Home") ? true : false}>
                    <Tooltip placement="right" title='Home'>
                       <HomeIcon/> 
                    </Tooltip>
                </MenuItem>
                <MenuItem onClick={()=>scroll('Gallary')} selected={(section=="Gallary") ? true : false}>
                    <Tooltip placement="right" title='Gallary'>
                        <CollectionsIcon/>
                    </Tooltip>
                </MenuItem>
                <MenuItem onClick={()=>scroll('Reviews')}selected={(section=="Reviews") ? true : false}>
                    <Tooltip placement="right" title='Reviews'>
                        <ReviewsIcon/>
                    </Tooltip>
                </MenuItem>
                <MenuItem onClick={()=>scroll('About')}selected={(section=="About") ? true : false}>
                    <Tooltip placement="right" title='About'>
                        <InfoIcon/>
                    </Tooltip>
                </MenuItem>
                <MenuItem onClick={()=>scroll('Appointment')}selected={(section=="Appointment") ? true : false}>
                    <Tooltip placement="right" title='Appointment'>
                        <CalendarMonthIcon/>
                    </Tooltip>
                </MenuItem>
                <MenuItem onClick={()=>scroll('Contact')}selected={(section=="Contact") ? true : false}>
                    <Tooltip placement="right" title='Contact'>
                        <CallIcon/>
                    </Tooltip>
                </MenuItem>
            </MenuList>
            </div>)}
        </div>
        //</Container>
    );
}
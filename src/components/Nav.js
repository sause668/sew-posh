import { Button, ButtonGroup, IconButton, Link, Tooltip, useMediaQuery } from "@mui/material";
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

export default function Nav() {
    const mobile = useMediaQuery('(min-width:700px)');
    const [section, setSection] = useState('Home');
    const [menu, setMenu] = useState(false);

    function scroll(id) {
        var elm = document.getElementById(id);
        elm.scrollIntoView({behavior: "smooth"}); 
    }

    function toggleMenu() {
        if (menu) {
            setMenu(false);
        }else {
            setMenu(true);
        }
    }
    
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
                <IconButton color="primary" size="large" onClick={toggleMenu} >
                    <MenuIcon fontSize="large"/>
                </IconButton>
            </ButtonGroup>
            {/* Mobile Links */}
            <ButtonGroup sx={{
                    position: 'fixed',
                    right: menu ? '0px':'-300px',
                    transition: 'right 0.3s',
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
            {/* Mobile Menu */}
            <ButtonGroup 
                orientation="vertical" 
                sx={{
                    position: 'fixed',
                    top: menu ? '59px':'-1000px',
                    transition: 'top 0.3s',
                    zIndex: '97',
                }} >
                    <div style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'black',
                        opacity: '.8',
                        borderRadius: '7px'
                     }}/>
                
                <Button 
                    onClick={()=>scroll('Home')} 
                    variant={(section=="Home") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='Home'>
                       <HomeIcon/> 
                    </Tooltip>
                </Button>
                <Button 
                    onClick={()=>scroll('Gallary')} 
                    variant={(section=="Gallary") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='Gallary'>
                        <CollectionsIcon/>
                    </Tooltip>
                </Button>
                <Button 
                    onClick={()=>scroll('Reviews')}
                    variant={(section=="Reviews") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='Reviews'>
                        <ReviewsIcon/>
                    </Tooltip>
                </Button>
                <Button 
                    onClick={()=>scroll('About')}
                    variant={(section=="About") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='About'>
                        <InfoIcon/>
                    </Tooltip>
                </Button>
                <Button 
                    onClick={()=>scroll('Appointment')}
                    variant={(section=="Appointment") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='Appointment'>
                        <CalendarMonthIcon/>
                    </Tooltip>
                </Button>
                <Button 
                    onClick={()=>scroll('Contact')}
                    variant={(section=="Contact") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='Contact'>
                        <CallIcon/>
                    </Tooltip>
                </Button>
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
            <ButtonGroup 
                orientation="vertical" 
                sx={{
                    position: 'fixed',
                    top: '50%',
                    transform: 'translate(0%, -50%)',
                    zIndex: '99',
                }} >
                    <div style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'black',
                        opacity: '.8',
                        borderRadius: '7px'
                     }}/>
                <Button 
                    onClick={()=>scroll('Home')} 
                    variant={(section=="Home") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='Home'>
                       <HomeIcon/> 
                    </Tooltip>
                </Button>
                <Button 
                    onClick={()=>scroll('Gallary')} 
                    variant={(section=="Gallary") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='Gallary'>
                        <CollectionsIcon/>
                    </Tooltip>
                </Button>
                <Button 
                    onClick={()=>scroll('Reviews')}
                    variant={(section=="Reviews") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='Reviews'>
                        <ReviewsIcon/>
                    </Tooltip>
                </Button>
                <Button 
                    onClick={()=>scroll('About')}
                    variant={(section=="About") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='About'>
                        <InfoIcon/>
                    </Tooltip>
                </Button>
                <Button 
                    onClick={()=>scroll('Appointment')}
                    variant={(section=="Appointment") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='Appointment'>
                        <CalendarMonthIcon/>
                    </Tooltip>
                </Button>
                <Button 
                    onClick={()=>scroll('Contact')}
                    variant={(section=="Contact") ? 'contained' : 'outlined'}
                >
                    <Tooltip placement="right" title='Contact'>
                        <CallIcon/>
                    </Tooltip>
                </Button>
            </ButtonGroup>
            </div>)}
        </div>
        //</Container>
    );
}
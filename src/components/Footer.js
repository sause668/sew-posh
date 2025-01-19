import { Container, Grid, Typography, ButtonGroup, IconButton, Link } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from "@mui/system";

export default function Footer() {

    const linkData = [
        {id: 'home', title: 'Home', link: '/'},
        {id: 'gallary', title: 'Gallery', link: '/gallary'},
        {id: 'reviews', title: 'Reviews', link: '/reviews'},
        {id: 'about', title: 'About', link: '/about'},
        // {id: 'appointment', title: 'Book Now', link: 'https://sewposh-upholstery.squarespace.com/book-now'},
    ]

    return (
        <Container sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            mt: 6
        }} >
            <Grid container spacing={2} sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
            }}>
                <Grid item xs={12} sm={8} md={7} lg={7} xl={7} sx={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: 'center',
                    backgroundColor: 'black',
                    borderRadius: '5px',
                    marginTop: '10px',
                    marginBottom: '60px',
                }}>
                    <Typography variant="h4" color="primary" align="center" >{`SEW POSH DESIGN & UPHOLSTERY`}</Typography>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        mb: 1,
                    }}>
                        {linkData.map((data)=>(
                            <Link 
                                key={`${data.id}foot`}
                                href={data.link}
                                variant='h6'
                                sx={{
                                    mx: {xs: .4, sm: .7, md: 1},
                            }}>{data.title}</Link>
                        ))}
                    </Box>
                    <Typography variant="h5" color="white" align="center" >
                        <>
                        INFO@SEWPOSHDESIGN.COM
                        <br/>
                        561-600-8415
                        <br/>
                        <ButtonGroup sx={{
                            zIndex: '99',
                        }}>
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
                        </>
                    </Typography>
                </Grid>  
            </Grid>
        </Container>
    );
}
import { Container, Grid, Typography, ButtonGroup, IconButton, Link } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Contact() {
    return (
        <div id="Contact" >
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
            }} >
                <Grid container spacing={2} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                }}>
                    {/* Title */}
                    <Grid item xs={9} sm={7} md={6} lg={6} xl={6} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        marginTop: '60px',
                        borderRadius: '100px',
                    }}>
                        <Typography variant="h2" color="primary" align="center" >CONTACT US!</Typography>
                    </Grid>
                    {/* Info */}
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
        </div>
    );
}
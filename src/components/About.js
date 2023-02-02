import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

export default function About() {
    const mobile = useMediaQuery('(min-width:1000px)');
    const phone = useMediaQuery('(min-width:600px)');

    function logoSize() {
        let height = 701;
        let width = 586;
        if (!mobile) {
            if (!phone) {
                height *= .5;
                width *= .5;
            }else {
                height *= .625;
                width *= .625;
            }
        }else {
            height *= .75;
            width *= .75;
        }
        return {height: height, width: width};
    }

    return (
        <div id="About" >
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
                    <Grid item xs={12} sm={9} md={7} lg={6} xl={7} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        marginTop: '60px',
                        borderRadius: '100px',
                    }}>
                        <Typography variant="h2" color="primary" align="center" >ABOUT SEW POSH</Typography>
                    </Grid>
                    {/* Title Discription */}
                    <Grid item xs={11} sm={10} md={10} lg={11} xl={11} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        borderRadius: '10px',
                        marginTop: '10px',
                    }}>
                        <Typography variant="h6" color="white" align="center" >WE WALK YOU THROUGH EVERY STEP OF YOUR DESIGN PROJECT! EACH CLIENT GETS A CHANCE TO SIT WITH OUR DESIGNER TO HELP DESIGN AND SELECT YOUR NEW DECOR FOR YOUR HOME/BOAT UPHOLSTERY PROJECT OR CUSTOM MADE CLOTHING!</Typography>
                    </Grid>  
                    {/* Profile Picture */}
                    <Grid item xs={10} sm={12} md={6} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        borderRadius: '5px',
                        marginTop: '10px',
                    }}>
                        <Image 
                            src='/about/ari.jpg' 
                            width={logoSize().width} 
                            height={logoSize().height} 
                            alt="Gallery Zoom Pic"
                            style={{borderRadius: '10px'}} 
                        />
                    </Grid> 
                    {/* Profile Info */}
                    <Grid item xs={11} sm={10} md={6} sx={{
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        borderRadius: '10px',
                        marginTop: '10px',
                    }}>
                        <Typography variant="h4" color="primary" align="center" >MEET ARI</Typography>
                        <Typography variant="h5" color="secondary" align="center" >FOUNDER OF SEWPOSH DESIGN AND UPHOLSTERY</Typography>
                        <br/>
                        <br/>
                        <Typography variant="h6" color="white" align="center" >
                            <div>
                                SEAMSTRESS FROM THE AGE OF 3, ARI HAS TURNED HER TALENT INTO A SERVICE THAT DOES NOT START WITH JUST A QUOTE.
                                <br/>
                                <br/>
                                THE SEW POSH EXPERIENCE INVOLVES YOU EVERY STEP OF THE WAY FROM COLOR CHOICES, TO FABRIC CHOICES, YOU WILL NEVER BE LEFT IN THE DARK.
                            </div>
                        </Typography>
                    </Grid>                 
                </Grid>
            </Container>
            
        </div>

    );
}
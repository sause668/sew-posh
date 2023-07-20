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
                        <Typography variant="h6" color="white" align="center" >
                            {/* <div>
                                SEAMSTRESS FROM THE AGE OF 3, ARI HAS TURNED HER TALENT INTO A SERVICE THAT DOES NOT START WITH JUST A QUOTE.
                                <br/>
                                <br/>
                                THE SEW POSH EXPERIENCE INVOLVES YOU EVERY STEP OF THE WAY FROM COLOR CHOICES, TO FABRIC CHOICES, YOU WILL NEVER BE LEFT IN THE DARK.
                            </div> */}
                            {/* <div>
                                ARI’S PASSION FOR THE ARTISTIC WORLD CAN BE TRACED BACK TO THE AGE OF 3, WHEN SHE FIRST BECAME ENAMORED WITH THE WORK OF SEAMSTRESSES. HER LOVE FOR THE CRAFT ONLY FLOURISHED WITH AGE AND WOULD GROW TO INCLUDE ASPECTS OF DESIGN AND REPAIR. 
                                <br/>
                                <br/>
                                NOW AN ACCOMPLISHED SEAMSTRESS AND UPHOLSTERER, ARI HAS WORKED ALONGSIDE CREATIVES FROM BOTH FIELDS, HAVING RESTORED COUNTLESS PIECES OF FURNITURE AND EVEN PRODUCING A LINE OF GARMENTS FOR A RUNWAY. 
                                <br/>
                                <br/>
                                FOR ARI, IT IS NOT JUST ABOUT A QUOTE: SHE PRIDES HERSELF ON PROVIDING HER CLIENTS WITH A COLLABORATIVE EXPERIENCE EVERY STEP OF THE WAY. FROM COLOR SAMPLES TO FABRIC CHOICES, YOU WILL NEVER BE LEFT IN THE DARK AT SEW POSH DESIGN AND UPHOLSTERY.
                            </div> */}
                            <div>
                                Ari’s passion for the artistic world can be traced back to the age of 3, when she first became enamored with the work of seamstresses. Her love for the craft only flourished with age and would grow to include aspects of design and repair.
                                <br/>
                                <br/>
                                Now an accomplished seamstress and upholsterer, Ari has worked alongside creatives from both fields, having restored countless pieces of furniture and even producing a line of garments for a runway. 
                                <br/>
                                <br/>
                                For Ari, it is not just about a quote: she prides herself on providing her clients with a collaborative experience every step of the way. From color samples to fabric choices, you will never be left in the dark at sew posh design and upholstery.
                            </div>
                        </Typography>
                    </Grid>                 
                </Grid>
            </Container>
            
        </div>

    );
}
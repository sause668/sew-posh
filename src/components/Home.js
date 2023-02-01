import { Container, Grid, Typography, useMediaQuery, Card, CardMedia, CardContent, Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
    const mobile = useMediaQuery('(min-width:1000px)');
    const phone = useMediaQuery('(min-width:600px)');

    function logoSize() {
        let height = 370;
        let width = 500;
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

    function scroll(id) {
        var elm = document.getElementById(id);
        elm.scrollIntoView({behavior: "smooth"}); 
    }

    const homeData = [
        {id: 1, img: '/home-img/home11.jpg', title: 'DINING SETS', info: (<>It all begins with an idea. Maybe you want to refresh the cushions on your dining room set. Or perhaps you want a complete new look!<br/><br/>Sew Posh Design and Upholstery will walk you through your design choices from a simple fabric change to a full refinish, including painting, piping and much more!!</>)},
        {id: 2, img: '/home-img/home22.jpg', title: 'OUTDOOR PILLOWS AND CUSHIONS', info: (<>Sew Posh Design and Upholstery has access to industry leading Sunbrella® Products.<br/><br/>Sunbrella® Products come with a wide selction of stainand mold resistant fabrics to make your outdoor project last a lifetime!</>)},
        {id: 3, img: '/home-img/home33.jpg', title: 'REPAIRS', info: (<>Torn Pillow? Broken zipper? Soggy cushions? NO PROBLEM!!<br/><br/>Sew Posh Design and Upholstery is here to the rescue!<br/><br/>CALL NOW FOR ALL YOUR REPAIR NEEDS!</>)},
        {id: 4, img: '/home-img/home44.jpg', title: 'SOFAS AND LOVE SEATS', info: (<>No Project is too big or small for Sew Posh Design and Upholstery!<br/><br/>From a Love seat to a sofa to a tufted ottoman, we are in your corner.</>)},
        {id: 5, img: '/home-img/home55.jpg', title: 'HEADBOARDS', info: (<>Whether its a simple change or an elegant upgrade, Sew Posh Design and Upholstery can handle it.<br/><br/>nAsk about our tufting technique!</>)},
        {id: 6, img: '/home-img/home66.jpg', title: 'BOAT UPHOLSTERY', info: (<>Sew Posh Design and Upholstery has a broad expertise from Land To Sea.<br/><br/>Ask about our Boat Upholstery!</>)},
    ]

    return (
        <div id="Home" style={{backgroundImage: 'url("/wp-50.png")',}}>
            {/* Logo & Title */}
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
            }} >
                <Grid 
                    container 
                    spacing={2} 
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                    }}
                >
                    <Grid item xs={12} sx={{
                        marginTop: '50px',
                        marginBottom: '20px',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                        <Image src='/sew-posh2.png' width={logoSize().width} height={logoSize().height}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={10} lg={9} xl={8} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        opacity: '.97',
                        borderRadius: '100px',
                    }}>
                        <Typography variant="h2" color="primary" align="center" >TAKING YOUR PROJECTS FROM</Typography>
                    </Grid>
                    <Grid item xs={10} sm={12} md={10} lg={9} xl={8} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        opacity: '.97',
                        borderRadius: '100px',
                    }}>
                            <Typography variant="h1" color="primary" align="center" >POOR TO POOSH!</Typography>
                    </Grid>
                </Grid>
            </Container>
            <br/>
            {/* Book Now Button */}
            <Container sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                    }} >
                <Button variant="contained" onClick={()=>scroll('Appointment')} ><Typography variant="h6"  >Book Now!</Typography></Button>
            </Container>
            {/* Uphostery Info Title */}
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
            }} >
                <Grid 
                    container 
                    spacing={2} 
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                }}>
                    <Grid item xs={10} sm={10} md={7} lg={6} xl={5} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        opacity: '.98',
                        borderRadius: '100px',
                        marginTop: '60px',
                    }}>
                        <Typography variant="h2" color="secondary" align="center" >MAKE IT STAND OUT! </Typography>
                    </Grid>
                </Grid>
            </Container>
            <br/>
            {/* Uphostery Info */}
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: 'center',
            }} >
                <Grid 
                    container 
                    spacing={2} 
                    columns={13}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                }}>
                    
                    {homeData.map((data)=>(
                        <Grid item xs={13} sm={6} md={6} lg={4} key={data.id} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <Card sx={{ maxWidth: 345, borderRadius: '25px',}}>
                                <CardMedia
                                    sx={{ height: 270, }}
                                    image={data.img}
                                    title={data.title}
                                />
                                <CardContent sx={{
                                    backgroundColor: 'black', 
                                }} >
                                    <Typography gutterBottom variant="h5" color='secondary' align="center" component="div">
                                    {data.title}
                                    </Typography>
                                    <Typography variant="body1" color="white" align="center">
                                    {data.info}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
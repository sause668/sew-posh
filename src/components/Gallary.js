import { Button, Container, Grid, Typography, useMediaQuery, Dialog, Card, CardMedia, } from "@mui/material";
import Carousel, { CarouselItem } from "./Carousel";
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from "react";

export default function Gallary({catPage}) {
    const caro = useMediaQuery('(min-width:1150px)');
    const mobile = useMediaQuery('(min-width:1000px)');
    const phone = useMediaQuery('(min-width:700px)');
    const phoneS = useMediaQuery('(min-width:450px)');
    const [carouselPos, setCarouselPos] = useState(-0);
    const [openZ, setopenZ] = useState(0);
    const [openZB, setopenZB] = useState(0);
    const picCaroCount = (catPage.picDir.length - 1) * 100

    function carouselSize() {
        let size = 600;

        if (!mobile) {
            if (!phone) {
                if (!phoneS) {
                    size = 320;
                }else {
                    size = 400;
                }             
            }else {
                size = 500;
            }
        }
        return size;
    }

    function zoomSize2(heightIn, widthIn) {
        
        let orientation = (heightIn > widthIn);
        let height = 0;
        let width = 0;

        if (!mobile) {
            if (!phone) {
                if (!phoneS) {
                    if (orientation) {
                        //255
                        height = 400;
                        width = height * widthIn/heightIn;
                    } else {
                        //400
                        width = 350;
                        height = width * heightIn/widthIn;
                    }
                }else {
                    if (orientation) {
                        //320
                        height = 455;
                        width = height * widthIn/heightIn;
                    } else {
                        //500
                        width = 450;
                        height = width * heightIn/widthIn;
                    }
                }             
            }else {
                if (orientation) {
                    //510
                    height = 510;
                    width = height * widthIn/heightIn;
                } else {
                    width = 800;
                    height = width * heightIn/widthIn;
                }
            }
        } else {
            if (orientation) {
                height = 700;
                width = height * widthIn/heightIn;
            } else {
                width = 1100;
                height = width * heightIn/widthIn;
            }
        }
        return {height: height, width: width};
    }

    function nextImg() {
        let pos = carouselPos-100;
        if (pos < -picCaroCount){
            pos = 0;
        }
        setCarouselPos(pos);
    }

    function prevImg() {
        let pos = carouselPos+100;
        if (pos > 0){
            pos = -picCaroCount;
        }
        setCarouselPos(pos);
    }

    function openZD(id) {
        setopenZ(id);
    }

    function closeZD() {
        setopenZ(0);
    }

    function openZDB(id) {
        setopenZB(id);
    }

    function closeZDB() {
        setopenZB(0);
    }

    return (
        <div id="Gallary" >
            {/* Title */}
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
                    <Grid item xs={12} sm={11} md={8} lg={8} xl={8} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        marginTop: '60px',
                        borderRadius: '100px',
                    }}>
                        <Typography variant="h2" color="primary" align="center" >{catPage.title}</Typography>
                    </Grid>
                </Grid>
            </Container>
            <br/>
            <br/>
            {/* Carosel */}
            <Container sx={{
                display: "flex",
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
            }} >
                <Grid container spacing={2} sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                }}>
                    
                    <Grid item xs={12} sm={12} md={11} lg={10} xl={8} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        borderRadius: '10px',
                    }}>
                        <Button onClick={prevImg} sx={{
                                position: 'absolute',
                                left: caro ? '20%':'12%',
                                zIndex: 99,
                        }}>
                            <ArrowBackIosIcon/>
                        </Button>
                        <Carousel prevImg={prevImg} nextImg={nextImg} transform={`translateX(${carouselPos}%)`}>
                            {catPage.picDir.map((data)=>(
                                <CarouselItem key={data.id}  >
                                    <div sx={{position: 'relative'}} >
                                        <Card sx={{ minWidth: `${carouselSize()}px`,}}>
                                            <CardMedia
                                                sx={{ height: `${carouselSize()}px`, }}
                                                image={data.img}
                                                onClick={()=>openZD(data.id)} 
                                                alt=''
                                            />
                                        </Card>
                                    </div>
                                    <Dialog 
                                        onClose={closeZD} 
                                        onClick={closeZD} 
                                        open={(openZ==data.id)} 
                                        fullScreen 
                                    >
                                        <Image 
                                            src={data.img} 
                                            width={zoomSize2(data.height,data.width).width} 
                                            height={zoomSize2(data.height,data.width).height} 
                                            alt="Gallery Zoom Pic"
                                            style={{
                                                position: 'relative', 
                                                top: '50%', 
                                                left: '50%', 
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        />
                                        {('before' in data) ? (
                                            <Button 
                                                variant='contained'
                                                onClick={()=>openZDB(data.before.id)} 
                                                sx={{
                                                    position: 'fixed',
                                                    bottom: '5px',
                                                    left: '50%',
                                                    transform: 'translate(-50%, 0%)',

                                            }}>Before</Button>
                                        ):(<></>)}
                                    </Dialog>
                                    {('before' in data) ? (
                                        <Dialog 
                                        onClose={closeZDB} 
                                        onClick={closeZDB} 
                                        open={(openZB==data.before.id)} 
                                        fullScreen 
                                    >
                                        <Image 
                                            src={data.before.img} 
                                            width={zoomSize2(data.before.height,data.before.width).width} 
                                            height={zoomSize2(data.before.height,data.before.width).height} 
                                            alt="Gallery Before Pic"
                                            style={{
                                                position: 'relative', 
                                                top: '50%', 
                                                left: '50%', 
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        />
                                        <Button 
                                            variant='contained'
                                            onClick={()=>openZD(data.id)} 
                                            sx={{
                                                position: 'fixed',
                                                bottom: '5px',
                                                left: '50%',
                                                transform: 'translate(-50%, 0%)',

                                        }}>After</Button>
                                    </Dialog>
                                    ):(<></>)}
                                </CarouselItem>
                            ))}
                        </Carousel>
                        <Button onClick={nextImg} sx={{
                                position: 'absolute',
                                right: caro ? '20%':'12%',
                                zIndex: 99,
                        }}>
                            <ArrowForwardIosIcon/>
                        </Button>
                    </Grid>   
                    {catPage.picDir.map((pic, index) => (
                        <Grid item xs={4} key={pic.id} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <Card sx={{ minWidth: '100%',}}>
                                <CardMedia
                                    sx={{ height: {xs: 100, sm: 150, md: 220, lg: 300}, }}
                                    image={pic.img}
                                    onClick={()=>openZD(pic.id)} 
                                    alt=''
                                />
                            </Card>
                        </Grid>  
                    ))} 
                </Grid>
            </Container>
        </div>

    );
}
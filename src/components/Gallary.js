import { Button, Container, Grid, Typography, useMediaQuery, Dialog } from "@mui/material";
import Carousel, { CarouselItem } from "./Carousel";
import Image from "next/image";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from "react";

export default function Gallary() {
    const caro = useMediaQuery('(min-width:1150px)');
    const mobile = useMediaQuery('(min-width:1000px)');
    const phone = useMediaQuery('(min-width:700px)');
    const phoneS = useMediaQuery('(min-width:450px)');
    const [carouselPos, setCarouselPos] = useState(-0);
    const [openZ, setopenZ] = useState(0);

    function carouselSize() {
        let size = 600;

        if (!mobile) {
            if (!phone) {
                if (!phoneS) {
                    size = 300;
                }else {
                    size = 400;
                }             
            }else {
                size = 500;
            }
        }
        return size;
    }

    function zoomSize(height, width) {
        
        let orientation = (height>width);
        let size = orientation ? 320:1100;

        if (!mobile) {
            if (!phone) {
                if (!phoneS) {
                    size = orientation ? 300:400;
                }else {
                    size = orientation ? 300:500;
                }             
            }else {
                size = orientation ? 300:800;
            }
        }
        return size;
    }

    function nextImg() {
        let pos = carouselPos-100;
        if (pos<-1600){
            pos = 0;
        }
        setCarouselPos(pos);
    }

    function prevImg() {
        let pos = carouselPos+100;
        if (pos>0){
            pos = -1600;
        }
        setCarouselPos(pos);
    }

    function openZD(id) {
        setopenZ(id);
    }

    function closeZD() {
        setopenZ(0);
    }

    let gallaryData = [
        {id: 1, img: '/gallary/new/gallary1.jpg', imgZ: '/gallary/gallary1.jpg', height: 1183, width: 2500},
        {id: 2, img: '/gallary/new/gallary2.jpg', imgZ: '/gallary/gallary2.jpg', height: 1057, width: 500},
        {id: 3, img: '/gallary/new/gallary3.jpg', imgZ: '/gallary/gallary3.jpg', height: 893, width: 1500},
        {id: 4, img: '/gallary/new/gallary4.jpg', imgZ: '/gallary/gallary4.jpg', height: 1183, width: 2500},
        {id: 5, img: '/gallary/new/gallary5.jpg', imgZ: '/gallary/gallary5.jpg', height: 1183, width: 2500},
        {id: 6, img: '/gallary/new/gallary6.jpg', imgZ: '/gallary/gallary6.jpg', height: 1183, width: 2500},
        {id: 7, img: '/gallary/new/gallary7.jpg', imgZ: '/gallary/gallary7.jpg', height: 1055, width: 500},
        {id: 8, img: '/gallary/new/gallary8.jpg', imgZ: '/gallary/gallary8.jpg', height: 1183, width: 2500},
        {id: 9, img: '/gallary/new/gallary9.jpg', imgZ: '/gallary/gallary9.jpg', height: 1057, width: 500},
        {id: 10, img: '/gallary/new/gallary10.jpg', imgZ: '/gallary/gallary10.jpg', height: 1183, width: 2500},
        {id: 11, img: '/gallary/new/gallary11.jpg', imgZ: '/gallary/gallary11.jpg', height: 1057, width: 500},
        {id: 12, img: '/gallary/new/gallary12.jpg', imgZ: '/gallary/gallary12.jpg', height: 1183, width: 2500},
        {id: 13, img: '/gallary/new/gallary13.jpg', imgZ: '/gallary/gallary13.jpg', height: 1057, width: 500},
        {id: 14, img: '/gallary/new/gallary14.jpg', imgZ: '/gallary/gallary14.jpg', height: 1183, width: 2500},
        {id: 15, img: '/gallary/new/gallary15.jpg', imgZ: '/gallary/gallary15.jpg', height: 1185, width: 2500},
        {id: 16, img: '/gallary/new/gallary16.jpg', imgZ: '/gallary/gallary16.jpg', height: 1183, width: 2500},
        {id: 17, img: '/gallary/new/gallary17.jpg', imgZ: '/gallary/gallary17.jpg', height: 1183, width: 2500},
        
    ]

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
                        <Typography variant="h2" color="primary" align="center" >UPHOLSTERY GALLARY</Typography>
                    </Grid>
                </Grid>
            </Container>
            <br/>
            <br/>
            {/* Gallery */}
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
                            {gallaryData.map((data)=>(
                                <CarouselItem key={data.id}  >
                                    <div sx={{position: 'relative'}} >
                                        <Image 
                                            src={data.img} 
                                            onClick={()=>openZD(data.id)} 
                                            width={carouselSize()} 
                                            height={carouselSize()} 
                                            style={{borderRadius: '10px'}} 
                                            alt="Gallery Pic"
                                        />
                                    </div>
                                    <Dialog 
                                        onClose={closeZD} 
                                        onClick={closeZD} 
                                        open={(openZ==data.id)} 
                                        fullScreen 
                                    >
                                        <Image 
                                            src={data.imgZ} 
                                            width={zoomSize(data.height,data.width)} 
                                            height={zoomSize(data.height,data.width)*data.height/data.width} 
                                            alt="Gallery Zoom Pic"
                                            style={{
                                                position: 'relative', 
                                                top: '50%', 
                                                left: '50%', 
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                        />
                                    </Dialog>
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
                </Grid>
            </Container>
        </div>

    );
}
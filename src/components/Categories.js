import { Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import React from "react";
import { gallaryDir } from "@/lib/gallaryDir";
import Link from "next/link";

export default function Categories() {

    return (
        <div>
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
                        <Typography variant="h2" color="primary" align="center" >UPHOLSTERY GALLERY</Typography>
                    </Grid>
                </Grid>
            </Container>
            <br/>
            <br/>
            {/* Categories */}
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
                    {gallaryDir.map((cat)=>(
                        <Grid item xs={13} sm={6} md={6} lg={4} key={cat.id} sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <Card sx={{ 
                                    minWidth: '100%', 
                                    borderRadius: '25px',
                            }}>
                                <CardMedia
                                    sx={{ height: 270, }}
                                    image={cat.picDir[0].img}
                                    component={Link}
                                    href={`/gallary/${cat.id}`}
                                    title={cat.title}
                                    alt='Sew Posh Info'
                                />
                                <CardContent sx={{
                                    backgroundColor: 'black', 
                                }} >
                                    <Typography variant="h5" color='secondary' align="center" component="div">
                                    {cat.title}
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
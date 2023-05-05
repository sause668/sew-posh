import { Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import React from "react";
import { gallaryDir } from "@/lib/gallaryDir";
import Link from "next/link";

export default function CategoriesLite({catIndex}) {

    return (
        <div>
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
                    {gallaryDir.map((cat,index)=>(
                        <React.Fragment>
                            {(index == catIndex) ? (<></>):(
                                <Grid item xs={6} sm={4} key={cat.id} sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    <Card sx={{ minWidth: '100%', borderRadius: '25px',}}>
                                        <CardMedia
                                            sx={{ height: {xs: 100, sm: 150, md: 220, lg: 300}, }}
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
                            )}
                        </React.Fragment>
                    ))}                 
                </Grid>
            </Container>
        </div>

    );
}
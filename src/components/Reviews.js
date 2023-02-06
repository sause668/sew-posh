import { Container, Grid, Typography } from "@mui/material";

export default function Reviews() {

    return (
        <div id="Reviews" >
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
                    <Grid item xs={5} sm={6} md={4} lg={4} xl={4} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        marginTop: '60px',
                        borderRadius: '100px',
                    }}>
                        <Typography variant="h2" color="primary" align="center" >REVIEWS</Typography>
                    </Grid>
                </Grid>
            </Container>
            <br/>
            <br/>
            {/* Reviews */}
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
                    <Grid item xs={10} sm={11} md={11} lg={12} xl={12} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                    }}>
                        <div class="elfsight-app-8cbbf38f-4d1f-4d3a-b14b-ae14a9dba70f"></div>
                    </Grid>
                </Grid>
            </Container>
        </div>

    );
}
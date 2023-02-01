import { Container, FormControl, Grid, TextField, Typography, Select, MenuItem, Button, Snackbar, Alert } from "@mui/material";
import { useState } from "react";

export default function Appointment() {
    const [spFirstName, setSpFirstName] = useState('');
    const [spLastName, setSpLastName] = useState('');
    const [spPhoneNumber, setSpPhoneNumber] = useState('');
    const [spEmail, setSpEmail] = useState('');
    const [spJobType, setSpJobType] = useState('INDOOR UPLOSTERY CONSULTATION');
    const [spMessage, setSpMessage] = useState('');
    const [sbOpen, setSbOpen] = useState(0);

    function changeFirstName(e) {
        setSpFirstName(e.target.value);
    }

    function changeLastName(e) {
        setSpLastName(e.target.value);
    }

    function changePhoneNumber(e) {
        setSpPhoneNumber(e.target.value);
    }

    function changeEmail(e) {
        setSpEmail(e.target.value);
    }

    function changeJobType(e) {
        setSpJobType(e.target.value);
    }

    function changeMessage(e) {
        setSpMessage(e.target.value);
    }

    function sbClose(e,r) {
        if (r === 'clickaway') {
            return;
          }
      
          setSbOpen(0);
    }

    function varify(input) {
        return (!input == '') ? true:false;
    }

    async function submitForm() {

        if (varify(spFirstName) & varify(spLastName) & varify(spPhoneNumber) & varify(spJobType) & varify(spMessage)) {
            const reqParams = {
                method: 'POST',
                body: JSON.stringify({
                    spFirstName: spFirstName,
                    spLastName: spLastName,
                    spPhoneNumber: spPhoneNumber,
                    spEmail: spEmail,
                    spJobType: spJobType,
                    spMessage: spMessage,
                })
              };
            try {
                var res = await fetch('./api/appointment', reqParams).then(r => r.json());
    
                if (res.status) {
                    setSbOpen(1);
                    setSpFirstName('');
                    setSpLastName('');
                    setSpPhoneNumber('');
                    setSpEmail('');
                    setSpJobType('INDOOR UPLOSTERY CONSULTATION');
                    setSpMessage('');
                }else {
                    setSbOpen(2);
                }
            } catch (error) {
                setSbOpen(2);
            }
        } else {
            setSbOpen(3);
        }
    }

    return (
        <div id="Appointment" >
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
                    <Grid item xs={12} sm={11} md={8} lg={7} xl={7} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        marginTop: '60px',
                        borderRadius: '100px',
                    }}>
                        <Typography variant="h2" color="primary" align="center" >BOOK AN APPOINTMENT</Typography>
                    </Grid>
                    {/* Title Info */}
                    <Grid item xs={11} sm={8} md={7} lg={6} xl={6} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        borderRadius: '100px',
                    }}>
                        <Typography variant="h6" color="white" align="center" >
                            <>
                                Take your first step to the Sew Posh Experience. 
                                <br/>
                                Get your FREE CONSULTATION TODAY!
                            </>
                        </Typography>
                    </Grid>
                    {/* Form */}
                    <Grid item xs={12} sm={9} md={7} lg={7} xl={7} sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',
                        backgroundColor: 'black',
                        borderRadius: '10px',
                        marginTop: '10px',
                        padding: '5px'
                    }}>
                        <FormControl >
                            <Grid container spacing={1} sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: 'center',
                            }}>
                                {/* First Name */}
                                <Grid item xs={12} sm={6}  sx={{
                                    display: "flex",
                                    justifyContent: {xs: 'center', sm:"right"},
                                    alignItems: 'center',
                                }}>
                                    <TextField 
                                        label= 'First Name'
                                        variant="filled"
                                        required
                                        value={spFirstName}
                                        onChange={changeFirstName}
                                    />
                                </Grid>
                                {/* Last Name */}
                                <Grid item xs={12} sm={6}  sx={{
                                    display: "flex",
                                    justifyContent: {xs: 'center', sm:"left"},
                                    alignItems: 'center',
                                }}>
                                    <TextField 
                                        label= 'Last Name'
                                        variant="filled"
                                        required
                                        value={spLastName}
                                        onChange={changeLastName}
                                    />
                                </Grid>
                                {/* Phone Number */}
                                <Grid item xs={12} sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    <TextField 
                                        label= 'Phone Number'
                                        variant="filled"
                                        required
                                        value={spPhoneNumber}
                                        onChange={changePhoneNumber}
                                    />
                                </Grid>
                                {/* Email */}
                                <Grid item xs={12} sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    <TextField 
                                        label= 'Email'
                                        variant="filled"
                                        type='email'
                                        value={spEmail}
                                        onChange={changeEmail}
                                    />
                                </Grid>
                                {/* Job Select */}
                                <Grid item xs={12} sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    <FormControl>
                                        <Select
                                            value={spJobType}
                                            onChange={changeJobType}
                                            sx={{backgroundColor: 'white', borderRadius: '5px',}}
                                        >
                                            <MenuItem value={'INDOOR UPLOSTERY CONSULTATION'}>INDOOR UPLOSTERY CONSULTATION</MenuItem>
                                            <MenuItem value={'BOAT UPLOSTERY CONSULTATION'}>BOAT UPLOSTERY CONSULTATION</MenuItem>
                                            <MenuItem value={'CLOTHING CONSULTATION'}>CLOTHING CONSULTATION</MenuItem>
                                            <MenuItem value={'OUTDOOR HOME UPLOSTERY CONSULTATION'}>OUTDOOR HOME UPLOSTERY CONSULTATION</MenuItem>
                                        </Select> 
                                    </FormControl>
                                </Grid>
                                {/* Message */}
                                <Grid item xs={12} sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    <TextField 
                                        label= 'Message'
                                        variant="filled"
                                        required
                                        value={spMessage}
                                        onChange={changeMessage}
                                        multiline
                                        minRows={5}
                                        fullWidth
                                    />
                                </Grid>
                                {/* Submit Button /w Alerts */}
                                <Grid item xs={12} sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: 'center',
                                }}>
                                    {/* Submit Button */}
                                    <Button variant="contained" onClick={submitForm} >Submit</Button>
                                    {/* Sucsess */}
                                    <Snackbar 
                                        open={(sbOpen == 1)} 
                                        autoHideDuration={6000} 
                                        onClose={sbClose}
                                    >
                                        <Alert onClose={sbClose} severity="success" color="primary" sx={{ width: '100%' }}>
                                        Consultation Sent!
                                        </Alert>
                                    </Snackbar>
                                    {/* Error */}
                                    <Snackbar 
                                        open={(sbOpen == 2)} 
                                        autoHideDuration={6000} 
                                        onClose={sbClose}
                                    >
                                        <Alert onClose={sbClose} severity="error" color="error" sx={{ width: '100%' }}>
                                        Error Email Not Sent!
                                        </Alert>
                                    </Snackbar>
                                    {/* Need More Info */}
                                    <Snackbar 
                                        open={(sbOpen == 3)} 
                                        autoHideDuration={6000} 
                                        onClose={sbClose}
                                    >
                                        <Alert onClose={sbClose} severity="error" color="error" sx={{ width: '100%' }}>
                                        More Info Required!
                                        </Alert>
                                    </Snackbar>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Grid>        
                </Grid>
            </Container>
        </div>

    );
}
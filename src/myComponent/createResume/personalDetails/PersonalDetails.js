import React from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import BootstrapTooltip, {Input} from "./style";


const PersonalDetails = () => {
    
    return (
        <Container disableGutters sx={{marginTop: "7vh"}}>
            <Typography variant="" component="h4">Personal Details</Typography>
            <Box mt="3vh">
                <Grid container direction= "row">
                    <Typography variant="" component="h6">Wanted Job Title</Typography>
                    <BootstrapTooltip title="Add a title like 'Senier Marketer' or 'Sales Executive that quickly describe your overall experience or the type of role you're applying to" placement="top" maxWidth="100px" TransitionComponent={Fade}
                        TransitionProps={{ timeout: 300 }}>
                        <HelpOutlineIcon sx={{
                            "&:hover": {
                                color: "blue"
                            }, color: "green", marginLeft: "0.3vw", cursor: "pointer"
                        }} fontSize='small' style={{}} />
                    </BootstrapTooltip>
                </Grid>

                <Grid container direction="row" mt="1vh">
                    <Box sx={{ width: "45%" }}>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            // defaultValue="Normal"
                            variant="filled"
                            placeholder="e.g. Teacher"
                            sx={{ width: "100%"}}
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                    </Box>
                    <Grid container direction="row" ml="10%" sx={{ width: "45%", alignContent: "center", border: "0px solid red" }}>
                        <label htmlFor="contained-button-file" style={{ display: "flex", border: "0px solid red", alignItems: "center", cursor: "pointer" }}>
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <AssignmentIndTwoToneIcon fontSize='large' color="primary" />
                            <Typography sx={{marginLeft: "0.8vw", color: "blue" }}>
                                Upload Photo
                            </Typography>
                        </label>
                    </Grid>
                </Grid>
            </Box>


            {/* First name || last name */}
            <Grid container direction="row" justifyContent= "space-between" mt="3vh">
                <Box sx={{ width: "45%" }}>
                    <Typography variant='' component='h6'>First Name</Typography>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        // defaultValue="Normal"
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        sx={{ width: "100%", marginTop: "1vh" }}
                    />
                </Box>
                <Box sx={{ width: "45%" }}>
                    <Typography variant='' component='h6'>Last Name</Typography>
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        // defaultValue="Normal"
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        sx={{ width: "100%", marginTop: "1vh"}}
                    />
                </Box>
            </Grid>
        </Container>
    )
}

export default PersonalDetails;

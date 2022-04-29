import React from 'react';
import Header from "./header/Header";
import ProfileCompletness from './profileCompletness/ProfileCompletness';
import PersonalDetails from './personalDetails/PersonalDetails';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const styles = ({
    leftSide: {
        border: "1px solid black",
        flexBasis: "50%",
        padding: "7vh"
    }
})

const MyDocument = () => {
    return (
        <Grid container direction="row">
            <Grid sx={styles.leftSide}>
                <Header />
                <ProfileCompletness />
                <PersonalDetails />
            </Grid>


            <Grid sx={styles.rightSide}>
                <Typography variant="h4" component="h2">
                    Manan
                </Typography>
            </Grid>
        </Grid>
    )
}

export default MyDocument;

import React from 'react'
import Typography from '@mui/material/Typography';


export const ProfileCompletness = () => {

    const styles= ({
        completnessContainer:{
            border: "0px solid red",
            marginTop: '8vh',
            heigth: "100vh"
        },
        percentageCompletness:{
            display: "flex",
            justifyContent: "space-between"
        },
        showCompletness:{
            border: "0px solid red",
        },
        percentageDiv:{
            backgroundColor: "grey",
            width: "100%",
            heigth: "100vh",
            marginTop: "0vh",

        },
        percentage:{
            backgroundColor: "green",
            width: "50%",
            heigth: "20px",
        }

        

    });
  return (
    <>
        <div style={styles.completnessContainer}>
            <div style={styles.percentageCompletness}>
                <Typography variant="h7" component="h6" style={styles.showCompletness}>10% Profile Completness</Typography>
                <Typography variant="h7" component="h6" style={styles.showCompletness}>10% Add Profile Summary</Typography>
            </div>
            <div style={styles.percentageDiv}>
                <hr style={styles.percentage}/>
            </div>
        </div>
    </>
  )
}

export default ProfileCompletness;

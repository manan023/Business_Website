import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import styles from "./style";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (

        <Grid container direction="column" textAlign= "center">
            <Grid>
                <TextField id="standard-basic"size='normal'variant="standard" defaultValue="Untitled" placeholder="Untitled" autoFocus="false" sx={styles.textFeildSx} InputProps={styles.textFeildProps} />
            </Grid>

            <Grid sx={styles.languageSx}>
                <FormControl sx={{border: "0px solid red"}}>
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        size="small"
                    >
                        Language
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Hindi</MenuItem>
                        <MenuItem onClick={handleClose}>English</MenuItem>
                        <MenuItem onClick={handleClose}>Punjabi</MenuItem>
                    </Menu>
                </FormControl>
            </Grid>
        </Grid>
    )
};

export default Header;

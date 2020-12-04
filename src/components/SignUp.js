/**
 * External Dependencies.
 */
import React from 'react'
/**
 * Internal Dependencies.
 */
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar, Button, TextField, Grid, Typography, Container
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "10px 0",
     },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
     },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
     },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs" className="sign-container">
            <div className={classes.paper} >
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
				</Typography>
                <form className={classes.form} noValidate >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Repeat Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
			  		</Button>
                    <Grid container>
                        <Grid item>
                            Have an account? <Link to="/signin">Sign In</Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

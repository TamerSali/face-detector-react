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
	Avatar, Button, TextField, FormControlLabel,
	Checkbox, Grid, Typography, Container
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(1),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: "10px 0",
		zIndex: 15
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
		zIndex: 16,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
		zIndex: 17
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
	const classes = useStyles();
	return (
		<Container maxWidth="xs" className="sign-container">
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign in
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
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Sign In
			  		</Button>
					<Grid container>
						<Grid item>
							Don't have an account? <Link to="/signup">Sign Up</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}




/**
 * External Dependencies.
 */
import React, { useState } from 'react'
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

export default function SignUp({ setUserObject }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState("");

	const classes = useStyles();


	/**
	 * Handle user name.
	 *
	 * @param   {Object}  e
	 * @return  {Void}
	 */
	const handleUserName = e => {
		setName(e.target.value)
	}

	/**
	 * Handle user email.
	 *
	 * @param   {Object}  e
	 * @return  {Void}
	 */
	const handleUserEmail = e => {
		setEmail(e.target.value)
	}

	/**
	 * Handle user password.
	 *
	 * @param   {Object}  e
	 * @return  {Void}
	 */
	const handleUserPassword = e => {
		setPassword(e.target.value)
	}

	/**
	 * Handle user submit.
	 *
	 * @param  {Object} e
	 * @return {Void}
	 */
	const handleSubmit = e => {

		fetch("http://localhost:4000/signup", {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				name,
				email,
				password
			})
		})
			.then(response => response.json())
			.then(user => user ? setUserObject(user) : setErrors("Something went wrong! "))
			.catch(error => setErrors(error));

		e.preventDefault();
	}

	return (
		<Container maxWidth="xs" className="sign-container">
			<div className={classes.paper} >
				{errors && (
					<div>{errors}</div>
				)}
				<Avatar className={classes.avatar}>
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign Up
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="name"
						label="Name"
						name="username"
 						autoFocus
						onChange={handleUserName}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						onChange={handleUserEmail}
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
						onChange={handleUserPassword}
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

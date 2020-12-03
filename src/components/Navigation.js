/**
 * External Dependencies.
 */
import React from 'react'
/**
 * Internal Dependencies.
 */
import logo from '../assets/logo.svg'
import Tilt from 'react-tilt'
import { Button } from '@material-ui/core'

export default function Navigation({ userObject }) {
	return (
		<nav className="navbar">
			<div className="app-logo">
				<Tilt className="Tilt" options={{ max: 70, scale: 1.0 }} style={{ height: 100, width: 100 }} >
					<div className="Tilt-inner">
						<img src={logo} alt="app-logo" />
					</div>
				</Tilt>
			</div>
			<Button
				size="small"
				variant="outlined"
				style={Object.keys(userObject).length ? { display: "block" } : { display: "none" }}
			>
				Log Out
			 </Button>
		</nav>
	)
}

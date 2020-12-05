/**
 * External Dependencies.
 */
import React from 'react'
import PropTypes from 'prop-types'
/**
 * Internal Dependencies.
 */
import logo from '../assets/logo.svg'
import Tilt from 'react-tilt'
import { Button } from '@material-ui/core'

export default function Navigation({ userObject, setUserObject }) {
	return (
		<nav className="navbar">
			<div className="app-logo">
				<Tilt className="Tilt" options={{ max: 70, scale: 1.0 }} style={{ height: 100, width: 100 }} >
					<div className="Tilt-inner">
						<img src={logo} alt="app-logo" />
					</div>
				</Tilt>
			</div>
			{Object.values(userObject).some(value => value) && (
				<div className="log-out">
					<h3 h3 > {userObject.name}</h3>
					<Button
						size="small"
						variant="outlined"
						onClick={() => setUserObject({})}
					>
						Log Out
			 		</Button>
				</div>

			)}


		</nav >
	)
}

Navigation.propTypes = {
	/**
	 * Current user.
	 *
	 * @type {Object}
	 */
	userObject: PropTypes.object,

	/**
	 * Set current user.
	 *
	 * @type {Function}
	 */
	setUserObject: PropTypes.func
}
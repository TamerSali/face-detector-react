/**
 * External Dependencies.
 */
import React from 'react'
/**
 * Internal Dependencies.
 */
import logo from '../assets/logo.svg'
import Tilt from 'react-tilt'

export default function Logo() {
	return (
		<header className="app-logo">
 		<Tilt className="Tilt" options={{ max: 70, scale: 1.0 }} style={{ height: 100, width: 100 }} >
			<div className="Tilt-inner">
				<img src={logo} alt="app-logo" />
			</div>
		</Tilt>
		</header>

 	)
}

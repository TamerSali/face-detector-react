/**
 * External Dependencies.
 */
import React from 'react'
/**
 * Internal Dependencies.
 */
import Navigation from './components/Navigation'
import Logo from './components/Logo'
import ImageLinkForm from './components/ImageLinkForm'

function App() {
	return (
		<div className="App">
			<header className="app-header">
				<Logo />
				<Navigation />
			</header>
			<main>
				<ImageLinkForm />
			</main>
		</div>
	);
}

export default App;

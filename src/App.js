/**
 * External Dependencies.
 */
import React, { useState } from 'react'
/**
 * Internal Dependencies.
 */
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Navigation from './components/Navigation'
import ImageLinkForm from './components/ImageLinkForm'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const app = new Clarifai.App({
	apiKey: process.env.REACT_APP_API_KEY
});

const particlesOptions = {
	"particles": {
		"number": {
			"value": 70,
			"density": {
				"enable": false
			},
		},
		"size": {
			"value": 1,
			"random": true,
			"anim": {
				"speed": 4,
				"size_min": 0.3
			}
		},
		"line_linked": {
			"enable": true
		},
		"move": {
			"random": true,
			"speed": 1,
			"direction": "none",
			"out_mode": "out"
		}
	},
	"interactivity": {
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			}
		},
		"modes": {
			"repulse": {
				"distance": 100,
				"duration": 4
			}
		}
	}
}


function App() {

	const [value, setValue] = useState("");
	const [imageURL, setImageURL] = useState("");
	const [box, setBox] = useState({})
	const [currentUser, setCurrentUser] = useState({});

	/**
	 * Handle user input.
	 *
	 * @return {Void}
	 */
	const handleInputChange = e => {
		setValue(e.target.value)
	}

	/**
	 * Find the face location.
	 *
	 * @param   {Object}  data  
	 * @return  {Object}  
	 */
	const calculateFaceLocation = data => {
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.querySelector("#input-image");
		const width = Number(image.width);
		const height = Number(image.height);
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - (clarifaiFace.right_col * width),
			bottomRow: height - (clarifaiFace.bottom_row * height),
		}
	}

	/**
	 * Draw a box over the face location.
	 *
	 * @param   {Function}  box 
	 * @return  {Void}
	 */
	const drawFaceBox = box => {
		setBox(box);
	}

	/**
	 * Handle user submit and detect the faces from an image.
	 *
	 * @return {Void}
	 */
	const handleSubmit = e => {
		app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", value)
			.then(response => drawFaceBox(calculateFaceLocation(response)))
			.catch(error => console.log(error))

		setImageURL(value)

		e.preventDefault();
	}

	/**
	 * Protect the home route.
	 *
	 * @return  {Void}
	 */
	const protectedRoute = () => {
		return !Object.keys(currentUser).length ? (
			<Redirect to="/signin" />
		) : (
				<Redirect to="/" />
			)
	}
	return (
		<div className="App">
			<Particles
				className="particles"
				params={particlesOptions}
			/>

			<Router>
				{protectedRoute()}
				<Navigation userObject={currentUser} setUserObject={setCurrentUser} />
				<Switch>
					<Route exact path="/">
						<main>
							<ImageLinkForm
								onChange={handleInputChange}
								onSubmit={handleSubmit}
								userInput={value}
							/>
							<FaceRecognition imageURL={imageURL} drawBox={box} />
						</main>
					</Route>

					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="*">
						{protectedRoute()}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;

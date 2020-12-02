import React from 'react'

export default function FaceRecognition({ imageURL, drawBox }) {
	const { leftCol, topRow, rightCol, bottomRow } = drawBox;

	return (
		<div className="image-with-faces">
			{imageURL && (
				<section>
					<img
						id="input-image"
						src={imageURL}
						width="400"
						height="auto"
						alt="face-detect"
					/>
					<div
						className="bounding-box"
						style={{ top: topRow, left: leftCol, right: rightCol, bottom: bottomRow }}
					/>
				</section>
			)}
		</div>
	)
}

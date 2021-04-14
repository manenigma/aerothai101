import React from "react";
import styled from "styled-components";
import { absCenter } from "../abstracts/mixins";

import sprite from "../assets/icomoon/sprite.svg";

const ImageContainer = styled.div(
	({ theme, imageUrl }) => `
	background-size: cover;
	background-image: ${theme.gradientPrimaryAlpha}, url(${imageUrl});
	height: 30rem;
	background-blend-mode: screen;
	background-position: center top;
	-webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
	clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	position: relative;
`
);

const SvgContainer = styled.svg`
	fill: #d95b72;
	${absCenter};
`;

const Card = ({ heading, imageUrl, details }) => {
	// const { abbreviation, name, imageUrl } = ohterProps;
	console.log(details);
	const [name, abbreviation] = heading;
	return (
		<div className="card">
			<div className="card__side card__side--front">
				<ImageContainer imageUrl={imageUrl}>
					{imageUrl === undefined ? (
						<SvgContainer>
							<use xlinkHref={sprite + "#icon-image"} />
						</SvgContainer>
					) : null}
				</ImageContainer>
				{
					<h4 className="card__heading">
						<span className="card__heading-span">{name.toUpperCase()}</span>
						<span className="card__heading-span">
							{abbreviation.toUpperCase()}
						</span>
					</h4>
				}
				<div className="card__details">
					<ul>
						{details.map((detail) => (
							<li>{`${detail.name.toUpperCase()} - ${detail.abbreviation.toUpperCase()}`}</li>
						))}
						{/* <li>3 day tour</li>
						<li>Up to 30 people</li>
						<li>2 tour guides</li>
						<li>Sleep in cozy hotels</li>
						<li>Difficulty: easy</li> */}
					</ul>
				</div>
			</div>
			<div className="card__side card__side--back">
				<div className="card__cta">
					<div className="card__price-box">
						<p className="card__price-value">{abbreviation.toUpperCase()}</p>
						<p className="card__price-only">{name.toUpperCase()}</p>
					</div>
					<a href="#popup" className="btn btn--white">
						Receiver
					</a>
					<a href="#popup" className="btn btn--white">
						Tranceiver
					</a>
					<a href="#popup" className="btn btn--white">
						VCCS
					</a>
					<a href="#popup" className="btn btn--white">
						transceiver
					</a>
					<a href="#popup" className="btn btn--white">
						Antenna
					</a>
					<a href="#popup" className="btn btn--white">
						DVR
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;

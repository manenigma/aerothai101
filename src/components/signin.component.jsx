import React from "react";

import ButtonPrimary from "./button.primary.component";

import sprite from "../assets/icomoon/sprite.svg";

export const SignIn = () => {
	const userCredential = { name: "AP", password: "1234" }
	return (
		<div className="signin-section">
			<h1 className="signin--title">Sign in to AEROTHAI</h1>

			<div className="signin--option">
				<div className="option-box">
					<svg className="option-box--icon">
						<use xlinkHref={sprite + "#icon-facebook1"} />
					</svg>
				</div>
				<div className="option-box">
					<svg className="option-box--icon">
						<use xlinkHref={sprite + "#icon-google1"} />
					</svg>
				</div>
				<div className="option-box">
					<svg className="option-box--icon">
						<use xlinkHref={sprite + "#icon-linkedin2"} />
					</svg>
				</div>
			</div>

			<h2 className="signin--description">
				To keep connected with us please login with your personal info
			</h2>

			<div className="signin--form">
				<div className="form-box">
					<input type="email" className="form-box--input" placeholder="Email" />
					<svg className="form-box--icon">
						<use xlinkHref={sprite + "#icon-envelop"} />
					</svg>
				</div>
				<div className="form-box">
					<input
						type="password"
						className="form-box--input"
						placeholder="password (at least 6 characters)"
					/>
					<svg className="form-box--icon">
						<use xlinkHref={sprite + "#icon-lock"} />
					</svg>
				</div>
			</div>

			<div className="signin--footer">
				<h2 className="signin--forgot">Forgot your password?</h2>
				<ButtonPrimary label="Sing in" linkUrl="/signin" otherProps={userCredential} />
			</div>

			{/*	<div className="signup-section--button">&nbsp;</div>*/}
		</div>
	);
};

export default SignIn;

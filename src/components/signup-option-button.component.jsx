import React from "react";

import ButtonSecondary from './button.secondary.component'

const SignUpOptionButton = () => {
	return (
		<div className="signup-in-option signup-option-button">
				<h1 className="signup-in-option__title">&nbsp;</h1>
				<div className="signup-in-option__description">
					<span>&nbsp;</span>
					<span>&nbsp;</span>
				</div>
			<ButtonSecondary label="Sign up" linkUrl="/signup" />
		</div>
	);
};

export default SignUpOptionButton;

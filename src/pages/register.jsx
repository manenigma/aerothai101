import React from "react";

import SignIn from "../components/signin.component";
import SignUpOption from "../components/signup-option.component";
import SignInOption from "../components/signin-option.component";
import SignUpOptionButton from "../components/signup-option-button.component";

const RegisterPage = () => {
	return (
		<div className="register-container">
			<div className="register-box">
				<SignInOption />
				<SignUpOption />
				<SignIn />
				<SignUpOptionButton />
			</div>
		</div>
	);
};

export default RegisterPage;

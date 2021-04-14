import React from "react";

import { connect } from 'react-redux'
import { setCurrentUser } from "../vendors/redux/user/user.action";

const ButtonPrimary = ({ label, setCurrentUser, userCredential }) => {
	return (
		<button
			className="button--primary"
			onClick={() => setCurrentUser(userCredential)}
		>
			{label}
		</button>
	);
};


const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (user) => dispatch(setCurrentUser(user))
	}
}

export default connect(null, mapDispatchToProps)(ButtonPrimary);

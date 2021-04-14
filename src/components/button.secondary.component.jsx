import React from "react";
import { withRouter } from "react-router-dom";

const ButtonSecondary = ({ label, history, linkUrl }) => {
	return (
		<div className="button--secondary" onClick={() => history.push(`${linkUrl}`)}>
			{label}
		</div>
	);
};

export default withRouter(ButtonSecondary);

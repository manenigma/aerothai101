import React from "react";
import { withRouter } from "react-router-dom";

const ButtonTertiary = ({ label, history, linkUrl }) => {
	return (
		<a className="btn btn--green" onClick={() => history.push(`${linkUrl}`)}>
			{label}
		</a>
	);
};

export default withRouter(ButtonTertiary);
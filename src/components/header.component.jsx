import React from "react";

import { Link } from "react-router-dom";
// import logo from "../assets/logo-aerothai.svg";
import sprite from "../assets/icomoon/sprite.svg";

const Header = () => {
	return (
		<div className="header-container">
			<Link to="/" className="logo-container">
				<svg className="logo">
					<use xlinkHref={sprite + "#icon-aircraft-take-off"} />
				</svg>
			</Link>
			<div className="nav-container">
				<Link to="/cm" className="nav-item">Corective</Link>
				<Link to="/pmi" className="nav-item">Preventive</Link>
				<Link to="/watch" className="nav-item">Watch</Link>
				<Link to="/inventory" className="nav-item">Inventory</Link>
				<Link to="/contact" className="nav-item">CONTACT</Link>
				<div className="nav-item" onClick={() => {}}>
					SIGN OUT
				</div>
			</div>
		</div>
	);
};

export default Header;

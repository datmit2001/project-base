import React from "react";
import Logo from "../../../assets/logo.png";
import "./header.css";

export const Header = () => {
	return (
		<div className="wrapper">
			<img src={Logo} alt="logo" />
		</div>
	);
};


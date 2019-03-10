import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<p className="navbar-brand" id="logo">GoogleBooks Application</p>
			</div>
		</nav>
	)
}

export default Navbar;
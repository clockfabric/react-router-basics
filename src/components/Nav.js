import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	const navStyle = {
		color: "white",
		textDecoration: "none"
	};

	return (
		<nav>
			<h3>Fortnite API</h3>
			<ul className='nav-links'>
				<Link style={navStyle} to='/about'>
					<li>About</li>
				</Link>

				<Link style={navStyle} to='/shop'>
					<li>Shop</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;

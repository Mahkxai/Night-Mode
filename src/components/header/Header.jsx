import React from "react"
import logo from '../../assets/react.svg'
import './header.css'

function Navbar() {
	return (
		<>
			<nav>
				<img
					className="logo"
					src={logo} alt=""
				/>
				<ul
					className='nav-items'
				>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</>
	)
}

function Switch({ toggleDisplay }) {
	return (
		<>
			<input
				type="checkbox"
				id="darkmode-toggle"
				checked={console.log("checked")}
				onChange={toggleDisplay}
			/>
			<label htmlFor="darkmode-toggle"></label>
		</>
	)
}

export default function Header({ toggleDisplay }) {

	return (
		<>
			<header>
				<Navbar />
				<Switch toggleDisplay={toggleDisplay} />
			</header>
		</>
	)
}
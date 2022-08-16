import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Navbar</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="./">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="./Fact1">Fact 1</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="./Fact2">Fact 2</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="./Fact3">Fact 3</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
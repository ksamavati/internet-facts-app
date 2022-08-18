import React from 'react'
import { Link } from 'react-router-dom'
import { factList } from './factList'

export const Navbar = () => {
	const factsArray = factList();
	const factsNavJSX = factsArray.map(fact => {
		return (
			<li className="nav-item px-2 pt-1" key={fact.id}>
				<Link className="nav-link" to={"./Fact" + fact.id} style={{ fontSize: '15pt', paddingTop: '0', paddingBottom: '0' }}>{fact.id}</Link>
			</li>
		)
	});

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">Internet Facts</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="./">Home</Link>
						</li>
						{factsNavJSX}
					</ul>
				</div>
			</div>
		</nav>
	)
}
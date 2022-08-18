import React from 'react'
import { factList } from './factList';
import { Link } from 'react-router-dom';

const Home = () => {
	const facts = factList();

	const factsArray = factList();

	const factsJSX = factsArray.map(fact => {
		return (
			<Link key={fact.id} className='card mx-3' to={'/Fact' + fact.id} style={{ color: "inherit", textDecoration: "inherit" }}>
				{/* <img className="card-img-top" src={serverroom} alt="Large Server Room" /> */}
				<div className="card-body">
					<h5 className="card-title">{fact.title}</h5>
					<p className="card-text">{fact.body}</p>
					<button className="btn btn-primary">Read More &raquo;</button>
				</div>
			</Link>
		)
	});

	return (
		<div>
			<h1 className='py-4'>Fun Facts about the Internet</h1>
			<div className="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
				{factsJSX}
			</div>
		</div>
	)
}

// const mapStateToProps = (state) => {
// 	return {
// 		facts: state.facts
// 	}
// }

// export default connect(mapStateToProps)(Home)
export default Home
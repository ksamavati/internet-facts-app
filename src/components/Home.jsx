import React from 'react'
import { Fact1, Fact2, Fact3 } from './Facts'
import { connect } from 'react-redux';
import { factList } from './factList';

const Home = () => {
	const facts = factList();
	console.log(facts);

	const factsJSX = factList();

	return (
		<div>
			<h1 className='py-4'>Fun Facts about the Internet</h1>
			<div className="d-flex justify-content-center row">
				<div className='col'>
					<Fact1 />
				</div>
				<div className='col'>
					<Fact2 />
				</div>
				<div className='col'>
					<Fact3 />
				</div>
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
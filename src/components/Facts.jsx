import React from 'react'
import serverroom from '../assets/serverroom.jpg'
import { Link } from 'react-router-dom'

export const Fact1 = () => {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img className="card-img-top" src={serverroom} alt="Large Server Room" />
			<div className="card-body">
				<h5 className="card-title">Internet storage holds at least 1,200 petabytes worth of data.</h5>
				<p className="card-text">This estimate is equivalent to 1.2 billion terabytes. This number is only an estimation between the big 4 – Google, Facebook, Microsoft, and Amazon.

					This figure is also still exclusive of other bigtime providers such as Dropbox, SugarSync, and Barracuda.</p>
				<Link className="btn btn-primary" to="./Fact1">Read More</Link>
			</div>
		</div>
	)
}

export const Fact2 = () => {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img className="card-img-top" src={serverroom} alt="Large Server Room" />
			<div className="card-body">
				<h5 className="card-title">Each day, about 4,000 ransomware attacks are executed.</h5>
				<p className="card-text ">The average amount that perpetrators demand after an attack is $1,077.</p>
				<Link className="btn btn-primary" to="./Fact2">Read More</Link>
			</div>
		</div>
	)
}

export const Fact3 = () => {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img className="card-img-top" src={serverroom} alt="Large Server Room" />
			<div className="card-body">
				<h5 className="card-title">Currently, there are approximately 4.9 billion internet users</h5>
				<p className="card-text">According to Statista Research Department, the global number of internet users in 2021 was 4.9 billion, up from 4.6 billion in 2020. </p>
				<Link className="btn btn-primary" to="./Fact3">Read More</Link>
			</div>
		</div>
	)
}

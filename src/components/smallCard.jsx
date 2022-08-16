import React from 'react'
import { Link } from 'react-router-dom'

export const smallCard = () => {
	return (
		<div className='card' style={{ width: '18rem' }}>
			<img className="card-img-top" src={serverroom} alt="Large Server Room" />
			<div className="card-body">
				<h5 className="card-title">Internet storage holds at least 1,200 petabytes worth of data.</h5>
				<p className="card-text">As 1 terabyte is equal to 1,000 gigabytes, the estimate is equivalent to 1.2 million terabytes. This number is only an estimation between the big 4 – Google, Facebook, Microsoft, and Amazon.

					This figure is also still exclusive of other bigtime providers such as Dropbox, SugarSync, and Barracuda.</p>
				<Link className="btn btn-primary" to="./Fact1">Read More</Link>
			</div>
		</div>
	)
}

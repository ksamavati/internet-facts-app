import React from 'react'
import { Fact1, Fact2, Fact3 } from './Facts'

export const Home = () => {
	return (
		<div>
			<h1>Fun Facts about the Internet</h1>
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

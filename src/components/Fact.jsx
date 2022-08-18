import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { factList } from './factList';

export const Fact = (props) => {
	const { fact_id } = useParams();
	const thisFact = factList()[fact_id - 1];

	return (
		<div style={{ maxWidth: "900px" }}>
			<h2 className='py-4'>{thisFact.title}</h2>
			<p className='py-3'>{thisFact.body}</p>
			<Link className="btn btn-secondary" to={"/"}>Back</Link>
		</div>
	)
}
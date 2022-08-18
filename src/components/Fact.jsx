import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { factList } from './factList';

export const Fact = (props) => {
	const { fact_id } = useParams();
	const thisFact = factList()[fact_id - 1];

	return (
		<div>
			<div className="card-body">
				<h5 className="card-title">{thisFact.title}</h5>
				<p className="card-text">{thisFact.body}</p>
			</div>
		</div>
	)
}
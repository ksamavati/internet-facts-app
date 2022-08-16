import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Fact1, Fact2, Fact3 } from "./components/Facts";

const { useState } = React;

export default function App() {
	const [counter, setCounter] = useState(0);

	return (
		<div className="App">
			<Navbar />
			<div className="container d-flex justify-content-center">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/Fact1" element={<Fact1 />} />
					<Route path="/Fact2" element={<Fact2 />} />
					<Route path="/Fact3" element={<Fact3 />} />
				</Routes>
			</div>
		</div>
	);
}
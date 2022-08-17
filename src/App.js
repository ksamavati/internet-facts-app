import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Fact1, Fact2, Fact3 } from "./components/Facts";
import { factList } from "./components/factList";

export default function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="container d-flex justify-content-center py-3">
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
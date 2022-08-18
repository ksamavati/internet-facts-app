import React from "react";
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import { factList } from "./components/factList";
import { Fact } from "./components/Fact";

export default function App() {
	return (
		<div className="App">
			<Navbar />
			<main className="container d-flex justify-content-center py-3">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/internet-facts-app/" element={<Home />} />
					<Route path="/Fact:fact_id" element={<Fact />} />
				</Routes>
			</main>
		</div>
	);
}
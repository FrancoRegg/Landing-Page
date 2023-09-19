import React from "react";

import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="">
			<NavBar />
			<Jumbotron />
		</div>


	);
};

export default Home;

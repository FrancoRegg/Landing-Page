import React from "react";

import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//include images into your bundle


//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0 ">
			<NavBar />
			<div className="container w-60 mb-5 ">
				< Jumbotron />
				<div className="row d-flex justify-content-between mt-4">
				<div className="col-sm-12 col-md-3 mt-4">
						<Card text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Aliquet lectus proin nibh nisl condimentum id venenatis a."} imageURL={"https://picsum.photos/500/400"}/>
					</div>

					<div className="col-sm-12 col-md-3 mt-4">
						<Card text={"In est ante in nibh mauris. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Malesuada fames ac turpis egestas. Eget felis eget nunc lobortis mattis aliquam faucibus. Dui id ornare arcu odio ut sem nulla pharetra."} imageURL={"https://picsum.photos/500/400"}/>
					</div>

					<div className="col-sm-12 col-md-3 mt-4">
						<Card text={"Turpis nunc eget lorem dolor sed viverra. Nullam ac tortor vitae purus faucibus ornare suspendisse. Quam pellentesque nec nam aliquam. Augue ut lectus arcu bibendum at varius. Dignissim sodales ut eu sem integer vitae justo eget magna."} imageURL={"https://picsum.photos/500/400"}/>
					</div>

					<div className="col-sm-12 col-md-3 mt-4">
						<Card text={"Consequat id porta nibh venenatis cras sed felis eget. Egestas erat imperdiet sed euismod. Nunc sed id semper risus. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc."} imageURL={"https://picsum.photos/500/400"}/>
					</div>
				</div>
			</div>
			<div className="footer footer-expand-lg bg-dark footer-dark py-2">
				< Footer />
			</div>
		</div>


	);
};

export default Home;

import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar/>
			<div className="container">
				<div className="column">
					<div className="col cl-10">
						<Jumbotron/>
						<Card/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
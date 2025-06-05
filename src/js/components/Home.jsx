import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="langePage">
			<NavBar/>
			<div className="container">
				<div className="column">
					<div className="col cl-10">
						<Jumbotron/>
						<Card/>
					</div>

				</div>

			</div>
		</div>
	);
};

export default Home;
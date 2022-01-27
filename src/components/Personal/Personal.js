import React from 'react';
import "./Personal.css"
import verity from './verity.jpg';
import ultralearning from './ultralearning.jpg';
import crawdads from './crawdads.jpg';
import knitting from './knitting.jpg';
import Card from 'react-bootstrap/Card';


const Personal = ({ onRouteChange }) => {
	return (
		<div>
			<div className="group">
				<div class="title">Recently Read</div>
				<div class="scrolling-wrapper center">
					<div class="card bg-transparent border-0">
						<Card.Img variant="top" className="bookImage" src={verity}/>
						<h1>Verity</h1>
						<h4>Colleen Hoover</h4>
					</div>
					<div class="card bg-transparent border-0">
						<Card.Img variant="top" className="bookImage" src={ultralearning}/>
						<h1>Ultralearning</h1>
						<h4>Scott H. Young</h4>
					</div>
					<div class="card bg-transparent border-0">
						<Card.Img variant="top" className="bookImage" src={crawdads}/>
						<h1>Where the Crawdads Sing</h1>
						<h4>Delia Owens</h4>
					</div>
				</div>
			</div>
			{/*	Add comprehensive reading list!*/}

			<div class="scallop-up"></div>
			<br />
			<div class="scallop-down"></div>
			
			<div className="group">
				<div class="title">Crafts</div>
				<div class="scrolling-wrapper">
					<div class="card bg-transparent border-0">
						<Card.Img variant="top" className="projectImage" src={knitting}/>
						<h1>Project One</h1>
					</div>
					<div class="card bg-transparent border-0">
						<Card.Img variant="top" className="projectImage" src={knitting}/>
						<h1>Project Two</h1>
					</div>
					<div class="card bg-transparent border-0"><h2>Project 3</h2></div>
					<div class="card bg-transparent border-0"><h2>Project 4</h2></div>
				</div>
			</div>
		</div>
	)
 }

export default Personal;
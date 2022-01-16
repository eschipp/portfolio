import React from 'react';
import './Project.css';
import projectone from './projectone.jpg';
import projecttwo from './projecttwo.JPG';
import projectthree from './projectthree.JPG';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Stack from 'react-bootstrap/Stack';



const Project = ({ onRouteChange }) => {
	return(	
		<CardGroup>	
			<Card className="card bg-transparent">
				<Card.Img variant="top" className="image" src={projectone}/>
					<Card.Body class="cardBody">
						<Card.Title>Face Recognition</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
						</Card.Text>
					</Card.Body>
				<Card.Footer>
					<small>View Project</small>
				</Card.Footer>
			</Card>
			<Card className="card bg-transparent">
				<Card.Img variant="top" className="image" src={projecttwo}/>
					<Card.Body class="cardBody">
						<Card.Title>Robofriends</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
						</Card.Text>
					</Card.Body>
				<Card.Footer>
					<small><a href="https://eschipp.github.io/robofriends/">View Project</a></small>
				</Card.Footer>
			</Card>
			<Card className="card bg-transparent">
				<Card.Img variant="top" className="image" src={projectthree}/>
					<Card.Body class="cardBody">
						<Card.Title>Background Generator</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural lead-in to
							additional content. This content is a little bit longer.
						</Card.Text>
					</Card.Body>
				<Card.Footer>
					<small><a href="https://eschipp.github.io/background-generator/">View Project</a></small>
				</Card.Footer>
			</Card>
		</CardGroup>
	)
}

export default Project;
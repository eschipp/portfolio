import React from 'react';
import './Project.css';
import projectone from './projectone.jpg';
import projecttwo from './projecttwo.JPG';
import projectthree from './projectthree.JPG';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';



const Project = ({ onRouteChange }) => {
	return(	
		<Container fluid="med" className="center">
			<Row med={5}>
				<Col>
					<Card className="card bg-transparent center">
						<Card.Img variant="top" className="image" src={projectone}/>
							<Card.Body className="cardBody">
								<Card.Title>Face Recognition</Card.Title>
								<Card.Text>
									Column 1
								</Card.Text>
							</Card.Body>
						<Card.Footer>
							<small>View Project</small>
						</Card.Footer>
					</Card>
				</Col>
				<Col>
					<Card className="card bg-transparent center">
						<Card.Img variant="top" className="image" src={projecttwo}/>
							<Card.Body className="cardBody">
								<Card.Title>Robofriends</Card.Title>
								<Card.Text>
								Column 2
								</Card.Text>
							</Card.Body>
						<Card.Footer>
							<small><a href="https://eschipp.github.io/robofriends/">View Project</a></small>
						</Card.Footer>
					</Card>
				</Col>
				<Col>
					<Card className="card bg-transparent center">
						<Card.Img variant="top" className="image" src={projectthree}/>
							<Card.Body class="cardBody">
								<Card.Title>Background Generator</Card.Title>
								<Card.Text>
									Column 3
								</Card.Text>
							</Card.Body>
						<Card.Footer>
							<small><a href="https://eschipp.github.io/background-generator/">View Project</a></small>
						</Card.Footer>
					</Card>
				</Col>
				<Col>
					<Card className="card bg-transparent center">
						<Card.Img variant="top" className="image" src={projectone}/>
							<Card.Body class="cardBody">
								<Card.Title>Face Recognition</Card.Title>
								<Card.Text>
									Column 4
								</Card.Text>
							</Card.Body>
						<Card.Footer>
							<small>View Project</small>
						</Card.Footer>
					</Card>
				</Col>
				<Col>
					<Card className="card bg-transparent center">
						<Card.Img variant="top" className="image" src={projectone}/>
							<Card.Body class="cardBody">
								<Card.Title>Face Recognition</Card.Title>
								<Card.Text>
									Column 5
								</Card.Text>
							</Card.Body>
						<Card.Footer>
							<small>View Project</small>
						</Card.Footer>
					</Card>
				</Col>
				<Col>
					<Card className="card bg-transparent center">
						<Card.Img variant="top" className="image" src={projectone}/>
							<Card.Body class="cardBody">
								<Card.Title>Face Recognition</Card.Title>
								<Card.Text>
									Column 6
								</Card.Text>
							</Card.Body>
						<Card.Footer>
							<small>View Project</small>
						</Card.Footer>
					</Card>
				</Col>

			</Row>
		</Container>
	)
}

export default Project;
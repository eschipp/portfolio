import React from 'react';
import './Project.css';
import projectone from './projectone.jpg';
import projecttwo from './projecttwo.JPG';
import projectthree from './projectthree.JPG';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';



const Project = ({ onRouteChange }) => {
	return(	
		<Container fluid="xxl" className="center">
			<Row xl={3}>
				<Col className="center">
					<Card className="card bg-transparent center">
			{/*			<Card.Img variant="top" className="image" src={projectone}/>*/}
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
				<Col className="center">
					<Card className="card bg-transparent center">
						{/*<Card.Img variant="top" className="image" src={projecttwo}/>*/}
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
				<Col className="center">
					<Card className="card bg-transparent center">
						{/*<Card.Img variant="top" className="image" src={projectthree}/>*/}
							<Card.Body className="cardBody">
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
			</Row>
		</Container>
	)
}

export default Project;
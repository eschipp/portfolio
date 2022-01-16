import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Personal = ({ onRouteChange }) => {
	return (
		<div>
			<CardGroup>
			    <Card className="card bg-transparent">
			        <Card.Img variant="top" src="holder.js/100px160" />
			        <Card.Body>
			            <Card.Title>Card title</Card.Title>
			            <Card.Text>
	              			This card has supporting text below as a natural lead-in to additional
			            	content.
			        	</Card.Text>
		        	</Card.Body>
			        <Card.Footer>
			        	<small className="text-muted">Last updated 3 mins ago</small>
			        </Card.Footer>
			    </Card>
			    <Card className="card bg-transparent">
			        <Card.Img variant="top" src="holder.js/100px160" />
			        <Card.Body>
			        	<Card.Title>Card title</Card.Title>
			        	<Card.Text>
			            	This card has supporting text below as a natural lead-in to additional
			            	content.
			        	</Card.Text>
			        </Card.Body>
			        <Card.Footer>
			        	<small className="text-muted">Last updated 3 mins ago</small>
		      		</Card.Footer>
			    </Card>
			    <Card className="card bg-transparent">
			        <Card.Img variant="top" src="holder.js/100px160" />
			        <Card.Body>
			        	<Card.Title>Card title</Card.Title>
			        	<Card.Text>
			          		This card has supporting text below as a natural lead-in to additional
			            	content.
		        		</Card.Text>
			        </Card.Body>
			        <Card.Footer>
			        	<small className="text-muted">Last updated 3 mins ago</small>
			        </Card.Footer>
	     		</Card>
			</CardGroup>
		</div>
		
		


	)
 }

export default Personal;
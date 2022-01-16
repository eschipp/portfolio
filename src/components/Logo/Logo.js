import React from 'react';
import Tilt from 'react-tilt';
import cat from './cat.gif';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br shadow-2 center" options={{ max : 25 }} style={{ height: 175, width: 175 }} >
				<div className="Tilt-inner pa4"><img className="photo" alt ='logo' src={cat} /></div>
			</Tilt>
		</div>
	)
}

export default Logo;
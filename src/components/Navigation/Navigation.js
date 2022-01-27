import React from 'react';


const Navigation = ({ onRouteChange }) => {
	return (
		<div className ="black-80 tc pv4 raleway">
			<h1 className="mt2 mb0 fw1 f1">Erin Schippers</h1>
  			<h2 className="mt2 mb0 f6 fw4 ttu tracked">Programmer, Musician, Cat Lover</h2>
		
			<nav class ="bt bb tc mw7 center mt4">
				<p onClick={() => onRouteChange('home')} 
					className="mb0 f6 f5-l link bg-animate black-80 hover-bg-washed-red dib pa3 ph4-l">Home</p>
				<p onClick={() => onRouteChange('about')} 
					className="mb0 f6 f5-l link bg-animate black-80 hover-bg-washed-red dib pa3 ph4-l">About</p>
				<p onClick={() => onRouteChange('personal')} 
					className="mb0 f6 f5-l link bg-animate black-80 hover-bg-washed-red dib pa3 ph4-l">Personal</p>
				<p onClick={() => onRouteChange('project')} 
					className="mb0 f6 f5-l link bg-animate black-80 hover-bg-washed-red dib pa3 ph4-l">Projects</p>
				<p onClick={() => onRouteChange('contact')} 
					className="mb0 f6 f5-l link bg-animate black-80 hover-bg-washed-red dib pa3 ph4-l">Contact</p>
			</nav>
		</div>
	)
}

export default Navigation;
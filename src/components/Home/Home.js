import React from 'react';
import Logo from '../Logo/Logo';
import './Home.css';

const Home = ({ onRouteChange }) => {
	return[
		<div className="welcome ma4 bg-white-20 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
		Welcome to my website!
		</div>,
		<Logo />
	]
}

export default Home;
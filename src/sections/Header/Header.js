import React from 'react';
import WelcomeBack from './components/Welcome';
import CustomLogo from './components/Logo';
import CustomNav from './components/NavBar';
import CustomButton from './components/Button';

class Header extends React.Component {
	render() {
		return (
			<div>
				<CustomNav />
				<WelcomeBack />
				<CustomButton />
				<CustomLogo />
			</div>
		)
	}
}

export default Header;
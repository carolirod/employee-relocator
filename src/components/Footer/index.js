import React from 'react';
import 'styled-components/macro';

import Logo from '../Logo';
import styles from './styles';

const Footer = () => {
	return (
		<footer css={styles}>
			<div className="col">
				<a href="/#">Home</a>
				<a href="/#">About Us</a>
			</div>

			<div className="col">
				<a href="/#" title="Easter egg!">Journey</a>
			</div>

			<div className="col">
				<a href="/#">Cookies</a>
				<a href="/#">Privacy</a>
			</div>

			<div className="col">
				<Logo />
			</div>
		</footer>
	);
};

export default Footer;

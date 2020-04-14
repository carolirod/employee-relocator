import React from 'react';
import { css } from 'styled-components';
import 'styled-components/macro';

import logo from './logo.svg';

const styles = css`
	height: 4rem;
	pointer-events: none;

	@media (prefers-reduced-motion: no-preference) {
		animation: spin infinite 20s linear;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;

const Logo = () => (
	<img
		css={styles}
		src={logo}
		alt="logo"
	/>
);

export default Logo;

import React from 'react';
import 'styled-components/macro';

import styles from './styles';

const Tooltip = ({ className }) => {
	return (
		<div css={styles} className={className}>
			* weather-month average is from 5 past years data
		</div>
	);
};

export default Tooltip;

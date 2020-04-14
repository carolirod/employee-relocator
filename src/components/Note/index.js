import React from 'react';
import 'styled-components/macro';

import styles from './styles';

const Note = ({ className, children }) => {
	return (
		<p css={styles}>
			<small className={className}>
				{children}
			</small>
		</p>
	);
};

export default Note;

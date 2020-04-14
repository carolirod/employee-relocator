import React from 'react';
import 'styled-components/macro';

import styles from './styles';

const User = () => {
	return (
		<div css={styles}>
			<p className="user__label">User</p>
			<p className="user__name">Jamie Towers</p>
		</div>
	);
};

export default User;

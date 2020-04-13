import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import styles from './styles';

const Recommendation = ({ handleRecommendation }) => {
	const [selected, setSelected] = useState('');

	const handleClick = (sel) => {
		setSelected(sel);
		handleRecommendation(sel);
	};

	return (
		<div css={styles} selected={selected}>
			We can help you decide!

			<div>
				Tolerance to hot weather ...
				<button
					onClick={() => handleClick('none')}
					className="none"
				>
					None
				</button>
				<button
					onClick={() => handleClick('maybe')}
					className="maybe"
				>
					Hmm...
				</button>
				<button
					onClick={() => handleClick('yes')}
					className="yes"
				>
					Yes
				</button>
			</div>
		</div>
	);
};

Recommendation.defaultProps = {
	handleRecommendation: () => {},
};

Recommendation.propTypes = {
	handleRecommendation: PropTypes.func,
};

export default Recommendation;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import styles from './styles';

const Recommendation = ({ handleRecommendation }) => {
	const [selected, setSelected] = useState('');
	const [open, setOpen] = useState(false);

	const handleClick = (sel) => {
		setSelected(sel);
		handleRecommendation(sel);
	};

	const toggle = () => {
		setOpen(!open);
	};

	return (
		<div css={styles} selected={selected} className={open && 'js-open'}>
			<button className="trigger" onClick={toggle}>
				<p className="trigger__text">Help me decide!</p>
			</button>

			<div className="actions">
				<p>Do you tolerate hot weather?</p>
				<button
					onClick={() => handleClick('none')}
					className="none"
				>
					No
				</button>
				<button
					onClick={() => handleClick('maybe')}
					className="maybe"
				>
					Hmm
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

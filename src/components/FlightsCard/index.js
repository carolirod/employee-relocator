import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import styles from './styles';
import Note from '../Note';

const FlightsCard = ({ className, flights }) => {
	return (
		<div css={styles} className={className}>
			<h3 className="card__heading">Prices starting at</h3>
			<p className="start-price">
				33 €
			</p>
			{/* Click to search flights */}
			<button className="btn-full-prices">See full prices</button>
			<Note>
				* prices for one-way tickets
			</Note>
		</div>
	);
};

FlightsCard.propTypes = {
	flights: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FlightsCard;

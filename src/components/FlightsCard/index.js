import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import styles from './styles';

const FlightsCard = ({ flights }) => {
	return (
		<div css={styles}>
			<div className="week">
				{flights.map((weekDay) => (
					<div key={weekDay.day}>
						<p>{weekDay.day}</p>
						<p>{weekDay.price}</p>
					</div>
				))}
			</div>
			<p>one way prices</p>
		</div>
	);
};

FlightsCard.propTypes = {
	flights: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FlightsCard;

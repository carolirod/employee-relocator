import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import Tooltip from '../Tooltip';
import styles from './styles';

const WeatherCard = ({ weather }) => {
	return (
		<div css={styles}>
			<Tooltip className="tooltip" />

			<div className="months">
				{weather.months.map((month) => (
					<div key={month.name} className="month">
						<p>{month.name}</p>
						<p>{month.temp}</p>
					</div>
				))}
			</div>

			<p>Comparison</p>
			{weather.comparisons.map((comparison) => (
				<p key={comparison}>{comparison}</p>
			))}
		</div>
	);
};

WeatherCard.defaultProps = {
	weather: {},
};

WeatherCard.propTypes = {
	/** Weather data */
	weather: PropTypes.shape({
		/** Temperature for the next months */
		months: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
		/** Each comparison as a text  */
		comparisons: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};

export default WeatherCard;

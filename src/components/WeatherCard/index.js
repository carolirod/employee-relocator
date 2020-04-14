import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import Note from '../Note';
import styles from './styles';

const WeatherCard = ({ className, weather }) => {
	return (
		<div css={styles} className={className}>
			<h3 className="card__heading">Average temperature</h3>
			<div className="weather__months">
				{weather.months.map((month) => (
					<div key={month.name} className="weather__month">
						<p className="weather__month__name">{month.name}</p>
						<p className="weather__month__temp">{month.temp}</p>
					</div>
				))}
			</div>

			<Note className="note">
				* weather-month average is from 5 past years data
			</Note>
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

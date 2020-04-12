import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip';

const weatherData = {
	months: [
		{ name: 'Jun', temp: '20ºC' },
		{ name: 'Jul', temp: '20ºC' },
		{ name: 'Aug', temp: '20ºC' },
	],
	comparisons: [
		'> Amsterdam',
		'< Budapest',
	],
};

const WeatherCard = ({ weather }) => {
	return (
		<div>
			<Tooltip />

			{weather.months.map((month) => (
				<Fragment key={month.name}>
					<p>{month.name}</p>
					<p>{month.temp}</p>
				</Fragment>
			))}

			<p>Comparison</p>
			{weather.comparisons.map((comparison) => (
				<p key={comparison}>{comparison}</p>
			))}
		</div>
	);
};

WeatherCard.defaultProps = {
	weather: weatherData,
};

WeatherCard.propTypes = {
	weather: PropTypes.shape({}),
};

export default WeatherCard;

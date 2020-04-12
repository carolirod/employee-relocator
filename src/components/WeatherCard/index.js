import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import Tooltip from '../Tooltip';
import styles from './styles';

const WeatherCard = ({ weather }) => {
	return (
		<div css={styles}>
			<Tooltip />

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
	weather: PropTypes.shape({}),
};

export default WeatherCard;

import React from 'react';
import PropTypes from 'prop-types';

import WeatherCard from '../WeatherCard';
import FlightsCard from '../FlightsCard';

const CityCard = ({ city }) => {
	return (
		<div>
			{city}

			<WeatherCard />
			<FlightsCard />
		</div>
	);
};

CityCard.defaultProps = {
	city: '',
};

CityCard.propTypes = {
	city: PropTypes.string,
};

export default CityCard;

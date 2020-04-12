import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import WeatherCard from '../WeatherCard';
import FlightsCard from '../FlightsCard';
import styles from './styles';

const CityCard = ({ city }) => {
	return (
		<div css={styles}>
			{city.name}

			<WeatherCard weather={city.weather} />
			<FlightsCard />

			{/* <Goodies /> */}
		</div>
	);
};

CityCard.defaultProps = {
	city: {},
};

CityCard.propTypes = {
	city: PropTypes.shape({}),
};

export default CityCard;

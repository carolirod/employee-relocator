import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import WeatherCard from '../WeatherCard';
import FlightsCard from '../FlightsCard';
import styles from './styles';

const CityCard = ({ className, city }) => {
	return (
		<div
			css={styles}
			className={className}
			bgSrc={city.image}
		>
			<div className="image__wrapper">
				<span className="image" />
			</div>

			<h2 className="heading">{city.name}</h2>

			<WeatherCard weather={city.weather} />
			<FlightsCard flights={city.flights} />

			{/* <Goodies cityGoodies={} /> */}
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

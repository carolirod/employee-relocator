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
			<div className="city__image--wrapper">
				<span className="city__image" />
			</div>

			<h2 className="city__heading">{city.name}</h2>

			<WeatherCard
				weather={city.weather}
				className="city__info-card"
			/>
			<FlightsCard
				flights={city.flights}
				className="city__info-card"
			/>

			{/* Offices - location */}
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

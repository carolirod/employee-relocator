import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import CityCard from '../CityCard';
import styles from './styles';

const CitiesList = ({ cities, recommendedCity }) => {
	return (
		<div
			css={styles}
			recommendedCity={recommendedCity}
		>
			<div className="list">
				{Object.keys(cities).map((city) => (
					<CityCard
						key={city}
						city={cities[city]}
						className={`city ${city}`}
					/>
				))}
			</div>
		</div>
	);
};

CitiesList.propTypes = {
	cities: PropTypes.shape({}),
};

export default CitiesList;

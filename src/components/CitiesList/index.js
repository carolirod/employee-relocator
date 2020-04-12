import React from 'react';
import PropTypes from 'prop-types';
import 'styled-components/macro';

import CityCard from '../CityCard';
import styles from './styles';

const CitiesList = ({ cities }) => {
	return (
		<div css={styles}>
			{Object.keys(cities).map((city) => (
				<CityCard
					key={city}
					city={cities[city]}
					className="city"
				/>
			))}
		</div>
	);
};

CitiesList.propTypes = {
	cities: PropTypes.shape({}),
};

export default CitiesList;

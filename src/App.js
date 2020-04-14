import React, { useState } from 'react';

import Logo from './components/Logo';
import User from './components/User';
import CitiesList from './components/CitiesList';
import Recommendation from './components/Recommendation';

import './App.css';
import cities from './data/cities.json';

const App = () => {
	const [recommendation, setRecommendation] = useState('');

	const handleRecommendation = (rec) => {
		let city = '';

		switch (rec) {
			case 'none':
				city = 'amsterdam';
				break;
			case 'maybe':
				city = 'madrid';
				break;
			case 'yes':
				city = 'budapest';
				break;
			default:
				break;
		}
		setRecommendation(city);
	};

	return (
		<div className="app">
			<header className="app-header">
				<Logo />
				<User />
				<h1>Employee relocator - Next office stop</h1>
			</header>

			<main>
				<Recommendation
					handleRecommendation={handleRecommendation}
				/>

				<CitiesList
					cities={cities}
					recommendedCity={recommendation}
				/>
			</main>
		</div>
	);
};

export default App;

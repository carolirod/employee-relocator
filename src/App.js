import React from 'react';

import './App.css';
import Logo from './components/Logo';
import User from './components/User';
import CitiesList from './components/CitiesList';

const cities = {
	madrid: {
		name: 'Madrid',
		weather: {
			months: [
				{ name: 'Jun', temp: '20ºC' },
				{ name: 'Jul', temp: '20ºC' },
				{ name: 'Aug', temp: '20ºC' },
			],
			comparisons: [
				'> Amsterdam',
				'< Budapest',
			],
		},
		flights: {},
	},
	amsterdam: {
		name: 'Amsterdam',
		weather: {
			months: [
				{ name: 'Jun', temp: '20ºC' },
				{ name: 'Jul', temp: '20ºC' },
				{ name: 'Aug', temp: '20ºC' },
			],
			comparisons: [
				'> Amsterdam',
				'< Budapest',
			],
		},
		flights: {},
	},
	budapest: {
		name: 'Budapest',
		weather: {
			months: [
				{ name: 'Jun', temp: '20ºC' },
				{ name: 'Jul', temp: '20ºC' },
				{ name: 'Aug', temp: '20ºC' },
			],
			comparisons: [
				'> Amsterdam',
				'< Budapest',
			],
		},
		flights: {},
	},
};

const App = () => (
	<div className="App">
		<header className="App-header">
			<Logo />
			<User />
		</header>

		<main>
			<CitiesList cities={cities} />
		</main>
	</div>
);

export default App;

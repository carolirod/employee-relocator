import React from 'react';

import './App.css';
import Logo from './components/Logo';
import CityCard from './components/CityCard';
import User from './components/User';

const cities = [
	'Madrid',
	'Amsterdam',
	'Budapest',
];

const App = () => (
	<div className="App">
		<header className="App-header">
			<Logo />

			<User />
		</header>

		<main>

			{cities.map((city) => (
				<CityCard key={city} city={city} />
			))}
		</main>
	</div>
);

export default App;

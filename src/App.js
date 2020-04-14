import React from 'react';

import Logo from './components/Logo';
import User from './components/User';
import CitiesList from './components/CitiesList';
import Recommendation from './components/Recommendation';

import './App.css';
import { useState } from 'react';

const cities = {
	madrid: {
		name: 'Madrid',
		image: 'https://www.haitongib.com/media/43923/5_-_madrid.jpg',
		weather: {
			months: [
				{ name: 'Jun', temp: '25ºC' },
				{ name: 'Jul', temp: '30ºC' },
				{ name: 'Aug', temp: '33ºC' },
			],
			comparisons: [
				'> Amsterdam',
				'< Budapest',
			],
		},
		flights: [
			{ day: 'Mon', price: '30€' },
			{ day: 'Tue', price: '30€' },
			{ day: 'Wed', price: '30€' },
		],
	},
	amsterdam: {
		name: 'Amsterdam',
		image: 'https://previews.123rf.com/images/yasonya/yasonya1801/yasonya180100032/93739629-bike-over-canal-amsterdam-city-picturesque-town-landscape-in-netherlands-with-view-on-river-amstel-.jpg',
		weather: {
			months: [
				{ name: 'Jun', temp: '18ºC' },
				{ name: 'Jul', temp: '20ºC' },
				{ name: 'Aug', temp: '22ºC' },
			],
			comparisons: [
				'< Madrid',
				'< Budapest',
			],
		},
		flights: [
			{ day: 'Mon', price: '30€' },
			{ day: 'Tue', price: '30€' },
			{ day: 'Wed', price: '30€' },
		],
	},
	budapest: {
		name: 'Budapest',
		image: 'https://www.roadaffair.com/wp-content/uploads/2017/01/hungarian-parliament-budapest-sunset-shutterstock_436252075-1024x683.jpg',
		weather: {
			months: [
				{ name: 'Jun', temp: '28ºC' },
				{ name: 'Jul', temp: '34ºC' },
				{ name: 'Aug', temp: '38ºC' },
			],
			comparisons: [
				'> Amsterdam',
				'> Madrid',
			],
		},
		flights: [
			{ day: 'Mon', price: '30€' },
			{ day: 'Tue', price: '30€' },
			{ day: 'Wed', price: '30€' },
		],
	},
};

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

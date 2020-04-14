import { css } from 'styled-components';
import { cardHeadingStyles } from '../WeatherCard/styles';

export default css`
	display: flex;
	flex-direction: column;
	background-color: var(--base);
	color: var(--contrast);

	.card__heading {
		${cardHeadingStyles}
	}

	.start-price {
		margin: 0 0 1rem;
		font-size: 4rem;
		font-weight: 700;
		color: var(--primary);
	}

	.btn-full-prices {
		padding: 0.8rem;
		border: none;
		background-color: var(--primary);
		text-transform: uppercase;
		letter-spacing: 3px;
		font-size: 1.2rem;
		font-weight: 700;
		color: white;
	}
`;

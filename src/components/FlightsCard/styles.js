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
		margin: 0;
		line-height: 2;
		font-size: 4rem;
		font-weight: 700;
		color: var(--primary);
	}

	.btn-full-prices {
		padding: 0.8rem;
		border: none;
		background-color: var(--primary);
		color: white;
		cursor: pointer;
	}
`;

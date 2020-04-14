import { css } from 'styled-components';

export const cardHeadingStyles = css`
	font-size: 1.8rem;
	margin: 1.2rem 0;
`;

export default css`
	position: relative;
	margin: 1.6rem 0;
	background-color: var(--base);
	color: var(--contrast);

	.card__heading {
		${cardHeadingStyles}
	}

	.weather__months {
		display: flex;
	}

	.weather__month {
		flex: 1 0 calc(${100 / 3}%);

		& + .weather__month {
			border-left: 1px dotted;
			border-color: var(--secondary);
		}
	}

	.weather__month__name {
		font-weight: 700;
		color: var(--secondary);
	}

	.weather__month__temp {
		font-size: 1.6rem;
	}

	.note {
		margin-top: 1rem;
	}
`;

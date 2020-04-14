import { css } from 'styled-components';

export default css`
	display: flex;
	width: 100%;

	@media only screen and (min-width: 769px) {
		margin: 0 auto;
	}

	.list {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding: 0 0.8rem;
		perspective: 1000px;

		@media only screen and (max-width: 768px) {
			width: calc(100% - 1.6rem);
		}

		@media only screen and (min-width: 769px) {
			flex-direction: row;
			margin: 8rem auto;
		}
	}

	.city {
		flex: 1 0 auto;

		${({ recommendedCity }) => css`
			&.${recommendedCity} {
				border-bottom: 6px solid var(--secondary);
			}
		`}

		@media only screen and (min-width: 769px) {
			flex: 1 1 30%;
			width: 25rem;
		}

		@media only screen and (min-width: 1200px) {
			flex: 1 1 33%;
			width: 38rem;
			max-width: 38rem;
		}
	}

	.city + .city {
		margin-top: 2.4rem;

		@media only screen and (min-width: 769px) {
			margin-top: 0;
			margin-left: -4rem;
		}
	}
`;

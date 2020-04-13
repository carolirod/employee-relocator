import { css } from 'styled-components';

export default css`
	display: flex;
	width: 100%;

	@media only screen and (min-width: 768px) {
		margin: 0 auto;
	}

	.list {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding: 0 0.8rem;

		@media only screen and (max-width: 768px) {
			width: calc(100% - 1.6rem);
		}

		@media only screen and (min-width: 768px) {
			flex-direction: row;
			margin: 0 auto;
		}
	}

	.city {
		${({ recommendedCity }) => css`
			&.${recommendedCity} {
				background-color: yellow;
				color: black;
			}
		`}

		@media only screen and (min-width: 768px) {
			flex: 1 1 30%;
		}
	}

	.city + .city {
		margin-top: 2.4rem;

		@media only screen and (min-width: 768px) {
			margin-top: 0;
			margin-left: 2.4rem;
		}
	}
`;

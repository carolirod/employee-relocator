import { css } from 'styled-components';

export default css`
    width: calc(100% - 8rem);
	display: flex;
	justify-content: center;
	padding: 4rem;
	box-shadow: inset 0px 10px 30px -20px #000;
    background-color: var(--contrast-soft);

	a {
		display: block;
		text-transform: uppercase;
		letter-spacing: 5px;
		line-height: 2;
		text-align: left;
		color: var(--primary);
	}

	.col {
		display: flex;
		flex-direction: column;
	}

	.col + .col {
		margin-left: 1.2rem;

		@media only screen and (min-width: 769px) {
			margin-left: 5rem;
		}
	}

	@media only screen and (min-width: 769px) {
		align-items: flex-end;
	}
`;

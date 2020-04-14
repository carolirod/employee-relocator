import { css } from 'styled-components';

export default css`
    position: fixed;
    right: 0;
	z-index: 1;
	display: flex;
	height: 20rem;
	padding-right: 2rem;
	box-shadow: 5px 5px 20px -10px #000;
	background-color: var(--contrast-soft);
	color: var(--base);
	transform: translateX(23.8rem);
	transition: transform .2s cubic-bezier(0.6, 0, 0.3, 1);

	&.js-open {
		transform: translateX(0);
	}

	.trigger {
		padding: 3.8rem 2.5rem 0 0;
		width: 6rem;
		border: none;
		border-right: 1px solid var(--base);
		font-weight: 700;
		font-size: 1.6rem;
		white-space: nowrap;
		color: var(--base);
		background-color: transparent;

		:focus,
		:active {
			outline: none;
			border: 1px dashed;
			border-color: var(--secondary);
		}
	}

	.trigger__text {
		transform: rotate(-90deg);
		transform-origin: right;
	}

	.actions {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 2rem;
		height: calc(100% - 4rem);

		button {
			border: none;
			padding: 0.8rem;
			background-color: var(--contrast);
			text-transform: uppercase;
			letter-spacing: 3px;
    		font-size: 1.2rem;
			font-weight: 700;
			color: var(--base);

			${({ selected }) => css`
				&.${selected} {
					color: var(--contrast);
					background-color: var(--selected);
				}
			`}
		}
	}

`;

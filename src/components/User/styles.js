import { css } from 'styled-components';

export default css`
	top: 0;
	right: 10rem;
    width: 15rem;
    padding: 1.6rem;
    text-align: left;
	border-top: 1px solid var(--base);
	background-color: var(--contrast-soft);
	transform-origin: top;
	animation: swing infinite 3s linear;
	box-shadow: -2px 7px 15px -10px #000;

	.user__label {
		font-size: 1.2rem;
	}

	.user__name {
		font-weight: 700;
		font-size: 1.4rem;
	}

	@media only screen and (max-width: 768px) {
		align-self: flex-end;
	}

	@media only screen and (min-width: 769px) {
		position: fixed;
	}

	@keyframes swing {
		20% {
			transform: rotate3d(1, 0, 0, 15deg);
		}
		40% {
			transform: rotate3d(1, 0, 0, -10deg);
		}
		60% {
			transform: rotate3d(1, 0, 0, 5deg);
		}
		80% {
			transform: rotate3d(1, 0, 0, -5deg);
		}
		100% {
			transform: rotate3d(1, 0, 0, 0deg);
		}
	}
`;

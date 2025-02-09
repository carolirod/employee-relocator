import { css } from 'styled-components';

export default css`
	position: relative;
	overflow: hidden;
	padding: 0 1.6rem 1.6rem;
	background-color: var(--contrast-soft);

	@media only screen and (min-width: 769px) {
		transform: rotateX(5deg) rotateY(10deg);
		transform-origin: left;
		box-shadow: -10px 10px 45px -25px #000;

		:hover {
			transform: rotateX(0deg) rotateY(0deg);
			box-shadow: -5px 20px 90px -5px rgba(0,0,0,0.9);
			z-index: 2;

			.city__image--wrapper {
				background-color: var(--primary-soft);
			}
		}

		&,
		:hover {
			transition: all .2s cubic-bezier(0.6, 0, 0.3, 1);
		}
	}

	.city__heading {
		text-transform: uppercase;
		margin: 2rem 0 1.6rem;
		font-weight: 300;
		font-size: 2.6rem;
		letter-spacing: 10px;
	}

	.city__info-card {
		padding: 1.2rem;
	}

	.city__image--wrapper {
		width: 112%;
		height: 15rem;
		margin-left: -1.6rem;
		background-color: var(--contrast);
	}

	.city__image {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 150px;
		background-size: cover;
		background-position: center;
		mix-blend-mode: luminosity;

		${({ bgSrc }) => css`
			background-image: url(${bgSrc});
		`}
	}
`;

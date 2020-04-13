import { css } from 'styled-components';

export default css`
	position: relative;
	padding: 0 0.8rem 0.8rem;
	border: 1px solid;
	border-color: var(--borders);

	.heading {
		text-transform: uppercase;
		margin: 0.8rem;
		font-weight: 300;
	}

	.image__wrapper {
		height: 150px;
	}

	.image {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
    	height: 150px;
		background-size: cover;
		background-position: center;

		${({ bgSrc }) => css`
			background-image: url(${bgSrc});
		`}
	}
`;

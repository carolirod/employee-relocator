import { css } from 'styled-components';

export default css`
	display: inline-block;
	margin: 2.4rem 0;
	padding: 1.6rem 0.8rem;
	border: 1px solid;
	border-color: var(--borders);

	${({ selected }) => css`
		.${selected} {
			background-color: yellow;
		}
	`}
`;

import { css } from 'styled-components';

export default css`
    position: fixed;
    right: 0;
	z-index: 1;
	display: inline-block;
	margin: 2.4rem 0;
	padding: 1.6rem 0.8rem;
	background-color: var(--base);
	color: var(--contrast);

	${({ selected }) => css`
		.${selected} {
			background-color: var(--selected);
		}
	`}
`;

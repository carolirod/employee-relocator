import { css } from 'styled-components';

export default css`
	position: relative;
	margin: 1.6rem 0;
	border: 1px solid;
	border-color: var(--borders);

	.months {
		display: flex;
	}

	.month {
		flex: 1 0 calc(${100 / 3}%);
	}

	:hover .tooltip {
		min-height: 5.5rem;
		opacity: 1;
	}
`;

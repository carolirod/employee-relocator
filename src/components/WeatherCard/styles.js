import { css } from 'styled-components';

export default css`
	.months {
		display: flex;
	}

	.month {
		flex: 1 0 calc(${100 / 3}%);
	}
`;

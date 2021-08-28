import styled from 'styled-components';
import { Column } from '../../globalStyles';

export const Feature = styled(Column)`
	margin: 2rem 0;
	gap: 1rem;
	justify-content: center;
	align-items: center;
	> svg {
		padding: 15px;
		border: 2px solid #252187;
		border-radius: 50%;
		margin-bottom: 0.5rem;
	}

	> span {
		text-align: center;

		color: #4c5692;
		max-width: 350px;
	}

	${Column}
`;

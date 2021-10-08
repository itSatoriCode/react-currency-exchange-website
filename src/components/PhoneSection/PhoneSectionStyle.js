import styled from 'styled-components';
import { Column } from '../../globalStyles.js';

export const PhoneColumn = styled(Column)`
	width: 33%;
	@media screen and (max-width: 768px) {
		width: 70%;
	}
`;

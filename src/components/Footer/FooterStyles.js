import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';

export const FooterSection = styled.div`
	color: #fff;
	padding: 60px;
	background: #37517e;
`;

export const FooterRow = styled(Row)`
	justify-content: space-between;
`;

export const IconRow = styled.div`
	display: flex;
	margin-top: 1rem;

	> svg {
		margin: 0 0.5rem;
	}
`;
export const FooterColumn = styled(Column)`
	> span {
		max-width: 20rem;
	}
	gap: 0.8rem;
	/* justify-content: center; */
`;

export const Link = styled.a`
	text-decoration: none;
	margin-bottom: 1rem;
	color: white;
	padding-bottom: 3px;

	&:hover {
		color: white;
		border-bottom: 1px solid #dcdcdc;
		transition: border 0.5s ease-out;
	}
`;

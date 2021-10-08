import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';

export const FooterSection = styled.div`
	color: #fff;
	padding: 60px;
	background: #37517e;

	@media screen and (max-width: 720px) {
		padding: 20px;
	}
`;

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 10px 30px;
	color: #fff;
	margin: auto;
	max-width: 1280px;
	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;
export const IconRow = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-top: 1rem;

	@media screen and (max-width: 720px) {
		justify-content: center;
	}
`;
export const FooterColumn = styled(Column)`
	margin: 1rem 2rem;
	@media screen and (max-width: 720px) {
		text-align: center;
	}
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

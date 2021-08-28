import styled from 'styled-components';
import { Column, Row } from '../../globalStyles';

export const Section = styled.div`
	color: #fff;
	padding: ${({ noPadding }) => (noPadding ? '0px' : '60px 0')};
	background: ${({ white }) => (white ? '#fff' : '#f2f5f7')};
`;

export const InfoRow = styled(Row)`
	justify-content: center;
	/* padding: 50px 30px 0; */
`;

export const InfoColumn = styled(Column)`
	justify-content: center;
	align-items: center;
`;

export const TextWrapper = styled.div`
	display: flex;
	padding: 20px 80px;
	justify-content: center;
	/* align-items: center; */
	flex-direction: column;
	gap: 1rem;
	height: 100%;
	width: 75%;

	@media screen and (max-height: 960px) {
		padding: 20px 30px;
		> h2 {
			text-align: center;
			color: #3c517b;
		}

		> span {
			text-align: center;
			color: #656565;
		}
	}

	> h2 {
		color: #3c517b;
	}

	> span {
		color: #656565;
	}
`;
export const ClientWrapper = styled.div`
	@media screen and (min-width: 960px) {
		> div:nth-child(2n) {
			flex-direction: row-reverse;
		}
	}

	@media screen and (max-width: 960px) {
		> div {
			margin-bottom: 0.6rem;
		}
	}

	img {
		min-height: 100%;
		object-fit: cover;
	}
`;

export const ClientRow = styled(InfoRow)`
	@media screen and (min-height: 960px) {
		min-height: 700px;
	}
`;

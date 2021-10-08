import styled from 'styled-components';
import { GridContainer } from '../../globalStyles';

export const Section = styled.div`
	color: #fff;
	padding: ${({ noPadding }) => (noPadding ? '0px' : '60px 0')};
	background: ${({ white }) => (white ? '#fff' : '#f2f5f7')};
`;

export const TextWrapper = styled.div`
	display: flex;
	padding: 20px 80px;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	height: 100%;

	@media screen and (max-height: 960px) {
		padding: 20px 30px;
	}

	> h2 {
		color: #3c517b;
	}

	> span {
		color: #656565;
	}
`;

export const InfoGrid = styled(GridContainer)`
	/* > .textItem {
		background-color: red;
	} */
	@media screen and (max-width: 960px) {
		grid-template-columns: 1fr;
		grid-template-rows: 2fr;

		> .textItem {
			order: 2;
			text-align: center;
		}

		> div.imageItem {
			order: 1;
		}
	}
`;

export const InfoImage = styled.img`
	min-height: 100%;
	object-fit: cover;
`;

import styled from 'styled-components';

export const CurrencyDropdown = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 72px;
	background-color: #00155c96;
	border: none;
	border-radius: 0 5px 5px 0;
	padding: 15px;

	&:hover {
		background-color: #374881f0;
		border: 1px solid #c2c2c2;
	}

	> span {
		margin-right: 0.8em;
		font-size: 1.1em;
		color: #dfdfdf;
	}

	> img {
		margin-right: 4px;
	}
`;

export const DropdownContainer = styled.div`
	@media screen and (min-width: 961px) {
		position: relative;
	}
`;

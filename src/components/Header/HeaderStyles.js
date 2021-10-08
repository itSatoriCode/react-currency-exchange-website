import styled from 'styled-components';
import { Button, Container } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { FaTypo3 } from 'react-icons/fa';

export const Nav = styled.header`
	/* background: #101522; */
	background: transparent;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: absolute;
	width: 100%;
	/* max-width: 1440px; */
	top: 0;
	z-index: 999;
`;

export const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;
	max-width: 1300px;
	width: 100%;
	${Container}
`;

export const NavLogo = styled(Link)`
	color: #fefefe;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;

	&:hover {
		color: #fff;
	}
`;

export const NavIcon = styled(FaTypo3)`
	margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		/* display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		opacity: 1;
		transition: all 0.5s ease;
		background: #101522; */

		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		padding-top: 80px;
		z-index: -10;
		position: absolute;
		right: ${({ click }) => (click ? 0 : '-100%')};

		/* top: 0px; */
		opacity: 1;
		transition: all 0.5s ease;
		background: #2b3b5d;
	}
`;

export const NavItem = styled.li`
	border-bottom: 2px solid transparent;
	font-size: 1.1rem;

	&:hover {
		border-bottom: 2px solid #4b59f7;
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		font-size: 1.3rem;
		&:hover {
			border: none;
		}
	}
`;

export const NavItemBtn = styled.li`
	@media screen and (max-width: 960px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120px;
	}
`;

export const NavLinks = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	&:hover {
		color: #c2c2c2;
	}

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.7s ease;
		}
	}
`;

export const NavBtnLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;

	> button {
		border: 2px solid #00b9ff;
		background-color: transparent;
		color: #00b9ff;

		&:hover {
			background-color: #00b9ff;
			color: white;
			transition: background-color 0.2s ease-in;
		}

		@media screen and (max-width: 960px) {
			width: 100%;
		}
	}
`;

export const HeaderButton = styled(Button)`
	background-color: transparent;
	${Button}
`;

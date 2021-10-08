import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Column } from '../../globalStyles';

export const LeftColumn = styled(Column)`
	align-items: start;
	width: 50%;

	@media screen and (max-width: 960px) {
		display: none;
	}
`;

export const RightColumn = styled(Column)`
	justify-content: center;

	> div {
		display: flex;
		justify-content: center;
		flex-direction: column;

		@media screen and (max-width: 960px) {
			align-items: center;
		}
	}
	${Column}
`;

export const Title = styled.h1`
	margin-bottom: 1rem;
	font-size: 2.2em;
	line-height: 1.1;
	font-weight: 700;
	text-align: left;
	color: ${({ textColor }) => (textColor ? textColor : '#1c2237')};
`;

export const HeroSection = styled.div`
	color: #fff;
	padding: 120px 0 40px;
	/* background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')}; */
	background-image: url('/images/hero1.svg');
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const Video = styled.video`
	/* border-radius: 5px; */
	border-top-right-radius: 30px;
	/* border: 5px solid yellow; */
	margin-top: 0.4rem;
	box-shadow: 5px 10px #272868;
`;

export const Input = styled.input`
	height: 72px;
	width: 100%;
	padding: 28px 12px 8px;
	font-size: 1.2em;
	border: none;
	border-radius: 5px 0 0 5px;
	background-color: ${({ bc }) => (bc ? bc : '#f0f0f0')};
	outline: none;
`;

export const CountryInput = styled(Input)`
	background-color: #fff;
	padding: 5px;
	margin: 0 10px;
	margin-left: 1rem;
	font-size: 1.1em;
	border-bottom: 1px solid #d1d1d1;
	border-radius: 0;
	height: 64px;
	${Input};
`;

export const Label = styled.span`
	position: ${({ absolute }) => (absolute ? 'absolute' : 'static')};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '0.8em')};
	font-weight: ${({ bold }) => (bold ? '600' : '400')};
	color: #919191;
	margin: 7px;
`;

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

export const List = styled(motion.ul)`
	width: 450px;
	max-height: 590px;
	border-radius: 5px;
	padding: 0 10px 10px;
	z-index: 1000;
	right: 0;
	top: 0;
	background-color: #fdfdfd;
	overflow: auto;
	position: absolute;
	color: black;
	list-style-type: none;

	@media screen and (max-width: 960px) {
		right: 0;
		bottom: 0;
		top: auto;
		width: 100vw;
		max-height: 50vh;
		height: 50vh;
		border-radius: 0;
		padding: 0 40px;
		margin-bottom: 0;
	}
`;

export const ListItem = styled.li`
	display: flex;
	align-items: center;
	padding: ${({ padding }) => (padding ? padding : '6px')};
	border-radius: 4px;
	cursor: ${({ noPointer }) => (noPointer ? 'auto' : 'pointer')};

	> span {
		margin: 5px;
	}

	&:hover {
		background-color: ${({ noHover }) => (noHover ? 'none' : '#d4d4d4')};
	}
`;

export const ConversionList = styled.ul`
	padding-left: 0.5rem;
	margin-left: 2.5rem;
	list-style-type: none;

	@media screen and (max-width: 960px) {
		margin-left: 5.5rem;
	}

	> li {
		position: relative;
		display: flex;

		&::before {
			content: '';
			display: block;
			position: absolute;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			z-index: 2;
			border: 4px solid;
			border-color: inherit;
			outline: 0;
			left: -36px;
			margin-top: 12px;
		}

		&::after {
			content: '';
			position: absolute;
			width: 2px;
			height: 100%;
			border: 0 solid;
			border-color: inherit;
			outline: 0;
			background-color: #d3d5d8;
			background-size: 200% 200%;
			background-position: 0 0;
			height: calc(100% + 16px);
			left: -33px;
		}

		&:first-child:after {
			height: calc(100% + 16px);
			top: 0;
		}

		&:first-child {
			padding-top: 1rem;
		}

		&::after,
		&::before {
			background-color: #253655;
			border-color: #253655;
		}

		> span {
			color: #d5d5d5;
			padding: 0.4rem 0;
			height: 45px;
			margin-right: 0.4rem;
			font-size: clamp(0.8rem, 2vw, 1rem);
		}

		> span.rate {
			color: #00b9ff;
			font-weight: 600;
		}

		> span:first-child {
			min-width: clamp(70px, 5vw, 100px);
		}

		> div {
			position: absolute;
			display: block;
			margin-left: -44px;
			background-color: #fff;
			border-radius: 50%;
			width: 24px;
			height: 24px;
			line-height: 20px;
			z-index: 2;
			text-align: center;
			background-color: #253655;
			text-decoration: none !important;
			border: 1px solid #5d7079;
			top: 8px;
			font-size: 16px;
		}
	}

	> li.total > span {
		font-size: 1.05rem;
		color: white;
		font-weight: 600;
		border-bottom: 1px solid;
		border-color: #253655;
	}
`;

export const Features = styled.div`
	display: flex;
	margin-top: 1rem;
	width: 100%;
	align-items: center;
	/* justify-content: space-between; */

	> div {
		display: flex;
		flex-flow: column;
		height: 170px;
		margin: 0 2rem;
		min-width: 140px;
		justify-content: center;

		> a {
			text-decoration: none;
			font-weight: 600;
			color: #009bff;
		}
		> img {
			margin-top: auto;
		}
		> img.lock {
			width: 40px;
			margin-bottom: 1rem;
		}

		> img.reviews {
			margin-bottom: 1rem;
			width: 56px;
		}
	}
`;

export const GetStarted = styled.div`
	display: flex;
	flex-flow: column;
	width: 100%;
	margin-left: auto;
	> div {
		display: flex;
		justify-content: center;

		> span {
			padding: 10px 15px;
			text-align: center;
		}

		> span:first-child {
			border-right: 1px solid #253655;
		}
		margin: 0.7rem 0;
	}

	> button {
		border: none;
		padding: 10px 10px;
		font-weight: 600;
		background-color: #2ed06e;

		&:hover {
			transition: background-color 0.2s ease-in;
			background-color: #107f3c;
		}
	}
`;

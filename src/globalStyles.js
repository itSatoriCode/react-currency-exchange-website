import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import {
	alignFlex,
	calcGap,
	calcMb,
	columnWidth,
	justifyFlex,
	textAlignment,
} from './styleFunctions';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Averta','Avenir' 'W02','Avenir',Helvetica,Arial,sans-serif;
}
`;

export const Container = styled.div`
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	max-width: 1170px;
`;

export const Button = styled.button`
	border-radius: 1px;
	/* background: #0467fb; */
	white-space: ${({ nowrap }) => (nowrap ? 'nowrap' : 'normal')};
	padding: 5px 30px;
	color: white;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};

	outline: none;
	cursor: pointer;
`;

export const Section = styled.div`
	color: #fff;
	padding: ${({ noPadding }) => (noPadding ? '0px' : '60px 0')};
	background: ${({ white }) => (white ? '#fff' : '#f2f5f7')};
`;

export const Text = styled.span`
	font-weight: ${({ bold }) => (bold ? '700' : '400')};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.05rem')};
	letter-spacing: ${({ space }) => (space ? '1px' : 'normal')};

	${({ textAlign }) =>
		() =>
			textAlignment(textAlign)};
	color: ${({ inverse }) => (inverse ? '#3c517b' : '#fff')};

	margin-bottom: ${({ mb }) =>
		() =>
			calcMb(mb, '1rem')};
`;

export const Heading = styled.h2`
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '2.2rem')};
	line-height: 1.1;
	font-weight: 700;

	${({ textAlign }) =>
		() =>
			textAlignment(textAlign)};

	color: ${({ inverse }) => (inverse ? '#3c517b' : '#fff')};

	margin-bottom: ${({ mb }) =>
		() =>
			calcMb(mb, '1rem')};
`;

export const Column = styled(motion.div)`
	flex: 0 0 auto;
	display: flex;
	flex-direction: column;

	${({ justify }) =>
		() =>
			justifyFlex(justify)};

	${({ align }) => {
		return () => alignFlex(align);
	}};

	@media screen and (max-width: 400px) {
		${({ xs }) => {
			return () => columnWidth(xs);
		}};
	}

	@media screen and (min-width: 768px) {
		${({ sm }) => {
			return () => columnWidth(sm);
		}};
	}

	@media screen and (min-width: 960px) {
		${({ md }) => {
			return () => columnWidth(md);
		}};
	}
`;

export const Row = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;

	${({ justify }) =>
		() =>
			justifyFlex(justify)};

	${({ align }) => {
		return () => alignFlex(align);
	}};

	${({ gap }) => {
		return () => calcGap(gap);
	}};
	> * {
		width: 100%;
		max-width: 100%;
	}
`;

export default GlobalStyle;

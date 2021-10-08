import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Averta','Avenir' 'W02','Avenir',Helvetica,Arial,sans-serif;
}
`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin: ${({ margin }) => (margin ? margin : '0 auto')};
	padding: ${({ padding }) => (padding ? padding : '0 15px')};
`;

export const Section = styled.section`
	padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ white }) => (white ? '#fff' : '#f2f5f7')};
	color: ${({ color }) => (color ? color : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: ${({ gtc }) => (gtc ? gtc : '')};
	grid-template-rows: ${({ gtr }) => (gtr ? gtr : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	padding-top: ${({ pt }) => (pt ? pt : '')};
	padding-bottom: ${({ pb }) => (pb ? pb : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : '100%')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	color: ${({ color }) => (color ? color : '')};
	text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const GridItem = styled.div`
	display: ${({ display }) => (display ? display : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	order: ${({ order }) => (order ? order : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	padding-top: ${({ pt }) => (pt ? pt : '')};
	padding-bottom: ${({ pb }) => (pb ? pb : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : '100%')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	color: ${({ color }) => (color ? color : '')};
	text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	margin-bottom: 2rem;
	color: ${({ inverse }) => (inverse ? '$403ae3' : '#fff')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const Heading = styled.h2`
	font-size: clamp(2rem, 6vw, 3rem);
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	color: ${({ inverse }) => (inverse ? '#3c517b' : '#fff')};
	letter-spacing: 0.2rem;
	line-height: 1.1;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;

export const Row = styled.div`
	display: flex;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : '100%')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
	color: ${({ color }) => (color ? color : '')};
	text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const Column = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : '')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	color: ${({ color }) => (color ? color : '')};
	text-align: ${({ textAlign }) => (textAlign ? textAlign : '')};
`;

export const Text = styled.span`
	font-size: ${({ size }) => (size ? size : '')};
	font-weight: ${({ weight }) => (weight ? weight : '')};
	letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
	text-align: ${({ align }) => (align ? align : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : '')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
	height: ${({ height }) => (height ? height : '')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : '')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : '')};
	color: ${({ color }) => (color ? color : '')};
	color: ${({ inverse }) => (inverse ? '#3c517b' : '#fff')};
`;

// export const Text = styled.span`
// 	font-weight: ${({ bold }) => (bold ? '700' : '400')};
// 	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.05rem')};
// 	letter-spacing: ${({ space }) => (space ? '1px' : 'normal')};

// 	${({ textAlign }) =>
// 		() =>
// 			textAlignment(textAlign)};
// 	color: ${({ inverse }) => (inverse ? '#3c517b' : '#fff')};

// 	margin-bottom: ${({ mb }) =>
// 		() =>
// 			calcMb(mb, '1rem')};
// `;

export const Button = styled.button`
	border-radius: 1px;
	white-space: ${({ nowrap }) => (nowrap ? 'nowrap' : 'normal')};
	padding: 5px 30px;
	color: white;
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1rem')};

	outline: none;
	cursor: pointer;
`;

export default GlobalStyle;

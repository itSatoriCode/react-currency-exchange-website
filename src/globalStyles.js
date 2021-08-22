import styled, { createGlobalStyle } from 'styled-components';

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
	@media (min-width: 768px) {
		width: 750px;
	}
	@media (min-width: 992px) {
		width: 970px;
	}
	@media (min-width: 1200px) {
		width: 1170px;
	}
`;

// export const Col

export const Button = styled.button`
	border-radius: 4px;
	background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '#0467FB')};
	white-space: ${({ nowrap }) => (nowrap ? 'nowrap' : 'normal')};
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: #fff;
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		transition: all 0.5s ease-out;
		/* background-color: #2f3cca; */
		background-color: ${({ hoverColor }) => (hoverColor ? hoverColor : '#2f3cca')};
	}

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export const Text = styled.span`
	font-weight: ${({ notBold }) => (notBold ? '400' : '600')};

	font-size: ${({ fontSize }) => (fontSize ? fontSize : '1.05rem')};
	letter-spacing: ${({ space }) => (space ? '1px' : 'normal')};
`;

export default GlobalStyle;

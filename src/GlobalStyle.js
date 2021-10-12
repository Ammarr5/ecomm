import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*, *::before, *::after{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	a, a:visited, button{
		color: inherit;
		text-decoration: inherit;
		background-color: inherit;
		border: inherit;
	}
	body{
		font-family: 'Roboto', 'sans-serif';
	}
`;

export default GlobalStyle;

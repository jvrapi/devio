import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body{
		background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
	}
	body, input, textarea, button {
		font: 400 16px 'Roboto', sans-serif;
	}
  input:focus {
    outline: none !important;
  }
  button{
    border: 2px solid ${props => props.theme.colors.secondary};
    cursor: pointer;
    transition: 0.2s;
    :hover {
      background: #ccc;
    }
  }
`

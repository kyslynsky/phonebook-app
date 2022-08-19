import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 7px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  color: #ddd;

  &:hover,
  &:focus {
    color: #007fff;
  }
`;

export const Input = styled.input`
  padding: 8px 33px 8px;
  border: none;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -5px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    outline: 1px solid #007fff;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }
`;

export const Button = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.3;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    background-color: #1565c0;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  &:disabled {
    background-color: #ddd;
  }
`;

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgba(40, 45, 108, 0.049);
  color: #212121;
  line-height: 1.5;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

button {
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: inherit;
}

body {
  -webkit-font-smoothing: antialiased;
  margin: 0 auto;
}

body, input, button {
  font: 16px arial;
}

#root {
  margin: 0px auto;
  padding: 150px 150px;
}

button {
  cursor: pointer;
}

`;

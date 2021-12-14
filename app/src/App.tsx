import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

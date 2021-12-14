import { ThemeProvider } from "styled-components";
import { Router } from "./routes";

import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;

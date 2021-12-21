import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/AuthContext";
import { Router } from "./routes";

import { GlobalStyle } from "./styles/globalStyles";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;

import { CssBaseline, ThemeProvider } from "@mui/material";
import { HomePage } from "./pages";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;

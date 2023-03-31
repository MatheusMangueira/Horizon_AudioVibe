import { createTheme, PaletteOptions } from "@mui/material";

const palette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#424242",
    dark: "#242526",
    contrastText: "#f1f1f1",
  },
  background: {
    default: "#242526",
  },
  secondary: {
    main: "#e1b70c",
    dark: "#b38c00",
  },
};

export const theme = createTheme({
  palette,
});

// MUI theme
import { createTheme } from "@mui/material/styles";
import palette from "./palette";

const theme = createTheme({
  palette,

  typography: {
    fontFamily: "'Poppins', sans-serif",

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 16,
  },
});

export default theme;
import { createTheme } from "@mui/material/styles";
import { blue, cyan, green, amber, red, grey } from "@mui/material/colors";

/// base to theme to work with dark mode
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: cyan[100],
      contrastText: "#fff",
    },
    secondary: {
      main: green[400],
      contrastText: "#fff",
    },
    warning: {
      main: amber[500],
      contrastText: "#000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
      color: blue[500],
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: green[400],
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: amber[500],
    },
    body1: {
      fontSize: "1rem",
      color: "#fff",
    },
    body2: {
      fontSize: "0.875rem",
      color: grey[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          backgroundColor: grey[800],
        },
      },
    },
  },
});

export default theme;

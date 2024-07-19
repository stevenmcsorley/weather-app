import { createTheme } from "@mui/material/styles";
import { blue, cyan, green, amber, red, grey } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark", // Enable dark mode
    primary: {
      main: cyan[100], // Adjusted to be more visible on dark background
      contrastText: "#fff",
    },
    secondary: {
      main: green[400], // Adjusted to be more visible on dark background
      contrastText: "#fff",
    },
    warning: {
      main: amber[500], // Warm yellow for warnings or sunny days
      contrastText: "#000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey[900], // Dark grey background for the app
      paper: grey[800], // Slightly lighter grey for cards and other surfaces
    },
    text: {
      primary: "#fff", // Light text for better readability on dark background
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
          borderRadius: "8px", // Rounded corners for buttons
          textTransform: "none", // No uppercase text
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px", // Rounded corners for cards
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Slightly stronger shadow for dark theme
          backgroundColor: grey[800], // Ensuring the card background is dark
        },
      },
    },
  },
});

export default theme;

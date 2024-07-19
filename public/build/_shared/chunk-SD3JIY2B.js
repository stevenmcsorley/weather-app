import {
  amber_default,
  blue_default,
  createTheme_default,
  cyan_default,
  green_default,
  grey_default,
  red_default
} from "/build/_shared/chunk-FFFQLQI3.js";
import {
  createHotContext
} from "/build/_shared/chunk-VBXOWJ6H.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/src/ClientStyleContext.tsx
var React = __toESM(require_react());
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/ClientStyleContext.tsx"
  );
  import.meta.hot.lastModified = "1721246257386.1956";
}
var ClientStyleContext_default = React.createContext({
  reset: () => {
  }
});

// app/src/theme.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/theme.ts"
  );
  import.meta.hot.lastModified = "1721253078650.254";
}
var theme = createTheme_default({
  palette: {
    mode: "dark",
    // Enable dark mode
    primary: {
      main: cyan_default[100],
      // Adjusted to be more visible on dark background
      contrastText: "#fff"
    },
    secondary: {
      main: green_default[400],
      // Adjusted to be more visible on dark background
      contrastText: "#fff"
    },
    warning: {
      main: amber_default[500],
      // Warm yellow for warnings or sunny days
      contrastText: "#000"
    },
    error: {
      main: red_default.A400
    },
    background: {
      default: grey_default[900],
      // Dark grey background for the app
      paper: grey_default[800]
      // Slightly lighter grey for cards and other surfaces
    },
    text: {
      primary: "#fff",
      // Light text for better readability on dark background
      secondary: grey_default[500]
    }
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
      color: blue_default[500]
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: green_default[400]
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: amber_default[500]
    },
    body1: {
      fontSize: "1rem",
      color: "#fff"
    },
    body2: {
      fontSize: "0.875rem",
      color: grey_default[500]
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          // Rounded corners for buttons
          textTransform: "none"
          // No uppercase text
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          // Rounded corners for cards
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          // Slightly stronger shadow for dark theme
          backgroundColor: grey_default[800]
          // Ensuring the card background is dark
        }
      }
    }
  }
});
var theme_default = theme;

export {
  ClientStyleContext_default,
  theme_default
};
//# sourceMappingURL=/build/_shared/chunk-SD3JIY2B.js.map

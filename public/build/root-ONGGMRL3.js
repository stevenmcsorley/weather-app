import {
  ClientStyleContext_default,
  theme_default
} from "/build/_shared/chunk-RKGKIN5F.js";
import {
  AppBar_default,
  Box_default,
  Button_default,
  Container_default,
  Toolbar_default,
  Typography_default,
  require_node,
  useEnhancedEffect_default
} from "/build/_shared/chunk-UO2AQSH4.js";
import {
  init_emotion_react_browser_esm,
  styled_default,
  withEmotionCache
} from "/build/_shared/chunk-FFFQLQI3.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  Form,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError
} from "/build/_shared/chunk-XU2DGYEO.js";
import {
  createHotContext
} from "/build/_shared/chunk-VBXOWJ6H.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/root.tsx
var React = __toESM(require_react());
var import_node = __toESM(require_node());
init_emotion_react_browser_esm();

// app/src/Layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/src/Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/Layout.tsx"
  );
  import.meta.hot.lastModified = "1721252188544.3694";
}
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { maxWidth: "lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box_default, { sx: {
    my: 4
  }, children }, void 0, false, {
    fileName: "app/src/Layout.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/src/Layout.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/NavBar.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/NavBar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/NavBar.tsx"
  );
  import.meta.hot.lastModified = "1721407146657.4421";
}
var StyledNavLink = styled_default(NavLink)(({
  theme
}) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  margin: theme.spacing(1),
  "&.active": {
    fontWeight: "bold",
    color: theme.palette.primary.main
  }
}));
_c2 = StyledNavLink;
function NavBar({
  userId,
  username
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AppBar_default, { position: "static", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Toolbar_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography_default, { variant: "h6", component: "div", sx: {
      flexGrow: 1
    }, children: "WeatherApp" }, void 0, false, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { color: "inherit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StyledNavLink, { to: "/weather", children: "Home" }, void 0, false, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this),
    userId ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography_default, { variant: "body1", sx: {
        ml: 2,
        mr: 2
      }, children: [
        "Welcome, ",
        username || userId
      ] }, void 0, true, {
        fileName: "app/components/NavBar.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { color: "inherit", type: "submit", children: "Logout" }, void 0, false, {
        fileName: "app/components/NavBar.tsx",
        lineNumber: 58,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/NavBar.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 50,
      columnNumber: 19
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { color: "inherit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StyledNavLink, { to: "/", children: "Login" }, void 0, false, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 62,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c22 = NavBar;
var _c2;
var _c22;
$RefreshReg$(_c2, "StyledNavLink");
$RefreshReg$(_c22, "NavBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
  import.meta.hot.lastModified = "1721406990029.985";
}
var Document = _s(withEmotionCache(_c3 = _s(({
  children,
  title
}, emotionCache) => {
  _s();
  const clientStyleData = React.useContext(ClientStyleContext_default);
  useEnhancedEffect_default(() => {
    emotionCache.sheet.container = document.head;
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      emotionCache.sheet._insertTag(tag);
    });
    clientStyleData.reset();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "theme-color", content: theme_default.palette.primary.main }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: title }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 20
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "emotion-insertion-point", content: "emotion-insertion-point" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 57,
    columnNumber: 10
  }, this);
}, "DLeJk/J5GiFhAF52FJ/3oWg5qx4=", false, function() {
  return [useEnhancedEffect_default];
})), "DLeJk/J5GiFhAF52FJ/3oWg5qx4=", false, function() {
  return [useEnhancedEffect_default];
});
_c23 = Document;
function App() {
  _s2();
  const {
    userId,
    username
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavBar, { userId, username }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, { context: {
      userId
    } }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 119,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 118,
    columnNumber: 10
  }, this);
}
_s2(App, "bebWePBgQsFKJhIlK2VjMYyDTME=", false, function() {
  return [useLoaderData];
});
_c32 = App;
function ErrorBoundary() {
  _s3();
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    let message;
    switch (error.status) {
      case 401:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that you do not have access to." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 138,
          columnNumber: 19
        }, this);
        break;
      case 404:
        message = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Oops! Looks like you tried to visit a page that does not exist." }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 144,
          columnNumber: 19
        }, this);
        break;
      default:
        throw new Error(error.data || error.statusText);
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: `${error.status} ${error.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: [
        error.status,
        ": ",
        error.statusText
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 151,
        columnNumber: 11
      }, this),
      message
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 150,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 149,
      columnNumber: 12
    }, this);
  }
  if (error instanceof Error) {
    console.error(error);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "There was an error" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error.message }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 162,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 161,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 160,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Unknown Error" }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 170,
    columnNumber: 10
  }, this);
}
_s3(ErrorBoundary, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
  return [useRouteError];
});
_c4 = ErrorBoundary;
var _c3;
var _c23;
var _c32;
var _c4;
$RefreshReg$(_c3, "Document$withEmotionCache");
$RefreshReg$(_c23, "Document");
$RefreshReg$(_c32, "App");
$RefreshReg$(_c4, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  App as default
};
//# sourceMappingURL=/build/root-ONGGMRL3.js.map

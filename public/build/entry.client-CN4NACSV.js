import {
  require_client
} from "/build/_shared/chunk-X3PXDGUE.js";
import {
  ClientStyleContext_default,
  theme_default
} from "/build/_shared/chunk-RKGKIN5F.js";
import {
  CacheProvider,
  CssBaseline_default,
  ThemeProvider,
  createCache,
  init_emotion_cache_browser_esm,
  init_emotion_react_browser_esm
} from "/build/_shared/chunk-FFFQLQI3.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  RemixBrowser
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

// app/entry.client.tsx
var React = __toESM(require_react());
var ReactDOM = __toESM(require_client());
init_emotion_react_browser_esm();

// app/src/createEmotionCache.ts
init_emotion_cache_browser_esm();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/src/createEmotionCache.ts"
  );
  import.meta.hot.lastModified = "1721246299040.0254";
}
function createEmotionCache() {
  return createCache({ key: "css" });
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/entry.client.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/entry.client.tsx"
  );
  import.meta.hot.lastModified = "1721317652127.7598";
}
if (true) {
  console.log("HMR enabled");
}
function ClientCacheProvider({
  children
}) {
  _s();
  const [cache, setCache] = React.useState(createEmotionCache());
  const clientStyleContextValue = React.useMemo(() => ({
    reset() {
      setCache(createEmotionCache());
    }
  }), []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientStyleContext_default.Provider, { value: clientStyleContextValue, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, { value: cache, children }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s(ClientCacheProvider, "SCB+MKDmvJaXD2ZKWjt8CMfkuGc=");
_c = ClientCacheProvider;
var hydrate = () => {
  React.startTransition(() => {
    ReactDOM.hydrateRoot(document, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientCacheProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, { theme: theme_default, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CssBaseline_default, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/entry.client.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/entry.client.tsx",
      lineNumber: 52,
      columnNumber: 36
    }, this));
  });
};
if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  setTimeout(hydrate, 1);
}
var _c;
$RefreshReg$(_c, "ClientCacheProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
//# sourceMappingURL=/build/entry.client-CN4NACSV.js.map

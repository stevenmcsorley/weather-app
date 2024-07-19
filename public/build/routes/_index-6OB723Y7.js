import {
  require_bcrypt
} from "/build/_shared/chunk-4RTNJEM4.js";
import {
  Button_default,
  Container_default,
  TextField_default,
  Typography_default,
  require_node
} from "/build/_shared/chunk-UO2AQSH4.js";
import "/build/_shared/chunk-FFFQLQI3.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  Form,
  useActionData
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

// app/routes/_index.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_bcryptjs = __toESM(require_bcrypt());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1721406803850.7766";
}
function Login() {
  _s();
  const actionData = useActionData();
  const [username, setUsername] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { maxWidth: "sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h4", component: "h1", gutterBottom: true, children: "Login" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { fullWidth: true, label: "Username", name: "username", value: username, onChange: (e) => setUsername(e.target.value), margin: "normal", inputProps: {
        "data-testid": "username-input"
      } }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { fullWidth: true, label: "Password", name: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), margin: "normal", inputProps: {
        "data-testid": "password-input"
      } }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { type: "submit", variant: "contained", color: "primary", "data-testid": "login-button", children: "Login" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { color: "error", "data-testid": "error-message", children: actionData.error }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 85,
      columnNumber: 29
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
}
_s(Login, "MICnmMz6wmQFumyKZiGAc4r5wWg=", false, function() {
  return [useActionData];
});
_c = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Login as default
};
//# sourceMappingURL=/build/routes/_index-6OB723Y7.js.map

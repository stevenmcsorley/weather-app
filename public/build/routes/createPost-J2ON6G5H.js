import {
  Button_default,
  CardContent_default,
  Card_default,
  Container_default,
  Grid_default,
  TextField_default,
  Typography_default
} from "/build/_shared/chunk-2JNT76UT.js";
import "/build/_shared/chunk-SB7HBWVQ.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Form,
  useActionData,
  useNavigation
} from "/build/_shared/chunk-XU2DGYEO.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-VBXOWJ6H.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/createPost.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/createPost.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/createPost.tsx"
  );
  import.meta.hot.lastModified = "1721272628631.482";
}
function spinner() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Submitting..." }, void 0, false, {
    fileName: "app/routes/createPost.tsx",
    lineNumber: 87,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/createPost.tsx",
    lineNumber: 86,
    columnNumber: 10
  }, this);
}
function CreatePost() {
  var _a, _b, _c2, _d;
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { container: true, spacing: 4, justifyContent: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, md: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h5", component: "div", children: "Create Post" }, void 0, false, {
      fileName: "app/routes/createPost.tsx",
      lineNumber: 102,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { container: true, spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { fullWidth: true, label: "User Id", type: "number", id: "userid", name: "userid", variant: "outlined" }, void 0, false, {
          fileName: "app/routes/createPost.tsx",
          lineNumber: 108,
          columnNumber: 21
        }, this),
        ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.userid) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { color: "error", children: actionData.errors.userid ? actionData.errors.userid : null }, void 0, false, {
          fileName: "app/routes/createPost.tsx",
          lineNumber: 109,
          columnNumber: 52
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/createPost.tsx",
        lineNumber: 107,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { fullWidth: true, label: "slug", type: "text", id: "slug", name: "slug", variant: "outlined", required: true }, void 0, false, {
          fileName: "app/routes/createPost.tsx",
          lineNumber: 115,
          columnNumber: 21
        }, this),
        ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.slug) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { color: "error", children: actionData.errors.slug ? actionData.errors.slug : null }, void 0, false, {
          fileName: "app/routes/createPost.tsx",
          lineNumber: 116,
          columnNumber: 50
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/createPost.tsx",
        lineNumber: 114,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { fullWidth: true, label: "Title", type: "text", id: "title", name: "title", variant: "outlined" }, void 0, false, {
          fileName: "app/routes/createPost.tsx",
          lineNumber: 121,
          columnNumber: 21
        }, this),
        ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.title) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { color: "error", children: actionData.errors.title ? actionData.errors.title : null }, void 0, false, {
          fileName: "app/routes/createPost.tsx",
          lineNumber: 122,
          columnNumber: 51
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/createPost.tsx",
        lineNumber: 120,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField_default, { fullWidth: true, label: "Content", multiline: true, rows: 4, id: "content", name: "content", variant: "outlined" }, void 0, false, {
          fileName: "app/routes/createPost.tsx",
          lineNumber: 127,
          columnNumber: 21
        }, this),
        ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.content) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { color: "error", children: actionData.errors.content ? actionData.errors.content : null }, void 0, false, {
          fileName: "app/routes/createPost.tsx",
          lineNumber: 128,
          columnNumber: 53
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/createPost.tsx",
        lineNumber: 126,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "contained", color: "primary", type: "submit", style: {
          display: navigation.state === "submitting" ? "none" : "block"
        }, children: "Create Post" }, void 0, false, {
          fileName: "app/routes/createPost.tsx",
          lineNumber: 133,
          columnNumber: 21
        }, this),
        navigation.state === "submitting" ? spinner() : null
      ] }, void 0, true, {
        fileName: "app/routes/createPost.tsx",
        lineNumber: 132,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/createPost.tsx",
      lineNumber: 106,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/createPost.tsx",
      lineNumber: 105,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/createPost.tsx",
    lineNumber: 101,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/createPost.tsx",
    lineNumber: 100,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/createPost.tsx",
    lineNumber: 99,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/createPost.tsx",
    lineNumber: 98,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/createPost.tsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
}
_s(CreatePost, "e3rMULficn7ldQYYArv00m53mwQ=", false, function() {
  return [useActionData, useNavigation];
});
_c = CreatePost;
var _c;
$RefreshReg$(_c, "CreatePost");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CreatePost as default
};
//# sourceMappingURL=/build/routes/createPost-J2ON6G5H.js.map

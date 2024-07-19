import {
  CardContent_default,
  Card_default,
  Container_default,
  Grid_default,
  Link_default,
  Typography_default
} from "/build/_shared/chunk-2JNT76UT.js";
import "/build/_shared/chunk-SB7HBWVQ.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  useMatches
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

// app/components/PostList.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/PostList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/PostList.tsx"
  );
  import.meta.hot.lastModified = "1721259035366.6885";
}
function PostList({
  posts
}) {
  const post = posts.sort((a, b) => {
    return b.id - a.id;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { container: true, spacing: 4, children: [
    post.length === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h5", component: "div", children: "No posts found" }, void 0, false, {
      fileName: "app/components/PostList.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/PostList.tsx",
      lineNumber: 32,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/PostList.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/PostList.tsx",
      lineNumber: 30,
      columnNumber: 31
    }, this),
    posts.map((post2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, md: post2.id < posts.length ? 6 : 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h5", component: "div", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link_default, { href: `/posts/${post2.slug}`, underline: "none", children: post2.title }, void 0, false, {
        fileName: "app/components/PostList.tsx",
        lineNumber: 43,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/PostList.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "subtitle1", color: "textSecondary", children: post2.subtitle }, void 0, false, {
        fileName: "app/components/PostList.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body2", component: "p", children: post2.content }, void 0, false, {
        fileName: "app/components/PostList.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "caption", color: "textSecondary", children: post2.author }, void 0, false, {
          fileName: "app/components/PostList.tsx",
          lineNumber: 54,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "caption", color: "textSecondary", style: {
          marginLeft: "1rem"
        }, children: post2.date }, void 0, false, {
          fileName: "app/components/PostList.tsx",
          lineNumber: 57,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/PostList.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PostList.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/PostList.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, post2.id, false, {
      fileName: "app/components/PostList.tsx",
      lineNumber: 39,
      columnNumber: 28
    }, this))
  ] }, void 0, true, {
    fileName: "app/components/PostList.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/PostList.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = PostList;
var _c;
$RefreshReg$(_c, "PostList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/posts._index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/posts._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/posts._index.tsx"
  );
  import.meta.hot.lastModified = "1721252584276.3738";
}
function PostsLandingPage() {
  _s();
  const matches = useMatches();
  const posts = matches[1].data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Typography_default, { variant: "h4", component: "h1", gutterBottom: true, children: "Posts" }, void 0, false, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Grid_default, { container: true, spacing: 4, marginTop: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PostList, { posts }, void 0, false, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 34,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/posts._index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/posts._index.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_s(PostsLandingPage, "9HQn1rkLPttBP+QSK6GDQicXTV4=", false, function() {
  return [useMatches];
});
_c2 = PostsLandingPage;
var _c2;
$RefreshReg$(_c2, "PostsLandingPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PostsLandingPage as default
};
//# sourceMappingURL=/build/routes/posts._index-PGBM4BYU.js.map

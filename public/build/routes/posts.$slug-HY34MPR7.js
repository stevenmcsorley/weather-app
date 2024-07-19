import {
  CardContent_default,
  Card_default,
  Grid_default,
  Link_default,
  Typography_default
} from "/build/_shared/chunk-2JNT76UT.js";
import "/build/_shared/chunk-SB7HBWVQ.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  useLoaderData,
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

// app/components/Post.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Post.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Post.tsx"
  );
  import.meta.hot.lastModified = "1721258398561.1882";
}
function Post({
  posts
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid_default, { item: true, xs: 12, md: posts.id > 1 ? 6 : 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "h5", component: "div", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link_default, { href: `/posts/${posts.slug}`, underline: "none", children: posts.title }, void 0, false, {
      fileName: "app/components/Post.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Post.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "subtitle1", color: "textSecondary", children: posts.subtitle }, void 0, false, {
      fileName: "app/components/Post.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "body2", component: "p", children: posts.content }, void 0, false, {
      fileName: "app/components/Post.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "caption", color: "textSecondary", children: posts.author }, void 0, false, {
        fileName: "app/components/Post.tsx",
        lineNumber: 40,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typography_default, { variant: "caption", color: "textSecondary", style: {
        marginLeft: "1rem"
      }, children: posts.date }, void 0, false, {
        fileName: "app/components/Post.tsx",
        lineNumber: 43,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Post.tsx",
      lineNumber: 39,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Post.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Post.tsx",
    lineNumber: 26,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Post.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c = Post;
var _c;
$RefreshReg$(_c, "Post");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/posts.$slug.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/posts.$slug.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/posts.$slug.tsx"
  );
  import.meta.hot.lastModified = "1721233537708.9482";
}
function SinglePost() {
  _s();
  const slug = useLoaderData();
  const matches = useMatches();
  const posts = matches[1].data;
  const post = posts.find((post2) => post2.slug === slug);
  if (!post) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "Post not found" }, void 0, false, {
      fileName: "app/routes/posts.$slug.tsx",
      lineNumber: 37,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Post, { posts: post }, void 0, false, {
    fileName: "app/routes/posts.$slug.tsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
_s(SinglePost, "4xlTDE+S/2VB8UBZM2BvwhdgKxs=", false, function() {
  return [useLoaderData, useMatches];
});
_c2 = SinglePost;
var _c2;
$RefreshReg$(_c2, "SinglePost");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SinglePost as default
};
//# sourceMappingURL=/build/routes/posts.$slug-HY34MPR7.js.map

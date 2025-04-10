/*! For license information please see bdc65484.b38785f3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15181],{28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>p});var t=r(96540);const o={},s=t.createContext(o);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}},29698:(e,n)=>{var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function o(e,n,t){var o=null;if(void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),"key"in n)for(var s in t={},n)"key"!==s&&(t[s]=n[s]);else t=n;return n=t.ref,{$$typeof:r,type:e,key:o,ref:void 0!==n?n:null,props:t}}n.Fragment=t,n.jsx=o,n.jsxs=o},74848:(e,n,r)=>{e.exports=r(29698)},80112:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>p,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/running-puppeteer-in-extensions","title":"Running Puppeteer in Chrome extensions","description":"Chrome extensions environment is significantly different from the usual Node.JS environment, therefore, the support for running Puppeteer in chrome.debugger","source":"@site/versioned_docs/version-24.6.1/guides/running-puppeteer-in-extensions.md","sourceDirName":"guides","slug":"/guides/running-puppeteer-in-extensions","permalink":"/guides/running-puppeteer-in-extensions","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{},"sidebar":"docs","previous":{"title":"Running Puppeteer in the browser","permalink":"/guides/running-puppeteer-in-the-browser"},"next":{"title":"Examples & Use cases","permalink":"/examples"}}');var o=r(74848),s=r(28453);const i={},p="Running Puppeteer in Chrome extensions",a={},c=[{value:"How to run Puppeteer in Chrome extensions",id:"how-to-run-puppeteer-in-chrome-extensions",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"running-puppeteer-in-chrome-extensions",children:"Running Puppeteer in Chrome extensions"})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["Chrome extensions environment is significantly different from the usual Node.JS environment, therefore, the support for running Puppeteer in chrome.debugger\nis currently experimental. Please submit issues ",(0,o.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/issues/new/choose",children:"https://github.com/puppeteer/puppeteer/issues/new/choose"})," if you encounted bugs."]})}),"\n",(0,o.jsxs)(n.p,{children:["Chrome Extensions allow accessing Chrome DevTools Protocol via ",(0,o.jsx)(n.a,{href:"https://developer.chrome.com/docs/extensions/reference/api/debugger",children:(0,o.jsx)(n.code,{children:"chrome.debugger"})}),".\n",(0,o.jsx)(n.a,{href:"https://developer.chrome.com/docs/extensions/reference/api/debugger",children:(0,o.jsx)(n.code,{children:"chrome.debugger"})})," provides a restricted access to CDP and allows attaching to one\npage at a time. Therefore, Puppeteer requires a different transport to be used and Puppeteer's view is limited to a single page. It means you can\ninteract with a single page and its frames and workers but cannot create new pages using Puppeteer. To create a new page you need to use the\n",(0,o.jsx)(n.a,{href:"https://developer.chrome.com/docs/extensions/reference/api/tabs",children:(0,o.jsx)(n.code,{children:"chrome.tabs"})})," API and establish a new Puppeteer connection."]}),"\n",(0,o.jsx)(n.h2,{id:"how-to-run-puppeteer-in-chrome-extensions",children:"How to run Puppeteer in Chrome extensions"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/tree/main/examples/puppeteer-in-extension",children:"https://github.com/puppeteer/puppeteer/tree/main/examples/puppeteer-in-extension"})," for a complete example."]})}),"\n",(0,o.jsx)(n.p,{children:"To run Puppeteer in an extension, first you need to produce a browser-compatible build using a bundler such as rollup or webpack:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["When importing Puppeteer use the browser-specific entrypoint from puppeteer-core ",(0,o.jsx)(n.code,{children:"puppeteer-core/lib/esm/puppeteer/puppeteer-core-browser.js'"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import {\n  connect,\n  ExtensionTransport,\n} from 'puppeteer-core/lib/esm/puppeteer/puppeteer-core-browser.js';\n\n// Create a tab or find a tab to attach to.\nconst tab = await chrome.tabs.create({\n  url,\n});\n// Connect Puppeteer using the ExtensionTransport.connectTab.\nconst browser = await connect({\n  transport: await ExtensionTransport.connectTab(tab.id),\n});\n// You will have a single page on the browser object, which corresponds\n// to the tab you connected the transport to.\nconst [page] = await browser.pages();\n// Perform the usual operations with Puppeteer page.\nconsole.log(await page.evaluate('document.title'));\nbrowser.disconnect();\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Build your extension using a bundler. For example, the following configuration can be used with rollup:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"import {nodeResolve} from '@rollup/plugin-node-resolve';\n\nexport default {\n  input: 'main.mjs',\n  output: {\n    format: 'esm',\n    dir: 'out',\n  },\n  // If you do not need to use WebDriver BiDi protocol,\n  // exclude chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js to minimize the bundle size.\n  external: ['chromium-bidi/lib/cjs/bidiMapper/BidiMapper.js'],\n  plugins: [\n    nodeResolve({\n      // Indicate that we target a browser environment.\n      browser: true,\n      // Exclude any dependencies except for puppeteer-core.\n      // `npm install puppeteer-core` # To install puppeteer-core if needed.\n      resolveOnly: ['puppeteer-core'],\n    }),\n  ],\n};\n"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}}}]);
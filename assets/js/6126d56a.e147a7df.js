/*! For license information please see 6126d56a.e147a7df.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85806],{20603:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>a,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/puppeteer.browser.createbrowsercontext","title":"Browser.createBrowserContext() method","description":"Creates a new browser context.","source":"@site/../docs/api/puppeteer.browser.createbrowsercontext.md","sourceDirName":"api","slug":"/api/puppeteer.browser.createbrowsercontext","permalink":"/next/api/puppeteer.browser.createbrowsercontext","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Browser.createBrowserContext"},"sidebar":"api","previous":{"title":"Browser.cookies","permalink":"/next/api/puppeteer.browser.cookies"},"next":{"title":"Browser.defaultBrowserContext","permalink":"/next/api/puppeteer.browser.defaultbrowsercontext"}}');var s=t(74848),o=t(28453);const a={sidebar_label:"Browser.createBrowserContext"},i="Browser.createBrowserContext() method",c={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"browsercreatebrowsercontext-method",children:"Browser.createBrowserContext() method"})}),"\n",(0,s.jsxs)(r.p,{children:["Creates a new ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser context"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["This won't share cookies/cache with other ",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"browser contexts"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Browser {\n  abstract createBrowserContext(\n    options?: BrowserContextOptions,\n  ): Promise<BrowserContext>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontextoptions",children:"BrowserContextOptions"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"(Optional)"})})})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(r.p,{children:["Promise<",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.browsercontext",children:"BrowserContext"}),">"]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\nconst browser = await puppeteer.launch();\n// Create a new browser context.\nconst context = await browser.createBrowserContext();\n// Create a new page in a pristine context.\nconst page = await context.newPage();\n// Do stuff\nawait page.goto('https://example.com');\n"})})]})}function x(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,r,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),"key"in r)for(var o in n={},r)"key"!==o&&(n[o]=r[o]);else n=r;return r=n.ref,{$$typeof:t,type:e,key:s,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=s,r.jsxs=s},74848:(e,r,t)=>{e.exports=t(29698)}}]);
/*! For license information please see 487cdd77.49f597c1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9459],{28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>i});var n=t(96540);const s={},o=n.createContext(s);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function s(e,r,n){var s=null;if(void 0!==n&&(s=""+n),void 0!==r.key&&(s=""+r.key),"key"in r)for(var o in n={},r)"key"!==o&&(n[o]=r[o]);else n=r;return r=n.ref,{$$typeof:t,type:e,key:s,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=s,r.jsxs=s},56905:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"api/puppeteer.page.goforward","title":"Page.goForward() method","description":"This method navigate to the next page in history.","source":"@site/../docs/api/puppeteer.page.goforward.md","sourceDirName":"api","slug":"/api/puppeteer.page.goforward","permalink":"/next/api/puppeteer.page.goforward","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"Page.goForward"},"sidebar":"api","previous":{"title":"Page.goBack","permalink":"/next/api/puppeteer.page.goback"},"next":{"title":"Page.goto","permalink":"/next/api/puppeteer.page.goto"}}');var s=t(74848),o=t(28453);const a={sidebar_label:"Page.goForward"},i="Page.goForward() method",p={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"pagegoforward-method",children:"Page.goForward() method"})}),"\n",(0,s.jsx)(r.p,{children:"This method navigate to the next page in history."}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  abstract goForward(options?: WaitForOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/next/api/puppeteer.waitforoptions",children:"WaitForOptions"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," Navigation Parameter"]})})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(r.p,{children:["Promise<",(0,s.jsx)(r.a,{href:"/next/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,s.jsxs)(r.p,{children:["Promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect. If can not go forward, resolves to ",(0,s.jsx)(r.code,{children:"null"}),"."]})]})}function c(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},74848:(e,r,t)=>{e.exports=t(29698)}}]);
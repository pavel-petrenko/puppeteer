/*! For license information please see 05a54ad8.bee149ef.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[79788],{29067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=r(85893),n=r(11151);const s={sidebar_label:"Page.waitForRequest"},i="Page.waitForRequest() method",o={id:"api/puppeteer.page.waitforrequest",title:"Page.waitForRequest() method",description:"Signature:",source:"@site/../docs/api/puppeteer.page.waitforrequest.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforrequest",permalink:"/next/api/puppeteer.page.waitforrequest",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.waitForRequest"},sidebar:"api",previous:{title:"Page.waitForNetworkIdle",permalink:"/next/api/puppeteer.page.waitfornetworkidle"},next:{title:"Page.waitForResponse",permalink:"/next/api/puppeteer.page.waitforresponse"}},l={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"pagewaitforrequest-method",children:"Page.waitForRequest() method"}),"\n",(0,a.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  waitForRequest(\n    urlOrPredicate: string | AwaitablePredicate<HTTPRequest>,\n    options?: WaitTimeoutOptions\n  ): Promise<HTTPRequest>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"urlOrPredicate"}),(0,a.jsxs)(t.td,{children:["string | ",(0,a.jsx)(t.a,{href:"/next/api/puppeteer.awaitablepredicate",children:"AwaitablePredicate"}),"<",(0,a.jsx)(t.a,{href:"/next/api/puppeteer.httprequest",children:"HTTPRequest"}),">"]}),(0,a.jsx)(t.td,{children:"A URL or predicate to wait for"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"options"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/next/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.em,{children:"(Optional)"})," Optional waiting parameters"]})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(t.p,{children:["Promise<",(0,a.jsx)(t.a,{href:"/next/api/puppeteer.httprequest",children:"HTTPRequest"}),">"]}),"\n",(0,a.jsx)(t.p,{children:"Promise which resolves to the matched request"}),"\n",(0,a.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsx)(t.p,{children:"Optional Waiting Parameters have:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"timeout"}),": Maximum wait time in milliseconds, defaults to ",(0,a.jsx)(t.code,{children:"30"})," seconds, pass ",(0,a.jsx)(t.code,{children:"0"})," to disable the timeout. The default value can be changed by using the ",(0,a.jsx)(t.a,{href:"/next/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," method."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const firstRequest = await page.waitForRequest('https://example.com/resource');\nconst finalRequest = await page.waitForRequest(\n  request => request.url() === 'https://example.com'\n);\nreturn finalRequest.response()?.ok();\n"})})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var a=r(67294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var a,s={},p=null,d=null;for(a in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:n,type:e,key:p,ref:d,props:s,_owner:o.current}}t.Fragment=s,t.jsx=p,t.jsxs=p},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var a=r(67294);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
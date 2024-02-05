/*! For license information please see 742ba4de.2eded472.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[80590],{22356:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var o=r(85893),s=r(11151);const n={sidebar_label:"Page.cookies"},i="Page.cookies() method",a={id:"api/puppeteer.page.cookies",title:"Page.cookies() method",description:"If no URLs are specified, this method returns cookies for the current page URL. If URLs are specified, only cookies for those URLs are returned.",source:"@site/versioned_docs/version-21.11.0/api/puppeteer.page.cookies.md",sourceDirName:"api",slug:"/api/puppeteer.page.cookies",permalink:"/api/puppeteer.page.cookies",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{sidebar_label:"Page.cookies"},sidebar:"api",previous:{title:"Page.content",permalink:"/api/puppeteer.page.content"},next:{title:"Page.createCDPSession",permalink:"/api/puppeteer.page.createcdpsession"}},c={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"pagecookies-method",children:"Page.cookies() method"}),"\n",(0,o.jsx)(t.p,{children:"If no URLs are specified, this method returns cookies for the current page URL. If URLs are specified, only cookies for those URLs are returned."}),"\n",(0,o.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract cookies(...urls: string[]): Promise<Protocol.Network.Cookie[]>;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"urls"}),(0,o.jsx)(t.td,{children:"string[]"}),(0,o.jsx)(t.td,{})]})})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(t.p,{children:"Promise<Protocol.Network.Cookie[]>"})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var o=r(67294),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,r){var o,n={},p=null,d=null;for(o in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,o)&&!c.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:s,type:e,key:p,ref:d,props:n,_owner:a.current}}t.Fragment=n,t.jsx=p,t.jsxs=p},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var o=r(67294);const s={},n=o.createContext(s);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);
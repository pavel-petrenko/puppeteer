/*! For license information please see e1c76303.68374fdd.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[12625],{8755:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"api/puppeteer.cookie","title":"Cookie interface","description":"Represents a cookie object.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.cookie.md","sourceDirName":"api","slug":"/api/puppeteer.cookie","permalink":"/api/puppeteer.cookie","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"Cookie"},"sidebar":"api","previous":{"title":"convertCookiesPartitionKeyFromPuppeteerToCdp","permalink":"/api/puppeteer.convertcookiespartitionkeyfrompuppeteertocdp"},"next":{"title":"CookieData","permalink":"/api/puppeteer.cookiedata"}}');var n=r(74848),t=r(28453);const d={sidebar_label:"Cookie"},o="Cookie interface",c={},l=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"cookie-interface",children:"Cookie interface"})}),"\n",(0,n.jsx)(i.p,{children:"Represents a cookie object."}),"\n",(0,n.jsx)(i.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-typescript",children:"export interface Cookie extends CookieData\n"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Extends:"})," ",(0,n.jsx)(i.a,{href:"/api/puppeteer.cookiedata",children:"CookieData"})]}),"\n",(0,n.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"Description"})}),(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"Default"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"domain",children:"domain"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"Cookie domain."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"expires",children:"expires"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"number"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(i.p,{children:["Cookie expiration date as the number of seconds since the UNIX epoch. Set to ",(0,n.jsx)(i.code,{children:"-1"})," for session cookies"]})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"httponly",children:"httpOnly"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"True if cookie is http-only."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"name",children:"name"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"Cookie name."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"partitionkey",children:"partitionKey"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"/api/puppeteer.cookiepartitionkey",children:"CookiePartitionKey"})," | string"]})}),(0,n.jsx)("td",{children:(0,n.jsxs)(i.p,{children:["Cookie partition key. In Chrome, it is the top-level site the partitioned cookie is available in. In Firefox, it matches the source origin in the ",(0,n.jsx)(i.a,{href:"https://w3c.github.io/webdriver-bidi/#type-storage-PartitionKey",children:"PartitionKey"}),"."]})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"partitionkeyopaque",children:"partitionKeyOpaque"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"True if cookie partition key is opaque. Supported only in Chrome."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"path",children:"path"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"Cookie path."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"priority",children:"priority"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/api/puppeteer.cookiepriority",children:"CookiePriority"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"Cookie Priority. Supported only in Chrome."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"sameparty",children:"sameParty"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"True if cookie is SameParty. Supported only in Chrome."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"samesite",children:"sameSite"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/api/puppeteer.cookiesamesite",children:"CookieSameSite"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"Cookie SameSite type."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"secure",children:"secure"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"True if cookie is secure."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"session",children:"session"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"boolean"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"True in case of session cookie."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"size",children:"size"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"number"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"Cookie size."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"sourcescheme",children:"sourceScheme"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/api/puppeteer.cookiesourcescheme",children:"CookieSourceScheme"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"Cookie source scheme type. Supported only in Chrome."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"value",children:"value"})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"Cookie value."})}),(0,n.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>d,x:()=>o});var s=r(96540);const n={},t=s.createContext(n);function d(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(t.Provider,{value:i},e.children)}},29698:(e,i)=>{var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function n(e,i,s){var n=null;if(void 0!==s&&(n=""+s),void 0!==i.key&&(n=""+i.key),"key"in i)for(var t in s={},i)"key"!==t&&(s[t]=i[t]);else s=i;return i=s.ref,{$$typeof:r,type:e,key:n,ref:void 0!==i?i:null,props:s}}i.Fragment=s,i.jsx=n,i.jsxs=n},74848:(e,i,r)=>{e.exports=r(29698)}}]);
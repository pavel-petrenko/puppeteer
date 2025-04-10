/*! For license information please see 233bc08b.5462a951.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20282],{28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}},29698:(e,t)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var s in r={},t)"key"!==s&&(r[s]=t[s]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=a,t.jsxs=a},72083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"api/puppeteer.page.emulate","title":"Page.emulate() method","description":"Emulates a given device\'s metrics and user agent.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.page.emulate.md","sourceDirName":"api","slug":"/api/puppeteer.page.emulate","permalink":"/api/puppeteer.page.emulate","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"Page.emulate"},"sidebar":"api","previous":{"title":"Page.deleteCookie","permalink":"/api/puppeteer.page.deletecookie"},"next":{"title":"Page.emulateCPUThrottling","permalink":"/api/puppeteer.page.emulatecputhrottling"}}');var a=n(74848),s=n(28453);const i={sidebar_label:"Page.emulate"},o="Page.emulate() method",l={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"pageemulate-method",children:"Page.emulate() method"})}),"\n",(0,a.jsx)(t.p,{children:"Emulates a given device's metrics and user agent."}),"\n",(0,a.jsxs)(t.p,{children:["To aid emulation, Puppeteer provides a list of known devices that can be via ",(0,a.jsx)(t.a,{href:"/api/puppeteer.knowndevices",children:"KnownDevices"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  emulate(device: Device): Promise<void>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"device"})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/api/puppeteer.device",children:"Device"})})}),(0,a.jsx)("td",{})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,a.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsxs)(t.p,{children:["This method is a shortcut for calling two methods: ",(0,a.jsx)(t.a,{href:"/api/puppeteer.page.setuseragent",children:"Page.setUserAgent()"})," and ",(0,a.jsx)(t.a,{href:"/api/puppeteer.page.setviewport",children:"Page.setViewport()"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"This method will resize the page. A lot of websites don't expect phones to change size, so you should emulate before navigating to the page."}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import {KnownDevices} from 'puppeteer';\nconst iPhone = KnownDevices['iPhone 15 Pro'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulate(iPhone);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},74848:(e,t,n)=>{e.exports=n(29698)}}]);
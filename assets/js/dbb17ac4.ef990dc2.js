/*! For license information please see dbb17ac4.ef990dc2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68679],{95083:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=a(85893),n=a(11151);const s={sidebar_label:"Page.queryObjects"},o="Page.queryObjects() method",p={id:"api/puppeteer.page.queryobjects",title:"Page.queryObjects() method",description:"This method iterates the JavaScript heap and finds all objects with the given prototype.",source:"@site/versioned_docs/version-21.11.0/api/puppeteer.page.queryobjects.md",sourceDirName:"api",slug:"/api/puppeteer.page.queryobjects",permalink:"/api/puppeteer.page.queryobjects",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{sidebar_label:"Page.queryObjects"},sidebar:"api",previous:{title:"Page.pdf",permalink:"/api/puppeteer.page.pdf"},next:{title:"Page.reload",permalink:"/api/puppeteer.page.reload"}},i={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pagequeryobjects-method",children:"Page.queryObjects() method"}),"\n",(0,r.jsx)(t.p,{children:"This method iterates the JavaScript heap and finds all objects with the given prototype."}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract queryObjects<Prototype>(\n    prototypeHandle: JSHandle<Prototype>\n  ): Promise<JSHandle<Prototype[]>>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"prototypeHandle"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),"<Prototype>"]}),(0,r.jsx)(t.td,{children:"a handle to the object prototype."})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),"<Prototype[]>>"]}),"\n",(0,r.jsx)(t.p,{children:"Promise which resolves to a handle to an array of objects with this prototype."}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"// Create a Map object\nawait page.evaluate(() => (window.map = new Map()));\n// Get a handle to the Map object prototype\nconst mapPrototype = await page.evaluateHandle(() => Map.prototype);\n// Query all map instances into an array\nconst mapInstances = await page.queryObjects(mapPrototype);\n// Count amount of map objects in heap\nconst count = await page.evaluate(maps => maps.length, mapInstances);\nawait mapInstances.dispose();\nawait mapPrototype.dispose();\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},75251:(e,t,a)=>{var r=a(67294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,p=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,a){var r,s={},l=null,c=null;for(r in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:l,ref:c,props:s,_owner:p.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},85893:(e,t,a)=>{e.exports=a(75251)},11151:(e,t,a)=>{a.d(t,{Z:()=>p,a:()=>o});var r=a(67294);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
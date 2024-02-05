/*! For license information please see c7b5f91d.ae33c7dc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3630],{98734:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=r(85893),n=r(11151);const i={sidebar_label:"Frame.waitForXPath"},o="Frame.waitForXPath() method",s={id:"api/puppeteer.frame.waitforxpath",title:"Frame.waitForXPath() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-21.11.0/api/puppeteer.frame.waitforxpath.md",sourceDirName:"api",slug:"/api/puppeteer.frame.waitforxpath",permalink:"/api/puppeteer.frame.waitforxpath",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{sidebar_label:"Frame.waitForXPath"},sidebar:"api",previous:{title:"Frame.waitForTimeout",permalink:"/api/puppeteer.frame.waitfortimeout"},next:{title:"JSHandle",permalink:"/api/puppeteer.jshandle"}},l={},h=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"framewaitforxpath-method",children:"Frame.waitForXPath() method"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.a,{href:"/api/puppeteer.frame.waitforselector",children:"Frame.waitForSelector()"})," with the ",(0,a.jsx)(t.code,{children:"xpath"})," prefix."]}),"\n",(0,a.jsxs)(t.p,{children:["Example: ",(0,a.jsx)(t.code,{children:"await frame.waitForSelector('xpath/' + xpathExpression)"})]}),"\n",(0,a.jsxs)(t.p,{children:["The method evaluates the XPath expression relative to the Frame. If ",(0,a.jsx)(t.code,{children:"xpath"})," starts with ",(0,a.jsx)(t.code,{children:"//"})," instead of ",(0,a.jsx)(t.code,{children:".//"}),", the dot will be appended automatically."]}),"\n",(0,a.jsxs)(t.p,{children:["Wait for the ",(0,a.jsx)(t.code,{children:"xpath"})," to appear in page. If at the moment of calling the method the ",(0,a.jsx)(t.code,{children:"xpath"})," already exists, the method will return immediately. If the xpath doesn't appear after the ",(0,a.jsx)(t.code,{children:"timeout"})," milliseconds of waiting, the function will throw."]}),"\n",(0,a.jsxs)(t.p,{children:["For a code example, see the example for ",(0,a.jsx)(t.a,{href:"/api/puppeteer.frame.waitforselector",children:"Frame.waitForSelector()"}),". That function behaves identically other than taking a CSS selector rather than an XPath."]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class Frame {\n  waitForXPath(\n    xpath: string,\n    options?: WaitForSelectorOptions\n  ): Promise<ElementHandle<Node> | null>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"xpath"}),(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{children:"the XPath expression to wait for."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"options"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"/api/puppeteer.waitforselectoroptions",children:"WaitForSelectorOptions"})}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.em,{children:"(Optional)"})," options to configure the visibility of the element and how long to wait before timing out."]})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(t.p,{children:["Promise<",(0,a.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<Node> | null>"]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var a=r(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,r){var a,i={},h=null,p=null;for(a in void 0!==r&&(h=""+r),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,a)&&!l.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:n,type:e,key:h,ref:p,props:i,_owner:s.current}}t.Fragment=i,t.jsx=h,t.jsxs=h},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var a=r(67294);const n={},i=a.createContext(n);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
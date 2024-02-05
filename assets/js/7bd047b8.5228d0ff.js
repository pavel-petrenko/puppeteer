/*! For license information please see 7bd047b8.5228d0ff.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67791],{32819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(85893),i=n(11151);const a={sidebar_label:"Page.waitForXPath"},o="Page.waitForXPath() method",s={id:"api/puppeteer.page.waitforxpath",title:"Page.waitForXPath() method",description:"Wait for the xpath to appear in page. If at the moment of calling the method the xpath already exists, the method will return immediately. If the xpath doesn't appear after the timeout milliseconds of waiting, the function will throw.",source:"@site/versioned_docs/version-21.11.0/api/puppeteer.page.waitforxpath.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitforxpath",permalink:"/api/puppeteer.page.waitforxpath",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{sidebar_label:"Page.waitForXPath"},sidebar:"api",previous:{title:"Page.waitForTimeout",permalink:"/api/puppeteer.page.waitfortimeout"},next:{title:"Page.workers",permalink:"/api/puppeteer.page.workers"}},l={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pagewaitforxpath-method",children:"Page.waitForXPath() method"}),"\n",(0,r.jsxs)(t.p,{children:["Wait for the ",(0,r.jsx)(t.code,{children:"xpath"})," to appear in page. If at the moment of calling the method the ",(0,r.jsx)(t.code,{children:"xpath"})," already exists, the method will return immediately. If the ",(0,r.jsx)(t.code,{children:"xpath"})," doesn't appear after the ",(0,r.jsx)(t.code,{children:"timeout"})," milliseconds of waiting, the function will throw."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  waitForXPath(\n    xpath: string,\n    options?: WaitForSelectorOptions\n  ): Promise<ElementHandle<Node> | null>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"xpath"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsxs)(t.td,{children:["A ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/XPath",children:"xpath"})," of an element to wait for"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"options"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/api/puppeteer.waitforselectoroptions",children:"WaitForSelectorOptions"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Optional waiting parameters"]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<Node> | null>"]}),"\n",(0,r.jsxs)(t.p,{children:["Promise which resolves when element specified by xpath string is added to DOM. Resolves to ",(0,r.jsx)(t.code,{children:"null"})," if waiting for ",(0,r.jsx)(t.code,{children:"hidden: true"})," and xpath is not found in DOM, otherwise resolves to ",(0,r.jsx)(t.code,{children:"ElementHandle"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(t.p,{children:["The optional Argument ",(0,r.jsx)(t.code,{children:"options"})," have properties:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"visible"}),": A boolean to wait for element to be present in DOM and to be visible, i.e. to not have ",(0,r.jsx)(t.code,{children:"display: none"})," or ",(0,r.jsx)(t.code,{children:"visibility: hidden"})," CSS properties. Defaults to ",(0,r.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"hidden"}),": A boolean wait for element to not be found in the DOM or to be hidden, i.e. have ",(0,r.jsx)(t.code,{children:"display: none"})," or ",(0,r.jsx)(t.code,{children:"visibility: hidden"})," CSS properties. Defaults to ",(0,r.jsx)(t.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"timeout"}),": A number which is maximum time to wait for in milliseconds. Defaults to ",(0,r.jsx)(t.code,{children:"30000"})," (30 seconds). Pass ",(0,r.jsx)(t.code,{children:"0"})," to disable timeout. The default value can be changed by using the ",(0,r.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," method."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"This method works across navigation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  let currentURL;\n  page\n    .waitForXPath('//img')\n    .then(() => console.log('First URL with image: ' + currentURL));\n  for (currentURL of [\n    'https://example.com',\n    'https://google.com',\n    'https://bbc.com',\n  ]) {\n    await page.goto(currentURL);\n  }\n  await browser.close();\n})();\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},75251:(e,t,n)=>{var r=n(67294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},d=null,h=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(h=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:h,props:a,_owner:s.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(67294);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
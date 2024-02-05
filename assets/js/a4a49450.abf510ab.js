/*! For license information please see a4a49450.abf510ab.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78305],{65886:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=n(85893),a=n(11151);const s={sidebar_label:"WebWorker.evaluateHandle"},l="WebWorker.evaluateHandle() method",i={id:"api/puppeteer.webworker.evaluatehandle",title:"WebWorker.evaluateHandle() method",description:"Evaluates a given function in the worker.",source:"@site/versioned_docs/version-21.11.0/api/puppeteer.webworker.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.webworker.evaluatehandle",permalink:"/api/puppeteer.webworker.evaluatehandle",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{sidebar_label:"WebWorker.evaluateHandle"},sidebar:"api",previous:{title:"WebWorker.evaluate",permalink:"/api/puppeteer.webworker.evaluate"},next:{title:"WebWorker.url",permalink:"/api/puppeteer.webworker.url"}},o={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function u(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"webworkerevaluatehandle-method",children:"WebWorker.evaluateHandle() method"}),"\n",(0,t.jsxs)(r.p,{children:["Evaluates a given function in the ",(0,t.jsx)(r.a,{href:"/api/puppeteer.webworker",children:"worker"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class WebWorker {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    func: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"func"}),(0,t.jsx)(r.td,{children:"Func | string"}),(0,t.jsx)(r.td,{children:"Function to be evaluated."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"args"}),(0,t.jsx)(r.td,{children:"Params"}),(0,t.jsxs)(r.td,{children:["Arguments to pass into ",(0,t.jsx)("code",{children:"func"}),"."]})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]}),"\n",(0,t.jsxs)(r.p,{children:["A ",(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle",children:"handle"})," to the return value of ",(0,t.jsx)(r.code,{children:"func"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["If the given function returns a promise, ",(0,t.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluate",children:"evaluate"})," will wait for the promise to resolve."]}),"\n",(0,t.jsxs)(r.p,{children:["In general, you should use ",(0,t.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluatehandle",children:"evaluateHandle"})," if ",(0,t.jsx)(r.a,{href:"/api/puppeteer.webworker.evaluate",children:"evaluate"})," cannot serialize the return value properly or you need a mutable ",(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle",children:"handle"})," to the return object."]})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},75251:(e,r,n)=>{var t=n(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,n){var t,s={},d=null,u=null;for(t in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(u=r.ref),r)l.call(r,t)&&!o.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:a,type:e,key:d,ref:u,props:s,_owner:i.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>l});var t=n(67294);const a={},s=t.createContext(a);function l(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);
/*! For license information please see 5fb1e3cc.555ad241.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45802],{57757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var a=n(85893),r=n(11151);const s={sidebar_label:"JSHandle.evaluateHandle"},l="JSHandle.evaluateHandle() method",d={id:"api/puppeteer.jshandle.evaluatehandle",title:"JSHandle.evaluateHandle() method",description:"Evaluates the given function with the current handle as its first argument.",source:"@site/versioned_docs/version-21.11.0/api/puppeteer.jshandle.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle.evaluatehandle",permalink:"/api/puppeteer.jshandle.evaluatehandle",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{sidebar_label:"JSHandle.evaluateHandle"},sidebar:"api",previous:{title:"JSHandle.evaluate",permalink:"/api/puppeteer.jshandle.evaluate"},next:{title:"JSHandle.getProperties",permalink:"/api/puppeteer.jshandle.getproperties"}},i={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"jshandleevaluatehandle-method",children:"JSHandle.evaluateHandle() method"}),"\n",(0,a.jsx)(t.p,{children:"Evaluates the given function with the current handle as its first argument."}),"\n",(0,a.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class JSHandle {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<T, Params> = EvaluateFuncWith<T, Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"pageFunction"}),(0,a.jsx)(t.td,{children:"Func | string"}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"args"}),(0,a.jsx)(t.td,{children:"Params"}),(0,a.jsx)(t.td,{})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsxs)(t.p,{children:["Promise<",(0,a.jsx)(t.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},75251:(e,t,n)=>{var a=n(67294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var a,s={},o=null,u=null;for(a in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,a)&&!i.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:r,type:e,key:o,ref:u,props:s,_owner:d.current}}t.Fragment=s,t.jsx=o,t.jsxs=o},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>l});var a=n(67294);const r={},s=a.createContext(r);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
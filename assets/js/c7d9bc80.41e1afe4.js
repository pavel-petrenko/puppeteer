/*! For license information please see c7d9bc80.41e1afe4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53525],{28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>c});var s=t(96540);const n={},i=s.createContext(n);function o(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function n(e,r,s){var n=null;if(void 0!==s&&(n=""+s),void 0!==r.key&&(n=""+r.key),"key"in r)for(var i in s={},r)"key"!==i&&(s[i]=r[i]);else s=r;return r=s.ref,{$$typeof:t,type:e,key:n,ref:void 0!==r?r:null,props:s}}r.Fragment=s,r.jsx=n,r.jsxs=n},73808:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"api/puppeteer.filechooser.accept","title":"FileChooser.accept() method","description":"Accept the file chooser request with the given file paths.","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.filechooser.accept.md","sourceDirName":"api","slug":"/api/puppeteer.filechooser.accept","permalink":"/api/puppeteer.filechooser.accept","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"FileChooser.accept"},"sidebar":"api","previous":{"title":"FileChooser","permalink":"/api/puppeteer.filechooser"},"next":{"title":"FileChooser.cancel","permalink":"/api/puppeteer.filechooser.cancel"}}');var n=t(74848),i=t(28453);const o={sidebar_label:"FileChooser.accept"},c="FileChooser.accept() method",a={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"filechooseraccept-method",children:"FileChooser.accept() method"})}),"\n",(0,n.jsx)(r.p,{children:"Accept the file chooser request with the given file paths."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class FileChooser {\n  accept(paths: string[]): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"paths"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string[]"})}),(0,n.jsx)("td",{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["This will not validate whether the file paths exists. Also, if a path is relative, then it is resolved against the ",(0,n.jsx)(r.a,{href:"https://nodejs.org/api/process.html#process_process_cwd",children:"current working directory"}),". For locals script connecting to remote chrome environments, paths must be absolute."]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},74848:(e,r,t)=>{e.exports=t(29698)}}]);
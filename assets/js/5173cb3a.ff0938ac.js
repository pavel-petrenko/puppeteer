"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(r),f=a,k=s["".concat(l,".").concat(f)]||s[f]||c[f]||p;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<p;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88983:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={sidebar_label:"PaperFormat"},o="PaperFormat type",l={unversionedId:"api/puppeteer.paperformat",id:"version-19.6.1/api/puppeteer.paperformat",title:"PaperFormat type",description:"All the valid paper format types when printing a PDF.",source:"@site/versioned_docs/version-19.6.1/api/puppeteer.paperformat.md",sourceDirName:"api",slug:"/api/puppeteer.paperformat",permalink:"/api/puppeteer.paperformat",draft:!1,tags:[],version:"19.6.1",frontMatter:{sidebar_label:"PaperFormat"},sidebar:"api",previous:{title:"PageEventObject.workerdestroyed",permalink:"/api/puppeteer.pageeventobject.workerdestroyed"},next:{title:"PDFMargin",permalink:"/api/puppeteer.pdfmargin"}},m={},u=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}],c={toc:u};function s(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"paperformat-type"}),"PaperFormat type"),(0,n.kt)("p",null,"All the valid paper format types when printing a PDF."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"export type PaperFormat =\n  | Uppercase<LowerCasePaperFormat>\n  | Capitalize<LowerCasePaperFormat>\n  | LowerCasePaperFormat;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"References:")," ",(0,n.kt)("a",a({parentName:"p"},{href:"/api/puppeteer.lowercasepaperformat"}),"LowerCasePaperFormat")),(0,n.kt)("h2",a({},{id:"remarks"}),"Remarks"),(0,n.kt)("p",null,"The sizes of each format are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Letter"),": 8.5in x 11in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Legal"),": 8.5in x 14in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Tabloid"),": 11in x 17in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"Ledger"),": 17in x 11in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"A0"),": 33.1in x 46.8in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"A1"),": 23.4in x 33.1in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"A2"),": 16.54in x 23.4in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"A3"),": 11.7in x 16.54in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"A4"),": 8.27in x 11.7in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"A5"),": 5.83in x 8.27in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"A6"),": 4.13in x 5.83in"))))}s.isMDXComponent=!0}}]);
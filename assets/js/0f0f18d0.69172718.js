/*! For license information please see 0f0f18d0.69172718.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54456],{28453:(n,e,a)=>{a.d(e,{R:()=>l,x:()=>c});var i=a(96540);const o={},s=i.createContext(o);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),i.createElement(s.Provider,{value:e},n.children)}},29698:(n,e)=>{var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(n,e,i){var o=null;if(void 0!==i&&(o=""+i),void 0!==e.key&&(o=""+e.key),"key"in e)for(var s in i={},e)"key"!==s&&(i[s]=e[s]);else i=e;return e=i.ref,{$$typeof:a,type:n,key:o,ref:void 0!==e?e:null,props:i}}e.Fragment=i,e.jsx=o,e.jsxs=o},29901:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>c,default:()=>P,frontMatter:()=>l,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"api/puppeteer.knowndevices","title":"KnownDevices variable","description":"A list of devices to be used with Page.emulate().","source":"@site/versioned_docs/version-24.6.1/api/puppeteer.knowndevices.md","sourceDirName":"api","slug":"/api/puppeteer.knowndevices","permalink":"/api/puppeteer.knowndevices","draft":false,"unlisted":false,"tags":[],"version":"24.6.1","frontMatter":{"sidebar_label":"KnownDevices"},"sidebar":"api","previous":{"title":"KeyPressOptions","permalink":"/api/puppeteer.keypressoptions"},"next":{"title":"launch","permalink":"/api/puppeteer.launch"}}');var o=a(74848),s=a(28453);const l={sidebar_label:"KnownDevices"},c="KnownDevices variable",p={},r=[{value:"Signature",id:"signature",level:3},{value:"Example",id:"example",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"knowndevices-variable",children:"KnownDevices variable"})}),"\n",(0,o.jsxs)(e.p,{children:["A list of devices to be used with ",(0,o.jsx)(e.a,{href:"/api/puppeteer.page.emulate",children:"Page.emulate()"}),"."]}),"\n",(0,o.jsx)(e.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-typescript",children:"KnownDevices: Readonly<\n  Record<\n    | 'Blackberry PlayBook'\n    | 'Blackberry PlayBook landscape'\n    | 'BlackBerry Z30'\n    | 'BlackBerry Z30 landscape'\n    | 'Galaxy Note 3'\n    | 'Galaxy Note 3 landscape'\n    | 'Galaxy Note II'\n    | 'Galaxy Note II landscape'\n    | 'Galaxy S III'\n    | 'Galaxy S III landscape'\n    | 'Galaxy S5'\n    | 'Galaxy S5 landscape'\n    | 'Galaxy S8'\n    | 'Galaxy S8 landscape'\n    | 'Galaxy S9+'\n    | 'Galaxy S9+ landscape'\n    | 'Galaxy Tab S4'\n    | 'Galaxy Tab S4 landscape'\n    | 'iPad'\n    | 'iPad landscape'\n    | 'iPad (gen 6)'\n    | 'iPad (gen 6) landscape'\n    | 'iPad (gen 7)'\n    | 'iPad (gen 7) landscape'\n    | 'iPad Mini'\n    | 'iPad Mini landscape'\n    | 'iPad Pro'\n    | 'iPad Pro landscape'\n    | 'iPad Pro 11'\n    | 'iPad Pro 11 landscape'\n    | 'iPhone 4'\n    | 'iPhone 4 landscape'\n    | 'iPhone 5'\n    | 'iPhone 5 landscape'\n    | 'iPhone 6'\n    | 'iPhone 6 landscape'\n    | 'iPhone 6 Plus'\n    | 'iPhone 6 Plus landscape'\n    | 'iPhone 7'\n    | 'iPhone 7 landscape'\n    | 'iPhone 7 Plus'\n    | 'iPhone 7 Plus landscape'\n    | 'iPhone 8'\n    | 'iPhone 8 landscape'\n    | 'iPhone 8 Plus'\n    | 'iPhone 8 Plus landscape'\n    | 'iPhone SE'\n    | 'iPhone SE landscape'\n    | 'iPhone X'\n    | 'iPhone X landscape'\n    | 'iPhone XR'\n    | 'iPhone XR landscape'\n    | 'iPhone 11'\n    | 'iPhone 11 landscape'\n    | 'iPhone 11 Pro'\n    | 'iPhone 11 Pro landscape'\n    | 'iPhone 11 Pro Max'\n    | 'iPhone 11 Pro Max landscape'\n    | 'iPhone 12'\n    | 'iPhone 12 landscape'\n    | 'iPhone 12 Pro'\n    | 'iPhone 12 Pro landscape'\n    | 'iPhone 12 Pro Max'\n    | 'iPhone 12 Pro Max landscape'\n    | 'iPhone 12 Mini'\n    | 'iPhone 12 Mini landscape'\n    | 'iPhone 13'\n    | 'iPhone 13 landscape'\n    | 'iPhone 13 Pro'\n    | 'iPhone 13 Pro landscape'\n    | 'iPhone 13 Pro Max'\n    | 'iPhone 13 Pro Max landscape'\n    | 'iPhone 13 Mini'\n    | 'iPhone 13 Mini landscape'\n    | 'iPhone 14'\n    | 'iPhone 14 landscape'\n    | 'iPhone 14 Plus'\n    | 'iPhone 14 Plus landscape'\n    | 'iPhone 14 Pro'\n    | 'iPhone 14 Pro landscape'\n    | 'iPhone 14 Pro Max'\n    | 'iPhone 14 Pro Max landscape'\n    | 'iPhone 15'\n    | 'iPhone 15 landscape'\n    | 'iPhone 15 Plus'\n    | 'iPhone 15 Plus landscape'\n    | 'iPhone 15 Pro'\n    | 'iPhone 15 Pro landscape'\n    | 'iPhone 15 Pro Max'\n    | 'iPhone 15 Pro Max landscape'\n    | 'JioPhone 2'\n    | 'JioPhone 2 landscape'\n    | 'Kindle Fire HDX'\n    | 'Kindle Fire HDX landscape'\n    | 'LG Optimus L70'\n    | 'LG Optimus L70 landscape'\n    | 'Microsoft Lumia 550'\n    | 'Microsoft Lumia 950'\n    | 'Microsoft Lumia 950 landscape'\n    | 'Nexus 10'\n    | 'Nexus 10 landscape'\n    | 'Nexus 4'\n    | 'Nexus 4 landscape'\n    | 'Nexus 5'\n    | 'Nexus 5 landscape'\n    | 'Nexus 5X'\n    | 'Nexus 5X landscape'\n    | 'Nexus 6'\n    | 'Nexus 6 landscape'\n    | 'Nexus 6P'\n    | 'Nexus 6P landscape'\n    | 'Nexus 7'\n    | 'Nexus 7 landscape'\n    | 'Nokia Lumia 520'\n    | 'Nokia Lumia 520 landscape'\n    | 'Nokia N9'\n    | 'Nokia N9 landscape'\n    | 'Pixel 2'\n    | 'Pixel 2 landscape'\n    | 'Pixel 2 XL'\n    | 'Pixel 2 XL landscape'\n    | 'Pixel 3'\n    | 'Pixel 3 landscape'\n    | 'Pixel 4'\n    | 'Pixel 4 landscape'\n    | 'Pixel 4a (5G)'\n    | 'Pixel 4a (5G) landscape'\n    | 'Pixel 5'\n    | 'Pixel 5 landscape'\n    | 'Moto G4'\n    | 'Moto G4 landscape',\n    Device\n  >\n>;\n"})}),"\n",(0,o.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:"import {KnownDevices} from 'puppeteer';\nconst iPhone = KnownDevices['iPhone 15 Pro'];\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.emulate(iPhone);\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})})]})}function P(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},74848:(n,e,a)=>{n.exports=a(29698)}}]);
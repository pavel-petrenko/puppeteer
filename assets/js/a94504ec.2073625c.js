"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(a),k=n,y=c["".concat(i,".").concat(k)]||c[k]||u[k]||p;return a?r.createElement(y,o(o({ref:t},s),{},{components:a})):r.createElement(y,o({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<p;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const o={sidebar_label:"Keyboard"},l="Keyboard class",i={unversionedId:"api/puppeteer.keyboard",id:"api/puppeteer.keyboard",title:"Keyboard class",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is Keyboard.type(), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/../docs/api/puppeteer.keyboard.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard",permalink:"/next/api/puppeteer.keyboard",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Keyboard"},sidebar:"api",previous:{title:"Accessibility.snapshot",permalink:"/next/api/puppeteer.accessibility.snapshot"},next:{title:"Keyboard.down",permalink:"/next/api/puppeteer.keyboard.down"}},d={},s=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}],u={toc:s};function c(e){var{components:t}=e,a=p(e,["components"]);return(0,r.kt)("wrapper",n({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",n({},{id:"keyboard-class"}),"Keyboard class"),(0,r.kt)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,r.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.keyboard.type"}),"Keyboard.type()"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),(0,r.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class Keyboard\n")),(0,r.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,r.kt)("p",null,"For finer control, you can use ",(0,r.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.keyboard.down"}),"Keyboard.down()"),", ",(0,r.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.keyboard.up"}),"Keyboard.up()"),", and ",(0,r.kt)("a",n({parentName:"p"},{href:"/next/api/puppeteer.keyboard.sendcharacter"}),"Keyboard.sendCharacter()")," to manually fire events as if they were generated from a real keyboard."),(0,r.kt)("p",null,"On macOS, keyboard shortcuts like ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2318 A")," -",">"," Select All do not work. See ",(0,r.kt)("a",n({parentName:"p"},{href:"https://github.com/puppeteer/puppeteer/issues/1313"}),"#","1313"),"."),(0,r.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"Keyboard")," class."),(0,r.kt)("h2",n({},{id:"example-1"}),"Example 1"),(0,r.kt)("p",null,"An example of holding down ",(0,r.kt)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"await page.keyboard.type('Hello World!');\nawait page.keyboard.press('ArrowLeft');\n\nawait page.keyboard.down('Shift');\nfor (let i = 0; i < ' World'.length; i++)\n  await page.keyboard.press('ArrowLeft');\nawait page.keyboard.up('Shift');\n\nawait page.keyboard.press('Backspace');\n// Result text will end up saying 'Hello!'\n")),(0,r.kt)("h2",n({},{id:"example-2"}),"Example 2"),(0,r.kt)("p",null,"An example of pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"A")),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-ts"}),"await page.keyboard.down('Shift');\nawait page.keyboard.press('KeyA');\nawait page.keyboard.up('Shift');\n")),(0,r.kt)("h2",n({},{id:"methods"}),"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.keyboard.down"}),"down(key, options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dispatches a ",(0,r.kt)("code",null,"keydown")," event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.keyboard.press"}),"press(key, options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Shortcut for ",(0,r.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.keyboard.down"}),"Keyboard.down()")," and ",(0,r.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.keyboard.up"}),"Keyboard.up()"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.keyboard.sendcharacter"}),"sendCharacter(char)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dispatches a ",(0,r.kt)("code",null,"keypress")," and ",(0,r.kt)("code",null,"input")," event. This does not send a ",(0,r.kt)("code",null,"keydown")," or ",(0,r.kt)("code",null,"keyup")," event.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.keyboard.type"}),"type(text, options)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Sends a ",(0,r.kt)("code",null,"keydown"),", ",(0,r.kt)("code",null,"keypress"),"/",(0,r.kt)("code",null,"input"),", and ",(0,r.kt)("code",null,"keyup")," event for each character in the text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),(0,r.kt)("a",n({parentName:"td"},{href:"/next/api/puppeteer.keyboard.up"}),"up(key)")),(0,r.kt)("td",n({parentName:"tr"},{align:null})),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Dispatches a ",(0,r.kt)("code",null,"keyup")," event.")))))}c.isMDXComponent=!0}}]);
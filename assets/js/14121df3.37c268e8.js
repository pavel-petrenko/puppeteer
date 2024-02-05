/*! For license information please see 14121df3.37c268e8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[68481],{79088:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var s=t(85893),n=t(11151);const a={sidebar_label:"Frame"},i="Frame class",d={id:"api/puppeteer.frame",title:"Frame class",description:"Represents a DOM frame.",source:"@site/versioned_docs/version-21.11.0/api/puppeteer.frame.md",sourceDirName:"api",slug:"/api/puppeteer.frame",permalink:"/api/puppeteer.frame",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{sidebar_label:"Frame"},sidebar:"api",previous:{title:"ConsoleMessage.type",permalink:"/api/puppeteer.consolemessage.type"},next:{title:"Frame.$",permalink:"/api/puppeteer.frame._"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"frame-class",children:"Frame class"}),"\n",(0,s.jsx)(r.p,{children:"Represents a DOM frame."}),"\n",(0,s.jsxs)(r.p,{children:["To understand frames, you can think of frames as ",(0,s.jsx)(r.code,{children:"<iframe>"})," elements. Just like iframes, frames can be nested, and when JavaScript is executed in a frame, the JavaScript does not effect frames inside the ambient frame the JavaScript executes in."]}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class Frame extends EventEmitter<FrameEvents>\n"})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Extends:"})," ",(0,s.jsx)(r.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,s.jsx)(r.a,{href:"/api/puppeteer.frameevents",children:"FrameEvents"}),">"]}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Frame lifecycles are controlled by three events that are all dispatched on the parent ",(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.page",children:"page"}),":"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"/api/puppeteer.pageevent",children:"PageEvent.FrameAttached"})," - ",(0,s.jsx)(r.a,{href:"/api/puppeteer.pageevent",children:"PageEvent.FrameNavigated"})," - ",(0,s.jsx)(r.a,{href:"/api/puppeteer.pageevent",children:"PageEvent.FrameDetached"})]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(r.code,{children:"Frame"})," class."]}),"\n",(0,s.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(r.p,{children:["At any point in time, ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," expose their current frame tree via the ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.mainframe",children:"Page.mainFrame()"})," and ",(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.childframes",children:"Frame.childFrames()"})," methods."]}),"\n",(0,s.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(r.p,{children:"An example of dumping frame tree:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com/chrome/browser/canary.html');\n  dumpFrameTree(page.mainFrame(), '');\n  await browser.close();\n\n  function dumpFrameTree(frame, indent) {\n    console.log(indent + frame.url());\n    for (const child of frame.childFrames()) {\n      dumpFrameTree(child, indent + '  ');\n    }\n  }\n})();\n"})}),"\n",(0,s.jsx)(r.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(r.p,{children:"An example of getting text from an iframe element:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"const frame = page.frames().find(frame => frame.name() === 'myframe');\nconst text = await frame.$eval('.selector', element => element.textContent);\nconsole.log(text);\n"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Property"}),(0,s.jsx)(r.th,{children:"Modifiers"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"detached"}),(0,s.jsx)(r.td,{children:(0,s.jsx)("code",{children:"readonly"})}),(0,s.jsx)(r.td,{children:"boolean"}),(0,s.jsx)(r.td,{})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Method"}),(0,s.jsx)(r.th,{children:"Modifiers"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame._",children:"$(selector)"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"Queries the frame for an element matching the given selector."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.__",children:"$$(selector)"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"Queries the frame for all elements matching the given selector."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.__eval",children:"$$eval(selector, pageFunction, args)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)("p",{children:"Runs the given function on an array of elements matching the given selector in the frame."}),(0,s.jsx)("p",{children:"If the given function returns a promise, then this method will wait till the promise resolves."})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame._eval",children:"$eval(selector, pageFunction, args)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)("p",{children:"Runs the given function on the first element matching the given selector in the frame."}),(0,s.jsx)("p",{children:"If the given function returns a promise, then this method will wait till the promise resolves."})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame._x",children:"$x(expression)"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.addscripttag",children:"addScriptTag(options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Adds a ",(0,s.jsx)("code",{children:"<script>"})," tag into the page with the desired url or content."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.addstyletag",children:"addStyleTag(options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Adds a ",(0,s.jsx)("code",{children:"HTMLStyleElement"})," into the frame with the desired URL"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.addstyletag_1",children:"addStyleTag(options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Adds a ",(0,s.jsx)("code",{children:"HTMLLinkElement"})," into the frame with the desired URL"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.childframes",children:"childFrames()"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"An array of child frames."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.click",children:"click(selector, options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Clicks the first element found that matches ",(0,s.jsx)("code",{children:"selector"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.content",children:"content()"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"The full HTML contents of the frame, including the DOCTYPE."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.evaluate",children:"evaluate(pageFunction, args)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Behaves identically to ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.evaluate",children:"Page.evaluate()"})," except it's run within the the context of this frame."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.evaluatehandle",children:"evaluateHandle(pageFunction, args)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Behaves identically to ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"})," except it's run within the context of this frame."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.focus",children:"focus(selector)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Focuses the first element that matches the ",(0,s.jsx)("code",{children:"selector"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.goto",children:"goto(url, options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Navigates the frame to the given ",(0,s.jsx)("code",{children:"url"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.hover",children:"hover(selector)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Hovers the pointer over the center of the first element that matches the ",(0,s.jsx)("code",{children:"selector"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.isdetached",children:"isDetached()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Is",(0,s.jsx)("code",{children:"true"})," if the frame has been detached. Otherwise, ",(0,s.jsx)("code",{children:"false"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.isoopframe",children:"isOOPFrame()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Is ",(0,s.jsx)("code",{children:"true"})," if the frame is an out-of-process (OOP) frame. Otherwise, ",(0,s.jsx)("code",{children:"false"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.locator",children:"locator(selector)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Creates a locator for the provided selector. See ",(0,s.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"})," for details and supported actions."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.locator_1",children:"locator(func)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Creates a locator for the provided function. See ",(0,s.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"})," for details and supported actions."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.name",children:"name()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["The frame's ",(0,s.jsx)("code",{children:"name"})," attribute as specified in the tag."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.page",children:"page()"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"The page associated with the frame."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.parentframe",children:"parentFrame()"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["The parent frame, if any. Detached and main frames return ",(0,s.jsx)("code",{children:"null"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.select",children:"select(selector, values)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Selects a set of value on the first ",(0,s.jsx)("code",{children:"<select>"})," element that matches the ",(0,s.jsx)("code",{children:"selector"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.setcontent",children:"setContent(html, options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"Set the content of the frame."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.tap",children:"tap(selector)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Taps the first element that matches the ",(0,s.jsx)("code",{children:"selector"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.title",children:"title()"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"The frame's title."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.type",children:"type(selector, text, options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:["Sends a ",(0,s.jsx)("code",{children:"keydown"}),", ",(0,s.jsx)("code",{children:"keypress"}),"/",(0,s.jsx)("code",{children:"input"}),", and ",(0,s.jsx)("code",{children:"keyup"})," event for each character in the text."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.url",children:"url()"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{children:"The frame's URL."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.waitforfunction",children:"waitForFunction(pageFunction, options, args)"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.waitfornavigation",children:"waitForNavigation(options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)("p",{children:"Waits for the frame to navigate. It is useful for when you run code which will indirectly cause the frame to navigate."}),(0,s.jsxs)("p",{children:["Usage of the ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"})," to change the URL is considered a navigation."]})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.waitforselector",children:"waitForSelector(selector, options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)("p",{children:"Waits for an element matching the given selector to appear in the frame."}),(0,s.jsx)("p",{children:"This method works across navigations."})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.waitfortimeout",children:"waitForTimeout(milliseconds)"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.waitforxpath",children:"waitForXPath(xpath, options)"})}),(0,s.jsx)(r.td,{}),(0,s.jsx)(r.td,{})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var s,a={},c=null,h=null;for(s in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)i.call(r,s)&&!l.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:n,type:e,key:c,ref:h,props:a,_owner:d.current}}r.Fragment=a,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>d,a:()=>i});var s=t(67294);const n={},a=s.createContext(n);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);
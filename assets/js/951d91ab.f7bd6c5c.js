/*! For license information please see 951d91ab.f7bd6c5c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[31629],{88337:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=s(85893),r=s(11151);const i={},t="Debugging",l={id:"guides/debugging",title:"Debugging",description:"Debugging with Puppeteer can be an arduous task. There is no single method for",source:"@site/versioned_docs/version-21.11.0/guides/debugging.md",sourceDirName:"guides",slug:"/guides/debugging",permalink:"/guides/debugging",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{},sidebar:"docs",previous:{title:"Chrome Extensions",permalink:"/guides/chrome-extensions"},next:{title:"Integrations",permalink:"/category/integrations"}},d={},c=[{value:"Background",id:"background",level:2},{value:"Debugging methods for all situations",id:"debugging-methods-for-all-situations",level:2},{value:"Turn off <code>headless</code>",id:"turn-off-headless",level:3},{value:"Puppeteer &quot;slow-mo&quot;",id:"puppeteer-slow-mo",level:3},{value:"Debugging methods for client code",id:"debugging-methods-for-client-code",level:2},{value:"Capture <code>console.*</code> output",id:"capture-console-output",level:3},{value:"Use the debugger in the browser",id:"use-the-debugger-in-the-browser",level:3},{value:"Debugging methods for server code",id:"debugging-methods-for-server-code",level:2},{value:"Use the debugger in Node.js (Chrome/Chromium-only)",id:"use-the-debugger-in-nodejs-chromechromium-only",level:3},{value:"Log DevTools protocol traffic",id:"log-devtools-protocol-traffic",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"debugging",children:"Debugging"}),"\n",(0,o.jsxs)(n.p,{children:["Debugging with Puppeteer can be an arduous task. There is no ",(0,o.jsx)(n.em,{children:"single"})," method for\ndebugging all possible issues since Puppeteer touches many distinct components\nof a browser such as network requests and Web APIs. On a high note, Puppeteer\nprovides ",(0,o.jsx)(n.em,{children:"several"})," methods for debugging which hopefully does cover all possible\nissues."]}),"\n",(0,o.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,o.jsxs)(n.p,{children:["In general, there are two possible sources of an issue: Code running on Node.js\n(which we call ",(0,o.jsx)(n.em,{children:"server code"}),"), and\n",(0,o.jsx)(n.a,{href:"../api/puppeteer.page.evaluate",children:"code running in the browser"}),"\n(which we call ",(0,o.jsx)(n.em,{children:"client code"}),"). There is also a third possible source being the\nbrowser itself (which we call ",(0,o.jsx)(n.em,{children:"internal code"}),"), but if you suspect this is the\nsource ",(0,o.jsx)(n.strong,{children:"after attempting the methods below"}),", we suggest\n",(0,o.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/issues",children:"searching existing issues"}),"\nbefore\n",(0,o.jsx)(n.a,{href:"https://github.com/puppeteer/puppeteer/issues/new/choose",children:"filing an issue"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"debugging-methods-for-all-situations",children:"Debugging methods for all situations"}),"\n",(0,o.jsx)(n.p,{children:"These methods can be used to debug any situation. These should be used as a\nquick sanity check before diving into more complex methods."}),"\n",(0,o.jsxs)(n.h3,{id:"turn-off-headless",children:["Turn off ",(0,o.jsx)(n.a,{href:"../api/puppeteer.browserlaunchargumentoptions",children:(0,o.jsx)(n.code,{children:"headless"})})]}),"\n",(0,o.jsxs)(n.p,{children:["Sometimes it's useful to see what the browser is displaying. Instead of\nlaunching in\n",(0,o.jsx)(n.a,{href:"../api/puppeteer.browserlaunchargumentoptions",children:(0,o.jsx)(n.code,{children:"headless"})})," mode,\nlaunch a full version of the browser with\n",(0,o.jsx)(n.a,{href:"../api/puppeteer.browserlaunchargumentoptions",children:(0,o.jsx)(n.code,{children:"headless"})})," set to\n",(0,o.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.launch({headless: false});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"puppeteer-slow-mo",children:'Puppeteer "slow-mo"'}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"../api/puppeteer.browserconnectoptions",children:(0,o.jsx)(n.code,{children:"slowMo"})})," option slows down\nPuppeteer operations by a specified amount of milliseconds. It's another way to\nhelp see what's going on."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.launch({\n  headless: false,\n  slowMo: 250, // slow down by 250ms\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"debugging-methods-for-client-code",children:"Debugging methods for client code"}),"\n",(0,o.jsxs)(n.h3,{id:"capture-console-output",children:["Capture ",(0,o.jsx)(n.code,{children:"console.*"})," output"]}),"\n",(0,o.jsxs)(n.p,{children:["Since client code runs in the browser, doing ",(0,o.jsx)(n.code,{children:"console.*"})," in client code will not\ndirectly log to Node.js. However, you can ",(0,o.jsx)(n.a,{href:"../api/puppeteer.page",children:"listen (page.on)"})," for\nthe ",(0,o.jsx)(n.a,{href:"../api/puppeteer.pageevents",children:(0,o.jsx)(n.code,{children:"console"})})," event which returns a\npayload with the logged text."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"page.on('console', msg => console.log('PAGE LOG:', msg.text()));\n\nawait page.evaluate(() => console.log(`url is ${location.href}`));\n"})}),"\n",(0,o.jsx)(n.h3,{id:"use-the-debugger-in-the-browser",children:"Use the debugger in the browser"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.a,{href:"../api/puppeteer.browserlaunchargumentoptions",children:(0,o.jsx)(n.code,{children:"devtools"})})," to\n",(0,o.jsx)(n.code,{children:"true"})," when launching Puppeteer:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const browser = await puppeteer.launch({devtools: true});\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Add ",(0,o.jsx)(n.code,{children:"debugger"})," inside any client code you want debugged. For example,"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"await page.evaluate(() => {\n  debugger;\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The Browser will now stop in the location the ",(0,o.jsx)(n.code,{children:"debugger"})," word is found in\ndebug mode."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"debugging-methods-for-server-code",children:"Debugging methods for server code"}),"\n",(0,o.jsx)(n.h3,{id:"use-the-debugger-in-nodejs-chromechromium-only",children:"Use the debugger in Node.js (Chrome/Chromium-only)"}),"\n",(0,o.jsxs)(n.p,{children:["Since server code intermingles with client code, this method of debugging is\nclosely tied with the browser. For example, you can step over\n",(0,o.jsx)(n.code,{children:"await page.click()"})," in the server script and see the click happen in the\nbrowser."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that you won't be able to run ",(0,o.jsx)(n.code,{children:"await page.click()"})," in DevTools console due\nto this\n",(0,o.jsx)(n.a,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=833928",children:"Chromium bug"}),", so\nif you want to try something out, you have to add it to your test file."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.a,{href:"../api/puppeteer.browserlaunchargumentoptions",children:(0,o.jsx)(n.code,{children:"headless"})})," to\n",(0,o.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Add ",(0,o.jsx)(n.code,{children:"debugger"})," to any server code you want debugged. For example,"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"debugger;\nawait page.click('a[target=_blank]');\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run your server code with ",(0,o.jsx)(n.code,{children:"--inspect-brk"}),". For example,"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"node --inspect-brk path/to/script.js\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the opened Chrome/Chromium browser, open ",(0,o.jsx)(n.code,{children:"chrome://inspect/#devices"})," and\nclick ",(0,o.jsx)(n.code,{children:"inspect"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the newly opened test browser, press ",(0,o.jsx)(n.code,{children:"F8"})," to resume test execution."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Now your ",(0,o.jsx)(n.code,{children:"debugger"})," statement will be hit and you can debug in the test\nbrowser."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"log-devtools-protocol-traffic",children:"Log DevTools protocol traffic"}),"\n",(0,o.jsxs)(n.p,{children:["If all else fails, it's possible there may be an issue between Puppeteer and the\nDevTools protocol. You can debug this by setting the ",(0,o.jsx)(n.code,{children:"DEBUG"})," environment\nvariable before running your script. This will log internal traffic via\n",(0,o.jsx)(n.a,{href:"https://github.com/visionmedia/debug",children:(0,o.jsx)(n.code,{children:"debug"})})," under the ",(0,o.jsx)(n.code,{children:"puppeteer"})," namespace."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# Basic verbose logging\nenv DEBUG="puppeteer:*" node script.js\n\n# Prevent truncating of long messages\nenv DEBUG="puppeteer:*" env DEBUG_MAX_STRING_LENGTH=null node script.js\n\n# Protocol traffic can be rather noisy. This example filters out all Network domain messages\nenv DEBUG="puppeteer:*" env DEBUG_COLORS=true node script.js 2>&1 | grep -v \'"Network\'\n\n# Filter out all protocol messages but keep all other logging\nenv DEBUG="puppeteer:*,-puppeteer:protocol:*" node script.js\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},75251:(e,n,s)=>{var o=s(67294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var o,i={},c=null,a=null;for(o in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)t.call(n,o)&&!d.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:r,type:e,key:c,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},85893:(e,n,s)=>{e.exports=s(75251)},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var o=s(67294);const r={},i=o.createContext(r);function t(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
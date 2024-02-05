/*! For license information please see 5ab0e713.7aa93721.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[34207],{63912:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var t=n(85893),s=n(11151);const o={},i="Puppeteer",p={id:"index",title:"Puppeteer",description:"Build status",source:"@site/versioned_docs/version-21.11.0/index.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{},sidebar:"docs",next:{title:"Guides",permalink:"/category/guides"}},a={},l=[{value:"Guides | API | FAQ | Contributing | Troubleshooting",id:"guides--api--faq--contributing--troubleshooting",level:4},{value:"What can I do?",id:"what-can-i-do",level:4},{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration",id:"configuration",level:4},{value:"<code>puppeteer-core</code>",id:"puppeteer-core",level:4},{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:4},{value:"Default runtime settings",id:"default-runtime-settings",level:3},{value:"Using Docker",id:"using-docker",level:4},{value:"Using Chrome Extensions",id:"using-chrome-extensions",level:4},{value:"Resources",id:"resources",level:2},{value:"Contributing",id:"contributing",level:2},{value:"FAQ",id:"faq",level:2}];function c(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"puppeteer",children:"Puppeteer"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/actions?query=workflow%3ACI",children:(0,t.jsx)(r.img,{src:"https://github.com/puppeteer/puppeteer/workflows/CI/badge.svg",alt:"Build status"})}),"\n",(0,t.jsx)(r.a,{href:"https://npmjs.org/package/puppeteer",children:(0,t.jsx)(r.img,{src:"https://img.shields.io/npm/v/puppeteer.svg",alt:"npm puppeteer package"})})]}),"\n",(0,t.jsx)("img",{src:"https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png",height:"200",align:"right"}),"\n",(0,t.jsxs)(r.h4,{id:"guides--api--faq--contributing--troubleshooting",children:[(0,t.jsx)(r.a,{href:"https://pptr.dev/category/guides",children:"Guides"})," | ",(0,t.jsx)(r.a,{href:"https://pptr.dev/api",children:"API"})," | ",(0,t.jsx)(r.a,{href:"https://pptr.dev/faq",children:"FAQ"})," | ",(0,t.jsx)(r.a,{href:"https://pptr.dev/contributing",children:"Contributing"})," | ",(0,t.jsx)(r.a,{href:"https://pptr.dev/troubleshooting",children:"Troubleshooting"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Puppeteer is a Node.js library which provides a high-level API to control\nChrome/Chromium over the\n",(0,t.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"DevTools Protocol"}),".\nPuppeteer runs in\n",(0,t.jsx)(r.a,{href:"https://developer.chrome.com/articles/new-headless/",children:"headless"}),'\nmode by default, but can be configured to run in full ("headful")\nChrome/Chromium.']}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"what-can-i-do",children:"What can I do?"}),"\n",(0,t.jsx)(r.p,{children:"Most things that you can do manually in the browser can be done using Puppeteer!\nHere are a few examples to get you started:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Generate screenshots and PDFs of pages."}),"\n",(0,t.jsx)(r.li,{children:'Crawl a SPA (Single-Page Application) and generate pre-rendered content (i.e.\n"SSR" (Server-Side Rendering)).'}),"\n",(0,t.jsx)(r.li,{children:"Automate form submission, UI testing, keyboard input, etc."}),"\n",(0,t.jsx)(r.li,{children:"Create an automated testing environment using the latest JavaScript and\nbrowser features."}),"\n",(0,t.jsxs)(r.li,{children:["Capture a\n",(0,t.jsx)(r.a,{href:"https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference",children:"timeline trace"}),"\nof your site to help diagnose performance issues."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://pptr.dev/guides/chrome-extensions",children:"Test Chrome Extensions"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(r.p,{children:"To use Puppeteer in your project, run:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm i puppeteer\n# or using yarn\nyarn add puppeteer\n# or using pnpm\npnpm i puppeteer\n"})}),"\n",(0,t.jsxs)(r.p,{children:["When you install Puppeteer, it automatically downloads a recent version of\n",(0,t.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"Chrome for Testing"})," (~170MB macOS, ~282MB Linux, ~280MB Windows) and a ",(0,t.jsx)(r.code,{children:"chrome-headless-shell"})," binary (starting with Puppeteer v21.6.0) that is ",(0,t.jsx)(r.a,{href:"https://pptr.dev/faq#q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy",children:"guaranteed to\nwork"}),"\nwith Puppeteer. The browser is downloaded to the ",(0,t.jsx)(r.code,{children:"$HOME/.cache/puppeteer"})," folder\nby default (starting with Puppeteer v19.0.0). See ",(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.configuration",children:"configuration"})," for configuration options and environmental variables to control the download behavor."]}),"\n",(0,t.jsxs)(r.p,{children:["If you deploy a project using Puppeteer to a hosting provider, such as Render or\nHeroku, you might need to reconfigure the location of the cache to be within\nyour project folder (see an example below) because not all hosting providers\ninclude ",(0,t.jsx)(r.code,{children:"$HOME/.cache"})," into the project's deployment."]}),"\n",(0,t.jsxs)(r.p,{children:["For a version of Puppeteer without the browser installation, see\n",(0,t.jsx)(r.a,{href:"#puppeteer-core",children:(0,t.jsx)(r.code,{children:"puppeteer-core"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["If used with TypeScript, the minimum supported TypeScript version is ",(0,t.jsx)(r.code,{children:"4.7.4"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(r.p,{children:"Puppeteer uses several defaults that can be customized through configuration\nfiles."}),"\n",(0,t.jsxs)(r.p,{children:["For example, to change the default cache directory Puppeteer uses to install\nbrowsers, you can add a ",(0,t.jsx)(r.code,{children:".puppeteerrc.cjs"})," (or ",(0,t.jsx)(r.code,{children:"puppeteer.config.cjs"}),") at the\nroot of your application with the contents"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"const {join} = require('path');\n\n/**\n * @type {import(\"puppeteer\").Configuration}\n */\nmodule.exports = {\n  // Changes the cache location for Puppeteer.\n  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),\n};\n"})}),"\n",(0,t.jsxs)(r.p,{children:["After adding the configuration file, you will need to remove and reinstall\n",(0,t.jsx)(r.code,{children:"puppeteer"})," for it to take effect."]}),"\n",(0,t.jsxs)(r.p,{children:["See the ",(0,t.jsx)(r.a,{href:"https://pptr.dev/guides/configuration",children:"configuration guide"})," for more\ninformation."]}),"\n",(0,t.jsx)(r.h4,{id:"puppeteer-core",children:(0,t.jsx)(r.code,{children:"puppeteer-core"})}),"\n",(0,t.jsx)(r.p,{children:"For every release since v1.7.0 we publish two packages:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/puppeteer",children:(0,t.jsx)(r.code,{children:"puppeteer"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/puppeteer-core",children:(0,t.jsx)(r.code,{children:"puppeteer-core"})})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"puppeteer"})," is a ",(0,t.jsx)(r.em,{children:"product"})," for browser automation. When installed, it downloads\na version of Chrome, which it then drives using ",(0,t.jsx)(r.code,{children:"puppeteer-core"}),". Being an\nend-user product, ",(0,t.jsx)(r.code,{children:"puppeteer"})," automates several workflows using reasonable\ndefaults ",(0,t.jsx)(r.a,{href:"https://pptr.dev/guides/configuration",children:"that can be customized"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"puppeteer-core"})," is a ",(0,t.jsx)(r.em,{children:"library"})," to help drive anything that supports DevTools\nprotocol. Being a library, ",(0,t.jsx)(r.code,{children:"puppeteer-core"})," is fully driven through its\nprogrammatic interface implying no defaults are assumed and ",(0,t.jsx)(r.code,{children:"puppeteer-core"}),"\nwill not download Chrome when installed."]}),"\n",(0,t.jsxs)(r.p,{children:["You should use ",(0,t.jsx)(r.code,{children:"puppeteer-core"})," if you are\n",(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.puppeteer.connect",children:"connecting to a remote browser"}),"\nor ",(0,t.jsx)(r.a,{href:"https://pptr.dev/browsers-api/",children:"managing browsers yourself"}),".\nIf you are managing browsers yourself, you will need to call\n",(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.launch",children:(0,t.jsx)(r.code,{children:"puppeteer.launch"})})," with\nan explicit\n",(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.launchoptions",children:(0,t.jsx)(r.code,{children:"executablePath"})}),"\n(or ",(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.launchoptions",children:(0,t.jsx)(r.code,{children:"channel"})})," if it's\ninstalled in a standard location)."]}),"\n",(0,t.jsxs)(r.p,{children:["When using ",(0,t.jsx)(r.code,{children:"puppeteer-core"}),", remember to change the import:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer-core';\n"})}),"\n",(0,t.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:["Puppeteer follows the latest\n",(0,t.jsx)(r.a,{href:"https://github.com/nodejs/Release#release-schedule",children:"maintenance LTS"})," version of\nNode."]}),"\n",(0,t.jsxs)(r.p,{children:["Puppeteer will be familiar to people using other browser testing frameworks. You\n",(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.launch",children:"launch"}),"/",(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.connect",children:"connect"}),"\na ",(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.browser",children:"browser"}),",\n",(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.browser.newpage",children:"create"})," some\n",(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.page",children:"pages"}),", and then manipulate them with\n",(0,t.jsx)(r.a,{href:"https://pptr.dev/api",children:"Puppeteer's API"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["For more in-depth usage, check our ",(0,t.jsx)(r.a,{href:"https://pptr.dev/category/guides",children:"guides"}),"\nand ",(0,t.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/tree/main/examples",children:"examples"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["The following example searches ",(0,t.jsx)(r.a,{href:"https://developer.chrome.com/",children:"developer.chrome.com"}),' for blog posts with text "automate beyond recorder", click on the first result and print the full title of the blog post.']}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser and open a new blank page\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n\n  // Navigate the page to a URL\n  await page.goto('https://developer.chrome.com/');\n\n  // Set screen size\n  await page.setViewport({width: 1080, height: 1024});\n\n  // Type into search box\n  await page.type('.devsite-search-field', 'automate beyond recorder');\n\n  // Wait and click on first result\n  const searchResultSelector = '.devsite-result-item-link';\n  await page.waitForSelector(searchResultSelector);\n  await page.click(searchResultSelector);\n\n  // Locate the full title with a unique string\n  const textSelector = await page.waitForSelector(\n    'text/Customize and automate'\n  );\n  const fullTitle = await textSelector?.evaluate(el => el.textContent);\n\n  // Print the full title\n  console.log('The title of this blog post is \"%s\".', fullTitle);\n\n  await browser.close();\n})();\n"})}),"\n",(0,t.jsx)(r.h3,{id:"default-runtime-settings",children:"Default runtime settings"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"1. Uses Headless mode"})}),"\n",(0,t.jsxs)(r.p,{children:["By default Puppeteer launches Chrome in\n",(0,t.jsx)(r.a,{href:"https://developer.chrome.com/articles/new-headless/",children:"old Headless mode"}),"."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const browser = await puppeteer.launch();\n// Equivalent to\nconst browser = await puppeteer.launch({headless: true});\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://developer.chrome.com/articles/new-headless/",children:"Chrome 112 launched a new Headless mode"})," that might cause some differences in behavior compared to the old Headless implementation.\nIn the future Puppeteer will start defaulting to new implementation.\nWe recommend you try it out before the switch:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const browser = await puppeteer.launch({headless: 'new'});\n"})}),"\n",(0,t.jsxs)(r.p,{children:['To launch a "headful" version of Chrome, set the\n',(0,t.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.browserlaunchargumentoptions",children:(0,t.jsx)(r.code,{children:"headless"})})," to ",(0,t.jsx)(r.code,{children:"false"}),"\noption when launching a browser:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const browser = await puppeteer.launch({headless: false});\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"2. Runs a bundled version of Chrome"})}),"\n",(0,t.jsxs)(r.p,{children:["By default, Puppeteer downloads and uses a specific version of Chrome so its\nAPI is guaranteed to work out of the box. To use Puppeteer with a different\nversion of Chrome or Chromium, pass in the executable's path when creating a\n",(0,t.jsx)(r.code,{children:"Browser"})," instance:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});\n"})}),"\n",(0,t.jsxs)(r.p,{children:["You can also use Puppeteer with Firefox. See\n",(0,t.jsx)(r.a,{href:"https://pptr.dev/faq/#q-what-is-the-status-of-cross-browser-support",children:"status of cross-browser support"})," for\nmore information."]}),"\n",(0,t.jsxs)(r.p,{children:["See\n",(0,t.jsx)(r.a,{href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/",children:(0,t.jsx)(r.code,{children:"this article"})}),"\nfor a description of the differences between Chromium and Chrome.\n",(0,t.jsx)(r.a,{href:"https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/chromium_browser_vs_google_chrome.md",children:(0,t.jsx)(r.code,{children:"This article"})}),"\ndescribes some differences for Linux users."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"3. Creates a fresh user profile"})}),"\n",(0,t.jsxs)(r.p,{children:["Puppeteer creates its own browser user profile which it ",(0,t.jsx)(r.strong,{children:"cleans up on every\nrun"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"using-docker",children:"Using Docker"}),"\n",(0,t.jsxs)(r.p,{children:["See our ",(0,t.jsx)(r.a,{href:"https://pptr.dev/guides/docker",children:"Docker guide"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"using-chrome-extensions",children:"Using Chrome Extensions"}),"\n",(0,t.jsxs)(r.p,{children:["See our ",(0,t.jsx)(r.a,{href:"https://pptr.dev/guides/chrome-extensions",children:"Chrome extensions guide"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://pptr.dev/api",children:"API Documentation"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://pptr.dev/category/guides",children:"Guides"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/tree/main/examples",children:"Examples"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/transitive-bullshit/awesome-puppeteer",children:"Community list of Puppeteer resources"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"contributing",children:"Contributing"}),"\n",(0,t.jsxs)(r.p,{children:["Check out our ",(0,t.jsx)(r.a,{href:"https://pptr.dev/contributing",children:"contributing guide"})," to get an\noverview of Puppeteer development."]}),"\n",(0,t.jsx)(r.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(r.p,{children:["Our ",(0,t.jsx)(r.a,{href:"https://pptr.dev/faq",children:"FAQ"})," has migrated to\n",(0,t.jsx)(r.a,{href:"https://pptr.dev/faq",children:"our site"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,o={},l=null,c=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,t)&&!a.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:s,type:e,key:l,ref:c,props:o,_owner:p.current}}r.Fragment=o,r.jsx=l,r.jsxs=l},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>p,a:()=>i});var t=n(67294);const s={},o=t.createContext(s);function i(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);
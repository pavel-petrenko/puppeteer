/*! For license information please see 4ebbadde.64521697.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29698],{91998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>h,toc:()=>a});var s=r(85893),n=r(11151);const i={sidebar_label:"HTTPRequest"},d="HTTPRequest class",h={id:"api/puppeteer.httprequest",title:"HTTPRequest class",description:"Represents an HTTP request sent by a page.",source:"@site/versioned_docs/version-21.11.0/api/puppeteer.httprequest.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest",permalink:"/api/puppeteer.httprequest",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{sidebar_label:"HTTPRequest"},sidebar:"api",previous:{title:"ElementHandle.waitForXPath",permalink:"/api/puppeteer.elementhandle.waitforxpath"},next:{title:"HTTPRequest.abort",permalink:"/api/puppeteer.httprequest.abort"}},c={},a=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"httprequest-class",children:"HTTPRequest class"}),"\n",(0,s.jsx)(t.p,{children:"Represents an HTTP request sent by a page."}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export declare abstract class HTTPRequest\n"})}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:["Whenever the page sends a request, such as for a network resource, the following events are emitted by Puppeteer's ",(0,s.jsx)(t.code,{children:"page"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"request"}),": emitted when the request is issued by the page. - ",(0,s.jsx)(t.code,{children:"requestfinished"})," - emitted when the response body is downloaded and the request is complete."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If request fails at some point, then instead of ",(0,s.jsx)(t.code,{children:"requestfinished"})," event the ",(0,s.jsx)(t.code,{children:"requestfailed"})," event is emitted."]}),"\n",(0,s.jsxs)(t.p,{children:["All of these events provide an instance of ",(0,s.jsx)(t.code,{children:"HTTPRequest"})," representing the request that occurred:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"page.on('request', request => ...)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["NOTE: HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,s.jsx)(t.code,{children:"requestfinished"})," event."]}),"\n",(0,s.jsxs)(t.p,{children:["If request gets a 'redirect' response, the request is successfully finished with the ",(0,s.jsx)(t.code,{children:"requestfinished"})," event, and a new request is issued to a redirected url."]}),"\n",(0,s.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(t.code,{children:"HTTPRequest"})," class."]}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Property"}),(0,s.jsx)(t.th,{children:"Modifiers"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"client"}),(0,s.jsx)(t.td,{children:(0,s.jsx)("code",{children:"readonly"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.cdpsession",children:"CDPSession"})}),(0,s.jsx)(t.td,{children:"Warning! Using this client can break Puppeteer. Use with caution."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Method"}),(0,s.jsx)(t.th,{children:"Modifiers"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.abort",children:"abort(errorCode, priority)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Aborts a request."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.aborterrorreason",children:"abortErrorReason()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The most recent reason for aborting the request"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.continue",children:"continue(overrides, priority)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Continues request with optional request overrides."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.continuerequestoverrides",children:"continueRequestOverrides()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)("code",{children:"ContinueRequestOverrides"})," that will be used if the interception is allowed to continue (ie, ",(0,s.jsx)("code",{children:"abort()"})," and ",(0,s.jsx)("code",{children:"respond()"})," aren't called)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.enqueueinterceptaction",children:"enqueueInterceptAction(pendingHandler)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Adds an async request handler to the processing queue. Deferred handlers are not guaranteed to execute in any particular order, but they are guaranteed to resolve before the request interception is finalized."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.failure",children:"failure()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Access information about the request's failure."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.fetchpostdata",children:"fetchPostData()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Fetches the POST data for the request from the browser."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.finalizeinterceptions",children:"finalizeInterceptions()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Awaits pending interception handlers and then decides how to fulfill the request interception."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.frame",children:"frame()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The frame that initiated the request, or null if navigating to error pages."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.haspostdata",children:"hasPostData()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["True when the request has POST data. Note that ",(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.postdata",children:"HTTPRequest.postData()"})," might still be undefined when this flag is true when the data is too long or not readily available in the decoded form. In that case, use ",(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.fetchpostdata",children:"HTTPRequest.fetchPostData()"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.headers",children:"headers()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"An object with HTTP headers associated with the request. All header names are lower-case."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.initiator",children:"initiator()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The initiator of the request."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.interceptresolutionstate",children:"interceptResolutionState()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)("p",{children:"An InterceptResolutionState object describing the current resolution action and priority."}),(0,s.jsx)("p",{children:"InterceptResolutionState contains: action: InterceptResolutionAction priority?: number"}),(0,s.jsxs)("p",{children:["InterceptResolutionAction is one of: ",(0,s.jsx)("code",{children:"abort"}),", ",(0,s.jsx)("code",{children:"respond"}),", ",(0,s.jsx)("code",{children:"continue"}),", ",(0,s.jsx)("code",{children:"disabled"}),", ",(0,s.jsx)("code",{children:"none"}),", or ",(0,s.jsx)("code",{children:"already-handled"}),"."]})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.isinterceptresolutionhandled",children:"isInterceptResolutionHandled()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["Is ",(0,s.jsx)("code",{children:"true"})," if the intercept resolution has already been handled, ",(0,s.jsx)("code",{children:"false"})," otherwise."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.isnavigationrequest",children:"isNavigationRequest()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True if the request is the driver of the current frame's navigation."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.method",children:"method()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["The method used (",(0,s.jsx)("code",{children:"GET"}),", ",(0,s.jsx)("code",{children:"POST"}),", etc.)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.postdata",children:"postData()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The request's post body, if any."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.redirectchain",children:"redirectChain()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["A ",(0,s.jsx)("code",{children:"redirectChain"})," is a chain of requests initiated to fetch a resource."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.resourcetype",children:"resourceType()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Contains the request's resource type as it was perceived by the rendering engine."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.respond",children:"respond(response, priority)"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"Fulfills a request with the given response."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.response",children:"response()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["A matching ",(0,s.jsx)("code",{children:"HTTPResponse"})," object, or null if the response has not been received yet."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.responseforrequest",children:"responseForRequest()"})}),(0,s.jsx)(t.td,{}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)("code",{children:"ResponseForRequest"})," that gets used if the interception is allowed to respond (ie, ",(0,s.jsx)("code",{children:"abort()"})," is not called)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/api/puppeteer.httprequest.url",children:"url()"})}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"The URL of the request"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},75251:(e,t,r)=>{var s=r(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,h=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var s,i={},a=null,l=null;for(s in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)d.call(t,s)&&!c.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===i[s]&&(i[s]=t[s]);return{$$typeof:n,type:e,key:a,ref:l,props:i,_owner:h.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>h,a:()=>d});var s=r(67294);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
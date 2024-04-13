"use strict";(self.webpackChunkvrctxl=self.webpackChunkvrctxl||[]).push([[2698],{2978:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>t});var c=n(5893),r=n(1151);const a={sidebar_position:1},o="Forwarding Access Handler",l={id:"access-txl/access-handlers/forwarding-handler",title:"Forwarding Access Handler",description:"The Forwarding Access Handler is an included access handler that forwards an access check to one or more listed access control objects.  This",source:"@site/docs/access-txl/access-handlers/forwarding-handler.md",sourceDirName:"access-txl/access-handlers",slug:"/access-txl/access-handlers/forwarding-handler",permalink:"/Docs/docs/access-txl/access-handlers/forwarding-handler",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Access Handlers",permalink:"/Docs/docs/access-txl/access-handlers/"},next:{title:"Validation",permalink:"/Docs/docs/access-txl/validation/"}},i={},t=[{value:"Configuration",id:"configuration",level:2},{value:"Forward Acls",id:"forward-acls",level:3},{value:"Public API",id:"public-api",level:2},{value:"Network Sync",id:"network-sync",level:3},{value:"Inherited API",id:"inherited-api",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"forwarding-access-handler",children:"Forwarding Access Handler"}),"\n",(0,c.jsx)(s.p,{children:"The Forwarding Access Handler is an included access handler that forwards an access check to one or more listed access control objects.  This\nallows chaining multiple access control objects to be used in a parent / child or other kinds of relationships."}),"\n",(0,c.jsxs)(s.p,{children:["When an access request is forwarded, the handler will ",(0,c.jsx)(s.code,{children:"Allow"})," access if any of the forward controls allow access for the given player.  If none\nof the controls allow access, the handler will ",(0,c.jsx)(s.code,{children:"Pass"})," the check to the next handler or remaining access control rules."]}),"\n",(0,c.jsx)(s.p,{children:"This handler also serves as a simple example implementation for access handlers, so would be a good reference to look at when implementing\nyour own custom handlers."}),"\n",(0,c.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"Forwarding access handler inspector window",src:n(1662).Z+"",width:"386",height:"258"})}),"\n",(0,c.jsx)(s.h3,{id:"forward-acls",children:"Forward Acls"}),"\n",(0,c.jsx)(s.p,{children:"A list of access control objects to check for player access.  Controls will be checked in order, but order will not have any impact on the result\nreturned by the handler."}),"\n",(0,c.jsx)(s.h2,{id:"public-api",children:"Public API"}),"\n",(0,c.jsx)(s.h3,{id:"network-sync",children:"Network Sync"}),"\n",(0,c.jsxs)(s.p,{children:["This object is ",(0,c.jsx)(s.strong,{children:"not"})," network synced."]}),"\n",(0,c.jsx)(s.h3,{id:"inherited-api",children:"Inherited API"}),"\n",(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsx)(s.li,{children:"EventBase Public API"}),"\n",(0,c.jsx)(s.li,{children:(0,c.jsx)(s.a,{href:"/Docs/docs/access-txl/access-handlers/#public-api",children:"AccessControlHandler Public API"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},1662:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/access-forwarding-handler-921fc940e93e6cc2816f97393426063a.png"},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>o});var c=n(7294);const r={},a=c.createContext(r);function o(e){const s=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(a.Provider,{value:s},e.children)}}}]);
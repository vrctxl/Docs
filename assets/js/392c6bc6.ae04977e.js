"use strict";(self.webpackChunkvrctxl=self.webpackChunkvrctxl||[]).push([[2232],{3470:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var l=i(5893),t=i(1151);const s={},d="Changelog",r={id:"access-txl/changelog",title:"Changelog",description:"[1.2.1] - 02-09-24",source:"@site/docs/access-txl/100-changelog.md",sourceDirName:"access-txl",slug:"/access-txl/changelog",permalink:"/Docs/docs/access-txl/changelog",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"docs",previous:{title:"Digest Data Validator",permalink:"/Docs/docs/access-txl/validation/digest-data-validator"},next:{title:"VideoTXL",permalink:"/Docs/docs/video-txl/"}},o={},a=[{value:"[1.2.1] - 02-09-24",id:"121---02-09-24",level:2},{value:"[1.2.0] - 04-12-24",id:"120---04-12-24",level:2},{value:"[1.1.5] - 03-30-24",id:"115---03-30-24",level:2},{value:"[1.1.4] - 03-28-24",id:"114---03-28-24",level:2},{value:"[1.1.3] - 03-24-24",id:"113---03-24-24",level:2},{value:"[1.1.2] - 02-13-24",id:"112---02-13-24",level:2},{value:"[1.1.1] - 12-29-23",id:"111---12-29-23",level:2},{value:"[1.1.0] - 12-29-23",id:"110---12-29-23",level:2},{value:"[1.0.2] - 09-29-23",id:"102---09-29-23",level:2},{value:"[1.0.1] - 09-29-23",id:"101---09-29-23",level:2}];function c(e){const n={h1:"h1",h2:"h2",li:"li",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"changelog",children:"Changelog"}),"\n",(0,l.jsx)(n.h2,{id:"121---02-09-24",children:"[1.2.1] - 02-09-24"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added remote source property to Remote Whitelist"}),"\n",(0,l.jsx)(n.li,{children:"Remote whitelist can refer to another remote whitelist for its data download"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"120---04-12-24",children:"[1.2.0] - 04-12-24"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added DataValidator base class for performing transformation and validation on data"}),"\n",(0,l.jsx)(n.li,{children:"Added DataValidator support to Remote Whitelist"}),"\n",(0,l.jsx)(n.li,{children:"Added DigestValidator implementation that can validate data with MD5 and various SHA hashes"}),"\n",(0,l.jsx)(n.li,{children:"Added DataValidatorKey base class for providing keys to data validator"}),"\n",(0,l.jsx)(n.li,{children:"Added SerializedKey implementation of key provider that returns a key from a serialized field"}),"\n",(0,l.jsx)(n.li,{children:"Included UdonHashLib library (under MIT License) to provide MD5/SHA hash support"}),"\n",(0,l.jsx)(n.li,{children:"Added Debug User List prefab to list in-world players that have access on one or more ACLs"}),"\n",(0,l.jsx)(n.li,{children:"Added menu entries for two validators"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"115---03-30-24",children:"[1.1.5] - 03-30-24"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fixed initialization race in user lists"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"114---03-28-24",children:"[1.1.4] - 03-28-24"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Min CommonTXL version 1.5.0"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"113---03-24-24",children:"[1.1.3] - 03-24-24"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Min CommonTXL version 1.4.0"}),"\n",(0,l.jsx)(n.li,{children:"All users lists inherit new _ContainsPlayer and _ContainsAnyPlayerInWorld methods"}),"\n",(0,l.jsx)(n.li,{children:"Added start delay field to Remote User List"}),"\n",(0,l.jsx)(n.li,{children:"Changed user list and remote user lists to use dictionary lookups for usernames"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"112---02-13-24",children:"[1.1.2] - 02-13-24"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added AccessTXL to GameObject->TXL menu"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"111---12-29-23",children:"[1.1.1] - 12-29-23"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Fixed JSON Array remote whitelist support"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"110---12-29-23",children:"[1.1.0] - 12-29-23"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Added toggle object support to Access Keypad Controller"}),"\n",(0,l.jsx)(n.li,{children:"Added JSON support to Remote Whitelist"}),"\n",(0,l.jsx)(n.li,{children:"Added UserList API property to Static Whitelist"}),"\n",(0,l.jsx)(n.li,{children:"Updated Whitelist Grant to infer target Access Control object if not set"}),"\n",(0,l.jsx)(n.li,{children:"Updated implementation of Forwarding Handler to extend from access handler base class"}),"\n",(0,l.jsx)(n.li,{children:"Added prefab for forwarding access handler"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"102---09-29-23",children:"[1.0.2] - 09-29-23"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Removed dependency on UdonSharp package to prepare for SDK 3.4.0"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"101---09-29-23",children:"[1.0.1] - 09-29-23"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Remote whitelist will split on /r/n in addition to /n"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>d});var l=i(7294);const t={},s=l.createContext(t);function d(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);
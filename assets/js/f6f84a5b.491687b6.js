"use strict";(self.webpackChunkvrctxl=self.webpackChunkvrctxl||[]).push([[7800],{9344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var i=t(5893),s=t(1151);const l={sidebar_position:2},r="Remote Whitelist",a={id:"access-txl/whitelist-sources/remote-whitelist",title:"Remote Whitelist",description:"Remote whitelists use VRChat's string downloading API to download and parse a text file containing display names.",source:"@site/docs/access-txl/whitelist-sources/remote-whitelist.md",sourceDirName:"access-txl/whitelist-sources",slug:"/access-txl/whitelist-sources/remote-whitelist",permalink:"/Docs/docs/access-txl/whitelist-sources/remote-whitelist",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Static Whitelist",permalink:"/Docs/docs/access-txl/whitelist-sources/static-whitelist"},next:{title:"Dynamic Whitelist",permalink:"/Docs/docs/access-txl/whitelist-sources/dynamic-whitelist"}},o={},d=[{value:"Configuration",id:"configuration",level:2},{value:"Remote Loading",id:"remote-loading",level:3},{value:"Remote String URL",id:"remote-string-url",level:4},{value:"Remote String Format",id:"remote-string-format",level:4},{value:"JSON Object Path",id:"json-object-path",level:4},{value:"JSON Entry Path",id:"json-entry-path",level:4},{value:"Validation",id:"validation",level:3},{value:"Data Validator",id:"data-validator",level:4},{value:"Refresh Options",id:"refresh-options",level:3},{value:"Refresh on Start",id:"refresh-on-start",level:4},{value:"Start Delay",id:"start-delay",level:4},{value:"Enable Sync Refresh",id:"enable-sync-refresh",level:4},{value:"Access Control",id:"access-control",level:4},{value:"Enable Periodic Refresh",id:"enable-periodic-refresh",level:4},{value:"Refresh Period",id:"refresh-period",level:4},{value:"Default Whitelist",id:"default-whitelist",level:3},{value:"User Whitelist",id:"user-whitelist",level:4},{value:"Debug Options",id:"debug-options",level:3},{value:"Debug Log",id:"debug-log",level:4},{value:"VRC Logging",id:"vrc-logging",level:4},{value:"Document Examples",id:"document-examples",level:2},{value:"Public API",id:"public-api",level:2},{value:"Network Sync",id:"network-sync",level:3},{value:"Inherited API",id:"inherited-api",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{ApiMethod:l,ApiProperty:r,Details:a}=n;return l||p("ApiMethod",!0),r||p("ApiProperty",!0),a||p("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"remote-whitelist",children:"Remote Whitelist"}),"\n",(0,i.jsxs)(n.p,{children:["Remote whitelists use VRChat's string downloading API to download and parse a text file containing display names.",(0,i.jsx)(n.br,{}),"\n","The whitelist needs to be provided the URL to download from, and it can be set to download on world start and at a regular interval to refresh the list."]}),"\n",(0,i.jsx)(n.p,{children:"Remote whitelists can be programmatically requested to update.  The optional access control field on the object is used to\ncontrol this access.  It does not indicate which access control object is using the data in the remote whitelist."}),"\n",(0,i.jsxs)(n.p,{children:["Remote whitelists can be pre-populated with a list of display names, similar to the build-in whitelist in the main access control object.",(0,i.jsx)(n.br,{}),"\n","This list is replaced by the downloaded data when it's successfully pulled."]}),"\n",(0,i.jsx)(n.p,{children:"The object is setup to be able to parse multiple formats of display names."}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Static whitelist inspector window",src:t(8056).Z+"",width:"516",height:"587"})}),"\n",(0,i.jsx)(n.h3,{id:"remote-loading",children:"Remote Loading"}),"\n",(0,i.jsx)(n.h4,{id:"remote-string-url",children:"Remote String URL"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"A URL to the remote endpoint that will provide the expected text data."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"remote-string-format",children:"Remote String Format"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The expected format of the downloaded text.  The currently supported formats are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Newline"}),": The entire response a list of display names with each name on its own line."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSON Array"}),": The response is a complex JSON structure containing an array of display names or data objects.  Selecting this format enabled additional options for locating the names within the document."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"json-object-path",children:"JSON Object Path"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["When the remote string format is ",(0,i.jsx)(n.strong,{children:"JSON Array"}),", the object path tells the whitelist where the relevant array is within the object hierarchy.\nMultiple levels are separated by a forward slash ",(0,i.jsx)(n.code,{children:"/"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Leave this field blank if the top-level item in the JSON document is the target array."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"json-entry-path",children:"JSON Entry Path"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["When the remote string format is ",(0,i.jsx)(n.strong,{children:"JSON Array"}),", the entry path tells the whitelist how to find a display name that's nested within an object hierarchy.\nThis can be used to parse a response where an array of complex objects is returned, and the display name is a field within each object."]}),"\n",(0,i.jsx)(n.p,{children:"Leave this field blank if the target array is an array of strings containing display names."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"validation",children:"Validation"}),"\n",(0,i.jsx)(n.h4,{id:"data-validator",children:"Data Validator"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["An optional ",(0,i.jsx)(n.a,{href:"/Docs/docs/access-txl/validation/data-validator",children:"Data Validator"})," that can be used to modify the downloaded string data or validate\nthat it hasn't been tampered with."]}),"\n",(0,i.jsxs)(n.p,{children:["See specifically the ",(0,i.jsx)(n.a,{href:"/Docs/docs/access-txl/validation/digest-data-validator",children:"Digest Data Validator"})," for an out of the box validation solution."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"refresh-options",children:"Refresh Options"}),"\n",(0,i.jsx)(n.h4,{id:"refresh-on-start",children:"Refresh on Start"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"When enabled, the remote URL will be loaded and parsed for the local player when they join the instance.  Leave disabled to control\nwhen or if the remote URL is loaded."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"start-delay",children:"Start Delay"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"When Refresh on Start is enabled, the start delay is the number of seconds to wait before making the remote load call.  You can use\nthis as a crude way to change loading priority when multiple string loaders are present."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"enable-sync-refresh",children:"Enable Sync Refresh"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"When enabled, a method on the whitelist can be invoked to reload the URL, and simultaneously trigger all players in the world to also\nreload the URL."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"access-control",children:"Access Control"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"An optional Access Control object to control which players can programatically call the sync refresh method.  If none is provided, any\nplayer's client can trigger the reload."}),"\n",(0,i.jsx)(n.p,{children:"This component is unrelated to the Access Control objects that the whitelist is a part of, although it can be the same component."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"enable-periodic-refresh",children:"Enable Periodic Refresh"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"When enabled, the remote URL will be reloaded automatically at a set interval."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"refresh-period",children:"Refresh Period"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The interval, in seconds, between each automatic reload of the remote URL."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"default-whitelist",children:"Default Whitelist"}),"\n",(0,i.jsx)(n.h4,{id:"user-whitelist",children:"User Whitelist"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"A list of player display names to pre-populate the whitelist with.  Once the remote URL is successfully loaded, this list will be overwritten."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"debug-options",children:"Debug Options"}),"\n",(0,i.jsx)(n.h4,{id:"debug-log",children:"Debug Log"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"An optional Debug Log.  When set, some diagnostic info will be written to the log."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"vrc-logging",children:"VRC Logging"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"When enabled, some diagnostic info will be written to the VRChat log."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"document-examples",children:"Document Examples"}),"\n",(0,i.jsx)(n.p,{children:"Here are a few different examples of valid whitelist documents and their corresponding settings (mainly related to JSON)"}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"Newline Example"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Remote String Format"}),": ",(0,i.jsx)(n.code,{children:"Newline"})]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"DisplayName1\nDisplayName2\nDisplayName3\n"})})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"JSON Array Example 1"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Remote String Format"}),": ",(0,i.jsx)(n.code,{children:"JSON Array"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSON Object Path"}),":"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSON Entry Path"}),":"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'[\n  "DisplayName1",\n  "DisplayName2",\n  "DisplayName3"\n]\n'})})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"JSON Array Example 2"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Remote String Format"}),": ",(0,i.jsx)(n.code,{children:"JSON Array"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSON Object Path"}),": ",(0,i.jsx)(n.code,{children:"names"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSON Entry Path"}),":"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "names": [\n    "DisplayName1",\n    "DisplayName2",\n    "DisplayName3"\n  ]\n}\n'})})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"JSON Array Example 3"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Remote String Format"}),": ",(0,i.jsx)(n.code,{children:"JSON Array"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSON Object Path"}),": ",(0,i.jsx)(n.code,{children:"embedded/names"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSON Entry Path"}),":"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "embedded": {\n    "names": [\n      "DisplayName1",\n      "DisplayName2",\n      "DisplayName3"\n    ]\n  },\n  "other": {\n    "foo": 1,\n    "bar": 2\n  }\n}\n'})})]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"JSON Array Example 4"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Remote String Format"}),": ",(0,i.jsx)(n.code,{children:"JSON Array"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSON Object Path"}),": ",(0,i.jsx)(n.code,{children:"users"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JSON Entry Path"}),": ",(0,i.jsx)(n.code,{children:"display"})]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "users": [\n    {\n      "display": "DisplayName1",\n      "color": "green",\n      "index": 1\n    },\n    {\n      "display": "DisplayName2",\n      "color": "blue",\n      "index": 2\n    },\n    {\n      "display": "DisplayName3",\n      "color": "red",\n      "index": 3\n    }\n  ]\n}\n'})})]}),"\n",(0,i.jsx)(n.h2,{id:"public-api",children:"Public API"}),"\n",(0,i.jsx)(n.h3,{id:"network-sync",children:"Network Sync"}),"\n",(0,i.jsx)(n.p,{children:"This object is network synced.  The network sync is only used for signaling all players to reload the remote URL.  The downloaded display names\nare kept locally."}),"\n",(0,i.jsx)(n.h3,{id:"inherited-api",children:"Inherited API"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"EventBase Public API"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/Docs/docs/access-txl/whitelist-sources/custom-whitelist#public-api",children:"AccessControlUserSource Public API"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h4,{id:"",children:(0,i.jsx)(r,{return:"string[]",property:"UserList",get:!0,set:!0})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Gets or sets the current array of display names associated with this static whitelist. The static whitelist will grant access to any name contained in this list."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h4,{id:"-1",children:(0,i.jsx)(l,{return:"void",method:"_LoadJsonArrayData",params:["string","data"]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Parses a string of raw JSON data as if it was downloaded from a URL with the ",(0,i.jsx)(n.strong,{children:"JSON Array"})," string format set, and replaces the current\nset of cached display names with the new set.  The existing ",(0,i.jsx)(n.code,{children:"JSON Object Path"})," and ",(0,i.jsx)(n.code,{children:"JSON Entry Path"})," values are used when parsing the data."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Manual Loading",type:"tip",children:(0,i.jsx)(n.p,{children:"If you already have a separate script downloading data from a URL, especially a more complex JSON document where the display name list is just\none part, disable refresh options and have that script call this method with the downloaded JSON data."})}),"\n",(0,i.jsx)(n.h4,{id:"-2",children:(0,i.jsx)(l,{return:"void",method:"_LoadNewlineData",params:["string","data"]})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Parses a string of newline-separated display names as if it was downloaded from a URL with the ",(0,i.jsx)(n.strong,{children:"Newline"})," string format set, and replaces\nthe current set of cached display names with the new set."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"-3",children:(0,i.jsx)(l,{return:"void",method:"_LocalRefresh"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Causes the remote URL to be reloaded for the local client only."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"-4",children:(0,i.jsx)(l,{return:"void",method:"_SyncRefresh"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Causes the remote URL to be reloaded for the local client, and signals all remote clients to also reload the URL."}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},8056:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/access-remote-whitelist-prefab-ad716b0107b5548ad6e23697ccb83ad6.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);
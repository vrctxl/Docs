(self.webpackChunkvrctxl=self.webpackChunkvrctxl||[]).push([[8238],{9047:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var o=n(7294),s=n(5893);function c(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>o.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),c=t.filter((e=>e!==n)),r=n?.props.children;return{mdxAdmonitionTitle:r,rest:c.length>0?(0,s.jsx)(s.Fragment,{children:c}):null}}(e.children),c=e.title??t;return{...e,...c&&{title:c},children:n}}var r=n(512),a=n(5999),i=n(5281);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function u(e){let{type:t,className:n,children:o}=e;return(0,s.jsx)("div",{className:(0,r.Z)(i.k.common.admonition,i.k.common.admonitionType(t),l.admonition,n),children:o})}function d(e){let{icon:t,title:n}=e;return(0,s.jsxs)("div",{className:l.admonitionHeading,children:[(0,s.jsx)("span",{className:l.admonitionIcon,children:t}),n]})}function m(e){let{children:t}=e;return t?(0,s.jsx)("div",{className:l.admonitionContent,children:t}):null}function f(e){const{type:t,icon:n,title:o,children:c,className:r}=e;return(0,s.jsxs)(u,{type:t,className:r,children:[(0,s.jsx)(d,{title:o,icon:n}),(0,s.jsx)(m,{children:c})]})}function h(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const p={icon:(0,s.jsx)(h,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function b(e){return(0,s.jsx)(f,{...p,...e,className:(0,r.Z)("alert alert--secondary",e.className),children:e.children})}function g(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const j={icon:(0,s.jsx)(g,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function x(e){return(0,s.jsx)(f,{...j,...e,className:(0,r.Z)("alert alert--success",e.className),children:e.children})}function v(e){return(0,s.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,s.jsx)(v,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,s.jsx)(f,{...y,...e,className:(0,r.Z)("alert alert--info",e.className),children:e.children})}function k(e){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const B={icon:(0,s.jsx)(k,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function C(e){return(0,s.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const w={icon:(0,s.jsx)(C,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const L={icon:(0,s.jsx)(k,{}),title:(0,s.jsx)(a.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const E={...{note:b,tip:x,info:N,warning:function(e){return(0,s.jsx)(f,{...B,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,s.jsx)(f,{...w,...e,className:(0,r.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,s.jsx)(b,{title:"secondary",...e}),important:e=>(0,s.jsx)(N,{title:"important",...e}),success:e=>(0,s.jsx)(x,{title:"success",...e}),caution:function(e){return(0,s.jsx)(f,{...L,...e,className:(0,r.Z)("alert alert--warning",e.className),children:e.children})}}};function Z(e){const t=c(e),n=(o=t.type,E[o]||(console.warn(`No admonition component found for admonition type "${o}". Using Info as fallback.`),E.info));var o;return(0,s.jsx)(n,{...t})}},8750:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ne});var o=n(7294),s=n(5742),c=n(2389),r=n(512),a=n(2949),i=n(6668);function l(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,a.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(5281),d=n(7594),m=n.n(d);const f=/title=(?<quote>["'])(?<title>.*?)\1/,h=/\{(?<range>[\d,-]+)\}/,p={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function b(e,t){const n=e.map((e=>{const{start:n,end:o}=p[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function g(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:c}=t;if(c&&h.test(c)){const e=c.match(h).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${c}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=m()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const r=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return b(["tex"],t);case"lua":case"haskell":case"sql":return b(["lua"],t);case"wasm":return b(["wasm"],t);default:return b(Object.keys(p).filter((e=>!["lua","wasm","tex","latex","matlab"].includes(e))),t)}}(o,s),a=n.split("\n"),i=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),l=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let m=0;m<a.length;){const e=a[m].match(r);if(!e){m+=1;continue}const t=e.slice(1).find((e=>void 0!==e));l[t]?i[l[t]].range+=`${m},`:u[t]?i[u[t]].start=m:d[t]&&(i[d[t]].range+=`${i[d[t]].start}-${m-1},`),a.splice(m,1)}n=a.join("\n");const f={};return Object.entries(i).forEach((e=>{let[t,{range:n}]=e;m()(n).forEach((e=>{f[e]??=[],f[e].push(t)}))})),{lineClassNames:f,code:n}}const j={codeBlockContainer:"codeBlockContainer_Ckt0"};var x=n(5893);function v(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,s]=e;const c=t[o];c&&"string"==typeof s&&(n[c]=s)})),n}(l());return(0,x.jsx)(t,{...n,style:o,className:(0,r.Z)(n.className,j.codeBlockContainer,u.k.common.codeBlock)})}const y={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function N(e){let{children:t,className:n}=e;return(0,x.jsx)(v,{as:"pre",tabIndex:0,className:(0,r.Z)(y.codeBlockStandalone,"thin-scrollbar",n),children:(0,x.jsx)("code",{className:y.codeBlockLines,children:t})})}var k=n(902);const B={attributes:!0,characterData:!0,childList:!0,subtree:!0};function C(e,t){const[n,s]=(0,o.useState)(),c=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=B);const s=(0,k.zX)(t),c=(0,k.Ql)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,c),()=>t.disconnect()}),[e,s,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var w=n(2573);const L={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function E(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:s,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const a=s({line:t,className:(0,r.Z)(n,o&&L.codeLine)}),i=t.map(((e,t)=>(0,x.jsx)("span",{...c({token:e,key:t})},t)));return(0,x.jsxs)("span",{...a,children:[o?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("span",{className:L.codeLineNumber}),(0,x.jsx)("span",{className:L.codeLineContent,children:i})]}):i,(0,x.jsx)("br",{})]})}var Z=n(5999);function S(e){return(0,x.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,x.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})})}function T(e){return(0,x.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,x.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})})}const A={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function _(e){let{code:t,className:n}=e;const[s,c]=(0,o.useState)(!1),a=(0,o.useRef)(void 0),i=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),s=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const c=document.getSelection(),r=c.rangeCount>0&&c.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch{}o.remove(),r&&(c.removeAllRanges(),c.addRange(r)),s&&s.focus()}(t),c(!0),a.current=window.setTimeout((()=>{c(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(a.current)),[]),(0,x.jsx)("button",{type:"button","aria-label":s?(0,Z.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,Z.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,Z.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,A.copyButton,s&&A.copyButtonCopied),onClick:i,children:(0,x.jsxs)("span",{className:A.copyButtonIcons,"aria-hidden":"true",children:[(0,x.jsx)(S,{className:A.copyButtonIcon}),(0,x.jsx)(T,{className:A.copyButtonSuccessIcon})]})})}function I(e){return(0,x.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,x.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})})}const M={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function z(e){let{className:t,onClick:n,isEnabled:o}=e;const s=(0,Z.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,x.jsx)("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,o&&M.wordWrapButtonEnabled),"aria-label":s,title:s,children:(0,x.jsx)(I,{className:M.wordWrapButtonIcon,"aria-hidden":"true"})})}function H(e){let{children:t,className:n="",metastring:s,title:c,showLineNumbers:a,language:u}=e;const{prism:{defaultLanguage:d,magicComments:m}}=(0,i.L)(),h=function(e){return e?.toLowerCase()}(u??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??d),p=l(),b=function(){const[e,t]=(0,o.useState)(!1),[n,s]=(0,o.useState)(!1),c=(0,o.useRef)(null),r=(0,o.useCallback)((()=>{const n=c.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[c,e]),a=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=c.current,n=e>t||c.current.querySelector("code").hasAttribute("style");s(n)}),[c]);return C(c,a),(0,o.useEffect)((()=>{a()}),[e,a]),(0,o.useEffect)((()=>(window.addEventListener("resize",a,{passive:!0}),()=>{window.removeEventListener("resize",a)})),[a]),{codeBlockRef:c,isEnabled:e,isCodeScrollable:n,toggle:r}}(),j=function(e){return e?.match(f)?.groups.title??""}(s)||c,{lineClassNames:N,code:k}=g(t,{metastring:s,language:h,magicComments:m}),B=a??function(e){return Boolean(e?.includes("showLineNumbers"))}(s);return(0,x.jsxs)(v,{as:"div",className:(0,r.Z)(n,h&&!n.includes(`language-${h}`)&&`language-${h}`),children:[j&&(0,x.jsx)("div",{className:y.codeBlockTitle,children:j}),(0,x.jsxs)("div",{className:y.codeBlockContent,children:[(0,x.jsx)(w.y$,{theme:p,code:k,language:h??"text",children:e=>{let{className:t,style:n,tokens:o,getLineProps:s,getTokenProps:c}=e;return(0,x.jsx)("pre",{tabIndex:0,ref:b.codeBlockRef,className:(0,r.Z)(t,y.codeBlock,"thin-scrollbar"),style:n,children:(0,x.jsx)("code",{className:(0,r.Z)(y.codeBlockLines,B&&y.codeBlockLinesWithNumbering),children:o.map(((e,t)=>(0,x.jsx)(E,{line:e,getLineProps:s,getTokenProps:c,classNames:N[t],showLineNumbers:B},t)))})})}}),(0,x.jsxs)("div",{className:y.buttonGroup,children:[(b.isEnabled||b.isCodeScrollable)&&(0,x.jsx)(z,{className:y.codeButton,onClick:()=>b.toggle(),isEnabled:b.isEnabled}),(0,x.jsx)(_,{className:y.codeButton,code:k})]})]})]})}function $(e){let{children:t,...n}=e;const s=(0,c.Z)(),r=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),a="string"==typeof r?H:N;return(0,x.jsx)(a,{...n,children:r},String(s))}var O=n(9960);var R=n(6043);const V={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function W(e){return!!e&&("SUMMARY"===e.tagName||W(e.parentElement))}function P(e,t){return!!e&&(e===t||P(e.parentElement,t))}function D(e){let{summary:t,children:n,...s}=e;const a=(0,c.Z)(),i=(0,o.useRef)(null),{collapsed:l,setCollapsed:u}=(0,R.u)({initialState:!s.open}),[d,m]=(0,o.useState)(s.open),f=o.isValidElement(t)?t:(0,x.jsx)("summary",{children:t??"Details"});return(0,x.jsxs)("details",{...s,ref:i,open:d,"data-collapsed":l,className:(0,r.Z)(V.details,a&&V.isBrowser,s.className),onMouseDown:e=>{W(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;W(t)&&P(t,i.current)&&(e.preventDefault(),l?(u(!1),m(!0)):u(!0))},children:[f,(0,x.jsx)(R.z,{lazy:!1,collapsed:l,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),m(!e)},children:(0,x.jsx)("div",{className:V.collapsibleContent,children:n})})]})}const F={details:"details_b_Ee"},q="alert alert--info";function G(e){let{...t}=e;return(0,x.jsx)(D,{...t,className:(0,r.Z)(q,F.details,t.className)})}function U(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.type)),s=(0,x.jsx)(x.Fragment,{children:t.filter((e=>e!==n))});return(0,x.jsx)(G,{...e,summary:n,children:s})}var J=n(2503);function Y(e){return(0,x.jsx)(J.Z,{...e})}const K={containsTaskList:"containsTaskList_mC6p"};function Q(e){if(void 0!==e)return(0,r.Z)(e,e?.includes("contains-task-list")&&K.containsTaskList)}const X={img:"img_ev3q"};var ee=n(9047),te=n(1875);const ne={Head:s.Z,details:U,Details:U,code:function(e){return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))?(0,x.jsx)("code",{...e}):(0,x.jsx)($,{...e})},a:function(e){return(0,x.jsx)(O.Z,{...e})},pre:function(e){return(0,x.jsx)(x.Fragment,{children:e.children})},ul:function(e){return(0,x.jsx)("ul",{...e,className:Q(e.className)})},img:function(e){return(0,x.jsx)("img",{loading:"lazy",...e,className:(t=e.className,(0,r.Z)(t,X.img))});var t},h1:e=>(0,x.jsx)(Y,{as:"h1",...e}),h2:e=>(0,x.jsx)(Y,{as:"h2",...e}),h3:e=>(0,x.jsx)(Y,{as:"h3",...e}),h4:e=>(0,x.jsx)(Y,{as:"h4",...e}),h5:e=>(0,x.jsx)(Y,{as:"h5",...e}),h6:e=>(0,x.jsx)(Y,{as:"h6",...e}),admonition:ee.Z,mermaid:te.Z}},5042:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});n(7294);var o=n(1151),s=n(6153),c=n(5893);function r(e){let{children:t}=e;return(0,c.jsx)(o.Z,{components:s.Z,children:t})}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,s,c]=t;if(o&&c){o=parseInt(o),c=parseInt(c);const e=o<c?1:-1;"-"!==s&&".."!==s&&"\u2025"!==s||(c+=e);for(let t=o;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},1151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a,a:()=>r});var o=n(7294);const s={},c=o.createContext(s);function r(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(c.Provider,{value:t},e.children)}},8275:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});const o=function(e,t,n){var o=-1,s=e.length;t<0&&(t=-t>s?0:s+t),(n=n>s?s:n)<0&&(n+=s),s=t>n?0:n-t>>>0,t>>>=0;for(var c=Array(s);++o<s;)c[o]=e[o+t];return c};const s=function(e,t){return e===t||e!=e&&t!=t};const c="object"==typeof global&&global&&global.Object===Object&&global;var r="object"==typeof self&&self&&self.Object===Object&&self;const a=(c||r||Function("return this")()).Symbol;var i=Object.prototype,l=i.hasOwnProperty,u=i.toString,d=a?a.toStringTag:void 0;const m=function(e){var t=l.call(e,d),n=e[d];try{e[d]=void 0;var o=!0}catch(c){}var s=u.call(e);return o&&(t?e[d]=n:delete e[d]),s};var f=Object.prototype.toString;const h=function(e){return f.call(e)};var p=a?a.toStringTag:void 0;const b=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":p&&p in Object(e)?m(e):h(e)};const g=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};const j=function(e){if(!g(e))return!1;var t=b(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t};const x=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991};const v=function(e){return null!=e&&x(e.length)&&!j(e)};var y=/^(?:0|[1-9]\d*)$/;const N=function(e,t){var n=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&y.test(e))&&e>-1&&e%1==0&&e<t};const k=function(e,t,n){if(!g(n))return!1;var o=typeof t;return!!("number"==o?v(n)&&N(t,n.length):"string"==o&&t in n)&&s(n[t],e)};var B=/\s/;const C=function(e){for(var t=e.length;t--&&B.test(e.charAt(t)););return t};var w=/^\s+/;const L=function(e){return e?e.slice(0,C(e)+1).replace(w,""):e};const E=function(e){return null!=e&&"object"==typeof e};const Z=function(e){return"symbol"==typeof e||E(e)&&"[object Symbol]"==b(e)};var S=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,A=/^0o[0-7]+$/i,_=parseInt;const I=function(e){if("number"==typeof e)return e;if(Z(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=L(e);var n=T.test(e);return n||A.test(e)?_(e.slice(2),n?2:8):S.test(e)?NaN:+e};var M=1/0;const z=function(e){return e?(e=I(e))===M||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0};const H=function(e){var t=z(e),n=t%1;return t==t?n?t-n:t:0};var $=Math.ceil,O=Math.max;const R=function(e,t,n){t=(n?k(e,t,n):void 0===t)?1:O(H(t),0);var s=null==e?0:e.length;if(!s||t<1)return[];for(var c=0,r=0,a=Array($(s/t));c<s;)a[r++]=o(e,c,c+=t);return a}}}]);
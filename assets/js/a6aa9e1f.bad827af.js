"use strict";(self.webpackChunkvrctxl=self.webpackChunkvrctxl||[]).push([[89],{3269:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});t(7294);var s=t(512),n=t(2263),a=t(1944),o=t(5281),l=t(1460),i=t(5999),c=t(2244),d=t(5893);function g(e){const{metadata:r}=e,{previousPage:t,nextPage:s}=r;return(0,d.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[t&&(0,d.jsx)(c.Z,{permalink:t,title:(0,d.jsx)(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),s&&(0,d.jsx)(c.Z,{permalink:s,title:(0,d.jsx)(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}var m=t(197),h=t(9460),p=t(756);function x(e){let{items:r,component:t=p.Z}=e;return(0,d.jsx)(d.Fragment,{children:r.map((e=>{let{content:r}=e;return(0,d.jsx)(h.n,{content:r,children:(0,d.jsx)(t,{children:(0,d.jsx)(r,{})})},r.metadata.permalink)}))})}function u(e){const{metadata:r}=e,{siteConfig:{title:t}}=(0,n.Z)(),{blogDescription:s,blogTitle:o,permalink:l}=r,i="/"===l?t:o;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.d,{title:i,description:s}),(0,d.jsx)(m.Z,{tag:"blog_posts_list"})]})}function j(e){const{metadata:r,items:t,sidebar:s}=e;return(0,d.jsxs)(l.Z,{sidebar:s,children:[(0,d.jsx)(x,{items:t}),(0,d.jsx)(g,{metadata:r})]})}function b(e){return(0,d.jsxs)(a.FG,{className:(0,s.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage),children:[(0,d.jsx)(u,{...e}),(0,d.jsx)(j,{...e})]})}},639:(e,r,t)=>{t.d(r,{Z:()=>N});var s=t(8750);t(7294);const n="return_Suvr",a="method_ZRZh",o="paramType_qGRr",l="paramName_CHXx";var i=t(2263),c=t(8275),d=t(5893);const g=e=>{const{siteConfig:r}=(0,i.Z)(),t=(r.url,(0,c.Z)(e.params??[],2,void 0));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("code",{className:n,children:e.return})," ",(0,d.jsxs)("code",{className:a,children:[e.method,"("]}),t.map(((e,r)=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("code",{className:o,children:[" ",e[0]]})," ",(0,d.jsx)("code",{className:l,children:e[1]}),r<t.length-1?(0,d.jsx)("code",{className:a,children:","}):(0,d.jsx)(d.Fragment,{children:" "})]}))),(0,d.jsx)("code",{className:a,children:")"})]})},m="btn_BSuA",h="return_WBwm",p="property_HiGG",x=e=>{const{siteConfig:r}=(0,i.Z)();r.url;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("code",{className:h,children:e.return})," ",(0,d.jsx)("code",{className:p,children:e.property}),e.get&&(0,d.jsx)("button",{className:m,style:{backgroundColor:"var(--ifm-color-info)",color:"var(--ifm-badge-color)"},children:"GET"}),e.set&&(0,d.jsx)("button",{className:m,style:{backgroundColor:"var(--ifm-color-warning)",color:"var(--ifm-badge-color)"},children:"SET"})]})},u="link_nLbf",j="btn_htEc",b="custom_icon_vl4E";var v=t(9960);const f=e=>{const{siteConfig:r}=(0,i.Z)(),t=r.url;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(v.Z,{to:e.link?t+e.link:"#/",className:u,children:(0,d.jsxs)("button",{className:j,style:{backgroundColor:`${e.backgroundColor}`,color:`${e.textColor}`},children:[e.icon&&(0,d.jsx)("i",{className:`${e.icon} ${b}`,style:e.iconColor&&{color:`${e.iconColor}`}}),e.text]})})})},N={...s.Z,ApiMethod:g,ApiProperty:x,DocsTag:f}}}]);
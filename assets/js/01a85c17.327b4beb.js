"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[8209],{15353:(e,t,s)=>{s.d(t,{A:()=>j});s(96540);var a=s(18215),i=s(99732),l=s(82216),r=s(14783),n=s(23230),c=s(85722);const d={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var o=s(74848);function m(e){let{sidebar:t}=e;const s=(0,c.G)(t.items);return(0,o.jsx)("aside",{className:"col col--3",children:(0,o.jsxs)("nav",{className:(0,a.A)(d.sidebar,"thin-scrollbar"),"aria-label":(0,n.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,o.jsx)("div",{className:(0,a.A)(d.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,o.jsx)("ul",{className:(0,a.A)(d.sidebarItemList,"clean-list"),children:s.map((e=>(0,o.jsx)("li",{className:d.sidebarItem,children:(0,o.jsx)(r.default,{isNavLink:!0,to:e.permalink,className:d.sidebarItemLink,activeClassName:d.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var u=s(70763);function b(e){let{sidebar:t}=e;const s=(0,c.G)(t.items);return(0,o.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,o.jsx)("li",{className:"menu__list-item",children:(0,o.jsx)(r.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function h(e){return(0,o.jsx)(u.GX,{component:b,props:e})}function g(e){let{sidebar:t}=e;const s=(0,l.l)();return t?.items.length?"mobile"===s?(0,o.jsx)(h,{sidebar:t}):(0,o.jsx)(m,{sidebar:t}):null}function j(e){const{sidebar:t,toc:s,children:l,...r}=e,n=t&&t.items.length>0;return(0,o.jsx)(i.A,{...r,children:(0,o.jsx)("div",{className:"container margin-vert--lg",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)(g,{sidebar:t}),(0,o.jsx)("main",{className:(0,a.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:l}),s&&(0,o.jsx)("div",{className:"col col--2",children:s})]})})})}},14664:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});s(96540);var a=s(18215),i=s(47045),l=s(17153),r=s(18630),n=s(15353),c=s(41883),d=s(85225);const o={tag:"tag_Nnez"};var m=s(74848);function u(e){let{letterEntry:t}=e;return(0,m.jsxs)("article",{children:[(0,m.jsx)(d.default,{as:"h2",id:t.letter,children:t.letter}),(0,m.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,m.jsx)("li",{className:o.tag,children:(0,m.jsx)(c.A,{...e})},e.permalink)))}),(0,m.jsx)("hr",{})]})}function b(e){let{tags:t}=e;const s=(0,i.Q)(t);return(0,m.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,m.jsx)(u,{letterEntry:e},e.letter)))})}var h=s(51210);function g(e){let{tags:t,sidebar:s}=e;const c=(0,i.b)();return(0,m.jsxs)(l.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogTagsListPage),children:[(0,m.jsx)(l.be,{title:c}),(0,m.jsx)(h.A,{tag:"blog_tags_list"}),(0,m.jsxs)(n.A,{sidebar:s,children:[(0,m.jsx)(d.default,{as:"h1",children:c}),(0,m.jsx)(b,{tags:t})]})]})}},41883:(e,t,s)=>{s.d(t,{A:()=>n});s(96540);var a=s(18215),i=s(14783);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=s(74848);function n(e){let{permalink:t,label:s,count:n,description:c}=e;return(0,r.jsxs)(i.default,{href:t,title:c,className:(0,a.A)(l.tag,n?l.tagWithCount:l.tagRegular),children:[s,n&&(0,r.jsx)("span",{children:n})]})}},85722:(e,t,s)=>{s.d(t,{G:()=>r});var a=s(96540),i=s(56347),l=s(80260);function r(e){const{pathname:t}=(0,i.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,l.ys)(e.permalink,t))}(e,t)))),[e,t])}},47045:(e,t,s)=>{s.d(t,{Q:()=>l,b:()=>i});var a=s(23230);const i=()=>(0,a.translate)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);
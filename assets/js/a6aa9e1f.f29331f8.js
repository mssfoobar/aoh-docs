"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7643],{12783:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(96540);var n=a(18215),i=a(97639),r=a(17153),o=a(18630),s=a(15353),l=a(84934),d=a(51210),c=a(64331),g=a(21141),u=a(58806),p=a(74848);function m(e){const t=(0,u.k)(e);return(0,p.jsx)(g.A,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,i.default)(),{blogDescription:n,blogTitle:o,permalink:s}=t,l="/"===s?a:o;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.be,{title:l,description:n}),(0,p.jsx)(d.A,{tag:"blog_posts_list"})]})}function f(e){const{metadata:t,items:a,sidebar:n}=e;return(0,p.jsxs)(s.A,{sidebar:n,children:[(0,p.jsx)(c.A,{items:a}),(0,p.jsx)(l.A,{metadata:t})]})}function b(e){return(0,p.jsxs)(r.e3,{className:(0,n.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,p.jsx)(h,{...e}),(0,p.jsx)(m,{...e}),(0,p.jsx)(f,{...e})]})}},84934:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(23230),i=a(13555),r=a(74848);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(i.A,{permalink:a,title:(0,r.jsx)(n.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(i.A,{permalink:o,title:(0,r.jsx)(n.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},64331:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(38322),i=a(64255),r=a(74848);function o(e){let{items:t,component:a=i.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(n.i,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},58806:(e,t,a)=>{a.d(t,{k:()=>c,J:()=>g});var n=a(98180),i=a(97639),r=a(93512);var o=a(38322);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(u);return{author:1===t.length?t[0]:t}}function d(e,t,a){return e?{image:p({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function c(e){const{siteConfig:t}=(0,i.default)(),{withBaseUrl:a}=(0,n.useBaseUrlUtils)(),{metadata:{blogDescription:r,blogTitle:o,permalink:c}}=e,g=`${t.url}${c}`;return{"@context":"https://schema.org","@type":"Blog","@id":g,mainEntityOfPage:g,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:i,metadata:r}=e,{date:o,title:c,description:g,lastUpdatedAt:u}=r,p=n.image??i.image,m=i.keywords??[],h=`${t.url}${r.permalink}`,f=u?s(u):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:c,name:c,description:g,datePublished:o,...f?{dateModified:f}:{},...l(r.authors),...d(p,a,c),...m?{keywords:m}:{}}}(e.content,t,a)))}}function g(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:a}=(0,o.e)(),{siteConfig:c}=(0,i.default)(),{withBaseUrl:g}=(0,n.useBaseUrlUtils)(),{date:u,title:p,description:m,frontMatter:h,lastUpdatedAt:f}=a,b=t.image??h.image,x=h.keywords??[],j=f?s(f):void 0,k=`${c.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":k,mainEntityOfPage:k,url:k,headline:p,name:p,description:m,datePublished:u,...j?{dateModified:j}:{},...l(a.authors),...d(b,g,p),...x?{keywords:x}:{},isPartOf:{"@type":"Blog","@id":`${c.url}${e.blogBasePath}`,name:e.blogTitle}}}function u(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function p(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}}}]);
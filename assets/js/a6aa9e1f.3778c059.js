"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[3089],{92506:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(67294),n=a(86010),r=a(90627),i=a(13488),m=a(83699),s=a(97325);const o={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(o.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:o.sidebarItem},l.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive},e.title)))))))}var u=a(53086);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,i.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(c,{sidebar:t}):null}function E(e){const{sidebar:t,toc:a,children:i,...m}=e,s=t&&t.items.length>0;return l.createElement(r.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},9928:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(67294),n=a(86010),r=a(39962),i=a(79488),m=a(23702),s=a(92506),o=a(42568),c=a(33647),u=a(88389);function d(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.Z)(),{blogDescription:n,blogTitle:m,permalink:s}=t,o="/"===s?a:m;return l.createElement(l.Fragment,null,l.createElement(i.d,{title:o,description:n}),l.createElement(c.Z,{tag:"blog_posts_list"}))}function g(e){const{metadata:t,items:a,sidebar:n}=e;return l.createElement(s.Z,{sidebar:n},l.createElement(u.Z,{items:a}),l.createElement(o.Z,{metadata:t}))}function p(e){return l.createElement(i.FG,{className:(0,n.Z)(m.k.wrapper.blogPages,m.k.page.blogListPage)},l.createElement(d,e),l.createElement(g,e))}},42568:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(97325),r=a(23672);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(r.Z,{permalink:a,title:l.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),i&&l.createElement(r.Z,{permalink:i,title:l.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},51116:(e,t,a)=>{a.d(t,{Z:()=>R});var l=a(67294),n=a(86010),r=a(79107),i=a(79524);function m(e){let{children:t,className:a}=e;const{frontMatter:n,assets:m}=(0,r.C)(),{withBaseUrl:s}=(0,i.C)(),o=m.image??n.image;return l.createElement("article",{className:a,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},o&&l.createElement("meta",{itemProp:"image",content:s(o,{absolute:!0})}),t)}var s=a(83699);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:i}=(0,r.C)(),{permalink:m,title:c}=a,u=i?"h1":"h2";return l.createElement(u,{className:(0,n.Z)(o.title,t),itemProp:"headline"},i?c:l.createElement(s.Z,{itemProp:"url",to:m},c))}var u=a(97325),d=a(23777);const g={container:"container_mt6G"};function p(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return l.createElement(l.Fragment,null,a(t))}function E(e){let{date:t,formattedDate:a}=e;return l.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function b(){return l.createElement(l.Fragment,null," \xb7 ")}function h(e){let{className:t}=e;const{metadata:a}=(0,r.C)(),{date:i,formattedDate:m,readingTime:s}=a;return l.createElement("div",{className:(0,n.Z)(g.container,"margin-vert--md",t)},l.createElement(E,{date:i,formattedDate:m}),void 0!==s&&l.createElement(l.Fragment,null,l.createElement(b,null),l.createElement(p,{readingTime:s})))}function v(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function f(e){let{author:t,className:a}=e;const{name:r,title:i,url:m,imageURL:s,email:o}=t,c=m||o&&`mailto:${o}`||void 0;return l.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},s&&l.createElement(v,{href:c,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:r})),r&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(v,{href:c,itemProp:"url"},l.createElement("span",{itemProp:"name"},r))),i&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const N={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function Z(e){let{className:t}=e;const{metadata:{authors:a},assets:i}=(0,r.C)();if(0===a.length)return null;const m=a.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",m?N.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>l.createElement("div",{className:(0,n.Z)(!m&&"col col--6",m?N.imageOnlyAuthorCol:N.authorCol),key:t},l.createElement(f,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function _(){return l.createElement("header",null,l.createElement(c,null),l.createElement(h,null),l.createElement(Z,null))}var k=a(63905),P=a(47342);function I(e){let{children:t,className:a}=e;const{isBlogPostPage:i}=(0,r.C)();return l.createElement("div",{id:i?k.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},l.createElement(P.Z,null,t))}var T=a(94850),C=a(74597),w=a(87462);function y(){return l.createElement("b",null,l.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function L(e){const{blogPostTitle:t,...a}=e;return l.createElement(s.Z,(0,w.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),l.createElement(y,null))}const A={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function F(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:a,title:i,editUrl:m,hasTruncateMarker:s}=e,o=!t&&s,c=a.length>0;return c||o||m?l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&A.blogPostFooterDetailsFull)},c&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":o})},l.createElement(C.Z,{tags:a})),t&&m&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(T.Z,{editUrl:m})),o&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":c})},l.createElement(L,{blogPostTitle:i,to:e.permalink}))):null}function R(e){let{children:t,className:a}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return l.createElement(m,{className:(0,n.Z)(i,a)},l.createElement(_,null),l.createElement(I,null,t),l.createElement(F,null))}},88389:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),n=a(79107),r=a(51116);function i(e){let{items:t,component:a=r.Z}=e;return l.createElement(l.Fragment,null,t.map((e=>{let{content:t}=e;return l.createElement(n.n,{key:t.metadata.permalink,content:t},l.createElement(a,null,l.createElement(t,null)))})))}}}]);
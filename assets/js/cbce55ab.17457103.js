"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[2632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,h=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:10},a="\ud83c\udd95 Introduction",s={unversionedId:"web/introduction",id:"web/introduction",title:"\ud83c\udd95 Introduction",description:"The web application of AGIL Ops Hub ties all the different modules together. As such, it can be thought of as the",source:"@site/docs/40_web/10_introduction.md",sourceDirName:"40_web",slug:"/web/introduction",permalink:"/aoh-docs/docs/web/introduction",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/40_web/10_introduction.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"web",previous:{title:"Documentation",permalink:"/aoh-docs/docs/web/guides/documentation"}},c={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-introduction"},"\ud83c\udd95 Introduction"),(0,o.kt)("p",null,"The web application of AGIL Ops Hub ties all the different modules together. As such, it can be thought of as the\nbiggest service in the system. Each module in the system may have zero or more back-end services supporting it. As the\nweb is the front of the entire system, it essentially depends on all other services to function properly. Setting\nup the other services is beyond the scope of this document; you should refer to their approriate documentation on how\nto set them up there, but we will point out whenever you need a specific service to run a specific feature."),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/technologies/svelte_sveltekit"},"technologies section")," for more information."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"TODO:\n\n-   Incorporate Typescript checks // Playwright tests before or as part of CI/CD\n![status](https://github.com/mssfoobar/aoh-web/actions/workflows/web.yml/badge.svg)\n\n-   To standardize formatting, we are using `prettier-plugin-tailwindcss`, which also handles Svelte code.\n-   We plan to have `eslint` strictly lint the project (configuration requires review).\n\n")))}p.isMDXComponent=!0}}]);
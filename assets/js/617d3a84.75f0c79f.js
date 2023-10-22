"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[9442],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:1},a="\ud83c\udd95 Introduction",c={unversionedId:"development/web/introduction",id:"development/web/introduction",title:"\ud83c\udd95 Introduction",description:"AGIL Ops Hub or AOH is a package of Svelte components that can be re-used for AR2 projects.",source:"@site/docs/development/web/introduction.md",sourceDirName:"development/web",slug:"/development/web/introduction",permalink:"/aoh-docs/docs/development/web/introduction",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/development/web/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"development",previous:{title:"\ud83d\udcc1 Frontend Servers",permalink:"/aoh-docs/docs/category/-frontend-servers"},next:{title:"API",permalink:"/aoh-docs/docs/category/api"}},l={},s=[{value:"Additional Comments",id:"additional-comments",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-introduction"},"\ud83c\udd95 Introduction"),(0,o.kt)("p",null,"AGIL Ops Hub or ",(0,o.kt)("inlineCode",{parentName:"p"},"AOH")," is a package of Svelte components that can be re-used for AR2 projects."),(0,o.kt)("p",null,"The repository itself (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mssfoobar/ar2-web"},"https://github.com/mssfoobar/ar2-web"),") is a good starting point for a fully pre-configured\n",(0,o.kt)("inlineCode",{parentName:"p"},"Svelte")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"Svelte-Kit")," project containing Tailwind CSS, Playwright, Font Awesome, and many other\ndependencies."),(0,o.kt)("p",null,"The chosen technologies and libraries have a heavy focus on developer experience in mind, with ease-of-learning and\nmaintainability as key considerations."),(0,o.kt)("p",null,"As the web is the front of the entire system, it essentially depends on all other services to function properly. Setting\nup the other services is beyond the scope of this document; you should refer to their approriate documentation on how\nto set them up there, but we will point out whenever you need a specific service to run a specific feature."),(0,o.kt)("h3",{id:"additional-comments"},"Additional Comments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To standardize formatting, we are using ",(0,o.kt)("inlineCode",{parentName:"li"},"prettier-plugin-tailwindcss"),", which also handles Svelte code."),(0,o.kt)("li",{parentName:"ul"},"We plan to have ",(0,o.kt)("inlineCode",{parentName:"li"},"eslint")," strictly lint the project (configuration requires review).")),(0,o.kt)("p",null,"// TODO"))}d.isMDXComponent=!0}}]);
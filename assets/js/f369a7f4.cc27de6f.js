"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[507],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(i),y=a,m=u["".concat(s,".").concat(y)]||u[y]||p[y]||l;return i?n.createElement(m,r(r({ref:t},d),{},{components:i})):n.createElement(m,r({ref:t},d))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}y.displayName="MDXCreateElement"},6978:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const l={sidebar_position:2},r="Tailwind CSS",o={unversionedId:"web/technologies/tailwind",id:"web/technologies/tailwind",title:"Tailwind CSS",description:"Tailwind is a utility-first CSS framework that we use for rapidly building custom user interfaces.",source:"@site/docs/web/technologies/2.tailwind.md",sourceDirName:"web/technologies",slug:"/web/technologies/tailwind",permalink:"/ar2-docs/docs/web/technologies/tailwind",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/web/technologies/2.tailwind.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"web",previous:{title:"Svelte & SvelteKit",permalink:"/ar2-docs/docs/web/technologies/svelte_sveltekit"},next:{title:"Playwright",permalink:"/ar2-docs/docs/web/technologies/playwright"}},s={},c=[{value:"What is Tailwind CSS?",id:"what-is-tailwind-css",level:2},{value:"Why we&#39;ve chosen Tailwind",id:"why-weve-chosen-tailwind",level:3},{value:"Using Tailwind CSS",id:"using-tailwind-css",level:2},{value:"More Reading",id:"more-reading",level:2}],d={toc:c};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tailwind-css"},"Tailwind CSS"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Tailwind")," is a utility-first CSS framework that we use for rapidly building custom user interfaces."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tailwind CSS Logo",src:i(20273).Z,width:"54",height:"33"})),(0,a.kt)("h2",{id:"what-is-tailwind-css"},"What is Tailwind CSS?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Tailwind")," is a utility CSS Framework with flexibility, optimization and heavy DX focus. It is a highly customizable, low-level CSS framework that gives you all the building blocks you need to build bespoke designs without opinionated styles you have to fight to override."),(0,a.kt)("h3",{id:"why-weve-chosen-tailwind"},"Why we've chosen Tailwind"),(0,a.kt)("p",null,"When thinking about utility-class CSS Frameworks, two frameworks come to mind: ",(0,a.kt)("inlineCode",{parentName:"p"},"Tailwind CSS")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Bootstrap"),"."),(0,a.kt)("p",null,"While ",(0,a.kt)("inlineCode",{parentName:"p"},"Bootstrap")," comes with a set of pre-styled responsive, components that make up a UI kit, ",(0,a.kt)("inlineCode",{parentName:"p"},"Tailwind CSS")," offers a\nresponsive design system that is more flexible and customizable. It also adds its powerful\n",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/hover-focus-and-other-states"},"state variants")," system."),(0,a.kt)("h2",{id:"using-tailwind-css"},"Using Tailwind CSS"),(0,a.kt)("p",null,"Simply add the Tailwind CSS classes to your HTML elements to get going!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<h1 class="text-3xl font-bold underline">\n  Hello world!\n</h1>\n')),(0,a.kt)("p",null,"You can also use ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values"},"arbitrary values"),", which\nbasically works just like inline-styles. It is not recommended to break out of the constraints, but you may do so if\nit is really necessary (you should consider if you really have to whenever you decide to do this)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="top-[117px]">\n  Hello world!\n</div>\n')),(0,a.kt)("p",null,"Another powerful Tailwind feature to take note of is the ability to\n",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/hover-focus-and-other-states"},"conditionally apply classes based on states"),"."),(0,a.kt)("p",null,"In this example, hovering over the ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>")," will apply the ",(0,a.kt)("inlineCode",{parentName:"p"},"bg-gray-300")," class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="bg-gray-200 hover:bg-gray-300">\n  Hello world!\n</div>\n')),(0,a.kt)("p",null,"This feature even works with styling\n",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state"},"based on other related elements' state"),"."),(0,a.kt)("p",null,"Tailwind is highly extensible and has many more useful features. Read their official documentation for more info."),(0,a.kt)("h2",{id:"more-reading"},"More Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tailwindcss.com/"},"Official Tailwind CSS Website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tailwindcss.com/docs/guides/sveltekit"},"Install Tailwind CSS with SvelteKit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tailwindcss.com/docs/utility-first"},"Tailwind Core Concepts"))))}u.isMDXComponent=!0},20273:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA1NCAzMyI+PGcgY2xpcC1wYXRoPSJ1cmwoI3ByZWZpeF9fY2xpcDApIj48cGF0aCBmaWxsPSIjMzhiZGY4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNyAwYy03LjIgMC0xMS43IDMuNi0xMy41IDEwLjggMi43LTMuNiA1Ljg1LTQuOTUgOS40NS00LjA1IDIuMDU0LjUxMyAzLjUyMiAyLjAwNCA1LjE0NyAzLjY1M0MzMC43NDQgMTMuMDkgMzMuODA4IDE2LjIgNDAuNSAxNi4yYzcuMiAwIDExLjctMy42IDEzLjUtMTAuOC0yLjcgMy42LTUuODUgNC45NS05LjQ1IDQuMDUtMi4wNTQtLjUxMy0zLjUyMi0yLjAwNC01LjE0Ny0zLjY1M0MzNi43NTYgMy4xMSAzMy42OTIgMCAyNyAwek0xMy41IDE2LjJDNi4zIDE2LjIgMS44IDE5LjggMCAyN2MyLjctMy42IDUuODUtNC45NSA5LjQ1LTQuMDUgMi4wNTQuNTE0IDMuNTIyIDIuMDA0IDUuMTQ3IDMuNjUzQzE3LjI0NCAyOS4yOSAyMC4zMDggMzIuNCAyNyAzMi40YzcuMiAwIDExLjctMy42IDEzLjUtMTAuOC0yLjcgMy42LTUuODUgNC45NS05LjQ1IDQuMDUtMi4wNTQtLjUxMy0zLjUyMi0yLjAwNC01LjE0Ny0zLjY1M0MyMy4yNTYgMTkuMzEgMjAuMTkyIDE2LjIgMTMuNSAxNi4yeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0icHJlZml4X19jbGlwMCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGg1NHYzMi40SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+"}}]);
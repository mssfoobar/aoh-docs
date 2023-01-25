"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[8863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:4},o="Publishing \ud83d\udcf0",s={unversionedId:"web/guides/publishing",id:"web/guides/publishing",title:"Publishing \ud83d\udcf0",description:"Manual Publishing",source:"@site/docs/web/guides/publishing.md",sourceDirName:"web/guides",slug:"/web/guides/publishing",permalink:"/ar2-docs/docs/web/guides/publishing",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/web/guides/publishing.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"web",previous:{title:"Deployment \ud83c\udf0e",permalink:"/ar2-docs/docs/web/guides/deployment"},next:{title:"Documentation \ud83d\udcd6",permalink:"/ar2-docs/docs/web/guides/documentation"}},l={},p=[{value:"Manual Publishing",id:"manual-publishing",level:2},{value:"1. Test and use the packages before publishing:",id:"1-test-and-use-the-packages-before-publishing",level:3},{value:"2. Publishing the ready packages:",id:"2-publishing-the-ready-packages",level:3},{value:"Automatic Publishing",id:"automatic-publishing",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"publishing-"},"Publishing \ud83d\udcf0"),(0,i.kt)("h2",{id:"manual-publishing"},"Manual Publishing"),(0,i.kt)("h3",{id:"1-test-and-use-the-packages-before-publishing"},"1. Test and use the packages before publishing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In order to import components from ",(0,i.kt)("inlineCode",{parentName:"li"},"@mssfoobar/ar2-web")," for testing, use ",(0,i.kt)("inlineCode",{parentName:"li"},"npm link"),"\n(see ",(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/v8/commands/npm-link"},"https://docs.npmjs.com/cli/v8/commands/npm-link"),")"),(0,i.kt)("li",{parentName:"ul"},"This allows us to use components from ",(0,i.kt)("inlineCode",{parentName:"li"},"@mssfoobar/ar2-web")," without adding it as a dependency in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),".\nWe can then test against our local copy before actually publishing them to the npm registry.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd package\nnpm link\n\ncd ../\nnpm link @mssfoobar/ar2-web\n")),(0,i.kt)("h3",{id:"2-publishing-the-ready-packages"},"2. Publishing the ready packages:"),(0,i.kt)("p",null,"The Svelte components here are published to ",(0,i.kt)("inlineCode",{parentName:"p"},"@mssfoobar/ar2-web"),", to package and publish the components,\nperform the following steps:"),(0,i.kt)("p",null,"First, run ",(0,i.kt)("inlineCode",{parentName:"p"},"svelte-kit package")," (experimental as of 10th May 2022) to create a package of the files in lib/src.\nThis may be configured via the ",(0,i.kt)("inlineCode",{parentName:"p"},"svelte.config.js")," file.",(0,i.kt)("br",{parentName:"p"}),"\n","See: ",(0,i.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/configuration#package"},"https://kit.svelte.dev/docs/configuration#package")," & ",(0,i.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/packaging"},"https://kit.svelte.dev/docs/packaging")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run package\n")),(0,i.kt)("p",null,"Then, publish the packaged file. This repository defaults to publishing to our private registry, configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," file for installing npm modules, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file (",(0,i.kt)("inlineCode",{parentName:"p"},"publishConfig"),") for publishing ",(0,i.kt)("inlineCode",{parentName:"p"},"@mssfoobar/ar2-web"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd package\nnpm publish\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You will be required to log in to access the private repository, obtain an account from the repository maintainer.")),(0,i.kt)("h2",{id:"automatic-publishing"},"Automatic Publishing"),(0,i.kt)("p",null,"GitHub Actions has been configured to automatically publish the package when a new release is created."),(0,i.kt)("p",null,"For more information on how to publish releases on GitHub, visit ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository"},"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository"),"."))}c.isMDXComponent=!0}}]);
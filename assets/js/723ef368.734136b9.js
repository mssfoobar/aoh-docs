"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[2622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,d=u["".concat(i,".").concat(f)]||u[f]||m[f]||n;return r?a.createElement(d,p(p({ref:t},c),{},{components:r})):a.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,p=new Array(n);p[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,p[1]=l;for(var s=2;s<n;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63181:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={sidebar_position:50},p=void 0,l={unversionedId:"deployment/platform-aoh/prepare-aoh-setup",id:"deployment/platform-aoh/prepare-aoh-setup",title:"prepare-aoh-setup",description:"Ingress",source:"@site/docs/30_deployment/70-platform-aoh/50-prepare-aoh-setup.md",sourceDirName:"30_deployment/70-platform-aoh",slug:"/deployment/platform-aoh/prepare-aoh-setup",permalink:"/aoh-docs/docs/deployment/platform-aoh/prepare-aoh-setup",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/30_deployment/70-platform-aoh/50-prepare-aoh-setup.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"deployment",previous:{title:"Overview",permalink:"/aoh-docs/docs/deployment/platform-aoh/overview"},next:{title:"Setup AOH Applications",permalink:"/aoh-docs/docs/deployment/platform-aoh/setup-aoh-applications"}},i={},s=[{value:"Ingress",id:"ingress",level:3},{value:"Apply overall Hasura Schema",id:"apply-overall-hasura-schema",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"ingress"},"Ingress"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Deploy traefik (from init folder)\nkubectl create ns traefik\nhelm repo add traefik https://traefik.github.io/charts\n \ncd \\ar2-infra\\argocd\\<yourcluster>\\init\\traefik\\\nhelm install traefik traefik/traefik -f ./values-xxx-x.yml \u2013namespace traefik\n")),(0,o.kt)("h3",{id:"apply-overall-hasura-schema"},"Apply overall Hasura Schema"),(0,o.kt)("p",null,"The latest DB package should have deployed the latest Hasura Schema"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:2},i="Pre-requisites",l={unversionedId:"deployment/pre-requisites",id:"deployment/pre-requisites",title:"Pre-requisites",description:"// TODO: Create infra repo template (based on ar2-infra)",source:"@site/docs/deployment/20-pre-requisites.md",sourceDirName:"deployment",slug:"/deployment/pre-requisites",permalink:"/aoh-docs/docs/deployment/pre-requisites",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/deployment/20-pre-requisites.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},s={},p=[{value:"Software for installation client:",id:"software-for-installation-client",level:2},{value:"Configuration",id:"configuration",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"// TODO: Create infra repo template (based on ar2-infra)"),(0,o.kt)("h2",{id:"software-for-installation-client"},"Software for installation client:"),(0,o.kt)("p",null,"Aws CLI\nTerraform\nKubectl\nHelm"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"AWS account and profile"),(0,o.kt)("p",null,"To set profile:"),(0,o.kt)("p",null,"For windows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"setx AWS_PROFILE <clustername>\naws eks update-kubeconfig --region ap-southeast-1  --name <clustername>\n")),(0,o.kt)("p",null,"For linux:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export AWS_PROFILE=soh-qa\naws eks update-kubeconfig --region ap-southeast-1  --name <clustername>\n")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),k=o,d=p["".concat(s,".").concat(k)]||p[k]||m[k]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},39728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1},l="\ud83d\ude80 Quickstart",i={unversionedId:"wfe/guides/quickstart",id:"wfe/guides/quickstart",title:"\ud83d\ude80 Quickstart",description:"WFE comprises three modules",source:"@site/docs/wfe/guides/quickstart.md",sourceDirName:"wfe/guides",slug:"/wfe/guides/quickstart",permalink:"/aoh-docs/docs/wfe/guides/quickstart",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/wfe/guides/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"wfe",previous:{title:"\ud83d\udcda Guides",permalink:"/aoh-docs/docs/category/-guides-2"},next:{title:"\ud83d\udcbb Development",permalink:"/aoh-docs/docs/wfe/guides/Workflow Engine/development"}},s={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Running Locally",id:"running-locally",level:2},{value:"Docker setup",id:"docker-setup",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-quickstart"},"\ud83d\ude80 Quickstart"),(0,o.kt)("p",null,"WFE comprises three modules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WFE (Workflowflow Engine - interpreter service for bpmn dsl)"),(0,o.kt)("li",{parentName:"ul"},"WFW (Workflow Worker - worker service which performs activity tasks)"),(0,o.kt)("li",{parentName:"ul"},"WFM (Workflow Manager - http server for workflow managmement)")),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"Required:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"))),(0,o.kt)("h2",{id:"running-locally"},"Running Locally"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone Repo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mssfoobar/ar2-wfe.git\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Create .env file in project root directory")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"LOG_LEVEL=\nAPP_PORT=\nTEMPORAL_HOST=\nTEMPORAL_PORT=\nTEMPORAL_NAMESPACE=\nTEMPORAL_TASKQUEU=\nTEMPORAL_WORKFLOWTYPE=\nHASURA_HOST=\nHASURA_PORT=\nGQL_ENDPOINT=\nHASURA_GRAPHQL_ADMIN_SECRET=\nUCS_URL_PROTOCOL=\nUCS_HOST=\nUCS_PORT=\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Start services by running command")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"go run cmd/workflow-manager/main.go\ngo run cmd/workflow-engine/main.go\ngo run cmd/workflow-worker/main.go\n")),(0,o.kt)("h2",{id:"docker-setup"},"Docker setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/install/ubuntu/"},"Docker")),(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/linux/"},"Docker-Compose")),(0,o.kt)("li",{parentName:"ol"},"Docker ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"Post-installation")," setup"),(0,o.kt)("li",{parentName:"ol"},"Clone")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mssfoobar/ar2-wfe.git\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Start docker-compose")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Cleanup Docker")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose down\n")))}p.isMDXComponent=!0}}]);
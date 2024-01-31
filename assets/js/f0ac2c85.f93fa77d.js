"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[9263],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=o,d=c["".concat(p,".").concat(m)]||c[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:30},i="Setup Platform infrastructure",l={unversionedId:"deployment/platform-infra/AWS-EKS/setup-platform-infra",id:"deployment/platform-infra/AWS-EKS/setup-platform-infra",title:"Setup Platform infrastructure",description:"AWS",source:"@site/docs/30_deployment/50-platform-infra/AWS-EKS/30-setup-platform-infra.md",sourceDirName:"30_deployment/50-platform-infra/AWS-EKS",slug:"/deployment/platform-infra/AWS-EKS/setup-platform-infra",permalink:"/aoh-docs/docs/deployment/platform-infra/AWS-EKS/setup-platform-infra",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/30_deployment/50-platform-infra/AWS-EKS/30-setup-platform-infra.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"deployment",previous:{title:"AWS - EKS",permalink:"/aoh-docs/docs/category/aws---eks"},next:{title:"Configure Platform Services",permalink:"/aoh-docs/docs/deployment/platform-infra/AWS-EKS/configure-platform-services"}},p={},s=[{value:"AWS",id:"aws",level:2},{value:"Preparation:",id:"preparation",level:3},{value:"Execution:",id:"execution",level:3},{value:"AWS - Database (If required)",id:"aws---database-if-required",level:2}],u={toc:s},c="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-platform-infrastructure"},"Setup Platform infrastructure"),(0,o.kt)("h2",{id:"aws"},"AWS"),(0,o.kt)("h3",{id:"preparation"},"Preparation:"),(0,o.kt)("p",null,"go to  ",(0,o.kt)("inlineCode",{parentName:"p"},"/ar2-infra/terraform/terraform-aws-eks-blueprints-v4/deployment/<yourclustername> /main.tf")),(0,o.kt)("p",null,"search for the line containing this:\n#aoh: name of ec2 instances. (TO CHANGE)"),(0,o.kt)("p",null,'Change the "initial_xxx_dev" to a name of your choosing, for example "AOH_nodes".\nThe terraform scripts will then generate your worker nodes with names that you chose. '),(0,o.kt)("h3",{id:"execution"},"Execution:"),(0,o.kt)("p",null,"Change directory to:\n",(0,o.kt)("inlineCode",{parentName:"p"},"/ar2-infra/terraform/terraform-aws-eks-blueprintes-v4/<clustername>")),(0,o.kt)("p",null,"Execute ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform apply"),"."),(0,o.kt)("p",null,"Wait for 40 minutes"),(0,o.kt)("h2",{id:"aws---database-if-required"},"AWS - Database (If required)"),(0,o.kt)("p",null,"Setup the AWS RDS if you choose to use instead the RDS for your project"))}f.isMDXComponent=!0}}]);
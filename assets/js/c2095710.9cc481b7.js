"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[1386],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:80},i="Wrap up",l={unversionedId:"deployment/wrapup",id:"deployment/wrapup",title:"Wrap up",description:"Update load balancer with TLS secrets",source:"@site/docs/30_deployment/80-wrapup.md",sourceDirName:"30_deployment",slug:"/deployment/wrapup",permalink:"/aoh-docs/docs/deployment/wrapup",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/30_deployment/80-wrapup.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"deployment",previous:{title:"Configure AOH Applications",permalink:"/aoh-docs/docs/deployment/platform-aoh/configure-aoh-applications"},next:{title:"Maintenance",permalink:"/aoh-docs/docs/deployment/maintenance"}},p={},c=[{value:"Update load balancer with TLS secrets",id:"update-load-balancer-with-tls-secrets",level:3},{value:"Route53 zones",id:"route53-zones",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wrap-up"},"Wrap up"),(0,o.kt)("h3",{id:"update-load-balancer-with-tls-secrets"},"Update load balancer with TLS secrets"),(0,o.kt)("p",null,"update and apply ",(0,o.kt)("inlineCode",{parentName:"p"},"\\ar2-infra\\argocd\\<your cluster>\\init\\traefik\\values-for-aws-wfm.yml")),(0,o.kt)("h3",{id:"route53-zones"},"Route53 zones"),(0,o.kt)("p",null,"Setup set of shared dns names for the current version of deployment"),(0,o.kt)("p",null,"go to ",(0,o.kt)("inlineCode",{parentName:"p"},"/ar2-infra/argocd/<clustername>/init/route53"),"\nReplace the following with values from your cluster/environment:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"<clustername>")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"<hostedzoneid>")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"<dns_name>"))),(0,o.kt)("p",null,"excecute the following command to get aws to generate the current route 53 records:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"aws route53 change-resource-record-sets --hosted-zone-id <hosted-zone-id> --change-batch file://<route53_record_file>.json")),(0,o.kt)("p",null,'NOTE: the easiest way to obtain the "hostedzoneid" is to go to the hosted zone alias create record page,  Select Route traffic to " Alias to Network Load Balancer", ',(0,o.kt)("inlineCode",{parentName:"p"},"<your region>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<your load balancer>"),', and the page will show the "Alias hosted zone ID", which is the ',(0,o.kt)("inlineCode",{parentName:"p"},"<hostedzoneid>")," you want to input."))}d.isMDXComponent=!0}}]);
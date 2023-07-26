"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:9},i="urql",l={unversionedId:"web/technologies/urql",id:"web/technologies/urql",title:"urql",description:"urql is a highly customizable and versatile GraphQL client",source:"@site/docs/web/technologies/9.urql.md",sourceDirName:"web/technologies",slug:"/web/technologies/urql",permalink:"/ar2-docs/docs/web/technologies/urql",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/web/technologies/9.urql.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"web",previous:{title:"MapBox",permalink:"/ar2-docs/docs/web/technologies/mapbox_openlayers"},next:{title:"TypeScript",permalink:"/ar2-docs/docs/web/technologies/typescript"}},s={},c=[{value:"What is urql?",id:"what-is-urql",level:2},{value:"Why we&#39;ve chosen urql",id:"why-weve-chosen-urql",level:3},{value:"Using urql",id:"using-urql",level:2},{value:"More Reading",id:"more-reading",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"urql"},"urql"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"urql")," is a highly customizable and versatile GraphQL client"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"urql Logo",src:n(55634).Z,width:"225",height:"224"})),(0,o.kt)("h2",{id:"what-is-urql"},"What is urql?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"urql")," is a GraphQL client built to be highly customisable and versatile and exposes a set of helpers for several frameworks."),(0,o.kt)("h3",{id:"why-weve-chosen-urql"},"Why we've chosen urql"),(0,o.kt)("p",null,"When compared with other GraphQL clients such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Apollo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Relay"),", we chose ",(0,o.kt)("inlineCode",{parentName:"p"},"urql")," because it has ",(0,o.kt)("strong",{parentName:"p"},"smallest")," base\nbundle size and is very lightweight and extensible. Though Apollo is a big name, ",(0,o.kt)("inlineCode",{parentName:"p"},"Apollo Client")," also has many issues\nat the moment and requires more work to get working well with Svelte."),(0,o.kt)("h2",{id:"using-urql"},"Using urql"),(0,o.kt)("p",null,"Import necessary types and functions from ",(0,o.kt)("inlineCode",{parentName:"p"},"urql"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import type { Client } from '@urql/core';\nimport { createClient, defaultExchanges, subscriptionExchange } from '@urql/core';\n")),(0,o.kt)("p",null,"Create the client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"myClient = writable<Client>(\n    createClient({\n        url: import.meta.env.VITE_GQL_HOST ? GQL_URL : 'http://your-graphql-endpoint.com/v1/graphql',\n\n        fetchOptions: {\n            headers: {\n                'content-type': 'application/json',\n                'Authorization': 'Bearer ' + jwt,\n            },\n        },\n\n        exchanges: [\n            ...defaultExchanges,\n            subscriptionExchange({\n                forwardSubscription: operation => ({\n                    subscribe: sink => ({\n                        unsubscribe: get(wsClient).subscribe(operation, sink),\n                    }),\n                }),\n            }),\n        ],\n    })\n);\n")),(0,o.kt)("h2",{id:"more-reading"},"More Reading"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://formidable.com/open-source/urql/"},"Official URQL Website"))))}u.isMDXComponent=!0},55634:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/urql-1efe29e3c99e47af0756f314a1581c65.png"}}]);
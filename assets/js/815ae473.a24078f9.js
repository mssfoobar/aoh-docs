"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[6210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:2},a="\ud83d\udc80 Pitfalls",l={unversionedId:"overview/reference/pitfalls",id:"overview/reference/pitfalls",title:"\ud83d\udc80 Pitfalls",description:"Svelte & Svelte Kit",source:"@site/docs/overview/reference/pitfalls.md",sourceDirName:"overview/reference",slug:"/overview/reference/pitfalls",permalink:"/aoh-docs/docs/overview/reference/pitfalls",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/overview/reference/pitfalls.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"overview",previous:{title:"\u2714\ufe0f Runbook",permalink:"/aoh-docs/docs/overview/reference/runbook"},next:{title:"\u274c Common Errors & Mistakes",permalink:"/aoh-docs/docs/overview/reference/common"}},s={},u=[{value:"Svelte &amp; Svelte Kit",id:"svelte--svelte-kit",level:2},{value:"Asynchronous onMount functions",id:"asynchronous-onmount-functions",level:3},{value:"Svelte Store Usage",id:"svelte-store-usage",level:3},{value:"Keying <code>{#each}</code> Blocks",id:"keying-each-blocks",level:3},{value:"Testing before merging code with <code>adapter-node</code>",id:"testing-before-merging-code-with-adapter-node",level:3},{value:"URQL",id:"urql",level:2},{value:"Reusing GraphQL Queries",id:"reusing-graphql-queries",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-pitfalls"},"\ud83d\udc80 Pitfalls"),(0,o.kt)("h2",{id:"svelte--svelte-kit"},"Svelte & Svelte Kit"),(0,o.kt)("h3",{id:"asynchronous-onmount-functions"},"Asynchronous onMount functions"),(0,o.kt)("p",null,"If you run an onMount function asynchronously, it returns a promise instead of a function. This will result in the\nreturned 'function' not being called."),(0,o.kt)("p",null,"See reference discussion: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sveltejs/svelte/issues/4927"},"https://github.com/sveltejs/svelte/issues/4927")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'onMount(async () => {\n    bar = await baz();\n\n    return () => {\n        console.log("I\'m never called!");\n    };\n});\n')),(0,o.kt)("p",null,"To get around this, you can create and run an async function immediately inside onMount:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'onMount(() => {\n    async function foo() {\n        bar = await baz();\n    }\n\n    foo();\n\n    return () => console.log("Now, I do get called when destroyed.");\n});\n')),(0,o.kt)("h3",{id:"svelte-store-usage"},"Svelte Store Usage"),(0,o.kt)("p",null,"Any store which is meant to be specific to each individual client only always be set in ",(0,o.kt)("inlineCode",{parentName:"p"},"onMount")," or in a ",(0,o.kt)("inlineCode",{parentName:"p"},"is (browser)"),"\ncheck. This is because stores run on the server are global."),(0,o.kt)("p",null,"See reference discussion: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sveltejs/kit/discussions/4339"},"https://github.com/sveltejs/kit/discussions/4339")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Understanding this is very important for avoiding bugs and potential leaking of sensitive information on the browser.\nPlease look through the linked discussion thoroughly.")),(0,o.kt)("h3",{id:"keying-each-blocks"},"Keying ",(0,o.kt)("inlineCode",{parentName:"h3"},"{#each}")," Blocks"),(0,o.kt)("p",null,"If you use Svelte with any other framework that might manipulate the DOM or have an internal representation of the DOM\n(e.g. GridStack), you will very likely run into issues with this."),(0,o.kt)("p",null,"See how and why to use ",(0,o.kt)("inlineCode",{parentName:"p"},"keyed each blocks"),": ",(0,o.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/keyed-each-blocks"},"https://svelte.dev/tutorial/keyed-each-blocks")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default, when you modify the value of an each block, it will add and remove items at the end of the block, and update\nany values that have changed. That might not be what you want.")),(0,o.kt)("p",null,"This will cause the frameworks' representations of the DOM to go out of sync. Adding a unique identifier (or 'key')\nto the each block will allow Svelte to keep track of which element needs to be removed."),(0,o.kt)("h3",{id:"testing-before-merging-code-with-adapter-node"},"Testing before merging code with ",(0,o.kt)("inlineCode",{parentName:"h3"},"adapter-node")),(0,o.kt)("p",null,"Running the following commands to test your production build is not enough:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run build\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run preview\n")),(0,o.kt)("p",null,"Since our application is meant to be run on ",(0,o.kt)("inlineCode",{parentName:"p"},"nodejs")," and is built with ",(0,o.kt)("inlineCode",{parentName:"p"},"adapter-node"),", the appropriate way to run the app is with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"node build\n")),(0,o.kt)("p",null,"This runs and ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," file inside the git-ignored 'build' folder. There is still the potential for your app to fail at this\npoint, so please test with ",(0,o.kt)("inlineCode",{parentName:"p"},"node build"),"."),(0,o.kt)("h1",{id:"graphql"},"GraphQL"),(0,o.kt)("h2",{id:"urql"},"URQL"),(0,o.kt)("h3",{id:"reusing-graphql-queries"},"Reusing GraphQL Queries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"urql")," caches queries and uses the same result for operations that have the same queries/subscriptions/mutations."),(0,o.kt)("p",null,"For example, if you create a subscription like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gql",metastring:'title="Example GraphQL query"',title:'"Example',GraphQL:!0,'query"':!0},"    const ExampleSubscriptionDocument = gql`subscription ExampleSubscription {\n        example_table {\n            id\n        }\n    }`\n")),(0,o.kt)("p",null,"And mutate it in multiple places:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ExampleA/index.svelte"',title:'"ExampleA/index.svelte"'},"    pipe(\n        client.subscription<ExampleSubscriptionSubscription>(ExampleSubscriptionDocument. {}),\n        subscribe(async result => {\n            myDataInA = result?.data?.unshift();\n        }\n    );\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="ExampleB/index.svelte"',title:'"ExampleB/index.svelte"'},"    pipe(\n        client.subscription<ExampleSubscriptionSubscription>(ExampleSubscriptionDocument. {}),\n        subscribe(async result => {\n            myDataInB = result?.data?.unshift();\n        }\n    );\n")),(0,o.kt)("p",null,"The objects in result are actually shared - so mutating the resulting data arrays like in the example above will result\nin the second operation not receiving the same values."),(0,o.kt)("p",null,"This is because ",(0,o.kt)("inlineCode",{parentName:"p"},"urql")," shares those operations for performance reasons (so we don't need to have multiple operations\nwith the same GraphQL query). This however, means any mutations in one, will affect the other. Knowing this, you should\neither copy out values for queries that will be used in multiple areas, or share the value directly via other mechanisms\n(such as Svelte stores)."))}c.isMDXComponent=!0}}]);
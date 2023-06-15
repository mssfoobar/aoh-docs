"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[6210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},41885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2},a="Pitfalls \u26b0\ufe0f",l={unversionedId:"overview/reference/pitfalls",id:"overview/reference/pitfalls",title:"Pitfalls \u26b0\ufe0f",description:"Svelte & Svelte Kit",source:"@site/docs/overview/reference/pitfalls.md",sourceDirName:"overview/reference",slug:"/overview/reference/pitfalls",permalink:"/ar2-docs/docs/overview/reference/pitfalls",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/overview/reference/pitfalls.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"overview",previous:{title:"Runbook \u2714\ufe0f",permalink:"/ar2-docs/docs/overview/reference/runbook"},next:{title:"Common Errors & Mistakes \u274c",permalink:"/ar2-docs/docs/overview/reference/common"}},s={},c=[{value:"Svelte &amp; Svelte Kit",id:"svelte--svelte-kit",level:2},{value:"Asynchronous onMount functions",id:"asynchronous-onmount-functions",level:3},{value:"Svelte Store Usage",id:"svelte-store-usage",level:3},{value:"Keying <code>{#each}</code> Blocks",id:"keying-each-blocks",level:3},{value:"Testing before merging code with <code>adapter-node</code>",id:"testing-before-merging-code-with-adapter-node",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pitfalls-\ufe0f"},"Pitfalls \u26b0\ufe0f"),(0,r.kt)("h2",{id:"svelte--svelte-kit"},"Svelte & Svelte Kit"),(0,r.kt)("h3",{id:"asynchronous-onmount-functions"},"Asynchronous onMount functions"),(0,r.kt)("p",null,"If you run an onMount function asynchronously, it returns a promise instead of a function. This will result in the\nreturned 'function' not being called."),(0,r.kt)("p",null,"See reference discussion: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sveltejs/svelte/issues/4927"},"https://github.com/sveltejs/svelte/issues/4927")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'onMount(async () => {\n    bar = await baz();\n\n    return () => {\n        console.log("I\'m never called!");\n    };\n});\n')),(0,r.kt)("p",null,"To get around this, you can create and run an async function immediately inside onMount:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'onMount(() => {\n    async function foo() {\n        bar = await baz();\n    }\n\n    foo();\n\n    return () => console.log("Now, I do get called when destroyed.");\n});\n')),(0,r.kt)("h3",{id:"svelte-store-usage"},"Svelte Store Usage"),(0,r.kt)("p",null,"Any store which is meant to be specific to each individual client only always be set in ",(0,r.kt)("inlineCode",{parentName:"p"},"onMount")," or in a ",(0,r.kt)("inlineCode",{parentName:"p"},"is (browser)"),"\ncheck. This is because stores run on the server are global."),(0,r.kt)("p",null,"See reference discussion: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sveltejs/kit/discussions/4339"},"https://github.com/sveltejs/kit/discussions/4339")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Understanding this is very important for avoiding bugs and potential leaking of sensitive information on the browser.\nPlease look through the linked discussion thoroughly.")),(0,r.kt)("h3",{id:"keying-each-blocks"},"Keying ",(0,r.kt)("inlineCode",{parentName:"h3"},"{#each}")," Blocks"),(0,r.kt)("p",null,"If you use Svelte with any other framework that might manipulate the DOM or have an internal representation of the DOM\n(e.g. GridStack), you will very likely run into issues with this."),(0,r.kt)("p",null,"See how and why to use ",(0,r.kt)("inlineCode",{parentName:"p"},"keyed each blocks"),": ",(0,r.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/keyed-each-blocks"},"https://svelte.dev/tutorial/keyed-each-blocks")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"By default, when you modify the value of an each block, it will add and remove items at the end of the block, and update\nany values that have changed. That might not be what you want.")),(0,r.kt)("p",null,"This will cause the frameworks' representations of the DOM to go out of sync. Adding a unique identifier (or 'key')\nto the each block will allow Svelte to keep track of which element needs to be removed."),(0,r.kt)("h3",{id:"testing-before-merging-code-with-adapter-node"},"Testing before merging code with ",(0,r.kt)("inlineCode",{parentName:"h3"},"adapter-node")),(0,r.kt)("p",null,"Running the following commands to test your production build is not enough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run build\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm run preview\n")),(0,r.kt)("p",null,"Since our application is meant to be run on ",(0,r.kt)("inlineCode",{parentName:"p"},"nodejs")," and is built with ",(0,r.kt)("inlineCode",{parentName:"p"},"adapter-node"),", the appropriate way to run the app is with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"node build\n")),(0,r.kt)("p",null,"This runs and ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file inside the git-ignored 'build' folder. There is still the potential for your app to fail at this\npoint, so please test with ",(0,r.kt)("inlineCode",{parentName:"p"},"node build"),"."),(0,r.kt)("h1",{id:"graphql"},"GraphQL"),(0,r.kt)("p",null,"There's definitely stuff we should write here..."),(0,r.kt)("h1",{id:"others"},"Others"),(0,r.kt)("p",null,"There's definitely stuff we should write here..."))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(86010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),i=n(67294),r=n(86010),o=n(51048),s=n(33609),l=n(1943),p=n(72957);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:m,className:h}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,l.U)(),[w,N]=(0,i.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=m){const e=f[m];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==w&&(x(t),N(a),null!=m&&y(m,String(a)))},S=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},h)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:S,onClick:T},o,{className:(0,r.Z)("tabs__item",u,o?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,i.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},74435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),r=n(34259),o=n(18679);const s={sidebar_position:2},l="\ud83d\udcbb Development",p={unversionedId:"development/web/guides/development",id:"development/web/guides/development",title:"\ud83d\udcbb Development",description:"The scope of this document is not to be a tutorial on Svelte and",source:"@site/docs/development/web/guides/development.mdx",sourceDirName:"development/web/guides",slug:"/development/web/guides/development",permalink:"/aoh-docs/docs/development/web/guides/development",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/development/web/guides/development.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"development",previous:{title:"\u2699\ufe0f Configuration",permalink:"/aoh-docs/docs/development/web/guides/configuration"},next:{title:"\ud83d\udd27 Testing",permalink:"/aoh-docs/docs/category/-testing"}},c={},u=[{value:"Creating A Simple Svelte Component",id:"creating-a-simple-svelte-component",level:2},{value:"index.svelte",id:"indexsvelte",level:3},{value:"index.d.ts",id:"indexdts",level:3},{value:"test.svelte",id:"testsvelte",level:3},{value:"comp.test.ts",id:"comptestts",level:3},{value:"Styling and Theming",id:"styling-and-theming",level:2},{value:"Pulling data with GraphQL",id:"pulling-data-with-graphql",level:2},{value:"Making a GraphQL query",id:"making-a-graphql-query",level:3},{value:"Making a GraphQL Subscriptions",id:"making-a-graphql-subscriptions",level:3},{value:"Query Types &amp; GraphQL Codegen",id:"query-types--graphql-codegen",level:3},{value:"Handling Authentication",id:"handling-authentication",level:2},{value:"JWT Access Token",id:"jwt-access-token",level:3},{value:"Broken Queries, Subscriptions, and Retries",id:"broken-queries-subscriptions-and-retries",level:3},{value:"Managing State",id:"managing-state",level:2},{value:"Testing",id:"testing",level:2},{value:"Creating Endpoints",id:"creating-endpoints",level:2},{value:"Standard endpoint message format",id:"standard-endpoint-message-format",level:3}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-development"},"\ud83d\udcbb Development"),(0,i.kt)("p",null,"The scope of this document is not to be a tutorial on ",(0,i.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/basics"},"Svelte")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/introduction"},"Svelte Kit"),", you should visit their official documentation to learn more\nabout them. This is meant to be a quick reference to help you can create components using our stack; how our folders are\nstructured, how ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," is managed, how we approach unit and end-to-end testing, etc."),(0,i.kt)("h2",{id:"creating-a-simple-svelte-component"},"Creating A Simple Svelte Component"),(0,i.kt)("p",null,"Our components rest inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/lib/components")," folder. Each component rests in a separate folder with the following\nfiles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.svelte"),": The Svelte file for the component"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.d.ts"),": Ambient declaration file to support the component"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test.svelte"),": An instantiation of the component, used to test the component, as well as provide examples on how to\nuse it"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"comp.test.ts"),": The ",(0,i.kt)("em",{parentName:"li"},"Playwright")," test for the component - the project is configured to visit and perform actions on\nthe ",(0,i.kt)("em",{parentName:"li"},"test.svelte")," file via the ",(0,i.kt)("inlineCode",{parentName:"li"},"/tests")," route.")),(0,i.kt)("h3",{id:"indexsvelte"},(0,i.kt)("a",{parentName:"h3",href:"https://svelte.dev/repl/286607b464814418b643d47400463644?version=3.49.0"},"index.svelte")),(0,i.kt)("p",null,"View the code on ",(0,i.kt)("a",{parentName:"p",href:"https://svelte.dev/repl/286607b464814418b643d47400463644?version=3.49.0"},"Svelte REPL")),(0,i.kt)("p",null,"The following is a simple Svelte component demonstrating data binding, reactivity, and iteratively rendering based on\ndata."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.svelte"',title:'"index.svelte"'},'<script>\n    let exampleObjects = [];\n    let currentText = "Hello new developer!";\n\n    let totalCount = 1;\n\n    function addObject() {\n        exampleObjects.push({text: currentText, count: totalCount});\n        exampleObjects = exampleObjects; // reactivity is based on assignments, assign it to itself to force reactivity\n        totalCount++;\n    }\n<\/script>\n\n<input type="text" bind:value={currentText}>\n<button on:click={addObject}>\n    ADD OBJECT\n</button>\n<div>\n    {#each exampleObjects as xo }\n        <div>\n            {xo.count}. {xo.text}\n        </div>\n    {/each}\n</div>\n')),(0,i.kt)("p",null,"Though ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript")," is loved for it's speed of development and flexibility, the great freedom provided by it also makes\nmaintaining large projects a nightmare. ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeScript")," is a must - it allows yourself and other developers to understand\nthe shape of the objects being passed around. To have your types available throughout the project, we use an ambient\ntypescript declaration file:"),(0,i.kt)("h3",{id:"indexdts"},"index.d.ts"),(0,i.kt)("p",null,"Here's an example declaration for the component we wrote:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.d.ts"',title:'"index.d.ts"'},"declare interface ExampleObject {\n    text: string;\n    count: number;\n}\n")),(0,i.kt)("p",null,"And here is the TypeScript version of that componet (the ",(0,i.kt)("inlineCode",{parentName:"p"},"index.svelte"),") shown earlier."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.svelte"',title:'"index.svelte"'},'<script lang="ts">\n    let exampleObjects: Array<ExampleObject> = [];\n    let currentText = "Hello new developer!";\n\n    let totalCount = 1;\n\n    function addObject() {\n        exampleObjects.push({text: currentText, count: totalCount});\n        exampleObjects = exampleObjects;\n        totalCount++;\n    }\n<\/script>\n\n<input type="text" bind:value={currentText}>\n<button on:click={addObject}>\n    ADD OBJECT\n</button>\n<div>\n    {#each exampleObjects as xo }\n        <div>\n            {xo.count}. {xo.text}\n        </div>\n    {/each}\n</div>\n')),(0,i.kt)("p",null,"With the ambient declaration file, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExampleObject")," throughout our project, enabling great features like\ntype checking and IntelliSense."),(0,i.kt)("h3",{id:"testsvelte"},(0,i.kt)("a",{parentName:"h3",href:"https://svelte.dev/repl/54ac8421e91e4506aa515ce92290fb9e?version=3.49.0"},"test.svelte")),(0,i.kt)("p",null,"Every component should have examples on how to use them, and tests to ensure they are running correct. We provide these\nby having a ",(0,i.kt)("inlineCode",{parentName:"p"},"test.svelte")," file next to our ",(0,i.kt)("inlineCode",{parentName:"p"},"index.svelte")," file."),(0,i.kt)("p",null,"Example usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"index.svelte"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="test.svelte"',title:'"test.svelte"'},"<script>\n    import DeveloperGreeter from './index.svelte';\n<\/script>\n\n<div>\n    <h1>\n        Look at this thing I made:\n    </h1>\n    <DeveloperGreeter />\n</div>\n")),(0,i.kt)("h3",{id:"comptestts"},"comp.test.ts"),(0,i.kt)("p",null,"For unit-testing components, we have the component folder structure mirrored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/tests")," route, and we dynamically\nrender the components based on the route. We then have ",(0,i.kt)("inlineCode",{parentName:"p"},"Playwright")," visit the component pages to perform tests on them."),(0,i.kt)("p",null,"Here is a sample of what the ",(0,i.kt)("inlineCode",{parentName:"p"},"comp.test.ts")," file might look like for the component we wrote above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="comp.test.ts"',title:'"comp.test.ts"'},'import { test } from "@playwright/test";\n\ntest("click buttons", async ({ page }) => {\n    // Go to http://localhost:4173/tests/components/basic/Button\n    await page.goto("http://localhost:4173/tests/components/DeveloperGreeter");\n    await page.locator("text=\'ADD OBJECT\'").click();\n    await page.locator("text=\'1. Hello new developer!\'").toBeVisible();\n});\n')),(0,i.kt)("p",null,"In the future, we might switch to Playwright's ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/test-components"},(0,i.kt)("inlineCode",{parentName:"a"},"components"))," feature.\nHowever, it is still currently experiemental."),(0,i.kt)("h2",{id:"styling-and-theming"},"Styling and Theming"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," is a responsive, highly extensible, utility-first CSS framework. It has a\ndesign system built-in, like Bootstrap, but unlike Bootstrap, it is much more flexible and meant to be used a little\nbit like in-lining your CSS. Read their ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/utility-first"},"core concepts")," to learn more\nabout the rationale behind Tailwind."),(0,i.kt)("p",null,"For theming, we use ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/theme"},"Tailwind's theme configuration system")," to create our own\nthemes. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.cjs")," file, you can see how we have it extended."),(0,i.kt)("p",null,"The colors are named and assigned to a list of CSS variables that are assigned to the root element (",(0,i.kt)("inlineCode",{parentName:"p"},"html"),") - you can\nsee this in the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.html")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.html"',title:'"app.html"'},'<html lang="en" class="theme-1 bg-background"></html>\n')),(0,i.kt)("p",null,"The default theme is called ",(0,i.kt)("inlineCode",{parentName:"p"},"theme-1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bg-background")," is the background color (specified with ",(0,i.kt)("inlineCode",{parentName:"p"},"bg-"),") using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"background")," key that we've assigned in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.cjs")," file. That ",(0,i.kt)("inlineCode",{parentName:"p"},"background")," is given the CSS variable\n",(0,i.kt)("inlineCode",{parentName:"p"},"--background-color: 255 255 255"),", which is defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"themes.css"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="themes.css"',title:'"themes.css"'},"--background-color: 255 255 255;\n")),(0,i.kt)("p",null,"Changing this variable changes the color for anything using ",(0,i.kt)("inlineCode",{parentName:"p"},"background")," and that is how we change themes on the fly."),(0,i.kt)("p",null,"To define more themes, simply add more classes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"themes.css")," file and change the class on the ",(0,i.kt)("inlineCode",{parentName:"p"},"html")," element."),(0,i.kt)("p",null,"Example:"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"theme",label:"themes.css",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="themes.css"',title:'"themes.css"'},"... {\n    /* other themes... */\n}\n\n.theme-2 {\n    /* Primary */\n    --primary-color: 62 78 111;\n    --on-primary-color: 222 222 222;\n    --primary-light-color: 124 124 255;\n    --primary-dark-color: 12 13 80;\n\n    /* Secondary */\n    --secondary-color: 152 170 32;\n    --on-secondary-color: 12 12 12;\n\n    /* and so on... */\n}\n\n... {\n    /* other themes... */\n}\n"))),(0,i.kt)(o.Z,{value:"html",label:"app.html",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.html"',title:'"app.html"'},'<html lang="en" class="theme-2 bg-background"></html>\n')))),(0,i.kt)("h2",{id:"pulling-data-with-graphql"},"Pulling data with GraphQL"),(0,i.kt)("p",null,"Our framework uses ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," to pull data from the server, and ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQL Subscriptions")," to receive\nupdates."),(0,i.kt)("h3",{id:"making-a-graphql-query"},"Making a GraphQL query"),(0,i.kt)("p",null,"In your ",(0,i.kt)("inlineCode",{parentName:"p"},"index.svelte")," or more likely, your ",(0,i.kt)("inlineCode",{parentName:"p"},"+page.ts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"+page.server.ts")," file (please read up on\n",(0,i.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/routing#page-page-server-js"},"routing in Svelte Kit"),"), you can make a GraphQL query using\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"gql")," tag. The ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-tag")," package provides this ability to convert the JavaScript template literal into a GraphQL\nAST, which is then used by ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-codegen")," to generate types for us to safely use."),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"gql`\n    query WidgetConfig {\n        configuration_widget {\n            config\n            name\n            type\n            uuid\n        }\n    }\n`;\n")),(0,i.kt)("p",null,"We store our GraphQL client (urql) in a Svelte Store, which you can get, and use to make queries via urql's API."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"To effectly understand the next section, you need a basic understanding of Svelte, Svelte Kit, Graph QL, and urql:"),(0,i.kt)("p",{parentName:"admonition"},"// TODO"),(0,i.kt)("p",{parentName:"admonition"},"// - ","[Svelte & Svelte Kit]","\n// - ","[Graph QL]","\n// - ","[urql]")),(0,i.kt)("p",null,"Here is an example Svelte ",(0,i.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/routing#page-page-js"},(0,i.kt)("em",{parentName:"a"},"page"))," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"Svelte Kit"),"\nload function that makes a GraphQL query and passes the result as props to the page component:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"WidgetConfigQuery")," type and ",(0,i.kt)("inlineCode",{parentName:"p"},"WidgetConfigDocument")," exports are generated using ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-codegen"),", which will be\nelaborated on in the next section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="+page.ts"',title:'"+page.ts"'},'import { gqlClient } from "$lib/stores/Clients";\nimport { get } from "svelte/store";\nimport {\n    type WidgetConfigQuery,\n    WidgetConfigDocument,\n} from "./index.generated";\n\ngql`\n    query WidgetConfig {\n        configuration_widget {\n            config\n            name\n            type\n            uuid\n        }\n    }\n`;\n\nexport async function load({}) {\n    const client = get(gqlClient);\n    const response = await client\n        .query<WidgetConfigQuery>(WidgetConfigDocument)\n        .toPromise();\n\n    return {\n        props: {\n            configuration_widget: response.data?.configuration_widget,\n        },\n    };\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="+page.svelte"',title:'"+page.svelte"'},'<script lang="ts">... export let configuration_widget = {}; ...<\/script>\n')),(0,i.kt)("h3",{id:"making-a-graphql-subscriptions"},"Making a GraphQL Subscriptions"),(0,i.kt)("p",null,"Urql performs GraphQL subscriptions using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/0no-co/wonka#wonka"},"Wonka"),", a stream library. To handle\ndata received from Urql subscriptions, they must be piped into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Wonka Subscribe")," function and handled with a callback\nfunction."),(0,i.kt)("p",null,"The following is a simple example of setting up a subscription using our framework. See the comments for more details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="+page.svelte"',title:'"+page.svelte"'},"<script lang=\"ts\">\n    import { SystemTimeDocument, type SystemTimeSubscription } from '$generated-types';\n\n    import { get } from 'svelte/store';\n    import { type Subscription, pipe as wPipe, subscribe as wSubscribe } from 'wonka';\n\n    import { gqlClientStore } from '$lib/stores/Clients';\n    import gql from 'graphql-tag';\n    import { onDestroy, onMount } from 'svelte';\n\n    let dateTime: ISO8601Date;\n    let subscription: Subscription;\n\n    onMount(async () => {\n        // highlight-start\n        // Get the GraphQL Client from the client store.\n        // highlight-end\n        const client = get(gqlClientStore);\n\n        // highlight-start\n        // Define the GraphQL subscription - this can be done in the same file, in a separate `.graphql` file, or\n        // anywhere else - as long as it exists, graphql-codegen will pick it up and generate the subscription type and\n        // object for use. Remember to run GraphQL Codegen!\n        // highlight-end\n        gql`\n            subscription SystemTime {\n                system_time {\n                    reported_at\n                }\n            }\n        `;\n\n        // highlight-start\n        // Store the subscription so we can call unsubscribe later.\n        // highlight-end\n        subscription = wPipe(\n            client.subscription<SystemTimeSubscription>(SystemTimeDocument, {}),\n            wSubscribe(result => {\n                if (result?.data && result?.data?.system_time[0]) {\n                    dateTime = result.data.system_time[0].reported_at;\n                    console.log(\"Lets see the time!\", dateTime);\n                }\n            })\n        );\n    });\n\n    onDestroy(async () => {\n\n        // highlight-start\n        // Ensure you unsubscribe at the appropriate time. For example, when the component unmounts.\n        // If you skip this step, your subscription will persist as your change pages (with client-side navigation)\n        // highlight-end\n        if (subscription) subscription.unsubscribe();\n    });\n<\/script>\n")),(0,i.kt)("h3",{id:"query-types--graphql-codegen"},"Query Types & GraphQL Codegen"),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-codegen")," to generate the query shape/types from the the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.graphql")," file. You can get the schema\nfile by using the introspection API from the GraphQL endpoint you are calling."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"ar2-web"),", we have an npm script called ",(0,i.kt)("inlineCode",{parentName:"p"},"getschema")," which runs ",(0,i.kt)("inlineCode",{parentName:"p"},"gq")," to get the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.graphql")," file and places It\nin the root directory. Learn how to use ",(0,i.kt)("inlineCode",{parentName:"p"},"gq")," to pull the schema here:\n",(0,i.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/guides/export-graphql-schema/"},"https://hasura.io/docs/latest/guides/export-graphql-schema/")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run getschema\n")),(0,i.kt)("p",null,"We then have another npm script called ",(0,i.kt)("inlineCode",{parentName:"p"},"generate")," which runs graphql-codegen. It reads the ",(0,i.kt)("inlineCode",{parentName:"p"},"codegen.yml")," configuration\nfile to determine how where to get ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.graphql")," (we place it in the root folder), along with all other files that\nstore your queries and uses these files to generate the types. They appear in a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"generated"),"\nwhich is excluded from .git."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run generate\n")),(0,i.kt)("p",null,"After generating these types, you can now have full typescript definitions for your GraphQL queries. Remember to run\n",(0,i.kt)("inlineCode",{parentName:"p"},"npm run getschema")," again whenever your GraphQL schema changes, and to run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run generate")," whenever you write new\nqueries, or need to update the queries with the new schema."),(0,i.kt)("h2",{id:"handling-authentication"},"Handling Authentication"),(0,i.kt)("h3",{id:"jwt-access-token"},"JWT Access Token"),(0,i.kt)("p",null,"Authentication of requests is done via the ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"urql")," client has been set up to use the JWT acquired from logging\nin to the system. It also automatically handles token refreshes and query retries. On the server-side client, the token\nis attached to the request header as a Bearer Authorization token. On the client side, it is sent to ",(0,i.kt)("inlineCode",{parentName:"p"},"Hasura"),"\nautomatically via cookies. This usage of cookies on the client-side is an additional security measure to avoid exposing\nthe token to access via JavaScript. This means you will not able to access the access token on the client/browser in\nJavaScript."),(0,i.kt)("p",null,"To accomodate this, we have multiple instances of Hasura set up, each set to handle different modes of authentication."),(0,i.kt)("h3",{id:"broken-queries-subscriptions-and-retries"},"Broken Queries, Subscriptions, and Retries"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"urql")," client has been set up to handle retries via the ",(0,i.kt)("inlineCode",{parentName:"p"},"retryExchange"),". The client is set up to retry only\nsubscriptions, as it is assumed that when you make a subscription, you want this connection to be open and receiving\ndata indefinitely. Queries are not retried, but you may configure this behaviour by modifying ",(0,i.kt)("inlineCode",{parentName:"p"},"Clients.ts")," in\n",(0,i.kt)("inlineCode",{parentName:"p"},"src/lib/stores/Clients.ts"),"."),(0,i.kt)("p",null,"Subscriptions use the ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-ws")," transport, this creates and manages a websocket connection, which ",(0,i.kt)("inlineCode",{parentName:"p"},"urql")," then uses.\nThe JWT is passed to Hasura when the subscription is first created and the websocket connection gets opened. Hasura then\nuses the expiry time in the token to decide when to terminate the GraphQL connection. This closing of the connection\ncauses all subscriptions to fail - then will then all be automatically retried with the new access token."),(0,i.kt)("p",null,"In some cases, you might have passed a variable into your subscription that might need to be updated when a retry\noccurs. This is particularly necessary when you use Hasura's streaming subscriptions, which requires a cursor to\ndetermine where to start pulling data from. Your subscription would be retried with the original cursor value, causing\nyour application to retrieve duplicate data. To deal with this, you can pass a context object with the property\n",(0,i.kt)("inlineCode",{parentName:"p"},"updateOperationOnRetry")," to your GraphQL subscriptions. This must contain a callback function that takes in an operation\nas an argument and returns nothing. The GraphQL client will run this function on retry."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'onMount(async () => {\n    const client = get(gqlClientStore);\n\n    gql`\n        subscription ExampleStreaming($createdAt: timestampz) {\n            some_data_stream {\n                id\n            }\n        }\n    `;\n\n    subscription = wPipe(\n        client.subscription<ExampleStreamingSubscription>(\n            ExampleStreamingDocument,\n            {\n                created_at: dayjs().toISOString(),\n            },\n            {\n                // highlight-start\n                // Pass in the callback function to update the operation variables on retry.\n                // highlight-end\n                updateOperationOnRetry: (operation: Operation) => {\n                    operation.variables = {\n                        created_at: dayjs().toISOString(),\n                    };\n                },\n            }\n        ),\n        wSubscribe((result) => {\n            if (result?.data && result?.data?.some_data_stream[0]) {\n                logger.debug(\n                    { id: result.data.some_data_stream[0].id },\n                    "How? Is this what you want?"\n                );\n            }\n        })\n    );\n});\n')),(0,i.kt)("h2",{id:"managing-state"},"Managing State"),(0,i.kt)("p",null,"A key point to take note about using Svelte Stores with Svlete Kit is that whenever stores are run on the server, it is\nglobal - meaning when running hybrid rendering or server-side rendering (any code in ",(0,i.kt)("inlineCode",{parentName:"p"},".svelte")," that has no\n",(0,i.kt)("inlineCode",{parentName:"p"},"if (browser)")," checks or isn't run inside ",(0,i.kt)("inlineCode",{parentName:"p"},"onMount()"),"). This means you should always set stores in a browser context\nonly."),(0,i.kt)("p",null,"Reference issue: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sveltejs/kit/discussions/4339"},"https://github.com/sveltejs/kit/discussions/4339")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"Successful development involves testing. It is a big topic on its own, so please visit the respective pages to\nlearn how we handle testing."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/aoh-docs/docs/development/web/guides/testing/TDD-Testing"},"Test Driven Development Testing (TDD)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/aoh-docs/docs/development/web/guides/testing/BDD-Testing"},"Behaviour Driven Development Testing (BDD)"))),(0,i.kt)("p",null,"We are expected to write out own unit tests and participate in integration tests."),(0,i.kt)("h2",{id:"creating-endpoints"},"Creating Endpoints"),(0,i.kt)("p",null,"All API endpoints created by the web server should be done at the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/routes/api")," folder. This is done by Creating\n",(0,i.kt)("inlineCode",{parentName:"p"},"+server.ts")," files in the respective folder. For example, for the api to get the system time, the ",(0,i.kt)("inlineCode",{parentName:"p"},"+server.ts")," file is\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"src/routes/api/info/time/+server.ts"),"."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/routing#server"},"https://kit.svelte.dev/docs/routing#server")," for more information;"),(0,i.kt)("h3",{id:"standard-endpoint-message-format"},"Standard endpoint message format"),(0,i.kt)("p",null,"As a standard for our system, we are adopting the following structure for the response payload for endpoints. This type\nis defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.d.ts")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPResponseBody")," and should be used to type all your API responses."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n    data: {...}, // arbitrary format - always array? GraphQL does array or obj - to be decided\n    message: "...", // string\n    sent_at: "", //iso8601\n    errors: [ {\n        message: "....", // string\n        ...\n    } ]\n}\n')))}m.isMDXComponent=!0}}]);
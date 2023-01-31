"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(86010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),i=n(67294),o=n(86010),r=n(72389),l=n(67392),s=n(7094),p=n(12466);const d="tabList__CuJ",m="tabItem_LNqP";function u(e){const{lazy:t,block:n,defaultValue:r,values:u,groupId:c,className:h}=e,f=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=u??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===r?r:r??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:b}=(0,s.U)(),[w,C]=(0,i.useState)(v),y=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=c){const e=N[c];null!=e&&e!==w&&k.some((t=>t.value===e))&&C(e)}const T=e=>{const t=e.currentTarget,n=y.indexOf(t),a=k[n].value;a!==w&&(S(t),C(a),null!=c&&b(c,String(a)))},E=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const n=y.indexOf(e.currentTarget)+1;t=y[n]??y[0];break}case"ArrowLeft":{const n=y.indexOf(e.currentTarget)-1;t=y[n]??y[y.length-1];break}}t?.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},h)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>y.push(e),onKeyDown:E,onClick:T},r,{className:(0,o.Z)("tabs__item",m,r?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,i.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},24107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(87462),i=(n(67294),n(3905)),o=n(65488),r=n(85162);const l={sidebar_position:2},s="Configuration \u2699\ufe0f",p={unversionedId:"web/getting-started/configuration",id:"web/getting-started/configuration",title:"Configuration \u2699\ufe0f",description:"There are many levels of configuration available, however, to keep things simple, we'll only cover configuration specific",source:"@site/docs/web/getting-started/configuration.mdx",sourceDirName:"web/getting-started",slug:"/web/getting-started/configuration",permalink:"/ar2-docs/docs/web/getting-started/configuration",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/web/getting-started/configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"web",previous:{title:"Quickstart \ud83d\ude80",permalink:"/ar2-docs/docs/web/getting-started/quickstart"},next:{title:"API \ud83c\udd95",permalink:"/ar2-docs/docs/category/api-"}},d={},m=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Setting your npm configuration to use the tokens",id:"setting-your-npm-configuration-to-use-the-tokens",level:3},{value:"Quality of Life - VS Code",id:"quality-of-life---vs-code",level:2},{value:"Format On Save",id:"format-on-save",level:3},{value:"Recommended\xb9 Extensions",id:"recommended-extensions",level:3},{value:"Tailwind IntelliSense Hinters",id:"tailwind-intellisense-hinters",level:3},{value:"Tailwind IntelliSense on Custom Attributes",id:"tailwind-intellisense-on-custom-attributes",level:3},{value:"Other Modules",id:"other-modules",level:2}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration-\ufe0f"},"Configuration \u2699\ufe0f"),(0,i.kt)("p",null,"There are many levels of configuration available, however, to keep things simple, we'll only cover configuration specific\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"ar2-web"),". Refer to ",(0,i.kt)("a",{parentName:"p",href:"#other-modules"},"the list below")," for helpful information on configuring the other modules."),(0,i.kt)("p",null,"The following list of environment variables are used during both development and deployment of the project."),(0,i.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("p",null,"Environment variables are managed by using a ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file in the root of the project. This ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file is loaded by\nmultiple programs and used in different ways. It is used by ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," to run the Dockerfile, and it is used by"),(0,i.kt)("p",null,"Vite / Svelte Kit in two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Static: Processed during build-time and statically replaced, these cannot change during run-time."),(0,i.kt)("li",{parentName:"ul"},"Dynamic: These can be changed during run-time by modifying the environment variable.")),(0,i.kt)("p",null,"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/modules#$env-dynamic-private"},"Svelte Kit $env API")," to learn how to access these variables (code in Svelte Kit\nis differentiated as being available on both the client & server or server only. Code that is exposed to the client can only import env vars\nthat are marked ",(0,i.kt)("inlineCode",{parentName:"p"},"PUBLIC_")," (to avoid leaking sensitive information to the browser)."),(0,i.kt)("p",null,"The following is a non-exhaustive description of some of the environment variables used to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"ar2-web"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FONTAWESOME_ACCESS_TOKEN")," token required to access Font Awesome's npm registry."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GITHUB_ACCESS_TOKEN")," token required to access GitHub Packages' npm registry."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},"development")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"production")," control production vs development settings (e.g. log level)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PUBLIC_BUILD_VERSION")," the CI will create this and set it on the deployed servers - this is useful for checking what the deployed version is on the front-end."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PORT")," port number the application will listen on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CLIENT_SECRET")," token required to connect to the verification server")),(0,i.kt)("p",null,"The full list of environment variables is available on the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mssfoobar/ar2-web/wiki/Environment-Variables"},(0,i.kt)("inlineCode",{parentName:"a"},"ar2-web wiki"))),(0,i.kt)("p",null,"If you need to add more variables to the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file, remember to update the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mssfoobar/ar2-web/wiki/"},(0,i.kt)("inlineCode",{parentName:"a"},"wiki"))," and the\n",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file's ",(0,i.kt)("inlineCode",{parentName:"p"},"environment")," property to document the newly required variable(s)."),(0,i.kt)("p",null,"Since Vite loads additional ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," files based on the NODE_ENV (e.g. when NODE_ENV=development, it will load ",(0,i.kt)("inlineCode",{parentName:"p"},".env.development"),"),\nyou can load and override variables using a ",(0,i.kt)("inlineCode",{parentName:"p"},".env.[mode]")," file."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," will run node with ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV=development"),".\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/guide/env-and-mode.html#modes"},"Vite's official documentation"),".")),(0,i.kt)("h3",{id:"setting-your-npm-configuration-to-use-the-tokens"},"Setting your npm configuration to use the tokens"),(0,i.kt)("p",null,"For local development, we recommend that you set the access tokens by running the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm set")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm set //npm.fontawesome.com/:_authToken=<YOUR_FONTAWESOME_ACCESS_TOKEN>\nnpm set //npm.pkg.github.com/:_authToken=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>\n")),(0,i.kt)("p",null,"If you are running via Docker, you will need to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"FONTAWESOME_ACCESS_TOKEN")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_ACCESS_TOKEN")," env vars instead."),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Windows PowerShell",label:"Windows (PowerShell)",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$Env:FONTAWESOME_ACCESS_TOKEN=<YOUR_FONTAWESOME_ACCESS_TOKEN>\n$Env:GITHUB_ACCESS_TOKEN=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>\n"))),(0,i.kt)(r.Z,{value:"Windows CMD",label:"Windows (cmd)",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"set FONTAWESOME_ACCESS_TOKEN=<YOUR_FONTAWESOME_ACCESS_TOKEN>\nset GITHUB_ACCESS_TOKEN=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>\n"))),(0,i.kt)(r.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export FONTAWESOME_ACCESS_TOKEN=<YOUR_FONTAWESOME_ACCESS_TOKEN>\nexport GITHUB_ACCESS_TOKEN=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>\n")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mssfoobar/ar2-web/wiki/Sensitive-Tokens"},(0,i.kt)("inlineCode",{parentName:"a"},"ar2-web wiki"))," to retrieve the access token.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"PORT")," is only used in production (when running ",(0,i.kt)("inlineCode",{parentName:"p"},"node ./build/index.js"),")."),(0,i.kt)("p",{parentName:"admonition"},"To run with a different port during development, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--port")," flag:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run preview --port 3001\n"))),(0,i.kt)("h2",{id:"quality-of-life---vs-code"},"Quality of Life - VS Code"),(0,i.kt)("h3",{id:"format-on-save"},"Format On Save"),(0,i.kt)("p",null,"We highly recommend you enable ",(0,i.kt)("inlineCode",{parentName:"p"},"Format On Save"),". You can press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + P")," and type ",(0,i.kt)("inlineCode",{parentName:"p"},"Open User Settings")," to\nnavigate to the user settings page, then type ",(0,i.kt)("inlineCode",{parentName:"p"},"format on save")," and the relevant setting will show up:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5701052/183503355-8ab5908f-6251-4749-b94c-33da297b0d84.png",alt:"image"})),(0,i.kt)("h3",{id:"recommended-extensions"},"Recommended\xb9 Extensions"),(0,i.kt)("p",null,"\xb9 More of a requirement really..."),(0,i.kt)("p",null,"These are some extremely helpful extensions for Visual Studio Code and are integral to the development experience."),(0,i.kt)("p",null,"Install the Official Extensions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode"},"Svelte for VS Code"),(0,i.kt)("br",{parentName:"li"}),"The Svelte extension provides code colouring and IntelliSense for Svelte, which itself is similar to jsx/tsx."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"},"Tailwind CSS IntelliSense"),(0,i.kt)("br",{parentName:"li"}),"The Tailwind CSS IntelliSense extension provides IntelliSense for Tailwind CSS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright"},"Playwright Test for VSCode"),(0,i.kt)("br",{parentName:"li"}),"The Playwright Test extension allows you to debug Playwright Tests, record new tests, tune selectors, run\nindividual tests, and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"Prettier - Code formatter"),"\nPrettier handles formatting - our files should all be automatically formatted the same way - in the future, we\nmight integrate this into CI/CD."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"VS Code ESLint extension"),(0,i.kt)("br",{parentName:"li"}),"The ESLint extension will provide ESLint information as you code - when linting is enforced in the CI, you will\nhave to adhere to the standards before your code is merged - this extension will help with that."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker"},"Docker"),(0,i.kt)("br",{parentName:"li"}),"The Docker extension provides Docker functionality in VS Code, including and especially IntelliSense for\nDockerfiles."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"},"GitLens"),(0,i.kt)("br",{parentName:"li"}),'The GitLens extension provides enhanced Git functionality in VS Code, including showing who committed which lines\nof code (no more comments saying "//ADDED BY SO-AND-SO").')),(0,i.kt)("h3",{id:"tailwind-intellisense-hinters"},"Tailwind IntelliSense Hinters"),(0,i.kt)("p",null,"You can get IntelliSense for Tailwind CSS classes in VS Code with some extra configuration:"),(0,i.kt)("p",null,"//TODO Insert Screen2Gif instructions"),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"/* @tw */")," comments to indicate that the following line of code is a Tailwind CSS class. To enable that\nconfiguration, add the following line to your VS Code settings. After which, adding /",(0,i.kt)("em",{parentName:"p"}," @tw "),"/ above variables you\ndeclare will have Tailwind IntelliSense."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"tailwindCSS.experimental.classRegex": [\n    "/\\\\*\\\\s*@tw\\\\s*\\\\*/[^\\"]+\\"([^\\"]*)\\"",\n    "/\\\\*\\\\s*@tw\\\\s*\\\\*/[^\']+\'([^\']*)\'",\n]\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can modify the regex to fit your own needs, but we recommend standardizing it so it works for all of us.")),(0,i.kt)("h3",{id:"tailwind-intellisense-on-custom-attributes"},"Tailwind IntelliSense on Custom Attributes"),(0,i.kt)("p",null,"You should also configure the Tailwind VS Code extension's ",(0,i.kt)("inlineCode",{parentName:"p"},"Class Attributes"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5701052/183502683-68957638-d54f-4da1-b60d-151c694ae83c.png",alt:"image"})),(0,i.kt)("p",null,"Customizing this setting will allow custom component props to have Tailwind IntelliSense."),(0,i.kt)("h2",{id:"other-modules"},"Other Modules"),(0,i.kt)("p",null,"Complete configuration of all the modules is beyond the scope of this document. To configure the list of other modules,\nrefer to their official documentation below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SvelteKit")," - ",(0,i.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/configuration"},"https://kit.svelte.dev/docs/configuration"),(0,i.kt)("br",{parentName:"p"}),"\n","SvelteKit can be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"svelte.config.js")," file in the root folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SvelteKit Adapters")," - ",(0,i.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/docs/adapters"},"https://kit.svelte.dev/docs/adapters"),(0,i.kt)("br",{parentName:"p"}),"\n","We use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@sveltejs/adapter-node")," adapter to create a simple node server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Vite")," - ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/config/"},"https://vitejs.dev/config/"),(0,i.kt)("br",{parentName:"p"}),"\n","Vite can be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"vite.config.js")," folder. Note that this used to be forwarded from the SvelteKit\nconfiguration. The Svelte maintainers have since changed this since the upgrade to ",(0,i.kt)("inlineCode",{parentName:"p"},"Vite 3.0.0"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Vitest")," - ",(0,i.kt)("a",{parentName:"p",href:"https://vitest.dev/config/"},"https://vitest.dev/config/"),(0,i.kt)("br",{parentName:"p"}),"\n","Vitest uses Vite's configuration, but you may override it by providing a ",(0,i.kt)("inlineCode",{parentName:"p"},"vitest.config.js")," file in the root\nfolder and passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--config vitest.config.test")," when running ",(0,i.kt)("inlineCode",{parentName:"p"},"vitest"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Playwright")," - ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/test-configuration"},"https://playwright.dev/docs/test-configuration"),(0,i.kt)("br",{parentName:"p"}),"\n","Playwright can be configured, in the ",(0,i.kt)("inlineCode",{parentName:"p"},"playwright.config.ts")," file.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GraphQL Code Generator")," - ",(0,i.kt)("a",{parentName:"p",href:"https://www.graphql-code-generator.com/docs/config-reference/codegen-config"},"https://www.graphql-code-generator.com/docs/config-reference/codegen-config"),(0,i.kt)("br",{parentName:"p"}),"\n","We use ",(0,i.kt)("inlineCode",{parentName:"p"},"GraphQL Code Generator")," to generate the types from our GraphQL Schema. The configuration is in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"codegen.yml")," file. Our default configuration is to expect your ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.graphql")," file in the root folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," - ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/docs/latest/user-guide/configuring/rules"},"https://eslint.org/docs/latest/user-guide/configuring/rules"),"\nEslint is to help identify potential problems with our code and (along with our code formatter) help enforce our\ncoding standards.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"TypeScript")," - ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"),"\nTypeScript can be configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file in the root folder.\nGlobal types can be found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/global.d.ts")," folder.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Postcss")," - ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/postcss/postcss#usage"},"https://github.com/postcss/postcss#usage"),(0,i.kt)("br",{parentName:"p"}),"\n","Postcss is a peer dependency for Tailwind CSS. We currently do not configure it but it is necessary.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"npmrc")," - ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v8/configuring-npm/npmrc"},"https://docs.npmjs.com/cli/v8/configuring-npm/npmrc"),(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},".npmrc")," file is used to configure the npm registries that we need such as GitHub Packages and FontAwesome."))))}c.isMDXComponent=!0}}]);
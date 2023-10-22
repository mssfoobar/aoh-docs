"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[8053],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(86010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),o=n(67294),a=n(86010),l=n(51048),i=n(33609),s=n(1943),u=n(72957);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){const{lazy:t,block:n,defaultValue:l,values:c,groupId:m,className:b}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[w,N]=(0,o.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==w&&(C(t),N(r),null!=m&&y(m,String(r)))},T=e=>{let t=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},b)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:T,onClick:P},l,{className:(0,a.Z)("tabs__item",p,l?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,o.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return o.createElement(c,(0,r.Z)({key:String(t)},e))}},32090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),o=(n(67294),n(3905)),a=n(34259),l=n(18679);const i={sidebar_position:4},s="Deployment",u={unversionedId:"development/web/guides/deployment",id:"development/web/guides/deployment",title:"Deployment",description:"Production Preview",source:"@site/docs/development/web/guides/deployment.mdx",sourceDirName:"development/web/guides",slug:"/development/web/guides/deployment",permalink:"/aoh-docs/docs/development/web/guides/deployment",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/development/web/guides/deployment.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"development",previous:{title:"BDD Testing",permalink:"/aoh-docs/docs/development/web/guides/testing/BDD-Testing"},next:{title:"Publishing",permalink:"/aoh-docs/docs/development/web/guides/publishing"}},d={},p=[{value:"Production Preview",id:"production-preview",level:2},{value:"Deployment",id:"deployment-1",level:2},{value:"Adding Environment Variables",id:"adding-environment-variables",level:2},{value:"Update the Wiki",id:"update-the-wiki",level:3},{value:"Configure Docker Compose files",id:"configure-docker-compose-files",level:3},{value:"Configure Dockerfile",id:"configure-dockerfile",level:3},{value:"Configuring the CI/CD",id:"configuring-the-cicd",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deployment"},"Deployment"),(0,o.kt)("h2",{id:"production-preview"},"Production Preview"),(0,o.kt)("p",null,"Before preparing a build for production, ensure that you've conducted the appropriate tests."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Build",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n"))),(0,o.kt)("li",{parentName:"ol"},"Run Preview (use production build files)",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run preview\n")))),(0,o.kt)("h2",{id:"deployment-1"},"Deployment"),(0,o.kt)("p",null,"This project is deployed automatically via GitHub Actions and ArgoCD on every main branch commit."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows")," yaml files to find out more about the workflows."),(0,o.kt)("p",null,"Our pipeline for continuous deployment is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A pull request is submitted to merge a feature branch in."),(0,o.kt)("li",{parentName:"ol"},"Unit tests are run on the pull request"),(0,o.kt)("li",{parentName:"ol"},"When the pull request is merged, the integration tests are run and the files are deployed to the staging server.")),(0,o.kt)("p",null,"If you wish to deploy it yourself, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run build")," to generate the build folder and copy the build output to your\nservers. Then, run ",(0,o.kt)("inlineCode",{parentName:"p"},"node ./build/index.js")," to start the web server."),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Windows PowerShell",label:"Windows (PowerShell)",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n$env:PORT=<desired_port>; node ./build/index.js\n"))),(0,o.kt)(l.Z,{value:"Windows CMD",label:"Windows (cmd)",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nset PORT=<desired_port> && node ./build/index.js\n"))),(0,o.kt)(l.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nPORT=<desired_port> node ./build/index.js\n")))),(0,o.kt)("h2",{id:"adding-environment-variables"},"Adding Environment Variables"),(0,o.kt)("p",null,"When you create new environment variables to use in the project, you will need to ensure that the CI/CD pipeline is\nconfigured with the right values for those variables and the container is able to read it upon deployment."),(0,o.kt)("p",null,"There are 4 places to look out for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mssfoobar/ar2-web/wiki/Environment-Variables"},"Wiki - Environment Variables")),(0,o.kt)("li",{parentName:"ul"},"docker-compose.yaml"),(0,o.kt)("li",{parentName:"ul"},"Dockerfile"),(0,o.kt)("li",{parentName:"ul"},".github\\workflows\\web.yml")),(0,o.kt)("h3",{id:"update-the-wiki"},"Update the Wiki"),(0,o.kt)("p",null,"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mssfoobar/ar2-web/wiki/Environment-Variables"},"wiki")," and place your new environment\nvariable defaults there for others to copy. Also, provide a short description on what it's for (either in comments in\nthe sample ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file contents , or in the wiki itself)."),(0,o.kt)("h3",{id:"configure-docker-compose-files"},"Configure Docker Compose files"),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file, you will need add additional args for the Dockerfile to take in"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=docker-compose.yml",title:"docker-compose.yml"},"services:\n    web:\n        build:\n            args:\n                - PUBLIC_FOO_BAR=${PUBLIC_FOO_BAR}\n")),(0,o.kt)("h3",{id:"configure-dockerfile"},"Configure Dockerfile"),(0,o.kt)("p",null,"You will need to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," accordingly to take in your new environment variable/s."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile",metastring:"title=Dockerfile",title:"Dockerfile"},"...\nARG PUBLIC_FOO_BAR\nENV PUBLIC_FOO_BAR=${PUBLIC_FOO_BAR}\n...\n")),(0,o.kt)("h3",{id:"configuring-the-cicd"},"Configuring the CI/CD"),(0,o.kt)("p",null,"The CI needs to build your container image before being able to deploy it - depending on whether your environment\nvariable is statically replaced upon building, or dynamically introduced based on the environment, you'll have to\nconfigure those environments accordingly."),(0,o.kt)("p",null,"If your environment variable value is a secret, and you need it during build time, create a\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository"},"secret in GitHub"),"."),(0,o.kt)("p",null,"Also, make sure your GitHub workflow file has it available the container build step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=.github\\workflows\\web.yml",title:".github\\workflows\\web.yml"},'\n---\nexport PUBLIC_MAPBOX_KEY=${{ secrets.PUBLIC_MAPBOX_KEY }}\n...\n\njobs\n  build:\n    steps:\n      - name: build container image\n        run: |\n          ...\n          export PUBLIC_FOO_BAR="Hello There!"\n          ...\n          docker-compose -f docker-compose.yml build web\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[9157],{67390:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var i=s(74848),o=s(28453);const t={sidebar_position:30},a="Publishing Web Components",r={id:"development/publishing",title:"Publishing Web Components",description:"Manual Publishing",source:"@site/docs/20_development/30-publishing.md",sourceDirName:"20_development",slug:"/development/publishing",permalink:"/aoh-docs/docs/development/publishing",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/20_development/30-publishing.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"development",previous:{title:"\ud83d\udda5\ufe0f Services",permalink:"/aoh-docs/docs/development/services"},next:{title:"\ud83c\udf10 DevOps (onboarding new service)",permalink:"/aoh-docs/docs/category/-devops-onboarding-new-service"}},c={},l=[{value:"Manual Publishing",id:"manual-publishing",level:2},{value:"1. Test and use the packages before publishing:",id:"1-test-and-use-the-packages-before-publishing",level:3},{value:"2. Publishing the ready packages:",id:"2-publishing-the-ready-packages",level:3},{value:"Automatic Publishing",id:"automatic-publishing",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"publishing-web-components",children:"Publishing Web Components"}),"\n",(0,i.jsx)(n.h2,{id:"manual-publishing",children:"Manual Publishing"}),"\n",(0,i.jsx)(n.h3,{id:"1-test-and-use-the-packages-before-publishing",children:"1. Test and use the packages before publishing:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["In order to import components from ",(0,i.jsx)(n.code,{children:"@mssfoobar/aoh-web"})," for testing, use ",(0,i.jsx)(n.code,{children:"npm link"}),"\n(see ",(0,i.jsx)(n.a,{href:"https://docs.npmjs.com/cli/v8/commands/npm-link",children:"https://docs.npmjs.com/cli/v8/commands/npm-link"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["This allows us to use components from ",(0,i.jsx)(n.code,{children:"@mssfoobar/aoh-web"})," without adding it as a dependency in ",(0,i.jsx)(n.code,{children:"package.json"}),".\nWe can then test against our local copy before actually publishing them to the npm registry."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd package\nnpm link\n\ncd ../\nnpm link @mssfoobar/aoh-web\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-publishing-the-ready-packages",children:"2. Publishing the ready packages:"}),"\n",(0,i.jsxs)(n.p,{children:["The Svelte components here are published to ",(0,i.jsx)(n.code,{children:"@mssfoobar/aoh-web"}),", to package and publish the components,\nperform the following steps:"]}),"\n",(0,i.jsxs)(n.p,{children:["First, run ",(0,i.jsx)(n.code,{children:"svelte-kit package"})," (experimental as of 10th May 2022) to create a package of the files in lib/src.\nThis may be configured via the ",(0,i.jsx)(n.code,{children:"svelte.config.js"})," file.",(0,i.jsx)(n.br,{}),"\n","See: ",(0,i.jsx)(n.a,{href:"https://kit.svelte.dev/docs/configuration#package",children:"https://kit.svelte.dev/docs/configuration#package"})," & ",(0,i.jsx)(n.a,{href:"https://kit.svelte.dev/docs/packaging",children:"https://kit.svelte.dev/docs/packaging"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run package\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Then, publish the packaged file. This repository defaults to publishing to our private registry, configured in the ",(0,i.jsx)(n.code,{children:".npmrc"})," file for installing npm modules, and the ",(0,i.jsx)(n.code,{children:"package.json"})," file (",(0,i.jsx)(n.code,{children:"publishConfig"}),") for publishing ",(0,i.jsx)(n.code,{children:"@mssfoobar/aoh-web"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd package\nnpm publish\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You will be required to log in to access the private repository, obtain an account from the repository maintainer."})}),"\n",(0,i.jsx)(n.h2,{id:"automatic-publishing",children:"Automatic Publishing"}),"\n",(0,i.jsx)(n.p,{children:"GitHub Actions has been configured to automatically publish the package when a new release is created."}),"\n",(0,i.jsxs)(n.p,{children:["For more information on how to publish releases on GitHub, visit\n",(0,i.jsx)(n.a,{href:"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository",children:"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var i=s(96540);const o={},t=i.createContext(o);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[9356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="Version Control System",s={unversionedId:"source_management/branching_strategy",id:"source_management/branching_strategy",title:"Version Control System",description:"Introduction",source:"@site/docs/source_management/branching_strategy.md",sourceDirName:"source_management",slug:"/source_management/branching_strategy",permalink:"/ar2-docs/docs/source_management/branching_strategy",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/source_management/branching_strategy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"source_management",next:{title:"Conventional Commits",permalink:"/ar2-docs/docs/source_management/conventional_commits"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"How this ties to Developer Operations",id:"how-this-ties-to-developer-operations",level:2},{value:"What Git Ops?",id:"what-git-ops",level:2},{value:"Branching Strategy",id:"branching-strategy",level:2}],u={toc:l};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"version-control-system"},"Version Control System"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This section attempts to explain how we manage our source code, why we do it in this way, and why you have to do it\nthis way too. We use Git as our VCS (version control system) because it is highly mature, widely supported, has well\nestablished best-practices, and has many tools that support it."),(0,a.kt)("h2",{id:"how-this-ties-to-developer-operations"},"How this ties to Developer Operations"),(0,a.kt)("p",null,"Since we want our application to be cloud native, we have to have a good degree of infrastructure automation. We'll need\nto be able to easily scale up or down services by declaratively describing their deployment configurations, and we'll\nwant to have preview servers automatically deployed when we check in our code to faciliate faster development cycles."),(0,a.kt)("p",null,"To achieve these things, our applications are containerized and orchestrated by Kubernetes, and the container images are\nbuilt automatically by our CI. These images are created whenever a commit occurs on a Git branch that tied to an\nenvironment (e.g. a merge request is successfully merged from a feature branch to the 'development' branch, the code\nfrom the development branch in that commit would then be built by the CI into an image, and this image will be uploaded\nto a container registry, and ultimately deployed by Kubernetes)."),(0,a.kt)("p",null,"In order for these systems to be run effectively, we adopt the principals of\n",(0,a.kt)("a",{parentName:"p",href:"https://about.gitlab.com/topics/gitops/"},"GitOps"),", this is necessary for us to develop and deploy our system in a\nreliable, structured way."),(0,a.kt)("h2",{id:"what-git-ops"},"What Git Ops?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GitOps")," is a practice that makes Git the single source of truth for our infrastructure definitions. This means that we\nwill be able to make changes to the system's deployment 'simply' by looking at the state of the Git repository. By\ntying the configuration of the system infrastructure and deployment to source code, we also gain the ability to version\nthe infrastructure since they can be tied to individual Git commits."),(0,a.kt)("p",null,"Read more about GitOps ",(0,a.kt)("a",{parentName:"p",href:"https://about.gitlab.com/topics/gitops/"},"here"),"."),(0,a.kt)("h2",{id:"branching-strategy"},"Branching Strategy"),(0,a.kt)("p",null,"We are essentially using a form of Git Flow as our branching strategy. This is required because our deployment\nenvironments are tied to branches in your Git repository. These branches that get deployed can be seen as\n'deployment' branches."),(0,a.kt)("p",null,"For each environment that you want to have automatically deployed, you need a branch. When developers need\nto make changes to that branch, they check out a new branch using that as the base. They then make changes to their\n'personal' feature branch, and when they are done, they make a pull request to merge it back to the base branch, which\nthen gets triggered to be deployed."),(0,a.kt)("p",null,"For example, someone found a typo in the web ",(0,a.kt)("inlineCode",{parentName:"p"},"development")," branch (this branch deploys to a preview server for us to\nview changes made to the web server) - for a change to be made, a developer must use the ",(0,a.kt)("inlineCode",{parentName:"p"},"development")," branch as the base\nand checkout a new branch with a new name (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"fix/ambulance-chart-typo"),"). They then make the changes to fix this\ntypographical error, and open a pull request to contribute this change back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"development")," branch. This pull\nrequest must be reviewed by another developer to ensure it adheres to the projects guidelines and as a primary check to\nensure it does not sabotage the system (code formatting and linting should be done automatically by pre-commit hooks)."),(0,a.kt)("p",null,"Git Flow is a popular and well documented branching strategy, read more about it\n",(0,a.kt)("a",{parentName:"p",href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"},"here"),"."))}h.isMDXComponent=!0}}]);
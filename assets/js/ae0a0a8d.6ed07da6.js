"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[6666],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>m});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return n?t.createElement(m,i(i({ref:r},l),{},{components:n})):t.createElement(m,i({ref:r},l))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15909:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(87462),a=(n(67294),n(3905));const o={sidebar_position:20},i="Update Project Infra Repository",s={unversionedId:"development/devops_onboard/update-project-infra",id:"development/devops_onboard/update-project-infra",title:"Update Project Infra Repository",description:"Update the project infrastructure to reference the service infra repository that was created in earlier step.",source:"@site/docs/20_development/51_devops_onboard/20-update-project-infra.md",sourceDirName:"20_development/51_devops_onboard",slug:"/development/devops_onboard/update-project-infra",permalink:"/aoh-docs/docs/development/devops_onboard/update-project-infra",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/20_development/51_devops_onboard/20-update-project-infra.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"development",previous:{title:"Setup Service Infra Repository",permalink:"/aoh-docs/docs/development/devops_onboard/setup-service-infra"},next:{title:"\ud83c\udf10 DevOps (maintenance)",permalink:"/aoh-docs/docs/category/-devops-maintenance"}},p={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"For service infra using Helm Charts (non-reference) (TBD)",id:"for-service-infra-using-helm-charts-non-reference-tbd",level:2},{value:"For service infra using Helm Charts (referencing external service-infra repository)",id:"for-service-infra-using-helm-charts-referencing-external-service-infra-repository",level:2},{value:"For service infra using manifest files (TBD)",id:"for-service-infra-using-manifest-files-tbd",level:2}],l={toc:c};function u(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-project-infra-repository"},"Update Project Infra Repository"),(0,a.kt)("p",null,"Update the project infrastructure to reference the service infra repository that was created in earlier step."),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("p",null,"Set the following environment variables"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# name of new service\n# e.g. ucs / rnr / wfe\nexport MYSERVICE=\n\n# URL to service infra repository\n# e.g. https://github.com/mssfoobar/ar2-ucs-infra\nexport MYSERVICE_REPO_URL=\n\n# path to required manifest from within service infra repository\n# e.g. dev/helm\nexport MYSERVICE_REPO_PATH=\n\n# full path to project's IaC repository root\n# e.g. full path to where the project IaC is checked out\nexport PRJ_IAC_ROOT=\n\n# project namespace\n# e.g. soh / hoc / aoc\nexport PRJ_NAMESPACE=\n")),(0,a.kt)("h2",{id:"for-service-infra-using-helm-charts-non-reference-tbd"},"For service infra using Helm Charts (non-reference) (TBD)"),(0,a.kt)("p",null,"Create folder ",(0,a.kt)("inlineCode",{parentName:"p"},"${PRJ_IAC_ROOT}/helm/${MYSERVICE}"),"\n// TODO"),(0,a.kt)("h2",{id:"for-service-infra-using-helm-charts-referencing-external-service-infra-repository"},"For service infra using Helm Charts (referencing external service-infra repository)"),(0,a.kt)("p",null,"Create manifest for ",(0,a.kt)("em",{parentName:"p"},"myservice"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat < EOF > ${PRJ_IAC_ROOT}/apps-children/${MYSERVICE}.yaml\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: aoh-${MYSERVICE}-dev\n  namespace: argocd\n  finalizers:\n  - resources-finalizer.argocd.argoproj.io\nspec:\n  destination:\n    namespace: ${PRJ_NAMESPACE}\n    name: in-cluster\n  project: appbundle-project-aoh-dev\n  source:\n    path: ${MYSERVICE_REPO_PATH}\n    repoURL: ${MYSERVICE_REPO_URL}\n    targetRevision: main\n  syncPolicy:\n    syncOptions:\n    - CreateNamespace=true\n    automated:\n      prune: true\n      allowEmpty: true\n      selfHeal: true\nEOF\n")),(0,a.kt)("h2",{id:"for-service-infra-using-manifest-files-tbd"},"For service infra using manifest files (TBD)"),(0,a.kt)("p",null,"Create manifest for ",(0,a.kt)("em",{parentName:"p"},"myservice"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat < EOF > ${PRJ_IAC_ROOT}/apps-children/${MYSERVICE}.yaml\napiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: aoh-${MYSERVICE}-dev\n  namespace: argocd\n  finalizers:\n  - resources-finalizer.argocd.argoproj.io\nspec:\n  destination:\n    namespace: ${PRJ_NAMESPACE}\n    name: in-cluster\n  project: appbundle-project-aoh-dev\n  source:\n    path: ${MYSERVICE_REPO_PATH}\n    repoURL: ${MYSERVICE_REPO_URL}\n    targetRevision: main\n  syncPolicy:\n    syncOptions:\n    - CreateNamespace=true\n    automated:\n      prune: true\n      allowEmpty: true\n      selfHeal: true\nEOF\n")))}u.isMDXComponent=!0}}]);
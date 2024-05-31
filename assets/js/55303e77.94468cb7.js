"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7690],{88091:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=s(74848),i=s(28453);const t={sidebar_position:1},o="\ud83d\ude80 Quickstart",c={id:"rnr/guides/quickstart",title:"\ud83d\ude80 Quickstart",description:"Sub-modules",source:"@site/docs/80_rnr/guides/quickstart.md",sourceDirName:"80_rnr/guides",slug:"/rnr/guides/quickstart",permalink:"/aoh-docs/docs/rnr/guides/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/80_rnr/guides/quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"rnr",previous:{title:"\ud83d\udcda Guides",permalink:"/aoh-docs/docs/category/-guides-2"},next:{title:"\u2699\ufe0f Configuration",permalink:"/aoh-docs/docs/rnr/guides/configuration"}},l={},a=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Required Services",id:"required-services",level:3},{value:"Running Locally",id:"running-locally",level:2},{value:"Running with Docker",id:"running-with-docker",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-quickstart",children:"\ud83d\ude80 Quickstart"}),"\n",(0,r.jsx)(n.p,{children:"Sub-modules"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"REPLAYMGR (http service to manage replay session)"}),"\n",(0,r.jsx)(n.li,{children:"DBOP  (db operator to initialize & cleanup replay db)"}),"\n",(0,r.jsx)(n.li,{children:"MSGOP (msg operator to playback replay by reading nats jetstream messages)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,r.jsx)(n.h3,{id:"required-services",children:"Required Services"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"postgres (live db)"}),"\n",(0,r.jsx)(n.li,{children:"postgres (replay db)"}),"\n",(0,r.jsx)(n.li,{children:"nats (jetstream enable)"}),"\n",(0,r.jsx)(n.li,{children:"minio (store db snapshot)"}),"\n",(0,r.jsx)(n.li,{children:"Debezium (nats connector)"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Debezium should be configured to capture change data event on postgres (live db).\nRefer to this ",(0,r.jsx)(n.a,{href:"https://natsbyexample.com/examples/integrations/debezium/cli",children:"document"})," for how to configure debezium with nats."]})}),"\n",(0,r.jsx)(n.h2,{id:"running-locally",children:"Running Locally"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Clone the repository:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/mssfoobar/ar2-rnr.git\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Each module have their own ",(0,r.jsx)(n.code,{children:"{ service_name }.env.sample"})," file.\nCopy and remove the ",(0,r.jsx)(n.code,{children:".sample"})," in repository root directory. Provide the necessary variables inside the ",(0,r.jsx)(n.code,{children:".env"})," file."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Start services by go command"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go run cmd/replay-manager/main.go -c ./.replay-manager.env\ngo run cmd/db-operator/main.go -c ./.db-operator.env\ngo run cmd/msg-operator/main.go -c ./.msg-operator.env\n"})}),"\n",(0,r.jsx)(n.h2,{id:"running-with-docker",children:"Running with Docker"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/ubuntu/",children:"Docker"})]}),"\n",(0,r.jsxs)(n.li,{children:["Install ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/compose/install/linux/",children:"Docker-Compose"})]}),"\n",(0,r.jsxs)(n.li,{children:["Docker ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/linux-postinstall/",children:"Post-installation"})," setup"]}),"\n",(0,r.jsx)(n.li,{children:"Clone"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/mssfoobar/ar2-rnr.git\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsx)(n.li,{children:"Start docker-compose"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"6",children:["\n",(0,r.jsx)(n.li,{children:"Cleanup Docker"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose down\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["By this point, record & replay services will be up and running.\nYou can verify the service liveness by hitting at the liveness & readiness endpoint.\nEven though service is alive you won't be able to start the playback session yet since there is no db snapshot to start the playback session.\nRefer to this infra ",(0,r.jsx)(n.a,{href:"https://github.com/mssfoobar/ar2-infra/tree/main/argocd/dev2/manifests/ar2-rnr",children:"repo"})," on how we set up periodic backup & clean cronjob."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(96540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
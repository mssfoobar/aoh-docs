"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7469],{38068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(74848),o=n(28453);const r={},i="Chat",a={id:"modules/web/modules/ucs/chat",title:"Chat",description:"Summary",source:"@site/docs/40_modules/20_web/30_modules/ucs/2-chat.md",sourceDirName:"40_modules/20_web/30_modules/ucs",slug:"/modules/web/modules/ucs/chat",permalink:"/aoh-docs/docs/modules/web/modules/ucs/chat",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/40_modules/20_web/30_modules/ucs/2-chat.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"web",previous:{title:"Quick Start",permalink:"/aoh-docs/docs/modules/web/modules/ucs/quickstart"},next:{title:"Room",permalink:"/aoh-docs/docs/modules/web/modules/ucs/room"}},c={},d=[{value:"Summary",id:"summary",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Parameter",id:"parameter",level:3},{value:"Usage",id:"usage",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"chat",children:"Chat"}),"\n",(0,s.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(t.p,{children:"The chat is the web component that allows the user to communicate with one or more other users. Inorder to join the room, the user must pass a set of prepared data."}),"\n",(0,s.jsx)(t.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,s.jsx)(t.p,{children:"The chat component requires a GraphQL client to be defined and initialized prior to the usage of the Chat component. This is due to the UCS using Graphql's query and subscription feature to retrieve messages at runtime. Without a functional GraphQL client with the appropriate schemas configured. The UCS cannot work."}),"\n",(0,s.jsx)(t.h3,{id:"parameter",children:"Parameter"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"uid"})," (string): Unique identifier for the the user."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"username"})," (string): The that is shown to other participants when you send messages or interact within the chat"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"room"})," (",(0,s.jsx)(t.a,{href:"room",children:"room"}),"): The properties of the room."]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["The value of ",(0,s.jsx)(t.em,{children:"room"})," should be obtained from the database used by the UCS module and not randomly filled by the user."]})}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-svelte",children:'<script lang="ts">\n  import Chat from "$lib/core/modules/ucs/components/Messaging/Chat/index.svelte";\n\n  let uid: string = "user1"\n  let displayName: string = "User One"\n  let room: Room  = { name: "My Room"\n                                id: "b62dd622-ffbf-4f7b-bec1-fb18bc2f1e67",\n                                status: "Started",\n                                allowed_user_id: ["f47ac10b-58cc-4372-a567-0e02b2c3d479", "3e16eaa5-3a7e-4ae0-92bf-32fe2b0e19f1"],\n                                is_chat1to1: true,\n                                archived_user_id: [ \u02dd], }\n  let client: GQLClient = createGraphqlClient();\n<\/script>\n\n\x3c!-- Usage example --\x3e\n<Chat\n    uid={uid}\n    username={displayName}\n    room={room}\n/>\n'})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);
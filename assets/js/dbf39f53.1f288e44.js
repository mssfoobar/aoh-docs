"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[185],{71295:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var n=t(74848),i=t(28453);const r={sidebar_position:5},o="Nats",d={id:"ucs/guides/nats",title:"Nats",description:"We used nats subject-based messaging within UCS services.",source:"@site/docs/60_ucs/guides/nats.md",sourceDirName:"60_ucs/guides",slug:"/ucs/guides/nats",permalink:"/aoh-docs/docs/ucs/guides/nats",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/60_ucs/guides/nats.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"ucs",previous:{title:"\ud83c\udf0e Deployment",permalink:"/aoh-docs/docs/ucs/guides/deployment"}},a={},c=[];function u(s){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"nats",children:"Nats"}),"\n",(0,n.jsx)(e.p,{children:"We used nats subject-based messaging within UCS services."}),"\n",(0,n.jsx)(e.p,{children:"Below is the list of nats subject in use."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:'UPDATEROOM_TOPIC     string = "roomUpdates.{sid}"\nSTARTRECORDING_TOPIC string = "recordingStart"\nENDRECORDING_TOPIC   string = "recordingEnd.{sid}"\nSTARTPLAYBACK_TOPIC  string = "playbackStart"\nENDPLAYBACK_TOPIC    string = "playbackEnd.{sid}"\nDELETEPLAYBACK_TOPIC string = "playbackDelete.{sid}"\nPAUSEPLAYBACK_TOPIC  string = "playbackPause.{sid}"\nPLAYBACK_TOPIC       string = "playback.{sid}"\nINSERT_CALLUSERID_TOPIC string = "insertCallUserId.{sid}"\nDELETE_CALLUSERID_TOPIC string = "deleteCallUserId.{sid}"\nINSERT_CHATUSERID_TOPIC string = "insertChatUserId.{sid}"\nDELETE_CHATUSERID_TOPIC string = "deleteChatUserId.{sid}"\n'})})]})}function l(s={}){const{wrapper:e}={...(0,i.R)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(u,{...s})}):u(s)}},28453:(s,e,t)=>{t.d(e,{R:()=>o,x:()=>d});var n=t(96540);const i={},r=n.createContext(i);function o(s){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function d(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:o(s.components),n.createElement(r.Provider,{value:e},s.children)}}}]);
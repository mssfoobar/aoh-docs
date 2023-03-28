"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[5322],{43780:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>k,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>f,toc:()=>b});var a=t(87462),s=(t(67294),t(3905)),m=t(70603),r=t(48147),n=t(61045),i=t(86776),l=t(69128),d=t(83329),p=(t(3186),t(18679));const c={id:"close-room",title:"Close room",description:"API to close room session before session end_time",sidebar_label:"Close room",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms/{roomid}"],description:"API to close room session before session end_time",parameters:[{name:"roomid",in:"path",description:"ID of room to close",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{remarks:{type:"array",items:{type:"string"}}}},example:{remarks:"Ending roomId 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6' in 15 minutes"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"delete",path:"/rooms/{roomid}",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"Close room",description:{content:"API to close room session before session end_time",type:"text/plain"},url:{path:["rooms",":roomid"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to close",type:"text/plain"},type:"any",value:"",key:"roomid"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs/comms/Room Management API/room-management",custom_edit_url:null},u=void 0,f={unversionedId:"comms/Room Management API/close-room",id:"comms/Room Management API/close-room",title:"Close room",description:"API to close room session before session end_time",source:"@site/docs/comms/Room Management API/close-room.api.mdx",sourceDirName:"comms/Room Management API",slug:"/comms/Room Management API/close-room",permalink:"/ar2-docs/docs/comms/Room Management API/close-room",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"close-room",title:"Close room",description:"API to close room session before session end_time",sidebar_label:"Close room",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms/{roomid}"],description:"API to close room session before session end_time",parameters:[{name:"roomid",in:"path",description:"ID of room to close",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{remarks:{type:"array",items:{type:"string"}}}},example:{remarks:"Ending roomId 'f81d4fae-7dec-11d0-a765-00a0c91e6bf6' in 15 minutes"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"delete",path:"/rooms/{roomid}",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"Close room",description:{content:"API to close room session before session end_time",type:"text/plain"},url:{path:["rooms",":roomid"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to close",type:"text/plain"},type:"any",value:"",key:"roomid"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs/comms/Room Management API/room-management",custom_edit_url:null},sidebar:"comms",previous:{title:"Introduction",permalink:"/ar2-docs/docs/comms/Room Management API/room-management"},next:{title:"Create playback room",permalink:"/ar2-docs/docs/comms/Room Management API/create-playback-room"}},k={},b=[{value:"Close room",id:"close-room",level:2}],y={toc:b};function v(e){let{components:o,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},y,t,{components:o,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"close-room"},"Close room"),(0,s.kt)("p",null,"API to close room session before session end_time"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to close",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(m.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"remarks",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "remarks": [\n    "string"\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "remarks": "Ending roomId \'f81d4fae-7dec-11d0-a765-00a0c91e6bf6\' in 15 minutes"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null)),(0,s.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}v.isMDXComponent=!0}}]);
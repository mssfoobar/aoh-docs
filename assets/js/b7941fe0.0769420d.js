"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[677],{87739:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>y});var a=o(87462),s=(o(67294),o(3905)),r=o(70603),n=o(48147),i=(o(61045),o(86776)),m=o(69128),l=o(83329),d=(o(3186),o(18679));const p={id:"list-rooms",title:"List rooms",description:"API to query list of booked rooms",sidebar_label:"List rooms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to query list of booked rooms",responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"array",items:{type:"string"}}}}},sent_at:{type:"string"}}},example:{data:[{id:["f81d4fae-7dec-11d0-a765-00a0c91e6bf6","f81d4fae-7dec-11d0-ffee-00a0c91e6bf6"]}],sent_at:"2023-06-15T18:42:11Z"}}}},500:{description:"Internal Server Error"}},method:"get",path:"/v1/rooms",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"List rooms",description:{content:"API to query list of booked rooms",type:"text/plain"},url:{path:["v1","rooms"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/ucs/Room Management API/room-management",custom_edit_url:null},c=void 0,u={unversionedId:"ucs/Room Management API/list-rooms",id:"ucs/Room Management API/list-rooms",title:"List rooms",description:"API to query list of booked rooms",source:"@site/docs/ucs/Room Management API/list-rooms.api.mdx",sourceDirName:"ucs/Room Management API",slug:"/ucs/Room Management API/list-rooms",permalink:"/aoh-docs/docs/ucs/Room Management API/list-rooms",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-rooms",title:"List rooms",description:"API to query list of booked rooms",sidebar_label:"List rooms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to query list of booked rooms",responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"array",items:{type:"string"}}}}},sent_at:{type:"string"}}},example:{data:[{id:["f81d4fae-7dec-11d0-a765-00a0c91e6bf6","f81d4fae-7dec-11d0-ffee-00a0c91e6bf6"]}],sent_at:"2023-06-15T18:42:11Z"}}}},500:{description:"Internal Server Error"}},method:"get",path:"/v1/rooms",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"List rooms",description:{content:"API to query list of booked rooms",type:"text/plain"},url:{path:["v1","rooms"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/ucs/Room Management API/room-management",custom_edit_url:null},sidebar:"ucs",previous:{title:"List chat messages",permalink:"/aoh-docs/docs/ucs/Room Management API/list-chat-messages"},next:{title:"Pause playback",permalink:"/aoh-docs/docs/ucs/Room Management API/pause-playback"}},f={},y=[{value:"List rooms",id:"list-rooms",level:2}],b={toc:y};function k(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,a.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"list-rooms"},"List rooms"),(0,s.kt)("p",null,"API to query list of booked rooms"),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(l.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "data": [\n    {\n      "id": [\n        "string"\n      ]\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "data": [\n    {\n      "id": [\n        "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",\n        "f81d4fae-7dec-11d0-ffee-00a0c91e6bf6"\n      ]\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[2222],{55465:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var a=o(87462),s=(o(67294),o(3905)),i=o(70603),r=o(48147),n=(o(61045),o(86776)),l=o(69128),m=o(83329),p=(o(3186),o(18679));const d={id:"list-rooms",title:"List rooms",description:"API to query list of booked rooms",sidebar_label:"List rooms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to query list of booked rooms",responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"array",items:{type:"string"}}}}},sent_at:{type:"string"}}},example:{data:[{id:["f81d4fae-7dec-11d0-a765-00a0c91e6bf6","f81d4fae-7dec-11d0-ffee-00a0c91e6bf6"]}],sent_at:"2023-06-15T18:42:11Z"}}}},500:{description:"Internal Server Error"}},method:"get",path:"/v2/rooms",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"v2",description:"## What's new\n- create chat 1-1 room\n- delete chat 1-1 room\n"},postman:{name:"List rooms",description:{content:"API to query list of booked rooms",type:"text/plain"},url:{path:["v2","rooms"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},c=void 0,u={unversionedId:"openapi/ucs/list-rooms",id:"openapi/ucs/list-rooms",title:"List rooms",description:"API to query list of booked rooms",source:"@site/docs/openapi/ucs/list-rooms.api.mdx",sourceDirName:"openapi/ucs",slug:"/openapi/ucs/list-rooms",permalink:"/aoh-docs/docs/openapi/ucs/list-rooms",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-rooms",title:"List rooms",description:"API to query list of booked rooms",sidebar_label:"List rooms",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to query list of booked rooms",responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"array",items:{type:"string"}}}}},sent_at:{type:"string"}}},example:{data:[{id:["f81d4fae-7dec-11d0-a765-00a0c91e6bf6","f81d4fae-7dec-11d0-ffee-00a0c91e6bf6"]}],sent_at:"2023-06-15T18:42:11Z"}}}},500:{description:"Internal Server Error"}},method:"get",path:"/v2/rooms",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"v2",description:"## What's new\n- create chat 1-1 room\n- delete chat 1-1 room\n"},postman:{name:"List rooms",description:{content:"API to query list of booked rooms",type:"text/plain"},url:{path:["v2","rooms"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},sidebar:"ucsAPI-v2",previous:{title:"Create room",permalink:"/aoh-docs/docs/openapi/ucs/create-room"},next:{title:"Get room info",permalink:"/aoh-docs/docs/openapi/ucs/get-room-info"}},y={},f=[{value:"List rooms",id:"list-rooms",level:2}],k={toc:f},h="wrapper";function b(e){let{components:t,...o}=e;return(0,s.kt)(h,(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"list-rooms"},"List rooms"),(0,s.kt)("p",null,"API to query list of booked rooms"),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,s.kt)(l.Z,{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "data": [\n    {\n      "id": [\n        "string"\n      ]\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(n.Z,{responseExample:'{\n  "data": [\n    {\n      "id": [\n        "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",\n        "f81d4fae-7dec-11d0-ffee-00a0c91e6bf6"\n      ]\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);
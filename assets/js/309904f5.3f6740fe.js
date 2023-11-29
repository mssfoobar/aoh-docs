"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[6098],{20632:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>h,toc:()=>b});var i=a(87462),o=(a(67294),a(3905)),n=a(70603),s=a(48147),r=a(61045),d=a(86776),l=a(69128),m=a(83329),p=(a(3186),a(18679));const u={id:"file-upload",title:"File upload",description:"API to upload file using presigned Url",sidebar_label:"File upload",hide_title:!0,hide_table_of_contents:!0,api:{tags:["attachment"],description:"API to upload file using presigned Url",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{url:{type:"string"},file_path:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{url:"http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/19649298-b4da-4f2f-9e24-c7ebdc20a766?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T022801Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=d4150066c8b810349867bb5e03c384ee530f932a2e1e53da12e9bd12356b7b9c",file_path:"/attachment/19649298-b4da-4f2f-9e24-c7ebdc20a766"}],sent_at:"2023-06-15T18:42:11Z"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/v1/rooms/{roomid}/users/{userid}/upload",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"File upload",description:{content:"API to upload file using presigned Url",type:"text/plain"},url:{path:["v1","rooms",":roomid","users",":userid","upload"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"},{disabled:!1,description:{content:"(Required) ID of user inside the room",type:"text/plain"},type:"any",value:"",key:"userid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/ucs/Room Management API/room-management",custom_edit_url:null},c=void 0,h={unversionedId:"ucs/Room Management API/file-upload",id:"ucs/Room Management API/file-upload",title:"File upload",description:"API to upload file using presigned Url",source:"@site/docs/60_ucs/Room Management API/file-upload.api.mdx",sourceDirName:"60_ucs/Room Management API",slug:"/ucs/Room Management API/file-upload",permalink:"/aoh-docs/docs/ucs/Room Management API/file-upload",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"file-upload",title:"File upload",description:"API to upload file using presigned Url",sidebar_label:"File upload",hide_title:!0,hide_table_of_contents:!0,api:{tags:["attachment"],description:"API to upload file using presigned Url",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{url:{type:"string"},file_path:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{url:"http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/19649298-b4da-4f2f-9e24-c7ebdc20a766?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T022801Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=d4150066c8b810349867bb5e03c384ee530f932a2e1e53da12e9bd12356b7b9c",file_path:"/attachment/19649298-b4da-4f2f-9e24-c7ebdc20a766"}],sent_at:"2023-06-15T18:42:11Z"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/v1/rooms/{roomid}/users/{userid}/upload",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"File upload",description:{content:"API to upload file using presigned Url",type:"text/plain"},url:{path:["v1","rooms",":roomid","users",":userid","upload"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"},{disabled:!1,description:{content:"(Required) ID of user inside the room",type:"text/plain"},type:"any",value:"",key:"userid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/ucs/Room Management API/room-management",custom_edit_url:null},sidebar:"ucs",previous:{title:"File download",permalink:"/aoh-docs/docs/ucs/Room Management API/file-download"},next:{title:"Get chat info by room ID",permalink:"/aoh-docs/docs/ucs/Room Management API/get-chat-info-by-room-id"}},f={},b=[{value:"File upload",id:"file-upload",level:2}],g={toc:b};function y(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"file-upload"},"File upload"),(0,o.kt)("p",null,"API to upload file using presigned Url"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},mdxType:"ParamsItem"}),(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(n.Z,{mdxType:"ApiTabs"},(0,o.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null),(0,o.kt)("div",null,(0,o.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"data"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"file_path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,o.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(d.Z,{responseExample:'{\n  "data": [\n    {\n      "url": "string",\n      "file_path": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,o.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(d.Z,{responseExample:'{\n  "data": [\n    {\n      "url": "http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/19649298-b4da-4f2f-9e24-c7ebdc20a766?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T022801Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=d4150066c8b810349867bb5e03c384ee530f932a2e1e53da12e9bd12356b7b9c",\n      "file_path": "/attachment/19649298-b4da-4f2f-9e24-c7ebdc20a766"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Bad Request")),(0,o.kt)("div",null)),(0,o.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Internal Server Error")),(0,o.kt)("div",null)))))}y.isMDXComponent=!0}}]);
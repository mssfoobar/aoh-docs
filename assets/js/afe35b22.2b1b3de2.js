"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7890],{9836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>f,toc:()=>y});var i=a(87462),o=(a(67294),a(3905)),n=a(70603),d=a(48147),r=a(61045),s=a(86776),l=a(69128),m=a(83329),p=(a(3186),a(18679));const c={id:"file-download",title:"File download",description:"API to download file using presigned Url",sidebar_label:"File download",hide_title:!0,hide_table_of_contents:!0,api:{tags:["attachment"],description:"API to download file using presigned Url",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739},{name:"fileid",in:"path",description:"ID of file in minio storage",required:!0,schema:{type:"string"},example:"19649298-b4da-4f2f-9e24-c7ebdc20a766"}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{url:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{url:"http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/cecd68ec-c6fa-4436-94ca-94fa59ecb927?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T025839Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=ca3b44d787cf6345263958d8c7af4139f04b3407efeb4ca340799f2e6e69aa01"}],sent_at:"2023-06-15T18:42:11Z"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/v2/rooms/{roomid}/users/{userid}/files/{fileid}/download",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"v2",description:"## What's new\n- create chat 1-1 room\n- delete chat 1-1 room\n"},postman:{name:"File download",description:{content:"API to download file using presigned Url",type:"text/plain"},url:{path:["v2","rooms",":roomid","users",":userid","files",":fileid","download"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"},{disabled:!1,description:{content:"(Required) ID of user inside the room",type:"text/plain"},type:"any",value:"",key:"userid"},{disabled:!1,description:{content:"(Required) ID of file in minio storage",type:"text/plain"},type:"any",value:"",key:"fileid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},u=void 0,f={unversionedId:"openapi/ucs/file-download",id:"openapi/ucs/file-download",title:"File download",description:"API to download file using presigned Url",source:"@site/docs/openapi/ucs/file-download.api.mdx",sourceDirName:"openapi/ucs",slug:"/openapi/ucs/file-download",permalink:"/aoh-docs/docs/openapi/ucs/file-download",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"file-download",title:"File download",description:"API to download file using presigned Url",sidebar_label:"File download",hide_title:!0,hide_table_of_contents:!0,api:{tags:["attachment"],description:"API to download file using presigned Url",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739},{name:"fileid",in:"path",description:"ID of file in minio storage",required:!0,schema:{type:"string"},example:"19649298-b4da-4f2f-9e24-c7ebdc20a766"}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{url:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{url:"http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/cecd68ec-c6fa-4436-94ca-94fa59ecb927?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T025839Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=ca3b44d787cf6345263958d8c7af4139f04b3407efeb4ca340799f2e6e69aa01"}],sent_at:"2023-06-15T18:42:11Z"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/v2/rooms/{roomid}/users/{userid}/files/{fileid}/download",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"v2",description:"## What's new\n- create chat 1-1 room\n- delete chat 1-1 room\n"},postman:{name:"File download",description:{content:"API to download file using presigned Url",type:"text/plain"},url:{path:["v2","rooms",":roomid","users",":userid","files",":fileid","download"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"},{disabled:!1,description:{content:"(Required) ID of user inside the room",type:"text/plain"},type:"any",value:"",key:"userid"},{disabled:!1,description:{content:"(Required) ID of file in minio storage",type:"text/plain"},type:"any",value:"",key:"fileid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},sidebar:"ucsAPI-v2",previous:{title:"File upload",permalink:"/aoh-docs/docs/openapi/ucs/file-upload"},next:{title:"Create chat 1-1 room",permalink:"/aoh-docs/docs/openapi/ucs/create-chat-1-1-room"}},h={},y=[{value:"File download",id:"file-download",level:2}],g={toc:y},b="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"file-download"},"File download"),(0,o.kt)("p",null,"API to download file using presigned Url"),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},mdxType:"ParamsItem"}),(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739},mdxType:"ParamsItem"}),(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"fileid",in:"path",description:"ID of file in minio storage",required:!0,schema:{type:"string"},example:"19649298-b4da-4f2f-9e24-c7ebdc20a766"},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(n.Z,{mdxType:"ApiTabs"},(0,o.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"OK")),(0,o.kt)("div",null,(0,o.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"data"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)(l.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,o.kt)(l.Z,{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,o.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(s.Z,{responseExample:'{\n  "data": [\n    {\n      "url": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,o.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,o.kt)(s.Z,{responseExample:'{\n  "data": [\n    {\n      "url": "http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/cecd68ec-c6fa-4436-94ca-94fa59ecb927?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T025839Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=ca3b44d787cf6345263958d8c7af4139f04b3407efeb4ca340799f2e6e69aa01"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Bad Request")),(0,o.kt)("div",null)),(0,o.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Internal Server Error")),(0,o.kt)("div",null)))))}k.isMDXComponent=!0}}]);
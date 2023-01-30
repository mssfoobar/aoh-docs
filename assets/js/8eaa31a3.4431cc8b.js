"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[5964],{72742:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>g,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>f,toc:()=>h});var o=t(87462),i=(t(67294),t(3905)),n=t(26389),d=t(94891),r=t(75190),l=t(47507),s=t(24310),m=t(63303),p=(t(75035),t(85162));const c={id:"file-download",title:"File download",description:"API to download file using presigned Url",sidebar_label:"File download",hide_title:!0,hide_table_of_contents:!0,api:{tags:["attachment"],description:"API to download file using presigned Url",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739},{name:"fileid",in:"path",description:"ID of file in minio storage",required:!0,schema:{type:"string"},example:"19649298-b4da-4f2f-9e24-c7ebdc20a766"}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{url:{type:"string"}}},example:{url:"http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/cecd68ec-c6fa-4436-94ca-94fa59ecb927?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T025839Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=ca3b44d787cf6345263958d8c7af4139f04b3407efeb4ca340799f2e6e69aa01"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/rooms/{roomid}/users/{userid}/files/{fileid}/download",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"File download",description:{content:"API to download file using presigned Url",type:"text/plain"},url:{path:["rooms",":roomid","users",":userid","files",":fileid","download"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"},{disabled:!1,description:{content:"(Required) ID of user inside the room",type:"text/plain"},type:"any",value:"",key:"userid"},{disabled:!1,description:{content:"(Required) ID of file in minio storage",type:"text/plain"},type:"any",value:"",key:"fileid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/comms/Room Management API/room-management",custom_edit_url:null},u=void 0,f={unversionedId:"comms/Room Management API/file-download",id:"comms/Room Management API/file-download",title:"File download",description:"API to download file using presigned Url",source:"@site/docs/comms/Room Management API/file-download.api.mdx",sourceDirName:"comms/Room Management API",slug:"/comms/Room Management API/file-download",permalink:"/ar2-docs/docs/comms/Room Management API/file-download",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"file-download",title:"File download",description:"API to download file using presigned Url",sidebar_label:"File download",hide_title:!0,hide_table_of_contents:!0,api:{tags:["attachment"],description:"API to download file using presigned Url",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739},{name:"fileid",in:"path",description:"ID of file in minio storage",required:!0,schema:{type:"string"},example:"19649298-b4da-4f2f-9e24-c7ebdc20a766"}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{url:{type:"string"}}},example:{url:"http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/cecd68ec-c6fa-4436-94ca-94fa59ecb927?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T025839Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=ca3b44d787cf6345263958d8c7af4139f04b3407efeb4ca340799f2e6e69aa01"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/rooms/{roomid}/users/{userid}/files/{fileid}/download",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"File download",description:{content:"API to download file using presigned Url",type:"text/plain"},url:{path:["rooms",":roomid","users",":userid","files",":fileid","download"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"},{disabled:!1,description:{content:"(Required) ID of user inside the room",type:"text/plain"},type:"any",value:"",key:"userid"},{disabled:!1,description:{content:"(Required) ID of file in minio storage",type:"text/plain"},type:"any",value:"",key:"fileid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/comms/Room Management API/room-management",custom_edit_url:null},sidebar:"comms",previous:{title:"Delete announcement",permalink:"/ar2-docs/docs/comms/Room Management API/delete-announcement"},next:{title:"File upload",permalink:"/ar2-docs/docs/comms/Room Management API/file-upload"}},g={},h=[{value:"File download",id:"file-download",level:2}],y={toc:h};function b(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"file-download"},"File download"),(0,i.kt)("p",null,"API to download file using presigned Url"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"fileid",in:"path",description:"ID of file in minio storage",required:!0,schema:{type:"string"},example:"19649298-b4da-4f2f-9e24-c7ebdc20a766"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null,(0,i.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(s.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "url": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "url": "http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/cecd68ec-c6fa-4436-94ca-94fa59ecb927?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T025839Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=ca3b44d787cf6345263958d8c7af4139f04b3407efeb4ca340799f2e6e69aa01"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)),(0,i.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)))))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[6091],{82119:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>h,toc:()=>y});var s=a(87462),i=(a(67294),a(3905)),m=a(70603),n=a(48147),o=a(61045),r=a(86776),l=a(69128),d=a(83329),p=(a(3186),a(18679));const c={id:"list-chat-messages",title:"List chat messages",description:"API to query all chat messages and chat attachments from a particular room session",sidebar_label:"List chat messages",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to query all chat messages and chat attachments from a particular room session",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{msg:{type:"array",items:{type:"object",properties:{uid:{type:"string"},name:{type:"string"},text:{type:"string"},file:{type:"object",properties:{name:{type:"string"},size:{type:"string"},file_path:{type:"string"}}},mime_type:{type:"string"},timestamp:{type:"string"}}}}}}},sent_at:{type:"string"}}},example:{data:[{msg:[{uid:"10206739",name:"Shawn Ho",text:"Hello World",mime_type:"message",timestamp:"2022-09-09T00:30:59.000Z"},{uid:"10206739",name:"Shawn Ho",file:{name:"HelloWorld.txt",size:11,file_path:"d00fca2b-8280-4be8-80be-32326d9dc19e"},mime_type:"whatFrontEndSends",timestamp:"2022-09-09T00:31:59.000Z"},{uid:"10206739",name:"Shawn Ho",text:"Hello World Again",mime_type:"message",timestamp:"2022-09-09T00:32:59.000Z"}]}],sent_at:"2023-06-15T18:42:11Z"}}}},500:{description:"Internal Server Error"}},method:"get",path:"/v1/rooms/{roomid}/chats",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"List chat messages",description:{content:"API to query all chat messages and chat attachments from a particular room session",type:"text/plain"},url:{path:["v1","rooms",":roomid","chats"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/ucs/Room Management API/room-management",custom_edit_url:null},u=void 0,h={unversionedId:"ucs/Room Management API/list-chat-messages",id:"ucs/Room Management API/list-chat-messages",title:"List chat messages",description:"API to query all chat messages and chat attachments from a particular room session",source:"@site/docs/ucs/Room Management API/list-chat-messages.api.mdx",sourceDirName:"ucs/Room Management API",slug:"/ucs/Room Management API/list-chat-messages",permalink:"/aoh-docs/docs/ucs/Room Management API/list-chat-messages",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-chat-messages",title:"List chat messages",description:"API to query all chat messages and chat attachments from a particular room session",sidebar_label:"List chat messages",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to query all chat messages and chat attachments from a particular room session",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{msg:{type:"array",items:{type:"object",properties:{uid:{type:"string"},name:{type:"string"},text:{type:"string"},file:{type:"object",properties:{name:{type:"string"},size:{type:"string"},file_path:{type:"string"}}},mime_type:{type:"string"},timestamp:{type:"string"}}}}}}},sent_at:{type:"string"}}},example:{data:[{msg:[{uid:"10206739",name:"Shawn Ho",text:"Hello World",mime_type:"message",timestamp:"2022-09-09T00:30:59.000Z"},{uid:"10206739",name:"Shawn Ho",file:{name:"HelloWorld.txt",size:11,file_path:"d00fca2b-8280-4be8-80be-32326d9dc19e"},mime_type:"whatFrontEndSends",timestamp:"2022-09-09T00:31:59.000Z"},{uid:"10206739",name:"Shawn Ho",text:"Hello World Again",mime_type:"message",timestamp:"2022-09-09T00:32:59.000Z"}]}],sent_at:"2023-06-15T18:42:11Z"}}}},500:{description:"Internal Server Error"}},method:"get",path:"/v1/rooms/{roomid}/chats",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"List chat messages",description:{content:"API to query all chat messages and chat attachments from a particular room session",type:"text/plain"},url:{path:["v1","rooms",":roomid","chats"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/ucs/Room Management API/room-management",custom_edit_url:null},sidebar:"ucs",previous:{title:"List chat messages in a range",permalink:"/aoh-docs/docs/ucs/Room Management API/list-chat-messages-in-a-range"},next:{title:"List rooms",permalink:"/aoh-docs/docs/ucs/Room Management API/list-rooms"}},g={},y=[{value:"List chat messages",id:"list-chat-messages",level:2}],f={toc:y};function v(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"list-chat-messages"},"List chat messages"),(0,i.kt)("p",null,"API to query all chat messages and chat attachments from a particular room session"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(m.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"msg"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"file"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"size",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"file_path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"mime_type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(l.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "data": [\n    {\n      "msg": [\n        {\n          "uid": "string",\n          "name": "string",\n          "text": "string",\n          "file": {\n            "name": "string",\n            "size": "string",\n            "file_path": "string"\n          },\n          "mime_type": "string",\n          "timestamp": "string"\n        }\n      ]\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "data": [\n    {\n      "msg": [\n        {\n          "uid": "10206739",\n          "name": "Shawn Ho",\n          "text": "Hello World",\n          "mime_type": "message",\n          "timestamp": "2022-09-09T00:30:59.000Z"\n        },\n        {\n          "uid": "10206739",\n          "name": "Shawn Ho",\n          "file": {\n            "name": "HelloWorld.txt",\n            "size": 11,\n            "file_path": "d00fca2b-8280-4be8-80be-32326d9dc19e"\n          },\n          "mime_type": "whatFrontEndSends",\n          "timestamp": "2022-09-09T00:31:59.000Z"\n        },\n        {\n          "uid": "10206739",\n          "name": "Shawn Ho",\n          "text": "Hello World Again",\n          "mime_type": "message",\n          "timestamp": "2022-09-09T00:32:59.000Z"\n        }\n      ]\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)))))}v.isMDXComponent=!0}}]);
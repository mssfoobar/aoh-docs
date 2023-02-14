"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[7497],{46924:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>x,frontMatter:()=>p,metadata:()=>u,toc:()=>y});var s=a(87462),i=(a(67294),a(3905)),n=a(70603),m=a(48147),r=a(61045),o=a(86776),d=a(69128),l=a(83329),c=(a(3186),a(18679));const p={id:"list-chat-messages-in-a-range",title:"List chat messages in a range",description:"API to query range of chat messages and chat attachments from a particular room session",sidebar_label:"List chat messages in a range",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to query range of chat messages and chat attachments from a particular room session",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},{name:"fromindex",in:"path",description:"start of range index, negative value is treated as 0, first chat message is index 0",required:!0,schema:{type:"integer"},example:0},{name:"toindex",in:"path",description:"end of range index, inclusive, value greater than (chat count - 1 ) is treated as (chat count - 1), first chat message is index 0",required:!0,schema:{type:"integer"},example:"1"}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{msg:{type:"array",items:{type:"object",properties:{uid:{type:"string"},name:{type:"string"},text:{type:"string"},file:{type:"object",properties:{name:{type:"string"},size:{type:"string"},filePath:{type:"string"}}},mimeType:{type:"string"},timestamp:{type:"string"}}}}}},example:{msg:[{uid:"10206739",name:"Shawn Ho",text:"Hello World",mimeType:"message",timestamp:"2022-09-09T00:30:59.000Z"},{uid:"10206739",name:"Shawn Ho",file:{name:"HelloWorld.txt",size:11,filePath:"/attachment/d00fca2b-8280-4be8-80be-32326d9dc19e"},mimeType:"whatFrontEndSends",timestamp:"2022-09-09T00:31:59.000Z"},{uid:"10206739",name:"Shawn Ho",text:"Hello World Again",mimeType:"message",timestamp:"2022-09-09T00:32:59.000Z"}]}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/rooms/{roomid}/chats/{fromindex}/{toindex}",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"List chat messages in a range",description:{content:"API to query range of chat messages and chat attachments from a particular room session",type:"text/plain"},url:{path:["rooms",":roomid","chats",":fromindex",":toindex"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"},{disabled:!1,description:{content:"(Required) start of range index, negative value is treated as 0, first chat message is index 0",type:"text/plain"},type:"any",value:"",key:"fromindex"},{disabled:!1,description:{content:"(Required) end of range index, inclusive, value greater than (chat count - 1 ) is treated as (chat count - 1), first chat message is index 0",type:"text/plain"},type:"any",value:"",key:"toindex"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/comms/Room Management API/room-management",custom_edit_url:null},g=void 0,u={unversionedId:"comms/Room Management API/list-chat-messages-in-a-range",id:"comms/Room Management API/list-chat-messages-in-a-range",title:"List chat messages in a range",description:"API to query range of chat messages and chat attachments from a particular room session",source:"@site/docs/comms/Room Management API/list-chat-messages-in-a-range.api.mdx",sourceDirName:"comms/Room Management API",slug:"/comms/Room Management API/list-chat-messages-in-a-range",permalink:"/ar2-docs/docs/comms/Room Management API/list-chat-messages-in-a-range",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-chat-messages-in-a-range",title:"List chat messages in a range",description:"API to query range of chat messages and chat attachments from a particular room session",sidebar_label:"List chat messages in a range",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to query range of chat messages and chat attachments from a particular room session",parameters:[{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},{name:"fromindex",in:"path",description:"start of range index, negative value is treated as 0, first chat message is index 0",required:!0,schema:{type:"integer"},example:0},{name:"toindex",in:"path",description:"end of range index, inclusive, value greater than (chat count - 1 ) is treated as (chat count - 1), first chat message is index 0",required:!0,schema:{type:"integer"},example:"1"}],responses:{200:{content:{"application/json":{schema:{type:"object",properties:{msg:{type:"array",items:{type:"object",properties:{uid:{type:"string"},name:{type:"string"},text:{type:"string"},file:{type:"object",properties:{name:{type:"string"},size:{type:"string"},filePath:{type:"string"}}},mimeType:{type:"string"},timestamp:{type:"string"}}}}}},example:{msg:[{uid:"10206739",name:"Shawn Ho",text:"Hello World",mimeType:"message",timestamp:"2022-09-09T00:30:59.000Z"},{uid:"10206739",name:"Shawn Ho",file:{name:"HelloWorld.txt",size:11,filePath:"/attachment/d00fca2b-8280-4be8-80be-32326d9dc19e"},mimeType:"whatFrontEndSends",timestamp:"2022-09-09T00:31:59.000Z"},{uid:"10206739",name:"Shawn Ho",text:"Hello World Again",mimeType:"message",timestamp:"2022-09-09T00:32:59.000Z"}]}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"get",path:"/rooms/{roomid}/chats/{fromindex}/{toindex}",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"List chat messages in a range",description:{content:"API to query range of chat messages and chat attachments from a particular room session",type:"text/plain"},url:{path:["rooms",":roomid","chats",":fromindex",":toindex"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to return",type:"text/plain"},type:"any",value:"",key:"roomid"},{disabled:!1,description:{content:"(Required) start of range index, negative value is treated as 0, first chat message is index 0",type:"text/plain"},type:"any",value:"",key:"fromindex"},{disabled:!1,description:{content:"(Required) end of range index, inclusive, value greater than (chat count - 1 ) is treated as (chat count - 1), first chat message is index 0",type:"text/plain"},type:"any",value:"",key:"toindex"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/comms/Room Management API/room-management",custom_edit_url:null},sidebar:"comms",previous:{title:"Kick user",permalink:"/ar2-docs/docs/comms/Room Management API/kick-user"},next:{title:"List chat messages",permalink:"/ar2-docs/docs/comms/Room Management API/list-chat-messages"}},h={},y=[{value:"List chat messages in a range",id:"list-chat-messages-in-a-range",level:2}],f={toc:y};function x(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"list-chat-messages-in-a-range"},"List chat messages in a range"),(0,i.kt)("p",null,"API to query range of chat messages and chat attachments from a particular room session"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"fromindex",in:"path",description:"start of range index, negative value is treated as 0, first chat message is index 0",required:!0,schema:{type:"integer"},example:0},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"toindex",in:"path",description:"end of range index, inclusive, value greater than (chat count - 1 ) is treated as (chat count - 1), first chat message is index 0",required:!0,schema:{type:"integer"},example:"1"},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null,(0,i.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"msg"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"file"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"size",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"filePath",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!1,name:"mimeType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "msg": [\n    {\n      "uid": "string",\n      "name": "string",\n      "text": "string",\n      "file": {\n        "name": "string",\n        "size": "string",\n        "filePath": "string"\n      },\n      "mimeType": "string",\n      "timestamp": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "msg": [\n    {\n      "uid": "10206739",\n      "name": "Shawn Ho",\n      "text": "Hello World",\n      "mimeType": "message",\n      "timestamp": "2022-09-09T00:30:59.000Z"\n    },\n    {\n      "uid": "10206739",\n      "name": "Shawn Ho",\n      "file": {\n        "name": "HelloWorld.txt",\n        "size": 11,\n        "filePath": "/attachment/d00fca2b-8280-4be8-80be-32326d9dc19e"\n      },\n      "mimeType": "whatFrontEndSends",\n      "timestamp": "2022-09-09T00:31:59.000Z"\n    },\n    {\n      "uid": "10206739",\n      "name": "Shawn Ho",\n      "text": "Hello World Again",\n      "mimeType": "message",\n      "timestamp": "2022-09-09T00:32:59.000Z"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)))))}x.isMDXComponent=!0}}]);
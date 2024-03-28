"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7520],{9414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>y,toc:()=>v});var n=a(87462),i=(a(67294),a(3905)),s=a(70603),d=a(48147),r=a(61045),o=a(86776),m=a(69128),l=a(83329),c=(a(3186),a(18679));const p={id:"delete-announcement",title:"Delete announcement",description:"API to delete announcements by id",sidebar_label:"Delete announcement",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to delete announcements by id",parameters:[{name:"roomid",in:"path",description:"ID of room to delete announcement",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{requestor:{description:"Mandatory field of user_id calling the API",type:"string"},id:{description:"ID of announcement to be deleleted. default is delete all",type:"array",items:{type:"string"}}},required:["requestor"],example:{requestor:"10206739",id:["c50ae8ba-0459-4769-8765-611339d7d408","e2bb248e-b129-4db3-aa9f-d78ddf22ffa2"]}}}}},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},name:{type:"string"},status:{type:"string"},start_time:{type:"string"},end_time:{type:"string"},announcements:{type:"array",items:{type:"object",properties:{id:{type:"string"},message:{type:"string"},relative_from:{type:"string"},relative_time_in_seconds:{type:"integer"},user_id:{type:"array",items:{type:"string"}}}}},allowed_user_id:{type:"array",items:{type:"string"}},users:{type:"array",items:{type:"string"}},created_at:{type:"string"},created_by:{type:"string"},updated_at:{type:"string"},updated_by:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{id:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6",name:"renamed-room-ABC",status:"Booked",start_time:"2022-09-07T13:00:00Z",end_time:"2022-09-07T14:00:00Z",announcements:[{id:"00cc2c62-d3a1-4d15-b1d0-abe3f51d1695",message:"This is a test message",relative_from:"start",relative_time_in_seconds:900,user_id:["10206739","10208888"]},{id:"a74e007c-b820-4384-80fb-b524ac338705",message:"This is a new test message",relative_from:"end",relative_time_in_seconds:900,user_id:[]}],allowed_user_id:["10206739","10208888"],users:[],created_at:"2022-09-06T13:00:00Z",created_by:"10206739",updated_at:"2022-09-06T22:00:00Z",updated_by:"10206739"}],sent_at:"2023-06-15T18:42:11Z"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"delete",path:"/v2/rooms/{roomid}/announcements",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{requestor:"10206739",id:["c50ae8ba-0459-4769-8765-611339d7d408","e2bb248e-b129-4db3-aa9f-d78ddf22ffa2"]},info:{title:"Room Management",version:"v2",description:"## What's new\n- create chat 1-1 room\n- delete chat 1-1 room\n"},postman:{name:"Delete announcement",description:{content:"API to delete announcements by id",type:"text/plain"},url:{path:["v2","rooms",":roomid","announcements"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to delete announcement",type:"text/plain"},type:"any",value:"",key:"roomid"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"DELETE",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"delete api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},u=void 0,y={unversionedId:"openapi/ucs/delete-announcement",id:"openapi/ucs/delete-announcement",title:"Delete announcement",description:"API to delete announcements by id",source:"@site/docs/openapi/ucs/delete-announcement.api.mdx",sourceDirName:"openapi/ucs",slug:"/openapi/ucs/delete-announcement",permalink:"/aoh-docs/docs/openapi/ucs/delete-announcement",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-announcement",title:"Delete announcement",description:"API to delete announcements by id",sidebar_label:"Delete announcement",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to delete announcements by id",parameters:[{name:"roomid",in:"path",description:"ID of room to delete announcement",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{requestor:{description:"Mandatory field of user_id calling the API",type:"string"},id:{description:"ID of announcement to be deleleted. default is delete all",type:"array",items:{type:"string"}}},required:["requestor"],example:{requestor:"10206739",id:["c50ae8ba-0459-4769-8765-611339d7d408","e2bb248e-b129-4db3-aa9f-d78ddf22ffa2"]}}}}},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},name:{type:"string"},status:{type:"string"},start_time:{type:"string"},end_time:{type:"string"},announcements:{type:"array",items:{type:"object",properties:{id:{type:"string"},message:{type:"string"},relative_from:{type:"string"},relative_time_in_seconds:{type:"integer"},user_id:{type:"array",items:{type:"string"}}}}},allowed_user_id:{type:"array",items:{type:"string"}},users:{type:"array",items:{type:"string"}},created_at:{type:"string"},created_by:{type:"string"},updated_at:{type:"string"},updated_by:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{id:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6",name:"renamed-room-ABC",status:"Booked",start_time:"2022-09-07T13:00:00Z",end_time:"2022-09-07T14:00:00Z",announcements:[{id:"00cc2c62-d3a1-4d15-b1d0-abe3f51d1695",message:"This is a test message",relative_from:"start",relative_time_in_seconds:900,user_id:["10206739","10208888"]},{id:"a74e007c-b820-4384-80fb-b524ac338705",message:"This is a new test message",relative_from:"end",relative_time_in_seconds:900,user_id:[]}],allowed_user_id:["10206739","10208888"],users:[],created_at:"2022-09-06T13:00:00Z",created_by:"10206739",updated_at:"2022-09-06T22:00:00Z",updated_by:"10206739"}],sent_at:"2023-06-15T18:42:11Z"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"delete",path:"/v2/rooms/{roomid}/announcements",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{requestor:"10206739",id:["c50ae8ba-0459-4769-8765-611339d7d408","e2bb248e-b129-4db3-aa9f-d78ddf22ffa2"]},info:{title:"Room Management",version:"v2",description:"## What's new\n- create chat 1-1 room\n- delete chat 1-1 room\n"},postman:{name:"Delete announcement",description:{content:"API to delete announcements by id",type:"text/plain"},url:{path:["v2","rooms",":roomid","announcements"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of room to delete announcement",type:"text/plain"},type:"any",value:"",key:"roomid"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"DELETE",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"delete api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},sidebar:"ucsAPI-v2",previous:{title:"Update announcement",permalink:"/aoh-docs/docs/openapi/ucs/update-announcement"},next:{title:"Create playback room",permalink:"/aoh-docs/docs/openapi/ucs/create-playback-room"}},g={},v=[{value:"Delete announcement",id:"delete-announcement",level:2}],b={toc:v},_="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(_,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"delete-announcement"},"Delete announcement"),(0,i.kt)("p",null,"API to delete announcements by id"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to delete announcement",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"},mdxType:"ParamsItem"})))),(0,i.kt)(d.Z,{mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"requestor",required:!0,deprecated:void 0,schemaDescription:"Mandatory field of user_id calling the API",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"ID of announcement to be deleleted. default is delete all",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null),(0,i.kt)("div",null,(0,i.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"start_time",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"end_time",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"announcements"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"relative_from",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"relative_time_in_seconds",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"user_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!1,name:"allowed_user_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"users",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"created_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"created_by",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"updated_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"updated_by",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "name": "string",\n      "status": "string",\n      "start_time": "string",\n      "end_time": "string",\n      "announcements": [\n        {\n          "id": "string",\n          "message": "string",\n          "relative_from": "string",\n          "relative_time_in_seconds": 0,\n          "user_id": [\n            "string"\n          ]\n        }\n      ],\n      "allowed_user_id": [\n        "string"\n      ],\n      "users": [\n        "string"\n      ],\n      "created_at": "string",\n      "created_by": "string",\n      "updated_at": "string",\n      "updated_by": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",\n      "name": "renamed-room-ABC",\n      "status": "Booked",\n      "start_time": "2022-09-07T13:00:00Z",\n      "end_time": "2022-09-07T14:00:00Z",\n      "announcements": [\n        {\n          "id": "00cc2c62-d3a1-4d15-b1d0-abe3f51d1695",\n          "message": "This is a test message",\n          "relative_from": "start",\n          "relative_time_in_seconds": 900,\n          "user_id": [\n            "10206739",\n            "10208888"\n          ]\n        },\n        {\n          "id": "a74e007c-b820-4384-80fb-b524ac338705",\n          "message": "This is a new test message",\n          "relative_from": "end",\n          "relative_time_in_seconds": 900,\n          "user_id": []\n        }\n      ],\n      "allowed_user_id": [\n        "10206739",\n        "10208888"\n      ],\n      "users": [],\n      "created_at": "2022-09-06T13:00:00Z",\n      "created_by": "10206739",\n      "updated_at": "2022-09-06T22:00:00Z",\n      "updated_by": "10206739"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null)),(0,i.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null)))))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[1451],{84699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>c,default:()=>v,frontMatter:()=>p,metadata:()=>u,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),r=a(70603),n=a(48147),o=(a(61045),a(86776)),m=a(69128),d=a(83329),l=(a(3186),a(18679));const p={id:"create-room",title:"Create room",description:"API to book room, reply with webapp URL to join the room",sidebar_label:"Create room",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to book room, reply with webapp URL to join the room  \n- Poll periodically (configurable interval) for start_time, end_time and announcements time  \n- room session will be created at start_time  \n- to start room immediately, set start_time to past time  \n- to start room 15 minutes before actual 9am session, set start_time to 8:45am  \n- room session will be terminated at end_time  \n- announcements through chat messaging to selected or all participants",requestBody:{content:{"application/json":{schema:{type:"object",properties:{requestor:{description:"Mandatory field of user_id calling the API",type:"string"},name:{description:"Mandatory field of room name",type:"string"},start_time:{description:"Mandatory field in ISO8601 format",type:"string"},end_time:{description:"Mandatory field in ISO8601 format",type:"string"},announcements:{type:"array",items:{type:"object",properties:{id:{description:"Mandatory & Unique field",type:"string"},message:{description:"Mandatory field message field",type:"string"},relative_from:{description:"default is 'end'. accepts only NULL|'start'|'end'",type:"string"},relative_time_in_seconds:{description:"Mandatory field",type:"integer"},user_id:{description:"default is messsage to all",type:"array",items:{type:"string"}}},required:["id","message","relative_time_in_seconds"]}},allowed_user_id:{description:"default is everyone is permitted",type:"array",items:{type:"string"}}},required:["requestor","name","start_time","end_time"]},example:{requestor:"10206739",name:"test-room-ABC",start_time:"2022-09-07T13:00:00Z",end_time:"2022-09-07T14:00:00Z",announcements:[{id:"00cc2c62-d3a1-4d15-b1d0-abe3f51d1695",message:"This is a test message",relative_from:"start",relative_time_in_seconds:900,user_id:["10206739","10208888"]},{id:"c50ae8ba-0459-4769-8765-611339d7d408",message:"This is another test message",relative_time_in_seconds:600}],allowed_user_id:["10206739","10208888"]}}}},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{requestor:{type:"string"},name:{type:"string"},start_time:{type:"string"},end_time:{type:"string"},announcements:{type:"array",items:{type:"object",properties:{id:{type:"string"},message:{type:"string"},relative_from:{type:"string"},relative_time_in_seconds:{type:"integer"},user_id:{type:"array",items:{type:"string"}}}}},allowed_user_id:{type:"array",items:{type:"string"}}}}},sent_at:{type:"string"}}},example:{data:[{id:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6",name:"test-room-ABC",status:"Booked",start_time:"2022-09-07T13:00:00Z",end_time:"2022-09-07T14:00:00Z",announcements:[{id:"00cc2c62-d3a1-4d15-b1d0-abe3f51d1695",message:"This is a test message",relative_from:"start",relative_time_in_seconds:900,user_id:["10206739","10208888"]},{id:"c50ae8ba-0459-4769-8765-611339d7d408",message:"This is another test message",relative_from:"end",relative_time_in_seconds:600,user_id:[]}],allowed_user_id:[],users:[{user_id:"10206739",user_name:"Shawn Ho"},{user_id:"10208888",user_name:"Tan Ah Gao"}],created_at:"2022-09-06T13:00:00Z",created_by:"10206739",updated_at:"2022-09-06T13:00:00Z",updated_by:"10206739"}],sent_at:"2023-06-15T18:42:11Z"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"post",path:"/v2/rooms",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{requestor:"string",name:"string",start_time:"string",end_time:"string",announcements:[{id:"string",message:"string",relative_from:"string",relative_time_in_seconds:0,user_id:["string"]}],allowed_user_id:["string"]},info:{title:"Room Management",version:"v2",description:"## What's new\n- create chat 1-1 room\n- delete chat 1-1 room\n"},postman:{name:"Create room",description:{content:"API to book room, reply with webapp URL to join the room  \n- Poll periodically (configurable interval) for start_time, end_time and announcements time  \n- room session will be created at start_time  \n- to start room immediately, set start_time to past time  \n- to start room 15 minutes before actual 9am session, set start_time to 8:45am  \n- room session will be terminated at end_time  \n- announcements through chat messaging to selected or all participants",type:"text/plain"},url:{path:["v2","rooms"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},c=void 0,u={unversionedId:"openapi/ucs/create-room",id:"openapi/ucs/create-room",title:"Create room",description:"API to book room, reply with webapp URL to join the room",source:"@site/docs/openapi/ucs/create-room.api.mdx",sourceDirName:"openapi/ucs",slug:"/openapi/ucs/create-room",permalink:"/aoh-docs/docs/openapi/ucs/create-room",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-room",title:"Create room",description:"API to book room, reply with webapp URL to join the room",sidebar_label:"Create room",hide_title:!0,hide_table_of_contents:!0,api:{tags:["rooms"],description:"API to book room, reply with webapp URL to join the room  \n\\- Poll periodically (configurable interval) for start_time, end_time and announcements time  \n\\- room session will be created at start_time  \n\\- to start room immediately, set start_time to past time  \n\\- to start room 15 minutes before actual 9am session, set start_time to 8:45am  \n\\- room session will be terminated at end_time  \n\\- announcements through chat messaging to selected or all participants",requestBody:{content:{"application/json":{schema:{type:"object",properties:{requestor:{description:"Mandatory field of user_id calling the API",type:"string"},name:{description:"Mandatory field of room name",type:"string"},start_time:{description:"Mandatory field in ISO8601 format",type:"string"},end_time:{description:"Mandatory field in ISO8601 format",type:"string"},announcements:{type:"array",items:{type:"object",properties:{id:{description:"Mandatory & Unique field",type:"string"},message:{description:"Mandatory field message field",type:"string"},relative_from:{description:"default is 'end'. accepts only NULL|'start'|'end'",type:"string"},relative_time_in_seconds:{description:"Mandatory field",type:"integer"},user_id:{description:"default is messsage to all",type:"array",items:{type:"string"}}},required:["id","message","relative_time_in_seconds"]}},allowed_user_id:{description:"default is everyone is permitted",type:"array",items:{type:"string"}}},required:["requestor","name","start_time","end_time"]},example:{requestor:"10206739",name:"test-room-ABC",start_time:"2022-09-07T13:00:00Z",end_time:"2022-09-07T14:00:00Z",announcements:[{id:"00cc2c62-d3a1-4d15-b1d0-abe3f51d1695",message:"This is a test message",relative_from:"start",relative_time_in_seconds:900,user_id:["10206739","10208888"]},{id:"c50ae8ba-0459-4769-8765-611339d7d408",message:"This is another test message",relative_time_in_seconds:600}],allowed_user_id:["10206739","10208888"]}}}},responses:{200:{content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{requestor:{type:"string"},name:{type:"string"},start_time:{type:"string"},end_time:{type:"string"},announcements:{type:"array",items:{type:"object",properties:{id:{type:"string"},message:{type:"string"},relative_from:{type:"string"},relative_time_in_seconds:{type:"integer"},user_id:{type:"array",items:{type:"string"}}}}},allowed_user_id:{type:"array",items:{type:"string"}}}}},sent_at:{type:"string"}}},example:{data:[{id:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6",name:"test-room-ABC",status:"Booked",start_time:"2022-09-07T13:00:00Z",end_time:"2022-09-07T14:00:00Z",announcements:[{id:"00cc2c62-d3a1-4d15-b1d0-abe3f51d1695",message:"This is a test message",relative_from:"start",relative_time_in_seconds:900,user_id:["10206739","10208888"]},{id:"c50ae8ba-0459-4769-8765-611339d7d408",message:"This is another test message",relative_from:"end",relative_time_in_seconds:600,user_id:[]}],allowed_user_id:[],users:[{user_id:"10206739",user_name:"Shawn Ho"},{user_id:"10208888",user_name:"Tan Ah Gao"}],created_at:"2022-09-06T13:00:00Z",created_by:"10206739",updated_at:"2022-09-06T13:00:00Z",updated_by:"10206739"}],sent_at:"2023-06-15T18:42:11Z"}}}},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"post",path:"/v2/rooms",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{requestor:"string",name:"string",start_time:"string",end_time:"string",announcements:[{id:"string",message:"string",relative_from:"string",relative_time_in_seconds:0,user_id:["string"]}],allowed_user_id:["string"]},info:{title:"Room Management",version:"v2",description:"## What's new\n- create chat 1-1 room\n- delete chat 1-1 room\n"},postman:{name:"Create room",description:{content:"API to book room, reply with webapp URL to join the room  \n\\- Poll periodically (configurable interval) for start_time, end_time and announcements time  \n\\- room session will be created at start_time  \n\\- to start room immediately, set start_time to past time  \n\\- to start room 15 minutes before actual 9am session, set start_time to 8:45am  \n\\- room session will be terminated at end_time  \n\\- announcements through chat messaging to selected or all participants",type:"text/plain"},url:{path:["v2","rooms"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},sidebar:"ucsAPI-v2",previous:{title:"Server readiness",permalink:"/aoh-docs/docs/openapi/ucs/server-readiness"},next:{title:"List rooms",permalink:"/aoh-docs/docs/openapi/ucs/list-rooms"}},_={},y=[{value:"Create room",id:"create-room",level:2}],g={toc:y},h="wrapper";function v(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"create-room"},"Create room"),(0,s.kt)("p",null,"API to book room, reply with webapp URL to join the room",(0,s.kt)("br",{parentName:"p"}),"\n","-"," Poll periodically (configurable interval) for start_time, end_time and announcements time",(0,s.kt)("br",{parentName:"p"}),"\n","-"," room session will be created at start_time",(0,s.kt)("br",{parentName:"p"}),"\n","-"," to start room immediately, set start_time to past time",(0,s.kt)("br",{parentName:"p"}),"\n","-"," to start room 15 minutes before actual 9am session, set start_time to 8:45am",(0,s.kt)("br",{parentName:"p"}),"\n","-"," room session will be terminated at end_time",(0,s.kt)("br",{parentName:"p"}),"\n","-"," announcements through chat messaging to selected or all participants"),(0,s.kt)(n.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"requestor",required:!0,deprecated:void 0,schemaDescription:"Mandatory field of user_id calling the API",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!0,deprecated:void 0,schemaDescription:"Mandatory field of room name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"start_time",required:!0,deprecated:void 0,schemaDescription:"Mandatory field in ISO8601 format",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"end_time",required:!0,deprecated:void 0,schemaDescription:"Mandatory field in ISO8601 format",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"announcements"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!0,deprecated:void 0,schemaDescription:"Mandatory & Unique field",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!0,deprecated:void 0,schemaDescription:"Mandatory field message field",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"relative_from",required:!1,deprecated:void 0,schemaDescription:"default is 'end'. accepts only NULL|'start'|'end'",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"relative_time_in_seconds",required:!0,deprecated:void 0,schemaDescription:"Mandatory field",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"user_id",required:!1,deprecated:void 0,schemaDescription:"default is messsage to all",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!1,name:"allowed_user_id",required:!1,deprecated:void 0,schemaDescription:"default is everyone is permitted",schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"requestor",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"start_time",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"end_time",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"announcements"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"relative_from",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"relative_time_in_seconds",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"user_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!1,name:"allowed_user_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "data": [\n    {\n      "requestor": "string",\n      "name": "string",\n      "start_time": "string",\n      "end_time": "string",\n      "announcements": [\n        {\n          "id": "string",\n          "message": "string",\n          "relative_from": "string",\n          "relative_time_in_seconds": 0,\n          "user_id": [\n            "string"\n          ]\n        }\n      ],\n      "allowed_user_id": [\n        "string"\n      ]\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(l.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",\n      "name": "test-room-ABC",\n      "status": "Booked",\n      "start_time": "2022-09-07T13:00:00Z",\n      "end_time": "2022-09-07T14:00:00Z",\n      "announcements": [\n        {\n          "id": "00cc2c62-d3a1-4d15-b1d0-abe3f51d1695",\n          "message": "This is a test message",\n          "relative_from": "start",\n          "relative_time_in_seconds": 900,\n          "user_id": [\n            "10206739",\n            "10208888"\n          ]\n        },\n        {\n          "id": "c50ae8ba-0459-4769-8765-611339d7d408",\n          "message": "This is another test message",\n          "relative_from": "end",\n          "relative_time_in_seconds": 600,\n          "user_id": []\n        }\n      ],\n      "allowed_user_id": [],\n      "users": [\n        {\n          "user_id": "10206739",\n          "user_name": "Shawn Ho"\n        },\n        {\n          "user_id": "10208888",\n          "user_name": "Tan Ah Gao"\n        }\n      ],\n      "created_at": "2022-09-06T13:00:00Z",\n      "created_by": "10206739",\n      "updated_at": "2022-09-06T13:00:00Z",\n      "updated_by": "10206739"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(l.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null)),(0,s.kt)(l.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}v.isMDXComponent=!0}}]);
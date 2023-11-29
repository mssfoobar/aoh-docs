"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[4698],{9317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>c,default:()=>b,frontMatter:()=>y,metadata:()=>u,toc:()=>g});var s=a(87462),i=(a(67294),a(3905)),r=a(70603),p=a(48147),l=a(61045),n=a(86776),m=a(69128),d=a(83329),o=(a(3186),a(18679));const y={id:"request-replay-jump-init",title:"Request  Replay Jump Init",description:"Existing replay session to initilize at time specified in response's `replay_requested_timestamp`",sidebar_label:"Request  Replay Jump Init",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],description:"Existing replay session to initilize at time specified in response's `replay_requested_timestamp`",requestBody:{content:{"application/json":{schema:{type:"object",properties:{replay_requested_timestamp:{description:"Mandatory field of replay start time",type:"string"}},required:["replay_requested_timestamp"],example:{replay_requested_timestamp:"2023-06-13T01:00:00Z"}}}}},parameters:[{name:"replayid",in:"path",description:"ID of replay to jump replay start time",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},created_at:{type:"string"},updated_at:{type:"string"},status:{type:"string"},display_status:{type:"string"},replay_start_timestamp:{type:"string"},replay_end_timestamp:{type:"string"},replay_last_timestamp:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{id:"ab076d0a-31b5-41b5-84f9-5188895dea13",created_at:"2023-06-15T18:42:11.709957+00:00",updated_at:"2023-06-15T18:52:03.540681+00:00",status:"NONE",display_status:"REPLAY_INIT_REQUESTED",replay_start_timestamp:"2023-06-13T00:00:00Z",replay_end_timestamp:"2023-06-13T03:00:00Z",replay_last_timestamp:"2023-06-13T01:00:00Z"}],sent_at:"2023-06-15T18:52:03Z"}}}},400:{description:"Bad Request Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"object",properties:{message:{type:"string"}}}}},example:{sent_at:"2023-06-15T18:48:12Z",errors:[{message:"Session id 'ab076d0a-31b5-41b5-84f9-5188895dea13'  doesn't exist"}]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}}},method:"put",path:"/v1/replay/{replayid}/init",servers:[{url:"http://rnr.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{replay_requested_timestamp:"2023-06-13T01:00:00Z"},info:{title:"Record & Replay",version:"1.0.0",description:"API for record & replay service"},postman:{name:"Request  Replay Jump Init",description:{content:"Existing replay session to initilize at time specified in response's `replay_requested_timestamp`",type:"text/plain"},url:{path:["v1","replay",":replayid","init"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of replay to jump replay start time",type:"text/plain"},type:"any",value:"",key:"replayid"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/rnr/Record & Replay API/record-replay",custom_edit_url:null},c=void 0,u={unversionedId:"rnr/Record & Replay API/request-replay-jump-init",id:"rnr/Record & Replay API/request-replay-jump-init",title:"Request  Replay Jump Init",description:"Existing replay session to initilize at time specified in response's `replay_requested_timestamp`",source:"@site/docs/80_rnr/Record & Replay API/request-replay-jump-init.api.mdx",sourceDirName:"80_rnr/Record & Replay API",slug:"/rnr/Record & Replay API/request-replay-jump-init",permalink:"/aoh-docs/docs/rnr/Record & Replay API/request-replay-jump-init",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"request-replay-jump-init",title:"Request  Replay Jump Init",description:"Existing replay session to initilize at time specified in response's `replay_requested_timestamp`",sidebar_label:"Request  Replay Jump Init",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],description:"Existing replay session to initilize at time specified in response's `replay_requested_timestamp`",requestBody:{content:{"application/json":{schema:{type:"object",properties:{replay_requested_timestamp:{description:"Mandatory field of replay start time",type:"string"}},required:["replay_requested_timestamp"],example:{replay_requested_timestamp:"2023-06-13T01:00:00Z"}}}}},parameters:[{name:"replayid",in:"path",description:"ID of replay to jump replay start time",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},created_at:{type:"string"},updated_at:{type:"string"},status:{type:"string"},display_status:{type:"string"},replay_start_timestamp:{type:"string"},replay_end_timestamp:{type:"string"},replay_last_timestamp:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{id:"ab076d0a-31b5-41b5-84f9-5188895dea13",created_at:"2023-06-15T18:42:11.709957+00:00",updated_at:"2023-06-15T18:52:03.540681+00:00",status:"NONE",display_status:"REPLAY_INIT_REQUESTED",replay_start_timestamp:"2023-06-13T00:00:00Z",replay_end_timestamp:"2023-06-13T03:00:00Z",replay_last_timestamp:"2023-06-13T01:00:00Z"}],sent_at:"2023-06-15T18:52:03Z"}}}},400:{description:"Bad Request Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"object",properties:{message:{type:"string"}}}}},example:{sent_at:"2023-06-15T18:48:12Z",errors:[{message:"Session id 'ab076d0a-31b5-41b5-84f9-5188895dea13'  doesn't exist"}]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}}},method:"put",path:"/v1/replay/{replayid}/init",servers:[{url:"http://rnr.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{replay_requested_timestamp:"2023-06-13T01:00:00Z"},info:{title:"Record & Replay",version:"1.0.0",description:"API for record & replay service"},postman:{name:"Request  Replay Jump Init",description:{content:"Existing replay session to initilize at time specified in response's `replay_requested_timestamp`",type:"text/plain"},url:{path:["v1","replay",":replayid","init"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of replay to jump replay start time",type:"text/plain"},type:"any",value:"",key:"replayid"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/rnr/Record & Replay API/record-replay",custom_edit_url:null},sidebar:"rnr",previous:{title:"Request  Replay Init",permalink:"/aoh-docs/docs/rnr/Record & Replay API/request-replay-init"},next:{title:"Request Replay Session",permalink:"/aoh-docs/docs/rnr/Record & Replay API/request-replay-session"}},_={},g=[{value:"Request  Replay Jump Init",id:"request--replay-jump-init",level:2}],v={toc:g};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"request--replay-jump-init"},"Request  Replay Jump Init"),(0,i.kt)("p",null,"Existing replay session to initilize at time specified in response's ",(0,i.kt)("inlineCode",{parentName:"p"},"replay_requested_timestamp")),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(l.Z,{className:"paramsItem",param:{name:"replayid",in:"path",description:"ID of replay to jump replay start time",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"},mdxType:"ParamsItem"})))),(0,i.kt)(p.Z,{mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"replay_requested_timestamp",required:!0,deprecated:void 0,schemaDescription:"Mandatory field of replay start time",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"created_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"updated_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"display_status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"replay_start_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"replay_end_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"replay_last_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "created_at": "string",\n      "updated_at": "string",\n      "status": "string",\n      "display_status": "string",\n      "replay_start_timestamp": "string",\n      "replay_end_timestamp": "string",\n      "replay_last_timestamp": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "ab076d0a-31b5-41b5-84f9-5188895dea13",\n      "created_at": "2023-06-15T18:42:11.709957+00:00",\n      "updated_at": "2023-06-15T18:52:03.540681+00:00",\n      "status": "NONE",\n      "display_status": "REPLAY_INIT_REQUESTED",\n      "replay_start_timestamp": "2023-06-13T00:00:00Z",\n      "replay_end_timestamp": "2023-06-13T03:00:00Z",\n      "replay_last_timestamp": "2023-06-13T01:00:00Z"\n    }\n  ],\n  "sent_at": "2023-06-15T18:52:03Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request Error")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"errors"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": {\n    "message": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:48:12Z",\n  "errors": [\n    {\n      "message": "Session id \'ab076d0a-31b5-41b5-84f9-5188895dea13\'  doesn\'t exist"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null,(0,i.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"errors"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);
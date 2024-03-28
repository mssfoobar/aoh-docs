"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7950],{53536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>_,contentTitle:()=>y,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var s=a(87462),r=(a(67294),a(3905)),i=a(70603),p=a(48147),n=a(61045),l=a(86776),d=a(69128),m=a(83329),o=(a(3186),a(18679));const c={id:"request-replay-end",title:"Request Replay End",description:"End current replay session.",sidebar_label:"Request Replay End",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],description:"End current replay session.",parameters:[{name:"replayid",in:"path",description:"ID of replay to end",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},created_at:{type:"string"},updated_at:{type:"string"},status:{type:"string"},display_status:{type:"string"},replay_start_timestamp:{type:"string"},replay_end_timestamp:{type:"string"},replay_last_timestamp:{type:"string"},replay_speed:{type:"number"}}}},sent_at:{type:"string"}}},example:{data:[{id:"ab076d0a-31b5-41b5-84f9-5188895dea13",created_at:"2023-06-15T18:42:11.709957+00:00",updated_at:"2023-06-15T18:54:17.247085+00:00",status:"NONE",display_status:"REPLAY_END_REQUESTED",replay_start_timestamp:"2023-06-13T00:00:00Z",replay_end_timestamp:"2023-06-13T03:00:00Z",replay_last_timestamp:"2023-06-13T01:01:40Z",replay_speed:.5}],sent_at:"2023-06-15T18:54:17Z"}}}},400:{description:"Bad Request Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"object",properties:{message:{type:"string"}}}}},example:{sent_at:"2023-06-15T18:48:12Z",errors:[{message:"Session id 'ab076d0a-31b5-41b5-84f9-5188895dea13'  doesn't exist"}]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}}},method:"put",path:"/v1/replay/{replayid}/end",servers:[{url:"http://rnr.dev2.ar2",description:"Default server"}],info:{title:"Record & Replay",version:"1.0.0",description:"API for record & replay service"},postman:{name:"Request Replay End",description:{content:"End current replay session.",type:"text/plain"},url:{path:["v1","replay",":replayid","end"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of replay to end",type:"text/plain"},type:"any",value:"",key:"replayid"}]},header:[{key:"Accept",value:"application/json"}],method:"PUT"}},sidebar_class_name:"put api-method",info_path:"docs/80_rnr/Record & Replay API/record-replay",custom_edit_url:null},y=void 0,u={unversionedId:"rnr/Record & Replay API/request-replay-end",id:"rnr/Record & Replay API/request-replay-end",title:"Request Replay End",description:"End current replay session.",source:"@site/docs/80_rnr/Record & Replay API/request-replay-end.api.mdx",sourceDirName:"80_rnr/Record & Replay API",slug:"/rnr/Record & Replay API/request-replay-end",permalink:"/aoh-docs/docs/rnr/Record & Replay API/request-replay-end",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"request-replay-end",title:"Request Replay End",description:"End current replay session.",sidebar_label:"Request Replay End",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],description:"End current replay session.",parameters:[{name:"replayid",in:"path",description:"ID of replay to end",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},created_at:{type:"string"},updated_at:{type:"string"},status:{type:"string"},display_status:{type:"string"},replay_start_timestamp:{type:"string"},replay_end_timestamp:{type:"string"},replay_last_timestamp:{type:"string"},replay_speed:{type:"number"}}}},sent_at:{type:"string"}}},example:{data:[{id:"ab076d0a-31b5-41b5-84f9-5188895dea13",created_at:"2023-06-15T18:42:11.709957+00:00",updated_at:"2023-06-15T18:54:17.247085+00:00",status:"NONE",display_status:"REPLAY_END_REQUESTED",replay_start_timestamp:"2023-06-13T00:00:00Z",replay_end_timestamp:"2023-06-13T03:00:00Z",replay_last_timestamp:"2023-06-13T01:01:40Z",replay_speed:.5}],sent_at:"2023-06-15T18:54:17Z"}}}},400:{description:"Bad Request Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"object",properties:{message:{type:"string"}}}}},example:{sent_at:"2023-06-15T18:48:12Z",errors:[{message:"Session id 'ab076d0a-31b5-41b5-84f9-5188895dea13'  doesn't exist"}]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}}},method:"put",path:"/v1/replay/{replayid}/end",servers:[{url:"http://rnr.dev2.ar2",description:"Default server"}],info:{title:"Record & Replay",version:"1.0.0",description:"API for record & replay service"},postman:{name:"Request Replay End",description:{content:"End current replay session.",type:"text/plain"},url:{path:["v1","replay",":replayid","end"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of replay to end",type:"text/plain"},type:"any",value:"",key:"replayid"}]},header:[{key:"Accept",value:"application/json"}],method:"PUT"}},sidebar_class_name:"put api-method",info_path:"docs/80_rnr/Record & Replay API/record-replay",custom_edit_url:null},sidebar:"rnr",previous:{title:"readiness",permalink:"/aoh-docs/docs/rnr/Record & Replay API/readiness"},next:{title:"Request Replay Info",permalink:"/aoh-docs/docs/rnr/Record & Replay API/request-replay-info"}},_={},g=[{value:"Request Replay End",id:"request-replay-end",level:2}],v={toc:g},b="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"request-replay-end"},"Request Replay End"),(0,r.kt)("p",null,"End current replay session."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(n.Z,{className:"paramsItem",param:{name:"replayid",in:"path",description:"ID of replay to end",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"OK")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"created_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"updated_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"display_status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"replay_start_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"replay_end_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"replay_last_timestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"replay_speed",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "created_at": "string",\n      "updated_at": "string",\n      "status": "string",\n      "display_status": "string",\n      "replay_start_timestamp": "string",\n      "replay_end_timestamp": "string",\n      "replay_last_timestamp": "string",\n      "replay_speed": 0\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "ab076d0a-31b5-41b5-84f9-5188895dea13",\n      "created_at": "2023-06-15T18:42:11.709957+00:00",\n      "updated_at": "2023-06-15T18:54:17.247085+00:00",\n      "status": "NONE",\n      "display_status": "REPLAY_END_REQUESTED",\n      "replay_start_timestamp": "2023-06-13T00:00:00Z",\n      "replay_end_timestamp": "2023-06-13T03:00:00Z",\n      "replay_last_timestamp": "2023-06-13T01:01:40Z",\n      "replay_speed": 0.5\n    }\n  ],\n  "sent_at": "2023-06-15T18:54:17Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request Error")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": {\n    "message": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:48:12Z",\n  "errors": [\n    {\n      "message": "Session id \'ab076d0a-31b5-41b5-84f9-5188895dea13\'  doesn\'t exist"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(o.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error")),(0,r.kt)("div",null,(0,r.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(m.Z,{mdxType:"SchemaTabs"},(0,r.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[1566],{65870:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>v});var n=a(87462),i=(a(67294),a(3905)),s=a(70603),d=a(48147),p=a(61045),r=a(86776),l=a(69128),m=a(83329),o=(a(3186),a(18679));const c={id:"create-incident-updates",title:"Create incident updates",description:"Create incident updates",sidebar_label:"Create incident updates",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],parameters:[{name:"incidentid",in:"path",schema:{type:"string"},required:!0,example:"INC-20230831-0001"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{action_by:{type:"string"},action_taken:{type:"string"},update_type:{type:"string"}}},example:{action_by:"bob",action_taken:"investigation",update_type:"USER"}}}},responses:{200:{description:"/incidents/[incidentid]/updates",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{action_by:{type:"string"},action_taken:{type:"string"},created_at:{type:"string"},id:{type:"string"},incident_id:{type:"string"},update_type:{type:"string"},updated_at:{type:"string"}}}},sent_at:{type:"string",example:"2023-08-31T14:38:55Z"}}},example:{data:[{action_by:"bob",action_taken:"investigation",created_at:"2023-08-30T08:30:13.637+00:00",id:"f9cd2d8d-968a-4369-b49a-e39a91135a2a",incident_id:"INC-20230703-0002",update_type:"USER",updated_at:"2023-08-30T08:30:17.384332+00:00"}],sent_at:"2023-08-31T14:38:17Z"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"invalid request body"}]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},description:"Create incident updates",method:"post",path:"/v1/incidents/{incidentid}/updates/",servers:[{url:"http://ims.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{action_by:"string",action_taken:"string",update_type:"string"},info:{title:"Incident Management System",version:"1.0.0",description:"API for Incident Management System"},postman:{name:"Create incident updates",description:{type:"text/plain"},url:{path:["v1","incidents",":incidentid","updates",""],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"incidentid"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/wfe/Incident Management System API/incident-management-system",custom_edit_url:null},y=void 0,u={unversionedId:"wfe/Incident Management System API/create-incident-updates",id:"wfe/Incident Management System API/create-incident-updates",title:"Create incident updates",description:"Create incident updates",source:"@site/docs/wfe/Incident Management System API/create-incident-updates.api.mdx",sourceDirName:"wfe/Incident Management System API",slug:"/wfe/Incident Management System API/create-incident-updates",permalink:"/aoh-docs/docs/wfe/Incident Management System API/create-incident-updates",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-incident-updates",title:"Create incident updates",description:"Create incident updates",sidebar_label:"Create incident updates",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],parameters:[{name:"incidentid",in:"path",schema:{type:"string"},required:!0,example:"INC-20230831-0001"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{action_by:{type:"string"},action_taken:{type:"string"},update_type:{type:"string"}}},example:{action_by:"bob",action_taken:"investigation",update_type:"USER"}}}},responses:{200:{description:"/incidents/[incidentid]/updates",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{action_by:{type:"string"},action_taken:{type:"string"},created_at:{type:"string"},id:{type:"string"},incident_id:{type:"string"},update_type:{type:"string"},updated_at:{type:"string"}}}},sent_at:{type:"string",example:"2023-08-31T14:38:55Z"}}},example:{data:[{action_by:"bob",action_taken:"investigation",created_at:"2023-08-30T08:30:13.637+00:00",id:"f9cd2d8d-968a-4369-b49a-e39a91135a2a",incident_id:"INC-20230703-0002",update_type:"USER",updated_at:"2023-08-30T08:30:17.384332+00:00"}],sent_at:"2023-08-31T14:38:17Z"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"invalid request body"}]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},description:"Create incident updates",method:"post",path:"/v1/incidents/{incidentid}/updates/",servers:[{url:"http://ims.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{action_by:"string",action_taken:"string",update_type:"string"},info:{title:"Incident Management System",version:"1.0.0",description:"API for Incident Management System"},postman:{name:"Create incident updates",description:{type:"text/plain"},url:{path:["v1","incidents",":incidentid","updates",""],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"incidentid"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/wfe/Incident Management System API/incident-management-system",custom_edit_url:null},sidebar:"wfe",previous:{title:"Introduction",permalink:"/aoh-docs/docs/wfe/Incident Management System API/incident-management-system"},next:{title:"Create incident",permalink:"/aoh-docs/docs/wfe/Incident Management System API/create-incident"}},g={},v=[{value:"Create incident updates",id:"create-incident-updates",level:2}],k={toc:v};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-incident-updates"},"Create incident updates"),(0,i.kt)("p",null,"Create incident updates"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"incidentid",in:"path",schema:{type:"string"},required:!0,example:"INC-20230831-0001"},mdxType:"ParamsItem"})))),(0,i.kt)(d.Z,{mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"action_by",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"action_taken",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"update_type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"/incidents/","[incidentid]","/updates")),(0,i.kt)("div",null,(0,i.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"action_by",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"action_taken",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"created_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"incident_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"update_type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"updated_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "data": [\n    {\n      "action_by": "string",\n      "action_taken": "string",\n      "created_at": "string",\n      "id": "string",\n      "incident_id": "string",\n      "update_type": "string",\n      "updated_at": "string"\n    }\n  ],\n  "sent_at": "2023-08-31T14:38:55Z"\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "data": [\n    {\n      "action_by": "bob",\n      "action_taken": "investigation",\n      "created_at": "2023-08-30T08:30:13.637+00:00",\n      "id": "f9cd2d8d-968a-4369-b49a-e39a91135a2a",\n      "incident_id": "INC-20230703-0002",\n      "update_type": "USER",\n      "updated_at": "2023-08-30T08:30:17.384332+00:00"\n    }\n  ],\n  "sent_at": "2023-08-31T14:38:17Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request")),(0,i.kt)("div",null,(0,i.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"errors"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "invalid request body"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null,(0,i.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"errors"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(o.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(o.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Service Unavailable")),(0,i.kt)("div",null,(0,i.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(o.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,i.kt)(m.Z,{mdxType:"SchemaTabs"},(0,i.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))),(0,i.kt)(o.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:"service is not yet ready",language:"shell",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);
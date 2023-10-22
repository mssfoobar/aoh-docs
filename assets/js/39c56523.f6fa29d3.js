"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[3296],{54156:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>b});var i=a(87462),n=(a(67294),a(3905)),s=a(70603),r=a(48147),d=a(61045),o=a(86776),l=a(69128),m=a(83329),p=(a(3186),a(18679));const c={id:"request-incident-info-by-id",title:"Request incident info by id",description:"Request incident info by id",sidebar_label:"Request incident info by id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],parameters:[{name:"incidentid",in:"path",schema:{type:"string"},required:!0,example:"INC-20230831-0001"}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{category:{type:"string"},comments:{type:"string"},contact:{type:"string"},created_at:{type:"string"},description:{type:"string"},id:{type:"string"},location:{type:"string"},priority:{type:"number"},reported_by:{type:"string"},status:{type:"string"},updated_at:{type:"string"}}}},sent_at:{type:"string",example:"2023-08-31T14:33:17Z"}}},example:{data:[{category:"522a2a00-fc84-43e0-ae1b-da6d8c8bdb1a",comments:"this is a comment",contact:"+65 12345678",created_at:"2023-08-31T14:31:59.844979+00:00",description:"test",id:"INC-20230831-0001",location:"#12-34,S123456,nowhere str",priority:4,reported_by:"bob",status:"NEW",updated_at:"2023-08-31T14:31:59.844979+00:00"}],sent_at:"2023-08-31T14:33:17Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},description:"Request incident info by id",method:"get",path:"/v1/incidents/{incidentid}/",servers:[{url:"http://ims.dev2.ar2",description:"Default server"}],info:{title:"Incident Management System",version:"1.0.0",description:"API for Incident Management System"},postman:{name:"Request incident info by id",description:{type:"text/plain"},url:{path:["v1","incidents",":incidentid",""],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"incidentid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/wfe/Incident Management System API/incident-management-system",custom_edit_url:null},y=void 0,u={unversionedId:"wfe/Incident Management System API/request-incident-info-by-id",id:"wfe/Incident Management System API/request-incident-info-by-id",title:"Request incident info by id",description:"Request incident info by id",source:"@site/docs/wfe/Incident Management System API/request-incident-info-by-id.api.mdx",sourceDirName:"wfe/Incident Management System API",slug:"/wfe/Incident Management System API/request-incident-info-by-id",permalink:"/aoh-docs/docs/wfe/Incident Management System API/request-incident-info-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"request-incident-info-by-id",title:"Request incident info by id",description:"Request incident info by id",sidebar_label:"Request incident info by id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],parameters:[{name:"incidentid",in:"path",schema:{type:"string"},required:!0,example:"INC-20230831-0001"}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{category:{type:"string"},comments:{type:"string"},contact:{type:"string"},created_at:{type:"string"},description:{type:"string"},id:{type:"string"},location:{type:"string"},priority:{type:"number"},reported_by:{type:"string"},status:{type:"string"},updated_at:{type:"string"}}}},sent_at:{type:"string",example:"2023-08-31T14:33:17Z"}}},example:{data:[{category:"522a2a00-fc84-43e0-ae1b-da6d8c8bdb1a",comments:"this is a comment",contact:"+65 12345678",created_at:"2023-08-31T14:31:59.844979+00:00",description:"test",id:"INC-20230831-0001",location:"#12-34,S123456,nowhere str",priority:4,reported_by:"bob",status:"NEW",updated_at:"2023-08-31T14:31:59.844979+00:00"}],sent_at:"2023-08-31T14:33:17Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},description:"Request incident info by id",method:"get",path:"/v1/incidents/{incidentid}/",servers:[{url:"http://ims.dev2.ar2",description:"Default server"}],info:{title:"Incident Management System",version:"1.0.0",description:"API for Incident Management System"},postman:{name:"Request incident info by id",description:{type:"text/plain"},url:{path:["v1","incidents",":incidentid",""],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"incidentid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/wfe/Incident Management System API/incident-management-system",custom_edit_url:null},sidebar:"wfe",previous:{title:"readiness",permalink:"/aoh-docs/docs/wfe/Incident Management System API/readiness"},next:{title:"Request incident info",permalink:"/aoh-docs/docs/wfe/Incident Management System API/request-incident-info"}},g={},b=[{value:"Request incident info by id",id:"request-incident-info-by-id",level:2}],v={toc:b};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"request-incident-info-by-id"},"Request incident info by id"),(0,n.kt)("p",null,"Request incident info by id"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(d.Z,{className:"paramsItem",param:{name:"incidentid",in:"path",schema:{type:"string"},required:!0,example:"INC-20230831-0001"},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"data"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"category",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"comments",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"contact",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"created_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"description",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"location",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"priority",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"reported_by",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"updated_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(l.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "data": [\n    {\n      "category": "string",\n      "comments": "string",\n      "contact": "string",\n      "created_at": "string",\n      "description": "string",\n      "id": "string",\n      "location": "string",\n      "priority": 0,\n      "reported_by": "string",\n      "status": "string",\n      "updated_at": "string"\n    }\n  ],\n  "sent_at": "2023-08-31T14:33:17Z"\n}',language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "data": [\n    {\n      "category": "522a2a00-fc84-43e0-ae1b-da6d8c8bdb1a",\n      "comments": "this is a comment",\n      "contact": "+65 12345678",\n      "created_at": "2023-08-31T14:31:59.844979+00:00",\n      "description": "test",\n      "id": "INC-20230831-0001",\n      "location": "#12-34,S123456,nowhere str",\n      "priority": 4,\n      "reported_by": "bob",\n      "status": "NEW",\n      "updated_at": "2023-08-31T14:31:59.844979+00:00"\n    }\n  ],\n  "sent_at": "2023-08-31T14:33:17Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal Server Error")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"errors"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Service Unavailable")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))))),(0,n.kt)(p.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:"service is not yet ready",language:"shell",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);
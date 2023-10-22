"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[1651],{17402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var i=a(87462),n=(a(67294),a(3905)),s=a(70603),r=a(48147),d=(a(61045),a(86776)),o=a(69128),l=a(83329),m=(a(3186),a(18679));const c={id:"request-incident-info",title:"Request incident info",description:"Request incident info",sidebar_label:"Request incident info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{category:{type:"string"},comments:{type:"string"},contact:{type:"string"},created_at:{type:"string"},description:{type:"string"},id:{type:"string"},location:{type:"string"},priority:{type:"number"},reported_by:{type:"string"},status:{type:"string"},updated_at:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{category:"522a2a00-fc84-43e0-ae1b-da6d8c8bdb1a",comments:"this is a comment",contact:"+6512345678",created_at:"2023-08-31T14:31:59.844979+00:00",description:"test",id:"INC-20230831-0001",location:"#12-34,S123456,nowhere str",priority:4,reported_by:"bob",status:"NEW",updated_at:"2023-08-31T14:31:59.844979+00:00"}],sent_at:"2023-08-31T14:32:23Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},description:"Request incident info",method:"get",path:"/v1/incidents",servers:[{url:"http://ims.dev2.ar2",description:"Default server"}],info:{title:"Incident Management System",version:"1.0.0",description:"API for Incident Management System"},postman:{name:"Request incident info",description:{type:"text/plain"},url:{path:["v1","incidents"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/wfe/Incident Management System API/incident-management-system",custom_edit_url:null},p=void 0,u={unversionedId:"wfe/Incident Management System API/request-incident-info",id:"wfe/Incident Management System API/request-incident-info",title:"Request incident info",description:"Request incident info",source:"@site/docs/wfe/Incident Management System API/request-incident-info.api.mdx",sourceDirName:"wfe/Incident Management System API",slug:"/wfe/Incident Management System API/request-incident-info",permalink:"/aoh-docs/docs/wfe/Incident Management System API/request-incident-info",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"request-incident-info",title:"Request incident info",description:"Request incident info",sidebar_label:"Request incident info",hide_title:!0,hide_table_of_contents:!0,api:{tags:["default"],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{category:{type:"string"},comments:{type:"string"},contact:{type:"string"},created_at:{type:"string"},description:{type:"string"},id:{type:"string"},location:{type:"string"},priority:{type:"number"},reported_by:{type:"string"},status:{type:"string"},updated_at:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{category:"522a2a00-fc84-43e0-ae1b-da6d8c8bdb1a",comments:"this is a comment",contact:"+6512345678",created_at:"2023-08-31T14:31:59.844979+00:00",description:"test",id:"INC-20230831-0001",location:"#12-34,S123456,nowhere str",priority:4,reported_by:"bob",status:"NEW",updated_at:"2023-08-31T14:31:59.844979+00:00"}],sent_at:"2023-08-31T14:32:23Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},description:"Request incident info",method:"get",path:"/v1/incidents",servers:[{url:"http://ims.dev2.ar2",description:"Default server"}],info:{title:"Incident Management System",version:"1.0.0",description:"API for Incident Management System"},postman:{name:"Request incident info",description:{type:"text/plain"},url:{path:["v1","incidents"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/wfe/Incident Management System API/incident-management-system",custom_edit_url:null},sidebar:"wfe",previous:{title:"Request incident info by id",permalink:"/aoh-docs/docs/wfe/Incident Management System API/request-incident-info-by-id"},next:{title:"Request incident updates",permalink:"/aoh-docs/docs/wfe/Incident Management System API/request-incident-updates"}},y={},g=[{value:"Request incident info",id:"request-incident-info",level:2}],v={toc:g};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"request-incident-info"},"Request incident info"),(0,n.kt)("p",null,"Request incident info"),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"data"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"category",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"comments",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"contact",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"created_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"description",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"location",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"priority",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"reported_by",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"updated_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(o.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "data": [\n    {\n      "category": "string",\n      "comments": "string",\n      "contact": "string",\n      "created_at": "string",\n      "description": "string",\n      "id": "string",\n      "location": "string",\n      "priority": 0,\n      "reported_by": "string",\n      "status": "string",\n      "updated_at": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "data": [\n    {\n      "category": "522a2a00-fc84-43e0-ae1b-da6d8c8bdb1a",\n      "comments": "this is a comment",\n      "contact": "+6512345678",\n      "created_at": "2023-08-31T14:31:59.844979+00:00",\n      "description": "test",\n      "id": "INC-20230831-0001",\n      "location": "#12-34,S123456,nowhere str",\n      "priority": 4,\n      "reported_by": "bob",\n      "status": "NEW",\n      "updated_at": "2023-08-31T14:31:59.844979+00:00"\n    }\n  ],\n  "sent_at": "2023-08-31T14:32:23Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal Server Error")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"errors"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(m.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Service Unavailable")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(m.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"SchemaTabs"},(0,n.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))))),(0,n.kt)(m.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,n.kt)(d.Z,{responseExample:"service is not yet ready",language:"shell",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);
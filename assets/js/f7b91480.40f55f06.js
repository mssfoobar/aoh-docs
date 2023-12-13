"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5709],{87183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>v,frontMatter:()=>c,metadata:()=>f,toc:()=>w});var i=a(87462),r=(a(67294),a(3905)),n=a(70603),o=a(48147),l=a(61045),s=a(86776),d=a(69128),p=a(83329),m=(a(3186),a(18679));const c={id:"start-workflow",title:"Start workflow",description:"API to start executing workflow by workflow template id for given incident id",sidebar_label:"Start workflow",hide_title:!0,hide_table_of_contents:!0,api:{tags:["workflow"],description:"API to start executing workflow by workflow template id for given incident id",parameters:[{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"72421cc8-82a8-45c8-ad52-e188db8fa473"}},{name:"incidentid",in:"path",required:!0,schema:{type:"string",example:"INCIDENT-0001"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},run_id:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{id:"900622a2-50f8-4d22-89e7-9e95fa10bcf5",run_id:"5a6f609c-3056-4ca7-ad56-08f56094ceb8"}],sent_at:"2023-08-25T08:08:46Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},method:"post",path:"/v1/start/workflow/{workflowid}/incident/{incidentid}",servers:[{url:"http://wfm.dev2.ar2"}],info:{title:"Workflow Management",version:"1.0.0",description:"API for workflow managment"},postman:{name:"Start workflow",description:{content:"API to start executing workflow by workflow template id for given incident id",type:"text/plain"},url:{path:["v1","start","workflow",":workflowid","incident",":incidentid"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflowid"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"incidentid"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs/wfe/Workflow API/workflow-management",custom_edit_url:null},k=void 0,f={unversionedId:"wfe/Workflow API/start-workflow",id:"wfe/Workflow API/start-workflow",title:"Start workflow",description:"API to start executing workflow by workflow template id for given incident id",source:"@site/docs/90_wfe/Workflow API/start-workflow.api.mdx",sourceDirName:"90_wfe/Workflow API",slug:"/wfe/Workflow API/start-workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/start-workflow",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"start-workflow",title:"Start workflow",description:"API to start executing workflow by workflow template id for given incident id",sidebar_label:"Start workflow",hide_title:!0,hide_table_of_contents:!0,api:{tags:["workflow"],description:"API to start executing workflow by workflow template id for given incident id",parameters:[{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"72421cc8-82a8-45c8-ad52-e188db8fa473"}},{name:"incidentid",in:"path",required:!0,schema:{type:"string",example:"INCIDENT-0001"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},run_id:{type:"string"}}}},sent_at:{type:"string"}}},example:{data:[{id:"900622a2-50f8-4d22-89e7-9e95fa10bcf5",run_id:"5a6f609c-3056-4ca7-ad56-08f56094ceb8"}],sent_at:"2023-08-25T08:08:46Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},method:"post",path:"/v1/start/workflow/{workflowid}/incident/{incidentid}",servers:[{url:"http://wfm.dev2.ar2"}],info:{title:"Workflow Management",version:"1.0.0",description:"API for workflow managment"},postman:{name:"Start workflow",description:{content:"API to start executing workflow by workflow template id for given incident id",type:"text/plain"},url:{path:["v1","start","workflow",":workflowid","incident",":incidentid"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflowid"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"incidentid"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"docs/wfe/Workflow API/workflow-management",custom_edit_url:null},sidebar:"wfe",previous:{title:"Signal Workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/signal-workflow"},next:{title:"Terminate Workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/terminate-workflow"}},y={},w=[{value:"Start workflow",id:"start-workflow",level:2}],u={toc:w},g="wrapper";function v(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"start-workflow"},"Start workflow"),(0,r.kt)("p",null,"API to start executing workflow by workflow template id for given incident id"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"72421cc8-82a8-45c8-ad52-e188db8fa473"}},mdxType:"ParamsItem"}),(0,r.kt)(l.Z,{className:"paramsItem",param:{name:"incidentid",in:"path",required:!0,schema:{type:"string",example:"INCIDENT-0001"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"OK")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"run_id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "run_id": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "900622a2-50f8-4d22-89e7-9e95fa10bcf5",\n      "run_id": "5a6f609c-3056-4ca7-ad56-08f56094ceb8"\n    }\n  ],\n  "sent_at": "2023-08-25T08:08:46Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,r.kt)(m.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Service Unavailable")),(0,r.kt)("div",null,(0,r.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",null,(0,r.kt)("strong",null,"string")))))),(0,r.kt)(m.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,r.kt)(s.Z,{responseExample:"service is not yet ready",language:"shell",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);
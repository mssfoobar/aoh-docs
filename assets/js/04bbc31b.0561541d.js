"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[1019],{8456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>k,default:()=>g,frontMatter:()=>c,metadata:()=>y,toc:()=>f});var n=a(87462),s=(a(67294),a(3905)),r=a(70603),o=a(48147),l=a(61045),i=a(86776),m=a(69128),p=a(83329),d=(a(3186),a(18679));const c={id:"terminate-workflow",title:"Terminate Workflow",description:"API to terminate running workflow with reason",sidebar_label:"Terminate Workflow",hide_title:!0,hide_table_of_contents:!0,api:{tags:["workflow"],description:"API to terminate running workflow with reason",parameters:[{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"be817eaa-a252-4470-bcd4-e09dc50e624c"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{reason:{type:"string"}}},example:{reason:"terminated from frontend"}}}},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"}}},example:{sent_at:"2023-09-13T10:04:52Z"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"invalid request body"}]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},method:"delete",path:"/v1/terminate/workflow/{workflowid}",servers:[{url:"http://wfm.dev2.ar2"}],jsonRequestBodyExample:{reason:"string"},info:{title:"Workflow Management",version:"1.0.0",description:"API for workflow managment"},postman:{name:"Terminate Workflow",description:{content:"API to terminate running workflow with reason",type:"text/plain"},url:{path:["v1","terminate","workflow",":workflowid"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflowid"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"DELETE",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"delete api-method",info_path:"docs/wfe/Workflow API/workflow-management",custom_edit_url:null},k=void 0,y={unversionedId:"wfe/Workflow API/terminate-workflow",id:"wfe/Workflow API/terminate-workflow",title:"Terminate Workflow",description:"API to terminate running workflow with reason",source:"@site/docs/wfe/Workflow API/terminate-workflow.api.mdx",sourceDirName:"wfe/Workflow API",slug:"/wfe/Workflow API/terminate-workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/terminate-workflow",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"terminate-workflow",title:"Terminate Workflow",description:"API to terminate running workflow with reason",sidebar_label:"Terminate Workflow",hide_title:!0,hide_table_of_contents:!0,api:{tags:["workflow"],description:"API to terminate running workflow with reason",parameters:[{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"be817eaa-a252-4470-bcd4-e09dc50e624c"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{reason:{type:"string"}}},example:{reason:"terminated from frontend"}}}},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"}}},example:{sent_at:"2023-09-13T10:04:52Z"}}}},400:{description:"Bad Request",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"invalid request body"}]}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},method:"delete",path:"/v1/terminate/workflow/{workflowid}",servers:[{url:"http://wfm.dev2.ar2"}],jsonRequestBodyExample:{reason:"string"},info:{title:"Workflow Management",version:"1.0.0",description:"API for workflow managment"},postman:{name:"Terminate Workflow",description:{content:"API to terminate running workflow with reason",type:"text/plain"},url:{path:["v1","terminate","workflow",":workflowid"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflowid"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"DELETE",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"delete api-method",info_path:"docs/wfe/Workflow API/workflow-management",custom_edit_url:null},sidebar:"wfe",previous:{title:"Start workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/start-workflow"}},u={},f=[{value:"Terminate Workflow",id:"terminate-workflow",level:2}],w={toc:f};function g(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"terminate-workflow"},"Terminate Workflow"),(0,s.kt)("p",null,"API to terminate running workflow with reason"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"be817eaa-a252-4470-bcd4-e09dc50e624c"}},mdxType:"ParamsItem"})))),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"reason",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "sent_at": "2023-09-13T10:04:52Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "invalid request body"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Service Unavailable")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))))),(0,s.kt)(d.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,s.kt)(i.Z,{responseExample:"service is not yet ready",language:"shell",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);
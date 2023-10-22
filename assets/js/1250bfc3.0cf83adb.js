"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[8745],{30017:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>g,default:()=>f,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var r=a(87462),s=(a(67294),a(3905)),n=a(70603),i=a(48147),o=a(61045),l=a(86776),m=a(69128),p=a(83329),d=(a(3186),a(18679));const c={id:"get-workflow",title:"Get workflow",description:"API to retrieve workflow",sidebar_label:"Get workflow",hide_title:!0,hide_table_of_contents:!0,api:{tags:["workflow"],description:"API to retrieve workflow",parameters:[{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"20edce2b-97fa-459d-b38a-d2e2fce51069"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{root:{type:"object",properties:{sequence:{type:"object",properties:{elements:{type:"array",items:{type:"object",properties:{activity:{type:"object",properties:{arguments:{type:"array",items:{type:"string"}},id:{type:"string"},name:{type:"string"},result:{type:"string"}}}}}}}}}},specVersion:{type:"string"},variables:{type:"object",properties:{"1_arg1":{type:"string"},"1_arg2":{type:"string"},"1_arg3":{type:"string"},"2_arg1":{type:"string"},"3_arg1":{type:"string"},"3_arg2":{type:"string"},"3_arg3":{type:"string"}}}}}},sent_at:{type:"string",example:"2023-09-04T08:59:31Z"}}},example:{data:[{root:{sequence:{elements:[{activity:{arguments:["1_arg1","1_arg2","1_arg3"],id:"eea8276b-7a89-4a03-b63d-6a76128e64bb",name:"Activity",result:"result1"}},{activity:{arguments:["2_arg1"],id:"f507b1de-5ad5-408e-a396-8f64120d8ee3",name:"Activity1",result:"result2"}},{activity:{arguments:["3_arg1","3_arg2","3_arg3"],id:"689442e1-acda-48e7-9ae7-6479f686bbea",name:"Activity2",result:"result3"}}]}},specVersion:"2.0",variables:{"1_arg1":"PATCH","1_arg2":"http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11","1_arg3":'{"requestor":"10206739","announcements":[{"message":"test announcement 1","relative_from":"start","relative_time_in_seconds":300}]}',"2_arg1":"60","3_arg1":"PATCH","3_arg2":"http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11","3_arg3":'{"requestor":"10206739","announcements":[{"message":"test announcement 2","relative_from":"start","relative_time_in_seconds":420}]}'}}],sent_at:"2023-09-04T08:59:31Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},method:"get",path:"/v1/workflow/{workflowid}",servers:[{url:"http://wfm.dev2.ar2"}],info:{title:"Workflow Management",version:"1.0.0",description:"API for workflow managment"},postman:{name:"Get workflow",description:{content:"API to retrieve workflow",type:"text/plain"},url:{path:["v1","workflow",":workflowid"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflowid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/wfe/Workflow API/workflow-management",custom_edit_url:null},g=void 0,y={unversionedId:"wfe/Workflow API/get-workflow",id:"wfe/Workflow API/get-workflow",title:"Get workflow",description:"API to retrieve workflow",source:"@site/docs/wfe/Workflow API/get-workflow.api.mdx",sourceDirName:"wfe/Workflow API",slug:"/wfe/Workflow API/get-workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/get-workflow",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-workflow",title:"Get workflow",description:"API to retrieve workflow",sidebar_label:"Get workflow",hide_title:!0,hide_table_of_contents:!0,api:{tags:["workflow"],description:"API to retrieve workflow",parameters:[{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"20edce2b-97fa-459d-b38a-d2e2fce51069"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{root:{type:"object",properties:{sequence:{type:"object",properties:{elements:{type:"array",items:{type:"object",properties:{activity:{type:"object",properties:{arguments:{type:"array",items:{type:"string"}},id:{type:"string"},name:{type:"string"},result:{type:"string"}}}}}}}}}},specVersion:{type:"string"},variables:{type:"object",properties:{"1_arg1":{type:"string"},"1_arg2":{type:"string"},"1_arg3":{type:"string"},"2_arg1":{type:"string"},"3_arg1":{type:"string"},"3_arg2":{type:"string"},"3_arg3":{type:"string"}}}}}},sent_at:{type:"string",example:"2023-09-04T08:59:31Z"}}},example:{data:[{root:{sequence:{elements:[{activity:{arguments:["1_arg1","1_arg2","1_arg3"],id:"eea8276b-7a89-4a03-b63d-6a76128e64bb",name:"Activity",result:"result1"}},{activity:{arguments:["2_arg1"],id:"f507b1de-5ad5-408e-a396-8f64120d8ee3",name:"Activity1",result:"result2"}},{activity:{arguments:["3_arg1","3_arg2","3_arg3"],id:"689442e1-acda-48e7-9ae7-6479f686bbea",name:"Activity2",result:"result3"}}]}},specVersion:"2.0",variables:{"1_arg1":"PATCH","1_arg2":"http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11","1_arg3":'{"requestor":"10206739","announcements":[{"message":"test announcement 1","relative_from":"start","relative_time_in_seconds":300}]}',"2_arg1":"60","3_arg1":"PATCH","3_arg2":"http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11","3_arg3":'{"requestor":"10206739","announcements":[{"message":"test announcement 2","relative_from":"start","relative_time_in_seconds":420}]}'}}],sent_at:"2023-09-04T08:59:31Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},method:"get",path:"/v1/workflow/{workflowid}",servers:[{url:"http://wfm.dev2.ar2"}],info:{title:"Workflow Management",version:"1.0.0",description:"API for workflow managment"},postman:{name:"Get workflow",description:{content:"API to retrieve workflow",type:"text/plain"},url:{path:["v1","workflow",":workflowid"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflowid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/wfe/Workflow API/workflow-management",custom_edit_url:null},sidebar:"wfe",previous:{title:"Get workflow designer",permalink:"/aoh-docs/docs/wfe/Workflow API/get-workflow-designer"},next:{title:"liveness",permalink:"/aoh-docs/docs/wfe/Workflow API/liveness"}},u={},k=[{value:"Get workflow",id:"get-workflow",level:2}],v={toc:k};function f(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-workflow"},"Get workflow"),(0,s.kt)("p",null,"API to retrieve workflow"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"20edce2b-97fa-459d-b38a-d2e2fce51069"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"OK")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"root"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"sequence"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"elements"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"activity"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"arguments",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))))))))),(0,s.kt)(m.Z,{collapsible:!1,name:"specVersion",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"variables"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"1_arg1",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"1_arg2",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"1_arg3",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"2_arg1",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"3_arg1",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"3_arg2",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"3_arg3",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "data": [\n    {\n      "root": {\n        "sequence": {\n          "elements": [\n            {\n              "activity": {\n                "arguments": [\n                  "string"\n                ],\n                "id": "string",\n                "name": "string",\n                "result": "string"\n              }\n            }\n          ]\n        }\n      },\n      "specVersion": "string",\n      "variables": {\n        "1_arg1": "string",\n        "1_arg2": "string",\n        "1_arg3": "string",\n        "2_arg1": "string",\n        "3_arg1": "string",\n        "3_arg2": "string",\n        "3_arg3": "string"\n      }\n    }\n  ],\n  "sent_at": "2023-09-04T08:59:31Z"\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "data": [\n    {\n      "root": {\n        "sequence": {\n          "elements": [\n            {\n              "activity": {\n                "arguments": [\n                  "1_arg1",\n                  "1_arg2",\n                  "1_arg3"\n                ],\n                "id": "eea8276b-7a89-4a03-b63d-6a76128e64bb",\n                "name": "Activity",\n                "result": "result1"\n              }\n            },\n            {\n              "activity": {\n                "arguments": [\n                  "2_arg1"\n                ],\n                "id": "f507b1de-5ad5-408e-a396-8f64120d8ee3",\n                "name": "Activity1",\n                "result": "result2"\n              }\n            },\n            {\n              "activity": {\n                "arguments": [\n                  "3_arg1",\n                  "3_arg2",\n                  "3_arg3"\n                ],\n                "id": "689442e1-acda-48e7-9ae7-6479f686bbea",\n                "name": "Activity2",\n                "result": "result3"\n              }\n            }\n          ]\n        }\n      },\n      "specVersion": "2.0",\n      "variables": {\n        "1_arg1": "PATCH",\n        "1_arg2": "http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11",\n        "1_arg3": "{\\"requestor\\":\\"10206739\\",\\"announcements\\":[{\\"message\\":\\"test announcement 1\\",\\"relative_from\\":\\"start\\",\\"relative_time_in_seconds\\":300}]}",\n        "2_arg1": "60",\n        "3_arg1": "PATCH",\n        "3_arg2": "http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11",\n        "3_arg3": "{\\"requestor\\":\\"10206739\\",\\"announcements\\":[{\\"message\\":\\"test announcement 2\\",\\"relative_from\\":\\"start\\",\\"relative_time_in_seconds\\":420}]}"\n      }\n    }\n  ],\n  "sent_at": "2023-09-04T08:59:31Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,s.kt)(d.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Service Unavailable")),(0,s.kt)("div",null,(0,s.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",null,(0,s.kt)("strong",null,"string")))))),(0,s.kt)(d.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:"service is not yet ready",language:"shell",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);
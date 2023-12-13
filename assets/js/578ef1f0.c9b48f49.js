"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[550],{27833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>y,toc:()=>g});var i=a(87462),n=(a(67294),a(3905)),l=a(70603),s=a(48147),r=a(61045),o=a(86776),d=a(69128),m=a(83329),c=(a(3186),a(18679));const p={id:"get-workflow-designer",title:"Get workflow designer",description:"API to retrieve workflow designer",sidebar_label:"Get workflow designer",hide_title:!0,hide_table_of_contents:!0,api:{tags:["workflow"],description:"API to retrieve workflow designer",parameters:[{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"20edce2b-97fa-459d-b38a-d2e2fce51069"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{cells:{type:"array",items:{type:"object",properties:{angle:{type:"number",example:0},attrs:{type:"object",properties:{background:{type:"object",properties:{fill:{type:"string"}}},data:{type:"object",properties:{activityOptionsString:{type:"string"},args:{type:"array",items:{type:"string"}},options:{type:"object",properties:{activityId:{type:"string"},disableEagerExecution:{type:"boolean"},heartbeatTimeout:{nullable:!0},retryPolicy:{type:"object",properties:{backoffCoefficient:{nullable:!0},initialInterval:{nullable:!0},maximumAttempt:{nullable:!0},maximumInterval:{nullable:!0},name:{type:"string"}}},retryPolicyString:{type:"string"},scheduleToCloseTimeout:{nullable:!0},startToCloseTimeout:{type:"number"},taskQueue:{type:"string"},useAdvancedRetryPolicy:{type:"boolean"},waitForCancellation:{nullable:!0}}},result:{type:"string"},useDetailedActivityOptions:{type:"boolean"}}},label:{type:"object",properties:{text:{type:"string"}}}}},condition:{type:"object",properties:{text:{type:"string"}}},id:{type:"string"},position:{type:"object",properties:{x:{type:"number"},y:{type:"number"}}},size:{type:"object",properties:{height:{type:"number"},width:{type:"number"}}},source:{type:"object",properties:{id:{type:"string"}}},target:{type:"object",properties:{id:{type:"string"}}},type:{type:"string"},z:{type:"number"}}}},name:{type:"string"},type:{type:"string"},workflowData:{type:"object",properties:{specVersion:{type:"string"},variables:{type:"array",items:{type:"object",properties:{key:{type:"string"},value:{type:"string"}}}}}}}}},sent_at:{type:"string"}}},example:{data:[{cells:[{angle:0,attrs:{},id:"3edb8623-0520-4395-89df-cadb8dd909ea",position:{x:370,y:265},size:{height:30,width:30},type:"wf.Start",z:6},{angle:0,attrs:{background:{fill:"#ffffff"},data:{activityOptionsString:"N/A",args:["2_arg1"],options:{activityId:"",disableEagerExecution:!1,heartbeatTimeout:null,retryPolicy:{backoffCoefficient:null,initialInterval:null,maximumAttempt:null,maximumInterval:null,name:""},retryPolicyString:"",scheduleToCloseTimeout:null,startToCloseTimeout:0,taskQueue:"",useAdvancedRetryPolicy:!1,waitForCancellation:null},result:"result2",useDetailedActivityOptions:!1},label:{text:"Activity1"}},id:"f507b1de-5ad5-408e-a396-8f64120d8ee3",position:{x:610,y:240},size:{height:80,width:80},type:"wf.Activity",z:17},{angle:0,attrs:{},id:"a01ee30c-717b-444a-83b1-4b0688e151c4",position:{x:900,y:265},size:{height:30,width:30},type:"wf.End",z:22},{angle:0,attrs:{background:{fill:"#ffffff"},data:{activityOptionsString:"N/A",args:["1_arg1","1_arg2","1_arg3"],options:{activityId:"",disableEagerExecution:!1,heartbeatTimeout:null,retryPolicy:{backoffCoefficient:null,initialInterval:null,maximumAttempt:null,maximumInterval:null,name:""},retryPolicyString:"",scheduleToCloseTimeout:null,startToCloseTimeout:0,taskQueue:"",useAdvancedRetryPolicy:!1,waitForCancellation:null},result:"result1",useDetailedActivityOptions:!1},label:{text:"Activity"}},id:"eea8276b-7a89-4a03-b63d-6a76128e64bb",position:{x:470,y:240},size:{height:80,width:80},type:"wf.Activity",z:26},{attrs:{},condition:{text:"true"},id:"7122311f-0f44-4fbc-a9d5-dc13a3a979f0",source:{id:"3edb8623-0520-4395-89df-cadb8dd909ea"},target:{id:"eea8276b-7a89-4a03-b63d-6a76128e64bb"},type:"wf.Flow",z:27},{attrs:{},condition:{text:"true"},id:"b6ee4d46-1417-4cd0-9e2d-91ce893758bd",source:{id:"eea8276b-7a89-4a03-b63d-6a76128e64bb"},target:{id:"f507b1de-5ad5-408e-a396-8f64120d8ee3"},type:"wf.Flow",z:27},{angle:0,attrs:{background:{fill:"#ffffff"},data:{activityOptionsString:"N/A",args:["3_arg1","3_arg2","3_arg3"],options:{activityId:"",disableEagerExecution:!1,heartbeatTimeout:null,retryPolicy:{backoffCoefficient:null,initialInterval:null,maximumAttempt:null,maximumInterval:null,name:""},retryPolicyString:"",scheduleToCloseTimeout:null,startToCloseTimeout:0,taskQueue:"",useAdvancedRetryPolicy:!1,waitForCancellation:null},result:"result3",useDetailedActivityOptions:!1},label:{text:"Activity2"}},id:"689442e1-acda-48e7-9ae7-6479f686bbea",position:{x:760,y:240},size:{height:80,width:80},type:"wf.Activity",z:28},{attrs:{},condition:{text:"true"},id:"5793c8a5-5687-4dc7-a13a-47394461c05c",source:{id:"f507b1de-5ad5-408e-a396-8f64120d8ee3"},target:{id:"689442e1-acda-48e7-9ae7-6479f686bbea"},type:"wf.Flow",z:29},{attrs:{},condition:{text:"true"},id:"8c1684d6-edf9-4bb5-9eff-8aa6f5c7ea1b",source:{id:"689442e1-acda-48e7-9ae7-6479f686bbea"},target:{id:"a01ee30c-717b-444a-83b1-4b0688e151c4"},type:"wf.Flow",z:29}],name:"Test",type:"bpmn",workflowData:{specVersion:"2.0",variables:[{key:"1_arg1",value:"PATCH"},{key:"1_arg2",value:"http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11"},{key:"1_arg3",value:'{"requestor":"10206739","announcements":[{"message":"test announcement 1","relative_from":"start","relative_time_in_seconds":300}]}'},{key:"2_arg1",value:"60"},{key:"3_arg1",value:"PATCH"},{key:"3_arg2",value:"http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11"},{key:"3_arg3",value:'{"requestor":"10206739","announcements":[{"message":"test announcement 2","relative_from":"start","relative_time_in_seconds":420}]}'}]}}],sent_at:"2023-09-04T08:59:51Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},method:"get",path:"/v1/designer/{workflowid}",servers:[{url:"http://wfm.dev2.ar2"}],info:{title:"Workflow Management",version:"1.0.0",description:"API for workflow managment"},postman:{name:"Get workflow designer",description:{content:"API to retrieve workflow designer",type:"text/plain"},url:{path:["v1","designer",":workflowid"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflowid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/wfe/Workflow API/workflow-management",custom_edit_url:null},u=void 0,y={unversionedId:"wfe/Workflow API/get-workflow-designer",id:"wfe/Workflow API/get-workflow-designer",title:"Get workflow designer",description:"API to retrieve workflow designer",source:"@site/docs/90_wfe/Workflow API/get-workflow-designer.api.mdx",sourceDirName:"90_wfe/Workflow API",slug:"/wfe/Workflow API/get-workflow-designer",permalink:"/aoh-docs/docs/wfe/Workflow API/get-workflow-designer",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-workflow-designer",title:"Get workflow designer",description:"API to retrieve workflow designer",sidebar_label:"Get workflow designer",hide_title:!0,hide_table_of_contents:!0,api:{tags:["workflow"],description:"API to retrieve workflow designer",parameters:[{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"20edce2b-97fa-459d-b38a-d2e2fce51069"}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{cells:{type:"array",items:{type:"object",properties:{angle:{type:"number",example:0},attrs:{type:"object",properties:{background:{type:"object",properties:{fill:{type:"string"}}},data:{type:"object",properties:{activityOptionsString:{type:"string"},args:{type:"array",items:{type:"string"}},options:{type:"object",properties:{activityId:{type:"string"},disableEagerExecution:{type:"boolean"},heartbeatTimeout:{nullable:!0},retryPolicy:{type:"object",properties:{backoffCoefficient:{nullable:!0},initialInterval:{nullable:!0},maximumAttempt:{nullable:!0},maximumInterval:{nullable:!0},name:{type:"string"}}},retryPolicyString:{type:"string"},scheduleToCloseTimeout:{nullable:!0},startToCloseTimeout:{type:"number"},taskQueue:{type:"string"},useAdvancedRetryPolicy:{type:"boolean"},waitForCancellation:{nullable:!0}}},result:{type:"string"},useDetailedActivityOptions:{type:"boolean"}}},label:{type:"object",properties:{text:{type:"string"}}}}},condition:{type:"object",properties:{text:{type:"string"}}},id:{type:"string"},position:{type:"object",properties:{x:{type:"number"},y:{type:"number"}}},size:{type:"object",properties:{height:{type:"number"},width:{type:"number"}}},source:{type:"object",properties:{id:{type:"string"}}},target:{type:"object",properties:{id:{type:"string"}}},type:{type:"string"},z:{type:"number"}}}},name:{type:"string"},type:{type:"string"},workflowData:{type:"object",properties:{specVersion:{type:"string"},variables:{type:"array",items:{type:"object",properties:{key:{type:"string"},value:{type:"string"}}}}}}}}},sent_at:{type:"string"}}},example:{data:[{cells:[{angle:0,attrs:{},id:"3edb8623-0520-4395-89df-cadb8dd909ea",position:{x:370,y:265},size:{height:30,width:30},type:"wf.Start",z:6},{angle:0,attrs:{background:{fill:"#ffffff"},data:{activityOptionsString:"N/A",args:["2_arg1"],options:{activityId:"",disableEagerExecution:!1,heartbeatTimeout:null,retryPolicy:{backoffCoefficient:null,initialInterval:null,maximumAttempt:null,maximumInterval:null,name:""},retryPolicyString:"",scheduleToCloseTimeout:null,startToCloseTimeout:0,taskQueue:"",useAdvancedRetryPolicy:!1,waitForCancellation:null},result:"result2",useDetailedActivityOptions:!1},label:{text:"Activity1"}},id:"f507b1de-5ad5-408e-a396-8f64120d8ee3",position:{x:610,y:240},size:{height:80,width:80},type:"wf.Activity",z:17},{angle:0,attrs:{},id:"a01ee30c-717b-444a-83b1-4b0688e151c4",position:{x:900,y:265},size:{height:30,width:30},type:"wf.End",z:22},{angle:0,attrs:{background:{fill:"#ffffff"},data:{activityOptionsString:"N/A",args:["1_arg1","1_arg2","1_arg3"],options:{activityId:"",disableEagerExecution:!1,heartbeatTimeout:null,retryPolicy:{backoffCoefficient:null,initialInterval:null,maximumAttempt:null,maximumInterval:null,name:""},retryPolicyString:"",scheduleToCloseTimeout:null,startToCloseTimeout:0,taskQueue:"",useAdvancedRetryPolicy:!1,waitForCancellation:null},result:"result1",useDetailedActivityOptions:!1},label:{text:"Activity"}},id:"eea8276b-7a89-4a03-b63d-6a76128e64bb",position:{x:470,y:240},size:{height:80,width:80},type:"wf.Activity",z:26},{attrs:{},condition:{text:"true"},id:"7122311f-0f44-4fbc-a9d5-dc13a3a979f0",source:{id:"3edb8623-0520-4395-89df-cadb8dd909ea"},target:{id:"eea8276b-7a89-4a03-b63d-6a76128e64bb"},type:"wf.Flow",z:27},{attrs:{},condition:{text:"true"},id:"b6ee4d46-1417-4cd0-9e2d-91ce893758bd",source:{id:"eea8276b-7a89-4a03-b63d-6a76128e64bb"},target:{id:"f507b1de-5ad5-408e-a396-8f64120d8ee3"},type:"wf.Flow",z:27},{angle:0,attrs:{background:{fill:"#ffffff"},data:{activityOptionsString:"N/A",args:["3_arg1","3_arg2","3_arg3"],options:{activityId:"",disableEagerExecution:!1,heartbeatTimeout:null,retryPolicy:{backoffCoefficient:null,initialInterval:null,maximumAttempt:null,maximumInterval:null,name:""},retryPolicyString:"",scheduleToCloseTimeout:null,startToCloseTimeout:0,taskQueue:"",useAdvancedRetryPolicy:!1,waitForCancellation:null},result:"result3",useDetailedActivityOptions:!1},label:{text:"Activity2"}},id:"689442e1-acda-48e7-9ae7-6479f686bbea",position:{x:760,y:240},size:{height:80,width:80},type:"wf.Activity",z:28},{attrs:{},condition:{text:"true"},id:"5793c8a5-5687-4dc7-a13a-47394461c05c",source:{id:"f507b1de-5ad5-408e-a396-8f64120d8ee3"},target:{id:"689442e1-acda-48e7-9ae7-6479f686bbea"},type:"wf.Flow",z:29},{attrs:{},condition:{text:"true"},id:"8c1684d6-edf9-4bb5-9eff-8aa6f5c7ea1b",source:{id:"689442e1-acda-48e7-9ae7-6479f686bbea"},target:{id:"a01ee30c-717b-444a-83b1-4b0688e151c4"},type:"wf.Flow",z:29}],name:"Test",type:"bpmn",workflowData:{specVersion:"2.0",variables:[{key:"1_arg1",value:"PATCH"},{key:"1_arg2",value:"http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11"},{key:"1_arg3",value:'{"requestor":"10206739","announcements":[{"message":"test announcement 1","relative_from":"start","relative_time_in_seconds":300}]}'},{key:"2_arg1",value:"60"},{key:"3_arg1",value:"PATCH"},{key:"3_arg2",value:"http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11"},{key:"3_arg3",value:'{"requestor":"10206739","announcements":[{"message":"test announcement 2","relative_from":"start","relative_time_in_seconds":420}]}'}]}}],sent_at:"2023-09-04T08:59:51Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},method:"get",path:"/v1/designer/{workflowid}",servers:[{url:"http://wfm.dev2.ar2"}],info:{title:"Workflow Management",version:"1.0.0",description:"API for workflow managment"},postman:{name:"Get workflow designer",description:{content:"API to retrieve workflow designer",type:"text/plain"},url:{path:["v1","designer",":workflowid"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"workflowid"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/wfe/Workflow API/workflow-management",custom_edit_url:null},sidebar:"wfe",previous:{title:"Get form template",permalink:"/aoh-docs/docs/wfe/Workflow API/get-form-template"},next:{title:"Get workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/get-workflow"}},f={},g=[{value:"Get workflow designer",id:"get-workflow-designer",level:2}],b={toc:g},v="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(v,(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"get-workflow-designer"},"Get workflow designer"),(0,n.kt)("p",null,"API to retrieve workflow designer"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(r.Z,{className:"paramsItem",param:{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"20edce2b-97fa-459d-b38a-d2e2fce51069"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(l.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"OK")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"data"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"cells"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"angle",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"attrs"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"background"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"fill",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"data"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"activityOptionsString",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"args",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"options"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"activityId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"disableEagerExecution",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"heartbeatTimeout",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"retryPolicy"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"backoffCoefficient",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"initialInterval",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"maximumAttempt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"maximumInterval",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!1,name:"retryPolicyString",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"scheduleToCloseTimeout",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"startToCloseTimeout",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"taskQueue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"useAdvancedRetryPolicy",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"waitForCancellation",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!1,name:"result",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"useDetailedActivityOptions",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"label"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"condition"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"text",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"position"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"x",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"y",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"size"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"height",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"width",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"source"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"target"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"z",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"workflowData"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"specVersion",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"variables"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"key",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,n.kt)(d.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "data": [\n    {\n      "cells": [\n        {\n          "angle": 0,\n          "attrs": {\n            "background": {\n              "fill": "string"\n            },\n            "data": {\n              "activityOptionsString": "string",\n              "args": [\n                "string"\n              ],\n              "options": {\n                "activityId": "string",\n                "disableEagerExecution": true,\n                "retryPolicy": {\n                  "name": "string"\n                },\n                "retryPolicyString": "string",\n                "startToCloseTimeout": 0,\n                "taskQueue": "string",\n                "useAdvancedRetryPolicy": true\n              },\n              "result": "string",\n              "useDetailedActivityOptions": true\n            },\n            "label": {\n              "text": "string"\n            }\n          },\n          "condition": {\n            "text": "string"\n          },\n          "id": "string",\n          "position": {\n            "x": 0,\n            "y": 0\n          },\n          "size": {\n            "height": 0,\n            "width": 0\n          },\n          "source": {\n            "id": "string"\n          },\n          "target": {\n            "id": "string"\n          },\n          "type": "string",\n          "z": 0\n        }\n      ],\n      "name": "string",\n      "type": "string",\n      "workflowData": {\n        "specVersion": "string",\n        "variables": [\n          {\n            "key": "string",\n            "value": "string"\n          }\n        ]\n      }\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "data": [\n    {\n      "cells": [\n        {\n          "angle": 0,\n          "attrs": {},\n          "id": "3edb8623-0520-4395-89df-cadb8dd909ea",\n          "position": {\n            "x": 370,\n            "y": 265\n          },\n          "size": {\n            "height": 30,\n            "width": 30\n          },\n          "type": "wf.Start",\n          "z": 6\n        },\n        {\n          "angle": 0,\n          "attrs": {\n            "background": {\n              "fill": "#ffffff"\n            },\n            "data": {\n              "activityOptionsString": "N/A",\n              "args": [\n                "2_arg1"\n              ],\n              "options": {\n                "activityId": "",\n                "disableEagerExecution": false,\n                "heartbeatTimeout": null,\n                "retryPolicy": {\n                  "backoffCoefficient": null,\n                  "initialInterval": null,\n                  "maximumAttempt": null,\n                  "maximumInterval": null,\n                  "name": ""\n                },\n                "retryPolicyString": "",\n                "scheduleToCloseTimeout": null,\n                "startToCloseTimeout": 0,\n                "taskQueue": "",\n                "useAdvancedRetryPolicy": false,\n                "waitForCancellation": null\n              },\n              "result": "result2",\n              "useDetailedActivityOptions": false\n            },\n            "label": {\n              "text": "Activity1"\n            }\n          },\n          "id": "f507b1de-5ad5-408e-a396-8f64120d8ee3",\n          "position": {\n            "x": 610,\n            "y": 240\n          },\n          "size": {\n            "height": 80,\n            "width": 80\n          },\n          "type": "wf.Activity",\n          "z": 17\n        },\n        {\n          "angle": 0,\n          "attrs": {},\n          "id": "a01ee30c-717b-444a-83b1-4b0688e151c4",\n          "position": {\n            "x": 900,\n            "y": 265\n          },\n          "size": {\n            "height": 30,\n            "width": 30\n          },\n          "type": "wf.End",\n          "z": 22\n        },\n        {\n          "angle": 0,\n          "attrs": {\n            "background": {\n              "fill": "#ffffff"\n            },\n            "data": {\n              "activityOptionsString": "N/A",\n              "args": [\n                "1_arg1",\n                "1_arg2",\n                "1_arg3"\n              ],\n              "options": {\n                "activityId": "",\n                "disableEagerExecution": false,\n                "heartbeatTimeout": null,\n                "retryPolicy": {\n                  "backoffCoefficient": null,\n                  "initialInterval": null,\n                  "maximumAttempt": null,\n                  "maximumInterval": null,\n                  "name": ""\n                },\n                "retryPolicyString": "",\n                "scheduleToCloseTimeout": null,\n                "startToCloseTimeout": 0,\n                "taskQueue": "",\n                "useAdvancedRetryPolicy": false,\n                "waitForCancellation": null\n              },\n              "result": "result1",\n              "useDetailedActivityOptions": false\n            },\n            "label": {\n              "text": "Activity"\n            }\n          },\n          "id": "eea8276b-7a89-4a03-b63d-6a76128e64bb",\n          "position": {\n            "x": 470,\n            "y": 240\n          },\n          "size": {\n            "height": 80,\n            "width": 80\n          },\n          "type": "wf.Activity",\n          "z": 26\n        },\n        {\n          "attrs": {},\n          "condition": {\n            "text": "true"\n          },\n          "id": "7122311f-0f44-4fbc-a9d5-dc13a3a979f0",\n          "source": {\n            "id": "3edb8623-0520-4395-89df-cadb8dd909ea"\n          },\n          "target": {\n            "id": "eea8276b-7a89-4a03-b63d-6a76128e64bb"\n          },\n          "type": "wf.Flow",\n          "z": 27\n        },\n        {\n          "attrs": {},\n          "condition": {\n            "text": "true"\n          },\n          "id": "b6ee4d46-1417-4cd0-9e2d-91ce893758bd",\n          "source": {\n            "id": "eea8276b-7a89-4a03-b63d-6a76128e64bb"\n          },\n          "target": {\n            "id": "f507b1de-5ad5-408e-a396-8f64120d8ee3"\n          },\n          "type": "wf.Flow",\n          "z": 27\n        },\n        {\n          "angle": 0,\n          "attrs": {\n            "background": {\n              "fill": "#ffffff"\n            },\n            "data": {\n              "activityOptionsString": "N/A",\n              "args": [\n                "3_arg1",\n                "3_arg2",\n                "3_arg3"\n              ],\n              "options": {\n                "activityId": "",\n                "disableEagerExecution": false,\n                "heartbeatTimeout": null,\n                "retryPolicy": {\n                  "backoffCoefficient": null,\n                  "initialInterval": null,\n                  "maximumAttempt": null,\n                  "maximumInterval": null,\n                  "name": ""\n                },\n                "retryPolicyString": "",\n                "scheduleToCloseTimeout": null,\n                "startToCloseTimeout": 0,\n                "taskQueue": "",\n                "useAdvancedRetryPolicy": false,\n                "waitForCancellation": null\n              },\n              "result": "result3",\n              "useDetailedActivityOptions": false\n            },\n            "label": {\n              "text": "Activity2"\n            }\n          },\n          "id": "689442e1-acda-48e7-9ae7-6479f686bbea",\n          "position": {\n            "x": 760,\n            "y": 240\n          },\n          "size": {\n            "height": 80,\n            "width": 80\n          },\n          "type": "wf.Activity",\n          "z": 28\n        },\n        {\n          "attrs": {},\n          "condition": {\n            "text": "true"\n          },\n          "id": "5793c8a5-5687-4dc7-a13a-47394461c05c",\n          "source": {\n            "id": "f507b1de-5ad5-408e-a396-8f64120d8ee3"\n          },\n          "target": {\n            "id": "689442e1-acda-48e7-9ae7-6479f686bbea"\n          },\n          "type": "wf.Flow",\n          "z": 29\n        },\n        {\n          "attrs": {},\n          "condition": {\n            "text": "true"\n          },\n          "id": "8c1684d6-edf9-4bb5-9eff-8aa6f5c7ea1b",\n          "source": {\n            "id": "689442e1-acda-48e7-9ae7-6479f686bbea"\n          },\n          "target": {\n            "id": "a01ee30c-717b-444a-83b1-4b0688e151c4"\n          },\n          "type": "wf.Flow",\n          "z": 29\n        }\n      ],\n      "name": "Test",\n      "type": "bpmn",\n      "workflowData": {\n        "specVersion": "2.0",\n        "variables": [\n          {\n            "key": "1_arg1",\n            "value": "PATCH"\n          },\n          {\n            "key": "1_arg2",\n            "value": "http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11"\n          },\n          {\n            "key": "1_arg3",\n            "value": "{\\"requestor\\":\\"10206739\\",\\"announcements\\":[{\\"message\\":\\"test announcement 1\\",\\"relative_from\\":\\"start\\",\\"relative_time_in_seconds\\":300}]}"\n          },\n          {\n            "key": "2_arg1",\n            "value": "60"\n          },\n          {\n            "key": "3_arg1",\n            "value": "PATCH"\n          },\n          {\n            "key": "3_arg2",\n            "value": "http://app-room-mgmt.common-ucs:7070/rooms/a9f42b88-5f51-4262-95c4-4e9edb464b11"\n          },\n          {\n            "key": "3_arg3",\n            "value": "{\\"requestor\\":\\"10206739\\",\\"announcements\\":[{\\"message\\":\\"test announcement 2\\",\\"relative_from\\":\\"start\\",\\"relative_time_in_seconds\\":420}]}"\n          }\n        ]\n      }\n    }\n  ],\n  "sent_at": "2023-09-04T08:59:51Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Internal Server Error")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"errors"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,n.kt)(c.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Service Unavailable")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",null,(0,n.kt)("strong",null,"string")))))),(0,n.kt)(c.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:"service is not yet ready",language:"shell",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);
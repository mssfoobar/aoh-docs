"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[538],{58349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>v});var s=a(87462),i=(a(67294),a(3905)),l=a(70603),r=a(48147),o=(a(61045),a(86776)),m=a(69128),n=a(83329),p=(a(3186),a(18679));const d={id:"save-form-template",title:"Save form template",description:"API to save form template. Saved form template are editiable.",sidebar_label:"Save form template",hide_title:!0,hide_table_of_contents:!0,api:{tags:["form"],description:"API to save form template. Saved form template are editiable.",requestBody:{content:{"application/json":{schema:{type:"object",properties:{name:{type:"string"},form_json:{type:"array",items:{type:"object",properties:{id:{type:"string"},type:{type:"string"},exporter:{type:"object",properties:{name:{type:"string"},version:{type:"string"}}},components:{type:"array",items:{type:"object",properties:{id:{type:"string"},key:{type:"string"},type:{type:"string"},label:{type:"string"},layout:{type:"object",properties:{row:{type:"string"},columns:{type:"string"}}},values:{type:"array",items:{type:"object",properties:{label:{type:"string"},value:{type:"string"}}}}}}},schemaVersion:{type:"number"}}}}}},example:{name:"TestForm",form_json:{id:"Form_1hf6nou",type:"default",exporter:{name:"form-js (https://demo.bpmn.io)",version:"1.4.0"},components:[{id:"Field_1ktx3tl",key:"checklist_482e3j",type:"checklist",label:"Checklist",layout:{row:"Row_19m5v7b",columns:null},values:[{label:"checkbox1",value:"checkbox1"}]}],schemaVersion:12}}}}},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},name:{type:"string"},form_json:{type:"array",items:{type:"object",properties:{id:{type:"string"},type:{type:"string"},exporter:{type:"object",properties:{name:{type:"string"},version:{type:"string"}}},components:{type:"array",items:{type:"object",properties:{id:{type:"string"},key:{type:"string"},type:{type:"string"},label:{type:"string"},layout:{type:"object",properties:{row:{type:"string"},columns:{type:"string"}}},values:{type:"array",items:{type:"object",properties:{label:{type:"string"},value:{type:"string"}}}}}}},schemaVersion:{type:"number"}}}},components_key:{type:"array",items:{type:"string"}}}}},sent_at:{type:"string"}}},example:{data:[{id:"d27a7e49-df9f-462a-9bbf-15fc7926fc3f",name:"TestForm",form_json:[{id:"Form_1hf6nou",type:"default",exporter:{name:"form-js (https://demo.bpmn.io)",version:"1.4.0"},components:[{id:"Field_1ktx3tl",key:"checklist_482e3j",type:"checklist",label:"Checklist",layout:{row:"Row_19m5v7b",columns:null},values:[{label:"checkbox1",value:"checkbox1"}]}],schemaVersion:12}],component_keys:["checklist_xmj6qe"]}],sent_at:"2023-09-04T08:59:51Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},method:"post",path:"/v1/form/save",servers:[{url:"http://wfm.dev2.ar2"}],jsonRequestBodyExample:{name:"string",form_json:[{id:"string",type:"string",exporter:{name:"string",version:"string"},components:[{id:"string",key:"string",type:"string",label:"string",layout:{row:"string",columns:"string"},values:[{label:"string",value:"string"}]}],schemaVersion:0}]},info:{title:"Workflow Management",version:"1.0.0",description:"API for workflow managment"},postman:{name:"Save form template",description:{content:"API to save form template. Saved form template are editiable.",type:"text/plain"},url:{path:["v1","form","save"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/wfe/Workflow API/workflow-management",custom_edit_url:null},c=void 0,y={unversionedId:"wfe/Workflow API/save-form-template",id:"wfe/Workflow API/save-form-template",title:"Save form template",description:"API to save form template. Saved form template are editiable.",source:"@site/docs/90_wfe/Workflow API/save-form-template.api.mdx",sourceDirName:"90_wfe/Workflow API",slug:"/wfe/Workflow API/save-form-template",permalink:"/aoh-docs/docs/wfe/Workflow API/save-form-template",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"save-form-template",title:"Save form template",description:"API to save form template. Saved form template are editiable.",sidebar_label:"Save form template",hide_title:!0,hide_table_of_contents:!0,api:{tags:["form"],description:"API to save form template. Saved form template are editiable.",requestBody:{content:{"application/json":{schema:{type:"object",properties:{name:{type:"string"},form_json:{type:"array",items:{type:"object",properties:{id:{type:"string"},type:{type:"string"},exporter:{type:"object",properties:{name:{type:"string"},version:{type:"string"}}},components:{type:"array",items:{type:"object",properties:{id:{type:"string"},key:{type:"string"},type:{type:"string"},label:{type:"string"},layout:{type:"object",properties:{row:{type:"string"},columns:{type:"string"}}},values:{type:"array",items:{type:"object",properties:{label:{type:"string"},value:{type:"string"}}}}}}},schemaVersion:{type:"number"}}}}}},example:{name:"TestForm",form_json:{id:"Form_1hf6nou",type:"default",exporter:{name:"form-js (https://demo.bpmn.io)",version:"1.4.0"},components:[{id:"Field_1ktx3tl",key:"checklist_482e3j",type:"checklist",label:"Checklist",layout:{row:"Row_19m5v7b",columns:null},values:[{label:"checkbox1",value:"checkbox1"}]}],schemaVersion:12}}}}},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",properties:{data:{type:"array",items:{type:"object",properties:{id:{type:"string"},name:{type:"string"},form_json:{type:"array",items:{type:"object",properties:{id:{type:"string"},type:{type:"string"},exporter:{type:"object",properties:{name:{type:"string"},version:{type:"string"}}},components:{type:"array",items:{type:"object",properties:{id:{type:"string"},key:{type:"string"},type:{type:"string"},label:{type:"string"},layout:{type:"object",properties:{row:{type:"string"},columns:{type:"string"}}},values:{type:"array",items:{type:"object",properties:{label:{type:"string"},value:{type:"string"}}}}}}},schemaVersion:{type:"number"}}}},components_key:{type:"array",items:{type:"string"}}}}},sent_at:{type:"string"}}},example:{data:[{id:"d27a7e49-df9f-462a-9bbf-15fc7926fc3f",name:"TestForm",form_json:[{id:"Form_1hf6nou",type:"default",exporter:{name:"form-js (https://demo.bpmn.io)",version:"1.4.0"},components:[{id:"Field_1ktx3tl",key:"checklist_482e3j",type:"checklist",label:"Checklist",layout:{row:"Row_19m5v7b",columns:null},values:[{label:"checkbox1",value:"checkbox1"}]}],schemaVersion:12}],component_keys:["checklist_xmj6qe"]}],sent_at:"2023-09-04T08:59:51Z"}}}},500:{description:"Internal Server Error",content:{"application/json":{schema:{type:"object",properties:{sent_at:{type:"string"},errors:{type:"array",items:{type:"object",properties:{message:{type:"string"}}}}}},example:{sent_at:"2023-06-15T18:43:30Z",errors:[{message:"service is not yet ready"}]}}}},503:{description:"Service Unavailable",content:{"text/plain":{schema:{type:"string"},examples:{response:{value:"service is not yet ready"}}}}}},method:"post",path:"/v1/form/save",servers:[{url:"http://wfm.dev2.ar2"}],jsonRequestBodyExample:{name:"string",form_json:[{id:"string",type:"string",exporter:{name:"string",version:"string"},components:[{id:"string",key:"string",type:"string",label:"string",layout:{row:"string",columns:"string"},values:[{label:"string",value:"string"}]}],schemaVersion:0}]},info:{title:"Workflow Management",version:"1.0.0",description:"API for workflow managment"},postman:{name:"Save form template",description:{content:"API to save form template. Saved form template are editiable.",type:"text/plain"},url:{path:["v1","form","save"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/wfe/Workflow API/workflow-management",custom_edit_url:null},sidebar:"wfe",previous:{title:"readiness",permalink:"/aoh-docs/docs/wfe/Workflow API/readiness"},next:{title:"Save workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/save-workflow"}},u={},v=[{value:"Save form template",id:"save-form-template",level:2}],k={toc:v};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"save-form-template"},"Save form template"),(0,i.kt)("p",null,"API to save form template. Saved form template are editiable."),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"form_json"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"exporter"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"components"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"key",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"label",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"layout"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"row",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"columns",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"values"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"label",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(m.Z,{collapsible:!1,name:"schemaVersion",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,i.kt)("div",null,(0,i.kt)(l.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(n.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"form_json"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"exporter"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"version",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"components"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"key",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"label",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"layout"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"row",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"columns",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"values"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"label",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"value",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(m.Z,{collapsible:!1,name:"schemaVersion",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"number",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!1,name:"components_key",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "name": "string",\n      "form_json": [\n        {\n          "id": "string",\n          "type": "string",\n          "exporter": {\n            "name": "string",\n            "version": "string"\n          },\n          "components": [\n            {\n              "id": "string",\n              "key": "string",\n              "type": "string",\n              "label": "string",\n              "layout": {\n                "row": "string",\n                "columns": "string"\n              },\n              "values": [\n                {\n                  "label": "string",\n                  "value": "string"\n                }\n              ]\n            }\n          ],\n          "schemaVersion": 0\n        }\n      ],\n      "components_key": [\n        "string"\n      ]\n    }\n  ],\n  "sent_at": "string"\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "data": [\n    {\n      "id": "d27a7e49-df9f-462a-9bbf-15fc7926fc3f",\n      "name": "TestForm",\n      "form_json": [\n        {\n          "id": "Form_1hf6nou",\n          "type": "default",\n          "exporter": {\n            "name": "form-js (https://demo.bpmn.io)",\n            "version": "1.4.0"\n          },\n          "components": [\n            {\n              "id": "Field_1ktx3tl",\n              "key": "checklist_482e3j",\n              "type": "checklist",\n              "label": "Checklist",\n              "layout": {\n                "row": "Row_19m5v7b",\n                "columns": null\n              },\n              "values": [\n                {\n                  "label": "checkbox1",\n                  "value": "checkbox1"\n                }\n              ]\n            }\n          ],\n          "schemaVersion": 12\n        }\n      ],\n      "component_keys": [\n        "checklist_xmj6qe"\n      ]\n    }\n  ],\n  "sent_at": "2023-09-04T08:59:51Z"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(n.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"sent_at",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"errors"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})),(0,i.kt)(p.Z,{label:"Example",value:"Example",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"503",value:"503",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Service Unavailable")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"text/plain",value:"text/plain",mdxType:"TabItem"},(0,i.kt)(n.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))),(0,i.kt)(p.Z,{label:"Response",value:"Response",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:"service is not yet ready",language:"shell",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);
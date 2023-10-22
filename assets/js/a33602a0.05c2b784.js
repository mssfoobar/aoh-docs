"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[8698],{41128:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>y});var o=t(87462),s=(t(67294),t(3905)),i=t(70603),l=t(48147),r=t(61045),n=(t(86776),t(69128)),d=(t(83329),t(3186),t(18679));const p={id:"start-playback",title:"Start playback",description:"API to start playback",sidebar_label:"Start playback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["playback"],description:"API to start playback",parameters:[{name:"playbackid",in:"path",description:"ID of playback room",required:!0,schema:{type:"string"},example:"df91094f-1fdd-4be6-a8c6-e4038ccc87f1"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{speed:{description:"speed0: double rounded down to 1 decimal place  \nspeed1: fast motion is > 1.0, slow motion is < 1.0  \nspeed2: default is 1.0 (as recorded speed)\n",type:"integer"},playfrom:{description:"number of seconds from start of recording, default is play from current state",type:"integer"},chat:{description:"boolean to playback chat, default is true",type:"boolean"},video:{description:"boolean to playback video, default is true",type:"boolean"},audio:{description:"boolean to playback audio, default is true",type:"boolean"}},example:{speed:1,playfrom:0,chat:!0,video:!0,audio:!0}}}}},responses:{200:{description:"successful operation"},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"post",path:"/v1/playback/{playbackid}/play",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{speed:1,playfrom:0,chat:!0,video:!0,audio:!0},info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"Start playback",description:{content:"API to start playback",type:"text/plain"},url:{path:["v1","playback",":playbackid","play"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of playback room",type:"text/plain"},type:"any",value:"",key:"playbackid"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/ucs/Room Management API/room-management",custom_edit_url:null},c=void 0,m={unversionedId:"ucs/Room Management API/start-playback",id:"ucs/Room Management API/start-playback",title:"Start playback",description:"API to start playback",source:"@site/docs/ucs/Room Management API/start-playback.api.mdx",sourceDirName:"ucs/Room Management API",slug:"/ucs/Room Management API/start-playback",permalink:"/aoh-docs/docs/ucs/Room Management API/start-playback",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"start-playback",title:"Start playback",description:"API to start playback",sidebar_label:"Start playback",hide_title:!0,hide_table_of_contents:!0,api:{tags:["playback"],description:"API to start playback",parameters:[{name:"playbackid",in:"path",description:"ID of playback room",required:!0,schema:{type:"string"},example:"df91094f-1fdd-4be6-a8c6-e4038ccc87f1"}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{speed:{description:"speed0: double rounded down to 1 decimal place  \nspeed1: fast motion is > 1.0, slow motion is < 1.0  \nspeed2: default is 1.0 (as recorded speed)\n",type:"integer"},playfrom:{description:"number of seconds from start of recording, default is play from current state",type:"integer"},chat:{description:"boolean to playback chat, default is true",type:"boolean"},video:{description:"boolean to playback video, default is true",type:"boolean"},audio:{description:"boolean to playback audio, default is true",type:"boolean"}},example:{speed:1,playfrom:0,chat:!0,video:!0,audio:!0}}}}},responses:{200:{description:"successful operation"},400:{description:"Bad Request"},500:{description:"Internal Server Error"}},method:"post",path:"/v1/playback/{playbackid}/play",servers:[{url:"http://app-room-mgmt.dev2.ar2",description:"Default server"}],jsonRequestBodyExample:{speed:1,playfrom:0,chat:!0,video:!0,audio:!0},info:{title:"Room Management",version:"1.0.0",description:"API for room management HTTP server"},postman:{name:"Start playback",description:{content:"API to start playback",type:"text/plain"},url:{path:["v1","playback",":playbackid","play"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of playback room",type:"text/plain"},type:"any",value:"",key:"playbackid"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/ucs/Room Management API/room-management",custom_edit_url:null},sidebar:"ucs",previous:{title:"Server readiness",permalink:"/aoh-docs/docs/ucs/Room Management API/server-readiness"},next:{title:"Stop playback",permalink:"/aoh-docs/docs/ucs/Room Management API/stop-playback"}},u={},y=[{value:"Start playback",id:"start-playback",level:2}],b={toc:y};function k(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,o.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"start-playback"},"Start playback"),(0,s.kt)("p",null,"API to start playback"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"playbackid",in:"path",description:"ID of playback room",required:!0,schema:{type:"string"},example:"df91094f-1fdd-4be6-a8c6-e4038ccc87f1"},mdxType:"ParamsItem"})))),(0,s.kt)(l.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"speed",required:!1,deprecated:void 0,schemaDescription:"speed0: double rounded down to 1 decimal place  \nspeed1: fast motion is > 1.0, slow motion is < 1.0  \nspeed2: default is 1.0 (as recorded speed)\n",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"playfrom",required:!1,deprecated:void 0,schemaDescription:"number of seconds from start of recording, default is play from current state",schemaName:"integer",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"chat",required:!1,deprecated:void 0,schemaDescription:"boolean to playback chat, default is true",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"video",required:!1,deprecated:void 0,schemaDescription:"boolean to playback video, default is true",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"audio",required:!1,deprecated:void 0,schemaDescription:"boolean to playback audio, default is true",schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null)),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Bad Request")),(0,s.kt)("div",null)),(0,s.kt)(d.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Internal Server Error")),(0,s.kt)("div",null)))))}k.isMDXComponent=!0}}]);
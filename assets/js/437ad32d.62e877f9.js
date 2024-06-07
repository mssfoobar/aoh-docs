"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[3061],{53076:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>_,default:()=>P,frontMatter:()=>v,metadata:()=>N,toc:()=>w});var i=a(74848),n=a(28453),l=a(77233),t=a.n(l),r=(a(22661),a(80811)),d=a.n(r),m=(a(41871),a(24791)),c=a.n(m),o=a(35654),p=a.n(o),h=a(69015),x=a.n(h),u=a(84919),j=a.n(u),g=a(84664),y=a.n(g),f=(a(84466),a(85225)),b=(a(71156),a(7227));const v={id:"update-incident-by-id",title:"Update incident by id",description:"Update incident by id",sidebar_label:"Update incident by id",hide_title:!0,hide_table_of_contents:!0,api:"eJztV22P2zYM/isG92VD7UR+Ser42/V2wA7DuuJeMKDX4EDbzEWtLbmSkmsQ+L8Psp3ESXz3YSj2AiwfEoemKPIh+YjaQoUKSzKkNCQPWxBYEiTARcZzEobn4AIXkECFZgku6GxJJUKyBbOprKY2iosnqF1Q9HXFFeWQGLUiF+gbllVhda7fX3oBC0IWh77HGPOhnrf6pM07mW+svUwKQ8LYR6yqgmdouBTjz1oKKzvbWKafKTPgQqVkRcpw0o0ZNPQk1WbQxUyWJQmjX3gpDGZm8F1OOlO8sh4Nvuf5oLiQbRSDLyvFpeKm76lYlSmpFsxKKkP5YzociTZoVkNx1HUP+T4cMAkCDJAxb5HFkReFxDwkP/VynOZxFqd56iP0MQKz5Nrh2kGnE0IPJXgznTh+EEaT6dsYTiACQ9pqW1wG0t9HBn7wAy+M3NvWlivk85IUOdoo6IMUnYACqUzhAAS8v/rDRt9gpyspdFsPAWP259i733/tIvkOBZej6WuhUrixkRsq9T9VrpkitDjhf72aXVhV+WuhPEv1ZVHI50dDZVWgocdB55u60CTMsJ2TpmlT+vB3dk8/Y2CbxWOxF/p3fpSEfjKZjeIomr2dvWEsYexf0m3HyTnyepKwaTKJR7N4xuKD18PZAgrCdBpkvpelPvOiRYzeLF4E3nQR4yRDmoXRpDky9hkc2uxjl+ZoqOPfYe7ctAfO92v9lwvKBVJKKv3XiaEkrfGJhmv5pF5PYZl6/uTOj5MoTEL2EQ7OPPTsAhdrLHjudOewk9qDuJ631idDIF4LQ0pg4dySWpNyrqzZ/+Fs4dSk1jwj2/FCGmdDxlGER5CG55DedqvuBa6RF5gWdAyooW9mXBXIh6HsIdQG0ES7OwHt8xqL1ev+dQgcO3bftLazGwSddOM0w2BJZinzdiDM7ETYDIYJjNf+eKesx9vDAFmPLW80BdNCtlIFJLA0pkrGY17qUU7rYIQqOKO1n2mBq8I47eqGAWxN3RwGx6vBSacD5YiNe7IdBe9Fx7vuxQ037f/1OHQvO/AlO+XLvc6eMnvnq1jIJofctPPxDuTfUOATWZed2402VIILFrd2W3/ERufcf/Hh2llI5bxixB7PUpsSmxrqRvyXEjw8HPTK0B7KNoXbLvUPsPabW0KXfHAhObo/wNyFpdTGqm63KWq6V0VdW/HXFdmMPcxdWKPiTfnbGsm5ts85JAssNJ15tW8Q+PGmu3b85IA77O2OMYTli107gAtfaHN81anntQtLwpxU40WrcNnu5d1ZMwcDZ0xXu7sVF1lGlXlVd97rpA8Xd5e/gAtpdxMqZW4XKXwGt/lO4BN8sh7LBoC2xa18CwWKp1VLQK1h+/kT2oiaZQ==",sidebar_class_name:"patch api-method",info_path:"docs/40_modules/60_wfe/Incident Management System API/incident-management-system",custom_edit_url:null,hide_send_button:!0},_=void 0,N={id:"modules/wfe/Incident Management System API/update-incident-by-id",title:"Update incident by id",description:"Update incident by id",source:"@site/docs/40_modules/60_wfe/Incident Management System API/update-incident-by-id.api.mdx",sourceDirName:"40_modules/60_wfe/Incident Management System API",slug:"/modules/wfe/Incident Management System API/update-incident-by-id",permalink:"/aoh-docs/docs/modules/wfe/Incident Management System API/update-incident-by-id",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-incident-by-id",title:"Update incident by id",description:"Update incident by id",sidebar_label:"Update incident by id",hide_title:!0,hide_table_of_contents:!0,api:"eJztV22P2zYM/isG92VD7UR+Ser42/V2wA7DuuJeMKDX4EDbzEWtLbmSkmsQ+L8Psp3ESXz3YSj2AiwfEoemKPIh+YjaQoUKSzKkNCQPWxBYEiTARcZzEobn4AIXkECFZgku6GxJJUKyBbOprKY2iosnqF1Q9HXFFeWQGLUiF+gbllVhda7fX3oBC0IWh77HGPOhnrf6pM07mW+svUwKQ8LYR6yqgmdouBTjz1oKKzvbWKafKTPgQqVkRcpw0o0ZNPQk1WbQxUyWJQmjX3gpDGZm8F1OOlO8sh4Nvuf5oLiQbRSDLyvFpeKm76lYlSmpFsxKKkP5YzociTZoVkNx1HUP+T4cMAkCDJAxb5HFkReFxDwkP/VynOZxFqd56iP0MQKz5Nrh2kGnE0IPJXgznTh+EEaT6dsYTiACQ9pqW1wG0t9HBn7wAy+M3NvWlivk85IUOdoo6IMUnYACqUzhAAS8v/rDRt9gpyspdFsPAWP259i733/tIvkOBZej6WuhUrixkRsq9T9VrpkitDjhf72aXVhV+WuhPEv1ZVHI50dDZVWgocdB55u60CTMsJ2TpmlT+vB3dk8/Y2CbxWOxF/p3fpSEfjKZjeIomr2dvWEsYexf0m3HyTnyepKwaTKJR7N4xuKD18PZAgrCdBpkvpelPvOiRYzeLF4E3nQR4yRDmoXRpDky9hkc2uxjl+ZoqOPfYe7ctAfO92v9lwvKBVJKKv3XiaEkrfGJhmv5pF5PYZl6/uTOj5MoTEL2EQ7OPPTsAhdrLHjudOewk9qDuJ631idDIF4LQ0pg4dySWpNyrqzZ/+Fs4dSk1jwj2/FCGmdDxlGER5CG55DedqvuBa6RF5gWdAyooW9mXBXIh6HsIdQG0ES7OwHt8xqL1ev+dQgcO3bftLazGwSddOM0w2BJZinzdiDM7ETYDIYJjNf+eKesx9vDAFmPLW80BdNCtlIFJLA0pkrGY17qUU7rYIQqOKO1n2mBq8I47eqGAWxN3RwGx6vBSacD5YiNe7IdBe9Fx7vuxQ037f/1OHQvO/AlO+XLvc6eMnvnq1jIJofctPPxDuTfUOATWZed2402VIILFrd2W3/ERufcf/Hh2llI5bxixB7PUpsSmxrqRvyXEjw8HPTK0B7KNoXbLvUPsPabW0KXfHAhObo/wNyFpdTGqm63KWq6V0VdW/HXFdmMPcxdWKPiTfnbGsm5ts85JAssNJ15tW8Q+PGmu3b85IA77O2OMYTli107gAtfaHN81anntQtLwpxU40WrcNnu5d1ZMwcDZ0xXu7sVF1lGlXlVd97rpA8Xd5e/gAtpdxMqZW4XKXwGt/lO4BN8sh7LBoC2xa18CwWKp1VLQK1h+/kT2oiaZQ==",sidebar_class_name:"patch api-method",info_path:"docs/40_modules/60_wfe/Incident Management System API/incident-management-system",custom_edit_url:null,hide_send_button:!0},sidebar:"wfe",previous:{title:"Request incident updates",permalink:"/aoh-docs/docs/modules/wfe/Incident Management System API/request-incident-updates"},next:{title:"Introduction",permalink:"/aoh-docs/docs/modules/wfe/Workflow API/workflow-management"}},q={},w=[];function k(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Update incident by id"}),"\n",(0,i.jsx)(d(),{method:"patch",path:"/v1/incidents/{incidentid}/"}),"\n",(0,i.jsx)(s.p,{children:"Update incident by id"}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"incidentid",in:"path",schema:{type:"string"},required:!0,example:"INC-20230831-0001"}})})})]}),"\n",(0,i.jsx)(c(),{className:"openapi-tabs__mime",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"category",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"comments",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"contact",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"location",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"priority",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,i.jsx)(j(),{collapsible:!1,name:"reported_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"data"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"category",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"comments",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"contact",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"location",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"priority",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,i.jsx)(j(),{collapsible:!1,name:"reported_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"workflow_template_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(x(),{responseExample:'{\n  "data": [\n    {\n      "category": "string",\n      "comments": "string",\n      "contact": "string",\n      "created_at": "string",\n      "description": "string",\n      "id": "string",\n      "location": "string",\n      "priority": 0,\n      "reported_by": "string",\n      "status": "string",\n      "updated_at": "string",\n      "workflow_template_id": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,i.jsx)(b.default,{label:"Example",value:"Example",children:(0,i.jsx)(x(),{responseExample:'{\n  "data": [\n    {\n      "category": "522a2a00-fc84-43e0-ae1b-da6d8c8bdb1a",\n      "comments": "this is a comment",\n      "contact": "+65 12345678",\n      "created_at": "2023-08-31T14:31:59.844979+00:00",\n      "description": "test",\n      "id": "INC-20230831-0001",\n      "location": "#12-34,S123456,nowhere str",\n      "priority": 4,\n      "reported_by": "bob",\n      "status": "NEW",\n      "updated_at": "2023-08-31T15:06:58.989089+00:00",\n      "workflow_template_id": "e23b62c1-cb10-4f8a-98f2-6f8a5cae9345"\n    }\n  ],\n  "sent_at": "2023-08-31T15:06:58Z"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"errors"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(x(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,i.jsx)(b.default,{label:"Example",value:"Example",children:(0,i.jsx)(x(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "invalid request body"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"errors"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(x(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,i.jsx)(b.default,{label:"Example",value:"Example",children:(0,i.jsx)(x(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"503",value:"503",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Service Unavailable"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"text/plain",value:"text/plain",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})}),(0,i.jsx)(b.default,{label:"response",value:"response",children:(0,i.jsx)(x(),{responseExample:"service is not yet ready",language:"shell"})})]})})})})]})]})})})]})}function P(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);
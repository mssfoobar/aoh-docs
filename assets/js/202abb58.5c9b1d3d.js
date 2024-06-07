"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[2889],{86329:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>v,default:()=>w,frontMatter:()=>f,metadata:()=>b,toc:()=>N});var n=a(74848),i=a(28453),t=a(77233),l=a.n(t),r=(a(22661),a(80811)),c=a.n(r),d=(a(41871),a(24791)),m=a.n(d),o=(a(35654),a(69015)),p=a.n(o),h=a(84919),x=a.n(h),j=a(84664),u=a.n(j),g=(a(84466),a(85225)),y=(a(71156),a(7227));const f={id:"create-incident",title:"Create incident",description:"create a new incident",sidebar_label:"Create incident",hide_title:!0,hide_table_of_contents:!0,api:"eJztV9tu2zgQ/RVi+ljJ1s2po7c2m4dg0QvqFAXqGsVImtjsSqRK0k4NQ/9eUFRs2ZFToCj2AqxfLA3J4cyZMxftwOBSQzqHgu5wXRpYeFCQzhWvDZcCUsgVoSGGTNA94yLnBQkDHij6tiZtXsliC+kOcimMXUh3gHVd8hzt+fFXbZXsQOcrqtA+mW1NkILMvlJu9dRK1qQMJ92qQUNLqba9ndooLpbQeJDLqiJh9JlFYTA3g2tHHg2s82JQXErnxeBirbhU3PQtFesqI2UXFdVSGSq+ZMOeaINmPeRH44Dligoblb6eg4u9yxeNB/Qdq7qkY/hgEkUYYRD4d/k08ZOYAh8pzPwCL4ppPs2KLEToYwpmxTXjmiHrhL0rU3h+MWFhFCeTixdTOCWJIW13Wxzh5s2VHwVRHEzj0A+CIIQ+kvAsjPw48WZOlyfk/YoUMW1U3680OQERMpnBATh4c/0RmsbhpWsptONPFAT279i6t392nvwGghZo+rtQKbSh4YYq/U/R26Vo8QX/6+z3YF0X511pw61JmHPLR7ngIjX/O5OiHwiwOeAHUz8Ob8MkjcN0cjmaJsnli8vnQZAGwb8kiY4x/7nVzaIXg6Htn7pAJUOp+AoL9t51jt+Xk+cp4QEpJZX+9YytSGtc0jAbTxh3CsuFH05uw2maxGkcfIKDMfOeXuBigyUvWNdQWWY7arNw2idDIN4IQ0pgyWakNqTYtVX7P5wOTk1qw3OyOSukYVsyTBEeQRo/hnTWnfogcIO8xKykY0ANfTfjukQ+DGUPIedA6+1Da7LPGyzXT9vXIVCRWUlbA2rZJkmNZgUpjDfh+GH80jaJ29g779eqhBRWxtTpeMwrPSpoE41QRY9qzB9uzGPudJvMlh7vD8Pc9eA00fl3VBp7sod6uBcd37oXt7Vt/9YraHvZoXgFp8Vrv2dfv3o9TNzJNhzcWNvhpkOKvUaBS7Ims9lWG6rAA4ubuzYcBaPHhfjluxt2JxV7QoltgVKbCls6CKzspVduVO4NySetd8+ns1N1R6ce22xTtOHddUSYw8Y2gwMVFh6sLFPSOex2GWr6oMqmseJva7LBmy882KDiLanTuR0ZV4QFqZY7f5HF9spZ5t/a+709WR+VkcZ7OPEyz6k2T+5d9Mj87u3sFjzIus+FShb2jMJ7+ymB95DCZ/gM4IFs0XLpY+U7KFEs1y65nV77+wFmkj7d",sidebar_class_name:"post api-method",info_path:"docs/40_modules/60_wfe/Incident Management System API/incident-management-system",custom_edit_url:null,hide_send_button:!0},v=void 0,b={id:"modules/wfe/Incident Management System API/create-incident",title:"Create incident",description:"create a new incident",source:"@site/docs/40_modules/60_wfe/Incident Management System API/create-incident.api.mdx",sourceDirName:"40_modules/60_wfe/Incident Management System API",slug:"/modules/wfe/Incident Management System API/create-incident",permalink:"/aoh-docs/docs/modules/wfe/Incident Management System API/create-incident",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-incident",title:"Create incident",description:"create a new incident",sidebar_label:"Create incident",hide_title:!0,hide_table_of_contents:!0,api:"eJztV9tu2zgQ/RVi+ljJ1s2po7c2m4dg0QvqFAXqGsVImtjsSqRK0k4NQ/9eUFRs2ZFToCj2AqxfLA3J4cyZMxftwOBSQzqHgu5wXRpYeFCQzhWvDZcCUsgVoSGGTNA94yLnBQkDHij6tiZtXsliC+kOcimMXUh3gHVd8hzt+fFXbZXsQOcrqtA+mW1NkILMvlJu9dRK1qQMJ92qQUNLqba9ndooLpbQeJDLqiJh9JlFYTA3g2tHHg2s82JQXErnxeBirbhU3PQtFesqI2UXFdVSGSq+ZMOeaINmPeRH44Dligoblb6eg4u9yxeNB/Qdq7qkY/hgEkUYYRD4d/k08ZOYAh8pzPwCL4ppPs2KLEToYwpmxTXjmiHrhL0rU3h+MWFhFCeTixdTOCWJIW13Wxzh5s2VHwVRHEzj0A+CIIQ+kvAsjPw48WZOlyfk/YoUMW1U3680OQERMpnBATh4c/0RmsbhpWsptONPFAT279i6t392nvwGghZo+rtQKbSh4YYq/U/R26Vo8QX/6+z3YF0X511pw61JmHPLR7ngIjX/O5OiHwiwOeAHUz8Ob8MkjcN0cjmaJsnli8vnQZAGwb8kiY4x/7nVzaIXg6Htn7pAJUOp+AoL9t51jt+Xk+cp4QEpJZX+9YytSGtc0jAbTxh3CsuFH05uw2maxGkcfIKDMfOeXuBigyUvWNdQWWY7arNw2idDIN4IQ0pgyWakNqTYtVX7P5wOTk1qw3OyOSukYVsyTBEeQRo/hnTWnfogcIO8xKykY0ANfTfjukQ+DGUPIedA6+1Da7LPGyzXT9vXIVCRWUlbA2rZJkmNZgUpjDfh+GH80jaJ29g779eqhBRWxtTpeMwrPSpoE41QRY9qzB9uzGPudJvMlh7vD8Pc9eA00fl3VBp7sod6uBcd37oXt7Vt/9YraHvZoXgFp8Vrv2dfv3o9TNzJNhzcWNvhpkOKvUaBS7Ims9lWG6rAA4ubuzYcBaPHhfjluxt2JxV7QoltgVKbCls6CKzspVduVO4NySetd8+ns1N1R6ce22xTtOHddUSYw8Y2gwMVFh6sLFPSOex2GWr6oMqmseJva7LBmy882KDiLanTuR0ZV4QFqZY7f5HF9spZ5t/a+709WR+VkcZ7OPEyz6k2T+5d9Mj87u3sFjzIus+FShb2jMJ7+ymB95DCZ/gM4IFs0XLpY+U7KFEs1y65nV77+wFmkj7d",sidebar_class_name:"post api-method",info_path:"docs/40_modules/60_wfe/Incident Management System API/incident-management-system",custom_edit_url:null,hide_send_button:!0},sidebar:"wfe",previous:{title:"Create incident updates",permalink:"/aoh-docs/docs/modules/wfe/Incident Management System API/create-incident-updates"},next:{title:"liveness",permalink:"/aoh-docs/docs/modules/wfe/Incident Management System API/liveness"}},_={},N=[];function q(e){const s={p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Create incident"}),"\n",(0,n.jsx)(c(),{method:"post",path:"/v1/incidents"}),"\n",(0,n.jsx)(s.p,{children:"create a new incident"}),"\n",(0,n.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(m(),{className:"openapi-tabs__mime",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,n.jsx)(s.p,{children:"Body"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!1,name:"category",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"comments",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"contact",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"location",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"priority",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,n.jsx)(x(),{collapsible:!1,name:"reported_by",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(l(),{label:void 0,id:void 0,children:[(0,n.jsxs)(y.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(x(),{collapsible:!1,name:"category",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"comments",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"contact",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"location",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"priority",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,n.jsx)(x(),{collapsible:!1,name:"reported_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(x(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(p(),{responseExample:'{\n  "data": [\n    {\n      "category": "string",\n      "comments": "string",\n      "contact": "string",\n      "created_at": "string",\n      "description": "string",\n      "id": "string",\n      "location": "string",\n      "priority": 0,\n      "reported_by": "string",\n      "status": "string",\n      "updated_at": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(y.default,{label:"Example",value:"Example",children:(0,n.jsx)(p(),{responseExample:'{\n  "data": [\n    {\n      "category": "522a2a00-fc84-43e0-ae1b-da6d8c8bdb1a",\n      "comments": "this is a comment",\n      "contact": "+65 12345678",\n      "created_at": "2023-08-31T14:31:59.844979+00:00",\n      "description": "test",\n      "id": "INC-20230831-0001",\n      "location": "#12-34,S123456,nowhere str",\n      "priority": 4,\n      "reported_by": "bob",\n      "status": "NEW",\n      "updated_at": "2023-08-31T14:31:59.844979+00:00"\n    }\n  ],\n  "sent_at": "2023-08-31T14:31:59Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Bad Request"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"errors"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(p(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,n.jsx)(y.default,{label:"Example",value:"Example",children:(0,n.jsx)(p(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "invalid request body"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"errors"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(x(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(p(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,n.jsx)(y.default,{label:"Example",value:"Example",children:(0,n.jsx)(p(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"503",value:"503",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Service Unavailable"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"text/plain",value:"text/plain",children:(0,n.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})}),(0,n.jsx)(y.default,{label:"response",value:"response",children:(0,n.jsx)(p(),{responseExample:"service is not yet ready",language:"shell"})})]})})})})]})]})})})]})}function w(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(q,{...e})}):q(e)}}}]);
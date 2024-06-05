"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[3539],{23767:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>_,default:()=>q,frontMatter:()=>b,metadata:()=>N,toc:()=>w});var n=a(74848),l=a(28453),i=a(77233),r=a.n(i),t=(a(22661),a(80811)),m=a.n(t),c=(a(41871),a(24791)),o=a.n(c),d=a(35654),p=a.n(d),h=a(69015),j=a.n(h),x=a(84919),u=a.n(x),f=a(84664),g=a.n(f),y=(a(84466),a(85225)),v=(a(71156),a(7227));const b={id:"get-form-template",title:"Get form template",description:"API to retrieve form template",sidebar_label:"Get form template",hide_title:!0,hide_table_of_contents:!0,api:"eJytVl2P2joQ/SvRPLVSIAmQ3SVv1VVvVVXVvWq3rVSEkEkm4F1/pPYkgKL898ohsGGBrqr2KZHHM54558zYNRBbWUhmkGsjYe5DhjY1vCCuFSTw5v/3HmnPIBmOFXpul0coC8EIwYeCGSaR0LgYNSgmEZI2Fs/AB+5iFIzW4IPBHyU3mEFCpkQfbLpGySCpgXaF87JkuFqBD7hlshBuKbrNb6aTNByEy7vpYDKK2YAxdjuIb+IonaaYxpMpNM3cRbeFVhatCzgKQ/c5LeW/D+BDqhWhImdlRSF4ypw1eLBuS32ek14+YEquUKMLNMT3B2SM+ruYMWznyiWU9mVvnp1X3fjdwgUDbgttCM3Lkff4XwhRobF8X+MzW9M4VGShFSqyf72oR9z9XrGCLVFcsex0SS9nYvTmon+qRSmVvYJBxUSJf1D/9bzbyBdPbdqT96L7esaQKuUSDXSbUNGC0ZXkjx1zkOZsTwj8q41cROv8RukSDqhDhjkrBcGptHrNO3iw3qs1UWGTIMhQ6uGykGrI9WvoaQmi4WQYwjMBHY/mKLJF9EjbMQnolADpGtNHwS0tJncjHD88JXW0wFEE8M/J2oH+lmD4pDeLaCrj6nYJPXJVKUSPztmRmf0BS72N4MhJb62ZuzHyjIto1C4esIdROBoPwukgnNyHd0k8TeLoe0dQfGnmvFeERjHhfUZTofHeGqPN3xtD10XhA7qj/kDPEq1lq6u6PdHcc4BuBlF8H90lk3EyDr/DUzKzXlywaCqeosetpzR5OyTPIMt2jooO0vE5pJ87ry+KVYwLthR4CijhloJCMH4Zyv5YbQvYz4zu+nD/B21cz69DQCKttZP6Clv83D2XQFBFgeuhoN5fgw34bajDHVkaJ0bXXEkQbHI5zLAaDZkZgdMaV7lus+XU3oDftHnMhd54H5liK5SuyNMWDIchXLq2c228zcFbOu/WufGh0JYkU72ef4d0drWfRKyfEH7xTdAB3eOh8fdV1x1GM6hcE7ZPDh+S7rkw92GtLTlzXS+ZxS9GNI1b/lGi2UEym7vGNbzl3EGZcev+M0hyJiz+IudXn7rXx2vvWoaHNlG73nw4zq0ux2be+LBGlrmROas745s0xYJ6bmdN7ag9yuXd23tomp+2nzQ7",sidebar_class_name:"get api-method",info_path:"docs/90_wfe/Workflow API/workflow-management",custom_edit_url:null,hide_send_button:!0},_=void 0,N={id:"wfe/Workflow API/get-form-template",title:"Get form template",description:"API to retrieve form template",source:"@site/docs/90_wfe/Workflow API/get-form-template.api.mdx",sourceDirName:"90_wfe/Workflow API",slug:"/wfe/Workflow API/get-form-template",permalink:"/aoh-docs/docs/wfe/Workflow API/get-form-template",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-form-template",title:"Get form template",description:"API to retrieve form template",sidebar_label:"Get form template",hide_title:!0,hide_table_of_contents:!0,api:"eJytVl2P2joQ/SvRPLVSIAmQ3SVv1VVvVVXVvWq3rVSEkEkm4F1/pPYkgKL898ohsGGBrqr2KZHHM54558zYNRBbWUhmkGsjYe5DhjY1vCCuFSTw5v/3HmnPIBmOFXpul0coC8EIwYeCGSaR0LgYNSgmEZI2Fs/AB+5iFIzW4IPBHyU3mEFCpkQfbLpGySCpgXaF87JkuFqBD7hlshBuKbrNb6aTNByEy7vpYDKK2YAxdjuIb+IonaaYxpMpNM3cRbeFVhatCzgKQ/c5LeW/D+BDqhWhImdlRSF4ypw1eLBuS32ek14+YEquUKMLNMT3B2SM+ruYMWznyiWU9mVvnp1X3fjdwgUDbgttCM3Lkff4XwhRobF8X+MzW9M4VGShFSqyf72oR9z9XrGCLVFcsex0SS9nYvTmon+qRSmVvYJBxUSJf1D/9bzbyBdPbdqT96L7esaQKuUSDXSbUNGC0ZXkjx1zkOZsTwj8q41cROv8RukSDqhDhjkrBcGptHrNO3iw3qs1UWGTIMhQ6uGykGrI9WvoaQmi4WQYwjMBHY/mKLJF9EjbMQnolADpGtNHwS0tJncjHD88JXW0wFEE8M/J2oH+lmD4pDeLaCrj6nYJPXJVKUSPztmRmf0BS72N4MhJb62ZuzHyjIto1C4esIdROBoPwukgnNyHd0k8TeLoe0dQfGnmvFeERjHhfUZTofHeGqPN3xtD10XhA7qj/kDPEq1lq6u6PdHcc4BuBlF8H90lk3EyDr/DUzKzXlywaCqeosetpzR5OyTPIMt2jooO0vE5pJ87ry+KVYwLthR4CijhloJCMH4Zyv5YbQvYz4zu+nD/B21cz69DQCKttZP6Clv83D2XQFBFgeuhoN5fgw34bajDHVkaJ0bXXEkQbHI5zLAaDZkZgdMaV7lus+XU3oDftHnMhd54H5liK5SuyNMWDIchXLq2c228zcFbOu/WufGh0JYkU72ef4d0drWfRKyfEH7xTdAB3eOh8fdV1x1GM6hcE7ZPDh+S7rkw92GtLTlzXS+ZxS9GNI1b/lGi2UEym7vGNbzl3EGZcev+M0hyJiz+IudXn7rXx2vvWoaHNlG73nw4zq0ux2be+LBGlrmROas745s0xYJ6bmdN7ag9yuXd23tomp+2nzQ7",sidebar_class_name:"get api-method",info_path:"docs/90_wfe/Workflow API/workflow-management",custom_edit_url:null,hide_send_button:!0},sidebar:"wfe",previous:{title:"Introduction",permalink:"/aoh-docs/docs/wfe/Workflow API/workflow-management"},next:{title:"Get workflow designer",permalink:"/aoh-docs/docs/wfe/Workflow API/get-workflow-designer"}},k={},w=[];function S(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get form template"}),"\n",(0,n.jsx)(m(),{method:"get",path:"/v1/form/{formid}"}),"\n",(0,n.jsx)(s.p,{children:"API to retrieve form template"}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{name:"formid",in:"path",required:!0,schema:{type:"string",example:"17f694c0-0b89-425a-aaa7-5651c9cec549"}}})})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(v.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"exporter"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"version",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"components"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"key",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"label",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"layout"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!1,name:"row",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"columns",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"values"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(u(),{collapsible:!1,name:"label",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(u(),{collapsible:!1,name:"schemaVersion",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(j(),{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "type": "string",\n      "exporter": {\n        "name": "string",\n        "version": "string"\n      },\n      "components": [\n        {\n          "id": "string",\n          "key": "string",\n          "type": "string",\n          "label": "string",\n          "layout": {\n            "row": "string",\n            "columns": "string"\n          },\n          "values": [\n            {\n              "label": "string",\n              "value": "string"\n            }\n          ]\n        }\n      ],\n      "schemaVersion": 0\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(v.default,{label:"Example",value:"Example",children:(0,n.jsx)(j(),{responseExample:'{\n  "data": [\n    {\n      "id": "Form_1hf6nou",\n      "type": "default",\n      "exporter": {\n        "name": "form-js (https://demo.bpmn.io)",\n        "version": "1.4.0"\n      },\n      "components": [\n        {\n          "id": "Field_1ktx3tl",\n          "key": "checklist_482e3j",\n          "type": "checklist",\n          "label": "Checklist",\n          "layout": {\n            "row": "Row_19m5v7b",\n            "columns": null\n          },\n          "values": [\n            {\n              "label": "checkbox1",\n              "value": "checkbox1"\n            }\n          ]\n        }\n      ],\n      "schemaVersion": 12\n    }\n  ],\n  "sent_at": "2023-09-04T08:59:51Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(v.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"errors"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,n.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(j(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,n.jsx)(v.default,{label:"Example",value:"Example",children:(0,n.jsx)(j(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(v.default,{label:"503",value:"503",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Service Unavailable"})}),(0,n.jsx)("div",{children:(0,n.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"text/plain",value:"text/plain",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})}),(0,n.jsx)(v.default,{label:"response",value:"response",children:(0,n.jsx)(j(),{responseExample:"service is not yet ready",language:"shell"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(S,{...e})}):S(e)}}}]);
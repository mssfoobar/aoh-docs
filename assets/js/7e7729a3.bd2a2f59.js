"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[170],{38659:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>N,default:()=>q,frontMatter:()=>v,metadata:()=>w,toc:()=>b});var l=a(74848),n=a(28453),i=a(77233),r=a.n(i),t=(a(22661),a(80811)),d=a.n(t),c=(a(41871),a(24791)),o=a.n(c),m=a(35654),p=a.n(m),h=a(69015),x=a.n(h),j=a(84919),f=a.n(j),u=a(84664),g=a.n(u),_=(a(84466),a(85225)),y=(a(71156),a(7227));const v={id:"signal-workflow",title:"Signal Workflow",description:"API to send data into workflow using signal name",sidebar_label:"Signal Workflow",hide_title:!0,hide_table_of_contents:!0,api:"eJztVl1vm0oQ/Stonm6ldcB24ri8tVUfqqurVkmqSnVRNMBgbwIL3V07tRD/vRoWCk6c3Cq37dPlwVrDzsc5s7NnarC4NhCu4K7Ut1le3kEkICWTaFlZWSoI4dWHd54tPUMq9VK06EllS6/f722NVGvPyLXC3FNYEAioUGNBljS7rqF9G/4IIVMQINl1hXYDAjR93UpNKYRWb0mASTZUIIQ12H3FlsZqqdYggL5hUeX8aoHn8RSzYPKSlvHkFIN4Ep9nNFlgMp/Pkiw7O19eL6BpxI/4Lscuxf8a/82GkttcGgtNEzkXZOzrMt2zXVIqS8ryEqsqlwkymf6NYUbrhwHK+IYSy8zpsiJtJRn+ynT/+65MUp5eB5ticbNMR9tRa9wzVEuFeYimaZ8RpiHePY8rSBgtpVMQ/XI2LOcQda40mapUxqU1C4LW58Fhev832/0Wdh6D+xtYE2BI2Wu0R78foXT1HE6jURiYBbP5ZBpMZsFVsAxni3D+8jO4XE6PEf0aU+/CHcpfx/jjqAWQ1qU2z69HQcbgmn7qnN6jJVhMpmdX02V4Og/nwWcYklmN/IJUO8xl6nW96sXcrE3kvJ8dI/GdsqT5XrskvSPtvWW3/9Pp6DSkdzIhTxpPldbbk/U04QGl84eUXnZWHxXuUOYY53RIqKVv1q9ylMepHDHkALRo+4uH1zvMt0/n1zFQkN2UKctA2TZJqwYh+Lup76TC7xXLrwftavxBR/x6WDcg2pC96G11DiFsrK1C37/LipOUdrMT1DPgxuajcjFoxtufuIM75BGnLlVWtqRI26rRp16N/0GFayqYSwGci2N9ehKcBHBM2bNSD1pesHVr3IiWlQLbKnQCeulEvg92399I9p4zNHQFHtW/EY7FuivNCnZ8WzozEMPMIiA8GC4OlD4c/YsEbLjY4QrqOkZDH3XeNPz665b0HsJVJGCHWrbnksuYSsPrFMIMc0NPQP7rohsjXniPoelbWXEj9+cUBNzS/nA+4qnlD0YeMdREjYANYUq6xe82vHGxJlfsZnDw4PLjvJ3FqyShyj65Nxq14If3l1cgIO7mp6JM2UYj15Z/Q/gCXzjhssXvmp7f15CjWm/dleT88vMdoNaxIA==",sidebar_class_name:"post api-method",info_path:"docs/90_wfe/Workflow API/workflow-management",custom_edit_url:null,hide_send_button:!0},N=void 0,w={id:"wfe/Workflow API/signal-workflow",title:"Signal Workflow",description:"API to send data into workflow using signal name",source:"@site/docs/90_wfe/Workflow API/signal-workflow.api.mdx",sourceDirName:"90_wfe/Workflow API",slug:"/wfe/Workflow API/signal-workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/signal-workflow",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"signal-workflow",title:"Signal Workflow",description:"API to send data into workflow using signal name",sidebar_label:"Signal Workflow",hide_title:!0,hide_table_of_contents:!0,api:"eJztVl1vm0oQ/Stonm6ldcB24ri8tVUfqqurVkmqSnVRNMBgbwIL3V07tRD/vRoWCk6c3Cq37dPlwVrDzsc5s7NnarC4NhCu4K7Ut1le3kEkICWTaFlZWSoI4dWHd54tPUMq9VK06EllS6/f722NVGvPyLXC3FNYEAioUGNBljS7rqF9G/4IIVMQINl1hXYDAjR93UpNKYRWb0mASTZUIIQ12H3FlsZqqdYggL5hUeX8aoHn8RSzYPKSlvHkFIN4Ep9nNFlgMp/Pkiw7O19eL6BpxI/4Lscuxf8a/82GkttcGgtNEzkXZOzrMt2zXVIqS8ryEqsqlwkymf6NYUbrhwHK+IYSy8zpsiJtJRn+ynT/+65MUp5eB5ticbNMR9tRa9wzVEuFeYimaZ8RpiHePY8rSBgtpVMQ/XI2LOcQda40mapUxqU1C4LW58Fhev832/0Wdh6D+xtYE2BI2Wu0R78foXT1HE6jURiYBbP5ZBpMZsFVsAxni3D+8jO4XE6PEf0aU+/CHcpfx/jjqAWQ1qU2z69HQcbgmn7qnN6jJVhMpmdX02V4Og/nwWcYklmN/IJUO8xl6nW96sXcrE3kvJ8dI/GdsqT5XrskvSPtvWW3/9Pp6DSkdzIhTxpPldbbk/U04QGl84eUXnZWHxXuUOYY53RIqKVv1q9ylMepHDHkALRo+4uH1zvMt0/n1zFQkN2UKctA2TZJqwYh+Lup76TC7xXLrwftavxBR/x6WDcg2pC96G11DiFsrK1C37/LipOUdrMT1DPgxuajcjFoxtufuIM75BGnLlVWtqRI26rRp16N/0GFayqYSwGci2N9ehKcBHBM2bNSD1pesHVr3IiWlQLbKnQCeulEvg92399I9p4zNHQFHtW/EY7FuivNCnZ8WzozEMPMIiA8GC4OlD4c/YsEbLjY4QrqOkZDH3XeNPz665b0HsJVJGCHWrbnksuYSsPrFMIMc0NPQP7rohsjXniPoelbWXEj9+cUBNzS/nA+4qnlD0YeMdREjYANYUq6xe82vHGxJlfsZnDw4PLjvJ3FqyShyj65Nxq14If3l1cgIO7mp6JM2UYj15Z/Q/gCXzjhssXvmp7f15CjWm/dleT88vMdoNaxIA==",sidebar_class_name:"post api-method",info_path:"docs/90_wfe/Workflow API/workflow-management",custom_edit_url:null,hide_send_button:!0},sidebar:"wfe",previous:{title:"Save workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/save-workflow"},next:{title:"Start workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/start-workflow"}},k={},b=[];function I(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(_.default,{as:"h1",className:"openapi__heading",children:"Signal Workflow"}),"\n",(0,l.jsx)(d(),{method:"post",path:"/v1/signal/workflow/{workflowid}/signalname/{signalname}"}),"\n",(0,l.jsx)(s.p,{children:"API to send data into workflow using signal name"}),"\n",(0,l.jsx)(_.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)(p(),{className:"paramsItem",param:{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"6a7b1af0-9e8b-4a0b-b7fe-6ac332cff578_6"}}}),(0,l.jsx)(p(),{className:"paramsItem",param:{name:"signalname",in:"path",required:!0,schema:{type:"string",example:"Checklist"}}})]})})]}),"\n",(0,l.jsx)(o(),{className:"openapi-tabs__mime",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"data"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})})]})}),(0,l.jsx)("div",{style:{marginLeft:"1rem"},children:(0,l.jsx)(f(),{collapsible:!1,name:"field_0hm6j8d",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}})})]})})})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{label:void 0,id:void 0,children:[(0,l.jsxs)(y.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"data"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(f(),{collapsible:!1,name:"field_0hm6j8d",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})}),(0,l.jsx)(f(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "data": [\n    {\n      "field_0hm6j8d": [\n        "string"\n      ]\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,l.jsx)(y.default,{label:"Example",value:"Example",children:(0,l.jsx)(x(),{responseExample:'{\n  "data": [\n    {\n      "field_0hm6j8d": [\n        "checked1",\n        "checked2",\n        "checked3"\n      ]\n    }\n  ],\n  "sent_at": "2023-10-20T08:26:39Z"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Bad Request"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(f(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"errors"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(f(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,l.jsx)(y.default,{label:"Example",value:"Example",children:(0,l.jsx)(x(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "invalid request body"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(f(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(f(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"errors"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(f(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,l.jsx)(y.default,{label:"Example",value:"Example",children:(0,l.jsx)(x(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"503",value:"503",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Service Unavailable"})}),(0,l.jsx)("div",{children:(0,l.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"text/plain",value:"text/plain",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})]})}),(0,l.jsx)(y.default,{label:"response",value:"response",children:(0,l.jsx)(x(),{responseExample:"service is not yet ready",language:"shell"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(I,{...e})}):I(e)}}}]);
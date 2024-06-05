"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[9462],{49627:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>_,default:()=>L,frontMatter:()=>b,metadata:()=>N,toc:()=>I});var n=a(74848),i=a(28453),t=a(77233),r=a.n(t),l=(a(22661),a(80811)),m=a.n(l),c=(a(41871),a(24791)),o=a.n(c),d=a(35654),p=a.n(d),h=a(69015),g=a.n(h),x=a(84919),u=a.n(x),f=a(84664),j=a.n(f),y=(a(84466),a(85225)),v=(a(71156),a(7227));const b={id:"list-chat-messages",title:"List chat messages",description:"API to query all chat messages and chat attachments from a particular room session",sidebar_label:"List chat messages",hide_title:!0,hide_table_of_contents:!0,api:"eJy1Ve+P2kYQ/VdW86mVbFibOw787aRce5FaKcpRVQpCp8Eew6b2rrM7kLsi/+/V2EC4gyRtpH7C7I83M2/evtkB4ypANgfvXB1gEUFBIfemYeMsZHD77q1ipz5tyD8rrCqVr5FVTSHgioJCW/QryIz5uibLQZXe1QpVg55NvqnQKwFXgUIQ0Aga9FgTk5fIO7BYE2RdBqaACIwEbpDX8Dqbt2+UK3s0dsoTb7zgefq0MZ4KyNhvKIKQr6lGyHbAz41AB/bGrqCNgJ6wbipZKydJcVUixTcF5XGSFDrGm/F1rDXqfJrQeFmOoV0IemicDRQEMNVafnJnmSzLJzZNZXKUDIcfg6S5O0/ALT9SzlK6dw15Nj1agXx6Cr3HZyGAqQ7fv12H1Y9f3pjiIkF9My5sMD3xxY3SVPT9eF/FDebvyxuC+9jJ4Hy3bSOoTU2P/fqldE1NgbFuLt5uO4RAlh/xUlXtqVQOfZrvKZ/v2YNEp3p8M5rCgTZ4WONnq+4dHPiCe6oqp/50vhJpn+QM+0cEL3KFVKdprKexns60zkY6u54OtNYfoI3+VdhDN/Y7Xfgu+oCfpCs93Unygl8otC5zTJfxJJ3o+GpJk3iilxSP0lE6LqZFnkwJXnIOn9fIv3hn+c4WD2SL8O1Kkv9ayTmB6naFxv4IjemX4At508fOy8FRrMdxcj1LJtlVmiXJB+jlcd2/9VcWZJm8xUo9kN+SV3feOw+dHonXTqpaUSf/ntnhNhl23jrc9QbXDsUwhazQIfQeuPEVZLBmbrLhEJsmlsNxvap5UNA2HaBPz9zwDZW4qVj1OJ1XGVu6Ts6GO5N7L1b5O1pckXgzRCAR++vJQA/0GagYfun2ll0fb6r72ezdMVIEjQtcoz1R2m8m8Mvp8Br7xDb/n7myV4QIZ9hUIpU26pnd7dsxh20iA6MbdhFkx5nT92QRwdoFlnO73RID/eGrtpXlLlHI5osItugNLoXe+Q4KE+S7gKzEKtA3Kv7p/X5K/ay+MsYupn9wdyvevsVqI/8ggr/o+cvMbBdtBGvCgnyXVb95m+fU8Mm1s1ElkjnK9te7GbTtP2bsqKQ=",sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/v1/room-management",custom_edit_url:null,hide_send_button:!0},_=void 0,N={id:"openapi/ucs/v1/list-chat-messages",title:"List chat messages",description:"API to query all chat messages and chat attachments from a particular room session",source:"@site/docs/openapi/ucs/v1/list-chat-messages.api.mdx",sourceDirName:"openapi/ucs/v1",slug:"/openapi/ucs/v1/list-chat-messages",permalink:"/aoh-docs/docs/openapi/ucs/v1/list-chat-messages",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-chat-messages",title:"List chat messages",description:"API to query all chat messages and chat attachments from a particular room session",sidebar_label:"List chat messages",hide_title:!0,hide_table_of_contents:!0,api:"eJy1Ve+P2kYQ/VdW86mVbFibOw787aRce5FaKcpRVQpCp8Eew6b2rrM7kLsi/+/V2EC4gyRtpH7C7I83M2/evtkB4ypANgfvXB1gEUFBIfemYeMsZHD77q1ipz5tyD8rrCqVr5FVTSHgioJCW/QryIz5uibLQZXe1QpVg55NvqnQKwFXgUIQ0Aga9FgTk5fIO7BYE2RdBqaACIwEbpDX8Dqbt2+UK3s0dsoTb7zgefq0MZ4KyNhvKIKQr6lGyHbAz41AB/bGrqCNgJ6wbipZKydJcVUixTcF5XGSFDrGm/F1rDXqfJrQeFmOoV0IemicDRQEMNVafnJnmSzLJzZNZXKUDIcfg6S5O0/ALT9SzlK6dw15Nj1agXx6Cr3HZyGAqQ7fv12H1Y9f3pjiIkF9My5sMD3xxY3SVPT9eF/FDebvyxuC+9jJ4Hy3bSOoTU2P/fqldE1NgbFuLt5uO4RAlh/xUlXtqVQOfZrvKZ/v2YNEp3p8M5rCgTZ4WONnq+4dHPiCe6oqp/50vhJpn+QM+0cEL3KFVKdprKexns60zkY6u54OtNYfoI3+VdhDN/Y7Xfgu+oCfpCs93Unygl8otC5zTJfxJJ3o+GpJk3iilxSP0lE6LqZFnkwJXnIOn9fIv3hn+c4WD2SL8O1Kkv9ayTmB6naFxv4IjemX4At508fOy8FRrMdxcj1LJtlVmiXJB+jlcd2/9VcWZJm8xUo9kN+SV3feOw+dHonXTqpaUSf/ntnhNhl23jrc9QbXDsUwhazQIfQeuPEVZLBmbrLhEJsmlsNxvap5UNA2HaBPz9zwDZW4qVj1OJ1XGVu6Ts6GO5N7L1b5O1pckXgzRCAR++vJQA/0GagYfun2ll0fb6r72ezdMVIEjQtcoz1R2m8m8Mvp8Br7xDb/n7myV4QIZ9hUIpU26pnd7dsxh20iA6MbdhFkx5nT92QRwdoFlnO73RID/eGrtpXlLlHI5osItugNLoXe+Q4KE+S7gKzEKtA3Kv7p/X5K/ay+MsYupn9wdyvevsVqI/8ggr/o+cvMbBdtBGvCgnyXVb95m+fU8Mm1s1ElkjnK9te7GbTtP2bsqKQ=",sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/v1/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucsAPI-v1",previous:{title:"Get chat info by room ID",permalink:"/aoh-docs/docs/openapi/ucs/v1/get-chat-info-by-room-id"},next:{title:"List chat messages in a range",permalink:"/aoh-docs/docs/openapi/ucs/v1/list-chat-messages-in-a-range"}},q={},I=[];function V(e){const s={p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"List chat messages"}),"\n",(0,n.jsx)(m(),{method:"get",path:"/v1/rooms/{roomid}/chats"}),"\n",(0,n.jsx)(s.p,{children:"API to query all chat messages and chat attachments from a particular room session"}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}})})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(v.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{children:(0,n.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"msg"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(u(),{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"file"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"size",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"file_path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(u(),{collapsible:!1,name:"mime_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(g(),{responseExample:'{\n  "data": [\n    {\n      "msg": [\n        {\n          "uid": "string",\n          "name": "string",\n          "text": "string",\n          "file": {\n            "name": "string",\n            "size": "string",\n            "file_path": "string"\n          },\n          "mime_type": "string",\n          "timestamp": "string"\n        }\n      ]\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(v.default,{label:"Example",value:"Example",children:(0,n.jsx)(g(),{responseExample:'{\n  "data": [\n    {\n      "msg": [\n        {\n          "uid": "10206739",\n          "name": "Shawn Ho",\n          "text": "Hello World",\n          "mime_type": "message",\n          "timestamp": "2022-09-09T00:30:59.000Z"\n        },\n        {\n          "uid": "10206739",\n          "name": "Shawn Ho",\n          "file": {\n            "name": "HelloWorld.txt",\n            "size": 11,\n            "file_path": "d00fca2b-8280-4be8-80be-32326d9dc19e"\n          },\n          "mime_type": "whatFrontEndSends",\n          "timestamp": "2022-09-09T00:31:59.000Z"\n        },\n        {\n          "uid": "10206739",\n          "name": "Shawn Ho",\n          "text": "Hello World Again",\n          "mime_type": "message",\n          "timestamp": "2022-09-09T00:32:59.000Z"\n        }\n      ]\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(v.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{})]})]})})})]})}function L(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(V,{...e})}):V(e)}}}]);
"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[6251],{52911:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>L,contentTitle:()=>N,default:()=>P,frontMatter:()=>b,metadata:()=>_,toc:()=>Z});var n=s(74848),i=s(28453),t=s(77233),r=s.n(t),l=(s(22661),s(80811)),m=s.n(l),c=(s(41871),s(24791)),d=s.n(c),o=s(35654),p=s.n(o),h=s(69015),x=s.n(h),u=s(84919),g=s.n(u),j=s(84664),f=s.n(j),y=(s(84466),s(85225)),v=(s(71156),s(7227));const b={id:"list-chat-messages-in-a-range",title:"List chat messages in a range",description:"API to query range of chat messages and chat attachments from a particular room session",sidebar_label:"List chat messages in a range",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVm1P40YQ/iuruQ89JJusDYTE36iO9lBbtQKqky5FaGJPnL3aa9/uOEAt//dq1wkkJAfXSEj9lGhmZ+aZFz8zLTDmFpIJmKoqLdwEkJFNjapZVRoSOPvjQnAlvjZkHoRBnZOoZiKdI4uSrMWcrECd9RJkxnRekmYrZqYqBYoaDau0KdAIF0FYstZ5DqBGgyUxGRe+BY0lQeJhqAwCUC56jTyH55AuPjgI3htXwhA3xvkz9LVRhjJI2DQUgE3nVCIkLfBD7VxbNkrn0AVA91jWhZPNRlF2PEMKTzNKwyjKZIinw5NQSpTpOKLhdDaELniE57JSOqP7FxFaRsMepC+YNwiEphxZLUgssGhIKCvYEDJlAq2QgZgpY3mjtO6NNxbyexJUmikns5GhXAPP1evQSWdbwJVOi8aqBQVL6LnHbQTPUYv3HnFaNZpFKCJx8CyzZ/qDN0oUIuhunK2tK23JuuexlO5nM8Pff4EA0kozaXZarOtCpei0gy/WPWm3I1bTL5Sym1pT1WRY9QEy5PVXaAw+uPIylfZ169Lm+xs3Kts5232vdyiY7nmnYqYKej3eN/1a9c9uhfN764dsW9t1AZSqpNtevguuKskylvVO6857sKT5Fndl1a2PxqpPk2XJJ8vqQSRjOTw9GsOqbHA1xzstPlawqhd8pKKoxKfKFI6V1jDDcnZhAyvEMo5DOQ7l+FrK5EgmJ+NDKeVnzyLfEXbVjaXGh/fRD/nedaUvdxRt1BcGT9Q7yKScpRhPw1E8kuHxlEbhSE4pPIqP4mE2ztJoTLBZf7ibI/9kKs3nOrsindmXs4r+a1bbxRRnOSq9T0njp+A37pN/nAL38CiUwzA6uY5GyXGcRNFn6EfleBcV/IiZuKSvDVl2BTnZ9eZCMxmNhbgisyAjzo2pDPj5JZ5XLvOc/Oey7MQiHvhdOmj7XdYNHNPZQfu4O7pBu6TizjXU++2XYGMKSGDOXCeDAdZ16FyEZV7yYUaL+BBNvMXYH2iGTcGi9+NJUOlZ5T8KxZ4aL92u/A015uQmBAJwEXvzxbbHd+/EpznyD1ZouvtLhyL1bN4zdhRGfvc6eUYFbctdKevKcol6bZB/Vc843zG+wH7TPIfQPhH0G14gy6FzszmoCzeNXdC3oF12c9KXp7+NAkgerxPfUidZPwiS1YK9CWBeWXb2bTtFS3+aouuc2GcByeQmgAUahVPXn0kLmbLufwbJDAtLL5Tj/eVyOx6IbxxCO9NaLRntVozf4pAABPA3PTxdXe5j3gvJ2xw8eyTy1I69c/k/XEB7ZL6ave6mC2BOmJHxk9Vrz9KUal6z27p6HG88MtrP59fQdf8Cf9UHrw==",sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null,hide_send_button:!0},N=void 0,_={id:"openapi/ucs/list-chat-messages-in-a-range",title:"List chat messages in a range",description:"API to query range of chat messages and chat attachments from a particular room session",source:"@site/docs/openapi/ucs/list-chat-messages-in-a-range.api.mdx",sourceDirName:"openapi/ucs",slug:"/openapi/ucs/list-chat-messages-in-a-range",permalink:"/aoh-docs/docs/openapi/ucs/list-chat-messages-in-a-range",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-chat-messages-in-a-range",title:"List chat messages in a range",description:"API to query range of chat messages and chat attachments from a particular room session",sidebar_label:"List chat messages in a range",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVm1P40YQ/iuruQ89JJusDYTE36iO9lBbtQKqky5FaGJPnL3aa9/uOEAt//dq1wkkJAfXSEj9lGhmZ+aZFz8zLTDmFpIJmKoqLdwEkJFNjapZVRoSOPvjQnAlvjZkHoRBnZOoZiKdI4uSrMWcrECd9RJkxnRekmYrZqYqBYoaDau0KdAIF0FYstZ5DqBGgyUxGRe+BY0lQeJhqAwCUC56jTyH55AuPjgI3htXwhA3xvkz9LVRhjJI2DQUgE3nVCIkLfBD7VxbNkrn0AVA91jWhZPNRlF2PEMKTzNKwyjKZIinw5NQSpTpOKLhdDaELniE57JSOqP7FxFaRsMepC+YNwiEphxZLUgssGhIKCvYEDJlAq2QgZgpY3mjtO6NNxbyexJUmikns5GhXAPP1evQSWdbwJVOi8aqBQVL6LnHbQTPUYv3HnFaNZpFKCJx8CyzZ/qDN0oUIuhunK2tK23JuuexlO5nM8Pff4EA0kozaXZarOtCpei0gy/WPWm3I1bTL5Sym1pT1WRY9QEy5PVXaAw+uPIylfZ169Lm+xs3Kts5232vdyiY7nmnYqYKej3eN/1a9c9uhfN764dsW9t1AZSqpNtevguuKskylvVO6857sKT5Fndl1a2PxqpPk2XJJ8vqQSRjOTw9GsOqbHA1xzstPlawqhd8pKKoxKfKFI6V1jDDcnZhAyvEMo5DOQ7l+FrK5EgmJ+NDKeVnzyLfEXbVjaXGh/fRD/nedaUvdxRt1BcGT9Q7yKScpRhPw1E8kuHxlEbhSE4pPIqP4mE2ztJoTLBZf7ibI/9kKs3nOrsindmXs4r+a1bbxRRnOSq9T0njp+A37pN/nAL38CiUwzA6uY5GyXGcRNFn6EfleBcV/IiZuKSvDVl2BTnZ9eZCMxmNhbgisyAjzo2pDPj5JZ5XLvOc/Oey7MQiHvhdOmj7XdYNHNPZQfu4O7pBu6TizjXU++2XYGMKSGDOXCeDAdZ16FyEZV7yYUaL+BBNvMXYH2iGTcGi9+NJUOlZ5T8KxZ4aL92u/A015uQmBAJwEXvzxbbHd+/EpznyD1ZouvtLhyL1bN4zdhRGfvc6eUYFbctdKevKcol6bZB/Vc843zG+wH7TPIfQPhH0G14gy6FzszmoCzeNXdC3oF12c9KXp7+NAkgerxPfUidZPwiS1YK9CWBeWXb2bTtFS3+aouuc2GcByeQmgAUahVPXn0kLmbLufwbJDAtLL5Tj/eVyOx6IbxxCO9NaLRntVozf4pAABPA3PTxdXe5j3gvJ2xw8eyTy1I69c/k/XEB7ZL6ave6mC2BOmJHxk9Vrz9KUal6z27p6HG88MtrP59fQdf8Cf9UHrw==",sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucsAPI-v2",previous:{title:"List chat messages",permalink:"/aoh-docs/docs/openapi/ucs/list-chat-messages"},next:{title:"Kick user",permalink:"/aoh-docs/docs/openapi/ucs/kick-user"}},L={},Z=[];function A(e){const a={p:"p",...(0,i.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"List chat messages in a range"}),"\n",(0,n.jsx)(m(),{method:"get",path:"/v2/rooms/{roomid}/chats/{fromindex}/{toindex}"}),"\n",(0,n.jsx)(a.p,{children:"API to query range of chat messages and chat attachments from a particular room session"}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}}),(0,n.jsx)(p(),{className:"paramsItem",param:{name:"fromindex",in:"path",description:"start of range index, negative value is treated as 0, first chat message is index 0",required:!0,schema:{type:"integer"},example:0}}),(0,n.jsx)(p(),{className:"paramsItem",param:{name:"toindex",in:"path",description:"end of range index, inclusive, value greater than (chat count - 1 ) is treated as (chat count - 1), first chat message is index 0",required:!0,schema:{type:"integer"},example:"1"}})]})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(v.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(a.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(a.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"Array ["})})}),(0,n.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(a.p,{children:"msg"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(a.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"Array ["})})}),(0,n.jsx)(g(),{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"text",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(a.p,{children:"file"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(a.p,{children:"object"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(g(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"size",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"file_path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(g(),{collapsible:!1,name:"mime_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(a.p,{children:"]"})})})]})]})}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(a.p,{children:"]"})})})]})]})}),(0,n.jsx)(g(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "data": [\n    {\n      "msg": [\n        {\n          "uid": "string",\n          "name": "string",\n          "text": "string",\n          "file": {\n            "name": "string",\n            "size": "string",\n            "file_path": "string"\n          },\n          "mime_type": "string",\n          "timestamp": "string"\n        }\n      ]\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(v.default,{label:"Example",value:"Example",children:(0,n.jsx)(x(),{responseExample:'{\n  "data": [\n    {\n      "msg": [\n        {\n          "uid": "10206739",\n          "name": "Shawn Ho",\n          "text": "Hello World",\n          "mime_type": "message",\n          "timestamp": "2022-09-09T00:30:59.000Z"\n        },\n        {\n          "uid": "10206739",\n          "name": "Shawn Ho",\n          "file": {\n            "name": "HelloWorld.txt",\n            "size": 11,\n            "file_path": "/attachment/d00fca2b-8280-4be8-80be-32326d9dc19e"\n          },\n          "mime_type": "whatFrontEndSends",\n          "timestamp": "2022-09-09T00:31:59.000Z"\n        },\n        {\n          "uid": "10206739",\n          "name": "Shawn Ho",\n          "text": "Hello World Again",\n          "mime_type": "message",\n          "timestamp": "2022-09-09T00:32:59.000Z"\n        }\n      ]\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(v.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Bad Request"})}),(0,n.jsx)("div",{})]}),(0,n.jsxs)(v.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{})]})]})})})]})}function P(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}}}]);
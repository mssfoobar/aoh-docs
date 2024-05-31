"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7413],{4880:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>v,contentTitle:()=>_,default:()=>X,frontMatter:()=>y,metadata:()=>b,toc:()=>N});var i=a(74848),n=a(28453),t=a(77233),r=a.n(t),l=(a(22661),a(80811)),o=a.n(l),d=(a(41871),a(24791)),c=a.n(d),m=(a(35654),a(69015)),p=a.n(m),h=a(84919),u=a.n(h),j=a(84664),x=a.n(j),f=(a(84466),a(85225)),g=(a(71156),a(7227));const y={id:"create-chat-1-1-room",title:"Create chat 1-1 room",description:"API to create chat 1-1 room",sidebar_label:"Create chat 1-1 room",hide_title:!0,hide_table_of_contents:!0,api:"eJytVk1v2zgQ/SvC9LAXsRZlyx+6Jd0egkXRIM1igTqGMBZHNluJVEnKqWH4vxeU5MROnKYt1ieZHD6+mXkzwx04XFlI55Cv0XGnOSxCEGRzI2sntYIULq6vAqeD3BA6CrxdwBkPjNYVhGDoW0PWXWqxhXQHuVaOlPOfWNelzNGjDL5YD7UDm6+pQv/ltjVBCnr5hXIHIdRG12ScJOt3e1Rt/J9TOh9QCXTabINCUikCXQSNJZNJEeRYllKtArem4OL6CsLDLdYZqVawD0FhRb+E6d0LWuszKP5CnknxOpJULTseyO67kSIotKnQvYQb/w5u/Cu4+y5L0pDwmX6MbR+OI3+OKCz2IdB3rOqSnmQEeBRH48lwdgBIwZF17CAh1kvjMUoQLUdTPsSEESVLNkqGQzadjWMWYzLjE5rlYpofX56CSIrRLJkWjPJ4xEYTEbFZkXA25XFRDHkyGeUJ7Pedc7bWynbKiaPoefQ+/gPh/yVNge7YCo3BLYQgHVX2N4X9ojqfbViHxmVOvrBNSry8iUrpRuVUkXL2z5l3qnyGXpG1uDp/s6ESndxQVhhd/dzCs8+kyizlWoljOlI5WpE5lEd2wuMlHx6k3woEy1Lfk8j+4HwI0mYPvfHRYKl1Sah6BVpSLkN3lsBJFXXimXfRhGLKxahAYhNBOeNcRAwn44RFEUb5jNN4WYxfqTHr0DUWUrjU+isJOJUKxFEcs2jGosktH6ZRlEbRZzjWC8TRbMYiziJ+2273Fk9EM1+ciaJfJDTlNvN4hrCtJIAnMXOmoRC68SHaKD3SGp/QOtgst6dNpqnFq2cPNqdn94uj5PijQxaNGU9u+TQdxSnnn/sMjs61jUsUwU1XsF5+yTmbK+XIKCyDT2Q2ZIL3xmjTCqcit9Y+zbW2bTmhW0MKg008OARn4LNofdLaw7aVRmNKSGHtXJ0OBljXbapZtarcW0Gb+C2aGJ7O6L+pwKZ0QYfTuu372s3jcH5/vpX3On0Q2cP/o+Z9shafrPn6UIVuhS+dh4cbPzg/oMJVKx4IwXvW0dw8Z/7mTfDfGt1fNlB0f6fY2XeGXxdU0vN1z8DHt8K2ifdevDv/Vjm5+eit8soTpy9pR9/doC5Rtpe2Wdr1SZ13nj1oPoQusYsQ1j756Rx2uyVa+teU+71f/taQ2XYltEEjceljN/czd00oyLRK+EpezO86muzW0/DmZdO2rqczbB8eTlzkOdXup7aLI31ef/x0CyEs+ydcpYU/Y/De+4H3kMId3Pmy1m3oujnm13dQolo1bfuHDtf/fgCTKGrb",sidebar_class_name:"post api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},_=void 0,b={id:"openapi/ucs/create-chat-1-1-room",title:"Create chat 1-1 room",description:"API to create chat 1-1 room",source:"@site/docs/openapi/ucs/create-chat-1-1-room.api.mdx",sourceDirName:"openapi/ucs",slug:"/openapi/ucs/create-chat-1-1-room",permalink:"/aoh-docs/docs/openapi/ucs/create-chat-1-1-room",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-chat-1-1-room",title:"Create chat 1-1 room",description:"API to create chat 1-1 room",sidebar_label:"Create chat 1-1 room",hide_title:!0,hide_table_of_contents:!0,api:"eJytVk1v2zgQ/SvC9LAXsRZlyx+6Jd0egkXRIM1igTqGMBZHNluJVEnKqWH4vxeU5MROnKYt1ieZHD6+mXkzwx04XFlI55Cv0XGnOSxCEGRzI2sntYIULq6vAqeD3BA6CrxdwBkPjNYVhGDoW0PWXWqxhXQHuVaOlPOfWNelzNGjDL5YD7UDm6+pQv/ltjVBCnr5hXIHIdRG12ScJOt3e1Rt/J9TOh9QCXTabINCUikCXQSNJZNJEeRYllKtArem4OL6CsLDLdYZqVawD0FhRb+E6d0LWuszKP5CnknxOpJULTseyO67kSIotKnQvYQb/w5u/Cu4+y5L0pDwmX6MbR+OI3+OKCz2IdB3rOqSnmQEeBRH48lwdgBIwZF17CAh1kvjMUoQLUdTPsSEESVLNkqGQzadjWMWYzLjE5rlYpofX56CSIrRLJkWjPJ4xEYTEbFZkXA25XFRDHkyGeUJ7Pedc7bWynbKiaPoefQ+/gPh/yVNge7YCo3BLYQgHVX2N4X9ojqfbViHxmVOvrBNSry8iUrpRuVUkXL2z5l3qnyGXpG1uDp/s6ESndxQVhhd/dzCs8+kyizlWoljOlI5WpE5lEd2wuMlHx6k3woEy1Lfk8j+4HwI0mYPvfHRYKl1Sah6BVpSLkN3lsBJFXXimXfRhGLKxahAYhNBOeNcRAwn44RFEUb5jNN4WYxfqTHr0DUWUrjU+isJOJUKxFEcs2jGosktH6ZRlEbRZzjWC8TRbMYiziJ+2273Fk9EM1+ciaJfJDTlNvN4hrCtJIAnMXOmoRC68SHaKD3SGp/QOtgst6dNpqnFq2cPNqdn94uj5PijQxaNGU9u+TQdxSnnn/sMjs61jUsUwU1XsF5+yTmbK+XIKCyDT2Q2ZIL3xmjTCqcit9Y+zbW2bTmhW0MKg008OARn4LNofdLaw7aVRmNKSGHtXJ0OBljXbapZtarcW0Gb+C2aGJ7O6L+pwKZ0QYfTuu372s3jcH5/vpX3On0Q2cP/o+Z9shafrPn6UIVuhS+dh4cbPzg/oMJVKx4IwXvW0dw8Z/7mTfDfGt1fNlB0f6fY2XeGXxdU0vN1z8DHt8K2ifdevDv/Vjm5+eit8soTpy9pR9/doC5Rtpe2Wdr1SZ13nj1oPoQusYsQ1j756Rx2uyVa+teU+71f/taQ2XYltEEjceljN/czd00oyLRK+EpezO86muzW0/DmZdO2rqczbB8eTlzkOdXup7aLI31ef/x0CyEs+ydcpYU/Y/De+4H3kMId3Pmy1m3oujnm13dQolo1bfuHDtf/fgCTKGrb",sidebar_class_name:"post api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},sidebar:"ucsAPI-v2",previous:{title:"File download",permalink:"/aoh-docs/docs/openapi/ucs/file-download"},next:{title:"Close chat 1-1 room",permalink:"/aoh-docs/docs/openapi/ucs/close-chat-1-1-room"}},v={},N=[];function q(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Create chat 1-1 room"}),"\n",(0,i.jsx)(o(),{method:"post",path:"/v2/chat1to1/rooms"}),"\n",(0,i.jsx)(s.p,{children:"API to create chat 1-1 room"}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(c(),{className:"openapi-tabs__mime",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"requestor",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Mandatory field of user_id calling the API",type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Mandatory field of room name",type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"user1_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Mandatory field in user1 id in uuid format",type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"user2_id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Mandatory field in user2 id in uuid format",type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(r(),{label:void 0,id:void 0,children:[(0,i.jsxs)(g.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"data"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(u(),{collapsible:!1,name:"requestor",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"start_time",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"end_time",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"announcements"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"relative_from",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"relative_time_in_seconds",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,i.jsx)(u(),{collapsible:!1,name:"user_id",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(u(),{collapsible:!1,name:"allowed_user_id",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,i.jsx)(u(),{collapsible:!1,name:"is_chat1to1",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "data": [\n    {\n      "requestor": "string",\n      "name": "string",\n      "start_time": "string",\n      "end_time": "string",\n      "announcements": [\n        {\n          "id": "string",\n          "message": "string",\n          "relative_from": "string",\n          "relative_time_in_seconds": 0,\n          "user_id": [\n            "string"\n          ]\n        }\n      ],\n      "allowed_user_id": [\n        "string"\n      ],\n      "is_chat1to1": true\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,i.jsx)(g.default,{label:"Example",value:"Example",children:(0,i.jsx)(p(),{responseExample:'{\n  "data": [\n    {\n      "id": "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",\n      "name": "test-chat1to1-room",\n      "status": "Booked",\n      "start_time": "2022-09-07T13:00:00Z",\n      "end_time": "2099-01-01T00:00:00Z",\n      "announcements": [],\n      "allowed_user_id": [],\n      "early_end_reason": "",\n      "is_chat1to1": true,\n      "created_at": "2022-09-06T13:00:00Z",\n      "created_by": "10206739",\n      "updated_at": "2022-09-06T13:00:00Z",\n      "updated_by": "10206739"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(g.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(g.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{})]})]})})})]})}function X(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}}}]);
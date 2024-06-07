"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[4378],{27024:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>_,default:()=>w,frontMatter:()=>I,metadata:()=>y,toc:()=>L});var i=a(74848),l=a(28453),n=a(77233),r=a.n(n),t=(a(22661),a(80811)),d=a.n(t),o=(a(41871),a(24791)),m=a.n(o),c=a(35654),p=a.n(c),h=a(69015),u=a.n(h),x=a(84919),j=a.n(x),b=a(84664),f=a.n(b),g=(a(84466),a(85225)),v=(a(71156),a(7227));const I={id:"file-upload",title:"File upload",description:"API to upload file using presigned Url",sidebar_label:"File upload",hide_title:!0,hide_table_of_contents:!0,api:"eJylVdtu4zYQ/RVhgBQtIEUUdbElICjcTdLkYYFFkkWLDYJgJI5sbnVbknKTGvr3gpLiTepsm7ZPlknOzJnDM4c7MLjWkN0CGoPFpqbGwJ0LgnShZGdk20AGqw+XjmmdvqtaFE4pK3J6LZu10ynSct2QcD6qClzoUGFNhpRNuYMGa4IMVNvWUoAL0ibr0GzgrxUuT522dOxBW0iR6VUDLij60ktFAjKjenJBFxuqEbIdmMfOptZGyWYNgwv0gHVX2bVyGYioRPIWggovCATzcJHEHmPIijSgJC8TGNw9vF6TehM8e9CRjZaCHLOhEe5bQMrG0JrUC5QB4yxZhOlwZxPorm00aRvDGbM/RdsYexfZDrDrKlmgheJ/1hbP7rBGm3+mwtgrUG1Hysgpm0Dz/BQqhY+2U0O1/ufoXlWvcm0VcD8Sdbg7DIMLmhpzj+bV7WckPOG7nUvBxpgu8/2qLbDatNpkKWPM30pRtE3po4iTfLkQXriMUy9KMPFSEZWeEFEcijjhac78rzr2gzSJUp4uvTwS6EUlL72UeOQVC8pFwRkukuTHX71V/Ye3qtatkmZTn6x+uY68i/erd971xYrHyXfTgXeKBDVGYnVSy0a2KGrZHPFzznjIgiA54ue99gi18YIjfq7DI36Ov+vo3qqDtJnTnKKhk6eYG8b5kgWf5r2zh04q0icJmxeux9G6IBSk9Inl49kGml7RiYiCmLEkKZb5MmBhlC6TRZ7HxMIiXEZEccjKNOTIKaA4FBhwSnMR8DBO8kWeFvDiMuHfsgdWvvvLBtuYxxIviG+CZRbxLAg+zYqIJlm/HKufUDhXEz9WVvFrZy4bQ6rByrkmtSXlnCnVKrApazKbVkAGaxqlO7ewDXw7mNrfTb4z+HZutb+b5nzwJxsDC9xm1If6w67zbLBXr2tzLGjLj1HxA1c4pRL7yjhTnpEL2ZTtqHppRi+6so72Hhtc02itLtiKU3hwzI7ZQVLrtWWrJi+s95HOxc3Nh30lF7pWmxpHL5ht7Hy05afeXiR9Zidv9/J5cA09GL+rUDa27OwIE9e3sA2s/1m2wYVs7/Mj4XZlb60zrjsXrIxt6G6Xo6aPqhoGu/ylJ/UI2e2dC1tUEnNL3+0OhNT2W0BWYqXpbxr7/mr24R+cb7wmr3b05IyN9cUtVr39By78Ro9fny77WvwPJN94OP4DnpnQ4W5wYTMaw8jStLkqCurMs7CDl8NKdD82P5/dwDD8CQoOoT0=",sidebar_class_name:"get api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v1/room-management",custom_edit_url:null,hide_send_button:!0},_=void 0,y={id:"modules/ucs/Universal Comms API/v1/file-upload",title:"File upload",description:"API to upload file using presigned Url",source:"@site/docs/40_modules/30_ucs/Universal Comms API/v1/file-upload.api.mdx",sourceDirName:"40_modules/30_ucs/Universal Comms API/v1",slug:"/modules/ucs/Universal Comms API/v1/file-upload",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v1/file-upload",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"file-upload",title:"File upload",description:"API to upload file using presigned Url",sidebar_label:"File upload",hide_title:!0,hide_table_of_contents:!0,api:"eJylVdtu4zYQ/RVhgBQtIEUUdbElICjcTdLkYYFFkkWLDYJgJI5sbnVbknKTGvr3gpLiTepsm7ZPlknOzJnDM4c7MLjWkN0CGoPFpqbGwJ0LgnShZGdk20AGqw+XjmmdvqtaFE4pK3J6LZu10ynSct2QcD6qClzoUGFNhpRNuYMGa4IMVNvWUoAL0ibr0GzgrxUuT522dOxBW0iR6VUDLij60ktFAjKjenJBFxuqEbIdmMfOptZGyWYNgwv0gHVX2bVyGYioRPIWggovCATzcJHEHmPIijSgJC8TGNw9vF6TehM8e9CRjZaCHLOhEe5bQMrG0JrUC5QB4yxZhOlwZxPorm00aRvDGbM/RdsYexfZDrDrKlmgheJ/1hbP7rBGm3+mwtgrUG1Hysgpm0Dz/BQqhY+2U0O1/ufoXlWvcm0VcD8Sdbg7DIMLmhpzj+bV7WckPOG7nUvBxpgu8/2qLbDatNpkKWPM30pRtE3po4iTfLkQXriMUy9KMPFSEZWeEFEcijjhac78rzr2gzSJUp4uvTwS6EUlL72UeOQVC8pFwRkukuTHX71V/Ye3qtatkmZTn6x+uY68i/erd971xYrHyXfTgXeKBDVGYnVSy0a2KGrZHPFzznjIgiA54ue99gi18YIjfq7DI36Ov+vo3qqDtJnTnKKhk6eYG8b5kgWf5r2zh04q0icJmxeux9G6IBSk9Inl49kGml7RiYiCmLEkKZb5MmBhlC6TRZ7HxMIiXEZEccjKNOTIKaA4FBhwSnMR8DBO8kWeFvDiMuHfsgdWvvvLBtuYxxIviG+CZRbxLAg+zYqIJlm/HKufUDhXEz9WVvFrZy4bQ6rByrkmtSXlnCnVKrApazKbVkAGaxqlO7ewDXw7mNrfTb4z+HZutb+b5nzwJxsDC9xm1If6w67zbLBXr2tzLGjLj1HxA1c4pRL7yjhTnpEL2ZTtqHppRi+6so72Hhtc02itLtiKU3hwzI7ZQVLrtWWrJi+s95HOxc3Nh30lF7pWmxpHL5ht7Hy05afeXiR9Zidv9/J5cA09GL+rUDa27OwIE9e3sA2s/1m2wYVs7/Mj4XZlb60zrjsXrIxt6G6Xo6aPqhoGu/ylJ/UI2e2dC1tUEnNL3+0OhNT2W0BWYqXpbxr7/mr24R+cb7wmr3b05IyN9cUtVr39By78Ro9fny77WvwPJN94OP4DnpnQ4W5wYTMaw8jStLkqCurMs7CDl8NKdD82P5/dwDD8CQoOoT0=",sidebar_class_name:"get api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v1/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucs",previous:{title:"File download",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v1/file-download"},next:{title:"Get chat info by room ID",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v1/get-chat-info-by-room-id"}},k={},L=[];function D(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"File upload"}),"\n",(0,i.jsx)(d(),{method:"get",path:"/v1/rooms/{roomid}/users/{userid}/upload"}),"\n",(0,i.jsx)(s.p,{children:"API to upload file using presigned Url"}),"\n",(0,i.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739}})]})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(r(),{label:void 0,id:void 0,children:[(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"data"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"file_path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "url": "string",\n      "file_path": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,i.jsx)(v.default,{label:"Example",value:"Example",children:(0,i.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "url": "http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/19649298-b4da-4f2f-9e24-c7ebdc20a766?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T022801Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=d4150066c8b810349867bb5e03c384ee530f932a2e1e53da12e9bd12356b7b9c",\n      "file_path": "/attachment/19649298-b4da-4f2f-9e24-c7ebdc20a766"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(v.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(v.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{})]})]})})})]})}function w(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(D,{...e})}):D(e)}}}]);
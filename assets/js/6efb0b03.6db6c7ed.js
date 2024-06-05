"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5677],{71670:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>y,default:()=>T,frontMatter:()=>v,metadata:()=>N,toc:()=>M});var i=a(74848),n=a(28453),r=a(77233),t=a.n(r),o=(a(22661),a(80811)),l=a.n(o),d=(a(41871),a(24791)),m=a.n(d),c=a(35654),p=a.n(c),h=a(69015),u=a.n(h),g=a(84919),j=a.n(g),f=a(84664),x=a.n(f),b=(a(84466),a(85225)),_=(a(71156),a(7227));const v={id:"get-room-info",title:"Get room info",description:"API to query information of particular room",sidebar_label:"Get room info",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVt2P2jgQ/1esebqTksXhm7xtr6ttH06qupxOKiBk4oG4TezUHmhXiP+9shN2wwLbU9WX4wXH8+HfjOfnmT2Q2DhIZ2CNKR0sIpDoMqsqUkZDCrcf3jMy7OsW7SNTem1sKbyImTWrhCWVbQthmbdmbK7n85h99OsHErR1KZvDG2O+oJxDxObwQMLS8eNOS788mv2bo679KPdSdevQujmwQjlilCMLG6yy6FATU9opiUHgHUAElbCiRELrY9uDFiVCGmJUEiJQPrRKUA4v433/1kcWYJBhFmlrNURg8etWWZSQkt1iBC7LsRSQ7oEeK+/akVV6A4cI8Lsoq8LvrceJ7K8FxiOJWZwkksdiNBzEnAueTRIcrtZDOCy8d1cZ7dB5h13O/V9mNKEmvxRVVagspL3z2XmY+3MAZvUZM/KhW1OhJVV7k4LaWsJa8egTQFi6n1sreTHEOp0XBC7c+jWRpSWpK5ao5XWh0NpsdYYlanK/PZoSnRObyydbLASpHS7X1pSva3j0S6WXDjOjZRuO0oQbtF7b1+3yBMe1GI4n+F8EoijMN5TLX7CPILMoCOVS0MUIjuLV40XxtpKvWR/FF60Ddk/Ry9aHNl2OtTqrL+q/sedYi0DoKPa0jW/f/AXPlXh8R+C0AqHLu92YT2I+mia9lPOU80/QLsMTjf6zxotaPKLlPMu62bAby55I4r5MBvEqQF5hbz1IZDKcDKBVazDNlfMvnWAeOjsKzkquhg2vFdqE81ZlzSDhXT4c9SYQheV4PB7D4hA1SLMBFzheiZj3B5O4PxpO4rHP6zBJer2JHMk+H19Gqg3laH+GF7V8Fe3wFO3CP4Bn5T1b1Dp1hp+226GFzeb2H3LxTbN3BnyUp9oh+lPtqdDsNmf3woTXt02P51sfntRFmyMnIFrkuGbbZsizrT/5iRnetBfzYZwMpsk47XfTJPnU0GdQ94MXbUoTWi0K9oB2h5bdWWtsIHuJlBsf/AbDC+ibXAqdXdIJHb6zr5vgwRMi2DYptgWkkBNVaacjqqrmUrkp6UbirnsjbPesV77FtdgWxGo/ISI/IQSiKwotMMwCfwstNoEwEIE/sTZPbvgNP3PqB461aSaK8smSvZtOPzydFEFlHJUitMLmVu+RmvHBY3jhttVP/68jTfN2En6nTlUIpcPr669t39zyDHaJp16Y5CJIm3FnEUFuHHn5fr8SDv+xxeHgt0MKarLthFVi5e9stgepnF9LSNeicPhKLv/42AxGf7Irk9NF2MfepX3n2oli678ggi/4+DymHRaHCHIUEm1AVQtvswwrapmdTUe+Dp9YcH83hcPhBxVzleY=",sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/v1/room-management",custom_edit_url:null,hide_send_button:!0},y=void 0,N={id:"openapi/ucs/v1/get-room-info",title:"Get room info",description:"API to query information of particular room",source:"@site/docs/openapi/ucs/v1/get-room-info.api.mdx",sourceDirName:"openapi/ucs/v1",slug:"/openapi/ucs/v1/get-room-info",permalink:"/aoh-docs/docs/openapi/ucs/v1/get-room-info",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-room-info",title:"Get room info",description:"API to query information of particular room",sidebar_label:"Get room info",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVt2P2jgQ/1esebqTksXhm7xtr6ttH06qupxOKiBk4oG4TezUHmhXiP+9shN2wwLbU9WX4wXH8+HfjOfnmT2Q2DhIZ2CNKR0sIpDoMqsqUkZDCrcf3jMy7OsW7SNTem1sKbyImTWrhCWVbQthmbdmbK7n85h99OsHErR1KZvDG2O+oJxDxObwQMLS8eNOS788mv2bo679KPdSdevQujmwQjlilCMLG6yy6FATU9opiUHgHUAElbCiRELrY9uDFiVCGmJUEiJQPrRKUA4v433/1kcWYJBhFmlrNURg8etWWZSQkt1iBC7LsRSQ7oEeK+/akVV6A4cI8Lsoq8LvrceJ7K8FxiOJWZwkksdiNBzEnAueTRIcrtZDOCy8d1cZ7dB5h13O/V9mNKEmvxRVVagspL3z2XmY+3MAZvUZM/KhW1OhJVV7k4LaWsJa8egTQFi6n1sreTHEOp0XBC7c+jWRpSWpK5ao5XWh0NpsdYYlanK/PZoSnRObyydbLASpHS7X1pSva3j0S6WXDjOjZRuO0oQbtF7b1+3yBMe1GI4n+F8EoijMN5TLX7CPILMoCOVS0MUIjuLV40XxtpKvWR/FF60Ddk/Ry9aHNl2OtTqrL+q/sedYi0DoKPa0jW/f/AXPlXh8R+C0AqHLu92YT2I+mia9lPOU80/QLsMTjf6zxotaPKLlPMu62bAby55I4r5MBvEqQF5hbz1IZDKcDKBVazDNlfMvnWAeOjsKzkquhg2vFdqE81ZlzSDhXT4c9SYQheV4PB7D4hA1SLMBFzheiZj3B5O4PxpO4rHP6zBJer2JHMk+H19Gqg3laH+GF7V8Fe3wFO3CP4Bn5T1b1Dp1hp+226GFzeb2H3LxTbN3BnyUp9oh+lPtqdDsNmf3woTXt02P51sfntRFmyMnIFrkuGbbZsizrT/5iRnetBfzYZwMpsk47XfTJPnU0GdQ94MXbUoTWi0K9oB2h5bdWWtsIHuJlBsf/AbDC+ibXAqdXdIJHb6zr5vgwRMi2DYptgWkkBNVaacjqqrmUrkp6UbirnsjbPesV77FtdgWxGo/ISI/IQSiKwotMMwCfwstNoEwEIE/sTZPbvgNP3PqB461aSaK8smSvZtOPzydFEFlHJUitMLmVu+RmvHBY3jhttVP/68jTfN2En6nTlUIpcPr669t39zyDHaJp16Y5CJIm3FnEUFuHHn5fr8SDv+xxeHgt0MKarLthFVi5e9stgepnF9LSNeicPhKLv/42AxGf7Irk9NF2MfepX3n2oli678ggi/4+DymHRaHCHIUEm1AVQtvswwrapmdTUe+Dp9YcH83hcPhBxVzleY=",sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/v1/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucsAPI-v1",previous:{title:"List rooms",permalink:"/aoh-docs/docs/openapi/ucs/v1/list-rooms"},next:{title:"Update room info",permalink:"/aoh-docs/docs/openapi/ucs/v1/update-room-info"}},q={},M=[];function P(e){const s={br:"br",p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get room info"}),"\n",(0,i.jsx)(l(),{method:"get",path:"/v1/rooms/{roomid}"}),"\n",(0,i.jsxs)(s.p,{children:["API to query information of particular room",(0,i.jsx)(s.br,{}),"\n",'- Room Status: "Booked", "Started", "Ended"',(0,i.jsx)(s.br,{}),"\n",'- When room is "Started", "users" list the users present inside the room']}),"\n",(0,i.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(_.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"data"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"start_time",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"end_time",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"announcements"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"relative_from",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"relative_time_in_seconds",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,i.jsx)(j(),{collapsible:!1,name:"user_id",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"allowed_user_id",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,i.jsx)(j(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"created_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(j(),{collapsible:!1,name:"updated_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "name": "string",\n      "status": "string",\n      "start_time": "string",\n      "end_time": "string",\n      "announcements": [\n        {\n          "id": "string",\n          "message": "string",\n          "relative_from": "string",\n          "relative_time_in_seconds": 0,\n          "user_id": [\n            "string"\n          ]\n        }\n      ],\n      "allowed_user_id": [\n        "string"\n      ],\n      "created_at": "string",\n      "created_by": "string",\n      "updated_at": "string",\n      "updated_by": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,i.jsx)(_.default,{label:"Example",value:"Example",children:(0,i.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",\n      "name": "test-room-ABC",\n      "status": "Started",\n      "start_time": "2022-09-07T13:00:00Z",\n      "end_time": "2022-09-07T14:00:00Z",\n      "announcements": [\n        {\n          "id": "00cc2c62-d3a1-4d15-b1d0-abe3f51d1695",\n          "message": "This is a test message",\n          "relative_from": "start",\n          "relative_time_in_seconds": 900,\n          "user_id": [\n            "10206739",\n            "10208888"\n          ]\n        },\n        {\n          "id": "c50ae8ba-0459-4769-8765-611339d7d408",\n          "message": "This is another test message",\n          "relative_from": "end",\n          "relative_time_in_seconds": 600,\n          "user_id": []\n        }\n      ],\n      "allowed_user_id": [],\n      "users": [\n        {\n          "user_id": "10206739",\n          "user_name": "Shawn Ho"\n        },\n        {\n          "user_id": "10208888",\n          "user_name": "Tan Ah Gao"\n        }\n      ],\n      "created_at": "2022-09-06T13:00:00Z",\n      "created_by": "10206739",\n      "updated_at": "2022-09-06T13:00:00Z",\n      "updated_by": "10206739"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(_.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{})]})]})})})]})}function T(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(P,{...e})}):P(e)}}}]);
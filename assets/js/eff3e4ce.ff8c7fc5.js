"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[3584],{69146:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>_,contentTitle:()=>k,default:()=>E,frontMatter:()=>b,metadata:()=>N,toc:()=>L});var r=s(74848),i=s(28453),n=s(77233),o=s.n(n),t=(s(22661),s(80811)),l=s.n(t),d=(s(41871),s(24791)),c=s.n(d),m=s(35654),p=s.n(m),h=s(69015),u=s.n(h),j=s(84919),v=s.n(j),x=s(84664),f=s.n(x),g=(s(84466),s(85225)),y=(s(71156),s(7227));const b={id:"unarchive-room-for-user-id",title:"Unarchive room for user id",description:"API to unarchive a particular room for the user",sidebar_label:"Unarchive room for user id",hide_title:!0,hide_table_of_contents:!0,api:"eJytVd9v20YM/lcO7EM2QKokN3FavaWLH4ytWJGlGDDHKGgdbV0r6dS7k1ND0P8+8CT/io006KYn6XQkP34kP7bgcGUhnYHRurQwD0CSzYyqndIVpHDzcSqcFk2FJsvVmgSKGo1TWVOgEWwkltoIl5NoLBkIoEaDJTky7LaFCkuC1LtXEgJQ7LVGl8PTUNNboZeiJHKqWnnXEIChb40yJCF1pqEAbJZTiZC24DY1O7bOqGoFXQD0Hcu64LPl20ReLpHCa0lZmCQyDvF6fBXGMcbZu4TGi+UYumAHjpG/CNyQ4g9BqcrRiswRqiQexePrN++6ee+ArHuv5YatMl05qhy/Yl0XKkOOGn2xHLo9da8XXyhzzLXRNRmnyPLfwas2/HEM/wNWEp02G7FUVMhtLp+VFBkWBRPOJbz5OIXgKbPdYcKzgyjzw/SOwsM2Wei63t7WurI9zFEcnwL883cI/i8eJLrDW2gMbri4jkr7EhZLNF/tmRbzqViq3Gd0Z38f0dGjmB04hE/bKZK+vadSXLykVS/8iHG92GJL7QVwJ+3gwCgevQnjcZhc3Sdv08tRmiT/DJgvzzH+HqW460vGfXp17s60cmQqLMRfZNZkxMQYbXxHlORyLSEFSQU58nPvckghWo8iryVR2898FzFyG7X9lHXRwAEwePba60RjCkghd65OowjrOmTrsFyV7rWk9eg1mtHJUN7SEpvCid6P54N75W4/XZPz7bkXDVUtta+lcl467ljRPmCFKyq5FQNghH249SmCV6/E3zm6CysqenyoQpEZQkciy9GJJEx8nfm8p+npOSOotXUl+gYf5GjXJnt9Ze6El6ij+AfS8RNKPfSvo+8uqgtUHo6vQztUc9bn3O+GANKdivuS8slOOrdVnQeQa+vYtm0XaOmTKbqOj781ZDaQzuYBrNEoXDDhsxaksvwuIV1iYemZFH+5G3ToV3F2WZxNaKsCFWvAGouGvyCAr7TZ7yVeBv8Bx3OEPh9/4K9jLc0JJRnPSf/ztz5ieM8u9sYn2sjoe4ubLKPaPXt3fjC8t5M/JvcTCGAxbKJSS7+t8ZHLjo+QwgM8MFzteegVks9bKLBaNbji+71nfv4Fl2vL5w==",sidebar_class_name:"delete api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},k=void 0,N={id:"openapi/ucs/unarchive-room-for-user-id",title:"Unarchive room for user id",description:"API to unarchive a particular room for the user",source:"@site/docs/openapi/ucs/unarchive-room-for-user-id.api.mdx",sourceDirName:"openapi/ucs",slug:"/openapi/ucs/unarchive-room-for-user-id",permalink:"/aoh-docs/docs/openapi/ucs/unarchive-room-for-user-id",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"unarchive-room-for-user-id",title:"Unarchive room for user id",description:"API to unarchive a particular room for the user",sidebar_label:"Unarchive room for user id",hide_title:!0,hide_table_of_contents:!0,api:"eJytVd9v20YM/lcO7EM2QKokN3FavaWLH4ytWJGlGDDHKGgdbV0r6dS7k1ND0P8+8CT/io006KYn6XQkP34kP7bgcGUhnYHRurQwD0CSzYyqndIVpHDzcSqcFk2FJsvVmgSKGo1TWVOgEWwkltoIl5NoLBkIoEaDJTky7LaFCkuC1LtXEgJQ7LVGl8PTUNNboZeiJHKqWnnXEIChb40yJCF1pqEAbJZTiZC24DY1O7bOqGoFXQD0Hcu64LPl20ReLpHCa0lZmCQyDvF6fBXGMcbZu4TGi+UYumAHjpG/CNyQ4g9BqcrRiswRqiQexePrN++6ee+ArHuv5YatMl05qhy/Yl0XKkOOGn2xHLo9da8XXyhzzLXRNRmnyPLfwas2/HEM/wNWEp02G7FUVMhtLp+VFBkWBRPOJbz5OIXgKbPdYcKzgyjzw/SOwsM2Wei63t7WurI9zFEcnwL883cI/i8eJLrDW2gMbri4jkr7EhZLNF/tmRbzqViq3Gd0Z38f0dGjmB04hE/bKZK+vadSXLykVS/8iHG92GJL7QVwJ+3gwCgevQnjcZhc3Sdv08tRmiT/DJgvzzH+HqW460vGfXp17s60cmQqLMRfZNZkxMQYbXxHlORyLSEFSQU58nPvckghWo8iryVR2898FzFyG7X9lHXRwAEwePba60RjCkghd65OowjrOmTrsFyV7rWk9eg1mtHJUN7SEpvCid6P54N75W4/XZPz7bkXDVUtta+lcl467ljRPmCFKyq5FQNghH249SmCV6/E3zm6CysqenyoQpEZQkciy9GJJEx8nfm8p+npOSOotXUl+gYf5GjXJnt9Ze6El6ij+AfS8RNKPfSvo+8uqgtUHo6vQztUc9bn3O+GANKdivuS8slOOrdVnQeQa+vYtm0XaOmTKbqOj781ZDaQzuYBrNEoXDDhsxaksvwuIV1iYemZFH+5G3ToV3F2WZxNaKsCFWvAGouGvyCAr7TZ7yVeBv8Bx3OEPh9/4K9jLc0JJRnPSf/ztz5ieM8u9sYn2sjoe4ubLKPaPXt3fjC8t5M/JvcTCGAxbKJSS7+t8ZHLjo+QwgM8MFzteegVks9bKLBaNbji+71nfv4Fl2vL5w==",sidebar_class_name:"delete api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null},sidebar:"ucsAPI-v2",previous:{title:"Archive room for user id",permalink:"/aoh-docs/docs/openapi/ucs/archive-room-for-user-id"},next:{title:"Grant administrator rights to user id",permalink:"/aoh-docs/docs/openapi/ucs/grant-administrator-rights-to-user-id"}},_={},L=[];function G(e){const a={p:"p",...(0,i.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Unarchive room for user id"}),"\n",(0,r.jsx)(l(),{method:"delete",path:"/v2/rooms/{roomid}/users/{userid}/archive"}),"\n",(0,r.jsx)(a.p,{children:"API to unarchive a particular room for the user"}),"\n",(0,r.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,r.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,r.jsx)(a.p,{children:"Path Parameters"})})}),(0,r.jsx)("div",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of meeting room",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}}),(0,r.jsx)(p(),{className:"paramsItem",param:{name:"userid",in:"path",description:"ID of user",required:!0,schema:{type:"integer"},example:10206739}})]})})]}),"\n",(0,r.jsx)(c(),{className:"openapi-tabs__mime",children:(0,r.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,r.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,r.jsx)(a.p,{children:"Body"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,r.jsx)(v(),{collapsible:!1,name:"requestor",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Mandatory field of user_id calling the API",type:"string"}})})]})})}),"\n",(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsxs)(o(),{label:void 0,id:void 0,children:[(0,r.jsxs)(y.default,{label:"200",value:"200",children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.p,{children:"OK"})}),(0,r.jsx)("div",{children:(0,r.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,r.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,r.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,r.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,r.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,r.jsx)("strong",{children:(0,r.jsx)(a.p,{children:"Schema"})})}),(0,r.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,r.jsx)(v(),{collapsible:!0,className:"schemaItem",children:(0,r.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,r.jsx)("summary",{style:{},children:(0,r.jsxs)("span",{className:"openapi-schema__container",children:[(0,r.jsx)("strong",{className:"openapi-schema__property",children:(0,r.jsx)(a.p,{children:"data"})}),(0,r.jsx)("span",{className:"openapi-schema__name",children:(0,r.jsx)(a.p,{children:"object[]"})})]})}),(0,r.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,r.jsx)("li",{children:(0,r.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,r.jsx)(a.p,{children:"Array ["})})}),(0,r.jsx)(v(),{collapsible:!1,name:"remarks",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,r.jsx)("li",{children:(0,r.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,r.jsx)(a.p,{children:"]"})})})]})]})}),(0,r.jsx)(v(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,r.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,r.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "remarks": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,r.jsx)(y.default,{label:"Example",value:"Example",children:(0,r.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "remarks": "Unarchived roomId \'f81d4fae-7dec-11d0-a765-00a0c91e6bf6\' for userId \'10206739\'"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,r.jsxs)(y.default,{label:"400",value:"400",children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.p,{children:"Bad Request"})}),(0,r.jsx)("div",{})]}),(0,r.jsxs)(y.default,{label:"500",value:"500",children:[(0,r.jsx)("div",{children:(0,r.jsx)(a.p,{children:"Internal Server Error"})}),(0,r.jsx)("div",{})]})]})})})]})}function E(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(G,{...e})}):G(e)}}}]);
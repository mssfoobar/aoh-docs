"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7820],{37801:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>N,contentTitle:()=>E,default:()=>F,frontMatter:()=>v,metadata:()=>_,toc:()=>k});var t=s(74848),i=s(28453),n=s(77233),o=s.n(n),r=(s(22661),s(80811)),l=s.n(r),c=(s(41871),s(24791)),m=s.n(c),d=s(35654),h=s.n(d),p=s(69015),u=s.n(p),f=s(84919),j=s.n(f),x=s(84664),g=s.n(x),b=(s(84466),s(85225)),y=(s(71156),s(7227));const v={id:"get-chat-info-by-room-id",title:"Get chat info by room ID",description:"API to query total sum of chat messages and chat attachments available from a particular room session",sidebar_label:"Get chat info by room ID",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VF1v01AM/StX5gGQEpoEtkHeBkNoQggEQ0gb1eQmbnMhuTf4OoUqyn9HTrqxreXjiaemtu/xsY/tHgRXAfILYO+bAPMISgoF21asd5DD8btTI95864g3RrxgbULXGL80RYViGgoBVxQMunKyoAgWVUNOgsE12hoXNZkl+8agaZHFFl2NbDSfCRSC5omgRcaGhFjJ9OCwIchHUraECKxyaVEquEvw9ETJjGjiDZN0rHhM3zrLVEIu3FEEoaioQch7kE2r0EHYuhUMEdAPbNpabcunaflkiRQflVTEaVomMR4dHsRJgknxLKXDxfIQhrmih9a7QEEBsyTRn9u03r6GCArvhJyoF9u2tgWqd/YlaEi/y8kvvlAh2g32LbHYKUGJcjMKmXGjPRFqwt9f23Jv1VOH9ziCIMul2N+4mQrP5WXhu6mwbYB1QitiGIZBMcjJJcoegOFmw69Ku5hY/lv/r6iDUJBYhY+Pn7+A28QhS7IsTp7FydFZ+jhPkjxJzuEu+0y1vOaqbx7HyWGcHpylT/MnWZ6m59uCDvZpfOqE2GFtPhCvic1LZq8diKAhqbxWtKJREB3cHGbrbDau2ayfBnuY6cpYt/RKfwSZxr/jGnKoRNp8NsO2ncpsVo08KmmdPULOdhbhhJbY1WImnHFMR2TVwMo43+91S96gwxXpgkIEmnF6vt5FvHfPfKpQ7gfj6PtnF5uCCYWmPU/jdNw6tZdU065dp6X1QRocp32r2iuSKVDJmcVmWt3Tk7vZ+1/b89+O0HZWhX7IrK3RjiWMWvRbDS+mPk3HMoL8+kBdCzmPoPJBNLTvFxjoI9fDoOaRPuQX8wjWyFYpjWKXNuh3CfkS60B/6MOD99ur9tD85uztreDqbji9GmusO/0HEXylza8bO8yHCCrCknhkNTmPi4JaufFs547pnF2P+6uXZzAMPwEEjx+N",sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null,hide_send_button:!0},E=void 0,_={id:"openapi/ucs/get-chat-info-by-room-id",title:"Get chat info by room ID",description:"API to query total sum of chat messages and chat attachments available from a particular room session",source:"@site/docs/openapi/ucs/get-chat-info-by-room-id.api.mdx",sourceDirName:"openapi/ucs",slug:"/openapi/ucs/get-chat-info-by-room-id",permalink:"/aoh-docs/docs/openapi/ucs/get-chat-info-by-room-id",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-chat-info-by-room-id",title:"Get chat info by room ID",description:"API to query total sum of chat messages and chat attachments available from a particular room session",sidebar_label:"Get chat info by room ID",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VF1v01AM/StX5gGQEpoEtkHeBkNoQggEQ0gb1eQmbnMhuTf4OoUqyn9HTrqxreXjiaemtu/xsY/tHgRXAfILYO+bAPMISgoF21asd5DD8btTI95864g3RrxgbULXGL80RYViGgoBVxQMunKyoAgWVUNOgsE12hoXNZkl+8agaZHFFl2NbDSfCRSC5omgRcaGhFjJ9OCwIchHUraECKxyaVEquEvw9ETJjGjiDZN0rHhM3zrLVEIu3FEEoaioQch7kE2r0EHYuhUMEdAPbNpabcunaflkiRQflVTEaVomMR4dHsRJgknxLKXDxfIQhrmih9a7QEEBsyTRn9u03r6GCArvhJyoF9u2tgWqd/YlaEi/y8kvvlAh2g32LbHYKUGJcjMKmXGjPRFqwt9f23Jv1VOH9ziCIMul2N+4mQrP5WXhu6mwbYB1QitiGIZBMcjJJcoegOFmw69Ku5hY/lv/r6iDUJBYhY+Pn7+A28QhS7IsTp7FydFZ+jhPkjxJzuEu+0y1vOaqbx7HyWGcHpylT/MnWZ6m59uCDvZpfOqE2GFtPhCvic1LZq8diKAhqbxWtKJREB3cHGbrbDau2ayfBnuY6cpYt/RKfwSZxr/jGnKoRNp8NsO2ncpsVo08KmmdPULOdhbhhJbY1WImnHFMR2TVwMo43+91S96gwxXpgkIEmnF6vt5FvHfPfKpQ7gfj6PtnF5uCCYWmPU/jdNw6tZdU065dp6X1QRocp32r2iuSKVDJmcVmWt3Tk7vZ+1/b89+O0HZWhX7IrK3RjiWMWvRbDS+mPk3HMoL8+kBdCzmPoPJBNLTvFxjoI9fDoOaRPuQX8wjWyFYpjWKXNuh3CfkS60B/6MOD99ur9tD85uztreDqbji9GmusO/0HEXylza8bO8yHCCrCknhkNTmPi4JaufFs547pnF2P+6uXZzAMPwEEjx+N",sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucsAPI-v2",previous:{title:"Close room",permalink:"/aoh-docs/docs/openapi/ucs/close-room"},next:{title:"List chat messages",permalink:"/aoh-docs/docs/openapi/ucs/list-chat-messages"}},N={},k=[];function P(e){const a={p:"p",...(0,i.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get chat info by room ID"}),"\n",(0,t.jsx)(l(),{method:"get",path:"/v2/rooms/{roomid}/chatinfo"}),"\n",(0,t.jsx)(a.p,{children:"API to query total sum of chat messages and chat attachments available from a particular room session"}),"\n",(0,t.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(h(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(o(),{label:void 0,id:void 0,children:[(0,t.jsxs)(y.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"OK"})}),(0,t.jsx)("div",{children:(0,t.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(a.p,{children:"data"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(a.p,{children:"object[]"})})]})}),(0,t.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,t.jsx)(a.p,{children:"Array ["})})}),(0,t.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(j(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(j(),{collapsible:!1,name:"start_time",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(j(),{collapsible:!1,name:"record_count",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,t.jsx)(a.p,{children:"]"})})})]})]})}),(0,t.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,t.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "name": "string",\n      "start_time": "string",\n      "record_count": 0\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,t.jsx)(y.default,{label:"Example",value:"Example",children:(0,t.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",\n      "name": "test-room-ABC",\n      "start_time": "2022-09-07T13:00:00Z",\n      "record_count": 2\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(y.default,{label:"500",value:"500",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Internal Server Error"})}),(0,t.jsx)("div",{})]})]})})})]})}function F(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(P,{...e})}):P(e)}}}]);
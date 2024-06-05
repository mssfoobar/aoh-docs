"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5349],{8445:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>I,contentTitle:()=>k,default:()=>R,frontMatter:()=>y,metadata:()=>_,toc:()=>N});var n=s(74848),t=s(28453),i=s(77233),l=s.n(i),r=(s(22661),s(80811)),c=s.n(r),o=(s(41871),s(24791)),d=s.n(o),p=s(35654),m=s.n(p),h=s(69015),x=s.n(h),j=s(84919),b=s.n(j),u=s(84664),g=s.n(u),f=(s(84466),s(85225)),v=(s(71156),s(7227));const y={id:"create-playback-room",title:"Create playback room",description:"API to create a playback instance",sidebar_label:"Create playback room",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVE1v2zAM/SsGTxtgx3aapqlvXTtgPQwr2uyyICgYiU7U2pIryUEDw/99oJ2kWZNu88Vf5CP59B4b8Lh0kM2gKnCzQPEM8xAkOWFV5ZXRkMHV3W3gTSAsoacAg11koLTzqAVBCBVaLMmTZawGNJYEGVhjSiUhBMU4FfoVvAe/vQlMHnAg17Dka6shBEsvtbIkIfO2phCcWFGJkDXgNxVDO2+VXkIbAr1iWRX8LZ+kcpQjRReSRJSmMonwYnweJQkm4jKl8SIfQztndFcZ7cgx4DBJ+LYilF37DVwb7Un7aNqVaj4sflgbq6pQAnmq+MkZDW3bhiB6JE49CjgFbBZPJDzzaU1F1qu+RYn+MAqtxQ2z6ql0/85W8iRvsrZdN49KPzoSRkt3Iq4bw5H2j+hP/j4gYdforK8JMr9Mk8tRHqW5lNFoQeMIJ2Ic0Sg5mwghJhd5Ch80cjZO+OLT2leHYTI8i5JxlJ5P00k2GmZp+mvb4qg/xT/F9QVlcE8vNTnPE5+firnVnqzGIngguyYbfLXWWGDIkvzK8ByVcR2rrN8M4nUa7ywQs3Bd3PRCb4GbZZTeBbUtIIOV91UWx1hVEYdF5bL0A0nr4QDt8MgPN5RjXfigx+nUqnRuOuqV76R2z2b5jhqXVLK4QuCKfXo6SAbJESg7ODe2t1m5zwy+Tad3+0phN2eJnTK3Br7uPb93PAO8R2/eVP5fq2KrIE+vnnlUmkt3VDVbimewZl3sN1LYLRIHIWTbjTIPYcWHks2gaRbo6Kct2pY/v9RkN5DN5iGs0SpcMGWzBqRy/Cwhy7Fw9JcZPt1vd8/n4IPldHKCnTc1O3ONRc1vEMIzbd42YTtvw+2m6brqf14JQZU/SDteJvMDOd79eJhC2/4G6DbsTg==",sidebar_class_name:"post api-method",info_path:"docs/openapi/ucs/v1/room-management",custom_edit_url:null,hide_send_button:!0},k=void 0,_={id:"openapi/ucs/v1/create-playback-room",title:"Create playback room",description:"API to create a playback instance",source:"@site/docs/openapi/ucs/v1/create-playback-room.api.mdx",sourceDirName:"openapi/ucs/v1",slug:"/openapi/ucs/v1/create-playback-room",permalink:"/aoh-docs/docs/openapi/ucs/v1/create-playback-room",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-playback-room",title:"Create playback room",description:"API to create a playback instance",sidebar_label:"Create playback room",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVE1v2zAM/SsGTxtgx3aapqlvXTtgPQwr2uyyICgYiU7U2pIryUEDw/99oJ2kWZNu88Vf5CP59B4b8Lh0kM2gKnCzQPEM8xAkOWFV5ZXRkMHV3W3gTSAsoacAg11koLTzqAVBCBVaLMmTZawGNJYEGVhjSiUhBMU4FfoVvAe/vQlMHnAg17Dka6shBEsvtbIkIfO2phCcWFGJkDXgNxVDO2+VXkIbAr1iWRX8LZ+kcpQjRReSRJSmMonwYnweJQkm4jKl8SIfQztndFcZ7cgx4DBJ+LYilF37DVwb7Un7aNqVaj4sflgbq6pQAnmq+MkZDW3bhiB6JE49CjgFbBZPJDzzaU1F1qu+RYn+MAqtxQ2z6ql0/85W8iRvsrZdN49KPzoSRkt3Iq4bw5H2j+hP/j4gYdforK8JMr9Mk8tRHqW5lNFoQeMIJ2Ic0Sg5mwghJhd5Ch80cjZO+OLT2leHYTI8i5JxlJ5P00k2GmZp+mvb4qg/xT/F9QVlcE8vNTnPE5+firnVnqzGIngguyYbfLXWWGDIkvzK8ByVcR2rrN8M4nUa7ywQs3Bd3PRCb4GbZZTeBbUtIIOV91UWx1hVEYdF5bL0A0nr4QDt8MgPN5RjXfigx+nUqnRuOuqV76R2z2b5jhqXVLK4QuCKfXo6SAbJESg7ODe2t1m5zwy+Tad3+0phN2eJnTK3Br7uPb93PAO8R2/eVP5fq2KrIE+vnnlUmkt3VDVbimewZl3sN1LYLRIHIWTbjTIPYcWHks2gaRbo6Kct2pY/v9RkN5DN5iGs0SpcMGWzBqRy/Cwhy7Fw9JcZPt1vd8/n4IPldHKCnTc1O3ONRc1vEMIzbd42YTtvw+2m6brqf14JQZU/SDteJvMDOd79eJhC2/4G6DbsTg==",sidebar_class_name:"post api-method",info_path:"docs/openapi/ucs/v1/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucsAPI-v1",previous:{title:"Delete announcement",permalink:"/aoh-docs/docs/openapi/ucs/v1/delete-announcement"},next:{title:"Start playback",permalink:"/aoh-docs/docs/openapi/ucs/v1/start-playback"}},I={},N=[];function q(e){const a={p:"p",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Create playback room"}),"\n",(0,n.jsx)(c(),{method:"post",path:"/v1/playback/rooms/{roomid}"}),"\n",(0,n.jsx)(a.p,{children:"API to create a playback instance"}),"\n",(0,n.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(m(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}})})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(l(),{label:void 0,id:void 0,children:[(0,n.jsxs)(v.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{}),(0,n.jsxs)(s,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Response Headers"})})}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsxs)("li",{className:"schemaItem",children:[(0,n.jsxs)("summary",{style:{},children:[(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Content-Type"})}),(0,n.jsx)("span",{style:{opacity:"0.6"},children:(0,n.jsx)(a.p,{children:"string"})})]}),(0,n.jsx)("div",{})]})})]}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(b(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(a.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(a.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"Array ["})})}),(0,n.jsx)(b(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(b(),{collapsible:!1,name:"duration_in_seconds",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(a.p,{children:"]"})})})]})]})}),(0,n.jsx)(b(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "duration_in_seconds": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(v.default,{label:"Example",value:"Example",children:(0,n.jsx)(x(),{responseExample:'{\n  "data": [\n    {\n      "id": "df91094f-1fdd-4be6-a8c6-e4038ccc87f1",\n      "duration_in_seconds": 3600000\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(v.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Bad Request"})}),(0,n.jsx)("div",{})]}),(0,n.jsxs)(v.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{})]})]})})})]})}function R(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(q,{...e})}):q(e)}}}]);
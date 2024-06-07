"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[1482],{53499:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>C,contentTitle:()=>g,default:()=>R,frontMatter:()=>y,metadata:()=>b,toc:()=>I});var n=a(74848),i=a(28453),l=a(77233),d=a.n(l),t=(a(22661),a(80811)),r=a.n(t),o=(a(41871),a(24791)),m=a.n(o),c=a(35654),p=a.n(c),h=a(69015),u=a.n(h),f=a(84919),x=a.n(f),j=a(84664),v=a.n(j),J=(a(84466),a(85225)),w=(a(71156),a(7227));const y={id:"file-download",title:"File download",description:"API to download file using presigned Url",sidebar_label:"File download",hide_title:!0,hide_table_of_contents:!0,api:"eJylVW1v2zYQ/ivCARk2QIxeLMmWAGPwmmbJhwJFkmJDg6A4kSebnUSpJO0mNfTfB0qO6yzJlqWfLPPluYd39zy3BYtLA8U1oLXIVw0pCzc+CDJcy87KVkEBi/fnnm090X5VdYvCq2RN3tpItfQ6TUYuFQnvg67Bhw41NmRJO9AtKGwICtBt20gBPkgH16FdwT9jnJ94beW5gy6UJrvWCnzQ9GUtNQkorF6TD4avqEEotmDvOgdtrJZqCb0PdItNV7u1ahaJpEJiU0GcRZEIGU6zlIUhhjyPKCurDHp/T29tSL+InjvoSWWkIM+uaKD7EpJSWVqSfsAyCuMwm07yAx4ury/iMRRAKq+RSraesa3GJb02W1GeJXmcz1iZCGRJFVcspzhhfEql4HGI0yyD/sahm65VhowDjMPQ/fBWWdczxRaw62rJ0RENPhvHdvuYQFt+Jm5do+i2I23liCbQHp5CrfHO5cFSY/779lrXT7yx73sfDCn7Ce2T2wdJuGdwvQODlbVdEQR1y7FetcYWeRiGwUYK3qoqQJFm5Wwq2GSW5izJMGO5SComRJJORJrFeRkG3xUVcOIimxFnPKuQJckkY3nCkeVJhWlOvMzj6a9/skXzjS3qZaulXTXzxR+XCTt7t3jDLs8WcZr9NB54o0mQshLr+VB+FI1UR/FpHMaTMIqyo/h0bRihsSw6ik/N5Cg+xa8m+eSag4zdwZygpfn9naswTmeT/ONu7+1tJzWZeRbuFi4HiZ8RCtJm7vJxsIF2rWnOcVImiZjOprzKJkkaZ5M8nYkZn2KVRJO8CpNykoRTqqhMOLrPPK9iyijLEcNo6LB9tcAxY2HGovQqmhVJXETRx11Jk7HzHuriNxTexfhA193pU2fOlSWtsPYuSW9Ie2+1bjU4yIbsqhVQwJKG7nLKKyDYRIFTuAm2o4H1gTMAE2xHw+gDp0MTbEfd9sG9QYJ7iQthHncUdh1zaKxZNvZY0CY+Rh0/0vkJVbiurTfiDMmRqmqHPpZ20O2F88p3qHBJg2374CKO16Pj8Dh8BOp8vGr16LLN/qZ3dnX1fh/Jh641tsFBvztjOnV+c/C6B7AHJvB/JsVOjpZubdDVKJULvVPyWIBr2ETO1FwJwIdiP0WGKriVvXEPhXArewvds73xwTWsg9tuSzT0Qdd975a/rEnfQXF948MGtcTSpfV6C0Ia9y2gqLA29C/P/fliZ7i/eM/Mrydfee9yynncBuu1+wc+/EV334elmws/wOSZUfUKPrsk/yCf50bWKwjtatzf9D6sBk8ayjZuLjinzh5cezSWnJb2gv/97RX0/d/84/pp",sidebar_class_name:"get api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v1/room-management",custom_edit_url:null,hide_send_button:!0},g=void 0,b={id:"modules/ucs/Universal Comms API/v1/file-download",title:"File download",description:"API to download file using presigned Url",source:"@site/docs/40_modules/30_ucs/Universal Comms API/v1/file-download.api.mdx",sourceDirName:"40_modules/30_ucs/Universal Comms API/v1",slug:"/modules/ucs/Universal Comms API/v1/file-download",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v1/file-download",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"file-download",title:"File download",description:"API to download file using presigned Url",sidebar_label:"File download",hide_title:!0,hide_table_of_contents:!0,api:"eJylVW1v2zYQ/ivCARk2QIxeLMmWAGPwmmbJhwJFkmJDg6A4kSebnUSpJO0mNfTfB0qO6yzJlqWfLPPluYd39zy3BYtLA8U1oLXIVw0pCzc+CDJcy87KVkEBi/fnnm090X5VdYvCq2RN3tpItfQ6TUYuFQnvg67Bhw41NmRJO9AtKGwICtBt20gBPkgH16FdwT9jnJ94beW5gy6UJrvWCnzQ9GUtNQkorF6TD4avqEEotmDvOgdtrJZqCb0PdItNV7u1ahaJpEJiU0GcRZEIGU6zlIUhhjyPKCurDHp/T29tSL+InjvoSWWkIM+uaKD7EpJSWVqSfsAyCuMwm07yAx4ury/iMRRAKq+RSraesa3GJb02W1GeJXmcz1iZCGRJFVcspzhhfEql4HGI0yyD/sahm65VhowDjMPQ/fBWWdczxRaw62rJ0RENPhvHdvuYQFt+Jm5do+i2I23liCbQHp5CrfHO5cFSY/779lrXT7yx73sfDCn7Ce2T2wdJuGdwvQODlbVdEQR1y7FetcYWeRiGwUYK3qoqQJFm5Wwq2GSW5izJMGO5SComRJJORJrFeRkG3xUVcOIimxFnPKuQJckkY3nCkeVJhWlOvMzj6a9/skXzjS3qZaulXTXzxR+XCTt7t3jDLs8WcZr9NB54o0mQshLr+VB+FI1UR/FpHMaTMIqyo/h0bRihsSw6ik/N5Cg+xa8m+eSag4zdwZygpfn9naswTmeT/ONu7+1tJzWZeRbuFi4HiZ8RCtJm7vJxsIF2rWnOcVImiZjOprzKJkkaZ5M8nYkZn2KVRJO8CpNykoRTqqhMOLrPPK9iyijLEcNo6LB9tcAxY2HGovQqmhVJXETRx11Jk7HzHuriNxTexfhA193pU2fOlSWtsPYuSW9Ie2+1bjU4yIbsqhVQwJKG7nLKKyDYRIFTuAm2o4H1gTMAE2xHw+gDp0MTbEfd9sG9QYJ7iQthHncUdh1zaKxZNvZY0CY+Rh0/0vkJVbiurTfiDMmRqmqHPpZ20O2F88p3qHBJg2374CKO16Pj8Dh8BOp8vGr16LLN/qZ3dnX1fh/Jh641tsFBvztjOnV+c/C6B7AHJvB/JsVOjpZubdDVKJULvVPyWIBr2ETO1FwJwIdiP0WGKriVvXEPhXArewvds73xwTWsg9tuSzT0Qdd975a/rEnfQXF948MGtcTSpfV6C0Ia9y2gqLA29C/P/fliZ7i/eM/Mrydfee9yynncBuu1+wc+/EV334elmws/wOSZUfUKPrsk/yCf50bWKwjtatzf9D6sBk8ayjZuLjinzh5cezSWnJb2gv/97RX0/d/84/pp",sidebar_class_name:"get api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v1/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucs",previous:{title:"Delete announcement",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v1/delete-announcement"},next:{title:"File upload",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v1/file-upload"}},C={},I=[];function _(e){const s={p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(J.default,{as:"h1",className:"openapi__heading",children:"File download"}),"\n",(0,n.jsx)(r(),{method:"get",path:"/v1/rooms/{roomid}/users/{userid}/files/{fileid}/download"}),"\n",(0,n.jsx)(s.p,{children:"API to download file using presigned Url"}),"\n",(0,n.jsx)(J.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}}),(0,n.jsx)(p(),{className:"paramsItem",param:{name:"userid",in:"path",description:"ID of user inside the room",required:!0,schema:{type:"integer"},example:10206739}}),(0,n.jsx)(p(),{className:"paramsItem",param:{name:"fileid",in:"path",description:"ID of file in minio storage",required:!0,schema:{type:"string"},example:"19649298-b4da-4f2f-9e24-c7ebdc20a766"}})]})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(d(),{label:void 0,id:void 0,children:[(0,n.jsxs)(w.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(w.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(w.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(x(),{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(x(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(w.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "url": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(w.default,{label:"Example",value:"Example",children:(0,n.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "url": "http://localhost:9000/vidconf/ad56b87d-3859-46a6-9d4f-dd453d5629b0/attachment/cecd68ec-c6fa-4436-94ca-94fa59ecb927?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T025839Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&X-Amz-Signature=ca3b44d787cf6345263958d8c7af4139f04b3407efeb4ca340799f2e6e69aa01"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(w.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Bad Request"})}),(0,n.jsx)("div",{})]}),(0,n.jsxs)(w.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{})]})]})})})]})}function R(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(_,{...e})}):_(e)}}}]);
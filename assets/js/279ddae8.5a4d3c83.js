"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[3731],{61887:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>y,default:()=>Z,frontMatter:()=>g,metadata:()=>_,toc:()=>V});var i=a(74848),r=a(28453),n=a(77233),l=a.n(n),t=(a(22661),a(80811)),d=a.n(t),o=(a(41871),a(24791)),c=a.n(o),m=a(35654),p=a.n(m),h=a(69015),u=a.n(h),x=a(84919),j=a.n(x),f=a(84664),v=a.n(f),k=(a(84466),a(85225)),b=(a(71156),a(7227));const g={id:"kick-user",title:"Kick user",description:"API to a kick a particular user from a particular room",sidebar_label:"Kick user",hide_title:!0,hide_table_of_contents:!0,api:"eJytVVFv2kgQ/iur6QN3kl1smpDWb+mFB9SrrsrldFIJqgbvAFtsr7s7kCLL//00XkggoCpqz0/2eHfm+76Z/bYBxoWHbALO2tLDNAJNPnemZmMryOD601ixVahWJl8pVDU6Nvm6QKfWnpyaO1sehyURRFCjw5KYnGRvoMKSIOuqGA0RGEleIy/hecXxjbJzVRKxqRb7bI6+rY0jDRm7NUXg8yWVCFkDvK0lsWdnqgW0EdB3LOtCYvO3qb6YI8VXmvI4TXUS49XwMk4STPJ3KQ1n8yG00SM4IfQicB1ztmpGylFpN6RfAtFUTAtyRxjTZJAMr968a6chAXl+b/VWduW2YqpYXrGuC5OjYOh/9QKkOU1vZ18pZ1He2ZocG/Lyd5fVOvk4JvMRK41s3VbNDRV6z+yL0SrHohD5eUnq+tMYouc6t4eEJwdVpof0jsrDniy0bdjva1v5AHOQJKcA//oA0f+lg0Y+XIXO4VZazVT6l6hYolv5MwPXUfFU8Rfks7+P5AgoJgcJ4YPJV6RVGD7V24vUC0dL5n+sVe8ls9wDGaNHLDBIBm/iZBinl3fp2+xikKXp5x3gi3Nyv0etbkO/ZEgvz60ZV0yuwkL9TW5DTo2cs64bh5J4aTVkoKkgps4CeAkZ9DeDfucu/SYc/7YvZH2/CZxbENCSLVjF2hWQwZK5zvp9rOtYdsXlouTXmjaD1+gGJ+fyhua4LliFPJ0OMiC3T0dqdH4mn3zDVHPbNdBw5x631pbqI1a4oFLmLwJBGMptThG8eqX+XSL3vKro4b6KVe4ImVS+RFZpnHadlHiQ53lcENTWc4ndVO8cSWajm4zn5Q7s4ectejeqTN+5XxdoOhCd+s2ud5PANNwNEWSP9t01UCI7z5xGsLSeZUfTzNDTP65oWwl/W5PbQjaZRrBBZ3Am4k4a0MbLu4ZsjoWnH/D77XZnNL+rs3fDWRr7Y17JId9gsZYviGBF26drSLz/F3CcvQZ+As1Ow1asc0moyXUKhZ9/hPrxnaR42nxihcIl7LjOc6r5h2unB8f1ZvTn6G4EEcx2F09pdXdV44O0Hh8gg3u4F7i2UyUYosQbKLBarHEh60Nmef4D7QvMew==",sidebar_class_name:"delete api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null,hide_send_button:!0},y=void 0,_={id:"openapi/ucs/kick-user",title:"Kick user",description:"API to a kick a particular user from a particular room",source:"@site/docs/openapi/ucs/kick-user.api.mdx",sourceDirName:"openapi/ucs",slug:"/openapi/ucs/kick-user",permalink:"/aoh-docs/docs/openapi/ucs/kick-user",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"kick-user",title:"Kick user",description:"API to a kick a particular user from a particular room",sidebar_label:"Kick user",hide_title:!0,hide_table_of_contents:!0,api:"eJytVVFv2kgQ/iur6QN3kl1smpDWb+mFB9SrrsrldFIJqgbvAFtsr7s7kCLL//00XkggoCpqz0/2eHfm+76Z/bYBxoWHbALO2tLDNAJNPnemZmMryOD601ixVahWJl8pVDU6Nvm6QKfWnpyaO1sehyURRFCjw5KYnGRvoMKSIOuqGA0RGEleIy/hecXxjbJzVRKxqRb7bI6+rY0jDRm7NUXg8yWVCFkDvK0lsWdnqgW0EdB3LOtCYvO3qb6YI8VXmvI4TXUS49XwMk4STPJ3KQ1n8yG00SM4IfQicB1ztmpGylFpN6RfAtFUTAtyRxjTZJAMr968a6chAXl+b/VWduW2YqpYXrGuC5OjYOh/9QKkOU1vZ18pZ1He2ZocG/Lyd5fVOvk4JvMRK41s3VbNDRV6z+yL0SrHohD5eUnq+tMYouc6t4eEJwdVpof0jsrDniy0bdjva1v5AHOQJKcA//oA0f+lg0Y+XIXO4VZazVT6l6hYolv5MwPXUfFU8Rfks7+P5AgoJgcJ4YPJV6RVGD7V24vUC0dL5n+sVe8ls9wDGaNHLDBIBm/iZBinl3fp2+xikKXp5x3gi3Nyv0etbkO/ZEgvz60ZV0yuwkL9TW5DTo2cs64bh5J4aTVkoKkgps4CeAkZ9DeDfucu/SYc/7YvZH2/CZxbENCSLVjF2hWQwZK5zvp9rOtYdsXlouTXmjaD1+gGJ+fyhua4LliFPJ0OMiC3T0dqdH4mn3zDVHPbNdBw5x631pbqI1a4oFLmLwJBGMptThG8eqX+XSL3vKro4b6KVe4ImVS+RFZpnHadlHiQ53lcENTWc4ndVO8cSWajm4zn5Q7s4ectejeqTN+5XxdoOhCd+s2ud5PANNwNEWSP9t01UCI7z5xGsLSeZUfTzNDTP65oWwl/W5PbQjaZRrBBZ3Am4k4a0MbLu4ZsjoWnH/D77XZnNL+rs3fDWRr7Y17JId9gsZYviGBF26drSLz/F3CcvQZ+As1Ow1asc0moyXUKhZ9/hPrxnaR42nxihcIl7LjOc6r5h2unB8f1ZvTn6G4EEcx2F09pdXdV44O0Hh8gg3u4F7i2UyUYosQbKLBarHEh60Nmef4D7QvMew==",sidebar_class_name:"delete api-method",info_path:"docs/openapi/ucs/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucsAPI-v2",previous:{title:"List chat messages in a range",permalink:"/aoh-docs/docs/openapi/ucs/list-chat-messages-in-a-range"},next:{title:"Archive room for user id",permalink:"/aoh-docs/docs/openapi/ucs/archive-room-for-user-id"}},N={},V=[];function L(e){const s={p:"p",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.default,{as:"h1",className:"openapi__heading",children:"Kick user"}),"\n",(0,i.jsx)(d(),{method:"delete",path:"/v2/rooms/{roomid}/users/{userid}"}),"\n",(0,i.jsx)(s.p,{children:"API to a kick a particular user from a particular room"}),"\n",(0,i.jsx)(k.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of meeting room",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}}),(0,i.jsx)(p(),{className:"paramsItem",param:{name:"userid",in:"path",description:"ID of user to be removed",required:!0,schema:{type:"integer"},example:10206739}})]})})]}),"\n",(0,i.jsx)(c(),{className:"openapi-tabs__mime",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"requestor",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Mandatory field of user_id calling the API",type:"string"}})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(l(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"data"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(j(),{collapsible:!1,name:"remarks",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "remarks": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,i.jsx)(b.default,{label:"Example",value:"Example",children:(0,i.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "remarks": "Kicked userid \'10206739\' from roomId \'f81d4fae-7dec-11d0-a765-00a0c91e6bf6\'"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Bad Request"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(b.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{})]})]})})})]})}function Z(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(L,{...e})}):L(e)}}}]);
"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7599],{71814:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>V,contentTitle:()=>_,default:()=>S,frontMatter:()=>b,metadata:()=>C,toc:()=>k});var l=a(74848),n=a(28453),i=a(77233),o=a.n(i),r=(a(22661),a(80811)),t=a.n(r),d=(a(41871),a(24791)),c=a.n(d),m=a(35654),h=a.n(m),u=a(69015),p=a.n(u),x=a(84919),j=a.n(x),v=a(84664),g=a.n(v),f=(a(84466),a(85225)),y=(a(71156),a(7227));const b={id:"close-chat-1-1-room",title:"Close chat 1-1 room",description:"API to close chat 1-1 room session",sidebar_label:"Close chat 1-1 room",hide_title:!0,hide_table_of_contents:!0,api:"eJytVd9v2kgQ/ldW04fcSXaxaSCt39KGh+iuuiqX00klCA3eAba1d93dgRQh/++nsR1CgLY8nJ/s9ew3v775ZguMiwDZGPIlcsouhUkEmkLuTcXGWcjg+tOtYqfywgVSYqbSOFXeuVIFCkGMIqjQY0lMXsC2YLEkyECMjIYIjABVyEs4RL+9UW6uxHOL3eA+uYMIPH1bGU8aMvYriiDkSyoRsi3wphIfgb2xC6gjoO9YVoWczd+m+nKOFF9pyuM01UmMV8NBnCSY5O9SGs7mQ6gnLToFfu/0RiBzZ5ksyytWVWFylCh7X4KEuj327WZfKGdJ37uKPBsK8rdDdV4+Xqb7Ea1Gdn6j5oYKLbmvAvmp0SrHojB2oXhJ6vrTLUTHGbIpaVrQnKfGTgPlzuqzXDRF9VSisY0HU5IyVnUIO0d2Vc7IiyNP2OX8Evuv5gWLA2hCX2w6hnRXj6Kv93s53qvR6bQm+w19UVJIk34yvHrz7gc3s8Fz/NAxVDH50lhk0lDXbSyhcja0DesnyYlc/4Do/2KERt63Qu9xI2PBVIZz+FSi/xrOANgVu8kxkOUp8sn/L6rbhjfe8wQjq4Uq0t5brS7OmagL4VQ6UKWxK6bQDNguBOgn/TdxMozTwX36NrvsZ2n6uevF5anyv0et7tquCyMHp2xuLZMXOv5Nfk1ejbx3vqFaSbx0GjLQVBBTo1C8hAx6637vSet6kl3obVuZqkHCFZxWw1a+gAyWzFXW62FVxWIWl4uSX2ta91+j7x+p2Q3NcVWwanGaCghV7p5lZnSa011jfsDoZJ/ROzUwdu6a3hpuVO9ORvEjWlxQKZyNQHJpA1sfx/rqlfp3iXwRlKXHBxur3BPygcTLeVvCw3OJoHKBS2wmoVP8D8db4tDxnsyet1s67jJ9515VoGlcN93Zdl0dt/ntdljUbJ4AEWTdCppEsHSBxXS7nWGgf3xR13L8bUV+A9l4EsEavcGZ1HK8BW2CvGvI5lgE+kkSv911uva7+tU2O5nK00xbmeg1Fiv5ggi+0uZ5h9YiiEtCTb4Jr/35oQ0ivheI58tHUlVHTzeu85wq/qntZG98bkZ/ju5HEMGsW5Gl081mx0epMj5CBg/wIOG6pjStYMn5Fgq0ixUuxL5Fluc/yjTbEQ==",sidebar_class_name:"delete api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v2/room-management",custom_edit_url:null,hide_send_button:!0},_=void 0,C={id:"modules/ucs/Universal Comms API/v2/close-chat-1-1-room",title:"Close chat 1-1 room",description:"API to close chat 1-1 room session",source:"@site/docs/40_modules/30_ucs/Universal Comms API/v2/close-chat-1-1-room.api.mdx",sourceDirName:"40_modules/30_ucs/Universal Comms API/v2",slug:"/modules/ucs/Universal Comms API/v2/close-chat-1-1-room",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v2/close-chat-1-1-room",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"close-chat-1-1-room",title:"Close chat 1-1 room",description:"API to close chat 1-1 room session",sidebar_label:"Close chat 1-1 room",hide_title:!0,hide_table_of_contents:!0,api:"eJytVd9v2kgQ/ldW04fcSXaxaSCt39KGh+iuuiqX00klCA3eAba1d93dgRQh/++nsR1CgLY8nJ/s9ew3v775ZguMiwDZGPIlcsouhUkEmkLuTcXGWcjg+tOtYqfywgVSYqbSOFXeuVIFCkGMIqjQY0lMXsC2YLEkyECMjIYIjABVyEs4RL+9UW6uxHOL3eA+uYMIPH1bGU8aMvYriiDkSyoRsi3wphIfgb2xC6gjoO9YVoWczd+m+nKOFF9pyuM01UmMV8NBnCSY5O9SGs7mQ6gnLToFfu/0RiBzZ5ksyytWVWFylCh7X4KEuj327WZfKGdJ37uKPBsK8rdDdV4+Xqb7Ea1Gdn6j5oYKLbmvAvmp0SrHojB2oXhJ6vrTLUTHGbIpaVrQnKfGTgPlzuqzXDRF9VSisY0HU5IyVnUIO0d2Vc7IiyNP2OX8Evuv5gWLA2hCX2w6hnRXj6Kv93s53qvR6bQm+w19UVJIk34yvHrz7gc3s8Fz/NAxVDH50lhk0lDXbSyhcja0DesnyYlc/4Do/2KERt63Qu9xI2PBVIZz+FSi/xrOANgVu8kxkOUp8sn/L6rbhjfe8wQjq4Uq0t5brS7OmagL4VQ6UKWxK6bQDNguBOgn/TdxMozTwX36NrvsZ2n6uevF5anyv0et7tquCyMHp2xuLZMXOv5Nfk1ejbx3vqFaSbx0GjLQVBBTo1C8hAx6637vSet6kl3obVuZqkHCFZxWw1a+gAyWzFXW62FVxWIWl4uSX2ta91+j7x+p2Q3NcVWwanGaCghV7p5lZnSa011jfsDoZJ/ROzUwdu6a3hpuVO9ORvEjWlxQKZyNQHJpA1sfx/rqlfp3iXwRlKXHBxur3BPygcTLeVvCw3OJoHKBS2wmoVP8D8db4tDxnsyet1s67jJ9515VoGlcN93Zdl0dt/ntdljUbJ4AEWTdCppEsHSBxXS7nWGgf3xR13L8bUV+A9l4EsEavcGZ1HK8BW2CvGvI5lgE+kkSv911uva7+tU2O5nK00xbmeg1Fiv5ggi+0uZ5h9YiiEtCTb4Jr/35oQ0ivheI58tHUlVHTzeu85wq/qntZG98bkZ/ju5HEMGsW5Gl081mx0epMj5CBg/wIOG6pjStYMn5Fgq0ixUuxL5Fluc/yjTbEQ==",sidebar_class_name:"delete api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v2/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucs",previous:{title:"Archive room for user id",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v2/archive-room-for-user-id"},next:{title:"Close room",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v2/close-room"}},V={},k=[];function I(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Close chat 1-1 room"}),"\n",(0,l.jsx)(t(),{method:"delete",path:"/v2/chat1to1/rooms/{roomid}"}),"\n",(0,l.jsx)(s.p,{children:"API to close chat 1-1 room session"}),"\n",(0,l.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(h(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of 1to1 chat room to close",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}})})})]}),"\n",(0,l.jsx)(c(),{className:"openapi-tabs__mime",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!1,name:"requestor",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Mandatory field of user_id calling the API",type:"string"}}),(0,l.jsx)(j(),{collapsible:!1,name:"time_left_in_second",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{description:"Mandatory field of room remaining time in second",type:"number"}}),(0,l.jsx)(j(),{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Optional field of room early close reason",type:"string"}})]})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(o(),{label:void 0,id:void 0,children:[(0,l.jsxs)(y.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"data"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(j(),{collapsible:!1,name:"remarks",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})}),(0,l.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "data": [\n    {\n      "remarks": [\n        "string"\n      ]\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,l.jsx)(y.default,{label:"Example",value:"Example",children:(0,l.jsx)(p(),{responseExample:'{\n  "data": [\n    {\n      "remarks": "Ending roomId \'f81d4fae-7dec-11d0-a765-00a0c91e6bf6\' in 15 minutes"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Bad Request"})}),(0,l.jsx)("div",{})]}),(0,l.jsxs)(y.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{})]})]})})})]})}function S(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(I,{...e})}):I(e)}}}]);
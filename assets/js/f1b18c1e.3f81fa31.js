"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7226],{29455:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>L,contentTitle:()=>y,default:()=>D,frontMatter:()=>_,metadata:()=>P,toc:()=>C});var n=a(74848),i=a(28453),l=a(77233),o=a.n(l),r=(a(22661),a(80811)),t=a.n(r),m=(a(41871),a(24791)),c=a.n(m),d=a(35654),p=a.n(d),h=a(69015),u=a.n(h),x=a(84919),j=a.n(x),v=a(84664),f=a.n(v),g=(a(84466),a(85225)),b=(a(71156),a(7227));const _={id:"close-room",title:"Close room",description:"API to close room session before session end_time",sidebar_label:"Close room",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU1v20gM/SsD9pBdQKolN3Za3dLGB2O32CKbxQJ1DIPW0Pa00ow6Qzs1DP33BSXZcWK3CIrVaTQf5CP5+LgDxmWAbALeuTLANAJNIfemYuMsZHD9aazYqbxwgZTcUYFCMM6qOS2cp8MvWT1jUxJEUKHHkpi8GN6BxZIgaxwYDREYsVshr+C5s/GNcovWy94nRODp29p40pCxX1MEIV9RiZDtgLeVWA7sjV1CHQF9x7IqZG/xNtWXC6T4SlMep6lOYrwaDuIkwSR/l9JwvhhCPW2tU+D3Tm/FZO4sk2VZYlUVJkfB1vsSBODu1Lebf6GcJWjvKvJsKMhpZ9V5+Xka5Ee0Gtn5rVoYKrREvA7kZ0arHIvC2KXiFanrT2OITiOUFM8KWvDM2Fmg3Fn9IhdNUj2VaGzjwZSkjFWdhYMjuy7n5MWRJ+xifmr7r2aBxTPThL7Y7mnSPj1BXx/XcnKUo/NhTY8L+iSlkCb9ZHj15t0PXmaDR/ywJyiTL41FJg113WIJlbOhLVg/Sc7E+gdE/xcjNPLxLfQet9IMTGV4CZ9K9F/DCwwckt3EGMjyDPns+ZPstvAmR55gZLVQRco71uriJR11IZxKB6o0ds0UmgY7QIB+0n8TJ8M4Hdylb7PLfpamn7taXJ5L/3vU6ratujBycO7O2DJ5oePf5Dfk1ch75xuqlcQrpyEDTQVxq0u8ggx6m36vUbvertWkGgSlPG8Fa+0LyGDFXGW9HlZVLNficlnya02b/mv0/RPpuqEFrgtWrZ0mcGHI7aO6jM5TuavHD4icHBP5IALGLlxTUsON2N1KB35Ei0sqhaoRSCwtsM0p1lev1L8r5IugLD3c21jlnpBJ5StklcZpU3LZbzP3fF8QVC5wiU0DdPL+4TAhnvs7EtVfGicdcZm+c68q0DQAmhrtupJO2ijbERZB1o2aaQQrF1jOd7s5BvrHF3Ut29/W5LeQTaYRbNAbnEsaJzvQJshaQ7bAItBPAvnttlOy39X5qXUW9b53rXTuBou1/EEEX2n7OCFrEb4VoSbfgGoPP7Su4zsx8fj4RJLqaP/iOs+p4p/enR61yc3oz9HdCCKYd6OwdLqZ2/ggucUHyOAe7gWuaxLSCpPs76BAu1zjUu63luX7D30c2JQ=",sidebar_class_name:"delete api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v2/room-management",custom_edit_url:null,hide_send_button:!0},y=void 0,P={id:"modules/ucs/Universal Comms API/v2/close-room",title:"Close room",description:"API to close room session before session end_time",source:"@site/docs/40_modules/30_ucs/Universal Comms API/v2/close-room.api.mdx",sourceDirName:"40_modules/30_ucs/Universal Comms API/v2",slug:"/modules/ucs/Universal Comms API/v2/close-room",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v2/close-room",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"close-room",title:"Close room",description:"API to close room session before session end_time",sidebar_label:"Close room",hide_title:!0,hide_table_of_contents:!0,api:"eJytVU1v20gM/SsD9pBdQKolN3Za3dLGB2O32CKbxQJ1DIPW0Pa00ow6Qzs1DP33BSXZcWK3CIrVaTQf5CP5+LgDxmWAbALeuTLANAJNIfemYuMsZHD9aazYqbxwgZTcUYFCMM6qOS2cp8MvWT1jUxJEUKHHkpi8GN6BxZIgaxwYDREYsVshr+C5s/GNcovWy94nRODp29p40pCxX1MEIV9RiZDtgLeVWA7sjV1CHQF9x7IqZG/xNtWXC6T4SlMep6lOYrwaDuIkwSR/l9JwvhhCPW2tU+D3Tm/FZO4sk2VZYlUVJkfB1vsSBODu1Lebf6GcJWjvKvJsKMhpZ9V5+Xka5Ee0Gtn5rVoYKrREvA7kZ0arHIvC2KXiFanrT2OITiOUFM8KWvDM2Fmg3Fn9IhdNUj2VaGzjwZSkjFWdhYMjuy7n5MWRJ+xifmr7r2aBxTPThL7Y7mnSPj1BXx/XcnKUo/NhTY8L+iSlkCb9ZHj15t0PXmaDR/ywJyiTL41FJg113WIJlbOhLVg/Sc7E+gdE/xcjNPLxLfQet9IMTGV4CZ9K9F/DCwwckt3EGMjyDPns+ZPstvAmR55gZLVQRco71uriJR11IZxKB6o0ds0UmgY7QIB+0n8TJ8M4Hdylb7PLfpamn7taXJ5L/3vU6ratujBycO7O2DJ5oePf5Dfk1ch75xuqlcQrpyEDTQVxq0u8ggx6m36vUbvertWkGgSlPG8Fa+0LyGDFXGW9HlZVLNficlnya02b/mv0/RPpuqEFrgtWrZ0mcGHI7aO6jM5TuavHD4icHBP5IALGLlxTUsON2N1KB35Ei0sqhaoRSCwtsM0p1lev1L8r5IugLD3c21jlnpBJ5StklcZpU3LZbzP3fF8QVC5wiU0DdPL+4TAhnvs7EtVfGicdcZm+c68q0DQAmhrtupJO2ijbERZB1o2aaQQrF1jOd7s5BvrHF3Ut29/W5LeQTaYRbNAbnEsaJzvQJshaQ7bAItBPAvnttlOy39X5qXUW9b53rXTuBou1/EEEX2n7OCFrEb4VoSbfgGoPP7Su4zsx8fj4RJLqaP/iOs+p4p/enR61yc3oz9HdCCKYd6OwdLqZ2/ggucUHyOAe7gWuaxLSCpPs76BAu1zjUu63luX7D30c2JQ=",sidebar_class_name:"delete api-method",info_path:"docs/40_modules/30_ucs/Universal Comms API/v2/room-management",custom_edit_url:null,hide_send_button:!0},sidebar:"ucs",previous:{title:"Close chat 1-1 room",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v2/close-chat-1-1-room"},next:{title:"Create chat 1-1 room",permalink:"/aoh-docs/docs/modules/ucs/Universal Comms API/v2/create-chat-1-1-room"}},L={},C=[];function I(e){const s={p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Close room"}),"\n",(0,n.jsx)(t(),{method:"delete",path:"/v2/rooms/{roomid}"}),"\n",(0,n.jsx)(s.p,{children:"API to close room session before session end_time"}),"\n",(0,n.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to close",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}})})})]}),"\n",(0,n.jsx)(c(),{className:"openapi-tabs__mime",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json-schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,n.jsx)(s.p,{children:"Body"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!1,name:"requestor",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"Mandatory field of user_id calling the API",type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"time_left_in_second",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{description:"Mandatory field of room remaining time in second",type:"number"}}),(0,n.jsx)(j(),{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Optional field of room early close reason",type:"string"}})]})]})})}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(o(),{label:void 0,id:void 0,children:[(0,n.jsxs)(b.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(j(),{collapsible:!1,name:"remarks",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "remarks": [\n        "string"\n      ]\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(b.default,{label:"Example",value:"Example",children:(0,n.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "remarks": "Ending roomId \'f81d4fae-7dec-11d0-a765-00a0c91e6bf6\' in 15 minutes"\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(b.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Bad Request"})}),(0,n.jsx)("div",{})]}),(0,n.jsxs)(b.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{})]})]})})})]})}function D(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(I,{...e})}):I(e)}}}]);
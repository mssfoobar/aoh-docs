"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5387],{46515:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>q,default:()=>M,frontMatter:()=>b,metadata:()=>v,toc:()=>S});var n=a(74848),i=a(28453),r=a(77233),l=a.n(r),t=(a(22661),a(80811)),d=a.n(t),c=(a(41871),a(24791)),m=a.n(c),p=a(35654),o=a.n(p),h=a(69015),u=a.n(h),x=a(84919),g=a.n(x),j=a(84664),y=a.n(j),f=(a(84466),a(85225)),_=(a(71156),a(7227));const b={id:"request-replay-session",title:"Request Replay Session",description:"gets information of specified `id`",sidebar_label:"Request Replay Session",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVltv2kgU/iuj87Dpag34goHMW1aNqmh31YikDy1CdPAcYLq+ZeYYBVn+79XYhhAglEqV+mKM5zuX+b5z5kwJJJYG+AQkLkQRE0wdkGgirXJSWQoclkiGqXSR6UTYTyxbMJNjpBYKJfuq5FdwIBdaJEiora8SUpEgcNCYx2KjJDigrKtc0AoO/d+9tx4bKKOMLZH2w4EDJlphIoCXQJvc+jWkVbqEygGNT4XSKIGTLtABfBZJHluMmLvDgXRFJ/DmYadvH6P+4roTeqPR6DqUKLwAqql1YfIsNWhsAN917c/rDD/+Aw5EWUqYkl0VeR6rqM6u981YSHmcYzb/hhFZanSWoybVBJCC9lFCa7Gx9BAm5sfWSp5kIdIoCOVM0MnlIpfnlg0JKszJJamMlWV2BtIIZxGaZqQSNCSS/BwUU3kZMBbmQpcmR9ynJi2SOWqoqsruD1M6vXe7uquYrTaThubLCug19+C7ftBxBx0vfPRGvO9zz+sO3evrcPiX63LXhddiHOJHPAi63mA46L/gt9TDfw8fZg+PH+9ndTkeKgPj2/t/bz7vId4S5iVo8FgH4a77Bd5S5xU6OEIfSnTo3Oeu3+174bDv71m1crnd0DbgTp9jOsLBl1bE/qnG/FtINsanAg2xW60z/ev69O2icQBtqAu6NUFjxBJPFt5B6Z3hwKuZ28ac7LmFBzTGnshKsqtLyvWKMZmhSa+I4bMyBNW0ySQ8xe5dSqhTEbMH1GvUv5XhnzwnzzN/IfUBD9w3qTeo1ypCpgxLM2IbJKZRyE1LaeVAgrTKZDNA6wlJK+DQW3u9pgt65XY8VrbNa46bKIWOgcOKKOe9nk51V+La7wrtH83O983QZo11Pc7s6Kz3raieg2OMMi3ZH2xcRwMHbJzG3Ou6XffI6c39HVtkmumtZTub2y1bffLMUCJqudtRv23DJgprK/PQd/lSPJfdK1r1CJ+pl8dCpfU8s/yULaMTWHu7kwUc4LtLx9SBVWbIQspyLgx+0nFV2c9PBeoN8MnUgbXQSswtU5PSHqr2XQJfiNjgmeTfjduLx5/sx/eXk5vYFnZaSyLiwv4DB/7Hzf7NqZpWDqxQSNR1is3yTRRhTnuGR41oS2FXgR9uH6GqvgNNS0e+",sidebar_class_name:"get api-method",info_path:"docs/80_rnr/Record & Replay API/record-replay",custom_edit_url:null,hide_send_button:!0},q=void 0,v={id:"rnr/Record & Replay API/request-replay-session",title:"Request Replay Session",description:"gets information of specified `id`",source:"@site/docs/80_rnr/Record & Replay API/request-replay-session.api.mdx",sourceDirName:"80_rnr/Record & Replay API",slug:"/rnr/Record & Replay API/request-replay-session",permalink:"/aoh-docs/docs/rnr/Record & Replay API/request-replay-session",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"request-replay-session",title:"Request Replay Session",description:"gets information of specified `id`",sidebar_label:"Request Replay Session",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVltv2kgU/iuj87Dpag34goHMW1aNqmh31YikDy1CdPAcYLq+ZeYYBVn+79XYhhAglEqV+mKM5zuX+b5z5kwJJJYG+AQkLkQRE0wdkGgirXJSWQoclkiGqXSR6UTYTyxbMJNjpBYKJfuq5FdwIBdaJEiora8SUpEgcNCYx2KjJDigrKtc0AoO/d+9tx4bKKOMLZH2w4EDJlphIoCXQJvc+jWkVbqEygGNT4XSKIGTLtABfBZJHluMmLvDgXRFJ/DmYadvH6P+4roTeqPR6DqUKLwAqql1YfIsNWhsAN917c/rDD/+Aw5EWUqYkl0VeR6rqM6u981YSHmcYzb/hhFZanSWoybVBJCC9lFCa7Gx9BAm5sfWSp5kIdIoCOVM0MnlIpfnlg0JKszJJamMlWV2BtIIZxGaZqQSNCSS/BwUU3kZMBbmQpcmR9ynJi2SOWqoqsruD1M6vXe7uquYrTaThubLCug19+C7ftBxBx0vfPRGvO9zz+sO3evrcPiX63LXhddiHOJHPAi63mA46L/gt9TDfw8fZg+PH+9ndTkeKgPj2/t/bz7vId4S5iVo8FgH4a77Bd5S5xU6OEIfSnTo3Oeu3+174bDv71m1crnd0DbgTp9jOsLBl1bE/qnG/FtINsanAg2xW60z/ev69O2icQBtqAu6NUFjxBJPFt5B6Z3hwKuZ28ac7LmFBzTGnshKsqtLyvWKMZmhSa+I4bMyBNW0ySQ8xe5dSqhTEbMH1GvUv5XhnzwnzzN/IfUBD9w3qTeo1ypCpgxLM2IbJKZRyE1LaeVAgrTKZDNA6wlJK+DQW3u9pgt65XY8VrbNa46bKIWOgcOKKOe9nk51V+La7wrtH83O983QZo11Pc7s6Kz3raieg2OMMi3ZH2xcRwMHbJzG3Ou6XffI6c39HVtkmumtZTub2y1bffLMUCJqudtRv23DJgprK/PQd/lSPJfdK1r1CJ+pl8dCpfU8s/yULaMTWHu7kwUc4LtLx9SBVWbIQspyLgx+0nFV2c9PBeoN8MnUgbXQSswtU5PSHqr2XQJfiNjgmeTfjduLx5/sx/eXk5vYFnZaSyLiwv4DB/7Hzf7NqZpWDqxQSNR1is3yTRRhTnuGR41oS2FXgR9uH6GqvgNNS0e+",sidebar_class_name:"get api-method",info_path:"docs/80_rnr/Record & Replay API/record-replay",custom_edit_url:null,hide_send_button:!0},sidebar:"rnr",previous:{title:"Request  Replay Jump Init",permalink:"/aoh-docs/docs/rnr/Record & Replay API/request-replay-jump-init"},next:{title:"Request Replay Start/Resume",permalink:"/aoh-docs/docs/rnr/Record & Replay API/request-replay-start-resume"}},N={},S=[];function R(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Request Replay Session"}),"\n",(0,n.jsx)(d(),{method:"get",path:"/v1/replay/{replayid}"}),"\n",(0,n.jsxs)(s.p,{children:["gets information of specified ",(0,n.jsx)(s.code,{children:"id"})]}),"\n",(0,n.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(o(),{className:"paramsItem",param:{name:"replayid",in:"path",description:"ID of replay to get information",schema:{type:"string"},required:!0,example:"ab076d0a-31b5-41b5-84f9-5188895dea13"}})})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(l(),{label:void 0,id:void 0,children:[(0,n.jsxs)(_.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"display_status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"replay_start_timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"replay_end_timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"replay_last_timestamp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!1,name:"replay_speed",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(g(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "created_at": "string",\n      "updated_at": "string",\n      "status": "string",\n      "display_status": "string",\n      "replay_start_timestamp": "string",\n      "replay_end_timestamp": "string",\n      "replay_last_timestamp": "string",\n      "replay_speed": 0\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(_.default,{label:"Example",value:"Example",children:(0,n.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "ab076d0a-31b5-41b5-84f9-5188895dea13",\n      "created_at": "2023-06-15T18:42:11.709957+00:00",\n      "updated_at": "2023-06-15T18:48:33.167647+00:00",\n      "status": "MSG_STOP_OK",\n      "display_status": "REPLAY_STOP_OK",\n      "replay_start_timestamp": "2023-06-13T00:00:00Z",\n      "replay_end_timestamp": "2023-06-13T03:00:00Z",\n      "replay_last_timestamp": "2023-06-13T00:02:02.415742Z",\n      "replay_speed": 0.5\n    }\n  ],\n  "sent_at": "2023-06-15T18:48:56Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(_.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Bad Request Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(g(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"errors"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsx)("div",{style:{marginLeft:"1rem"},children:(0,n.jsx)(g(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})]})]})}),(0,n.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "sent_at": "string",\n  "errors": {\n    "message": "string"\n  }\n}',language:"json"})}),(0,n.jsx)(_.default,{label:"Example",value:"Example",children:(0,n.jsx)(u(),{responseExample:'{\n  "sent_at": "2023-06-15T18:48:12Z",\n  "errors": [\n    {\n      "message": "Session id \'ab076d0a-31b5-41b5-84f9-5188895dea13\'  doesn\'t exist"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(_.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(g(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"errors"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(g(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,n.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,n.jsx)(_.default,{label:"Example",value:"Example",children:(0,n.jsx)(u(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json"})})]})})})})]})]})})})]})}function M(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(R,{...e})}):R(e)}}}]);
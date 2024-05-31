"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[8410],{11216:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>b,contentTitle:()=>k,default:()=>z,frontMatter:()=>v,metadata:()=>_,toc:()=>N});var n=a(74848),l=a(28453),i=a(77233),r=a.n(i),t=(a(22661),a(80811)),o=a.n(t),d=(a(41871),a(24791)),c=a.n(d),m=a(35654),p=a.n(m),h=a(69015),f=a.n(h),x=a(84919),j=a.n(x),w=a(84664),u=a.n(w),g=(a(84466),a(85225)),y=(a(71156),a(7227));const v={id:"start-workflow",title:"Start workflow",description:"API to start executing workflow by workflow template id for given incident id",sidebar_label:"Start workflow",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Ve9vmzAQ/VfQfdokUwwJKeHbtO1DNe2H1laTFkXTBY7EGxhmO7QR8v8+mYSEttkmTdU+YXE+v7v3zs8dGFxrSBdwV6sfRVnfwZJBTjpTojGilpDCq09Xnqk9bVAZj+4p2xoh196Q4K12p7WhqinRkCdyr6iVtxYtSU/ITOQkjSdyYNCgwooMKYfbgcSKID3i91uEw23QbICBop9boSiH1KgtMdDZhiqEtAOza1ymNkrINTCge6ya0v26jKZRmGWJn0SY+NM4S3zM48inMEnyVVLg9HIC1rIj+lDhs6BffXh99ebthxufcx6CtUt3jG5qqUm7zIhz93nI8sd3wCCrpSFpXBSbphQZumjwXbst3VPwevWdMuM4VXVDyog9QI5mvAuVwp3ry1Cl/54t8qftWQZqK7+dDVlrGWiS5huas+ERN0Ntiz0MzDmfRRFGfsyLxJ/mUeQnc7r05zSPCwz5KitiOGFDjLNixueZP+HxzJ9meOmEnfk8KeIZn08zWiXgCD/WAxGPJj5P/Ci+4UnKk3Q6+3ooOj4nxJU0pCSW3jWplpT3VqlaPZ82vyeKATko/e/KVaQ1rum8Ro90eEzQzA/jmzBJp5N0wr/CqZjF6FzQpFqRkSe0J2vj7ch4ijDfgV0OlE6eUnp9yLqV2KIocVXSQ0IN3ZugKVGcp3LE0L6BvtvhTrl1i+X2z/UdGKjIbGo3SU2tewLdNU8haMOgN7hg8KGgOzmSDQZ/CLqTU1hgPd5gZFtVQgobY5o0CO6K6iKnNrpAFfUDKWRR9y0J05vEl8Ey36PENVWOCQbusD1n4QW/4HDOi52vHg23ctl9smV9TxX2HB587bo37aO3PzquO2nw7C5/kG6krGV7iroD6QtoQ0ehQwQGoyLTR4/B/lwXGPn0ksHGaZguoOtWqOlWlda63z+3pHaQLpYMWlSiHzcnUC60W+eQFlhq+gMZLz4fbP+l97tWhhsq3f0cxg8Y/KDdw9fMvTL/EXnEkF1aBhvCnFTf/37DqyyjxoxSn7iZG9fjPfn08foGrP0FSH+/XQ==",sidebar_class_name:"post api-method",info_path:"docs/90_wfe/Workflow API/workflow-management",custom_edit_url:null},k=void 0,_={id:"wfe/Workflow API/start-workflow",title:"Start workflow",description:"API to start executing workflow by workflow template id for given incident id",source:"@site/docs/90_wfe/Workflow API/start-workflow.api.mdx",sourceDirName:"90_wfe/Workflow API",slug:"/wfe/Workflow API/start-workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/start-workflow",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"start-workflow",title:"Start workflow",description:"API to start executing workflow by workflow template id for given incident id",sidebar_label:"Start workflow",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Ve9vmzAQ/VfQfdokUwwJKeHbtO1DNe2H1laTFkXTBY7EGxhmO7QR8v8+mYSEttkmTdU+YXE+v7v3zs8dGFxrSBdwV6sfRVnfwZJBTjpTojGilpDCq09Xnqk9bVAZj+4p2xoh196Q4K12p7WhqinRkCdyr6iVtxYtSU/ITOQkjSdyYNCgwooMKYfbgcSKID3i91uEw23QbICBop9boSiH1KgtMdDZhiqEtAOza1ymNkrINTCge6ya0v26jKZRmGWJn0SY+NM4S3zM48inMEnyVVLg9HIC1rIj+lDhs6BffXh99ebthxufcx6CtUt3jG5qqUm7zIhz93nI8sd3wCCrpSFpXBSbphQZumjwXbst3VPwevWdMuM4VXVDyog9QI5mvAuVwp3ry1Cl/54t8qftWQZqK7+dDVlrGWiS5huas+ERN0Ntiz0MzDmfRRFGfsyLxJ/mUeQnc7r05zSPCwz5KitiOGFDjLNixueZP+HxzJ9meOmEnfk8KeIZn08zWiXgCD/WAxGPJj5P/Ci+4UnKk3Q6+3ooOj4nxJU0pCSW3jWplpT3VqlaPZ82vyeKATko/e/KVaQ1rum8Ro90eEzQzA/jmzBJp5N0wr/CqZjF6FzQpFqRkSe0J2vj7ch4ijDfgV0OlE6eUnp9yLqV2KIocVXSQ0IN3ZugKVGcp3LE0L6BvtvhTrl1i+X2z/UdGKjIbGo3SU2tewLdNU8haMOgN7hg8KGgOzmSDQZ/CLqTU1hgPd5gZFtVQgobY5o0CO6K6iKnNrpAFfUDKWRR9y0J05vEl8Ey36PENVWOCQbusD1n4QW/4HDOi52vHg23ctl9smV9TxX2HB587bo37aO3PzquO2nw7C5/kG6krGV7iroD6QtoQ0ehQwQGoyLTR4/B/lwXGPn0ksHGaZguoOtWqOlWlda63z+3pHaQLpYMWlSiHzcnUC60W+eQFlhq+gMZLz4fbP+l97tWhhsq3f0cxg8Y/KDdw9fMvTL/EXnEkF1aBhvCnFTf/37DqyyjxoxSn7iZG9fjPfn08foGrP0FSH+/XQ==",sidebar_class_name:"post api-method",info_path:"docs/90_wfe/Workflow API/workflow-management",custom_edit_url:null},sidebar:"wfe",previous:{title:"Signal Workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/signal-workflow"},next:{title:"Terminate Workflow",permalink:"/aoh-docs/docs/wfe/Workflow API/terminate-workflow"}},b={},N=[];function S(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Start workflow"}),"\n",(0,n.jsx)(o(),{method:"post",path:"/v1/start/workflow/{workflowid}/incident/{incidentid}"}),"\n",(0,n.jsx)(s.p,{children:"API to start executing workflow by workflow template id for given incident id"}),"\n",(0,n.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)(p(),{className:"paramsItem",param:{name:"workflowid",in:"path",required:!0,schema:{type:"string",example:"72421cc8-82a8-45c8-ad52-e188db8fa473"}}}),(0,n.jsx)(p(),{className:"paramsItem",param:{name:"incidentid",in:"path",required:!0,schema:{type:"string",example:"INCIDENT-0001"}}})]})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(y.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"run_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})}),(0,n.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(f(),{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "run_id": "string"\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,n.jsx)(y.default,{label:"Example",value:"Example",children:(0,n.jsx)(f(),{responseExample:'{\n  "data": [\n    {\n      "id": "900622a2-50f8-4d22-89e7-9e95fa10bcf5",\n      "run_id": "5a6f609c-3056-4ca7-ad56-08f56094ceb8"\n    }\n  ],\n  "sent_at": "2023-08-25T08:08:46Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"errors"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"Array ["})})}),(0,n.jsx)(j(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(f(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,n.jsx)(y.default,{label:"Example",value:"Example",children:(0,n.jsx)(f(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"503",value:"503",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Service Unavailable"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"text/plain",value:"text/plain",children:(0,n.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})}),(0,n.jsx)(y.default,{label:"response",value:"response",children:(0,n.jsx)(f(),{responseExample:"service is not yet ready",language:"shell"})})]})})})})]})]})})})]})}function z(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(S,{...e})}):S(e)}}}]);
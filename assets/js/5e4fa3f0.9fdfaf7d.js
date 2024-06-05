"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[4185],{29494:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>N,contentTitle:()=>b,default:()=>k,frontMatter:()=>v,metadata:()=>q,toc:()=>M});var n=s(74848),i=s(28453),t=s(77233),l=s.n(t),r=(s(22661),s(80811)),d=s.n(r),c=(s(41871),s(24791)),m=s.n(c),o=s(35654),p=s.n(o),h=s(69015),x=s.n(h),j=s(84919),u=s.n(j),g=s(84664),f=s.n(g),y=(s(84466),s(85225)),_=(s(71156),s(7227));const v={id:"create-incident-updates",title:"Create incident updates",description:"Create incident updates",sidebar_label:"Create incident updates",hide_title:!0,hide_table_of_contents:!0,api:"eJztVktz2kgQ/iuqPu3WSiAhbMPcEq8PPuxuyuCLCeVqNA1MoldmBjYUpf+eao0AAbIPqextOYipeXzT8/XXjz1YXBkQM5C0xE1qYe5DiRozsqR5YQ85ZgQCVJ4oSblVEnxQOQgo0a7BB5OsKUMQe7C7kncaq1W+gsoHTd82SpMEYfWGfKDvmJUp73n8+z4YhIM4HMVREIZhBNXc7SdjPxZyx3hJkVvKLQ+xLFOVoFVF3v9iipznri4uFl8oseBDqYuStFVk6rMJH3td7DptbFYtfqW8c8OmlGjp1c1frVdV61lnd8GiWMAlPqh8S8aqVf0UuECH58nDE2PW3JmyyI17wiAM+U+SSbQq66MC+geXmP7s5J1530Ea8H8VgRJtexdqjTsWgaXM/Of0J5rQknxF27msZPd0w8frG+vvO/Ww/sattX8Mo3ctt2XOEg/CURBH02go4pG4uXm50oyjd/YT4mlzc7ornIYjEYciinu38d0fYSjCEBxTsBwnciBHMhjfjjAYxrfjYDEcY0DxGMdRFN/gAOGCvlOw3oUxB+ugW7fnrHXYc9eLR8M4HjQmccQfWbymKrp7aagedqn/I0rvyeWLX6f0N53KHtO60Obn4yAjY3DVnUMuJXFJy20Q3UyjkRjGIg5f4GTMrIXL8sBUSa9Jo96C82g1d+g3XSQ+5pZ0jqk3Ib0l7T0w7P90OjoN6a1KyFPGywvr7ch6mvCM0via0klz6jnHLaoUFymdE2rpu+2XKapuKlsMuQfUrz1UAx5vMd28b1/DwLlh93Wy8A6h7Z3KREZ2XXCgl0UdTHVhF9DfRq0Ssz+VmOpQYvpc/mvlOO42OgUBa2tL0e+rzPQkbQc91Jwwzo3507UbnjtdpwIW19OpAXjoLqrHJHuRGo/z54mpXRGWRU2zsq4DOfDwF+a4ooyHk52xlIEP/CJnaNQLe+GV+R8+PXrLQnvvgFR+TWeGtZubJuptH5zhH8XQ0goXJaZ337hnBtuolakZQ5z1aCdsburW7Foxg/1+gYaedVpVPP1tQ3oHYjb3YYta1WplT0pleCxBLDE1dGXfUc/w21PT5P3ugd9t9yHAcw7vg3rBh6+0O28sq3nlw5pQkq6tcBvu3V3BlGFOAFeJqfIPJz4kCZX23b3zluw//TOZgg+Lpu3MCslnNP4Lfv0V8Bk+s8FF/X4XkDy/hxTz1calC4fLvx8jBc9w",sidebar_class_name:"post api-method",info_path:"docs/90_wfe/Incident Management System API/incident-management-system",custom_edit_url:null,hide_send_button:!0},b=void 0,q={id:"wfe/Incident Management System API/create-incident-updates",title:"Create incident updates",description:"Create incident updates",source:"@site/docs/90_wfe/Incident Management System API/create-incident-updates.api.mdx",sourceDirName:"90_wfe/Incident Management System API",slug:"/wfe/Incident Management System API/create-incident-updates",permalink:"/aoh-docs/docs/wfe/Incident Management System API/create-incident-updates",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-incident-updates",title:"Create incident updates",description:"Create incident updates",sidebar_label:"Create incident updates",hide_title:!0,hide_table_of_contents:!0,api:"eJztVktz2kgQ/iuqPu3WSiAhbMPcEq8PPuxuyuCLCeVqNA1MoldmBjYUpf+eao0AAbIPqextOYipeXzT8/XXjz1YXBkQM5C0xE1qYe5DiRozsqR5YQ85ZgQCVJ4oSblVEnxQOQgo0a7BB5OsKUMQe7C7kncaq1W+gsoHTd82SpMEYfWGfKDvmJUp73n8+z4YhIM4HMVREIZhBNXc7SdjPxZyx3hJkVvKLQ+xLFOVoFVF3v9iipznri4uFl8oseBDqYuStFVk6rMJH3td7DptbFYtfqW8c8OmlGjp1c1frVdV61lnd8GiWMAlPqh8S8aqVf0UuECH58nDE2PW3JmyyI17wiAM+U+SSbQq66MC+geXmP7s5J1530Ea8H8VgRJtexdqjTsWgaXM/Of0J5rQknxF27msZPd0w8frG+vvO/Ww/sattX8Mo3ctt2XOEg/CURBH02go4pG4uXm50oyjd/YT4mlzc7ornIYjEYciinu38d0fYSjCEBxTsBwnciBHMhjfjjAYxrfjYDEcY0DxGMdRFN/gAOGCvlOw3oUxB+ugW7fnrHXYc9eLR8M4HjQmccQfWbymKrp7aagedqn/I0rvyeWLX6f0N53KHtO60Obn4yAjY3DVnUMuJXFJy20Q3UyjkRjGIg5f4GTMrIXL8sBUSa9Jo96C82g1d+g3XSQ+5pZ0jqk3Ib0l7T0w7P90OjoN6a1KyFPGywvr7ch6mvCM0via0klz6jnHLaoUFymdE2rpu+2XKapuKlsMuQfUrz1UAx5vMd28b1/DwLlh93Wy8A6h7Z3KREZ2XXCgl0UdTHVhF9DfRq0Ssz+VmOpQYvpc/mvlOO42OgUBa2tL0e+rzPQkbQc91Jwwzo3507UbnjtdpwIW19OpAXjoLqrHJHuRGo/z54mpXRGWRU2zsq4DOfDwF+a4ooyHk52xlIEP/CJnaNQLe+GV+R8+PXrLQnvvgFR+TWeGtZubJuptH5zhH8XQ0goXJaZ337hnBtuolakZQ5z1aCdsburW7Foxg/1+gYaedVpVPP1tQ3oHYjb3YYta1WplT0pleCxBLDE1dGXfUc/w21PT5P3ugd9t9yHAcw7vg3rBh6+0O28sq3nlw5pQkq6tcBvu3V3BlGFOAFeJqfIPJz4kCZX23b3zluw//TOZgg+Lpu3MCslnNP4Lfv0V8Bk+s8FF/X4XkDy/hxTz1calC4fLvx8jBc9w",sidebar_class_name:"post api-method",info_path:"docs/90_wfe/Incident Management System API/incident-management-system",custom_edit_url:null,hide_send_button:!0},sidebar:"wfe",previous:{title:"Introduction",permalink:"/aoh-docs/docs/wfe/Incident Management System API/incident-management-system"},next:{title:"Create incident",permalink:"/aoh-docs/docs/wfe/Incident Management System API/create-incident"}},N={},M=[];function w(e){const a={p:"p",...(0,i.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Create incident updates"}),"\n",(0,n.jsx)(d(),{method:"post",path:"/v1/incidents/{incidentid}/updates/"}),"\n",(0,n.jsx)(a.p,{children:"Create incident updates"}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{name:"incidentid",in:"path",schema:{type:"string"},required:!0,example:"INC-20230831-0001"}})})})]}),"\n",(0,n.jsx)(m(),{className:"openapi-tabs__mime",children:(0,n.jsx)(_.default,{label:"application/json",value:"application/json-schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,n.jsx)(a.p,{children:"Body"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!1,name:"action_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"action_taken",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"update_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(l(),{label:void 0,id:void 0,children:[(0,n.jsxs)(_.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"/incidents/[incidentid]/updates"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(a.p,{children:"data"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(a.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"Array ["})})}),(0,n.jsx)(u(),{collapsible:!1,name:"action_by",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"action_taken",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"created_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"incident_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"update_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"updated_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(a.p,{children:"]"})})})]})]})}),(0,n.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"2023-08-31T14:38:55Z"}})]})]})}),(0,n.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "data": [\n    {\n      "action_by": "string",\n      "action_taken": "string",\n      "created_at": "string",\n      "id": "string",\n      "incident_id": "string",\n      "update_type": "string",\n      "updated_at": "string"\n    }\n  ],\n  "sent_at": "2023-08-31T14:38:55Z"\n}',language:"json"})}),(0,n.jsx)(_.default,{label:"Example",value:"Example",children:(0,n.jsx)(x(),{responseExample:'{\n  "data": [\n    {\n      "action_by": "bob",\n      "action_taken": "investigation",\n      "created_at": "2023-08-30T08:30:13.637+00:00",\n      "id": "f9cd2d8d-968a-4369-b49a-e39a91135a2a",\n      "incident_id": "INC-20230703-0002",\n      "update_type": "USER",\n      "updated_at": "2023-08-30T08:30:17.384332+00:00"\n    }\n  ],\n  "sent_at": "2023-08-31T14:38:17Z"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(_.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Bad Request"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(a.p,{children:"errors"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(a.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"Array ["})})}),(0,n.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(a.p,{children:"]"})})})]})]})})]})]})}),(0,n.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,n.jsx)(_.default,{label:"Example",value:"Example",children:(0,n.jsx)(x(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "invalid request body"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(_.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(_.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(a.p,{children:"errors"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(a.p,{children:"object[]"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"Array ["})})}),(0,n.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)("li",{children:(0,n.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,n.jsx)(a.p,{children:"]"})})})]})]})})]})]})}),(0,n.jsx)(_.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "sent_at": "string",\n  "errors": [\n    {\n      "message": "string"\n    }\n  ]\n}',language:"json"})}),(0,n.jsx)(_.default,{label:"Example",value:"Example",children:(0,n.jsx)(x(),{responseExample:'{\n  "sent_at": "2023-06-15T18:43:30Z",\n  "errors": [\n    {\n      "message": "service is not yet ready"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(_.default,{label:"503",value:"503",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Service Unavailable"})}),(0,n.jsx)("div",{children:(0,n.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(_.default,{label:"text/plain",value:"text/plain",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(_.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(a.p,{children:"string"})})})]})}),(0,n.jsx)(_.default,{label:"response",value:"response",children:(0,n.jsx)(x(),{responseExample:"service is not yet ready",language:"shell"})})]})})})})]})]})})})]})}function k(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(w,{...e})}):w(e)}}}]);
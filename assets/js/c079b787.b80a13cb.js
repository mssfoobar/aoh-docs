"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5860],{69939:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>k,contentTitle:()=>_,default:()=>M,frontMatter:()=>v,metadata:()=>V,toc:()=>E});var t=s(74848),n=s(28453),i=s(77233),o=s.n(i),r=(s(22661),s(80811)),l=s.n(r),c=(s(41871),s(24791)),m=s.n(c),d=s(35654),p=s.n(d),h=s(69015),u=s.n(h),j=s(84919),g=s.n(j),x=s(84664),y=s.n(x),f=(s(84466),s(85225)),b=(s(71156),s(7227));const v={id:"get-chat-info-by-room-id",title:"Get chat info by room ID",description:"API to query total sum of chat messages and chat attachments available from a particular room session",sidebar_label:"Get chat info by room ID",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VMFO20AQ/ZXVnFrJTmwDAXyjBVEOlRBNL0QRmtjjeKntNbvjiMjyv1djhzRNQttTT3F2d968mXnzWmBcOohnYI0pHcw9SMklVtesTQUxXN3fKTbqpSG7VmwYC+WaUplMJTmyKsk5XJJTWKXDCTJjkpdUsVO4Ql3goiCVWVMqVDVa1klToFWSTzlyTvJ4UKPFkpiskGmhwpIg7knpFDzQwqVGzmGf4N21kOnR2ChL3FjBs/TSaEspxGwb8sAlOZUIcQu8rgXasdXVEjoP6BXLupCz7CJMTzMk/zylxA/DNPDxfHLmBwEGyWVIk0U2gW4u6K42lSMngFEQyE9iKqaK5RPrutAJCsPxsxOa7SEBs3imhKV0a2qyrAe0FHn3FVqLa2kAU+n+Hq3ToyUO7Txy4RgtP7F+59pSYmz6lJhmKGzzQFdMS7LQdZ1gUMVPyEcAut3uvpU2G1j+W7PfqAOTY1+m7F99+gy/E4coiCI/uPSD82l4EgdBHASPsM8+ksFtuUrMiR9M/PBsGl7Ep1Echo+bgs6Gge7prGKyFRbqG9kVWXVjrZEOeFAS50YqWlI/EFFpDONVOO53atwOKu7Gsh+6yozQ70EGrTe2gBhy5joej7GuhzLLZcmjlFbRCG10oPpryrApWA04vSZ7ZJmB5l7MD7ISX7HCJck2ggeScQgPR8EoOACVXc/MZjXLbaT6Mp3ebzN5UBvHJfai3gznlnhYfuGgFusB4e56P8POkvw3Y9lIkumVx3WBupIS+pa3m1HNYBWKWnoD9CDems52XnMPcuNYnrbtAh19t0XXyXFPH+LZ3IMVWi2U+pmm2sl3CnGGhaM/9OHDw8apPqp3rOxoBW/2UIk5rLBo5B948IPWv3yzm3ce5IQp2Z7VcHmVJFTzTtiBXYmctqq+vZlC1/0EJ3ERoQ==",sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/v1/room-management",custom_edit_url:null},_=void 0,V={id:"openapi/ucs/v1/get-chat-info-by-room-id",title:"Get chat info by room ID",description:"API to query total sum of chat messages and chat attachments available from a particular room session",source:"@site/docs/openapi/ucs/v1/get-chat-info-by-room-id.api.mdx",sourceDirName:"openapi/ucs/v1",slug:"/openapi/ucs/v1/get-chat-info-by-room-id",permalink:"/aoh-docs/docs/openapi/ucs/v1/get-chat-info-by-room-id",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-chat-info-by-room-id",title:"Get chat info by room ID",description:"API to query total sum of chat messages and chat attachments available from a particular room session",sidebar_label:"Get chat info by room ID",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VMFO20AQ/ZXVnFrJTmwDAXyjBVEOlRBNL0QRmtjjeKntNbvjiMjyv1djhzRNQttTT3F2d968mXnzWmBcOohnYI0pHcw9SMklVtesTQUxXN3fKTbqpSG7VmwYC+WaUplMJTmyKsk5XJJTWKXDCTJjkpdUsVO4Ql3goiCVWVMqVDVa1klToFWSTzlyTvJ4UKPFkpiskGmhwpIg7knpFDzQwqVGzmGf4N21kOnR2ChL3FjBs/TSaEspxGwb8sAlOZUIcQu8rgXasdXVEjoP6BXLupCz7CJMTzMk/zylxA/DNPDxfHLmBwEGyWVIk0U2gW4u6K42lSMngFEQyE9iKqaK5RPrutAJCsPxsxOa7SEBs3imhKV0a2qyrAe0FHn3FVqLa2kAU+n+Hq3ToyUO7Txy4RgtP7F+59pSYmz6lJhmKGzzQFdMS7LQdZ1gUMVPyEcAut3uvpU2G1j+W7PfqAOTY1+m7F99+gy/E4coiCI/uPSD82l4EgdBHASPsM8+ksFtuUrMiR9M/PBsGl7Ep1Echo+bgs6Gge7prGKyFRbqG9kVWXVjrZEOeFAS50YqWlI/EFFpDONVOO53atwOKu7Gsh+6yozQ70EGrTe2gBhy5joej7GuhzLLZcmjlFbRCG10oPpryrApWA04vSZ7ZJmB5l7MD7ISX7HCJck2ggeScQgPR8EoOACVXc/MZjXLbaT6Mp3ebzN5UBvHJfai3gznlnhYfuGgFusB4e56P8POkvw3Y9lIkumVx3WBupIS+pa3m1HNYBWKWnoD9CDems52XnMPcuNYnrbtAh19t0XXyXFPH+LZ3IMVWi2U+pmm2sl3CnGGhaM/9OHDw8apPqp3rOxoBW/2UIk5rLBo5B948IPWv3yzm3ce5IQp2Z7VcHmVJFTzTtiBXYmctqq+vZlC1/0EJ3ERoQ==",sidebar_class_name:"get api-method",info_path:"docs/openapi/ucs/v1/room-management",custom_edit_url:null},sidebar:"ucsAPI-v1",previous:{title:"Close room",permalink:"/aoh-docs/docs/openapi/ucs/v1/close-room"},next:{title:"List chat messages",permalink:"/aoh-docs/docs/openapi/ucs/v1/list-chat-messages"}},k={},E=[];function F(e){const a={p:"p",...(0,n.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get chat info by room ID"}),"\n",(0,t.jsx)(l(),{method:"get",path:"/v1/rooms/{roomid}/chatinfo"}),"\n",(0,t.jsx)(a.p,{children:"API to query total sum of chat messages and chat attachments available from a particular room session"}),"\n",(0,t.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(p(),{className:"paramsItem",param:{name:"roomid",in:"path",description:"ID of room to return",required:!0,schema:{type:"string"},example:"f81d4fae-7dec-11d0-a765-00a0c91e6bf6"}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(o(),{label:void 0,id:void 0,children:[(0,t.jsxs)(b.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{}),(0,t.jsx)("div",{children:(0,t.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(a.p,{children:"data"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(a.p,{children:"object[]"})})]})}),(0,t.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,t.jsx)(a.p,{children:"Array ["})})}),(0,t.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(g(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(g(),{collapsible:!1,name:"start_time",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(g(),{collapsible:!1,name:"record_count",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,t.jsx)("li",{children:(0,t.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,t.jsx)(a.p,{children:"]"})})})]})]})}),(0,t.jsx)(g(),{collapsible:!1,name:"sent_at",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,t.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "string",\n      "name": "string",\n      "start_time": "string",\n      "record_count": 0\n    }\n  ],\n  "sent_at": "string"\n}',language:"json"})}),(0,t.jsx)(b.default,{label:"Example",value:"Example",children:(0,t.jsx)(u(),{responseExample:'{\n  "data": [\n    {\n      "id": "f81d4fae-7dec-11d0-a765-00a0c91e6bf6",\n      "name": "test-room-ABC",\n      "start_time": "2022-09-07T13:00:00Z",\n      "record_count": 2\n    }\n  ],\n  "sent_at": "2023-06-15T18:42:11Z"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(b.default,{label:"500",value:"500",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Internal Server Error"})}),(0,t.jsx)("div",{})]})]})})})]})}function M(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(F,{...e})}):F(e)}}}]);
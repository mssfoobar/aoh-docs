"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5104],{61050:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var n=i(74848),s=i(28453);const r={},l="Workflow Designer",a={id:"wfe/Designer Suite/workflow_designer",title:"Workflow Designer",description:"Web diagramming application allows users to design and collaborate in the creation of ESOP workflows.",source:"@site/docs/90_wfe/Designer Suite/workflow_designer.md",sourceDirName:"90_wfe/Designer Suite",slug:"/wfe/Designer Suite/workflow_designer",permalink:"/aoh-docs/docs/wfe/Designer Suite/workflow_designer",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/90_wfe/Designer Suite/workflow_designer.md",tags:[],version:"current",frontMatter:{},sidebar:"wfe",previous:{title:"Form Designer",permalink:"/aoh-docs/docs/wfe/Designer Suite/form_designer"},next:{title:"Introduction",permalink:"/aoh-docs/docs/wfe/Incident Management System API/incident-management-system"}},d={},o=[{value:"Menu Bar",id:"menu-bar",level:2},{value:"Simple Workflow",id:"simple-workflow",level:2},{value:"Data Flow",id:"data-flow",level:2},{value:"Gateways",id:"gateways",level:2},{value:"Parallel",id:"parallel",level:3},{value:"Splitting",id:"splitting",level:4},{value:"Merging",id:"merging",level:4},{value:"Switch",id:"switch",level:3},{value:"Form",id:"form",level:2},{value:"Event",id:"event",level:2},{value:"CallActivity",id:"callactivity",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"workflow-designer",children:"Workflow Designer"}),"\n",(0,n.jsx)(t.p,{children:"Web diagramming application allows users to design and collaborate in the creation of ESOP workflows."}),"\n",(0,n.jsx)(t.h2,{id:"menu-bar",children:"Menu Bar"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Menu",src:i(56947).A+"",width:"1677",height:"130"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Button"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"New BPMN"}),(0,n.jsx)(t.td,{children:"Create new canvas"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Save"}),(0,n.jsx)(t.td,{children:"Save current BPMN"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Publish"}),(0,n.jsx)(t.td,{children:"Publish BPMN (published BPMN cannot be edited)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Load"}),(0,n.jsx)(t.td,{children:"Load saved or published BPMN"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Import"}),(0,n.jsx)(t.td,{children:"Import BPMN from local drive"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Export"}),(0,n.jsx)(t.td,{children:"Export BPMN into local drive"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"simple-workflow",children:"Simple Workflow"}),"\n",(0,n.jsx)(t.p,{children:"Let's build a simple workflow by below steps:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Drag and drop BPMN elements from the palette onto the canvas"}),"\n",(0,n.jsx)(t.li,{children:"Assign the element properties by clicking on it to reveal the properties panel on the right side"}),"\n",(0,n.jsx)(t.li,{children:"Click on the save button to save it"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Simple",src:i(16603).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.h2,{id:"data-flow",children:"Data Flow"}),"\n",(0,n.jsx)(t.p,{children:"Activity that returns data will be assigned to its result variable name which can be further utilized in subsequent activities or gateways."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Data",src:i(65325).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.h2,{id:"gateways",children:"Gateways"}),"\n",(0,n.jsx)(t.h3,{id:"parallel",children:"Parallel"}),"\n",(0,n.jsx)(t.h4,{id:"splitting",children:"Splitting"}),"\n",(0,n.jsxs)(t.p,{children:["A splitting parallel gateway executes multiple activities in parallel creating multiple sequence flows.\n",(0,n.jsx)(t.img,{alt:"ParallelSplit",src:i(36481).A+"",width:"1920",height:"1080"})]}),"\n",(0,n.jsx)(t.h4,{id:"merging",children:"Merging"}),"\n",(0,n.jsxs)(t.p,{children:["A merging parallel gateway waits until all the incoming sequence flows are completed before moving on to the next steps.\n",(0,n.jsx)(t.img,{alt:"ParallelMerge",src:i(79685).A+"",width:"1920",height:"1080"})]}),"\n",(0,n.jsx)(t.h3,{id:"switch",children:"Switch"}),"\n",(0,n.jsx)(t.p,{children:"A Switch is an exclusive gateway which will only proceed when the condition defined inside the flow is true.\nIf there are conflicting conditions, the lowest flow order number will take precedence over others."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Switch",src:i(19877).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.h2,{id:"form",children:"Form"}),"\n",(0,n.jsxs)(t.p,{children:["Form templates which are generated by ",(0,n.jsx)(t.a,{href:"/aoh-docs/docs/wfe/Designer%20Suite/form_designer",children:"Form Designer"})," can be used as user input activities in workflow.\nWhen the user submit the form, form activities will return the submitted data in JSON object."]}),"\n",(0,n.jsx)(t.p,{children:"To access the value of the form input, use the switch-flow advance mode tab and access them by their form components key."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Form",src:i(23643).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.h2,{id:"event",children:"Event"}),"\n",(0,n.jsx)(t.p,{children:"Events can be drawn at the intermediate between two processes (intermediate event) or the boundary of the activity (boundary event).\nBoundary events can be either interrupting or non-interrupting.\nInterrupting events will cancel the host activity and other boundary events attached to the host."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Event",src:i(71067).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.h2,{id:"callactivity",children:"CallActivity"}),"\n",(0,n.jsx)(t.p,{children:"CallActivity can execute another workflow and store its output inside the result variable."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"CallActivity",src:i(76910).A+"",width:"1920",height:"1080"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},56947:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/menu-db3d116e9e83f603c2e47b07badbe750.png"},76910:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/wfd_callActivity-548d70aacb0bd84bb140459b56823649.gif"},65325:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/wfd_data-69b575e75fa3ebf97a975368fce32d75.gif"},71067:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/wfd_event-a58d79108ece33745ba9fa8bdea59167.gif"},23643:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/wfd_form-6ffe868a5fee6917f105d6b73ed96ebf.gif"},79685:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/wfd_parallel_merge-52cd376717cd9e5dd7b646b3693f62db.gif"},36481:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/wfd_parallel_split-2db3e614bd68341caefaf5ff1c42f572.gif"},16603:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/wfd_start-6746ea6b549d2eb4a3c9a48f175fb37b.gif"},19877:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/wfd_switch-bc40341059a88b8167805a76778ad4eb.gif"},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>a});var n=i(96540);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);
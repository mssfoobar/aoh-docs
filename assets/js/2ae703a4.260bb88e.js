"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[9082],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={},l="Workflow Designer",o={unversionedId:"wfe/Designer Suite/workflow_designer",id:"wfe/Designer Suite/workflow_designer",title:"Workflow Designer",description:"Web diagramming application which allows user to design and collaborate in creation of ESOP workflows.",source:"@site/docs/90_wfe/Designer Suite/workflow_designer.md",sourceDirName:"90_wfe/Designer Suite",slug:"/wfe/Designer Suite/workflow_designer",permalink:"/aoh-docs/docs/wfe/Designer Suite/workflow_designer",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/90_wfe/Designer Suite/workflow_designer.md",tags:[],version:"current",frontMatter:{},sidebar:"wfe",previous:{title:"Form Designer",permalink:"/aoh-docs/docs/wfe/Designer Suite/form_designer"},next:{title:"Introduction",permalink:"/aoh-docs/docs/wfe/Incident Management System API/incident-management-system"}},s={},d=[{value:"Menu Bar",id:"menu-bar",level:2},{value:"Simple Workflow",id:"simple-workflow",level:2},{value:"Data Flow",id:"data-flow",level:2},{value:"Gateways",id:"gateways",level:2},{value:"Parallel",id:"parallel",level:3},{value:"Splitting",id:"splitting",level:4},{value:"Merging",id:"merging",level:4},{value:"Switch",id:"switch",level:3},{value:"Form",id:"form",level:2},{value:"Event",id:"event",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"workflow-designer"},"Workflow Designer"),(0,a.kt)("p",null,"Web diagramming application which allows user to design and collaborate in creation of ESOP workflows."),(0,a.kt)("h2",{id:"menu-bar"},"Menu Bar"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Menu",src:n(40627).Z,width:"1677",height:"130"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Button"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"New BPMN"),(0,a.kt)("td",{parentName:"tr",align:null},"Create new canvas")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Save"),(0,a.kt)("td",{parentName:"tr",align:null},"Save current BPMN")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Publish"),(0,a.kt)("td",{parentName:"tr",align:null},"Publish BPMN (published BPMN cannot be edited)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Load"),(0,a.kt)("td",{parentName:"tr",align:null},"Load saved or published BPMN")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Import"),(0,a.kt)("td",{parentName:"tr",align:null},"Import BPMN from local drive")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Export"),(0,a.kt)("td",{parentName:"tr",align:null},"Export BPMN into local drive")))),(0,a.kt)("h2",{id:"simple-workflow"},"Simple Workflow"),(0,a.kt)("p",null,"Let's build a simple workflow by following below steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Drag and drop BPMN elements from the palette onto the canvas"),(0,a.kt)("li",{parentName:"ul"},"Assign the element properties by clicking on it to reveal the properties panel on the right side"),(0,a.kt)("li",{parentName:"ul"},"Click on the save button to save it")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Simple",src:n(42067).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"data-flow"},"Data Flow"),(0,a.kt)("p",null,"Activity that return data will be assigned to its result variable name which can be further utilized in subsequent activities or gateways."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data",src:n(83447).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"gateways"},"Gateways"),(0,a.kt)("h3",{id:"parallel"},"Parallel"),(0,a.kt)("h4",{id:"splitting"},"Splitting"),(0,a.kt)("p",null,"A splitting parallel gateway executes multiple activities in parallel creating multiple sequence flows.\n",(0,a.kt)("img",{alt:"ParallelSplit",src:n(39451).Z,width:"1920",height:"1080"})),(0,a.kt)("h4",{id:"merging"},"Merging"),(0,a.kt)("p",null,"A merging parallel gateway wait until all the incoming sequence flows are completed before moving onto next steps.\n",(0,a.kt)("img",{alt:"ParallelMerge",src:n(29484).Z,width:"1920",height:"1080"})),(0,a.kt)("h3",{id:"switch"},"Switch"),(0,a.kt)("p",null,"Switch is an exclusive gateway which will only proceed when the condition defined inside the flow is true.\nIf there are conflicting conditions, lowest flow order number will take precedence over others."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Switch",src:n(95558).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"form"},"Form"),(0,a.kt)("p",null,"Form templates which are generated by ",(0,a.kt)("a",{parentName:"p",href:"/aoh-docs/docs/wfe/Designer%20Suite/form_designer"},"Form Designer")," can be used as user input activities in workflow.\nWhen user submit the form, form activities will return the submitted data in JSON object."),(0,a.kt)("p",null,"To access the value of the form input, use switch-flow advance mode tab and access them by their form components key."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Form",src:n(68276).Z,width:"1920",height:"1080"})),(0,a.kt)("h2",{id:"event"},"Event"),(0,a.kt)("p",null,"Event can be drawn at the intermediate between two processes (intermediate event) or boundary of the activity (boundary event).\nBoundary event can be either interrupting or non-interrupting.\nInterrupting event will cancel the host activity and other boundary events attached to the host."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Event",src:n(8045).Z,width:"1920",height:"1080"})))}u.isMDXComponent=!0},40627:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/menu-db3d116e9e83f603c2e47b07badbe750.png"},83447:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wfd_data-69b575e75fa3ebf97a975368fce32d75.gif"},8045:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wfd_event-a58d79108ece33745ba9fa8bdea59167.gif"},68276:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wfd_form-6ffe868a5fee6917f105d6b73ed96ebf.gif"},29484:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wfd_parallel_merge-52cd376717cd9e5dd7b646b3693f62db.gif"},39451:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wfd_parallel_split-2db3e614bd68341caefaf5ff1c42f572.gif"},42067:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wfd_start-6746ea6b549d2eb4a3c9a48f175fb37b.gif"},95558:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/wfd_switch-bc40341059a88b8167805a76778ad4eb.gif"}}]);
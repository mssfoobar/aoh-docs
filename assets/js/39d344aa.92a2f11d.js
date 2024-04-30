"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[9269],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=s,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,r=new Array(o);r[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:s,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},73589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const o={sidebar_position:95},r="UCS/SFU Loadtesting",i={unversionedId:"deployment/loadtest-ucs",id:"deployment/loadtest-ucs",title:"UCS/SFU Loadtesting",description:"Objective:",source:"@site/docs/30_deployment/95-loadtest-ucs.md",sourceDirName:"30_deployment",slug:"/deployment/loadtest-ucs",permalink:"/aoh-docs/docs/deployment/loadtest-ucs",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/30_deployment/95-loadtest-ucs.md",tags:[],version:"current",sidebarPosition:95,frontMatter:{sidebar_position:95},sidebar:"deployment",previous:{title:"Loadtesting results",permalink:"/aoh-docs/docs/deployment/loadtest"},next:{title:"Maintenance",permalink:"/aoh-docs/docs/deployment/maintenance"}},l={},c=[{value:"AOH Cluster setup used for the test",id:"aoh-cluster-setup-used-for-the-test",level:3},{value:"These are the test setup",id:"these-are-the-test-setup",level:2},{value:"EC2 instances testing machine",id:"ec2-instances-testing-machine",level:3},{value:"SFU configuration",id:"sfu-configuration",level:3},{value:"loadtest parameters",id:"loadtest-parameters",level:3},{value:"Additional Tools used:",id:"additional-tools-used",level:4},{value:"actual communication model",id:"actual-communication-model",level:4},{value:"Test procedures",id:"test-procedures",level:3},{value:"results",id:"results",level:3},{value:"observation",id:"observation",level:3},{value:"Appendix A OBS as a virtual webcam",id:"appendix-a-obs-as-a-virtual-webcam",level:2},{value:"Appendix B why Spawn EC2 instance instead of spawing VMs on local servers",id:"appendix-b-why-spawn-ec2-instance-instead-of-spawing-vms-on-local-servers",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...o}=e;return(0,s.kt)(u,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ucssfu-loadtesting"},"UCS/SFU Loadtesting"),(0,s.kt)("p",null,"Objective: "),(0,s.kt)("h3",{id:"aoh-cluster-setup-used-for-the-test"},"AOH Cluster setup used for the test"),(0,s.kt)("p",null,"Environment: wfm-qa\nCloud provider: AWS\nNumber of Cores: 8\nNumber of nodes: 4\nSize of RAM: 32GB\nStorage class: gp3"),(0,s.kt)("h2",{id:"these-are-the-test-setup"},"These are the test setup"),(0,s.kt)("h3",{id:"ec2-instances-testing-machine"},"EC2 instances testing machine"),(0,s.kt)("p",null,"Number of Cores: 4\nClass of EC2: t3a.xlarge\nRAM size: 16GB\nEBS class : gp2"),(0,s.kt)("h3",{id:"sfu-configuration"},"SFU configuration"),(0,s.kt)("p",null,"maxbandwidth = 1500kbps\nmaxpackettrack = 500\n",(0,s.kt)("img",{alt:"Message Bus",src:a(73883).Z,width:"482",height:"511"})),(0,s.kt)("h3",{id:"loadtest-parameters"},"loadtest parameters"),(0,s.kt)("p",null,"Minimum Number of 1-1 video calls: 100\nMinimum Number of streams: 200\nMinimum Number of Users: 200"),(0,s.kt)("h4",{id:"additional-tools-used"},"Additional Tools used:"),(0,s.kt)("p",null," OBS (For Webcam simulation)"),(0,s.kt)("p",null,"Websites used for webcam simulation"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.clocktab.com/"},"https://www.clocktab.com/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.timeanddate.com/worldclock/"},"https://www.timeanddate.com/worldclock/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.changiairport.com/"},"https://www.changiairport.com/")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=LDU_Txk06tM"},"https://www.youtube.com/watch?v=LDU_Txk06tM"))),(0,s.kt)("h4",{id:"actual-communication-model"},"actual communication model"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Message Bus",src:a(99772).Z,width:"534",height:"581"})),(0,s.kt)("p",null,"All clients will send their video stream to the SFU, and will receive streams from other uses through the SFU"),(0,s.kt)("h4",{id:""}),(0,s.kt)("h3",{id:"test-procedures"},"Test procedures"),(0,s.kt)("p",null,"1) EC2 or type t3a.xlarge is spawned\n2) Firefox, OBS, webcam simulator stream is installed\n3)"),(0,s.kt)("h3",{id:"results"},"results"),(0,s.kt)("p",null,"1) Maximum bitrate recorded = 63kbps\n2) Max UDP byte process per seconds handled by SFU (up/down): 562kbps\n3) Max CPU utilisaton for sfu pod/service: 50%\n4) Max Memory utilitsation for sfu pod/service: 14%\n5) Max Node CPU utilisation: 63.4%\n6) Average Node memory utilisation: 51%"),(0,s.kt)("h3",{id:"observation"},"observation"),(0,s.kt)("p",null,"1) one stream can be about 600kB",(0,s.kt)("br",{parentName:"p"}),"\n","2) streams drop off after a while\n3) there will be typically 2 drops that will be happening. After the 2nd drop, the EC2 will not be streaming\n4) It seems that the SFU likes to converge to CPU 34%\n7) "),(0,s.kt)("h2",{id:"appendix-a-obs-as-a-virtual-webcam"},"Appendix A OBS as a virtual webcam"),(0,s.kt)("p",null,"Apart from steaming a PC screen to major streaming sites,  OBS can emulate a webcam onto the client using the many source capture tools the OBS offers. For this test, the browser capture tool allows a user to load a webpage directly. "),(0,s.kt)("h2",{id:"appendix-b-why-spawn-ec2-instance-instead-of-spawing-vms-on-local-servers"},"Appendix B why Spawn EC2 instance instead of spawing VMs on local servers"),(0,s.kt)("p",null,"The bandwidth of the office to the wfm-qa environment is 99mbps. To prevent any bottle neck, it was decided to do future tests in the EC2 when possible."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Message Bus",src:a(40461).Z,width:"954",height:"227"}),"\nSample max network activity of 305 MBps recorded"))}p.isMDXComponent=!0},40461:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MaxNetworkbandwidthNeededForTest-9d4371a23bc8e7bc1bfb75454552b5bc.png"},99772:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MessageBus-857ab3ad3a2efc568900738b68224851.png"},73883:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/TestSetup-587c1959b3d7d1fafccc5e7e878e78bc.png"}}]);
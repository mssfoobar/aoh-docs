"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[9269],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>h});var a=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(s),m=n,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return s?a.createElement(h,i(i({ref:t},c),{},{components:s})):a.createElement(h,i({ref:t},c))}));function h(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=s.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<r;d++)i[d]=s[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,s)}m.displayName="MDXCreateElement"},73589:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=s(87462),n=(s(67294),s(3905));const r={sidebar_position:95},i="UCS/SFU Loadtesting",o={unversionedId:"deployment/loadtest-ucs",id:"deployment/loadtest-ucs",title:"UCS/SFU Loadtesting",description:"Objective:",source:"@site/docs/30_deployment/95-loadtest-ucs.md",sourceDirName:"30_deployment",slug:"/deployment/loadtest-ucs",permalink:"/aoh-docs/docs/deployment/loadtest-ucs",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/30_deployment/95-loadtest-ucs.md",tags:[],version:"current",sidebarPosition:95,frontMatter:{sidebar_position:95},sidebar:"deployment",previous:{title:"Loadtesting results",permalink:"/aoh-docs/docs/deployment/loadtest"},next:{title:"Maintenance",permalink:"/aoh-docs/docs/deployment/maintenance"}},l={},d=[{value:"AOH Cluster setup used for the test",id:"aoh-cluster-setup-used-for-the-test",level:3},{value:"These are the test setup",id:"these-are-the-test-setup",level:2},{value:"EC2 instances testing machine",id:"ec2-instances-testing-machine",level:3},{value:"SFU configuration",id:"sfu-configuration",level:3},{value:"loadtest targets",id:"loadtest-targets",level:3},{value:"Additional Tools used:",id:"additional-tools-used",level:4},{value:"actual communication model",id:"actual-communication-model",level:4},{value:"Test steps",id:"test-steps",level:3},{value:"results",id:"results",level:3},{value:"observation",id:"observation",level:3},{value:"some statistic for the sfu",id:"some-statistic-for-the-sfu",level:4},{value:"Appendix A OBS as a virtual webcam",id:"appendix-a-obs-as-a-virtual-webcam",level:2},{value:"Appendix B why Spawn EC2 instance instead of spawing VMs on local servers",id:"appendix-b-why-spawn-ec2-instance-instead-of-spawing-vms-on-local-servers",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ucssfu-loadtesting"},"UCS/SFU Loadtesting"),(0,n.kt)("p",null,"Objective: "),(0,n.kt)("h3",{id:"aoh-cluster-setup-used-for-the-test"},"AOH Cluster setup used for the test"),(0,n.kt)("p",null,"Environment:                        wfm-qa\nCloud provider:                     AWS\nNumber of Cores in the AOH cluster: 8\nNumber of nodes for cluster:        4\nNumber of cores for SFU:            2\nSize of RAM:                        32GB\nStorage class:                      gp3"),(0,n.kt)("h2",{id:"these-are-the-test-setup"},"These are the test setup"),(0,n.kt)("h3",{id:"ec2-instances-testing-machine"},"EC2 instances testing machine"),(0,n.kt)("p",null,"Number of Cores: 4\nClass of EC2: t3a.xlarge\nRAM size: 16GB\nEBS class : gp2"),(0,n.kt)("h3",{id:"sfu-configuration"},"SFU configuration"),(0,n.kt)("p",null,"maxbandwidth = 1500kbps\nmaxpackettrack = 500"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Message Bus",src:s(73883).Z,width:"482",height:"511"})),(0,n.kt)("h3",{id:"loadtest-targets"},"loadtest targets"),(0,n.kt)("p",null,"Minimum Number of 1-1 video calls: 100\nMinimum Number of streams: 200\nMinimum Number of Users: 200"),(0,n.kt)("h4",{id:"additional-tools-used"},"Additional Tools used:"),(0,n.kt)("p",null," OBS (For Webcam simulation)"),(0,n.kt)("p",null,"Websites used for webcam simulation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.clocktab.com/"},"https://www.clocktab.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.timeanddate.com/worldclock/"},"https://www.timeanddate.com/worldclock/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.changiairport.com/"},"https://www.changiairport.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=LDU_Txk06tM"},"https://www.youtube.com/watch?v=LDU_Txk06tM"))),(0,n.kt)("h4",{id:"actual-communication-model"},"actual communication model"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Message Bus",src:s(99772).Z,width:"534",height:"581"})),(0,n.kt)("p",null,"All clients will send their video stream to the SFU, and will receive streams from other uses through the SFU"),(0,n.kt)("h4",{id:""}),(0,n.kt)("h3",{id:"test-steps"},"Test steps"),(0,n.kt)("p",null,"1) EC2 of type t3a.xlarge is spawned\n2) Firefox, OBS, webcam simulator stream is installed\n3) Webcam simulator is started, OBS is started\n3) 1st User insteance is started up and logged in for Firefox, 1-1 video call is engaged with 2nd User\n4) 2nd User instance is started up and logged in in Firefox private mode. 1-1 vidoe call is engaged with 4th User\n5) Another EC2 is spawned.\n6) Firefox, OBS, webcam simulator stream is installed as well\n7) 3rd User insteance is started up and logged in for Firefox, 1-1 video call is engaged with 1st User\n8) 4th User instance is started up and logged in in Firefox private mode. 1-1 vidoe call is engaged with 2nd User\n9) The process is repeated"),(0,n.kt)("h3",{id:"results"},"results"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Message Bus",src:s(50090).Z,width:"1800",height:"661"}),"\nFigure 1a graph of EC2 with one or two streams output running"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Message Bus",src:s(26416).Z,width:"1658",height:"698"}),"\nFigure 1b graph of EC2 with "),(0,n.kt)("p",null,"From figure 1b,around 1730hrs on 23rd April, you can observe that most EC2s will converge to about 1.58MBps when two streams is up, and around 550kBps in Figure 1a when one steam upload is happening."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Message Bus",src:s(82279).Z,width:"1779",height:"715"}),"\nFigure 2a graph of EC2 with one or two streams input running"),(0,n.kt)("p",null,"From figure 2, you can observe that the EC2s are also ingesting."),(0,n.kt)("p",null,"From Figure 2, around 1730hrs on 23rd April, you can observe that more tha 30 EC2s have bandwidth ingesion running at around 1.1MBps, which indicates that there are two streams running and 29 EC2s running around 200 - 600kBps, which inidicates that it is running at least 1 stream. It also means that there are at least 89 streams being ingested at the same time."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Message Bus",src:s(26416).Z,width:"1658",height:"698"}),"\nFigure 3 graph of EC2 with one or two streams output running"),(0,n.kt)("p",null,"From Figure 3, you can observe that more tha 28 EC2s have bandwidth ingesion running at around 1.1MBps, which indicates that there are two streams running and 21 EC2s running around 200 - 600kBps, which inidicates that it is running at least 1 stream. It also means that there are at least 87 streams being ingested at the same time."),(0,n.kt)("h3",{id:"observation"},"observation"),(0,n.kt)("p",null,"1) Most stream are around 500-600kB",(0,n.kt)("br",{parentName:"p"}),"\n","2) streams drop/disconnects  after a while, there seems not to be any notable pattern at this point of time for the disconnections\n3) there will be typically 2 drops that will be happening. After the 2nd drop, the EC2 does not seem to be streaming any data until the UCS front end is restarted\n4) It seems that the SFU  converges to CPU 34%\n5) after 12 hours, about 50% of the streams would stop. The disconnection slows down dramatically after the 6th hour."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Message Bus",src:s(91304).Z,width:"1652",height:"668"})),(0,n.kt)("h4",{id:"some-statistic-for-the-sfu"},"some statistic for the sfu"),(0,n.kt)("p",null,"1) Max UDP byte process per seconds handled by SFU (up/down): 562kbps\n2) Max CPU utilisaton for sfu pod/service: 50%\n3) Max Memory utilitsation for sfu pod/service: 14%\n4) Max Node CPU utilisation: 63.4%\n5) Average Node memory utilisation: 51%"),(0,n.kt)("h2",{id:"appendix-a-obs-as-a-virtual-webcam"},"Appendix A OBS as a virtual webcam"),(0,n.kt)("p",null,"Apart from steaming a PC screen to major streaming sites,  OBS can emulate a webcam onto the client using the many source capture tools the OBS offers. For this test, the browser capture tool allows a user to load a webpage directly. "),(0,n.kt)("h2",{id:"appendix-b-why-spawn-ec2-instance-instead-of-spawing-vms-on-local-servers"},"Appendix B why Spawn EC2 instance instead of spawing VMs on local servers"),(0,n.kt)("p",null,"The bandwidth of the office to the wfm-qa environment is 99mbps. To prevent any bottle neck, it was decided to do future tests in the EC2 when possible."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Message Bus",src:s(40461).Z,width:"954",height:"227"}),"\nSample max network activity of 305 MBps recorded"))}p.isMDXComponent=!0},26416:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/23thApril_2100hrs_100output-c977454ffc4ce893841d65b816d66c3e.png"},50090:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/2stream_up-c7c893e5c78ad2b78929a8172c84dac5.png"},91304:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/After12Hours-43444e4e7c979ca1c9de8b4b7b6ea396.png"},40461:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/MaxNetworkbandwidthNeededForTest-9d4371a23bc8e7bc1bfb75454552b5bc.png"},99772:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/MessageBus-857ab3ad3a2efc568900738b68224851.png"},82279:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/NetworkIn-fdec7fbe123cba6aa73dfe94441909e6.png"},73883:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/TestSetup-587c1959b3d7d1fafccc5e7e878e78bc.png"}}]);
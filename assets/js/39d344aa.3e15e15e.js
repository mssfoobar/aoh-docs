"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[6486],{91213:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(74848),n=t(28453);const a={sidebar_position:95},r="UCS/SFU Loadtesting",o={id:"deployment/loadtest-ucs",title:"UCS/SFU Loadtesting",description:"Objective: To stress test the SFU",source:"@site/docs/30_deployment/95-loadtest-ucs.md",sourceDirName:"30_deployment",slug:"/deployment/loadtest-ucs",permalink:"/aoh-docs/docs/deployment/loadtest-ucs",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/30_deployment/95-loadtest-ucs.md",tags:[],version:"current",sidebarPosition:95,frontMatter:{sidebar_position:95},sidebar:"deployment",previous:{title:"Loadtesting results",permalink:"/aoh-docs/docs/deployment/loadtest"},next:{title:"Maintenance",permalink:"/aoh-docs/docs/deployment/maintenance"}},d={},l=[{value:"Objective: To stress test the SFU",id:"objective-to-stress-test-the-sfu",level:3},{value:"loadtest targets",id:"loadtest-targets",level:3},{value:"1 Testing setup",id:"1-testing-setup",level:2},{value:"AOH Cluster setup used for the test",id:"aoh-cluster-setup-used-for-the-test",level:3},{value:"These are the test setup",id:"these-are-the-test-setup",level:2},{value:"VM instances testing machine",id:"vm-instances-testing-machine",level:3},{value:"SFU configuration",id:"sfu-configuration",level:3},{value:"Additional Tools used:",id:"additional-tools-used",level:4},{value:"actual communication model",id:"actual-communication-model",level:4},{value:"2 Test steps",id:"2-test-steps",level:2},{value:"3 Results",id:"3-results",level:2},{value:"3 Observations",id:"3-observations",level:2},{value:"For how much each stream is consuming over the network, please refer to Appendix B",id:"for-how-much-each-stream-is-consuming-over-the-network-please-refer-to-appendix-b",level:4},{value:"some statistic for the sfu",id:"some-statistic-for-the-sfu",level:4},{value:"Appendix A OBS as a virtual webcam",id:"appendix-a-obs-as-a-virtual-webcam",level:2},{value:"Apart from steaming a PC screen to major streaming sites,  OBS can emulate a webcam onto the client using the many source capture tools the OBS offers. For this test, the browser capture tool allows a user to load a webpage directly.",id:"apart-from-steaming-a-pc-screen-to-major-streaming-sites--obs-can-emulate-a-webcam-onto-the-client-using-the-many-source-capture-tools-the-obs-offers-for-this-test-the-browser-capture-tool-allows-a-user-to-load-a-webpage-directly",level:2},{value:"Appendix B why Spawn EC2 instance instead of spawing VMs on local servers",id:"appendix-b-why-spawn-ec2-instance-instead-of-spawing-vms-on-local-servers",level:2},{value:"Appendix B Testing done in AWS",id:"appendix-b-testing-done-in-aws",level:2},{value:"AOH Cluster setup used for the test",id:"aoh-cluster-setup-used-for-the-test-1",level:3},{value:"These are the test setup",id:"these-are-the-test-setup-1",level:2},{value:"EC2 instances testing machine",id:"ec2-instances-testing-machine",level:3},{value:"SFU configuration",id:"sfu-configuration-1",level:3},{value:"Additional Tools used:",id:"additional-tools-used-1",level:4},{value:"actual communication model",id:"actual-communication-model-1",level:4},{value:"2 Test steps",id:"2-test-steps-1",level:2},{value:"3 Results",id:"3-results-1",level:2},{value:"3 Observations",id:"3-observations-1",level:2},{value:"1) Most stream are around 200-600kB.",id:"1-most-stream-are-around-200-600kb",level:4},{value:"2) streams drop/disconnects after sometime",id:"2-streams-dropdisconnects-after-sometime",level:4},{value:"3) It seems that the SFU  converges to CPU 34%",id:"3-it-seems-that-the-sfu--converges-to-cpu-34",level:4},{value:"some statistic for the sfu",id:"some-statistic-for-the-sfu-1",level:4}];function c(e){const s={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"ucssfu-loadtesting",children:"UCS/SFU Loadtesting"}),"\n",(0,i.jsx)(s.h3,{id:"objective-to-stress-test-the-sfu",children:"Objective: To stress test the SFU"}),"\n",(0,i.jsx)(s.h3,{id:"loadtest-targets",children:"loadtest targets"}),"\n",(0,i.jsx)(s.p,{children:"Minimum Number of 1-1 video calls: 100\nMinimum Number of streams: 200\nMinimum Number of Users: 200"}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"1-testing-setup",children:"1 Testing setup"}),"\n",(0,i.jsx)(s.h3,{id:"aoh-cluster-setup-used-for-the-test",children:"AOH Cluster setup used for the test"}),"\n",(0,i.jsx)(s.p,{children:"Environment:                        dev2\nCloud provider:                     AWS\nNumber of Cores in the AOH cluster: 24\nNumber of nodes for cluster:        6\nNumber of cores for SFU:            4\nSize of RAM per cluster:            375GB\nSize of RAM pre node:               62GB\nStorage class:                      HDD/ - 500MB/s"}),"\n",(0,i.jsx)(s.h2,{id:"these-are-the-test-setup",children:"These are the test setup"}),"\n",(0,i.jsx)(s.h3,{id:"vm-instances-testing-machine",children:"VM instances testing machine"}),"\n",(0,i.jsx)(s.p,{children:"Number of Cores: 4\nRAM size: 16GB\nstorage class: 500MB/s"}),"\n",(0,i.jsx)(s.h3,{id:"sfu-configuration",children:"SFU configuration"}),"\n",(0,i.jsx)(s.p,{children:"maxbandwidth = 1500kbps\nmaxpackettrack = 500"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Message Bus",src:t(1558).A+"",width:"482",height:"511"})}),"\n",(0,i.jsx)(s.h4,{id:"additional-tools-used",children:"Additional Tools used:"}),"\n",(0,i.jsx)(s.p,{children:"OBS (For Webcam simulation)\nFirefox"}),"\n",(0,i.jsx)(s.p,{children:"Websites used for webcam simulation"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.clocktab.com/",children:"https://www.clocktab.com/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.timeanddate.com/worldclock/",children:"https://www.timeanddate.com/worldclock/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.changiairport.com/",children:"https://www.changiairport.com/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.youtube.com/watch?v=LDU_Txk06tM",children:"https://www.youtube.com/watch?v=LDU_Txk06tM"})}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"actual-communication-model",children:"actual communication model"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Message Bus",src:t(93660).A+"",width:"534",height:"581"})}),"\n",(0,i.jsx)(s.p,{children:"All clients will send their video stream to the SFU, and will receive streams from other users through the SFU."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"2-test-steps",children:"2 Test steps"}),"\n",(0,i.jsx)(s.h3,{id:""}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"VM is cloned with Firefox, OBS, webcam simulator stream installed"}),"\n",(0,i.jsx)(s.li,{children:"Firefox, OBS, webcam simulator stream is installed"}),"\n",(0,i.jsx)(s.li,{children:"Webcam simulator is started, OBS is started"}),"\n",(0,i.jsx)(s.li,{children:"1st User insteance is started up and logged in for Firefox, 1-1 video call is engaged with 2nd User"}),"\n",(0,i.jsx)(s.li,{children:"Step 4 is repeated for 4-6 times to spawn additional 1-1 calls with other VM/users"}),"\n",(0,i.jsx)(s.li,{children:"The process is repeated until the targetted number of users are spawned."}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"3-results",children:"3 Results"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(61644).A+"",width:"760",height:"296"}),"\nFigure 1a graph of transmitting network activity of SFU during the test"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(86795).A+"",width:"791",height:"361"}),"\nFigure 1b graph of receiving network activity of SFU during the test"]}),"\n",(0,i.jsx)(s.p,{children:"From figure 1a and 1b, you can observe that for 100 pairs of 1-1 calls, the network required is about 15.7MB/s"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(68502).A+"",width:"1446",height:"393"}),"\nFigure 2 CPU utilisation"]}),"\n",(0,i.jsx)(s.p,{children:"From Figure 2, you can observe that the SFU is using about 1.8 CPU cores during the time where it is serving 100 pairs of 1-1 calls. Since each node has 4 cores, the utilisation rate is below 50%."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(61199).A+"",width:"853",height:"352"}),"\nFigure 3 total cluster load"]}),"\n",(0,i.jsx)(s.p,{children:"From FIgure 3, you can observe that the total cluster load increased to 62.5% during the test. However, this is still under the 80% threshold, which is typically the benchmark used for load testing"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(33423).A+"",width:"1437",height:"285"}),"\nFigure 4 total node memory usage\nIn Figure 4, you can observed that the memory consumption of the node has increased to 6.67GB."]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"3-observations",children:"3 Observations"}),"\n",(0,i.jsx)(s.h4,{id:"for-how-much-each-stream-is-consuming-over-the-network-please-refer-to-appendix-b",children:"For how much each stream is consuming over the network, please refer to Appendix B"}),"\n",(0,i.jsx)(s.h4,{id:"some-statistic-for-the-sfu",children:"some statistic for the sfu"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Max UDP byte process per seconds handled by SFU (up/down): 562kbps"}),"\n",(0,i.jsx)(s.li,{children:"Max CPU utilisaton for sfu pod/service: 50%"}),"\n",(0,i.jsx)(s.li,{children:"Max Memory utilitsation for sfu pod/service: 14%"}),"\n",(0,i.jsx)(s.li,{children:"Max Node CPU utilisation: 63.4%"}),"\n",(0,i.jsx)(s.li,{children:"Average Node memory utilisation: 51%"}),"\n"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"appendix-a-obs-as-a-virtual-webcam",children:"Appendix A OBS as a virtual webcam"}),"\n",(0,i.jsx)(s.h2,{id:"apart-from-steaming-a-pc-screen-to-major-streaming-sites--obs-can-emulate-a-webcam-onto-the-client-using-the-many-source-capture-tools-the-obs-offers-for-this-test-the-browser-capture-tool-allows-a-user-to-load-a-webpage-directly",children:"Apart from steaming a PC screen to major streaming sites,  OBS can emulate a webcam onto the client using the many source capture tools the OBS offers. For this test, the browser capture tool allows a user to load a webpage directly."}),"\n",(0,i.jsx)(s.h2,{id:"appendix-b-why-spawn-ec2-instance-instead-of-spawing-vms-on-local-servers",children:"Appendix B why Spawn EC2 instance instead of spawing VMs on local servers"}),"\n",(0,i.jsx)(s.p,{children:"The bandwidth of the office to the wfm-qa environment is 99mbps. To prevent any bottle neck, it was decided to do future tests in the EC2 when possible."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(67756).A+"",width:"954",height:"227"}),"\nSample max network activity of 305 MBps recorded"]}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"appendix-b-testing-done-in-aws",children:"Appendix B Testing done in AWS"}),"\n",(0,i.jsx)(s.h3,{id:"aoh-cluster-setup-used-for-the-test-1",children:"AOH Cluster setup used for the test"}),"\n",(0,i.jsx)(s.p,{children:"Environment:                        wfm-qa\nCloud provider:                     AWS\nNumber of Cores in the AOH cluster: 8\nNumber of nodes for cluster:        4\nNumber of cores for SFU:            2\nSize of RAM:                        32GB\nStorage class:                      gp3"}),"\n",(0,i.jsx)(s.h2,{id:"these-are-the-test-setup-1",children:"These are the test setup"}),"\n",(0,i.jsx)(s.h3,{id:"ec2-instances-testing-machine",children:"EC2 instances testing machine"}),"\n",(0,i.jsx)(s.p,{children:"Number of Cores: 4\nClass of EC2: t3a.xlarge\nRAM size: 16GB\nEBS class : gp2"}),"\n",(0,i.jsx)(s.h3,{id:"sfu-configuration-1",children:"SFU configuration"}),"\n",(0,i.jsx)(s.p,{children:"maxbandwidth = 1500kbps\nmaxpackettrack = 500"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Message Bus",src:t(1558).A+"",width:"482",height:"511"})}),"\n",(0,i.jsx)(s.h4,{id:"additional-tools-used-1",children:"Additional Tools used:"}),"\n",(0,i.jsx)(s.p,{children:"OBS (For Webcam simulation)\nFirefox"}),"\n",(0,i.jsx)(s.p,{children:"Websites used for webcam simulation"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.clocktab.com/",children:"https://www.clocktab.com/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.timeanddate.com/worldclock/",children:"https://www.timeanddate.com/worldclock/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.changiairport.com/",children:"https://www.changiairport.com/"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.youtube.com/watch?v=LDU_Txk06tM",children:"https://www.youtube.com/watch?v=LDU_Txk06tM"})}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"actual-communication-model-1",children:"actual communication model"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Message Bus",src:t(93660).A+"",width:"534",height:"581"})}),"\n",(0,i.jsx)(s.p,{children:"All clients will send their video stream to the SFU, and will receive streams from other users through the SFU."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"2-test-steps-1",children:"2 Test steps"}),"\n",(0,i.jsx)(s.h3,{id:"-1"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"EC2 of type t3a.xlarge is spawned"}),"\n",(0,i.jsx)(s.li,{children:"Firefox, OBS, webcam simulator stream is installed"}),"\n",(0,i.jsx)(s.li,{children:"Webcam simulator is started, OBS is started"}),"\n",(0,i.jsx)(s.li,{children:"1st User insteance is started up and logged in for Firefox, 1-1 video call is engaged with 2nd User"}),"\n",(0,i.jsx)(s.li,{children:"2nd User instance is started up and logged in in Firefox private mode. 1-1 vidoe call is engaged with 4th User"}),"\n",(0,i.jsx)(s.li,{children:"Another EC2 is spawned."}),"\n",(0,i.jsx)(s.li,{children:"Firefox, OBS, webcam simulator stream is installed"}),"\n",(0,i.jsx)(s.li,{children:"Webcam simulator is started, OBS is started"}),"\n",(0,i.jsx)(s.li,{children:"3rd User insteance is started up and logged in for Firefox, 1-1 video call is engaged with 1st User"}),"\n",(0,i.jsx)(s.li,{children:"4th User instance is started up and logged in in Firefox private mode. 1-1 vidoe call is engaged with 2nd User"}),"\n",(0,i.jsx)(s.li,{children:"The process is repeated until the targetted number of users are spawned."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"However, due to  time and money constrain, the test was stopped on the forth day."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"3-results-1",children:"3 Results"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(35021).A+"",width:"1167",height:"653"}),"\nFigure 1a graph of EC2 with one or two streams output running"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(98988).A+"",width:"1658",height:"698"}),"\nFigure 1b graph of EC2 with"]}),"\n",(0,i.jsx)(s.p,{children:"From figure 1b,around 1835hrs on 23rd April, you can observe that most EC2s will converge to about 1.1MBps - 1.58MBps when two streams are up, and around 550kBps in Figure 1a when one steam upload is happening.\nThe total streams translate to 84 streams, with 27 EC2 with 2 streams, and 30 streams with 1 stream."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(35021).A+"",width:"1167",height:"653"}),"\nFigure 2a graph of EC2 with one or two streams input running"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(65284).A+"",width:"1267",height:"639"}),"\nFigure 2b graph of EC2 with at least one streams input running"]}),"\n",(0,i.jsx)(s.p,{children:"From Figure 2, around 1730hrs on 23rd April, you can observe that more tha 27 EC2s have bandwidth ingesion running at around 1.1MBps, which indicates that there are two streams running and 30 EC2s running from 200 - 600kBps, which indicates that it is running at least 1 stream. At this point of time there are at least 84 streams being ingested at the same time."}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h2,{id:"3-observations-1",children:"3 Observations"}),"\n",(0,i.jsx)(s.h4,{id:"1-most-stream-are-around-200-600kb",children:"1) Most stream are around 200-600kB."}),"\n",(0,i.jsx)(s.h4,{id:"2-streams-dropdisconnects-after-sometime",children:"2) streams drop/disconnects after sometime"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(88522).A+"",width:"1713",height:"662"}),"\nFigure 3a Network graph showing streams dropping as time passes"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(96310).A+"",width:"917",height:"689"}),"\nFigure 3b"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(18372).A+"",width:"911",height:"681"}),"\nFigure 3c"]}),"\n",(0,i.jsx)(s.p,{children:"From figure 3b and 3c, you can observe two different clients displaying the last frame of the video call that they received."}),"\n",(0,i.jsx)(s.h4,{id:"3-it-seems-that-the-sfu--converges-to-cpu-34",children:"3) It seems that the SFU  converges to CPU 34%"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(38272).A+"",width:"1715",height:"669"}),"\nFigure 4 CPU comsumption of SFU over time"]}),"\n",(0,i.jsx)(s.p,{children:"From Figure 4, you can observe the CPU usage of the SFU over the testing period.\n-- the Highest usage recorded is about 50%, which translate to a consumption of 1 core, and about 80 streams\n-- As streams starts to drop, the CPU consumption will converge to the 34%. (log shaped graph)"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(65076).A+"",width:"1334",height:"683"}),"\nFigure 5a 30 ec2 of 2 streams at the end of day 1"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.img,{alt:"Message Bus",src:t(98502).A+"",width:"1334",height:"678"}),"\nFigure 5b 20 ec2 of 1 streams at the end of day 1"]}),"\n",(0,i.jsx)(s.h4,{id:"some-statistic-for-the-sfu-1",children:"some statistic for the sfu"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Max UDP byte process per seconds handled by SFU (up/down): 562kbps"}),"\n",(0,i.jsx)(s.li,{children:"Max CPU utilisaton for sfu pod/service: 50%"}),"\n",(0,i.jsx)(s.li,{children:"Max Memory utilitsation for sfu pod/service: 14%"}),"\n",(0,i.jsx)(s.li,{children:"Max Node CPU utilisation: 63.4%"}),"\n",(0,i.jsx)(s.li,{children:"Average Node memory utilisation: 51%"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},98988:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/23thApril_2100hrs_100output-c977454ffc4ce893841d65b816d66c3e.png"},65076:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/Day1_80streams-6607fffaf66c5226fd5d7a828cb6de8e.png"},98502:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/Day1_80streams_part2-7f6ed1ddb76c324fc42db93115424150.png"},67756:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/MaxNetworkbandwidthNeededForTest-9d4371a23bc8e7bc1bfb75454552b5bc.png"},93660:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/MessageBus-857ab3ad3a2efc568900738b68224851.png"},65284:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/Network_out_1835hrs_1Streams-bc930b07e7fd654dea41c5b19b6a90cf.png"},35021:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/Network_out_1835hrs_2Streams-06de7893d922e0f11f93eb2f9bad7a3b.png"},68502:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/SFU_CPU-1e69ca88b03b63fc1c2e93ea571d6c22.png"},38272:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/SFU_CPU_vs_numberOfCalls-ba3145415107103aa64516e709da0131.png"},18372:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/Screenshot2024-04-24102156-756c2828372367ee5d1b574a1825db32.png"},96310:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/Screenshot2024-04-24110016-1b8d4813a0d991daf7c8c84414829816.png"},88522:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/StreamDropsDecreasing-e6dafb6b50855c985aab04baadf12812.png"},1558:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/TestSetup-587c1959b3d7d1fafccc5e7e878e78bc.png"},61199:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/sfu_CLusterCPUload_totalCluster-6c0bcd96d8f107249ef7b9895fc1b6fd.png"},33423:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/sfu_Node_total_memory-7f98b038f9ccb15532180867ef45a89d.png"},86795:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/sfu_Receive-96ed81ef286fad40fc5455e2b0a74ab3.png"},61644:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/sfu_transmitt-1881d32fe85846b496f911b797a6a7bd.png"},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var i=t(96540);const n={},a=i.createContext(n);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);
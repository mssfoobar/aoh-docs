"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[9407],{96432:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>A,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=t(74848),n=t(28453);const r={sidebar_position:90},d="Loadtesting results",l={id:"deployment/loadtest",title:"Loadtesting results",description:"These are the reference sizing and loadtesting results",source:"@site/docs/30_deployment/90-loadtest.md",sourceDirName:"30_deployment",slug:"/deployment/loadtest",permalink:"/aoh-docs/docs/deployment/loadtest",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/30_deployment/90-loadtest.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"deployment",previous:{title:"Wrap up",permalink:"/aoh-docs/docs/deployment/wrapup"},next:{title:"loadtest-ucs",permalink:"/aoh-docs/docs/deployment/loadtest-ucs"}},A={},o=[{value:"These are the reference sizing and loadtesting results",id:"these-are-the-reference-sizing-and-loadtesting-results",level:3},{value:"detail report",id:"detail-report",level:3},{value:"Setup",id:"setup",level:4},{value:"test steps",id:"test-steps",level:4},{value:"detail report for test result 1",id:"detail-report-for-test-result-1",level:3},{value:"detailed report for test result 2",id:"detailed-report-for-test-result-2",level:3}];function h(e){const s={blockquote:"blockquote",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"loadtesting-results",children:"Loadtesting results"}),"\n",(0,i.jsx)(s.h3,{id:"these-are-the-reference-sizing-and-loadtesting-results",children:"These are the reference sizing and loadtesting results"}),"\n",(0,i.jsx)(s.p,{children:"These test are done in AWS eks."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Environment "}),(0,i.jsx)("th",{children:"Setup "}),(0,i.jsx)("th",{children:"Max Users"}),(0,i.jsx)("th",{children:"Peak req/s"}),(0,i.jsx)("th",{children:"Average req/s"}),(0,i.jsx)("th",{children:"Database type"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"aws"}),(0,i.jsx)("td",{children:"  8 core, 4 nodes"}),(0,i.jsx)("td",{children:"50"}),(0,i.jsx)("td",{children:" 60"}),(0,i.jsx)("td",{children:" 60"}),(0,i.jsx)("td",{children:"internal postgres with gp2"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"aws"}),(0,i.jsx)("td",{children:"  8 core, 4 nodes"}),(0,i.jsx)("td",{children:"250"}),(0,i.jsx)("td",{children:"38"}),(0,i.jsx)("td",{children:"215"}),(0,i.jsx)("td",{children:"Aurora RDS "})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"detail-report",children:"detail report"}),"\n",(0,i.jsx)(s.h4,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(s.p,{children:"environment: aws\nCluster type: EKS\nnumber of nodes: 4\nnumber of cores: 8\nRam: 32gb\nnumber of cores per node: 2\nRam per node: 8gb\nMachine type used: t3a.large\nTool used: Artillery/Playwright"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Message Bus",src:t(60598).A+"",width:"603",height:"222"})}),"\n",(0,i.jsx)(s.p,{children:"Figure 1 Artillery installed in EC2 instance in AWS testing the EKS cluster"}),"\n",(0,i.jsx)(s.p,{children:"In Figure 1, you can see the setup of the tester EC2 instance that was used to test the EKS clusters. Artillery and Playwright were installed in the EC2 instance so that they can run the test script, and they hit the AWS EKS clusters through the internet."}),"\n",(0,i.jsx)(s.h4,{id:"test-steps",children:"test steps"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"User go to the log in page of AOH."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.ol,{start:"2",children:["\n",(0,i.jsx)(s.li,{children:"User enters username and password into the respective fields."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.ol,{start:"3",children:["\n",(0,i.jsx)(s.li,{children:"User waits for dashboard to load."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.ol,{start:"4",children:["\n",(0,i.jsx)(s.li,{children:"User go to Incident page."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.ol,{start:"5",children:["\n",(0,i.jsx)(s.li,{children:"User checks that the page is loaded (Add button)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.ol,{start:"6",children:["\n",(0,i.jsx)(s.li,{children:"User wait for 2 seconds (simulate think time)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.ol,{start:"7",children:["\n",(0,i.jsx)(s.li,{children:"User go to Trips page."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.ol,{start:"8",children:["\n",(0,i.jsx)(s.li,{children:"User waits for 2 seconds (simulates thini time)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.ol,{start:"9",children:["\n",(0,i.jsx)(s.li,{children:"User goes back to incident page again."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.ol,{start:"10",children:["\n",(0,i.jsx)(s.li,{children:"the loop goes on for 85 cycles."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"From the test steps above, you can calculate that each user test run will take a minumum time of 340 seconds, assuming the system respond immediately."}),"\n",(0,i.jsx)(s.h3,{id:"detail-report-for-test-result-1",children:"detail report for test result 1"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Metric "}),(0,i.jsx)("th",{children:"Value "})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"browser.http_requests"}),(0,i.jsx)("td",{children:"  13811 "})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"vusers.completed"}),(0,i.jsx)("td",{children:" 50 "})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"vusers.created"}),(0,i.jsx)("td",{children:" 50 "})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"vusers.created_by_name.0"}),(0,i.jsx)("td",{children:" 50 "})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"vusers.failed"}),(0,i.jsx)("td",{children:" 0 "})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"Average Respond time = 548/13811 = 39ms\nPeak Respond time = 1000/636 = 15ms"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Message Bus",src:t(7251).A+"",width:"1265",height:"535"})}),"\n",(0,i.jsx)(s.p,{children:"Figure 2 http request distribution graph for test result 1"}),"\n",(0,i.jsx)(s.p,{children:"From Figure 2, you can observe that most of the http requests were made on the first 190 seconds of the test. This can be explained with the test steps involved."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Message Bus",src:t(1245).A+"",width:"1283",height:"567"})}),"\n",(0,i.jsx)(s.p,{children:"Figure 3 peak request recorded over a 10 seconds period for test result 1"}),"\n",(0,i.jsx)(s.p,{children:"From figure 3, you can see that the peak http request is about 636, over a period of 10 seconds."}),"\n",(0,i.jsx)(s.h3,{id:"detailed-report-for-test-result-2",children:"detailed report for test result 2"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Metric "}),(0,i.jsx)("th",{children:"Value "})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"browser.http_requests"}),(0,i.jsx)("td",{children:"  40841 "})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"vusers.completed"}),(0,i.jsx)("td",{children:" 250 "})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"vusers.created"}),(0,i.jsx)("td",{children:" 250 "})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"vusers.created_by_name.0"}),(0,i.jsx)("td",{children:" 250 "})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"vusers.failed"}),(0,i.jsx)("td",{children:" 0 "})]})]})]}),"\n",(0,i.jsx)(s.p,{children:"Average Respond time = 1120/40841 = 27ms\nPeak Respond time = 10000/ = 3ms"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Message Bus",src:t(51524).A+"",width:"1257",height:"540"})}),"\n",(0,i.jsx)(s.p,{children:"Figure 4 http request distribution graph for test result 2"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Message Bus",src:t(93614).A+"",width:"1289",height:"556"})}),"\n",(0,i.jsx)(s.p,{children:"Figure 5 peak request recorded over a 10 seconds period for test result 2"}),"\n",(0,i.jsx)(s.p,{children:"From figure 5, you can see that the peak http request is about 2648, over a period of 10 seconds."}),"\n",(0,i.jsx)(s.p,{children:"Most of the load happens on the first 250 seconds."})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},7251:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/loadtest_http_request_distribution-0860c2f3eb61ed90b764744fdabad031.png"},51524:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/loadtest_http_request_distribution_2-cfd67e58e7dd60767067258830163365.png"},1245:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/loadtest_peak_request-d06739a60f003e8a815a9559cde45b0d.png"},93614:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/loadtest_peak_request_2-5ee7d54c27c0a79e85b795a0b9ef593f.png"},60598:(e,s,t)=>{t.d(s,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>l});var i=t(96540);const n={},r=i.createContext(n);function d(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);
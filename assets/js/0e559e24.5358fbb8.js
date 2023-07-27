"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[5210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:2},a="BDD Testing",s={unversionedId:"web/guides/testing/BDD-Testing",id:"web/guides/testing/BDD-Testing",title:"BDD Testing",description:"Behavior-Driven Development (BDD) Testing is a powerful and user-centric approach to software testing that emphasizes collaboration between developers, testers, and stakeholders.",source:"@site/docs/web/guides/testing/BDD-Testing.md",sourceDirName:"web/guides/testing",slug:"/web/guides/testing/BDD-Testing",permalink:"/ar2-docs/docs/web/guides/testing/BDD-Testing",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/web/guides/testing/BDD-Testing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"web",previous:{title:"TDD Testing",permalink:"/ar2-docs/docs/web/guides/testing/TDD-Testing"},next:{title:"Deployment \ud83c\udf0e",permalink:"/ar2-docs/docs/web/guides/deployment"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Running the tests",id:"running-the-tests",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Allure Reporting Tool",id:"allure-reporting-tool",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bdd-testing"},"BDD Testing"),(0,i.kt)("p",null,"Behavior-Driven Development (BDD) Testing is a powerful and user-centric approach to software testing that emphasizes collaboration between developers, testers, and stakeholders."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://cucumber.io/"},"Cucumber")," framework that facilitates Behavior-Driven Development (BDD). It allows you to express test scenarios in a simple text format (Given-When-Then format) and then link them to executable code. When running the Cucumber tests, it essentially associates the feature file with its corresponding step definition and executes the code therein. You have the flexibility to employ any assertion framework, to handle assertions within the code. Here we are using Playwright for assertions."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate to the folder after cloning and install npm packages."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"npm install"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To download the necessary browsers for Playwright during the initial installation, execute the following command."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"npx playwright install")))),(0,i.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To run the test cases, execute the following command."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"npm run test"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To run only the failed test cases after the initial execution, use the following command."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"npm run test:failed")))),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The details of the configuration can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cucumber/cucumber-js/tree/main/docs"},"here")),(0,i.kt)("h2",{id:"allure-reporting-tool"},"Allure Reporting Tool"),(0,i.kt)("p",null,"Allure is an open-source test reporting tool that provides visually appealing and comprehensive reports for test results."),(0,i.kt)("p",null,"After executing the test cases, the reports are automatically generated, eliminating the need for a separate command to run them."))}c.isMDXComponent=!0}}]);
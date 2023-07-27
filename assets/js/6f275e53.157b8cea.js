"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[6860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const a={},r="Testing \ud83d\udd27",s={unversionedId:"web/guides/testing/TDD Testing",id:"web/guides/testing/TDD Testing",title:"Testing \ud83d\udd27",description:"We use Vitest for unit testing and Playwright for end-to-end tests.",source:"@site/docs/web/guides/testing/TDD Testing.md",sourceDirName:"web/guides/testing",slug:"/web/guides/testing/TDD Testing",permalink:"/ar2-docs/docs/web/guides/testing/TDD Testing",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/web/guides/testing/TDD Testing.md",tags:[],version:"current",frontMatter:{},sidebar:"web",previous:{title:"BDD Testing",permalink:"/ar2-docs/docs/web/guides/testing/BDD Testing"},next:{title:"Documentation \ud83d\udcd6",permalink:"/ar2-docs/docs/web/guides/documentation"}},l={},p=[{value:"Running the tests",id:"running-the-tests",level:2},{value:"Code Coverage",id:"code-coverage",level:2},{value:"Developing the tests",id:"developing-the-tests",level:2},{value:"Unit Tests",id:"unit-tests",level:3},{value:"Component Tests (unit tests for components)",id:"component-tests-unit-tests-for-components",level:3},{value:"End-to-end or Integration Tests",id:"end-to-end-or-integration-tests",level:3},{value:"Continuous Integration",id:"continuous-integration",level:2},{value:"Allure Reporting Tool",id:"allure-reporting-tool",level:2},{value:"Installation",id:"installation",level:3},{value:"View Report",id:"view-report",level:3},{value:"Usage of test ids for component identification",id:"usage-of-test-ids-for-component-identification",level:2},{value:"Known issues",id:"known-issues",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"testing-"},"Testing \ud83d\udd27"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"https://vitest.dev/"},"Vitest")," for unit testing and ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," for end-to-end tests."),(0,i.kt)("p",null,"We use ",(0,i.kt)("inlineCode",{parentName:"p"},"Vitest")," becacuse it is Vite-native (this project is using ",(0,i.kt)("inlineCode",{parentName:"p"},"Svelte Kit")," which uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Vite"),") and Jest compatible\n(Jest is currently one of the most popular JavaScript unit testing frameworks). We use Playwright because it is both the\nrecommended end-to-end testing framework for Svelte Kit, and it is also very feature rich, performant, well maintained,\nand quickly growing in ",(0,i.kt)("a",{parentName:"p",href:"https://openbase.com/js/playwright/insights"},"popularity"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Learn some of Playwright's important features: ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=PXTspGn1im0"},"https://www.youtube.com/watch?v=PXTspGn1im0"))),(0,i.kt)("h2",{id:"running-the-tests"},"Running the tests"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure you install the browsers that Playwright uses:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright install\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Execute the tests")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test\n")),(0,i.kt)("p",null,"Tests are actually broken up into 3 parts, and running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test")," runs them all - unit tests, component tests, and\nend-to-end tests. We've broken things up in this way as we've found the best way to run tests on our individual\nSvelte components is to have them rendered out (instead of using something like jsdom to emulate the browser) - so we\nuse ",(0,i.kt)("inlineCode",{parentName:"p"},"Playwright")," to run unit tests on our components, and ",(0,i.kt)("inlineCode",{parentName:"p"},"Vitest")," to run unit tests on scripts."),(0,i.kt)("p",null,"If you wish to only run unit tests, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test:unit\n")),(0,i.kt)("p",null,"If you wish to only run component tests, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test:comp\n")),(0,i.kt)("p",null,"If you wish to only run integration tests, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test:e2e\n")),(0,i.kt)("h2",{id:"code-coverage"},"Code Coverage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Vitest")," has native code coverage via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bcoe/c8"},"c8"),", run the script with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run coverage\n")),(0,i.kt)("p",null,"This coverage is only for unit tests via ",(0,i.kt)("inlineCode",{parentName:"p"},"Vitest"),"."),(0,i.kt)("h2",{id:"developing-the-tests"},"Developing the tests"),(0,i.kt)("h3",{id:"unit-tests"},"Unit Tests"),(0,i.kt)("p",null,"Unit tests are ",(0,i.kt)("inlineCode",{parentName:"p"},"Vitest")," tests (see the ",(0,i.kt)("a",{parentName:"p",href:"https://vitest.dev/api/"},"Vitest Docs"),") for more info."),(0,i.kt)("p",null,"They are placed side-by-side in the directory of the file they are testing and have the same name as the file, with\neither ",(0,i.kt)("inlineCode",{parentName:"p"},".spec")," added to the name. For example, tests for the ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/lib/utils.ts")," file should be\n",(0,i.kt)("inlineCode",{parentName:"p"},"./src/lib/utils.spec.ts"),"."),(0,i.kt)("h3",{id:"component-tests-unit-tests-for-components"},"Component Tests (unit tests for components)"),(0,i.kt)("p",null,"The best way to test our components is by running the full end-to-end tests, which requires ",(0,i.kt)("inlineCode",{parentName:"p"},"Playwright"),"\n(see the ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"Playwright Docs"),") for more info."),(0,i.kt)("p",null,"The component tests are meant be both an example of how to use the component, and the page that the tests run against."),(0,i.kt)("p",null,"These tests comprise of 2 parts, the ",(0,i.kt)("inlineCode",{parentName:"p"},"test.svelte")," file that instantiates and renders the component, and the\n",(0,i.kt)("inlineCode",{parentName:"p"},"comp.test.ts")," file is run by ",(0,i.kt)("inlineCode",{parentName:"p"},"Playwright")," to visit the ",(0,i.kt)("inlineCode",{parentName:"p"},"test.svelte")," page and perform actions to test the component."),(0,i.kt)("p",null,"Every ",(0,i.kt)("inlineCode",{parentName:"p"},"test.svelte")," file should have a corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"comp.test.ts")," file and a route that can be accessed by\nby ",(0,i.kt)("inlineCode",{parentName:"p"},"Playwright")," - our folders are structured such that the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/routes/tests")," folder follows the folder structure of the\ncomponents to be tested, so the routes are intuitive and can be navigated to programmartically."),(0,i.kt)("h3",{id:"end-to-end-or-integration-tests"},"End-to-end or Integration Tests"),(0,i.kt)("p",null,"End-to-end tests are ",(0,i.kt)("inlineCode",{parentName:"p"},"Playwright")," tests (see the ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"Playwright Docs"),") for more info."),(0,i.kt)("p",null,"They are placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"./tests-e2e")," directory. There is a default ",(0,i.kt)("inlineCode",{parentName:"p"},"example.test.ts")," file that you can use to get started."),(0,i.kt)("h2",{id:"continuous-integration"},"Continuous Integration"),(0,i.kt)("p",null,"This project has CI configured via GitHub Actions, refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows")," yaml files to find out more."),(0,i.kt)("h2",{id:"allure-reporting-tool"},"Allure Reporting Tool"),(0,i.kt)("p",null,"Third party reporting tool for playwright test framework"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Run the following command to install dependancies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install allure-playwright\n")),(0,i.kt)("h3",{id:"view-report"},"View Report"),(0,i.kt)("p",null,"Run the following command to view report"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm run view:report\n")),(0,i.kt)("h2",{id:"usage-of-test-ids-for-component-identification"},"Usage of test ids for component identification"),(0,i.kt)("p",null,"Every component to be tested must include an additional attribute called ",(0,i.kt)("inlineCode",{parentName:"p"},"data-testid"),".\nPlease follow this naming convention so that the naming is unique:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'data-testid="<component-name/page-name>-<component-functionality-name>-<ui/control-type>"\n')),(0,i.kt)("p",null,"Example"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Login button on a log in page")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-HTML"},'<button data-testid="login-login-bttn" />\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For long componentFunctionalityName like passwordError follow")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-HTML"},'<h1 data-testid="login-password-error-lbl"></h1>\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For login button inside a modal it can be like this")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-HTML"},'<button data-testid="login-modal-login-bttn" />\n')),(0,i.kt)("h2",{id:"known-issues"},"Known issues"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Component testing")),(0,i.kt)("p",null,"Named slots not working, to KIV"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://github.com/microsoft/playwright/issues/15820\n\nhttps://github.com/microsoft/playwright/issues/1429\n\nhttps://github.com/microsoft/playwright/tree/main/examples/components-vue/src/components\n")))}d.isMDXComponent=!0}}]);
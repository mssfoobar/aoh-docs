"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[1887],{14813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var s=n(74848),i=n(28453);const o={sidebar_position:1},r="TDD Testing",l={id:"modules/web/guides/testing/TDD-Testing",title:"TDD Testing",description:"Test-Driven Development (TDD) is a software development approach that emphasizes writing tests before writing the actual code.",source:"@site/docs/40_modules/20_web/10_guides/testing/TDD-Testing.md",sourceDirName:"40_modules/20_web/10_guides/testing",slug:"/modules/web/guides/testing/TDD-Testing",permalink:"/aoh-docs/docs/modules/web/guides/testing/TDD-Testing",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/40_modules/20_web/10_guides/testing/TDD-Testing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"web",previous:{title:"Testing",permalink:"/aoh-docs/docs/category/testing"},next:{title:"BDD Testing",permalink:"/aoh-docs/docs/modules/web/guides/testing/BDD-Testing"}},d={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Running the tests",id:"running-the-tests",level:2},{value:"Code Coverage",id:"code-coverage",level:2},{value:"Developing the tests",id:"developing-the-tests",level:2},{value:"Unit Tests",id:"unit-tests",level:3},{value:"Component Tests (unit tests for components)",id:"component-tests-unit-tests-for-components",level:3},{value:"End-to-end or Integration Tests",id:"end-to-end-or-integration-tests",level:3},{value:"Continuous Integration",id:"continuous-integration",level:2},{value:"Allure Reporting Tool",id:"allure-reporting-tool",level:2},{value:"Installation",id:"installation",level:3},{value:"View Report",id:"view-report",level:3},{value:"Usage of test ids for component identification",id:"usage-of-test-ids-for-component-identification",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"tdd-testing",children:"TDD Testing"}),"\n",(0,s.jsx)(t.p,{children:"Test-Driven Development (TDD) is a software development approach that emphasizes writing tests before writing the actual code."}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(t.p,{children:["We use ",(0,s.jsx)(t.a,{href:"https://vitest.dev/",children:"Vitest"})," for unit testing and ",(0,s.jsx)(t.a,{href:"https://playwright.dev/",children:"Playwright"})," for end-to-end tests."]}),"\n",(0,s.jsxs)(t.p,{children:["We use ",(0,s.jsx)(t.code,{children:"Vitest"})," becacuse it is Vite-native (this project is using ",(0,s.jsx)(t.code,{children:"Svelte Kit"})," which uses ",(0,s.jsx)(t.code,{children:"Vite"}),") and Jest compatible\n(Jest is currently one of the most popular JavaScript unit testing frameworks). We use Playwright because it is both the\nrecommended end-to-end testing framework for Svelte Kit, and it is also very feature rich, performant, well maintained,\nand quickly growing in ",(0,s.jsx)(t.a,{href:"https://openbase.com/js/playwright/insights",children:"popularity"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Learn some of Playwright's important features: ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=PXTspGn1im0",children:"https://www.youtube.com/watch?v=PXTspGn1im0"})]})}),"\n",(0,s.jsx)(t.h2,{id:"running-the-tests",children:"Running the tests"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Ensure you install the browsers that Playwright uses:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npx playwright install\n"})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Execute the tests"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Tests are actually broken up into 3 parts, and running ",(0,s.jsx)(t.code,{children:"npm run test"})," runs them all - unit tests, component tests, and\nend-to-end tests. We've broken things up in this way as we've found the best way to run tests on our individual\nSvelte components is to have them rendered out (instead of using something like jsdom to emulate the browser) - so we\nuse ",(0,s.jsx)(t.code,{children:"Playwright"})," to run unit tests on our components, and ",(0,s.jsx)(t.code,{children:"Vitest"})," to run unit tests on scripts."]}),"\n",(0,s.jsx)(t.p,{children:"If you wish to only run unit tests, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run test:unit\n"})}),"\n",(0,s.jsx)(t.p,{children:"If you wish to only run component tests, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run test:comp\n"})}),"\n",(0,s.jsx)(t.p,{children:"If you wish to only run integration tests, run:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run test:e2e\n"})}),"\n",(0,s.jsx)(t.h2,{id:"code-coverage",children:"Code Coverage"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"Vitest"})," has native code coverage via ",(0,s.jsx)(t.a,{href:"https://github.com/bcoe/c8",children:"c8"}),", run the script with:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm run coverage\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This coverage is only for unit tests via ",(0,s.jsx)(t.code,{children:"Vitest"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"developing-the-tests",children:"Developing the tests"}),"\n",(0,s.jsx)(t.h3,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Unit tests are ",(0,s.jsx)(t.code,{children:"Vitest"})," tests (see the ",(0,s.jsx)(t.a,{href:"https://vitest.dev/api/",children:"Vitest Docs"}),") for more info."]}),"\n",(0,s.jsxs)(t.p,{children:["They are placed side-by-side in the directory of the file they are testing and have the same name as the file, with\neither ",(0,s.jsx)(t.code,{children:".spec"})," added to the name. For example, tests for the ",(0,s.jsx)(t.code,{children:"./src/lib/utils.ts"})," file should be\n",(0,s.jsx)(t.code,{children:"./src/lib/utils.spec.ts"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"component-tests-unit-tests-for-components",children:"Component Tests (unit tests for components)"}),"\n",(0,s.jsxs)(t.p,{children:["The best way to test our components is by running the full end-to-end tests, which requires ",(0,s.jsx)(t.code,{children:"Playwright"}),"\n(see the ",(0,s.jsx)(t.a,{href:"https://playwright.dev/docs/intro",children:"Playwright Docs"}),") for more info."]}),"\n",(0,s.jsx)(t.p,{children:"The component tests are meant be both an example of how to use the component, and the page that the tests run against."}),"\n",(0,s.jsxs)(t.p,{children:["These tests comprise of 2 parts, the ",(0,s.jsx)(t.code,{children:"test.svelte"})," file that instantiates and renders the component, and the\n",(0,s.jsx)(t.code,{children:"comp.test.ts"})," file is run by ",(0,s.jsx)(t.code,{children:"Playwright"})," to visit the ",(0,s.jsx)(t.code,{children:"test.svelte"})," page and perform actions to test the component."]}),"\n",(0,s.jsxs)(t.p,{children:["Every ",(0,s.jsx)(t.code,{children:"test.svelte"})," file should have a corresponding ",(0,s.jsx)(t.code,{children:"comp.test.ts"})," file and a route that can be accessed by\nby ",(0,s.jsx)(t.code,{children:"Playwright"})," - our folders are structured such that the ",(0,s.jsx)(t.code,{children:"src/routes/tests"})," folder follows the folder structure of the\ncomponents to be tested, so the routes are intuitive and can be navigated to programmartically."]}),"\n",(0,s.jsx)(t.h3,{id:"end-to-end-or-integration-tests",children:"End-to-end or Integration Tests"}),"\n",(0,s.jsxs)(t.p,{children:["End-to-end tests are ",(0,s.jsx)(t.code,{children:"Playwright"})," tests (see the ",(0,s.jsx)(t.a,{href:"https://playwright.dev/docs/intro",children:"Playwright Docs"}),") for more info."]}),"\n",(0,s.jsxs)(t.p,{children:["They are placed in the ",(0,s.jsx)(t.code,{children:"./tests-e2e"})," directory. There is a default ",(0,s.jsx)(t.code,{children:"example.test.ts"})," file that you can use to get started."]}),"\n",(0,s.jsx)(t.h2,{id:"continuous-integration",children:"Continuous Integration"}),"\n",(0,s.jsxs)(t.p,{children:["This project has CI configured via GitHub Actions, refer to the ",(0,s.jsx)(t.code,{children:".github/workflows"})," yaml files to find out more."]}),"\n",(0,s.jsx)(t.h2,{id:"allure-reporting-tool",children:"Allure Reporting Tool"}),"\n",(0,s.jsx)(t.p,{children:"Third party reporting tool for playwright test framework"}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"Run the following command to install dependancies"}),"\n",(0,s.jsx)(t.p,{children:"npm install allure-playwright"}),"\n",(0,s.jsx)(t.h3,{id:"view-report",children:"View Report"}),"\n",(0,s.jsx)(t.p,{children:"Run the following command to view report"}),"\n",(0,s.jsxs)(t.p,{children:["npm run view",":report"]}),"\n",(0,s.jsx)(t.h2,{id:"usage-of-test-ids-for-component-identification",children:"Usage of test ids for component identification"}),"\n",(0,s.jsxs)(t.p,{children:["Every component to be tested must include an additional attribute called ",(0,s.jsx)(t.code,{children:"data-testid"}),".\nPlease follow this naming convention so that the naming is unique:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'data-testid="<component-name/page-name>-<component-functionality-name>-<ui/control-type>"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Example"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Login button on a log in page"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-HTML",children:'<button data-testid="login-login-bttn" />\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For long componentFunctionalityName like passwordError follow"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-HTML",children:'<h1 data-testid="login-password-error-lbl"></h1>\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"For login button inside a modal it can be like this"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-HTML",children:'<button data-testid="login-modal-login-bttn" />\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
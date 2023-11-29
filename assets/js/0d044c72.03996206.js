"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[7865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>A});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,A=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(A,i(i({ref:t},c),{},{components:n})):r.createElement(A,i({ref:t},c))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="Chip",p={unversionedId:"web/api/components/chip",id:"web/api/components/chip",title:"Chip",description:"Chips are elements that make it simpler to organize and view material, such as different articles from the same category.",source:"@site/docs/40_web/api/components/1.chip.md",sourceDirName:"40_web/api/components",slug:"/web/api/components/chip",permalink:"/aoh-docs/docs/web/api/components/chip",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/40_web/api/components/1.chip.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"web",previous:{title:"Components",permalink:"/aoh-docs/docs/category/components"},next:{title:"Date Picker",permalink:"/aoh-docs/docs/web/api/components/datepicker"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"chip"},"Chip"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Chips")," are elements that make it simpler to organize and view material, such as different articles from the same category."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(34879).Z,width:"304",height:"97"})),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sv"},'<script>\n    import Chip from "$lib/components/Inputs/Chip.svelte";\n    \n    let chipValues = [];\n<\/script>\n\n<Chip bind:values={chipValues} />\n')),(0,a.kt)("p",null,"Type the name of the chip and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," to search it up."),(0,a.kt)("p",null,"Press ",(0,a.kt)("inlineCode",{parentName:"p"},"Backspace")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," button to remove the chip"),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:null},"any"),(0,a.kt)("td",{parentName:"tr",align:null},"id of the form (auto generated)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"placeholder")),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"placeholder of the form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"values")),(0,a.kt)("td",{parentName:"tr",align:null},"any[]"),(0,a.kt)("td",{parentName:"tr",align:null},"array of values inputted by the user")))))}d.isMDXComponent=!0},34879:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);
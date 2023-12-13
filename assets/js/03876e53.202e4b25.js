"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[8113],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var m=n.createContext({}),l=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),h=s,d=u["".concat(m,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=h;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),s=a(86010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:a},t)}},34259:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(87462),s=a(67294),r=a(86010),i=a(51048),o=a(33609),m=a(1943),l=a(72957);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){const{lazy:t,block:a,defaultValue:i,values:u,groupId:c,className:h}=e,d=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=u??d.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,o.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===i?i:i??d.find((e=>e.props.default))?.props.value??d[0].props.value;if(null!==k&&!N.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:L,setTabGroupChoices:M}=(0,m.U)(),[w,y]=(0,s.useState)(k),b=[],{blockElementScrollPositionUntilNextRender:f}=(0,l.o5)();if(null!=c){const e=L[c];null!=e&&e!==w&&N.some((t=>t.value===e))&&y(e)}const j=e=>{const t=e.currentTarget,a=b.indexOf(t),n=N[a].value;n!==w&&(f(t),y(n),null!=c&&M(c,String(n)))},v=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const a=b.indexOf(e.currentTarget)+1;t=b[a]??b[0];break}case"ArrowLeft":{const a=b.indexOf(e.currentTarget)-1;t=b[a]??b[b.length-1];break}}t?.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",p.tabList)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},h)},N.map((e=>{let{value:t,label:a,attributes:i}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>b.push(e),onKeyDown:v,onClick:j},i,{className:(0,r.Z)("tabs__item",p.tabItem,i?.className,{"tabs__item--active":w===t})}),a??t)}))),t?(0,s.cloneElement)(d.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},d.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,i.Z)();return s.createElement(u,(0,n.Z)({key:String(t)},e))}},30340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),s=(a(67294),a(3905)),r=a(34259),i=a(18679);const o={sidebar_position:5},m="\ud83e\udd96 Docusaurus",l={unversionedId:"overview/reference/docusaurus-reference",id:"overview/reference/docusaurus-reference",title:"\ud83e\udd96 Docusaurus",description:"The following is a list of useful examples for reference when editing the markdown files on Docusaurus.",source:"@site/docs/10_overview/50_reference/docusaurus-reference.mdx",sourceDirName:"10_overview/50_reference",slug:"/overview/reference/docusaurus-reference",permalink:"/aoh-docs/docs/overview/reference/docusaurus-reference",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/10_overview/50_reference/docusaurus-reference.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"overview",previous:{title:"\ud83d\udd25 Known Issues",permalink:"/aoh-docs/docs/overview/reference/known-issues"}},p={},u=[{value:"Images",id:"images",level:3},{value:"Tabs",id:"tabs",level:3},{value:"Codeblocks",id:"codeblocks",level:3},{value:"Equations",id:"equations",level:3},{value:"Admonitions",id:"admonitions",level:3},{value:"Line Highlighting",id:"line-highlighting",level:3},{value:"Line Numbering",id:"line-numbering",level:3}],c={toc:u},h="wrapper";function d(e){let{components:t,...o}=e;return(0,s.kt)(h,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-docusaurus"},"\ud83e\udd96 Docusaurus"),(0,s.kt)("p",null,"The following is a list of useful examples for reference when editing the markdown files on Docusaurus."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Formatting is very important for MDX: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/3890"},"https://github.com/facebook/docusaurus/issues/3890"),"\nYou must follow the formatting somewhat strictly (especially excluding spaces at the start of the sentence).")),(0,s.kt)("h3",{id:"images"},(0,s.kt)("a",{parentName:"h3",href:"https://docusaurus.io/docs/markdown-features/assets"},"Images")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Svelte Logo",src:a(66793).Z,width:"98",height:"118"})),(0,s.kt)("p",null,"Code to render above example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"![Svelte Logo](/img/svelte_logo.svg)\n")),(0,s.kt)("h3",{id:"tabs"},(0,s.kt)("a",{parentName:"h3",href:"https://docusaurus.io/docs/markdown-features/tabs"},"Tabs")),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"Windows",label:"Windows",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"shutdown -t 0 -s\n"))),(0,s.kt)(i.Z,{value:"macOS",label:"macOS",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo shutdown -h now\n"))),(0,s.kt)(i.Z,{value:"Linux",label:"Linux",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo shutdown -h now\n")))),(0,s.kt)("p",null,"Code to render above example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},'\x3c!-- You must import the React components --\x3e\n\nimport Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n<TabItem value="Windows" label="Windows" default>\n\n```bash\nshutdown -t 0 -s\n```\n\n</TabItem>\n<TabItem value="macOS" label="macOS">\n\n```bash\nsudo shutdown -h now\n```\n\n</TabItem>\n<TabItem value="Linux" label="Linux">\n\n```bash\nsudo shutdown -h now\n```\n\n</TabItem>\n</Tabs>\n')),(0,s.kt)("h3",{id:"codeblocks"},(0,s.kt)("a",{parentName:"h3",href:"https://docusaurus.io/docs/markdown-features/code-blocks"},"Codeblocks")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n    return <h1>Hello, {props.name}</h1>;\n}\n")),(0,s.kt)("p",null,"Code to render above example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},'```jsx title="/src/components/HelloCodeTitle.js"\nfunction HelloCodeTitle(props) {\n    return <h1>Hello, {props.name}</h1>;\n}\n```\n')),(0,s.kt)("h3",{id:"equations"},(0,s.kt)("a",{parentName:"h3",href:"https://docusaurus.io/docs/markdown-features/math-equations"},"Equations")),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msubsup",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msubsup"},"\u222b"),(0,s.kt)("mn",{parentName:"msubsup"},"0"),(0,s.kt)("mrow",{parentName:"msubsup"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"\u03c0"))),(0,s.kt)("mi",{parentName:"mrow"},"sin"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"I = \\int_0^{2\\pi} \\sin(x)\\,dx")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.476em",verticalAlign:"-0.9119em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"}},"\u222b"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.564em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.8129em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03c0"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9119em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))),(0,s.kt)("p",null,"Code to render above example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"$$\nI = \\int_0^{2\\pi} \\sin(x)\\,dx\n$$\n")),(0,s.kt)("h3",{id:"admonitions"},(0,s.kt)("a",{parentName:"h3",href:"https://docusaurus.io/docs/markdown-features/admonitions"},"Admonitions")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Some ",(0,s.kt)("strong",{parentName:"p"},"content")," with ",(0,s.kt)("em",{parentName:"p"},"Markdown")," ",(0,s.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,s.kt)("a",{parentName:"p",href:"#"},"this ",(0,s.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Some ",(0,s.kt)("strong",{parentName:"p"},"content")," with ",(0,s.kt)("em",{parentName:"p"},"Markdown")," ",(0,s.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,s.kt)("a",{parentName:"p",href:"#"},"this ",(0,s.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Some ",(0,s.kt)("strong",{parentName:"p"},"content")," with ",(0,s.kt)("em",{parentName:"p"},"Markdown")," ",(0,s.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,s.kt)("a",{parentName:"p",href:"#"},"this ",(0,s.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Some ",(0,s.kt)("strong",{parentName:"p"},"content")," with ",(0,s.kt)("em",{parentName:"p"},"Markdown")," ",(0,s.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,s.kt)("a",{parentName:"p",href:"#"},"this ",(0,s.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,s.kt)("admonition",{type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"Some ",(0,s.kt)("strong",{parentName:"p"},"content")," with ",(0,s.kt)("em",{parentName:"p"},"Markdown")," ",(0,s.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,s.kt)("a",{parentName:"p",href:"#"},"this ",(0,s.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,s.kt)("p",null,"Code to render above examples:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},":::note\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::caution\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,s.kt)("h3",{id:"line-highlighting"},(0,s.kt)("a",{parentName:"h3",href:"https://docusaurus.io/docs/markdown-features/code-blocks#highlighting-with-comments"},"Line Highlighting")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'function HighlightSomeText(highlight) {\n    if (highlight) {\n        // highlight-next-line\n        return "This text is highlighted!";\n    }\n\n    return "Nothing highlighted";\n}\n\nfunction HighlightMoreText(highlight) {\n    // highlight-start\n    if (highlight) {\n        return "This range is highlighted!";\n    }\n    // highlight-end\n\n    return "Nothing highlighted";\n}\n')),(0,s.kt)("p",null,"Code to render above example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},'```js\nfunction HighlightSomeText(highlight) {\n    if (highlight) {\n        // highlight-next-line\n        return "This text is highlighted!";\n    }\n\n    return "Nothing highlighted";\n}\n\nfunction HighlightMoreText(highlight) {\n    // highlight-start\n    if (highlight) {\n        return "This range is highlighted!";\n    }\n    // highlight-end\n\n    return "Nothing highlighted";\n}\n```\n')),(0,s.kt)("h3",{id:"line-numbering"},(0,s.kt)("a",{parentName:"h3",href:"https://docusaurus.io/docs/markdown-features/code-blocks#line-numbering"},"Line Numbering")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,4-6,11} showLineNumbers","{1,4-6,11}":!0,showLineNumbers:!0},'import React from "react";\n\nfunction MyComponent(props) {\n    if (props.isBar) {\n        return <div>Bar</div>;\n    }\n\n    return <div>Foo</div>;\n}\n\nexport default MyComponent;\n')),(0,s.kt)("p",null,"Code to render above example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},'```jsx {1,4-6,11} showLineNumbers\nimport React from "react";\n\nfunction MyComponent(props) {\n    if (props.isBar) {\n        return <div>Bar</div>;\n    }\n\n    return <div>Foo</div>;\n}\n\nexport default MyComponent;\n```\n')))}d.isMDXComponent=!0},66793:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA5OC4xIDExOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTguMSAxMTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkYzRTAwO30KCS5zdDF7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTkxLjgsMTUuNkM4MC45LTAuMSw1OS4yLTQuNyw0My42LDUuMkwxNi4xLDIyLjhDOC42LDI3LjUsMy40LDM1LjIsMS45LDQzLjljLTEuMyw3LjMtMC4yLDE0LjgsMy4zLDIxLjMKCWMtMi40LDMuNi00LDcuNi00LjcsMTEuOGMtMS42LDguOSwwLjUsMTguMSw1LjcsMjUuNGMxMSwxNS43LDMyLjYsMjAuMyw0OC4yLDEwLjRsMjcuNS0xNy41YzcuNS00LjcsMTIuNy0xMi40LDE0LjItMjEuMQoJYzEuMy03LjMsMC4yLTE0LjgtMy4zLTIxLjNjMi40LTMuNiw0LTcuNiw0LjctMTEuOEM5OS4yLDMyLjEsOTcuMSwyMi45LDkxLjgsMTUuNiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDAuOSwxMDMuOWMtOC45LDIuMy0xOC4yLTEuMi0yMy40LTguN2MtMy4yLTQuNC00LjQtOS45LTMuNS0xNS4zYzAuMi0wLjksMC40LTEuNywwLjYtMi42bDAuNS0xLjZsMS40LDEKCWMzLjMsMi40LDYuOSw0LjIsMTAuOCw1LjRsMSwwLjNsLTAuMSwxYy0wLjEsMS40LDAuMywyLjksMS4xLDQuMWMxLjYsMi4zLDQuNCwzLjQsNy4xLDIuN2MwLjYtMC4yLDEuMi0wLjQsMS43LTAuN0w2NS41LDcyCgljMS40LTAuOSwyLjMtMi4yLDIuNi0zLjhjMC4zLTEuNi0wLjEtMy4zLTEtNC42Yy0xLjYtMi4zLTQuNC0zLjMtNy4xLTIuNmMtMC42LDAuMi0xLjIsMC40LTEuNywwLjdsLTEwLjUsNi43CgljLTEuNywxLjEtMy42LDEuOS01LjYsMi40Yy04LjksMi4zLTE4LjItMS4yLTIzLjQtOC43Yy0zLjEtNC40LTQuNC05LjktMy40LTE1LjNjMC45LTUuMiw0LjEtOS45LDguNi0xMi43bDI3LjUtMTcuNQoJYzEuNy0xLjEsMy42LTEuOSw1LjYtMi41YzguOS0yLjMsMTguMiwxLjIsMjMuNCw4LjdjMy4yLDQuNCw0LjQsOS45LDMuNSwxNS4zYy0wLjIsMC45LTAuNCwxLjctMC43LDIuNmwtMC41LDEuNmwtMS40LTEKCWMtMy4zLTIuNC02LjktNC4yLTEwLjgtNS40bC0xLTAuM2wwLjEtMWMwLjEtMS40LTAuMy0yLjktMS4xLTQuMWMtMS42LTIuMy00LjQtMy4zLTcuMS0yLjZjLTAuNiwwLjItMS4yLDAuNC0xLjcsMC43TDMyLjQsNDYuMQoJYy0xLjQsMC45LTIuMywyLjItMi42LDMuOHMwLjEsMy4zLDEsNC42YzEuNiwyLjMsNC40LDMuMyw3LjEsMi42YzAuNi0wLjIsMS4yLTAuNCwxLjctMC43bDEwLjUtNi43YzEuNy0xLjEsMy42LTEuOSw1LjYtMi41CgljOC45LTIuMywxOC4yLDEuMiwyMy40LDguN2MzLjIsNC40LDQuNCw5LjksMy41LDE1LjNjLTAuOSw1LjItNC4xLDkuOS04LjYsMTIuN2wtMjcuNSwxNy41QzQ0LjgsMTAyLjUsNDIuOSwxMDMuMyw0MC45LDEwMy45Ii8+Cjwvc3ZnPgo="}}]);
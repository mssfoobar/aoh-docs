"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[2186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),h=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=h(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=h(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var h=2;h<i;h++)o[h]=n[h];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:7},o="Apache ECharts",s={unversionedId:"overview/technologies/echarts",id:"overview/technologies/echarts",title:"Apache ECharts",description:"We use Apache ECharts as our primary charting library.",source:"@site/docs/10_overview/40_technologies/7.echarts.md",sourceDirName:"10_overview/40_technologies",slug:"/overview/technologies/echarts",permalink:"/aoh-docs/docs/overview/technologies/echarts",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/10_overview/40_technologies/7.echarts.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"overview",previous:{title:"Font Awesome",permalink:"/aoh-docs/docs/overview/technologies/fontawesome"},next:{title:"MapBox",permalink:"/aoh-docs/docs/overview/technologies/mapbox_openlayers"}},c={},h=[{value:"What is ECharts?",id:"what-is-echarts",level:2},{value:"Why we&#39;ve chosen ECharts",id:"why-weve-chosen-echarts",level:3},{value:"Using ECharts",id:"using-echarts",level:2},{value:"More Reading",id:"more-reading",level:2}],l={toc:h},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apache-echarts"},"Apache ECharts"),(0,a.kt)("p",null,"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ECharts")," as our primary charting library."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ECharts Logo",src:n(21874).Z,width:"143",height:"146"})),(0,a.kt)("h2",{id:"what-is-echarts"},"What is ECharts?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ECharts"),", a powerful, interactive charting and visualization library for the web."),(0,a.kt)("h3",{id:"why-weve-chosen-echarts"},"Why we've chosen ECharts"),(0,a.kt)("p",null,"Compared to other popular charting libraries like ",(0,a.kt)("inlineCode",{parentName:"p"},"chart.js"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ECharts")," has a very rich set of charts and visualization\noptions. It is highly configurable, full of a large variety of chart types, has a great default clean look,\nand is performant; with incremental rendering and data streaming, it even has the ability to render tens of millions of\ndata points."),(0,a.kt)("p",null,"It also has the added benefit of being open source."),(0,a.kt)("h2",{id:"using-echarts"},"Using ECharts"),(0,a.kt)("p",null,"With Svelte & Svelte Kit, you can import charts and components from ",(0,a.kt)("inlineCode",{parentName:"p"},"ECharts")," into your app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let chartContainer;\n\nonMount(async () => {\n    const echarts = await import('echarts');\n    let chart = echarts.init(chartContainer);\n    let option = {\n        series: [\n            {\n                type: 'pie',\n                data: [\n                    {\n                        value: 335,\n                        name: 'Direct Visit',\n                    },\n                    {\n                        value: 234,\n                        name: 'Union Ad',\n                    },\n                    {\n                        value: 1548,\n                        name: 'Search Engine',\n                    },\n                ],\n            },\n        ],\n    };\n    chart.setOption(option);\n});\n")),(0,a.kt)("p",null,"Remember to bind the element reference to the chart container that ECharts uses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<div bind:this={chartContainer} />\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Because Svelte Kit code must be isomorphic, and ECharts assumes that the code is run in the browser, you can only can\nonly import ECharts in the browser, hence, the ",(0,a.kt)("inlineCode",{parentName:"p"}," await import('echarts')")," within the ",(0,a.kt)("inlineCode",{parentName:"p"},"onMount")," function.")),(0,a.kt)("h2",{id:"more-reading"},"More Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://echarts.apache.org/en/index.html"},"Official ECharts Website"))))}d.isMDXComponent=!0},21874:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);
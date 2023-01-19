"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[4020],{3905:(e,i,t)=>{t.d(i,{Zo:()=>l,kt:()=>p});var o=t(7294);function n(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);i&&(o=o.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){n(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,o,n=function(e,i){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],i.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),u=function(e){var i=o.useContext(c),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},l=function(e){var i=u(e.components);return o.createElement(c.Provider,{value:i},e.children)},A="mdxType",m={inlineCode:"code",wrapper:function(e){var i=e.children;return o.createElement(o.Fragment,{},i)}},h=o.forwardRef((function(e,i){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),A=u(t),h=n,p=A["".concat(c,".").concat(h)]||A[h]||m[h]||r;return t?o.createElement(p,a(a({ref:i},l),{},{components:t})):o.createElement(p,a({ref:i},l))}));function p(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var r=t.length,a=new Array(r);a[0]=h;var s={};for(var c in i)hasOwnProperty.call(i,c)&&(s[c]=i[c]);s.originalType=e,s[A]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<r;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1226:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>A,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=t(7462),n=(t(7294),t(3905));const r={sidebar_position:6},a="Font Awesome",s={unversionedId:"web/technologies/fontawesome",id:"web/technologies/fontawesome",title:"Font Awesome",description:"We've chosen Font Awesome to be our primary icon library.",source:"@site/docs/web/technologies/6.fontawesome.md",sourceDirName:"web/technologies",slug:"/web/technologies/fontawesome",permalink:"/ar2-docs/docs/web/technologies/fontawesome",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/web/technologies/6.fontawesome.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"web",previous:{title:"Pino",permalink:"/ar2-docs/docs/web/technologies/pino"},next:{title:"Apache ECharts",permalink:"/ar2-docs/docs/web/technologies/echarts"}},c={},u=[{value:"What is Font Awesome?",id:"what-is-font-awesome",level:2},{value:"Why we&#39;ve chosen Font Awesome",id:"why-weve-chosen-font-awesome",level:3},{value:"Using Font Awesome",id:"using-font-awesome",level:2},{value:"More Reading",id:"more-reading",level:2}],l={toc:u};function A(e){let{components:i,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"font-awesome"},"Font Awesome"),(0,n.kt)("p",null,"We've chosen ",(0,n.kt)("inlineCode",{parentName:"p"},"Font Awesome")," to be our primary icon library."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Font Awesome Logo",src:t(8453).Z,width:"128",height:"128"})),(0,n.kt)("h2",{id:"what-is-font-awesome"},"What is Font Awesome?"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Font Awesome")," is a font and icon library and toolkit based on CSS. "),(0,n.kt)("h3",{id:"why-weve-chosen-font-awesome"},"Why we've chosen Font Awesome"),(0,n.kt)("p",null,"Font Awesome has the ability to render icons efficiently as font glyphs - this has the advantage of having them all be\nindefinitely scalable, due to them being vector based, and also recoloured. This means we can re-theme these icons\nprogrammatically. Font Awesome also has a new framework to allow stacking and animations of icons, providing us even\nmore power and flexibility (e.g. we can quickly create loading spinners, or unread message counts overlaid on icons)."),(0,n.kt)("h2",{id:"using-font-awesome"},"Using Font Awesome"),(0,n.kt)("p",null,"The typical usage of Font Awesome uses ",(0,n.kt)("inlineCode",{parentName:"p"},"<i>")," tags with ",(0,n.kt)("inlineCode",{parentName:"p"},"fa-")," classes, however, this requires the entire set of icons to\nbe loaded as a Font. If we're only using a few icons from the set, this can be very wasteful in terms of\nspace-efficiency."),(0,n.kt)("p",null,"Instead, we can include the ",(0,n.kt)("inlineCode",{parentName:"p"},"SVG")," directly into the page with the following method:"),(0,n.kt)("p",null,"Import ",(0,n.kt)("inlineCode",{parentName:"p"},"icon")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"@fortawesome/fontawesome-svg-core")," and import the icon you'll be using (e.g. faClock):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { icon } from '@fortawesome/fontawesome-svg-core';\nimport { faClock } from '@fortawesome/pro-solid-svg-icons';\n")),(0,n.kt)("p",null,"Use Svelte's HTML tags to render the icon directly."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},"{@html icon(faClock).html}\n")),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"Svelte doesn't perform any sanitization of the expression inside {@html ...} before it gets inserted into the DOM.\nTo avoid the risk of XSS attacks, do not include any user input in the expression, or ensure you manually escape it.")),(0,n.kt)("h2",{id:"more-reading"},"More Reading"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fontawesome.com/"},"Official Font Awesome Website"))))}A.isMDXComponent=!0},8453:(e,i,t)=>{t.d(i,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACB1BMVEUAAAAggN8jiOUhi+UiieUki+cjiuYiiuYii+YjiecgjOYiiuYhiuYhieYjiechiucjiucjiuckjOciieYji+ghieUiiuYjiuccjuMiiuYiiuYXi+ghiuYiieQji+YjiuUji+cjieYhieYiiuciiuYiiuYiiuYiiuYhiuYii+YjjeUrgNUiiuYiiuYiiuYkjeUiiuYii+Ykku0iiuYiieYcjuMiiuYiiuYAqv8hi+UhiuciiuYiiuYiiuYhieUii+YiiuYgiOYiiuYiiO4hiuYhi+YAgP8iiuYii+Ugh+ciiuYhi+YiiOYiieYhieciiuYiiuYiiuYhiuYii+chiuYiiuUiiuYiiuYiiuYiiuYiieYiiuYhi+cagOYjjOYjiuYhi+YiiOhAgP8jieUji+gfi+giieYiieYjiuUohuQgiegiiuYA//8iiuYgiuQiiuYrgOodieIiiuYiiuYiiuUzmf8kktsiieYhjOYji+YiiuYiieYhiuYjieYkieQmjOYjiucii+ciiuYjiuYniesiiuUjieYhjOYiiuchi+Mhi+UijOchiuYiieYiiuYiiuYii+ciieYjiuUjieciiuYiiuYjjOcjh+Mji+Yki+UjiuUhiuciiuciiuchiuYiiuYii+YhiuckiOchiOQjiuYii+chiuYiiuUhiucii+chieUiiub///+UiZKWAAAAq3RSTlMACDpjd0Cq9qtBKL6/XV90XmAqwUJFrrEJ9/gLPUNnbX2Egonq1d753XAdBqX8/THUWg7EeRLhzQNNVc/1eCetykf6D4NlAtyVIO57Htk2rPDMsJ6Zn6/i/suc11YKM2agLQSpLCFotnYTOPQBuTC7DBrp34EFB48fUZi0elAcFOXblkgNYpo+Si6KNezmpG9LNFd10+BJJKJPx5J+aUa1w8YrL3x/ZLNriGxX/AbsAAAAAWJLR0SsV2XyiwAAAAd0SU1FB+IKHwQBKP41fiYAAALtSURBVHja7dv5VxJRFAfwAbMBTYmEtEFLyYBCbEGtbDUTjGwzMbMyUxPNCgtttd1M22y11fb9/ZN5YmRWiJMz7+Y59/44zOH7OcPA3LnzYJj/qAzGjDl6V4bRkCw+cy5LaBRrMqvFZ2UTejUvS5GfwxKaxebK8i2Edlkk+fMJ/bKKP38WAMAuEADZBKLyEvk2AlP2acBCIEA+n1+wCAjAOeKAQgJVRXHAYjDAkjigGAxQEgc4wQBLEYCAWQIoXeZywwE8y1dM7eK1lflAAOUl3ukr1spVAADfalHXssZPH1Ah6dsqq2gD1q6Tdq7raQOq5b37BrqAjYp7qE10AX7F3YuZLsCkAGymC9iivH+kC9iqANTQBWyrlQO2U/4a1snyA0HKAFeBFGCl/lNcL8nfEaJ/Ndwpym/YBdEP7BYAe8Tb9+5r3N/UFG72H2hJlXCw9dAMAUYBkLiFDdYfbhA2H2k72u5S/ylvOsYwHZ0aA4LOLpUJ1/HuCCdvpXp6/7x0QktAX7jwZLIhX23OKaFrC4WLAvz205oBTFFrf+o555mevLMtXCwyYB4UNmoHOPdv01ftAAwCEIAABCAAAQhAAAIQgAAEIAABCEAAAmYp4LwugAsXKy41R6PRy61DV66mig8MEc0B13LLrkv2uXHzllc9vtfiIRoDhm9H1R4ih0buKCaYg6Od3MyH1VLA2Ehf0j2r7t4TGSqrw/c1mZaLAfboX97vwcPxR4/bMp88bX9WrtW4XgSIADw9lwBiCEAAAhCAAGjAcxDAhAAIgQCKE/kvCAggZkinudQRQF7yy7le+YAA5LW9Y+r4v9EjP90VlaynlOhTuKgVAQjgAW/BAPz/CybBAOP8v+zAAO/iAAcHlO8e5i90jUCA93qt1Ey3RhPNxgeQ/I9Ct/UJ4ixwfxYNP+oAAJOS6c8X6vlfZTOtb3Q/Ba5bMdPr8tM8/8bUxoo1+XSOgvv7RLJlkQ7zj4Gf+pbzl62fwcKS1G8hs6nBiScRywAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMC0zMVQwNDowMTo0MCswMDowMPCeh84AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTAtMzFUMDQ6MDE6NDArMDA6MDCBwz9yAAAAAElFTkSuQmCC"}}]);
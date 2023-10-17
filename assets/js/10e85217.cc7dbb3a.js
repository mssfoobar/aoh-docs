"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(g,a(a({ref:t},l),{},{components:n})):o.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:i,a[1]=d;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={sidebar_position:1},a="Widget System",d={unversionedId:"development/web/api/widgets",id:"development/web/api/widgets",title:"Widget System",description:"Extending your components to work with the widget system",source:"@site/docs/development/web/api/widgets.md",sourceDirName:"development/web/api",slug:"/development/web/api/widgets",permalink:"/aoh-docs/docs/development/web/api/widgets",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/development/web/api/widgets.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"development",previous:{title:"API",permalink:"/aoh-docs/docs/category/api"},next:{title:"Theming System",permalink:"/aoh-docs/docs/development/web/api/theming"}},s={},p=[{value:"Extending your components to work with the widget system",id:"extending-your-components-to-work-with-the-widget-system",level:2},{value:"Providing a default widget size, title, and icon",id:"providing-a-default-widget-size-title-and-icon",level:2}],l={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"widget-system"},"Widget System"),(0,i.kt)("h2",{id:"extending-your-components-to-work-with-the-widget-system"},"Extending your components to work with the widget system"),(0,i.kt)("p",null,"Our widget system uses ",(0,i.kt)("a",{parentName:"p",href:"https://gridstackjs.com/"},"GridStack.js")," to render widgets that can be moved, resized, added\nand removed to a dynamic grid. To enable your component to be registered to the widget system, add a folder called\n",(0,i.kt)("inlineCode",{parentName:"p"},"WidgetConfig")," and create an ",(0,i.kt)("inlineCode",{parentName:"p"},"index.svelte")," file in it."),(0,i.kt)("p",null,"This will make your component appear on the ",(0,i.kt)("inlineCode",{parentName:"p"},"widget-view")," route, where it can be added or removed from the widget\ndashboard."),(0,i.kt)("p",null,"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"WidgetConfig")," component is meant to provide configuration controls for your new 'widgetized' component, here is\nan example configuration widget that just accepts a text input. The text input's value is then bound to the desired\nconfig property (in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"threshold"),"), and that value gets passed to your widget in the ",(0,i.kt)("inlineCode",{parentName:"p"},"widget-view"),"."),(0,i.kt)("p",null,"You ",(0,i.kt)("em",{parentName:"p"},"must")," declare the 'config' prop and use it to pass values to your main widget."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=MyFavouriteComponent/WidgetConfig/index.svelte",title:"MyFavouriteComponent/WidgetConfig/index.svelte"},'<script lang="ts">\n  export let config = { color: "red" }; //default\n<\/script>\n\n<div>Config: </div>\n<input bind:value={ config.color } />\n\n')),(0,i.kt)("p",null,"Inside your main component, to read the config data, you export the same 'config' prop - then read that prop and use\nthe values you want accordingly. When your components are rendered dynamically, the 'config' prop is passed from the\nconfiguration component to the main component."),(0,i.kt)("p",null,"This config can then be persisted (in a database or whatever... in our case, we are storing it in the database) and then\nread to load widget-specific configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=MyFavouriteComponent/index.svelte",title:"MyFavouriteComponent/index.svelte"},'<script>\n  export let config = { color: "red" }; // 2-way bound default\n<\/script>\n\n<div style="border: 1px solid; padding: 1rem; ;{ config ? `color: ${config.color}` : \'\'}">\n  Foo Bar\n</div>\n\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you want to know more, you can view this simple example on StackBlitz to understand how the components are\ndynamically rendered and the config prop is passed in: ",(0,i.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/dynamic-rendering-with-config"},"https://stackblitz.com/edit/dynamic-rendering-with-config")),(0,i.kt)("p",{parentName:"admonition"},"The StackBlitz example is a heavily simplified version without GridStack and saving incorporated.")),(0,i.kt)("h2",{id:"providing-a-default-widget-size-title-and-icon"},"Providing a default widget size, title, and icon"),(0,i.kt)("p",null,"Upon adding your widget to the widget view, it will get initialized with a default size - to ensure your widget looks\nnice, you should specify what that size should be, you do this by exporting some constants that will be bound to your\nwidget when it's initialized in the grid."),(0,i.kt)("p",null,"You will also need to export a title, and Font Awesome icon that will be used to represent your widget for during\nselection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=MyFavouriteComponent/index.svelte {5-8}",title:"MyFavouriteComponent/index.svelte","{5-8}":!0},"<script lang=\"ts\">\n  import { faToilet } from '@fortawesome/pro-duotone-svg-icons';\n\n  export let config = { color: \"red\" }; // 2-way bound default\n  export const widgetTitle = 'My Favourite Widget';\n  export const widgetIcon = faToilet;\n  export const widgetWidth = 3;\n  export const widgetHeight = 4;\n<\/script>\n\n<div style=\"border: 1px solid; padding: 1rem; ;{ config ? `color: ${config.color}` : ''}\">\n  Foo Bar\n</div>\n\n")))}c.isMDXComponent=!0}}]);
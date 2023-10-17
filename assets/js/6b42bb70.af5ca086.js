"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[9039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=h(n),d=o,u=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return n?a.createElement(u,r(r({ref:t},m),{},{components:n})):a.createElement(u,r({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>h});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:2},r="Theming System",s={unversionedId:"development/web/api/theming",id:"development/web/api/theming",title:"Theming System",description:"Go straight to the implementation section if you want to know the details on how we handle our theming.",source:"@site/docs/development/web/api/theming.md",sourceDirName:"development/web/api",slug:"/development/web/api/theming",permalink:"/aoh-docs/docs/development/web/api/theming",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/development/web/api/theming.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"development",previous:{title:"Widget System",permalink:"/aoh-docs/docs/development/web/api/widgets"},next:{title:"Components",permalink:"/aoh-docs/docs/category/components"}},l={},h=[{value:"Switching themes",id:"switching-themes",level:2},{value:"Creating a new theme",id:"creating-a-new-theme",level:2},{value:"Extending themes",id:"extending-themes",level:2},{value:"Understanding the implementation",id:"understanding-the-implementation",level:2}],m={toc:h};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"theming-system"},"Theming System"),(0,o.kt)("p",null,"Go straight to the ",(0,o.kt)("a",{parentName:"p",href:"#implementation"},"implementation")," section if you want to know the details on how we handle our theming."),(0,o.kt)("h2",{id:"switching-themes"},"Switching themes"),(0,o.kt)("p",null,"To switch themes programmatically, import 'theme' from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Theme.ts")," store in ",(0,o.kt)("inlineCode",{parentName:"p"},"src/lib/stores/Themes.ts"),", and change\nit to whatever theme you want:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { theme, THEMES } from "$lib/stores/Theme";\n\n$theme = THEMES.OPSHUB;\n')),(0,o.kt)("p",null,"This triggers a different ",(0,o.kt)("inlineCode",{parentName:"p"},".css")," file to be loaded, resulting in the theme change."),(0,o.kt)("h2",{id:"creating-a-new-theme"},"Creating a new theme"),(0,o.kt)("p",null,"To create a new theme, add a new ",(0,o.kt)("inlineCode",{parentName:"p"},".css")," file under ",(0,o.kt)("inlineCode",{parentName:"p"},"/static/themes/{new-theme-name}.css"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css",metastring:'title="/static/themes/{new-theme-name}.css"',title:'"/static/themes/{new-theme-name}.css"'},".theme {\n  /*Primary*/\n  --primary: 250 83 5;\n  --primary-dark: 250 83 5;\n\n  --on-primary: 255 255 255;\n  --on-primary-dark: 255 255 255;\n\n  --primary-container: 33 33 33;\n  --primary-container-dark: 33 33 33;\n\n  /** ... and much more **/\n}\n")),(0,o.kt)("p",null,"This results in you overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},".theme")," class with different values for the css variables. The values are in RGB,\nwithout commas - this gets read by a function by Tailwind - which allows us to add opacity values; this is so you get\nthe ability to append a slash and a number when using these Tailwind classes to get opacity."),(0,o.kt)("p",null,"The following example results in using the ",(0,o.kt)("inlineCode",{parentName:"p"},"on-primary")," color, with 60% opacity, applied to texts (font color - basically\nCSS's ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," property)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<div class="text-on-primary/60">Hello World!</div>\n')),(0,o.kt)("p",null,"For your new theme to be coherent, you must thoughtfully choose all the colors for every CSS variable. You can find the\ncomplete list of CSS variables you need to define in the existing examples in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/static/themes")," folder, or in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"tailwind.config.cjs")," file, at the ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.extend.colors")," setting."),(0,o.kt)("p",null,"You must also extend the theme list in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Theme.ts")," store:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/lib/stores/Themes.ts"',title:'"/src/lib/stores/Themes.ts"'},"{new-theme-name}\n")),(0,o.kt)("h2",{id:"extending-themes"},"Extending themes"),(0,o.kt)("p",null,"To extend the theme with more colours to choose from (we use Material UI's specification as a baseline), you may go to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"tailwind.config.cjs")," file and add more properties to the ",(0,o.kt)("inlineCode",{parentName:"p"},"theme.extend.colors")," setting. Each property there\ncorresponds to a color in Tailwind and these colors are mapped to your theme colours in the ",(0,o.kt)("inlineCode",{parentName:"p"},".css")," file you define\nthrough CSS variables."),(0,o.kt)("p",null,"For example, if you need a new type of themeable colour called ",(0,o.kt)("inlineCode",{parentName:"p"},"attention"),", you can add it like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="tailwind.config.cjs"',title:'"tailwind.config.cjs"'},"module.exports = {\n    ...,\n    theme: {\n        ...,\n        extend: {\n            ...,\n            colors: {\n                ...,\n                'attention': withOpacityValue('--attention')\n            }\n        },\n    }\n}\n")),(0,o.kt)("p",null,"The function ",(0,o.kt)("inlineCode",{parentName:"p"},"withOpacityValue")," is defined at the top of the file - it is used by Tailwind to handle alpha in colors."),(0,o.kt)("h2",{id:"understanding-the-implementation"},"Understanding the implementation"),(0,o.kt)("p",null,"At the root layout in our Svelte Kit app, the theme store changes a reactive variable that decides which ",(0,o.kt)("inlineCode",{parentName:"p"},".css")," file\ngets loaded in our ",(0,o.kt)("inlineCode",{parentName:"p"},"<head>")," element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/routes/+layout.svelte"',title:'"src/routes/+layout.svelte"'},"<script lang=\"ts\">\n\n...\n\n    onMount(() => {\n        // Modify themeTouse when theme store changes\n        theme.subscribe(changedTheme => {\n            if (window) {\n                let storedTheme = window.localStorage.getItem('theme') as THEMES;\n\n                // Give priority to stored theme\n                if (storedTheme) {\n                    themeToUse = storedTheme;\n                } else {\n                    themeToUse = changedTheme;\n                }\n            }\n        });\n    });\n\n...\n\n<script>\n\n...\n\n<svelte:head>\n    <title>{$title}</title>\n    \x3c!-- Load css based on theme name --\x3e\n    <link rel=\"stylesheet\" href={'/themes/' + themeToUse + '.css'} />\n</svelte:head>\n\n...\n")),(0,o.kt)("p",null,"The alternative is to change the CSS appended to the root element ( ",(0,o.kt)("inlineCode",{parentName:"p"},"<html>")," ) based on the theme."),(0,o.kt)("p",null,"Both approaches requires javascript to load preferences in the user's localStorage before updating to\nthe final theme. With our approach we only get the flash of the different theme on the initial server-rendered page.\nWe want to maintain fast rendering instead of hiding/pausing visible elements and only showing them the pageafter the\nfinal theme is chosen."),(0,o.kt)("p",null,"The flash can be solved by the server also rendering the correct preference - either via storing preferences in the\ndatabase or using cookies. The plan is to use a cookie-based solution for this."),(0,o.kt)("p",null,"We also add support for the user to change themes by storing their preference on the device (localStorage API). You\nshould allow the user to set or clear this local storage if you wish to allow them to change themes on-the-fly, on a\nper-device basis. If no stored theme is used, the app will default to whatever gets loaded in the latest layout. This\nway, you can switch between themes depending on the layout or page by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"theme")," store."))}p.isMDXComponent=!0}}]);
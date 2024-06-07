"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[2877],{56806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(74848),i=n(28453);const o={sidebar_position:2},a="Theming System",r={id:"modules/web/api/theming",title:"Theming System",description:"Go straight to the implementation section if you want to know the details on how we handle our theming.",source:"@site/docs/40_modules/20_web/20_api/20_theming.md",sourceDirName:"40_modules/20_web/20_api",slug:"/modules/web/api/theming",permalink:"/aoh-docs/docs/modules/web/api/theming",draft:!1,unlisted:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/40_modules/20_web/20_api/20_theming.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"web",previous:{title:"Dashboarding",permalink:"/aoh-docs/docs/modules/web/api/dashboard"},next:{title:"Charts",permalink:"/aoh-docs/docs/category/charts"}},h={},l=[{value:"Switching themes",id:"switching-themes",level:2},{value:"Creating a new theme",id:"creating-a-new-theme",level:2},{value:"Extending themes",id:"extending-themes",level:2},{value:"Understanding the implementation",id:"understanding-the-implementation",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"theming-system",children:"Theming System"}),"\n",(0,s.jsxs)(t.p,{children:["Go straight to the ",(0,s.jsx)(t.a,{href:"#understanding-the-implementation",children:"implementation"})," section if you want to know the details on how we handle our theming."]}),"\n",(0,s.jsx)(t.h2,{id:"switching-themes",children:"Switching themes"}),"\n",(0,s.jsxs)(t.p,{children:["To switch themes programmatically, import 'theme' from the ",(0,s.jsx)(t.code,{children:"Theme.ts"})," store in ",(0,s.jsx)(t.code,{children:"src/lib/stores/Themes.ts"}),", and change\nit to whatever theme you want:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'import { theme, THEMES } from "$lib/stores/Theme";\n\n$theme = THEMES.OPSHUB;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["This triggers a different ",(0,s.jsx)(t.code,{children:".css"})," file to be loaded, resulting in the theme change."]}),"\n",(0,s.jsx)(t.h2,{id:"creating-a-new-theme",children:"Creating a new theme"}),"\n",(0,s.jsxs)(t.p,{children:["To create a new theme, add a new ",(0,s.jsx)(t.code,{children:".css"})," file under ",(0,s.jsx)(t.code,{children:"/static/themes/{new-theme-name}.css"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",metastring:'title="/static/themes/{new-theme-name}.css"',children:".theme {\n    /*Primary*/\n    --primary: 250 83 5;\n    --primary-dark: 250 83 5;\n\n    --on-primary: 255 255 255;\n    --on-primary-dark: 255 255 255;\n\n    --primary-container: 33 33 33;\n    --primary-container-dark: 33 33 33;\n\n    /** ... and much more **/\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This results in you overriding the ",(0,s.jsx)(t.code,{children:".theme"})," class with different values for the css variables. The values are in RGB,\nwithout commas - this gets read by a function by Tailwind - which allows us to add opacity values; this is so you get\nthe ability to append a slash and a number when using these Tailwind classes to get opacity."]}),"\n",(0,s.jsxs)(t.p,{children:["The following example results in using the ",(0,s.jsx)(t.code,{children:"on-primary"})," color, with 60% opacity, applied to texts (font color - basically\nCSS's ",(0,s.jsx)(t.code,{children:"color"})," property)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",children:'<div class="text-on-primary/60">Hello World!</div>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["For your new theme to be coherent, you must thoughtfully choose all the colors for every CSS variable. You can find the\ncomplete list of CSS variables you need to define in the existing examples in the ",(0,s.jsx)(t.code,{children:"/static/themes"})," folder, or in the\n",(0,s.jsx)(t.code,{children:"tailwind.config.cjs"})," file, at the ",(0,s.jsx)(t.code,{children:"theme.extend.colors"})," setting."]}),"\n",(0,s.jsxs)(t.p,{children:["You must also extend the theme list in the ",(0,s.jsx)(t.code,{children:"Theme.ts"})," store:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="/src/lib/stores/Themes.ts"',children:"{new-theme-name}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"extending-themes",children:"Extending themes"}),"\n",(0,s.jsxs)(t.p,{children:["To extend the theme with more colours to choose from (we use Material UI's specification as a baseline), you may go to\nthe ",(0,s.jsx)(t.code,{children:"tailwind.config.cjs"})," file and add more properties to the ",(0,s.jsx)(t.code,{children:"theme.extend.colors"})," setting. Each property there\ncorresponds to a color in Tailwind and these colors are mapped to your theme colours in the ",(0,s.jsx)(t.code,{children:".css"})," file you define\nthrough CSS variables."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if you need a new type of themeable colour called ",(0,s.jsx)(t.code,{children:"attention"}),", you can add it like so:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="tailwind.config.cjs"',children:"module.exports = {\n    ...,\n    theme: {\n        ...,\n        extend: {\n            ...,\n            colors: {\n                ...,\n                'attention': withOpacityValue('--attention')\n            }\n        },\n    }\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The function ",(0,s.jsx)(t.code,{children:"withOpacityValue"})," is defined at the top of the file - it is used by Tailwind to handle alpha in colors."]}),"\n",(0,s.jsx)(t.h2,{id:"understanding-the-implementation",children:"Understanding the implementation"}),"\n",(0,s.jsxs)(t.p,{children:["At the root layout in our Svelte Kit app, the theme store changes a reactive variable that decides which ",(0,s.jsx)(t.code,{children:".css"})," file\ngets loaded in our ",(0,s.jsx)(t.code,{children:"<head>"})," element."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-jsx",metastring:'title="src/routes/+layout.svelte"',children:"<script lang=\"ts\">\n\n...\n\n    onMount(() => {\n        // Modify themeTouse when theme store changes\n        theme.subscribe(changedTheme => {\n            if (window) {\n                let storedTheme = window.localStorage.getItem('theme') as THEMES;\n\n                // Give priority to stored theme\n                if (storedTheme) {\n                    themeToUse = storedTheme;\n                } else {\n                    themeToUse = changedTheme;\n                }\n            }\n        });\n    });\n\n...\n\n<script>\n\n...\n\n<svelte:head>\n    <title>{$title}</title>\n    \x3c!-- Load css based on theme name --\x3e\n    <link rel=\"stylesheet\" href={'/themes/' + themeToUse + '.css'} />\n</svelte:head>\n\n...\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The alternative is to change the CSS appended to the root element ( ",(0,s.jsx)(t.code,{children:"<html>"})," ) based on the theme."]}),"\n",(0,s.jsx)(t.p,{children:"Both approaches requires javascript to load preferences in the user's localStorage before updating to\nthe final theme. With our approach we only get the flash of the different theme on the initial server-rendered page.\nWe want to maintain fast rendering instead of hiding/pausing visible elements and only showing them the pageafter the\nfinal theme is chosen."}),"\n",(0,s.jsx)(t.p,{children:"The flash can be solved by the server also rendering the correct preference - either via storing preferences in the\ndatabase or using cookies. The plan is to use a cookie-based solution for this."}),"\n",(0,s.jsxs)(t.p,{children:["We also add support for the user to change themes by storing their preference on the device (localStorage API). You\nshould allow the user to set or clear this local storage if you wish to allow them to change themes on-the-fly, on a\nper-device basis. If no stored theme is used, the app will default to whatever gets loaded in the latest layout. This\nway, you can switch between themes depending on the layout or page by setting the ",(0,s.jsx)(t.code,{children:"theme"})," store."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
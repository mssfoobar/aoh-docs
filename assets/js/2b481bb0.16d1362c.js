"use strict";(self.webpackChunkaoh_documentation=self.webpackChunkaoh_documentation||[]).push([[5569],{3905:(t,e,a)=>{a.d(e,{Zo:()=>h,kt:()=>m});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},h=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,h=i(t,["components","mdxType","originalType","parentName"]),d=s(a),c=n,m=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?r.createElement(m,o(o({ref:e},h),{},{components:a})):r.createElement(m,o({ref:e},h))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6948:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o="Piechart with Progress bar",i={unversionedId:"development/web/api/charts/piechartwithprogressbar",id:"development/web/api/charts/piechartwithprogressbar",title:"Piechart with Progress bar",description:"This widget combines a pie chart and a progress bar, offering a comprehensive visual insight into data distribution and ratio representation",source:"@site/docs/development/web/api/charts/2. piechartwithprogressbar.md",sourceDirName:"development/web/api/charts",slug:"/development/web/api/charts/piechartwithprogressbar",permalink:"/aoh-docs/docs/development/web/api/charts/piechartwithprogressbar",draft:!1,editUrl:"https://github.com/mssfoobar/aoh-docs/tree/main/docs/development/web/api/charts/2. piechartwithprogressbar.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"development",previous:{title:"Generic Table Widget",permalink:"/aoh-docs/docs/development/web/api/charts/table"},next:{title:"\ud83d\udcda Guides",permalink:"/aoh-docs/docs/category/-guides-1"}},p={},s=[{value:"Data",id:"data",level:2},{value:"Properties",id:"properties",level:2},{value:"1. Specify the datasource",id:"1-specify-the-datasource",level:3},{value:"2. Configure the order key.",id:"2-configure-the-order-key",level:3},{value:"3. Specify the label key",id:"3-specify-the-label-key",level:3},{value:"4. Choosing the value key",id:"4-choosing-the-value-key",level:3},{value:"5. Grouping the rows",id:"5-grouping-the-rows",level:3}],h={toc:s};function d(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",(0,r.Z)({},h,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"piechart-with-progress-bar"},"Piechart with Progress bar"),(0,n.kt)("p",null,"This widget combines a pie chart and a progress bar, offering a comprehensive visual insight into data distribution and ratio representation"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"configuration"},"Configuration"),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Title"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Title of the widget")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Datasource"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"Table name of the data to display")))),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Order"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Unique identifier of the row"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Label"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"An attribute that allows the rows to be grouped"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Count"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"The column that shows the value tied to the Label attribute"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Group"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"The column to determine whether the row is used for the dropdown or the piechart"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h1",{id:"how-to-use"},"How to use"),(0,n.kt)("p",null,"Assuming this is the content of your datasource named ",(0,n.kt)("em",{parentName:"p"},"aoh_charts_group_count_table")," and you wish to group the columns between calls."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"label"),(0,n.kt)("th",{parentName:"tr",align:null},"count"),(0,n.kt)("th",{parentName:"tr",align:null},"group"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0-4H"),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"NOT_DROPDOWN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"20-24H"),(0,n.kt)("td",{parentName:"tr",align:null},"23"),(0,n.kt)("td",{parentName:"tr",align:null},"NOT_DROPDOWN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4-20H"),(0,n.kt)("td",{parentName:"tr",align:null},"30"),(0,n.kt)("td",{parentName:"tr",align:null},"NOT_DROPDOWN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"30 days"),(0,n.kt)("td",{parentName:"tr",align:null},"200"),(0,n.kt)("td",{parentName:"tr",align:null},"IS_DROPDOWN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"60 days"),(0,n.kt)("td",{parentName:"tr",align:null},"362"),(0,n.kt)("td",{parentName:"tr",align:null},"IS_DROPDOWN")))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ALT_TEXT",src:a(13072).Z,width:"451",height:"268"})),(0,n.kt)("p",null,"The widget contains 2 segments: The piechart and the dropdown menu on the footer. So for this example, the column ",(0,n.kt)("em",{parentName:"p"},"group")," will be the one that is determining which row goes to which segment."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The data requires an attribute that determines whether the row goes into the piechart or the dropdown.")),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"1-specify-the-datasource"},"1. Specify the datasource"),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ALT_TEXT",src:a(33973).Z,width:"716",height:"449"})),(0,n.kt)("p",null,"Select the datasource that you wish to display in the datsource dropdown."),(0,n.kt)("h3",{id:"2-configure-the-order-key"},"2. Configure the order key."),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ALT_TEXT",src:a(57174).Z,width:"708",height:"441"})),(0,n.kt)("p",null,"Specify the column in the datasource that you wish to sort the order by. This will sort the the rows based on the column you specified."),(0,n.kt)("h3",{id:"3-specify-the-label-key"},"3. Specify the label key"),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ALT_TEXT",src:a(24137).Z,width:"708",height:"441"})),(0,n.kt)("p",null,"Specify the column that will give you the labels for the pie charts and dropdown menus. For this example, the column to use for this datasource would be the ",(0,n.kt)("em",{parentName:"p"},"label")," column"),(0,n.kt)("p",null,"If you want to group your rows based on a certain type, you may do so by specifying the column key that holds\nthe type. This will create a dropdown menu on the header that allows you to display your rows based on what it is grouped by."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"(If you do not specify this value, the dropdown menu will not appear)"),"."),(0,n.kt)("h3",{id:"4-choosing-the-value-key"},"4. Choosing the value key"),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ALT_TEXT",src:a(93954).Z,width:"708",height:"441"})),(0,n.kt)("p",null,"Pick the column that has the value tied to the labels chosen above. For this example, the column ",(0,n.kt)("em",{parentName:"p"},"count")," is used."),(0,n.kt)("h3",{id:"5-grouping-the-rows"},"5. Grouping the rows"),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ALT_TEXT",src:a(79045).Z,width:"708",height:"441"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"ALT_TEXT",src:a(35280).Z,width:"693",height:"425"})),(0,n.kt)("p",null,"As mentioned above, the rows will be grouped into 2 segments, one for the piechart and the other for the dropdown menu. So select the key in your table that has the indicator to determine which row goes to which."),(0,n.kt)("p",null,"You then input the values in these field that will determine which row will go to which segment. For this example, we will use the ",(0,n.kt)("em",{parentName:"p"},"group")," column and in the ",(0,n.kt)("em",{parentName:"p"},"group")," column. The rows with the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"IS_DROPDOWN"),' will go to the dropdown menu in the "Total From Last section" and those with the value of ',(0,n.kt)("inlineCode",{parentName:"p"},"NOT_DROPDOWN")," will go into the pie chart."),(0,n.kt)("p",null,"After that the widget will display on your dashboard with the given datasource."))}d.isMDXComponent=!0},33973:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/1-049d4a1e37c5867c1ee239ad66df06af.png"},57174:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/2-5a1bb69605ca63d7f72dcaac0399959f.png"},24137:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/3-68b688bb88c9fc06da21d0a57fede473.png"},93954:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/4-967ff95167fee81cd81f2509c8b08e17.png"},79045:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/5-70cf0f6747fa54f516854bca313533a9.png"},35280:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/6-2539ee5d846e0b72b822fb882f69c3e3.png"},13072:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/7-c177bbdfbbb47ee169793fb3ce19aa33.png"}}]);
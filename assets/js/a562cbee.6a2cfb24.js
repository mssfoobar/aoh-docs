"use strict";(self.webpackChunkar2_documentation=self.webpackChunkar2_documentation||[]).push([[3187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:2},i="Development",p={unversionedId:"mapping/development",id:"mapping/development",title:"Development",description:"WIP",source:"@site/docs/mapping/development.md",sourceDirName:"mapping",slug:"/mapping/development",permalink:"/ar2-docs/docs/mapping/development",draft:!1,editUrl:"https://github.com/mssfoobar/ar2-docs/tree/main/docs/mapping/development.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mapping",previous:{title:"Introduction",permalink:"/ar2-docs/docs/mapping/introduction"}},l={},c=[],s={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development"},"Development"),(0,o.kt)("h1",{id:"pre-processing"},"Pre-processing"),(0,o.kt)("p",null,"WIP"),(0,o.kt)("p",null,"AutoCAD LT:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"command: GEOGRAPHICLOCATION"),(0,o.kt)("li",{parentName:"ol"},"Set location from: Map"),(0,o.kt)("li",{parentName:"ol"},"Do you want to use Online Map Data?: Yes"),(0,o.kt)("li",{parentName:"ol"},"Search for the position your building is in, then right-click on the map and click ",(0,o.kt)("inlineCode",{parentName:"li"},"drop marker here"),". Note that the\nposition you pick on the map will be correlated to a position you pick in your drawing later on."),(0,o.kt)("li",{parentName:"ol"},"GIS Coordinate System: Pick the relevant system, you can refer to ",(0,o.kt)("a",{parentName:"li",href:"https://epsg.io/"},"epsg.io")," to look up what the\ncorrect code your building should be in."),(0,o.kt)("li",{parentName:"ol"},"Select the correct Time Zone based on your location"),(0,o.kt)("li",{parentName:"ol"},"Select and Drawing Unit based on scale of the drawing (likely in millimeters)"),(0,o.kt)("li",{parentName:"ol"},"Select a position in your drawing - this should match with the position you picked in the map earlier on."),(0,o.kt)("li",{parentName:"ol"},"Set the North direction - detailed building plans should have this information included for you to reference.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ogr2ogr -progress -dialect sqlite -sql \"SELECT * FROM entities WHERE layer in ('BP_WALL', 'BP_WALL_TOP', 'BP_WINDOW', 'BP_WIN', 'BP COLUMN')\" `-f 'GeoJSON' .\\OMEGA_ONE_STY_7.geojson .\\OMEGA_ONE_STY_7.dxf -t_srs EPSG:4326 -s_srs EPSG:3414\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ogr2ogr \\\n    -progress \\\n    -f 'GeoJSON' \\\n    ./examples/autocad/plan.geojson \\\n    ./examples/autocad/plan_raw.geojson \\\n    -gcp 0.2515287 2.81713315 1.390108, 103.846971 \\\n    -gcp -0.1509158 2.8171329 === === \\\n    -gcp -- -- == ==\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"aws codeartifact login --tool npm --repository ar2-npm-group --namespace fortawesome --domain agilrad --domain-owner 991204835536\n")),(0,o.kt)("p",null,"BP_WINDOW\nBP_WIN\nBP_WALL_TOP\nBP_WALL\nBP COLUMN"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},".DWG > ODAFIleConverter("),".DWG) > ",(0,o.kt)("em",{parentName:"p"},".DXF > LibreCAD("),".DXF) > ",(0,o.kt)("em",{parentName:"p"},".DXF > ogr2ogr2("),".DXF) > .GeoJSON >"),(0,o.kt)("p",null,"ST Engineering Hub:"),(0,o.kt)("p",null,"1.390108, 103.846971"))}m.isMDXComponent=!0}}]);
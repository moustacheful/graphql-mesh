"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[3062],{5318:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return u}});var n=t(7378);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),f=c(t),u=a,d=f["".concat(p,".").concat(u)]||f[u]||l[u]||o;return t?n.createElement(d,i(i({ref:r},m),{},{components:t})):n.createElement(d,i({ref:r},m))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8180:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var n=t(9603),a=t(120),o=(t(7378),t(5318)),i=["components"],s={},p={unversionedId:"api/interfaces/types_src.YamlConfig.RenameTransform",id:"api/interfaces/types_src.YamlConfig.RenameTransform",isDocsHomePage:!1,title:"Interface: RenameTransform",description:"types/src.YamlConfig.RenameTransform",source:"@site/docs/api/interfaces/types_src.YamlConfig.RenameTransform.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/types_src.YamlConfig.RenameTransform",permalink:"/docs/api/interfaces/types_src.YamlConfig.RenameTransform",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.YamlConfig.RenameTransform.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: RenameConfig1",permalink:"/docs/api/interfaces/types_src.YamlConfig.RenameConfig1"},next:{title:"Interface: RenameTransformObject",permalink:"/docs/api/interfaces/types_src.YamlConfig.RenameTransformObject"}},c=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"mode",id:"mode",children:[]},{value:"renames",id:"renames",children:[]}]}],m={toc:c};function l(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/types_src"},"types/src"),".",(0,o.kt)("a",{parentName:"p",href:"../modules/types_src.YamlConfig"},"YamlConfig"),".RenameTransform"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.RenameTransform#mode"},"mode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.RenameTransform#renames"},"renames"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"mode"},"mode"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"mode"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"bare"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},'"wrap"')),(0,o.kt)("p",null,"Specify to apply rename transforms to bare schema or by wrapping original schema (Allowed values: bare, wrap)"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1165"},"packages/types/src/config.ts:1165")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"renames"},"renames"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"renames"),": ",(0,o.kt)("a",{parentName:"p",href:"types_src.YamlConfig.RenameTransformObject"},"RenameTransformObject"),"[]"),(0,o.kt)("p",null,"Array of rename rules"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L1169"},"packages/types/src/config.ts:1169")))}l.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[4032],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),i=["components"],p={},l={unversionedId:"api/interfaces/types_src.YamlConfig.WebhookHandler",id:"api/interfaces/types_src.YamlConfig.WebhookHandler",isDocsHomePage:!1,title:"Interface: WebhookHandler",description:"types/src.YamlConfig.WebhookHandler",source:"@site/docs/api/interfaces/types_src.YamlConfig.WebhookHandler.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/types_src.YamlConfig.WebhookHandler",permalink:"/docs/api/interfaces/types_src.YamlConfig.WebhookHandler",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/api/interfaces/types_src.YamlConfig.WebhookHandler.md",version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface: UploadOptions",permalink:"/docs/api/interfaces/types_src.YamlConfig.UploadOptions"},next:{title:"Enumeration: OnCircularReference",permalink:"/docs/api/enums/json_machete_src.OnCircularReference"}},s=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"method",id:"method",children:[]},{value:"path",id:"path",children:[]},{value:"payload",id:"payload",children:[]},{value:"pubsubTopic",id:"pubsubtopic",children:[]}]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/types_src"},"types/src"),".",(0,o.kt)("a",{parentName:"p",href:"../modules/types_src.YamlConfig"},"YamlConfig"),".WebhookHandler"),(0,o.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.WebhookHandler#method"},"method")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.WebhookHandler#path"},"path")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.WebhookHandler#payload"},"payload")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/interfaces/types_src.YamlConfig.WebhookHandler#pubsubtopic"},"pubsubTopic"))),(0,o.kt)("h2",{id:"properties-1"},"Properties"),(0,o.kt)("h3",{id:"method"},"method"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"method"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'"GET"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},'"POST"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},'"DELETE"')," ","|"," ",(0,o.kt)("inlineCode",{parentName:"p"},'"PATCH"')),(0,o.kt)("p",null,"HTTP Method that the handler will control (Allowed values: GET, POST, DELETE, PATCH)"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L123"},"packages/types/src/config.ts:123")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"path"},"path"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"path"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Path that remote API will ping"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L119"},"packages/types/src/config.ts:119")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"payload"},"payload"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"payload"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Part of the object you want to pass (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"data.messages"),")"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L131"},"packages/types/src/config.ts:131")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"pubsubtopic"},"pubsubTopic"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"pubsubTopic"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("p",null,"Name of the topic you want to pass incoming payload"),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/blob/master/packages/types/src/config.ts#L127"},"packages/types/src/config.ts:127")))}u.isMDXComponent=!0}}]);
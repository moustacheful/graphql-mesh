"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[2614],{5318:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7378);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4789:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var n=t(9603),o=t(120),a=(t(7378),t(5318)),i=["components"],p={},s={unversionedId:"generated-markdown/ResolversCompositionTransform.generated",id:"generated-markdown/ResolversCompositionTransform.generated",isDocsHomePage:!1,title:"ResolversCompositionTransform.generated",description:"* mode (type: String (bare | wrap)) - Specify to apply resolvers-composition transforms to bare schema or by wrapping original schema",source:"@site/docs/generated-markdown/ResolversCompositionTransform.generated.md",sourceDirName:"generated-markdown",slug:"/generated-markdown/ResolversCompositionTransform.generated",permalink:"/docs/generated-markdown/ResolversCompositionTransform.generated",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/generated-markdown/ResolversCompositionTransform.generated.md",version:"current",frontMatter:{}},l=[],c={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mode")," (type: ",(0,a.kt)("inlineCode",{parentName:"li"},"String (bare | wrap)"),") - Specify to apply resolvers-composition transforms to bare schema or by wrapping original schema"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"compositions")," (type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Array of Object"),", required) - Array of resolver/composer to apply: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resolver")," (type: ",(0,a.kt)("inlineCode",{parentName:"li"},"String"),", required) - The GraphQL Resolver path\nExample: Query.users"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"composer")," (type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Any"),", required) - Path to the composer function\nExample: ./src/auth.js#authComposer")))))}m.isMDXComponent=!0}}]);
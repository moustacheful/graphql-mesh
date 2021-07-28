"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[8754],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,k=d["".concat(p,".").concat(s)]||d[s]||m[s]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(9603),a=n(120),i=(n(7378),n(5318)),l=["components"],o={id:"grpc",title:"gRPC / Protobuf",sidebar_label:"gRPC / Protobuf"},p={unversionedId:"handlers/grpc",id:"handlers/grpc",isDocsHomePage:!1,title:"gRPC / Protobuf",description:"image",source:"@site/docs/handlers/grpc.md",sourceDirName:"handlers",slug:"/handlers/grpc",permalink:"/docs/handlers/grpc",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/handlers/grpc.md",version:"current",sidebar_label:"gRPC / Protobuf",frontMatter:{id:"grpc",title:"gRPC / Protobuf",sidebar_label:"gRPC / Protobuf"},sidebar:"sidebar",previous:{title:"OpenAPI / Swagger",permalink:"/docs/handlers/openapi"},next:{title:"JSON Schema or Samples",permalink:"/docs/handlers/json-schema"}},u=[{value:"Config API Reference",id:"config-api-reference",children:[]}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/20847995/79218793-b27dcf00-7e59-11ea-8f0f-df97503f5494.png",alt:"image"})),(0,i.kt)("p",null,"This handler allows you to load ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/"},"gRPC")," definition files (",(0,i.kt)("inlineCode",{parentName:"p"},".proto"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn add @graphql-mesh/grpc\n")),(0,i.kt)("p",null,"Now, you can use it directly in your Mesh config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: MyGrpcApi\n    handler:\n      grpc:\n        endpoint: localhost:50051\n        protoFilePath: grpc/proto/Example.proto\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can check out our example that uses gRPC Handler.\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/grpc-example"},"Click here to open the example on GitHub"))),(0,i.kt)("h2",{id:"config-api-reference"},"Config API Reference"),(0,i.kt)("p",null,(0,i.kt)("ul",{parentName:"p"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"endpoint")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", required) - gRPC Endpoint"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"protoFilePath")," -  - gRPC Proto file that contains your protobuf schema One of: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", required)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"load")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"),"): ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defaults")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"includeDirs")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Array of String"),")"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"descriptorSetFilePath")," -  - Use a binary-encoded or JSON file descriptor set file One of: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"object"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),", required)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"load")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"),"): ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defaults")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"includeDirs")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Array of String"),")"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"String")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requestTimeout")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Int"),") - Request timeout in milliseconds\nDefault: 200000"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"credentialsSsl")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Object"),") - SSL Credentials: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rootCA")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"certChain")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"privateKey")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),")"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useHTTPS")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Use https instead of http for gRPC connection"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metaData")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON"),") - MetaData"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"useReflection")," (type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Boolean"),") - Use gRPC reflection to automatically gather the connection"))))}m.isMDXComponent=!0}}]);
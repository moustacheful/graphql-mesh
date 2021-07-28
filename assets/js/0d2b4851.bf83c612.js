"use strict";(self.webpackChunk_graphql_mesh_website=self.webpackChunk_graphql_mesh_website||[]).push([[4152],{5318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),h=r,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},157:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=t(9603),r=t(120),o=(t(7378),t(5318)),i=["components"],s={id:"multiple-apis",title:"Combine and extend different sources",sidebar_label:"Combine and extend sources"},l={unversionedId:"recipes/multiple-apis",id:"recipes/multiple-apis",isDocsHomePage:!1,title:"Combine and extend different sources",description:"GraphQL Mesh is able to merge different data sources into a single unified GraphQL Schema, and GraphQL Mesh is not an alternative to Schema Stitching, Apollo Federation, Bare Schema Merging or another merging strategy. GraphQL Mesh can consume and merge your data sources in different approaches.",source:"@site/docs/recipes/multiple-apis.md",sourceDirName:"recipes",slug:"/recipes/multiple-apis",permalink:"/docs/recipes/multiple-apis",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/recipes/multiple-apis.md",version:"current",sidebar_label:"Combine and extend sources",frontMatter:{id:"multiple-apis",title:"Combine and extend different sources",sidebar_label:"Combine and extend sources"},sidebar:"sidebar",previous:{title:"Basic Usage",permalink:"/docs/getting-started/basic-example"},next:{title:"Build Artifacts",permalink:"/docs/recipes/build-mesh-artifacts"}},d=[{value:"Extending GraphQL Schema with <code>additionalTypeDefs</code>",id:"extending-graphql-schema-with-additionaltypedefs",children:[]},{value:"Declare a resolver to the new <code>additionalTypeDefs</code> by using <code>additionalResolvers</code>",id:"declare-a-resolver-to-the-new-additionaltypedefs-by-using-additionalresolvers",children:[]},{value:"Add <code>additionalResolvers</code> programmatically from a code source",id:"add-additionalresolvers-programmatically-from-a-code-source",children:[]},{value:"Combining Schemas using declarative API or JavaScript Code File",id:"combining-schemas-using-declarative-api-or-javascript-code-file",children:[]},{value:"Merging types from different sources (using Type Merging)",id:"merging-types-from-different-sources-using-type-merging",children:[]},{value:"Batching requests between sources to prevent N+1 problem",id:"batching-requests-between-sources-to-prevent-n1-problem",children:[{value:"In type merging",id:"in-type-merging",children:[]}]},{value:"In regular <code>additionalResolvers</code>",id:"in-regular-additionalresolvers",children:[]},{value:"Consuming Apollo Federation Services inside GraphQL Mesh",id:"consuming-apollo-federation-services-inside-graphql-mesh",children:[]}],p={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL Mesh is able to merge different data sources into a single unified GraphQL Schema, and GraphQL Mesh is not an alternative to Schema Stitching, Apollo Federation, Bare Schema Merging or another merging strategy. GraphQL Mesh can consume and merge your data sources in different approaches."),(0,o.kt)("p",null,"In addition to ",(0,o.kt)("inlineCode",{parentName:"p"},"@apollo/gateway"),", GraphQL Mesh supports subscriptions out-of-box."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://product.voxmedia.com/2020/11/2/21494865/to-federate-or-stitch-a-graphql-gateway-revisited"},"Learn more the key differences between Schema Stitching and Apollo Federation")),(0,o.kt)("h2",{id:"extending-graphql-schema-with-additionaltypedefs"},"Extending GraphQL Schema with ",(0,o.kt)("inlineCode",{parentName:"h2"},"additionalTypeDefs")),(0,o.kt)("p",null,"You can add new types and/or fields to the current unified GraphQL Schema by using ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalTypeDefs")," configuration field;"),(0,o.kt)("p",null,"Let's say we have ",(0,o.kt)("inlineCode",{parentName:"p"},"Wikipedia")," API in our Mesh configuration;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: StackExchange\n    handler:\n      openapi:\n        source: https://raw.githubusercontent.com/grokify/api-specs/master/stackexchange/stackexchange-api-v2.2_openapi-v3.0.yaml\n\nadditionalTypeDefs: |\n    extend type Query {\n      listQuestionsFromStackOverflow(first: Int!): [Question]\n    }\n")),(0,o.kt)("p",null,"And here we add a new field under ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," root type named ",(0,o.kt)("inlineCode",{parentName:"p"},"viewsInPastMonth"),". But we need a resolver for this new field."),(0,o.kt)("h2",{id:"declare-a-resolver-to-the-new-additionaltypedefs-by-using-additionalresolvers"},"Declare a resolver to the new ",(0,o.kt)("inlineCode",{parentName:"h2"},"additionalTypeDefs")," by using ",(0,o.kt)("inlineCode",{parentName:"h2"},"additionalResolvers")),(0,o.kt)("p",null,"We have ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalResolvers")," field to make our new field executable in the unified schema;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'sources:\n  - name: StackExchange\n    handler:\n      openapi:\n        source: https://raw.githubusercontent.com/grokify/api-specs/master/stackexchange/stackexchange-api-v2.2_openapi-v3.0.yaml\n\nadditionalTypeDefs: |\n      extend type Query {\n        listQuestionsFromStackOverflow(first: Int!): [Question]\n      }\nadditionalResolvers:\n  - targetTypeName: Query\n    targetFieldName: listQuestionsFromStackOverflow\n    sourceName: StackExchange # Which source does the target field belong to?\n    sourceTypeName: Query # Which root type does the target field belong to?\n    sourceFieldName: listQuestions # What is the source field name?\n    sourceArgs: # What args does this need to take?\n      pagesize: "{args.first}"\n    result: items # We want to extract `items` from the result and return only this one\n')),(0,o.kt)("h2",{id:"add-additionalresolvers-programmatically-from-a-code-source"},"Add ",(0,o.kt)("inlineCode",{parentName:"h2"},"additionalResolvers")," programmatically from a code source"),(0,o.kt)("p",null,"You can add custom resolvers and custom GraphQL schema SDL, and use the API SDK to fetch the data and manipulate it. So the query above could be simplified with custom logic."),(0,o.kt)("p",null,"This is possible because GraphQL Mesh will make sure to expose all available services in each API in your ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," object."),(0,o.kt)("p",null,"It's named the same as the API name, so to access the API of ",(0,o.kt)("inlineCode",{parentName:"p"},"Wiki")," source, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"context.Wiki.Query")," and use the methods you need. It's useful when you need add custom behaviours, fields and types, and also for linking types between schemas."),(0,o.kt)("p",null,"In the following example, we will add take the query we had in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/basic-example"},"previous example"),", and simplify it by adding a new root operation to ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," type, and automate the variables that it needs, in order to create a simpler version of it for the consumers."),(0,o.kt)("p",null,"To add a new simple field, that just returns the amount of views for the past month, you can wrap it as following in your GraphQL config file, and add custom resolvers file using ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalResolvers")," field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: Wiki\n    handler:\n      openapi:\n        source: https://api.apis.guru/v2/specs/wikimedia.org/1.0.0/swagger.yaml\nadditionalTypeDefs: |\n  extend type Query {\n    viewsInPastMonth(project: String!): Float!\n  }\nadditionalResolvers:\n  - ./src/mesh/additional-resolvers.js\n")),(0,o.kt)("p",null,"Now, we need to implement ",(0,o.kt)("inlineCode",{parentName:"p"},"src/mesh/additional-resolvers.js")," with code that fetches and manipulate the data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const moment = require('moment');\n\n\nconst resolvers = {\n  Query: {\n    viewsInPastMonth: async (root, args, context, info) => {\n      const { items } = await context.Wiki.Query.getMetricsPageviewsAggregateProjectAccessAgentGranularityStartEnd({\n        root,\n        args: {\n          access: 'all-access',\n          agent: 'user',\n          end: moment().format('YYYYMMDD'),\n          start: moment().startOf('month').subtract(1, 'month').format('YYYYMMDD'),\n          project: args.project,\n          granularity: 'monthly',\n        },\n        context,\n        info,\n        selectionSet: /* GraphQL */`\n          {\n            views\n          }\n        `\n      });\n\n      if (!items || items.length === 0) {\n        return 0;\n      }\n\n      return items[0].views;\n    },\n  },\n};\n\nmodule.exports = { resolvers };\n")),(0,o.kt)("p",null,"Now run ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql-mesh serve")," and you'll be able to see your new field as part of your GraphQL schema, and you'll be able to query for it."),(0,o.kt)("p",null,"And now we run the the following GraphQL query to fetch the simplified data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query viewsInPastMonth {\n  viewsInPastMonth(project: "en.wikipedia.org")\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can find the complete example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/openapi-javascript-wiki"},"here"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can use TypeScript to have full type-safety in additional resolvers. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/typescript"},"TypeScript Support")," section to learn more.")),(0,o.kt)("h2",{id:"combining-schemas-using-declarative-api-or-javascript-code-file"},"Combining Schemas using declarative API or JavaScript Code File"),(0,o.kt)("p",null,"We learnt that we can combine multiple APIs in Mesh using ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalTypeDefs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalResolvers"),"."),(0,o.kt)("p",null,"The following example has two different OpenAPI sources; we add two new fields to a type of ",(0,o.kt)("inlineCode",{parentName:"p"},"Cities"),", and those fields have return types from ",(0,o.kt)("inlineCode",{parentName:"p"},"Weather")," API."),(0,o.kt)("p",null,"But this time we don't use an extra resolvers file for ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalResolvers")," but only the configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"sources:\n  - name: Cities\n    handler:\n      openapi:\n        source: https://api.apis.guru/v2/specs/mashape.com/geodb/1.0.0/swagger.json\n        operationHeaders:\n          'X-RapidAPI-Key': f93d3b393dmsh13fea7cb6981b2ep1dba0ajsn654ffeb48c26\n  - name: Weather\n    handler:\n      openapi:\n        source: https://api.apis.guru/v2/specs/weatherbit.io/2.0.0/swagger.json\nadditionalTypeDefs: |\n  extend type PopulatedPlaceSummary {\n    dailyForecast: [Forecast]\n    todayForecast: Forecast\n  }\nadditionalResolvers:\n  - targetTypeName: PopulatedPlaceSummary\n    targetFieldName: dailyForecast\n    requiredSelectionSet:\n      | # latitude and longitude will be request if dailyForecast is requested on PopulatedPlaceSummary level\n      {\n        latitude\n        longitude\n      }\n    sourceName: Weather # Target Source Name\n    sourceTypeName: Query # Target Root Type\n    sourceFieldName: getForecastDailyLatLatLonLon # Target root field of that source\n    sourceArgs:\n      lat: '{root.latitude}' # Access required fields and pass those to args of getForecastDailyLatLatLonLon\n      lon: '{root.longitude}'\n      key: \"{context.headers['x-weather-api-key']}\" # x-weather-api-key coming from HTTP Headers\n    result: data # Return `data` property of returned data\n  - type: PopulatedPlaceSummary\n    field: todayForecast\n    requiredSelectionSet: |\n      {\n        latitude\n        longitude\n      }\n    sourceName: Weather\n    sourceTypeName: Query\n    sourceFieldName: getForecastDailyLatLatLonLon\n    sourceArgs:\n      lat: '{root.latitude}'\n      lon: '{root.longitude}'\n      key: \"{context.headers['x-weather-api-key']}\"\n    result: data[0] # You can even go deeper to extract an element of an array of a property of a returned data :)\n    # returnType: ForecastDailyLatLatLonLon # This is needed if the actual return type doesn't match with the one defined in `additionalTypeDefs`\n")),(0,o.kt)("p",null,"The declaration above equals to the following;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { print } = require('graphql');\n\nmodule.exports = {\n  PopulatedPlaceSummary: {\n    dailyForecast: {\n      selectionSet: /* GraphQL */`\n        {\n          latitude\n          longitude\n        }\n      `,\n      resolve: async (root, args, context, info) => {\n        const result = await context.Weather.Query.getForecastDailyLatLatLonLon({\n          root,\n          args: {\n            lat: root.latitude,\n            lon: root.longitude,\n            key: context.headers['x-weather-api-key'],\n          },\n          context,\n          info,\n          selectionSet: subtree => /* GraphQL */`\n            {\n              data {\n                ${print(subtree)}\n              }\n            }\n          `\n        });\n        return result?.data;\n      },\n    },\n    todayForecast: {\n      selectionSet: `\n        {\n          latitude\n          longitude\n        }\n      `,\n      resolve: (root, args, context, info) => {\n        const result = await context.Weather.Query.getForecastDailyLatLatLonLon({\n          root,\n          args: {\n            lat: root.latitude,\n            lon: root.longitude,\n            key: context.headers['x-weather-api-key'],\n          },\n          context,\n          info,\n          selectionSet: subtree => /* GraphQL */`\n            {\n              data {\n                ${print(subtree)}\n              }\n            }\n          `\n        });\n        return result?.data?.[0];\n      },\n    },\n  },\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Also checkout ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/postgres-geodb"},"Postgres GeoDB example")," example that combines GitHub API and a Postgres DB sources.")),(0,o.kt)("h2",{id:"merging-types-from-different-sources-using-type-merging"},"Merging types from different sources (using Type Merging)"),(0,o.kt)("p",null,"Let's say you have two different services; ",(0,o.kt)("inlineCode",{parentName:"p"},"Books")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Authors"),". And those two are exposing the following schemas at the end;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"# Authors\ntype Query {\n  authors(ids: [ID!]): [Author!]!\n  author(id: ID!): Author!\n}\n\ntype Author {\n  id: ID!\n  name: String!\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"# Books\ntype Query {\n  books(ids: [ID!]): [Book!]!\n  book(id: ID!): Book!\n  authorWithBooks(id: ID!): Author!\n  authorsWithBooks(ids: [ID!])\n}\n\ntype Book {\n  id: ID!\n  title: String!\n  authorId: ID!\n}\n\ntype AuthorWithBooks {\n  id: ID!\n  books: [Book!]!\n}\n")),(0,o.kt)("p",null,"And you renamed ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthorWithBooks")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," using ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/transforms/rename"},(0,o.kt)("inlineCode",{parentName:"a"},"Rename"))," transform."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"- sources:\n  - name: BookService\n    handler:\n      # ...\n    transforms:\n      # Rename type names and field names to let stitching merger merges them\n      - rename:\n          renames:\n            - from:\n                type: AuthorWithBooks\n              to:\n                type: Author\n            - from:\n                type: Query\n                field: authorWithBooks\n              to:\n                type: Query\n                field: author\n")),(0,o.kt)("p",null," then you expect following query works fine;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  author(id: 0) {\n    id # This field is common\n    name # This field is from `AuthorService`\n    books { # This field is from `BookService`\n      id\n      title\n    }\n  }\n}\n")),(0,o.kt)("p",null,"But it won't work because Mesh doesn't know which field belongs to where and how to combing those. For sure, you could add ",(0,o.kt)("inlineCode",{parentName:"p"},"additionalResolvers")," then extract ",(0,o.kt)("inlineCode",{parentName:"p"},"books")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthorWithBooks")," then return it as ",(0,o.kt)("inlineCode",{parentName:"p"},"books")," field of ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," type but this sounds a little bit overhead. So let's try Type Merging here;"),(0,o.kt)("p",null,"We have Type Merging transform to teach Mesh how to fetch entities from different sources;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: AuthorService\n    handler:\n      # ...\n    transforms:\n      - typeMerging:\n          queryFields:\n            # No need to define which type it belongs\n            # And no need to define a key for type\n            # keyField assigns to that type automatically\n            - queryFieldName: author\n              keyField: id\n            # keyArg: id <-- This is needed if you have multiple args\n            #                for that query field\n  - name: BookService\n    handler:\n      # ...\n    transforms:\n      # Rename type names and field names to let stitching merger merges them\n      - rename:\n          renames:\n            - from:\n                type: AuthorWithBooks\n              to:\n                type: Author\n            - from:\n                type: Query\n                field: authorWithBooks\n              to:\n                type: Query\n                field: author\n            - from:\n                type: Query\n                field: authorsWithBooks\n              to:\n                type: Query\n                field: authors\n      - typeMerging:\n          queryFields:\n            # This doesn't use batching\n            # It does regular stitching\n            - queryFieldName: book\n              keyField: id\n            - queryFieldName: author\n              keyField: id\n")),(0,o.kt)("p",null,"Then now our query will work as expected!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/transforms/type-merging"},"Check this out learn more about Type Merging transform"),"."),(0,o.kt)("h2",{id:"batching-requests-between-sources-to-prevent-n1-problem"},"Batching requests between sources to prevent N+1 problem"),(0,o.kt)("h3",{id:"in-type-merging"},"In type merging"),(0,o.kt)("p",null,"The example above works fine but there is an N+1 problem. It sends ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," requests for ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," entities. But we have ",(0,o.kt)("inlineCode",{parentName:"p"},"authors")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"books"),". Type Merging is smart enough to handle batching if you point it to a field that returns a list of entities. Let's update our configuration for this;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: AuthorService\n    handler:\n      # ...\n    transforms:\n      - typeMerging:\n          queryFields:\n            # No need to define which type it belongs\n            # And no need to define a key for type\n            # keyField assigns to that type automatically\n            - queryFieldName: authors\n            # Mesh automatically does batching if return type is a list\n              keyField: id\n            # keyArg: ids <-- This is needed if you have multiple args\n            #                for that query field\n  - name: BookService\n    handler:\n      # ...\n    transforms:\n      # Rename type names and field names to let stitching merger merges them\n      - rename:\n          renames:\n            - from:\n                type: AuthorWithBooks\n              to:\n                type: Author\n            - from:\n                type: Query\n                field: authorWithBooks\n              to:\n                type: Query\n                field: author\n            - from:\n                type: Query\n                field: authorsWithBooks\n              to:\n                type: Query\n                field: authors\n      - typeMerging:\n          queryFields:\n            - queryFieldName: books\n              keyField: id\n            - queryFieldName: authors\n              keyField: id\n")),(0,o.kt)("p",null,"And now it batches the requests to the inner sources."),(0,o.kt)("h2",{id:"in-regular-additionalresolvers"},"In regular ",(0,o.kt)("inlineCode",{parentName:"h2"},"additionalResolvers")),(0,o.kt)("p",null,"In the current example, we want to have a field called ",(0,o.kt)("inlineCode",{parentName:"p"},"author")," under ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," property then point it to ",(0,o.kt)("inlineCode",{parentName:"p"},"author"),"."),(0,o.kt)("p",null,"Normally we supposed to do the following definitions;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'additionalTypeDefs: |\n  extend type Book {\n    author: Author\n  }\n\nadditionalResolvers:\n  - sourceName: AuthorService\n    sourceTypeName: Query\n    sourceFieldName: author\n    sourceArgs:\n      id: "{root.authorId}"\n    targetTypeName: Book\n    targetFieldName: author\n    requiredSelectionSet: |\n    {\n      authorId\n    }\n')),(0,o.kt)("p",null,"But we want to solve N+1 problem;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"additionalResolvers:\n  # Create a stitching resolver with batching\n  # to solve N+1 problem\n  - sourceName: AuthorService\n    sourceTypeName: Query\n    sourceFieldName: authors\n    keyField: authorId\n    keysArg: ids\n    targetTypeName: Book\n    targetFieldName: author\n")),(0,o.kt)("p",null,"And that's it. Now GraphQL Mesh will ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"authorId")," field."),(0,o.kt)("h2",{id:"consuming-apollo-federation-services-inside-graphql-mesh"},"Consuming Apollo Federation Services inside GraphQL Mesh"),(0,o.kt)("p",null,"GraphQL Mesh uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gmac/schema-stitching-handbook/tree/master/federation-services"},"the approach of Schema Stitching")," in order to consume the existing Apollo Federation services inside GraphQL Mesh. So you can combine Federation and Type Merging in GraphQL Mesh"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"https://storage.googleapis.com/xebia-blog/1/2019/10/apollo-federation.jpg",width:"300",alt:"Apollo Federation"}),(0,o.kt)("br",null)),(0,o.kt)("p",null,"You can follow Apollo Federation spec and integrate your existing Federated services into GraphQL Mesh."),(0,o.kt)("p",null,"GraphQL Mesh is smart enough to mix and match Federation and Stitching approaches including all other transforms (Type Merging, Rename, Filter etc)"),(0,o.kt)("p",null,"You can also transform your existing non-federated schemas into federated service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"sources:\n  - name: accounts # Add a non-federated GraphQL Source\n    handler:\n      graphql:\n        endpoint: http://localhost:4001/graphql\n    transforms: # Transform it to a federated schema\n      - federation:\n          types:\n            - name: Query\n              config:\n                extend: true\n            - name: User\n              config:\n                keyFields:\n                  - id\n                resolveReference:\n                  queryFieldName: user # Target root field\n\n  - name: reviews # You can also use a federated schema\n    handler:\n      graphql:\n        endpoint: http://localhost:4002/graphql\n  - name: products\n    handler:\n      graphql:\n        endpoint: http://localhost:4003/graphql\n  - name: inventory\n    handler:\n      graphql:\n        endpoint: http://localhost:4004/graphql\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can ",(0,o.kt)("a",{parentName:"p",href:"/docs/transforms/federation"},"check out documentation of federation transformer")," to learn more about adding federation metadata to a non-federated GraphQL Schema.")))}u.isMDXComponent=!0}}]);
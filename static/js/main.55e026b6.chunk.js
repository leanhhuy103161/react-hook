(this["webpackJsonpreact-hook"]=this["webpackJsonpreact-hook"]||[]).push([[0],{14:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(3),o=a.n(n),i=(a(14),a(4)),r=(a(19),a(1));function l(e){var t=e.imageList,a=(e.onChangeImageClick,t.map((function(e,t){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image-top",children:Object(r.jsx)("img",{src:e.image,alt:"random-img",width:"100%"},t)}),Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)("footer",{className:"blockquote-footer",children:Object(r.jsxs)("small",{className:"text-muted",children:["Someone famous in ",Object(r.jsx)("cite",{title:"Source Title",children:"Source Title"})]})})})]})})));return Object(r.jsx)("div",{className:"card-columns",children:a})}l.defaultProps={imageList:[],activeId:null,onChangeImageClick:null};var m=l,u=(a(21),{addNewImage:function(e){return{type:"ADD_IMAGE",payload:e}},changeImage:function(e){return{type:"CHANGE_IMAGE",payload:e}}});var d=Object(i.b)((function(e){return{imageList:e.image.list}}),u)((function(e){var t=e.imageList,a=e.changeImage,c=e.addNewImage;return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("button",{className:"btn btn-dark btn-lg btn-block",onClick:function(){console.log("handleAddHobbyClick");c({image:"https://images.pexels.com/photos/1645822/pexels-photo-1645822.jpeg?cs=srgb&dl=pexels-min-an-1645822.jpg&fm=jpg"})},children:"Add Image"}),Object(r.jsx)("div",{className:"row",children:Object(r.jsx)(m,{imageList:t,onImageChangeClick:function(e){a(e)}})})]})})}));var h=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(d,{})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),n(e),o(e)}))},g=a(6),j=a(5),b=a(2),v={list:[],activedId:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_HOBBY":return Object(b.a)(Object(b.a)({},e),{},{list:[].concat(Object(j.a)(e.list),[t.payload])});case"SET_ACTIVE_HOBBY":var a=t.payload.id;return Object(b.a)(Object(b.a)({},e),{},{activeId:a});default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e},x={list:[{image:"https://source.unsplash.com/random?v=1"},{image:"https://source.unsplash.com/random?v=2"},{image:"https://source.unsplash.com/random?v=3"},{image:"https://source.unsplash.com/random?v=4"},{image:"https://source.unsplash.com/random?v=5"},{image:"https://source.unsplash.com/random?v=6"},{image:"https://source.unsplash.com/random?v=7"},{image:"https://source.unsplash.com/random?v=8"},{image:"https://source.unsplash.com/random?v=9"},{image:"https://source.unsplash.com/random?v=10"},{image:"https://source.unsplash.com/random?v=11"},{image:"https://source.unsplash.com/random?v=12"},{image:"https://source.unsplash.com/random?v=13"},{image:"https://source.unsplash.com/random?v=14"},{image:"https://source.unsplash.com/random?v=15"}],activedId:null},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_IMAGE":var a=Object(j.a)(e.list);return a.push(t.payload),Object(b.a)(Object(b.a)({},e),{},{list:a});case"CHANGE_IMAGE":default:return e}},C=Object(g.a)({hobby:O,user:f,image:I}),N=Object(g.b)(C);o.a.render(Object(r.jsx)(i.a,{store:N,children:Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(h,{})})}),document.getElementById("root")),p()}},[[22,1,2]]]);
//# sourceMappingURL=main.55e026b6.chunk.js.map
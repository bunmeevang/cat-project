(this["webpackJsonpdeploy-me"]=this["webpackJsonpdeploy-me"]||[]).push([[0],{18:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(20),i=c.n(a),r=(c(27),c(17)),o=c(22),l=c(9),j=(c(18),c(7)),d=c(2),b=(c(28),c(1));var h=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],s=t[1];function a(){fetch("https://api.thecatapi.com/v1/images/search").then((function(e){if(e.ok)return e.json();throw new Error("Request Failed")}),(function(e){return console.log(e.message)})).then((function(e){s(e[0].url)}))}return Object(n.useEffect)((function(){a()}),[]),Object(b.jsxs)("div",{className:"catMain",children:[Object(b.jsx)("img",{alt:"text",src:c,className:"catUrl"}),Object(b.jsx)("button",{className:"catButton",onClick:a,children:"More Cats"}),Object(b.jsx)("p",{className:"homeDes",children:"Enjoy all the awesome pictures of the cat and check out all the cool different cat breeds too."})]})};c(30);var f=function(){return Object(b.jsxs)("div",{className:"header-main",children:[Object(b.jsx)("h1",{className:"cats",children:"Cats"}),Object(b.jsx)(j.b,{to:"/",className:"homeLink",children:"Home"}),Object(b.jsx)(j.b,{to:"/breed",className:"breedLink",children:"Breeds"})]})};c(36);var u=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"8ce8c2fe-3566-47a6-80bb-8e8492cc8ac2"}}).then((function(e){if(e.ok)return e.json();throw new Error("Request Failed")}),(function(e){return console.log(e.message)})).then((function(e){s(e)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"catBreeds",children:"Cat Breeds"}),Object(b.jsx)("div",{className:"breed2",children:c.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)(j.b,{to:"/".concat(e.id),className:"breedId",children:Object(b.jsx)("h2",{className:"breed",children:e.name})})},t)}))})]})};c(37);function m(){return Object(b.jsx)("div",{className:"footer-main",children:Object(b.jsx)("p",{children:"CatApp by Bunmee Vang"})})}c(38);function O(e){var t=e.breed;return void 0===t?Object(b.jsx)("h1",{children:"loading..."}):Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("img",{alt:"text",src:t.image.url,className:"catImage"}),Object(b.jsx)("h2",{className:"breedName",children:t.name}),Object(b.jsxs)("div",{className:"borderBox",children:[Object(b.jsx)("div",{className:"DesBox",children:Object(b.jsxs)("p",{className:"catInfo",children:["Description: ",t.description]})}),Object(b.jsxs)("div",{className:"pBox",children:[Object(b.jsxs)("p",{className:"catInfo",children:["Temperament ",t.temperament]}),Object(b.jsxs)("p",{className:"catInfo",children:["Origin: ",t.origin]}),Object(b.jsxs)("p",{className:"catInfo",children:["Life span: ",t.life_span]}),Object(b.jsxs)("p",{className:"catInfo",children:["Adaptability: ",t.adaptability,"/5"]}),Object(b.jsxs)("p",{className:"catInfo",children:["Affection level: ",t.affection_level,"/5"]}),Object(b.jsxs)("p",{className:"catInfo",children:["Child friendly: ",t.child_friendly,"/5"]}),Object(b.jsxs)("p",{className:"catInfo",children:["Dog friendly: ",t.dog_friendly,"/5"]}),Object(b.jsxs)("p",{className:"catInfo",children:["Energy level: ",t.energy_level,"/5"]})]})]})]})}var x=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"8ce8c2fe-3566-47a6-80bb-8e8492cc8ac2"}}).then((function(e){if(e.ok)return e.json();throw new Error("Request Failed")}),(function(e){return console.log(e.message)})).then((function(e){s(e)}))}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(f,{}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/",component:h}),Object(b.jsx)(d.a,{exact:!0,path:"/breed",component:u}),Object(b.jsx)(d.a,{path:"/:id",render:function(e){var t=Object(o.a)(c).filter((function(t){return t.id===e.match.params.id}));return Object(b.jsx)(O,Object(r.a)(Object(r.a)({},e),{},{breed:t[0]}))}})]}),Object(b.jsx)(m,{})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,40)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),p()}},[[39,1,2]]]);
//# sourceMappingURL=main.7cc288ed.chunk.js.map
(this.webpackJsonpgametop_test=this.webpackJsonpgametop_test||[]).push([[0],{20:function(e,t,n){var a={"./fall.png":299,"./flower.png":300,"./spring.png":301,"./winter.png":302};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=20},294:function(e,t,n){},297:function(e){e.exports=JSON.parse('{"map-sprites":{"variants":["spring","fall","winter","flower"],"size":{"height":288,"width":640}}}')},298:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAXUlEQVRYhe2TsQ3AMAgEIfJO7F/CUkQuHUfpsCP5rqR59K8TgOPRZwHunpWlmNmQee1eoL3cplYqmcIySxcQ1THyfxNExN4H+grFmVjwHYYFWLAaLMACLAA4HBG5AVjhF1SJkEfSAAAAAElFTkSuQmCC"},299:function(e,t,n){e.exports=n.p+"static/media/fall.29cbe0d4.png"},300:function(e,t,n){e.exports=n.p+"static/media/flower.f00a854a.png"},301:function(e,t,n){e.exports=n.p+"static/media/spring.4ad9d4a2.png"},302:function(e,t,n){e.exports=n.p+"static/media/winter.a1cf1d29.png"},303:function(e,t,n){},304:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(28),o=n.n(i),c=(n(80),n(4)),l=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"This is about"))},s=(n(81),n(71)),u=n.n(s),m=n(72),d=n.n(m),p=function(){return r.a.createElement("div",null,r.a.createElement(u.a,{className:"Tilt",options:{max:100}},r.a.createElement("div",{className:"Tilt-inner"},r.a.createElement("img",{style:{width:"350px",height:"350px",paddingLeft:"50px"},alt:"Ninja",src:d.a}))))},b=n(9),f=r.a.createContext(),g=function(e){var t=e.children,n=Object(a.useReducer)((function(e,t){switch(t.type){case"show":return Object(b.a)(Object(b.a)({},e),{},{visible:!0,text:t.text});case"hide":return Object(b.a)(Object(b.a)({},e),{},{visible:!1});default:return e}}),{visible:!1,text:""}),i=Object(c.a)(n,2),o=i[0],l=i[1];return r.a.createElement(f.Provider,{value:{visible:o.visible,text:o.text,show:function(e){return l({type:"show",text:e})},hide:function(){return l({type:"hide"})}}},t)},h=function(){var e=Object(a.useContext)(f);return e.visible?r.a.createElement("div",{className:"alert",onClick:e.hide},e.text):null},v=function(){var e=Object(a.useContext)(f),t=e.show,n=e.hide,i=Object(a.useContext)(I),o=i.toRouteChange,l=i.loadUser,s=Object(a.useState)(""),u=Object(c.a)(s,2),m=u[0],d=u[1],b=Object(a.useState)(""),g=Object(c.a)(b,2),v=g[0],E=g[1];return Object(a.useEffect)((function(){n()}),[m,v]),r.a.createElement("div",{className:"login"},r.a.createElement(h,null),r.a.createElement("div",null,r.a.createElement(p,null)),r.a.createElement("div",null,r.a.createElement("h1",{className:"header"},"LOGIN"),r.a.createElement("input",{onChange:function(e){d(e.target.value)},className:"signForm email",placeholder:"Email",type:"text"}),r.a.createElement("input",{onChange:function(e){E(e.target.value)},className:"signForm password",placeholder:"Password",type:"password"}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){fetch("http://localhost:3000/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:m,password:v})}).then((function(e){return e.json()})).then((function(e){e.id?(l(e),o("home")):t("!!! Wrong password or email !!!")}))},className:"signForm btn",type:"submit"},"LOGIN")),r.a.createElement("p",{onClick:function(){return o("register")},className:"turn"},"Create New Account")))},E=function(){var e=Object(a.useContext)(I),t=e.toRouteChange,n=e.loadUser,i=Object(a.useState)(""),o=Object(c.a)(i,2),l=o[0],s=o[1],u=Object(a.useState)(""),m=Object(c.a)(u,2),d=m[0],b=m[1],g=Object(a.useState)(""),v=Object(c.a)(g,2),E=v[0],x=v[1],y=Object(a.useContext)(f),j=y.show,O=y.hide,k=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,w=/(^(([A-Za-z])+){2,}(([0-9])+)?$)|^[A-Za-z]{2}$|(^(([A-Za-z])+){1,}((([0-9])+){2,})$)/,C=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,16}$/;return Object(a.useEffect)((function(){O()}),[d,E,l]),r.a.createElement("div",{className:"login"},r.a.createElement(h,null),r.a.createElement("div",null,r.a.createElement(p,null)),r.a.createElement("div",null,r.a.createElement("h1",{className:"header"},"Register"),r.a.createElement("div",{className:"registerForm"},r.a.createElement("input",{onChange:function(e){s(e.target.value)},className:"signForm name",placeholder:"Name",type:"text"}),r.a.createElement("input",{onChange:function(e){b(e.target.value)},className:"signForm email",placeholder:"Email",type:"text"}),r.a.createElement("input",{onChange:function(e){x(e.target.value)},className:"signForm password",placeholder:"Password",type:"password"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){k.test(d.trim())?w.test(l.trim())?C.test(E.trim())?fetch("http://localhost:3000/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d.trim(),password:E.trim(),name:l.trim()})}).then((function(e){return e.json()})).then((function(e){e.id?(n(e),t("home")):j("This email already registered")})):j("Password is not Valid"):j("Username is not Valid"):j("Your email is not valid")},className:"signForm btn",type:"submit"},"REGISTER")),r.a.createElement("p",{onClick:function(){return t("signin")},className:"turn"},"Login To Your Account")))},x=n(73),y=n.n(x),j=(n(294),function(){var e=Object(a.useContext)(I),t=e.isSignedIn,n=e.toRouteChange;return t?r.a.createElement("nav",null,r.a.createElement("p",{onClick:function(){return n("about")},className:"nav about"},"About"),r.a.createElement("p",{onClick:function(){return n("maker")},className:"nav about"},"Map Maker"),r.a.createElement("p",{onClick:function(){return n("home")},className:"nav about"},"Game"),r.a.createElement("p",{onClick:function(){return n("signin")},className:"nav signUp"},"Sign Out")):r.a.createElement("nav",null,r.a.createElement("p",{onClick:function(){return n("signin")},className:"nav signIn"},"Sign In"),r.a.createElement("p",{onClick:function(){return n("register")},className:"nav register"},"Register"))}),O=function(){var e=Object(a.useState)(""),t=Object(c.a)(e,2);t[0],t[1];return r.a.createElement("div",null,r.a.createElement("input",{type:"text"}))};var k=function(e){var t=Object(a.useState)({x:50,y:0}),n=Object(c.a)(t,2),r=n[0],i=n[1];Object(a.useEffect)((function(){var t=document.getElementById(e);return t.addEventListener("mousedown",(function(e){e.preventDefault(),t.style.pointerEvents="none",document.body.addEventListener("mousemove",o),document.body.addEventListener("mouseup",(function(){document.body.removeEventListener("mousemove",o),t.style.pointerEvents="initial"}))})),function(){document.body.removeEventListener("mousedown",o),document.body.removeEventListener("mouseup",o),document.body.removeEventListener("mousemove",o)}}),[]);var o=function(e){var t={x:e.clientX,y:e.clientY};i(t)};return{position:r}},w=n(74),C=n.n(w),S=(n(296),function(e){for(var t=e.tileset,i=e.position,o=e.activeTile,l=e.setActiveTile,s=e.setTileset,u=(e.backgroundTile,e.setBackgroundTile),m=e.setBoolSwap,d=e.mapSize,p=e.setMapSize,f=e.mapTiles,g=n(297),h=Object.keys(g).map((function(e){return{type:"group",name:e.replace(/-/g," "),items:g[e].variants.map((function(e){return{value:"".concat(e),label:e}}))}})),v=g["map-sprites"].size,E=v.width,x=v.height,y=[],j=0,O=0;O<x;O+=32){for(var k=[],w=0;w<E;w+=32)k.push({x:w,y:O,id:j++});y.push(k)}var S=/^[0-9]+$/,A=Object(a.useState)({width:"",height:""}),N=Object(c.a)(A,2),T=N[0],z=N[1],L=Object(a.useRef)("Front"),R=Object(a.useContext)(I).userInfo;return r.a.createElement("div",{id:"palette",style:{position:"absolute",border:"1px solid black",top:i.y,left:i.x,zIndex:10,backgroundColor:"white"}},r.a.createElement("div",{style:{display:"flex",marginBottom:4,marginTop:4}},r.a.createElement("img",{id:"handle",src:n(298),alt:"handle"}),r.a.createElement("div",{style:{background:"url("+n(20)("./".concat(t,".png"))+") "+"-".concat(o.x,"px -").concat(o.y,"px no-repeat"),width:32,height:32,border:"2px solid red"}}),r.a.createElement("div",{style:{width:200,marginLeft:8}},r.a.createElement(C.a,{value:t,options:h,onChange:function(e){return s(e.value)}})),r.a.createElement("div",{style:{marginLeft:8}},r.a.createElement("button",{onClick:function(){return u(o)},style:{padding:"6px 20px",fontSize:14}},"FILL")),r.a.createElement("div",{style:{marginLeft:8}},r.a.createElement("button",{onClick:function(){return"Front"===L.current?L.current="Back":"Back"===L.current&&(L.current="Front"),void m((function(e){return!e}))},style:{padding:"6px 20px",fontSize:14}},L.current)),r.a.createElement("div",{style:{marginLeft:8}},r.a.createElement("button",{onClick:function(){var e;(e=prompt("Please enter map name: "))?fetch("http://localhost:3000/mapupload",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:R.email,name:R.name,map:{mapName:e,mapInfo:{mapSize:d,tiles:f}}})}).then(alert("Map Saved")):alert("Failed to upload the map")},style:{padding:"6px 20px",fontSize:14}},"Upload"))),r.a.createElement("div",{style:{display:"flex",margin:5}},r.a.createElement("input",{onChange:function(e){var t=e.target.value;z((function(e){return Object(b.a)(Object(b.a)({},e),{},{width:t})}))},type:"text",style:{width:"103px"},placeholder:d.width}),r.a.createElement("input",{onChange:function(e){var t=e.target.value;z((function(e){return Object(b.a)(Object(b.a)({},e),{},{height:t})}))},type:"text",style:{width:"103px"},placeholder:d.height}),r.a.createElement("button",{onClick:function(){S.test(T.width)&&S.test(T.height)&&p(T)}},"Apply")),r.a.createElement("div",{style:{position:"absolute",zIndex:10,opacity:.55}},y.map((function(e,t){return r.a.createElement("div",{style:{display:"flex"}},e.map((function(e,n){return r.a.createElement("div",{className:"box",onClick:function(){return l({x:32*n,y:32*t})},style:{borderTop:"1px solid black",borderRight:"1px solid black",width:32,height:32}})})))}))),r.a.createElement("div",null,y.map((function(e,a){return r.a.createElement("div",{style:{display:"flex"}},e.map((function(e,i){return r.a.createElement("div",{style:{borderTop:"1px solid black",borderRight:"1px solid black",background:"url("+n(20)("./".concat(t,".png"))+") "+"-".concat(32*i,"px -").concat(32*a,"px no-repeat"),width:32,height:32}})})))}))))}),A=function(e){Object(a.useEffect)((function(){return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[e])},N=function(e){var t=e.tiles,i=e.tileset,o=e.mapSize,l=e.activeTile,s=e.setTiles,u=e.backgroundTile,m=e.zIndex,d=e.setzIndex,p=e.boolSwap,f=e.setBackgroundTile;console.log("this is map rendering");var g=function(e){for(var t=new Array(e.length),n=0;n<e.length;++n)t[n]=e[n].slice(0);return t},h=Object(a.useState)({tiles:[],background:{}}),v=Object(c.a)(h,2),E=v[0],x=v[1];A((function(e){var n;"k"===(n=e.key.toLowerCase())?x({tiles:t,background:u}):"l"===n&&(s(E.tiles),f(E.background))})),Object(a.useEffect)((function(){d(p?{front:1,back:2}:{front:2,back:1})}),[p]);var y=Object(a.useState)(""),j=Object(c.a)(y,2),O=j[0],k=j[1];return Object(a.useEffect)((function(){k("url("+n(20)("./".concat(i,".png"))+") "+"-".concat(u.x,"px -").concat(u.y,"px no-repeat"))}),[u]),r.a.createElement("div",null,r.a.createElement("div",{style:{boxSizing:"border-box",width:o.width,height:o.height}},r.a.createElement("div",{style:{position:"absolute",zIndex:1}},t.map((function(e,t){return r.a.createElement("div",{style:{display:"flex"}},e.map((function(e,t){return r.a.createElement("div",{style:{borderTop:"1px solid black",borderRight:"1px solid black",borderBottom:"1px solid black",background:O,width:32,height:32}})})))}))),r.a.createElement("div",{style:{position:"absolute",zIndex:m.back}},t.map((function(e,t){return r.a.createElement("div",{style:{display:"flex"}},e.map((function(e,a){return r.a.createElement("div",{className:"box back",onClick:function(){return function(e){var t=e.x,n=e.y,a=e.tileset;s((function(e){var r=g(e),i=Object(b.a)(Object(b.a)({},r[n][t]),{},{b:l,season_back:a});return r[n][t]=i,console.log("dropBack",r),r}))}({x:a,y:t,tileset:i})},style:{borderTop:"1px solid black",borderRight:"1px solid black",borderBottom:"1px solid black",background:"url("+n(20)("./".concat(e.season_back,".png"))+") "+"-".concat(e.b.x,"px -").concat(e.b.y,"px no-repeat"),width:32,height:32}})})))}))),r.a.createElement("div",{style:{position:"absolute",zIndex:m.front}},t.map((function(e,t){return r.a.createElement("div",{style:{display:"flex"}},e.map((function(e,a){return r.a.createElement("div",{className:"box front",onClick:function(){return function(e){var t=e.x,n=e.y,a=e.tileset;s((function(e){var r=g(e),i=Object(b.a)(Object(b.a)({},r[n][t]),{},{v:l,season_front:a});return r[n][t]=i,console.log(r),r}))}({x:a,y:t,tileset:i})},style:{borderTop:"1px solid black",borderRight:"1px solid black",borderBottom:"1px solid black",background:"url("+n(20)("./".concat(e.season_front,".png"))+") "+"-".concat(e.v.x,"px -").concat(e.v.y,"px no-repeat"),width:32,height:32}})})))})))))},T=(n(303),function(){var e=Object(a.useState)("spring"),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useState)({x:32,y:128}),l=Object(c.a)(o,2),s=l[0],u=l[1],m=Object(a.useState)([]),d=Object(c.a)(m,2),p=d[0],b=d[1],f=Object(a.useState)({x:-32,y:-32}),g=Object(c.a)(f,2),h=g[0],v=g[1],E=Object(a.useState)({width:"600",height:"600"}),x=Object(c.a)(E,2),y=x[0],j=x[1],O=Object(a.useState)(!1),w=Object(c.a)(O,2),C=w[0],A=w[1],T=Object(a.useState)({front:3,back:2}),z=Object(c.a)(T,2),I=z[0],L=z[1],R=Object(a.useRef)(1),B=k("handle").position;return Object(a.useEffect)((function(){R.current++,console.log("Rendered:",R.current);for(var e=[],t=0,n=0;n<y.height;n+=32){for(var a=[],r=0;r<y.width;r+=32)a.push({x:r,y:n,id:t++,v:{x:-32,y:-32},season_front:"spring",season_back:"spring",b:{x:-32,y:-32}});e.push(a)}b(e)}),[y]),r.a.createElement("div",{className:"mapmaker",style:{position:"relative",width:"1500px",height:"650px",overflow:"auto",border:"1px solid black"}},r.a.createElement(S,{position:B,tileset:n,activeTile:s,setActiveTile:u,setTileset:i,backgroundTile:h,setBackgroundTile:v,setBoolSwap:A,setMapSize:j,mapSize:y,mapTiles:p}),r.a.createElement(N,{tiles:p,tileset:n,mapSize:y,activeTile:s,setTiles:b,setTileset:i,backgroundTile:h,zIndex:I,setzIndex:L,boolSwap:C,setBackgroundTile:v}))}),z={particles:{number:{value:40,density:{enable:!0,value_area:400}}}},I=r.a.createContext();var L=function(){var e=Object(a.useRef)(1);Object(a.useEffect)((function(){e.current++,console.log(e.current)}));var t=Object(a.useState)("signin"),n=Object(c.a)(t,2),i=n[0],o=n[1],s=Object(a.useState)(!1),u=Object(c.a)(s,2),m=u[0],d=u[1],p=Object(a.useState)({id:"",name:"",email:"",joined:"",score:0}),b=Object(c.a)(p,2),f=b[0],h=b[1];return r.a.createElement("div",{className:"main"},r.a.createElement(y.a,{className:"particles",params:z}),r.a.createElement(I.Provider,{value:{toRouteChange:function(e){switch(e){case"signIn":d(!1),h({id:"",name:"",email:"",joined:"",score:0});break;case"home":d(!0)}o(e)},isSignedIn:m,loadUser:function(e){h({id:e.id,name:e.name,email:e.email,joined:e.joined,score:e.score})},userInfo:f}},r.a.createElement(g,null,r.a.createElement(j,null),r.a.createElement("main",{className:"container"},function(e){switch(e){case"home":return r.a.createElement(O,null);case"signin":return r.a.createElement(v,null);case"register":return r.a.createElement(E,null);case"about":return r.a.createElement(l,null);case"maker":return r.a.createElement(T,null);default:return r.a.createElement(v,null)}}(i)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,n){e.exports=n.p+"static/media/ninja.041bc7b2.png"},75:function(e,t,n){e.exports=n(304)},80:function(e,t,n){},81:function(e,t,n){}},[[75,1,2]]]);
//# sourceMappingURL=main.2d259a99.chunk.js.map
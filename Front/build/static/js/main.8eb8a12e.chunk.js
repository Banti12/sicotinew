(this["webpackJsonpapp-evaluaciones-tih"]=this["webpackJsonpapp-evaluaciones-tih"]||[]).push([[0],{30:function(e,t,a){},41:function(e){e.exports=JSON.parse('{"usuario":"bquirino@spsolutions.com.mx","contrasena":"hoy"}')},52:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(5),c=a(0),o=a.n(c),r=a(14),s=a.n(r),i=(a(52),a(20)),l=a(9),u=a(18),j=(a(53),a(30),a.p+"static/media/SPS.1cae14da.jpg"),d=a(81),p=a(84),b=a(82),h=a(85),O=a(83),m=a(15),g=a(41),x="LOGIN",f="LOGIN_ERROR",v=a(42),y=a.n(v),S=function(e,t){return{type:x,userDetails:Object(l.a)({},e),userData:t,success:!0}};a(27),a(43);var C={loginAction:function(e){return function(t,a){return new Promise((function(a,n){y()({url:"http://api-enriquecimiento.us-e2.cloudhub.io/api/gestionPagos/enriquecimiento/v2/contratos?claveEntidad=MONEX&idContrato=123455",method:"GET",mode:"no-cors",headers:{"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}}).then((function(n){console.log(n),t(S(e,n)),a(S(e,n))})).catch((function(e){t({type:f,payload:"No se encontro el usuario."}),a({error:e}),alert(e.response.data.mensaje)}))}))}}},D=Object(m.b)((function(e){return{userDetails:e.login.userDetails}}),C)((function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),o=a[0],r=a[1],s=Object(c.useState)(!1),m=Object(u.a)(s,2),x=m[0],f=m[1],v=Object(c.useState)(g),y=Object(u.a)(v,2),S=y[0],C=y[1],D=Object(c.useState)(!1),N=Object(u.a)(D,2),E=N[0],I=N[1],P=function(){return I(!1)},T=fetch("http://localhost:18081/api/usuarios?usuario=bg&contrasena=da",{method:"GET",redirect:"follow",mode:"no-cors",headers:{"Content-Type":"application/json"}});console.log("RESPONSE: "+T);var k=function(e){C(Object(l.a)(Object(l.a)({},S),{},Object(i.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(d.a,{src:j,alt:"SPS",className:"spsLogo"}),Object(n.jsx)("p",{className:"opacos",children:"Proporciona tus credenciales para iniciar sesi\xf3n en la App de Evaluaciones"}),Object(n.jsxs)(p.a,{noValidate:!0,validated:o,onSubmit:function(t){if(!1===t.currentTarget.checkValidity())t.preventDefault(),t.stopPropagation();else{var a=S.usuario+"@spsolutions.com.mx";C((function(e){return Object(l.a)(Object(l.a)({},S),{},{usuario:a})})),S.usuario.length&&S.contrasena.length&&function(t,a){var n={usuario:t,contrasena:a};e.loginAction(n).then((function(t){console.log(t),t.success&&e.history.push("/home")}))}(a,S.contrasena),t.preventDefault()}r(!0)},children:[Object(n.jsx)(p.a.Group,{md:"6",controlId:"validationCustom03",children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(p.a.Control,{type:"text",placeholder:"Usuario",name:"usuario",onChange:k,required:!0}),Object(n.jsx)(p.a.Control.Feedback,{type:"invalid",children:"Ingresa un usuario valido."}),Object(n.jsx)(b.a.Append,{children:Object(n.jsx)(b.a.Text,{id:"inputGroupPrepend",children:"@spsolutions.com.mx"})})]})}),Object(n.jsx)(p.a.Group,{md:"3",controlId:"validationCustom04",children:Object(n.jsx)(p.a.Control,{type:"password",placeholder:"Contrase\xf1a",name:"contrasena",onChange:k,required:!0})}),Object(n.jsx)(h.a,{md:"6",type:"submit",variant:"primary",className:"botonCentral",size:"md",children:"Iniciar Sesi\xf3n"})]}),Object(n.jsx)(h.a,{variant:"link",className:"opacos",onClick:function(){return I(!0)},children:"Olvid\xe9 mi contrase\xf1a"}),Object(n.jsxs)(O.a,{show:E,onHide:P,children:[Object(n.jsx)(O.a.Header,{closeButton:!0,children:Object(n.jsx)(O.a.Title,{children:"Talento In House"})}),Object(n.jsx)(O.a.Body,{children:Object(n.jsxs)(p.a,{noValidate:!0,validated:x,onSubmit:function(e){!1===e.currentTarget.checkValidity()?(e.preventDefault(),e.stopPropagation()):(e.preventDefault(),P()),f(!0)},children:[Object(n.jsxs)(p.a.Group,{children:[Object(n.jsx)(p.a.Label,{children:"Escribe tu correo para recstablcer tu contrase\xf1a"}),Object(n.jsx)(p.a.Control,{type:"email",placeholder:"example@spsolutions.com.mx",required:!0})]}),Object(n.jsx)(h.a,{type:"submit",variant:"primary",className:"botonPrimary",children:"Enviar"})]})}),Object(n.jsx)(O.a.Footer,{children:Object(n.jsx)(h.a,{variant:"danger",onClick:P,children:"Cerrar"})})]})]})})),N=Object(m.b)((function(e){return console.log("state",e),{userDetails:e.login.userDetails}}),null)((function(e){return Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)("h1",{children:"Hello ".concat(e.userDetails.usuario,"!")}),Object(n.jsx)("p",{children:"Your id is ".concat(e.userDetails._id)})]})})),E=a(45),I=a(7);var P=function(){return Object(n.jsx)(E.a,{children:Object(n.jsx)("div",{clasName:"App",children:Object(n.jsxs)(I.c,{children:[Object(n.jsx)(I.a,{exact:!0,path:"/",component:D}),Object(n.jsx)(I.a,{exact:!0,path:"/home",component:N})]})})})},T=a(16),k=a(46),q={userDetails:{usuario:"",contrasena:""}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)({},e),{},{data:t.userData,userDetails:Object(l.a)({},t.userDetails)});case f:return Object(l.a)(Object(l.a)({},e),t.payload);default:return e}},G=function(){var e={};try{e=sessionStorage.getItem("master_class")?JSON.parse(sessionStorage.getItem("master_class")):{}}catch(a){console.log("getError",a)}var t=Object(T.c)({login:w});return Object(T.d)(t,e,Object(T.a)(k.a,(function(e){return function(t){return function(a){var n=e.getState();return sessionStorage.setItem("master_class",JSON.stringify(Object(l.a)({},n))),t(a)}}})))},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,86)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(m.a,{store:G(),children:Object(n.jsx)(P,{})})}),document.getElementById("root")),A()}},[[78,1,2]]]);
//# sourceMappingURL=main.8eb8a12e.chunk.js.map
(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,a){},32:function(e,t,a){e.exports=a(64)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(29),d=a.n(c),u=a(30),o=a(3),i=a(1),s=a.n(i),l=a(2),m=a(5),p=a(15),b=a.n(p),f="https://team-market-app.herokuapp.com",P={get:function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(f,"/api").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(l.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("".concat(f,"/api").concat(t),a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),put:function(){var e=Object(l.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat(f,"/api").concat(t),a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},E=n.a.createContext(),v=E.Provider,x=(E.Consumer,function(e){var t=e.children,a=Object(r.useState)(!1),c=Object(m.a)(a,2),d=c[0],u=c[1],o=Object(r.useState)(null),i=Object(m.a)(o,2),p=i[0],b=i[1],f=Object(r.useState)({}),E=Object(m.a)(f,2),x=E[0],g=E[1],h=Object(r.useState)(""),y=Object(m.a)(h,2),k=y[0],j=y[1],N=Object(r.useState)([]),O=Object(m.a)(N,2),q=O[0],C=O[1];Object(r.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/products");case 2:t=e.sent,C(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),u(!1)}),[d]);var w=function(){var e=Object(l.a)(s.a.mark((function e(t,a,r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.post("/products",{barcode:t,name:a,quantity:r});case 2:if(!(n=e.sent).data.success){e.next=6;break}return u(!0),e.abrupt("return",n.data.success);case 6:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/products/".concat(t));case 2:if(!(a=e.sent).data.success){e.next=5;break}return e.abrupt("return",a.data.product);case 5:return e.abrupt("return",{});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(s.a.mark((function e(t,a,r,n){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.put("/products/".concat(t),{barcode:a,name:r,quantity:n});case 2:if(!(c=e.sent).data.success){e.next=6;break}return u(!0),e.abrupt("return",c.data.success);case 6:case"end":return e.stop()}}),e)})));return function(t,a,r,n){return e.apply(this,arguments)}}(),V=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.put("/products/setPrice/".concat(t),{price:a});case 2:if(!(r=e.sent).data.success){e.next=6;break}return u(!0),e.abrupt("return",r.data.success);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.put("/products/enable/".concat(t));case 2:if(!(a=e.sent).data.success){e.next=6;break}return u(!0),e.abrupt("return",a.data.success);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.put("/products/disable/".concat(t));case 2:if(!(a=e.sent).data.success){e.next=6;break}return u(!0),e.abrupt("return",a.data.success);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/products/isDuplicated/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.duplicated);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/products/isDuplicatedForUpdate/".concat(t,"/").concat(a));case 2:return r=e.sent,e.abrupt("return",r.data.duplicated);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return n.a.createElement(v,{value:{products:q,addProduct:w,getProduct:S,updateProduct:M,setPrice:V,enable:F,disable:T,modalVisible:p,setModalVisible:b,isDuplicated:I,isDuplicatedForUpdate:U,productToUpdate:x,setProductToUpdate:g,successMessage:k,setSuccessMessage:j}},t)});a(55),a(56);function g(e){var t=Object(r.useContext)(E),a=t.setModalVisible,c=t.setProductToUpdate,d=t.getProduct,u=e.products||[];return n.a.createElement("div",{id:"products-table"},n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"C\xf3digo de barras"),n.a.createElement("td",null,"Nombre del producto"),n.a.createElement("td",null,"Existencia"),n.a.createElement("td",null,"Precio unitario"),n.a.createElement("td",null,"Acciones"))),n.a.createElement("tbody",null,function(){if(u.length<7)for(var e=7-u.length,t=0;t<e;t++)u.push({});return u.map((function(e,t){return n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.barcode),n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.quantity),n.a.createElement("td",null,e.price?e.price.toString():""),n.a.createElement("td",null,n.a.createElement("div",{className:"icons-container"},e.price?e.enabled?n.a.createElement("img",{src:"/images/habx24.png",alt:"Deshabilitar",onClick:Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,d(e._id);case 3:t.t1=t.sent,(0,t.t0)(t.t1),a("disableProduct");case 6:case"end":return t.stop()}}),t)})))}):n.a.createElement("img",{src:"/images/deshab.png",alt:"Habilitar",onClick:Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,d(e._id);case 3:t.t1=t.sent,(0,t.t0)(t.t1),a("enableProduct");case 6:case"end":return t.stop()}}),t)})))}):n.a.createElement("img",{className:"empty-icon",src:"/images/nanai.png",alt:"Vacio"}),!e.barcode||e.enabled?n.a.createElement("img",{className:"empty-icon",src:"/images/nanai.png",alt:"Vacio"}):n.a.createElement("img",{src:"/images/editprecio.png",alt:"Precio",onClick:Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,d(e._id);case 3:t.t1=t.sent,(0,t.t0)(t.t1),a("addPrice");case 6:case"end":return t.stop()}}),t)})))}),!e.barcode||e.enabled?n.a.createElement("img",{className:"empty-icon",src:"/images/nanai.png",alt:"Vacio"}):n.a.createElement("img",{src:"/images/lapizx24.png",alt:"Editar",onClick:Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c,t.next=3,d(e._id);case 3:t.t1=t.sent,(0,t.t0)(t.t1),a("updateProduct");case 6:case"end":return t.stop()}}),t)})))}))))}))}())))}a(57);function h(e){var t=Object(r.useContext)(E).modalVisible;return n.a.createElement("div",{className:"modal-container ".concat(t!==e.children.props.form?"hidden":"")},n.a.createElement("div",{className:"modal-box"},e.children))}var y=a(11),k=a(10);a(58);function j(e){var t=e.onClick,a=e.text;return n.a.createElement("div",{className:"button",onClick:t},a)}a(13);function N(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"form-control"},n.a.createElement("label",{htmlFor:e.id},e.required&&n.a.createElement("span",{className:"required"},"*"),e.label),n.a.createElement("div",{className:"form-imput"},n.a.createElement("input",{type:"text",id:e.id,value:e.value,onChange:e.onChange}),n.a.createElement("div",{className:"error-message ".concat(e.duplicated?"duplicated":"")},e.message))))}function O(){var e=Object(r.useContext)(E),t=e.setSuccessMessage,a=e.setModalVisible,c=e.addProduct,d=e.isDuplicated,u=Object(r.useState)({"addProduct-barcode":"","addProduct-name":"","addProduct-quantity":""}),o=Object(m.a)(u,2),i=o[0],p=o[1],b=Object(r.useState)({"addProduct-barcode":"","addProduct-duplicated-barcode":!1,"addProduct-name":"","addProduct-quantity":""}),f=Object(m.a)(b,2),P=f[0],v=f[1],x=function(){var e=Object(l.a)(s.a.mark((function e(r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={barcode:"",duplicated:!1,name:"",quantity:""},i["addProduct-barcode"]){e.next=5;break}n.barcode="Campo obligatorio",e.next=14;break;case 5:if(/\d\d\d\d\d\d\d\d\d\d\d\d\d/.test(i["addProduct-barcode"])&&!(i["addProduct-barcode"].length>13)){e.next=9;break}n.barcode="Formato Incorrecto",e.next=14;break;case 9:return e.next=11,d(i["addProduct-barcode"]);case 11:if(!e.sent){e.next=14;break}n.duplicated=!0,n.barcode="C\xf3digo de barras duplicado";case 14:if(i["addProduct-name"]?(!i["addProduct-name"].trim()||i["addProduct-name"].length>25)&&(n.name="Formato Incorrecto"):n.name="Campo obligatorio",i["addProduct-quantity"]?(i["addProduct-quantity"].includes(".")||i["addProduct-quantity"].startsWith("0")||!Number(i["addProduct-quantity"])||!Number.isInteger(Number(i["addProduct-quantity"]))||i["addProduct-quantity"]<1||i["addProduct-quantity"]>1e3)&&(n.quantity="Formato Incorrecto"):n.quantity="Campo obligatorio",v({"addProduct-barcode":n.barcode,"addProduct-duplicated-barcode":n.duplicated,"addProduct-name":n.name,"addProduct-quantity":n.quantity}),n.barcode||n.duplicated||n.name||n.quantity){e.next=25;break}return e.next=20,c(i["addProduct-barcode"],i["addProduct-name"],Number(i["addProduct-quantity"]));case 20:if(!e.sent){e.next=25;break}p({"addProduct-barcode":"","addProduct-name":"","addProduct-quantity":""}),a(null),t("El producto se ha registrado exitosamente."),setTimeout((function(){t("")}),2e3);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.target,a=t.id,r=t.value;p(Object(k.a)(Object(k.a)({},i),Object(y.a)({},a,r)))};return n.a.createElement("div",{className:"form-contain",id:"addProduct"},n.a.createElement("div",{className:"form-title"},"Registrar Producto"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-inputs"},n.a.createElement("div",{className:"form-description"},"Los campos marcados con ",n.a.createElement("span",{className:"required"},"*")," son obligatorios"),n.a.createElement(N,{id:"addProduct-barcode",label:"C\xf3digo de barras:",required:!0,message:P["addProduct-barcode"],value:i["addProduct-barcode"],onChange:g,duplicated:P["addProduct-duplicated-barcode"]}),n.a.createElement(N,{id:"addProduct-name",label:"Nombre del producto:",required:!0,message:P["addProduct-name"],value:i["addProduct-name"],onChange:g}),n.a.createElement(N,{id:"addProduct-quantity",label:"N\xfamero de existencia:",required:!0,message:P["addProduct-quantity"],value:i["addProduct-quantity"],onChange:g})),n.a.createElement("div",{className:"form-buttons"},n.a.createElement(j,{onClick:x,text:"Aceptar"}),n.a.createElement(j,{onClick:function(e){p({"addProduct-barcode":"","addProduct-name":"","addProduct-quantity":""}),v({"addProduct-barcode":"","addProduct-duplicated-barcode":"","addProduct-name":"","addProduct-quantity":""}),a(null)},text:"Cancelar"}))))}function q(){var e=Object(r.useContext)(E),t=e.setSuccessMessage,a=e.modalVisible,c=e.setModalVisible,d=e.updateProduct,u=e.isDuplicatedForUpdate,o=e.productToUpdate,i=Object(r.useState)({"updateProduct-barcode":"","updateProduct-name":"","updateProduct-quantity":""}),p=Object(m.a)(i,2),b=p[0],f=p[1],P=Object(r.useState)({"updateProduct-barcode":"","updateProduct-duplicated-barcode":!1,"updateProduct-name":"","updateProduct-quantity":""}),v=Object(m.a)(P,2),x=v[0],g=v[1];Object(r.useEffect)((function(){"updateProduct"===a&&f({"updateProduct-barcode":o.barcode.toString(),"updateProduct-name":o.name.toString(),"updateProduct-quantity":o.quantity.toString()})}),[a]);var h=function(){var e=Object(l.a)(s.a.mark((function e(a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={barcode:"",duplicated:!1,name:"",quantity:""},b["updateProduct-barcode"]){e.next=5;break}r.barcode="Campo obligatorio",e.next=14;break;case 5:if(/\d\d\d\d\d\d\d\d\d\d\d\d\d/.test(b["updateProduct-barcode"])&&!(b["updateProduct-barcode"].length>13)){e.next=9;break}r.barcode="Formato Incorrecto",e.next=14;break;case 9:return e.next=11,u(o._id,b["updateProduct-barcode"]);case 11:if(!e.sent){e.next=14;break}r.duplicated=!0,r.barcode="C\xf3digo de barras duplicado";case 14:if(b["updateProduct-name"]?(!b["updateProduct-name"].trim()||b["updateProduct-name"].length>25)&&(r.name="Formato Incorrecto"):r.name="Campo obligatorio",b["updateProduct-quantity"]?(b["updateProduct-quantity"].includes(".")||b["updateProduct-quantity"].startsWith("0")||!Number(b["updateProduct-quantity"])||!Number.isInteger(Number(b["updateProduct-quantity"]))||b["updateProduct-quantity"]<1||b["updateProduct-quantity"]>1e3)&&(r.quantity="Formato Incorrecto"):r.quantity="Campo obligatorio",g({"updateProduct-barcode":r.barcode,"updateProduct-duplicated-barcode":r.duplicated,"updateProduct-name":r.name,"updateProduct-quantity":r.quantity}),r.barcode||r.duplicated||r.name||r.quantity){e.next=25;break}return e.next=20,d(o._id,b["updateProduct-barcode"],b["updateProduct-name"],Number(b["updateProduct-quantity"]));case 20:if(!e.sent){e.next=25;break}f({"updateProduct-barcode":"","updateProduct-name":"","updateProduct-quantity":""}),c(null),t("El producto se ha editado exitosamente."),setTimeout((function(){t("")}),2e3);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.target,a=t.id,r=t.value;f(Object(k.a)(Object(k.a)({},b),Object(y.a)({},a,r)))};return n.a.createElement("div",{className:"form-contain",id:"updateProduct"},n.a.createElement("div",{className:"form-title"},"Editar Producto"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-inputs"},n.a.createElement("div",{className:"form-description"},"Los campos marcados con ",n.a.createElement("span",{className:"required"},"*")," son obligatorios"),n.a.createElement(N,{id:"updateProduct-barcode",label:"C\xf3digo de barras:",required:!0,message:x["updateProduct-barcode"],value:b["updateProduct-barcode"],onChange:O,duplicated:x["updateProduct-duplicated-barcode"]}),n.a.createElement(N,{id:"updateProduct-name",label:"Nombre del producto:",required:!0,message:x["updateProduct-name"],value:b["updateProduct-name"],onChange:O}),n.a.createElement(N,{id:"updateProduct-quantity",label:"N\xfamero de existencia:",required:!0,message:x["updateProduct-quantity"],value:b["updateProduct-quantity"],onChange:O})),n.a.createElement("div",{className:"form-buttons"},n.a.createElement(j,{onClick:h,text:"Aceptar"}),n.a.createElement(j,{onClick:function(e){f({"updateProduct-barcode":"","updateProduct-name":"","updateProduct-quantity":""}),g({"updateProduct-barcode":"","updateProduct-duplicated-barcode":"","updateProduct-name":"","updateProduct-quantity":""}),c(null)},text:"Cancelar"}))))}function C(){var e=Object(r.useContext)(E),t=e.setSuccessMessage,a=e.modalVisible,c=e.setModalVisible,d=e.setPrice,u=e.productToUpdate,o=Object(r.useState)({"addPrice-price":""}),i=Object(m.a)(o,2),p=i[0],b=i[1],f=Object(r.useState)({"addPrice-price":""}),P=Object(m.a)(f,2),v=P[0],x=P[1];Object(r.useEffect)((function(){"addPrice"===a&&b({"addPrice-price":u.price?u.price.toString():""})}),[a]);var g=function(){var e=Object(l.a)(s.a.mark((function e(a){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={price:""},p["addPrice-price"]){e.next=11;break}return e.next=4,d(u._id,Number(p["addPrice-price"]));case 4:if(!e.sent){e.next=8;break}b({"addPrice-price":""}),c(null),u.price?(t("El precio se ha asignado exitosamente."),setTimeout((function(){t("")}),2e3)):t("");case 8:return e.abrupt("return");case 11:(!/^[0-9]+([\.][0-9]{1,2})?$/m.test(p["addPrice-price"])||p["addPrice-price"].startsWith("0")||!Number(p["addPrice-price"])||p["addPrice-price"]<1||p["addPrice-price"]>25e4)&&(r.price="Formato Incorrecto");case 12:if(x({"addPrice-price":r.price}),r.price){e.next=21;break}return e.next=16,d(u._id,Number(p["addPrice-price"]));case 16:if(!e.sent){e.next=21;break}b({"addPrice-price":""}),c(null),t("El precio se ha asignado exitosamente."),setTimeout((function(){t("")}),2e3);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"form-contain",id:"addPrice"},n.a.createElement("div",{className:"form-title"},"Asignar Precio"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-inputs"},n.a.createElement("div",{className:"form-description"}),n.a.createElement("table",{className:"form-data"},n.a.createElement("tr",null,n.a.createElement("td",{className:"property"},n.a.createElement("b",null,"C\xf3digo de barras: ")),n.a.createElement("td",{className:"value"},u.barcode)),n.a.createElement("tr",null,n.a.createElement("td",{className:"property"},n.a.createElement("b",null,"Nombre del producto: ")),n.a.createElement("td",{className:"value"},u.name)),n.a.createElement("tr",null,n.a.createElement("td",{className:"property"},n.a.createElement("b",null,"N\xfamero en existencia: ")),n.a.createElement("td",{className:"value"},u.quantity))),n.a.createElement(N,{id:"addPrice-price",label:"Precio:",required:!1,message:v["addPrice-price"],value:p["addPrice-price"],onChange:function(e){var t=e.target,a=t.id,r=t.value;b(Object(k.a)(Object(k.a)({},p),Object(y.a)({},a,r)))}})),n.a.createElement("div",{className:"form-buttons"},n.a.createElement(j,{onClick:g,text:"Aceptar"}),n.a.createElement(j,{onClick:function(e){b({"addPrice-price":""}),x({"addPrice-price":""}),c(null)},text:"Cancelar"}))))}function w(){var e=Object(r.useContext)(E),t=e.setModalVisible,a=e.enable,c=e.productToUpdate,d=function(){var e=Object(l.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(c._id);case 2:if(!e.sent){e.next=4;break}t(null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"form-contain",id:"enableProduct"},n.a.createElement("div",{className:"form-title"},"Habilitar Producto"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-inputs"},n.a.createElement("div",{className:"form-description"},"\xbfEst\xe1 seguro de habilitar Producto: ",n.a.createElement("b",null,c.name,","),n.a.createElement("br",null),"con c\xf3digo de barras: ",n.a.createElement("b",null,c.barcode),"?")),n.a.createElement("div",{className:"form-buttons"},n.a.createElement(j,{onClick:d,text:"Aceptar"}),n.a.createElement(j,{onClick:function(e){t(null)},text:"Cancelar"}))))}function S(){var e=Object(r.useContext)(E),t=e.setModalVisible,a=e.disable,c=e.productToUpdate,d=function(){var e=Object(l.a)(s.a.mark((function e(r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(c._id);case 2:if(!e.sent){e.next=4;break}t(null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"form-contain",id:"disableProduct"},n.a.createElement("div",{className:"form-title"},"Deshabilitar Producto"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-inputs"},n.a.createElement("div",{className:"form-description"},"\xbfEst\xe1 seguro de deshabilitar Producto: ",n.a.createElement("b",null,c.name,","),n.a.createElement("br",null),"con c\xf3digo de barras: ",n.a.createElement("b",null,c.barcode),"?")),n.a.createElement("div",{className:"form-buttons"},n.a.createElement(j,{onClick:d,text:"Aceptar"}),n.a.createElement(j,{onClick:function(e){t(null)},text:"Cancelar"}))))}function M(){var e=Object(r.useContext)(E),t=e.successMessage,a=e.products,c=e.setModalVisible;return n.a.createElement("div",{id:"main"},n.a.createElement(h,null,n.a.createElement(O,{form:"addProduct"})),n.a.createElement(h,null,n.a.createElement(q,{form:"updateProduct"})),n.a.createElement(h,null,n.a.createElement(C,{form:"addPrice"})),n.a.createElement(h,null,n.a.createElement(w,{form:"enableProduct"})),n.a.createElement(h,null,n.a.createElement(S,{form:"disableProduct"})),n.a.createElement("div",{id:"main-title"},"Cat\xe1logo de productos"),n.a.createElement("div",{id:"main-message"},t),n.a.createElement(g,{products:a}),n.a.createElement(j,{onClick:function(){return c("addProduct")},text:"Registrar"}))}var V=function(){return n.a.createElement(x,null,n.a.createElement(u.a,null,n.a.createElement(o.a,{path:"/",exact:!0,component:M})))};d.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(V,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8dbd22f3.chunk.js.map
(this.webpackJsonpgoschreber=this.webpackJsonpgoschreber||[]).push([[0],{113:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c(1),a=c.n(r),n=c(23),i=c.n(n),l=c(10),j=c(14),o=c(8),b=(c(70),c(9)),d=c(121),m=c(134),x=c(122),h=c(123),O=c(12),u=c.n(O),g=c.p+"static/media/carrot.21d529a5.png",f=c(132),v=c(133),N=c(118),p=c(115),k=c(116),z=c(117),w=c(119),y=c(120);var C=function(e){var t=e.favouritedItems,c=e.verein,r=e.favClick,a=c.web,n=c.email,i=function(){return!!t.find((function(e){return e._id===c._id}))};return Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsx)(v.a,{children:Object(s.jsxs)(v.a.Item,{children:[Object(s.jsx)(f.a.Title,{children:c.kgvname}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(s.jsx)(p.a,{className:"mr-2",color:"green",size:17}),c.adresse.strasse,", ",c.adresse.plz," ",c.adresse.stadt]}),n&&Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-2",color:"green",size:17}),c.email]}),a&&Object(s.jsxs)(f.a.Subtitle,{href:c.web,className:"mb-3 text-muted",children:[Object(s.jsx)(z.a,{className:"mr-2",color:"green",size:17}),Object(s.jsx)("a",{className:"mb-3 text-muted",href:c.web,children:c.web})]}),Object(s.jsxs)(N.a,{onClick:r,size:"sm",className:"mb-1 mr-1",variant:"outline-danger",children:[i()?Object(s.jsx)(w.a,{className:"mr-2 mr-1",color:"red",size:17}):Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}),i()?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"mb-1",variant:"outline-danger",children:"Teilen"})]})})})};var _=function(e,t){var c=Object(r.useState)((function(){try{var c=window.localStorage.getItem(e);return c?JSON.parse(c):t}catch(s){return console.log(s),t}})),s=Object(o.a)(c,2),a=s[0],n=s[1];return[a,function(t){try{var c=t instanceof Function?t(a):t;n(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(s){console.log(s)}}]},S=c(37);var T=c(124),F=c(125);var I=function(e){var t=e.kgvs,c=e.favourites,r=e.favouritedItems,a=e.setFavourites,n=function(e){return!!r.find((function(t){return t._id===e}))},i=u.a.icon({iconUrl:g,iconSize:[38,38],shadowSize:[50,64],iconAnchor:[19,38],shadowAnchor:[4,62],popupAnchor:[0,-38]});return Object(s.jsxs)(d.a,{center:[51.330743159430824,12.36348580378971],zoom:13,scrollWheelZoom:!1,children:[Object(s.jsx)(m.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){return Object(s.jsx)(x.a,{icon:i,position:[e.geometry.coordinates[0],e.geometry.coordinates[1]],children:Object(s.jsx)(h.a,{children:Object(s.jsx)(f.a,{border:"success",style:{width:"19rem"},children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsx)(f.a.Title,{children:e.kgvname}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(s.jsx)(p.a,{className:"mr-2",color:"green",size:17}),e.adresse.strasse,", ",e.adresse.plz," ",e.adresse.stadt]}),(r=e.email,!!r&&Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-2",color:"green",size:17}),e.email]})),(t=e.web,!!t&&Object(s.jsxs)(f.a.Subtitle,{href:e.web,className:"mb-3 text-muted",children:[Object(s.jsx)(z.a,{className:"mr-2",color:"green",size:17}),Object(s.jsx)("a",{className:"mb-3 text-muted",href:e.web,children:e.web})]})),Object(s.jsx)(T.a,{className:"justify-content-center",children:Object(s.jsxs)(F.a,{children:[Object(s.jsxs)(N.a,{onClick:function(){return t=e._id,console.log(t),console.log(c.indexOf(t)),void(-1===c.indexOf(t)?a([].concat(Object(j.a)(c),[t])):a(c.filter((function(e){return e!=t}))));var t},size:"sm",className:"m-1 ",variant:"outline-danger",children:[n(e._id)?Object(s.jsx)(w.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}),n(e._id)?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"m-1",variant:"outline-danger",children:"Teilen"})]})})]})})})},e._id);var t,r}))]})},A=c(60),M=c(129),E=c(131);var L=function(){return Object(s.jsx)(T.a,{fluid:!0,children:Object(s.jsx)(F.a,{children:Object(s.jsx)(A.a,{children:Object(s.jsxs)(M.a,{expand:"sm",children:[Object(s.jsx)("img",{src:g,width:"35",height:"35",alt:"React Bootstrap logo"}),Object(s.jsx)("h4",{className:"text-danger mt-2",children:Object(s.jsx)("strong",{children:"GO SCHREBER"})}),Object(s.jsx)(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsx)(M.a.Collapse,{className:"justify-content-end",id:"basic-navbar-nav",children:Object(s.jsxs)(E.a,{children:[Object(s.jsx)(E.a.Item,{className:"ml-6",children:Object(s.jsx)(l.b,{to:"/",children:Object(s.jsx)(N.a,{className:"mr-1",variant:"success",children:"Vereine"})})}),Object(s.jsx)(E.a.Item,{className:"ml-6",children:Object(s.jsx)(E.a.Link,{href:"/frei",children:Object(s.jsx)(N.a,{className:"mr-1",variant:"success",children:"Freie G\xe4rten"})})}),Object(s.jsx)(E.a.Item,{className:"ml-6",children:Object(s.jsx)(E.a.Link,{href:"/inserieren",children:Object(s.jsx)(N.a,{className:"mr-1",variant:"success",children:"Anzeige aufgeben"})})}),Object(s.jsx)(E.a.Item,{className:"ml-6",children:Object(s.jsx)(E.a.Link,{href:"/verwalten",children:Object(s.jsx)(N.a,{className:"mr-1",variant:"success",children:"Anzeigen verwalten"})})}),Object(s.jsx)(E.a.Item,{className:"ml-6",children:Object(s.jsx)(E.a.Link,{href:"/merken",children:Object(s.jsx)(N.a,{variant:"success",children:"Merkliste"})})})]})})]})})})})},B=(c(79),c(128));var G=function(e){var t=e.gaerten,c=e.ownAnzeige,r=e.setMerkFrei,a=e.merkFrei,n=e.merkFreiItems,i=function(e){return!!n.find((function(t){return t._id===e}))},o=u.a.icon({iconUrl:g,iconSize:[38,38],shadowSize:[50,64],iconAnchor:[19,38],shadowAnchor:[4,62],popupAnchor:[0,-38]});return Object(s.jsxs)(d.a,{center:[51.330743159430824,12.36348580378971],zoom:13,scrollWheelZoom:!0,children:[Object(s.jsx)(m.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){return Object(s.jsx)(x.a,{icon:o,position:[e.kgv.geometry.coordinates[0],e.kgv.geometry.coordinates[1]],children:Object(s.jsx)(h.a,{children:Object(s.jsx)(f.a,{border:"success",style:{width:"19rem"},children:Object(s.jsxs)(f.a.Body,{className:"mb-1",children:[Object(s.jsxs)(f.a.Text,{className:"mb-1 text-muted",children:[Object(s.jsx)(p.a,{className:"mr-1",color:"green",size:12}),e.kgv.kgvname]}),Object(s.jsx)(f.a.Title,{className:"mb-1 text-success",children:Object(s.jsx)("h4",{children:e.titel})}),Object(s.jsx)(f.a.Text,{className:"mb-1 mt-1 text-muted text-truncate",children:e.beschreibung}),Object(s.jsx)(f.a.Subtitle,{className:"mb-1 mt-1 text-success",children:Object(s.jsxs)("h5",{children:[e.preis,"\u20ac"]})}),Object(s.jsxs)(F.a,{children:[Object(s.jsx)(l.b,{to:"/frei/".concat(e._id),children:Object(s.jsx)(N.a,{size:"sm",className:"mr-2 ml-3",variant:"outline-danger",children:"Details"})}),Object(s.jsxs)(N.a,{onClick:function(){return t=e._id,console.log(t),console.log(a.indexOf(t)),console.log(c),void(-1===a.indexOf(t)?r([].concat(Object(j.a)(a),[t])):r(a.filter((function(e){return e!=t}))));var t},size:"sm",className:"mr-2 ",variant:"outline-danger",children:[i(e._id)?Object(s.jsx)(w.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}),i(e._id)?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Teilen"})]})]})})})},e._id)}))]})},D=c(7),q=c(130);var J=function(e){var t=e.kgvs,c=e.anzeige,r=e.setAnzeige,a=e.handleSubmit;return Object(s.jsx)(T.a,{children:Object(s.jsx)(F.a,{className:"justify-content-md-center mt-5",children:Object(s.jsx)(A.a,{xs:8,children:Object(s.jsx)(f.a,{border:"success",className:"justify-content-md-center",children:Object(s.jsxs)(q.a,{onSubmit:a,className:"m-3",children:[Object(s.jsx)("h5",{className:"mb-3",children:"Anzeigendetails"}),Object(s.jsxs)(q.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(q.a.Label,{children:"Titel der Anzeige"}),Object(s.jsx)(q.a.Control,{value:c.titel,onChange:function(e){return r(Object(D.a)(Object(D.a)({},c),{},{titel:e.target.value}))},type:"text",name:"titel",as:"textarea",rows:1})]}),Object(s.jsxs)(q.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(q.a.Label,{children:"Beschreibung"}),Object(s.jsx)(q.a.Control,{value:c.beschreibung,onChange:function(e){return r(Object(D.a)(Object(D.a)({},c),{},{beschreibung:e.target.value}))},type:"text",name:"beschreibung",as:"textarea",rows:3})]}),Object(s.jsxs)(F.a,{children:[Object(s.jsx)(A.a,{children:Object(s.jsxs)(q.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(q.a.Label,{children:"Preis"}),Object(s.jsx)(q.a.Control,{value:c.preis,onChange:function(e){return r(Object(D.a)(Object(D.a)({},c),{},{preis:e.target.value}))},type:"text",name:"preis",as:"textarea",rows:1})]})}),Object(s.jsx)(A.a,{children:Object(s.jsxs)(q.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(q.a.Label,{children:"J\xe4hrliche Pachtkosten"}),Object(s.jsx)(q.a.Control,{value:c.pachtkosten,onChange:function(e){return r(Object(D.a)(Object(D.a)({},c),{},{pachtkosten:e.target.value}))},type:"text",name:"pachtkosten",as:"textarea",rows:1})]})}),Object(s.jsx)(A.a,{children:Object(s.jsxs)(q.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(q.a.Label,{children:"Gr\xf6\xdfe"}),Object(s.jsx)(q.a.Control,{value:c.gartenqm,onChange:function(e){return r(Object(D.a)(Object(D.a)({},c),{},{gartenqm:e.target.value}))},type:"text",name:"gartenqm",as:"textarea",rows:1})]})}),Object(s.jsx)(A.a,{children:Object(s.jsxs)(q.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(q.a.Label,{children:"Verf\xfcgbar ab"}),Object(s.jsx)(q.a.Control,{value:c.verf\u00fcgbar,onChange:function(e){return r(Object(D.a)(Object(D.a)({},c),{},{"verf\xfcgbar":e.target.value}))},type:"text",name:"verf\xfcgbar",as:"textarea",rows:1})]})})]}),Object(s.jsxs)(q.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(s.jsx)(q.a.Label,{children:"Kleingartenverein"}),Object(s.jsxs)(q.a.Control,{onChange:function(e){var s=t.filter((function(t){return t.kgvname==e.target.value})).map((function(e){return e._id}));r(Object(D.a)(Object(D.a)({},c),{},{kgv:s}))},type:"",name:"kgvname",as:"select",children:[Object(s.jsx)("option",{children:"bitte ausw\xe4hlen"}),t.map((function(e){return Object(s.jsx)("option",{children:e.kgvname})}))]})]}),Object(s.jsx)("h5",{className:"mb-3",children:"Anbieterdetails"}),Object(s.jsxs)(q.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(q.a.Label,{children:"Name"}),Object(s.jsx)(q.a.Control,{value:c.name,onChange:function(e){return r(Object(D.a)(Object(D.a)({},c),{},{name:e.target.value}))},type:"text",name:"name",as:"textarea",rows:1})]}),Object(s.jsxs)(q.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(q.a.Label,{children:"Email"}),Object(s.jsx)(q.a.Control,{value:c.email,onChange:function(e){return r(Object(D.a)(Object(D.a)({},c),{},{email:e.target.value}))},type:"text",name:"email",as:"textarea",rows:1})]}),Object(s.jsxs)(q.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(s.jsx)(q.a.Label,{children:"Telefonnummer"}),Object(s.jsx)(q.a.Control,{value:c.telefon,onChange:function(e){return r(Object(D.a)(Object(D.a)({},c),{},{telefon:e.target.value}))},type:"text",name:"telefon",as:"textarea",rows:1})]}),Object(s.jsx)(N.a,{variant:"success",type:"submit",children:"Anzeige aufgeben"})]})})})})})},P=c(126),V=c(127);var Z=function(e){var t,c,a,n=e.setMerkFrei,i=e.merkFrei,l=e.merkFreiItems,d=Object(b.g)().id,m=Object(r.useState)(!0),x=Object(o.a)(m,2),h=(x[0],x[1]),O=Object(r.useState)(!1),u=Object(o.a)(O,2),g=(u[0],u[1]),v=Object(r.useState)([]),z=Object(o.a)(v,2),C=z[0],_=z[1];Object(r.useEffect)((function(e){var t="".concat("https://goschreber.herokuapp.com","/anzeigens/").concat(d);h(!0),g(!1),fetch(t).then((function(e){if(console.log(e),!e.ok)throw new Error("Oh noo");return h(!1),e.json()})).then((function(e){return _(e.data)})).catch((function(e){return g(!0)}))}),[]),console.log(C);var S=function(){return!!l.find((function(e){return e._id===C._id}))};return Object(s.jsx)(T.a,{fluid:!0,children:Object(s.jsxs)(F.a,{className:"justify-content-md-center mt-5",children:[Object(s.jsx)(A.a,{xs:6,children:Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsx)(f.a.Img,{className:"mb-3",variant:"top",src:"https://cdn.kiekmo.hamburg/vary/2020/02/listicle-kleingarten-lokstedt-shutterstock_437208574_content-728x410.jpg"}),Object(s.jsx)(f.a.Title,{className:"text-danger",children:Object(s.jsx)("h4",{children:C.titel})}),Object(s.jsxs)(f.a.Text,{className:"text-muted mb-3",children:[Object(s.jsx)(p.a,{className:"mr-1",color:"green",size:12}),' KGV "',null===(t=C.kgv)||void 0===t?void 0:t.kgvname,'", ',null===(c=C.kgv)||void 0===c?void 0:c.adresse.strasse,", ",null===(a=C.kgv)||void 0===a?void 0:a.adresse.plz," Leipzig"]}),Object(s.jsx)(f.a.Subtitle,{className:"mb-3",children:"Beschreibung"}),Object(s.jsx)(f.a.Text,{className:"mb-3",children:C.beschreibung}),Object(s.jsx)(f.a.Subtitle,{className:"mb-2",children:"Details"}),Object(s.jsxs)(F.a,{children:[Object(s.jsx)(A.a,{xs:4,children:Object(s.jsx)(f.a.Text,{className:"mb-1 text-muted",children:"Preis:"})}),Object(s.jsx)(A.a,{xs:2,children:Object(s.jsxs)(f.a.Text,{className:"mb-1",children:[C.preis,"\u20ac"]})}),Object(s.jsx)(A.a,{xs:4,children:Object(s.jsx)(f.a.Text,{className:"mb-1 text-muted",children:"Gartengr\xf6\xdfe:"})}),Object(s.jsx)(A.a,{xs:2,children:Object(s.jsxs)(f.a.Text,{className:"mb-1",children:[C.gartenqm,"qm"]})})]}),Object(s.jsxs)(F.a,{children:[Object(s.jsx)(A.a,{xs:4,children:Object(s.jsx)(f.a.Text,{className:"mb-1 text-muted",children:"J\xe4hrliche Pachtkosten:"})}),Object(s.jsx)(A.a,{xs:2,children:Object(s.jsxs)(f.a.Text,{className:"mb-1",children:[C.pachtkosten,"\u20ac"]})}),Object(s.jsx)(A.a,{xs:4,children:Object(s.jsx)(f.a.Text,{className:"mb-1 text-muted",children:"Verf\xfcgbar ab:"})}),Object(s.jsx)(A.a,{xs:2,children:Object(s.jsx)(f.a.Text,{className:"mb-1",children:C.verf\u00fcgbar})})]})]})})}),Object(s.jsx)(A.a,{xs:3,children:Object(s.jsx)(F.a,{children:Object(s.jsx)(f.a,{border:"success",style:{width:"18rem"},children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsxs)(N.a,{onClick:function(){return e=C._id,void(-1===i.indexOf(e)?n([].concat(Object(j.a)(i),[e])):n(i.filter((function(t){return t!=e}))));var e},className:"mr-2 ",variant:"outline-danger",block:!0,children:[S()?Object(s.jsx)(w.a,{className:"mr-2",color:"red",size:18}):Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:18}),S()?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{className:"mr-1",variant:"outline-danger",block:!0,children:"Teilen"}),Object(s.jsxs)(f.a.Subtitle,{className:"mt-3 mb-2",children:[Object(s.jsx)(P.a,{className:"mr-3",color:"green",size:17}),C.name]}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2",children:[Object(s.jsx)(k.a,{className:"mr-3",color:"green",size:17}),C.email]}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2",children:[Object(s.jsx)(V.a,{className:"mr-3",color:"green",size:17}),C.telefon]})]})})})})]})})};var R=function(e){var t=e.freigarten,c=e.merkClick,r=e.merkFreiItems,a=function(){return!!r.find((function(e){return e._id===t._id}))};return Object(s.jsx)(T.a,{children:Object(s.jsx)(F.a,{children:Object(s.jsx)(f.a,{border:"success",className:"mb-1",style:{width:"26rem"},children:Object(s.jsxs)(f.a.Body,{className:"m-1",children:[Object(s.jsx)(F.a,{children:Object(s.jsxs)("p",{className:"mb-2 text-muted",children:[Object(s.jsx)(p.a,{className:"mr-1",color:"green",size:12}),t.kgv.kgvname]})}),Object(s.jsx)(F.a,{children:Object(s.jsx)(f.a.Title,{children:t.titel})}),Object(s.jsx)(F.a,{children:Object(s.jsx)("p",{className:"mb-2 text-muted row-3 text-truncate",children:t.beschreibung})}),Object(s.jsx)(F.a,{children:Object(s.jsx)("h5",{className:"text-success",children:Object(s.jsxs)("strong",{children:[t.preis,"\u20ac"]})})}),Object(s.jsxs)(F.a,{children:[Object(s.jsx)(l.b,{to:"/frei/".concat(t._id),children:Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Details"})}),Object(s.jsxs)(N.a,{onClick:c,size:"sm",className:"mr-2 ",variant:"outline-danger",children:[a()?Object(s.jsx)(w.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}),a()?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Teilen"})]})]})})})})};var U=function(e){var t=e.favouritedItems,c=e.merkFreiItems,r=e.setFavourites,a=e.favourites,n=e.setMerkFrei,i=e.merkFrei,o=function(e){return!!t.find((function(t){return t._id===e}))},b=function(e){return!!c.find((function(t){return t._id===e}))},O=u.a.icon({iconUrl:g,iconSize:[38,38],shadowSize:[50,64],iconAnchor:[19,38],shadowAnchor:[4,62],popupAnchor:[0,-38]});return Object(s.jsxs)(d.a,{center:[51.330743159430824,12.36348580378971],zoom:13,scrollWheelZoom:!1,children:[Object(s.jsx)(m.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){return Object(s.jsx)(x.a,{icon:O,position:[e.geometry.coordinates[0],e.geometry.coordinates[1]],children:Object(s.jsx)(h.a,{children:Object(s.jsx)(f.a,{border:"success",style:{width:"19rem"},children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsx)(f.a.Title,{children:e.kgvname}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(s.jsx)(p.a,{className:"mr-2",color:"green",size:17}),e.adresse.strasse,", ",e.adresse.plz," ",e.adresse.stadt]}),(c=e.email,!!c&&Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(s.jsx)(k.a,{className:"mr-2",color:"green",size:17}),e.email]})),(t=e.web,!!t&&Object(s.jsxs)(f.a.Subtitle,{href:e.web,className:"mb-3 text-muted",children:[Object(s.jsx)(z.a,{className:"mr-2",color:"green",size:17}),Object(s.jsx)("a",{className:"mb-3 text-muted",href:e.web,children:e.web})]})),Object(s.jsx)(T.a,{className:"justify-content-center",children:Object(s.jsxs)(F.a,{children:[Object(s.jsxs)(N.a,{onClick:function(){return t=e._id,console.log(t),console.log(a.indexOf(t)),void(-1===a.indexOf(t)?r([].concat(Object(j.a)(a),[t])):r(a.filter((function(e){return e!=t}))));var t},size:"sm",className:"m-1 ",variant:"outline-danger",children:[o(e._id)?Object(s.jsx)(w.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}),o(e._id)?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"m-1",variant:"outline-danger",children:"Teilen"})]})})]})})})},e._id);var t,c})),c.map((function(e){return Object(s.jsx)(x.a,{icon:O,position:[e.kgv.geometry.coordinates[0],e.kgv.geometry.coordinates[1]],children:Object(s.jsx)(h.a,{children:Object(s.jsx)(f.a,{border:"success",children:Object(s.jsxs)(f.a.Body,{className:"mb-1 mt-1",children:[Object(s.jsxs)(f.a.Text,{className:"mb-1 text-muted",children:[Object(s.jsx)(p.a,{className:"mr-1",color:"green",size:12}),e.kgv.kgvname]}),Object(s.jsx)(f.a.Title,{className:"mb-1 text-success",children:Object(s.jsx)("h4",{children:e.titel})}),Object(s.jsx)(f.a.Text,{className:"mb-1 mt-1 text-muted text-truncate",children:e.beschreibung}),Object(s.jsx)(f.a.Subtitle,{className:"mb-1 mt-1 text-success",children:Object(s.jsxs)("h5",{children:[e.preis,"\u20ac"]})}),Object(s.jsxs)(F.a,{children:[Object(s.jsx)(l.b,{to:"/frei/".concat(e._id),children:Object(s.jsx)(N.a,{size:"sm",className:"mr-2 ml-3",variant:"outline-danger",children:"Details"})}),Object(s.jsxs)(N.a,{onClick:function(){return t=e._id,console.log(t),console.log(i.indexOf(t)),void(-1===i.indexOf(t)?n([].concat(Object(j.a)(i),[t])):n(i.filter((function(e){return e!=t}))));var t},size:"sm",className:"mr-2 ",variant:"outline-danger",children:[b(e._id)?Object(s.jsx)(w.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}),b(e._id)?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Teilen"})]})]})})})},e._id)}))]})};var W=function(e){var t=e.merkClick,c=e.freigarten,r=e.merkFreiItems,a=function(){return!!r.find((function(e){return e._id===c._id}))};return Object(s.jsx)(T.a,{children:Object(s.jsx)(F.a,{children:Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(v.a,{className:"m=1",children:[Object(s.jsxs)(v.a.Item,{children:[Object(s.jsxs)("p",{className:"mb-2 text-muted",children:[Object(s.jsx)(p.a,{className:"mr-1",color:"green",size:12}),c.kgv.kgvname]}),Object(s.jsx)(f.a.Title,{children:c.titel}),Object(s.jsx)("p",{className:"mb-2 text-muted row-3 text-truncate",children:c.beschreibung}),Object(s.jsx)("h5",{className:"text-success",children:Object(s.jsxs)("strong",{children:[c.preis,"\u20ac"]})})]}),Object(s.jsxs)(v.a.Item,{children:[Object(s.jsxs)(f.a.Subtitle,{className:"mb-2",children:[Object(s.jsx)(P.a,{className:"mr-3",color:"green",size:17}),c.name]}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2",children:[Object(s.jsx)(k.a,{className:"mr-3",color:"green",size:17}),c.email]}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2",children:[Object(s.jsx)(V.a,{className:"mr-3",color:"green",size:17}),c.telefon]})]}),Object(s.jsxs)(v.a.Item,{children:[Object(s.jsx)(l.b,{to:"/frei/".concat(c._id),children:Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Details"})}),Object(s.jsxs)(N.a,{onClick:t,size:"sm",className:"mr-2 ",variant:"outline-danger",children:[a()?Object(s.jsx)(w.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}),a()?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-danger",children:"Teilen"})]})]})})})})};var K=function(e){var t=e.favouritedItems,c=e.favClick,r=e.verein,a=r.web,n=r.email,i=function(){return!!t.find((function(e){return e._id===r._id}))};return Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{children:[Object(s.jsx)(f.a.Title,{children:r.kgvname}),Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted text-truncate",children:[Object(s.jsx)(p.a,{className:"mr-2",color:"green",size:17}),r.adresse.strasse,", ",r.adresse.plz," ",r.adresse.stadt]}),n&&Object(s.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted text-truncate",children:[Object(s.jsx)(k.a,{className:"mr-2",color:"green",size:17}),r.email]}),a&&Object(s.jsxs)(f.a.Subtitle,{href:r.web,className:"mb-3 text-muted text-truncate",children:[Object(s.jsx)(z.a,{className:"mr-2",color:"green",size:17}),Object(s.jsx)("a",{className:"mb-3 text-muted",href:r.web,children:r.web})]}),Object(s.jsx)(T.a,{className:"justify-content-center",children:Object(s.jsxs)(F.a,{children:[Object(s.jsxs)(N.a,{onClick:c,size:"sm",className:"mb-1 mr-1 ",variant:"outline-danger",children:[i()?Object(s.jsx)(w.a,{className:"mr-2",color:"red",size:17}):Object(s.jsx)(y.a,{className:"mr-2",color:"red",size:17}),i()?"Entfernen":"Merken"]}),Object(s.jsx)(N.a,{size:"sm",className:"mb-1 mr-1",variant:"outline-danger",children:"Teilen"})]})})]})})},H=c(38),Q=c.n(H);var X=function(e){var t,c=e.eigAnzeige,a=(e.setOwnAnzeige,e.ownAnzeige,c._id),n=Object(r.useState)(!1),i=Object(o.a)(n,2),j=i[0],b=i[1];return Object(s.jsx)(T.a,{children:Object(s.jsx)(F.a,{children:Object(s.jsx)(A.a,{children:j?Object(s.jsx)(f.a,{className:"mb-1",border:"success",children:Object(s.jsx)(f.a.Body,{className:"mt-1",children:Object(s.jsx)(f.a.Title,{children:Object(s.jsx)("h4",{children:"Anzeige gel\xf6scht"})})})}):Object(s.jsx)(f.a,{border:"success",className:"mb-1",children:Object(s.jsxs)(f.a.Body,{className:"m-1",children:[Object(s.jsx)(F.a,{children:Object(s.jsxs)("p",{className:"mb-2 text-muted",children:[Object(s.jsx)(p.a,{className:"mr-1",color:"green",size:12}),null===(t=c.kgv)||void 0===t?void 0:t.kgvname]})}),Object(s.jsx)(F.a,{children:Object(s.jsx)(f.a.Title,{children:c.titel})}),Object(s.jsx)(F.a,{children:Object(s.jsx)("p",{className:"mb-2 text-muted row-3 text-truncate",children:c.beschreibung})}),Object(s.jsx)(F.a,{children:Object(s.jsx)("h5",{className:"text-success",children:Object(s.jsxs)("strong",{children:[c.preis,"\u20ac"]})})}),Object(s.jsxs)(F.a,{children:[Object(s.jsx)(N.a,{onClick:function(){Q.a.delete("https://goschreber.herokuapp.com/anzeigens/"+a).then((function(e){console.log(e),b(!0)}))},size:"sm",className:"mr-2",variant:"danger",children:"L\xf6schen"}),Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"success",children:"Bearbeiten"}),Object(s.jsx)(l.b,{to:"/frei/".concat(c._id),children:Object(s.jsx)(N.a,{size:"sm",className:"mr-2",variant:"outline-success",children:"Details"})})]})]})})})})})},Y=c(29);var $=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)(!0),i=Object(o.a)(n,2),l=(i[0],i[1]),d=Object(r.useState)(!1),m=Object(o.a)(d,2),x=(m[0],m[1]),h=Object(r.useState)([]),O=Object(o.a)(h,2),u=O[0],g=O[1],f=Object(r.useState)({titel:"",beschreibung:"",kgv:"",pachtkosten:"",preis:"","verf\xfcgbar":"",gartemqm:"",name:"",email:"",telefon:""}),v=Object(o.a)(f,2),p=v[0],k=v[1],z=_("anzeigen",[]),w=Object(o.a)(z,2),y=w[0],M=w[1],E=_("favourite",[]),D=Object(o.a)(E,2),q=D[0],P=D[1],V=Object(b.f)();Object(r.useEffect)((function(e){var t="".concat("https://goschreber.herokuapp.com","/kgvs");l(!0),x(!1),fetch(t).then((function(e){if(console.log(e),!e.ok)throw new Error("Oh noo");return l(!1),e.json()})).then((function(e){return a(e.data)})).catch((function(e){return x(!0)}))}),[]),Object(r.useEffect)((function(e){var t="".concat("https://goschreber.herokuapp.com","/anzeigens");l(!0),x(!1),fetch(t).then((function(e){if(console.log(e),!e.ok)throw new Error("Oh noo");return l(!1),e.json()})).then((function(e){return g(e.data)})).catch((function(e){return x(!0)}))}),[]);var H=u.filter((function(e){var t=e._id;return-1!=y.indexOf(t)}));function $(e){console.log(e),console.log(q.indexOf(e)),-1===q.indexOf(e)?P([].concat(Object(j.a)(q),[e])):P(q.filter((function(t){return t!=e})))}var ee=c.filter((function(e){var t=e._id;return-1!=q.indexOf(t)}));console.log(ee);var te=_("merkFreiGarten",[]),ce=Object(o.a)(te,2),se=ce[0],re=ce[1];function ae(e){console.log(e),console.log(se.indexOf(e)),-1===se.indexOf(e)?re([].concat(Object(j.a)(se),[e])):re(se.filter((function(t){return t!=e})))}var ne=u.filter((function(e){var t=e._id;return-1!=se.indexOf(t)}));return console.log(ne),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(L,{}),Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{exact:!0,path:"/",children:Object(s.jsx)(T.a,{fluid:!0,children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)(A.a,{xs:8,children:Object(s.jsx)(I,{favouritedItems:ee,favourites:q,setFavourites:P,kgvs:c})}),Object(s.jsx)(A.a,{children:Object(s.jsx)(Y.Scrollbars,{style:{width:"100%",height:"100%"},children:c.map((function(e){return Object(s.jsx)(C,{favouritedItems:ee,favClick:function(){return $(e._id)},verein:e},e._id)}))})})]})})}),Object(s.jsx)(b.a,{exact:!0,path:"/frei",children:Object(s.jsx)(T.a,{fluid:!0,children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)(A.a,{xs:8,children:Object(s.jsx)(G,{ownAnzeige:y,setMerkFrei:re,merkFrei:se,merkFreiItems:ne,gaerten:u,kgvs:c})}),Object(s.jsx)(A.a,{children:Object(s.jsx)(Y.Scrollbars,{style:{width:"100%",height:"100%"},children:u.map((function(e){return Object(s.jsx)(R,{merkFreiItems:ne,merkClick:function(){return ae(e._id)},freigarten:e},e._id)}))})})]})})}),Object(s.jsx)(b.a,{path:"/frei/:id",children:Object(s.jsx)(Z,{setMerkFrei:re,merkFrei:se,merkFreiItems:ne})}),Object(s.jsx)(b.a,{exact:!0,path:"/inserieren",children:Object(s.jsx)(J,{handleSubmit:function(e){e.preventDefault(),Q.a.post("https://goschreber.herokuapp.com/anzeigens",p).then((function(e){var t=e.data.data._id;M([].concat(Object(j.a)(y),[t])),V.push("frei/".concat(t))}))},anzeige:p,setAnzeige:k,gaerten:u,kgvs:c})}),Object(s.jsx)(b.a,{exact:!0,path:"/verwalten",children:Object(s.jsx)(T.a,{className:"mt-4",fluid:!0,children:Object(s.jsxs)(F.a,{children:[Object(s.jsx)(A.a,{xs:8,children:Object(s.jsx)(B.a,{src:"https://www.leipzig-lese.de/media_leipzig_lese/schreber_kopfbild_dsc04811.jpg",fluid:!0,rounded:!0})}),Object(s.jsx)(A.a,{children:H.map((function(e){return Object(s.jsx)(X,{ownAnzeige:y,setOwnAnzeige:M,eigAnzeige:e},e._id)}))})]})})}),Object(s.jsx)(b.a,{exact:!0,path:"/merken",children:Object(s.jsx)(T.a,{fluid:!0,children:Object(s.jsxs)(F.a,{children:[Object(s.jsxs)(A.a,{children:[Object(s.jsx)("h4",{className:"text-center mb-3",children:"Merkliste Vereine"}),Object(s.jsx)(S.CopyToClipboard,{text:ee.map((function(e){return e.email})),children:Object(s.jsx)(N.a,{className:"mb-2",variant:"outline-success",children:"Alle Email-Adressen in die Zwischenablage kopieren"})}),Object(s.jsx)(Y.Scrollbars,{style:{width:"100%",height:"100%"},children:ee.map((function(e){return Object(s.jsx)(K,{favClick:function(){return $(e._id)},verein:e,favouritedItems:ee,setFavourites:P,favourites:q},e._id)}))})]}),Object(s.jsx)(A.a,{xs:6,children:Object(s.jsx)(U,{favouritedItems:ee,setFavourites:P,favourites:q,merkFreiItems:ne,setMerkFrei:re,merkFrei:se})}),Object(s.jsxs)(A.a,{children:[Object(s.jsx)("h4",{className:"text-center mb-3",children:"Merkliste G\xe4rten"}),Object(s.jsx)(S.CopyToClipboard,{text:ne.map((function(e){return e.email})),children:Object(s.jsx)(N.a,{className:"mb-2",variant:"outline-success",children:"Alle Email-Adressen in die Zwischenablage kopieren"})}),Object(s.jsx)(Y.Scrollbars,{style:{width:"100%",height:"100%"},children:ne.map((function(e){return Object(s.jsx)(W,{merkClick:function(){return ae(e._id)},freigarten:e,merkFreiItems:ne,setMerkFrei:re,merkFrei:se},e._id)}))})]})]})})})]})]})},ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,135)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),r(e),a(e),n(e)}))};c(112);i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(l.a,{children:Object(s.jsx)($,{})})}),document.getElementById("root")),ee()},70:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.52f28eac.chunk.js.map
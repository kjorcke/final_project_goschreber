(this.webpackJsonpgoschreber=this.webpackJsonpgoschreber||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a(0),r=a.n(n),s=a(20),i=a.n(s),l=a(42),j=a(10),o=(a(67),a(39)),b=a(8),d=a(118),h=a(125),x=a(119),u=a(120),O=a(12),m=a.n(O),g=a.p+"static/media/carrot.21d529a5.png",f=a(124),v=a(115),p=a(116),k=a(117),C=a(112),y=a(113),N=a(114);var w=function(e){var t=e.favouritedItems,a=e.verein,r=e.favClick,s=Object(n.useState)(!1),i=Object(j.a)(s,2),l=(i[0],i[1],a.web);return t.filter((function(e){return e._id===a._id})),Object(c.jsx)(f.a,{border:"success",className:"mb-1",children:Object(c.jsxs)(f.a.Body,{children:[Object(c.jsx)(f.a.Title,{children:a.kgvname}),Object(c.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(c.jsx)(C.a,{className:"mr-2",color:"green",size:17}),a.adresse.strasse,", ",a.adresse.plz," ",a.adresse.stadt]}),Object(c.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[Object(c.jsx)(y.a,{className:"mr-2",color:"green",size:17}),a.email]}),l&&Object(c.jsxs)(f.a.Subtitle,{href:a.web,className:"mb-3 text-muted",children:[Object(c.jsx)(N.a,{className:"mr-2",color:"green",size:17}),Object(c.jsx)("a",{className:"mb-3 text-muted",href:a.web,children:a.web})]}),Object(c.jsx)(v.a,{className:"justify-content-center",children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)(k.a,{onClick:r,size:"sm",className:"m-1 ",variant:"outline-danger",children:"Merken"}),Object(c.jsx)(k.a,{size:"sm",className:"m-1",variant:"outline-danger",children:"Teilen"})]})})]})})};var z=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(c){return console.log(c),t}})),c=Object(j.a)(a,2),r=c[0],s=c[1];return[r,function(t){try{var a=t instanceof Function?t(r):t;s(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(c){console.log(c)}}]},S=a(29);var T=function(e){var t=e.verein;return Object(c.jsxs)("div",{className:"favouritecard",children:[Object(c.jsx)("div",{children:t.kgvname}),Object(c.jsx)("div",{children:t.adresse.strasse}),Object(c.jsx)("div",{children:t.email})]})};var I=function(e){var t=e.kgvs,a=(e.favouriteGarden,e.favouritedItems,m.a.icon({iconUrl:g,iconSize:[38,38],shadowSize:[50,64],iconAnchor:[19,38],shadowAnchor:[4,62],popupAnchor:[0,-38]}));return Object(c.jsxs)(d.a,{center:[51.330743159430824,12.36348580378971],zoom:13,scrollWheelZoom:!1,children:[Object(c.jsx)(h.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){return Object(c.jsx)(x.a,{icon:a,position:[e.geometry.coordinates[0],e.geometry.coordinates[1]],children:Object(c.jsx)(u.a,{children:Object(c.jsx)(f.a,{className:"mb-1",style:{width:"15rem"},children:Object(c.jsxs)(f.a.Body,{children:[Object(c.jsx)(f.a.Title,{children:e.kgvname}),Object(c.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[e.adresse.strasse,", ",e.adresse.plz," ",e.adresse.stadt]}),Object(c.jsx)(f.a.Subtitle,{className:"mb-2 text-muted",children:e.email}),Object(c.jsx)(f.a.Subtitle,{className:"mb-2 text-muted",children:e.web}),Object(c.jsx)(k.a,{size:"sm",className:"mb-1",variant:"primary",children:"Add to Favourites"}),Object(c.jsx)(S.CopyToClipboard,{text:e.email,children:Object(c.jsx)(k.a,{size:"sm",style:{backgroundColor:"#234"},variant:"primary",children:"Clipboard Email"})})]})})})},e._id)}))]})},L=a(55),F=a(121),A=a(123);var _=function(){return Object(c.jsx)(v.a,{fluid:!0,children:Object(c.jsx)(p.a,{children:Object(c.jsx)(L.a,{children:Object(c.jsxs)(F.a,{expand:"xl",children:[Object(c.jsx)(F.a.Brand,{href:"#",children:"Go Schreber"}),Object(c.jsx)(F.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(F.a.Collapse,{className:"justify-content-end",id:"basic-navbar-nav",children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(A.a.Item,{className:"ml-6",children:Object(c.jsx)(A.a.Link,{eventKey:"home",href:"/",children:Object(c.jsx)(k.a,{variant:"success",children:"Vereine"})})}),Object(c.jsx)(A.a.Item,{className:"ml-6",children:Object(c.jsx)(A.a.Link,{eventKey:"frei",href:"/frei",children:Object(c.jsx)(k.a,{variant:"success",children:"Freie G\xe4rten"})})}),Object(c.jsx)(A.a.Item,{className:"ml-6",children:Object(c.jsx)(A.a.Link,{href:"/inserieren",children:Object(c.jsx)(k.a,{variant:"success",children:"Anzeige aufgeben"})})}),Object(c.jsx)(A.a.Item,{className:"ml-6",children:Object(c.jsx)(A.a.Link,{href:"/verwalten",children:Object(c.jsx)(k.a,{variant:"success",children:"Anzeigen verwalten"})})}),Object(c.jsx)(A.a.Item,{className:"ml-6",children:Object(c.jsx)(A.a.Link,{href:"/merken",children:Object(c.jsx)(k.a,{variant:"success",children:"Merkliste"})})})]})})]})})})})};a(74);var G=function(e){var t=e.freigarten;return Object(c.jsx)(v.a,{children:Object(c.jsx)(p.a,{children:Object(c.jsx)(f.a,{border:"success",className:"mb-1",children:Object(c.jsxs)(f.a.Body,{className:"m-1",children:[Object(c.jsx)(p.a,{children:Object(c.jsxs)("p",{className:"mb-2 text-muted",children:[Object(c.jsx)(C.a,{className:"mr-1",color:"green",size:12}),t.kgv.kgvname]})}),Object(c.jsx)(p.a,{children:Object(c.jsx)(f.a.Title,{children:t.titel})}),Object(c.jsx)(p.a,{children:Object(c.jsx)("p",{className:"mb-2 text-muted row-3 text-truncate",children:t.beschreibung})}),Object(c.jsx)(p.a,{children:Object(c.jsx)("h5",{className:"text-success",children:Object(c.jsxs)("strong",{children:[t.preis,"\u20ac"]})})}),Object(c.jsxs)(p.a,{children:[Object(c.jsx)(k.a,{size:"sm",className:"mr-1",variant:"outline-danger",children:"Merken"}),Object(c.jsx)(k.a,{size:"sm",className:"mr-1",variant:"outline-danger",children:"Teilen"})]})]})})})})},B=a(30);var E=function(e){var t=e.gaerten,a=m.a.icon({iconUrl:g,iconSize:[38,38],shadowSize:[50,64],iconAnchor:[19,38],shadowAnchor:[4,62],popupAnchor:[0,-38]});return Object(c.jsx)(v.a,{fluid:!0,children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)(L.a,{xs:8,children:Object(c.jsxs)(d.a,{center:[51.330743159430824,12.36348580378971],zoom:13,scrollWheelZoom:!0,children:[Object(c.jsx)(h.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),t.map((function(e){return Object(c.jsx)(x.a,{icon:a,position:[e.kgv.geometry.coordinates[0],e.kgv.geometry.coordinates[1]],children:Object(c.jsx)(u.a,{children:Object(c.jsx)(f.a,{className:"mb-1",style:{width:"15rem"},children:Object(c.jsx)(f.a.Body,{children:Object(c.jsx)(f.a.Title,{children:e.kgv.kgvname})})})})},e._id)}))]})}),Object(c.jsx)(L.a,{children:Object(c.jsx)(B.Scrollbars,{style:{width:"100%",height:"100%"},children:t.map((function(e){return Object(c.jsx)(G,{freigarten:e},e._id)}))})})]})})},q=a(6),M=a(122);var J=function(e){var t=e.kgvs,a=e.anzeige,n=e.setAnzeige,r=e.handleSubmit;return Object(c.jsx)(v.a,{children:Object(c.jsx)(p.a,{className:"justify-content-md-center mt-5",children:Object(c.jsx)(L.a,{xs:8,children:Object(c.jsx)(f.a,{border:"success",className:"justify-content-md-center",children:Object(c.jsxs)(M.a,{onSubmit:r,className:"m-3",children:[Object(c.jsx)("h5",{className:"mb-3",children:"Anzeigendetails"}),Object(c.jsxs)(M.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(M.a.Label,{children:"Titel der Anzeige"}),Object(c.jsx)(M.a.Control,{value:a.titel,onChange:function(e){return n(Object(q.a)(Object(q.a)({},a),{},{titel:e.target.value}))},type:"text",name:"titel",as:"textarea",rows:1})]}),Object(c.jsxs)(M.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(M.a.Label,{children:"Beschreibung"}),Object(c.jsx)(M.a.Control,{value:a.beschreibung,onChange:function(e){return n(Object(q.a)(Object(q.a)({},a),{},{beschreibung:e.target.value}))},type:"text",name:"beschreibung",as:"textarea",rows:3})]}),Object(c.jsxs)(p.a,{children:[Object(c.jsx)(L.a,{children:Object(c.jsxs)(M.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(M.a.Label,{children:"Preis"}),Object(c.jsx)(M.a.Control,{value:a.preis,onChange:function(e){return n(Object(q.a)(Object(q.a)({},a),{},{preis:e.target.value}))},type:"text",name:"preis",as:"textarea",rows:1})]})}),Object(c.jsx)(L.a,{children:Object(c.jsxs)(M.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(M.a.Label,{children:"J\xe4hrliche Pachtkosten"}),Object(c.jsx)(M.a.Control,{value:a.pachtkosten,onChange:function(e){return n(Object(q.a)(Object(q.a)({},a),{},{pachtkosten:e.target.value}))},type:"text",name:"pachtkosten",as:"textarea",rows:1})]})}),Object(c.jsx)(L.a,{children:Object(c.jsxs)(M.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(M.a.Label,{children:"Gr\xf6\xdfe"}),Object(c.jsx)(M.a.Control,{value:a.gartenqm,onChange:function(e){return n(Object(q.a)(Object(q.a)({},a),{},{gartenqm:e.target.value}))},type:"text",name:"gartenqm",as:"textarea",rows:1})]})}),Object(c.jsx)(L.a,{children:Object(c.jsxs)(M.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(M.a.Label,{children:"Verf\xfcgbar ab"}),Object(c.jsx)(M.a.Control,{value:a.verf\u00fcgbar,onChange:function(e){return n(Object(q.a)(Object(q.a)({},a),{},{"verf\xfcgbar":e.target.value}))},type:"text",name:"verf\xfcgbar",as:"textarea",rows:1})]})})]}),Object(c.jsxs)(M.a.Group,{controlId:"exampleForm.ControlSelect1",children:[Object(c.jsx)(M.a.Label,{children:"Kleingartenverein"}),Object(c.jsxs)(M.a.Control,{onChange:function(e){var c=t.filter((function(t){return t.kgvname==e.target.value})).map((function(e){return e._id}));n(Object(q.a)(Object(q.a)({},a),{},{kgv:c}))},type:"",name:"kgvname",as:"select",children:[Object(c.jsx)("option",{children:"bitte ausw\xe4hlen"}),t.map((function(e){return Object(c.jsx)("option",{children:e.kgvname})}))]})]}),Object(c.jsx)("h5",{className:"mb-3",children:"Anbieterdetails"}),Object(c.jsxs)(M.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(M.a.Label,{children:"Name"}),Object(c.jsx)(M.a.Control,{value:a.name,onChange:function(e){return n(Object(q.a)(Object(q.a)({},a),{},{name:e.target.value}))},type:"text",name:"name",as:"textarea",rows:1})]}),Object(c.jsxs)(M.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(M.a.Label,{children:"Email"}),Object(c.jsx)(M.a.Control,{value:a.email,onChange:function(e){return n(Object(q.a)(Object(q.a)({},a),{},{email:e.target.value}))},type:"text",name:"email",as:"textarea",rows:1})]}),Object(c.jsxs)(M.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(M.a.Label,{children:"Telefonnummer"}),Object(c.jsx)(M.a.Control,{value:a.telefon,onChange:function(e){return n(Object(q.a)(Object(q.a)({},a),{},{telefon:e.target.value}))},type:"text",name:"telefon",as:"textarea",rows:1})]}),Object(c.jsx)(k.a,{variant:"success",type:"submit",children:"Anzeige aufgeben"})]})})})})})},P=a(31),K=a.n(P);var D=function(e){var t=e.anzeige,a=t._id;return console.log(a),Object(c.jsx)(v.a,{children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)(L.a,{children:Object(c.jsx)(f.a,{className:"mb-1",style:{width:"25rem"},children:Object(c.jsxs)(f.a.Body,{children:[Object(c.jsx)(f.a.Title,{children:t.titel}),Object(c.jsx)(f.a.Subtitle,{className:"mb-2 text-muted",children:t.beschreibung}),Object(c.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[t.preis,"\u20ac"]}),Object(c.jsxs)(f.a.Subtitle,{className:"mb-2 text-muted",children:[t.gartenqm,"qm"]})]})})}),Object(c.jsxs)(L.a,{children:[Object(c.jsx)(k.a,{onClick:function(){return function(e){K.a.delete("http://localhost:5000/anzeigens/"+e).then((function(e){return console.log(e.data)}))}(t._id)},variant:"success",children:"L\xf6schen"}),Object(c.jsx)(k.a,{variant:"success",children:"Bearbeiten"})]})]})})};var U=function(e){var t=e.userAnzeigen;return Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)(D,{anzeige:e},e._id)}))})};var V=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!0),i=Object(j.a)(s,2),d=(i[0],i[1]),h=Object(n.useState)(!1),x=Object(j.a)(h,2),u=(x[0],x[1]),O=Object(n.useState)([]),m=Object(j.a)(O,2),g=m[0],f=m[1],k=Object(n.useState)({titel:"",beschreibung:"",kgv:"",pachtkosten:"",preis:"","verf\xfcgbar":"",gartemqm:"",name:"",email:"",telefon:""}),C=Object(j.a)(k,2),y=C[0],N=C[1],F=z("anzeigen",[]),A=Object(j.a)(F,2),G=A[0],q=A[1];Object(b.f)(),Object(n.useEffect)((function(e){var t="".concat("https://goschreber.herokuapp.com","/kgvs");d(!0),u(!1),fetch(t).then((function(e){if(console.log(e),!e.ok)throw new Error("Oh noo");return d(!1),e.json()})).then((function(e){return r(e.data)})).catch((function(e){return u(!0)}))}),[]),Object(n.useEffect)((function(e){var t="".concat("https://goschreber.herokuapp.com","/anzeigens");d(!0),u(!1),fetch(t).then((function(e){if(console.log(e),!e.ok)throw new Error("Oh noo");return d(!1),e.json()})).then((function(e){return f(e.data)})).catch((function(e){return u(!0)}))}),[]);var M=g.filter((function(e){var t=e._id;return-1!=G.indexOf(t)})),P=z("favourite",[]),D=Object(j.a)(P,2),V=D[0],W=D[1];function Z(e){console.log(e),console.log(V.indexOf(e)),-1===V.indexOf(e)?W([].concat(Object(l.a)(V),[e])):W(V.filter((function(t){return t!=e})))}var H=a.filter((function(e){var t=e._id;return-1!=V.indexOf(t)}));return console.log(H),Object(c.jsxs)(o.a,{children:[Object(c.jsx)(_,{}),Object(c.jsxs)(b.c,{children:[Object(c.jsx)(b.a,{exact:!0,path:"/",children:Object(c.jsx)(v.a,{fluid:!0,children:Object(c.jsxs)(p.a,{children:[Object(c.jsx)(L.a,{xs:9,children:Object(c.jsx)(I,{kgvs:a})}),Object(c.jsx)(L.a,{children:Object(c.jsx)(B.Scrollbars,{style:{width:"100%",height:"100%"},children:a.map((function(e){return Object(c.jsx)(w,{favouritedItems:H,favClick:function(){return Z(e._id)},verein:e},e._id)}))})})]})})}),Object(c.jsx)(b.a,{exact:!0,path:"/frei",children:Object(c.jsx)(E,{gaerten:g,kgvs:a})}),Object(c.jsx)(b.a,{exact:!0,path:"/inserieren",children:Object(c.jsx)(J,{handleSubmit:function(e){e.preventDefault(),K.a.post("https://goschreber.herokuapp.com/anzeigens",y).then((function(e){var t=e.data.data._id;q([].concat(Object(l.a)(G),[t]))}))},anzeige:y,setAnzeige:N,gaerten:g,kgvs:a})}),Object(c.jsx)(b.a,{exact:!0,path:"/verwalten",children:Object(c.jsx)(U,{userAnzeigen:M,gaerten:g,kgvs:a})}),Object(c.jsxs)(b.a,{exact:!0,path:"/merken",children:[Object(c.jsx)("h2",{children:"Favourite List"}),Object(c.jsx)(S.CopyToClipboard,{text:H.map((function(e){return e.email})),children:Object(c.jsx)("button",{children:"clipboard all email addresses"})}),H.map((function(e){return Object(c.jsx)(T,{favClick:function(){return Z(e._id)},verein:e},e._id)}))]})]})]})},W=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,126)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};a(109);i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(V,{})}),document.getElementById("root")),W()},67:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.e3188ee5.chunk.js.map
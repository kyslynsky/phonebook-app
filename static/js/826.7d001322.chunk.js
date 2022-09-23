"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[826],{3309:function(n,e,t){t.d(e,{FV:function(){return m},LD:function(){return h},Oc:function(){return v},QG:function(){return g},l0:function(){return x},vZ:function(){return b}});var r,a,i,o,u,c,s=t(168),d=t(6031),l=t(9121),p=t(6355),f=t(7425),x=d.default.form(r||(r=(0,s.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),h=(0,d.default)(l.__)(a||(a=(0,s.Z)(["\n  flex-direction: row;\n  align-items: center;\n"]))),m=(0,d.default)(l.II)(i||(i=(0,s.Z)(["\n  min-width: 280px;\n  margin-top: 3px;\n  font-weight: 500;\n"]))),v=(0,d.default)(l.zx)(o||(o=(0,s.Z)(["\n  margin-top: 12px;\n  padding: 10px 20px;\n  width: 120px;\n"]))),b=(0,d.default)(f.xiF)(u||(u=(0,s.Z)(["\n  position: absolute;\n  width: 28px;\n  height: 28px;\n"]))),g=(0,d.default)(p.VAJ)(c||(c=(0,s.Z)(["\n  position: absolute;\n  width: 28px;\n  height: 28px;\n  \n"])))},2826:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,a,i,o,u=t(1413),c=t(5861),s=t(885),d=t(7757),l=t.n(d),p=t(2791),f=t(6871),x=t(8806),h=t(1379),m=t(3309),v=t(620),b=t(3329),g=function(n){var e=n.initValues,t=void 0===e?{name:"",number:""}:e,r=n.text,a=n.onSubmit,i=n.disable,o=(0,p.useState)(t.name),u=(0,s.Z)(o,2),d=u[0],f=u[1],x=(0,p.useState)(t.number),g=(0,s.Z)(x,2),w=g[0],Z=g[1],y=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":f(r);break;case"number":Z(r);break;default:return}},k=function(){var n=(0,c.Z)(l().mark((function n(e){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,a({name:d,number:w});case 4:v.RT("Changes saved"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,b.jsxs)(m.l0,{onSubmit:k,children:[(0,b.jsxs)(m.LD,{children:[(0,b.jsx)(m.vZ,{}),(0,b.jsx)(m.FV,{value:d,onChange:y,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,b.jsxs)(m.LD,{children:[(0,b.jsx)(m.QG,{}),(0,b.jsx)(m.FV,{value:w,onChange:y,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,b.jsx)(m.Oc,{type:"submit",disabled:i,children:i?(0,b.jsx)(h.$,{size:15}):r})]})},w=t(168),Z=t(6031),y=t(6053),k=Z.default.div(r||(r=(0,w.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),j=Z.default.div(a||(a=(0,w.Z)(["\n  position: relative;\n  padding: 45px 10px 28px;\n  background-color: #ddd;\n  border-radius: 4px;\n"]))),C=Z.default.button(i||(i=(0,w.Z)(["\n  position: absolute;\n  top: 8px;\n  right: 5px;\n  background-color: transparent;\n  border: none;\n"]))),A=(0,Z.default)(y.nfZ)(o||(o=(0,w.Z)(["\n  width: 22px;\n  height: 22px;\n"]))),E={initial:{opacity:.2},animate:{opacity:1,transition:{duration:.5,ease:"circOut"}},exit:{opacity:0,transition:{duration:.2,ease:"circIn"}}},z={initial:{y:"50%"},animate:{y:0,transition:{duration:.2,ease:"circOut"}},exit:{y:"50%",transition:{duration:.2,ease:"circIn"}}},F=t(8250),L=t(5299),O=function(){var n=(0,f.s0)(),e=(0,f.UO)().contactId,t=(0,x.wv)(),r=(0,s.Z)(t,2),a=r[0],i=r[1].isLoading,o=(0,x.wY)().data,d="",h=function(){var e=(0,c.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"undefined"!==typeof(d=null===o||void 0===o?void 0:o.find((function(n){return t===n.id})))){e.next=4;break}throw new Error("Contact doesn't exist");case 4:return e.abrupt("return",d);case 7:e.prev=7,e.t0=e.catch(0),L.Report.warning("".concat(e.t0.message),"We are sorry, it`s removed permanently","Back to phonebook",(function(){n("/phonebook",{replace:!0})}),{fontFamily:"Advent Pro",backOverlay:!1});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();h(e);var m=function(){var n=(0,c.Z)(l().mark((function n(t){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a((0,u.Z)({id:e},t));case 3:v(),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){return n("/phonebook")};(0,p.useEffect)((function(){var n=function(n){"Escape"===n.code&&v()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));return(0,b.jsx)(k,(0,u.Z)((0,u.Z)({as:F.E.div},E),{},{onClick:function(n){n.currentTarget===n.target&&v()},children:(0,b.jsxs)(j,(0,u.Z)((0,u.Z)({as:F.E.div},z),{},{children:[(0,b.jsx)(C,{type:"button",onClick:v,children:(0,b.jsx)(A,{})}),d&&(0,b.jsx)(g,{initValues:{name:d.name,number:d.number},text:"Save",onSubmit:m,disable:i})]}))}))}}}]);
//# sourceMappingURL=826.7d001322.chunk.js.map
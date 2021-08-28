(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{33:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(14),o=n.n(c),i=(n(33),n(19)),u=n(5),s=n(6),l=n.n(s),d=n(10),b=n(9),p=n(12),j=n.n(p);function f(){return h.apply(this,arguments)}function h(){return(h=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("/contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}j.a.defaults.baseURL="http://localhost:4000";var v,y=Object(b.b)("contacts/fetchContacts",function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,f();case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),k=Object(b.b)("contacts/addContact",function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,O(t);case 4:return a=e.sent,e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}()),w=Object(b.b)("contacts/deleteContact",function(){var e=Object(d.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,g(t);case 4:return e.abrupt("return",t);case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),C=n(15),L=function(e){return e.phoneBook.contacts},z=function(e){return e.phoneBook.filter},A=Object(C.a)([L,z],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)||e.number.includes(t)}))})),B=n(2),S=n(3),F=S.a.button(v||(v=Object(B.a)(["\n  width: 150px;\n  height: 20px;\n  cursor: pointer;\n  background-color: green;\n  border-radius: 50px;\n"]))),q=n(1);var J,T,V=function(e){var t=e.type,n=e.text,r=e.onClick;return Object(q.jsx)(F,{type:t,onClick:r,children:n})},W=n(18),Z=n.n(W),D=S.a.form(J||(J=Object(B.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n"]))),E=S.a.input(T||(T=Object(B.a)(["\n  border-style: dashed;\n  border-color: aqua;\n  outline-color: tomato;\n  margin-bottom: 15px;\n"])));var M,N,R,I,P,U,$=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),o=Object(i.a)(c,2),s=o[0],l=o[1],d=Object(u.c)(L),b=Object(u.b)(),p=Z.a.generate(),j=Z.a.generate(),f=function(){a(""),l("")},h=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":l(r)}};return Object(q.jsxs)(D,{onSubmit:function(e){e.preventDefault();var t=d.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),r=d.find((function(e){return e.number===s}));return t?(alert("'".concat(n,"' is already in your list")),void f()):r?(alert("'".concat(s,"' is already in your list")),void f()):(b(k({name:n,number:s})),alert("'".concat(n,"' added to phonebook")),void f())},children:[Object(q.jsx)("label",{htmlFor:p,children:Object(q.jsx)(E,{id:p,placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:h,value:n})}),Object(q.jsx)("label",{htmlFor:j,children:Object(q.jsx)(E,{id:j,placeholder:"Tel",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:h,value:s})}),Object(q.jsx)(V,{text:"Add contact",type:"submit"})]})},G=S.a.div(M||(M=Object(B.a)(["\n  border-style: dotted;\n  display: inline-block;\n  padding-left: 15px;\n  padding-right: 30px;\n"]))),H=S.a.ul(N||(N=Object(B.a)(["\n  display: inline-block;\n  list-style-type: decimal;\n  font-size: x-large;\n"]))),K=S.a.li(R||(R=Object(B.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 15px;\n"]))),Q=S.a.p(I||(I=Object(B.a)(["\n  font-size: x-large;\n  margin-right: 20px;\n"]))),X=S.a.span(P||(P=Object(B.a)(["\n  font-weight: bold;\n  font-family: sans-serif;\n"]))),Y=S.a.button(U||(U=Object(B.a)(["\n  background-color: red;\n  border-radius: 45%;\n  width: 60px;\n  height: 30px;\n\n  cursor: pointer;\n"])));var _,ee,te,ne=function(){var e=Object(u.c)(A),t=Object(u.b)();return Object(q.jsx)(G,{children:Object(q.jsx)(H,{children:e.map((function(e){var n=e.id,r=e.name,a=e.number;return Object(q.jsxs)(K,{children:[Object(q.jsxs)(Q,{children:[Object(q.jsx)(X,{children:r}),": ",a]}),Object(q.jsx)(Y,{type:"button",onClick:function(){return t(w(n))},children:"Delete"})]},n)}))})})},re=n(8),ae=Object(b.c)({name:"phoneBook",initialState:{contacts:[],isLoading:!1,filter:"",error:null},reducers:{changeFilter:function(e,t){e.filter=t.payload}},extraReducers:(_={},Object(re.a)(_,y.fulfilled,(function(e,t){e.contacts=t.payload,e.isLoading=!1,e.error=null})),Object(re.a)(_,y.pending,(function(e){e.isLoading=!0,e.error=null})),Object(re.a)(_,y.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload,console.log(t.payload)})),Object(re.a)(_,k.fulfilled,(function(e,t){e.contacts.push(t.payload),e.isLoading=!1,e.error=null})),Object(re.a)(_,k.pending,(function(e){e.isLoading=!0,e.error=null})),Object(re.a)(_,k.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload,console.log(t.payload)})),Object(re.a)(_,w.fulfilled,(function(e,t){e.contacts=e.contacts.filter((function(e){return e.id!==t.payload})),e.isLoading=!1,e.error=null})),Object(re.a)(_,w.pending,(function(e){e.isLoading=!0,e.error=null})),Object(re.a)(_,w.rejected,(function(e,t){e.isLoading=!1,e.error=t.payload,console.log(t.payload)})),_)}),ce=ae.reducer,oe=ae.actions.changeFilter,ie=S.a.div(ee||(ee=Object(B.a)(["\n  margin-bottom: 15px;\n"]))),ue=S.a.p(te||(te=Object(B.a)(["\n  margin-top: 0px;\n  margin-bottom: 0px;\n"])));var se=function(){var e=Object(u.c)(z),t=Object(u.b)();return Object(q.jsxs)(ie,{children:[Object(q.jsx)(ue,{children:"Find contacts by name"}),Object(q.jsx)("input",{placeholder:"Search",type:"text",value:e,onChange:function(e){return t(oe(e.target.value))}})]})};var le=function(e){var t=e.title,n=e.children;return Object(q.jsxs)("section",{children:[Object(q.jsx)("h2",{children:t}),n]})};n(67);var de=function(){var e=Object(u.c)(L),t=Object(u.b)();return Object(r.useEffect)((function(){t(y())}),[t]),Object(q.jsxs)("div",{className:"mainContainer",children:[Object(q.jsx)(le,{title:"Phonebook",children:Object(q.jsx)($,{})}),e.length>0&&Object(q.jsxs)(le,{title:"Contacts",children:[Object(q.jsx)(se,{}),Object(q.jsx)(ne,{})]})]})},be=Object(b.a)({reducer:{phoneBook:ce},devTools:!1});o.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(u.a,{store:be,children:Object(q.jsx)(de,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.fb540c59.chunk.js.map
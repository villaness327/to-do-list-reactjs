(this.webpackJsonptodomachinelist=this.webpackJsonptodomachinelist||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(4),r=n.n(a),s=n(6),l=n(2);var i=n(0),u=o.a.createContext();function j(e){var t=function(e,t){var n=o.a.useState(!1),c=Object(l.a)(n,2),a=c[0],r=c[1],s=o.a.useState(!0),i=Object(l.a)(s,2),u=i[0],j=i[1],d=o.a.useState(t),b=Object(l.a)(d,2),x=b[0],O=b[1];return o.a.useEffect((function(){setTimeout((function(){try{var n,c=localStorage.getItem(e);c?n=JSON.parse(c):(localStorage.setItem(e,JSON.stringify(t)),n=t),O(n),j(!1)}catch(a){r(a)}}),1e3)})),{item:x,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),O(t)}catch(a){r(a)}},loading:u,error:a}}("TODOS_V1",[]),n=t.item,c=t.saveItem,a=t.loading,r=t.error,j=o.a.useState(""),d=Object(l.a)(j,2),b=d[0],x=d[1],O=o.a.useState(!1),p=Object(l.a)(O,2),h=p[0],f=p[1],m=o.a.useState(!1),v=Object(l.a)(m,2),C=v[0],T=v[1],S=o.a.useState(!1),g=Object(l.a)(S,2),N=g[0],A=g[1],I=n.filter((function(e){return!0===e.complete})).length,M=n.length,k=[];k=!b>=1?n:n.filter((function(e){var t=b.toLowerCase();return e.text.toLowerCase().includes(t)}));return Object(i.jsx)(u.Provider,{value:{loading:a,error:r,totalTodos:M,completedTodos:I,searchValue:b,setSearchValue:x,searchedTodos:k,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(s.a)(n);o[t].complete=!o[t].complete,c(o)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),o=Object(s.a)(n);console.log(o[t]),o.splice(t,1),c(o)},openModal:h,setOpenModal:f,addTodo:function(e){var t=Object(s.a)(n);t.push({text:e,complete:!1}),c(t)},openModalApp:C,setOpenModalApp:T,openModalAutor:N,setOpenModalAutor:A},children:e.children})}n(13);function d(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("span",{className:"header_icon",children:Object(i.jsx)("i",{className:"fas fa-clipboard-list"})}),Object(i.jsx)("h1",{className:"header_title",children:"To-Do List App"})]})}n(14);function b(){var e=o.a.useContext(u),t=e.totalTodos,n=e.completedTodos;return Object(i.jsxs)("p",{className:"Todocounter",children:["Haz completado ",n," de ",t," Tareas"]})}n(15);function x(){var e=o.a.useContext(u),t=e.searchValue,n=e.setSearchValue;return Object(i.jsx)("div",{className:"SearchContainer",children:Object(i.jsx)("input",{value:t,className:"Todosearch",placeholder:"Busque una Tarea...",onChange:function(e){console.log(e.target.value),n(e.target.value)},autofocus:!0})})}n(16);function O(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}n(17);function p(e){return Object(i.jsxs)("li",{className:"Todo_Item",children:[Object(i.jsx)("span",{className:"Todo_Item--Check ".concat(e.complete&&"Check_Complete"),onClick:e.onComplete,children:"\u2611"}),Object(i.jsx)("p",{className:"Todo_Item--Text ".concat(e.complete&&"Text_Complete"),children:e.text}),Object(i.jsx)("span",{className:"Todo_Item--Close",onClick:e.onDelete,children:Object(i.jsx)("i",{className:"fas fa-times-circle"})})]})}n(18);function h(){var e=o.a.useContext(u).setOpenModal;return Object(i.jsx)("button",{className:"TodoButton",onClick:function(){e((function(e){return!e}))},children:"+"})}n(19);function f(e){return Object(i.jsx)("div",{className:"footer",children:e.children})}n(20);function m(){return Object(i.jsx)("p",{className:"createTodoText",children:"Crea tu primera Tarea"})}n(21);function v(){return Object(i.jsx)("p",{children:"A ocurrido un error"})}n(22);function C(){return Object(i.jsx)("p",{className:"loadingText",children:"Se esta cargando la informaci\xf3n"})}n(23);function T(e){var t=e.children;return r.a.createPortal(Object(i.jsx)("div",{className:"modalbg",children:t}),document.getElementById("modal"))}n(24);function S(){var e=o.a.useContext(u),t=e.addTodo,n=e.setOpenModal,c=o.a.useState(""),a=Object(l.a)(c,2),r=a[0],s=a[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),n(!1)},children:[Object(i.jsx)("label",{children:"Ingrese su Tarea"}),Object(i.jsx)("textarea",{placeholder:"Ingrese su tarea ac\xe1...",onChange:function(e){s(e.target.value)},value:r}),Object(i.jsxs)("div",{className:"buttonForm",children:[Object(i.jsx)("button",{onClick:function(){n(!1)},type:"button",children:"Cancelar"}),Object(i.jsx)("button",{type:"submit",children:"A\xf1adir"})]})]})}function g(){var e=o.a.useContext(u).setOpenModalApp;return Object(i.jsx)("button",{type:"button",onClick:function(){e(!0)},children:"Acerca de la App"})}n(25);function N(){var e=o.a.useContext(u).setOpenModalApp;return Object(i.jsxs)("div",{className:"modalapp",children:[Object(i.jsx)("h2",{children:"Acerca de la APP"}),Object(i.jsx)("p",{children:"App Web desarrollada con :"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"REACT.JS"}),Object(i.jsx)("li",{children:"NODE JS"}),Object(i.jsx)("li",{children:"HTML"}),Object(i.jsx)("li",{children:"CSS"}),Object(i.jsx)("li",{children:"WEB RESPONSIVE"})]}),Object(i.jsx)("button",{type:"button",onClick:function(){e(!1)},children:"Cerrar"})]})}function A(){var e=o.a.useContext(u).setOpenModalAutor;return Object(i.jsx)("button",{type:"button",onClick:function(){e(!0)},children:"Acerca de Autor"})}n(26);function I(){var e=o.a.useContext(u).setOpenModalAutor;return Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsxs)("div",{className:"modalautor",children:[Object(i.jsx)("h2",{children:"V\xedctor Illanes"}),Object(i.jsx)("p",{children:"Front End Developer"}),Object(i.jsx)("p",{children:"React.JS | JavaScript | HTML | CSS"})]}),Object(i.jsx)("button",{className:"closebutton",type:"button",onClick:function(){e(!1)},children:"Cerrar"})]})}function M(){var e=o.a.useContext(u),t=e.loading,n=e.error,c=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,l=e.openModalApp,j=e.openModalAutor;return Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsx)(d,{}),Object(i.jsx)(b,{}),Object(i.jsx)(x,{}),Object(i.jsxs)(O,{children:[t&&Object(i.jsx)(C,{}),n&&Object(i.jsx)(v,{}),!t&&!c.length&&Object(i.jsx)(m,{}),c.map((function(e){return Object(i.jsx)(p,{text:e.text,complete:e.complete,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!s&&Object(i.jsx)(T,{children:Object(i.jsx)(S,{})})||!!l&&Object(i.jsx)(T,{children:Object(i.jsx)(N,{})})||!!j&&Object(i.jsx)(T,{children:Object(i.jsx)(I,{})}),!l&&Object(i.jsx)(h,{})&&!j&&Object(i.jsx)(h,{}),Object(i.jsxs)(f,{children:[Object(i.jsx)(g,{}),Object(i.jsx)(A,{})]})]})}var k=function(){return Object(i.jsx)(j,{children:Object(i.jsx)(M,{})})};n(27);r.a.render(Object(i.jsx)(k,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.a77f2c3d.chunk.js.map
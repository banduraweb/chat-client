(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,a,t){},113:function(e,a,t){},114:function(e,a,t){},143:function(e,a){},146:function(e,a,t){},147:function(e,a,t){"use strict";t.r(a);var n,c=t(0),r=t.n(c),l=t(58),o=t.n(l),m=t(11),s=(t(71),t(6)),i=t(17),u=t(19),E=t(5),A=(t(72),function(){var e=Object(c.useState)({name:"",room:""}),a=Object(E.a)(e,2),t=a[0],n=a[1],l=Object(c.useState)(!1),o=Object(E.a)(l,2),s=o[0],A=o[1],p=Object(c.useState)(!1),f=Object(E.a)(p,2),g=f[0],h=f[1],b=function(e){var a=e.target;A(!1),n(Object(u.a)({},t,Object(i.a)({},a.name,a.value)))},d=function(e){var a=e.target.name;n(Object(u.a)({},t,{room:a}))};return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},s?r.a.createElement("span",{className:"button mb-20 error"},"Not correct data"):r.a.createElement("h1",{className:"heading"},"Join Chat"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"name",className:"joinInput",type:"text",name:"name",onChange:b})),r.a.createElement("h1",{className:"heading h6"},"Choose the Room"),g?r.a.createElement("div",null,r.a.createElement("input",{placeholder:"room",className:"joinInput",type:"text",name:"room",onChange:b})):r.a.createElement("div",{className:"button checkboxes mt-20"},r.a.createElement("label",null," ","Books",r.a.createElement("input",{className:"joinInput",type:"checkbox",name:"books",checked:"books"===t.room,onChange:d})),r.a.createElement("label",null," ","Cars",r.a.createElement("input",{className:"joinInput",type:"checkbox",name:"cars",checked:"cars"===t.room,onChange:d})),r.a.createElement("label",null," ","Life",r.a.createElement("input",{className:"joinInput",type:"checkbox",name:"life",checked:"life"===t.room,onChange:d})),r.a.createElement("label",null," ","Secret",r.a.createElement("input",{className:"joinInput",type:"checkbox",name:"secret",checked:"secret"===t.room,onChange:d}))),r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("button",{className:"button",onClick:function(e){var a=e.target;h(!g),n(Object(u.a)({},t,{room:a.value}))}},g?r.a.createElement("span",null,"choose exist room"):r.a.createElement("span",null,"create own room",r.a.createElement("br",null),"OR",r.a.createElement("br",null),"enter room of your's companion"))),r.a.createElement(m.b,{onClick:function(e){return function(e,a){var t=a.name,n=a.room;""!==t&&""!==n||(e.preventDefault(),A(!0))}(e,t)},to:"/chat?name=".concat(t.name,"&room=").concat(t.room)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}),p=t(65),f=t(18),g=t.n(f),h=(t(77),function(e){var a=e.users;return r.a.createElement("div",{className:"textContainer"},r.a.createElement("div",null,r.a.createElement("h1",null,"Realtime Chat Application"," ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\ud83d\udcac")),r.a.createElement("h2",null,"Created with React, Express, Node and Socket.IO"," ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2764\ufe0f")),r.a.createElement("h2",null,"Try it out right now!"," ",r.a.createElement("span",{role:"img","aria-label":"emoji"},"\u2b05\ufe0f"))),a?r.a.createElement("div",null,r.a.createElement("h1",null,"People currently chatting:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,a.map((function(e){var a=e.name;return r.a.createElement("div",{key:a,className:"activeItem"},a,r.a.createElement("img",{alt:"Online Icon",src:g.a}))}))))):null)}),b=(t(78),t(34)),d=t.n(b),N=function(e){var a=e.message,t=a.text,n=a.user,c=!1,l=e.name.trim().toLowerCase();return n===l&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},l),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},d.a.emojify(t)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},d.a.emojify(t))),r.a.createElement("p",{className:"sentText pl-10 "},n))},v=t(61),j=t.n(v),C=(t(112),function(e){var a=e.messages,t=e.name;return r.a.createElement(j.a,{className:"messages"},a.map((function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(N,{message:e,name:t}))})))}),O=t(62),I=t.n(O),k=(t(113),function(e){var a=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:g.a,alt:"online icon"}),r.a.createElement("h3",null,a)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:I.a,alt:"close icon"}))))}),x=(t(114),function(e){var a=e.setMessage,t=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?t(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return t(e)}},"Send"))}),y=t(63),S=t.n(y),R=t(64),w=t.n(R),B=(t(146),function(){var e=Object(s.f)(),a=Object(s.e)(),t=Object(c.useState)(""),l=Object(E.a)(t,2),o=l[0],m=l[1],i=Object(c.useState)({}),u=Object(E.a)(i,2),A=u[0],f=u[1],g=Object(c.useState)([]),b=Object(E.a)(g,2),d=b[0],N=b[1],v=Object(c.useState)(""),j=Object(E.a)(v,2),O=j[0],I=j[1],y="https://infinite-retreat-25083.herokuapp.com/";Object(c.useEffect)((function(){var t=S.a.parse(e.search);return f(t),(n=w()(y)).emit("join",t,(function(e){if(e)return alert(e),a.push("/")})),function(){n.emit("disconnect"),n.off()}}),[a,y,e.search]),Object(c.useEffect)((function(){n.on("message",(function(e){N([].concat(Object(p.a)(d),[e]))})),n.on("roomData",(function(e){var a=e.users;m(a)}))}),[d]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(k,{room:A.room}),r.a.createElement(C,{messages:d,name:A.name}),r.a.createElement(x,{message:O,setMessage:I,sendMessage:function(e){e.preventDefault(),O&&n.emit("sendMessage",O,(function(){return I("")}))}})),r.a.createElement(h,{users:o}))}),M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{path:"/",exact:!0,component:A}),r.a.createElement(s.a,{path:"/chat",component:B}))};o.a.render(r.a.createElement(m.a,null,r.a.createElement(M,null)),document.getElementById("root"))},18:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},62:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},66:function(e,a,t){e.exports=t(147)},71:function(e,a,t){},72:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.20833305.chunk.js.map
(this["webpackJsonpplataforma-joti-front-end"]=this["webpackJsonpplataforma-joti-front-end"]||[]).push([[0],{137:function(e,t,a){e.exports=a(184)},184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),i=a(57),l=a(103),s=a(17),u=a(245),m=(a(146),a(158),a(159),a(126)),p=a(48),d=a(49);function b(){var e=Object(p.a)(["\n  background: #7159c1;\n  min-height: 100%;\n  padding-bottom: 20px;\n"]);return b=function(){return e},e}var E=d.b.div(b());function g(e){var t=e.children;return r.a.createElement(E,null,t)}var f=a(20),O=a(21),h=a(5),j=a(107),v=a(22),y=a(247),S=a(223),x=a(225),T=a(228),N=a(222),_=a(227),k=a(226),C=a(109),w=a.n(C),U=a(111),I=a.n(U),R=a(110),A=a.n(R),P=a(229),L=a(230),G=a(231),M=a(112),Q=a.n(M),q=a(113),D=a.n(q),B=a(115),F=a.n(B),W=a(114),J=a.n(W);function z(e,t){return{type:"@auth/SIGN_IN_SUCCESS",payload:{token:e,user:t}}}var H=a(33),Y=Object(H.a)();function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var K=Object(j.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"#7159c1"},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(O.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:X({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:10},img:{height:50}}}));function Z(e){var t,a,n=e.open,c=e.setOpen,o=e.children,i=Object(s.b)(),l=K(),u=Object(v.a)();return r.a.createElement("div",{className:l.root},r.a.createElement(N.a,null),r.a.createElement(S.a,{position:"fixed",className:Object(h.a)(l.appBar,Object(O.a)({},l.appBarShift,n))},r.a.createElement(x.a,null,r.a.createElement(k.a,{color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},edge:"start",className:Object(h.a)(l.menuButton,Object(O.a)({},l.hide,n))},r.a.createElement(w.a,null)),r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/plataforma-joti.appspot.com/o/static%2Flogojoti2019br.png?alt=media&token=c318aa17-9f01-4767-b1b1-b318ded0c05c",alt:"Joti Logo",className:l.img}))),r.a.createElement(y.a,{variant:"permanent",className:Object(h.a)(l.drawer,(t={},Object(O.a)(t,l.drawerOpen,n),Object(O.a)(t,l.drawerClose,!n),t)),classes:{paper:Object(h.a)((a={},Object(O.a)(a,l.drawerOpen,n),Object(O.a)(a,l.drawerClose,!n),a))},open:n},r.a.createElement("div",{className:l.toolbar},r.a.createElement(k.a,{onClick:function(){c(!1)}},"rtl"===u.direction?r.a.createElement(A.a,null):r.a.createElement(I.a,null))),r.a.createElement(_.a,null),r.a.createElement(T.a,null,r.a.createElement(P.a,{button:!0,onClick:function(){return Y.push("/team")}},r.a.createElement(L.a,null,r.a.createElement(Q.a,null)),r.a.createElement(G.a,{primary:"Equipe"})),r.a.createElement(P.a,{button:!0,onClick:function(){return Y.push("/tasks")}},r.a.createElement(L.a,null,r.a.createElement(D.a,null)),r.a.createElement(G.a,{primary:"Tarefas"})),r.a.createElement(P.a,{button:!0,onClick:function(){return Y.push("/support")}},r.a.createElement(L.a,null,r.a.createElement(J.a,null)),r.a.createElement(G.a,{primary:"Suporte"}))),r.a.createElement(_.a,null),r.a.createElement(T.a,null,r.a.createElement(P.a,{button:!0,onClick:function(){i({type:"@auth/SIGN_OUT_REQUEST"})}},r.a.createElement(L.a,null,r.a.createElement(F.a,null)),r.a.createElement(G.a,{primary:"Sair"})))),r.a.createElement("main",{className:l.content},r.a.createElement("div",{className:l.toolbar}),o))}function $(){var e=Object(p.a)(["\n  background: #f3f3f4;\n  min-height: 100%;\n  padding-bottom: 20px;\n"]);return $=function(){return e},e}var ee=d.b.div($());function te(e){var t=e.children,a=Object(n.useState)(!1),c=Object(f.a)(a,2),o=c[0],i=c[1];return r.a.createElement(ee,null,r.a.createElement(Z,{open:o,setOpen:i},t))}var ae=a(69),ne=a(123),re=a(122),ce=a(27),oe=a(116),ie=a.n(oe),le=a(51),se={token:null,signed:!1,loading:!1};var ue={user:null};var me={team:null,loading:!1,createTeamLoading:!1,joinTeamLoading:!1};var pe=Object(ce.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;return Object(le.a)(e,(function(e){switch(t.type){case"@auth/SIGN_IN_REQUEST":e.loading=!0;break;case"@auth/SIGN_IN_SUCCESS":e.token=t.payload.token,e.signed=!0,e.loading=!1;break;case"@auth/SIGN_FAILURE":e.loading=!1;break;case"@auth/SIGN_OUT_REQUEST":e.token=null,e.signed=!1,e.loading=!1;break;case"@auth/SIGN_UP_REQUEST":e.loading=!0;break;case"@auth/SIGN_UP_SUCCESS":e.loading=!1}}))},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;return Object(le.a)(e,(function(e){switch(t.type){case"@auth/SIGN_IN_SUCCESS":case"@user/GET_USER_SUCCESS":e.user=t.payload.user;break;case"@auth/SIGN_OUT_REQUEST":e.user=null}}))},team:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;return Object(le.a)(e,(function(e){switch(t.type){case"@team/GET_TEAM_REQUEST":e.loading=!0;break;case"@team/GET_TEAM_SUCCESS":e.team=t.payload.team,e.loading=!1;break;case"@team/GET_TEAM_FAILURE":e.loading=!1;break;case"@auth/SIGN_OUT_REQUEST":e.team=null,e.loading=!1;break;case"@team/CREATE_TEAM_REQUEST":e.createTeamLoading=!0;break;case"@team/CREATE_TEAM_SUCCESS":case"@team/CREATE_TEAM_FAILURE":e.createTeamLoading=!1;break;case"@team/JOIN_TEAM_REQUEST":e.joinTeamLoading=!0;break;case"@team/JOIN_TEAM_SUCCESS":case"@team/JOIN_TEAM_FAILURE":e.joinTeamLoading=!1}}))}}),de=a(15),be=a.n(de),Ee=a(9),ge=(a(13),a(117)),fe=a.n(ge).a.create({baseURL:"https://plataforma-joti.web.app"});var Oe=be.a.mark(ve),he=be.a.mark(ye),je=be.a.mark(Se);function ve(e){var t,a,n,r,c,o,l,s;return be.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return t=e.payload,u.prev=1,a=t.register,n=t.date,isNaN(a)||(a="".concat(a,"@joti.com.br")),u.next=7,Object(Ee.call)(fe.post,"user/login",{register:a,date:n});case 7:return r=u.sent,c=r.data,o=c.token,l=c.me,s=l,fe.defaults.headers.Authorization="Bearer ".concat(o),u.next=13,Object(Ee.put)(z(o,s));case 13:Y.push("/team"),u.next=21;break;case 16:return u.prev=16,u.t0=u.catch(1),i.b.error("Erro, verifique se voc\xea esta inscrito na ativade ou se seus dados estao incorretos."),u.next=21,Object(Ee.put)({type:"@auth/SIGN_FAILURE"});case 21:case"end":return u.stop()}}),Oe,null,[[1,16]])}function ye(e){var t,a,n,r;return be.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(t=e.payload,c.prev=1,a=t.user,n=t.type,r=a.register,"Externo"!==n){c.next=10;break}return c.next=7,Object(Ee.call)(fe.post,"/user/create/external",a);case 7:c.sent,c.next=13;break;case 10:return c.next=12,Object(Ee.call)(fe.post,"/user/create/br",{register:r});case 12:c.sent;case 13:return c.next=15,Object(Ee.put)({type:"@auth/SIGN_UP_SUCCESS"});case 15:Y.push("/"),c.next=23;break;case 18:return c.prev=18,c.t0=c.catch(1),c.t0.response.data.error?i.b.error(c.t0.response.data.error):i.b.error(c.t0.response.data.message),c.next=23,Object(Ee.put)({type:"@auth/SIGN_FAILURE"});case 23:case"end":return c.stop()}}),he,null,[[1,18]])}function Se(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Fe.store.getState().auth.signed){e.next=6;break}return e.next=4,Object(Ee.put)({type:"@user/GET_USER_REQUEST"});case 4:e.next=8;break;case 6:return e.next=8,Object(Ee.put)({type:"@auth/SIGN_OUT_REQUEST"});case 8:case"end":return e.stop()}}),je)}var xe=Object(Ee.all)([Object(Ee.takeLatest)("persist/REHYDRATE",(function(e){var t=e.payload;if(t){var a=t.auth.token;a&&(fe.defaults.headers.Authorization="Bearer ".concat(a))}})),Object(Ee.takeLatest)("@auth/SIGN_IN_REQUEST",ve),Object(Ee.takeLatest)("@auth/SIGN_UP_REQUEST",ye),Object(Ee.takeLatest)("@auth/SIGN_OUT_REQUEST",(function(){Y.push("/")})),Object(Ee.takeLatest)("persist/REHYDRATE",Se)]),Te=be.a.mark(Ne);function Ne(){var e;return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("logado"),!Fe.store.getState().auth.signed){t.next=13;break}return t.prev=3,t.next=6,Object(Ee.call)(fe.get,"user");case 6:return e=t.sent,t.next=9,Object(Ee.put)({type:"@user/GET_USER_SUCCESS",payload:{user:e.data}});case 9:t.next=13;break;case 11:t.prev=11,t.t0=t.catch(3);case 13:case"end":return t.stop()}}),Te,null,[[3,11]])}var _e=Object(Ee.all)([Object(Ee.takeLatest)("@user/GET_USER_REQUEST",Ne),Object(Ee.takeLatest)("@team/CREATE_TEAM_SUCCESS",Ne),Object(Ee.takeLatest)("@team/JOIN_TEAM_SUCCESS",Ne)]);function ke(e){return{type:"@team/GET_TEAM_SUCCESS",payload:{team:e.team}}}var Ce=be.a.mark(Ie),we=be.a.mark(Re),Ue=be.a.mark(Ae);function Ie(e){var t,a,n,r;return be.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,a=t.team.teamId,c.next=5,Object(Ee.call)(fe.get,"team/".concat(a));case 5:return n=c.sent,r=n.data,c.next=9,Object(Ee.put)(ke({team:r}));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(1),c.next=15,Object(Ee.put)({type:"@team/GET_TEAM_FAILURE"});case 15:case"end":return c.stop()}}),Ce,null,[[1,11]])}function Re(e){var t,a,n;return be.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,a=Fe.store.getState().user.user,n={teamName:t.team.name,description:t.team.description,groupName:a.groupName,groupNumber:a.groupNumber,type:t.team.type,session:a.session,name:a.name,date:a.date},r.next=6,Object(Ee.call)(fe.post,"team/create",n);case 6:return r.sent,r.next=9,Object(Ee.put)({type:"@team/CREATE_TEAM_SUCCESS"});case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(1),r.next=15,Object(Ee.put)({type:"@team/CREATE_TEAM_FAILURE"});case 15:case"end":return r.stop()}}),we,null,[[1,11]])}function Ae(e){var t,a;return be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.prev=1,a=t.teamId,n.next=5,Object(Ee.call)(fe.post,"team/join",{teamId:a});case 5:return n.sent,n.next=8,Object(Ee.put)({type:"@team/JOIN_TEAM_SUCCESS"});case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(1),n.next=14,Object(Ee.put)({type:"@team/JOIN_TEAM_FAILURE"});case 14:case"end":return n.stop()}}),Ue,null,[[1,10]])}var Pe=Object(Ee.all)([Object(Ee.takeLatest)("@team/JOIN_TEAM_REQUEST",Ae),Object(Ee.takeLatest)("@team/GET_TEAM_REQUEST",Ie),Object(Ee.takeLatest)("@team/CREATE_TEAM_REQUEST",Re)]),Le=be.a.mark(Ge);function Ge(){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ee.all)([xe,_e,Pe]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),Le)}var Me,Qe=Object(ne.a)({sagaMonitor:null}),qe=[Qe],De=function(e,t){var a=ce.a.apply(void 0,Object(re.a)(t));return Object(ce.e)(e,a)}((Me=pe,Object(ae.a)({key:"JOTI/2020",storage:ie.a,whitelist:["auth","user"]},Me)),qe),Be=Object(ae.b)(De);Qe.run(Ge);var Fe={store:De,persistor:Be};function We(e){var t=e.component,a=e.isPrivate,n=void 0!==a&&a,c=Object(m.a)(e,["component","isPrivate"]),o=Fe.store.getState().auth.signed;if(!o&&n)return r.a.createElement(u.a,{to:"/"});if(o&&!n)return r.a.createElement(u.a,{to:"/team"});var i=o?te:g;return r.a.createElement(u.b,Object.assign({},c,{render:function(e){return r.a.createElement(i,null,r.a.createElement(t,e))}}))}We.defaultProps={isPrivate:!1};var Je=a(232),ze=a(127),He=a(243),Ye=a(233),Ve=a(234),Xe=a(235),Ke=a(236),Ze=a(6),$e=function(){return{main:{maxWidth:400,marginLeft:"auto",marginRight:"auto",paddingTop:60,paddindBottom:60},paper:{padding:"16px 24px 24px",flexDirection:"column",display:"flex"},img:{width:"70%",margin:"0 auto",alignSelf:"center"},form:{margin:"20px 0"},input:{margin:"10px 0"},button:{marginTop:30,fontWeight:"bold"},radios:{marginTop:20},loading:{marginTop:20,display:"flex",justifyContent:"center",minHeight:50}}};function et(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var tt=Object(Ze.a)($e)((function(e){var t=e.classes,a=Object(s.b)(),c=Object(s.c)((function(e){return e.auth.loading})),o=Object(n.useState)({register:"alecs@devfarias.com",date:"16/07/2000"}),i=Object(f.a)(o,2),l=i[0],u=i[1];function m(e,t){u(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?et(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):et(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,Object(O.a)({},t,e.target.value)))}return r.a.createElement(Je.a,{maxWidth:"sm"},r.a.createElement("main",{className:t.main},r.a.createElement(ze.a,{className:t.paper},r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/plataforma-joti.appspot.com/o/static%2Flogojoti2019br.png?alt=media&token=c318aa17-9f01-4767-b1b1-b318ded0c05c",alt:"Joti Logo",className:t.img}),r.a.createElement("form",{className:t.form,onSubmit:function(e){return function(e){e.preventDefault(),a(function(e){return{type:"@auth/SIGN_IN_REQUEST",payload:{register:e.register,date:e.date}}}(l))}(e)}},r.a.createElement(He.a,{id:"register",label:"Registro ou Email",value:l.register,className:t.input,required:!0,fullWidth:!0,onChange:function(e){return m(e,"register")}}),r.a.createElement(He.a,{id:"date",label:"Data de Nascimento",value:l.date,className:t.input,fullWidth:!0,required:!0,onChange:function(e){return m(e,"date")}}),c?r.a.createElement(Ye.a,{item:!0,xs:12,className:t.loading},r.a.createElement(Ve.a,null)):r.a.createElement(Xe.a,{type:"submit",className:t.button,fullWidth:!0,variant:"contained",color:"primary",disabled:c},"Entrar")),r.a.createElement(Ke.a,{href:"/signUp",className:t.link},"Quero participar!"))))})),at=a(246),nt=a(237),rt=a(244),ct=function(){return{main:{maxWidth:400,marginLeft:"auto",marginRight:"auto",paddingTop:60,paddingBottom:60},paper:{padding:"16px 24px 24px",flexDirection:"column",display:"flex"},img:{width:"70%",margin:"0 auto",alignSelf:"center"},form:{margin:"20px 0"},input:{margin:"10px 0"},button:{marginTop:30,fontWeight:"bold"},radios:{marginTop:20},loading:{marginTop:20,display:"flex",justifyContent:"center",minHeight:50}}};function ot(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var it=Object(Ze.a)(ct)((function(e){var t=e.classes,a=Object(s.b)(),c=Object(n.useState)({register:"",date:"",name:""}),o=Object(f.a)(c,2),i=o[0],l=o[1],u=Object(s.c)((function(e){return e.auth.loading})),m=Object(n.useState)("Brasileiro"),p=Object(f.a)(m,2),d=p[0],b=p[1];function E(e,t){l(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ot(a,!0).forEach((function(t){Object(O.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ot(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},i,Object(O.a)({},t,e.target.value)))}return r.a.createElement(Je.a,{maxWidth:"sm"},r.a.createElement("main",{className:t.main},r.a.createElement(ze.a,{className:t.paper},r.a.createElement("img",{src:"https://firebasestorage.googleapis.com/v0/b/plataforma-joti.appspot.com/o/static%2Flogojoti2019br.png?alt=media&token=c318aa17-9f01-4767-b1b1-b318ded0c05c",alt:"Joti Logo",className:t.img}),r.a.createElement("form",{className:t.form,onSubmit:function(e){return function(e){var t;e.preventDefault(),a({type:"@auth/SIGN_UP_REQUEST",payload:{user:(t={user:i,type:d}).user,type:t.type}})}(e)}},"Externo"===d?r.a.createElement(r.a.Fragment,null,r.a.createElement(He.a,{id:"name",label:"Nome",value:i.name,className:t.name,required:!0,fullWidth:!0,onChange:function(e){return E(e,"name")}}),r.a.createElement(He.a,{id:"register",label:"Email",value:i.register,className:t.input,required:!0,type:"email",fullWidth:!0,onChange:function(e){return E(e,"register")}}),r.a.createElement(He.a,{id:"date",label:"Data de Nascimento",value:i.date,className:t.input,fullWidth:!0,required:!0,onChange:function(e){return E(e,"date")}})):r.a.createElement(He.a,{id:"register",label:"Registro",value:i.register,className:t.input,required:!0,fullWidth:!0,onChange:function(e){return E(e,"register")}}),r.a.createElement(at.a,{"aria-label":"Type",name:"Type",value:d,row:!0,onChange:function(e){return b(e.target.value)},className:t.radios},r.a.createElement(nt.a,{value:"Brasileiro",control:r.a.createElement(rt.a,{color:"primary"}),label:"Brasileiro"}),r.a.createElement(nt.a,{value:"Externo",control:r.a.createElement(rt.a,{color:"primary"}),label:"Externo"})),u?r.a.createElement(Ye.a,{item:!0,xs:12,className:t.loading},r.a.createElement(Ve.a,null)):r.a.createElement(Xe.a,{type:"submit",className:t.button,fullWidth:!0,variant:"contained",color:"primary"},"Criar conta")),r.a.createElement(Ke.a,{href:"/",className:t.link},"Ja tenho conta!"))))}));function lt(){return r.a.createElement("h1",null,"Tasks")}var st=a(70),ut=function(){return{root:{padding:"24px 16px"},loading:{margin:"70px auto",display:"flow-root"},button:{margin:"50px auto 20px",backgroundColor:"#7159c1","&:hover":{backgroundColor:"".concat(Object(st.a)(.1,"#7159c1"))}}}},mt=a(39),pt=function(e){return{root:{padding:"24px 16px"},text:Object(O.a)({},e.breakpoints.down("sm"),{textAlign:"center"})}};var dt=Object(Ze.a)(pt)((function(e){var t=e.classes,a=e.team;return r.a.createElement(ze.a,{className:t.root},r.a.createElement(mt.a,{variant:"h5",className:t.text,component:"h3"},"Informa\xe7\xf5es da Equipe"),r.a.createElement(mt.a,{color:"textSecondary",variant:"subtitle1"},"Nome: ",a.name),r.a.createElement(mt.a,{color:"textSecondary",variant:"subtitle1"},"Descri\xe7\xe3o: ",a.description),r.a.createElement(mt.a,{color:"textSecondary",variant:"subtitle1"},"Unidade Escoteira: ",a.groupName," - ",a.groupNumber),r.a.createElement(mt.a,{color:"textSecondary",variant:"subtitle1"},"Tipo: ",a.type),r.a.createElement(mt.a,{color:"textSecondary",variant:"subtitle1"},"Total de Participantes: ",a.teamSize),r.a.createElement(mt.a,{color:"textSecondary",variant:"subtitle1"},"C\xf3digo da equipe: ",a.teamId))})),bt=function(){return{root:{padding:"24px 16px"},button:{backgroundColor:"#7159c1","&:hover":{backgroundColor:"".concat(Object(st.a)(.1,"#7159c1"))}},divButton:{display:"flex",justifyContent:"center",margin:" 10px auto"},divButtons:{margin:"20px auto"}}},Et=a(121),gt=a(238),ft=a(239),Ot=a(240),ht=a(241),jt=a(242),vt=function(){return{actions:{marginTop:20},radios:{marginTop:20},loading:{margin:"40px auto",display:"flex",justifyContent:"center",minHeight:50}}};var yt=Object(Ze.a)(vt)((function(e){var t=e.classes,a=e.open,c=e.setOpen,o=Object(s.b)(),i=Object(s.c)((function(e){return e.user.user})),l=Object(s.c)((function(e){return e.team.joinTeamLoading})),u=Object(n.useState)([]),m=Object(f.a)(u,2),p=m[0],d=m[1],b=Object(n.useState)(!1),E=Object(f.a)(b,2),g=E[0],O=E[1],h=Object(n.useState)(""),j=Object(f.a)(h,2),v=j[0],y=j[1];function S(){return(S=Object(Et.a)(be.a.mark((function e(){var t;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,fe.get("team/list-by-group/".concat(i.groupNumber));case 3:t=e.sent,O(!1),d(t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){p[0]&&y(p[0].teamId)}),[p]),r.a.createElement("div",null,r.a.createElement(gt.a,{open:a,onEnter:function(){return function(){return S.apply(this,arguments)}()},"aria-labelledby":"Modal join team","aria-describedby":"Modal join team"},r.a.createElement(ft.a,{id:"alert-dialog-slide-title"},"Entrar em uma equipe"),r.a.createElement(Ot.a,null,r.a.createElement(ht.a,{id:"alert-dialog-slide-description"},"Escolha entre uma das equipes do seu grupo"),g?r.a.createElement(Ye.a,{item:!0,xs:12,className:t.loading},r.a.createElement(Ve.a,null)):r.a.createElement(r.a.Fragment,null,0===p.length?r.a.createElement(ht.a,null,"Seu grupo ainda nao tem nenhuma equipe , crie uma equipe e comece essa aventura!"):r.a.createElement(at.a,{"aria-label":"Type",name:"Type",value:v,onChange:function(e){return y(e.target.value)},className:t.radios},p&&p.map((function(e){return r.a.createElement(nt.a,{key:e.teamId,value:e.teamId,control:r.a.createElement(rt.a,{color:"primary"}),label:e.name})}))))),l?r.a.createElement(Ye.a,{item:!0,xs:12,className:t.loading},r.a.createElement(Ve.a,null)):r.a.createElement(jt.a,null,r.a.createElement(Xe.a,{onClick:function(){c(!1)},color:"primary"},"Cancelar"),g||0===p.length?null:r.a.createElement(Xe.a,{onClick:function(){o(function(e){return{type:"@team/JOIN_TEAM_REQUEST",payload:{teamId:e}}}(v))},color:"primary"},"Entrar"))))})),St=function(){return{actions:{marginTop:20},radios:{marginTop:20},loading:{display:"flex",justifyContent:"center",minHeight:50}}};var xt=Object(Ze.a)(St)((function(e){var t=e.classes,a=e.open,c=e.setOpen,o=Object(s.b)(),i=Object(n.useState)(""),l=Object(f.a)(i,2),u=l[0],m=l[1],p=Object(n.useState)(""),d=Object(f.a)(p,2),b=d[0],E=d[1],g=Object(s.c)((function(e){return e.team.createTeamLoading})),O=Object(n.useState)("Geral"),h=Object(f.a)(O,2),j=h[0],v=h[1];return r.a.createElement("div",null,r.a.createElement(gt.a,{open:a,"aria-labelledby":"Modal join team","aria-describedby":"Modal join team"},r.a.createElement(ft.a,{id:"alert-dialog-slide-title"},"Criar uma equipe"),r.a.createElement(Ot.a,null,r.a.createElement(ht.a,{id:"alert-dialog-slide-description"},"Preencha os dados da sua nova equipe!")),r.a.createElement(Ot.a,null,r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),o({type:"@team/CREATE_TEAM_REQUEST",payload:{team:{name:u,description:b,type:j}}})}(e)}},r.a.createElement(He.a,{value:u,onChange:function(e){return m(e.target.value)},required:!0,margin:"dense",id:"name",label:"Nome da sua equipe",type:"text",fullWidth:!0}),r.a.createElement(He.a,{value:b,onChange:function(e){return E(e.target.value)},required:!0,margin:"dense",id:"description",label:"Descri\xe7\xe3o da sua equipe",type:"text",fullWidth:!0}),r.a.createElement(at.a,{"aria-label":"Type",name:"Type",value:j,row:!0,onChange:function(e){return v(e.target.value)},className:t.radios},r.a.createElement(nt.a,{value:"Geral",control:r.a.createElement(rt.a,{color:"primary"}),label:"Geral"}),r.a.createElement(nt.a,{value:"Lobinho",control:r.a.createElement(rt.a,{color:"primary"}),label:"Lobinho"})),g?r.a.createElement(Ye.a,{item:!0,xs:12,className:t.loading},r.a.createElement(Ve.a,null)):r.a.createElement(jt.a,{className:t.actions},r.a.createElement(Xe.a,{onClick:function(){c(!1)},color:"primary"},"Cancelar"),r.a.createElement(Xe.a,{type:"submit",color:"primary"},"Criar"))))))}));var Tt=Object(Ze.a)(bt)((function(e){var t=e.classes,a=Object(n.useState)(!1),c=Object(f.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)(!1),s=Object(f.a)(l,2),u=s[0],m=s[1];return r.a.createElement(ze.a,{className:t.root},r.a.createElement(mt.a,{variant:"h5",component:"h3",align:"center"},"Voc\xea ainda nao esta em uma equipe."),r.a.createElement(Ye.a,{container:!0,spacing:2,direction:"row",justify:"space-around",alignItems:"center",className:t.divButtons},r.a.createElement(Ye.a,{item:!0,xs:12,sm:6,className:t.divButton},r.a.createElement(Xe.a,{variant:"contained",size:"large",color:"primary",className:t.button,onClick:function(){return m(!u)}},"Criar uma equipe")),r.a.createElement(Ye.a,{item:!0,xs:12,sm:6,className:t.divButton},r.a.createElement(Xe.a,{variant:"contained",size:"large",color:"primary",className:t.button,onClick:function(){return i(!o)}},"Entrar em uma equipe"))),r.a.createElement(xt,{open:u,setOpen:m}),r.a.createElement(yt,{open:o,setOpen:i}))}));var Nt=Object(Ze.a)(ut)((function(e){var t=e.classes,a=Object(s.b)(),c=Object(s.c)((function(e){return e.team.team})),o=Object(s.c)((function(e){return e.user.user})),i=Object(s.c)((function(e){return e.team.loading}));return Object(n.useEffect)((function(){c||a(function(e){return{type:"@team/GET_TEAM_REQUEST",payload:{team:e}}}(o.team))}),[a,c,o]),r.a.createElement(r.a.Fragment,null,i?r.a.createElement(ze.a,{className:t.root},r.a.createElement(Ve.a,{className:t.loading})):r.a.createElement(r.a.Fragment,null,c?r.a.createElement(dt,{team:c}):r.a.createElement(Tt,null)," "))}));function _t(){return r.a.createElement(Ye.a,{container:!0,spacing:2},r.a.createElement(Ye.a,{item:!0,xs:12,sm:6},r.a.createElement(Nt,null)))}function kt(){return r.a.createElement("h1",null,"Suport")}function Ct(){return r.a.createElement(u.d,null,r.a.createElement(We,{path:"/",exact:!0,component:tt}),r.a.createElement(We,{path:"/signUp",component:it}),r.a.createElement(We,{path:"/tasks",isPrivate:!0,component:lt}),r.a.createElement(We,{path:"/team",isPrivate:!0,component:_t}),r.a.createElement(We,{path:"/support",isPrivate:!0,component:kt}),r.a.createElement(We,{path:"/",component:tt}))}a(183);function wt(){var e=Object(p.a)(["\n\n  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n  *{\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input , button {\n    font: 14px 'Roboto', sans-serif;\n  }\n\n  a{\n    text-decoration: none;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n\n\n\n"]);return wt=function(){return e},e}var Ut=Object(d.a)(wt());var It=function(){return r.a.createElement(s.a,{store:Fe.store},r.a.createElement(l.a,{persistor:Fe.persistor},r.a.createElement(u.c,{history:Y},r.a.createElement(Ct,null),r.a.createElement(Ut,null),r.a.createElement(i.a,{autoClose:6e3}))))};o.a.render(r.a.createElement(It,null),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.915bbe80.chunk.js.map
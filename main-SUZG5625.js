import{c as R}from"./chunk-EZOIIFMR.js";import{a as ve,b as Ce,c as Me,d as Pe,e as Ee,g as ye,i as Oe,j as _e,k as Se}from"./chunk-RKVGBYQT.js";import{A as O,Ab as he,B as Q,Cb as be,E as f,Ea as se,Eb as K,Fa as le,G as ee,Ga as ce,Ja as de,L as te,O as _,Q as ne,R as oe,T as g,Ta as a,U,Ua as i,Va as c,W as I,Y as W,Z as S,_a as s,a as G,ba as v,ca as z,cb as C,ea as k,gb as pe,ib as J,j as Y,kb as me,la as re,lb as ue,m as q,mb as fe,n as A,o as D,oa as F,r as u,ua as V,ub as ge,v as X,va as ie,w as H,x as j,y as B,z as b,za as ae}from"./chunk-5O452SCU.js";var we=[{path:"accueil",loadChildren:()=>import("./chunk-5CNRGSDC.js").then(n=>n.AccueilModule)},{path:"diagnostics",loadChildren:()=>import("./chunk-VOVGSS6N.js").then(n=>n.DiagnosticessModule)},{path:"fiches",loadChildren:()=>import("./chunk-QYZPTNR6.js").then(n=>n.FichesModule)},{path:"signaler",loadChildren:()=>import("./chunk-XLACS7LV.js").then(n=>n.SignalerModule)},{path:"actualites",loadChildren:()=>import("./chunk-TUOV6KKS.js").then(n=>n.ActualitesModule)},{path:"connexion",loadChildren:()=>import("./chunk-FJTAUQNW.js").then(n=>n.ConnexionModule)},{path:"partenaires",loadChildren:()=>import("./chunk-Q6YMCV5Z.js").then(n=>n.PartenairesModule)},{path:"erreur",loadChildren:()=>import("./chunk-DBD64THO.js").then(n=>n.ErreurModule)},{path:"",redirectTo:"accueil",pathMatch:"full"},{path:"**",redirectTo:"erreur"}];var Te="@",Le=(()=>{class n{constructor(e,o,r,d,l){this.doc=e,this.delegate=o,this.zone=r,this.animationType=d,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=S(le,{optional:!0}),this.loadingSchedulerFn=S($e,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-M5LSZHZN.js").then(r=>r),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(r=>{throw new oe(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:d})=>{this._engine=r(this.animationType,this.doc);let l=new d(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(e,o){let r=this.delegate.createRenderer(e,o);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let d=new Z(r);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let p=l.createRenderer(e,o);d.use(p),this.scheduler?.notify(10)}).catch(l=>{d.use(r)}),d}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(o){se()}}static{this.\u0275prov=g({token:n,factory:n.\u0275fac})}}return n})(),Z=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,o,r){this.delegate.insertBefore(t,e,o,r)}removeChild(t,e,o){this.delegate.removeChild(t,e,o)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,o,r){this.delegate.setAttribute(t,e,o,r)}removeAttribute(t,e,o){this.delegate.removeAttribute(t,e,o)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,o,r){this.delegate.setStyle(t,e,o,r)}removeStyle(t,e,o){this.delegate.removeStyle(t,e,o)}setProperty(t,e,o){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,o)),this.delegate.setProperty(t,e,o)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,o){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(t,e,o)),this.delegate.listen(t,e,o)}shouldReplay(t){return this.replay!==null&&t.startsWith(Te)}},$e=new I("");function xe(n="animations"){return de("NgAsyncAnimations"),k([{provide:ce,useFactory:(t,e,o)=>new Le(t,e,o,n),deps:[ge,Pe,F]},{provide:ie,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var x="Service workers are disabled or not supported by this browser";function He(n){return H(()=>D(new Error(n)))}var P=class{constructor(t){if(this.serviceWorker=t,!t)this.worker=this.events=this.registration=He(x);else{let o=j(t,"controllerchange").pipe(u(()=>t.controller)),r=H(()=>A(t.controller)),d=X(r,o);this.worker=d.pipe(O(h=>!!h)),this.registration=this.worker.pipe(_(()=>t.getRegistration()));let y=j(t,"message").pipe(u(h=>h.data)).pipe(O(h=>h&&h.type)).pipe(te());y.connect(),this.events=y}}postMessage(t,e){return this.worker.pipe(f(1),ne(o=>{o.postMessage(G({action:t},e))})).toPromise().then(()=>{})}postMessageWithOperation(t,e,o){let r=this.waitForOperationCompleted(o),d=this.postMessage(t,e);return Promise.all([d,r]).then(([,l])=>l)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(t){let e;return typeof t=="string"?e=o=>o.type===t:e=o=>t.includes(o.type),this.events.pipe(O(e))}nextEventOfType(t){return this.eventsOfType(t).pipe(f(1))}waitForOperationCompleted(t){return this.eventsOfType("OPERATION_COMPLETED").pipe(O(e=>e.nonce===t),f(1),u(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},je=(()=>{class n{get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,this.pushManager=null,this.subscriptionChanges=new Y,!e.isEnabled){this.messages=b,this.notificationClicks=b,this.subscription=b;return}this.messages=this.sw.eventsOfType("PUSH").pipe(u(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(u(r=>r.data)),this.pushManager=this.sw.registration.pipe(u(r=>r.pushManager));let o=this.pushManager.pipe(_(r=>r.getSubscription()));this.subscription=B(o,this.subscriptionChanges)}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(x));let o={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),d=new Uint8Array(new ArrayBuffer(r.length));for(let l=0;l<r.length;l++)d[l]=r.charCodeAt(l);return o.applicationServerKey=d,this.pushManager.pipe(_(l=>l.subscribe(o)),f(1)).toPromise().then(l=>(this.subscriptionChanges.next(l),l))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(x));let e=o=>{if(o===null)throw new Error("Not subscribed to push notifications.");return o.unsubscribe().then(r=>{if(!r)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(f(1),_(e)).toPromise()}decodeBase64(e){return atob(e)}static{this.\u0275fac=function(o){return new(o||n)(W(P))}}static{this.\u0275prov=g({token:n,factory:n.\u0275fac})}}return n})(),Be=(()=>{class n{get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=b,this.unrecoverable=b;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(x));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(x));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static{this.\u0275fac=function(o){return new(o||n)(W(P))}}static{this.\u0275prov=g({token:n,factory:n.\u0275fac})}}return n})();var Ae=new I("");function Ue(n,t,e,o){return()=>{if(!(K(o)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let r=n.get(F),d=n.get(J);r.runOutsideAngular(()=>{let p=navigator.serviceWorker,m=()=>p.controller?.postMessage({action:"INITIALIZE"});p.addEventListener("controllerchange",m),d.onDestroy(()=>{p.removeEventListener("controllerchange",m)})});let l;if(typeof e.registrationStrategy=="function")l=e.registrationStrategy();else{let[p,...m]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(p){case"registerImmediately":l=A(null);break;case"registerWithDelay":l=De(+m[0]||0);break;case"registerWhenStable":let y=q(n.get(J).whenStable());l=m[0]?B(y,De(+m[0])):y;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}r.runOutsideAngular(()=>l.pipe(f(1)).subscribe(()=>navigator.serviceWorker.register(t,{scope:e.scope}).catch(p=>console.error("Service worker registration failed with:",p))))}}function De(n){return A(null).pipe(ee(n))}function We(n,t){return new P(K(t)&&n.enabled!==!1?navigator.serviceWorker:void 0)}var w=class{};function Ie(n,t={}){return k([je,Be,{provide:Ae,useValue:n},{provide:w,useValue:t},{provide:P,useFactory:We,deps:[w,V]},{provide:pe,useFactory:Ue,deps:[re,Ae,w,V],multi:!0}])}var N=class n{token="mm";login(){return this.token}static \u0275fac=function(e){return new(e||n)};static \u0275prov=g({token:n,factory:n.\u0275fac,providedIn:"root"})};function ke(n,t){if(!S(N).login())return t(n);let r=new ve({Authorization:"Bearer token"}),d=n.clone({headers:r});return t(d).pipe(Q(l=>(console.error("Erreur de la requ\xEAte : ",l),D(l))))}var Fe={providers:[Ce(Me([ke])),{provide:ue,useValue:"fr-FR"},me({eventCoalescing:!0}),Se(we),xe(),Ie("ngsw-worker.js",{enabled:!fe(),registrationStrategy:"registerWhenStable:30000"})]};var E=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-header"]],standalone:!0,features:[C],decls:58,vars:0,consts:[[1,"hauteDeBannier"],[1,"container"],[1,"row"],[1,"col-lg-6","col-md-6","col-sm-6","col-6"],["routerLink","/"],["src","images/logo.svg","alt","Appi",1,"logoAppi"],["routerLink","/connexion"],["routerLink","/connexion/inscription"],[1,"inscrire"],[1,"menu"],[1,"col-lg-12"],["data-bs-theme","dark",1,"navbar","navbar-expand-md","mobile"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#navbarNav","aria-controls","offcanvasRightLabel","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["tabindex","1","id","navbarNav","aria-labelledby","offcanvasRightLabel",1,"offcanvas","offcanvas-end","mobile"],[1,"offcanvas-body","justify-content-end","navbar-nav"],[1,"nav-item","active"],["routerLink","/","routerLinkActive","Active","data-bs-dismiss","offcanvas","aria-label","Close",1,"nav-link"],[1,"nav-item"],["routerLink","/diagnostics","data-bs-dismiss","Active","aria-label","Close",1,"nav-link"],["routerLink","/fiches","routerLinkActive","Active","data-bs-dismiss","offcanvas","aria-label","Close",1,"nav-link"],["routerLink","/signaler","routerLinkActive","Active","data-bs-dismiss","offcanvas","aria-label","Close",1,"nav-link"],["routerLink","/actualites","routerLinkActive","Active","data-bs-dismiss","offcanvas","aria-label","Close",1,"nav-link"],["routerLink","/partenaires","routerLinkActive","Active","data-bs-dismiss","offcanvas","aria-label","Close",1,"nav-link"],["data-bs-toggle","modal","data-bs-target","#exampleModal",1,"nav-item"],["data-bs-dismiss","offcanvas","aria-label","Close",1,"nav-link","s"],[1,"bi","bi-search"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"]],template:function(e,o){e&1&&(a(0,"div",0)(1,"div",1)(2,"section",2)(3,"article",3)(4,"a",4),c(5,"img",5),i()(),a(6,"article",3)(7,"nav")(8,"a",6)(9,"div"),s(10,"Connexion"),i()(),a(11,"a",7)(12,"div",8),s(13,"S'inscrire"),i()()()()()()(),a(14,"div",9)(15,"div",1)(16,"section",2)(17,"article",10)(18,"nav",11)(19,"button",12),c(20,"span",13),i(),a(21,"div",14)(22,"ul",15)(23,"li",16)(24,"a",17),s(25,"Accueil"),i()(),a(26,"li",18)(27,"a",19),s(28,"Diagnostics"),i()(),a(29,"li",18)(30,"a",20),s(31,"Fiches"),i()(),a(32,"li",18)(33,"a",21),s(34,"Signaler"),i()(),a(35,"li",18)(36,"a",22),s(37,"Actualit\xE9s"),i()(),a(38,"li",18)(39,"a",23),s(40,"Partenaires"),i()(),a(41,"li",24)(42,"a",25),c(43,"i",26),i()()()()()()()()(),a(44,"div",27)(45,"div",28)(46,"div",29)(47,"div",30)(48,"h1",31),s(49,"Modal title"),i(),c(50,"button",32),i(),a(51,"div",33),s(52," ... "),i(),a(53,"div",34)(54,"button",35),s(55,"Close"),i(),a(56,"button",36),s(57,"Save changes"),i()()()()())},dependencies:[R,Oe,_e],styles:[".hauteDeBannier[_ngcontent-%COMP%]{background-color:#0e103c;height:5.625em;display:flex;align-items:center}.hauteDeBannier[_ngcontent-%COMP%]   .logoAppi[_ngcontent-%COMP%]{height:5em;fill:#f0f8ff}.hauteDeBannier[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;justify-content:end;align-items:center;height:5em}.hauteDeBannier[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;font-size:1em;margin-left:1em;color:#fff;text-decoration:none}.hauteDeBannier[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#e2d404}.hauteDeBannier[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .inscrire[_ngcontent-%COMP%]{border:#fff .063em solid;padding:.5em;border-radius:.5em}.menu[_ngcontent-%COMP%]{background-color:#039189}.menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;justify-content:end;align-items:center}.menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]{border-color:#fff;margin-top:8px;margin-bottom:8px}.menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none;margin-left:1em;font-family:Arial,Helvetica,sans-serif;font-size:1em}.menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#039189}.menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#fff;border-radius:8px;padding:8px;cursor:pointer}.menu[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .Active[_ngcontent-%COMP%]{color:#fff;text-decoration:none;margin-left:1em;font-family:Arial,Helvetica,sans-serif;font-size:1em}"]})};var T=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=z({type:n});static \u0275inj=U({imports:[be,E]})};var L=class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-footer"]],standalone:!0,features:[C],decls:69,vars:0,consts:[[1,"map"],["src",ae`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.8991009935926!2d4.615563796789561!3d50.666133899999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17e797890db91%3A0xd761f24fa95f973b!2sClinique%20des%20Plantes!5e0!3m2!1sfr!2sbe!4v1732019342925!5m2!1sfr!2sbe`,"width","100%","height","500","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],[1,"contact"],[1,"container"],[1,"row"],[1,"col-lg-8"],[1,"contacter"],[1,"phone"],[1,"bi","bi-telephone-fill"],[1,"mail"],[1,"bi","bi-envelope-fill"],[1,"address"],[1,"adresse"],[1,"bi","bi-geo-alt-fill"],[1,"col-lg-4"],[1,"newsletter"],["type","text","name","","id","","placeholder","Pr\xE9nom",1,"form-control"],["type","text","name","","id","","placeholder","Nom",1,"form-control"],["type","text","name","","id","","placeholder","T\xE9l\xE9phone",1,"form-control"],["type","text","name","","id","","placeholder","E-mail",1,"form-control"],[1,"btn","btn-success","form-control"],[1,"pied"],[1,"row","piedItem"],[1,"col-lg-12"],["href",""]],template:function(e,o){e&1&&(a(0,"footer")(1,"div",0),c(2,"iframe",1),i(),a(3,"div",2)(4,"div",3)(5,"section",4)(6,"article",5)(7,"div",6)(8,"h3"),s(9,"Contact"),i(),c(10,"hr"),a(11,"p")(12,"span",7),c(13,"i",8),i(),s(14," T\xE9l : +32 10 47 37 52 "),i(),a(15,"p")(16,"span",9),c(17,"i",10),i(),s(18," E-mail : cliniquedesplantes[at]uclouvain.be "),i(),a(19,"p",11)(20,"span",12),c(21,"i",13),i(),s(22," Localisation des bureaux : "),c(23,"br"),i(),a(24,"blockquote")(25,"p"),s(26," Clinique des plantes "),c(27,"br"),s(28," Tour Kellner, Etage 0, local d.077.20 "),c(29,"br"),s(30," Place Croix du Sud 2 "),c(31,"br"),s(32," B-1348 Louvain-la-Neuve "),c(33,"br"),i()(),a(34,"p",11),s(35,"Heures d'ouverture "),i(),a(36,"p"),s(37,"Lundi-Vendredi : 8:30 - 17:00 "),i(),a(38,"p"),s(39,"Samedi, dimanche, jours f\xE9ri\xE9s : ferm\xE9"),i()()(),a(40,"article",14)(41,"div",15)(42,"h3"),s(43,"Newsletter"),i(),c(44,"hr"),a(45,"p"),s(46," Aimeriez-vous recevoir les derni\xE8res actualit\xE9s "),c(47,"br"),s(48," et des conseils directement dans votre bo\xEEte mail ? "),i(),a(49,"p"),c(50,"input",16),i(),a(51,"p"),c(52,"input",17),i(),a(53,"p"),c(54,"input",18),i(),a(55,"p"),c(56,"input",19),i(),a(57,"p")(58,"button",20),s(59,"Abonnez-vous"),i()()()()()()(),a(60,"div",21)(61,"div",3)(62,"div",22)(63,"article",23)(64,"nav")(65,"a",24),s(66,"Tous droits r\xE9serv\xE9s \xA9 ASBL CORDER avec le soutien de la R\xE9gion wallonne"),i(),a(67,"a",24),s(68,"Conditions g\xE9n\xE9rales d'utilisation"),i()()()()()()())},styles:["footer[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;font-size:1em;margin:0;padding:0}footer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#039189;font-family:Arial,Helvetica,sans-serif;font-size:32px}footer[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%]{padding:0;margin-bottom:-.625em;width:100%;padding:auto;margin-right:auto}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{padding-top:28px;padding-bottom:28px;background-color:#e7e6eb}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contacter[_ngcontent-%COMP%]{background-color:#fff;padding:16px;border-radius:8px;box-shadow:1px 1px 3px #252525;margin-top:28px;margin-bottom:28px}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contacter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contacter[_ngcontent-%COMP%]   p.address[_ngcontent-%COMP%]{color:#039189}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contacter[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contacter[_ngcontent-%COMP%]   .mail[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contacter[_ngcontent-%COMP%]   .adresse[_ngcontent-%COMP%]{background-color:#039189;color:#fff;padding:4px;border-radius:5px}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .contacter[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]{display:block;margin:1em 40px}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]{background-color:#fff;padding:16px;border-radius:8px;box-shadow:1px 1px 3px #252525;margin-top:28px;margin-bottom:28px}footer[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .newsletter[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]{--bs-btn-color: #fff;--bs-btn-bg: #039189;--bs-btn-border-color: #039189;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #157347;--bs-btn-hover-border-color: #146c43;--bs-btn-focus-shadow-rgb: 60, 153, 110;--bs-btn-active-color: #fff;--bs-btn-active-bg: #146c43;--bs-btn-active-border-color: #13653f;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #198754;--bs-btn-disabled-border-color: #198754}footer[_ngcontent-%COMP%]   .pied[_ngcontent-%COMP%]{background-color:#039189}footer[_ngcontent-%COMP%]   .pied[_ngcontent-%COMP%]   .piedItem[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{padding-top:16px;padding-bottom:16px;display:flex;align-items:center;justify-content:space-between}footer[_ngcontent-%COMP%]   .pied[_ngcontent-%COMP%]   .piedItem[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}footer[_ngcontent-%COMP%]   .pied[_ngcontent-%COMP%]   .piedItem[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#e2d404}"]})};var $=class n{title="Appim";static \u0275fac=function(e){return new(e||n)};static \u0275cmp=v({type:n,selectors:[["app-root"]],standalone:!0,features:[C],decls:5,vars:0,consts:[[1,"header"],[1,"footer"]],template:function(e,o){e&1&&(a(0,"div",0),c(1,"app-header"),i(),c(2,"router-outlet"),a(3,"div",1),c(4,"app-footer"),i())},dependencies:[ye,R,T,E,L]})};function Je(n){let t=n,e=Math.floor(Math.abs(n)),o=n.toString().replace(/^[^.]*\.?/,"").length,r=parseInt(n.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;return e===0||e===1?1:r===0&&e!==0&&e%1e6===0&&o===0||!(r>=0&&r<=5)?4:5}var Ne=["fr",[["AM","PM"],void 0,void 0],void 0,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],void 0,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xE9vr.","mars","avr.","mai","juin","juil.","ao\xFBt","sept.","oct.","nov.","d\xE9c."],["janvier","f\xE9vrier","mars","avril","mai","juin","juillet","ao\xFBt","septembre","octobre","novembre","d\xE9cembre"]],void 0,[["av. J.-C.","ap. J.-C."],void 0,["avant J\xE9sus-Christ","apr\xE8s J\xE9sus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1}, {0}","{1} '\xE0' {0}",void 0],[",","\u202F",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{ARS:["$AR","$"],AUD:["$AU","$"],BEF:["FB"],BMD:["$BM","$"],BND:["$BN","$"],BYN:[void 0,"\u0440."],BZD:["$BZ","$"],CAD:["$CA","$"],CLP:["$CL","$"],CNY:[void 0,"\xA5"],COP:["$CO","$"],CYP:["\xA3CY"],EGP:[void 0,"\xA3E"],FJD:["$FJ","$"],FKP:["\xA3FK","\xA3"],FRF:["F"],GBP:["\xA3GB","\xA3"],GIP:["\xA3GI","\xA3"],HKD:[void 0,"$"],IEP:["\xA3IE"],ILP:["\xA3IL"],ITL:["\u20A4IT"],JPY:[void 0,"\xA5"],KMF:[void 0,"FC"],LBP:["\xA3LB","\xA3L"],MTP:["\xA3MT"],MXN:["$MX","$"],NAD:["$NA","$"],NIO:[void 0,"$C"],NZD:["$NZ","$"],PHP:[void 0,"\u20B1"],RHD:["$RH"],RON:[void 0,"L"],RWF:[void 0,"FR"],SBD:["$SB","$"],SGD:["$SG","$"],SRD:["$SR","$"],TOP:[void 0,"$T"],TTD:["$TT","$"],TWD:[void 0,"NT$"],USD:["$US","$"],UYU:["$UY","$"],WST:["$WS"],XCD:[void 0,"$"],XPF:["FCFP"],ZMW:[void 0,"Kw"]},"ltr",Je];he(Ne);Ee($,Fe).catch(n=>console.error(n));
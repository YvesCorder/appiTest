import{a as S}from"./chunk-6WJUUZCQ.js";import{c as f}from"./chunk-EZOIIFMR.js";import{i as L,l as k}from"./chunk-RKVGBYQT.js";import{Ca as c,Cb as y,Da as h,Qa as s,Ra as x,Sa as b,Ta as o,U as d,Ua as i,Va as m,_a as r,ab as P,ba as l,ca as g,cb as p,db as A,xa as v,ya as j}from"./chunk-5O452SCU.js";var E=t=>["actualites-see",t],u=class t{actualitesListe;static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-actualites-liste"]],inputs:{actualitesListe:"actualitesListe"},standalone:!0,features:[p],decls:17,vars:8,consts:[[1,"container"],[1,"row"],[1,"col-lg-12"],[3,"routerLink"],[1,"cadre"],[1,"col-lg-4"],[1,"img"],["width","100%",3,"src","alt"],[1,"col-lg-8"],[1,"contenu"],[1,"date"],[3,"innerHTML"]],template:function(e,a){e&1&&(o(0,"main")(1,"div",0)(2,"section",1)(3,"article",2)(4,"a",3)(5,"div",4)(6,"section",1)(7,"article",5)(8,"div",6),m(9,"img",7),i()(),o(10,"article",8)(11,"div",9)(12,"h2"),r(13),i(),o(14,"p",10),r(15),i(),m(16,"div",11),i()()()()()()()()()),e&2&&(c(4),s("routerLink",A(6,E,a.actualitesListe.id)),c(5),s("src",a.actualitesListe.url,j)("alt",a.actualitesListe.titre),c(4),P("",a.actualitesListe.titre," "),c(2),P(" Mise en ligne le ",a.actualitesListe.date,""),c(),s("innerHTML",a.actualitesListe.contenu,v))},dependencies:[f,L],styles:["main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000}main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]{margin-bottom:2em;box-shadow:1px 1px 3px #000;border-radius:8px;padding:8px}main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:15.25em;display:flex;align-items:center;overflow:hidden;border-radius:8px}main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px}main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]   .contenu[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;font-size:32px;color:#03918a;margin-bottom:8px}main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]   .contenu[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{color:#e3254e}"]})};var F=(t,n)=>n.id;function N(t,n){if(t&1&&m(0,"app-actualites-liste",7),t&2){let e=n.$implicit;s("actualitesListe",e)}}var M=class t{constructor(n){this.actualites=n}actualitesContainer;ngOnInit(){this.actualitesContainer=this.actualites.get()}static \u0275fac=function(e){return new(e||t)(h(S))};static \u0275cmp=l({type:t,selectors:[["app-actualites-container"]],standalone:!0,features:[p],decls:17,vars:0,consts:[[1,"banniere"],[1,"container"],[1,"row"],[1,"col-lg-4"],[1,"cadre"],[1,"col-lg-8"],[1,"col-lg-12"],[3,"actualitesListe"]],template:function(e,a){e&1&&(o(0,"main")(1,"div",0)(2,"div",1)(3,"section",2)(4,"article",3)(5,"div",4)(6,"h2"),r(7,"Actualit\xE9s"),i(),o(8,"p"),r(9,"Retrouvez nos articles lkjlklkj kllkjlkj jlk lk jlkj jlkj lk kjlkj kljkj lkjlk jlkj jkj lkjlk jlkj lkj kljkljlk "),i()()(),m(10,"article",5),i()()(),o(11,"div",1)(12,"section",2)(13,"article",6)(14,"div",4),x(15,N,1,1,"app-actualites-liste",7,F),i()()()()()),e&2&&(c(15),b(a.actualitesContainer))},dependencies:[f,u],styles:["main[_ngcontent-%COMP%]{margin-bottom:56px}main[_ngcontent-%COMP%]   .banniere[_ngcontent-%COMP%]{background-image:url(https://images.pexels.com/photos/14242188/pexels-photo-14242188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);background-repeat:no-repeat;background-size:cover;background-position:center;height:400px;margin-bottom:56px;display:flex;align-items:center}main[_ngcontent-%COMP%]   .banniere[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]{background-color:#0e103d;border-radius:16px;color:#fff;padding:16px}main[_ngcontent-%COMP%]   .banniere[_ngcontent-%COMP%]   .cadre[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#f2911f}"]})};var _=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=l({type:t,selectors:[["app-actualites-single"]],standalone:!0,features:[p],decls:2,vars:0,template:function(e,a){e&1&&(o(0,"p"),r(1,"actualites-single works!"),i())}})};var D=[{path:"",component:M},{path:"actualites-liste",component:u},{path:"actualites-see/:id",component:_},{path:"",pathMatch:"full",redirectTo:""}],O=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=g({type:t});static \u0275inj=d({imports:[k.forChild(D),k]})};var I=class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=g({type:t});static \u0275inj=d({imports:[y,O]})};export{I as ActualitesModule};
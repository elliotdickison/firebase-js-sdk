!function(e,r,n){"use strict";function t(n){return new r.Observable(function(e){return{unsubscribe:n.onIdTokenChanged(e)}})}e.authState=function(n){return new r.Observable(function(e){return{unsubscribe:n.onAuthStateChanged(e)}})},e.idToken=function(e){return t(e).pipe(n.switchMap(function(e){return e?r.from(e.getIdToken()):r.of(null)}))},e.user=t,Object.defineProperty(e,"__esModule",{value:!0})}(this.rxfire=this.rxfire||{},rxjs,rxjs.operators);
//# sourceMappingURL=rxfire-auth.js.map
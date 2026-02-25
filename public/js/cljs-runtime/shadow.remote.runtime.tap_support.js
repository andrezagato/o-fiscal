goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20147,p__20148){
var map__20149 = p__20147;
var map__20149__$1 = cljs.core.__destructure_map(map__20149);
var svc = map__20149__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20149__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20149__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20149__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20150 = p__20148;
var map__20150__$1 = cljs.core.__destructure_map(map__20150);
var msg = map__20150__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20150__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20150__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20152,p__20153){
var map__20154 = p__20152;
var map__20154__$1 = cljs.core.__destructure_map(map__20154);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20154__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20155 = p__20153;
var map__20155__$1 = cljs.core.__destructure_map(map__20155);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20155__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20157,p__20158){
var map__20159 = p__20157;
var map__20159__$1 = cljs.core.__destructure_map(map__20159);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20159__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20159__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20160 = p__20158;
var map__20160__$1 = cljs.core.__destructure_map(map__20160);
var msg = map__20160__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20160__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20162,tid){
var map__20165 = p__20162;
var map__20165__$1 = cljs.core.__destructure_map(map__20165);
var svc = map__20165__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20165__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20175 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20176 = null;
var count__20177 = (0);
var i__20178 = (0);
while(true){
if((i__20178 < count__20177)){
var vec__20197 = chunk__20176.cljs$core$IIndexed$_nth$arity$2(null,i__20178);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20197,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20197,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20258 = seq__20175;
var G__20259 = chunk__20176;
var G__20260 = count__20177;
var G__20261 = (i__20178 + (1));
seq__20175 = G__20258;
chunk__20176 = G__20259;
count__20177 = G__20260;
i__20178 = G__20261;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20175);
if(temp__5823__auto__){
var seq__20175__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20175__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__20175__$1);
var G__20262 = cljs.core.chunk_rest(seq__20175__$1);
var G__20263 = c__5673__auto__;
var G__20264 = cljs.core.count(c__5673__auto__);
var G__20265 = (0);
seq__20175 = G__20262;
chunk__20176 = G__20263;
count__20177 = G__20264;
i__20178 = G__20265;
continue;
} else {
var vec__20203 = cljs.core.first(seq__20175__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20203,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20203,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20270 = cljs.core.next(seq__20175__$1);
var G__20271 = null;
var G__20272 = (0);
var G__20273 = (0);
seq__20175 = G__20270;
chunk__20176 = G__20271;
count__20177 = G__20272;
i__20178 = G__20273;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20168_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20168_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20170_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20170_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20171_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20171_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20172_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20172_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20210){
var map__20215 = p__20210;
var map__20215__$1 = cljs.core.__destructure_map(map__20215);
var svc = map__20215__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20215__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20215__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

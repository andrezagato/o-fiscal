goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14399){
var map__14400 = p__14399;
var map__14400__$1 = cljs.core.__destructure_map(map__14400);
var runtime = map__14400__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14400__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14693 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14693)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14409 = runtime;
var G__14410 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14693);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14409,G__14410) : shadow.remote.runtime.shared.process.call(null,G__14409,G__14410));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14418,res){
var map__14423 = p__14418;
var map__14423__$1 = cljs.core.__destructure_map(map__14423);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14423__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14423__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14424 = res;
var G__14424__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14424,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14424);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14424__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14424__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14444 = arguments.length;
switch (G__14444) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14462,msg,handlers,timeout_after_ms){
var map__14463 = p__14462;
var map__14463__$1 = cljs.core.__destructure_map(map__14463);
var runtime = map__14463__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14463__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___14773 = arguments.length;
var i__5877__auto___14775 = (0);
while(true){
if((i__5877__auto___14775 < len__5876__auto___14773)){
args__5882__auto__.push((arguments[i__5877__auto___14775]));

var G__14778 = (i__5877__auto___14775 + (1));
i__5877__auto___14775 = G__14778;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14492,ev,args){
var map__14493 = p__14492;
var map__14493__$1 = cljs.core.__destructure_map(map__14493);
var runtime = map__14493__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14493__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14497 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14500 = null;
var count__14501 = (0);
var i__14502 = (0);
while(true){
if((i__14502 < count__14501)){
var ext = chunk__14500.cljs$core$IIndexed$_nth$arity$2(null,i__14502);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14795 = seq__14497;
var G__14796 = chunk__14500;
var G__14797 = count__14501;
var G__14798 = (i__14502 + (1));
seq__14497 = G__14795;
chunk__14500 = G__14796;
count__14501 = G__14797;
i__14502 = G__14798;
continue;
} else {
var G__14799 = seq__14497;
var G__14800 = chunk__14500;
var G__14801 = count__14501;
var G__14802 = (i__14502 + (1));
seq__14497 = G__14799;
chunk__14500 = G__14800;
count__14501 = G__14801;
i__14502 = G__14802;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14497);
if(temp__5823__auto__){
var seq__14497__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14497__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14497__$1);
var G__14807 = cljs.core.chunk_rest(seq__14497__$1);
var G__14808 = c__5673__auto__;
var G__14809 = cljs.core.count(c__5673__auto__);
var G__14810 = (0);
seq__14497 = G__14807;
chunk__14500 = G__14808;
count__14501 = G__14809;
i__14502 = G__14810;
continue;
} else {
var ext = cljs.core.first(seq__14497__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14812 = cljs.core.next(seq__14497__$1);
var G__14813 = null;
var G__14814 = (0);
var G__14815 = (0);
seq__14497 = G__14812;
chunk__14500 = G__14813;
count__14501 = G__14814;
i__14502 = G__14815;
continue;
} else {
var G__14817 = cljs.core.next(seq__14497__$1);
var G__14819 = null;
var G__14822 = (0);
var G__14823 = (0);
seq__14497 = G__14817;
chunk__14500 = G__14819;
count__14501 = G__14822;
i__14502 = G__14823;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14482){
var G__14483 = cljs.core.first(seq14482);
var seq14482__$1 = cljs.core.next(seq14482);
var G__14484 = cljs.core.first(seq14482__$1);
var seq14482__$2 = cljs.core.next(seq14482__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14483,G__14484,seq14482__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14512,p__14513){
var map__14514 = p__14512;
var map__14514__$1 = cljs.core.__destructure_map(map__14514);
var runtime = map__14514__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14514__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14515 = p__14513;
var map__14515__$1 = cljs.core.__destructure_map(map__14515);
var msg = map__14515__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14515__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14516 = cljs.core.deref(state_ref);
var map__14516__$1 = cljs.core.__destructure_map(map__14516);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14516__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14516__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14521,msg){
var map__14522 = p__14521;
var map__14522__$1 = cljs.core.__destructure_map(map__14522);
var runtime = map__14522__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14527,key,p__14528){
var map__14529 = p__14527;
var map__14529__$1 = cljs.core.__destructure_map(map__14529);
var state = map__14529__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14529__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14530 = p__14528;
var map__14530__$1 = cljs.core.__destructure_map(map__14530);
var spec = map__14530__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14530__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14530__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14535,key,spec){
var map__14536 = p__14535;
var map__14536__$1 = cljs.core.__destructure_map(map__14536);
var runtime = map__14536__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14536__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14942 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14942 == null)){
} else {
var on_welcome_14943 = temp__5827__auto___14942;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14943.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14943.cljs$core$IFn$_invoke$arity$0() : on_welcome_14943.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14541_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14541_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14542_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14542_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14543_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14543_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14544_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14544_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14546_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14546_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14552,key){
var map__14553 = p__14552;
var map__14553__$1 = cljs.core.__destructure_map(map__14553);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14553__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14559,msg){
var map__14560 = p__14559;
var map__14560__$1 = cljs.core.__destructure_map(map__14560);
var runtime = map__14560__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14560__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14586,p__14587){
var map__14590 = p__14586;
var map__14590__$1 = cljs.core.__destructure_map(map__14590);
var runtime = map__14590__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14590__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14591 = p__14587;
var map__14591__$1 = cljs.core.__destructure_map(map__14591);
var msg = map__14591__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14600 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14602 = null;
var count__14603 = (0);
var i__14604 = (0);
while(true){
if((i__14604 < count__14603)){
var map__14629 = chunk__14602.cljs$core$IIndexed$_nth$arity$2(null,i__14604);
var map__14629__$1 = cljs.core.__destructure_map(map__14629);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14629__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15102 = seq__14600;
var G__15103 = chunk__14602;
var G__15104 = count__14603;
var G__15105 = (i__14604 + (1));
seq__14600 = G__15102;
chunk__14602 = G__15103;
count__14603 = G__15104;
i__14604 = G__15105;
continue;
} else {
var G__15108 = seq__14600;
var G__15109 = chunk__14602;
var G__15110 = count__14603;
var G__15111 = (i__14604 + (1));
seq__14600 = G__15108;
chunk__14602 = G__15109;
count__14603 = G__15110;
i__14604 = G__15111;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14600);
if(temp__5823__auto__){
var seq__14600__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14600__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14600__$1);
var G__15115 = cljs.core.chunk_rest(seq__14600__$1);
var G__15116 = c__5673__auto__;
var G__15117 = cljs.core.count(c__5673__auto__);
var G__15118 = (0);
seq__14600 = G__15115;
chunk__14602 = G__15116;
count__14603 = G__15117;
i__14604 = G__15118;
continue;
} else {
var map__14650 = cljs.core.first(seq__14600__$1);
var map__14650__$1 = cljs.core.__destructure_map(map__14650);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14650__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15121 = cljs.core.next(seq__14600__$1);
var G__15122 = null;
var G__15123 = (0);
var G__15124 = (0);
seq__14600 = G__15121;
chunk__14602 = G__15122;
count__14603 = G__15123;
i__14604 = G__15124;
continue;
} else {
var G__15125 = cljs.core.next(seq__14600__$1);
var G__15126 = null;
var G__15127 = (0);
var G__15128 = (0);
seq__14600 = G__15125;
chunk__14602 = G__15126;
count__14603 = G__15127;
i__14604 = G__15128;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

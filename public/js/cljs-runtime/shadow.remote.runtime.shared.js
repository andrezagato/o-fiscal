goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14411){
var map__14412 = p__14411;
var map__14412__$1 = cljs.core.__destructure_map(map__14412);
var runtime = map__14412__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14412__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14582 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14582)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14415 = runtime;
var G__14416 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14582);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14415,G__14416) : shadow.remote.runtime.shared.process.call(null,G__14415,G__14416));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14422,res){
var map__14426 = p__14422;
var map__14426__$1 = cljs.core.__destructure_map(map__14426);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14426__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14426__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14427 = res;
var G__14427__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14427,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14427);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14427__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14427__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14437 = arguments.length;
switch (G__14437) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14441,msg,handlers,timeout_after_ms){
var map__14442 = p__14441;
var map__14442__$1 = cljs.core.__destructure_map(map__14442);
var runtime = map__14442__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14442__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5876__auto___14607 = arguments.length;
var i__5877__auto___14609 = (0);
while(true){
if((i__5877__auto___14609 < len__5876__auto___14607)){
args__5882__auto__.push((arguments[i__5877__auto___14609]));

var G__14614 = (i__5877__auto___14609 + (1));
i__5877__auto___14609 = G__14614;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14457,ev,args){
var map__14458 = p__14457;
var map__14458__$1 = cljs.core.__destructure_map(map__14458);
var runtime = map__14458__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14458__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14462 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14465 = null;
var count__14466 = (0);
var i__14467 = (0);
while(true){
if((i__14467 < count__14466)){
var ext = chunk__14465.cljs$core$IIndexed$_nth$arity$2(null,i__14467);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14635 = seq__14462;
var G__14636 = chunk__14465;
var G__14637 = count__14466;
var G__14638 = (i__14467 + (1));
seq__14462 = G__14635;
chunk__14465 = G__14636;
count__14466 = G__14637;
i__14467 = G__14638;
continue;
} else {
var G__14639 = seq__14462;
var G__14640 = chunk__14465;
var G__14641 = count__14466;
var G__14642 = (i__14467 + (1));
seq__14462 = G__14639;
chunk__14465 = G__14640;
count__14466 = G__14641;
i__14467 = G__14642;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14462);
if(temp__5823__auto__){
var seq__14462__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14462__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14462__$1);
var G__14643 = cljs.core.chunk_rest(seq__14462__$1);
var G__14644 = c__5673__auto__;
var G__14645 = cljs.core.count(c__5673__auto__);
var G__14646 = (0);
seq__14462 = G__14643;
chunk__14465 = G__14644;
count__14466 = G__14645;
i__14467 = G__14646;
continue;
} else {
var ext = cljs.core.first(seq__14462__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14647 = cljs.core.next(seq__14462__$1);
var G__14648 = null;
var G__14649 = (0);
var G__14650 = (0);
seq__14462 = G__14647;
chunk__14465 = G__14648;
count__14466 = G__14649;
i__14467 = G__14650;
continue;
} else {
var G__14651 = cljs.core.next(seq__14462__$1);
var G__14652 = null;
var G__14653 = (0);
var G__14654 = (0);
seq__14462 = G__14651;
chunk__14465 = G__14652;
count__14466 = G__14653;
i__14467 = G__14654;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14447){
var G__14448 = cljs.core.first(seq14447);
var seq14447__$1 = cljs.core.next(seq14447);
var G__14449 = cljs.core.first(seq14447__$1);
var seq14447__$2 = cljs.core.next(seq14447__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14448,G__14449,seq14447__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14484,p__14485){
var map__14486 = p__14484;
var map__14486__$1 = cljs.core.__destructure_map(map__14486);
var runtime = map__14486__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14486__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14487 = p__14485;
var map__14487__$1 = cljs.core.__destructure_map(map__14487);
var msg = map__14487__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14487__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14488 = cljs.core.deref(state_ref);
var map__14488__$1 = cljs.core.__destructure_map(map__14488);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14488__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14488__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14490,msg){
var map__14491 = p__14490;
var map__14491__$1 = cljs.core.__destructure_map(map__14491);
var runtime = map__14491__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14491__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14499,key,p__14500){
var map__14501 = p__14499;
var map__14501__$1 = cljs.core.__destructure_map(map__14501);
var state = map__14501__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14501__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14502 = p__14500;
var map__14502__$1 = cljs.core.__destructure_map(map__14502);
var spec = map__14502__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14502__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14502__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14506,key,spec){
var map__14507 = p__14506;
var map__14507__$1 = cljs.core.__destructure_map(map__14507);
var runtime = map__14507__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14507__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14729 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14729 == null)){
} else {
var on_welcome_14732 = temp__5827__auto___14729;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14732.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14732.cljs$core$IFn$_invoke$arity$0() : on_welcome_14732.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14509_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14509_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14510_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14510_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14511_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14511_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14512_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14512_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14513_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14513_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14519,key){
var map__14520 = p__14519;
var map__14520__$1 = cljs.core.__destructure_map(map__14520);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14520__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14521,msg){
var map__14522 = p__14521;
var map__14522__$1 = cljs.core.__destructure_map(map__14522);
var runtime = map__14522__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14529,p__14530){
var map__14531 = p__14529;
var map__14531__$1 = cljs.core.__destructure_map(map__14531);
var runtime = map__14531__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14531__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14532 = p__14530;
var map__14532__$1 = cljs.core.__destructure_map(map__14532);
var msg = map__14532__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14532__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14532__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__14536 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14538 = null;
var count__14539 = (0);
var i__14540 = (0);
while(true){
if((i__14540 < count__14539)){
var map__14550 = chunk__14538.cljs$core$IIndexed$_nth$arity$2(null,i__14540);
var map__14550__$1 = cljs.core.__destructure_map(map__14550);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14550__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14879 = seq__14536;
var G__14880 = chunk__14538;
var G__14881 = count__14539;
var G__14882 = (i__14540 + (1));
seq__14536 = G__14879;
chunk__14538 = G__14880;
count__14539 = G__14881;
i__14540 = G__14882;
continue;
} else {
var G__14896 = seq__14536;
var G__14897 = chunk__14538;
var G__14898 = count__14539;
var G__14899 = (i__14540 + (1));
seq__14536 = G__14896;
chunk__14538 = G__14897;
count__14539 = G__14898;
i__14540 = G__14899;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14536);
if(temp__5823__auto__){
var seq__14536__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14536__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14536__$1);
var G__14907 = cljs.core.chunk_rest(seq__14536__$1);
var G__14908 = c__5673__auto__;
var G__14909 = cljs.core.count(c__5673__auto__);
var G__14910 = (0);
seq__14536 = G__14907;
chunk__14538 = G__14908;
count__14539 = G__14909;
i__14540 = G__14910;
continue;
} else {
var map__14557 = cljs.core.first(seq__14536__$1);
var map__14557__$1 = cljs.core.__destructure_map(map__14557);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14557__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14920 = cljs.core.next(seq__14536__$1);
var G__14921 = null;
var G__14922 = (0);
var G__14923 = (0);
seq__14536 = G__14920;
chunk__14538 = G__14921;
count__14539 = G__14922;
i__14540 = G__14923;
continue;
} else {
var G__14925 = cljs.core.next(seq__14536__$1);
var G__14926 = null;
var G__14927 = (0);
var G__14928 = (0);
seq__14536 = G__14925;
chunk__14538 = G__14926;
count__14539 = G__14927;
i__14540 = G__14928;
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

goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 * @type {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__20784){
var map__20785 = p__20784;
var map__20785__$1 = cljs.core.__destructure_map(map__20785);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5142__auto__ = child_of;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__20798_20884 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__20799_20885 = null;
var count__20800_20886 = (0);
var i__20801_20887 = (0);
while(true){
if((i__20801_20887 < count__20800_20886)){
var vec__20832_20888 = chunk__20799_20885.cljs$core$IIndexed$_nth$arity$2(null,i__20801_20887);
var k_20889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20832_20888,(0),null);
var cb_20890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20832_20888,(1),null);
try{var G__20840_20891 = cljs.core.deref(re_frame.trace.traces);
(cb_20890.cljs$core$IFn$_invoke$arity$1 ? cb_20890.cljs$core$IFn$_invoke$arity$1(G__20840_20891) : cb_20890.call(null,G__20840_20891));
}catch (e20838){var e_20892 = e20838;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20889,"while storing",cljs.core.deref(re_frame.trace.traces),e_20892], 0));
}

var G__20893 = seq__20798_20884;
var G__20894 = chunk__20799_20885;
var G__20895 = count__20800_20886;
var G__20896 = (i__20801_20887 + (1));
seq__20798_20884 = G__20893;
chunk__20799_20885 = G__20894;
count__20800_20886 = G__20895;
i__20801_20887 = G__20896;
continue;
} else {
var temp__5823__auto___20897 = cljs.core.seq(seq__20798_20884);
if(temp__5823__auto___20897){
var seq__20798_20898__$1 = temp__5823__auto___20897;
if(cljs.core.chunked_seq_QMARK_(seq__20798_20898__$1)){
var c__5673__auto___20899 = cljs.core.chunk_first(seq__20798_20898__$1);
var G__20900 = cljs.core.chunk_rest(seq__20798_20898__$1);
var G__20901 = c__5673__auto___20899;
var G__20902 = cljs.core.count(c__5673__auto___20899);
var G__20903 = (0);
seq__20798_20884 = G__20900;
chunk__20799_20885 = G__20901;
count__20800_20886 = G__20902;
i__20801_20887 = G__20903;
continue;
} else {
var vec__20844_20905 = cljs.core.first(seq__20798_20898__$1);
var k_20906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20844_20905,(0),null);
var cb_20907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20844_20905,(1),null);
try{var G__20851_20909 = cljs.core.deref(re_frame.trace.traces);
(cb_20907.cljs$core$IFn$_invoke$arity$1 ? cb_20907.cljs$core$IFn$_invoke$arity$1(G__20851_20909) : cb_20907.call(null,G__20851_20909));
}catch (e20848){var e_20911 = e20848;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_20906,"while storing",cljs.core.deref(re_frame.trace.traces),e_20911], 0));
}

var G__20912 = cljs.core.next(seq__20798_20898__$1);
var G__20913 = null;
var G__20914 = (0);
var G__20915 = (0);
seq__20798_20884 = G__20912;
chunk__20799_20885 = G__20913;
count__20800_20886 = G__20914;
i__20801_20887 = G__20915;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

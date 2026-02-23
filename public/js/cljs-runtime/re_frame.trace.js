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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12630){
var map__12631 = p__12630;
var map__12631__$1 = cljs.core.__destructure_map(map__12631);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12631__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12631__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12631__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12631__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__12632_12663 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12633_12664 = null;
var count__12634_12665 = (0);
var i__12635_12666 = (0);
while(true){
if((i__12635_12666 < count__12634_12665)){
var vec__12650_12667 = chunk__12633_12664.cljs$core$IIndexed$_nth$arity$2(null,i__12635_12666);
var k_12668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12650_12667,(0),null);
var cb_12669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12650_12667,(1),null);
try{var G__12654_12670 = cljs.core.deref(re_frame.trace.traces);
(cb_12669.cljs$core$IFn$_invoke$arity$1 ? cb_12669.cljs$core$IFn$_invoke$arity$1(G__12654_12670) : cb_12669.call(null,G__12654_12670));
}catch (e12653){var e_12671 = e12653;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12668,"while storing",cljs.core.deref(re_frame.trace.traces),e_12671], 0));
}

var G__12672 = seq__12632_12663;
var G__12673 = chunk__12633_12664;
var G__12674 = count__12634_12665;
var G__12675 = (i__12635_12666 + (1));
seq__12632_12663 = G__12672;
chunk__12633_12664 = G__12673;
count__12634_12665 = G__12674;
i__12635_12666 = G__12675;
continue;
} else {
var temp__5823__auto___12676 = cljs.core.seq(seq__12632_12663);
if(temp__5823__auto___12676){
var seq__12632_12677__$1 = temp__5823__auto___12676;
if(cljs.core.chunked_seq_QMARK_(seq__12632_12677__$1)){
var c__5673__auto___12678 = cljs.core.chunk_first(seq__12632_12677__$1);
var G__12679 = cljs.core.chunk_rest(seq__12632_12677__$1);
var G__12680 = c__5673__auto___12678;
var G__12681 = cljs.core.count(c__5673__auto___12678);
var G__12682 = (0);
seq__12632_12663 = G__12679;
chunk__12633_12664 = G__12680;
count__12634_12665 = G__12681;
i__12635_12666 = G__12682;
continue;
} else {
var vec__12655_12683 = cljs.core.first(seq__12632_12677__$1);
var k_12684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12655_12683,(0),null);
var cb_12685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12655_12683,(1),null);
try{var G__12659_12686 = cljs.core.deref(re_frame.trace.traces);
(cb_12685.cljs$core$IFn$_invoke$arity$1 ? cb_12685.cljs$core$IFn$_invoke$arity$1(G__12659_12686) : cb_12685.call(null,G__12659_12686));
}catch (e12658){var e_12687 = e12658;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12684,"while storing",cljs.core.deref(re_frame.trace.traces),e_12687], 0));
}

var G__12688 = cljs.core.next(seq__12632_12677__$1);
var G__12689 = null;
var G__12690 = (0);
var G__12691 = (0);
seq__12632_12663 = G__12688;
chunk__12633_12664 = G__12689;
count__12634_12665 = G__12690;
i__12635_12666 = G__12691;
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

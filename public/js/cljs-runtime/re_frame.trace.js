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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22726){
var map__22727 = p__22726;
var map__22727__$1 = cljs.core.__destructure_map(map__22727);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22727__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__22728_22755 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22729_22756 = null;
var count__22730_22757 = (0);
var i__22731_22758 = (0);
while(true){
if((i__22731_22758 < count__22730_22757)){
var vec__22742_22759 = chunk__22729_22756.cljs$core$IIndexed$_nth$arity$2(null,i__22731_22758);
var k_22760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22742_22759,(0),null);
var cb_22761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22742_22759,(1),null);
try{var G__22746_22762 = cljs.core.deref(re_frame.trace.traces);
(cb_22761.cljs$core$IFn$_invoke$arity$1 ? cb_22761.cljs$core$IFn$_invoke$arity$1(G__22746_22762) : cb_22761.call(null,G__22746_22762));
}catch (e22745){var e_22763 = e22745;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22760,"while storing",cljs.core.deref(re_frame.trace.traces),e_22763], 0));
}

var G__22764 = seq__22728_22755;
var G__22765 = chunk__22729_22756;
var G__22766 = count__22730_22757;
var G__22767 = (i__22731_22758 + (1));
seq__22728_22755 = G__22764;
chunk__22729_22756 = G__22765;
count__22730_22757 = G__22766;
i__22731_22758 = G__22767;
continue;
} else {
var temp__5823__auto___22768 = cljs.core.seq(seq__22728_22755);
if(temp__5823__auto___22768){
var seq__22728_22769__$1 = temp__5823__auto___22768;
if(cljs.core.chunked_seq_QMARK_(seq__22728_22769__$1)){
var c__5673__auto___22770 = cljs.core.chunk_first(seq__22728_22769__$1);
var G__22771 = cljs.core.chunk_rest(seq__22728_22769__$1);
var G__22772 = c__5673__auto___22770;
var G__22773 = cljs.core.count(c__5673__auto___22770);
var G__22774 = (0);
seq__22728_22755 = G__22771;
chunk__22729_22756 = G__22772;
count__22730_22757 = G__22773;
i__22731_22758 = G__22774;
continue;
} else {
var vec__22747_22775 = cljs.core.first(seq__22728_22769__$1);
var k_22776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22747_22775,(0),null);
var cb_22777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22747_22775,(1),null);
try{var G__22751_22778 = cljs.core.deref(re_frame.trace.traces);
(cb_22777.cljs$core$IFn$_invoke$arity$1 ? cb_22777.cljs$core$IFn$_invoke$arity$1(G__22751_22778) : cb_22777.call(null,G__22751_22778));
}catch (e22750){var e_22779 = e22750;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22776,"while storing",cljs.core.deref(re_frame.trace.traces),e_22779], 0));
}

var G__22780 = cljs.core.next(seq__22728_22769__$1);
var G__22781 = null;
var G__22782 = (0);
var G__22783 = (0);
seq__22728_22755 = G__22780;
chunk__22729_22756 = G__22781;
count__22730_22757 = G__22782;
i__22731_22758 = G__22783;
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

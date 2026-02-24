goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21625 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21626 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21626);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___21888 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___21888)){
var new_db_21890 = temp__5823__auto___21888;
var fexpr__21627_21891 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21627_21891.cljs$core$IFn$_invoke$arity$1 ? fexpr__21627_21891.cljs$core$IFn$_invoke$arity$1(new_db_21890) : fexpr__21627_21891.call(null,new_db_21890));
} else {
}

var seq__21628 = cljs.core.seq(effects_without_db);
var chunk__21629 = null;
var count__21630 = (0);
var i__21631 = (0);
while(true){
if((i__21631 < count__21630)){
var vec__21647 = chunk__21629.cljs$core$IIndexed$_nth$arity$2(null,i__21631);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21647,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21647,(1),null);
var temp__5821__auto___21894 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___21894)){
var effect_fn_21896 = temp__5821__auto___21894;
(effect_fn_21896.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21896.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21896.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21899 = seq__21628;
var G__21900 = chunk__21629;
var G__21901 = count__21630;
var G__21902 = (i__21631 + (1));
seq__21628 = G__21899;
chunk__21629 = G__21900;
count__21630 = G__21901;
i__21631 = G__21902;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21628);
if(temp__5823__auto__){
var seq__21628__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21628__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21628__$1);
var G__21905 = cljs.core.chunk_rest(seq__21628__$1);
var G__21906 = c__5673__auto__;
var G__21907 = cljs.core.count(c__5673__auto__);
var G__21908 = (0);
seq__21628 = G__21905;
chunk__21629 = G__21906;
count__21630 = G__21907;
i__21631 = G__21908;
continue;
} else {
var vec__21651 = cljs.core.first(seq__21628__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21651,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21651,(1),null);
var temp__5821__auto___21911 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___21911)){
var effect_fn_21912 = temp__5821__auto___21911;
(effect_fn_21912.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21912.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21912.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21913 = cljs.core.next(seq__21628__$1);
var G__21914 = null;
var G__21915 = (0);
var G__21916 = (0);
seq__21628 = G__21913;
chunk__21629 = G__21914;
count__21630 = G__21915;
i__21631 = G__21916;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__20688__auto___21918 = re_frame.interop.now();
var duration__20689__auto___21919 = (end__20688__auto___21918 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20689__auto___21919,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__20688__auto___21918);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21625);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___21925 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___21925)){
var new_db_21926 = temp__5823__auto___21925;
var fexpr__21657_21927 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21657_21927.cljs$core$IFn$_invoke$arity$1 ? fexpr__21657_21927.cljs$core$IFn$_invoke$arity$1(new_db_21926) : fexpr__21657_21927.call(null,new_db_21926));
} else {
}

var seq__21658 = cljs.core.seq(effects_without_db);
var chunk__21659 = null;
var count__21660 = (0);
var i__21661 = (0);
while(true){
if((i__21661 < count__21660)){
var vec__21689 = chunk__21659.cljs$core$IIndexed$_nth$arity$2(null,i__21661);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21689,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21689,(1),null);
var temp__5821__auto___21928 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___21928)){
var effect_fn_21929 = temp__5821__auto___21928;
(effect_fn_21929.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21929.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21929.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21930 = seq__21658;
var G__21931 = chunk__21659;
var G__21932 = count__21660;
var G__21933 = (i__21661 + (1));
seq__21658 = G__21930;
chunk__21659 = G__21931;
count__21660 = G__21932;
i__21661 = G__21933;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21658);
if(temp__5823__auto__){
var seq__21658__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21658__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21658__$1);
var G__21934 = cljs.core.chunk_rest(seq__21658__$1);
var G__21935 = c__5673__auto__;
var G__21936 = cljs.core.count(c__5673__auto__);
var G__21937 = (0);
seq__21658 = G__21934;
chunk__21659 = G__21935;
count__21660 = G__21936;
i__21661 = G__21937;
continue;
} else {
var vec__21699 = cljs.core.first(seq__21658__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21699,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21699,(1),null);
var temp__5821__auto___21946 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___21946)){
var effect_fn_21954 = temp__5821__auto___21946;
(effect_fn_21954.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21954.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21954.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21956 = cljs.core.next(seq__21658__$1);
var G__21957 = null;
var G__21958 = (0);
var G__21959 = (0);
seq__21658 = G__21956;
chunk__21659 = G__21957;
count__21660 = G__21958;
i__21661 = G__21959;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21707){
var map__21708 = p__21707;
var map__21708__$1 = cljs.core.__destructure_map(map__21708);
var effect = map__21708__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21708__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__21719 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21720 = null;
var count__21721 = (0);
var i__21722 = (0);
while(true){
if((i__21722 < count__21721)){
var effect = chunk__21720.cljs$core$IIndexed$_nth$arity$2(null,i__21722);
re_frame.fx.dispatch_later(effect);


var G__21972 = seq__21719;
var G__21973 = chunk__21720;
var G__21974 = count__21721;
var G__21975 = (i__21722 + (1));
seq__21719 = G__21972;
chunk__21720 = G__21973;
count__21721 = G__21974;
i__21722 = G__21975;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21719);
if(temp__5823__auto__){
var seq__21719__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21719__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21719__$1);
var G__21976 = cljs.core.chunk_rest(seq__21719__$1);
var G__21977 = c__5673__auto__;
var G__21978 = cljs.core.count(c__5673__auto__);
var G__21979 = (0);
seq__21719 = G__21976;
chunk__21720 = G__21977;
count__21721 = G__21978;
i__21722 = G__21979;
continue;
} else {
var effect = cljs.core.first(seq__21719__$1);
re_frame.fx.dispatch_later(effect);


var G__21984 = cljs.core.next(seq__21719__$1);
var G__21985 = null;
var G__21986 = (0);
var G__21987 = (0);
seq__21719 = G__21984;
chunk__21720 = G__21985;
count__21721 = G__21986;
i__21722 = G__21987;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__21751 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21752 = null;
var count__21753 = (0);
var i__21754 = (0);
while(true){
if((i__21754 < count__21753)){
var vec__21780 = chunk__21752.cljs$core$IIndexed$_nth$arity$2(null,i__21754);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21780,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21780,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___21990 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___21990)){
var effect_fn_21991 = temp__5821__auto___21990;
(effect_fn_21991.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21991.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21991.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21992 = seq__21751;
var G__21993 = chunk__21752;
var G__21994 = count__21753;
var G__21995 = (i__21754 + (1));
seq__21751 = G__21992;
chunk__21752 = G__21993;
count__21753 = G__21994;
i__21754 = G__21995;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21751);
if(temp__5823__auto__){
var seq__21751__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21751__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21751__$1);
var G__21996 = cljs.core.chunk_rest(seq__21751__$1);
var G__21997 = c__5673__auto__;
var G__21998 = cljs.core.count(c__5673__auto__);
var G__21999 = (0);
seq__21751 = G__21996;
chunk__21752 = G__21997;
count__21753 = G__21998;
i__21754 = G__21999;
continue;
} else {
var vec__21786 = cljs.core.first(seq__21751__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21786,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21786,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___22005 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___22005)){
var effect_fn_22006 = temp__5821__auto___22005;
(effect_fn_22006.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22006.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22006.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22007 = cljs.core.next(seq__21751__$1);
var G__22008 = null;
var G__22009 = (0);
var G__22010 = (0);
seq__21751 = G__22007;
chunk__21752 = G__22008;
count__21753 = G__22009;
i__21754 = G__22010;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__21803 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21804 = null;
var count__21805 = (0);
var i__21806 = (0);
while(true){
if((i__21806 < count__21805)){
var event = chunk__21804.cljs$core$IIndexed$_nth$arity$2(null,i__21806);
re_frame.router.dispatch(event);


var G__22017 = seq__21803;
var G__22018 = chunk__21804;
var G__22019 = count__21805;
var G__22020 = (i__21806 + (1));
seq__21803 = G__22017;
chunk__21804 = G__22018;
count__21805 = G__22019;
i__21806 = G__22020;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21803);
if(temp__5823__auto__){
var seq__21803__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21803__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21803__$1);
var G__22021 = cljs.core.chunk_rest(seq__21803__$1);
var G__22022 = c__5673__auto__;
var G__22023 = cljs.core.count(c__5673__auto__);
var G__22024 = (0);
seq__21803 = G__22021;
chunk__21804 = G__22022;
count__21805 = G__22023;
i__21806 = G__22024;
continue;
} else {
var event = cljs.core.first(seq__21803__$1);
re_frame.router.dispatch(event);


var G__22027 = cljs.core.next(seq__21803__$1);
var G__22028 = null;
var G__22029 = (0);
var G__22030 = (0);
seq__21803 = G__22027;
chunk__21804 = G__22028;
count__21805 = G__22029;
i__21806 = G__22030;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__21847 = cljs.core.seq(value);
var chunk__21848 = null;
var count__21849 = (0);
var i__21850 = (0);
while(true){
if((i__21850 < count__21849)){
var event = chunk__21848.cljs$core$IIndexed$_nth$arity$2(null,i__21850);
clear_event(event);


var G__22036 = seq__21847;
var G__22037 = chunk__21848;
var G__22038 = count__21849;
var G__22039 = (i__21850 + (1));
seq__21847 = G__22036;
chunk__21848 = G__22037;
count__21849 = G__22038;
i__21850 = G__22039;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21847);
if(temp__5823__auto__){
var seq__21847__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21847__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21847__$1);
var G__22046 = cljs.core.chunk_rest(seq__21847__$1);
var G__22047 = c__5673__auto__;
var G__22048 = cljs.core.count(c__5673__auto__);
var G__22049 = (0);
seq__21847 = G__22046;
chunk__21848 = G__22047;
count__21849 = G__22048;
i__21850 = G__22049;
continue;
} else {
var event = cljs.core.first(seq__21847__$1);
clear_event(event);


var G__22054 = cljs.core.next(seq__21847__$1);
var G__22055 = null;
var G__22056 = (0);
var G__22057 = (0);
seq__21847 = G__22054;
chunk__21848 = G__22055;
count__21849 = G__22056;
i__21850 = G__22057;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

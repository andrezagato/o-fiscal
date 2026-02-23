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
var _STAR_current_trace_STAR__orig_val__12942 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__12943 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__12943);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___13029 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___13029)){
var new_db_13030 = temp__5823__auto___13029;
var fexpr__12946_13031 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__12946_13031.cljs$core$IFn$_invoke$arity$1 ? fexpr__12946_13031.cljs$core$IFn$_invoke$arity$1(new_db_13030) : fexpr__12946_13031.call(null,new_db_13030));
} else {
}

var seq__12948 = cljs.core.seq(effects_without_db);
var chunk__12949 = null;
var count__12950 = (0);
var i__12951 = (0);
while(true){
if((i__12951 < count__12950)){
var vec__12959 = chunk__12949.cljs$core$IIndexed$_nth$arity$2(null,i__12951);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12959,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12959,(1),null);
var temp__5821__auto___13032 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13032)){
var effect_fn_13033 = temp__5821__auto___13032;
(effect_fn_13033.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13033.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13033.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13034 = seq__12948;
var G__13035 = chunk__12949;
var G__13036 = count__12950;
var G__13037 = (i__12951 + (1));
seq__12948 = G__13034;
chunk__12949 = G__13035;
count__12950 = G__13036;
i__12951 = G__13037;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12948);
if(temp__5823__auto__){
var seq__12948__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12948__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12948__$1);
var G__13038 = cljs.core.chunk_rest(seq__12948__$1);
var G__13039 = c__5673__auto__;
var G__13040 = cljs.core.count(c__5673__auto__);
var G__13041 = (0);
seq__12948 = G__13038;
chunk__12949 = G__13039;
count__12950 = G__13040;
i__12951 = G__13041;
continue;
} else {
var vec__12963 = cljs.core.first(seq__12948__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12963,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12963,(1),null);
var temp__5821__auto___13042 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13042)){
var effect_fn_13043 = temp__5821__auto___13042;
(effect_fn_13043.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13043.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13043.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13044 = cljs.core.next(seq__12948__$1);
var G__13045 = null;
var G__13046 = (0);
var G__13047 = (0);
seq__12948 = G__13044;
chunk__12949 = G__13045;
count__12950 = G__13046;
i__12951 = G__13047;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12608__auto___13048 = re_frame.interop.now();
var duration__12609__auto___13049 = (end__12608__auto___13048 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__12609__auto___13049,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12608__auto___13048);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__12942);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___13050 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___13050)){
var new_db_13051 = temp__5823__auto___13050;
var fexpr__12966_13052 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__12966_13052.cljs$core$IFn$_invoke$arity$1 ? fexpr__12966_13052.cljs$core$IFn$_invoke$arity$1(new_db_13051) : fexpr__12966_13052.call(null,new_db_13051));
} else {
}

var seq__12967 = cljs.core.seq(effects_without_db);
var chunk__12968 = null;
var count__12969 = (0);
var i__12970 = (0);
while(true){
if((i__12970 < count__12969)){
var vec__12977 = chunk__12968.cljs$core$IIndexed$_nth$arity$2(null,i__12970);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12977,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12977,(1),null);
var temp__5821__auto___13053 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13053)){
var effect_fn_13054 = temp__5821__auto___13053;
(effect_fn_13054.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13054.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13054.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13055 = seq__12967;
var G__13056 = chunk__12968;
var G__13057 = count__12969;
var G__13058 = (i__12970 + (1));
seq__12967 = G__13055;
chunk__12968 = G__13056;
count__12969 = G__13057;
i__12970 = G__13058;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12967);
if(temp__5823__auto__){
var seq__12967__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12967__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12967__$1);
var G__13059 = cljs.core.chunk_rest(seq__12967__$1);
var G__13060 = c__5673__auto__;
var G__13061 = cljs.core.count(c__5673__auto__);
var G__13062 = (0);
seq__12967 = G__13059;
chunk__12968 = G__13060;
count__12969 = G__13061;
i__12970 = G__13062;
continue;
} else {
var vec__12981 = cljs.core.first(seq__12967__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12981,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12981,(1),null);
var temp__5821__auto___13063 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13063)){
var effect_fn_13064 = temp__5821__auto___13063;
(effect_fn_13064.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13064.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13064.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13065 = cljs.core.next(seq__12967__$1);
var G__13066 = null;
var G__13067 = (0);
var G__13068 = (0);
seq__12967 = G__13065;
chunk__12968 = G__13066;
count__12969 = G__13067;
i__12970 = G__13068;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__12984){
var map__12985 = p__12984;
var map__12985__$1 = cljs.core.__destructure_map(map__12985);
var effect = map__12985__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12985__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12985__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__12988 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__12989 = null;
var count__12990 = (0);
var i__12991 = (0);
while(true){
if((i__12991 < count__12990)){
var effect = chunk__12989.cljs$core$IIndexed$_nth$arity$2(null,i__12991);
re_frame.fx.dispatch_later(effect);


var G__13069 = seq__12988;
var G__13070 = chunk__12989;
var G__13071 = count__12990;
var G__13072 = (i__12991 + (1));
seq__12988 = G__13069;
chunk__12989 = G__13070;
count__12990 = G__13071;
i__12991 = G__13072;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12988);
if(temp__5823__auto__){
var seq__12988__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12988__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12988__$1);
var G__13073 = cljs.core.chunk_rest(seq__12988__$1);
var G__13074 = c__5673__auto__;
var G__13075 = cljs.core.count(c__5673__auto__);
var G__13076 = (0);
seq__12988 = G__13073;
chunk__12989 = G__13074;
count__12990 = G__13075;
i__12991 = G__13076;
continue;
} else {
var effect = cljs.core.first(seq__12988__$1);
re_frame.fx.dispatch_later(effect);


var G__13077 = cljs.core.next(seq__12988__$1);
var G__13078 = null;
var G__13079 = (0);
var G__13080 = (0);
seq__12988 = G__13077;
chunk__12989 = G__13078;
count__12990 = G__13079;
i__12991 = G__13080;
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
var seq__12992 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__12993 = null;
var count__12994 = (0);
var i__12995 = (0);
while(true){
if((i__12995 < count__12994)){
var vec__13003 = chunk__12993.cljs$core$IIndexed$_nth$arity$2(null,i__12995);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13003,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13003,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___13081 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13081)){
var effect_fn_13082 = temp__5821__auto___13081;
(effect_fn_13082.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13082.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13082.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13083 = seq__12992;
var G__13084 = chunk__12993;
var G__13085 = count__12994;
var G__13086 = (i__12995 + (1));
seq__12992 = G__13083;
chunk__12993 = G__13084;
count__12994 = G__13085;
i__12995 = G__13086;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12992);
if(temp__5823__auto__){
var seq__12992__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12992__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12992__$1);
var G__13087 = cljs.core.chunk_rest(seq__12992__$1);
var G__13088 = c__5673__auto__;
var G__13089 = cljs.core.count(c__5673__auto__);
var G__13090 = (0);
seq__12992 = G__13087;
chunk__12993 = G__13088;
count__12994 = G__13089;
i__12995 = G__13090;
continue;
} else {
var vec__13006 = cljs.core.first(seq__12992__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13006,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13006,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___13091 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___13091)){
var effect_fn_13092 = temp__5821__auto___13091;
(effect_fn_13092.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13092.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13092.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__13093 = cljs.core.next(seq__12992__$1);
var G__13094 = null;
var G__13095 = (0);
var G__13096 = (0);
seq__12992 = G__13093;
chunk__12993 = G__13094;
count__12994 = G__13095;
i__12995 = G__13096;
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
var seq__13021 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13022 = null;
var count__13023 = (0);
var i__13024 = (0);
while(true){
if((i__13024 < count__13023)){
var event = chunk__13022.cljs$core$IIndexed$_nth$arity$2(null,i__13024);
re_frame.router.dispatch(event);


var G__13097 = seq__13021;
var G__13098 = chunk__13022;
var G__13099 = count__13023;
var G__13100 = (i__13024 + (1));
seq__13021 = G__13097;
chunk__13022 = G__13098;
count__13023 = G__13099;
i__13024 = G__13100;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13021);
if(temp__5823__auto__){
var seq__13021__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13021__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13021__$1);
var G__13101 = cljs.core.chunk_rest(seq__13021__$1);
var G__13102 = c__5673__auto__;
var G__13103 = cljs.core.count(c__5673__auto__);
var G__13104 = (0);
seq__13021 = G__13101;
chunk__13022 = G__13102;
count__13023 = G__13103;
i__13024 = G__13104;
continue;
} else {
var event = cljs.core.first(seq__13021__$1);
re_frame.router.dispatch(event);


var G__13105 = cljs.core.next(seq__13021__$1);
var G__13106 = null;
var G__13107 = (0);
var G__13108 = (0);
seq__13021 = G__13105;
chunk__13022 = G__13106;
count__13023 = G__13107;
i__13024 = G__13108;
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
var seq__13025 = cljs.core.seq(value);
var chunk__13026 = null;
var count__13027 = (0);
var i__13028 = (0);
while(true){
if((i__13028 < count__13027)){
var event = chunk__13026.cljs$core$IIndexed$_nth$arity$2(null,i__13028);
clear_event(event);


var G__13109 = seq__13025;
var G__13110 = chunk__13026;
var G__13111 = count__13027;
var G__13112 = (i__13028 + (1));
seq__13025 = G__13109;
chunk__13026 = G__13110;
count__13027 = G__13111;
i__13028 = G__13112;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13025);
if(temp__5823__auto__){
var seq__13025__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13025__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13025__$1);
var G__13113 = cljs.core.chunk_rest(seq__13025__$1);
var G__13114 = c__5673__auto__;
var G__13115 = cljs.core.count(c__5673__auto__);
var G__13116 = (0);
seq__13025 = G__13113;
chunk__13026 = G__13114;
count__13027 = G__13115;
i__13028 = G__13116;
continue;
} else {
var event = cljs.core.first(seq__13025__$1);
clear_event(event);


var G__13117 = cljs.core.next(seq__13025__$1);
var G__13118 = null;
var G__13119 = (0);
var G__13120 = (0);
seq__13025 = G__13117;
chunk__13026 = G__13118;
count__13027 = G__13119;
i__13028 = G__13120;
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

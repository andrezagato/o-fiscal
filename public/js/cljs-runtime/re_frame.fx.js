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
var _STAR_current_trace_STAR__orig_val__23090 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23091 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23091);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___23177 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___23177)){
var new_db_23178 = temp__5823__auto___23177;
var fexpr__23093_23179 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23093_23179.cljs$core$IFn$_invoke$arity$1 ? fexpr__23093_23179.cljs$core$IFn$_invoke$arity$1(new_db_23178) : fexpr__23093_23179.call(null,new_db_23178));
} else {
}

var seq__23095 = cljs.core.seq(effects_without_db);
var chunk__23096 = null;
var count__23097 = (0);
var i__23098 = (0);
while(true){
if((i__23098 < count__23097)){
var vec__23107 = chunk__23096.cljs$core$IIndexed$_nth$arity$2(null,i__23098);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23107,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23107,(1),null);
var temp__5821__auto___23180 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___23180)){
var effect_fn_23181 = temp__5821__auto___23180;
(effect_fn_23181.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23181.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23181.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23182 = seq__23095;
var G__23183 = chunk__23096;
var G__23184 = count__23097;
var G__23185 = (i__23098 + (1));
seq__23095 = G__23182;
chunk__23096 = G__23183;
count__23097 = G__23184;
i__23098 = G__23185;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23095);
if(temp__5823__auto__){
var seq__23095__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23095__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23095__$1);
var G__23186 = cljs.core.chunk_rest(seq__23095__$1);
var G__23187 = c__5673__auto__;
var G__23188 = cljs.core.count(c__5673__auto__);
var G__23189 = (0);
seq__23095 = G__23186;
chunk__23096 = G__23187;
count__23097 = G__23188;
i__23098 = G__23189;
continue;
} else {
var vec__23111 = cljs.core.first(seq__23095__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23111,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23111,(1),null);
var temp__5821__auto___23190 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___23190)){
var effect_fn_23191 = temp__5821__auto___23190;
(effect_fn_23191.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23191.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23191.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23192 = cljs.core.next(seq__23095__$1);
var G__23193 = null;
var G__23194 = (0);
var G__23195 = (0);
seq__23095 = G__23192;
chunk__23096 = G__23193;
count__23097 = G__23194;
i__23098 = G__23195;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22706__auto___23196 = re_frame.interop.now();
var duration__22707__auto___23197 = (end__22706__auto___23196 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22707__auto___23197,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22706__auto___23196);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23090);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___23198 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___23198)){
var new_db_23199 = temp__5823__auto___23198;
var fexpr__23114_23200 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23114_23200.cljs$core$IFn$_invoke$arity$1 ? fexpr__23114_23200.cljs$core$IFn$_invoke$arity$1(new_db_23199) : fexpr__23114_23200.call(null,new_db_23199));
} else {
}

var seq__23115 = cljs.core.seq(effects_without_db);
var chunk__23116 = null;
var count__23117 = (0);
var i__23118 = (0);
while(true){
if((i__23118 < count__23117)){
var vec__23126 = chunk__23116.cljs$core$IIndexed$_nth$arity$2(null,i__23118);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23126,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23126,(1),null);
var temp__5821__auto___23201 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___23201)){
var effect_fn_23202 = temp__5821__auto___23201;
(effect_fn_23202.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23202.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23202.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23203 = seq__23115;
var G__23204 = chunk__23116;
var G__23205 = count__23117;
var G__23206 = (i__23118 + (1));
seq__23115 = G__23203;
chunk__23116 = G__23204;
count__23117 = G__23205;
i__23118 = G__23206;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23115);
if(temp__5823__auto__){
var seq__23115__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23115__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23115__$1);
var G__23207 = cljs.core.chunk_rest(seq__23115__$1);
var G__23208 = c__5673__auto__;
var G__23209 = cljs.core.count(c__5673__auto__);
var G__23210 = (0);
seq__23115 = G__23207;
chunk__23116 = G__23208;
count__23117 = G__23209;
i__23118 = G__23210;
continue;
} else {
var vec__23131 = cljs.core.first(seq__23115__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23131,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23131,(1),null);
var temp__5821__auto___23211 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___23211)){
var effect_fn_23212 = temp__5821__auto___23211;
(effect_fn_23212.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23212.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23212.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23213 = cljs.core.next(seq__23115__$1);
var G__23214 = null;
var G__23215 = (0);
var G__23216 = (0);
seq__23115 = G__23213;
chunk__23116 = G__23214;
count__23117 = G__23215;
i__23118 = G__23216;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23135){
var map__23136 = p__23135;
var map__23136__$1 = cljs.core.__destructure_map(map__23136);
var effect = map__23136__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23136__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23136__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__23137 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23138 = null;
var count__23139 = (0);
var i__23140 = (0);
while(true){
if((i__23140 < count__23139)){
var effect = chunk__23138.cljs$core$IIndexed$_nth$arity$2(null,i__23140);
re_frame.fx.dispatch_later(effect);


var G__23217 = seq__23137;
var G__23218 = chunk__23138;
var G__23219 = count__23139;
var G__23220 = (i__23140 + (1));
seq__23137 = G__23217;
chunk__23138 = G__23218;
count__23139 = G__23219;
i__23140 = G__23220;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23137);
if(temp__5823__auto__){
var seq__23137__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23137__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23137__$1);
var G__23221 = cljs.core.chunk_rest(seq__23137__$1);
var G__23222 = c__5673__auto__;
var G__23223 = cljs.core.count(c__5673__auto__);
var G__23224 = (0);
seq__23137 = G__23221;
chunk__23138 = G__23222;
count__23139 = G__23223;
i__23140 = G__23224;
continue;
} else {
var effect = cljs.core.first(seq__23137__$1);
re_frame.fx.dispatch_later(effect);


var G__23225 = cljs.core.next(seq__23137__$1);
var G__23226 = null;
var G__23227 = (0);
var G__23228 = (0);
seq__23137 = G__23225;
chunk__23138 = G__23226;
count__23139 = G__23227;
i__23140 = G__23228;
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
var seq__23153 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23154 = null;
var count__23155 = (0);
var i__23156 = (0);
while(true){
if((i__23156 < count__23155)){
var vec__23163 = chunk__23154.cljs$core$IIndexed$_nth$arity$2(null,i__23156);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23163,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23163,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___23229 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___23229)){
var effect_fn_23230 = temp__5821__auto___23229;
(effect_fn_23230.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23230.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23230.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23231 = seq__23153;
var G__23232 = chunk__23154;
var G__23233 = count__23155;
var G__23234 = (i__23156 + (1));
seq__23153 = G__23231;
chunk__23154 = G__23232;
count__23155 = G__23233;
i__23156 = G__23234;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23153);
if(temp__5823__auto__){
var seq__23153__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23153__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23153__$1);
var G__23235 = cljs.core.chunk_rest(seq__23153__$1);
var G__23236 = c__5673__auto__;
var G__23237 = cljs.core.count(c__5673__auto__);
var G__23238 = (0);
seq__23153 = G__23235;
chunk__23154 = G__23236;
count__23155 = G__23237;
i__23156 = G__23238;
continue;
} else {
var vec__23166 = cljs.core.first(seq__23153__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23166,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___23239 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___23239)){
var effect_fn_23240 = temp__5821__auto___23239;
(effect_fn_23240.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23240.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23240.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23241 = cljs.core.next(seq__23153__$1);
var G__23242 = null;
var G__23243 = (0);
var G__23244 = (0);
seq__23153 = G__23241;
chunk__23154 = G__23242;
count__23155 = G__23243;
i__23156 = G__23244;
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
var seq__23169 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23170 = null;
var count__23171 = (0);
var i__23172 = (0);
while(true){
if((i__23172 < count__23171)){
var event = chunk__23170.cljs$core$IIndexed$_nth$arity$2(null,i__23172);
re_frame.router.dispatch(event);


var G__23245 = seq__23169;
var G__23246 = chunk__23170;
var G__23247 = count__23171;
var G__23248 = (i__23172 + (1));
seq__23169 = G__23245;
chunk__23170 = G__23246;
count__23171 = G__23247;
i__23172 = G__23248;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23169);
if(temp__5823__auto__){
var seq__23169__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23169__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23169__$1);
var G__23249 = cljs.core.chunk_rest(seq__23169__$1);
var G__23250 = c__5673__auto__;
var G__23251 = cljs.core.count(c__5673__auto__);
var G__23252 = (0);
seq__23169 = G__23249;
chunk__23170 = G__23250;
count__23171 = G__23251;
i__23172 = G__23252;
continue;
} else {
var event = cljs.core.first(seq__23169__$1);
re_frame.router.dispatch(event);


var G__23253 = cljs.core.next(seq__23169__$1);
var G__23254 = null;
var G__23255 = (0);
var G__23256 = (0);
seq__23169 = G__23253;
chunk__23170 = G__23254;
count__23171 = G__23255;
i__23172 = G__23256;
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
var seq__23173 = cljs.core.seq(value);
var chunk__23174 = null;
var count__23175 = (0);
var i__23176 = (0);
while(true){
if((i__23176 < count__23175)){
var event = chunk__23174.cljs$core$IIndexed$_nth$arity$2(null,i__23176);
clear_event(event);


var G__23257 = seq__23173;
var G__23258 = chunk__23174;
var G__23259 = count__23175;
var G__23260 = (i__23176 + (1));
seq__23173 = G__23257;
chunk__23174 = G__23258;
count__23175 = G__23259;
i__23176 = G__23260;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23173);
if(temp__5823__auto__){
var seq__23173__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23173__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23173__$1);
var G__23261 = cljs.core.chunk_rest(seq__23173__$1);
var G__23262 = c__5673__auto__;
var G__23263 = cljs.core.count(c__5673__auto__);
var G__23264 = (0);
seq__23173 = G__23261;
chunk__23174 = G__23262;
count__23175 = G__23263;
i__23176 = G__23264;
continue;
} else {
var event = cljs.core.first(seq__23173__$1);
clear_event(event);


var G__23265 = cljs.core.next(seq__23173__$1);
var G__23266 = null;
var G__23267 = (0);
var G__23268 = (0);
seq__23173 = G__23265;
chunk__23174 = G__23266;
count__23175 = G__23267;
i__23176 = G__23268;
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

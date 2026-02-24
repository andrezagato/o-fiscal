goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23447 = arguments.length;
var i__5877__auto___23448 = (0);
while(true){
if((i__5877__auto___23448 < len__5876__auto___23447)){
args__5882__auto__.push((arguments[i__5877__auto___23448]));

var G__23449 = (i__5877__auto___23448 + (1));
i__5877__auto___23448 = G__23449;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23161){
var G__23162 = cljs.core.first(seq23161);
var seq23161__$1 = cljs.core.next(seq23161);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23162,seq23161__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__23165 = cljs.core.seq(sources);
var chunk__23166 = null;
var count__23167 = (0);
var i__23168 = (0);
while(true){
if((i__23168 < count__23167)){
var map__23173 = chunk__23166.cljs$core$IIndexed$_nth$arity$2(null,i__23168);
var map__23173__$1 = cljs.core.__destructure_map(map__23173);
var src = map__23173__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23173__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e23174){var e_23450 = e23174;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_23450);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23450.message))));
}

var G__23451 = seq__23165;
var G__23452 = chunk__23166;
var G__23453 = count__23167;
var G__23454 = (i__23168 + (1));
seq__23165 = G__23451;
chunk__23166 = G__23452;
count__23167 = G__23453;
i__23168 = G__23454;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23165);
if(temp__5823__auto__){
var seq__23165__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23165__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23165__$1);
var G__23455 = cljs.core.chunk_rest(seq__23165__$1);
var G__23456 = c__5673__auto__;
var G__23457 = cljs.core.count(c__5673__auto__);
var G__23458 = (0);
seq__23165 = G__23455;
chunk__23166 = G__23456;
count__23167 = G__23457;
i__23168 = G__23458;
continue;
} else {
var map__23175 = cljs.core.first(seq__23165__$1);
var map__23175__$1 = cljs.core.__destructure_map(map__23175);
var src = map__23175__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23175__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e23176){var e_23459 = e23176;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_23459);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23459.message))));
}

var G__23460 = cljs.core.next(seq__23165__$1);
var G__23461 = null;
var G__23462 = (0);
var G__23463 = (0);
seq__23165 = G__23460;
chunk__23166 = G__23461;
count__23167 = G__23462;
i__23168 = G__23463;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__23177 = cljs.core.seq(js_requires);
var chunk__23178 = null;
var count__23179 = (0);
var i__23180 = (0);
while(true){
if((i__23180 < count__23179)){
var js_ns = chunk__23178.cljs$core$IIndexed$_nth$arity$2(null,i__23180);
var require_str_23464 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_23464);


var G__23465 = seq__23177;
var G__23466 = chunk__23178;
var G__23467 = count__23179;
var G__23468 = (i__23180 + (1));
seq__23177 = G__23465;
chunk__23178 = G__23466;
count__23179 = G__23467;
i__23180 = G__23468;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23177);
if(temp__5823__auto__){
var seq__23177__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23177__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23177__$1);
var G__23469 = cljs.core.chunk_rest(seq__23177__$1);
var G__23470 = c__5673__auto__;
var G__23471 = cljs.core.count(c__5673__auto__);
var G__23472 = (0);
seq__23177 = G__23469;
chunk__23178 = G__23470;
count__23179 = G__23471;
i__23180 = G__23472;
continue;
} else {
var js_ns = cljs.core.first(seq__23177__$1);
var require_str_23473 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_23473);


var G__23474 = cljs.core.next(seq__23177__$1);
var G__23475 = null;
var G__23476 = (0);
var G__23477 = (0);
seq__23177 = G__23474;
chunk__23178 = G__23475;
count__23179 = G__23476;
i__23180 = G__23477;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__23182){
var map__23183 = p__23182;
var map__23183__$1 = cljs.core.__destructure_map(map__23183);
var msg = map__23183__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23183__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23184(s__23185){
return (new cljs.core.LazySeq(null,(function (){
var s__23185__$1 = s__23185;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__23185__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__23190 = cljs.core.first(xs__6383__auto__);
var map__23190__$1 = cljs.core.__destructure_map(map__23190);
var src = map__23190__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23190__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__23185__$1,map__23190,map__23190__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__23183,map__23183__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23184_$_iter__23186(s__23187){
return (new cljs.core.LazySeq(null,((function (s__23185__$1,map__23190,map__23190__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__23183,map__23183__$1,msg,info,reload_info){
return (function (){
var s__23187__$1 = s__23187;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__23187__$1);
if(temp__5823__auto____$1){
var s__23187__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23187__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__23187__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__23189 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__23188 = (0);
while(true){
if((i__23188 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__23188);
cljs.core.chunk_append(b__23189,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23478 = (i__23188 + (1));
i__23188 = G__23478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23189),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23184_$_iter__23186(cljs.core.chunk_rest(s__23187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23189),null);
}
} else {
var warning = cljs.core.first(s__23187__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23184_$_iter__23186(cljs.core.rest(s__23187__$2)));
}
} else {
return null;
}
break;
}
});})(s__23185__$1,map__23190,map__23190__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__23183,map__23183__$1,msg,info,reload_info))
,null,null));
});})(s__23185__$1,map__23190,map__23190__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__23183,map__23183__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23184(cljs.core.rest(s__23185__$1)));
} else {
var G__23479 = cljs.core.rest(s__23185__$1);
s__23185__$1 = G__23479;
continue;
}
} else {
var G__23480 = cljs.core.rest(s__23185__$1);
s__23185__$1 = G__23480;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__23191_23481 = cljs.core.seq(warnings);
var chunk__23192_23482 = null;
var count__23193_23483 = (0);
var i__23194_23484 = (0);
while(true){
if((i__23194_23484 < count__23193_23483)){
var map__23197_23485 = chunk__23192_23482.cljs$core$IIndexed$_nth$arity$2(null,i__23194_23484);
var map__23197_23486__$1 = cljs.core.__destructure_map(map__23197_23485);
var w_23487 = map__23197_23486__$1;
var msg_23488__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197_23486__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197_23486__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197_23486__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23197_23486__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23491)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23489)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23490)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23488__$1)));


var G__23492 = seq__23191_23481;
var G__23493 = chunk__23192_23482;
var G__23494 = count__23193_23483;
var G__23495 = (i__23194_23484 + (1));
seq__23191_23481 = G__23492;
chunk__23192_23482 = G__23493;
count__23193_23483 = G__23494;
i__23194_23484 = G__23495;
continue;
} else {
var temp__5823__auto___23496 = cljs.core.seq(seq__23191_23481);
if(temp__5823__auto___23496){
var seq__23191_23497__$1 = temp__5823__auto___23496;
if(cljs.core.chunked_seq_QMARK_(seq__23191_23497__$1)){
var c__5673__auto___23498 = cljs.core.chunk_first(seq__23191_23497__$1);
var G__23499 = cljs.core.chunk_rest(seq__23191_23497__$1);
var G__23500 = c__5673__auto___23498;
var G__23501 = cljs.core.count(c__5673__auto___23498);
var G__23502 = (0);
seq__23191_23481 = G__23499;
chunk__23192_23482 = G__23500;
count__23193_23483 = G__23501;
i__23194_23484 = G__23502;
continue;
} else {
var map__23198_23503 = cljs.core.first(seq__23191_23497__$1);
var map__23198_23504__$1 = cljs.core.__destructure_map(map__23198_23503);
var w_23505 = map__23198_23504__$1;
var msg_23506__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198_23504__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198_23504__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198_23504__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23198_23504__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23509)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23507)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23508)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23506__$1)));


var G__23510 = cljs.core.next(seq__23191_23497__$1);
var G__23511 = null;
var G__23512 = (0);
var G__23513 = (0);
seq__23191_23481 = G__23510;
chunk__23192_23482 = G__23511;
count__23193_23483 = G__23512;
i__23194_23484 = G__23513;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__23181_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__23181_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__23200 = node_uri;
G__23200.setQuery(null);

G__23200.setPath(new$);

return G__23200;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__23201){
var map__23202 = p__23201;
var map__23202__$1 = cljs.core.__destructure_map(map__23202);
var msg = map__23202__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23202__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23202__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__23203 = cljs.core.seq(updates);
var chunk__23205 = null;
var count__23206 = (0);
var i__23207 = (0);
while(true){
if((i__23207 < count__23206)){
var path = chunk__23205.cljs$core$IIndexed$_nth$arity$2(null,i__23207);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23317_23514 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23321_23515 = null;
var count__23322_23516 = (0);
var i__23323_23517 = (0);
while(true){
if((i__23323_23517 < count__23322_23516)){
var node_23518 = chunk__23321_23515.cljs$core$IIndexed$_nth$arity$2(null,i__23323_23517);
if(cljs.core.not(node_23518.shadow$old)){
var path_match_23519 = shadow.cljs.devtools.client.browser.match_paths(node_23518.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23519)){
var new_link_23520 = (function (){var G__23349 = node_23518.cloneNode(true);
G__23349.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23519)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23349;
})();
(node_23518.shadow$old = true);

(new_link_23520.onload = ((function (seq__23317_23514,chunk__23321_23515,count__23322_23516,i__23323_23517,seq__23203,chunk__23205,count__23206,i__23207,new_link_23520,path_match_23519,node_23518,path,map__23202,map__23202__$1,msg,updates,reload_info){
return (function (e){
var seq__23350_23521 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23352_23522 = null;
var count__23353_23523 = (0);
var i__23354_23524 = (0);
while(true){
if((i__23354_23524 < count__23353_23523)){
var map__23358_23525 = chunk__23352_23522.cljs$core$IIndexed$_nth$arity$2(null,i__23354_23524);
var map__23358_23526__$1 = cljs.core.__destructure_map(map__23358_23525);
var task_23527 = map__23358_23526__$1;
var fn_str_23528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358_23526__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358_23526__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23530 = goog.getObjectByName(fn_str_23528,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23529)));

(fn_obj_23530.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23530.cljs$core$IFn$_invoke$arity$2(path,new_link_23520) : fn_obj_23530.call(null,path,new_link_23520));


var G__23531 = seq__23350_23521;
var G__23532 = chunk__23352_23522;
var G__23533 = count__23353_23523;
var G__23534 = (i__23354_23524 + (1));
seq__23350_23521 = G__23531;
chunk__23352_23522 = G__23532;
count__23353_23523 = G__23533;
i__23354_23524 = G__23534;
continue;
} else {
var temp__5823__auto___23535 = cljs.core.seq(seq__23350_23521);
if(temp__5823__auto___23535){
var seq__23350_23536__$1 = temp__5823__auto___23535;
if(cljs.core.chunked_seq_QMARK_(seq__23350_23536__$1)){
var c__5673__auto___23537 = cljs.core.chunk_first(seq__23350_23536__$1);
var G__23538 = cljs.core.chunk_rest(seq__23350_23536__$1);
var G__23539 = c__5673__auto___23537;
var G__23540 = cljs.core.count(c__5673__auto___23537);
var G__23541 = (0);
seq__23350_23521 = G__23538;
chunk__23352_23522 = G__23539;
count__23353_23523 = G__23540;
i__23354_23524 = G__23541;
continue;
} else {
var map__23359_23542 = cljs.core.first(seq__23350_23536__$1);
var map__23359_23543__$1 = cljs.core.__destructure_map(map__23359_23542);
var task_23544 = map__23359_23543__$1;
var fn_str_23545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23359_23543__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23359_23543__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23547 = goog.getObjectByName(fn_str_23545,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23546)));

(fn_obj_23547.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23547.cljs$core$IFn$_invoke$arity$2(path,new_link_23520) : fn_obj_23547.call(null,path,new_link_23520));


var G__23548 = cljs.core.next(seq__23350_23536__$1);
var G__23549 = null;
var G__23550 = (0);
var G__23551 = (0);
seq__23350_23521 = G__23548;
chunk__23352_23522 = G__23549;
count__23353_23523 = G__23550;
i__23354_23524 = G__23551;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23518);
});})(seq__23317_23514,chunk__23321_23515,count__23322_23516,i__23323_23517,seq__23203,chunk__23205,count__23206,i__23207,new_link_23520,path_match_23519,node_23518,path,map__23202,map__23202__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23519], 0));

goog.dom.insertSiblingAfter(new_link_23520,node_23518);


var G__23552 = seq__23317_23514;
var G__23553 = chunk__23321_23515;
var G__23554 = count__23322_23516;
var G__23555 = (i__23323_23517 + (1));
seq__23317_23514 = G__23552;
chunk__23321_23515 = G__23553;
count__23322_23516 = G__23554;
i__23323_23517 = G__23555;
continue;
} else {
var G__23556 = seq__23317_23514;
var G__23557 = chunk__23321_23515;
var G__23558 = count__23322_23516;
var G__23559 = (i__23323_23517 + (1));
seq__23317_23514 = G__23556;
chunk__23321_23515 = G__23557;
count__23322_23516 = G__23558;
i__23323_23517 = G__23559;
continue;
}
} else {
var G__23560 = seq__23317_23514;
var G__23561 = chunk__23321_23515;
var G__23562 = count__23322_23516;
var G__23563 = (i__23323_23517 + (1));
seq__23317_23514 = G__23560;
chunk__23321_23515 = G__23561;
count__23322_23516 = G__23562;
i__23323_23517 = G__23563;
continue;
}
} else {
var temp__5823__auto___23564 = cljs.core.seq(seq__23317_23514);
if(temp__5823__auto___23564){
var seq__23317_23565__$1 = temp__5823__auto___23564;
if(cljs.core.chunked_seq_QMARK_(seq__23317_23565__$1)){
var c__5673__auto___23566 = cljs.core.chunk_first(seq__23317_23565__$1);
var G__23567 = cljs.core.chunk_rest(seq__23317_23565__$1);
var G__23568 = c__5673__auto___23566;
var G__23569 = cljs.core.count(c__5673__auto___23566);
var G__23570 = (0);
seq__23317_23514 = G__23567;
chunk__23321_23515 = G__23568;
count__23322_23516 = G__23569;
i__23323_23517 = G__23570;
continue;
} else {
var node_23571 = cljs.core.first(seq__23317_23565__$1);
if(cljs.core.not(node_23571.shadow$old)){
var path_match_23572 = shadow.cljs.devtools.client.browser.match_paths(node_23571.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23572)){
var new_link_23573 = (function (){var G__23360 = node_23571.cloneNode(true);
G__23360.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23572)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23360;
})();
(node_23571.shadow$old = true);

(new_link_23573.onload = ((function (seq__23317_23514,chunk__23321_23515,count__23322_23516,i__23323_23517,seq__23203,chunk__23205,count__23206,i__23207,new_link_23573,path_match_23572,node_23571,seq__23317_23565__$1,temp__5823__auto___23564,path,map__23202,map__23202__$1,msg,updates,reload_info){
return (function (e){
var seq__23361_23574 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23363_23575 = null;
var count__23364_23576 = (0);
var i__23365_23577 = (0);
while(true){
if((i__23365_23577 < count__23364_23576)){
var map__23369_23578 = chunk__23363_23575.cljs$core$IIndexed$_nth$arity$2(null,i__23365_23577);
var map__23369_23579__$1 = cljs.core.__destructure_map(map__23369_23578);
var task_23580 = map__23369_23579__$1;
var fn_str_23581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23369_23579__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23369_23579__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23583 = goog.getObjectByName(fn_str_23581,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23582)));

(fn_obj_23583.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23583.cljs$core$IFn$_invoke$arity$2(path,new_link_23573) : fn_obj_23583.call(null,path,new_link_23573));


var G__23584 = seq__23361_23574;
var G__23585 = chunk__23363_23575;
var G__23586 = count__23364_23576;
var G__23587 = (i__23365_23577 + (1));
seq__23361_23574 = G__23584;
chunk__23363_23575 = G__23585;
count__23364_23576 = G__23586;
i__23365_23577 = G__23587;
continue;
} else {
var temp__5823__auto___23588__$1 = cljs.core.seq(seq__23361_23574);
if(temp__5823__auto___23588__$1){
var seq__23361_23589__$1 = temp__5823__auto___23588__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23361_23589__$1)){
var c__5673__auto___23590 = cljs.core.chunk_first(seq__23361_23589__$1);
var G__23591 = cljs.core.chunk_rest(seq__23361_23589__$1);
var G__23592 = c__5673__auto___23590;
var G__23593 = cljs.core.count(c__5673__auto___23590);
var G__23594 = (0);
seq__23361_23574 = G__23591;
chunk__23363_23575 = G__23592;
count__23364_23576 = G__23593;
i__23365_23577 = G__23594;
continue;
} else {
var map__23370_23595 = cljs.core.first(seq__23361_23589__$1);
var map__23370_23596__$1 = cljs.core.__destructure_map(map__23370_23595);
var task_23597 = map__23370_23596__$1;
var fn_str_23598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23370_23596__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23370_23596__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23600 = goog.getObjectByName(fn_str_23598,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23599)));

(fn_obj_23600.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23600.cljs$core$IFn$_invoke$arity$2(path,new_link_23573) : fn_obj_23600.call(null,path,new_link_23573));


var G__23601 = cljs.core.next(seq__23361_23589__$1);
var G__23602 = null;
var G__23603 = (0);
var G__23604 = (0);
seq__23361_23574 = G__23601;
chunk__23363_23575 = G__23602;
count__23364_23576 = G__23603;
i__23365_23577 = G__23604;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23571);
});})(seq__23317_23514,chunk__23321_23515,count__23322_23516,i__23323_23517,seq__23203,chunk__23205,count__23206,i__23207,new_link_23573,path_match_23572,node_23571,seq__23317_23565__$1,temp__5823__auto___23564,path,map__23202,map__23202__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23572], 0));

goog.dom.insertSiblingAfter(new_link_23573,node_23571);


var G__23605 = cljs.core.next(seq__23317_23565__$1);
var G__23606 = null;
var G__23607 = (0);
var G__23608 = (0);
seq__23317_23514 = G__23605;
chunk__23321_23515 = G__23606;
count__23322_23516 = G__23607;
i__23323_23517 = G__23608;
continue;
} else {
var G__23609 = cljs.core.next(seq__23317_23565__$1);
var G__23610 = null;
var G__23611 = (0);
var G__23612 = (0);
seq__23317_23514 = G__23609;
chunk__23321_23515 = G__23610;
count__23322_23516 = G__23611;
i__23323_23517 = G__23612;
continue;
}
} else {
var G__23613 = cljs.core.next(seq__23317_23565__$1);
var G__23614 = null;
var G__23615 = (0);
var G__23616 = (0);
seq__23317_23514 = G__23613;
chunk__23321_23515 = G__23614;
count__23322_23516 = G__23615;
i__23323_23517 = G__23616;
continue;
}
}
} else {
}
}
break;
}


var G__23617 = seq__23203;
var G__23618 = chunk__23205;
var G__23619 = count__23206;
var G__23620 = (i__23207 + (1));
seq__23203 = G__23617;
chunk__23205 = G__23618;
count__23206 = G__23619;
i__23207 = G__23620;
continue;
} else {
var G__23621 = seq__23203;
var G__23622 = chunk__23205;
var G__23623 = count__23206;
var G__23624 = (i__23207 + (1));
seq__23203 = G__23621;
chunk__23205 = G__23622;
count__23206 = G__23623;
i__23207 = G__23624;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23203);
if(temp__5823__auto__){
var seq__23203__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23203__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23203__$1);
var G__23625 = cljs.core.chunk_rest(seq__23203__$1);
var G__23626 = c__5673__auto__;
var G__23627 = cljs.core.count(c__5673__auto__);
var G__23628 = (0);
seq__23203 = G__23625;
chunk__23205 = G__23626;
count__23206 = G__23627;
i__23207 = G__23628;
continue;
} else {
var path = cljs.core.first(seq__23203__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23371_23629 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23375_23630 = null;
var count__23376_23631 = (0);
var i__23377_23632 = (0);
while(true){
if((i__23377_23632 < count__23376_23631)){
var node_23633 = chunk__23375_23630.cljs$core$IIndexed$_nth$arity$2(null,i__23377_23632);
if(cljs.core.not(node_23633.shadow$old)){
var path_match_23634 = shadow.cljs.devtools.client.browser.match_paths(node_23633.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23634)){
var new_link_23635 = (function (){var G__23403 = node_23633.cloneNode(true);
G__23403.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23634)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23403;
})();
(node_23633.shadow$old = true);

(new_link_23635.onload = ((function (seq__23371_23629,chunk__23375_23630,count__23376_23631,i__23377_23632,seq__23203,chunk__23205,count__23206,i__23207,new_link_23635,path_match_23634,node_23633,path,seq__23203__$1,temp__5823__auto__,map__23202,map__23202__$1,msg,updates,reload_info){
return (function (e){
var seq__23404_23636 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23406_23637 = null;
var count__23407_23638 = (0);
var i__23408_23639 = (0);
while(true){
if((i__23408_23639 < count__23407_23638)){
var map__23412_23640 = chunk__23406_23637.cljs$core$IIndexed$_nth$arity$2(null,i__23408_23639);
var map__23412_23641__$1 = cljs.core.__destructure_map(map__23412_23640);
var task_23642 = map__23412_23641__$1;
var fn_str_23643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23412_23641__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23412_23641__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23645 = goog.getObjectByName(fn_str_23643,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23644)));

(fn_obj_23645.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23645.cljs$core$IFn$_invoke$arity$2(path,new_link_23635) : fn_obj_23645.call(null,path,new_link_23635));


var G__23646 = seq__23404_23636;
var G__23647 = chunk__23406_23637;
var G__23648 = count__23407_23638;
var G__23649 = (i__23408_23639 + (1));
seq__23404_23636 = G__23646;
chunk__23406_23637 = G__23647;
count__23407_23638 = G__23648;
i__23408_23639 = G__23649;
continue;
} else {
var temp__5823__auto___23650__$1 = cljs.core.seq(seq__23404_23636);
if(temp__5823__auto___23650__$1){
var seq__23404_23651__$1 = temp__5823__auto___23650__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23404_23651__$1)){
var c__5673__auto___23652 = cljs.core.chunk_first(seq__23404_23651__$1);
var G__23653 = cljs.core.chunk_rest(seq__23404_23651__$1);
var G__23654 = c__5673__auto___23652;
var G__23655 = cljs.core.count(c__5673__auto___23652);
var G__23656 = (0);
seq__23404_23636 = G__23653;
chunk__23406_23637 = G__23654;
count__23407_23638 = G__23655;
i__23408_23639 = G__23656;
continue;
} else {
var map__23413_23657 = cljs.core.first(seq__23404_23651__$1);
var map__23413_23658__$1 = cljs.core.__destructure_map(map__23413_23657);
var task_23659 = map__23413_23658__$1;
var fn_str_23660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23413_23658__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23413_23658__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23662 = goog.getObjectByName(fn_str_23660,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23661)));

(fn_obj_23662.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23662.cljs$core$IFn$_invoke$arity$2(path,new_link_23635) : fn_obj_23662.call(null,path,new_link_23635));


var G__23663 = cljs.core.next(seq__23404_23651__$1);
var G__23664 = null;
var G__23665 = (0);
var G__23666 = (0);
seq__23404_23636 = G__23663;
chunk__23406_23637 = G__23664;
count__23407_23638 = G__23665;
i__23408_23639 = G__23666;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23633);
});})(seq__23371_23629,chunk__23375_23630,count__23376_23631,i__23377_23632,seq__23203,chunk__23205,count__23206,i__23207,new_link_23635,path_match_23634,node_23633,path,seq__23203__$1,temp__5823__auto__,map__23202,map__23202__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23634], 0));

goog.dom.insertSiblingAfter(new_link_23635,node_23633);


var G__23667 = seq__23371_23629;
var G__23668 = chunk__23375_23630;
var G__23669 = count__23376_23631;
var G__23670 = (i__23377_23632 + (1));
seq__23371_23629 = G__23667;
chunk__23375_23630 = G__23668;
count__23376_23631 = G__23669;
i__23377_23632 = G__23670;
continue;
} else {
var G__23671 = seq__23371_23629;
var G__23672 = chunk__23375_23630;
var G__23673 = count__23376_23631;
var G__23674 = (i__23377_23632 + (1));
seq__23371_23629 = G__23671;
chunk__23375_23630 = G__23672;
count__23376_23631 = G__23673;
i__23377_23632 = G__23674;
continue;
}
} else {
var G__23675 = seq__23371_23629;
var G__23676 = chunk__23375_23630;
var G__23677 = count__23376_23631;
var G__23678 = (i__23377_23632 + (1));
seq__23371_23629 = G__23675;
chunk__23375_23630 = G__23676;
count__23376_23631 = G__23677;
i__23377_23632 = G__23678;
continue;
}
} else {
var temp__5823__auto___23679__$1 = cljs.core.seq(seq__23371_23629);
if(temp__5823__auto___23679__$1){
var seq__23371_23680__$1 = temp__5823__auto___23679__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23371_23680__$1)){
var c__5673__auto___23681 = cljs.core.chunk_first(seq__23371_23680__$1);
var G__23682 = cljs.core.chunk_rest(seq__23371_23680__$1);
var G__23683 = c__5673__auto___23681;
var G__23684 = cljs.core.count(c__5673__auto___23681);
var G__23685 = (0);
seq__23371_23629 = G__23682;
chunk__23375_23630 = G__23683;
count__23376_23631 = G__23684;
i__23377_23632 = G__23685;
continue;
} else {
var node_23686 = cljs.core.first(seq__23371_23680__$1);
if(cljs.core.not(node_23686.shadow$old)){
var path_match_23687 = shadow.cljs.devtools.client.browser.match_paths(node_23686.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23687)){
var new_link_23688 = (function (){var G__23414 = node_23686.cloneNode(true);
G__23414.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23687)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23414;
})();
(node_23686.shadow$old = true);

(new_link_23688.onload = ((function (seq__23371_23629,chunk__23375_23630,count__23376_23631,i__23377_23632,seq__23203,chunk__23205,count__23206,i__23207,new_link_23688,path_match_23687,node_23686,seq__23371_23680__$1,temp__5823__auto___23679__$1,path,seq__23203__$1,temp__5823__auto__,map__23202,map__23202__$1,msg,updates,reload_info){
return (function (e){
var seq__23415_23689 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23417_23690 = null;
var count__23418_23691 = (0);
var i__23419_23692 = (0);
while(true){
if((i__23419_23692 < count__23418_23691)){
var map__23423_23693 = chunk__23417_23690.cljs$core$IIndexed$_nth$arity$2(null,i__23419_23692);
var map__23423_23694__$1 = cljs.core.__destructure_map(map__23423_23693);
var task_23695 = map__23423_23694__$1;
var fn_str_23696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423_23694__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423_23694__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23698 = goog.getObjectByName(fn_str_23696,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23697)));

(fn_obj_23698.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23698.cljs$core$IFn$_invoke$arity$2(path,new_link_23688) : fn_obj_23698.call(null,path,new_link_23688));


var G__23699 = seq__23415_23689;
var G__23700 = chunk__23417_23690;
var G__23701 = count__23418_23691;
var G__23702 = (i__23419_23692 + (1));
seq__23415_23689 = G__23699;
chunk__23417_23690 = G__23700;
count__23418_23691 = G__23701;
i__23419_23692 = G__23702;
continue;
} else {
var temp__5823__auto___23703__$2 = cljs.core.seq(seq__23415_23689);
if(temp__5823__auto___23703__$2){
var seq__23415_23704__$1 = temp__5823__auto___23703__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23415_23704__$1)){
var c__5673__auto___23705 = cljs.core.chunk_first(seq__23415_23704__$1);
var G__23706 = cljs.core.chunk_rest(seq__23415_23704__$1);
var G__23707 = c__5673__auto___23705;
var G__23708 = cljs.core.count(c__5673__auto___23705);
var G__23709 = (0);
seq__23415_23689 = G__23706;
chunk__23417_23690 = G__23707;
count__23418_23691 = G__23708;
i__23419_23692 = G__23709;
continue;
} else {
var map__23424_23710 = cljs.core.first(seq__23415_23704__$1);
var map__23424_23711__$1 = cljs.core.__destructure_map(map__23424_23710);
var task_23712 = map__23424_23711__$1;
var fn_str_23713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23424_23711__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23424_23711__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23715 = goog.getObjectByName(fn_str_23713,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23714)));

(fn_obj_23715.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23715.cljs$core$IFn$_invoke$arity$2(path,new_link_23688) : fn_obj_23715.call(null,path,new_link_23688));


var G__23716 = cljs.core.next(seq__23415_23704__$1);
var G__23717 = null;
var G__23718 = (0);
var G__23719 = (0);
seq__23415_23689 = G__23716;
chunk__23417_23690 = G__23717;
count__23418_23691 = G__23718;
i__23419_23692 = G__23719;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23686);
});})(seq__23371_23629,chunk__23375_23630,count__23376_23631,i__23377_23632,seq__23203,chunk__23205,count__23206,i__23207,new_link_23688,path_match_23687,node_23686,seq__23371_23680__$1,temp__5823__auto___23679__$1,path,seq__23203__$1,temp__5823__auto__,map__23202,map__23202__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23687], 0));

goog.dom.insertSiblingAfter(new_link_23688,node_23686);


var G__23720 = cljs.core.next(seq__23371_23680__$1);
var G__23721 = null;
var G__23722 = (0);
var G__23723 = (0);
seq__23371_23629 = G__23720;
chunk__23375_23630 = G__23721;
count__23376_23631 = G__23722;
i__23377_23632 = G__23723;
continue;
} else {
var G__23724 = cljs.core.next(seq__23371_23680__$1);
var G__23725 = null;
var G__23726 = (0);
var G__23727 = (0);
seq__23371_23629 = G__23724;
chunk__23375_23630 = G__23725;
count__23376_23631 = G__23726;
i__23377_23632 = G__23727;
continue;
}
} else {
var G__23728 = cljs.core.next(seq__23371_23680__$1);
var G__23729 = null;
var G__23730 = (0);
var G__23731 = (0);
seq__23371_23629 = G__23728;
chunk__23375_23630 = G__23729;
count__23376_23631 = G__23730;
i__23377_23632 = G__23731;
continue;
}
}
} else {
}
}
break;
}


var G__23732 = cljs.core.next(seq__23203__$1);
var G__23733 = null;
var G__23734 = (0);
var G__23735 = (0);
seq__23203 = G__23732;
chunk__23205 = G__23733;
count__23206 = G__23734;
i__23207 = G__23735;
continue;
} else {
var G__23736 = cljs.core.next(seq__23203__$1);
var G__23737 = null;
var G__23738 = (0);
var G__23739 = (0);
seq__23203 = G__23736;
chunk__23205 = G__23737;
count__23206 = G__23738;
i__23207 = G__23739;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__23426 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23426) : success.call(null,G__23426));
}catch (e23425){var e = e23425;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__23427,success,fail){
var map__23428 = p__23427;
var map__23428__$1 = cljs.core.__destructure_map(map__23428);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23428__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__23430 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23430) : success.call(null,G__23430));
}catch (e23429){var e = e23429;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23431,done,error){
var map__23432 = p__23431;
var map__23432__$1 = cljs.core.__destructure_map(map__23432);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23432__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23433,done,error){
var map__23434 = p__23433;
var map__23434__$1 = cljs.core.__destructure_map(map__23434);
var msg = map__23434__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23434__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23434__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23434__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23435){
var map__23436 = p__23435;
var map__23436__$1 = cljs.core.__destructure_map(map__23436);
var src = map__23436__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23436__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23437 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23437) : done.call(null,G__23437));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23438){
var map__23439 = p__23438;
var map__23439__$1 = cljs.core.__destructure_map(map__23439);
var msg__$1 = map__23439__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23439__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23440){var ex = e23440;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23441){
var map__23442 = p__23441;
var map__23442__$1 = cljs.core.__destructure_map(map__23442);
var env = map__23442__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23442__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23443){
var map__23444 = p__23443;
var map__23444__$1 = cljs.core.__destructure_map(map__23444);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23444__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23444__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23445){
var map__23446 = p__23445;
var map__23446__$1 = cljs.core.__destructure_map(map__23446);
var svc = map__23446__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23446__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

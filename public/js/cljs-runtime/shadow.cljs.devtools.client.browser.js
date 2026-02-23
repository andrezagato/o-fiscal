goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21367 = arguments.length;
var i__5877__auto___21369 = (0);
while(true){
if((i__5877__auto___21369 < len__5876__auto___21367)){
args__5882__auto__.push((arguments[i__5877__auto___21369]));

var G__21372 = (i__5877__auto___21369 + (1));
i__5877__auto___21369 = G__21372;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20811){
var G__20812 = cljs.core.first(seq20811);
var seq20811__$1 = cljs.core.next(seq20811);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20812,seq20811__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20824 = cljs.core.seq(sources);
var chunk__20825 = null;
var count__20826 = (0);
var i__20827 = (0);
while(true){
if((i__20827 < count__20826)){
var map__20843 = chunk__20825.cljs$core$IIndexed$_nth$arity$2(null,i__20827);
var map__20843__$1 = cljs.core.__destructure_map(map__20843);
var src = map__20843__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20843__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e20846){var e_21389 = e20846;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21389);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21389.message))));
}

var G__21398 = seq__20824;
var G__21399 = chunk__20825;
var G__21400 = count__20826;
var G__21401 = (i__20827 + (1));
seq__20824 = G__21398;
chunk__20825 = G__21399;
count__20826 = G__21400;
i__20827 = G__21401;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20824);
if(temp__5823__auto__){
var seq__20824__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20824__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__20824__$1);
var G__21406 = cljs.core.chunk_rest(seq__20824__$1);
var G__21407 = c__5673__auto__;
var G__21408 = cljs.core.count(c__5673__auto__);
var G__21409 = (0);
seq__20824 = G__21406;
chunk__20825 = G__21407;
count__20826 = G__21408;
i__20827 = G__21409;
continue;
} else {
var map__20857 = cljs.core.first(seq__20824__$1);
var map__20857__$1 = cljs.core.__destructure_map(map__20857);
var src = map__20857__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e20859){var e_21416 = e20859;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21416);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21416.message))));
}

var G__21420 = cljs.core.next(seq__20824__$1);
var G__21421 = null;
var G__21422 = (0);
var G__21423 = (0);
seq__20824 = G__21420;
chunk__20825 = G__21421;
count__20826 = G__21422;
i__20827 = G__21423;
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
var seq__20861 = cljs.core.seq(js_requires);
var chunk__20862 = null;
var count__20863 = (0);
var i__20864 = (0);
while(true){
if((i__20864 < count__20863)){
var js_ns = chunk__20862.cljs$core$IIndexed$_nth$arity$2(null,i__20864);
var require_str_21433 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21433);


var G__21434 = seq__20861;
var G__21435 = chunk__20862;
var G__21436 = count__20863;
var G__21437 = (i__20864 + (1));
seq__20861 = G__21434;
chunk__20862 = G__21435;
count__20863 = G__21436;
i__20864 = G__21437;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20861);
if(temp__5823__auto__){
var seq__20861__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20861__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__20861__$1);
var G__21438 = cljs.core.chunk_rest(seq__20861__$1);
var G__21439 = c__5673__auto__;
var G__21440 = cljs.core.count(c__5673__auto__);
var G__21441 = (0);
seq__20861 = G__21438;
chunk__20862 = G__21439;
count__20863 = G__21440;
i__20864 = G__21441;
continue;
} else {
var js_ns = cljs.core.first(seq__20861__$1);
var require_str_21442 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21442);


var G__21443 = cljs.core.next(seq__20861__$1);
var G__21444 = null;
var G__21445 = (0);
var G__21446 = (0);
seq__20861 = G__21443;
chunk__20862 = G__21444;
count__20863 = G__21445;
i__20864 = G__21446;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20904){
var map__20905 = p__20904;
var map__20905__$1 = cljs.core.__destructure_map(map__20905);
var msg = map__20905__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20905__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20905__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20906(s__20907){
return (new cljs.core.LazySeq(null,(function (){
var s__20907__$1 = s__20907;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20907__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__20917 = cljs.core.first(xs__6383__auto__);
var map__20917__$1 = cljs.core.__destructure_map(map__20917);
var src = map__20917__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20917__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__20907__$1,map__20917,map__20917__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20905,map__20905__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20906_$_iter__20908(s__20909){
return (new cljs.core.LazySeq(null,((function (s__20907__$1,map__20917,map__20917__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20905,map__20905__$1,msg,info,reload_info){
return (function (){
var s__20909__$1 = s__20909;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__20909__$1);
if(temp__5823__auto____$1){
var s__20909__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20909__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__20909__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__20911 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__20910 = (0);
while(true){
if((i__20910 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__20910);
cljs.core.chunk_append(b__20911,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21447 = (i__20910 + (1));
i__20910 = G__21447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20911),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20906_$_iter__20908(cljs.core.chunk_rest(s__20909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20911),null);
}
} else {
var warning = cljs.core.first(s__20909__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20906_$_iter__20908(cljs.core.rest(s__20909__$2)));
}
} else {
return null;
}
break;
}
});})(s__20907__$1,map__20917,map__20917__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20905,map__20905__$1,msg,info,reload_info))
,null,null));
});})(s__20907__$1,map__20917,map__20917__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20905,map__20905__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20906(cljs.core.rest(s__20907__$1)));
} else {
var G__21450 = cljs.core.rest(s__20907__$1);
s__20907__$1 = G__21450;
continue;
}
} else {
var G__21451 = cljs.core.rest(s__20907__$1);
s__20907__$1 = G__21451;
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
var seq__20924_21456 = cljs.core.seq(warnings);
var chunk__20925_21457 = null;
var count__20926_21458 = (0);
var i__20927_21459 = (0);
while(true){
if((i__20927_21459 < count__20926_21458)){
var map__20935_21460 = chunk__20925_21457.cljs$core$IIndexed$_nth$arity$2(null,i__20927_21459);
var map__20935_21461__$1 = cljs.core.__destructure_map(map__20935_21460);
var w_21462 = map__20935_21461__$1;
var msg_21463__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20935_21461__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21464 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20935_21461__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20935_21461__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20935_21461__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21466)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21464)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21465)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21463__$1)));


var G__21470 = seq__20924_21456;
var G__21471 = chunk__20925_21457;
var G__21472 = count__20926_21458;
var G__21473 = (i__20927_21459 + (1));
seq__20924_21456 = G__21470;
chunk__20925_21457 = G__21471;
count__20926_21458 = G__21472;
i__20927_21459 = G__21473;
continue;
} else {
var temp__5823__auto___21474 = cljs.core.seq(seq__20924_21456);
if(temp__5823__auto___21474){
var seq__20924_21475__$1 = temp__5823__auto___21474;
if(cljs.core.chunked_seq_QMARK_(seq__20924_21475__$1)){
var c__5673__auto___21476 = cljs.core.chunk_first(seq__20924_21475__$1);
var G__21477 = cljs.core.chunk_rest(seq__20924_21475__$1);
var G__21478 = c__5673__auto___21476;
var G__21479 = cljs.core.count(c__5673__auto___21476);
var G__21480 = (0);
seq__20924_21456 = G__21477;
chunk__20925_21457 = G__21478;
count__20926_21458 = G__21479;
i__20927_21459 = G__21480;
continue;
} else {
var map__20938_21482 = cljs.core.first(seq__20924_21475__$1);
var map__20938_21483__$1 = cljs.core.__destructure_map(map__20938_21482);
var w_21484 = map__20938_21483__$1;
var msg_21485__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20938_21483__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20938_21483__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20938_21483__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20938_21483__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21488)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21486)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21487)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21485__$1)));


var G__21491 = cljs.core.next(seq__20924_21475__$1);
var G__21492 = null;
var G__21493 = (0);
var G__21494 = (0);
seq__20924_21456 = G__21491;
chunk__20925_21457 = G__21492;
count__20926_21458 = G__21493;
i__20927_21459 = G__21494;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20883_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20883_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20950 = node_uri;
G__20950.setQuery(null);

G__20950.setPath(new$);

return G__20950;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20952){
var map__20953 = p__20952;
var map__20953__$1 = cljs.core.__destructure_map(map__20953);
var msg = map__20953__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20953__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20954 = cljs.core.seq(updates);
var chunk__20956 = null;
var count__20957 = (0);
var i__20958 = (0);
while(true){
if((i__20958 < count__20957)){
var path = chunk__20956.cljs$core$IIndexed$_nth$arity$2(null,i__20958);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21137_21509 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21141_21510 = null;
var count__21142_21511 = (0);
var i__21143_21512 = (0);
while(true){
if((i__21143_21512 < count__21142_21511)){
var node_21514 = chunk__21141_21510.cljs$core$IIndexed$_nth$arity$2(null,i__21143_21512);
if(cljs.core.not(node_21514.shadow$old)){
var path_match_21515 = shadow.cljs.devtools.client.browser.match_paths(node_21514.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21515)){
var new_link_21517 = (function (){var G__21181 = node_21514.cloneNode(true);
G__21181.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21515)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21181;
})();
(node_21514.shadow$old = true);

(new_link_21517.onload = ((function (seq__21137_21509,chunk__21141_21510,count__21142_21511,i__21143_21512,seq__20954,chunk__20956,count__20957,i__20958,new_link_21517,path_match_21515,node_21514,path,map__20953,map__20953__$1,msg,updates,reload_info){
return (function (e){
var seq__21184_21520 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21186_21521 = null;
var count__21187_21522 = (0);
var i__21188_21523 = (0);
while(true){
if((i__21188_21523 < count__21187_21522)){
var map__21197_21524 = chunk__21186_21521.cljs$core$IIndexed$_nth$arity$2(null,i__21188_21523);
var map__21197_21525__$1 = cljs.core.__destructure_map(map__21197_21524);
var task_21526 = map__21197_21525__$1;
var fn_str_21527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197_21525__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197_21525__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21530 = goog.getObjectByName(fn_str_21527,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21528)));

(fn_obj_21530.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21530.cljs$core$IFn$_invoke$arity$2(path,new_link_21517) : fn_obj_21530.call(null,path,new_link_21517));


var G__21532 = seq__21184_21520;
var G__21533 = chunk__21186_21521;
var G__21534 = count__21187_21522;
var G__21535 = (i__21188_21523 + (1));
seq__21184_21520 = G__21532;
chunk__21186_21521 = G__21533;
count__21187_21522 = G__21534;
i__21188_21523 = G__21535;
continue;
} else {
var temp__5823__auto___21537 = cljs.core.seq(seq__21184_21520);
if(temp__5823__auto___21537){
var seq__21184_21538__$1 = temp__5823__auto___21537;
if(cljs.core.chunked_seq_QMARK_(seq__21184_21538__$1)){
var c__5673__auto___21539 = cljs.core.chunk_first(seq__21184_21538__$1);
var G__21540 = cljs.core.chunk_rest(seq__21184_21538__$1);
var G__21541 = c__5673__auto___21539;
var G__21542 = cljs.core.count(c__5673__auto___21539);
var G__21543 = (0);
seq__21184_21520 = G__21540;
chunk__21186_21521 = G__21541;
count__21187_21522 = G__21542;
i__21188_21523 = G__21543;
continue;
} else {
var map__21200_21544 = cljs.core.first(seq__21184_21538__$1);
var map__21200_21545__$1 = cljs.core.__destructure_map(map__21200_21544);
var task_21546 = map__21200_21545__$1;
var fn_str_21547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21200_21545__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21200_21545__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21550 = goog.getObjectByName(fn_str_21547,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21548)));

(fn_obj_21550.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21550.cljs$core$IFn$_invoke$arity$2(path,new_link_21517) : fn_obj_21550.call(null,path,new_link_21517));


var G__21553 = cljs.core.next(seq__21184_21538__$1);
var G__21554 = null;
var G__21555 = (0);
var G__21556 = (0);
seq__21184_21520 = G__21553;
chunk__21186_21521 = G__21554;
count__21187_21522 = G__21555;
i__21188_21523 = G__21556;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21514);
});})(seq__21137_21509,chunk__21141_21510,count__21142_21511,i__21143_21512,seq__20954,chunk__20956,count__20957,i__20958,new_link_21517,path_match_21515,node_21514,path,map__20953,map__20953__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21515], 0));

goog.dom.insertSiblingAfter(new_link_21517,node_21514);


var G__21557 = seq__21137_21509;
var G__21558 = chunk__21141_21510;
var G__21559 = count__21142_21511;
var G__21560 = (i__21143_21512 + (1));
seq__21137_21509 = G__21557;
chunk__21141_21510 = G__21558;
count__21142_21511 = G__21559;
i__21143_21512 = G__21560;
continue;
} else {
var G__21561 = seq__21137_21509;
var G__21563 = chunk__21141_21510;
var G__21564 = count__21142_21511;
var G__21565 = (i__21143_21512 + (1));
seq__21137_21509 = G__21561;
chunk__21141_21510 = G__21563;
count__21142_21511 = G__21564;
i__21143_21512 = G__21565;
continue;
}
} else {
var G__21567 = seq__21137_21509;
var G__21568 = chunk__21141_21510;
var G__21569 = count__21142_21511;
var G__21570 = (i__21143_21512 + (1));
seq__21137_21509 = G__21567;
chunk__21141_21510 = G__21568;
count__21142_21511 = G__21569;
i__21143_21512 = G__21570;
continue;
}
} else {
var temp__5823__auto___21571 = cljs.core.seq(seq__21137_21509);
if(temp__5823__auto___21571){
var seq__21137_21572__$1 = temp__5823__auto___21571;
if(cljs.core.chunked_seq_QMARK_(seq__21137_21572__$1)){
var c__5673__auto___21574 = cljs.core.chunk_first(seq__21137_21572__$1);
var G__21575 = cljs.core.chunk_rest(seq__21137_21572__$1);
var G__21576 = c__5673__auto___21574;
var G__21577 = cljs.core.count(c__5673__auto___21574);
var G__21578 = (0);
seq__21137_21509 = G__21575;
chunk__21141_21510 = G__21576;
count__21142_21511 = G__21577;
i__21143_21512 = G__21578;
continue;
} else {
var node_21580 = cljs.core.first(seq__21137_21572__$1);
if(cljs.core.not(node_21580.shadow$old)){
var path_match_21581 = shadow.cljs.devtools.client.browser.match_paths(node_21580.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21581)){
var new_link_21582 = (function (){var G__21205 = node_21580.cloneNode(true);
G__21205.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21581)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21205;
})();
(node_21580.shadow$old = true);

(new_link_21582.onload = ((function (seq__21137_21509,chunk__21141_21510,count__21142_21511,i__21143_21512,seq__20954,chunk__20956,count__20957,i__20958,new_link_21582,path_match_21581,node_21580,seq__21137_21572__$1,temp__5823__auto___21571,path,map__20953,map__20953__$1,msg,updates,reload_info){
return (function (e){
var seq__21206_21584 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21208_21585 = null;
var count__21209_21586 = (0);
var i__21210_21587 = (0);
while(true){
if((i__21210_21587 < count__21209_21586)){
var map__21220_21588 = chunk__21208_21585.cljs$core$IIndexed$_nth$arity$2(null,i__21210_21587);
var map__21220_21589__$1 = cljs.core.__destructure_map(map__21220_21588);
var task_21590 = map__21220_21589__$1;
var fn_str_21591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21220_21589__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21220_21589__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21595 = goog.getObjectByName(fn_str_21591,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21592)));

(fn_obj_21595.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21595.cljs$core$IFn$_invoke$arity$2(path,new_link_21582) : fn_obj_21595.call(null,path,new_link_21582));


var G__21596 = seq__21206_21584;
var G__21597 = chunk__21208_21585;
var G__21598 = count__21209_21586;
var G__21599 = (i__21210_21587 + (1));
seq__21206_21584 = G__21596;
chunk__21208_21585 = G__21597;
count__21209_21586 = G__21598;
i__21210_21587 = G__21599;
continue;
} else {
var temp__5823__auto___21600__$1 = cljs.core.seq(seq__21206_21584);
if(temp__5823__auto___21600__$1){
var seq__21206_21601__$1 = temp__5823__auto___21600__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21206_21601__$1)){
var c__5673__auto___21602 = cljs.core.chunk_first(seq__21206_21601__$1);
var G__21603 = cljs.core.chunk_rest(seq__21206_21601__$1);
var G__21604 = c__5673__auto___21602;
var G__21605 = cljs.core.count(c__5673__auto___21602);
var G__21606 = (0);
seq__21206_21584 = G__21603;
chunk__21208_21585 = G__21604;
count__21209_21586 = G__21605;
i__21210_21587 = G__21606;
continue;
} else {
var map__21221_21607 = cljs.core.first(seq__21206_21601__$1);
var map__21221_21608__$1 = cljs.core.__destructure_map(map__21221_21607);
var task_21609 = map__21221_21608__$1;
var fn_str_21610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21221_21608__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21221_21608__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21612 = goog.getObjectByName(fn_str_21610,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21611)));

(fn_obj_21612.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21612.cljs$core$IFn$_invoke$arity$2(path,new_link_21582) : fn_obj_21612.call(null,path,new_link_21582));


var G__21613 = cljs.core.next(seq__21206_21601__$1);
var G__21614 = null;
var G__21615 = (0);
var G__21616 = (0);
seq__21206_21584 = G__21613;
chunk__21208_21585 = G__21614;
count__21209_21586 = G__21615;
i__21210_21587 = G__21616;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21580);
});})(seq__21137_21509,chunk__21141_21510,count__21142_21511,i__21143_21512,seq__20954,chunk__20956,count__20957,i__20958,new_link_21582,path_match_21581,node_21580,seq__21137_21572__$1,temp__5823__auto___21571,path,map__20953,map__20953__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21581], 0));

goog.dom.insertSiblingAfter(new_link_21582,node_21580);


var G__21617 = cljs.core.next(seq__21137_21572__$1);
var G__21618 = null;
var G__21619 = (0);
var G__21620 = (0);
seq__21137_21509 = G__21617;
chunk__21141_21510 = G__21618;
count__21142_21511 = G__21619;
i__21143_21512 = G__21620;
continue;
} else {
var G__21621 = cljs.core.next(seq__21137_21572__$1);
var G__21622 = null;
var G__21623 = (0);
var G__21624 = (0);
seq__21137_21509 = G__21621;
chunk__21141_21510 = G__21622;
count__21142_21511 = G__21623;
i__21143_21512 = G__21624;
continue;
}
} else {
var G__21625 = cljs.core.next(seq__21137_21572__$1);
var G__21626 = null;
var G__21627 = (0);
var G__21628 = (0);
seq__21137_21509 = G__21625;
chunk__21141_21510 = G__21626;
count__21142_21511 = G__21627;
i__21143_21512 = G__21628;
continue;
}
}
} else {
}
}
break;
}


var G__21629 = seq__20954;
var G__21630 = chunk__20956;
var G__21631 = count__20957;
var G__21632 = (i__20958 + (1));
seq__20954 = G__21629;
chunk__20956 = G__21630;
count__20957 = G__21631;
i__20958 = G__21632;
continue;
} else {
var G__21633 = seq__20954;
var G__21634 = chunk__20956;
var G__21635 = count__20957;
var G__21636 = (i__20958 + (1));
seq__20954 = G__21633;
chunk__20956 = G__21634;
count__20957 = G__21635;
i__20958 = G__21636;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20954);
if(temp__5823__auto__){
var seq__20954__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20954__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__20954__$1);
var G__21637 = cljs.core.chunk_rest(seq__20954__$1);
var G__21638 = c__5673__auto__;
var G__21639 = cljs.core.count(c__5673__auto__);
var G__21640 = (0);
seq__20954 = G__21637;
chunk__20956 = G__21638;
count__20957 = G__21639;
i__20958 = G__21640;
continue;
} else {
var path = cljs.core.first(seq__20954__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21227_21643 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21231_21645 = null;
var count__21232_21647 = (0);
var i__21233_21648 = (0);
while(true){
if((i__21233_21648 < count__21232_21647)){
var node_21649 = chunk__21231_21645.cljs$core$IIndexed$_nth$arity$2(null,i__21233_21648);
if(cljs.core.not(node_21649.shadow$old)){
var path_match_21650 = shadow.cljs.devtools.client.browser.match_paths(node_21649.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21650)){
var new_link_21651 = (function (){var G__21265 = node_21649.cloneNode(true);
G__21265.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21650)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21265;
})();
(node_21649.shadow$old = true);

(new_link_21651.onload = ((function (seq__21227_21643,chunk__21231_21645,count__21232_21647,i__21233_21648,seq__20954,chunk__20956,count__20957,i__20958,new_link_21651,path_match_21650,node_21649,path,seq__20954__$1,temp__5823__auto__,map__20953,map__20953__$1,msg,updates,reload_info){
return (function (e){
var seq__21266_21652 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21268_21654 = null;
var count__21269_21655 = (0);
var i__21270_21656 = (0);
while(true){
if((i__21270_21656 < count__21269_21655)){
var map__21277_21657 = chunk__21268_21654.cljs$core$IIndexed$_nth$arity$2(null,i__21270_21656);
var map__21277_21658__$1 = cljs.core.__destructure_map(map__21277_21657);
var task_21659 = map__21277_21658__$1;
var fn_str_21660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277_21658__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277_21658__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21664 = goog.getObjectByName(fn_str_21660,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21661)));

(fn_obj_21664.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21664.cljs$core$IFn$_invoke$arity$2(path,new_link_21651) : fn_obj_21664.call(null,path,new_link_21651));


var G__21665 = seq__21266_21652;
var G__21666 = chunk__21268_21654;
var G__21667 = count__21269_21655;
var G__21668 = (i__21270_21656 + (1));
seq__21266_21652 = G__21665;
chunk__21268_21654 = G__21666;
count__21269_21655 = G__21667;
i__21270_21656 = G__21668;
continue;
} else {
var temp__5823__auto___21669__$1 = cljs.core.seq(seq__21266_21652);
if(temp__5823__auto___21669__$1){
var seq__21266_21670__$1 = temp__5823__auto___21669__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21266_21670__$1)){
var c__5673__auto___21671 = cljs.core.chunk_first(seq__21266_21670__$1);
var G__21673 = cljs.core.chunk_rest(seq__21266_21670__$1);
var G__21674 = c__5673__auto___21671;
var G__21675 = cljs.core.count(c__5673__auto___21671);
var G__21676 = (0);
seq__21266_21652 = G__21673;
chunk__21268_21654 = G__21674;
count__21269_21655 = G__21675;
i__21270_21656 = G__21676;
continue;
} else {
var map__21278_21677 = cljs.core.first(seq__21266_21670__$1);
var map__21278_21678__$1 = cljs.core.__destructure_map(map__21278_21677);
var task_21679 = map__21278_21678__$1;
var fn_str_21680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21278_21678__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21278_21678__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21683 = goog.getObjectByName(fn_str_21680,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21681)));

(fn_obj_21683.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21683.cljs$core$IFn$_invoke$arity$2(path,new_link_21651) : fn_obj_21683.call(null,path,new_link_21651));


var G__21685 = cljs.core.next(seq__21266_21670__$1);
var G__21686 = null;
var G__21687 = (0);
var G__21688 = (0);
seq__21266_21652 = G__21685;
chunk__21268_21654 = G__21686;
count__21269_21655 = G__21687;
i__21270_21656 = G__21688;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21649);
});})(seq__21227_21643,chunk__21231_21645,count__21232_21647,i__21233_21648,seq__20954,chunk__20956,count__20957,i__20958,new_link_21651,path_match_21650,node_21649,path,seq__20954__$1,temp__5823__auto__,map__20953,map__20953__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21650], 0));

goog.dom.insertSiblingAfter(new_link_21651,node_21649);


var G__21690 = seq__21227_21643;
var G__21691 = chunk__21231_21645;
var G__21692 = count__21232_21647;
var G__21693 = (i__21233_21648 + (1));
seq__21227_21643 = G__21690;
chunk__21231_21645 = G__21691;
count__21232_21647 = G__21692;
i__21233_21648 = G__21693;
continue;
} else {
var G__21694 = seq__21227_21643;
var G__21695 = chunk__21231_21645;
var G__21696 = count__21232_21647;
var G__21697 = (i__21233_21648 + (1));
seq__21227_21643 = G__21694;
chunk__21231_21645 = G__21695;
count__21232_21647 = G__21696;
i__21233_21648 = G__21697;
continue;
}
} else {
var G__21698 = seq__21227_21643;
var G__21699 = chunk__21231_21645;
var G__21700 = count__21232_21647;
var G__21701 = (i__21233_21648 + (1));
seq__21227_21643 = G__21698;
chunk__21231_21645 = G__21699;
count__21232_21647 = G__21700;
i__21233_21648 = G__21701;
continue;
}
} else {
var temp__5823__auto___21702__$1 = cljs.core.seq(seq__21227_21643);
if(temp__5823__auto___21702__$1){
var seq__21227_21704__$1 = temp__5823__auto___21702__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21227_21704__$1)){
var c__5673__auto___21706 = cljs.core.chunk_first(seq__21227_21704__$1);
var G__21707 = cljs.core.chunk_rest(seq__21227_21704__$1);
var G__21708 = c__5673__auto___21706;
var G__21709 = cljs.core.count(c__5673__auto___21706);
var G__21710 = (0);
seq__21227_21643 = G__21707;
chunk__21231_21645 = G__21708;
count__21232_21647 = G__21709;
i__21233_21648 = G__21710;
continue;
} else {
var node_21711 = cljs.core.first(seq__21227_21704__$1);
if(cljs.core.not(node_21711.shadow$old)){
var path_match_21712 = shadow.cljs.devtools.client.browser.match_paths(node_21711.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21712)){
var new_link_21713 = (function (){var G__21279 = node_21711.cloneNode(true);
G__21279.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21712)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21279;
})();
(node_21711.shadow$old = true);

(new_link_21713.onload = ((function (seq__21227_21643,chunk__21231_21645,count__21232_21647,i__21233_21648,seq__20954,chunk__20956,count__20957,i__20958,new_link_21713,path_match_21712,node_21711,seq__21227_21704__$1,temp__5823__auto___21702__$1,path,seq__20954__$1,temp__5823__auto__,map__20953,map__20953__$1,msg,updates,reload_info){
return (function (e){
var seq__21280_21714 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21282_21715 = null;
var count__21283_21716 = (0);
var i__21284_21717 = (0);
while(true){
if((i__21284_21717 < count__21283_21716)){
var map__21292_21718 = chunk__21282_21715.cljs$core$IIndexed$_nth$arity$2(null,i__21284_21717);
var map__21292_21719__$1 = cljs.core.__destructure_map(map__21292_21718);
var task_21720 = map__21292_21719__$1;
var fn_str_21721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21292_21719__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21292_21719__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21723 = goog.getObjectByName(fn_str_21721,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21722)));

(fn_obj_21723.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21723.cljs$core$IFn$_invoke$arity$2(path,new_link_21713) : fn_obj_21723.call(null,path,new_link_21713));


var G__21730 = seq__21280_21714;
var G__21731 = chunk__21282_21715;
var G__21732 = count__21283_21716;
var G__21733 = (i__21284_21717 + (1));
seq__21280_21714 = G__21730;
chunk__21282_21715 = G__21731;
count__21283_21716 = G__21732;
i__21284_21717 = G__21733;
continue;
} else {
var temp__5823__auto___21734__$2 = cljs.core.seq(seq__21280_21714);
if(temp__5823__auto___21734__$2){
var seq__21280_21735__$1 = temp__5823__auto___21734__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21280_21735__$1)){
var c__5673__auto___21736 = cljs.core.chunk_first(seq__21280_21735__$1);
var G__21737 = cljs.core.chunk_rest(seq__21280_21735__$1);
var G__21738 = c__5673__auto___21736;
var G__21739 = cljs.core.count(c__5673__auto___21736);
var G__21740 = (0);
seq__21280_21714 = G__21737;
chunk__21282_21715 = G__21738;
count__21283_21716 = G__21739;
i__21284_21717 = G__21740;
continue;
} else {
var map__21295_21741 = cljs.core.first(seq__21280_21735__$1);
var map__21295_21742__$1 = cljs.core.__destructure_map(map__21295_21741);
var task_21743 = map__21295_21742__$1;
var fn_str_21744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21295_21742__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21295_21742__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21748 = goog.getObjectByName(fn_str_21744,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21745)));

(fn_obj_21748.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21748.cljs$core$IFn$_invoke$arity$2(path,new_link_21713) : fn_obj_21748.call(null,path,new_link_21713));


var G__21749 = cljs.core.next(seq__21280_21735__$1);
var G__21750 = null;
var G__21751 = (0);
var G__21752 = (0);
seq__21280_21714 = G__21749;
chunk__21282_21715 = G__21750;
count__21283_21716 = G__21751;
i__21284_21717 = G__21752;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21711);
});})(seq__21227_21643,chunk__21231_21645,count__21232_21647,i__21233_21648,seq__20954,chunk__20956,count__20957,i__20958,new_link_21713,path_match_21712,node_21711,seq__21227_21704__$1,temp__5823__auto___21702__$1,path,seq__20954__$1,temp__5823__auto__,map__20953,map__20953__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21712], 0));

goog.dom.insertSiblingAfter(new_link_21713,node_21711);


var G__21761 = cljs.core.next(seq__21227_21704__$1);
var G__21762 = null;
var G__21763 = (0);
var G__21764 = (0);
seq__21227_21643 = G__21761;
chunk__21231_21645 = G__21762;
count__21232_21647 = G__21763;
i__21233_21648 = G__21764;
continue;
} else {
var G__21765 = cljs.core.next(seq__21227_21704__$1);
var G__21766 = null;
var G__21767 = (0);
var G__21768 = (0);
seq__21227_21643 = G__21765;
chunk__21231_21645 = G__21766;
count__21232_21647 = G__21767;
i__21233_21648 = G__21768;
continue;
}
} else {
var G__21769 = cljs.core.next(seq__21227_21704__$1);
var G__21770 = null;
var G__21771 = (0);
var G__21772 = (0);
seq__21227_21643 = G__21769;
chunk__21231_21645 = G__21770;
count__21232_21647 = G__21771;
i__21233_21648 = G__21772;
continue;
}
}
} else {
}
}
break;
}


var G__21773 = cljs.core.next(seq__20954__$1);
var G__21774 = null;
var G__21775 = (0);
var G__21776 = (0);
seq__20954 = G__21773;
chunk__20956 = G__21774;
count__20957 = G__21775;
i__20958 = G__21776;
continue;
} else {
var G__21777 = cljs.core.next(seq__20954__$1);
var G__21778 = null;
var G__21779 = (0);
var G__21780 = (0);
seq__20954 = G__21777;
chunk__20956 = G__21778;
count__20957 = G__21779;
i__20958 = G__21780;
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
try{var G__21297 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21297) : success.call(null,G__21297));
}catch (e21296){var e = e21296;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21298,success,fail){
var map__21299 = p__21298;
var map__21299__$1 = cljs.core.__destructure_map(map__21299);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21299__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21301 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21301) : success.call(null,G__21301));
}catch (e21300){var e = e21300;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21302,done,error){
var map__21303 = p__21302;
var map__21303__$1 = cljs.core.__destructure_map(map__21303);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21303__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21307,done,error){
var map__21309 = p__21307;
var map__21309__$1 = cljs.core.__destructure_map(map__21309);
var msg = map__21309__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21309__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21309__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21309__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21310){
var map__21311 = p__21310;
var map__21311__$1 = cljs.core.__destructure_map(map__21311);
var src = map__21311__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21311__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21313 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21313) : done.call(null,G__21313));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21317){
var map__21318 = p__21317;
var map__21318__$1 = cljs.core.__destructure_map(map__21318);
var msg__$1 = map__21318__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21318__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21319){var ex = e21319;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21320){
var map__21321 = p__21320;
var map__21321__$1 = cljs.core.__destructure_map(map__21321);
var env = map__21321__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21321__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21333){
var map__21334 = p__21333;
var map__21334__$1 = cljs.core.__destructure_map(map__21334);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21334__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21334__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21344){
var map__21347 = p__21344;
var map__21347__$1 = cljs.core.__destructure_map(map__21347);
var svc = map__21347__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21347__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

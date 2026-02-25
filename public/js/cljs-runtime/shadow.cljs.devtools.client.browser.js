goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21548 = arguments.length;
var i__5877__auto___21549 = (0);
while(true){
if((i__5877__auto___21549 < len__5876__auto___21548)){
args__5882__auto__.push((arguments[i__5877__auto___21549]));

var G__21550 = (i__5877__auto___21549 + (1));
i__5877__auto___21549 = G__21550;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20904){
var G__20905 = cljs.core.first(seq20904);
var seq20904__$1 = cljs.core.next(seq20904);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20905,seq20904__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20918 = cljs.core.seq(sources);
var chunk__20919 = null;
var count__20920 = (0);
var i__20921 = (0);
while(true){
if((i__20921 < count__20920)){
var map__20931 = chunk__20919.cljs$core$IIndexed$_nth$arity$2(null,i__20921);
var map__20931__$1 = cljs.core.__destructure_map(map__20931);
var src = map__20931__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20931__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e20932){var e_21551 = e20932;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21551);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21551.message))));
}

var G__21553 = seq__20918;
var G__21554 = chunk__20919;
var G__21555 = count__20920;
var G__21556 = (i__20921 + (1));
seq__20918 = G__21553;
chunk__20919 = G__21554;
count__20920 = G__21555;
i__20921 = G__21556;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20918);
if(temp__5823__auto__){
var seq__20918__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20918__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__20918__$1);
var G__21557 = cljs.core.chunk_rest(seq__20918__$1);
var G__21558 = c__5673__auto__;
var G__21559 = cljs.core.count(c__5673__auto__);
var G__21560 = (0);
seq__20918 = G__21557;
chunk__20919 = G__21558;
count__20920 = G__21559;
i__20921 = G__21560;
continue;
} else {
var map__20933 = cljs.core.first(seq__20918__$1);
var map__20933__$1 = cljs.core.__destructure_map(map__20933);
var src = map__20933__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20933__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20933__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20933__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20933__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e20934){var e_21561 = e20934;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21561);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21561.message))));
}

var G__21562 = cljs.core.next(seq__20918__$1);
var G__21563 = null;
var G__21564 = (0);
var G__21565 = (0);
seq__20918 = G__21562;
chunk__20919 = G__21563;
count__20920 = G__21564;
i__20921 = G__21565;
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
var seq__20937 = cljs.core.seq(js_requires);
var chunk__20938 = null;
var count__20939 = (0);
var i__20940 = (0);
while(true){
if((i__20940 < count__20939)){
var js_ns = chunk__20938.cljs$core$IIndexed$_nth$arity$2(null,i__20940);
var require_str_21566 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21566);


var G__21567 = seq__20937;
var G__21568 = chunk__20938;
var G__21569 = count__20939;
var G__21570 = (i__20940 + (1));
seq__20937 = G__21567;
chunk__20938 = G__21568;
count__20939 = G__21569;
i__20940 = G__21570;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20937);
if(temp__5823__auto__){
var seq__20937__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20937__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__20937__$1);
var G__21571 = cljs.core.chunk_rest(seq__20937__$1);
var G__21572 = c__5673__auto__;
var G__21573 = cljs.core.count(c__5673__auto__);
var G__21574 = (0);
seq__20937 = G__21571;
chunk__20938 = G__21572;
count__20939 = G__21573;
i__20940 = G__21574;
continue;
} else {
var js_ns = cljs.core.first(seq__20937__$1);
var require_str_21575 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21575);


var G__21576 = cljs.core.next(seq__20937__$1);
var G__21577 = null;
var G__21578 = (0);
var G__21579 = (0);
seq__20937 = G__21576;
chunk__20938 = G__21577;
count__20939 = G__21578;
i__20940 = G__21579;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20944){
var map__20945 = p__20944;
var map__20945__$1 = cljs.core.__destructure_map(map__20945);
var msg = map__20945__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20945__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20946(s__20947){
return (new cljs.core.LazySeq(null,(function (){
var s__20947__$1 = s__20947;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__20947__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__20960 = cljs.core.first(xs__6383__auto__);
var map__20960__$1 = cljs.core.__destructure_map(map__20960);
var src = map__20960__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20960__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20960__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__20947__$1,map__20960,map__20960__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20945,map__20945__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20946_$_iter__20948(s__20949){
return (new cljs.core.LazySeq(null,((function (s__20947__$1,map__20960,map__20960__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20945,map__20945__$1,msg,info,reload_info){
return (function (){
var s__20949__$1 = s__20949;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__20949__$1);
if(temp__5823__auto____$1){
var s__20949__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20949__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__20949__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__20951 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__20950 = (0);
while(true){
if((i__20950 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__20950);
cljs.core.chunk_append(b__20951,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21580 = (i__20950 + (1));
i__20950 = G__21580;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20951),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20946_$_iter__20948(cljs.core.chunk_rest(s__20949__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20951),null);
}
} else {
var warning = cljs.core.first(s__20949__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20946_$_iter__20948(cljs.core.rest(s__20949__$2)));
}
} else {
return null;
}
break;
}
});})(s__20947__$1,map__20960,map__20960__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20945,map__20945__$1,msg,info,reload_info))
,null,null));
});})(s__20947__$1,map__20960,map__20960__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__20945,map__20945__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20946(cljs.core.rest(s__20947__$1)));
} else {
var G__21581 = cljs.core.rest(s__20947__$1);
s__20947__$1 = G__21581;
continue;
}
} else {
var G__21582 = cljs.core.rest(s__20947__$1);
s__20947__$1 = G__21582;
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
var seq__20980_21583 = cljs.core.seq(warnings);
var chunk__20981_21584 = null;
var count__20982_21585 = (0);
var i__20983_21586 = (0);
while(true){
if((i__20983_21586 < count__20982_21585)){
var map__21012_21587 = chunk__20981_21584.cljs$core$IIndexed$_nth$arity$2(null,i__20983_21586);
var map__21012_21588__$1 = cljs.core.__destructure_map(map__21012_21587);
var w_21589 = map__21012_21588__$1;
var msg_21590__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012_21588__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012_21588__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012_21588__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21012_21588__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21593)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21591)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21592)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21590__$1)));


var G__21594 = seq__20980_21583;
var G__21595 = chunk__20981_21584;
var G__21596 = count__20982_21585;
var G__21597 = (i__20983_21586 + (1));
seq__20980_21583 = G__21594;
chunk__20981_21584 = G__21595;
count__20982_21585 = G__21596;
i__20983_21586 = G__21597;
continue;
} else {
var temp__5823__auto___21598 = cljs.core.seq(seq__20980_21583);
if(temp__5823__auto___21598){
var seq__20980_21599__$1 = temp__5823__auto___21598;
if(cljs.core.chunked_seq_QMARK_(seq__20980_21599__$1)){
var c__5673__auto___21601 = cljs.core.chunk_first(seq__20980_21599__$1);
var G__21602 = cljs.core.chunk_rest(seq__20980_21599__$1);
var G__21603 = c__5673__auto___21601;
var G__21604 = cljs.core.count(c__5673__auto___21601);
var G__21605 = (0);
seq__20980_21583 = G__21602;
chunk__20981_21584 = G__21603;
count__20982_21585 = G__21604;
i__20983_21586 = G__21605;
continue;
} else {
var map__21022_21606 = cljs.core.first(seq__20980_21599__$1);
var map__21022_21607__$1 = cljs.core.__destructure_map(map__21022_21606);
var w_21608 = map__21022_21607__$1;
var msg_21609__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21022_21607__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21022_21607__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21022_21607__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21022_21607__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21612)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21610)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21611)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21609__$1)));


var G__21613 = cljs.core.next(seq__20980_21599__$1);
var G__21614 = null;
var G__21615 = (0);
var G__21616 = (0);
seq__20980_21583 = G__21613;
chunk__20981_21584 = G__21614;
count__20982_21585 = G__21615;
i__20983_21586 = G__21616;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20943_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20943_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21052 = node_uri;
G__21052.setQuery(null);

G__21052.setPath(new$);

return G__21052;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21055){
var map__21057 = p__21055;
var map__21057__$1 = cljs.core.__destructure_map(map__21057);
var msg = map__21057__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21057__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21057__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21060 = cljs.core.seq(updates);
var chunk__21062 = null;
var count__21063 = (0);
var i__21064 = (0);
while(true){
if((i__21064 < count__21063)){
var path = chunk__21062.cljs$core$IIndexed$_nth$arity$2(null,i__21064);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21365_21617 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21369_21618 = null;
var count__21370_21619 = (0);
var i__21371_21620 = (0);
while(true){
if((i__21371_21620 < count__21370_21619)){
var node_21621 = chunk__21369_21618.cljs$core$IIndexed$_nth$arity$2(null,i__21371_21620);
if(cljs.core.not(node_21621.shadow$old)){
var path_match_21622 = shadow.cljs.devtools.client.browser.match_paths(node_21621.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21622)){
var new_link_21623 = (function (){var G__21425 = node_21621.cloneNode(true);
G__21425.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21622)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21425;
})();
(node_21621.shadow$old = true);

(new_link_21623.onload = ((function (seq__21365_21617,chunk__21369_21618,count__21370_21619,i__21371_21620,seq__21060,chunk__21062,count__21063,i__21064,new_link_21623,path_match_21622,node_21621,path,map__21057,map__21057__$1,msg,updates,reload_info){
return (function (e){
var seq__21426_21624 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21428_21625 = null;
var count__21429_21626 = (0);
var i__21430_21627 = (0);
while(true){
if((i__21430_21627 < count__21429_21626)){
var map__21434_21628 = chunk__21428_21625.cljs$core$IIndexed$_nth$arity$2(null,i__21430_21627);
var map__21434_21629__$1 = cljs.core.__destructure_map(map__21434_21628);
var task_21630 = map__21434_21629__$1;
var fn_str_21631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434_21629__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434_21629__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21633 = goog.getObjectByName(fn_str_21631,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21632)));

(fn_obj_21633.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21633.cljs$core$IFn$_invoke$arity$2(path,new_link_21623) : fn_obj_21633.call(null,path,new_link_21623));


var G__21634 = seq__21426_21624;
var G__21635 = chunk__21428_21625;
var G__21636 = count__21429_21626;
var G__21637 = (i__21430_21627 + (1));
seq__21426_21624 = G__21634;
chunk__21428_21625 = G__21635;
count__21429_21626 = G__21636;
i__21430_21627 = G__21637;
continue;
} else {
var temp__5823__auto___21638 = cljs.core.seq(seq__21426_21624);
if(temp__5823__auto___21638){
var seq__21426_21639__$1 = temp__5823__auto___21638;
if(cljs.core.chunked_seq_QMARK_(seq__21426_21639__$1)){
var c__5673__auto___21640 = cljs.core.chunk_first(seq__21426_21639__$1);
var G__21641 = cljs.core.chunk_rest(seq__21426_21639__$1);
var G__21642 = c__5673__auto___21640;
var G__21643 = cljs.core.count(c__5673__auto___21640);
var G__21644 = (0);
seq__21426_21624 = G__21641;
chunk__21428_21625 = G__21642;
count__21429_21626 = G__21643;
i__21430_21627 = G__21644;
continue;
} else {
var map__21435_21645 = cljs.core.first(seq__21426_21639__$1);
var map__21435_21646__$1 = cljs.core.__destructure_map(map__21435_21645);
var task_21647 = map__21435_21646__$1;
var fn_str_21648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435_21646__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21435_21646__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21650 = goog.getObjectByName(fn_str_21648,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21649)));

(fn_obj_21650.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21650.cljs$core$IFn$_invoke$arity$2(path,new_link_21623) : fn_obj_21650.call(null,path,new_link_21623));


var G__21651 = cljs.core.next(seq__21426_21639__$1);
var G__21652 = null;
var G__21653 = (0);
var G__21654 = (0);
seq__21426_21624 = G__21651;
chunk__21428_21625 = G__21652;
count__21429_21626 = G__21653;
i__21430_21627 = G__21654;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21621);
});})(seq__21365_21617,chunk__21369_21618,count__21370_21619,i__21371_21620,seq__21060,chunk__21062,count__21063,i__21064,new_link_21623,path_match_21622,node_21621,path,map__21057,map__21057__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21622], 0));

goog.dom.insertSiblingAfter(new_link_21623,node_21621);


var G__21655 = seq__21365_21617;
var G__21656 = chunk__21369_21618;
var G__21657 = count__21370_21619;
var G__21658 = (i__21371_21620 + (1));
seq__21365_21617 = G__21655;
chunk__21369_21618 = G__21656;
count__21370_21619 = G__21657;
i__21371_21620 = G__21658;
continue;
} else {
var G__21659 = seq__21365_21617;
var G__21660 = chunk__21369_21618;
var G__21661 = count__21370_21619;
var G__21662 = (i__21371_21620 + (1));
seq__21365_21617 = G__21659;
chunk__21369_21618 = G__21660;
count__21370_21619 = G__21661;
i__21371_21620 = G__21662;
continue;
}
} else {
var G__21663 = seq__21365_21617;
var G__21664 = chunk__21369_21618;
var G__21665 = count__21370_21619;
var G__21666 = (i__21371_21620 + (1));
seq__21365_21617 = G__21663;
chunk__21369_21618 = G__21664;
count__21370_21619 = G__21665;
i__21371_21620 = G__21666;
continue;
}
} else {
var temp__5823__auto___21667 = cljs.core.seq(seq__21365_21617);
if(temp__5823__auto___21667){
var seq__21365_21668__$1 = temp__5823__auto___21667;
if(cljs.core.chunked_seq_QMARK_(seq__21365_21668__$1)){
var c__5673__auto___21669 = cljs.core.chunk_first(seq__21365_21668__$1);
var G__21670 = cljs.core.chunk_rest(seq__21365_21668__$1);
var G__21671 = c__5673__auto___21669;
var G__21672 = cljs.core.count(c__5673__auto___21669);
var G__21673 = (0);
seq__21365_21617 = G__21670;
chunk__21369_21618 = G__21671;
count__21370_21619 = G__21672;
i__21371_21620 = G__21673;
continue;
} else {
var node_21674 = cljs.core.first(seq__21365_21668__$1);
if(cljs.core.not(node_21674.shadow$old)){
var path_match_21675 = shadow.cljs.devtools.client.browser.match_paths(node_21674.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21675)){
var new_link_21676 = (function (){var G__21436 = node_21674.cloneNode(true);
G__21436.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21675)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21436;
})();
(node_21674.shadow$old = true);

(new_link_21676.onload = ((function (seq__21365_21617,chunk__21369_21618,count__21370_21619,i__21371_21620,seq__21060,chunk__21062,count__21063,i__21064,new_link_21676,path_match_21675,node_21674,seq__21365_21668__$1,temp__5823__auto___21667,path,map__21057,map__21057__$1,msg,updates,reload_info){
return (function (e){
var seq__21437_21677 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21439_21678 = null;
var count__21440_21679 = (0);
var i__21441_21680 = (0);
while(true){
if((i__21441_21680 < count__21440_21679)){
var map__21445_21681 = chunk__21439_21678.cljs$core$IIndexed$_nth$arity$2(null,i__21441_21680);
var map__21445_21682__$1 = cljs.core.__destructure_map(map__21445_21681);
var task_21683 = map__21445_21682__$1;
var fn_str_21684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445_21682__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21445_21682__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21686 = goog.getObjectByName(fn_str_21684,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21685)));

(fn_obj_21686.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21686.cljs$core$IFn$_invoke$arity$2(path,new_link_21676) : fn_obj_21686.call(null,path,new_link_21676));


var G__21687 = seq__21437_21677;
var G__21688 = chunk__21439_21678;
var G__21689 = count__21440_21679;
var G__21690 = (i__21441_21680 + (1));
seq__21437_21677 = G__21687;
chunk__21439_21678 = G__21688;
count__21440_21679 = G__21689;
i__21441_21680 = G__21690;
continue;
} else {
var temp__5823__auto___21691__$1 = cljs.core.seq(seq__21437_21677);
if(temp__5823__auto___21691__$1){
var seq__21437_21692__$1 = temp__5823__auto___21691__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21437_21692__$1)){
var c__5673__auto___21693 = cljs.core.chunk_first(seq__21437_21692__$1);
var G__21694 = cljs.core.chunk_rest(seq__21437_21692__$1);
var G__21695 = c__5673__auto___21693;
var G__21696 = cljs.core.count(c__5673__auto___21693);
var G__21697 = (0);
seq__21437_21677 = G__21694;
chunk__21439_21678 = G__21695;
count__21440_21679 = G__21696;
i__21441_21680 = G__21697;
continue;
} else {
var map__21446_21698 = cljs.core.first(seq__21437_21692__$1);
var map__21446_21699__$1 = cljs.core.__destructure_map(map__21446_21698);
var task_21700 = map__21446_21699__$1;
var fn_str_21701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446_21699__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21446_21699__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21703 = goog.getObjectByName(fn_str_21701,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21702)));

(fn_obj_21703.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21703.cljs$core$IFn$_invoke$arity$2(path,new_link_21676) : fn_obj_21703.call(null,path,new_link_21676));


var G__21704 = cljs.core.next(seq__21437_21692__$1);
var G__21705 = null;
var G__21706 = (0);
var G__21707 = (0);
seq__21437_21677 = G__21704;
chunk__21439_21678 = G__21705;
count__21440_21679 = G__21706;
i__21441_21680 = G__21707;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21674);
});})(seq__21365_21617,chunk__21369_21618,count__21370_21619,i__21371_21620,seq__21060,chunk__21062,count__21063,i__21064,new_link_21676,path_match_21675,node_21674,seq__21365_21668__$1,temp__5823__auto___21667,path,map__21057,map__21057__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21675], 0));

goog.dom.insertSiblingAfter(new_link_21676,node_21674);


var G__21708 = cljs.core.next(seq__21365_21668__$1);
var G__21709 = null;
var G__21710 = (0);
var G__21711 = (0);
seq__21365_21617 = G__21708;
chunk__21369_21618 = G__21709;
count__21370_21619 = G__21710;
i__21371_21620 = G__21711;
continue;
} else {
var G__21712 = cljs.core.next(seq__21365_21668__$1);
var G__21713 = null;
var G__21714 = (0);
var G__21715 = (0);
seq__21365_21617 = G__21712;
chunk__21369_21618 = G__21713;
count__21370_21619 = G__21714;
i__21371_21620 = G__21715;
continue;
}
} else {
var G__21716 = cljs.core.next(seq__21365_21668__$1);
var G__21717 = null;
var G__21718 = (0);
var G__21719 = (0);
seq__21365_21617 = G__21716;
chunk__21369_21618 = G__21717;
count__21370_21619 = G__21718;
i__21371_21620 = G__21719;
continue;
}
}
} else {
}
}
break;
}


var G__21720 = seq__21060;
var G__21721 = chunk__21062;
var G__21722 = count__21063;
var G__21723 = (i__21064 + (1));
seq__21060 = G__21720;
chunk__21062 = G__21721;
count__21063 = G__21722;
i__21064 = G__21723;
continue;
} else {
var G__21724 = seq__21060;
var G__21725 = chunk__21062;
var G__21726 = count__21063;
var G__21727 = (i__21064 + (1));
seq__21060 = G__21724;
chunk__21062 = G__21725;
count__21063 = G__21726;
i__21064 = G__21727;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21060);
if(temp__5823__auto__){
var seq__21060__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21060__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21060__$1);
var G__21728 = cljs.core.chunk_rest(seq__21060__$1);
var G__21729 = c__5673__auto__;
var G__21730 = cljs.core.count(c__5673__auto__);
var G__21731 = (0);
seq__21060 = G__21728;
chunk__21062 = G__21729;
count__21063 = G__21730;
i__21064 = G__21731;
continue;
} else {
var path = cljs.core.first(seq__21060__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21447_21732 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21451_21733 = null;
var count__21452_21734 = (0);
var i__21453_21735 = (0);
while(true){
if((i__21453_21735 < count__21452_21734)){
var node_21736 = chunk__21451_21733.cljs$core$IIndexed$_nth$arity$2(null,i__21453_21735);
if(cljs.core.not(node_21736.shadow$old)){
var path_match_21739 = shadow.cljs.devtools.client.browser.match_paths(node_21736.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21739)){
var new_link_21740 = (function (){var G__21484 = node_21736.cloneNode(true);
G__21484.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21739)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21484;
})();
(node_21736.shadow$old = true);

(new_link_21740.onload = ((function (seq__21447_21732,chunk__21451_21733,count__21452_21734,i__21453_21735,seq__21060,chunk__21062,count__21063,i__21064,new_link_21740,path_match_21739,node_21736,path,seq__21060__$1,temp__5823__auto__,map__21057,map__21057__$1,msg,updates,reload_info){
return (function (e){
var seq__21486_21741 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21488_21742 = null;
var count__21489_21743 = (0);
var i__21490_21744 = (0);
while(true){
if((i__21490_21744 < count__21489_21743)){
var map__21494_21745 = chunk__21488_21742.cljs$core$IIndexed$_nth$arity$2(null,i__21490_21744);
var map__21494_21746__$1 = cljs.core.__destructure_map(map__21494_21745);
var task_21747 = map__21494_21746__$1;
var fn_str_21748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494_21746__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21494_21746__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21754 = goog.getObjectByName(fn_str_21748,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21749)));

(fn_obj_21754.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21754.cljs$core$IFn$_invoke$arity$2(path,new_link_21740) : fn_obj_21754.call(null,path,new_link_21740));


var G__21755 = seq__21486_21741;
var G__21756 = chunk__21488_21742;
var G__21757 = count__21489_21743;
var G__21758 = (i__21490_21744 + (1));
seq__21486_21741 = G__21755;
chunk__21488_21742 = G__21756;
count__21489_21743 = G__21757;
i__21490_21744 = G__21758;
continue;
} else {
var temp__5823__auto___21759__$1 = cljs.core.seq(seq__21486_21741);
if(temp__5823__auto___21759__$1){
var seq__21486_21760__$1 = temp__5823__auto___21759__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21486_21760__$1)){
var c__5673__auto___21761 = cljs.core.chunk_first(seq__21486_21760__$1);
var G__21762 = cljs.core.chunk_rest(seq__21486_21760__$1);
var G__21763 = c__5673__auto___21761;
var G__21764 = cljs.core.count(c__5673__auto___21761);
var G__21765 = (0);
seq__21486_21741 = G__21762;
chunk__21488_21742 = G__21763;
count__21489_21743 = G__21764;
i__21490_21744 = G__21765;
continue;
} else {
var map__21495_21766 = cljs.core.first(seq__21486_21760__$1);
var map__21495_21767__$1 = cljs.core.__destructure_map(map__21495_21766);
var task_21768 = map__21495_21767__$1;
var fn_str_21769 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495_21767__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495_21767__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21775 = goog.getObjectByName(fn_str_21769,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21770)));

(fn_obj_21775.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21775.cljs$core$IFn$_invoke$arity$2(path,new_link_21740) : fn_obj_21775.call(null,path,new_link_21740));


var G__21776 = cljs.core.next(seq__21486_21760__$1);
var G__21777 = null;
var G__21778 = (0);
var G__21779 = (0);
seq__21486_21741 = G__21776;
chunk__21488_21742 = G__21777;
count__21489_21743 = G__21778;
i__21490_21744 = G__21779;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21736);
});})(seq__21447_21732,chunk__21451_21733,count__21452_21734,i__21453_21735,seq__21060,chunk__21062,count__21063,i__21064,new_link_21740,path_match_21739,node_21736,path,seq__21060__$1,temp__5823__auto__,map__21057,map__21057__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21739], 0));

goog.dom.insertSiblingAfter(new_link_21740,node_21736);


var G__21780 = seq__21447_21732;
var G__21781 = chunk__21451_21733;
var G__21782 = count__21452_21734;
var G__21783 = (i__21453_21735 + (1));
seq__21447_21732 = G__21780;
chunk__21451_21733 = G__21781;
count__21452_21734 = G__21782;
i__21453_21735 = G__21783;
continue;
} else {
var G__21784 = seq__21447_21732;
var G__21785 = chunk__21451_21733;
var G__21786 = count__21452_21734;
var G__21787 = (i__21453_21735 + (1));
seq__21447_21732 = G__21784;
chunk__21451_21733 = G__21785;
count__21452_21734 = G__21786;
i__21453_21735 = G__21787;
continue;
}
} else {
var G__21788 = seq__21447_21732;
var G__21789 = chunk__21451_21733;
var G__21790 = count__21452_21734;
var G__21791 = (i__21453_21735 + (1));
seq__21447_21732 = G__21788;
chunk__21451_21733 = G__21789;
count__21452_21734 = G__21790;
i__21453_21735 = G__21791;
continue;
}
} else {
var temp__5823__auto___21792__$1 = cljs.core.seq(seq__21447_21732);
if(temp__5823__auto___21792__$1){
var seq__21447_21793__$1 = temp__5823__auto___21792__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21447_21793__$1)){
var c__5673__auto___21794 = cljs.core.chunk_first(seq__21447_21793__$1);
var G__21796 = cljs.core.chunk_rest(seq__21447_21793__$1);
var G__21797 = c__5673__auto___21794;
var G__21798 = cljs.core.count(c__5673__auto___21794);
var G__21799 = (0);
seq__21447_21732 = G__21796;
chunk__21451_21733 = G__21797;
count__21452_21734 = G__21798;
i__21453_21735 = G__21799;
continue;
} else {
var node_21800 = cljs.core.first(seq__21447_21793__$1);
if(cljs.core.not(node_21800.shadow$old)){
var path_match_21801 = shadow.cljs.devtools.client.browser.match_paths(node_21800.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21801)){
var new_link_21802 = (function (){var G__21496 = node_21800.cloneNode(true);
G__21496.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21801)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21496;
})();
(node_21800.shadow$old = true);

(new_link_21802.onload = ((function (seq__21447_21732,chunk__21451_21733,count__21452_21734,i__21453_21735,seq__21060,chunk__21062,count__21063,i__21064,new_link_21802,path_match_21801,node_21800,seq__21447_21793__$1,temp__5823__auto___21792__$1,path,seq__21060__$1,temp__5823__auto__,map__21057,map__21057__$1,msg,updates,reload_info){
return (function (e){
var seq__21497_21805 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21499_21806 = null;
var count__21500_21807 = (0);
var i__21501_21808 = (0);
while(true){
if((i__21501_21808 < count__21500_21807)){
var map__21508_21809 = chunk__21499_21806.cljs$core$IIndexed$_nth$arity$2(null,i__21501_21808);
var map__21508_21810__$1 = cljs.core.__destructure_map(map__21508_21809);
var task_21811 = map__21508_21810__$1;
var fn_str_21812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21508_21810__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21508_21810__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21814 = goog.getObjectByName(fn_str_21812,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21813)));

(fn_obj_21814.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21814.cljs$core$IFn$_invoke$arity$2(path,new_link_21802) : fn_obj_21814.call(null,path,new_link_21802));


var G__21815 = seq__21497_21805;
var G__21816 = chunk__21499_21806;
var G__21817 = count__21500_21807;
var G__21818 = (i__21501_21808 + (1));
seq__21497_21805 = G__21815;
chunk__21499_21806 = G__21816;
count__21500_21807 = G__21817;
i__21501_21808 = G__21818;
continue;
} else {
var temp__5823__auto___21819__$2 = cljs.core.seq(seq__21497_21805);
if(temp__5823__auto___21819__$2){
var seq__21497_21820__$1 = temp__5823__auto___21819__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21497_21820__$1)){
var c__5673__auto___21821 = cljs.core.chunk_first(seq__21497_21820__$1);
var G__21822 = cljs.core.chunk_rest(seq__21497_21820__$1);
var G__21823 = c__5673__auto___21821;
var G__21824 = cljs.core.count(c__5673__auto___21821);
var G__21825 = (0);
seq__21497_21805 = G__21822;
chunk__21499_21806 = G__21823;
count__21500_21807 = G__21824;
i__21501_21808 = G__21825;
continue;
} else {
var map__21509_21830 = cljs.core.first(seq__21497_21820__$1);
var map__21509_21831__$1 = cljs.core.__destructure_map(map__21509_21830);
var task_21832 = map__21509_21831__$1;
var fn_str_21833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21509_21831__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21509_21831__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21835 = goog.getObjectByName(fn_str_21833,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21834)));

(fn_obj_21835.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21835.cljs$core$IFn$_invoke$arity$2(path,new_link_21802) : fn_obj_21835.call(null,path,new_link_21802));


var G__21836 = cljs.core.next(seq__21497_21820__$1);
var G__21837 = null;
var G__21838 = (0);
var G__21839 = (0);
seq__21497_21805 = G__21836;
chunk__21499_21806 = G__21837;
count__21500_21807 = G__21838;
i__21501_21808 = G__21839;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21800);
});})(seq__21447_21732,chunk__21451_21733,count__21452_21734,i__21453_21735,seq__21060,chunk__21062,count__21063,i__21064,new_link_21802,path_match_21801,node_21800,seq__21447_21793__$1,temp__5823__auto___21792__$1,path,seq__21060__$1,temp__5823__auto__,map__21057,map__21057__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21801], 0));

goog.dom.insertSiblingAfter(new_link_21802,node_21800);


var G__21840 = cljs.core.next(seq__21447_21793__$1);
var G__21841 = null;
var G__21842 = (0);
var G__21843 = (0);
seq__21447_21732 = G__21840;
chunk__21451_21733 = G__21841;
count__21452_21734 = G__21842;
i__21453_21735 = G__21843;
continue;
} else {
var G__21844 = cljs.core.next(seq__21447_21793__$1);
var G__21845 = null;
var G__21846 = (0);
var G__21847 = (0);
seq__21447_21732 = G__21844;
chunk__21451_21733 = G__21845;
count__21452_21734 = G__21846;
i__21453_21735 = G__21847;
continue;
}
} else {
var G__21848 = cljs.core.next(seq__21447_21793__$1);
var G__21849 = null;
var G__21850 = (0);
var G__21851 = (0);
seq__21447_21732 = G__21848;
chunk__21451_21733 = G__21849;
count__21452_21734 = G__21850;
i__21453_21735 = G__21851;
continue;
}
}
} else {
}
}
break;
}


var G__21852 = cljs.core.next(seq__21060__$1);
var G__21853 = null;
var G__21854 = (0);
var G__21855 = (0);
seq__21060 = G__21852;
chunk__21062 = G__21853;
count__21063 = G__21854;
i__21064 = G__21855;
continue;
} else {
var G__21856 = cljs.core.next(seq__21060__$1);
var G__21857 = null;
var G__21858 = (0);
var G__21859 = (0);
seq__21060 = G__21856;
chunk__21062 = G__21857;
count__21063 = G__21858;
i__21064 = G__21859;
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
try{var G__21518 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21518) : success.call(null,G__21518));
}catch (e21517){var e = e21517;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21519,success,fail){
var map__21520 = p__21519;
var map__21520__$1 = cljs.core.__destructure_map(map__21520);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21520__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21522 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21522) : success.call(null,G__21522));
}catch (e21521){var e = e21521;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21523,done,error){
var map__21524 = p__21523;
var map__21524__$1 = cljs.core.__destructure_map(map__21524);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21524__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21527,done,error){
var map__21528 = p__21527;
var map__21528__$1 = cljs.core.__destructure_map(map__21528);
var msg = map__21528__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21528__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21528__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21528__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21529){
var map__21530 = p__21529;
var map__21530__$1 = cljs.core.__destructure_map(map__21530);
var src = map__21530__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21530__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21531 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21531) : done.call(null,G__21531));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21532){
var map__21533 = p__21532;
var map__21533__$1 = cljs.core.__destructure_map(map__21533);
var msg__$1 = map__21533__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21533__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21534){var ex = e21534;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21535){
var map__21536 = p__21535;
var map__21536__$1 = cljs.core.__destructure_map(map__21536);
var env = map__21536__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21536__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21544){
var map__21545 = p__21544;
var map__21545__$1 = cljs.core.__destructure_map(map__21545);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21545__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21545__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21546){
var map__21547 = p__21546;
var map__21547__$1 = cljs.core.__destructure_map(map__21547);
var svc = map__21547__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21547__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18024){
var map__18026 = p__18024;
var map__18026__$1 = cljs.core.__destructure_map(map__18026);
var m = map__18026__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18026__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18026__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18033_18504 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18034_18505 = null;
var count__18035_18506 = (0);
var i__18036_18507 = (0);
while(true){
if((i__18036_18507 < count__18035_18506)){
var f_18511 = chunk__18034_18505.cljs$core$IIndexed$_nth$arity$2(null,i__18036_18507);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18511], 0));


var G__18513 = seq__18033_18504;
var G__18514 = chunk__18034_18505;
var G__18515 = count__18035_18506;
var G__18516 = (i__18036_18507 + (1));
seq__18033_18504 = G__18513;
chunk__18034_18505 = G__18514;
count__18035_18506 = G__18515;
i__18036_18507 = G__18516;
continue;
} else {
var temp__5823__auto___18517 = cljs.core.seq(seq__18033_18504);
if(temp__5823__auto___18517){
var seq__18033_18518__$1 = temp__5823__auto___18517;
if(cljs.core.chunked_seq_QMARK_(seq__18033_18518__$1)){
var c__5673__auto___18519 = cljs.core.chunk_first(seq__18033_18518__$1);
var G__18520 = cljs.core.chunk_rest(seq__18033_18518__$1);
var G__18521 = c__5673__auto___18519;
var G__18522 = cljs.core.count(c__5673__auto___18519);
var G__18523 = (0);
seq__18033_18504 = G__18520;
chunk__18034_18505 = G__18521;
count__18035_18506 = G__18522;
i__18036_18507 = G__18523;
continue;
} else {
var f_18524 = cljs.core.first(seq__18033_18518__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18524], 0));


var G__18527 = cljs.core.next(seq__18033_18518__$1);
var G__18528 = null;
var G__18529 = (0);
var G__18530 = (0);
seq__18033_18504 = G__18527;
chunk__18034_18505 = G__18528;
count__18035_18506 = G__18529;
i__18036_18507 = G__18530;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18531 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18531], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18531)))?cljs.core.second(arglists_18531):arglists_18531)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18095_18547 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18096_18548 = null;
var count__18097_18549 = (0);
var i__18098_18550 = (0);
while(true){
if((i__18098_18550 < count__18097_18549)){
var vec__18190_18556 = chunk__18096_18548.cljs$core$IIndexed$_nth$arity$2(null,i__18098_18550);
var name_18558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18190_18556,(0),null);
var map__18193_18559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18190_18556,(1),null);
var map__18193_18560__$1 = cljs.core.__destructure_map(map__18193_18559);
var doc_18561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18193_18560__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18193_18560__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18558], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18563], 0));

if(cljs.core.truth_(doc_18561)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18561], 0));
} else {
}


var G__18578 = seq__18095_18547;
var G__18579 = chunk__18096_18548;
var G__18580 = count__18097_18549;
var G__18581 = (i__18098_18550 + (1));
seq__18095_18547 = G__18578;
chunk__18096_18548 = G__18579;
count__18097_18549 = G__18580;
i__18098_18550 = G__18581;
continue;
} else {
var temp__5823__auto___18582 = cljs.core.seq(seq__18095_18547);
if(temp__5823__auto___18582){
var seq__18095_18583__$1 = temp__5823__auto___18582;
if(cljs.core.chunked_seq_QMARK_(seq__18095_18583__$1)){
var c__5673__auto___18584 = cljs.core.chunk_first(seq__18095_18583__$1);
var G__18585 = cljs.core.chunk_rest(seq__18095_18583__$1);
var G__18586 = c__5673__auto___18584;
var G__18587 = cljs.core.count(c__5673__auto___18584);
var G__18588 = (0);
seq__18095_18547 = G__18585;
chunk__18096_18548 = G__18586;
count__18097_18549 = G__18587;
i__18098_18550 = G__18588;
continue;
} else {
var vec__18207_18589 = cljs.core.first(seq__18095_18583__$1);
var name_18590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18207_18589,(0),null);
var map__18210_18591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18207_18589,(1),null);
var map__18210_18592__$1 = cljs.core.__destructure_map(map__18210_18591);
var doc_18593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18210_18592__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18210_18592__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18590], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18594], 0));

if(cljs.core.truth_(doc_18593)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18593], 0));
} else {
}


var G__18595 = cljs.core.next(seq__18095_18583__$1);
var G__18596 = null;
var G__18597 = (0);
var G__18598 = (0);
seq__18095_18547 = G__18595;
chunk__18096_18548 = G__18596;
count__18097_18549 = G__18597;
i__18098_18550 = G__18598;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18233 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18234 = null;
var count__18235 = (0);
var i__18236 = (0);
while(true){
if((i__18236 < count__18235)){
var role = chunk__18234.cljs$core$IIndexed$_nth$arity$2(null,i__18236);
var temp__5823__auto___18599__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___18599__$1)){
var spec_18600 = temp__5823__auto___18599__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_18600)], 0));
} else {
}


var G__18602 = seq__18233;
var G__18603 = chunk__18234;
var G__18604 = count__18235;
var G__18605 = (i__18236 + (1));
seq__18233 = G__18602;
chunk__18234 = G__18603;
count__18235 = G__18604;
i__18236 = G__18605;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__18233);
if(temp__5823__auto____$1){
var seq__18233__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18233__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18233__$1);
var G__18607 = cljs.core.chunk_rest(seq__18233__$1);
var G__18608 = c__5673__auto__;
var G__18609 = cljs.core.count(c__5673__auto__);
var G__18610 = (0);
seq__18233 = G__18607;
chunk__18234 = G__18608;
count__18235 = G__18609;
i__18236 = G__18610;
continue;
} else {
var role = cljs.core.first(seq__18233__$1);
var temp__5823__auto___18612__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___18612__$2)){
var spec_18613 = temp__5823__auto___18612__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_18613)], 0));
} else {
}


var G__18614 = cljs.core.next(seq__18233__$1);
var G__18615 = null;
var G__18616 = (0);
var G__18617 = (0);
seq__18233 = G__18614;
chunk__18234 = G__18615;
count__18235 = G__18616;
i__18236 = G__18617;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18295 = datafied_throwable;
var map__18295__$1 = cljs.core.__destructure_map(map__18295);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18295__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18295__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18295__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18296 = cljs.core.last(via);
var map__18296__$1 = cljs.core.__destructure_map(map__18296);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18296__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18296__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18296__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18297 = data;
var map__18297__$1 = cljs.core.__destructure_map(map__18297);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18297__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18297__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18297__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18298 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18298__$1 = cljs.core.__destructure_map(map__18298);
var top_data = map__18298__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18298__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18306 = phase;
var G__18306__$1 = (((G__18306 instanceof cljs.core.Keyword))?G__18306.fqn:null);
switch (G__18306__$1) {
case "read-source":
var map__18307 = data;
var map__18307__$1 = cljs.core.__destructure_map(map__18307);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18307__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18307__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18309 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18309__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18309,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18309);
var G__18309__$2 = (cljs.core.truth_((function (){var fexpr__18313 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18313.cljs$core$IFn$_invoke$arity$1 ? fexpr__18313.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18313.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18309__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18309__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18309__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18309__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18315 = top_data;
var G__18315__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18315,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18315);
var G__18315__$2 = (cljs.core.truth_((function (){var fexpr__18316 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18316.cljs$core$IFn$_invoke$arity$1 ? fexpr__18316.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18316.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18315__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18315__$1);
var G__18315__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18315__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18315__$2);
var G__18315__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18315__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18315__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18315__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18315__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18318 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18318,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18318,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18318,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18318,(3),null);
var G__18322 = top_data;
var G__18322__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18322,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18322);
var G__18322__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18322__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18322__$1);
var G__18322__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18322__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18322__$2);
var G__18322__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18322__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18322__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18322__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18322__$4;
}

break;
case "execution":
var vec__18329 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18329,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18290_SHARP_){
var or__5142__auto__ = (p1__18290_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__18342 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18342.cljs$core$IFn$_invoke$arity$1 ? fexpr__18342.cljs$core$IFn$_invoke$arity$1(p1__18290_SHARP_) : fexpr__18342.call(null,p1__18290_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__18352 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18352__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18352,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18352);
var G__18352__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18352__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18352__$1);
var G__18352__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18352__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18352__$2);
var G__18352__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18352__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18352__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18352__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18352__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18306__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18397){
var map__18400 = p__18397;
var map__18400__$1 = cljs.core.__destructure_map(map__18400);
var triage_data = map__18400__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18400__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__18415 = phase;
var G__18415__$1 = (((G__18415 instanceof cljs.core.Keyword))?G__18415.fqn:null);
switch (G__18415__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18417 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18418 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18419 = loc;
var G__18420 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18422_18673 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18423_18674 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18424_18675 = true;
var _STAR_print_fn_STAR__temp_val__18425_18676 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18424_18675);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18425_18676);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18391_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18391_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18423_18674);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18422_18673);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18417,G__18418,G__18419,G__18420) : format.call(null,G__18417,G__18418,G__18419,G__18420));

break;
case "macroexpansion":
var G__18435 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18436 = cause_type;
var G__18437 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18438 = loc;
var G__18439 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18435,G__18436,G__18437,G__18438,G__18439) : format.call(null,G__18435,G__18436,G__18437,G__18438,G__18439));

break;
case "compile-syntax-check":
var G__18441 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18442 = cause_type;
var G__18443 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18444 = loc;
var G__18445 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18441,G__18442,G__18443,G__18444,G__18445) : format.call(null,G__18441,G__18442,G__18443,G__18444,G__18445));

break;
case "compilation":
var G__18447 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18448 = cause_type;
var G__18449 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18450 = loc;
var G__18451 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18447,G__18448,G__18449,G__18450,G__18451) : format.call(null,G__18447,G__18448,G__18449,G__18450,G__18451));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18457 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18458 = symbol;
var G__18459 = loc;
var G__18460 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18469_18696 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18470_18697 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18471_18698 = true;
var _STAR_print_fn_STAR__temp_val__18472_18699 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18471_18698);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18472_18699);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18395_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18395_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18470_18697);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18469_18696);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18457,G__18458,G__18459,G__18460) : format.call(null,G__18457,G__18458,G__18459,G__18460));
} else {
var G__18478 = "Execution error%s at %s(%s).\n%s\n";
var G__18479 = cause_type;
var G__18480 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18481 = loc;
var G__18482 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18478,G__18479,G__18480,G__18481,G__18482) : format.call(null,G__18478,G__18479,G__18480,G__18481,G__18482));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18415__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

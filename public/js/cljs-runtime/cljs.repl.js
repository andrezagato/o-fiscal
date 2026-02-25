goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18944){
var map__18947 = p__18944;
var map__18947__$1 = cljs.core.__destructure_map(map__18947);
var m = map__18947__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18947__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18947__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18961_19321 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18962_19322 = null;
var count__18963_19323 = (0);
var i__18964_19324 = (0);
while(true){
if((i__18964_19324 < count__18963_19323)){
var f_19328 = chunk__18962_19322.cljs$core$IIndexed$_nth$arity$2(null,i__18964_19324);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19328], 0));


var G__19329 = seq__18961_19321;
var G__19330 = chunk__18962_19322;
var G__19331 = count__18963_19323;
var G__19332 = (i__18964_19324 + (1));
seq__18961_19321 = G__19329;
chunk__18962_19322 = G__19330;
count__18963_19323 = G__19331;
i__18964_19324 = G__19332;
continue;
} else {
var temp__5823__auto___19341 = cljs.core.seq(seq__18961_19321);
if(temp__5823__auto___19341){
var seq__18961_19343__$1 = temp__5823__auto___19341;
if(cljs.core.chunked_seq_QMARK_(seq__18961_19343__$1)){
var c__5673__auto___19345 = cljs.core.chunk_first(seq__18961_19343__$1);
var G__19348 = cljs.core.chunk_rest(seq__18961_19343__$1);
var G__19350 = c__5673__auto___19345;
var G__19352 = cljs.core.count(c__5673__auto___19345);
var G__19354 = (0);
seq__18961_19321 = G__19348;
chunk__18962_19322 = G__19350;
count__18963_19323 = G__19352;
i__18964_19324 = G__19354;
continue;
} else {
var f_19368 = cljs.core.first(seq__18961_19343__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19368], 0));


var G__19370 = cljs.core.next(seq__18961_19343__$1);
var G__19371 = null;
var G__19372 = (0);
var G__19373 = (0);
seq__18961_19321 = G__19370;
chunk__18962_19322 = G__19371;
count__18963_19323 = G__19372;
i__18964_19324 = G__19373;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19375 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19375], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19375)))?cljs.core.second(arglists_19375):arglists_19375)], 0));
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
var seq__18986_19417 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18987_19418 = null;
var count__18988_19419 = (0);
var i__18989_19420 = (0);
while(true){
if((i__18989_19420 < count__18988_19419)){
var vec__19004_19424 = chunk__18987_19418.cljs$core$IIndexed$_nth$arity$2(null,i__18989_19420);
var name_19425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19004_19424,(0),null);
var map__19007_19426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19004_19424,(1),null);
var map__19007_19427__$1 = cljs.core.__destructure_map(map__19007_19426);
var doc_19428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19007_19427__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19007_19427__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19425], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19429], 0));

if(cljs.core.truth_(doc_19428)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19428], 0));
} else {
}


var G__19457 = seq__18986_19417;
var G__19458 = chunk__18987_19418;
var G__19459 = count__18988_19419;
var G__19460 = (i__18989_19420 + (1));
seq__18986_19417 = G__19457;
chunk__18987_19418 = G__19458;
count__18988_19419 = G__19459;
i__18989_19420 = G__19460;
continue;
} else {
var temp__5823__auto___19461 = cljs.core.seq(seq__18986_19417);
if(temp__5823__auto___19461){
var seq__18986_19463__$1 = temp__5823__auto___19461;
if(cljs.core.chunked_seq_QMARK_(seq__18986_19463__$1)){
var c__5673__auto___19466 = cljs.core.chunk_first(seq__18986_19463__$1);
var G__19471 = cljs.core.chunk_rest(seq__18986_19463__$1);
var G__19472 = c__5673__auto___19466;
var G__19473 = cljs.core.count(c__5673__auto___19466);
var G__19474 = (0);
seq__18986_19417 = G__19471;
chunk__18987_19418 = G__19472;
count__18988_19419 = G__19473;
i__18989_19420 = G__19474;
continue;
} else {
var vec__19016_19478 = cljs.core.first(seq__18986_19463__$1);
var name_19479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19016_19478,(0),null);
var map__19019_19480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19016_19478,(1),null);
var map__19019_19481__$1 = cljs.core.__destructure_map(map__19019_19480);
var doc_19483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19019_19481__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19019_19481__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19479], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19484], 0));

if(cljs.core.truth_(doc_19483)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19483], 0));
} else {
}


var G__19495 = cljs.core.next(seq__18986_19463__$1);
var G__19496 = null;
var G__19497 = (0);
var G__19498 = (0);
seq__18986_19417 = G__19495;
chunk__18987_19418 = G__19496;
count__18988_19419 = G__19497;
i__18989_19420 = G__19498;
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

var seq__19032 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19033 = null;
var count__19034 = (0);
var i__19035 = (0);
while(true){
if((i__19035 < count__19034)){
var role = chunk__19033.cljs$core$IIndexed$_nth$arity$2(null,i__19035);
var temp__5823__auto___19521__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19521__$1)){
var spec_19526 = temp__5823__auto___19521__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19526)], 0));
} else {
}


var G__19527 = seq__19032;
var G__19528 = chunk__19033;
var G__19529 = count__19034;
var G__19530 = (i__19035 + (1));
seq__19032 = G__19527;
chunk__19033 = G__19528;
count__19034 = G__19529;
i__19035 = G__19530;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__19032);
if(temp__5823__auto____$1){
var seq__19032__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19032__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__19032__$1);
var G__19531 = cljs.core.chunk_rest(seq__19032__$1);
var G__19532 = c__5673__auto__;
var G__19533 = cljs.core.count(c__5673__auto__);
var G__19534 = (0);
seq__19032 = G__19531;
chunk__19033 = G__19532;
count__19034 = G__19533;
i__19035 = G__19534;
continue;
} else {
var role = cljs.core.first(seq__19032__$1);
var temp__5823__auto___19536__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19536__$2)){
var spec_19537 = temp__5823__auto___19536__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19537)], 0));
} else {
}


var G__19542 = cljs.core.next(seq__19032__$1);
var G__19543 = null;
var G__19544 = (0);
var G__19545 = (0);
seq__19032 = G__19542;
chunk__19033 = G__19543;
count__19034 = G__19544;
i__19035 = G__19545;
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
var map__19114 = datafied_throwable;
var map__19114__$1 = cljs.core.__destructure_map(map__19114);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19114__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19114__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19115 = cljs.core.last(via);
var map__19115__$1 = cljs.core.__destructure_map(map__19115);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19115__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19115__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19115__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19116 = data;
var map__19116__$1 = cljs.core.__destructure_map(map__19116);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19116__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19116__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19116__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19117 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19117__$1 = cljs.core.__destructure_map(map__19117);
var top_data = map__19117__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19117__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19118 = phase;
var G__19118__$1 = (((G__19118 instanceof cljs.core.Keyword))?G__19118.fqn:null);
switch (G__19118__$1) {
case "read-source":
var map__19119 = data;
var map__19119__$1 = cljs.core.__destructure_map(map__19119);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19119__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19119__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19123 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19123__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19123,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19123);
var G__19123__$2 = (cljs.core.truth_((function (){var fexpr__19128 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19128.cljs$core$IFn$_invoke$arity$1 ? fexpr__19128.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19128.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19123__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19123__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19123__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19123__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19129 = top_data;
var G__19129__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19129,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19129);
var G__19129__$2 = (cljs.core.truth_((function (){var fexpr__19130 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19130.cljs$core$IFn$_invoke$arity$1 ? fexpr__19130.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19130.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19129__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19129__$1);
var G__19129__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19129__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19129__$2);
var G__19129__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19129__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19129__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19129__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19129__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19135 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19135,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19135,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19135,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19135,(3),null);
var G__19139 = top_data;
var G__19139__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19139,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19139);
var G__19139__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19139__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19139__$1);
var G__19139__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19139__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19139__$2);
var G__19139__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19139__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19139__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19139__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19139__$4;
}

break;
case "execution":
var vec__19141 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19141,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19141,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19141,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19141,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19112_SHARP_){
var or__5142__auto__ = (p1__19112_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__19148 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19148.cljs$core$IFn$_invoke$arity$1 ? fexpr__19148.cljs$core$IFn$_invoke$arity$1(p1__19112_SHARP_) : fexpr__19148.call(null,p1__19112_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__19154 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19154__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19154,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19154);
var G__19154__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19154__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19154__$1);
var G__19154__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19154__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19154__$2);
var G__19154__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19154__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19154__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19154__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19154__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19118__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19191){
var map__19193 = p__19191;
var map__19193__$1 = cljs.core.__destructure_map(map__19193);
var triage_data = map__19193__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19193__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19193__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19193__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19193__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19193__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19193__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19193__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19193__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19229 = phase;
var G__19229__$1 = (((G__19229 instanceof cljs.core.Keyword))?G__19229.fqn:null);
switch (G__19229__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19230 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19231 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19232 = loc;
var G__19233 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19235_19618 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19236_19619 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19237_19620 = true;
var _STAR_print_fn_STAR__temp_val__19238_19621 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19237_19620);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19238_19621);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19178_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19178_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19236_19619);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19235_19618);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19230,G__19231,G__19232,G__19233) : format.call(null,G__19230,G__19231,G__19232,G__19233));

break;
case "macroexpansion":
var G__19239 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19240 = cause_type;
var G__19241 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19242 = loc;
var G__19243 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19239,G__19240,G__19241,G__19242,G__19243) : format.call(null,G__19239,G__19240,G__19241,G__19242,G__19243));

break;
case "compile-syntax-check":
var G__19245 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19246 = cause_type;
var G__19247 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19248 = loc;
var G__19249 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19245,G__19246,G__19247,G__19248,G__19249) : format.call(null,G__19245,G__19246,G__19247,G__19248,G__19249));

break;
case "compilation":
var G__19250 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19251 = cause_type;
var G__19252 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19253 = loc;
var G__19254 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19250,G__19251,G__19252,G__19253,G__19254) : format.call(null,G__19250,G__19251,G__19252,G__19253,G__19254));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19256 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19257 = symbol;
var G__19258 = loc;
var G__19259 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19260_19639 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19261_19640 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19262_19641 = true;
var _STAR_print_fn_STAR__temp_val__19263_19642 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19262_19641);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19263_19642);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19184_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19184_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19261_19640);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19260_19639);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19256,G__19257,G__19258,G__19259) : format.call(null,G__19256,G__19257,G__19258,G__19259));
} else {
var G__19272 = "Execution error%s at %s(%s).\n%s\n";
var G__19273 = cause_type;
var G__19274 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19275 = loc;
var G__19276 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19272,G__19273,G__19274,G__19275,G__19276) : format.call(null,G__19272,G__19273,G__19274,G__19275,G__19276));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19229__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

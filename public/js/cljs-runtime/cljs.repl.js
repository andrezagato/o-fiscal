goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18738){
var map__18741 = p__18738;
var map__18741__$1 = cljs.core.__destructure_map(map__18741);
var m = map__18741__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18741__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18741__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__18743_19195 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18744_19197 = null;
var count__18745_19200 = (0);
var i__18746_19201 = (0);
while(true){
if((i__18746_19201 < count__18745_19200)){
var f_19202 = chunk__18744_19197.cljs$core$IIndexed$_nth$arity$2(null,i__18746_19201);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19202], 0));


var G__19211 = seq__18743_19195;
var G__19212 = chunk__18744_19197;
var G__19213 = count__18745_19200;
var G__19214 = (i__18746_19201 + (1));
seq__18743_19195 = G__19211;
chunk__18744_19197 = G__19212;
count__18745_19200 = G__19213;
i__18746_19201 = G__19214;
continue;
} else {
var temp__5823__auto___19215 = cljs.core.seq(seq__18743_19195);
if(temp__5823__auto___19215){
var seq__18743_19216__$1 = temp__5823__auto___19215;
if(cljs.core.chunked_seq_QMARK_(seq__18743_19216__$1)){
var c__5673__auto___19218 = cljs.core.chunk_first(seq__18743_19216__$1);
var G__19219 = cljs.core.chunk_rest(seq__18743_19216__$1);
var G__19220 = c__5673__auto___19218;
var G__19221 = cljs.core.count(c__5673__auto___19218);
var G__19222 = (0);
seq__18743_19195 = G__19219;
chunk__18744_19197 = G__19220;
count__18745_19200 = G__19221;
i__18746_19201 = G__19222;
continue;
} else {
var f_19226 = cljs.core.first(seq__18743_19216__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19226], 0));


var G__19227 = cljs.core.next(seq__18743_19216__$1);
var G__19228 = null;
var G__19229 = (0);
var G__19230 = (0);
seq__18743_19195 = G__19227;
chunk__18744_19197 = G__19228;
count__18745_19200 = G__19229;
i__18746_19201 = G__19230;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19232 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19232], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19232)))?cljs.core.second(arglists_19232):arglists_19232)], 0));
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
var seq__18762_19253 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18763_19254 = null;
var count__18764_19255 = (0);
var i__18765_19256 = (0);
while(true){
if((i__18765_19256 < count__18764_19255)){
var vec__18783_19259 = chunk__18763_19254.cljs$core$IIndexed$_nth$arity$2(null,i__18765_19256);
var name_19260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18783_19259,(0),null);
var map__18786_19261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18783_19259,(1),null);
var map__18786_19262__$1 = cljs.core.__destructure_map(map__18786_19261);
var doc_19263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18786_19262__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18786_19262__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19260], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19264], 0));

if(cljs.core.truth_(doc_19263)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19263], 0));
} else {
}


var G__19271 = seq__18762_19253;
var G__19272 = chunk__18763_19254;
var G__19273 = count__18764_19255;
var G__19274 = (i__18765_19256 + (1));
seq__18762_19253 = G__19271;
chunk__18763_19254 = G__19272;
count__18764_19255 = G__19273;
i__18765_19256 = G__19274;
continue;
} else {
var temp__5823__auto___19276 = cljs.core.seq(seq__18762_19253);
if(temp__5823__auto___19276){
var seq__18762_19277__$1 = temp__5823__auto___19276;
if(cljs.core.chunked_seq_QMARK_(seq__18762_19277__$1)){
var c__5673__auto___19279 = cljs.core.chunk_first(seq__18762_19277__$1);
var G__19280 = cljs.core.chunk_rest(seq__18762_19277__$1);
var G__19281 = c__5673__auto___19279;
var G__19282 = cljs.core.count(c__5673__auto___19279);
var G__19283 = (0);
seq__18762_19253 = G__19280;
chunk__18763_19254 = G__19281;
count__18764_19255 = G__19282;
i__18765_19256 = G__19283;
continue;
} else {
var vec__18788_19286 = cljs.core.first(seq__18762_19277__$1);
var name_19287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18788_19286,(0),null);
var map__18791_19288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18788_19286,(1),null);
var map__18791_19289__$1 = cljs.core.__destructure_map(map__18791_19288);
var doc_19290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18791_19289__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18791_19289__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19287], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19291], 0));

if(cljs.core.truth_(doc_19290)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19290], 0));
} else {
}


var G__19297 = cljs.core.next(seq__18762_19277__$1);
var G__19298 = null;
var G__19299 = (0);
var G__19300 = (0);
seq__18762_19253 = G__19297;
chunk__18763_19254 = G__19298;
count__18764_19255 = G__19299;
i__18765_19256 = G__19300;
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

var seq__18804 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18805 = null;
var count__18806 = (0);
var i__18807 = (0);
while(true){
if((i__18807 < count__18806)){
var role = chunk__18805.cljs$core$IIndexed$_nth$arity$2(null,i__18807);
var temp__5823__auto___19312__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19312__$1)){
var spec_19315 = temp__5823__auto___19312__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19315)], 0));
} else {
}


var G__19317 = seq__18804;
var G__19318 = chunk__18805;
var G__19319 = count__18806;
var G__19320 = (i__18807 + (1));
seq__18804 = G__19317;
chunk__18805 = G__19318;
count__18806 = G__19319;
i__18807 = G__19320;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__18804);
if(temp__5823__auto____$1){
var seq__18804__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18804__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18804__$1);
var G__19326 = cljs.core.chunk_rest(seq__18804__$1);
var G__19327 = c__5673__auto__;
var G__19328 = cljs.core.count(c__5673__auto__);
var G__19329 = (0);
seq__18804 = G__19326;
chunk__18805 = G__19327;
count__18806 = G__19328;
i__18807 = G__19329;
continue;
} else {
var role = cljs.core.first(seq__18804__$1);
var temp__5823__auto___19333__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19333__$2)){
var spec_19334 = temp__5823__auto___19333__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19334)], 0));
} else {
}


var G__19335 = cljs.core.next(seq__18804__$1);
var G__19336 = null;
var G__19337 = (0);
var G__19338 = (0);
seq__18804 = G__19335;
chunk__18805 = G__19336;
count__18806 = G__19337;
i__18807 = G__19338;
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
var map__18889 = datafied_throwable;
var map__18889__$1 = cljs.core.__destructure_map(map__18889);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18889__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18889__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18889__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18890 = cljs.core.last(via);
var map__18890__$1 = cljs.core.__destructure_map(map__18890);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18890__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18890__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18890__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18891 = data;
var map__18891__$1 = cljs.core.__destructure_map(map__18891);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18891__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18891__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18891__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18892 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18892__$1 = cljs.core.__destructure_map(map__18892);
var top_data = map__18892__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18892__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18929 = phase;
var G__18929__$1 = (((G__18929 instanceof cljs.core.Keyword))?G__18929.fqn:null);
switch (G__18929__$1) {
case "read-source":
var map__18948 = data;
var map__18948__$1 = cljs.core.__destructure_map(map__18948);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18948__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18948__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18953 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18953__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18953,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18953);
var G__18953__$2 = (cljs.core.truth_((function (){var fexpr__18958 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18958.cljs$core$IFn$_invoke$arity$1 ? fexpr__18958.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18958.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18953__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18953__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18953__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18968 = top_data;
var G__18968__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18968,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18968);
var G__18968__$2 = (cljs.core.truth_((function (){var fexpr__18973 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18973.cljs$core$IFn$_invoke$arity$1 ? fexpr__18973.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18973.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18968__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18968__$1);
var G__18968__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18968__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18968__$2);
var G__18968__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18968__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18968__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18968__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18968__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18989 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18989,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18989,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18989,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18989,(3),null);
var G__18992 = top_data;
var G__18992__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18992,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18992);
var G__18992__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18992__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18992__$1);
var G__18992__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18992__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18992__$2);
var G__18992__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18992__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18992__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18992__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18992__$4;
}

break;
case "execution":
var vec__19002 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19002,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19002,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19002,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19002,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18878_SHARP_){
var or__5142__auto__ = (p1__18878_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__19012 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19012.cljs$core$IFn$_invoke$arity$1 ? fexpr__19012.cljs$core$IFn$_invoke$arity$1(p1__18878_SHARP_) : fexpr__19012.call(null,p1__18878_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__19022 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19022__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19022,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19022);
var G__19022__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19022__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19022__$1);
var G__19022__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19022__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19022__$2);
var G__19022__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19022__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19022__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19022__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19022__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18929__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19060){
var map__19061 = p__19060;
var map__19061__$1 = cljs.core.__destructure_map(map__19061);
var triage_data = map__19061__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19061__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19090 = phase;
var G__19090__$1 = (((G__19090 instanceof cljs.core.Keyword))?G__19090.fqn:null);
switch (G__19090__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19093 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19094 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19095 = loc;
var G__19096 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19097_19486 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19098_19487 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19099_19489 = true;
var _STAR_print_fn_STAR__temp_val__19100_19490 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19099_19489);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19100_19490);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19047_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19047_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19098_19487);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19097_19486);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19093,G__19094,G__19095,G__19096) : format.call(null,G__19093,G__19094,G__19095,G__19096));

break;
case "macroexpansion":
var G__19112 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19113 = cause_type;
var G__19114 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19115 = loc;
var G__19116 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19112,G__19113,G__19114,G__19115,G__19116) : format.call(null,G__19112,G__19113,G__19114,G__19115,G__19116));

break;
case "compile-syntax-check":
var G__19117 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19118 = cause_type;
var G__19119 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19120 = loc;
var G__19121 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19117,G__19118,G__19119,G__19120,G__19121) : format.call(null,G__19117,G__19118,G__19119,G__19120,G__19121));

break;
case "compilation":
var G__19132 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19133 = cause_type;
var G__19134 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19135 = loc;
var G__19136 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19132,G__19133,G__19134,G__19135,G__19136) : format.call(null,G__19132,G__19133,G__19134,G__19135,G__19136));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19141 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19142 = symbol;
var G__19143 = loc;
var G__19144 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19148_19517 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19149_19518 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19150_19519 = true;
var _STAR_print_fn_STAR__temp_val__19151_19520 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19150_19519);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19151_19520);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19055_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19055_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19149_19518);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19148_19517);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19141,G__19142,G__19143,G__19144) : format.call(null,G__19141,G__19142,G__19143,G__19144));
} else {
var G__19154 = "Execution error%s at %s(%s).\n%s\n";
var G__19155 = cause_type;
var G__19156 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19157 = loc;
var G__19158 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19154,G__19155,G__19156,G__19157,G__19158) : format.call(null,G__19154,G__19155,G__19156,G__19157,G__19158));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19090__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

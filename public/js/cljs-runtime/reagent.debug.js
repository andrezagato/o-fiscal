goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__14402__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14402 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14403__i = 0, G__14403__a = new Array(arguments.length -  0);
while (G__14403__i < G__14403__a.length) {G__14403__a[G__14403__i] = arguments[G__14403__i + 0]; ++G__14403__i;}
  args = new cljs.core.IndexedSeq(G__14403__a,0,null);
} 
return G__14402__delegate.call(this,args);};
G__14402.cljs$lang$maxFixedArity = 0;
G__14402.cljs$lang$applyTo = (function (arglist__14404){
var args = cljs.core.seq(arglist__14404);
return G__14402__delegate(args);
});
G__14402.cljs$core$IFn$_invoke$arity$variadic = G__14402__delegate;
return G__14402;
})()
);

(o.error = (function() { 
var G__14409__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14410__i = 0, G__14410__a = new Array(arguments.length -  0);
while (G__14410__i < G__14410__a.length) {G__14410__a[G__14410__i] = arguments[G__14410__i + 0]; ++G__14410__i;}
  args = new cljs.core.IndexedSeq(G__14410__a,0,null);
} 
return G__14409__delegate.call(this,args);};
G__14409.cljs$lang$maxFixedArity = 0;
G__14409.cljs$lang$applyTo = (function (arglist__14411){
var args = cljs.core.seq(arglist__14411);
return G__14409__delegate(args);
});
G__14409.cljs$core$IFn$_invoke$arity$variadic = G__14409__delegate;
return G__14409;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

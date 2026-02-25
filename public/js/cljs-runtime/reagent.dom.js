goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22039 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22040 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22040);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__22041 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22042 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22042);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22041);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22039);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22046 = arguments.length;
switch (G__22046) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__22048 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22048,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22048,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__22054_22090 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__22055_22091 = null;
var count__22056_22092 = (0);
var i__22057_22093 = (0);
while(true){
if((i__22057_22093 < count__22056_22092)){
var vec__22065_22095 = chunk__22055_22091.cljs$core$IIndexed$_nth$arity$2(null,i__22057_22093);
var container_22096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22065_22095,(0),null);
var comp_22097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22065_22095,(1),null);
reagent.dom.re_render_component(comp_22097,container_22096);


var G__22102 = seq__22054_22090;
var G__22103 = chunk__22055_22091;
var G__22104 = count__22056_22092;
var G__22105 = (i__22057_22093 + (1));
seq__22054_22090 = G__22102;
chunk__22055_22091 = G__22103;
count__22056_22092 = G__22104;
i__22057_22093 = G__22105;
continue;
} else {
var temp__5823__auto___22106 = cljs.core.seq(seq__22054_22090);
if(temp__5823__auto___22106){
var seq__22054_22107__$1 = temp__5823__auto___22106;
if(cljs.core.chunked_seq_QMARK_(seq__22054_22107__$1)){
var c__5673__auto___22108 = cljs.core.chunk_first(seq__22054_22107__$1);
var G__22109 = cljs.core.chunk_rest(seq__22054_22107__$1);
var G__22110 = c__5673__auto___22108;
var G__22111 = cljs.core.count(c__5673__auto___22108);
var G__22112 = (0);
seq__22054_22090 = G__22109;
chunk__22055_22091 = G__22110;
count__22056_22092 = G__22111;
i__22057_22093 = G__22112;
continue;
} else {
var vec__22071_22113 = cljs.core.first(seq__22054_22107__$1);
var container_22114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22071_22113,(0),null);
var comp_22115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22071_22113,(1),null);
reagent.dom.re_render_component(comp_22115,container_22114);


var G__22116 = cljs.core.next(seq__22054_22107__$1);
var G__22117 = null;
var G__22118 = (0);
var G__22119 = (0);
seq__22054_22090 = G__22116;
chunk__22055_22091 = G__22117;
count__22056_22092 = G__22118;
i__22057_22093 = G__22119;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map

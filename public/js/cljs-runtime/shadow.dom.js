goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12844 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12844(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12849 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12849(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11746 = coll;
var G__11747 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11746,G__11747) : shadow.dom.lazy_native_coll_seq.call(null,G__11746,G__11747));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11765 = arguments.length;
switch (G__11765) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11768 = arguments.length;
switch (G__11768) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11770 = arguments.length;
switch (G__11770) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11777 = arguments.length;
switch (G__11777) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11798 = arguments.length;
switch (G__11798) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11810 = arguments.length;
switch (G__11810) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11822){if((e11822 instanceof Object)){
var e = e11822;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11822;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11842 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11843 = null;
var count__11844 = (0);
var i__11845 = (0);
while(true){
if((i__11845 < count__11844)){
var el = chunk__11843.cljs$core$IIndexed$_nth$arity$2(null,i__11845);
var handler_12909__$1 = ((function (seq__11842,chunk__11843,count__11844,i__11845,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11842,chunk__11843,count__11844,i__11845,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12909__$1);


var G__12911 = seq__11842;
var G__12912 = chunk__11843;
var G__12913 = count__11844;
var G__12914 = (i__11845 + (1));
seq__11842 = G__12911;
chunk__11843 = G__12912;
count__11844 = G__12913;
i__11845 = G__12914;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11842);
if(temp__5823__auto__){
var seq__11842__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11842__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11842__$1);
var G__12922 = cljs.core.chunk_rest(seq__11842__$1);
var G__12923 = c__5673__auto__;
var G__12924 = cljs.core.count(c__5673__auto__);
var G__12925 = (0);
seq__11842 = G__12922;
chunk__11843 = G__12923;
count__11844 = G__12924;
i__11845 = G__12925;
continue;
} else {
var el = cljs.core.first(seq__11842__$1);
var handler_12928__$1 = ((function (seq__11842,chunk__11843,count__11844,i__11845,el,seq__11842__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11842,chunk__11843,count__11844,i__11845,el,seq__11842__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12928__$1);


var G__12934 = cljs.core.next(seq__11842__$1);
var G__12935 = null;
var G__12936 = (0);
var G__12937 = (0);
seq__11842 = G__12934;
chunk__11843 = G__12935;
count__11844 = G__12936;
i__11845 = G__12937;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11865 = arguments.length;
switch (G__11865) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11873 = cljs.core.seq(events);
var chunk__11874 = null;
var count__11875 = (0);
var i__11876 = (0);
while(true){
if((i__11876 < count__11875)){
var vec__11888 = chunk__11874.cljs$core$IIndexed$_nth$arity$2(null,i__11876);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11888,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12962 = seq__11873;
var G__12963 = chunk__11874;
var G__12964 = count__11875;
var G__12965 = (i__11876 + (1));
seq__11873 = G__12962;
chunk__11874 = G__12963;
count__11875 = G__12964;
i__11876 = G__12965;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11873);
if(temp__5823__auto__){
var seq__11873__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11873__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11873__$1);
var G__12967 = cljs.core.chunk_rest(seq__11873__$1);
var G__12968 = c__5673__auto__;
var G__12969 = cljs.core.count(c__5673__auto__);
var G__12970 = (0);
seq__11873 = G__12967;
chunk__11874 = G__12968;
count__11875 = G__12969;
i__11876 = G__12970;
continue;
} else {
var vec__11891 = cljs.core.first(seq__11873__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11891,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11891,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12973 = cljs.core.next(seq__11873__$1);
var G__12974 = null;
var G__12975 = (0);
var G__12976 = (0);
seq__11873 = G__12973;
chunk__11874 = G__12974;
count__11875 = G__12975;
i__11876 = G__12976;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11896 = cljs.core.seq(styles);
var chunk__11897 = null;
var count__11898 = (0);
var i__11899 = (0);
while(true){
if((i__11899 < count__11898)){
var vec__11921 = chunk__11897.cljs$core$IIndexed$_nth$arity$2(null,i__11899);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11921,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11921,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12981 = seq__11896;
var G__12982 = chunk__11897;
var G__12983 = count__11898;
var G__12984 = (i__11899 + (1));
seq__11896 = G__12981;
chunk__11897 = G__12982;
count__11898 = G__12983;
i__11899 = G__12984;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11896);
if(temp__5823__auto__){
var seq__11896__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11896__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11896__$1);
var G__12986 = cljs.core.chunk_rest(seq__11896__$1);
var G__12987 = c__5673__auto__;
var G__12988 = cljs.core.count(c__5673__auto__);
var G__12989 = (0);
seq__11896 = G__12986;
chunk__11897 = G__12987;
count__11898 = G__12988;
i__11899 = G__12989;
continue;
} else {
var vec__11932 = cljs.core.first(seq__11896__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12990 = cljs.core.next(seq__11896__$1);
var G__12991 = null;
var G__12992 = (0);
var G__12993 = (0);
seq__11896 = G__12990;
chunk__11897 = G__12991;
count__11898 = G__12992;
i__11899 = G__12993;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11942_12996 = key;
var G__11942_12997__$1 = (((G__11942_12996 instanceof cljs.core.Keyword))?G__11942_12996.fqn:null);
switch (G__11942_12997__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_13010 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_13010,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_13010,"aria-");
}
})())){
el.setAttribute(ks_13010,value);
} else {
(el[ks_13010] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11964){
var map__11965 = p__11964;
var map__11965__$1 = cljs.core.__destructure_map(map__11965);
var props = map__11965__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11965__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11971 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11971,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11971,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11971,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11974 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11974,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11974;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11976 = arguments.length;
switch (G__11976) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11984){
var vec__11985 = p__11984;
var seq__11986 = cljs.core.seq(vec__11985);
var first__11987 = cljs.core.first(seq__11986);
var seq__11986__$1 = cljs.core.next(seq__11986);
var nn = first__11987;
var first__11987__$1 = cljs.core.first(seq__11986__$1);
var seq__11986__$2 = cljs.core.next(seq__11986__$1);
var np = first__11987__$1;
var nc = seq__11986__$2;
var node = vec__11985;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11992 = nn;
var G__11993 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11992,G__11993) : create_fn.call(null,G__11992,G__11993));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11997 = nn;
var G__11998 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11997,G__11998) : create_fn.call(null,G__11997,G__11998));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12011 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12011,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12011,(1),null);
var seq__12015_13048 = cljs.core.seq(node_children);
var chunk__12016_13049 = null;
var count__12017_13050 = (0);
var i__12018_13051 = (0);
while(true){
if((i__12018_13051 < count__12017_13050)){
var child_struct_13053 = chunk__12016_13049.cljs$core$IIndexed$_nth$arity$2(null,i__12018_13051);
var children_13054 = shadow.dom.dom_node(child_struct_13053);
if(cljs.core.seq_QMARK_(children_13054)){
var seq__12073_13055 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13054));
var chunk__12075_13056 = null;
var count__12076_13057 = (0);
var i__12077_13058 = (0);
while(true){
if((i__12077_13058 < count__12076_13057)){
var child_13059 = chunk__12075_13056.cljs$core$IIndexed$_nth$arity$2(null,i__12077_13058);
if(cljs.core.truth_(child_13059)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13059);


var G__13061 = seq__12073_13055;
var G__13062 = chunk__12075_13056;
var G__13063 = count__12076_13057;
var G__13064 = (i__12077_13058 + (1));
seq__12073_13055 = G__13061;
chunk__12075_13056 = G__13062;
count__12076_13057 = G__13063;
i__12077_13058 = G__13064;
continue;
} else {
var G__13065 = seq__12073_13055;
var G__13066 = chunk__12075_13056;
var G__13067 = count__12076_13057;
var G__13068 = (i__12077_13058 + (1));
seq__12073_13055 = G__13065;
chunk__12075_13056 = G__13066;
count__12076_13057 = G__13067;
i__12077_13058 = G__13068;
continue;
}
} else {
var temp__5823__auto___13070 = cljs.core.seq(seq__12073_13055);
if(temp__5823__auto___13070){
var seq__12073_13072__$1 = temp__5823__auto___13070;
if(cljs.core.chunked_seq_QMARK_(seq__12073_13072__$1)){
var c__5673__auto___13079 = cljs.core.chunk_first(seq__12073_13072__$1);
var G__13080 = cljs.core.chunk_rest(seq__12073_13072__$1);
var G__13081 = c__5673__auto___13079;
var G__13082 = cljs.core.count(c__5673__auto___13079);
var G__13083 = (0);
seq__12073_13055 = G__13080;
chunk__12075_13056 = G__13081;
count__12076_13057 = G__13082;
i__12077_13058 = G__13083;
continue;
} else {
var child_13086 = cljs.core.first(seq__12073_13072__$1);
if(cljs.core.truth_(child_13086)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13086);


var G__13088 = cljs.core.next(seq__12073_13072__$1);
var G__13089 = null;
var G__13090 = (0);
var G__13091 = (0);
seq__12073_13055 = G__13088;
chunk__12075_13056 = G__13089;
count__12076_13057 = G__13090;
i__12077_13058 = G__13091;
continue;
} else {
var G__13093 = cljs.core.next(seq__12073_13072__$1);
var G__13094 = null;
var G__13095 = (0);
var G__13096 = (0);
seq__12073_13055 = G__13093;
chunk__12075_13056 = G__13094;
count__12076_13057 = G__13095;
i__12077_13058 = G__13096;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13054);
}


var G__13098 = seq__12015_13048;
var G__13099 = chunk__12016_13049;
var G__13100 = count__12017_13050;
var G__13101 = (i__12018_13051 + (1));
seq__12015_13048 = G__13098;
chunk__12016_13049 = G__13099;
count__12017_13050 = G__13100;
i__12018_13051 = G__13101;
continue;
} else {
var temp__5823__auto___13102 = cljs.core.seq(seq__12015_13048);
if(temp__5823__auto___13102){
var seq__12015_13103__$1 = temp__5823__auto___13102;
if(cljs.core.chunked_seq_QMARK_(seq__12015_13103__$1)){
var c__5673__auto___13104 = cljs.core.chunk_first(seq__12015_13103__$1);
var G__13105 = cljs.core.chunk_rest(seq__12015_13103__$1);
var G__13106 = c__5673__auto___13104;
var G__13107 = cljs.core.count(c__5673__auto___13104);
var G__13108 = (0);
seq__12015_13048 = G__13105;
chunk__12016_13049 = G__13106;
count__12017_13050 = G__13107;
i__12018_13051 = G__13108;
continue;
} else {
var child_struct_13113 = cljs.core.first(seq__12015_13103__$1);
var children_13115 = shadow.dom.dom_node(child_struct_13113);
if(cljs.core.seq_QMARK_(children_13115)){
var seq__12101_13117 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13115));
var chunk__12103_13118 = null;
var count__12104_13119 = (0);
var i__12105_13120 = (0);
while(true){
if((i__12105_13120 < count__12104_13119)){
var child_13128 = chunk__12103_13118.cljs$core$IIndexed$_nth$arity$2(null,i__12105_13120);
if(cljs.core.truth_(child_13128)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13128);


var G__13130 = seq__12101_13117;
var G__13131 = chunk__12103_13118;
var G__13132 = count__12104_13119;
var G__13133 = (i__12105_13120 + (1));
seq__12101_13117 = G__13130;
chunk__12103_13118 = G__13131;
count__12104_13119 = G__13132;
i__12105_13120 = G__13133;
continue;
} else {
var G__13134 = seq__12101_13117;
var G__13135 = chunk__12103_13118;
var G__13136 = count__12104_13119;
var G__13137 = (i__12105_13120 + (1));
seq__12101_13117 = G__13134;
chunk__12103_13118 = G__13135;
count__12104_13119 = G__13136;
i__12105_13120 = G__13137;
continue;
}
} else {
var temp__5823__auto___13139__$1 = cljs.core.seq(seq__12101_13117);
if(temp__5823__auto___13139__$1){
var seq__12101_13140__$1 = temp__5823__auto___13139__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12101_13140__$1)){
var c__5673__auto___13141 = cljs.core.chunk_first(seq__12101_13140__$1);
var G__13142 = cljs.core.chunk_rest(seq__12101_13140__$1);
var G__13143 = c__5673__auto___13141;
var G__13144 = cljs.core.count(c__5673__auto___13141);
var G__13145 = (0);
seq__12101_13117 = G__13142;
chunk__12103_13118 = G__13143;
count__12104_13119 = G__13144;
i__12105_13120 = G__13145;
continue;
} else {
var child_13146 = cljs.core.first(seq__12101_13140__$1);
if(cljs.core.truth_(child_13146)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13146);


var G__13153 = cljs.core.next(seq__12101_13140__$1);
var G__13154 = null;
var G__13155 = (0);
var G__13156 = (0);
seq__12101_13117 = G__13153;
chunk__12103_13118 = G__13154;
count__12104_13119 = G__13155;
i__12105_13120 = G__13156;
continue;
} else {
var G__13157 = cljs.core.next(seq__12101_13140__$1);
var G__13158 = null;
var G__13159 = (0);
var G__13160 = (0);
seq__12101_13117 = G__13157;
chunk__12103_13118 = G__13158;
count__12104_13119 = G__13159;
i__12105_13120 = G__13160;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13115);
}


var G__13162 = cljs.core.next(seq__12015_13103__$1);
var G__13163 = null;
var G__13164 = (0);
var G__13165 = (0);
seq__12015_13048 = G__13162;
chunk__12016_13049 = G__13163;
count__12017_13050 = G__13164;
i__12018_13051 = G__13165;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12151 = cljs.core.seq(node);
var chunk__12152 = null;
var count__12153 = (0);
var i__12154 = (0);
while(true){
if((i__12154 < count__12153)){
var n = chunk__12152.cljs$core$IIndexed$_nth$arity$2(null,i__12154);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13189 = seq__12151;
var G__13190 = chunk__12152;
var G__13191 = count__12153;
var G__13192 = (i__12154 + (1));
seq__12151 = G__13189;
chunk__12152 = G__13190;
count__12153 = G__13191;
i__12154 = G__13192;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12151);
if(temp__5823__auto__){
var seq__12151__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12151__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12151__$1);
var G__13254 = cljs.core.chunk_rest(seq__12151__$1);
var G__13255 = c__5673__auto__;
var G__13256 = cljs.core.count(c__5673__auto__);
var G__13257 = (0);
seq__12151 = G__13254;
chunk__12152 = G__13255;
count__12153 = G__13256;
i__12154 = G__13257;
continue;
} else {
var n = cljs.core.first(seq__12151__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13263 = cljs.core.next(seq__12151__$1);
var G__13264 = null;
var G__13265 = (0);
var G__13266 = (0);
seq__12151 = G__13263;
chunk__12152 = G__13264;
count__12153 = G__13265;
i__12154 = G__13266;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12197 = arguments.length;
switch (G__12197) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12222 = arguments.length;
switch (G__12222) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12242 = arguments.length;
switch (G__12242) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___13309 = arguments.length;
var i__5877__auto___13310 = (0);
while(true){
if((i__5877__auto___13310 < len__5876__auto___13309)){
args__5882__auto__.push((arguments[i__5877__auto___13310]));

var G__13312 = (i__5877__auto___13310 + (1));
i__5877__auto___13310 = G__13312;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12293_13320 = cljs.core.seq(nodes);
var chunk__12294_13321 = null;
var count__12295_13322 = (0);
var i__12296_13323 = (0);
while(true){
if((i__12296_13323 < count__12295_13322)){
var node_13328 = chunk__12294_13321.cljs$core$IIndexed$_nth$arity$2(null,i__12296_13323);
fragment.appendChild(shadow.dom._to_dom(node_13328));


var G__13331 = seq__12293_13320;
var G__13332 = chunk__12294_13321;
var G__13333 = count__12295_13322;
var G__13334 = (i__12296_13323 + (1));
seq__12293_13320 = G__13331;
chunk__12294_13321 = G__13332;
count__12295_13322 = G__13333;
i__12296_13323 = G__13334;
continue;
} else {
var temp__5823__auto___13335 = cljs.core.seq(seq__12293_13320);
if(temp__5823__auto___13335){
var seq__12293_13336__$1 = temp__5823__auto___13335;
if(cljs.core.chunked_seq_QMARK_(seq__12293_13336__$1)){
var c__5673__auto___13337 = cljs.core.chunk_first(seq__12293_13336__$1);
var G__13339 = cljs.core.chunk_rest(seq__12293_13336__$1);
var G__13340 = c__5673__auto___13337;
var G__13341 = cljs.core.count(c__5673__auto___13337);
var G__13342 = (0);
seq__12293_13320 = G__13339;
chunk__12294_13321 = G__13340;
count__12295_13322 = G__13341;
i__12296_13323 = G__13342;
continue;
} else {
var node_13343 = cljs.core.first(seq__12293_13336__$1);
fragment.appendChild(shadow.dom._to_dom(node_13343));


var G__13349 = cljs.core.next(seq__12293_13336__$1);
var G__13350 = null;
var G__13351 = (0);
var G__13352 = (0);
seq__12293_13320 = G__13349;
chunk__12294_13321 = G__13350;
count__12295_13322 = G__13351;
i__12296_13323 = G__13352;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12284){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12284));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12318_13382 = cljs.core.seq(scripts);
var chunk__12319_13383 = null;
var count__12320_13384 = (0);
var i__12321_13385 = (0);
while(true){
if((i__12321_13385 < count__12320_13384)){
var vec__12349_13389 = chunk__12319_13383.cljs$core$IIndexed$_nth$arity$2(null,i__12321_13385);
var script_tag_13390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12349_13389,(0),null);
var script_body_13391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12349_13389,(1),null);
eval(script_body_13391);


var G__13404 = seq__12318_13382;
var G__13405 = chunk__12319_13383;
var G__13406 = count__12320_13384;
var G__13407 = (i__12321_13385 + (1));
seq__12318_13382 = G__13404;
chunk__12319_13383 = G__13405;
count__12320_13384 = G__13406;
i__12321_13385 = G__13407;
continue;
} else {
var temp__5823__auto___13409 = cljs.core.seq(seq__12318_13382);
if(temp__5823__auto___13409){
var seq__12318_13411__$1 = temp__5823__auto___13409;
if(cljs.core.chunked_seq_QMARK_(seq__12318_13411__$1)){
var c__5673__auto___13412 = cljs.core.chunk_first(seq__12318_13411__$1);
var G__13414 = cljs.core.chunk_rest(seq__12318_13411__$1);
var G__13415 = c__5673__auto___13412;
var G__13416 = cljs.core.count(c__5673__auto___13412);
var G__13417 = (0);
seq__12318_13382 = G__13414;
chunk__12319_13383 = G__13415;
count__12320_13384 = G__13416;
i__12321_13385 = G__13417;
continue;
} else {
var vec__12354_13419 = cljs.core.first(seq__12318_13411__$1);
var script_tag_13420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12354_13419,(0),null);
var script_body_13421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12354_13419,(1),null);
eval(script_body_13421);


var G__13435 = cljs.core.next(seq__12318_13411__$1);
var G__13436 = null;
var G__13437 = (0);
var G__13438 = (0);
seq__12318_13382 = G__13435;
chunk__12319_13383 = G__13436;
count__12320_13384 = G__13437;
i__12321_13385 = G__13438;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12358){
var vec__12359 = p__12358;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12359,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12359,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12384 = arguments.length;
switch (G__12384) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12399 = cljs.core.seq(style_keys);
var chunk__12400 = null;
var count__12401 = (0);
var i__12402 = (0);
while(true){
if((i__12402 < count__12401)){
var it = chunk__12400.cljs$core$IIndexed$_nth$arity$2(null,i__12402);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13459 = seq__12399;
var G__13460 = chunk__12400;
var G__13461 = count__12401;
var G__13462 = (i__12402 + (1));
seq__12399 = G__13459;
chunk__12400 = G__13460;
count__12401 = G__13461;
i__12402 = G__13462;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12399);
if(temp__5823__auto__){
var seq__12399__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12399__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12399__$1);
var G__13474 = cljs.core.chunk_rest(seq__12399__$1);
var G__13475 = c__5673__auto__;
var G__13476 = cljs.core.count(c__5673__auto__);
var G__13477 = (0);
seq__12399 = G__13474;
chunk__12400 = G__13475;
count__12401 = G__13476;
i__12402 = G__13477;
continue;
} else {
var it = cljs.core.first(seq__12399__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13480 = cljs.core.next(seq__12399__$1);
var G__13481 = null;
var G__13482 = (0);
var G__13483 = (0);
seq__12399 = G__13480;
chunk__12400 = G__13481;
count__12401 = G__13482;
i__12402 = G__13483;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12426,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12458 = k12426;
var G__12458__$1 = (((G__12458 instanceof cljs.core.Keyword))?G__12458.fqn:null);
switch (G__12458__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12426,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12466){
var vec__12467 = p__12466;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12467,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12467,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12425){
var self__ = this;
var G__12425__$1 = this;
return (new cljs.core.RecordIter((0),G__12425__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12427,other12428){
var self__ = this;
var this12427__$1 = this;
return (((!((other12428 == null)))) && ((((this12427__$1.constructor === other12428.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12427__$1.x,other12428.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12427__$1.y,other12428.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12427__$1.__extmap,other12428.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12426){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12492 = k12426;
var G__12492__$1 = (((G__12492 instanceof cljs.core.Keyword))?G__12492.fqn:null);
switch (G__12492__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12426);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12425){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12494 = cljs.core.keyword_identical_QMARK_;
var expr__12495 = k__5457__auto__;
if(cljs.core.truth_((pred__12494.cljs$core$IFn$_invoke$arity$2 ? pred__12494.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12495) : pred__12494.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12495)))){
return (new shadow.dom.Coordinate(G__12425,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12494.cljs$core$IFn$_invoke$arity$2 ? pred__12494.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12495) : pred__12494.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12495)))){
return (new shadow.dom.Coordinate(self__.x,G__12425,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12425),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12425){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12425,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12436){
var extmap__5490__auto__ = (function (){var G__12501 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12436,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12436)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12501);
} else {
return G__12501;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12436),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12436),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12505,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12513 = k12505;
var G__12513__$1 = (((G__12513 instanceof cljs.core.Keyword))?G__12513.fqn:null);
switch (G__12513__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12505,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12514){
var vec__12515 = p__12514;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12515,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12515,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12504){
var self__ = this;
var G__12504__$1 = this;
return (new cljs.core.RecordIter((0),G__12504__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12506,other12507){
var self__ = this;
var this12506__$1 = this;
return (((!((other12507 == null)))) && ((((this12506__$1.constructor === other12507.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12506__$1.w,other12507.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12506__$1.h,other12507.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12506__$1.__extmap,other12507.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12505){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12574 = k12505;
var G__12574__$1 = (((G__12574 instanceof cljs.core.Keyword))?G__12574.fqn:null);
switch (G__12574__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12505);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12504){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12578 = cljs.core.keyword_identical_QMARK_;
var expr__12579 = k__5457__auto__;
if(cljs.core.truth_((pred__12578.cljs$core$IFn$_invoke$arity$2 ? pred__12578.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12579) : pred__12578.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12579)))){
return (new shadow.dom.Size(G__12504,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12578.cljs$core$IFn$_invoke$arity$2 ? pred__12578.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12579) : pred__12578.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12579)))){
return (new shadow.dom.Size(self__.w,G__12504,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12504),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12504){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12504,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12508){
var extmap__5490__auto__ = (function (){var G__12589 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12508,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12508)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12589);
} else {
return G__12589;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12508),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12508),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__13785 = (i + (1));
var G__13786 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13785;
ret = G__13786;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12623){
var vec__12625 = p__12623;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12625,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12625,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12637 = arguments.length;
switch (G__12637) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13824 = ps;
var G__13825 = (i + (1));
el__$1 = G__13824;
i = G__13825;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12683 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12683,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12683,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12683,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12687_13851 = cljs.core.seq(props);
var chunk__12688_13852 = null;
var count__12689_13853 = (0);
var i__12690_13854 = (0);
while(true){
if((i__12690_13854 < count__12689_13853)){
var vec__12717_13857 = chunk__12688_13852.cljs$core$IIndexed$_nth$arity$2(null,i__12690_13854);
var k_13858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12717_13857,(0),null);
var v_13859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12717_13857,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_13858);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13858),v_13859);


var G__13870 = seq__12687_13851;
var G__13871 = chunk__12688_13852;
var G__13872 = count__12689_13853;
var G__13873 = (i__12690_13854 + (1));
seq__12687_13851 = G__13870;
chunk__12688_13852 = G__13871;
count__12689_13853 = G__13872;
i__12690_13854 = G__13873;
continue;
} else {
var temp__5823__auto___13880 = cljs.core.seq(seq__12687_13851);
if(temp__5823__auto___13880){
var seq__12687_13884__$1 = temp__5823__auto___13880;
if(cljs.core.chunked_seq_QMARK_(seq__12687_13884__$1)){
var c__5673__auto___13886 = cljs.core.chunk_first(seq__12687_13884__$1);
var G__13888 = cljs.core.chunk_rest(seq__12687_13884__$1);
var G__13889 = c__5673__auto___13886;
var G__13890 = cljs.core.count(c__5673__auto___13886);
var G__13891 = (0);
seq__12687_13851 = G__13888;
chunk__12688_13852 = G__13889;
count__12689_13853 = G__13890;
i__12690_13854 = G__13891;
continue;
} else {
var vec__12723_13894 = cljs.core.first(seq__12687_13884__$1);
var k_13895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12723_13894,(0),null);
var v_13896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12723_13894,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_13895);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13895),v_13896);


var G__13902 = cljs.core.next(seq__12687_13884__$1);
var G__13903 = null;
var G__13904 = (0);
var G__13905 = (0);
seq__12687_13851 = G__13902;
chunk__12688_13852 = G__13903;
count__12689_13853 = G__13904;
i__12690_13854 = G__13905;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12735 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12735,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12735,(1),null);
var seq__12738_13914 = cljs.core.seq(node_children);
var chunk__12740_13915 = null;
var count__12741_13916 = (0);
var i__12742_13917 = (0);
while(true){
if((i__12742_13917 < count__12741_13916)){
var child_struct_13926 = chunk__12740_13915.cljs$core$IIndexed$_nth$arity$2(null,i__12742_13917);
if((!((child_struct_13926 == null)))){
if(typeof child_struct_13926 === 'string'){
var text_13928 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13928)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_13926)));
} else {
var children_13930 = shadow.dom.svg_node(child_struct_13926);
if(cljs.core.seq_QMARK_(children_13930)){
var seq__12774_13932 = cljs.core.seq(children_13930);
var chunk__12776_13933 = null;
var count__12777_13934 = (0);
var i__12778_13935 = (0);
while(true){
if((i__12778_13935 < count__12777_13934)){
var child_13940 = chunk__12776_13933.cljs$core$IIndexed$_nth$arity$2(null,i__12778_13935);
if(cljs.core.truth_(child_13940)){
node.appendChild(child_13940);


var G__13942 = seq__12774_13932;
var G__13943 = chunk__12776_13933;
var G__13944 = count__12777_13934;
var G__13945 = (i__12778_13935 + (1));
seq__12774_13932 = G__13942;
chunk__12776_13933 = G__13943;
count__12777_13934 = G__13944;
i__12778_13935 = G__13945;
continue;
} else {
var G__13946 = seq__12774_13932;
var G__13947 = chunk__12776_13933;
var G__13948 = count__12777_13934;
var G__13949 = (i__12778_13935 + (1));
seq__12774_13932 = G__13946;
chunk__12776_13933 = G__13947;
count__12777_13934 = G__13948;
i__12778_13935 = G__13949;
continue;
}
} else {
var temp__5823__auto___13951 = cljs.core.seq(seq__12774_13932);
if(temp__5823__auto___13951){
var seq__12774_13953__$1 = temp__5823__auto___13951;
if(cljs.core.chunked_seq_QMARK_(seq__12774_13953__$1)){
var c__5673__auto___13954 = cljs.core.chunk_first(seq__12774_13953__$1);
var G__13955 = cljs.core.chunk_rest(seq__12774_13953__$1);
var G__13956 = c__5673__auto___13954;
var G__13957 = cljs.core.count(c__5673__auto___13954);
var G__13958 = (0);
seq__12774_13932 = G__13955;
chunk__12776_13933 = G__13956;
count__12777_13934 = G__13957;
i__12778_13935 = G__13958;
continue;
} else {
var child_13959 = cljs.core.first(seq__12774_13953__$1);
if(cljs.core.truth_(child_13959)){
node.appendChild(child_13959);


var G__13990 = cljs.core.next(seq__12774_13953__$1);
var G__13991 = null;
var G__13992 = (0);
var G__13993 = (0);
seq__12774_13932 = G__13990;
chunk__12776_13933 = G__13991;
count__12777_13934 = G__13992;
i__12778_13935 = G__13993;
continue;
} else {
var G__13995 = cljs.core.next(seq__12774_13953__$1);
var G__13996 = null;
var G__13997 = (0);
var G__13998 = (0);
seq__12774_13932 = G__13995;
chunk__12776_13933 = G__13996;
count__12777_13934 = G__13997;
i__12778_13935 = G__13998;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13930);
}
}


var G__13999 = seq__12738_13914;
var G__14000 = chunk__12740_13915;
var G__14001 = count__12741_13916;
var G__14002 = (i__12742_13917 + (1));
seq__12738_13914 = G__13999;
chunk__12740_13915 = G__14000;
count__12741_13916 = G__14001;
i__12742_13917 = G__14002;
continue;
} else {
var G__14004 = seq__12738_13914;
var G__14005 = chunk__12740_13915;
var G__14006 = count__12741_13916;
var G__14007 = (i__12742_13917 + (1));
seq__12738_13914 = G__14004;
chunk__12740_13915 = G__14005;
count__12741_13916 = G__14006;
i__12742_13917 = G__14007;
continue;
}
} else {
var temp__5823__auto___14008 = cljs.core.seq(seq__12738_13914);
if(temp__5823__auto___14008){
var seq__12738_14009__$1 = temp__5823__auto___14008;
if(cljs.core.chunked_seq_QMARK_(seq__12738_14009__$1)){
var c__5673__auto___14011 = cljs.core.chunk_first(seq__12738_14009__$1);
var G__14012 = cljs.core.chunk_rest(seq__12738_14009__$1);
var G__14013 = c__5673__auto___14011;
var G__14014 = cljs.core.count(c__5673__auto___14011);
var G__14015 = (0);
seq__12738_13914 = G__14012;
chunk__12740_13915 = G__14013;
count__12741_13916 = G__14014;
i__12742_13917 = G__14015;
continue;
} else {
var child_struct_14016 = cljs.core.first(seq__12738_14009__$1);
if((!((child_struct_14016 == null)))){
if(typeof child_struct_14016 === 'string'){
var text_14019 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14019)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_14016)));
} else {
var children_14023 = shadow.dom.svg_node(child_struct_14016);
if(cljs.core.seq_QMARK_(children_14023)){
var seq__12793_14024 = cljs.core.seq(children_14023);
var chunk__12795_14025 = null;
var count__12796_14026 = (0);
var i__12797_14027 = (0);
while(true){
if((i__12797_14027 < count__12796_14026)){
var child_14029 = chunk__12795_14025.cljs$core$IIndexed$_nth$arity$2(null,i__12797_14027);
if(cljs.core.truth_(child_14029)){
node.appendChild(child_14029);


var G__14034 = seq__12793_14024;
var G__14035 = chunk__12795_14025;
var G__14036 = count__12796_14026;
var G__14037 = (i__12797_14027 + (1));
seq__12793_14024 = G__14034;
chunk__12795_14025 = G__14035;
count__12796_14026 = G__14036;
i__12797_14027 = G__14037;
continue;
} else {
var G__14038 = seq__12793_14024;
var G__14039 = chunk__12795_14025;
var G__14040 = count__12796_14026;
var G__14041 = (i__12797_14027 + (1));
seq__12793_14024 = G__14038;
chunk__12795_14025 = G__14039;
count__12796_14026 = G__14040;
i__12797_14027 = G__14041;
continue;
}
} else {
var temp__5823__auto___14042__$1 = cljs.core.seq(seq__12793_14024);
if(temp__5823__auto___14042__$1){
var seq__12793_14043__$1 = temp__5823__auto___14042__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12793_14043__$1)){
var c__5673__auto___14045 = cljs.core.chunk_first(seq__12793_14043__$1);
var G__14046 = cljs.core.chunk_rest(seq__12793_14043__$1);
var G__14047 = c__5673__auto___14045;
var G__14048 = cljs.core.count(c__5673__auto___14045);
var G__14049 = (0);
seq__12793_14024 = G__14046;
chunk__12795_14025 = G__14047;
count__12796_14026 = G__14048;
i__12797_14027 = G__14049;
continue;
} else {
var child_14050 = cljs.core.first(seq__12793_14043__$1);
if(cljs.core.truth_(child_14050)){
node.appendChild(child_14050);


var G__14051 = cljs.core.next(seq__12793_14043__$1);
var G__14052 = null;
var G__14053 = (0);
var G__14054 = (0);
seq__12793_14024 = G__14051;
chunk__12795_14025 = G__14052;
count__12796_14026 = G__14053;
i__12797_14027 = G__14054;
continue;
} else {
var G__14056 = cljs.core.next(seq__12793_14043__$1);
var G__14057 = null;
var G__14058 = (0);
var G__14059 = (0);
seq__12793_14024 = G__14056;
chunk__12795_14025 = G__14057;
count__12796_14026 = G__14058;
i__12797_14027 = G__14059;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14023);
}
}


var G__14061 = cljs.core.next(seq__12738_14009__$1);
var G__14062 = null;
var G__14063 = (0);
var G__14064 = (0);
seq__12738_13914 = G__14061;
chunk__12740_13915 = G__14062;
count__12741_13916 = G__14063;
i__12742_13917 = G__14064;
continue;
} else {
var G__14067 = cljs.core.next(seq__12738_14009__$1);
var G__14068 = null;
var G__14069 = (0);
var G__14070 = (0);
seq__12738_13914 = G__14067;
chunk__12740_13915 = G__14068;
count__12741_13916 = G__14069;
i__12742_13917 = G__14070;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___14077 = arguments.length;
var i__5877__auto___14078 = (0);
while(true){
if((i__5877__auto___14078 < len__5876__auto___14077)){
args__5882__auto__.push((arguments[i__5877__auto___14078]));

var G__14079 = (i__5877__auto___14078 + (1));
i__5877__auto___14078 = G__14079;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12812){
var G__12813 = cljs.core.first(seq12812);
var seq12812__$1 = cljs.core.next(seq12812);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12813,seq12812__$1);
}));


//# sourceMappingURL=shadow.dom.js.map

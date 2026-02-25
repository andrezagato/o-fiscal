goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12862 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_12862(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12874 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_12874(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11761 = coll;
var G__11762 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11761,G__11762) : shadow.dom.lazy_native_coll_seq.call(null,G__11761,G__11762));
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
var G__11780 = arguments.length;
switch (G__11780) {
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
var G__11784 = arguments.length;
switch (G__11784) {
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
var G__11788 = arguments.length;
switch (G__11788) {
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
var G__11794 = arguments.length;
switch (G__11794) {
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
var G__11801 = arguments.length;
switch (G__11801) {
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
var G__11806 = arguments.length;
switch (G__11806) {
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
}catch (e11813){if((e11813 instanceof Object)){
var e = e11813;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11813;

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
var seq__11817 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11818 = null;
var count__11819 = (0);
var i__11820 = (0);
while(true){
if((i__11820 < count__11819)){
var el = chunk__11818.cljs$core$IIndexed$_nth$arity$2(null,i__11820);
var handler_12956__$1 = ((function (seq__11817,chunk__11818,count__11819,i__11820,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11817,chunk__11818,count__11819,i__11820,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12956__$1);


var G__12957 = seq__11817;
var G__12958 = chunk__11818;
var G__12959 = count__11819;
var G__12960 = (i__11820 + (1));
seq__11817 = G__12957;
chunk__11818 = G__12958;
count__11819 = G__12959;
i__11820 = G__12960;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11817);
if(temp__5823__auto__){
var seq__11817__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11817__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11817__$1);
var G__12961 = cljs.core.chunk_rest(seq__11817__$1);
var G__12962 = c__5673__auto__;
var G__12963 = cljs.core.count(c__5673__auto__);
var G__12964 = (0);
seq__11817 = G__12961;
chunk__11818 = G__12962;
count__11819 = G__12963;
i__11820 = G__12964;
continue;
} else {
var el = cljs.core.first(seq__11817__$1);
var handler_12966__$1 = ((function (seq__11817,chunk__11818,count__11819,i__11820,el,seq__11817__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11817,chunk__11818,count__11819,i__11820,el,seq__11817__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12966__$1);


var G__12969 = cljs.core.next(seq__11817__$1);
var G__12970 = null;
var G__12971 = (0);
var G__12972 = (0);
seq__11817 = G__12969;
chunk__11818 = G__12970;
count__11819 = G__12971;
i__11820 = G__12972;
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
var G__11872 = arguments.length;
switch (G__11872) {
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
var seq__11876 = cljs.core.seq(events);
var chunk__11877 = null;
var count__11878 = (0);
var i__11879 = (0);
while(true){
if((i__11879 < count__11878)){
var vec__11887 = chunk__11877.cljs$core$IIndexed$_nth$arity$2(null,i__11879);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11887,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12979 = seq__11876;
var G__12980 = chunk__11877;
var G__12981 = count__11878;
var G__12982 = (i__11879 + (1));
seq__11876 = G__12979;
chunk__11877 = G__12980;
count__11878 = G__12981;
i__11879 = G__12982;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11876);
if(temp__5823__auto__){
var seq__11876__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11876__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11876__$1);
var G__12983 = cljs.core.chunk_rest(seq__11876__$1);
var G__12984 = c__5673__auto__;
var G__12985 = cljs.core.count(c__5673__auto__);
var G__12986 = (0);
seq__11876 = G__12983;
chunk__11877 = G__12984;
count__11878 = G__12985;
i__11879 = G__12986;
continue;
} else {
var vec__11890 = cljs.core.first(seq__11876__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11890,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11890,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12989 = cljs.core.next(seq__11876__$1);
var G__12990 = null;
var G__12991 = (0);
var G__12992 = (0);
seq__11876 = G__12989;
chunk__11877 = G__12990;
count__11878 = G__12991;
i__11879 = G__12992;
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
var seq__11905 = cljs.core.seq(styles);
var chunk__11906 = null;
var count__11907 = (0);
var i__11908 = (0);
while(true){
if((i__11908 < count__11907)){
var vec__11922 = chunk__11906.cljs$core$IIndexed$_nth$arity$2(null,i__11908);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11922,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11922,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12994 = seq__11905;
var G__12995 = chunk__11906;
var G__12996 = count__11907;
var G__12997 = (i__11908 + (1));
seq__11905 = G__12994;
chunk__11906 = G__12995;
count__11907 = G__12996;
i__11908 = G__12997;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11905);
if(temp__5823__auto__){
var seq__11905__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11905__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11905__$1);
var G__12999 = cljs.core.chunk_rest(seq__11905__$1);
var G__13000 = c__5673__auto__;
var G__13001 = cljs.core.count(c__5673__auto__);
var G__13002 = (0);
seq__11905 = G__12999;
chunk__11906 = G__13000;
count__11907 = G__13001;
i__11908 = G__13002;
continue;
} else {
var vec__11938 = cljs.core.first(seq__11905__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11938,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11938,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13008 = cljs.core.next(seq__11905__$1);
var G__13009 = null;
var G__13010 = (0);
var G__13011 = (0);
seq__11905 = G__13008;
chunk__11906 = G__13009;
count__11907 = G__13010;
i__11908 = G__13011;
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
var G__11945_13014 = key;
var G__11945_13015__$1 = (((G__11945_13014 instanceof cljs.core.Keyword))?G__11945_13014.fqn:null);
switch (G__11945_13015__$1) {
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
var ks_13022 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_13022,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_13022,"aria-");
}
})())){
el.setAttribute(ks_13022,value);
} else {
(el[ks_13022] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11956){
var map__11957 = p__11956;
var map__11957__$1 = cljs.core.__destructure_map(map__11957);
var props = map__11957__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11957__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11958 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11958,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11958,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11958,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11962 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11962,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11962;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11965 = arguments.length;
switch (G__11965) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12014){
var vec__12015 = p__12014;
var seq__12017 = cljs.core.seq(vec__12015);
var first__12019 = cljs.core.first(seq__12017);
var seq__12017__$1 = cljs.core.next(seq__12017);
var nn = first__12019;
var first__12019__$1 = cljs.core.first(seq__12017__$1);
var seq__12017__$2 = cljs.core.next(seq__12017__$1);
var np = first__12019__$1;
var nc = seq__12017__$2;
var node = vec__12015;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12027 = nn;
var G__12028 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12027,G__12028) : create_fn.call(null,G__12027,G__12028));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12029 = nn;
var G__12030 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12029,G__12030) : create_fn.call(null,G__12029,G__12030));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12035 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12035,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12035,(1),null);
var seq__12039_13095 = cljs.core.seq(node_children);
var chunk__12040_13096 = null;
var count__12041_13097 = (0);
var i__12042_13098 = (0);
while(true){
if((i__12042_13098 < count__12041_13097)){
var child_struct_13101 = chunk__12040_13096.cljs$core$IIndexed$_nth$arity$2(null,i__12042_13098);
var children_13103 = shadow.dom.dom_node(child_struct_13101);
if(cljs.core.seq_QMARK_(children_13103)){
var seq__12098_13105 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13103));
var chunk__12100_13106 = null;
var count__12101_13107 = (0);
var i__12102_13108 = (0);
while(true){
if((i__12102_13108 < count__12101_13107)){
var child_13110 = chunk__12100_13106.cljs$core$IIndexed$_nth$arity$2(null,i__12102_13108);
if(cljs.core.truth_(child_13110)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13110);


var G__13111 = seq__12098_13105;
var G__13112 = chunk__12100_13106;
var G__13113 = count__12101_13107;
var G__13114 = (i__12102_13108 + (1));
seq__12098_13105 = G__13111;
chunk__12100_13106 = G__13112;
count__12101_13107 = G__13113;
i__12102_13108 = G__13114;
continue;
} else {
var G__13116 = seq__12098_13105;
var G__13117 = chunk__12100_13106;
var G__13118 = count__12101_13107;
var G__13119 = (i__12102_13108 + (1));
seq__12098_13105 = G__13116;
chunk__12100_13106 = G__13117;
count__12101_13107 = G__13118;
i__12102_13108 = G__13119;
continue;
}
} else {
var temp__5823__auto___13122 = cljs.core.seq(seq__12098_13105);
if(temp__5823__auto___13122){
var seq__12098_13126__$1 = temp__5823__auto___13122;
if(cljs.core.chunked_seq_QMARK_(seq__12098_13126__$1)){
var c__5673__auto___13127 = cljs.core.chunk_first(seq__12098_13126__$1);
var G__13129 = cljs.core.chunk_rest(seq__12098_13126__$1);
var G__13130 = c__5673__auto___13127;
var G__13131 = cljs.core.count(c__5673__auto___13127);
var G__13132 = (0);
seq__12098_13105 = G__13129;
chunk__12100_13106 = G__13130;
count__12101_13107 = G__13131;
i__12102_13108 = G__13132;
continue;
} else {
var child_13134 = cljs.core.first(seq__12098_13126__$1);
if(cljs.core.truth_(child_13134)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13134);


var G__13135 = cljs.core.next(seq__12098_13126__$1);
var G__13136 = null;
var G__13137 = (0);
var G__13138 = (0);
seq__12098_13105 = G__13135;
chunk__12100_13106 = G__13136;
count__12101_13107 = G__13137;
i__12102_13108 = G__13138;
continue;
} else {
var G__13139 = cljs.core.next(seq__12098_13126__$1);
var G__13140 = null;
var G__13141 = (0);
var G__13142 = (0);
seq__12098_13105 = G__13139;
chunk__12100_13106 = G__13140;
count__12101_13107 = G__13141;
i__12102_13108 = G__13142;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13103);
}


var G__13143 = seq__12039_13095;
var G__13144 = chunk__12040_13096;
var G__13145 = count__12041_13097;
var G__13146 = (i__12042_13098 + (1));
seq__12039_13095 = G__13143;
chunk__12040_13096 = G__13144;
count__12041_13097 = G__13145;
i__12042_13098 = G__13146;
continue;
} else {
var temp__5823__auto___13163 = cljs.core.seq(seq__12039_13095);
if(temp__5823__auto___13163){
var seq__12039_13199__$1 = temp__5823__auto___13163;
if(cljs.core.chunked_seq_QMARK_(seq__12039_13199__$1)){
var c__5673__auto___13202 = cljs.core.chunk_first(seq__12039_13199__$1);
var G__13204 = cljs.core.chunk_rest(seq__12039_13199__$1);
var G__13205 = c__5673__auto___13202;
var G__13206 = cljs.core.count(c__5673__auto___13202);
var G__13207 = (0);
seq__12039_13095 = G__13204;
chunk__12040_13096 = G__13205;
count__12041_13097 = G__13206;
i__12042_13098 = G__13207;
continue;
} else {
var child_struct_13215 = cljs.core.first(seq__12039_13199__$1);
var children_13216 = shadow.dom.dom_node(child_struct_13215);
if(cljs.core.seq_QMARK_(children_13216)){
var seq__12123_13218 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13216));
var chunk__12125_13219 = null;
var count__12126_13220 = (0);
var i__12127_13221 = (0);
while(true){
if((i__12127_13221 < count__12126_13220)){
var child_13226 = chunk__12125_13219.cljs$core$IIndexed$_nth$arity$2(null,i__12127_13221);
if(cljs.core.truth_(child_13226)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13226);


var G__13229 = seq__12123_13218;
var G__13230 = chunk__12125_13219;
var G__13231 = count__12126_13220;
var G__13232 = (i__12127_13221 + (1));
seq__12123_13218 = G__13229;
chunk__12125_13219 = G__13230;
count__12126_13220 = G__13231;
i__12127_13221 = G__13232;
continue;
} else {
var G__13233 = seq__12123_13218;
var G__13234 = chunk__12125_13219;
var G__13235 = count__12126_13220;
var G__13237 = (i__12127_13221 + (1));
seq__12123_13218 = G__13233;
chunk__12125_13219 = G__13234;
count__12126_13220 = G__13235;
i__12127_13221 = G__13237;
continue;
}
} else {
var temp__5823__auto___13238__$1 = cljs.core.seq(seq__12123_13218);
if(temp__5823__auto___13238__$1){
var seq__12123_13240__$1 = temp__5823__auto___13238__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12123_13240__$1)){
var c__5673__auto___13241 = cljs.core.chunk_first(seq__12123_13240__$1);
var G__13242 = cljs.core.chunk_rest(seq__12123_13240__$1);
var G__13243 = c__5673__auto___13241;
var G__13244 = cljs.core.count(c__5673__auto___13241);
var G__13245 = (0);
seq__12123_13218 = G__13242;
chunk__12125_13219 = G__13243;
count__12126_13220 = G__13244;
i__12127_13221 = G__13245;
continue;
} else {
var child_13250 = cljs.core.first(seq__12123_13240__$1);
if(cljs.core.truth_(child_13250)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13250);


var G__13252 = cljs.core.next(seq__12123_13240__$1);
var G__13253 = null;
var G__13254 = (0);
var G__13255 = (0);
seq__12123_13218 = G__13252;
chunk__12125_13219 = G__13253;
count__12126_13220 = G__13254;
i__12127_13221 = G__13255;
continue;
} else {
var G__13256 = cljs.core.next(seq__12123_13240__$1);
var G__13257 = null;
var G__13258 = (0);
var G__13259 = (0);
seq__12123_13218 = G__13256;
chunk__12125_13219 = G__13257;
count__12126_13220 = G__13258;
i__12127_13221 = G__13259;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13216);
}


var G__13260 = cljs.core.next(seq__12039_13199__$1);
var G__13261 = null;
var G__13262 = (0);
var G__13263 = (0);
seq__12039_13095 = G__13260;
chunk__12040_13096 = G__13261;
count__12041_13097 = G__13262;
i__12042_13098 = G__13263;
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
var seq__12223 = cljs.core.seq(node);
var chunk__12224 = null;
var count__12225 = (0);
var i__12226 = (0);
while(true){
if((i__12226 < count__12225)){
var n = chunk__12224.cljs$core$IIndexed$_nth$arity$2(null,i__12226);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13274 = seq__12223;
var G__13275 = chunk__12224;
var G__13276 = count__12225;
var G__13277 = (i__12226 + (1));
seq__12223 = G__13274;
chunk__12224 = G__13275;
count__12225 = G__13276;
i__12226 = G__13277;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12223);
if(temp__5823__auto__){
var seq__12223__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12223__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12223__$1);
var G__13280 = cljs.core.chunk_rest(seq__12223__$1);
var G__13281 = c__5673__auto__;
var G__13282 = cljs.core.count(c__5673__auto__);
var G__13283 = (0);
seq__12223 = G__13280;
chunk__12224 = G__13281;
count__12225 = G__13282;
i__12226 = G__13283;
continue;
} else {
var n = cljs.core.first(seq__12223__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13298 = cljs.core.next(seq__12223__$1);
var G__13299 = null;
var G__13300 = (0);
var G__13301 = (0);
seq__12223 = G__13298;
chunk__12224 = G__13299;
count__12225 = G__13300;
i__12226 = G__13301;
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
var G__12312 = arguments.length;
switch (G__12312) {
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
var G__12336 = arguments.length;
switch (G__12336) {
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
var G__12369 = arguments.length;
switch (G__12369) {
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
var len__5876__auto___13384 = arguments.length;
var i__5877__auto___13391 = (0);
while(true){
if((i__5877__auto___13391 < len__5876__auto___13384)){
args__5882__auto__.push((arguments[i__5877__auto___13391]));

var G__13398 = (i__5877__auto___13391 + (1));
i__5877__auto___13391 = G__13398;
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
var seq__12391_13400 = cljs.core.seq(nodes);
var chunk__12392_13401 = null;
var count__12393_13402 = (0);
var i__12394_13403 = (0);
while(true){
if((i__12394_13403 < count__12393_13402)){
var node_13405 = chunk__12392_13401.cljs$core$IIndexed$_nth$arity$2(null,i__12394_13403);
fragment.appendChild(shadow.dom._to_dom(node_13405));


var G__13406 = seq__12391_13400;
var G__13407 = chunk__12392_13401;
var G__13408 = count__12393_13402;
var G__13409 = (i__12394_13403 + (1));
seq__12391_13400 = G__13406;
chunk__12392_13401 = G__13407;
count__12393_13402 = G__13408;
i__12394_13403 = G__13409;
continue;
} else {
var temp__5823__auto___13410 = cljs.core.seq(seq__12391_13400);
if(temp__5823__auto___13410){
var seq__12391_13412__$1 = temp__5823__auto___13410;
if(cljs.core.chunked_seq_QMARK_(seq__12391_13412__$1)){
var c__5673__auto___13413 = cljs.core.chunk_first(seq__12391_13412__$1);
var G__13415 = cljs.core.chunk_rest(seq__12391_13412__$1);
var G__13416 = c__5673__auto___13413;
var G__13417 = cljs.core.count(c__5673__auto___13413);
var G__13418 = (0);
seq__12391_13400 = G__13415;
chunk__12392_13401 = G__13416;
count__12393_13402 = G__13417;
i__12394_13403 = G__13418;
continue;
} else {
var node_13419 = cljs.core.first(seq__12391_13412__$1);
fragment.appendChild(shadow.dom._to_dom(node_13419));


var G__13421 = cljs.core.next(seq__12391_13412__$1);
var G__13422 = null;
var G__13423 = (0);
var G__13424 = (0);
seq__12391_13400 = G__13421;
chunk__12392_13401 = G__13422;
count__12393_13402 = G__13423;
i__12394_13403 = G__13424;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12383){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12383));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12405_13434 = cljs.core.seq(scripts);
var chunk__12406_13435 = null;
var count__12407_13436 = (0);
var i__12408_13437 = (0);
while(true){
if((i__12408_13437 < count__12407_13436)){
var vec__12418_13439 = chunk__12406_13435.cljs$core$IIndexed$_nth$arity$2(null,i__12408_13437);
var script_tag_13440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418_13439,(0),null);
var script_body_13441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12418_13439,(1),null);
eval(script_body_13441);


var G__13450 = seq__12405_13434;
var G__13451 = chunk__12406_13435;
var G__13452 = count__12407_13436;
var G__13453 = (i__12408_13437 + (1));
seq__12405_13434 = G__13450;
chunk__12406_13435 = G__13451;
count__12407_13436 = G__13452;
i__12408_13437 = G__13453;
continue;
} else {
var temp__5823__auto___13455 = cljs.core.seq(seq__12405_13434);
if(temp__5823__auto___13455){
var seq__12405_13470__$1 = temp__5823__auto___13455;
if(cljs.core.chunked_seq_QMARK_(seq__12405_13470__$1)){
var c__5673__auto___13473 = cljs.core.chunk_first(seq__12405_13470__$1);
var G__13474 = cljs.core.chunk_rest(seq__12405_13470__$1);
var G__13475 = c__5673__auto___13473;
var G__13476 = cljs.core.count(c__5673__auto___13473);
var G__13477 = (0);
seq__12405_13434 = G__13474;
chunk__12406_13435 = G__13475;
count__12407_13436 = G__13476;
i__12408_13437 = G__13477;
continue;
} else {
var vec__12427_13480 = cljs.core.first(seq__12405_13470__$1);
var script_tag_13481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12427_13480,(0),null);
var script_body_13482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12427_13480,(1),null);
eval(script_body_13482);


var G__13489 = cljs.core.next(seq__12405_13470__$1);
var G__13490 = null;
var G__13491 = (0);
var G__13492 = (0);
seq__12405_13434 = G__13489;
chunk__12406_13435 = G__13490;
count__12407_13436 = G__13491;
i__12408_13437 = G__13492;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12431){
var vec__12432 = p__12431;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12432,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12432,(1),null);
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
var G__12452 = arguments.length;
switch (G__12452) {
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
var seq__12469 = cljs.core.seq(style_keys);
var chunk__12470 = null;
var count__12471 = (0);
var i__12472 = (0);
while(true){
if((i__12472 < count__12471)){
var it = chunk__12470.cljs$core$IIndexed$_nth$arity$2(null,i__12472);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13600 = seq__12469;
var G__13601 = chunk__12470;
var G__13602 = count__12471;
var G__13603 = (i__12472 + (1));
seq__12469 = G__13600;
chunk__12470 = G__13601;
count__12471 = G__13602;
i__12472 = G__13603;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12469);
if(temp__5823__auto__){
var seq__12469__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12469__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__12469__$1);
var G__13608 = cljs.core.chunk_rest(seq__12469__$1);
var G__13609 = c__5673__auto__;
var G__13610 = cljs.core.count(c__5673__auto__);
var G__13611 = (0);
seq__12469 = G__13608;
chunk__12470 = G__13609;
count__12471 = G__13610;
i__12472 = G__13611;
continue;
} else {
var it = cljs.core.first(seq__12469__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13614 = cljs.core.next(seq__12469__$1);
var G__13615 = null;
var G__13616 = (0);
var G__13617 = (0);
seq__12469 = G__13614;
chunk__12470 = G__13615;
count__12471 = G__13616;
i__12472 = G__13617;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12509,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12550 = k12509;
var G__12550__$1 = (((G__12550 instanceof cljs.core.Keyword))?G__12550.fqn:null);
switch (G__12550__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12509,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12556){
var vec__12557 = p__12556;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12557,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12508){
var self__ = this;
var G__12508__$1 = this;
return (new cljs.core.RecordIter((0),G__12508__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12510,other12511){
var self__ = this;
var this12510__$1 = this;
return (((!((other12511 == null)))) && ((((this12510__$1.constructor === other12511.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12510__$1.x,other12511.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12510__$1.y,other12511.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12510__$1.__extmap,other12511.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12509){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12589 = k12509;
var G__12589__$1 = (((G__12589 instanceof cljs.core.Keyword))?G__12589.fqn:null);
switch (G__12589__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12509);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12508){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12593 = cljs.core.keyword_identical_QMARK_;
var expr__12594 = k__5457__auto__;
if(cljs.core.truth_((pred__12593.cljs$core$IFn$_invoke$arity$2 ? pred__12593.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12594) : pred__12593.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12594)))){
return (new shadow.dom.Coordinate(G__12508,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12593.cljs$core$IFn$_invoke$arity$2 ? pred__12593.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12594) : pred__12593.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12594)))){
return (new shadow.dom.Coordinate(self__.x,G__12508,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12508),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12508){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12508,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12530){
var extmap__5490__auto__ = (function (){var G__12605 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12530,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12530)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12605);
} else {
return G__12605;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12530),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12530),null,cljs.core.not_empty(extmap__5490__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k12616,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__12624 = k12616;
var G__12624__$1 = (((G__12624 instanceof cljs.core.Keyword))?G__12624.fqn:null);
switch (G__12624__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12616,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__12627){
var vec__12628 = p__12627;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12628,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12628,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12615){
var self__ = this;
var G__12615__$1 = this;
return (new cljs.core.RecordIter((0),G__12615__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12617,other12618){
var self__ = this;
var this12617__$1 = this;
return (((!((other12618 == null)))) && ((((this12617__$1.constructor === other12618.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12617__$1.w,other12618.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12617__$1.h,other12618.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12617__$1.__extmap,other12618.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k12616){
var self__ = this;
var this__5455__auto____$1 = this;
var G__12637 = k12616;
var G__12637__$1 = (((G__12637 instanceof cljs.core.Keyword))?G__12637.fqn:null);
switch (G__12637__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12616);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__12615){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__12638 = cljs.core.keyword_identical_QMARK_;
var expr__12639 = k__5457__auto__;
if(cljs.core.truth_((pred__12638.cljs$core$IFn$_invoke$arity$2 ? pred__12638.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12639) : pred__12638.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12639)))){
return (new shadow.dom.Size(G__12615,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12638.cljs$core$IFn$_invoke$arity$2 ? pred__12638.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12639) : pred__12638.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12639)))){
return (new shadow.dom.Size(self__.w,G__12615,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__12615),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__12615){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12615,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12621){
var extmap__5490__auto__ = (function (){var G__12649 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12621,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12621)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12649);
} else {
return G__12649;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12621),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12621),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var G__13896 = (i + (1));
var G__13897 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13896;
ret = G__13897;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12672){
var vec__12673 = p__12672;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12673,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12673,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12680 = arguments.length;
switch (G__12680) {
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
var G__13958 = ps;
var G__13959 = (i + (1));
el__$1 = G__13958;
i = G__13959;
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
var vec__12715 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12715,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12715,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12715,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12720_13977 = cljs.core.seq(props);
var chunk__12721_13978 = null;
var count__12722_13979 = (0);
var i__12723_13980 = (0);
while(true){
if((i__12723_13980 < count__12722_13979)){
var vec__12743_13982 = chunk__12721_13978.cljs$core$IIndexed$_nth$arity$2(null,i__12723_13980);
var k_13983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12743_13982,(0),null);
var v_13984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12743_13982,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_13983);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13983),v_13984);


var G__13987 = seq__12720_13977;
var G__13988 = chunk__12721_13978;
var G__13989 = count__12722_13979;
var G__13990 = (i__12723_13980 + (1));
seq__12720_13977 = G__13987;
chunk__12721_13978 = G__13988;
count__12722_13979 = G__13989;
i__12723_13980 = G__13990;
continue;
} else {
var temp__5823__auto___13992 = cljs.core.seq(seq__12720_13977);
if(temp__5823__auto___13992){
var seq__12720_13994__$1 = temp__5823__auto___13992;
if(cljs.core.chunked_seq_QMARK_(seq__12720_13994__$1)){
var c__5673__auto___13995 = cljs.core.chunk_first(seq__12720_13994__$1);
var G__13996 = cljs.core.chunk_rest(seq__12720_13994__$1);
var G__13997 = c__5673__auto___13995;
var G__13998 = cljs.core.count(c__5673__auto___13995);
var G__13999 = (0);
seq__12720_13977 = G__13996;
chunk__12721_13978 = G__13997;
count__12722_13979 = G__13998;
i__12723_13980 = G__13999;
continue;
} else {
var vec__12748_14002 = cljs.core.first(seq__12720_13994__$1);
var k_14003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12748_14002,(0),null);
var v_14004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12748_14002,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_14003);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_14003),v_14004);


var G__14006 = cljs.core.next(seq__12720_13994__$1);
var G__14007 = null;
var G__14008 = (0);
var G__14009 = (0);
seq__12720_13977 = G__14006;
chunk__12721_13978 = G__14007;
count__12722_13979 = G__14008;
i__12723_13980 = G__14009;
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
var vec__12763 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12763,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12763,(1),null);
var seq__12766_14016 = cljs.core.seq(node_children);
var chunk__12768_14017 = null;
var count__12769_14018 = (0);
var i__12770_14019 = (0);
while(true){
if((i__12770_14019 < count__12769_14018)){
var child_struct_14020 = chunk__12768_14017.cljs$core$IIndexed$_nth$arity$2(null,i__12770_14019);
if((!((child_struct_14020 == null)))){
if(typeof child_struct_14020 === 'string'){
var text_14023 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14023)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_14020)));
} else {
var children_14029 = shadow.dom.svg_node(child_struct_14020);
if(cljs.core.seq_QMARK_(children_14029)){
var seq__12806_14031 = cljs.core.seq(children_14029);
var chunk__12808_14032 = null;
var count__12809_14033 = (0);
var i__12810_14034 = (0);
while(true){
if((i__12810_14034 < count__12809_14033)){
var child_14035 = chunk__12808_14032.cljs$core$IIndexed$_nth$arity$2(null,i__12810_14034);
if(cljs.core.truth_(child_14035)){
node.appendChild(child_14035);


var G__14039 = seq__12806_14031;
var G__14040 = chunk__12808_14032;
var G__14041 = count__12809_14033;
var G__14042 = (i__12810_14034 + (1));
seq__12806_14031 = G__14039;
chunk__12808_14032 = G__14040;
count__12809_14033 = G__14041;
i__12810_14034 = G__14042;
continue;
} else {
var G__14043 = seq__12806_14031;
var G__14044 = chunk__12808_14032;
var G__14045 = count__12809_14033;
var G__14046 = (i__12810_14034 + (1));
seq__12806_14031 = G__14043;
chunk__12808_14032 = G__14044;
count__12809_14033 = G__14045;
i__12810_14034 = G__14046;
continue;
}
} else {
var temp__5823__auto___14047 = cljs.core.seq(seq__12806_14031);
if(temp__5823__auto___14047){
var seq__12806_14050__$1 = temp__5823__auto___14047;
if(cljs.core.chunked_seq_QMARK_(seq__12806_14050__$1)){
var c__5673__auto___14051 = cljs.core.chunk_first(seq__12806_14050__$1);
var G__14052 = cljs.core.chunk_rest(seq__12806_14050__$1);
var G__14053 = c__5673__auto___14051;
var G__14054 = cljs.core.count(c__5673__auto___14051);
var G__14055 = (0);
seq__12806_14031 = G__14052;
chunk__12808_14032 = G__14053;
count__12809_14033 = G__14054;
i__12810_14034 = G__14055;
continue;
} else {
var child_14056 = cljs.core.first(seq__12806_14050__$1);
if(cljs.core.truth_(child_14056)){
node.appendChild(child_14056);


var G__14057 = cljs.core.next(seq__12806_14050__$1);
var G__14058 = null;
var G__14059 = (0);
var G__14060 = (0);
seq__12806_14031 = G__14057;
chunk__12808_14032 = G__14058;
count__12809_14033 = G__14059;
i__12810_14034 = G__14060;
continue;
} else {
var G__14061 = cljs.core.next(seq__12806_14050__$1);
var G__14062 = null;
var G__14063 = (0);
var G__14064 = (0);
seq__12806_14031 = G__14061;
chunk__12808_14032 = G__14062;
count__12809_14033 = G__14063;
i__12810_14034 = G__14064;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14029);
}
}


var G__14065 = seq__12766_14016;
var G__14066 = chunk__12768_14017;
var G__14067 = count__12769_14018;
var G__14068 = (i__12770_14019 + (1));
seq__12766_14016 = G__14065;
chunk__12768_14017 = G__14066;
count__12769_14018 = G__14067;
i__12770_14019 = G__14068;
continue;
} else {
var G__14069 = seq__12766_14016;
var G__14070 = chunk__12768_14017;
var G__14071 = count__12769_14018;
var G__14072 = (i__12770_14019 + (1));
seq__12766_14016 = G__14069;
chunk__12768_14017 = G__14070;
count__12769_14018 = G__14071;
i__12770_14019 = G__14072;
continue;
}
} else {
var temp__5823__auto___14073 = cljs.core.seq(seq__12766_14016);
if(temp__5823__auto___14073){
var seq__12766_14074__$1 = temp__5823__auto___14073;
if(cljs.core.chunked_seq_QMARK_(seq__12766_14074__$1)){
var c__5673__auto___14075 = cljs.core.chunk_first(seq__12766_14074__$1);
var G__14076 = cljs.core.chunk_rest(seq__12766_14074__$1);
var G__14077 = c__5673__auto___14075;
var G__14078 = cljs.core.count(c__5673__auto___14075);
var G__14079 = (0);
seq__12766_14016 = G__14076;
chunk__12768_14017 = G__14077;
count__12769_14018 = G__14078;
i__12770_14019 = G__14079;
continue;
} else {
var child_struct_14080 = cljs.core.first(seq__12766_14074__$1);
if((!((child_struct_14080 == null)))){
if(typeof child_struct_14080 === 'string'){
var text_14082 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14082)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_14080)));
} else {
var children_14083 = shadow.dom.svg_node(child_struct_14080);
if(cljs.core.seq_QMARK_(children_14083)){
var seq__12818_14084 = cljs.core.seq(children_14083);
var chunk__12820_14085 = null;
var count__12821_14086 = (0);
var i__12822_14087 = (0);
while(true){
if((i__12822_14087 < count__12821_14086)){
var child_14088 = chunk__12820_14085.cljs$core$IIndexed$_nth$arity$2(null,i__12822_14087);
if(cljs.core.truth_(child_14088)){
node.appendChild(child_14088);


var G__14089 = seq__12818_14084;
var G__14090 = chunk__12820_14085;
var G__14091 = count__12821_14086;
var G__14092 = (i__12822_14087 + (1));
seq__12818_14084 = G__14089;
chunk__12820_14085 = G__14090;
count__12821_14086 = G__14091;
i__12822_14087 = G__14092;
continue;
} else {
var G__14093 = seq__12818_14084;
var G__14094 = chunk__12820_14085;
var G__14095 = count__12821_14086;
var G__14096 = (i__12822_14087 + (1));
seq__12818_14084 = G__14093;
chunk__12820_14085 = G__14094;
count__12821_14086 = G__14095;
i__12822_14087 = G__14096;
continue;
}
} else {
var temp__5823__auto___14097__$1 = cljs.core.seq(seq__12818_14084);
if(temp__5823__auto___14097__$1){
var seq__12818_14098__$1 = temp__5823__auto___14097__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12818_14098__$1)){
var c__5673__auto___14099 = cljs.core.chunk_first(seq__12818_14098__$1);
var G__14100 = cljs.core.chunk_rest(seq__12818_14098__$1);
var G__14101 = c__5673__auto___14099;
var G__14102 = cljs.core.count(c__5673__auto___14099);
var G__14103 = (0);
seq__12818_14084 = G__14100;
chunk__12820_14085 = G__14101;
count__12821_14086 = G__14102;
i__12822_14087 = G__14103;
continue;
} else {
var child_14104 = cljs.core.first(seq__12818_14098__$1);
if(cljs.core.truth_(child_14104)){
node.appendChild(child_14104);


var G__14105 = cljs.core.next(seq__12818_14098__$1);
var G__14106 = null;
var G__14107 = (0);
var G__14108 = (0);
seq__12818_14084 = G__14105;
chunk__12820_14085 = G__14106;
count__12821_14086 = G__14107;
i__12822_14087 = G__14108;
continue;
} else {
var G__14109 = cljs.core.next(seq__12818_14098__$1);
var G__14110 = null;
var G__14111 = (0);
var G__14112 = (0);
seq__12818_14084 = G__14109;
chunk__12820_14085 = G__14110;
count__12821_14086 = G__14111;
i__12822_14087 = G__14112;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14083);
}
}


var G__14113 = cljs.core.next(seq__12766_14074__$1);
var G__14114 = null;
var G__14115 = (0);
var G__14116 = (0);
seq__12766_14016 = G__14113;
chunk__12768_14017 = G__14114;
count__12769_14018 = G__14115;
i__12770_14019 = G__14116;
continue;
} else {
var G__14117 = cljs.core.next(seq__12766_14074__$1);
var G__14118 = null;
var G__14119 = (0);
var G__14120 = (0);
seq__12766_14016 = G__14117;
chunk__12768_14017 = G__14118;
count__12769_14018 = G__14119;
i__12770_14019 = G__14120;
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
var len__5876__auto___14130 = arguments.length;
var i__5877__auto___14131 = (0);
while(true){
if((i__5877__auto___14131 < len__5876__auto___14130)){
args__5882__auto__.push((arguments[i__5877__auto___14131]));

var G__14132 = (i__5877__auto___14131 + (1));
i__5877__auto___14131 = G__14132;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12847){
var G__12848 = cljs.core.first(seq12847);
var seq12847__$1 = cljs.core.next(seq12847);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12848,seq12847__$1);
}));


//# sourceMappingURL=shadow.dom.js.map

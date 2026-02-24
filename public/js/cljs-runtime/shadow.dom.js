goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15588 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_15588(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15597 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_15597(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13839 = coll;
var G__13840 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13839,G__13840) : shadow.dom.lazy_native_coll_seq.call(null,G__13839,G__13840));
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
var G__13890 = arguments.length;
switch (G__13890) {
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
var G__13903 = arguments.length;
switch (G__13903) {
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
var G__13914 = arguments.length;
switch (G__13914) {
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
var G__13930 = arguments.length;
switch (G__13930) {
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
var G__13960 = arguments.length;
switch (G__13960) {
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
var G__13996 = arguments.length;
switch (G__13996) {
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
}catch (e14021){if((e14021 instanceof Object)){
var e = e14021;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14021;

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
var seq__14053 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14054 = null;
var count__14055 = (0);
var i__14056 = (0);
while(true){
if((i__14056 < count__14055)){
var el = chunk__14054.cljs$core$IIndexed$_nth$arity$2(null,i__14056);
var handler_15673__$1 = ((function (seq__14053,chunk__14054,count__14055,i__14056,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14053,chunk__14054,count__14055,i__14056,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15673__$1);


var G__15676 = seq__14053;
var G__15677 = chunk__14054;
var G__15678 = count__14055;
var G__15679 = (i__14056 + (1));
seq__14053 = G__15676;
chunk__14054 = G__15677;
count__14055 = G__15678;
i__14056 = G__15679;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14053);
if(temp__5823__auto__){
var seq__14053__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14053__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14053__$1);
var G__15682 = cljs.core.chunk_rest(seq__14053__$1);
var G__15683 = c__5673__auto__;
var G__15684 = cljs.core.count(c__5673__auto__);
var G__15685 = (0);
seq__14053 = G__15682;
chunk__14054 = G__15683;
count__14055 = G__15684;
i__14056 = G__15685;
continue;
} else {
var el = cljs.core.first(seq__14053__$1);
var handler_15686__$1 = ((function (seq__14053,chunk__14054,count__14055,i__14056,el,seq__14053__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14053,chunk__14054,count__14055,i__14056,el,seq__14053__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15686__$1);


var G__15688 = cljs.core.next(seq__14053__$1);
var G__15689 = null;
var G__15690 = (0);
var G__15691 = (0);
seq__14053 = G__15688;
chunk__14054 = G__15689;
count__14055 = G__15690;
i__14056 = G__15691;
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
var G__14095 = arguments.length;
switch (G__14095) {
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
var seq__14139 = cljs.core.seq(events);
var chunk__14140 = null;
var count__14141 = (0);
var i__14142 = (0);
while(true){
if((i__14142 < count__14141)){
var vec__14169 = chunk__14140.cljs$core$IIndexed$_nth$arity$2(null,i__14142);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14169,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15705 = seq__14139;
var G__15706 = chunk__14140;
var G__15707 = count__14141;
var G__15708 = (i__14142 + (1));
seq__14139 = G__15705;
chunk__14140 = G__15706;
count__14141 = G__15707;
i__14142 = G__15708;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14139);
if(temp__5823__auto__){
var seq__14139__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14139__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14139__$1);
var G__15709 = cljs.core.chunk_rest(seq__14139__$1);
var G__15710 = c__5673__auto__;
var G__15711 = cljs.core.count(c__5673__auto__);
var G__15712 = (0);
seq__14139 = G__15709;
chunk__14140 = G__15710;
count__14141 = G__15711;
i__14142 = G__15712;
continue;
} else {
var vec__14189 = cljs.core.first(seq__14139__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14189,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15715 = cljs.core.next(seq__14139__$1);
var G__15716 = null;
var G__15717 = (0);
var G__15718 = (0);
seq__14139 = G__15715;
chunk__14140 = G__15716;
count__14141 = G__15717;
i__14142 = G__15718;
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
var seq__14211 = cljs.core.seq(styles);
var chunk__14212 = null;
var count__14213 = (0);
var i__14214 = (0);
while(true){
if((i__14214 < count__14213)){
var vec__14264 = chunk__14212.cljs$core$IIndexed$_nth$arity$2(null,i__14214);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14264,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14264,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15726 = seq__14211;
var G__15727 = chunk__14212;
var G__15728 = count__14213;
var G__15729 = (i__14214 + (1));
seq__14211 = G__15726;
chunk__14212 = G__15727;
count__14213 = G__15728;
i__14214 = G__15729;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14211);
if(temp__5823__auto__){
var seq__14211__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14211__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14211__$1);
var G__15730 = cljs.core.chunk_rest(seq__14211__$1);
var G__15731 = c__5673__auto__;
var G__15732 = cljs.core.count(c__5673__auto__);
var G__15733 = (0);
seq__14211 = G__15730;
chunk__14212 = G__15731;
count__14213 = G__15732;
i__14214 = G__15733;
continue;
} else {
var vec__14274 = cljs.core.first(seq__14211__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14274,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15736 = cljs.core.next(seq__14211__$1);
var G__15737 = null;
var G__15738 = (0);
var G__15739 = (0);
seq__14211 = G__15736;
chunk__14212 = G__15737;
count__14213 = G__15738;
i__14214 = G__15739;
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
var G__14304_15741 = key;
var G__14304_15742__$1 = (((G__14304_15741 instanceof cljs.core.Keyword))?G__14304_15741.fqn:null);
switch (G__14304_15742__$1) {
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
var ks_15753 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_15753,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_15753,"aria-");
}
})())){
el.setAttribute(ks_15753,value);
} else {
(el[ks_15753] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14373){
var map__14375 = p__14373;
var map__14375__$1 = cljs.core.__destructure_map(map__14375);
var props = map__14375__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14375__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14378 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14381 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14381,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14381;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14398 = arguments.length;
switch (G__14398) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14419){
var vec__14420 = p__14419;
var seq__14421 = cljs.core.seq(vec__14420);
var first__14422 = cljs.core.first(seq__14421);
var seq__14421__$1 = cljs.core.next(seq__14421);
var nn = first__14422;
var first__14422__$1 = cljs.core.first(seq__14421__$1);
var seq__14421__$2 = cljs.core.next(seq__14421__$1);
var np = first__14422__$1;
var nc = seq__14421__$2;
var node = vec__14420;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14427 = nn;
var G__14428 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14427,G__14428) : create_fn.call(null,G__14427,G__14428));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14430 = nn;
var G__14431 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14430,G__14431) : create_fn.call(null,G__14430,G__14431));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14439 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14439,(1),null);
var seq__14442_15787 = cljs.core.seq(node_children);
var chunk__14443_15788 = null;
var count__14444_15789 = (0);
var i__14445_15790 = (0);
while(true){
if((i__14445_15790 < count__14444_15789)){
var child_struct_15791 = chunk__14443_15788.cljs$core$IIndexed$_nth$arity$2(null,i__14445_15790);
var children_15792 = shadow.dom.dom_node(child_struct_15791);
if(cljs.core.seq_QMARK_(children_15792)){
var seq__14529_15793 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15792));
var chunk__14531_15794 = null;
var count__14532_15795 = (0);
var i__14533_15796 = (0);
while(true){
if((i__14533_15796 < count__14532_15795)){
var child_15797 = chunk__14531_15794.cljs$core$IIndexed$_nth$arity$2(null,i__14533_15796);
if(cljs.core.truth_(child_15797)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15797);


var G__15798 = seq__14529_15793;
var G__15799 = chunk__14531_15794;
var G__15800 = count__14532_15795;
var G__15801 = (i__14533_15796 + (1));
seq__14529_15793 = G__15798;
chunk__14531_15794 = G__15799;
count__14532_15795 = G__15800;
i__14533_15796 = G__15801;
continue;
} else {
var G__15802 = seq__14529_15793;
var G__15803 = chunk__14531_15794;
var G__15804 = count__14532_15795;
var G__15805 = (i__14533_15796 + (1));
seq__14529_15793 = G__15802;
chunk__14531_15794 = G__15803;
count__14532_15795 = G__15804;
i__14533_15796 = G__15805;
continue;
}
} else {
var temp__5823__auto___15806 = cljs.core.seq(seq__14529_15793);
if(temp__5823__auto___15806){
var seq__14529_15807__$1 = temp__5823__auto___15806;
if(cljs.core.chunked_seq_QMARK_(seq__14529_15807__$1)){
var c__5673__auto___15808 = cljs.core.chunk_first(seq__14529_15807__$1);
var G__15809 = cljs.core.chunk_rest(seq__14529_15807__$1);
var G__15810 = c__5673__auto___15808;
var G__15811 = cljs.core.count(c__5673__auto___15808);
var G__15812 = (0);
seq__14529_15793 = G__15809;
chunk__14531_15794 = G__15810;
count__14532_15795 = G__15811;
i__14533_15796 = G__15812;
continue;
} else {
var child_15814 = cljs.core.first(seq__14529_15807__$1);
if(cljs.core.truth_(child_15814)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15814);


var G__15819 = cljs.core.next(seq__14529_15807__$1);
var G__15820 = null;
var G__15821 = (0);
var G__15822 = (0);
seq__14529_15793 = G__15819;
chunk__14531_15794 = G__15820;
count__14532_15795 = G__15821;
i__14533_15796 = G__15822;
continue;
} else {
var G__15823 = cljs.core.next(seq__14529_15807__$1);
var G__15824 = null;
var G__15825 = (0);
var G__15826 = (0);
seq__14529_15793 = G__15823;
chunk__14531_15794 = G__15824;
count__14532_15795 = G__15825;
i__14533_15796 = G__15826;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15792);
}


var G__15827 = seq__14442_15787;
var G__15828 = chunk__14443_15788;
var G__15829 = count__14444_15789;
var G__15830 = (i__14445_15790 + (1));
seq__14442_15787 = G__15827;
chunk__14443_15788 = G__15828;
count__14444_15789 = G__15829;
i__14445_15790 = G__15830;
continue;
} else {
var temp__5823__auto___15834 = cljs.core.seq(seq__14442_15787);
if(temp__5823__auto___15834){
var seq__14442_15836__$1 = temp__5823__auto___15834;
if(cljs.core.chunked_seq_QMARK_(seq__14442_15836__$1)){
var c__5673__auto___15837 = cljs.core.chunk_first(seq__14442_15836__$1);
var G__15839 = cljs.core.chunk_rest(seq__14442_15836__$1);
var G__15840 = c__5673__auto___15837;
var G__15841 = cljs.core.count(c__5673__auto___15837);
var G__15842 = (0);
seq__14442_15787 = G__15839;
chunk__14443_15788 = G__15840;
count__14444_15789 = G__15841;
i__14445_15790 = G__15842;
continue;
} else {
var child_struct_15843 = cljs.core.first(seq__14442_15836__$1);
var children_15844 = shadow.dom.dom_node(child_struct_15843);
if(cljs.core.seq_QMARK_(children_15844)){
var seq__14585_15845 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15844));
var chunk__14587_15846 = null;
var count__14588_15847 = (0);
var i__14589_15848 = (0);
while(true){
if((i__14589_15848 < count__14588_15847)){
var child_15853 = chunk__14587_15846.cljs$core$IIndexed$_nth$arity$2(null,i__14589_15848);
if(cljs.core.truth_(child_15853)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15853);


var G__15856 = seq__14585_15845;
var G__15857 = chunk__14587_15846;
var G__15858 = count__14588_15847;
var G__15859 = (i__14589_15848 + (1));
seq__14585_15845 = G__15856;
chunk__14587_15846 = G__15857;
count__14588_15847 = G__15858;
i__14589_15848 = G__15859;
continue;
} else {
var G__15860 = seq__14585_15845;
var G__15861 = chunk__14587_15846;
var G__15862 = count__14588_15847;
var G__15863 = (i__14589_15848 + (1));
seq__14585_15845 = G__15860;
chunk__14587_15846 = G__15861;
count__14588_15847 = G__15862;
i__14589_15848 = G__15863;
continue;
}
} else {
var temp__5823__auto___15864__$1 = cljs.core.seq(seq__14585_15845);
if(temp__5823__auto___15864__$1){
var seq__14585_15865__$1 = temp__5823__auto___15864__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14585_15865__$1)){
var c__5673__auto___15866 = cljs.core.chunk_first(seq__14585_15865__$1);
var G__15868 = cljs.core.chunk_rest(seq__14585_15865__$1);
var G__15869 = c__5673__auto___15866;
var G__15870 = cljs.core.count(c__5673__auto___15866);
var G__15871 = (0);
seq__14585_15845 = G__15868;
chunk__14587_15846 = G__15869;
count__14588_15847 = G__15870;
i__14589_15848 = G__15871;
continue;
} else {
var child_15872 = cljs.core.first(seq__14585_15865__$1);
if(cljs.core.truth_(child_15872)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15872);


var G__15873 = cljs.core.next(seq__14585_15865__$1);
var G__15874 = null;
var G__15875 = (0);
var G__15876 = (0);
seq__14585_15845 = G__15873;
chunk__14587_15846 = G__15874;
count__14588_15847 = G__15875;
i__14589_15848 = G__15876;
continue;
} else {
var G__15877 = cljs.core.next(seq__14585_15865__$1);
var G__15878 = null;
var G__15879 = (0);
var G__15880 = (0);
seq__14585_15845 = G__15877;
chunk__14587_15846 = G__15878;
count__14588_15847 = G__15879;
i__14589_15848 = G__15880;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15844);
}


var G__15881 = cljs.core.next(seq__14442_15836__$1);
var G__15882 = null;
var G__15883 = (0);
var G__15884 = (0);
seq__14442_15787 = G__15881;
chunk__14443_15788 = G__15882;
count__14444_15789 = G__15883;
i__14445_15790 = G__15884;
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
var seq__14612 = cljs.core.seq(node);
var chunk__14613 = null;
var count__14614 = (0);
var i__14615 = (0);
while(true){
if((i__14615 < count__14614)){
var n = chunk__14613.cljs$core$IIndexed$_nth$arity$2(null,i__14615);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15887 = seq__14612;
var G__15888 = chunk__14613;
var G__15889 = count__14614;
var G__15890 = (i__14615 + (1));
seq__14612 = G__15887;
chunk__14613 = G__15888;
count__14614 = G__15889;
i__14615 = G__15890;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14612);
if(temp__5823__auto__){
var seq__14612__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14612__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14612__$1);
var G__15892 = cljs.core.chunk_rest(seq__14612__$1);
var G__15893 = c__5673__auto__;
var G__15894 = cljs.core.count(c__5673__auto__);
var G__15896 = (0);
seq__14612 = G__15892;
chunk__14613 = G__15893;
count__14614 = G__15894;
i__14615 = G__15896;
continue;
} else {
var n = cljs.core.first(seq__14612__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15897 = cljs.core.next(seq__14612__$1);
var G__15898 = null;
var G__15899 = (0);
var G__15900 = (0);
seq__14612 = G__15897;
chunk__14613 = G__15898;
count__14614 = G__15899;
i__14615 = G__15900;
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
var G__14635 = arguments.length;
switch (G__14635) {
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
var G__14657 = arguments.length;
switch (G__14657) {
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
var G__14668 = arguments.length;
switch (G__14668) {
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
var len__5876__auto___15928 = arguments.length;
var i__5877__auto___15929 = (0);
while(true){
if((i__5877__auto___15929 < len__5876__auto___15928)){
args__5882__auto__.push((arguments[i__5877__auto___15929]));

var G__15934 = (i__5877__auto___15929 + (1));
i__5877__auto___15929 = G__15934;
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
var seq__14715_15938 = cljs.core.seq(nodes);
var chunk__14717_15939 = null;
var count__14718_15940 = (0);
var i__14719_15941 = (0);
while(true){
if((i__14719_15941 < count__14718_15940)){
var node_15945 = chunk__14717_15939.cljs$core$IIndexed$_nth$arity$2(null,i__14719_15941);
fragment.appendChild(shadow.dom._to_dom(node_15945));


var G__15951 = seq__14715_15938;
var G__15952 = chunk__14717_15939;
var G__15953 = count__14718_15940;
var G__15954 = (i__14719_15941 + (1));
seq__14715_15938 = G__15951;
chunk__14717_15939 = G__15952;
count__14718_15940 = G__15953;
i__14719_15941 = G__15954;
continue;
} else {
var temp__5823__auto___15956 = cljs.core.seq(seq__14715_15938);
if(temp__5823__auto___15956){
var seq__14715_15958__$1 = temp__5823__auto___15956;
if(cljs.core.chunked_seq_QMARK_(seq__14715_15958__$1)){
var c__5673__auto___15959 = cljs.core.chunk_first(seq__14715_15958__$1);
var G__15960 = cljs.core.chunk_rest(seq__14715_15958__$1);
var G__15961 = c__5673__auto___15959;
var G__15962 = cljs.core.count(c__5673__auto___15959);
var G__15963 = (0);
seq__14715_15938 = G__15960;
chunk__14717_15939 = G__15961;
count__14718_15940 = G__15962;
i__14719_15941 = G__15963;
continue;
} else {
var node_15964 = cljs.core.first(seq__14715_15958__$1);
fragment.appendChild(shadow.dom._to_dom(node_15964));


var G__15966 = cljs.core.next(seq__14715_15958__$1);
var G__15967 = null;
var G__15968 = (0);
var G__15969 = (0);
seq__14715_15938 = G__15966;
chunk__14717_15939 = G__15967;
count__14718_15940 = G__15968;
i__14719_15941 = G__15969;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14701){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14701));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14790_15974 = cljs.core.seq(scripts);
var chunk__14791_15975 = null;
var count__14792_15976 = (0);
var i__14793_15977 = (0);
while(true){
if((i__14793_15977 < count__14792_15976)){
var vec__14825_15978 = chunk__14791_15975.cljs$core$IIndexed$_nth$arity$2(null,i__14793_15977);
var script_tag_15979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825_15978,(0),null);
var script_body_15980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14825_15978,(1),null);
eval(script_body_15980);


var G__15982 = seq__14790_15974;
var G__15983 = chunk__14791_15975;
var G__15984 = count__14792_15976;
var G__15985 = (i__14793_15977 + (1));
seq__14790_15974 = G__15982;
chunk__14791_15975 = G__15983;
count__14792_15976 = G__15984;
i__14793_15977 = G__15985;
continue;
} else {
var temp__5823__auto___15986 = cljs.core.seq(seq__14790_15974);
if(temp__5823__auto___15986){
var seq__14790_15987__$1 = temp__5823__auto___15986;
if(cljs.core.chunked_seq_QMARK_(seq__14790_15987__$1)){
var c__5673__auto___15988 = cljs.core.chunk_first(seq__14790_15987__$1);
var G__15989 = cljs.core.chunk_rest(seq__14790_15987__$1);
var G__15990 = c__5673__auto___15988;
var G__15991 = cljs.core.count(c__5673__auto___15988);
var G__15992 = (0);
seq__14790_15974 = G__15989;
chunk__14791_15975 = G__15990;
count__14792_15976 = G__15991;
i__14793_15977 = G__15992;
continue;
} else {
var vec__14843_15994 = cljs.core.first(seq__14790_15987__$1);
var script_tag_15995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14843_15994,(0),null);
var script_body_15996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14843_15994,(1),null);
eval(script_body_15996);


var G__16000 = cljs.core.next(seq__14790_15987__$1);
var G__16001 = null;
var G__16002 = (0);
var G__16003 = (0);
seq__14790_15974 = G__16000;
chunk__14791_15975 = G__16001;
count__14792_15976 = G__16002;
i__14793_15977 = G__16003;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14848){
var vec__14852 = p__14848;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14852,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14852,(1),null);
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
var G__14880 = arguments.length;
switch (G__14880) {
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
var seq__14920 = cljs.core.seq(style_keys);
var chunk__14921 = null;
var count__14922 = (0);
var i__14923 = (0);
while(true){
if((i__14923 < count__14922)){
var it = chunk__14921.cljs$core$IIndexed$_nth$arity$2(null,i__14923);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16017 = seq__14920;
var G__16018 = chunk__14921;
var G__16019 = count__14922;
var G__16020 = (i__14923 + (1));
seq__14920 = G__16017;
chunk__14921 = G__16018;
count__14922 = G__16019;
i__14923 = G__16020;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14920);
if(temp__5823__auto__){
var seq__14920__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14920__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14920__$1);
var G__16025 = cljs.core.chunk_rest(seq__14920__$1);
var G__16026 = c__5673__auto__;
var G__16027 = cljs.core.count(c__5673__auto__);
var G__16028 = (0);
seq__14920 = G__16025;
chunk__14921 = G__16026;
count__14922 = G__16027;
i__14923 = G__16028;
continue;
} else {
var it = cljs.core.first(seq__14920__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16030 = cljs.core.next(seq__14920__$1);
var G__16031 = null;
var G__16032 = (0);
var G__16033 = (0);
seq__14920 = G__16030;
chunk__14921 = G__16031;
count__14922 = G__16032;
i__14923 = G__16033;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14940,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14956 = k14940;
var G__14956__$1 = (((G__14956 instanceof cljs.core.Keyword))?G__14956.fqn:null);
switch (G__14956__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14940,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14968){
var vec__14971 = p__14968;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14971,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14971,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14939){
var self__ = this;
var G__14939__$1 = this;
return (new cljs.core.RecordIter((0),G__14939__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14941,other14942){
var self__ = this;
var this14941__$1 = this;
return (((!((other14942 == null)))) && ((((this14941__$1.constructor === other14942.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14941__$1.x,other14942.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14941__$1.y,other14942.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14941__$1.__extmap,other14942.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14940){
var self__ = this;
var this__5455__auto____$1 = this;
var G__15033 = k14940;
var G__15033__$1 = (((G__15033 instanceof cljs.core.Keyword))?G__15033.fqn:null);
switch (G__15033__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14940);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14939){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__15038 = cljs.core.keyword_identical_QMARK_;
var expr__15039 = k__5457__auto__;
if(cljs.core.truth_((pred__15038.cljs$core$IFn$_invoke$arity$2 ? pred__15038.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15039) : pred__15038.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15039)))){
return (new shadow.dom.Coordinate(G__14939,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15038.cljs$core$IFn$_invoke$arity$2 ? pred__15038.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15039) : pred__15038.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15039)))){
return (new shadow.dom.Coordinate(self__.x,G__14939,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14939),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14939){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14939,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14945){
var extmap__5490__auto__ = (function (){var G__15068 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14945,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14945)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15068);
} else {
return G__15068;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14945),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14945),null,cljs.core.not_empty(extmap__5490__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k15092,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__15121 = k15092;
var G__15121__$1 = (((G__15121 instanceof cljs.core.Keyword))?G__15121.fqn:null);
switch (G__15121__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15092,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__15129){
var vec__15130 = p__15129;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15130,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15130,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15091){
var self__ = this;
var G__15091__$1 = this;
return (new cljs.core.RecordIter((0),G__15091__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15093,other15094){
var self__ = this;
var this15093__$1 = this;
return (((!((other15094 == null)))) && ((((this15093__$1.constructor === other15094.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15093__$1.w,other15094.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15093__$1.h,other15094.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15093__$1.__extmap,other15094.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k15092){
var self__ = this;
var this__5455__auto____$1 = this;
var G__15204 = k15092;
var G__15204__$1 = (((G__15204 instanceof cljs.core.Keyword))?G__15204.fqn:null);
switch (G__15204__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15092);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__15091){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__15206 = cljs.core.keyword_identical_QMARK_;
var expr__15207 = k__5457__auto__;
if(cljs.core.truth_((pred__15206.cljs$core$IFn$_invoke$arity$2 ? pred__15206.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15207) : pred__15206.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15207)))){
return (new shadow.dom.Size(G__15091,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15206.cljs$core$IFn$_invoke$arity$2 ? pred__15206.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15207) : pred__15206.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15207)))){
return (new shadow.dom.Size(self__.w,G__15091,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__15091),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__15091){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15091,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15097){
var extmap__5490__auto__ = (function (){var G__15233 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15097,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15097)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15233);
} else {
return G__15233;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15097),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15097),null,cljs.core.not_empty(extmap__5490__auto__),null));
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
var G__16191 = (i + (1));
var G__16192 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16191;
ret = G__16192;
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
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15268){
var vec__15270 = p__15268;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15270,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15279 = arguments.length;
switch (G__15279) {
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
var G__16216 = ps;
var G__16217 = (i + (1));
el__$1 = G__16216;
i = G__16217;
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
var vec__15349 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15349,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15349,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15349,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15371_16233 = cljs.core.seq(props);
var chunk__15372_16234 = null;
var count__15373_16235 = (0);
var i__15374_16236 = (0);
while(true){
if((i__15374_16236 < count__15373_16235)){
var vec__15404_16240 = chunk__15372_16234.cljs$core$IIndexed$_nth$arity$2(null,i__15374_16236);
var k_16241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15404_16240,(0),null);
var v_16242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15404_16240,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_16241);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16241),v_16242);


var G__16252 = seq__15371_16233;
var G__16253 = chunk__15372_16234;
var G__16254 = count__15373_16235;
var G__16255 = (i__15374_16236 + (1));
seq__15371_16233 = G__16252;
chunk__15372_16234 = G__16253;
count__15373_16235 = G__16254;
i__15374_16236 = G__16255;
continue;
} else {
var temp__5823__auto___16257 = cljs.core.seq(seq__15371_16233);
if(temp__5823__auto___16257){
var seq__15371_16262__$1 = temp__5823__auto___16257;
if(cljs.core.chunked_seq_QMARK_(seq__15371_16262__$1)){
var c__5673__auto___16267 = cljs.core.chunk_first(seq__15371_16262__$1);
var G__16271 = cljs.core.chunk_rest(seq__15371_16262__$1);
var G__16272 = c__5673__auto___16267;
var G__16274 = cljs.core.count(c__5673__auto___16267);
var G__16275 = (0);
seq__15371_16233 = G__16271;
chunk__15372_16234 = G__16272;
count__15373_16235 = G__16274;
i__15374_16236 = G__16275;
continue;
} else {
var vec__15410_16276 = cljs.core.first(seq__15371_16262__$1);
var k_16277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15410_16276,(0),null);
var v_16278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15410_16276,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_16277);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16277),v_16278);


var G__16285 = cljs.core.next(seq__15371_16262__$1);
var G__16286 = null;
var G__16287 = (0);
var G__16288 = (0);
seq__15371_16233 = G__16285;
chunk__15372_16234 = G__16286;
count__15373_16235 = G__16287;
i__15374_16236 = G__16288;
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
var vec__15429 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15429,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15429,(1),null);
var seq__15433_16289 = cljs.core.seq(node_children);
var chunk__15435_16290 = null;
var count__15436_16291 = (0);
var i__15437_16292 = (0);
while(true){
if((i__15437_16292 < count__15436_16291)){
var child_struct_16293 = chunk__15435_16290.cljs$core$IIndexed$_nth$arity$2(null,i__15437_16292);
if((!((child_struct_16293 == null)))){
if(typeof child_struct_16293 === 'string'){
var text_16296 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16296)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16293)));
} else {
var children_16297 = shadow.dom.svg_node(child_struct_16293);
if(cljs.core.seq_QMARK_(children_16297)){
var seq__15491_16298 = cljs.core.seq(children_16297);
var chunk__15493_16299 = null;
var count__15494_16300 = (0);
var i__15495_16301 = (0);
while(true){
if((i__15495_16301 < count__15494_16300)){
var child_16303 = chunk__15493_16299.cljs$core$IIndexed$_nth$arity$2(null,i__15495_16301);
if(cljs.core.truth_(child_16303)){
node.appendChild(child_16303);


var G__16305 = seq__15491_16298;
var G__16306 = chunk__15493_16299;
var G__16307 = count__15494_16300;
var G__16308 = (i__15495_16301 + (1));
seq__15491_16298 = G__16305;
chunk__15493_16299 = G__16306;
count__15494_16300 = G__16307;
i__15495_16301 = G__16308;
continue;
} else {
var G__16310 = seq__15491_16298;
var G__16311 = chunk__15493_16299;
var G__16312 = count__15494_16300;
var G__16313 = (i__15495_16301 + (1));
seq__15491_16298 = G__16310;
chunk__15493_16299 = G__16311;
count__15494_16300 = G__16312;
i__15495_16301 = G__16313;
continue;
}
} else {
var temp__5823__auto___16314 = cljs.core.seq(seq__15491_16298);
if(temp__5823__auto___16314){
var seq__15491_16315__$1 = temp__5823__auto___16314;
if(cljs.core.chunked_seq_QMARK_(seq__15491_16315__$1)){
var c__5673__auto___16317 = cljs.core.chunk_first(seq__15491_16315__$1);
var G__16318 = cljs.core.chunk_rest(seq__15491_16315__$1);
var G__16319 = c__5673__auto___16317;
var G__16320 = cljs.core.count(c__5673__auto___16317);
var G__16321 = (0);
seq__15491_16298 = G__16318;
chunk__15493_16299 = G__16319;
count__15494_16300 = G__16320;
i__15495_16301 = G__16321;
continue;
} else {
var child_16322 = cljs.core.first(seq__15491_16315__$1);
if(cljs.core.truth_(child_16322)){
node.appendChild(child_16322);


var G__16324 = cljs.core.next(seq__15491_16315__$1);
var G__16325 = null;
var G__16326 = (0);
var G__16327 = (0);
seq__15491_16298 = G__16324;
chunk__15493_16299 = G__16325;
count__15494_16300 = G__16326;
i__15495_16301 = G__16327;
continue;
} else {
var G__16329 = cljs.core.next(seq__15491_16315__$1);
var G__16330 = null;
var G__16331 = (0);
var G__16332 = (0);
seq__15491_16298 = G__16329;
chunk__15493_16299 = G__16330;
count__15494_16300 = G__16331;
i__15495_16301 = G__16332;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16297);
}
}


var G__16333 = seq__15433_16289;
var G__16334 = chunk__15435_16290;
var G__16335 = count__15436_16291;
var G__16336 = (i__15437_16292 + (1));
seq__15433_16289 = G__16333;
chunk__15435_16290 = G__16334;
count__15436_16291 = G__16335;
i__15437_16292 = G__16336;
continue;
} else {
var G__16337 = seq__15433_16289;
var G__16338 = chunk__15435_16290;
var G__16339 = count__15436_16291;
var G__16340 = (i__15437_16292 + (1));
seq__15433_16289 = G__16337;
chunk__15435_16290 = G__16338;
count__15436_16291 = G__16339;
i__15437_16292 = G__16340;
continue;
}
} else {
var temp__5823__auto___16341 = cljs.core.seq(seq__15433_16289);
if(temp__5823__auto___16341){
var seq__15433_16342__$1 = temp__5823__auto___16341;
if(cljs.core.chunked_seq_QMARK_(seq__15433_16342__$1)){
var c__5673__auto___16343 = cljs.core.chunk_first(seq__15433_16342__$1);
var G__16344 = cljs.core.chunk_rest(seq__15433_16342__$1);
var G__16345 = c__5673__auto___16343;
var G__16346 = cljs.core.count(c__5673__auto___16343);
var G__16347 = (0);
seq__15433_16289 = G__16344;
chunk__15435_16290 = G__16345;
count__15436_16291 = G__16346;
i__15437_16292 = G__16347;
continue;
} else {
var child_struct_16348 = cljs.core.first(seq__15433_16342__$1);
if((!((child_struct_16348 == null)))){
if(typeof child_struct_16348 === 'string'){
var text_16351 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16351)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16348)));
} else {
var children_16352 = shadow.dom.svg_node(child_struct_16348);
if(cljs.core.seq_QMARK_(children_16352)){
var seq__15513_16353 = cljs.core.seq(children_16352);
var chunk__15515_16354 = null;
var count__15516_16355 = (0);
var i__15517_16356 = (0);
while(true){
if((i__15517_16356 < count__15516_16355)){
var child_16357 = chunk__15515_16354.cljs$core$IIndexed$_nth$arity$2(null,i__15517_16356);
if(cljs.core.truth_(child_16357)){
node.appendChild(child_16357);


var G__16358 = seq__15513_16353;
var G__16359 = chunk__15515_16354;
var G__16360 = count__15516_16355;
var G__16361 = (i__15517_16356 + (1));
seq__15513_16353 = G__16358;
chunk__15515_16354 = G__16359;
count__15516_16355 = G__16360;
i__15517_16356 = G__16361;
continue;
} else {
var G__16363 = seq__15513_16353;
var G__16364 = chunk__15515_16354;
var G__16365 = count__15516_16355;
var G__16366 = (i__15517_16356 + (1));
seq__15513_16353 = G__16363;
chunk__15515_16354 = G__16364;
count__15516_16355 = G__16365;
i__15517_16356 = G__16366;
continue;
}
} else {
var temp__5823__auto___16367__$1 = cljs.core.seq(seq__15513_16353);
if(temp__5823__auto___16367__$1){
var seq__15513_16368__$1 = temp__5823__auto___16367__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15513_16368__$1)){
var c__5673__auto___16369 = cljs.core.chunk_first(seq__15513_16368__$1);
var G__16370 = cljs.core.chunk_rest(seq__15513_16368__$1);
var G__16371 = c__5673__auto___16369;
var G__16372 = cljs.core.count(c__5673__auto___16369);
var G__16373 = (0);
seq__15513_16353 = G__16370;
chunk__15515_16354 = G__16371;
count__15516_16355 = G__16372;
i__15517_16356 = G__16373;
continue;
} else {
var child_16374 = cljs.core.first(seq__15513_16368__$1);
if(cljs.core.truth_(child_16374)){
node.appendChild(child_16374);


var G__16376 = cljs.core.next(seq__15513_16368__$1);
var G__16377 = null;
var G__16378 = (0);
var G__16379 = (0);
seq__15513_16353 = G__16376;
chunk__15515_16354 = G__16377;
count__15516_16355 = G__16378;
i__15517_16356 = G__16379;
continue;
} else {
var G__16380 = cljs.core.next(seq__15513_16368__$1);
var G__16381 = null;
var G__16382 = (0);
var G__16383 = (0);
seq__15513_16353 = G__16380;
chunk__15515_16354 = G__16381;
count__15516_16355 = G__16382;
i__15517_16356 = G__16383;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16352);
}
}


var G__16384 = cljs.core.next(seq__15433_16342__$1);
var G__16386 = null;
var G__16387 = (0);
var G__16388 = (0);
seq__15433_16289 = G__16384;
chunk__15435_16290 = G__16386;
count__15436_16291 = G__16387;
i__15437_16292 = G__16388;
continue;
} else {
var G__16390 = cljs.core.next(seq__15433_16342__$1);
var G__16391 = null;
var G__16392 = (0);
var G__16393 = (0);
seq__15433_16289 = G__16390;
chunk__15435_16290 = G__16391;
count__15436_16291 = G__16392;
i__15437_16292 = G__16393;
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
var len__5876__auto___16403 = arguments.length;
var i__5877__auto___16404 = (0);
while(true){
if((i__5877__auto___16404 < len__5876__auto___16403)){
args__5882__auto__.push((arguments[i__5877__auto___16404]));

var G__16405 = (i__5877__auto___16404 + (1));
i__5877__auto___16404 = G__16405;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15551){
var G__15552 = cljs.core.first(seq15551);
var seq15551__$1 = cljs.core.next(seq15551);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15552,seq15551__$1);
}));


//# sourceMappingURL=shadow.dom.js.map

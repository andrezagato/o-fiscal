goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14406 = (function (f,blockable,meta14407){
this.f = f;
this.blockable = blockable;
this.meta14407 = meta14407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14408,meta14407__$1){
var self__ = this;
var _14408__$1 = this;
return (new cljs.core.async.t_cljs$core$async14406(self__.f,self__.blockable,meta14407__$1));
}));

(cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14408){
var self__ = this;
var _14408__$1 = this;
return self__.meta14407;
}));

(cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14407","meta14407",920379987,null)], null);
}));

(cljs.core.async.t_cljs$core$async14406.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14406.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14406");

(cljs.core.async.t_cljs$core$async14406.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14406");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14406.
 */
cljs.core.async.__GT_t_cljs$core$async14406 = (function cljs$core$async$__GT_t_cljs$core$async14406(f,blockable,meta14407){
return (new cljs.core.async.t_cljs$core$async14406(f,blockable,meta14407));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14403 = arguments.length;
switch (G__14403) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14406(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14445 = arguments.length;
switch (G__14445) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14453 = arguments.length;
switch (G__14453) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14460 = arguments.length;
switch (G__14460) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17489 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17489) : fn1.call(null,val_17489));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17489) : fn1.call(null,val_17489));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14483 = arguments.length;
switch (G__14483) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___17495 = n;
var x_17496 = (0);
while(true){
if((x_17496 < n__5741__auto___17495)){
(a[x_17496] = x_17496);

var G__17497 = (x_17496 + (1));
x_17496 = G__17497;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14493 = (function (flag,meta14494){
this.flag = flag;
this.meta14494 = meta14494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14495,meta14494__$1){
var self__ = this;
var _14495__$1 = this;
return (new cljs.core.async.t_cljs$core$async14493(self__.flag,meta14494__$1));
}));

(cljs.core.async.t_cljs$core$async14493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14495){
var self__ = this;
var _14495__$1 = this;
return self__.meta14494;
}));

(cljs.core.async.t_cljs$core$async14493.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14493.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14494","meta14494",-1214888322,null)], null);
}));

(cljs.core.async.t_cljs$core$async14493.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14493");

(cljs.core.async.t_cljs$core$async14493.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14493");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14493.
 */
cljs.core.async.__GT_t_cljs$core$async14493 = (function cljs$core$async$__GT_t_cljs$core$async14493(flag,meta14494){
return (new cljs.core.async.t_cljs$core$async14493(flag,meta14494));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14493(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14503 = (function (flag,cb,meta14504){
this.flag = flag;
this.cb = cb;
this.meta14504 = meta14504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14505,meta14504__$1){
var self__ = this;
var _14505__$1 = this;
return (new cljs.core.async.t_cljs$core$async14503(self__.flag,self__.cb,meta14504__$1));
}));

(cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14505){
var self__ = this;
var _14505__$1 = this;
return self__.meta14504;
}));

(cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14504","meta14504",2001686167,null)], null);
}));

(cljs.core.async.t_cljs$core$async14503.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14503");

(cljs.core.async.t_cljs$core$async14503.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14503");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14503.
 */
cljs.core.async.__GT_t_cljs$core$async14503 = (function cljs$core$async$__GT_t_cljs$core$async14503(flag,cb,meta14504){
return (new cljs.core.async.t_cljs$core$async14503(flag,cb,meta14504));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14503(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_17504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_17504)){
if((!(((port_17504.cljs$core$IFn$_invoke$arity$1 ? port_17504.cljs$core$IFn$_invoke$arity$1((1)) : port_17504.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__17508 = (i + (1));
i = G__17508;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14517_SHARP_){
var G__14526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14517_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14526) : fret.call(null,G__14526));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14518_SHARP_){
var G__14528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14518_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14528) : fret.call(null,G__14528));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17510 = (i + (1));
i = G__17510;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17512 = arguments.length;
var i__5877__auto___17513 = (0);
while(true){
if((i__5877__auto___17513 < len__5876__auto___17512)){
args__5882__auto__.push((arguments[i__5877__auto___17513]));

var G__17514 = (i__5877__auto___17513 + (1));
i__5877__auto___17513 = G__17514;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14547){
var map__14548 = p__14547;
var map__14548__$1 = cljs.core.__destructure_map(map__14548);
var opts = map__14548__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14542){
var G__14543 = cljs.core.first(seq14542);
var seq14542__$1 = cljs.core.next(seq14542);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14543,seq14542__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14581 = arguments.length;
switch (G__14581) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14321__auto___17527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_14633){
var state_val_14634 = (state_14633[(1)]);
if((state_val_14634 === (7))){
var inst_14623 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14668_17534 = state_14633__$1;
(statearr_14668_17534[(2)] = inst_14623);

(statearr_14668_17534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (1))){
var state_14633__$1 = state_14633;
var statearr_14671_17535 = state_14633__$1;
(statearr_14671_17535[(2)] = null);

(statearr_14671_17535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (4))){
var inst_14600 = (state_14633[(7)]);
var inst_14600__$1 = (state_14633[(2)]);
var inst_14604 = (inst_14600__$1 == null);
var state_14633__$1 = (function (){var statearr_14682 = state_14633;
(statearr_14682[(7)] = inst_14600__$1);

return statearr_14682;
})();
if(cljs.core.truth_(inst_14604)){
var statearr_14683_17537 = state_14633__$1;
(statearr_14683_17537[(1)] = (5));

} else {
var statearr_14684_17540 = state_14633__$1;
(statearr_14684_17540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (13))){
var state_14633__$1 = state_14633;
var statearr_14685_17542 = state_14633__$1;
(statearr_14685_17542[(2)] = null);

(statearr_14685_17542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (6))){
var inst_14600 = (state_14633[(7)]);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14633__$1,(11),to,inst_14600);
} else {
if((state_val_14634 === (3))){
var inst_14626 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14633__$1,inst_14626);
} else {
if((state_val_14634 === (12))){
var state_14633__$1 = state_14633;
var statearr_14693_17557 = state_14633__$1;
(statearr_14693_17557[(2)] = null);

(statearr_14693_17557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (2))){
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14633__$1,(4),from);
} else {
if((state_val_14634 === (11))){
var inst_14616 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14616)){
var statearr_14702_17558 = state_14633__$1;
(statearr_14702_17558[(1)] = (12));

} else {
var statearr_14704_17566 = state_14633__$1;
(statearr_14704_17566[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (9))){
var state_14633__$1 = state_14633;
var statearr_14710_17568 = state_14633__$1;
(statearr_14710_17568[(2)] = null);

(statearr_14710_17568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (5))){
var state_14633__$1 = state_14633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14717_17569 = state_14633__$1;
(statearr_14717_17569[(1)] = (8));

} else {
var statearr_14721_17571 = state_14633__$1;
(statearr_14721_17571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (14))){
var inst_14621 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14726_17573 = state_14633__$1;
(statearr_14726_17573[(2)] = inst_14621);

(statearr_14726_17573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (10))){
var inst_14612 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14728_17575 = state_14633__$1;
(statearr_14728_17575[(2)] = inst_14612);

(statearr_14728_17575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (8))){
var inst_14608 = cljs.core.async.close_BANG_(to);
var state_14633__$1 = state_14633;
var statearr_14731_17590 = state_14633__$1;
(statearr_14731_17590[(2)] = inst_14608);

(statearr_14731_17590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_14740 = [null,null,null,null,null,null,null,null];
(statearr_14740[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_14740[(1)] = (1));

return statearr_14740;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_14633){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_14633);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e14742){var ex__14015__auto__ = e14742;
var statearr_14747_17597 = state_14633;
(statearr_14747_17597[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_14633[(4)]))){
var statearr_14749_17598 = state_14633;
(statearr_14749_17598[(1)] = cljs.core.first((state_14633[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17599 = state_14633;
state_14633 = G__17599;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_14633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_14633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_14767 = f__14322__auto__();
(statearr_14767[(6)] = c__14321__auto___17527);

return statearr_14767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14778){
var vec__14781 = p__14778;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14781,(1),null);
var job = vec__14781;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14321__auto___17605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_14791){
var state_val_14792 = (state_14791[(1)]);
if((state_val_14792 === (1))){
var state_14791__$1 = state_14791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14791__$1,(2),res,v);
} else {
if((state_val_14792 === (2))){
var inst_14788 = (state_14791[(2)]);
var inst_14789 = cljs.core.async.close_BANG_(res);
var state_14791__$1 = (function (){var statearr_14795 = state_14791;
(statearr_14795[(7)] = inst_14788);

return statearr_14795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14791__$1,inst_14789);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0 = (function (){
var statearr_14800 = [null,null,null,null,null,null,null,null];
(statearr_14800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__);

(statearr_14800[(1)] = (1));

return statearr_14800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1 = (function (state_14791){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_14791);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e14802){var ex__14015__auto__ = e14802;
var statearr_14803_17607 = state_14791;
(statearr_14803_17607[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_14791[(4)]))){
var statearr_14806_17608 = state_14791;
(statearr_14806_17608[(1)] = cljs.core.first((state_14791[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17609 = state_14791;
state_14791 = G__17609;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__ = function(state_14791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1.call(this,state_14791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_14808 = f__14322__auto__();
(statearr_14808[(6)] = c__14321__auto___17605);

return statearr_14808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14810){
var vec__14811 = p__14810;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(1),null);
var job = vec__14811;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___17614 = n;
var __17615 = (0);
while(true){
if((__17615 < n__5741__auto___17614)){
var G__14817_17616 = type;
var G__14817_17617__$1 = (((G__14817_17616 instanceof cljs.core.Keyword))?G__14817_17616.fqn:null);
switch (G__14817_17617__$1) {
case "compute":
var c__14321__auto___17619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17615,c__14321__auto___17619,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async){
return (function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = ((function (__17615,c__14321__auto___17619,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async){
return (function (state_14837){
var state_val_14838 = (state_14837[(1)]);
if((state_val_14838 === (1))){
var state_14837__$1 = state_14837;
var statearr_14845_17620 = state_14837__$1;
(statearr_14845_17620[(2)] = null);

(statearr_14845_17620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (2))){
var state_14837__$1 = state_14837;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14837__$1,(4),jobs);
} else {
if((state_val_14838 === (3))){
var inst_14835 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14837__$1,inst_14835);
} else {
if((state_val_14838 === (4))){
var inst_14827 = (state_14837[(2)]);
var inst_14828 = process__$1(inst_14827);
var state_14837__$1 = state_14837;
if(cljs.core.truth_(inst_14828)){
var statearr_14851_17624 = state_14837__$1;
(statearr_14851_17624[(1)] = (5));

} else {
var statearr_14852_17625 = state_14837__$1;
(statearr_14852_17625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (5))){
var state_14837__$1 = state_14837;
var statearr_14853_17638 = state_14837__$1;
(statearr_14853_17638[(2)] = null);

(statearr_14853_17638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (6))){
var state_14837__$1 = state_14837;
var statearr_14854_17641 = state_14837__$1;
(statearr_14854_17641[(2)] = null);

(statearr_14854_17641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14838 === (7))){
var inst_14833 = (state_14837[(2)]);
var state_14837__$1 = state_14837;
var statearr_14858_17644 = state_14837__$1;
(statearr_14858_17644[(2)] = inst_14833);

(statearr_14858_17644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17615,c__14321__auto___17619,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async))
;
return ((function (__17615,switch__14010__auto__,c__14321__auto___17619,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0 = (function (){
var statearr_14860 = [null,null,null,null,null,null,null];
(statearr_14860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__);

(statearr_14860[(1)] = (1));

return statearr_14860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1 = (function (state_14837){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_14837);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e14862){var ex__14015__auto__ = e14862;
var statearr_14863_17645 = state_14837;
(statearr_14863_17645[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_14837[(4)]))){
var statearr_14864_17646 = state_14837;
(statearr_14864_17646[(1)] = cljs.core.first((state_14837[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17647 = state_14837;
state_14837 = G__17647;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__ = function(state_14837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1.call(this,state_14837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__;
})()
;})(__17615,switch__14010__auto__,c__14321__auto___17619,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async))
})();
var state__14323__auto__ = (function (){var statearr_14871 = f__14322__auto__();
(statearr_14871[(6)] = c__14321__auto___17619);

return statearr_14871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
});})(__17615,c__14321__auto___17619,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async))
);


break;
case "async":
var c__14321__auto___17648 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17615,c__14321__auto___17648,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async){
return (function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = ((function (__17615,c__14321__auto___17648,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async){
return (function (state_14893){
var state_val_14894 = (state_14893[(1)]);
if((state_val_14894 === (1))){
var state_14893__$1 = state_14893;
var statearr_14900_17652 = state_14893__$1;
(statearr_14900_17652[(2)] = null);

(statearr_14900_17652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (2))){
var state_14893__$1 = state_14893;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14893__$1,(4),jobs);
} else {
if((state_val_14894 === (3))){
var inst_14891 = (state_14893[(2)]);
var state_14893__$1 = state_14893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14893__$1,inst_14891);
} else {
if((state_val_14894 === (4))){
var inst_14877 = (state_14893[(2)]);
var inst_14883 = async(inst_14877);
var state_14893__$1 = state_14893;
if(cljs.core.truth_(inst_14883)){
var statearr_14911_17653 = state_14893__$1;
(statearr_14911_17653[(1)] = (5));

} else {
var statearr_14912_17654 = state_14893__$1;
(statearr_14912_17654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (5))){
var state_14893__$1 = state_14893;
var statearr_14913_17655 = state_14893__$1;
(statearr_14913_17655[(2)] = null);

(statearr_14913_17655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (6))){
var state_14893__$1 = state_14893;
var statearr_14915_17657 = state_14893__$1;
(statearr_14915_17657[(2)] = null);

(statearr_14915_17657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14894 === (7))){
var inst_14889 = (state_14893[(2)]);
var state_14893__$1 = state_14893;
var statearr_14919_17658 = state_14893__$1;
(statearr_14919_17658[(2)] = inst_14889);

(statearr_14919_17658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17615,c__14321__auto___17648,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async))
;
return ((function (__17615,switch__14010__auto__,c__14321__auto___17648,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0 = (function (){
var statearr_14929 = [null,null,null,null,null,null,null];
(statearr_14929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__);

(statearr_14929[(1)] = (1));

return statearr_14929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1 = (function (state_14893){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_14893);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e14930){var ex__14015__auto__ = e14930;
var statearr_14931_17659 = state_14893;
(statearr_14931_17659[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_14893[(4)]))){
var statearr_14932_17660 = state_14893;
(statearr_14932_17660[(1)] = cljs.core.first((state_14893[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17661 = state_14893;
state_14893 = G__17661;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__ = function(state_14893){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1.call(this,state_14893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__;
})()
;})(__17615,switch__14010__auto__,c__14321__auto___17648,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async))
})();
var state__14323__auto__ = (function (){var statearr_14933 = f__14322__auto__();
(statearr_14933[(6)] = c__14321__auto___17648);

return statearr_14933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
});})(__17615,c__14321__auto___17648,G__14817_17616,G__14817_17617__$1,n__5741__auto___17614,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14817_17617__$1))));

}

var G__17662 = (__17615 + (1));
__17615 = G__17662;
continue;
} else {
}
break;
}

var c__14321__auto___17663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_14956){
var state_val_14958 = (state_14956[(1)]);
if((state_val_14958 === (7))){
var inst_14952 = (state_14956[(2)]);
var state_14956__$1 = state_14956;
var statearr_14970_17668 = state_14956__$1;
(statearr_14970_17668[(2)] = inst_14952);

(statearr_14970_17668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (1))){
var state_14956__$1 = state_14956;
var statearr_14971_17669 = state_14956__$1;
(statearr_14971_17669[(2)] = null);

(statearr_14971_17669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (4))){
var inst_14936 = (state_14956[(7)]);
var inst_14936__$1 = (state_14956[(2)]);
var inst_14937 = (inst_14936__$1 == null);
var state_14956__$1 = (function (){var statearr_14972 = state_14956;
(statearr_14972[(7)] = inst_14936__$1);

return statearr_14972;
})();
if(cljs.core.truth_(inst_14937)){
var statearr_14974_17672 = state_14956__$1;
(statearr_14974_17672[(1)] = (5));

} else {
var statearr_14975_17673 = state_14956__$1;
(statearr_14975_17673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (6))){
var inst_14936 = (state_14956[(7)]);
var inst_14942 = (state_14956[(8)]);
var inst_14942__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14943 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14944 = [inst_14936,inst_14942__$1];
var inst_14945 = (new cljs.core.PersistentVector(null,2,(5),inst_14943,inst_14944,null));
var state_14956__$1 = (function (){var statearr_14976 = state_14956;
(statearr_14976[(8)] = inst_14942__$1);

return statearr_14976;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14956__$1,(8),jobs,inst_14945);
} else {
if((state_val_14958 === (3))){
var inst_14954 = (state_14956[(2)]);
var state_14956__$1 = state_14956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14956__$1,inst_14954);
} else {
if((state_val_14958 === (2))){
var state_14956__$1 = state_14956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14956__$1,(4),from);
} else {
if((state_val_14958 === (9))){
var inst_14949 = (state_14956[(2)]);
var state_14956__$1 = (function (){var statearr_14979 = state_14956;
(statearr_14979[(9)] = inst_14949);

return statearr_14979;
})();
var statearr_14980_17680 = state_14956__$1;
(statearr_14980_17680[(2)] = null);

(statearr_14980_17680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (5))){
var inst_14940 = cljs.core.async.close_BANG_(jobs);
var state_14956__$1 = state_14956;
var statearr_14983_17688 = state_14956__$1;
(statearr_14983_17688[(2)] = inst_14940);

(statearr_14983_17688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14958 === (8))){
var inst_14942 = (state_14956[(8)]);
var inst_14947 = (state_14956[(2)]);
var state_14956__$1 = (function (){var statearr_14984 = state_14956;
(statearr_14984[(10)] = inst_14947);

return statearr_14984;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14956__$1,(9),results,inst_14942);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0 = (function (){
var statearr_14989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14989[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__);

(statearr_14989[(1)] = (1));

return statearr_14989;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1 = (function (state_14956){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_14956);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e14990){var ex__14015__auto__ = e14990;
var statearr_14991_17696 = state_14956;
(statearr_14991_17696[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_14956[(4)]))){
var statearr_14992_17697 = state_14956;
(statearr_14992_17697[(1)] = cljs.core.first((state_14956[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17699 = state_14956;
state_14956 = G__17699;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__ = function(state_14956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1.call(this,state_14956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_14993 = f__14322__auto__();
(statearr_14993[(6)] = c__14321__auto___17663);

return statearr_14993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


var c__14321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_15037){
var state_val_15039 = (state_15037[(1)]);
if((state_val_15039 === (7))){
var inst_15032 = (state_15037[(2)]);
var state_15037__$1 = state_15037;
var statearr_15042_17700 = state_15037__$1;
(statearr_15042_17700[(2)] = inst_15032);

(statearr_15042_17700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (20))){
var state_15037__$1 = state_15037;
var statearr_15043_17701 = state_15037__$1;
(statearr_15043_17701[(2)] = null);

(statearr_15043_17701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (1))){
var state_15037__$1 = state_15037;
var statearr_15044_17702 = state_15037__$1;
(statearr_15044_17702[(2)] = null);

(statearr_15044_17702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (4))){
var inst_14998 = (state_15037[(7)]);
var inst_14998__$1 = (state_15037[(2)]);
var inst_14999 = (inst_14998__$1 == null);
var state_15037__$1 = (function (){var statearr_15046 = state_15037;
(statearr_15046[(7)] = inst_14998__$1);

return statearr_15046;
})();
if(cljs.core.truth_(inst_14999)){
var statearr_15047_17703 = state_15037__$1;
(statearr_15047_17703[(1)] = (5));

} else {
var statearr_15052_17704 = state_15037__$1;
(statearr_15052_17704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (15))){
var inst_15012 = (state_15037[(8)]);
var state_15037__$1 = state_15037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15037__$1,(18),to,inst_15012);
} else {
if((state_val_15039 === (21))){
var inst_15026 = (state_15037[(2)]);
var state_15037__$1 = state_15037;
var statearr_15060_17705 = state_15037__$1;
(statearr_15060_17705[(2)] = inst_15026);

(statearr_15060_17705[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (13))){
var inst_15028 = (state_15037[(2)]);
var state_15037__$1 = (function (){var statearr_15067 = state_15037;
(statearr_15067[(9)] = inst_15028);

return statearr_15067;
})();
var statearr_15068_17706 = state_15037__$1;
(statearr_15068_17706[(2)] = null);

(statearr_15068_17706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (6))){
var inst_14998 = (state_15037[(7)]);
var state_15037__$1 = state_15037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15037__$1,(11),inst_14998);
} else {
if((state_val_15039 === (17))){
var inst_15021 = (state_15037[(2)]);
var state_15037__$1 = state_15037;
if(cljs.core.truth_(inst_15021)){
var statearr_15073_17707 = state_15037__$1;
(statearr_15073_17707[(1)] = (19));

} else {
var statearr_15075_17708 = state_15037__$1;
(statearr_15075_17708[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (3))){
var inst_15034 = (state_15037[(2)]);
var state_15037__$1 = state_15037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15037__$1,inst_15034);
} else {
if((state_val_15039 === (12))){
var inst_15008 = (state_15037[(10)]);
var state_15037__$1 = state_15037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15037__$1,(14),inst_15008);
} else {
if((state_val_15039 === (2))){
var state_15037__$1 = state_15037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15037__$1,(4),results);
} else {
if((state_val_15039 === (19))){
var state_15037__$1 = state_15037;
var statearr_15079_17712 = state_15037__$1;
(statearr_15079_17712[(2)] = null);

(statearr_15079_17712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (11))){
var inst_15008 = (state_15037[(2)]);
var state_15037__$1 = (function (){var statearr_15081 = state_15037;
(statearr_15081[(10)] = inst_15008);

return statearr_15081;
})();
var statearr_15083_17713 = state_15037__$1;
(statearr_15083_17713[(2)] = null);

(statearr_15083_17713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (9))){
var state_15037__$1 = state_15037;
var statearr_15088_17714 = state_15037__$1;
(statearr_15088_17714[(2)] = null);

(statearr_15088_17714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (5))){
var state_15037__$1 = state_15037;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15092_17715 = state_15037__$1;
(statearr_15092_17715[(1)] = (8));

} else {
var statearr_15093_17716 = state_15037__$1;
(statearr_15093_17716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (14))){
var inst_15012 = (state_15037[(8)]);
var inst_15015 = (state_15037[(11)]);
var inst_15012__$1 = (state_15037[(2)]);
var inst_15014 = (inst_15012__$1 == null);
var inst_15015__$1 = cljs.core.not(inst_15014);
var state_15037__$1 = (function (){var statearr_15097 = state_15037;
(statearr_15097[(8)] = inst_15012__$1);

(statearr_15097[(11)] = inst_15015__$1);

return statearr_15097;
})();
if(inst_15015__$1){
var statearr_15098_17717 = state_15037__$1;
(statearr_15098_17717[(1)] = (15));

} else {
var statearr_15099_17718 = state_15037__$1;
(statearr_15099_17718[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (16))){
var inst_15015 = (state_15037[(11)]);
var state_15037__$1 = state_15037;
var statearr_15103_17719 = state_15037__$1;
(statearr_15103_17719[(2)] = inst_15015);

(statearr_15103_17719[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (10))){
var inst_15005 = (state_15037[(2)]);
var state_15037__$1 = state_15037;
var statearr_15105_17720 = state_15037__$1;
(statearr_15105_17720[(2)] = inst_15005);

(statearr_15105_17720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (18))){
var inst_15018 = (state_15037[(2)]);
var state_15037__$1 = state_15037;
var statearr_15110_17721 = state_15037__$1;
(statearr_15110_17721[(2)] = inst_15018);

(statearr_15110_17721[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15039 === (8))){
var inst_15002 = cljs.core.async.close_BANG_(to);
var state_15037__$1 = state_15037;
var statearr_15118_17722 = state_15037__$1;
(statearr_15118_17722[(2)] = inst_15002);

(statearr_15118_17722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0 = (function (){
var statearr_15137 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__);

(statearr_15137[(1)] = (1));

return statearr_15137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1 = (function (state_15037){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_15037);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e15139){var ex__14015__auto__ = e15139;
var statearr_15140_17724 = state_15037;
(statearr_15140_17724[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_15037[(4)]))){
var statearr_15142_17731 = state_15037;
(statearr_15142_17731[(1)] = cljs.core.first((state_15037[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17732 = state_15037;
state_15037 = G__17732;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__ = function(state_15037){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1.call(this,state_15037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14011__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_15148 = f__14322__auto__();
(statearr_15148[(6)] = c__14321__auto__);

return statearr_15148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));

return c__14321__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15153 = arguments.length;
switch (G__15153) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15160 = arguments.length;
switch (G__15160) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15164 = arguments.length;
switch (G__15164) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14321__auto___17761 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_15199){
var state_val_15200 = (state_15199[(1)]);
if((state_val_15200 === (7))){
var inst_15195 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
var statearr_15206_17762 = state_15199__$1;
(statearr_15206_17762[(2)] = inst_15195);

(statearr_15206_17762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (1))){
var state_15199__$1 = state_15199;
var statearr_15207_17763 = state_15199__$1;
(statearr_15207_17763[(2)] = null);

(statearr_15207_17763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (4))){
var inst_15174 = (state_15199[(7)]);
var inst_15174__$1 = (state_15199[(2)]);
var inst_15175 = (inst_15174__$1 == null);
var state_15199__$1 = (function (){var statearr_15208 = state_15199;
(statearr_15208[(7)] = inst_15174__$1);

return statearr_15208;
})();
if(cljs.core.truth_(inst_15175)){
var statearr_15209_17767 = state_15199__$1;
(statearr_15209_17767[(1)] = (5));

} else {
var statearr_15210_17768 = state_15199__$1;
(statearr_15210_17768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (13))){
var state_15199__$1 = state_15199;
var statearr_15212_17769 = state_15199__$1;
(statearr_15212_17769[(2)] = null);

(statearr_15212_17769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (6))){
var inst_15174 = (state_15199[(7)]);
var inst_15182 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15174) : p.call(null,inst_15174));
var state_15199__$1 = state_15199;
if(cljs.core.truth_(inst_15182)){
var statearr_15213_17770 = state_15199__$1;
(statearr_15213_17770[(1)] = (9));

} else {
var statearr_15214_17771 = state_15199__$1;
(statearr_15214_17771[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (3))){
var inst_15197 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15199__$1,inst_15197);
} else {
if((state_val_15200 === (12))){
var state_15199__$1 = state_15199;
var statearr_15215_17773 = state_15199__$1;
(statearr_15215_17773[(2)] = null);

(statearr_15215_17773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (2))){
var state_15199__$1 = state_15199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15199__$1,(4),ch);
} else {
if((state_val_15200 === (11))){
var inst_15174 = (state_15199[(7)]);
var inst_15186 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15199__$1,(8),inst_15186,inst_15174);
} else {
if((state_val_15200 === (9))){
var state_15199__$1 = state_15199;
var statearr_15216_17779 = state_15199__$1;
(statearr_15216_17779[(2)] = tc);

(statearr_15216_17779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (5))){
var inst_15178 = cljs.core.async.close_BANG_(tc);
var inst_15179 = cljs.core.async.close_BANG_(fc);
var state_15199__$1 = (function (){var statearr_15223 = state_15199;
(statearr_15223[(8)] = inst_15178);

return statearr_15223;
})();
var statearr_15224_17780 = state_15199__$1;
(statearr_15224_17780[(2)] = inst_15179);

(statearr_15224_17780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (14))){
var inst_15193 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
var statearr_15230_17781 = state_15199__$1;
(statearr_15230_17781[(2)] = inst_15193);

(statearr_15230_17781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (10))){
var state_15199__$1 = state_15199;
var statearr_15231_17782 = state_15199__$1;
(statearr_15231_17782[(2)] = fc);

(statearr_15231_17782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15200 === (8))){
var inst_15188 = (state_15199[(2)]);
var state_15199__$1 = state_15199;
if(cljs.core.truth_(inst_15188)){
var statearr_15235_17786 = state_15199__$1;
(statearr_15235_17786[(1)] = (12));

} else {
var statearr_15236_17787 = state_15199__$1;
(statearr_15236_17787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_15238 = [null,null,null,null,null,null,null,null,null];
(statearr_15238[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_15238[(1)] = (1));

return statearr_15238;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_15199){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_15199);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e15239){var ex__14015__auto__ = e15239;
var statearr_15243_17788 = state_15199;
(statearr_15243_17788[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_15199[(4)]))){
var statearr_15248_17794 = state_15199;
(statearr_15248_17794[(1)] = cljs.core.first((state_15199[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17795 = state_15199;
state_15199 = G__17795;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_15199){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_15199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_15249 = f__14322__auto__();
(statearr_15249[(6)] = c__14321__auto___17761);

return statearr_15249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_15276){
var state_val_15277 = (state_15276[(1)]);
if((state_val_15277 === (7))){
var inst_15272 = (state_15276[(2)]);
var state_15276__$1 = state_15276;
var statearr_15282_17798 = state_15276__$1;
(statearr_15282_17798[(2)] = inst_15272);

(statearr_15282_17798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (1))){
var inst_15251 = init;
var inst_15252 = inst_15251;
var state_15276__$1 = (function (){var statearr_15283 = state_15276;
(statearr_15283[(7)] = inst_15252);

return statearr_15283;
})();
var statearr_15284_17806 = state_15276__$1;
(statearr_15284_17806[(2)] = null);

(statearr_15284_17806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (4))){
var inst_15255 = (state_15276[(8)]);
var inst_15255__$1 = (state_15276[(2)]);
var inst_15256 = (inst_15255__$1 == null);
var state_15276__$1 = (function (){var statearr_15288 = state_15276;
(statearr_15288[(8)] = inst_15255__$1);

return statearr_15288;
})();
if(cljs.core.truth_(inst_15256)){
var statearr_15289_17814 = state_15276__$1;
(statearr_15289_17814[(1)] = (5));

} else {
var statearr_15293_17815 = state_15276__$1;
(statearr_15293_17815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (6))){
var inst_15252 = (state_15276[(7)]);
var inst_15255 = (state_15276[(8)]);
var inst_15259 = (state_15276[(9)]);
var inst_15259__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15252,inst_15255) : f.call(null,inst_15252,inst_15255));
var inst_15260 = cljs.core.reduced_QMARK_(inst_15259__$1);
var state_15276__$1 = (function (){var statearr_15294 = state_15276;
(statearr_15294[(9)] = inst_15259__$1);

return statearr_15294;
})();
if(inst_15260){
var statearr_15295_17821 = state_15276__$1;
(statearr_15295_17821[(1)] = (8));

} else {
var statearr_15296_17823 = state_15276__$1;
(statearr_15296_17823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (3))){
var inst_15274 = (state_15276[(2)]);
var state_15276__$1 = state_15276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15276__$1,inst_15274);
} else {
if((state_val_15277 === (2))){
var state_15276__$1 = state_15276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15276__$1,(4),ch);
} else {
if((state_val_15277 === (9))){
var inst_15259 = (state_15276[(9)]);
var inst_15252 = inst_15259;
var state_15276__$1 = (function (){var statearr_15301 = state_15276;
(statearr_15301[(7)] = inst_15252);

return statearr_15301;
})();
var statearr_15302_17830 = state_15276__$1;
(statearr_15302_17830[(2)] = null);

(statearr_15302_17830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (5))){
var inst_15252 = (state_15276[(7)]);
var state_15276__$1 = state_15276;
var statearr_15303_17833 = state_15276__$1;
(statearr_15303_17833[(2)] = inst_15252);

(statearr_15303_17833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (10))){
var inst_15270 = (state_15276[(2)]);
var state_15276__$1 = state_15276;
var statearr_15310_17842 = state_15276__$1;
(statearr_15310_17842[(2)] = inst_15270);

(statearr_15310_17842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15277 === (8))){
var inst_15259 = (state_15276[(9)]);
var inst_15265 = cljs.core.deref(inst_15259);
var state_15276__$1 = state_15276;
var statearr_15311_17844 = state_15276__$1;
(statearr_15311_17844[(2)] = inst_15265);

(statearr_15311_17844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14011__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14011__auto____0 = (function (){
var statearr_15319 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15319[(0)] = cljs$core$async$reduce_$_state_machine__14011__auto__);

(statearr_15319[(1)] = (1));

return statearr_15319;
});
var cljs$core$async$reduce_$_state_machine__14011__auto____1 = (function (state_15276){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_15276);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e15320){var ex__14015__auto__ = e15320;
var statearr_15322_17845 = state_15276;
(statearr_15322_17845[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_15276[(4)]))){
var statearr_15327_17846 = state_15276;
(statearr_15327_17846[(1)] = cljs.core.first((state_15276[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17851 = state_15276;
state_15276 = G__17851;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14011__auto__ = function(state_15276){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14011__auto____1.call(this,state_15276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14011__auto____0;
cljs$core$async$reduce_$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14011__auto____1;
return cljs$core$async$reduce_$_state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_15334 = f__14322__auto__();
(statearr_15334[(6)] = c__14321__auto__);

return statearr_15334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));

return c__14321__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_15353){
var state_val_15354 = (state_15353[(1)]);
if((state_val_15354 === (1))){
var inst_15346 = cljs.core.async.reduce(f__$1,init,ch);
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15353__$1,(2),inst_15346);
} else {
if((state_val_15354 === (2))){
var inst_15348 = (state_15353[(2)]);
var inst_15350 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15348) : f__$1.call(null,inst_15348));
var state_15353__$1 = state_15353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15353__$1,inst_15350);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14011__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14011__auto____0 = (function (){
var statearr_15368 = [null,null,null,null,null,null,null];
(statearr_15368[(0)] = cljs$core$async$transduce_$_state_machine__14011__auto__);

(statearr_15368[(1)] = (1));

return statearr_15368;
});
var cljs$core$async$transduce_$_state_machine__14011__auto____1 = (function (state_15353){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_15353);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e15369){var ex__14015__auto__ = e15369;
var statearr_15370_17852 = state_15353;
(statearr_15370_17852[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_15353[(4)]))){
var statearr_15371_17853 = state_15353;
(statearr_15371_17853[(1)] = cljs.core.first((state_15353[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17854 = state_15353;
state_15353 = G__17854;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14011__auto__ = function(state_15353){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14011__auto____1.call(this,state_15353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14011__auto____0;
cljs$core$async$transduce_$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14011__auto____1;
return cljs$core$async$transduce_$_state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_15373 = f__14322__auto__();
(statearr_15373[(6)] = c__14321__auto__);

return statearr_15373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));

return c__14321__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15375 = arguments.length;
switch (G__15375) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_15402){
var state_val_15403 = (state_15402[(1)]);
if((state_val_15403 === (7))){
var inst_15384 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15404_17858 = state_15402__$1;
(statearr_15404_17858[(2)] = inst_15384);

(statearr_15404_17858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (1))){
var inst_15376 = cljs.core.seq(coll);
var inst_15377 = inst_15376;
var state_15402__$1 = (function (){var statearr_15405 = state_15402;
(statearr_15405[(7)] = inst_15377);

return statearr_15405;
})();
var statearr_15406_17859 = state_15402__$1;
(statearr_15406_17859[(2)] = null);

(statearr_15406_17859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (4))){
var inst_15377 = (state_15402[(7)]);
var inst_15382 = cljs.core.first(inst_15377);
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15402__$1,(7),ch,inst_15382);
} else {
if((state_val_15403 === (13))){
var inst_15396 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15407_17860 = state_15402__$1;
(statearr_15407_17860[(2)] = inst_15396);

(statearr_15407_17860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (6))){
var inst_15387 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
if(cljs.core.truth_(inst_15387)){
var statearr_15408_17867 = state_15402__$1;
(statearr_15408_17867[(1)] = (8));

} else {
var statearr_15409_17868 = state_15402__$1;
(statearr_15409_17868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (3))){
var inst_15400 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15402__$1,inst_15400);
} else {
if((state_val_15403 === (12))){
var state_15402__$1 = state_15402;
var statearr_15410_17871 = state_15402__$1;
(statearr_15410_17871[(2)] = null);

(statearr_15410_17871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (2))){
var inst_15377 = (state_15402[(7)]);
var state_15402__$1 = state_15402;
if(cljs.core.truth_(inst_15377)){
var statearr_15411_17872 = state_15402__$1;
(statearr_15411_17872[(1)] = (4));

} else {
var statearr_15413_17873 = state_15402__$1;
(statearr_15413_17873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (11))){
var inst_15393 = cljs.core.async.close_BANG_(ch);
var state_15402__$1 = state_15402;
var statearr_15414_17874 = state_15402__$1;
(statearr_15414_17874[(2)] = inst_15393);

(statearr_15414_17874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (9))){
var state_15402__$1 = state_15402;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15415_17875 = state_15402__$1;
(statearr_15415_17875[(1)] = (11));

} else {
var statearr_15416_17876 = state_15402__$1;
(statearr_15416_17876[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (5))){
var inst_15377 = (state_15402[(7)]);
var state_15402__$1 = state_15402;
var statearr_15418_17877 = state_15402__$1;
(statearr_15418_17877[(2)] = inst_15377);

(statearr_15418_17877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (10))){
var inst_15398 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15419_17878 = state_15402__$1;
(statearr_15419_17878[(2)] = inst_15398);

(statearr_15419_17878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (8))){
var inst_15377 = (state_15402[(7)]);
var inst_15389 = cljs.core.next(inst_15377);
var inst_15377__$1 = inst_15389;
var state_15402__$1 = (function (){var statearr_15420 = state_15402;
(statearr_15420[(7)] = inst_15377__$1);

return statearr_15420;
})();
var statearr_15421_17883 = state_15402__$1;
(statearr_15421_17883[(2)] = null);

(statearr_15421_17883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_15423 = [null,null,null,null,null,null,null,null];
(statearr_15423[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_15423[(1)] = (1));

return statearr_15423;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_15402){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_15402);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e15424){var ex__14015__auto__ = e15424;
var statearr_15426_17887 = state_15402;
(statearr_15426_17887[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_15402[(4)]))){
var statearr_15427_17892 = state_15402;
(statearr_15427_17892[(1)] = cljs.core.first((state_15402[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17902 = state_15402;
state_15402 = G__17902;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_15402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_15402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_15428 = f__14322__auto__();
(statearr_15428[(6)] = c__14321__auto__);

return statearr_15428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));

return c__14321__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15432 = arguments.length;
switch (G__15432) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17935 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17935(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17950 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17950(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17951 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17951(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17953 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17953(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15445 = (function (ch,cs,meta15446){
this.ch = ch;
this.cs = cs;
this.meta15446 = meta15446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15447,meta15446__$1){
var self__ = this;
var _15447__$1 = this;
return (new cljs.core.async.t_cljs$core$async15445(self__.ch,self__.cs,meta15446__$1));
}));

(cljs.core.async.t_cljs$core$async15445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15447){
var self__ = this;
var _15447__$1 = this;
return self__.meta15446;
}));

(cljs.core.async.t_cljs$core$async15445.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15445.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15445.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15445.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15445.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15446","meta15446",-307883959,null)], null);
}));

(cljs.core.async.t_cljs$core$async15445.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15445");

(cljs.core.async.t_cljs$core$async15445.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15445");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15445.
 */
cljs.core.async.__GT_t_cljs$core$async15445 = (function cljs$core$async$__GT_t_cljs$core$async15445(ch,cs,meta15446){
return (new cljs.core.async.t_cljs$core$async15445(ch,cs,meta15446));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15445(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14321__auto___17955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_15596){
var state_val_15597 = (state_15596[(1)]);
if((state_val_15597 === (7))){
var inst_15591 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15598_17956 = state_15596__$1;
(statearr_15598_17956[(2)] = inst_15591);

(statearr_15598_17956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (20))){
var inst_15494 = (state_15596[(7)]);
var inst_15506 = cljs.core.first(inst_15494);
var inst_15507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15506,(0),null);
var inst_15508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15506,(1),null);
var state_15596__$1 = (function (){var statearr_15601 = state_15596;
(statearr_15601[(8)] = inst_15507);

return statearr_15601;
})();
if(cljs.core.truth_(inst_15508)){
var statearr_15602_17957 = state_15596__$1;
(statearr_15602_17957[(1)] = (22));

} else {
var statearr_15603_17958 = state_15596__$1;
(statearr_15603_17958[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (27))){
var inst_15538 = (state_15596[(9)]);
var inst_15540 = (state_15596[(10)]);
var inst_15545 = (state_15596[(11)]);
var inst_15458 = (state_15596[(12)]);
var inst_15545__$1 = cljs.core._nth(inst_15538,inst_15540);
var inst_15546 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15545__$1,inst_15458,done);
var state_15596__$1 = (function (){var statearr_15605 = state_15596;
(statearr_15605[(11)] = inst_15545__$1);

return statearr_15605;
})();
if(cljs.core.truth_(inst_15546)){
var statearr_15606_17959 = state_15596__$1;
(statearr_15606_17959[(1)] = (30));

} else {
var statearr_15607_17960 = state_15596__$1;
(statearr_15607_17960[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (1))){
var state_15596__$1 = state_15596;
var statearr_15608_17961 = state_15596__$1;
(statearr_15608_17961[(2)] = null);

(statearr_15608_17961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (24))){
var inst_15494 = (state_15596[(7)]);
var inst_15513 = (state_15596[(2)]);
var inst_15514 = cljs.core.next(inst_15494);
var inst_15472 = inst_15514;
var inst_15473 = null;
var inst_15474 = (0);
var inst_15475 = (0);
var state_15596__$1 = (function (){var statearr_15609 = state_15596;
(statearr_15609[(13)] = inst_15513);

(statearr_15609[(14)] = inst_15472);

(statearr_15609[(15)] = inst_15473);

(statearr_15609[(16)] = inst_15474);

(statearr_15609[(17)] = inst_15475);

return statearr_15609;
})();
var statearr_15611_17962 = state_15596__$1;
(statearr_15611_17962[(2)] = null);

(statearr_15611_17962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (39))){
var state_15596__$1 = state_15596;
var statearr_15616_17966 = state_15596__$1;
(statearr_15616_17966[(2)] = null);

(statearr_15616_17966[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (4))){
var inst_15458 = (state_15596[(12)]);
var inst_15458__$1 = (state_15596[(2)]);
var inst_15459 = (inst_15458__$1 == null);
var state_15596__$1 = (function (){var statearr_15617 = state_15596;
(statearr_15617[(12)] = inst_15458__$1);

return statearr_15617;
})();
if(cljs.core.truth_(inst_15459)){
var statearr_15621_17967 = state_15596__$1;
(statearr_15621_17967[(1)] = (5));

} else {
var statearr_15622_17968 = state_15596__$1;
(statearr_15622_17968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (15))){
var inst_15475 = (state_15596[(17)]);
var inst_15472 = (state_15596[(14)]);
var inst_15473 = (state_15596[(15)]);
var inst_15474 = (state_15596[(16)]);
var inst_15490 = (state_15596[(2)]);
var inst_15491 = (inst_15475 + (1));
var tmp15612 = inst_15473;
var tmp15613 = inst_15474;
var tmp15614 = inst_15472;
var inst_15472__$1 = tmp15614;
var inst_15473__$1 = tmp15612;
var inst_15474__$1 = tmp15613;
var inst_15475__$1 = inst_15491;
var state_15596__$1 = (function (){var statearr_15624 = state_15596;
(statearr_15624[(18)] = inst_15490);

(statearr_15624[(14)] = inst_15472__$1);

(statearr_15624[(15)] = inst_15473__$1);

(statearr_15624[(16)] = inst_15474__$1);

(statearr_15624[(17)] = inst_15475__$1);

return statearr_15624;
})();
var statearr_15625_17974 = state_15596__$1;
(statearr_15625_17974[(2)] = null);

(statearr_15625_17974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (21))){
var inst_15518 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15629_17975 = state_15596__$1;
(statearr_15629_17975[(2)] = inst_15518);

(statearr_15629_17975[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (31))){
var inst_15545 = (state_15596[(11)]);
var inst_15549 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15545);
var state_15596__$1 = state_15596;
var statearr_15630_17977 = state_15596__$1;
(statearr_15630_17977[(2)] = inst_15549);

(statearr_15630_17977[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (32))){
var inst_15540 = (state_15596[(10)]);
var inst_15537 = (state_15596[(19)]);
var inst_15538 = (state_15596[(9)]);
var inst_15539 = (state_15596[(20)]);
var inst_15551 = (state_15596[(2)]);
var inst_15552 = (inst_15540 + (1));
var tmp15626 = inst_15538;
var tmp15627 = inst_15537;
var tmp15628 = inst_15539;
var inst_15537__$1 = tmp15627;
var inst_15538__$1 = tmp15626;
var inst_15539__$1 = tmp15628;
var inst_15540__$1 = inst_15552;
var state_15596__$1 = (function (){var statearr_15631 = state_15596;
(statearr_15631[(21)] = inst_15551);

(statearr_15631[(19)] = inst_15537__$1);

(statearr_15631[(9)] = inst_15538__$1);

(statearr_15631[(20)] = inst_15539__$1);

(statearr_15631[(10)] = inst_15540__$1);

return statearr_15631;
})();
var statearr_15632_17992 = state_15596__$1;
(statearr_15632_17992[(2)] = null);

(statearr_15632_17992[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (40))){
var inst_15564 = (state_15596[(22)]);
var inst_15568 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15564);
var state_15596__$1 = state_15596;
var statearr_15633_17996 = state_15596__$1;
(statearr_15633_17996[(2)] = inst_15568);

(statearr_15633_17996[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (33))){
var inst_15555 = (state_15596[(23)]);
var inst_15557 = cljs.core.chunked_seq_QMARK_(inst_15555);
var state_15596__$1 = state_15596;
if(inst_15557){
var statearr_15634_17997 = state_15596__$1;
(statearr_15634_17997[(1)] = (36));

} else {
var statearr_15635_17998 = state_15596__$1;
(statearr_15635_17998[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (13))){
var inst_15484 = (state_15596[(24)]);
var inst_15487 = cljs.core.async.close_BANG_(inst_15484);
var state_15596__$1 = state_15596;
var statearr_15636_18000 = state_15596__$1;
(statearr_15636_18000[(2)] = inst_15487);

(statearr_15636_18000[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (22))){
var inst_15507 = (state_15596[(8)]);
var inst_15510 = cljs.core.async.close_BANG_(inst_15507);
var state_15596__$1 = state_15596;
var statearr_15637_18004 = state_15596__$1;
(statearr_15637_18004[(2)] = inst_15510);

(statearr_15637_18004[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (36))){
var inst_15555 = (state_15596[(23)]);
var inst_15559 = cljs.core.chunk_first(inst_15555);
var inst_15560 = cljs.core.chunk_rest(inst_15555);
var inst_15561 = cljs.core.count(inst_15559);
var inst_15537 = inst_15560;
var inst_15538 = inst_15559;
var inst_15539 = inst_15561;
var inst_15540 = (0);
var state_15596__$1 = (function (){var statearr_15640 = state_15596;
(statearr_15640[(19)] = inst_15537);

(statearr_15640[(9)] = inst_15538);

(statearr_15640[(20)] = inst_15539);

(statearr_15640[(10)] = inst_15540);

return statearr_15640;
})();
var statearr_15643_18008 = state_15596__$1;
(statearr_15643_18008[(2)] = null);

(statearr_15643_18008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (41))){
var inst_15555 = (state_15596[(23)]);
var inst_15570 = (state_15596[(2)]);
var inst_15571 = cljs.core.next(inst_15555);
var inst_15537 = inst_15571;
var inst_15538 = null;
var inst_15539 = (0);
var inst_15540 = (0);
var state_15596__$1 = (function (){var statearr_15647 = state_15596;
(statearr_15647[(25)] = inst_15570);

(statearr_15647[(19)] = inst_15537);

(statearr_15647[(9)] = inst_15538);

(statearr_15647[(20)] = inst_15539);

(statearr_15647[(10)] = inst_15540);

return statearr_15647;
})();
var statearr_15649_18014 = state_15596__$1;
(statearr_15649_18014[(2)] = null);

(statearr_15649_18014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (43))){
var state_15596__$1 = state_15596;
var statearr_15650_18015 = state_15596__$1;
(statearr_15650_18015[(2)] = null);

(statearr_15650_18015[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (29))){
var inst_15579 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15655_18016 = state_15596__$1;
(statearr_15655_18016[(2)] = inst_15579);

(statearr_15655_18016[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (44))){
var inst_15588 = (state_15596[(2)]);
var state_15596__$1 = (function (){var statearr_15661 = state_15596;
(statearr_15661[(26)] = inst_15588);

return statearr_15661;
})();
var statearr_15663_18017 = state_15596__$1;
(statearr_15663_18017[(2)] = null);

(statearr_15663_18017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (6))){
var inst_15529 = (state_15596[(27)]);
var inst_15528 = cljs.core.deref(cs);
var inst_15529__$1 = cljs.core.keys(inst_15528);
var inst_15530 = cljs.core.count(inst_15529__$1);
var inst_15531 = cljs.core.reset_BANG_(dctr,inst_15530);
var inst_15536 = cljs.core.seq(inst_15529__$1);
var inst_15537 = inst_15536;
var inst_15538 = null;
var inst_15539 = (0);
var inst_15540 = (0);
var state_15596__$1 = (function (){var statearr_15665 = state_15596;
(statearr_15665[(27)] = inst_15529__$1);

(statearr_15665[(28)] = inst_15531);

(statearr_15665[(19)] = inst_15537);

(statearr_15665[(9)] = inst_15538);

(statearr_15665[(20)] = inst_15539);

(statearr_15665[(10)] = inst_15540);

return statearr_15665;
})();
var statearr_15669_18018 = state_15596__$1;
(statearr_15669_18018[(2)] = null);

(statearr_15669_18018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (28))){
var inst_15537 = (state_15596[(19)]);
var inst_15555 = (state_15596[(23)]);
var inst_15555__$1 = cljs.core.seq(inst_15537);
var state_15596__$1 = (function (){var statearr_15672 = state_15596;
(statearr_15672[(23)] = inst_15555__$1);

return statearr_15672;
})();
if(inst_15555__$1){
var statearr_15674_18028 = state_15596__$1;
(statearr_15674_18028[(1)] = (33));

} else {
var statearr_15675_18032 = state_15596__$1;
(statearr_15675_18032[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (25))){
var inst_15540 = (state_15596[(10)]);
var inst_15539 = (state_15596[(20)]);
var inst_15542 = (inst_15540 < inst_15539);
var inst_15543 = inst_15542;
var state_15596__$1 = state_15596;
if(cljs.core.truth_(inst_15543)){
var statearr_15677_18033 = state_15596__$1;
(statearr_15677_18033[(1)] = (27));

} else {
var statearr_15678_18034 = state_15596__$1;
(statearr_15678_18034[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (34))){
var state_15596__$1 = state_15596;
var statearr_15682_18035 = state_15596__$1;
(statearr_15682_18035[(2)] = null);

(statearr_15682_18035[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (17))){
var state_15596__$1 = state_15596;
var statearr_15689_18036 = state_15596__$1;
(statearr_15689_18036[(2)] = null);

(statearr_15689_18036[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (3))){
var inst_15593 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15596__$1,inst_15593);
} else {
if((state_val_15597 === (12))){
var inst_15523 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15691_18037 = state_15596__$1;
(statearr_15691_18037[(2)] = inst_15523);

(statearr_15691_18037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (2))){
var state_15596__$1 = state_15596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15596__$1,(4),ch);
} else {
if((state_val_15597 === (23))){
var state_15596__$1 = state_15596;
var statearr_15692_18040 = state_15596__$1;
(statearr_15692_18040[(2)] = null);

(statearr_15692_18040[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (35))){
var inst_15577 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15698_18042 = state_15596__$1;
(statearr_15698_18042[(2)] = inst_15577);

(statearr_15698_18042[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (19))){
var inst_15494 = (state_15596[(7)]);
var inst_15498 = cljs.core.chunk_first(inst_15494);
var inst_15499 = cljs.core.chunk_rest(inst_15494);
var inst_15500 = cljs.core.count(inst_15498);
var inst_15472 = inst_15499;
var inst_15473 = inst_15498;
var inst_15474 = inst_15500;
var inst_15475 = (0);
var state_15596__$1 = (function (){var statearr_15702 = state_15596;
(statearr_15702[(14)] = inst_15472);

(statearr_15702[(15)] = inst_15473);

(statearr_15702[(16)] = inst_15474);

(statearr_15702[(17)] = inst_15475);

return statearr_15702;
})();
var statearr_15703_18044 = state_15596__$1;
(statearr_15703_18044[(2)] = null);

(statearr_15703_18044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (11))){
var inst_15472 = (state_15596[(14)]);
var inst_15494 = (state_15596[(7)]);
var inst_15494__$1 = cljs.core.seq(inst_15472);
var state_15596__$1 = (function (){var statearr_15705 = state_15596;
(statearr_15705[(7)] = inst_15494__$1);

return statearr_15705;
})();
if(inst_15494__$1){
var statearr_15706_18045 = state_15596__$1;
(statearr_15706_18045[(1)] = (16));

} else {
var statearr_15709_18046 = state_15596__$1;
(statearr_15709_18046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (9))){
var inst_15525 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15711_18048 = state_15596__$1;
(statearr_15711_18048[(2)] = inst_15525);

(statearr_15711_18048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (5))){
var inst_15467 = cljs.core.deref(cs);
var inst_15468 = cljs.core.seq(inst_15467);
var inst_15472 = inst_15468;
var inst_15473 = null;
var inst_15474 = (0);
var inst_15475 = (0);
var state_15596__$1 = (function (){var statearr_15712 = state_15596;
(statearr_15712[(14)] = inst_15472);

(statearr_15712[(15)] = inst_15473);

(statearr_15712[(16)] = inst_15474);

(statearr_15712[(17)] = inst_15475);

return statearr_15712;
})();
var statearr_15713_18049 = state_15596__$1;
(statearr_15713_18049[(2)] = null);

(statearr_15713_18049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (14))){
var state_15596__$1 = state_15596;
var statearr_15714_18059 = state_15596__$1;
(statearr_15714_18059[(2)] = null);

(statearr_15714_18059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (45))){
var inst_15585 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15715_18061 = state_15596__$1;
(statearr_15715_18061[(2)] = inst_15585);

(statearr_15715_18061[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (26))){
var inst_15529 = (state_15596[(27)]);
var inst_15581 = (state_15596[(2)]);
var inst_15582 = cljs.core.seq(inst_15529);
var state_15596__$1 = (function (){var statearr_15716 = state_15596;
(statearr_15716[(29)] = inst_15581);

return statearr_15716;
})();
if(inst_15582){
var statearr_15717_18062 = state_15596__$1;
(statearr_15717_18062[(1)] = (42));

} else {
var statearr_15718_18063 = state_15596__$1;
(statearr_15718_18063[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (16))){
var inst_15494 = (state_15596[(7)]);
var inst_15496 = cljs.core.chunked_seq_QMARK_(inst_15494);
var state_15596__$1 = state_15596;
if(inst_15496){
var statearr_15720_18066 = state_15596__$1;
(statearr_15720_18066[(1)] = (19));

} else {
var statearr_15721_18067 = state_15596__$1;
(statearr_15721_18067[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (38))){
var inst_15574 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15726_18069 = state_15596__$1;
(statearr_15726_18069[(2)] = inst_15574);

(statearr_15726_18069[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (30))){
var state_15596__$1 = state_15596;
var statearr_15727_18070 = state_15596__$1;
(statearr_15727_18070[(2)] = null);

(statearr_15727_18070[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (10))){
var inst_15473 = (state_15596[(15)]);
var inst_15475 = (state_15596[(17)]);
var inst_15483 = cljs.core._nth(inst_15473,inst_15475);
var inst_15484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15483,(0),null);
var inst_15485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15483,(1),null);
var state_15596__$1 = (function (){var statearr_15732 = state_15596;
(statearr_15732[(24)] = inst_15484);

return statearr_15732;
})();
if(cljs.core.truth_(inst_15485)){
var statearr_15733_18072 = state_15596__$1;
(statearr_15733_18072[(1)] = (13));

} else {
var statearr_15734_18076 = state_15596__$1;
(statearr_15734_18076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (18))){
var inst_15521 = (state_15596[(2)]);
var state_15596__$1 = state_15596;
var statearr_15735_18078 = state_15596__$1;
(statearr_15735_18078[(2)] = inst_15521);

(statearr_15735_18078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (42))){
var state_15596__$1 = state_15596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15596__$1,(45),dchan);
} else {
if((state_val_15597 === (37))){
var inst_15555 = (state_15596[(23)]);
var inst_15564 = (state_15596[(22)]);
var inst_15458 = (state_15596[(12)]);
var inst_15564__$1 = cljs.core.first(inst_15555);
var inst_15565 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15564__$1,inst_15458,done);
var state_15596__$1 = (function (){var statearr_15736 = state_15596;
(statearr_15736[(22)] = inst_15564__$1);

return statearr_15736;
})();
if(cljs.core.truth_(inst_15565)){
var statearr_15738_18079 = state_15596__$1;
(statearr_15738_18079[(1)] = (39));

} else {
var statearr_15739_18080 = state_15596__$1;
(statearr_15739_18080[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15597 === (8))){
var inst_15475 = (state_15596[(17)]);
var inst_15474 = (state_15596[(16)]);
var inst_15477 = (inst_15475 < inst_15474);
var inst_15478 = inst_15477;
var state_15596__$1 = state_15596;
if(cljs.core.truth_(inst_15478)){
var statearr_15743_18084 = state_15596__$1;
(statearr_15743_18084[(1)] = (10));

} else {
var statearr_15744_18085 = state_15596__$1;
(statearr_15744_18085[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14011__auto__ = null;
var cljs$core$async$mult_$_state_machine__14011__auto____0 = (function (){
var statearr_15748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15748[(0)] = cljs$core$async$mult_$_state_machine__14011__auto__);

(statearr_15748[(1)] = (1));

return statearr_15748;
});
var cljs$core$async$mult_$_state_machine__14011__auto____1 = (function (state_15596){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_15596);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e15750){var ex__14015__auto__ = e15750;
var statearr_15751_18090 = state_15596;
(statearr_15751_18090[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_15596[(4)]))){
var statearr_15753_18091 = state_15596;
(statearr_15753_18091[(1)] = cljs.core.first((state_15596[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18092 = state_15596;
state_15596 = G__18092;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14011__auto__ = function(state_15596){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14011__auto____1.call(this,state_15596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14011__auto____0;
cljs$core$async$mult_$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14011__auto____1;
return cljs$core$async$mult_$_state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_15757 = f__14322__auto__();
(statearr_15757[(6)] = c__14321__auto___17955);

return statearr_15757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15767 = arguments.length;
switch (G__15767) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18103 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18103(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18115 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18115(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18131 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18131(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18147 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18147(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18158 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18158(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18169 = arguments.length;
var i__5877__auto___18170 = (0);
while(true){
if((i__5877__auto___18170 < len__5876__auto___18169)){
args__5882__auto__.push((arguments[i__5877__auto___18170]));

var G__18171 = (i__5877__auto___18170 + (1));
i__5877__auto___18170 = G__18171;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15799){
var map__15800 = p__15799;
var map__15800__$1 = cljs.core.__destructure_map(map__15800);
var opts = map__15800__$1;
var statearr_15801_18174 = state;
(statearr_15801_18174[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15802_18176 = state;
(statearr_15802_18176[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_15803_18189 = state;
(statearr_15803_18189[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15794){
var G__15795 = cljs.core.first(seq15794);
var seq15794__$1 = cljs.core.next(seq15794);
var G__15796 = cljs.core.first(seq15794__$1);
var seq15794__$2 = cljs.core.next(seq15794__$1);
var G__15797 = cljs.core.first(seq15794__$2);
var seq15794__$3 = cljs.core.next(seq15794__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15795,G__15796,G__15797,seq15794__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15818 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15819){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15819 = meta15819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15820,meta15819__$1){
var self__ = this;
var _15820__$1 = this;
return (new cljs.core.async.t_cljs$core$async15818(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15819__$1));
}));

(cljs.core.async.t_cljs$core$async15818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15820){
var self__ = this;
var _15820__$1 = this;
return self__.meta15819;
}));

(cljs.core.async.t_cljs$core$async15818.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15818.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15818.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15818.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15818.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15818.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15818.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15819","meta15819",-1762847742,null)], null);
}));

(cljs.core.async.t_cljs$core$async15818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15818");

(cljs.core.async.t_cljs$core$async15818.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15818.
 */
cljs.core.async.__GT_t_cljs$core$async15818 = (function cljs$core$async$__GT_t_cljs$core$async15818(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15819){
return (new cljs.core.async.t_cljs$core$async15818(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15819));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15818(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14321__auto___18239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_15896){
var state_val_15897 = (state_15896[(1)]);
if((state_val_15897 === (7))){
var inst_15855 = (state_15896[(2)]);
var state_15896__$1 = state_15896;
if(cljs.core.truth_(inst_15855)){
var statearr_15902_18247 = state_15896__$1;
(statearr_15902_18247[(1)] = (8));

} else {
var statearr_15903_18248 = state_15896__$1;
(statearr_15903_18248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (20))){
var inst_15848 = (state_15896[(7)]);
var state_15896__$1 = state_15896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15896__$1,(23),out,inst_15848);
} else {
if((state_val_15897 === (1))){
var inst_15828 = calc_state();
var inst_15829 = cljs.core.__destructure_map(inst_15828);
var inst_15830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15829,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15829,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15829,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15833 = inst_15828;
var state_15896__$1 = (function (){var statearr_15908 = state_15896;
(statearr_15908[(8)] = inst_15830);

(statearr_15908[(9)] = inst_15831);

(statearr_15908[(10)] = inst_15832);

(statearr_15908[(11)] = inst_15833);

return statearr_15908;
})();
var statearr_15909_18249 = state_15896__$1;
(statearr_15909_18249[(2)] = null);

(statearr_15909_18249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (24))){
var inst_15836 = (state_15896[(12)]);
var inst_15833 = inst_15836;
var state_15896__$1 = (function (){var statearr_15910 = state_15896;
(statearr_15910[(11)] = inst_15833);

return statearr_15910;
})();
var statearr_15911_18250 = state_15896__$1;
(statearr_15911_18250[(2)] = null);

(statearr_15911_18250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (4))){
var inst_15848 = (state_15896[(7)]);
var inst_15850 = (state_15896[(13)]);
var inst_15847 = (state_15896[(2)]);
var inst_15848__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15847,(0),null);
var inst_15849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15847,(1),null);
var inst_15850__$1 = (inst_15848__$1 == null);
var state_15896__$1 = (function (){var statearr_15917 = state_15896;
(statearr_15917[(7)] = inst_15848__$1);

(statearr_15917[(14)] = inst_15849);

(statearr_15917[(13)] = inst_15850__$1);

return statearr_15917;
})();
if(cljs.core.truth_(inst_15850__$1)){
var statearr_15919_18255 = state_15896__$1;
(statearr_15919_18255[(1)] = (5));

} else {
var statearr_15920_18256 = state_15896__$1;
(statearr_15920_18256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (15))){
var inst_15838 = (state_15896[(15)]);
var inst_15870 = (state_15896[(16)]);
var inst_15870__$1 = cljs.core.empty_QMARK_(inst_15838);
var state_15896__$1 = (function (){var statearr_15921 = state_15896;
(statearr_15921[(16)] = inst_15870__$1);

return statearr_15921;
})();
if(inst_15870__$1){
var statearr_15922_18268 = state_15896__$1;
(statearr_15922_18268[(1)] = (17));

} else {
var statearr_15923_18278 = state_15896__$1;
(statearr_15923_18278[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (21))){
var inst_15836 = (state_15896[(12)]);
var inst_15833 = inst_15836;
var state_15896__$1 = (function (){var statearr_15924 = state_15896;
(statearr_15924[(11)] = inst_15833);

return statearr_15924;
})();
var statearr_15925_18286 = state_15896__$1;
(statearr_15925_18286[(2)] = null);

(statearr_15925_18286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (13))){
var inst_15863 = (state_15896[(2)]);
var inst_15864 = calc_state();
var inst_15833 = inst_15864;
var state_15896__$1 = (function (){var statearr_15928 = state_15896;
(statearr_15928[(17)] = inst_15863);

(statearr_15928[(11)] = inst_15833);

return statearr_15928;
})();
var statearr_15929_18293 = state_15896__$1;
(statearr_15929_18293[(2)] = null);

(statearr_15929_18293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (22))){
var inst_15890 = (state_15896[(2)]);
var state_15896__$1 = state_15896;
var statearr_15930_18305 = state_15896__$1;
(statearr_15930_18305[(2)] = inst_15890);

(statearr_15930_18305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (6))){
var inst_15849 = (state_15896[(14)]);
var inst_15853 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15849,change);
var state_15896__$1 = state_15896;
var statearr_15935_18315 = state_15896__$1;
(statearr_15935_18315[(2)] = inst_15853);

(statearr_15935_18315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (25))){
var state_15896__$1 = state_15896;
var statearr_15936_18317 = state_15896__$1;
(statearr_15936_18317[(2)] = null);

(statearr_15936_18317[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (17))){
var inst_15841 = (state_15896[(18)]);
var inst_15849 = (state_15896[(14)]);
var inst_15872 = (inst_15841.cljs$core$IFn$_invoke$arity$1 ? inst_15841.cljs$core$IFn$_invoke$arity$1(inst_15849) : inst_15841.call(null,inst_15849));
var inst_15873 = cljs.core.not(inst_15872);
var state_15896__$1 = state_15896;
var statearr_15937_18323 = state_15896__$1;
(statearr_15937_18323[(2)] = inst_15873);

(statearr_15937_18323[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (3))){
var inst_15894 = (state_15896[(2)]);
var state_15896__$1 = state_15896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15896__$1,inst_15894);
} else {
if((state_val_15897 === (12))){
var state_15896__$1 = state_15896;
var statearr_15939_18328 = state_15896__$1;
(statearr_15939_18328[(2)] = null);

(statearr_15939_18328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (2))){
var inst_15833 = (state_15896[(11)]);
var inst_15836 = (state_15896[(12)]);
var inst_15836__$1 = cljs.core.__destructure_map(inst_15833);
var inst_15838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15836__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15836__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15842 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15836__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15896__$1 = (function (){var statearr_15941 = state_15896;
(statearr_15941[(12)] = inst_15836__$1);

(statearr_15941[(15)] = inst_15838);

(statearr_15941[(18)] = inst_15841);

return statearr_15941;
})();
return cljs.core.async.ioc_alts_BANG_(state_15896__$1,(4),inst_15842);
} else {
if((state_val_15897 === (23))){
var inst_15881 = (state_15896[(2)]);
var state_15896__$1 = state_15896;
if(cljs.core.truth_(inst_15881)){
var statearr_15942_18332 = state_15896__$1;
(statearr_15942_18332[(1)] = (24));

} else {
var statearr_15944_18333 = state_15896__$1;
(statearr_15944_18333[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (19))){
var inst_15876 = (state_15896[(2)]);
var state_15896__$1 = state_15896;
var statearr_15947_18334 = state_15896__$1;
(statearr_15947_18334[(2)] = inst_15876);

(statearr_15947_18334[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (11))){
var inst_15849 = (state_15896[(14)]);
var inst_15860 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15849);
var state_15896__$1 = state_15896;
var statearr_15949_18335 = state_15896__$1;
(statearr_15949_18335[(2)] = inst_15860);

(statearr_15949_18335[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (9))){
var inst_15838 = (state_15896[(15)]);
var inst_15849 = (state_15896[(14)]);
var inst_15867 = (state_15896[(19)]);
var inst_15867__$1 = (inst_15838.cljs$core$IFn$_invoke$arity$1 ? inst_15838.cljs$core$IFn$_invoke$arity$1(inst_15849) : inst_15838.call(null,inst_15849));
var state_15896__$1 = (function (){var statearr_15950 = state_15896;
(statearr_15950[(19)] = inst_15867__$1);

return statearr_15950;
})();
if(cljs.core.truth_(inst_15867__$1)){
var statearr_15951_18341 = state_15896__$1;
(statearr_15951_18341[(1)] = (14));

} else {
var statearr_15952_18344 = state_15896__$1;
(statearr_15952_18344[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (5))){
var inst_15850 = (state_15896[(13)]);
var state_15896__$1 = state_15896;
var statearr_15953_18345 = state_15896__$1;
(statearr_15953_18345[(2)] = inst_15850);

(statearr_15953_18345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (14))){
var inst_15867 = (state_15896[(19)]);
var state_15896__$1 = state_15896;
var statearr_15954_18351 = state_15896__$1;
(statearr_15954_18351[(2)] = inst_15867);

(statearr_15954_18351[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (26))){
var inst_15886 = (state_15896[(2)]);
var state_15896__$1 = state_15896;
var statearr_15955_18352 = state_15896__$1;
(statearr_15955_18352[(2)] = inst_15886);

(statearr_15955_18352[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (16))){
var inst_15878 = (state_15896[(2)]);
var state_15896__$1 = state_15896;
if(cljs.core.truth_(inst_15878)){
var statearr_15956_18353 = state_15896__$1;
(statearr_15956_18353[(1)] = (20));

} else {
var statearr_15958_18354 = state_15896__$1;
(statearr_15958_18354[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (10))){
var inst_15892 = (state_15896[(2)]);
var state_15896__$1 = state_15896;
var statearr_15960_18355 = state_15896__$1;
(statearr_15960_18355[(2)] = inst_15892);

(statearr_15960_18355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (18))){
var inst_15870 = (state_15896[(16)]);
var state_15896__$1 = state_15896;
var statearr_15961_18356 = state_15896__$1;
(statearr_15961_18356[(2)] = inst_15870);

(statearr_15961_18356[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15897 === (8))){
var inst_15848 = (state_15896[(7)]);
var inst_15858 = (inst_15848 == null);
var state_15896__$1 = state_15896;
if(cljs.core.truth_(inst_15858)){
var statearr_15965_18357 = state_15896__$1;
(statearr_15965_18357[(1)] = (11));

} else {
var statearr_15966_18360 = state_15896__$1;
(statearr_15966_18360[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14011__auto__ = null;
var cljs$core$async$mix_$_state_machine__14011__auto____0 = (function (){
var statearr_15971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15971[(0)] = cljs$core$async$mix_$_state_machine__14011__auto__);

(statearr_15971[(1)] = (1));

return statearr_15971;
});
var cljs$core$async$mix_$_state_machine__14011__auto____1 = (function (state_15896){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_15896);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e15972){var ex__14015__auto__ = e15972;
var statearr_15973_18362 = state_15896;
(statearr_15973_18362[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_15896[(4)]))){
var statearr_15974_18364 = state_15896;
(statearr_15974_18364[(1)] = cljs.core.first((state_15896[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18365 = state_15896;
state_15896 = G__18365;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14011__auto__ = function(state_15896){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14011__auto____1.call(this,state_15896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14011__auto____0;
cljs$core$async$mix_$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14011__auto____1;
return cljs$core$async$mix_$_state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_15975 = f__14322__auto__();
(statearr_15975[(6)] = c__14321__auto___18239);

return statearr_15975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18377 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18377(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18379 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18379(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18384 = (function() {
var G__18385 = null;
var G__18385__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18385__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18385 = function(p,v){
switch(arguments.length){
case 1:
return G__18385__1.call(this,p);
case 2:
return G__18385__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18385.cljs$core$IFn$_invoke$arity$1 = G__18385__1;
G__18385.cljs$core$IFn$_invoke$arity$2 = G__18385__2;
return G__18385;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15989 = arguments.length;
switch (G__15989) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18384(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18384(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16004 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16005){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16005 = meta16005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16006,meta16005__$1){
var self__ = this;
var _16006__$1 = this;
return (new cljs.core.async.t_cljs$core$async16004(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16005__$1));
}));

(cljs.core.async.t_cljs$core$async16004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16006){
var self__ = this;
var _16006__$1 = this;
return self__.meta16005;
}));

(cljs.core.async.t_cljs$core$async16004.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16004.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16004.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16004.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16004.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16005","meta16005",-1124849559,null)], null);
}));

(cljs.core.async.t_cljs$core$async16004.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16004");

(cljs.core.async.t_cljs$core$async16004.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16004");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16004.
 */
cljs.core.async.__GT_t_cljs$core$async16004 = (function cljs$core$async$__GT_t_cljs$core$async16004(ch,topic_fn,buf_fn,mults,ensure_mult,meta16005){
return (new cljs.core.async.t_cljs$core$async16004(ch,topic_fn,buf_fn,mults,ensure_mult,meta16005));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15998 = arguments.length;
switch (G__15998) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15995_SHARP_){
if(cljs.core.truth_((p1__15995_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15995_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15995_SHARP_.call(null,topic)))){
return p1__15995_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15995_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16004(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14321__auto___18408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_16100){
var state_val_16101 = (state_16100[(1)]);
if((state_val_16101 === (7))){
var inst_16094 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16103_18409 = state_16100__$1;
(statearr_16103_18409[(2)] = inst_16094);

(statearr_16103_18409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (20))){
var state_16100__$1 = state_16100;
var statearr_16105_18414 = state_16100__$1;
(statearr_16105_18414[(2)] = null);

(statearr_16105_18414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (1))){
var state_16100__$1 = state_16100;
var statearr_16106_18415 = state_16100__$1;
(statearr_16106_18415[(2)] = null);

(statearr_16106_18415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (24))){
var inst_16076 = (state_16100[(7)]);
var inst_16085 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16076);
var state_16100__$1 = state_16100;
var statearr_16109_18416 = state_16100__$1;
(statearr_16109_18416[(2)] = inst_16085);

(statearr_16109_18416[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (4))){
var inst_16020 = (state_16100[(8)]);
var inst_16020__$1 = (state_16100[(2)]);
var inst_16021 = (inst_16020__$1 == null);
var state_16100__$1 = (function (){var statearr_16110 = state_16100;
(statearr_16110[(8)] = inst_16020__$1);

return statearr_16110;
})();
if(cljs.core.truth_(inst_16021)){
var statearr_16112_18417 = state_16100__$1;
(statearr_16112_18417[(1)] = (5));

} else {
var statearr_16113_18418 = state_16100__$1;
(statearr_16113_18418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (15))){
var inst_16070 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16117_18419 = state_16100__$1;
(statearr_16117_18419[(2)] = inst_16070);

(statearr_16117_18419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (21))){
var inst_16091 = (state_16100[(2)]);
var state_16100__$1 = (function (){var statearr_16118 = state_16100;
(statearr_16118[(9)] = inst_16091);

return statearr_16118;
})();
var statearr_16120_18420 = state_16100__$1;
(statearr_16120_18420[(2)] = null);

(statearr_16120_18420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (13))){
var inst_16049 = (state_16100[(10)]);
var inst_16053 = cljs.core.chunked_seq_QMARK_(inst_16049);
var state_16100__$1 = state_16100;
if(inst_16053){
var statearr_16121_18421 = state_16100__$1;
(statearr_16121_18421[(1)] = (16));

} else {
var statearr_16122_18422 = state_16100__$1;
(statearr_16122_18422[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (22))){
var inst_16082 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
if(cljs.core.truth_(inst_16082)){
var statearr_16124_18423 = state_16100__$1;
(statearr_16124_18423[(1)] = (23));

} else {
var statearr_16125_18424 = state_16100__$1;
(statearr_16125_18424[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (6))){
var inst_16020 = (state_16100[(8)]);
var inst_16076 = (state_16100[(7)]);
var inst_16078 = (state_16100[(11)]);
var inst_16076__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16020) : topic_fn.call(null,inst_16020));
var inst_16077 = cljs.core.deref(mults);
var inst_16078__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16077,inst_16076__$1);
var state_16100__$1 = (function (){var statearr_16126 = state_16100;
(statearr_16126[(7)] = inst_16076__$1);

(statearr_16126[(11)] = inst_16078__$1);

return statearr_16126;
})();
if(cljs.core.truth_(inst_16078__$1)){
var statearr_16127_18428 = state_16100__$1;
(statearr_16127_18428[(1)] = (19));

} else {
var statearr_16128_18429 = state_16100__$1;
(statearr_16128_18429[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (25))){
var inst_16088 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16130_18433 = state_16100__$1;
(statearr_16130_18433[(2)] = inst_16088);

(statearr_16130_18433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (17))){
var inst_16049 = (state_16100[(10)]);
var inst_16060 = cljs.core.first(inst_16049);
var inst_16062 = cljs.core.async.muxch_STAR_(inst_16060);
var inst_16063 = cljs.core.async.close_BANG_(inst_16062);
var inst_16064 = cljs.core.next(inst_16049);
var inst_16031 = inst_16064;
var inst_16032 = null;
var inst_16033 = (0);
var inst_16034 = (0);
var state_16100__$1 = (function (){var statearr_16131 = state_16100;
(statearr_16131[(12)] = inst_16063);

(statearr_16131[(13)] = inst_16031);

(statearr_16131[(14)] = inst_16032);

(statearr_16131[(15)] = inst_16033);

(statearr_16131[(16)] = inst_16034);

return statearr_16131;
})();
var statearr_16136_18446 = state_16100__$1;
(statearr_16136_18446[(2)] = null);

(statearr_16136_18446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (3))){
var inst_16097 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16100__$1,inst_16097);
} else {
if((state_val_16101 === (12))){
var inst_16072 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16138_18452 = state_16100__$1;
(statearr_16138_18452[(2)] = inst_16072);

(statearr_16138_18452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (2))){
var state_16100__$1 = state_16100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16100__$1,(4),ch);
} else {
if((state_val_16101 === (23))){
var state_16100__$1 = state_16100;
var statearr_16140_18456 = state_16100__$1;
(statearr_16140_18456[(2)] = null);

(statearr_16140_18456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (19))){
var inst_16078 = (state_16100[(11)]);
var inst_16020 = (state_16100[(8)]);
var inst_16080 = cljs.core.async.muxch_STAR_(inst_16078);
var state_16100__$1 = state_16100;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16100__$1,(22),inst_16080,inst_16020);
} else {
if((state_val_16101 === (11))){
var inst_16031 = (state_16100[(13)]);
var inst_16049 = (state_16100[(10)]);
var inst_16049__$1 = cljs.core.seq(inst_16031);
var state_16100__$1 = (function (){var statearr_16143 = state_16100;
(statearr_16143[(10)] = inst_16049__$1);

return statearr_16143;
})();
if(inst_16049__$1){
var statearr_16144_18466 = state_16100__$1;
(statearr_16144_18466[(1)] = (13));

} else {
var statearr_16145_18469 = state_16100__$1;
(statearr_16145_18469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (9))){
var inst_16074 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16146_18474 = state_16100__$1;
(statearr_16146_18474[(2)] = inst_16074);

(statearr_16146_18474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (5))){
var inst_16028 = cljs.core.deref(mults);
var inst_16029 = cljs.core.vals(inst_16028);
var inst_16030 = cljs.core.seq(inst_16029);
var inst_16031 = inst_16030;
var inst_16032 = null;
var inst_16033 = (0);
var inst_16034 = (0);
var state_16100__$1 = (function (){var statearr_16151 = state_16100;
(statearr_16151[(13)] = inst_16031);

(statearr_16151[(14)] = inst_16032);

(statearr_16151[(15)] = inst_16033);

(statearr_16151[(16)] = inst_16034);

return statearr_16151;
})();
var statearr_16152_18479 = state_16100__$1;
(statearr_16152_18479[(2)] = null);

(statearr_16152_18479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (14))){
var state_16100__$1 = state_16100;
var statearr_16157_18480 = state_16100__$1;
(statearr_16157_18480[(2)] = null);

(statearr_16157_18480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (16))){
var inst_16049 = (state_16100[(10)]);
var inst_16055 = cljs.core.chunk_first(inst_16049);
var inst_16056 = cljs.core.chunk_rest(inst_16049);
var inst_16057 = cljs.core.count(inst_16055);
var inst_16031 = inst_16056;
var inst_16032 = inst_16055;
var inst_16033 = inst_16057;
var inst_16034 = (0);
var state_16100__$1 = (function (){var statearr_16158 = state_16100;
(statearr_16158[(13)] = inst_16031);

(statearr_16158[(14)] = inst_16032);

(statearr_16158[(15)] = inst_16033);

(statearr_16158[(16)] = inst_16034);

return statearr_16158;
})();
var statearr_16159_18486 = state_16100__$1;
(statearr_16159_18486[(2)] = null);

(statearr_16159_18486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (10))){
var inst_16032 = (state_16100[(14)]);
var inst_16034 = (state_16100[(16)]);
var inst_16031 = (state_16100[(13)]);
var inst_16033 = (state_16100[(15)]);
var inst_16041 = cljs.core._nth(inst_16032,inst_16034);
var inst_16043 = cljs.core.async.muxch_STAR_(inst_16041);
var inst_16044 = cljs.core.async.close_BANG_(inst_16043);
var inst_16046 = (inst_16034 + (1));
var tmp16153 = inst_16033;
var tmp16154 = inst_16032;
var tmp16155 = inst_16031;
var inst_16031__$1 = tmp16155;
var inst_16032__$1 = tmp16154;
var inst_16033__$1 = tmp16153;
var inst_16034__$1 = inst_16046;
var state_16100__$1 = (function (){var statearr_16160 = state_16100;
(statearr_16160[(17)] = inst_16044);

(statearr_16160[(13)] = inst_16031__$1);

(statearr_16160[(14)] = inst_16032__$1);

(statearr_16160[(15)] = inst_16033__$1);

(statearr_16160[(16)] = inst_16034__$1);

return statearr_16160;
})();
var statearr_16161_18493 = state_16100__$1;
(statearr_16161_18493[(2)] = null);

(statearr_16161_18493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (18))){
var inst_16067 = (state_16100[(2)]);
var state_16100__$1 = state_16100;
var statearr_16164_18495 = state_16100__$1;
(statearr_16164_18495[(2)] = inst_16067);

(statearr_16164_18495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16101 === (8))){
var inst_16034 = (state_16100[(16)]);
var inst_16033 = (state_16100[(15)]);
var inst_16037 = (inst_16034 < inst_16033);
var inst_16038 = inst_16037;
var state_16100__$1 = state_16100;
if(cljs.core.truth_(inst_16038)){
var statearr_16165_18496 = state_16100__$1;
(statearr_16165_18496[(1)] = (10));

} else {
var statearr_16166_18497 = state_16100__$1;
(statearr_16166_18497[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_16167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16167[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_16167[(1)] = (1));

return statearr_16167;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_16100){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_16100);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e16168){var ex__14015__auto__ = e16168;
var statearr_16169_18504 = state_16100;
(statearr_16169_18504[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_16100[(4)]))){
var statearr_16171_18505 = state_16100;
(statearr_16171_18505[(1)] = cljs.core.first((state_16100[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18506 = state_16100;
state_16100 = G__18506;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_16100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_16100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_16172 = f__14322__auto__();
(statearr_16172[(6)] = c__14321__auto___18408);

return statearr_16172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16176 = arguments.length;
switch (G__16176) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16200 = arguments.length;
switch (G__16200) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16213 = arguments.length;
switch (G__16213) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14321__auto___18520 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_16277){
var state_val_16278 = (state_16277[(1)]);
if((state_val_16278 === (7))){
var state_16277__$1 = state_16277;
var statearr_16280_18521 = state_16277__$1;
(statearr_16280_18521[(2)] = null);

(statearr_16280_18521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (1))){
var state_16277__$1 = state_16277;
var statearr_16281_18522 = state_16277__$1;
(statearr_16281_18522[(2)] = null);

(statearr_16281_18522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (4))){
var inst_16231 = (state_16277[(7)]);
var inst_16230 = (state_16277[(8)]);
var inst_16236 = (inst_16231 < inst_16230);
var state_16277__$1 = state_16277;
if(cljs.core.truth_(inst_16236)){
var statearr_16283_18523 = state_16277__$1;
(statearr_16283_18523[(1)] = (6));

} else {
var statearr_16285_18524 = state_16277__$1;
(statearr_16285_18524[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (15))){
var inst_16262 = (state_16277[(9)]);
var inst_16268 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16262);
var state_16277__$1 = state_16277;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16277__$1,(17),out,inst_16268);
} else {
if((state_val_16278 === (13))){
var inst_16262 = (state_16277[(9)]);
var inst_16262__$1 = (state_16277[(2)]);
var inst_16263 = cljs.core.some(cljs.core.nil_QMARK_,inst_16262__$1);
var state_16277__$1 = (function (){var statearr_16288 = state_16277;
(statearr_16288[(9)] = inst_16262__$1);

return statearr_16288;
})();
if(cljs.core.truth_(inst_16263)){
var statearr_16292_18525 = state_16277__$1;
(statearr_16292_18525[(1)] = (14));

} else {
var statearr_16294_18526 = state_16277__$1;
(statearr_16294_18526[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (6))){
var state_16277__$1 = state_16277;
var statearr_16297_18531 = state_16277__$1;
(statearr_16297_18531[(2)] = null);

(statearr_16297_18531[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (17))){
var inst_16270 = (state_16277[(2)]);
var state_16277__$1 = (function (){var statearr_16316 = state_16277;
(statearr_16316[(10)] = inst_16270);

return statearr_16316;
})();
var statearr_16317_18532 = state_16277__$1;
(statearr_16317_18532[(2)] = null);

(statearr_16317_18532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (3))){
var inst_16275 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16277__$1,inst_16275);
} else {
if((state_val_16278 === (12))){
var _ = (function (){var statearr_16322 = state_16277;
(statearr_16322[(4)] = cljs.core.rest((state_16277[(4)])));

return statearr_16322;
})();
var state_16277__$1 = state_16277;
var ex16312 = (state_16277__$1[(2)]);
var statearr_16331_18537 = state_16277__$1;
(statearr_16331_18537[(5)] = ex16312);


if((ex16312 instanceof Object)){
var statearr_16333_18541 = state_16277__$1;
(statearr_16333_18541[(1)] = (11));

(statearr_16333_18541[(5)] = null);

} else {
throw ex16312;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (2))){
var inst_16224 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16230 = cnt;
var inst_16231 = (0);
var state_16277__$1 = (function (){var statearr_16340 = state_16277;
(statearr_16340[(11)] = inst_16224);

(statearr_16340[(8)] = inst_16230);

(statearr_16340[(7)] = inst_16231);

return statearr_16340;
})();
var statearr_16343_18546 = state_16277__$1;
(statearr_16343_18546[(2)] = null);

(statearr_16343_18546[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (11))){
var inst_16241 = (state_16277[(2)]);
var inst_16242 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16277__$1 = (function (){var statearr_16344 = state_16277;
(statearr_16344[(12)] = inst_16241);

return statearr_16344;
})();
var statearr_16346_18551 = state_16277__$1;
(statearr_16346_18551[(2)] = inst_16242);

(statearr_16346_18551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (9))){
var inst_16231 = (state_16277[(7)]);
var _ = (function (){var statearr_16350 = state_16277;
(statearr_16350[(4)] = cljs.core.cons((12),(state_16277[(4)])));

return statearr_16350;
})();
var inst_16248 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16231) : chs__$1.call(null,inst_16231));
var inst_16249 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16231) : done.call(null,inst_16231));
var inst_16250 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16248,inst_16249);
var ___$1 = (function (){var statearr_16351 = state_16277;
(statearr_16351[(4)] = cljs.core.rest((state_16277[(4)])));

return statearr_16351;
})();
var state_16277__$1 = state_16277;
var statearr_16352_18566 = state_16277__$1;
(statearr_16352_18566[(2)] = inst_16250);

(statearr_16352_18566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (5))){
var inst_16260 = (state_16277[(2)]);
var state_16277__$1 = (function (){var statearr_16354 = state_16277;
(statearr_16354[(13)] = inst_16260);

return statearr_16354;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16277__$1,(13),dchan);
} else {
if((state_val_16278 === (14))){
var inst_16265 = cljs.core.async.close_BANG_(out);
var state_16277__$1 = state_16277;
var statearr_16358_18567 = state_16277__$1;
(statearr_16358_18567[(2)] = inst_16265);

(statearr_16358_18567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (16))){
var inst_16273 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16363_18568 = state_16277__$1;
(statearr_16363_18568[(2)] = inst_16273);

(statearr_16363_18568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (10))){
var inst_16231 = (state_16277[(7)]);
var inst_16253 = (state_16277[(2)]);
var inst_16254 = (inst_16231 + (1));
var inst_16231__$1 = inst_16254;
var state_16277__$1 = (function (){var statearr_16364 = state_16277;
(statearr_16364[(14)] = inst_16253);

(statearr_16364[(7)] = inst_16231__$1);

return statearr_16364;
})();
var statearr_16365_18576 = state_16277__$1;
(statearr_16365_18576[(2)] = null);

(statearr_16365_18576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16278 === (8))){
var inst_16258 = (state_16277[(2)]);
var state_16277__$1 = state_16277;
var statearr_16367_18577 = state_16277__$1;
(statearr_16367_18577[(2)] = inst_16258);

(statearr_16367_18577[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_16369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16369[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_16369[(1)] = (1));

return statearr_16369;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_16277){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_16277);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e16372){var ex__14015__auto__ = e16372;
var statearr_16373_18587 = state_16277;
(statearr_16373_18587[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_16277[(4)]))){
var statearr_16374_18588 = state_16277;
(statearr_16374_18588[(1)] = cljs.core.first((state_16277[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18589 = state_16277;
state_16277 = G__18589;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_16277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_16277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_16380 = f__14322__auto__();
(statearr_16380[(6)] = c__14321__auto___18520);

return statearr_16380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16397 = arguments.length;
switch (G__16397) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14321__auto___18591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_16448){
var state_val_16449 = (state_16448[(1)]);
if((state_val_16449 === (7))){
var inst_16423 = (state_16448[(7)]);
var inst_16425 = (state_16448[(8)]);
var inst_16423__$1 = (state_16448[(2)]);
var inst_16425__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16423__$1,(0),null);
var inst_16426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16423__$1,(1),null);
var inst_16427 = (inst_16425__$1 == null);
var state_16448__$1 = (function (){var statearr_16456 = state_16448;
(statearr_16456[(7)] = inst_16423__$1);

(statearr_16456[(8)] = inst_16425__$1);

(statearr_16456[(9)] = inst_16426);

return statearr_16456;
})();
if(cljs.core.truth_(inst_16427)){
var statearr_16459_18592 = state_16448__$1;
(statearr_16459_18592[(1)] = (8));

} else {
var statearr_16460_18593 = state_16448__$1;
(statearr_16460_18593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16449 === (1))){
var inst_16410 = cljs.core.vec(chs);
var inst_16411 = inst_16410;
var state_16448__$1 = (function (){var statearr_16461 = state_16448;
(statearr_16461[(10)] = inst_16411);

return statearr_16461;
})();
var statearr_16463_18594 = state_16448__$1;
(statearr_16463_18594[(2)] = null);

(statearr_16463_18594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16449 === (4))){
var inst_16411 = (state_16448[(10)]);
var state_16448__$1 = state_16448;
return cljs.core.async.ioc_alts_BANG_(state_16448__$1,(7),inst_16411);
} else {
if((state_val_16449 === (6))){
var inst_16443 = (state_16448[(2)]);
var state_16448__$1 = state_16448;
var statearr_16465_18595 = state_16448__$1;
(statearr_16465_18595[(2)] = inst_16443);

(statearr_16465_18595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16449 === (3))){
var inst_16446 = (state_16448[(2)]);
var state_16448__$1 = state_16448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16448__$1,inst_16446);
} else {
if((state_val_16449 === (2))){
var inst_16411 = (state_16448[(10)]);
var inst_16413 = cljs.core.count(inst_16411);
var inst_16414 = (inst_16413 > (0));
var state_16448__$1 = state_16448;
if(cljs.core.truth_(inst_16414)){
var statearr_16469_18596 = state_16448__$1;
(statearr_16469_18596[(1)] = (4));

} else {
var statearr_16470_18597 = state_16448__$1;
(statearr_16470_18597[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16449 === (11))){
var inst_16411 = (state_16448[(10)]);
var inst_16436 = (state_16448[(2)]);
var tmp16467 = inst_16411;
var inst_16411__$1 = tmp16467;
var state_16448__$1 = (function (){var statearr_16472 = state_16448;
(statearr_16472[(11)] = inst_16436);

(statearr_16472[(10)] = inst_16411__$1);

return statearr_16472;
})();
var statearr_16473_18604 = state_16448__$1;
(statearr_16473_18604[(2)] = null);

(statearr_16473_18604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16449 === (9))){
var inst_16425 = (state_16448[(8)]);
var state_16448__$1 = state_16448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16448__$1,(11),out,inst_16425);
} else {
if((state_val_16449 === (5))){
var inst_16441 = cljs.core.async.close_BANG_(out);
var state_16448__$1 = state_16448;
var statearr_16481_18611 = state_16448__$1;
(statearr_16481_18611[(2)] = inst_16441);

(statearr_16481_18611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16449 === (10))){
var inst_16439 = (state_16448[(2)]);
var state_16448__$1 = state_16448;
var statearr_16483_18612 = state_16448__$1;
(statearr_16483_18612[(2)] = inst_16439);

(statearr_16483_18612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16449 === (8))){
var inst_16411 = (state_16448[(10)]);
var inst_16423 = (state_16448[(7)]);
var inst_16425 = (state_16448[(8)]);
var inst_16426 = (state_16448[(9)]);
var inst_16430 = (function (){var cs = inst_16411;
var vec__16417 = inst_16423;
var v = inst_16425;
var c = inst_16426;
return (function (p1__16390_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16390_SHARP_);
});
})();
var inst_16432 = cljs.core.filterv(inst_16430,inst_16411);
var inst_16411__$1 = inst_16432;
var state_16448__$1 = (function (){var statearr_16487 = state_16448;
(statearr_16487[(10)] = inst_16411__$1);

return statearr_16487;
})();
var statearr_16488_18614 = state_16448__$1;
(statearr_16488_18614[(2)] = null);

(statearr_16488_18614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_16491 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16491[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_16491[(1)] = (1));

return statearr_16491;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_16448){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_16448);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e16493){var ex__14015__auto__ = e16493;
var statearr_16495_18615 = state_16448;
(statearr_16495_18615[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_16448[(4)]))){
var statearr_16497_18617 = state_16448;
(statearr_16497_18617[(1)] = cljs.core.first((state_16448[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18618 = state_16448;
state_16448 = G__18618;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_16448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_16448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_16498 = f__14322__auto__();
(statearr_16498[(6)] = c__14321__auto___18591);

return statearr_16498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16505 = arguments.length;
switch (G__16505) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14321__auto___18627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_16534){
var state_val_16535 = (state_16534[(1)]);
if((state_val_16535 === (7))){
var inst_16516 = (state_16534[(7)]);
var inst_16516__$1 = (state_16534[(2)]);
var inst_16517 = (inst_16516__$1 == null);
var inst_16518 = cljs.core.not(inst_16517);
var state_16534__$1 = (function (){var statearr_16537 = state_16534;
(statearr_16537[(7)] = inst_16516__$1);

return statearr_16537;
})();
if(inst_16518){
var statearr_16538_18639 = state_16534__$1;
(statearr_16538_18639[(1)] = (8));

} else {
var statearr_16539_18645 = state_16534__$1;
(statearr_16539_18645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (1))){
var inst_16510 = (0);
var state_16534__$1 = (function (){var statearr_16542 = state_16534;
(statearr_16542[(8)] = inst_16510);

return statearr_16542;
})();
var statearr_16543_18646 = state_16534__$1;
(statearr_16543_18646[(2)] = null);

(statearr_16543_18646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (4))){
var state_16534__$1 = state_16534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16534__$1,(7),ch);
} else {
if((state_val_16535 === (6))){
var inst_16529 = (state_16534[(2)]);
var state_16534__$1 = state_16534;
var statearr_16545_18647 = state_16534__$1;
(statearr_16545_18647[(2)] = inst_16529);

(statearr_16545_18647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (3))){
var inst_16531 = (state_16534[(2)]);
var inst_16532 = cljs.core.async.close_BANG_(out);
var state_16534__$1 = (function (){var statearr_16547 = state_16534;
(statearr_16547[(9)] = inst_16531);

return statearr_16547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16534__$1,inst_16532);
} else {
if((state_val_16535 === (2))){
var inst_16510 = (state_16534[(8)]);
var inst_16512 = (inst_16510 < n);
var state_16534__$1 = state_16534;
if(cljs.core.truth_(inst_16512)){
var statearr_16549_18649 = state_16534__$1;
(statearr_16549_18649[(1)] = (4));

} else {
var statearr_16550_18651 = state_16534__$1;
(statearr_16550_18651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (11))){
var inst_16510 = (state_16534[(8)]);
var inst_16521 = (state_16534[(2)]);
var inst_16522 = (inst_16510 + (1));
var inst_16510__$1 = inst_16522;
var state_16534__$1 = (function (){var statearr_16552 = state_16534;
(statearr_16552[(10)] = inst_16521);

(statearr_16552[(8)] = inst_16510__$1);

return statearr_16552;
})();
var statearr_16557_18654 = state_16534__$1;
(statearr_16557_18654[(2)] = null);

(statearr_16557_18654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (9))){
var state_16534__$1 = state_16534;
var statearr_16559_18657 = state_16534__$1;
(statearr_16559_18657[(2)] = null);

(statearr_16559_18657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (5))){
var state_16534__$1 = state_16534;
var statearr_16560_18663 = state_16534__$1;
(statearr_16560_18663[(2)] = null);

(statearr_16560_18663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (10))){
var inst_16526 = (state_16534[(2)]);
var state_16534__$1 = state_16534;
var statearr_16561_18666 = state_16534__$1;
(statearr_16561_18666[(2)] = inst_16526);

(statearr_16561_18666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16535 === (8))){
var inst_16516 = (state_16534[(7)]);
var state_16534__$1 = state_16534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16534__$1,(11),out,inst_16516);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_16563 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16563[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_16563[(1)] = (1));

return statearr_16563;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_16534){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_16534);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e16566){var ex__14015__auto__ = e16566;
var statearr_16567_18671 = state_16534;
(statearr_16567_18671[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_16534[(4)]))){
var statearr_16572_18672 = state_16534;
(statearr_16572_18672[(1)] = cljs.core.first((state_16534[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18677 = state_16534;
state_16534 = G__18677;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_16534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_16534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_16574 = f__14322__auto__();
(statearr_16574[(6)] = c__14321__auto___18627);

return statearr_16574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16599 = (function (f,ch,meta16585,_,fn1,meta16600){
this.f = f;
this.ch = ch;
this.meta16585 = meta16585;
this._ = _;
this.fn1 = fn1;
this.meta16600 = meta16600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16601,meta16600__$1){
var self__ = this;
var _16601__$1 = this;
return (new cljs.core.async.t_cljs$core$async16599(self__.f,self__.ch,self__.meta16585,self__._,self__.fn1,meta16600__$1));
}));

(cljs.core.async.t_cljs$core$async16599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16601){
var self__ = this;
var _16601__$1 = this;
return self__.meta16600;
}));

(cljs.core.async.t_cljs$core$async16599.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16599.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16581_SHARP_){
var G__16610 = (((p1__16581_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16581_SHARP_) : self__.f.call(null,p1__16581_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16610) : f1.call(null,G__16610));
});
}));

(cljs.core.async.t_cljs$core$async16599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16585","meta16585",1916447550,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16584","cljs.core.async/t_cljs$core$async16584",676318224,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16600","meta16600",636982504,null)], null);
}));

(cljs.core.async.t_cljs$core$async16599.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16599");

(cljs.core.async.t_cljs$core$async16599.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16599");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16599.
 */
cljs.core.async.__GT_t_cljs$core$async16599 = (function cljs$core$async$__GT_t_cljs$core$async16599(f,ch,meta16585,_,fn1,meta16600){
return (new cljs.core.async.t_cljs$core$async16599(f,ch,meta16585,_,fn1,meta16600));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16584 = (function (f,ch,meta16585){
this.f = f;
this.ch = ch;
this.meta16585 = meta16585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16586,meta16585__$1){
var self__ = this;
var _16586__$1 = this;
return (new cljs.core.async.t_cljs$core$async16584(self__.f,self__.ch,meta16585__$1));
}));

(cljs.core.async.t_cljs$core$async16584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16586){
var self__ = this;
var _16586__$1 = this;
return self__.meta16585;
}));

(cljs.core.async.t_cljs$core$async16584.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16584.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16584.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16599(self__.f,self__.ch,self__.meta16585,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16615 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16615) : self__.f.call(null,G__16615));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16584.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16585","meta16585",1916447550,null)], null);
}));

(cljs.core.async.t_cljs$core$async16584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16584");

(cljs.core.async.t_cljs$core$async16584.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16584.
 */
cljs.core.async.__GT_t_cljs$core$async16584 = (function cljs$core$async$__GT_t_cljs$core$async16584(f,ch,meta16585){
return (new cljs.core.async.t_cljs$core$async16584(f,ch,meta16585));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16584(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16622 = (function (f,ch,meta16623){
this.f = f;
this.ch = ch;
this.meta16623 = meta16623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16624,meta16623__$1){
var self__ = this;
var _16624__$1 = this;
return (new cljs.core.async.t_cljs$core$async16622(self__.f,self__.ch,meta16623__$1));
}));

(cljs.core.async.t_cljs$core$async16622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16624){
var self__ = this;
var _16624__$1 = this;
return self__.meta16623;
}));

(cljs.core.async.t_cljs$core$async16622.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16622.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16622.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16622.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16622.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16622.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16623","meta16623",991690196,null)], null);
}));

(cljs.core.async.t_cljs$core$async16622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16622");

(cljs.core.async.t_cljs$core$async16622.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16622.
 */
cljs.core.async.__GT_t_cljs$core$async16622 = (function cljs$core$async$__GT_t_cljs$core$async16622(f,ch,meta16623){
return (new cljs.core.async.t_cljs$core$async16622(f,ch,meta16623));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16622(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16636 = (function (p,ch,meta16637){
this.p = p;
this.ch = ch;
this.meta16637 = meta16637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16638,meta16637__$1){
var self__ = this;
var _16638__$1 = this;
return (new cljs.core.async.t_cljs$core$async16636(self__.p,self__.ch,meta16637__$1));
}));

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16638){
var self__ = this;
var _16638__$1 = this;
return self__.meta16637;
}));

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16637","meta16637",-338281216,null)], null);
}));

(cljs.core.async.t_cljs$core$async16636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16636");

(cljs.core.async.t_cljs$core$async16636.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16636.
 */
cljs.core.async.__GT_t_cljs$core$async16636 = (function cljs$core$async$__GT_t_cljs$core$async16636(p,ch,meta16637){
return (new cljs.core.async.t_cljs$core$async16636(p,ch,meta16637));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16636(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16656 = arguments.length;
switch (G__16656) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14321__auto___18725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_16681){
var state_val_16682 = (state_16681[(1)]);
if((state_val_16682 === (7))){
var inst_16677 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
var statearr_16686_18730 = state_16681__$1;
(statearr_16686_18730[(2)] = inst_16677);

(statearr_16686_18730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (1))){
var state_16681__$1 = state_16681;
var statearr_16701_18731 = state_16681__$1;
(statearr_16701_18731[(2)] = null);

(statearr_16701_18731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (4))){
var inst_16662 = (state_16681[(7)]);
var inst_16662__$1 = (state_16681[(2)]);
var inst_16664 = (inst_16662__$1 == null);
var state_16681__$1 = (function (){var statearr_16714 = state_16681;
(statearr_16714[(7)] = inst_16662__$1);

return statearr_16714;
})();
if(cljs.core.truth_(inst_16664)){
var statearr_16715_18733 = state_16681__$1;
(statearr_16715_18733[(1)] = (5));

} else {
var statearr_16716_18734 = state_16681__$1;
(statearr_16716_18734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (6))){
var inst_16662 = (state_16681[(7)]);
var inst_16668 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16662) : p.call(null,inst_16662));
var state_16681__$1 = state_16681;
if(cljs.core.truth_(inst_16668)){
var statearr_16721_18739 = state_16681__$1;
(statearr_16721_18739[(1)] = (8));

} else {
var statearr_16722_18741 = state_16681__$1;
(statearr_16722_18741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (3))){
var inst_16679 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16681__$1,inst_16679);
} else {
if((state_val_16682 === (2))){
var state_16681__$1 = state_16681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16681__$1,(4),ch);
} else {
if((state_val_16682 === (11))){
var inst_16671 = (state_16681[(2)]);
var state_16681__$1 = state_16681;
var statearr_16727_18748 = state_16681__$1;
(statearr_16727_18748[(2)] = inst_16671);

(statearr_16727_18748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (9))){
var state_16681__$1 = state_16681;
var statearr_16732_18750 = state_16681__$1;
(statearr_16732_18750[(2)] = null);

(statearr_16732_18750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (5))){
var inst_16666 = cljs.core.async.close_BANG_(out);
var state_16681__$1 = state_16681;
var statearr_16746_18755 = state_16681__$1;
(statearr_16746_18755[(2)] = inst_16666);

(statearr_16746_18755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (10))){
var inst_16674 = (state_16681[(2)]);
var state_16681__$1 = (function (){var statearr_16748 = state_16681;
(statearr_16748[(8)] = inst_16674);

return statearr_16748;
})();
var statearr_16749_18758 = state_16681__$1;
(statearr_16749_18758[(2)] = null);

(statearr_16749_18758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16682 === (8))){
var inst_16662 = (state_16681[(7)]);
var state_16681__$1 = state_16681;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16681__$1,(11),out,inst_16662);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_16761 = [null,null,null,null,null,null,null,null,null];
(statearr_16761[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_16761[(1)] = (1));

return statearr_16761;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_16681){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_16681);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e16767){var ex__14015__auto__ = e16767;
var statearr_16772_18767 = state_16681;
(statearr_16772_18767[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_16681[(4)]))){
var statearr_16778_18768 = state_16681;
(statearr_16778_18768[(1)] = cljs.core.first((state_16681[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18776 = state_16681;
state_16681 = G__18776;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_16681){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_16681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_16792 = f__14322__auto__();
(statearr_16792[(6)] = c__14321__auto___18725);

return statearr_16792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16802 = arguments.length;
switch (G__16802) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14321__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_16935){
var state_val_16937 = (state_16935[(1)]);
if((state_val_16937 === (7))){
var inst_16924 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_16945_18816 = state_16935__$1;
(statearr_16945_18816[(2)] = inst_16924);

(statearr_16945_18816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (20))){
var inst_16890 = (state_16935[(7)]);
var inst_16904 = (state_16935[(2)]);
var inst_16906 = cljs.core.next(inst_16890);
var inst_16863 = inst_16906;
var inst_16864 = null;
var inst_16865 = (0);
var inst_16866 = (0);
var state_16935__$1 = (function (){var statearr_16947 = state_16935;
(statearr_16947[(8)] = inst_16904);

(statearr_16947[(9)] = inst_16863);

(statearr_16947[(10)] = inst_16864);

(statearr_16947[(11)] = inst_16865);

(statearr_16947[(12)] = inst_16866);

return statearr_16947;
})();
var statearr_16948_18823 = state_16935__$1;
(statearr_16948_18823[(2)] = null);

(statearr_16948_18823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (1))){
var state_16935__$1 = state_16935;
var statearr_16949_18825 = state_16935__$1;
(statearr_16949_18825[(2)] = null);

(statearr_16949_18825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (4))){
var inst_16846 = (state_16935[(13)]);
var inst_16846__$1 = (state_16935[(2)]);
var inst_16847 = (inst_16846__$1 == null);
var state_16935__$1 = (function (){var statearr_16954 = state_16935;
(statearr_16954[(13)] = inst_16846__$1);

return statearr_16954;
})();
if(cljs.core.truth_(inst_16847)){
var statearr_16955_18827 = state_16935__$1;
(statearr_16955_18827[(1)] = (5));

} else {
var statearr_16956_18828 = state_16935__$1;
(statearr_16956_18828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (15))){
var state_16935__$1 = state_16935;
var statearr_16961_18833 = state_16935__$1;
(statearr_16961_18833[(2)] = null);

(statearr_16961_18833[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (21))){
var state_16935__$1 = state_16935;
var statearr_16962_18836 = state_16935__$1;
(statearr_16962_18836[(2)] = null);

(statearr_16962_18836[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (13))){
var inst_16866 = (state_16935[(12)]);
var inst_16863 = (state_16935[(9)]);
var inst_16864 = (state_16935[(10)]);
var inst_16865 = (state_16935[(11)]);
var inst_16878 = (state_16935[(2)]);
var inst_16885 = (inst_16866 + (1));
var tmp16957 = inst_16865;
var tmp16958 = inst_16863;
var tmp16959 = inst_16864;
var inst_16863__$1 = tmp16958;
var inst_16864__$1 = tmp16959;
var inst_16865__$1 = tmp16957;
var inst_16866__$1 = inst_16885;
var state_16935__$1 = (function (){var statearr_16973 = state_16935;
(statearr_16973[(14)] = inst_16878);

(statearr_16973[(9)] = inst_16863__$1);

(statearr_16973[(10)] = inst_16864__$1);

(statearr_16973[(11)] = inst_16865__$1);

(statearr_16973[(12)] = inst_16866__$1);

return statearr_16973;
})();
var statearr_16978_18842 = state_16935__$1;
(statearr_16978_18842[(2)] = null);

(statearr_16978_18842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (22))){
var state_16935__$1 = state_16935;
var statearr_16983_18843 = state_16935__$1;
(statearr_16983_18843[(2)] = null);

(statearr_16983_18843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (6))){
var inst_16846 = (state_16935[(13)]);
var inst_16861 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16846) : f.call(null,inst_16846));
var inst_16862 = cljs.core.seq(inst_16861);
var inst_16863 = inst_16862;
var inst_16864 = null;
var inst_16865 = (0);
var inst_16866 = (0);
var state_16935__$1 = (function (){var statearr_16988 = state_16935;
(statearr_16988[(9)] = inst_16863);

(statearr_16988[(10)] = inst_16864);

(statearr_16988[(11)] = inst_16865);

(statearr_16988[(12)] = inst_16866);

return statearr_16988;
})();
var statearr_16993_18857 = state_16935__$1;
(statearr_16993_18857[(2)] = null);

(statearr_16993_18857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (17))){
var inst_16890 = (state_16935[(7)]);
var inst_16894 = cljs.core.chunk_first(inst_16890);
var inst_16896 = cljs.core.chunk_rest(inst_16890);
var inst_16897 = cljs.core.count(inst_16894);
var inst_16863 = inst_16896;
var inst_16864 = inst_16894;
var inst_16865 = inst_16897;
var inst_16866 = (0);
var state_16935__$1 = (function (){var statearr_16997 = state_16935;
(statearr_16997[(9)] = inst_16863);

(statearr_16997[(10)] = inst_16864);

(statearr_16997[(11)] = inst_16865);

(statearr_16997[(12)] = inst_16866);

return statearr_16997;
})();
var statearr_16999_18865 = state_16935__$1;
(statearr_16999_18865[(2)] = null);

(statearr_16999_18865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (3))){
var inst_16926 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16935__$1,inst_16926);
} else {
if((state_val_16937 === (12))){
var inst_16914 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_17024_18868 = state_16935__$1;
(statearr_17024_18868[(2)] = inst_16914);

(statearr_17024_18868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (2))){
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16935__$1,(4),in$);
} else {
if((state_val_16937 === (23))){
var inst_16922 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_17033_18869 = state_16935__$1;
(statearr_17033_18869[(2)] = inst_16922);

(statearr_17033_18869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (19))){
var inst_16909 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_17034_18878 = state_16935__$1;
(statearr_17034_18878[(2)] = inst_16909);

(statearr_17034_18878[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (11))){
var inst_16863 = (state_16935[(9)]);
var inst_16890 = (state_16935[(7)]);
var inst_16890__$1 = cljs.core.seq(inst_16863);
var state_16935__$1 = (function (){var statearr_17042 = state_16935;
(statearr_17042[(7)] = inst_16890__$1);

return statearr_17042;
})();
if(inst_16890__$1){
var statearr_17044_18883 = state_16935__$1;
(statearr_17044_18883[(1)] = (14));

} else {
var statearr_17046_18884 = state_16935__$1;
(statearr_17046_18884[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (9))){
var inst_16916 = (state_16935[(2)]);
var inst_16917 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16935__$1 = (function (){var statearr_17048 = state_16935;
(statearr_17048[(15)] = inst_16916);

return statearr_17048;
})();
if(cljs.core.truth_(inst_16917)){
var statearr_17049_18887 = state_16935__$1;
(statearr_17049_18887[(1)] = (21));

} else {
var statearr_17050_18888 = state_16935__$1;
(statearr_17050_18888[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (5))){
var inst_16853 = cljs.core.async.close_BANG_(out);
var state_16935__$1 = state_16935;
var statearr_17051_18893 = state_16935__$1;
(statearr_17051_18893[(2)] = inst_16853);

(statearr_17051_18893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (14))){
var inst_16890 = (state_16935[(7)]);
var inst_16892 = cljs.core.chunked_seq_QMARK_(inst_16890);
var state_16935__$1 = state_16935;
if(inst_16892){
var statearr_17054_18894 = state_16935__$1;
(statearr_17054_18894[(1)] = (17));

} else {
var statearr_17058_18896 = state_16935__$1;
(statearr_17058_18896[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (16))){
var inst_16912 = (state_16935[(2)]);
var state_16935__$1 = state_16935;
var statearr_17059_18897 = state_16935__$1;
(statearr_17059_18897[(2)] = inst_16912);

(statearr_17059_18897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16937 === (10))){
var inst_16864 = (state_16935[(10)]);
var inst_16866 = (state_16935[(12)]);
var inst_16875 = cljs.core._nth(inst_16864,inst_16866);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16935__$1,(13),out,inst_16875);
} else {
if((state_val_16937 === (18))){
var inst_16890 = (state_16935[(7)]);
var inst_16902 = cljs.core.first(inst_16890);
var state_16935__$1 = state_16935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16935__$1,(20),out,inst_16902);
} else {
if((state_val_16937 === (8))){
var inst_16866 = (state_16935[(12)]);
var inst_16865 = (state_16935[(11)]);
var inst_16869 = (inst_16866 < inst_16865);
var inst_16870 = inst_16869;
var state_16935__$1 = state_16935;
if(cljs.core.truth_(inst_16870)){
var statearr_17066_18901 = state_16935__$1;
(statearr_17066_18901[(1)] = (10));

} else {
var statearr_17067_18902 = state_16935__$1;
(statearr_17067_18902[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14011__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14011__auto____0 = (function (){
var statearr_17068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17068[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14011__auto__);

(statearr_17068[(1)] = (1));

return statearr_17068;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14011__auto____1 = (function (state_16935){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_16935);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e17071){var ex__14015__auto__ = e17071;
var statearr_17072_18903 = state_16935;
(statearr_17072_18903[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_16935[(4)]))){
var statearr_17075_18904 = state_16935;
(statearr_17075_18904[(1)] = cljs.core.first((state_16935[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18909 = state_16935;
state_16935 = G__18909;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14011__auto__ = function(state_16935){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14011__auto____1.call(this,state_16935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14011__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14011__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_17076 = f__14322__auto__();
(statearr_17076[(6)] = c__14321__auto__);

return statearr_17076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));

return c__14321__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17082 = arguments.length;
switch (G__17082) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17086 = arguments.length;
switch (G__17086) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17092 = arguments.length;
switch (G__17092) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14321__auto___18928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_17136){
var state_val_17137 = (state_17136[(1)]);
if((state_val_17137 === (7))){
var inst_17131 = (state_17136[(2)]);
var state_17136__$1 = state_17136;
var statearr_17140_18929 = state_17136__$1;
(statearr_17140_18929[(2)] = inst_17131);

(statearr_17140_18929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17137 === (1))){
var inst_17107 = null;
var state_17136__$1 = (function (){var statearr_17141 = state_17136;
(statearr_17141[(7)] = inst_17107);

return statearr_17141;
})();
var statearr_17142_18930 = state_17136__$1;
(statearr_17142_18930[(2)] = null);

(statearr_17142_18930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17137 === (4))){
var inst_17111 = (state_17136[(8)]);
var inst_17111__$1 = (state_17136[(2)]);
var inst_17112 = (inst_17111__$1 == null);
var inst_17113 = cljs.core.not(inst_17112);
var state_17136__$1 = (function (){var statearr_17143 = state_17136;
(statearr_17143[(8)] = inst_17111__$1);

return statearr_17143;
})();
if(inst_17113){
var statearr_17145_18934 = state_17136__$1;
(statearr_17145_18934[(1)] = (5));

} else {
var statearr_17146_18935 = state_17136__$1;
(statearr_17146_18935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17137 === (6))){
var state_17136__$1 = state_17136;
var statearr_17147_18936 = state_17136__$1;
(statearr_17147_18936[(2)] = null);

(statearr_17147_18936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17137 === (3))){
var inst_17133 = (state_17136[(2)]);
var inst_17134 = cljs.core.async.close_BANG_(out);
var state_17136__$1 = (function (){var statearr_17148 = state_17136;
(statearr_17148[(9)] = inst_17133);

return statearr_17148;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17136__$1,inst_17134);
} else {
if((state_val_17137 === (2))){
var state_17136__$1 = state_17136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17136__$1,(4),ch);
} else {
if((state_val_17137 === (11))){
var inst_17111 = (state_17136[(8)]);
var inst_17122 = (state_17136[(2)]);
var inst_17107 = inst_17111;
var state_17136__$1 = (function (){var statearr_17153 = state_17136;
(statearr_17153[(10)] = inst_17122);

(statearr_17153[(7)] = inst_17107);

return statearr_17153;
})();
var statearr_17155_18942 = state_17136__$1;
(statearr_17155_18942[(2)] = null);

(statearr_17155_18942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17137 === (9))){
var inst_17111 = (state_17136[(8)]);
var state_17136__$1 = state_17136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17136__$1,(11),out,inst_17111);
} else {
if((state_val_17137 === (5))){
var inst_17111 = (state_17136[(8)]);
var inst_17107 = (state_17136[(7)]);
var inst_17117 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17111,inst_17107);
var state_17136__$1 = state_17136;
if(inst_17117){
var statearr_17158_18943 = state_17136__$1;
(statearr_17158_18943[(1)] = (8));

} else {
var statearr_17159_18945 = state_17136__$1;
(statearr_17159_18945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17137 === (10))){
var inst_17128 = (state_17136[(2)]);
var state_17136__$1 = state_17136;
var statearr_17160_18948 = state_17136__$1;
(statearr_17160_18948[(2)] = inst_17128);

(statearr_17160_18948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17137 === (8))){
var inst_17107 = (state_17136[(7)]);
var tmp17157 = inst_17107;
var inst_17107__$1 = tmp17157;
var state_17136__$1 = (function (){var statearr_17163 = state_17136;
(statearr_17163[(7)] = inst_17107__$1);

return statearr_17163;
})();
var statearr_17164_18958 = state_17136__$1;
(statearr_17164_18958[(2)] = null);

(statearr_17164_18958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_17172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17172[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_17172[(1)] = (1));

return statearr_17172;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_17136){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_17136);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e17173){var ex__14015__auto__ = e17173;
var statearr_17174_18965 = state_17136;
(statearr_17174_18965[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_17136[(4)]))){
var statearr_17175_18966 = state_17136;
(statearr_17175_18966[(1)] = cljs.core.first((state_17136[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18968 = state_17136;
state_17136 = G__18968;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_17136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_17136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_17177 = f__14322__auto__();
(statearr_17177[(6)] = c__14321__auto___18928);

return statearr_17177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17183 = arguments.length;
switch (G__17183) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14321__auto___18971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_17224){
var state_val_17225 = (state_17224[(1)]);
if((state_val_17225 === (7))){
var inst_17220 = (state_17224[(2)]);
var state_17224__$1 = state_17224;
var statearr_17227_18973 = state_17224__$1;
(statearr_17227_18973[(2)] = inst_17220);

(statearr_17227_18973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (1))){
var inst_17186 = (new Array(n));
var inst_17187 = inst_17186;
var inst_17188 = (0);
var state_17224__$1 = (function (){var statearr_17231 = state_17224;
(statearr_17231[(7)] = inst_17187);

(statearr_17231[(8)] = inst_17188);

return statearr_17231;
})();
var statearr_17232_18974 = state_17224__$1;
(statearr_17232_18974[(2)] = null);

(statearr_17232_18974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (4))){
var inst_17191 = (state_17224[(9)]);
var inst_17191__$1 = (state_17224[(2)]);
var inst_17192 = (inst_17191__$1 == null);
var inst_17193 = cljs.core.not(inst_17192);
var state_17224__$1 = (function (){var statearr_17233 = state_17224;
(statearr_17233[(9)] = inst_17191__$1);

return statearr_17233;
})();
if(inst_17193){
var statearr_17234_18981 = state_17224__$1;
(statearr_17234_18981[(1)] = (5));

} else {
var statearr_17235_18982 = state_17224__$1;
(statearr_17235_18982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (15))){
var inst_17214 = (state_17224[(2)]);
var state_17224__$1 = state_17224;
var statearr_17238_18983 = state_17224__$1;
(statearr_17238_18983[(2)] = inst_17214);

(statearr_17238_18983[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (13))){
var state_17224__$1 = state_17224;
var statearr_17240_18985 = state_17224__$1;
(statearr_17240_18985[(2)] = null);

(statearr_17240_18985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (6))){
var inst_17188 = (state_17224[(8)]);
var inst_17209 = (inst_17188 > (0));
var state_17224__$1 = state_17224;
if(cljs.core.truth_(inst_17209)){
var statearr_17242_18991 = state_17224__$1;
(statearr_17242_18991[(1)] = (12));

} else {
var statearr_17243_18998 = state_17224__$1;
(statearr_17243_18998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (3))){
var inst_17222 = (state_17224[(2)]);
var state_17224__$1 = state_17224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17224__$1,inst_17222);
} else {
if((state_val_17225 === (12))){
var inst_17187 = (state_17224[(7)]);
var inst_17212 = cljs.core.vec(inst_17187);
var state_17224__$1 = state_17224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17224__$1,(15),out,inst_17212);
} else {
if((state_val_17225 === (2))){
var state_17224__$1 = state_17224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17224__$1,(4),ch);
} else {
if((state_val_17225 === (11))){
var inst_17203 = (state_17224[(2)]);
var inst_17204 = (new Array(n));
var inst_17187 = inst_17204;
var inst_17188 = (0);
var state_17224__$1 = (function (){var statearr_17244 = state_17224;
(statearr_17244[(10)] = inst_17203);

(statearr_17244[(7)] = inst_17187);

(statearr_17244[(8)] = inst_17188);

return statearr_17244;
})();
var statearr_17245_19003 = state_17224__$1;
(statearr_17245_19003[(2)] = null);

(statearr_17245_19003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (9))){
var inst_17187 = (state_17224[(7)]);
var inst_17201 = cljs.core.vec(inst_17187);
var state_17224__$1 = state_17224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17224__$1,(11),out,inst_17201);
} else {
if((state_val_17225 === (5))){
var inst_17187 = (state_17224[(7)]);
var inst_17188 = (state_17224[(8)]);
var inst_17191 = (state_17224[(9)]);
var inst_17196 = (state_17224[(11)]);
var inst_17195 = (inst_17187[inst_17188] = inst_17191);
var inst_17196__$1 = (inst_17188 + (1));
var inst_17197 = (inst_17196__$1 < n);
var state_17224__$1 = (function (){var statearr_17246 = state_17224;
(statearr_17246[(12)] = inst_17195);

(statearr_17246[(11)] = inst_17196__$1);

return statearr_17246;
})();
if(cljs.core.truth_(inst_17197)){
var statearr_17247_19008 = state_17224__$1;
(statearr_17247_19008[(1)] = (8));

} else {
var statearr_17251_19009 = state_17224__$1;
(statearr_17251_19009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (14))){
var inst_17217 = (state_17224[(2)]);
var inst_17218 = cljs.core.async.close_BANG_(out);
var state_17224__$1 = (function (){var statearr_17253 = state_17224;
(statearr_17253[(13)] = inst_17217);

return statearr_17253;
})();
var statearr_17254_19014 = state_17224__$1;
(statearr_17254_19014[(2)] = inst_17218);

(statearr_17254_19014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (10))){
var inst_17207 = (state_17224[(2)]);
var state_17224__$1 = state_17224;
var statearr_17257_19015 = state_17224__$1;
(statearr_17257_19015[(2)] = inst_17207);

(statearr_17257_19015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17225 === (8))){
var inst_17187 = (state_17224[(7)]);
var inst_17196 = (state_17224[(11)]);
var tmp17252 = inst_17187;
var inst_17187__$1 = tmp17252;
var inst_17188 = inst_17196;
var state_17224__$1 = (function (){var statearr_17260 = state_17224;
(statearr_17260[(7)] = inst_17187__$1);

(statearr_17260[(8)] = inst_17188);

return statearr_17260;
})();
var statearr_17261_19023 = state_17224__$1;
(statearr_17261_19023[(2)] = null);

(statearr_17261_19023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_17262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17262[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_17262[(1)] = (1));

return statearr_17262;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_17224){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_17224);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e17273){var ex__14015__auto__ = e17273;
var statearr_17277_19038 = state_17224;
(statearr_17277_19038[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_17224[(4)]))){
var statearr_17278_19039 = state_17224;
(statearr_17278_19039[(1)] = cljs.core.first((state_17224[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19040 = state_17224;
state_17224 = G__19040;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_17224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_17224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_17286 = f__14322__auto__();
(statearr_17286[(6)] = c__14321__auto___18971);

return statearr_17286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17296 = arguments.length;
switch (G__17296) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14321__auto___19048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14322__auto__ = (function (){var switch__14010__auto__ = (function (state_17350){
var state_val_17351 = (state_17350[(1)]);
if((state_val_17351 === (7))){
var inst_17346 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17353_19061 = state_17350__$1;
(statearr_17353_19061[(2)] = inst_17346);

(statearr_17353_19061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (1))){
var inst_17303 = [];
var inst_17304 = inst_17303;
var inst_17305 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17350__$1 = (function (){var statearr_17357 = state_17350;
(statearr_17357[(7)] = inst_17304);

(statearr_17357[(8)] = inst_17305);

return statearr_17357;
})();
var statearr_17358_19067 = state_17350__$1;
(statearr_17358_19067[(2)] = null);

(statearr_17358_19067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (4))){
var inst_17309 = (state_17350[(9)]);
var inst_17309__$1 = (state_17350[(2)]);
var inst_17311 = (inst_17309__$1 == null);
var inst_17312 = cljs.core.not(inst_17311);
var state_17350__$1 = (function (){var statearr_17360 = state_17350;
(statearr_17360[(9)] = inst_17309__$1);

return statearr_17360;
})();
if(inst_17312){
var statearr_17361_19094 = state_17350__$1;
(statearr_17361_19094[(1)] = (5));

} else {
var statearr_17362_19096 = state_17350__$1;
(statearr_17362_19096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (15))){
var inst_17304 = (state_17350[(7)]);
var inst_17338 = cljs.core.vec(inst_17304);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17350__$1,(18),out,inst_17338);
} else {
if((state_val_17351 === (13))){
var inst_17332 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17367_19103 = state_17350__$1;
(statearr_17367_19103[(2)] = inst_17332);

(statearr_17367_19103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (6))){
var inst_17304 = (state_17350[(7)]);
var inst_17335 = inst_17304.length;
var inst_17336 = (inst_17335 > (0));
var state_17350__$1 = state_17350;
if(cljs.core.truth_(inst_17336)){
var statearr_17371_19107 = state_17350__$1;
(statearr_17371_19107[(1)] = (15));

} else {
var statearr_17372_19108 = state_17350__$1;
(statearr_17372_19108[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (17))){
var inst_17343 = (state_17350[(2)]);
var inst_17344 = cljs.core.async.close_BANG_(out);
var state_17350__$1 = (function (){var statearr_17375 = state_17350;
(statearr_17375[(10)] = inst_17343);

return statearr_17375;
})();
var statearr_17376_19111 = state_17350__$1;
(statearr_17376_19111[(2)] = inst_17344);

(statearr_17376_19111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (3))){
var inst_17348 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17350__$1,inst_17348);
} else {
if((state_val_17351 === (12))){
var inst_17304 = (state_17350[(7)]);
var inst_17325 = cljs.core.vec(inst_17304);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17350__$1,(14),out,inst_17325);
} else {
if((state_val_17351 === (2))){
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17350__$1,(4),ch);
} else {
if((state_val_17351 === (11))){
var inst_17304 = (state_17350[(7)]);
var inst_17309 = (state_17350[(9)]);
var inst_17314 = (state_17350[(11)]);
var inst_17322 = inst_17304.push(inst_17309);
var tmp17377 = inst_17304;
var inst_17304__$1 = tmp17377;
var inst_17305 = inst_17314;
var state_17350__$1 = (function (){var statearr_17379 = state_17350;
(statearr_17379[(12)] = inst_17322);

(statearr_17379[(7)] = inst_17304__$1);

(statearr_17379[(8)] = inst_17305);

return statearr_17379;
})();
var statearr_17381_19127 = state_17350__$1;
(statearr_17381_19127[(2)] = null);

(statearr_17381_19127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (9))){
var inst_17305 = (state_17350[(8)]);
var inst_17318 = cljs.core.keyword_identical_QMARK_(inst_17305,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17350__$1 = state_17350;
var statearr_17383_19134 = state_17350__$1;
(statearr_17383_19134[(2)] = inst_17318);

(statearr_17383_19134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (5))){
var inst_17309 = (state_17350[(9)]);
var inst_17314 = (state_17350[(11)]);
var inst_17305 = (state_17350[(8)]);
var inst_17315 = (state_17350[(13)]);
var inst_17314__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17309) : f.call(null,inst_17309));
var inst_17315__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17314__$1,inst_17305);
var state_17350__$1 = (function (){var statearr_17385 = state_17350;
(statearr_17385[(11)] = inst_17314__$1);

(statearr_17385[(13)] = inst_17315__$1);

return statearr_17385;
})();
if(inst_17315__$1){
var statearr_17390_19144 = state_17350__$1;
(statearr_17390_19144[(1)] = (8));

} else {
var statearr_17392_19145 = state_17350__$1;
(statearr_17392_19145[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (14))){
var inst_17309 = (state_17350[(9)]);
var inst_17314 = (state_17350[(11)]);
var inst_17327 = (state_17350[(2)]);
var inst_17328 = [];
var inst_17329 = inst_17328.push(inst_17309);
var inst_17304 = inst_17328;
var inst_17305 = inst_17314;
var state_17350__$1 = (function (){var statearr_17399 = state_17350;
(statearr_17399[(14)] = inst_17327);

(statearr_17399[(15)] = inst_17329);

(statearr_17399[(7)] = inst_17304);

(statearr_17399[(8)] = inst_17305);

return statearr_17399;
})();
var statearr_17400_19166 = state_17350__$1;
(statearr_17400_19166[(2)] = null);

(statearr_17400_19166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (16))){
var state_17350__$1 = state_17350;
var statearr_17401_19177 = state_17350__$1;
(statearr_17401_19177[(2)] = null);

(statearr_17401_19177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (10))){
var inst_17320 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
if(cljs.core.truth_(inst_17320)){
var statearr_17402_19189 = state_17350__$1;
(statearr_17402_19189[(1)] = (11));

} else {
var statearr_17403_19192 = state_17350__$1;
(statearr_17403_19192[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (18))){
var inst_17340 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17404_19207 = state_17350__$1;
(statearr_17404_19207[(2)] = inst_17340);

(statearr_17404_19207[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (8))){
var inst_17315 = (state_17350[(13)]);
var state_17350__$1 = state_17350;
var statearr_17405_19221 = state_17350__$1;
(statearr_17405_19221[(2)] = inst_17315);

(statearr_17405_19221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14011__auto__ = null;
var cljs$core$async$state_machine__14011__auto____0 = (function (){
var statearr_17412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17412[(0)] = cljs$core$async$state_machine__14011__auto__);

(statearr_17412[(1)] = (1));

return statearr_17412;
});
var cljs$core$async$state_machine__14011__auto____1 = (function (state_17350){
while(true){
var ret_value__14012__auto__ = (function (){try{while(true){
var result__14014__auto__ = switch__14010__auto__(state_17350);
if(cljs.core.keyword_identical_QMARK_(result__14014__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14014__auto__;
}
break;
}
}catch (e17415){var ex__14015__auto__ = e17415;
var statearr_17416_19244 = state_17350;
(statearr_17416_19244[(2)] = ex__14015__auto__);


if(cljs.core.seq((state_17350[(4)]))){
var statearr_17417_19255 = state_17350;
(statearr_17417_19255[(1)] = cljs.core.first((state_17350[(4)])));

} else {
throw ex__14015__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14012__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19264 = state_17350;
state_17350 = G__19264;
continue;
} else {
return ret_value__14012__auto__;
}
break;
}
});
cljs$core$async$state_machine__14011__auto__ = function(state_17350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14011__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14011__auto____1.call(this,state_17350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14011__auto____0;
cljs$core$async$state_machine__14011__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14011__auto____1;
return cljs$core$async$state_machine__14011__auto__;
})()
})();
var state__14323__auto__ = (function (){var statearr_17426 = f__14322__auto__();
(statearr_17426[(6)] = c__14321__auto___19048);

return statearr_17426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14323__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

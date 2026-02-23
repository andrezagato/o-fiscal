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
cljs.core.async.t_cljs$core$async14388 = (function (f,blockable,meta14389){
this.f = f;
this.blockable = blockable;
this.meta14389 = meta14389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14390,meta14389__$1){
var self__ = this;
var _14390__$1 = this;
return (new cljs.core.async.t_cljs$core$async14388(self__.f,self__.blockable,meta14389__$1));
}));

(cljs.core.async.t_cljs$core$async14388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14390){
var self__ = this;
var _14390__$1 = this;
return self__.meta14389;
}));

(cljs.core.async.t_cljs$core$async14388.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14388.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14389","meta14389",2107943330,null)], null);
}));

(cljs.core.async.t_cljs$core$async14388.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14388");

(cljs.core.async.t_cljs$core$async14388.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14388");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14388.
 */
cljs.core.async.__GT_t_cljs$core$async14388 = (function cljs$core$async$__GT_t_cljs$core$async14388(f,blockable,meta14389){
return (new cljs.core.async.t_cljs$core$async14388(f,blockable,meta14389));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14386 = arguments.length;
switch (G__14386) {
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
return (new cljs.core.async.t_cljs$core$async14388(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14420 = arguments.length;
switch (G__14420) {
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
var G__14426 = arguments.length;
switch (G__14426) {
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
var G__14446 = arguments.length;
switch (G__14446) {
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
var val_17614 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17614) : fn1.call(null,val_17614));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17614) : fn1.call(null,val_17614));
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
var G__14465 = arguments.length;
switch (G__14465) {
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
var n__5741__auto___17616 = n;
var x_17620 = (0);
while(true){
if((x_17620 < n__5741__auto___17616)){
(a[x_17620] = x_17620);

var G__17621 = (x_17620 + (1));
x_17620 = G__17621;
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
cljs.core.async.t_cljs$core$async14479 = (function (flag,meta14480){
this.flag = flag;
this.meta14480 = meta14480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14481,meta14480__$1){
var self__ = this;
var _14481__$1 = this;
return (new cljs.core.async.t_cljs$core$async14479(self__.flag,meta14480__$1));
}));

(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14481){
var self__ = this;
var _14481__$1 = this;
return self__.meta14480;
}));

(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14479.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14480","meta14480",-1054677042,null)], null);
}));

(cljs.core.async.t_cljs$core$async14479.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14479");

(cljs.core.async.t_cljs$core$async14479.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14479");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14479.
 */
cljs.core.async.__GT_t_cljs$core$async14479 = (function cljs$core$async$__GT_t_cljs$core$async14479(flag,meta14480){
return (new cljs.core.async.t_cljs$core$async14479(flag,meta14480));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14479(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14494 = (function (flag,cb,meta14495){
this.flag = flag;
this.cb = cb;
this.meta14495 = meta14495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14496,meta14495__$1){
var self__ = this;
var _14496__$1 = this;
return (new cljs.core.async.t_cljs$core$async14494(self__.flag,self__.cb,meta14495__$1));
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14496){
var self__ = this;
var _14496__$1 = this;
return self__.meta14495;
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14495","meta14495",198917788,null)], null);
}));

(cljs.core.async.t_cljs$core$async14494.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14494");

(cljs.core.async.t_cljs$core$async14494.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14494");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14494.
 */
cljs.core.async.__GT_t_cljs$core$async14494 = (function cljs$core$async$__GT_t_cljs$core$async14494(flag,cb,meta14495){
return (new cljs.core.async.t_cljs$core$async14494(flag,cb,meta14495));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14494(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_17648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_17648)){
if((!(((port_17648.cljs$core$IFn$_invoke$arity$1 ? port_17648.cljs$core$IFn$_invoke$arity$1((1)) : port_17648.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__17649 = (i + (1));
i = G__17649;
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
return (function (p1__14540_SHARP_){
var G__14570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14540_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14570) : fret.call(null,G__14570));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14545_SHARP_){
var G__14571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14545_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14571) : fret.call(null,G__14571));
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
var G__17664 = (i + (1));
i = G__17664;
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
var len__5876__auto___17675 = arguments.length;
var i__5877__auto___17676 = (0);
while(true){
if((i__5877__auto___17676 < len__5876__auto___17675)){
args__5882__auto__.push((arguments[i__5877__auto___17676]));

var G__17681 = (i__5877__auto___17676 + (1));
i__5877__auto___17676 = G__17681;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14594){
var map__14597 = p__14594;
var map__14597__$1 = cljs.core.__destructure_map(map__14597);
var opts = map__14597__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14588){
var G__14589 = cljs.core.first(seq14588);
var seq14588__$1 = cljs.core.next(seq14588);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14589,seq14588__$1);
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
var G__14624 = arguments.length;
switch (G__14624) {
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
var c__14287__auto___17701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_14704){
var state_val_14706 = (state_14704[(1)]);
if((state_val_14706 === (7))){
var inst_14692 = (state_14704[(2)]);
var state_14704__$1 = state_14704;
var statearr_14721_17702 = state_14704__$1;
(statearr_14721_17702[(2)] = inst_14692);

(statearr_14721_17702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (1))){
var state_14704__$1 = state_14704;
var statearr_14724_17703 = state_14704__$1;
(statearr_14724_17703[(2)] = null);

(statearr_14724_17703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (4))){
var inst_14667 = (state_14704[(7)]);
var inst_14667__$1 = (state_14704[(2)]);
var inst_14668 = (inst_14667__$1 == null);
var state_14704__$1 = (function (){var statearr_14735 = state_14704;
(statearr_14735[(7)] = inst_14667__$1);

return statearr_14735;
})();
if(cljs.core.truth_(inst_14668)){
var statearr_14737_17704 = state_14704__$1;
(statearr_14737_17704[(1)] = (5));

} else {
var statearr_14738_17705 = state_14704__$1;
(statearr_14738_17705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (13))){
var state_14704__$1 = state_14704;
var statearr_14748_17706 = state_14704__$1;
(statearr_14748_17706[(2)] = null);

(statearr_14748_17706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (6))){
var inst_14667 = (state_14704[(7)]);
var state_14704__$1 = state_14704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14704__$1,(11),to,inst_14667);
} else {
if((state_val_14706 === (3))){
var inst_14695 = (state_14704[(2)]);
var state_14704__$1 = state_14704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14704__$1,inst_14695);
} else {
if((state_val_14706 === (12))){
var state_14704__$1 = state_14704;
var statearr_14760_17707 = state_14704__$1;
(statearr_14760_17707[(2)] = null);

(statearr_14760_17707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (2))){
var state_14704__$1 = state_14704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14704__$1,(4),from);
} else {
if((state_val_14706 === (11))){
var inst_14679 = (state_14704[(2)]);
var state_14704__$1 = state_14704;
if(cljs.core.truth_(inst_14679)){
var statearr_14764_17708 = state_14704__$1;
(statearr_14764_17708[(1)] = (12));

} else {
var statearr_14766_17709 = state_14704__$1;
(statearr_14766_17709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (9))){
var state_14704__$1 = state_14704;
var statearr_14770_17710 = state_14704__$1;
(statearr_14770_17710[(2)] = null);

(statearr_14770_17710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (5))){
var state_14704__$1 = state_14704;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14772_17711 = state_14704__$1;
(statearr_14772_17711[(1)] = (8));

} else {
var statearr_14774_17712 = state_14704__$1;
(statearr_14774_17712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (14))){
var inst_14690 = (state_14704[(2)]);
var state_14704__$1 = state_14704;
var statearr_14777_17713 = state_14704__$1;
(statearr_14777_17713[(2)] = inst_14690);

(statearr_14777_17713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (10))){
var inst_14676 = (state_14704[(2)]);
var state_14704__$1 = state_14704;
var statearr_14779_17714 = state_14704__$1;
(statearr_14779_17714[(2)] = inst_14676);

(statearr_14779_17714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14706 === (8))){
var inst_14671 = cljs.core.async.close_BANG_(to);
var state_14704__$1 = state_14704;
var statearr_14780_17715 = state_14704__$1;
(statearr_14780_17715[(2)] = inst_14671);

(statearr_14780_17715[(1)] = (10));


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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_14783 = [null,null,null,null,null,null,null,null];
(statearr_14783[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_14783[(1)] = (1));

return statearr_14783;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_14704){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14704);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14785){var ex__14094__auto__ = e14785;
var statearr_14787_17716 = state_14704;
(statearr_14787_17716[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14704[(4)]))){
var statearr_14789_17718 = state_14704;
(statearr_14789_17718[(1)] = cljs.core.first((state_14704[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17719 = state_14704;
state_14704 = G__17719;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_14704){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_14704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_14790 = f__14288__auto__();
(statearr_14790[(6)] = c__14287__auto___17701);

return statearr_14790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
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
var process__$1 = (function (p__14816){
var vec__14818 = p__14816;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14818,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14818,(1),null);
var job = vec__14818;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14287__auto___17721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_14831){
var state_val_14833 = (state_14831[(1)]);
if((state_val_14833 === (1))){
var state_14831__$1 = state_14831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14831__$1,(2),res,v);
} else {
if((state_val_14833 === (2))){
var inst_14825 = (state_14831[(2)]);
var inst_14826 = cljs.core.async.close_BANG_(res);
var state_14831__$1 = (function (){var statearr_14835 = state_14831;
(statearr_14835[(7)] = inst_14825);

return statearr_14835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14831__$1,inst_14826);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_14836 = [null,null,null,null,null,null,null,null];
(statearr_14836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__);

(statearr_14836[(1)] = (1));

return statearr_14836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1 = (function (state_14831){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14831);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14837){var ex__14094__auto__ = e14837;
var statearr_14838_17731 = state_14831;
(statearr_14838_17731[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14831[(4)]))){
var statearr_14839_17734 = state_14831;
(statearr_14839_17734[(1)] = cljs.core.first((state_14831[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17737 = state_14831;
state_14831 = G__17737;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = function(state_14831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1.call(this,state_14831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_14842 = f__14288__auto__();
(statearr_14842[(6)] = c__14287__auto___17721);

return statearr_14842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14847){
var vec__14848 = p__14847;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14848,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14848,(1),null);
var job = vec__14848;
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
var n__5741__auto___17756 = n;
var __17758 = (0);
while(true){
if((__17758 < n__5741__auto___17756)){
var G__14853_17760 = type;
var G__14853_17761__$1 = (((G__14853_17760 instanceof cljs.core.Keyword))?G__14853_17760.fqn:null);
switch (G__14853_17761__$1) {
case "compute":
var c__14287__auto___17764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17758,c__14287__auto___17764,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async){
return (function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = ((function (__17758,c__14287__auto___17764,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async){
return (function (state_14866){
var state_val_14867 = (state_14866[(1)]);
if((state_val_14867 === (1))){
var state_14866__$1 = state_14866;
var statearr_14872_17774 = state_14866__$1;
(statearr_14872_17774[(2)] = null);

(statearr_14872_17774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14867 === (2))){
var state_14866__$1 = state_14866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14866__$1,(4),jobs);
} else {
if((state_val_14867 === (3))){
var inst_14864 = (state_14866[(2)]);
var state_14866__$1 = state_14866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14866__$1,inst_14864);
} else {
if((state_val_14867 === (4))){
var inst_14856 = (state_14866[(2)]);
var inst_14857 = process__$1(inst_14856);
var state_14866__$1 = state_14866;
if(cljs.core.truth_(inst_14857)){
var statearr_14876_17778 = state_14866__$1;
(statearr_14876_17778[(1)] = (5));

} else {
var statearr_14877_17779 = state_14866__$1;
(statearr_14877_17779[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14867 === (5))){
var state_14866__$1 = state_14866;
var statearr_14879_17780 = state_14866__$1;
(statearr_14879_17780[(2)] = null);

(statearr_14879_17780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14867 === (6))){
var state_14866__$1 = state_14866;
var statearr_14884_17781 = state_14866__$1;
(statearr_14884_17781[(2)] = null);

(statearr_14884_17781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14867 === (7))){
var inst_14862 = (state_14866[(2)]);
var state_14866__$1 = state_14866;
var statearr_14885_17783 = state_14866__$1;
(statearr_14885_17783[(2)] = inst_14862);

(statearr_14885_17783[(1)] = (3));


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
});})(__17758,c__14287__auto___17764,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async))
;
return ((function (__17758,switch__14090__auto__,c__14287__auto___17764,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_14890 = [null,null,null,null,null,null,null];
(statearr_14890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__);

(statearr_14890[(1)] = (1));

return statearr_14890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1 = (function (state_14866){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14866);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14891){var ex__14094__auto__ = e14891;
var statearr_14892_17785 = state_14866;
(statearr_14892_17785[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14866[(4)]))){
var statearr_14897_17786 = state_14866;
(statearr_14897_17786[(1)] = cljs.core.first((state_14866[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17787 = state_14866;
state_14866 = G__17787;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = function(state_14866){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1.call(this,state_14866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__;
})()
;})(__17758,switch__14090__auto__,c__14287__auto___17764,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async))
})();
var state__14289__auto__ = (function (){var statearr_14899 = f__14288__auto__();
(statearr_14899[(6)] = c__14287__auto___17764);

return statearr_14899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
});})(__17758,c__14287__auto___17764,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async))
);


break;
case "async":
var c__14287__auto___17788 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17758,c__14287__auto___17788,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async){
return (function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = ((function (__17758,c__14287__auto___17788,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async){
return (function (state_14916){
var state_val_14917 = (state_14916[(1)]);
if((state_val_14917 === (1))){
var state_14916__$1 = state_14916;
var statearr_14920_17790 = state_14916__$1;
(statearr_14920_17790[(2)] = null);

(statearr_14920_17790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14917 === (2))){
var state_14916__$1 = state_14916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14916__$1,(4),jobs);
} else {
if((state_val_14917 === (3))){
var inst_14914 = (state_14916[(2)]);
var state_14916__$1 = state_14916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14916__$1,inst_14914);
} else {
if((state_val_14917 === (4))){
var inst_14904 = (state_14916[(2)]);
var inst_14905 = async(inst_14904);
var state_14916__$1 = state_14916;
if(cljs.core.truth_(inst_14905)){
var statearr_14922_17793 = state_14916__$1;
(statearr_14922_17793[(1)] = (5));

} else {
var statearr_14923_17794 = state_14916__$1;
(statearr_14923_17794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14917 === (5))){
var state_14916__$1 = state_14916;
var statearr_14926_17795 = state_14916__$1;
(statearr_14926_17795[(2)] = null);

(statearr_14926_17795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14917 === (6))){
var state_14916__$1 = state_14916;
var statearr_14929_17798 = state_14916__$1;
(statearr_14929_17798[(2)] = null);

(statearr_14929_17798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14917 === (7))){
var inst_14912 = (state_14916[(2)]);
var state_14916__$1 = state_14916;
var statearr_14934_17801 = state_14916__$1;
(statearr_14934_17801[(2)] = inst_14912);

(statearr_14934_17801[(1)] = (3));


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
});})(__17758,c__14287__auto___17788,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async))
;
return ((function (__17758,switch__14090__auto__,c__14287__auto___17788,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_14937 = [null,null,null,null,null,null,null];
(statearr_14937[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__);

(statearr_14937[(1)] = (1));

return statearr_14937;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1 = (function (state_14916){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14916);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e14938){var ex__14094__auto__ = e14938;
var statearr_14939_17812 = state_14916;
(statearr_14939_17812[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14916[(4)]))){
var statearr_14940_17813 = state_14916;
(statearr_14940_17813[(1)] = cljs.core.first((state_14916[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17815 = state_14916;
state_14916 = G__17815;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = function(state_14916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1.call(this,state_14916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__;
})()
;})(__17758,switch__14090__auto__,c__14287__auto___17788,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async))
})();
var state__14289__auto__ = (function (){var statearr_14941 = f__14288__auto__();
(statearr_14941[(6)] = c__14287__auto___17788);

return statearr_14941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
});})(__17758,c__14287__auto___17788,G__14853_17760,G__14853_17761__$1,n__5741__auto___17756,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14853_17761__$1))));

}

var G__17819 = (__17758 + (1));
__17758 = G__17819;
continue;
} else {
}
break;
}

var c__14287__auto___17820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_14972){
var state_val_14973 = (state_14972[(1)]);
if((state_val_14973 === (7))){
var inst_14968 = (state_14972[(2)]);
var state_14972__$1 = state_14972;
var statearr_14984_17822 = state_14972__$1;
(statearr_14984_17822[(2)] = inst_14968);

(statearr_14984_17822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14973 === (1))){
var state_14972__$1 = state_14972;
var statearr_14985_17826 = state_14972__$1;
(statearr_14985_17826[(2)] = null);

(statearr_14985_17826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14973 === (4))){
var inst_14949 = (state_14972[(7)]);
var inst_14949__$1 = (state_14972[(2)]);
var inst_14950 = (inst_14949__$1 == null);
var state_14972__$1 = (function (){var statearr_14986 = state_14972;
(statearr_14986[(7)] = inst_14949__$1);

return statearr_14986;
})();
if(cljs.core.truth_(inst_14950)){
var statearr_14987_17827 = state_14972__$1;
(statearr_14987_17827[(1)] = (5));

} else {
var statearr_14988_17834 = state_14972__$1;
(statearr_14988_17834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14973 === (6))){
var inst_14949 = (state_14972[(7)]);
var inst_14954 = (state_14972[(8)]);
var inst_14954__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14957 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14958 = [inst_14949,inst_14954__$1];
var inst_14959 = (new cljs.core.PersistentVector(null,2,(5),inst_14957,inst_14958,null));
var state_14972__$1 = (function (){var statearr_14991 = state_14972;
(statearr_14991[(8)] = inst_14954__$1);

return statearr_14991;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14972__$1,(8),jobs,inst_14959);
} else {
if((state_val_14973 === (3))){
var inst_14970 = (state_14972[(2)]);
var state_14972__$1 = state_14972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14972__$1,inst_14970);
} else {
if((state_val_14973 === (2))){
var state_14972__$1 = state_14972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14972__$1,(4),from);
} else {
if((state_val_14973 === (9))){
var inst_14963 = (state_14972[(2)]);
var state_14972__$1 = (function (){var statearr_15000 = state_14972;
(statearr_15000[(9)] = inst_14963);

return statearr_15000;
})();
var statearr_15001_17848 = state_14972__$1;
(statearr_15001_17848[(2)] = null);

(statearr_15001_17848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14973 === (5))){
var inst_14952 = cljs.core.async.close_BANG_(jobs);
var state_14972__$1 = state_14972;
var statearr_15002_17850 = state_14972__$1;
(statearr_15002_17850[(2)] = inst_14952);

(statearr_15002_17850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14973 === (8))){
var inst_14954 = (state_14972[(8)]);
var inst_14961 = (state_14972[(2)]);
var state_14972__$1 = (function (){var statearr_15005 = state_14972;
(statearr_15005[(10)] = inst_14961);

return statearr_15005;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14972__$1,(9),results,inst_14954);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_15007 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__);

(statearr_15007[(1)] = (1));

return statearr_15007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1 = (function (state_14972){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_14972);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15008){var ex__14094__auto__ = e15008;
var statearr_15011_17851 = state_14972;
(statearr_15011_17851[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_14972[(4)]))){
var statearr_15012_17852 = state_14972;
(statearr_15012_17852[(1)] = cljs.core.first((state_14972[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17853 = state_14972;
state_14972 = G__17853;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = function(state_14972){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1.call(this,state_14972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_15017 = f__14288__auto__();
(statearr_15017[(6)] = c__14287__auto___17820);

return statearr_15017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));


var c__14287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_15066){
var state_val_15067 = (state_15066[(1)]);
if((state_val_15067 === (7))){
var inst_15061 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
var statearr_15083_17854 = state_15066__$1;
(statearr_15083_17854[(2)] = inst_15061);

(statearr_15083_17854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (20))){
var state_15066__$1 = state_15066;
var statearr_15087_17855 = state_15066__$1;
(statearr_15087_17855[(2)] = null);

(statearr_15087_17855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (1))){
var state_15066__$1 = state_15066;
var statearr_15093_17856 = state_15066__$1;
(statearr_15093_17856[(2)] = null);

(statearr_15093_17856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (4))){
var inst_15020 = (state_15066[(7)]);
var inst_15020__$1 = (state_15066[(2)]);
var inst_15021 = (inst_15020__$1 == null);
var state_15066__$1 = (function (){var statearr_15095 = state_15066;
(statearr_15095[(7)] = inst_15020__$1);

return statearr_15095;
})();
if(cljs.core.truth_(inst_15021)){
var statearr_15096_17857 = state_15066__$1;
(statearr_15096_17857[(1)] = (5));

} else {
var statearr_15098_17858 = state_15066__$1;
(statearr_15098_17858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (15))){
var inst_15035 = (state_15066[(8)]);
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15066__$1,(18),to,inst_15035);
} else {
if((state_val_15067 === (21))){
var inst_15056 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
var statearr_15107_17863 = state_15066__$1;
(statearr_15107_17863[(2)] = inst_15056);

(statearr_15107_17863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (13))){
var inst_15058 = (state_15066[(2)]);
var state_15066__$1 = (function (){var statearr_15113 = state_15066;
(statearr_15113[(9)] = inst_15058);

return statearr_15113;
})();
var statearr_15114_17868 = state_15066__$1;
(statearr_15114_17868[(2)] = null);

(statearr_15114_17868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (6))){
var inst_15020 = (state_15066[(7)]);
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15066__$1,(11),inst_15020);
} else {
if((state_val_15067 === (17))){
var inst_15051 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
if(cljs.core.truth_(inst_15051)){
var statearr_15119_17877 = state_15066__$1;
(statearr_15119_17877[(1)] = (19));

} else {
var statearr_15120_17878 = state_15066__$1;
(statearr_15120_17878[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (3))){
var inst_15063 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15066__$1,inst_15063);
} else {
if((state_val_15067 === (12))){
var inst_15032 = (state_15066[(10)]);
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15066__$1,(14),inst_15032);
} else {
if((state_val_15067 === (2))){
var state_15066__$1 = state_15066;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15066__$1,(4),results);
} else {
if((state_val_15067 === (19))){
var state_15066__$1 = state_15066;
var statearr_15130_17881 = state_15066__$1;
(statearr_15130_17881[(2)] = null);

(statearr_15130_17881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (11))){
var inst_15032 = (state_15066[(2)]);
var state_15066__$1 = (function (){var statearr_15131 = state_15066;
(statearr_15131[(10)] = inst_15032);

return statearr_15131;
})();
var statearr_15132_17882 = state_15066__$1;
(statearr_15132_17882[(2)] = null);

(statearr_15132_17882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (9))){
var state_15066__$1 = state_15066;
var statearr_15133_17885 = state_15066__$1;
(statearr_15133_17885[(2)] = null);

(statearr_15133_17885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (5))){
var state_15066__$1 = state_15066;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15134_17887 = state_15066__$1;
(statearr_15134_17887[(1)] = (8));

} else {
var statearr_15135_17888 = state_15066__$1;
(statearr_15135_17888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (14))){
var inst_15035 = (state_15066[(8)]);
var inst_15042 = (state_15066[(11)]);
var inst_15035__$1 = (state_15066[(2)]);
var inst_15041 = (inst_15035__$1 == null);
var inst_15042__$1 = cljs.core.not(inst_15041);
var state_15066__$1 = (function (){var statearr_15136 = state_15066;
(statearr_15136[(8)] = inst_15035__$1);

(statearr_15136[(11)] = inst_15042__$1);

return statearr_15136;
})();
if(inst_15042__$1){
var statearr_15138_17890 = state_15066__$1;
(statearr_15138_17890[(1)] = (15));

} else {
var statearr_15139_17891 = state_15066__$1;
(statearr_15139_17891[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (16))){
var inst_15042 = (state_15066[(11)]);
var state_15066__$1 = state_15066;
var statearr_15141_17892 = state_15066__$1;
(statearr_15141_17892[(2)] = inst_15042);

(statearr_15141_17892[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (10))){
var inst_15029 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
var statearr_15143_17899 = state_15066__$1;
(statearr_15143_17899[(2)] = inst_15029);

(statearr_15143_17899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (18))){
var inst_15048 = (state_15066[(2)]);
var state_15066__$1 = state_15066;
var statearr_15145_17900 = state_15066__$1;
(statearr_15145_17900[(2)] = inst_15048);

(statearr_15145_17900[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15067 === (8))){
var inst_15026 = cljs.core.async.close_BANG_(to);
var state_15066__$1 = state_15066;
var statearr_15147_17901 = state_15066__$1;
(statearr_15147_17901[(2)] = inst_15026);

(statearr_15147_17901[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_15149 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__);

(statearr_15149[(1)] = (1));

return statearr_15149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1 = (function (state_15066){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15066);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15154){var ex__14094__auto__ = e15154;
var statearr_15156_17902 = state_15066;
(statearr_15156_17902[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15066[(4)]))){
var statearr_15162_17903 = state_15066;
(statearr_15162_17903[(1)] = cljs.core.first((state_15066[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17905 = state_15066;
state_15066 = G__17905;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__ = function(state_15066){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1.call(this,state_15066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_15171 = f__14288__auto__();
(statearr_15171[(6)] = c__14287__auto__);

return statearr_15171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));

return c__14287__auto__;
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
var G__15177 = arguments.length;
switch (G__15177) {
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
var G__15180 = arguments.length;
switch (G__15180) {
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
var G__15189 = arguments.length;
switch (G__15189) {
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
var c__14287__auto___17948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_15221){
var state_val_15222 = (state_15221[(1)]);
if((state_val_15222 === (7))){
var inst_15217 = (state_15221[(2)]);
var state_15221__$1 = state_15221;
var statearr_15230_17951 = state_15221__$1;
(statearr_15230_17951[(2)] = inst_15217);

(statearr_15230_17951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (1))){
var state_15221__$1 = state_15221;
var statearr_15232_17953 = state_15221__$1;
(statearr_15232_17953[(2)] = null);

(statearr_15232_17953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (4))){
var inst_15195 = (state_15221[(7)]);
var inst_15195__$1 = (state_15221[(2)]);
var inst_15196 = (inst_15195__$1 == null);
var state_15221__$1 = (function (){var statearr_15236 = state_15221;
(statearr_15236[(7)] = inst_15195__$1);

return statearr_15236;
})();
if(cljs.core.truth_(inst_15196)){
var statearr_15237_17954 = state_15221__$1;
(statearr_15237_17954[(1)] = (5));

} else {
var statearr_15238_17955 = state_15221__$1;
(statearr_15238_17955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (13))){
var state_15221__$1 = state_15221;
var statearr_15239_17956 = state_15221__$1;
(statearr_15239_17956[(2)] = null);

(statearr_15239_17956[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (6))){
var inst_15195 = (state_15221[(7)]);
var inst_15204 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15195) : p.call(null,inst_15195));
var state_15221__$1 = state_15221;
if(cljs.core.truth_(inst_15204)){
var statearr_15243_17960 = state_15221__$1;
(statearr_15243_17960[(1)] = (9));

} else {
var statearr_15244_17961 = state_15221__$1;
(statearr_15244_17961[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (3))){
var inst_15219 = (state_15221[(2)]);
var state_15221__$1 = state_15221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15221__$1,inst_15219);
} else {
if((state_val_15222 === (12))){
var state_15221__$1 = state_15221;
var statearr_15248_17962 = state_15221__$1;
(statearr_15248_17962[(2)] = null);

(statearr_15248_17962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (2))){
var state_15221__$1 = state_15221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15221__$1,(4),ch);
} else {
if((state_val_15222 === (11))){
var inst_15195 = (state_15221[(7)]);
var inst_15208 = (state_15221[(2)]);
var state_15221__$1 = state_15221;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15221__$1,(8),inst_15208,inst_15195);
} else {
if((state_val_15222 === (9))){
var state_15221__$1 = state_15221;
var statearr_15249_17968 = state_15221__$1;
(statearr_15249_17968[(2)] = tc);

(statearr_15249_17968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (5))){
var inst_15198 = cljs.core.async.close_BANG_(tc);
var inst_15199 = cljs.core.async.close_BANG_(fc);
var state_15221__$1 = (function (){var statearr_15250 = state_15221;
(statearr_15250[(8)] = inst_15198);

return statearr_15250;
})();
var statearr_15251_17970 = state_15221__$1;
(statearr_15251_17970[(2)] = inst_15199);

(statearr_15251_17970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (14))){
var inst_15215 = (state_15221[(2)]);
var state_15221__$1 = state_15221;
var statearr_15252_17974 = state_15221__$1;
(statearr_15252_17974[(2)] = inst_15215);

(statearr_15252_17974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (10))){
var state_15221__$1 = state_15221;
var statearr_15253_17977 = state_15221__$1;
(statearr_15253_17977[(2)] = fc);

(statearr_15253_17977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15222 === (8))){
var inst_15210 = (state_15221[(2)]);
var state_15221__$1 = state_15221;
if(cljs.core.truth_(inst_15210)){
var statearr_15256_17981 = state_15221__$1;
(statearr_15256_17981[(1)] = (12));

} else {
var statearr_15257_17982 = state_15221__$1;
(statearr_15257_17982[(1)] = (13));

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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_15263 = [null,null,null,null,null,null,null,null,null];
(statearr_15263[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_15263[(1)] = (1));

return statearr_15263;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_15221){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15221);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15264){var ex__14094__auto__ = e15264;
var statearr_15265_17983 = state_15221;
(statearr_15265_17983[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15221[(4)]))){
var statearr_15266_17988 = state_15221;
(statearr_15266_17988[(1)] = cljs.core.first((state_15221[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17992 = state_15221;
state_15221 = G__17992;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_15221){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_15221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_15268 = f__14288__auto__();
(statearr_15268[(6)] = c__14287__auto___17948);

return statearr_15268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
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
var c__14287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_15313){
var state_val_15314 = (state_15313[(1)]);
if((state_val_15314 === (7))){
var inst_15309 = (state_15313[(2)]);
var state_15313__$1 = state_15313;
var statearr_15322_18001 = state_15313__$1;
(statearr_15322_18001[(2)] = inst_15309);

(statearr_15322_18001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15314 === (1))){
var inst_15287 = init;
var inst_15288 = inst_15287;
var state_15313__$1 = (function (){var statearr_15323 = state_15313;
(statearr_15323[(7)] = inst_15288);

return statearr_15323;
})();
var statearr_15324_18003 = state_15313__$1;
(statearr_15324_18003[(2)] = null);

(statearr_15324_18003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15314 === (4))){
var inst_15291 = (state_15313[(8)]);
var inst_15291__$1 = (state_15313[(2)]);
var inst_15293 = (inst_15291__$1 == null);
var state_15313__$1 = (function (){var statearr_15332 = state_15313;
(statearr_15332[(8)] = inst_15291__$1);

return statearr_15332;
})();
if(cljs.core.truth_(inst_15293)){
var statearr_15333_18009 = state_15313__$1;
(statearr_15333_18009[(1)] = (5));

} else {
var statearr_15334_18010 = state_15313__$1;
(statearr_15334_18010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15314 === (6))){
var inst_15288 = (state_15313[(7)]);
var inst_15291 = (state_15313[(8)]);
var inst_15296 = (state_15313[(9)]);
var inst_15296__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15288,inst_15291) : f.call(null,inst_15288,inst_15291));
var inst_15297 = cljs.core.reduced_QMARK_(inst_15296__$1);
var state_15313__$1 = (function (){var statearr_15335 = state_15313;
(statearr_15335[(9)] = inst_15296__$1);

return statearr_15335;
})();
if(inst_15297){
var statearr_15336_18013 = state_15313__$1;
(statearr_15336_18013[(1)] = (8));

} else {
var statearr_15337_18015 = state_15313__$1;
(statearr_15337_18015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15314 === (3))){
var inst_15311 = (state_15313[(2)]);
var state_15313__$1 = state_15313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15313__$1,inst_15311);
} else {
if((state_val_15314 === (2))){
var state_15313__$1 = state_15313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15313__$1,(4),ch);
} else {
if((state_val_15314 === (9))){
var inst_15296 = (state_15313[(9)]);
var inst_15288 = inst_15296;
var state_15313__$1 = (function (){var statearr_15342 = state_15313;
(statearr_15342[(7)] = inst_15288);

return statearr_15342;
})();
var statearr_15343_18023 = state_15313__$1;
(statearr_15343_18023[(2)] = null);

(statearr_15343_18023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15314 === (5))){
var inst_15288 = (state_15313[(7)]);
var state_15313__$1 = state_15313;
var statearr_15348_18024 = state_15313__$1;
(statearr_15348_18024[(2)] = inst_15288);

(statearr_15348_18024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15314 === (10))){
var inst_15307 = (state_15313[(2)]);
var state_15313__$1 = state_15313;
var statearr_15349_18027 = state_15313__$1;
(statearr_15349_18027[(2)] = inst_15307);

(statearr_15349_18027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15314 === (8))){
var inst_15296 = (state_15313[(9)]);
var inst_15303 = cljs.core.deref(inst_15296);
var state_15313__$1 = state_15313;
var statearr_15353_18028 = state_15313__$1;
(statearr_15353_18028[(2)] = inst_15303);

(statearr_15353_18028[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14091__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14091__auto____0 = (function (){
var statearr_15354 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15354[(0)] = cljs$core$async$reduce_$_state_machine__14091__auto__);

(statearr_15354[(1)] = (1));

return statearr_15354;
});
var cljs$core$async$reduce_$_state_machine__14091__auto____1 = (function (state_15313){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15313);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15355){var ex__14094__auto__ = e15355;
var statearr_15356_18034 = state_15313;
(statearr_15356_18034[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15313[(4)]))){
var statearr_15357_18038 = state_15313;
(statearr_15357_18038[(1)] = cljs.core.first((state_15313[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18056 = state_15313;
state_15313 = G__18056;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14091__auto__ = function(state_15313){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14091__auto____1.call(this,state_15313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14091__auto____0;
cljs$core$async$reduce_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14091__auto____1;
return cljs$core$async$reduce_$_state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_15359 = f__14288__auto__();
(statearr_15359[(6)] = c__14287__auto__);

return statearr_15359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));

return c__14287__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_15367){
var state_val_15368 = (state_15367[(1)]);
if((state_val_15368 === (1))){
var inst_15361 = cljs.core.async.reduce(f__$1,init,ch);
var state_15367__$1 = state_15367;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15367__$1,(2),inst_15361);
} else {
if((state_val_15368 === (2))){
var inst_15363 = (state_15367[(2)]);
var inst_15364 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15363) : f__$1.call(null,inst_15363));
var state_15367__$1 = state_15367;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15367__$1,inst_15364);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14091__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14091__auto____0 = (function (){
var statearr_15372 = [null,null,null,null,null,null,null];
(statearr_15372[(0)] = cljs$core$async$transduce_$_state_machine__14091__auto__);

(statearr_15372[(1)] = (1));

return statearr_15372;
});
var cljs$core$async$transduce_$_state_machine__14091__auto____1 = (function (state_15367){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15367);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15373){var ex__14094__auto__ = e15373;
var statearr_15374_18075 = state_15367;
(statearr_15374_18075[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15367[(4)]))){
var statearr_15375_18076 = state_15367;
(statearr_15375_18076[(1)] = cljs.core.first((state_15367[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18081 = state_15367;
state_15367 = G__18081;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14091__auto__ = function(state_15367){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14091__auto____1.call(this,state_15367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14091__auto____0;
cljs$core$async$transduce_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14091__auto____1;
return cljs$core$async$transduce_$_state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_15376 = f__14288__auto__();
(statearr_15376[(6)] = c__14287__auto__);

return statearr_15376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));

return c__14287__auto__;
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
var G__15378 = arguments.length;
switch (G__15378) {
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
var c__14287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_15405){
var state_val_15406 = (state_15405[(1)]);
if((state_val_15406 === (7))){
var inst_15385 = (state_15405[(2)]);
var state_15405__$1 = state_15405;
var statearr_15409_18101 = state_15405__$1;
(statearr_15409_18101[(2)] = inst_15385);

(statearr_15409_18101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15406 === (1))){
var inst_15379 = cljs.core.seq(coll);
var inst_15380 = inst_15379;
var state_15405__$1 = (function (){var statearr_15410 = state_15405;
(statearr_15410[(7)] = inst_15380);

return statearr_15410;
})();
var statearr_15411_18109 = state_15405__$1;
(statearr_15411_18109[(2)] = null);

(statearr_15411_18109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15406 === (4))){
var inst_15380 = (state_15405[(7)]);
var inst_15383 = cljs.core.first(inst_15380);
var state_15405__$1 = state_15405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15405__$1,(7),ch,inst_15383);
} else {
if((state_val_15406 === (13))){
var inst_15397 = (state_15405[(2)]);
var state_15405__$1 = state_15405;
var statearr_15415_18111 = state_15405__$1;
(statearr_15415_18111[(2)] = inst_15397);

(statearr_15415_18111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15406 === (6))){
var inst_15388 = (state_15405[(2)]);
var state_15405__$1 = state_15405;
if(cljs.core.truth_(inst_15388)){
var statearr_15416_18112 = state_15405__$1;
(statearr_15416_18112[(1)] = (8));

} else {
var statearr_15417_18113 = state_15405__$1;
(statearr_15417_18113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15406 === (3))){
var inst_15401 = (state_15405[(2)]);
var state_15405__$1 = state_15405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15405__$1,inst_15401);
} else {
if((state_val_15406 === (12))){
var state_15405__$1 = state_15405;
var statearr_15418_18115 = state_15405__$1;
(statearr_15418_18115[(2)] = null);

(statearr_15418_18115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15406 === (2))){
var inst_15380 = (state_15405[(7)]);
var state_15405__$1 = state_15405;
if(cljs.core.truth_(inst_15380)){
var statearr_15419_18116 = state_15405__$1;
(statearr_15419_18116[(1)] = (4));

} else {
var statearr_15420_18117 = state_15405__$1;
(statearr_15420_18117[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15406 === (11))){
var inst_15394 = cljs.core.async.close_BANG_(ch);
var state_15405__$1 = state_15405;
var statearr_15424_18118 = state_15405__$1;
(statearr_15424_18118[(2)] = inst_15394);

(statearr_15424_18118[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15406 === (9))){
var state_15405__$1 = state_15405;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15425_18121 = state_15405__$1;
(statearr_15425_18121[(1)] = (11));

} else {
var statearr_15426_18122 = state_15405__$1;
(statearr_15426_18122[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15406 === (5))){
var inst_15380 = (state_15405[(7)]);
var state_15405__$1 = state_15405;
var statearr_15427_18123 = state_15405__$1;
(statearr_15427_18123[(2)] = inst_15380);

(statearr_15427_18123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15406 === (10))){
var inst_15399 = (state_15405[(2)]);
var state_15405__$1 = state_15405;
var statearr_15429_18124 = state_15405__$1;
(statearr_15429_18124[(2)] = inst_15399);

(statearr_15429_18124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15406 === (8))){
var inst_15380 = (state_15405[(7)]);
var inst_15390 = cljs.core.next(inst_15380);
var inst_15380__$1 = inst_15390;
var state_15405__$1 = (function (){var statearr_15430 = state_15405;
(statearr_15430[(7)] = inst_15380__$1);

return statearr_15430;
})();
var statearr_15431_18129 = state_15405__$1;
(statearr_15431_18129[(2)] = null);

(statearr_15431_18129[(1)] = (2));


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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_15432 = [null,null,null,null,null,null,null,null];
(statearr_15432[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_15432[(1)] = (1));

return statearr_15432;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_15405){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15405);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15434){var ex__14094__auto__ = e15434;
var statearr_15435_18133 = state_15405;
(statearr_15435_18133[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15405[(4)]))){
var statearr_15436_18134 = state_15405;
(statearr_15436_18134[(1)] = cljs.core.first((state_15405[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18136 = state_15405;
state_15405 = G__18136;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_15405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_15405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_15441 = f__14288__auto__();
(statearr_15441[(6)] = c__14287__auto__);

return statearr_15441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));

return c__14287__auto__;
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
var G__15444 = arguments.length;
switch (G__15444) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_18139 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_18139(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18143 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_18143(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18144 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_18144(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18147 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_18147(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15453 = (function (ch,cs,meta15454){
this.ch = ch;
this.cs = cs;
this.meta15454 = meta15454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15455,meta15454__$1){
var self__ = this;
var _15455__$1 = this;
return (new cljs.core.async.t_cljs$core$async15453(self__.ch,self__.cs,meta15454__$1));
}));

(cljs.core.async.t_cljs$core$async15453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15455){
var self__ = this;
var _15455__$1 = this;
return self__.meta15454;
}));

(cljs.core.async.t_cljs$core$async15453.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15453.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15453.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15453.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15453.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15453.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15454","meta15454",324943432,null)], null);
}));

(cljs.core.async.t_cljs$core$async15453.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15453");

(cljs.core.async.t_cljs$core$async15453.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15453");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15453.
 */
cljs.core.async.__GT_t_cljs$core$async15453 = (function cljs$core$async$__GT_t_cljs$core$async15453(ch,cs,meta15454){
return (new cljs.core.async.t_cljs$core$async15453(ch,cs,meta15454));
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
var m = (new cljs.core.async.t_cljs$core$async15453(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14287__auto___18157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_15606){
var state_val_15607 = (state_15606[(1)]);
if((state_val_15607 === (7))){
var inst_15602 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15613_18166 = state_15606__$1;
(statearr_15613_18166[(2)] = inst_15602);

(statearr_15613_18166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (20))){
var inst_15499 = (state_15606[(7)]);
var inst_15511 = cljs.core.first(inst_15499);
var inst_15512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15511,(0),null);
var inst_15513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15511,(1),null);
var state_15606__$1 = (function (){var statearr_15617 = state_15606;
(statearr_15617[(8)] = inst_15512);

return statearr_15617;
})();
if(cljs.core.truth_(inst_15513)){
var statearr_15623_18171 = state_15606__$1;
(statearr_15623_18171[(1)] = (22));

} else {
var statearr_15626_18172 = state_15606__$1;
(statearr_15626_18172[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (27))){
var inst_15542 = (state_15606[(9)]);
var inst_15544 = (state_15606[(10)]);
var inst_15551 = (state_15606[(11)]);
var inst_15465 = (state_15606[(12)]);
var inst_15551__$1 = cljs.core._nth(inst_15542,inst_15544);
var inst_15552 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15551__$1,inst_15465,done);
var state_15606__$1 = (function (){var statearr_15637 = state_15606;
(statearr_15637[(11)] = inst_15551__$1);

return statearr_15637;
})();
if(cljs.core.truth_(inst_15552)){
var statearr_15638_18177 = state_15606__$1;
(statearr_15638_18177[(1)] = (30));

} else {
var statearr_15641_18178 = state_15606__$1;
(statearr_15641_18178[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (1))){
var state_15606__$1 = state_15606;
var statearr_15646_18179 = state_15606__$1;
(statearr_15646_18179[(2)] = null);

(statearr_15646_18179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (24))){
var inst_15499 = (state_15606[(7)]);
var inst_15518 = (state_15606[(2)]);
var inst_15519 = cljs.core.next(inst_15499);
var inst_15475 = inst_15519;
var inst_15476 = null;
var inst_15477 = (0);
var inst_15478 = (0);
var state_15606__$1 = (function (){var statearr_15652 = state_15606;
(statearr_15652[(13)] = inst_15518);

(statearr_15652[(14)] = inst_15475);

(statearr_15652[(15)] = inst_15476);

(statearr_15652[(16)] = inst_15477);

(statearr_15652[(17)] = inst_15478);

return statearr_15652;
})();
var statearr_15656_18180 = state_15606__$1;
(statearr_15656_18180[(2)] = null);

(statearr_15656_18180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (39))){
var state_15606__$1 = state_15606;
var statearr_15664_18181 = state_15606__$1;
(statearr_15664_18181[(2)] = null);

(statearr_15664_18181[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (4))){
var inst_15465 = (state_15606[(12)]);
var inst_15465__$1 = (state_15606[(2)]);
var inst_15466 = (inst_15465__$1 == null);
var state_15606__$1 = (function (){var statearr_15665 = state_15606;
(statearr_15665[(12)] = inst_15465__$1);

return statearr_15665;
})();
if(cljs.core.truth_(inst_15466)){
var statearr_15666_18191 = state_15606__$1;
(statearr_15666_18191[(1)] = (5));

} else {
var statearr_15667_18192 = state_15606__$1;
(statearr_15667_18192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (15))){
var inst_15478 = (state_15606[(17)]);
var inst_15475 = (state_15606[(14)]);
var inst_15476 = (state_15606[(15)]);
var inst_15477 = (state_15606[(16)]);
var inst_15494 = (state_15606[(2)]);
var inst_15495 = (inst_15478 + (1));
var tmp15658 = inst_15475;
var tmp15659 = inst_15476;
var tmp15660 = inst_15477;
var inst_15475__$1 = tmp15658;
var inst_15476__$1 = tmp15659;
var inst_15477__$1 = tmp15660;
var inst_15478__$1 = inst_15495;
var state_15606__$1 = (function (){var statearr_15670 = state_15606;
(statearr_15670[(18)] = inst_15494);

(statearr_15670[(14)] = inst_15475__$1);

(statearr_15670[(15)] = inst_15476__$1);

(statearr_15670[(16)] = inst_15477__$1);

(statearr_15670[(17)] = inst_15478__$1);

return statearr_15670;
})();
var statearr_15674_18200 = state_15606__$1;
(statearr_15674_18200[(2)] = null);

(statearr_15674_18200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (21))){
var inst_15522 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15678_18205 = state_15606__$1;
(statearr_15678_18205[(2)] = inst_15522);

(statearr_15678_18205[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (31))){
var inst_15551 = (state_15606[(11)]);
var inst_15555 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15551);
var state_15606__$1 = state_15606;
var statearr_15681_18209 = state_15606__$1;
(statearr_15681_18209[(2)] = inst_15555);

(statearr_15681_18209[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (32))){
var inst_15544 = (state_15606[(10)]);
var inst_15541 = (state_15606[(19)]);
var inst_15542 = (state_15606[(9)]);
var inst_15543 = (state_15606[(20)]);
var inst_15557 = (state_15606[(2)]);
var inst_15562 = (inst_15544 + (1));
var tmp15675 = inst_15541;
var tmp15676 = inst_15542;
var tmp15677 = inst_15543;
var inst_15541__$1 = tmp15675;
var inst_15542__$1 = tmp15676;
var inst_15543__$1 = tmp15677;
var inst_15544__$1 = inst_15562;
var state_15606__$1 = (function (){var statearr_15687 = state_15606;
(statearr_15687[(21)] = inst_15557);

(statearr_15687[(19)] = inst_15541__$1);

(statearr_15687[(9)] = inst_15542__$1);

(statearr_15687[(20)] = inst_15543__$1);

(statearr_15687[(10)] = inst_15544__$1);

return statearr_15687;
})();
var statearr_15693_18215 = state_15606__$1;
(statearr_15693_18215[(2)] = null);

(statearr_15693_18215[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (40))){
var inst_15575 = (state_15606[(22)]);
var inst_15579 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15575);
var state_15606__$1 = state_15606;
var statearr_15698_18216 = state_15606__$1;
(statearr_15698_18216[(2)] = inst_15579);

(statearr_15698_18216[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (33))){
var inst_15565 = (state_15606[(23)]);
var inst_15567 = cljs.core.chunked_seq_QMARK_(inst_15565);
var state_15606__$1 = state_15606;
if(inst_15567){
var statearr_15699_18217 = state_15606__$1;
(statearr_15699_18217[(1)] = (36));

} else {
var statearr_15700_18218 = state_15606__$1;
(statearr_15700_18218[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (13))){
var inst_15488 = (state_15606[(24)]);
var inst_15491 = cljs.core.async.close_BANG_(inst_15488);
var state_15606__$1 = state_15606;
var statearr_15703_18220 = state_15606__$1;
(statearr_15703_18220[(2)] = inst_15491);

(statearr_15703_18220[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (22))){
var inst_15512 = (state_15606[(8)]);
var inst_15515 = cljs.core.async.close_BANG_(inst_15512);
var state_15606__$1 = state_15606;
var statearr_15706_18221 = state_15606__$1;
(statearr_15706_18221[(2)] = inst_15515);

(statearr_15706_18221[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (36))){
var inst_15565 = (state_15606[(23)]);
var inst_15569 = cljs.core.chunk_first(inst_15565);
var inst_15570 = cljs.core.chunk_rest(inst_15565);
var inst_15571 = cljs.core.count(inst_15569);
var inst_15541 = inst_15570;
var inst_15542 = inst_15569;
var inst_15543 = inst_15571;
var inst_15544 = (0);
var state_15606__$1 = (function (){var statearr_15711 = state_15606;
(statearr_15711[(19)] = inst_15541);

(statearr_15711[(9)] = inst_15542);

(statearr_15711[(20)] = inst_15543);

(statearr_15711[(10)] = inst_15544);

return statearr_15711;
})();
var statearr_15715_18230 = state_15606__$1;
(statearr_15715_18230[(2)] = null);

(statearr_15715_18230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (41))){
var inst_15565 = (state_15606[(23)]);
var inst_15581 = (state_15606[(2)]);
var inst_15582 = cljs.core.next(inst_15565);
var inst_15541 = inst_15582;
var inst_15542 = null;
var inst_15543 = (0);
var inst_15544 = (0);
var state_15606__$1 = (function (){var statearr_15716 = state_15606;
(statearr_15716[(25)] = inst_15581);

(statearr_15716[(19)] = inst_15541);

(statearr_15716[(9)] = inst_15542);

(statearr_15716[(20)] = inst_15543);

(statearr_15716[(10)] = inst_15544);

return statearr_15716;
})();
var statearr_15719_18236 = state_15606__$1;
(statearr_15719_18236[(2)] = null);

(statearr_15719_18236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (43))){
var state_15606__$1 = state_15606;
var statearr_15722_18240 = state_15606__$1;
(statearr_15722_18240[(2)] = null);

(statearr_15722_18240[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (29))){
var inst_15590 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15726_18243 = state_15606__$1;
(statearr_15726_18243[(2)] = inst_15590);

(statearr_15726_18243[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (44))){
var inst_15599 = (state_15606[(2)]);
var state_15606__$1 = (function (){var statearr_15727 = state_15606;
(statearr_15727[(26)] = inst_15599);

return statearr_15727;
})();
var statearr_15728_18246 = state_15606__$1;
(statearr_15728_18246[(2)] = null);

(statearr_15728_18246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (6))){
var inst_15532 = (state_15606[(27)]);
var inst_15531 = cljs.core.deref(cs);
var inst_15532__$1 = cljs.core.keys(inst_15531);
var inst_15533 = cljs.core.count(inst_15532__$1);
var inst_15534 = cljs.core.reset_BANG_(dctr,inst_15533);
var inst_15540 = cljs.core.seq(inst_15532__$1);
var inst_15541 = inst_15540;
var inst_15542 = null;
var inst_15543 = (0);
var inst_15544 = (0);
var state_15606__$1 = (function (){var statearr_15729 = state_15606;
(statearr_15729[(27)] = inst_15532__$1);

(statearr_15729[(28)] = inst_15534);

(statearr_15729[(19)] = inst_15541);

(statearr_15729[(9)] = inst_15542);

(statearr_15729[(20)] = inst_15543);

(statearr_15729[(10)] = inst_15544);

return statearr_15729;
})();
var statearr_15731_18249 = state_15606__$1;
(statearr_15731_18249[(2)] = null);

(statearr_15731_18249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (28))){
var inst_15541 = (state_15606[(19)]);
var inst_15565 = (state_15606[(23)]);
var inst_15565__$1 = cljs.core.seq(inst_15541);
var state_15606__$1 = (function (){var statearr_15733 = state_15606;
(statearr_15733[(23)] = inst_15565__$1);

return statearr_15733;
})();
if(inst_15565__$1){
var statearr_15734_18251 = state_15606__$1;
(statearr_15734_18251[(1)] = (33));

} else {
var statearr_15735_18252 = state_15606__$1;
(statearr_15735_18252[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (25))){
var inst_15544 = (state_15606[(10)]);
var inst_15543 = (state_15606[(20)]);
var inst_15546 = (inst_15544 < inst_15543);
var inst_15547 = inst_15546;
var state_15606__$1 = state_15606;
if(cljs.core.truth_(inst_15547)){
var statearr_15736_18258 = state_15606__$1;
(statearr_15736_18258[(1)] = (27));

} else {
var statearr_15737_18259 = state_15606__$1;
(statearr_15737_18259[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (34))){
var state_15606__$1 = state_15606;
var statearr_15738_18263 = state_15606__$1;
(statearr_15738_18263[(2)] = null);

(statearr_15738_18263[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (17))){
var state_15606__$1 = state_15606;
var statearr_15739_18267 = state_15606__$1;
(statearr_15739_18267[(2)] = null);

(statearr_15739_18267[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (3))){
var inst_15604 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15606__$1,inst_15604);
} else {
if((state_val_15607 === (12))){
var inst_15527 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15744_18268 = state_15606__$1;
(statearr_15744_18268[(2)] = inst_15527);

(statearr_15744_18268[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (2))){
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15606__$1,(4),ch);
} else {
if((state_val_15607 === (23))){
var state_15606__$1 = state_15606;
var statearr_15746_18269 = state_15606__$1;
(statearr_15746_18269[(2)] = null);

(statearr_15746_18269[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (35))){
var inst_15588 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15747_18271 = state_15606__$1;
(statearr_15747_18271[(2)] = inst_15588);

(statearr_15747_18271[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (19))){
var inst_15499 = (state_15606[(7)]);
var inst_15503 = cljs.core.chunk_first(inst_15499);
var inst_15504 = cljs.core.chunk_rest(inst_15499);
var inst_15505 = cljs.core.count(inst_15503);
var inst_15475 = inst_15504;
var inst_15476 = inst_15503;
var inst_15477 = inst_15505;
var inst_15478 = (0);
var state_15606__$1 = (function (){var statearr_15748 = state_15606;
(statearr_15748[(14)] = inst_15475);

(statearr_15748[(15)] = inst_15476);

(statearr_15748[(16)] = inst_15477);

(statearr_15748[(17)] = inst_15478);

return statearr_15748;
})();
var statearr_15749_18273 = state_15606__$1;
(statearr_15749_18273[(2)] = null);

(statearr_15749_18273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (11))){
var inst_15475 = (state_15606[(14)]);
var inst_15499 = (state_15606[(7)]);
var inst_15499__$1 = cljs.core.seq(inst_15475);
var state_15606__$1 = (function (){var statearr_15751 = state_15606;
(statearr_15751[(7)] = inst_15499__$1);

return statearr_15751;
})();
if(inst_15499__$1){
var statearr_15752_18277 = state_15606__$1;
(statearr_15752_18277[(1)] = (16));

} else {
var statearr_15753_18278 = state_15606__$1;
(statearr_15753_18278[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (9))){
var inst_15529 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15754_18279 = state_15606__$1;
(statearr_15754_18279[(2)] = inst_15529);

(statearr_15754_18279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (5))){
var inst_15472 = cljs.core.deref(cs);
var inst_15473 = cljs.core.seq(inst_15472);
var inst_15475 = inst_15473;
var inst_15476 = null;
var inst_15477 = (0);
var inst_15478 = (0);
var state_15606__$1 = (function (){var statearr_15759 = state_15606;
(statearr_15759[(14)] = inst_15475);

(statearr_15759[(15)] = inst_15476);

(statearr_15759[(16)] = inst_15477);

(statearr_15759[(17)] = inst_15478);

return statearr_15759;
})();
var statearr_15761_18281 = state_15606__$1;
(statearr_15761_18281[(2)] = null);

(statearr_15761_18281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (14))){
var state_15606__$1 = state_15606;
var statearr_15762_18287 = state_15606__$1;
(statearr_15762_18287[(2)] = null);

(statearr_15762_18287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (45))){
var inst_15596 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15763_18288 = state_15606__$1;
(statearr_15763_18288[(2)] = inst_15596);

(statearr_15763_18288[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (26))){
var inst_15532 = (state_15606[(27)]);
var inst_15592 = (state_15606[(2)]);
var inst_15593 = cljs.core.seq(inst_15532);
var state_15606__$1 = (function (){var statearr_15765 = state_15606;
(statearr_15765[(29)] = inst_15592);

return statearr_15765;
})();
if(inst_15593){
var statearr_15766_18293 = state_15606__$1;
(statearr_15766_18293[(1)] = (42));

} else {
var statearr_15767_18294 = state_15606__$1;
(statearr_15767_18294[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (16))){
var inst_15499 = (state_15606[(7)]);
var inst_15501 = cljs.core.chunked_seq_QMARK_(inst_15499);
var state_15606__$1 = state_15606;
if(inst_15501){
var statearr_15768_18295 = state_15606__$1;
(statearr_15768_18295[(1)] = (19));

} else {
var statearr_15769_18296 = state_15606__$1;
(statearr_15769_18296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (38))){
var inst_15585 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15770_18297 = state_15606__$1;
(statearr_15770_18297[(2)] = inst_15585);

(statearr_15770_18297[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (30))){
var state_15606__$1 = state_15606;
var statearr_15771_18298 = state_15606__$1;
(statearr_15771_18298[(2)] = null);

(statearr_15771_18298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (10))){
var inst_15476 = (state_15606[(15)]);
var inst_15478 = (state_15606[(17)]);
var inst_15487 = cljs.core._nth(inst_15476,inst_15478);
var inst_15488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15487,(0),null);
var inst_15489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15487,(1),null);
var state_15606__$1 = (function (){var statearr_15772 = state_15606;
(statearr_15772[(24)] = inst_15488);

return statearr_15772;
})();
if(cljs.core.truth_(inst_15489)){
var statearr_15773_18310 = state_15606__$1;
(statearr_15773_18310[(1)] = (13));

} else {
var statearr_15774_18311 = state_15606__$1;
(statearr_15774_18311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (18))){
var inst_15525 = (state_15606[(2)]);
var state_15606__$1 = state_15606;
var statearr_15775_18312 = state_15606__$1;
(statearr_15775_18312[(2)] = inst_15525);

(statearr_15775_18312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (42))){
var state_15606__$1 = state_15606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15606__$1,(45),dchan);
} else {
if((state_val_15607 === (37))){
var inst_15565 = (state_15606[(23)]);
var inst_15575 = (state_15606[(22)]);
var inst_15465 = (state_15606[(12)]);
var inst_15575__$1 = cljs.core.first(inst_15565);
var inst_15576 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15575__$1,inst_15465,done);
var state_15606__$1 = (function (){var statearr_15776 = state_15606;
(statearr_15776[(22)] = inst_15575__$1);

return statearr_15776;
})();
if(cljs.core.truth_(inst_15576)){
var statearr_15777_18317 = state_15606__$1;
(statearr_15777_18317[(1)] = (39));

} else {
var statearr_15778_18318 = state_15606__$1;
(statearr_15778_18318[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15607 === (8))){
var inst_15478 = (state_15606[(17)]);
var inst_15477 = (state_15606[(16)]);
var inst_15481 = (inst_15478 < inst_15477);
var inst_15482 = inst_15481;
var state_15606__$1 = state_15606;
if(cljs.core.truth_(inst_15482)){
var statearr_15779_18319 = state_15606__$1;
(statearr_15779_18319[(1)] = (10));

} else {
var statearr_15780_18320 = state_15606__$1;
(statearr_15780_18320[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14091__auto__ = null;
var cljs$core$async$mult_$_state_machine__14091__auto____0 = (function (){
var statearr_15781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15781[(0)] = cljs$core$async$mult_$_state_machine__14091__auto__);

(statearr_15781[(1)] = (1));

return statearr_15781;
});
var cljs$core$async$mult_$_state_machine__14091__auto____1 = (function (state_15606){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15606);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e15784){var ex__14094__auto__ = e15784;
var statearr_15785_18324 = state_15606;
(statearr_15785_18324[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15606[(4)]))){
var statearr_15786_18325 = state_15606;
(statearr_15786_18325[(1)] = cljs.core.first((state_15606[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18327 = state_15606;
state_15606 = G__18327;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14091__auto__ = function(state_15606){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14091__auto____1.call(this,state_15606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14091__auto____0;
cljs$core$async$mult_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14091__auto____1;
return cljs$core$async$mult_$_state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_15790 = f__14288__auto__();
(statearr_15790[(6)] = c__14287__auto___18157);

return statearr_15790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
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
var G__15792 = arguments.length;
switch (G__15792) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18329 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_18329(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18331 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_18331(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18332 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18332(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18334 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_18334(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18335 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18335(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18339 = arguments.length;
var i__5877__auto___18340 = (0);
while(true){
if((i__5877__auto___18340 < len__5876__auto___18339)){
args__5882__auto__.push((arguments[i__5877__auto___18340]));

var G__18343 = (i__5877__auto___18340 + (1));
i__5877__auto___18340 = G__18343;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15820){
var map__15821 = p__15820;
var map__15821__$1 = cljs.core.__destructure_map(map__15821);
var opts = map__15821__$1;
var statearr_15822_18346 = state;
(statearr_15822_18346[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15823_18351 = state;
(statearr_15823_18351[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_15825_18352 = state;
(statearr_15825_18352[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15816){
var G__15817 = cljs.core.first(seq15816);
var seq15816__$1 = cljs.core.next(seq15816);
var G__15818 = cljs.core.first(seq15816__$1);
var seq15816__$2 = cljs.core.next(seq15816__$1);
var G__15819 = cljs.core.first(seq15816__$2);
var seq15816__$3 = cljs.core.next(seq15816__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15817,G__15818,G__15819,seq15816__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15836 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15837){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15837 = meta15837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15838,meta15837__$1){
var self__ = this;
var _15838__$1 = this;
return (new cljs.core.async.t_cljs$core$async15836(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15837__$1));
}));

(cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15838){
var self__ = this;
var _15838__$1 = this;
return self__.meta15837;
}));

(cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15837","meta15837",1028450572,null)], null);
}));

(cljs.core.async.t_cljs$core$async15836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15836");

(cljs.core.async.t_cljs$core$async15836.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15836.
 */
cljs.core.async.__GT_t_cljs$core$async15836 = (function cljs$core$async$__GT_t_cljs$core$async15836(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15837){
return (new cljs.core.async.t_cljs$core$async15836(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15837));
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
var m = (new cljs.core.async.t_cljs$core$async15836(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14287__auto___18414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_15916){
var state_val_15917 = (state_15916[(1)]);
if((state_val_15917 === (7))){
var inst_15874 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
if(cljs.core.truth_(inst_15874)){
var statearr_15919_18415 = state_15916__$1;
(statearr_15919_18415[(1)] = (8));

} else {
var statearr_15920_18416 = state_15916__$1;
(statearr_15920_18416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (20))){
var inst_15867 = (state_15916[(7)]);
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15916__$1,(23),out,inst_15867);
} else {
if((state_val_15917 === (1))){
var inst_15848 = calc_state();
var inst_15850 = cljs.core.__destructure_map(inst_15848);
var inst_15851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15850,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15850,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15850,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15854 = inst_15848;
var state_15916__$1 = (function (){var statearr_15926 = state_15916;
(statearr_15926[(8)] = inst_15851);

(statearr_15926[(9)] = inst_15852);

(statearr_15926[(10)] = inst_15853);

(statearr_15926[(11)] = inst_15854);

return statearr_15926;
})();
var statearr_15927_18417 = state_15916__$1;
(statearr_15927_18417[(2)] = null);

(statearr_15927_18417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (24))){
var inst_15857 = (state_15916[(12)]);
var inst_15854 = inst_15857;
var state_15916__$1 = (function (){var statearr_15928 = state_15916;
(statearr_15928[(11)] = inst_15854);

return statearr_15928;
})();
var statearr_15929_18418 = state_15916__$1;
(statearr_15929_18418[(2)] = null);

(statearr_15929_18418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (4))){
var inst_15867 = (state_15916[(7)]);
var inst_15869 = (state_15916[(13)]);
var inst_15865 = (state_15916[(2)]);
var inst_15867__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15865,(0),null);
var inst_15868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15865,(1),null);
var inst_15869__$1 = (inst_15867__$1 == null);
var state_15916__$1 = (function (){var statearr_15930 = state_15916;
(statearr_15930[(7)] = inst_15867__$1);

(statearr_15930[(14)] = inst_15868);

(statearr_15930[(13)] = inst_15869__$1);

return statearr_15930;
})();
if(cljs.core.truth_(inst_15869__$1)){
var statearr_15931_18423 = state_15916__$1;
(statearr_15931_18423[(1)] = (5));

} else {
var statearr_15934_18425 = state_15916__$1;
(statearr_15934_18425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (15))){
var inst_15858 = (state_15916[(15)]);
var inst_15888 = (state_15916[(16)]);
var inst_15888__$1 = cljs.core.empty_QMARK_(inst_15858);
var state_15916__$1 = (function (){var statearr_15938 = state_15916;
(statearr_15938[(16)] = inst_15888__$1);

return statearr_15938;
})();
if(inst_15888__$1){
var statearr_15943_18430 = state_15916__$1;
(statearr_15943_18430[(1)] = (17));

} else {
var statearr_15944_18432 = state_15916__$1;
(statearr_15944_18432[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (21))){
var inst_15857 = (state_15916[(12)]);
var inst_15854 = inst_15857;
var state_15916__$1 = (function (){var statearr_15945 = state_15916;
(statearr_15945[(11)] = inst_15854);

return statearr_15945;
})();
var statearr_15946_18434 = state_15916__$1;
(statearr_15946_18434[(2)] = null);

(statearr_15946_18434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (13))){
var inst_15881 = (state_15916[(2)]);
var inst_15882 = calc_state();
var inst_15854 = inst_15882;
var state_15916__$1 = (function (){var statearr_15948 = state_15916;
(statearr_15948[(17)] = inst_15881);

(statearr_15948[(11)] = inst_15854);

return statearr_15948;
})();
var statearr_15949_18436 = state_15916__$1;
(statearr_15949_18436[(2)] = null);

(statearr_15949_18436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (22))){
var inst_15909 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_15954_18437 = state_15916__$1;
(statearr_15954_18437[(2)] = inst_15909);

(statearr_15954_18437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (6))){
var inst_15868 = (state_15916[(14)]);
var inst_15872 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15868,change);
var state_15916__$1 = state_15916;
var statearr_15958_18438 = state_15916__$1;
(statearr_15958_18438[(2)] = inst_15872);

(statearr_15958_18438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (25))){
var state_15916__$1 = state_15916;
var statearr_15959_18439 = state_15916__$1;
(statearr_15959_18439[(2)] = null);

(statearr_15959_18439[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (17))){
var inst_15859 = (state_15916[(18)]);
var inst_15868 = (state_15916[(14)]);
var inst_15890 = (inst_15859.cljs$core$IFn$_invoke$arity$1 ? inst_15859.cljs$core$IFn$_invoke$arity$1(inst_15868) : inst_15859.call(null,inst_15868));
var inst_15891 = cljs.core.not(inst_15890);
var state_15916__$1 = state_15916;
var statearr_15960_18441 = state_15916__$1;
(statearr_15960_18441[(2)] = inst_15891);

(statearr_15960_18441[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (3))){
var inst_15913 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15916__$1,inst_15913);
} else {
if((state_val_15917 === (12))){
var state_15916__$1 = state_15916;
var statearr_15965_18444 = state_15916__$1;
(statearr_15965_18444[(2)] = null);

(statearr_15965_18444[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (2))){
var inst_15854 = (state_15916[(11)]);
var inst_15857 = (state_15916[(12)]);
var inst_15857__$1 = cljs.core.__destructure_map(inst_15854);
var inst_15858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15857__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15857__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15857__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15916__$1 = (function (){var statearr_15970 = state_15916;
(statearr_15970[(12)] = inst_15857__$1);

(statearr_15970[(15)] = inst_15858);

(statearr_15970[(18)] = inst_15859);

return statearr_15970;
})();
return cljs.core.async.ioc_alts_BANG_(state_15916__$1,(4),inst_15860);
} else {
if((state_val_15917 === (23))){
var inst_15900 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
if(cljs.core.truth_(inst_15900)){
var statearr_15972_18449 = state_15916__$1;
(statearr_15972_18449[(1)] = (24));

} else {
var statearr_15973_18450 = state_15916__$1;
(statearr_15973_18450[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (19))){
var inst_15894 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_15974_18453 = state_15916__$1;
(statearr_15974_18453[(2)] = inst_15894);

(statearr_15974_18453[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (11))){
var inst_15868 = (state_15916[(14)]);
var inst_15878 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15868);
var state_15916__$1 = state_15916;
var statearr_15979_18456 = state_15916__$1;
(statearr_15979_18456[(2)] = inst_15878);

(statearr_15979_18456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (9))){
var inst_15858 = (state_15916[(15)]);
var inst_15868 = (state_15916[(14)]);
var inst_15885 = (state_15916[(19)]);
var inst_15885__$1 = (inst_15858.cljs$core$IFn$_invoke$arity$1 ? inst_15858.cljs$core$IFn$_invoke$arity$1(inst_15868) : inst_15858.call(null,inst_15868));
var state_15916__$1 = (function (){var statearr_15983 = state_15916;
(statearr_15983[(19)] = inst_15885__$1);

return statearr_15983;
})();
if(cljs.core.truth_(inst_15885__$1)){
var statearr_15984_18465 = state_15916__$1;
(statearr_15984_18465[(1)] = (14));

} else {
var statearr_15986_18466 = state_15916__$1;
(statearr_15986_18466[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (5))){
var inst_15869 = (state_15916[(13)]);
var state_15916__$1 = state_15916;
var statearr_15987_18471 = state_15916__$1;
(statearr_15987_18471[(2)] = inst_15869);

(statearr_15987_18471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (14))){
var inst_15885 = (state_15916[(19)]);
var state_15916__$1 = state_15916;
var statearr_15988_18472 = state_15916__$1;
(statearr_15988_18472[(2)] = inst_15885);

(statearr_15988_18472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (26))){
var inst_15905 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_15990_18476 = state_15916__$1;
(statearr_15990_18476[(2)] = inst_15905);

(statearr_15990_18476[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (16))){
var inst_15896 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
if(cljs.core.truth_(inst_15896)){
var statearr_15994_18477 = state_15916__$1;
(statearr_15994_18477[(1)] = (20));

} else {
var statearr_15996_18478 = state_15916__$1;
(statearr_15996_18478[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (10))){
var inst_15911 = (state_15916[(2)]);
var state_15916__$1 = state_15916;
var statearr_16001_18479 = state_15916__$1;
(statearr_16001_18479[(2)] = inst_15911);

(statearr_16001_18479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (18))){
var inst_15888 = (state_15916[(16)]);
var state_15916__$1 = state_15916;
var statearr_16004_18486 = state_15916__$1;
(statearr_16004_18486[(2)] = inst_15888);

(statearr_16004_18486[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15917 === (8))){
var inst_15867 = (state_15916[(7)]);
var inst_15876 = (inst_15867 == null);
var state_15916__$1 = state_15916;
if(cljs.core.truth_(inst_15876)){
var statearr_16009_18491 = state_15916__$1;
(statearr_16009_18491[(1)] = (11));

} else {
var statearr_16010_18492 = state_15916__$1;
(statearr_16010_18492[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14091__auto__ = null;
var cljs$core$async$mix_$_state_machine__14091__auto____0 = (function (){
var statearr_16012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16012[(0)] = cljs$core$async$mix_$_state_machine__14091__auto__);

(statearr_16012[(1)] = (1));

return statearr_16012;
});
var cljs$core$async$mix_$_state_machine__14091__auto____1 = (function (state_15916){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_15916);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e16015){var ex__14094__auto__ = e16015;
var statearr_16017_18498 = state_15916;
(statearr_16017_18498[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_15916[(4)]))){
var statearr_16018_18499 = state_15916;
(statearr_16018_18499[(1)] = cljs.core.first((state_15916[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18500 = state_15916;
state_15916 = G__18500;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14091__auto__ = function(state_15916){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14091__auto____1.call(this,state_15916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14091__auto____0;
cljs$core$async$mix_$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14091__auto____1;
return cljs$core$async$mix_$_state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_16021 = f__14288__auto__();
(statearr_16021[(6)] = c__14287__auto___18414);

return statearr_16021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18503 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_18503(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18506 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_18506(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18512 = (function() {
var G__18517 = null;
var G__18517__1 = (function (p){
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
var G__18517__2 = (function (p,v){
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
G__18517 = function(p,v){
switch(arguments.length){
case 1:
return G__18517__1.call(this,p);
case 2:
return G__18517__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18517.cljs$core$IFn$_invoke$arity$1 = G__18517__1;
G__18517.cljs$core$IFn$_invoke$arity$2 = G__18517__2;
return G__18517;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16044 = arguments.length;
switch (G__16044) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18512(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18512(p,v);
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
cljs.core.async.t_cljs$core$async16064 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16065){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16065 = meta16065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16066,meta16065__$1){
var self__ = this;
var _16066__$1 = this;
return (new cljs.core.async.t_cljs$core$async16064(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16065__$1));
}));

(cljs.core.async.t_cljs$core$async16064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16066){
var self__ = this;
var _16066__$1 = this;
return self__.meta16065;
}));

(cljs.core.async.t_cljs$core$async16064.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16064.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16064.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16064.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16064.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async16064.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16064.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16065","meta16065",-496568330,null)], null);
}));

(cljs.core.async.t_cljs$core$async16064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16064");

(cljs.core.async.t_cljs$core$async16064.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16064.
 */
cljs.core.async.__GT_t_cljs$core$async16064 = (function cljs$core$async$__GT_t_cljs$core$async16064(ch,topic_fn,buf_fn,mults,ensure_mult,meta16065){
return (new cljs.core.async.t_cljs$core$async16064(ch,topic_fn,buf_fn,mults,ensure_mult,meta16065));
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
var G__16056 = arguments.length;
switch (G__16056) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16053_SHARP_){
if(cljs.core.truth_((p1__16053_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16053_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16053_SHARP_.call(null,topic)))){
return p1__16053_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16053_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16064(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14287__auto___18529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_16157){
var state_val_16158 = (state_16157[(1)]);
if((state_val_16158 === (7))){
var inst_16152 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16163_18530 = state_16157__$1;
(statearr_16163_18530[(2)] = inst_16152);

(statearr_16163_18530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (20))){
var state_16157__$1 = state_16157;
var statearr_16164_18531 = state_16157__$1;
(statearr_16164_18531[(2)] = null);

(statearr_16164_18531[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (1))){
var state_16157__$1 = state_16157;
var statearr_16168_18535 = state_16157__$1;
(statearr_16168_18535[(2)] = null);

(statearr_16168_18535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (24))){
var inst_16134 = (state_16157[(7)]);
var inst_16144 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16134);
var state_16157__$1 = state_16157;
var statearr_16169_18539 = state_16157__$1;
(statearr_16169_18539[(2)] = inst_16144);

(statearr_16169_18539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (4))){
var inst_16085 = (state_16157[(8)]);
var inst_16085__$1 = (state_16157[(2)]);
var inst_16086 = (inst_16085__$1 == null);
var state_16157__$1 = (function (){var statearr_16172 = state_16157;
(statearr_16172[(8)] = inst_16085__$1);

return statearr_16172;
})();
if(cljs.core.truth_(inst_16086)){
var statearr_16173_18540 = state_16157__$1;
(statearr_16173_18540[(1)] = (5));

} else {
var statearr_16174_18541 = state_16157__$1;
(statearr_16174_18541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (15))){
var inst_16128 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16176_18544 = state_16157__$1;
(statearr_16176_18544[(2)] = inst_16128);

(statearr_16176_18544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (21))){
var inst_16149 = (state_16157[(2)]);
var state_16157__$1 = (function (){var statearr_16177 = state_16157;
(statearr_16177[(9)] = inst_16149);

return statearr_16177;
})();
var statearr_16178_18552 = state_16157__$1;
(statearr_16178_18552[(2)] = null);

(statearr_16178_18552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (13))){
var inst_16109 = (state_16157[(10)]);
var inst_16111 = cljs.core.chunked_seq_QMARK_(inst_16109);
var state_16157__$1 = state_16157;
if(inst_16111){
var statearr_16180_18554 = state_16157__$1;
(statearr_16180_18554[(1)] = (16));

} else {
var statearr_16182_18555 = state_16157__$1;
(statearr_16182_18555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (22))){
var inst_16140 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
if(cljs.core.truth_(inst_16140)){
var statearr_16183_18556 = state_16157__$1;
(statearr_16183_18556[(1)] = (23));

} else {
var statearr_16184_18557 = state_16157__$1;
(statearr_16184_18557[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (6))){
var inst_16085 = (state_16157[(8)]);
var inst_16134 = (state_16157[(7)]);
var inst_16136 = (state_16157[(11)]);
var inst_16134__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16085) : topic_fn.call(null,inst_16085));
var inst_16135 = cljs.core.deref(mults);
var inst_16136__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16135,inst_16134__$1);
var state_16157__$1 = (function (){var statearr_16187 = state_16157;
(statearr_16187[(7)] = inst_16134__$1);

(statearr_16187[(11)] = inst_16136__$1);

return statearr_16187;
})();
if(cljs.core.truth_(inst_16136__$1)){
var statearr_16188_18559 = state_16157__$1;
(statearr_16188_18559[(1)] = (19));

} else {
var statearr_16190_18560 = state_16157__$1;
(statearr_16190_18560[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (25))){
var inst_16146 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16191_18561 = state_16157__$1;
(statearr_16191_18561[(2)] = inst_16146);

(statearr_16191_18561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (17))){
var inst_16109 = (state_16157[(10)]);
var inst_16119 = cljs.core.first(inst_16109);
var inst_16120 = cljs.core.async.muxch_STAR_(inst_16119);
var inst_16121 = cljs.core.async.close_BANG_(inst_16120);
var inst_16122 = cljs.core.next(inst_16109);
var inst_16095 = inst_16122;
var inst_16096 = null;
var inst_16097 = (0);
var inst_16098 = (0);
var state_16157__$1 = (function (){var statearr_16193 = state_16157;
(statearr_16193[(12)] = inst_16121);

(statearr_16193[(13)] = inst_16095);

(statearr_16193[(14)] = inst_16096);

(statearr_16193[(15)] = inst_16097);

(statearr_16193[(16)] = inst_16098);

return statearr_16193;
})();
var statearr_16194_18566 = state_16157__$1;
(statearr_16194_18566[(2)] = null);

(statearr_16194_18566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (3))){
var inst_16154 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16157__$1,inst_16154);
} else {
if((state_val_16158 === (12))){
var inst_16130 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16196_18568 = state_16157__$1;
(statearr_16196_18568[(2)] = inst_16130);

(statearr_16196_18568[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (2))){
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16157__$1,(4),ch);
} else {
if((state_val_16158 === (23))){
var state_16157__$1 = state_16157;
var statearr_16199_18570 = state_16157__$1;
(statearr_16199_18570[(2)] = null);

(statearr_16199_18570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (19))){
var inst_16136 = (state_16157[(11)]);
var inst_16085 = (state_16157[(8)]);
var inst_16138 = cljs.core.async.muxch_STAR_(inst_16136);
var state_16157__$1 = state_16157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16157__$1,(22),inst_16138,inst_16085);
} else {
if((state_val_16158 === (11))){
var inst_16095 = (state_16157[(13)]);
var inst_16109 = (state_16157[(10)]);
var inst_16109__$1 = cljs.core.seq(inst_16095);
var state_16157__$1 = (function (){var statearr_16202 = state_16157;
(statearr_16202[(10)] = inst_16109__$1);

return statearr_16202;
})();
if(inst_16109__$1){
var statearr_16206_18571 = state_16157__$1;
(statearr_16206_18571[(1)] = (13));

} else {
var statearr_16208_18572 = state_16157__$1;
(statearr_16208_18572[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (9))){
var inst_16132 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16209_18573 = state_16157__$1;
(statearr_16209_18573[(2)] = inst_16132);

(statearr_16209_18573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (5))){
var inst_16092 = cljs.core.deref(mults);
var inst_16093 = cljs.core.vals(inst_16092);
var inst_16094 = cljs.core.seq(inst_16093);
var inst_16095 = inst_16094;
var inst_16096 = null;
var inst_16097 = (0);
var inst_16098 = (0);
var state_16157__$1 = (function (){var statearr_16211 = state_16157;
(statearr_16211[(13)] = inst_16095);

(statearr_16211[(14)] = inst_16096);

(statearr_16211[(15)] = inst_16097);

(statearr_16211[(16)] = inst_16098);

return statearr_16211;
})();
var statearr_16212_18576 = state_16157__$1;
(statearr_16212_18576[(2)] = null);

(statearr_16212_18576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (14))){
var state_16157__$1 = state_16157;
var statearr_16220_18581 = state_16157__$1;
(statearr_16220_18581[(2)] = null);

(statearr_16220_18581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (16))){
var inst_16109 = (state_16157[(10)]);
var inst_16113 = cljs.core.chunk_first(inst_16109);
var inst_16114 = cljs.core.chunk_rest(inst_16109);
var inst_16116 = cljs.core.count(inst_16113);
var inst_16095 = inst_16114;
var inst_16096 = inst_16113;
var inst_16097 = inst_16116;
var inst_16098 = (0);
var state_16157__$1 = (function (){var statearr_16225 = state_16157;
(statearr_16225[(13)] = inst_16095);

(statearr_16225[(14)] = inst_16096);

(statearr_16225[(15)] = inst_16097);

(statearr_16225[(16)] = inst_16098);

return statearr_16225;
})();
var statearr_16226_18587 = state_16157__$1;
(statearr_16226_18587[(2)] = null);

(statearr_16226_18587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (10))){
var inst_16096 = (state_16157[(14)]);
var inst_16098 = (state_16157[(16)]);
var inst_16095 = (state_16157[(13)]);
var inst_16097 = (state_16157[(15)]);
var inst_16103 = cljs.core._nth(inst_16096,inst_16098);
var inst_16104 = cljs.core.async.muxch_STAR_(inst_16103);
var inst_16105 = cljs.core.async.close_BANG_(inst_16104);
var inst_16106 = (inst_16098 + (1));
var tmp16216 = inst_16095;
var tmp16217 = inst_16097;
var tmp16218 = inst_16096;
var inst_16095__$1 = tmp16216;
var inst_16096__$1 = tmp16218;
var inst_16097__$1 = tmp16217;
var inst_16098__$1 = inst_16106;
var state_16157__$1 = (function (){var statearr_16230 = state_16157;
(statearr_16230[(17)] = inst_16105);

(statearr_16230[(13)] = inst_16095__$1);

(statearr_16230[(14)] = inst_16096__$1);

(statearr_16230[(15)] = inst_16097__$1);

(statearr_16230[(16)] = inst_16098__$1);

return statearr_16230;
})();
var statearr_16232_18600 = state_16157__$1;
(statearr_16232_18600[(2)] = null);

(statearr_16232_18600[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (18))){
var inst_16125 = (state_16157[(2)]);
var state_16157__$1 = state_16157;
var statearr_16236_18603 = state_16157__$1;
(statearr_16236_18603[(2)] = inst_16125);

(statearr_16236_18603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16158 === (8))){
var inst_16098 = (state_16157[(16)]);
var inst_16097 = (state_16157[(15)]);
var inst_16100 = (inst_16098 < inst_16097);
var inst_16101 = inst_16100;
var state_16157__$1 = state_16157;
if(cljs.core.truth_(inst_16101)){
var statearr_16237_18611 = state_16157__$1;
(statearr_16237_18611[(1)] = (10));

} else {
var statearr_16238_18613 = state_16157__$1;
(statearr_16238_18613[(1)] = (11));

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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_16240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16240[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_16240[(1)] = (1));

return statearr_16240;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_16157){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_16157);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e16244){var ex__14094__auto__ = e16244;
var statearr_16245_18618 = state_16157;
(statearr_16245_18618[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_16157[(4)]))){
var statearr_16246_18619 = state_16157;
(statearr_16246_18619[(1)] = cljs.core.first((state_16157[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18628 = state_16157;
state_16157 = G__18628;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_16157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_16157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_16256 = f__14288__auto__();
(statearr_16256[(6)] = c__14287__auto___18529);

return statearr_16256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
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
var G__16266 = arguments.length;
switch (G__16266) {
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
var G__16295 = arguments.length;
switch (G__16295) {
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
var G__16323 = arguments.length;
switch (G__16323) {
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
var c__14287__auto___18668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_16408){
var state_val_16410 = (state_16408[(1)]);
if((state_val_16410 === (7))){
var state_16408__$1 = state_16408;
var statearr_16416_18669 = state_16408__$1;
(statearr_16416_18669[(2)] = null);

(statearr_16416_18669[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (1))){
var state_16408__$1 = state_16408;
var statearr_16417_18670 = state_16408__$1;
(statearr_16417_18670[(2)] = null);

(statearr_16417_18670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (4))){
var inst_16347 = (state_16408[(7)]);
var inst_16346 = (state_16408[(8)]);
var inst_16350 = (inst_16347 < inst_16346);
var state_16408__$1 = state_16408;
if(cljs.core.truth_(inst_16350)){
var statearr_16419_18671 = state_16408__$1;
(statearr_16419_18671[(1)] = (6));

} else {
var statearr_16420_18672 = state_16408__$1;
(statearr_16420_18672[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (15))){
var inst_16384 = (state_16408[(9)]);
var inst_16392 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16384);
var state_16408__$1 = state_16408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16408__$1,(17),out,inst_16392);
} else {
if((state_val_16410 === (13))){
var inst_16384 = (state_16408[(9)]);
var inst_16384__$1 = (state_16408[(2)]);
var inst_16386 = cljs.core.some(cljs.core.nil_QMARK_,inst_16384__$1);
var state_16408__$1 = (function (){var statearr_16424 = state_16408;
(statearr_16424[(9)] = inst_16384__$1);

return statearr_16424;
})();
if(cljs.core.truth_(inst_16386)){
var statearr_16426_18677 = state_16408__$1;
(statearr_16426_18677[(1)] = (14));

} else {
var statearr_16427_18682 = state_16408__$1;
(statearr_16427_18682[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (6))){
var state_16408__$1 = state_16408;
var statearr_16431_18683 = state_16408__$1;
(statearr_16431_18683[(2)] = null);

(statearr_16431_18683[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (17))){
var inst_16394 = (state_16408[(2)]);
var state_16408__$1 = (function (){var statearr_16445 = state_16408;
(statearr_16445[(10)] = inst_16394);

return statearr_16445;
})();
var statearr_16446_18686 = state_16408__$1;
(statearr_16446_18686[(2)] = null);

(statearr_16446_18686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (3))){
var inst_16402 = (state_16408[(2)]);
var state_16408__$1 = state_16408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16408__$1,inst_16402);
} else {
if((state_val_16410 === (12))){
var _ = (function (){var statearr_16455 = state_16408;
(statearr_16455[(4)] = cljs.core.rest((state_16408[(4)])));

return statearr_16455;
})();
var state_16408__$1 = state_16408;
var ex16443 = (state_16408__$1[(2)]);
var statearr_16457_18691 = state_16408__$1;
(statearr_16457_18691[(5)] = ex16443);


if((ex16443 instanceof Object)){
var statearr_16466_18692 = state_16408__$1;
(statearr_16466_18692[(1)] = (11));

(statearr_16466_18692[(5)] = null);

} else {
throw ex16443;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (2))){
var inst_16345 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16346 = cnt;
var inst_16347 = (0);
var state_16408__$1 = (function (){var statearr_16488 = state_16408;
(statearr_16488[(11)] = inst_16345);

(statearr_16488[(8)] = inst_16346);

(statearr_16488[(7)] = inst_16347);

return statearr_16488;
})();
var statearr_16495_18694 = state_16408__$1;
(statearr_16495_18694[(2)] = null);

(statearr_16495_18694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (11))){
var inst_16362 = (state_16408[(2)]);
var inst_16364 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16408__$1 = (function (){var statearr_16500 = state_16408;
(statearr_16500[(12)] = inst_16362);

return statearr_16500;
})();
var statearr_16502_18695 = state_16408__$1;
(statearr_16502_18695[(2)] = inst_16364);

(statearr_16502_18695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (9))){
var inst_16347 = (state_16408[(7)]);
var _ = (function (){var statearr_16513 = state_16408;
(statearr_16513[(4)] = cljs.core.cons((12),(state_16408[(4)])));

return statearr_16513;
})();
var inst_16370 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16347) : chs__$1.call(null,inst_16347));
var inst_16371 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16347) : done.call(null,inst_16347));
var inst_16372 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16370,inst_16371);
var ___$1 = (function (){var statearr_16518 = state_16408;
(statearr_16518[(4)] = cljs.core.rest((state_16408[(4)])));

return statearr_16518;
})();
var state_16408__$1 = state_16408;
var statearr_16520_18701 = state_16408__$1;
(statearr_16520_18701[(2)] = inst_16372);

(statearr_16520_18701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (5))){
var inst_16382 = (state_16408[(2)]);
var state_16408__$1 = (function (){var statearr_16525 = state_16408;
(statearr_16525[(13)] = inst_16382);

return statearr_16525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16408__$1,(13),dchan);
} else {
if((state_val_16410 === (14))){
var inst_16389 = cljs.core.async.close_BANG_(out);
var state_16408__$1 = state_16408;
var statearr_16527_18708 = state_16408__$1;
(statearr_16527_18708[(2)] = inst_16389);

(statearr_16527_18708[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (16))){
var inst_16400 = (state_16408[(2)]);
var state_16408__$1 = state_16408;
var statearr_16529_18709 = state_16408__$1;
(statearr_16529_18709[(2)] = inst_16400);

(statearr_16529_18709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (10))){
var inst_16347 = (state_16408[(7)]);
var inst_16375 = (state_16408[(2)]);
var inst_16376 = (inst_16347 + (1));
var inst_16347__$1 = inst_16376;
var state_16408__$1 = (function (){var statearr_16533 = state_16408;
(statearr_16533[(14)] = inst_16375);

(statearr_16533[(7)] = inst_16347__$1);

return statearr_16533;
})();
var statearr_16540_18716 = state_16408__$1;
(statearr_16540_18716[(2)] = null);

(statearr_16540_18716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16410 === (8))){
var inst_16380 = (state_16408[(2)]);
var state_16408__$1 = state_16408;
var statearr_16542_18717 = state_16408__$1;
(statearr_16542_18717[(2)] = inst_16380);

(statearr_16542_18717[(1)] = (5));


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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_16544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16544[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_16544[(1)] = (1));

return statearr_16544;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_16408){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_16408);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e16545){var ex__14094__auto__ = e16545;
var statearr_16546_18718 = state_16408;
(statearr_16546_18718[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_16408[(4)]))){
var statearr_16547_18719 = state_16408;
(statearr_16547_18719[(1)] = cljs.core.first((state_16408[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18732 = state_16408;
state_16408 = G__18732;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_16408){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_16408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_16551 = f__14288__auto__();
(statearr_16551[(6)] = c__14287__auto___18668);

return statearr_16551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
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
var G__16559 = arguments.length;
switch (G__16559) {
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
var c__14287__auto___18736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_16612){
var state_val_16613 = (state_16612[(1)]);
if((state_val_16613 === (7))){
var inst_16583 = (state_16612[(7)]);
var inst_16584 = (state_16612[(8)]);
var inst_16583__$1 = (state_16612[(2)]);
var inst_16584__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16583__$1,(0),null);
var inst_16585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16583__$1,(1),null);
var inst_16586 = (inst_16584__$1 == null);
var state_16612__$1 = (function (){var statearr_16624 = state_16612;
(statearr_16624[(7)] = inst_16583__$1);

(statearr_16624[(8)] = inst_16584__$1);

(statearr_16624[(9)] = inst_16585);

return statearr_16624;
})();
if(cljs.core.truth_(inst_16586)){
var statearr_16626_18748 = state_16612__$1;
(statearr_16626_18748[(1)] = (8));

} else {
var statearr_16627_18750 = state_16612__$1;
(statearr_16627_18750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16613 === (1))){
var inst_16568 = cljs.core.vec(chs);
var inst_16569 = inst_16568;
var state_16612__$1 = (function (){var statearr_16632 = state_16612;
(statearr_16632[(10)] = inst_16569);

return statearr_16632;
})();
var statearr_16634_18758 = state_16612__$1;
(statearr_16634_18758[(2)] = null);

(statearr_16634_18758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16613 === (4))){
var inst_16569 = (state_16612[(10)]);
var state_16612__$1 = state_16612;
return cljs.core.async.ioc_alts_BANG_(state_16612__$1,(7),inst_16569);
} else {
if((state_val_16613 === (6))){
var inst_16605 = (state_16612[(2)]);
var state_16612__$1 = state_16612;
var statearr_16636_18760 = state_16612__$1;
(statearr_16636_18760[(2)] = inst_16605);

(statearr_16636_18760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16613 === (3))){
var inst_16607 = (state_16612[(2)]);
var state_16612__$1 = state_16612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16612__$1,inst_16607);
} else {
if((state_val_16613 === (2))){
var inst_16569 = (state_16612[(10)]);
var inst_16571 = cljs.core.count(inst_16569);
var inst_16572 = (inst_16571 > (0));
var state_16612__$1 = state_16612;
if(cljs.core.truth_(inst_16572)){
var statearr_16646_18779 = state_16612__$1;
(statearr_16646_18779[(1)] = (4));

} else {
var statearr_16647_18781 = state_16612__$1;
(statearr_16647_18781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16613 === (11))){
var inst_16569 = (state_16612[(10)]);
var inst_16598 = (state_16612[(2)]);
var tmp16637 = inst_16569;
var inst_16569__$1 = tmp16637;
var state_16612__$1 = (function (){var statearr_16649 = state_16612;
(statearr_16649[(11)] = inst_16598);

(statearr_16649[(10)] = inst_16569__$1);

return statearr_16649;
})();
var statearr_16650_18787 = state_16612__$1;
(statearr_16650_18787[(2)] = null);

(statearr_16650_18787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16613 === (9))){
var inst_16584 = (state_16612[(8)]);
var state_16612__$1 = state_16612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16612__$1,(11),out,inst_16584);
} else {
if((state_val_16613 === (5))){
var inst_16603 = cljs.core.async.close_BANG_(out);
var state_16612__$1 = state_16612;
var statearr_16657_18794 = state_16612__$1;
(statearr_16657_18794[(2)] = inst_16603);

(statearr_16657_18794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16613 === (10))){
var inst_16601 = (state_16612[(2)]);
var state_16612__$1 = state_16612;
var statearr_16661_18798 = state_16612__$1;
(statearr_16661_18798[(2)] = inst_16601);

(statearr_16661_18798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16613 === (8))){
var inst_16569 = (state_16612[(10)]);
var inst_16583 = (state_16612[(7)]);
var inst_16584 = (state_16612[(8)]);
var inst_16585 = (state_16612[(9)]);
var inst_16591 = (function (){var cs = inst_16569;
var vec__16575 = inst_16583;
var v = inst_16584;
var c = inst_16585;
return (function (p1__16555_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16555_SHARP_);
});
})();
var inst_16594 = cljs.core.filterv(inst_16591,inst_16569);
var inst_16569__$1 = inst_16594;
var state_16612__$1 = (function (){var statearr_16672 = state_16612;
(statearr_16672[(10)] = inst_16569__$1);

return statearr_16672;
})();
var statearr_16673_18815 = state_16612__$1;
(statearr_16673_18815[(2)] = null);

(statearr_16673_18815[(1)] = (2));


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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_16678 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16678[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_16678[(1)] = (1));

return statearr_16678;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_16612){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_16612);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e16682){var ex__14094__auto__ = e16682;
var statearr_16684_18820 = state_16612;
(statearr_16684_18820[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_16612[(4)]))){
var statearr_16686_18821 = state_16612;
(statearr_16686_18821[(1)] = cljs.core.first((state_16612[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18823 = state_16612;
state_16612 = G__18823;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_16612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_16612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_16692 = f__14288__auto__();
(statearr_16692[(6)] = c__14287__auto___18736);

return statearr_16692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
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
var G__16709 = arguments.length;
switch (G__16709) {
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
var c__14287__auto___18828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_16776){
var state_val_16779 = (state_16776[(1)]);
if((state_val_16779 === (7))){
var inst_16748 = (state_16776[(7)]);
var inst_16748__$1 = (state_16776[(2)]);
var inst_16750 = (inst_16748__$1 == null);
var inst_16751 = cljs.core.not(inst_16750);
var state_16776__$1 = (function (){var statearr_16825 = state_16776;
(statearr_16825[(7)] = inst_16748__$1);

return statearr_16825;
})();
if(inst_16751){
var statearr_16834_18831 = state_16776__$1;
(statearr_16834_18831[(1)] = (8));

} else {
var statearr_16835_18833 = state_16776__$1;
(statearr_16835_18833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (1))){
var inst_16735 = (0);
var state_16776__$1 = (function (){var statearr_16842 = state_16776;
(statearr_16842[(8)] = inst_16735);

return statearr_16842;
})();
var statearr_16844_18836 = state_16776__$1;
(statearr_16844_18836[(2)] = null);

(statearr_16844_18836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (4))){
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16776__$1,(7),ch);
} else {
if((state_val_16779 === (6))){
var inst_16769 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16860_18841 = state_16776__$1;
(statearr_16860_18841[(2)] = inst_16769);

(statearr_16860_18841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (3))){
var inst_16772 = (state_16776[(2)]);
var inst_16773 = cljs.core.async.close_BANG_(out);
var state_16776__$1 = (function (){var statearr_16866 = state_16776;
(statearr_16866[(9)] = inst_16772);

return statearr_16866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16776__$1,inst_16773);
} else {
if((state_val_16779 === (2))){
var inst_16735 = (state_16776[(8)]);
var inst_16740 = (inst_16735 < n);
var state_16776__$1 = state_16776;
if(cljs.core.truth_(inst_16740)){
var statearr_16869_18842 = state_16776__$1;
(statearr_16869_18842[(1)] = (4));

} else {
var statearr_16875_18843 = state_16776__$1;
(statearr_16875_18843[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (11))){
var inst_16735 = (state_16776[(8)]);
var inst_16754 = (state_16776[(2)]);
var inst_16758 = (inst_16735 + (1));
var inst_16735__$1 = inst_16758;
var state_16776__$1 = (function (){var statearr_16882 = state_16776;
(statearr_16882[(10)] = inst_16754);

(statearr_16882[(8)] = inst_16735__$1);

return statearr_16882;
})();
var statearr_16883_18844 = state_16776__$1;
(statearr_16883_18844[(2)] = null);

(statearr_16883_18844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (9))){
var state_16776__$1 = state_16776;
var statearr_16884_18845 = state_16776__$1;
(statearr_16884_18845[(2)] = null);

(statearr_16884_18845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (5))){
var state_16776__$1 = state_16776;
var statearr_16887_18846 = state_16776__$1;
(statearr_16887_18846[(2)] = null);

(statearr_16887_18846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (10))){
var inst_16762 = (state_16776[(2)]);
var state_16776__$1 = state_16776;
var statearr_16892_18847 = state_16776__$1;
(statearr_16892_18847[(2)] = inst_16762);

(statearr_16892_18847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16779 === (8))){
var inst_16748 = (state_16776[(7)]);
var state_16776__$1 = state_16776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16776__$1,(11),out,inst_16748);
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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_16900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16900[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_16900[(1)] = (1));

return statearr_16900;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_16776){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_16776);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e16901){var ex__14094__auto__ = e16901;
var statearr_16902_18853 = state_16776;
(statearr_16902_18853[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_16776[(4)]))){
var statearr_16903_18854 = state_16776;
(statearr_16903_18854[(1)] = cljs.core.first((state_16776[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18855 = state_16776;
state_16776 = G__18855;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_16776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_16776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_16906 = f__14288__auto__();
(statearr_16906[(6)] = c__14287__auto___18828);

return statearr_16906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
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
cljs.core.async.t_cljs$core$async16935 = (function (f,ch,meta16930,_,fn1,meta16936){
this.f = f;
this.ch = ch;
this.meta16930 = meta16930;
this._ = _;
this.fn1 = fn1;
this.meta16936 = meta16936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16937,meta16936__$1){
var self__ = this;
var _16937__$1 = this;
return (new cljs.core.async.t_cljs$core$async16935(self__.f,self__.ch,self__.meta16930,self__._,self__.fn1,meta16936__$1));
}));

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16937){
var self__ = this;
var _16937__$1 = this;
return self__.meta16936;
}));

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16917_SHARP_){
var G__16941 = (((p1__16917_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16917_SHARP_) : self__.f.call(null,p1__16917_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16941) : f1.call(null,G__16941));
});
}));

(cljs.core.async.t_cljs$core$async16935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16930","meta16930",588166664,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16929","cljs.core.async/t_cljs$core$async16929",64059897,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16936","meta16936",2017817825,null)], null);
}));

(cljs.core.async.t_cljs$core$async16935.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16935");

(cljs.core.async.t_cljs$core$async16935.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16935");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16935.
 */
cljs.core.async.__GT_t_cljs$core$async16935 = (function cljs$core$async$__GT_t_cljs$core$async16935(f,ch,meta16930,_,fn1,meta16936){
return (new cljs.core.async.t_cljs$core$async16935(f,ch,meta16930,_,fn1,meta16936));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16929 = (function (f,ch,meta16930){
this.f = f;
this.ch = ch;
this.meta16930 = meta16930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16931,meta16930__$1){
var self__ = this;
var _16931__$1 = this;
return (new cljs.core.async.t_cljs$core$async16929(self__.f,self__.ch,meta16930__$1));
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16931){
var self__ = this;
var _16931__$1 = this;
return self__.meta16930;
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16935(self__.f,self__.ch,self__.meta16930,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16946 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16946) : self__.f.call(null,G__16946));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16929.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16930","meta16930",588166664,null)], null);
}));

(cljs.core.async.t_cljs$core$async16929.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16929");

(cljs.core.async.t_cljs$core$async16929.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16929");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16929.
 */
cljs.core.async.__GT_t_cljs$core$async16929 = (function cljs$core$async$__GT_t_cljs$core$async16929(f,ch,meta16930){
return (new cljs.core.async.t_cljs$core$async16929(f,ch,meta16930));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16929(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16950 = (function (f,ch,meta16951){
this.f = f;
this.ch = ch;
this.meta16951 = meta16951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16952,meta16951__$1){
var self__ = this;
var _16952__$1 = this;
return (new cljs.core.async.t_cljs$core$async16950(self__.f,self__.ch,meta16951__$1));
}));

(cljs.core.async.t_cljs$core$async16950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16952){
var self__ = this;
var _16952__$1 = this;
return self__.meta16951;
}));

(cljs.core.async.t_cljs$core$async16950.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16950.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16950.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16951","meta16951",-324207318,null)], null);
}));

(cljs.core.async.t_cljs$core$async16950.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16950");

(cljs.core.async.t_cljs$core$async16950.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16950");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16950.
 */
cljs.core.async.__GT_t_cljs$core$async16950 = (function cljs$core$async$__GT_t_cljs$core$async16950(f,ch,meta16951){
return (new cljs.core.async.t_cljs$core$async16950(f,ch,meta16951));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16950(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16964 = (function (p,ch,meta16965){
this.p = p;
this.ch = ch;
this.meta16965 = meta16965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16966,meta16965__$1){
var self__ = this;
var _16966__$1 = this;
return (new cljs.core.async.t_cljs$core$async16964(self__.p,self__.ch,meta16965__$1));
}));

(cljs.core.async.t_cljs$core$async16964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16966){
var self__ = this;
var _16966__$1 = this;
return self__.meta16965;
}));

(cljs.core.async.t_cljs$core$async16964.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16964.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16964.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16964.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16965","meta16965",2010927422,null)], null);
}));

(cljs.core.async.t_cljs$core$async16964.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16964");

(cljs.core.async.t_cljs$core$async16964.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16964");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16964.
 */
cljs.core.async.__GT_t_cljs$core$async16964 = (function cljs$core$async$__GT_t_cljs$core$async16964(p,ch,meta16965){
return (new cljs.core.async.t_cljs$core$async16964(p,ch,meta16965));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16964(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16980 = arguments.length;
switch (G__16980) {
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
var c__14287__auto___18901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_17020){
var state_val_17021 = (state_17020[(1)]);
if((state_val_17021 === (7))){
var inst_17016 = (state_17020[(2)]);
var state_17020__$1 = state_17020;
var statearr_17030_18906 = state_17020__$1;
(statearr_17030_18906[(2)] = inst_17016);

(statearr_17030_18906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17021 === (1))){
var state_17020__$1 = state_17020;
var statearr_17034_18909 = state_17020__$1;
(statearr_17034_18909[(2)] = null);

(statearr_17034_18909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17021 === (4))){
var inst_17002 = (state_17020[(7)]);
var inst_17002__$1 = (state_17020[(2)]);
var inst_17003 = (inst_17002__$1 == null);
var state_17020__$1 = (function (){var statearr_17041 = state_17020;
(statearr_17041[(7)] = inst_17002__$1);

return statearr_17041;
})();
if(cljs.core.truth_(inst_17003)){
var statearr_17042_18916 = state_17020__$1;
(statearr_17042_18916[(1)] = (5));

} else {
var statearr_17043_18918 = state_17020__$1;
(statearr_17043_18918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17021 === (6))){
var inst_17002 = (state_17020[(7)]);
var inst_17007 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17002) : p.call(null,inst_17002));
var state_17020__$1 = state_17020;
if(cljs.core.truth_(inst_17007)){
var statearr_17047_18924 = state_17020__$1;
(statearr_17047_18924[(1)] = (8));

} else {
var statearr_17048_18930 = state_17020__$1;
(statearr_17048_18930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17021 === (3))){
var inst_17018 = (state_17020[(2)]);
var state_17020__$1 = state_17020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17020__$1,inst_17018);
} else {
if((state_val_17021 === (2))){
var state_17020__$1 = state_17020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17020__$1,(4),ch);
} else {
if((state_val_17021 === (11))){
var inst_17010 = (state_17020[(2)]);
var state_17020__$1 = state_17020;
var statearr_17053_18942 = state_17020__$1;
(statearr_17053_18942[(2)] = inst_17010);

(statearr_17053_18942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17021 === (9))){
var state_17020__$1 = state_17020;
var statearr_17054_18943 = state_17020__$1;
(statearr_17054_18943[(2)] = null);

(statearr_17054_18943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17021 === (5))){
var inst_17005 = cljs.core.async.close_BANG_(out);
var state_17020__$1 = state_17020;
var statearr_17061_18949 = state_17020__$1;
(statearr_17061_18949[(2)] = inst_17005);

(statearr_17061_18949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17021 === (10))){
var inst_17013 = (state_17020[(2)]);
var state_17020__$1 = (function (){var statearr_17065 = state_17020;
(statearr_17065[(8)] = inst_17013);

return statearr_17065;
})();
var statearr_17066_18954 = state_17020__$1;
(statearr_17066_18954[(2)] = null);

(statearr_17066_18954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17021 === (8))){
var inst_17002 = (state_17020[(7)]);
var state_17020__$1 = state_17020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17020__$1,(11),out,inst_17002);
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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_17072 = [null,null,null,null,null,null,null,null,null];
(statearr_17072[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_17072[(1)] = (1));

return statearr_17072;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_17020){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_17020);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e17076){var ex__14094__auto__ = e17076;
var statearr_17077_18959 = state_17020;
(statearr_17077_18959[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_17020[(4)]))){
var statearr_17080_18963 = state_17020;
(statearr_17080_18963[(1)] = cljs.core.first((state_17020[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18969 = state_17020;
state_17020 = G__18969;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_17020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_17020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_17084 = f__14288__auto__();
(statearr_17084[(6)] = c__14287__auto___18901);

return statearr_17084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17089 = arguments.length;
switch (G__17089) {
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
var c__14287__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_17177){
var state_val_17178 = (state_17177[(1)]);
if((state_val_17178 === (7))){
var inst_17169 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
var statearr_17183_18993 = state_17177__$1;
(statearr_17183_18993[(2)] = inst_17169);

(statearr_17183_18993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (20))){
var inst_17131 = (state_17177[(7)]);
var inst_17150 = (state_17177[(2)]);
var inst_17151 = cljs.core.next(inst_17131);
var inst_17116 = inst_17151;
var inst_17117 = null;
var inst_17118 = (0);
var inst_17119 = (0);
var state_17177__$1 = (function (){var statearr_17186 = state_17177;
(statearr_17186[(8)] = inst_17150);

(statearr_17186[(9)] = inst_17116);

(statearr_17186[(10)] = inst_17117);

(statearr_17186[(11)] = inst_17118);

(statearr_17186[(12)] = inst_17119);

return statearr_17186;
})();
var statearr_17190_19003 = state_17177__$1;
(statearr_17190_19003[(2)] = null);

(statearr_17190_19003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (1))){
var state_17177__$1 = state_17177;
var statearr_17191_19006 = state_17177__$1;
(statearr_17191_19006[(2)] = null);

(statearr_17191_19006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (4))){
var inst_17105 = (state_17177[(13)]);
var inst_17105__$1 = (state_17177[(2)]);
var inst_17106 = (inst_17105__$1 == null);
var state_17177__$1 = (function (){var statearr_17192 = state_17177;
(statearr_17192[(13)] = inst_17105__$1);

return statearr_17192;
})();
if(cljs.core.truth_(inst_17106)){
var statearr_17195_19016 = state_17177__$1;
(statearr_17195_19016[(1)] = (5));

} else {
var statearr_17198_19021 = state_17177__$1;
(statearr_17198_19021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (15))){
var state_17177__$1 = state_17177;
var statearr_17202_19023 = state_17177__$1;
(statearr_17202_19023[(2)] = null);

(statearr_17202_19023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (21))){
var state_17177__$1 = state_17177;
var statearr_17203_19024 = state_17177__$1;
(statearr_17203_19024[(2)] = null);

(statearr_17203_19024[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (13))){
var inst_17119 = (state_17177[(12)]);
var inst_17116 = (state_17177[(9)]);
var inst_17117 = (state_17177[(10)]);
var inst_17118 = (state_17177[(11)]);
var inst_17126 = (state_17177[(2)]);
var inst_17128 = (inst_17119 + (1));
var tmp17199 = inst_17116;
var tmp17200 = inst_17117;
var tmp17201 = inst_17118;
var inst_17116__$1 = tmp17199;
var inst_17117__$1 = tmp17200;
var inst_17118__$1 = tmp17201;
var inst_17119__$1 = inst_17128;
var state_17177__$1 = (function (){var statearr_17204 = state_17177;
(statearr_17204[(14)] = inst_17126);

(statearr_17204[(9)] = inst_17116__$1);

(statearr_17204[(10)] = inst_17117__$1);

(statearr_17204[(11)] = inst_17118__$1);

(statearr_17204[(12)] = inst_17119__$1);

return statearr_17204;
})();
var statearr_17205_19040 = state_17177__$1;
(statearr_17205_19040[(2)] = null);

(statearr_17205_19040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (22))){
var state_17177__$1 = state_17177;
var statearr_17206_19042 = state_17177__$1;
(statearr_17206_19042[(2)] = null);

(statearr_17206_19042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (6))){
var inst_17105 = (state_17177[(13)]);
var inst_17114 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17105) : f.call(null,inst_17105));
var inst_17115 = cljs.core.seq(inst_17114);
var inst_17116 = inst_17115;
var inst_17117 = null;
var inst_17118 = (0);
var inst_17119 = (0);
var state_17177__$1 = (function (){var statearr_17207 = state_17177;
(statearr_17207[(9)] = inst_17116);

(statearr_17207[(10)] = inst_17117);

(statearr_17207[(11)] = inst_17118);

(statearr_17207[(12)] = inst_17119);

return statearr_17207;
})();
var statearr_17208_19048 = state_17177__$1;
(statearr_17208_19048[(2)] = null);

(statearr_17208_19048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (17))){
var inst_17131 = (state_17177[(7)]);
var inst_17139 = cljs.core.chunk_first(inst_17131);
var inst_17140 = cljs.core.chunk_rest(inst_17131);
var inst_17141 = cljs.core.count(inst_17139);
var inst_17116 = inst_17140;
var inst_17117 = inst_17139;
var inst_17118 = inst_17141;
var inst_17119 = (0);
var state_17177__$1 = (function (){var statearr_17209 = state_17177;
(statearr_17209[(9)] = inst_17116);

(statearr_17209[(10)] = inst_17117);

(statearr_17209[(11)] = inst_17118);

(statearr_17209[(12)] = inst_17119);

return statearr_17209;
})();
var statearr_17214_19062 = state_17177__$1;
(statearr_17214_19062[(2)] = null);

(statearr_17214_19062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (3))){
var inst_17171 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17177__$1,inst_17171);
} else {
if((state_val_17178 === (12))){
var inst_17159 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
var statearr_17215_19069 = state_17177__$1;
(statearr_17215_19069[(2)] = inst_17159);

(statearr_17215_19069[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (2))){
var state_17177__$1 = state_17177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17177__$1,(4),in$);
} else {
if((state_val_17178 === (23))){
var inst_17167 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
var statearr_17216_19088 = state_17177__$1;
(statearr_17216_19088[(2)] = inst_17167);

(statearr_17216_19088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (19))){
var inst_17154 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
var statearr_17218_19091 = state_17177__$1;
(statearr_17218_19091[(2)] = inst_17154);

(statearr_17218_19091[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (11))){
var inst_17116 = (state_17177[(9)]);
var inst_17131 = (state_17177[(7)]);
var inst_17131__$1 = cljs.core.seq(inst_17116);
var state_17177__$1 = (function (){var statearr_17222 = state_17177;
(statearr_17222[(7)] = inst_17131__$1);

return statearr_17222;
})();
if(inst_17131__$1){
var statearr_17225_19102 = state_17177__$1;
(statearr_17225_19102[(1)] = (14));

} else {
var statearr_17229_19104 = state_17177__$1;
(statearr_17229_19104[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (9))){
var inst_17161 = (state_17177[(2)]);
var inst_17162 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17177__$1 = (function (){var statearr_17230 = state_17177;
(statearr_17230[(15)] = inst_17161);

return statearr_17230;
})();
if(cljs.core.truth_(inst_17162)){
var statearr_17231_19110 = state_17177__$1;
(statearr_17231_19110[(1)] = (21));

} else {
var statearr_17232_19111 = state_17177__$1;
(statearr_17232_19111[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (5))){
var inst_17108 = cljs.core.async.close_BANG_(out);
var state_17177__$1 = state_17177;
var statearr_17233_19122 = state_17177__$1;
(statearr_17233_19122[(2)] = inst_17108);

(statearr_17233_19122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (14))){
var inst_17131 = (state_17177[(7)]);
var inst_17135 = cljs.core.chunked_seq_QMARK_(inst_17131);
var state_17177__$1 = state_17177;
if(inst_17135){
var statearr_17234_19140 = state_17177__$1;
(statearr_17234_19140[(1)] = (17));

} else {
var statearr_17235_19147 = state_17177__$1;
(statearr_17235_19147[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (16))){
var inst_17157 = (state_17177[(2)]);
var state_17177__$1 = state_17177;
var statearr_17246_19152 = state_17177__$1;
(statearr_17246_19152[(2)] = inst_17157);

(statearr_17246_19152[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17178 === (10))){
var inst_17117 = (state_17177[(10)]);
var inst_17119 = (state_17177[(12)]);
var inst_17124 = cljs.core._nth(inst_17117,inst_17119);
var state_17177__$1 = state_17177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17177__$1,(13),out,inst_17124);
} else {
if((state_val_17178 === (18))){
var inst_17131 = (state_17177[(7)]);
var inst_17147 = cljs.core.first(inst_17131);
var state_17177__$1 = state_17177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17177__$1,(20),out,inst_17147);
} else {
if((state_val_17178 === (8))){
var inst_17119 = (state_17177[(12)]);
var inst_17118 = (state_17177[(11)]);
var inst_17121 = (inst_17119 < inst_17118);
var inst_17122 = inst_17121;
var state_17177__$1 = state_17177;
if(cljs.core.truth_(inst_17122)){
var statearr_17251_19167 = state_17177__$1;
(statearr_17251_19167[(1)] = (10));

} else {
var statearr_17252_19169 = state_17177__$1;
(statearr_17252_19169[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____0 = (function (){
var statearr_17256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17256[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__);

(statearr_17256[(1)] = (1));

return statearr_17256;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____1 = (function (state_17177){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_17177);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e17257){var ex__14094__auto__ = e17257;
var statearr_17258_19183 = state_17177;
(statearr_17258_19183[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_17177[(4)]))){
var statearr_17259_19185 = state_17177;
(statearr_17259_19185[(1)] = cljs.core.first((state_17177[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19186 = state_17177;
state_17177 = G__19186;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__ = function(state_17177){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____1.call(this,state_17177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14091__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_17260 = f__14288__auto__();
(statearr_17260[(6)] = c__14287__auto__);

return statearr_17260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));

return c__14287__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17264 = arguments.length;
switch (G__17264) {
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
var G__17273 = arguments.length;
switch (G__17273) {
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
var G__17282 = arguments.length;
switch (G__17282) {
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
var c__14287__auto___19248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_17307){
var state_val_17308 = (state_17307[(1)]);
if((state_val_17308 === (7))){
var inst_17302 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17309_19252 = state_17307__$1;
(statearr_17309_19252[(2)] = inst_17302);

(statearr_17309_19252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (1))){
var inst_17284 = null;
var state_17307__$1 = (function (){var statearr_17310 = state_17307;
(statearr_17310[(7)] = inst_17284);

return statearr_17310;
})();
var statearr_17311_19265 = state_17307__$1;
(statearr_17311_19265[(2)] = null);

(statearr_17311_19265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (4))){
var inst_17287 = (state_17307[(8)]);
var inst_17287__$1 = (state_17307[(2)]);
var inst_17288 = (inst_17287__$1 == null);
var inst_17289 = cljs.core.not(inst_17288);
var state_17307__$1 = (function (){var statearr_17313 = state_17307;
(statearr_17313[(8)] = inst_17287__$1);

return statearr_17313;
})();
if(inst_17289){
var statearr_17314_19270 = state_17307__$1;
(statearr_17314_19270[(1)] = (5));

} else {
var statearr_17315_19275 = state_17307__$1;
(statearr_17315_19275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (6))){
var state_17307__$1 = state_17307;
var statearr_17316_19278 = state_17307__$1;
(statearr_17316_19278[(2)] = null);

(statearr_17316_19278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (3))){
var inst_17304 = (state_17307[(2)]);
var inst_17305 = cljs.core.async.close_BANG_(out);
var state_17307__$1 = (function (){var statearr_17320 = state_17307;
(statearr_17320[(9)] = inst_17304);

return statearr_17320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17307__$1,inst_17305);
} else {
if((state_val_17308 === (2))){
var state_17307__$1 = state_17307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17307__$1,(4),ch);
} else {
if((state_val_17308 === (11))){
var inst_17287 = (state_17307[(8)]);
var inst_17296 = (state_17307[(2)]);
var inst_17284 = inst_17287;
var state_17307__$1 = (function (){var statearr_17322 = state_17307;
(statearr_17322[(10)] = inst_17296);

(statearr_17322[(7)] = inst_17284);

return statearr_17322;
})();
var statearr_17323_19301 = state_17307__$1;
(statearr_17323_19301[(2)] = null);

(statearr_17323_19301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (9))){
var inst_17287 = (state_17307[(8)]);
var state_17307__$1 = state_17307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17307__$1,(11),out,inst_17287);
} else {
if((state_val_17308 === (5))){
var inst_17287 = (state_17307[(8)]);
var inst_17284 = (state_17307[(7)]);
var inst_17291 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17287,inst_17284);
var state_17307__$1 = state_17307;
if(inst_17291){
var statearr_17325_19313 = state_17307__$1;
(statearr_17325_19313[(1)] = (8));

} else {
var statearr_17326_19316 = state_17307__$1;
(statearr_17326_19316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (10))){
var inst_17299 = (state_17307[(2)]);
var state_17307__$1 = state_17307;
var statearr_17327_19321 = state_17307__$1;
(statearr_17327_19321[(2)] = inst_17299);

(statearr_17327_19321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17308 === (8))){
var inst_17284 = (state_17307[(7)]);
var tmp17324 = inst_17284;
var inst_17284__$1 = tmp17324;
var state_17307__$1 = (function (){var statearr_17328 = state_17307;
(statearr_17328[(7)] = inst_17284__$1);

return statearr_17328;
})();
var statearr_17330_19332 = state_17307__$1;
(statearr_17330_19332[(2)] = null);

(statearr_17330_19332[(1)] = (2));


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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_17332 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17332[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_17332[(1)] = (1));

return statearr_17332;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_17307){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_17307);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e17333){var ex__14094__auto__ = e17333;
var statearr_17334_19339 = state_17307;
(statearr_17334_19339[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_17307[(4)]))){
var statearr_17335_19341 = state_17307;
(statearr_17335_19341[(1)] = cljs.core.first((state_17307[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19342 = state_17307;
state_17307 = G__19342;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_17307){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_17307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_17336 = f__14288__auto__();
(statearr_17336[(6)] = c__14287__auto___19248);

return statearr_17336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17341 = arguments.length;
switch (G__17341) {
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
var c__14287__auto___19350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_17387){
var state_val_17388 = (state_17387[(1)]);
if((state_val_17388 === (7))){
var inst_17383 = (state_17387[(2)]);
var state_17387__$1 = state_17387;
var statearr_17389_19351 = state_17387__$1;
(statearr_17389_19351[(2)] = inst_17383);

(statearr_17389_19351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17388 === (1))){
var inst_17346 = (new Array(n));
var inst_17347 = inst_17346;
var inst_17348 = (0);
var state_17387__$1 = (function (){var statearr_17390 = state_17387;
(statearr_17390[(7)] = inst_17347);

(statearr_17390[(8)] = inst_17348);

return statearr_17390;
})();
var statearr_17391_19353 = state_17387__$1;
(statearr_17391_19353[(2)] = null);

(statearr_17391_19353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17388 === (4))){
var inst_17351 = (state_17387[(9)]);
var inst_17351__$1 = (state_17387[(2)]);
var inst_17352 = (inst_17351__$1 == null);
var inst_17353 = cljs.core.not(inst_17352);
var state_17387__$1 = (function (){var statearr_17395 = state_17387;
(statearr_17395[(9)] = inst_17351__$1);

return statearr_17395;
})();
if(inst_17353){
var statearr_17396_19356 = state_17387__$1;
(statearr_17396_19356[(1)] = (5));

} else {
var statearr_17397_19357 = state_17387__$1;
(statearr_17397_19357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17388 === (15))){
var inst_17377 = (state_17387[(2)]);
var state_17387__$1 = state_17387;
var statearr_17398_19360 = state_17387__$1;
(statearr_17398_19360[(2)] = inst_17377);

(statearr_17398_19360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17388 === (13))){
var state_17387__$1 = state_17387;
var statearr_17399_19362 = state_17387__$1;
(statearr_17399_19362[(2)] = null);

(statearr_17399_19362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17388 === (6))){
var inst_17348 = (state_17387[(8)]);
var inst_17369 = (inst_17348 > (0));
var state_17387__$1 = state_17387;
if(cljs.core.truth_(inst_17369)){
var statearr_17400_19364 = state_17387__$1;
(statearr_17400_19364[(1)] = (12));

} else {
var statearr_17401_19365 = state_17387__$1;
(statearr_17401_19365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17388 === (3))){
var inst_17385 = (state_17387[(2)]);
var state_17387__$1 = state_17387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17387__$1,inst_17385);
} else {
if((state_val_17388 === (12))){
var inst_17347 = (state_17387[(7)]);
var inst_17375 = cljs.core.vec(inst_17347);
var state_17387__$1 = state_17387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17387__$1,(15),out,inst_17375);
} else {
if((state_val_17388 === (2))){
var state_17387__$1 = state_17387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17387__$1,(4),ch);
} else {
if((state_val_17388 === (11))){
var inst_17363 = (state_17387[(2)]);
var inst_17364 = (new Array(n));
var inst_17347 = inst_17364;
var inst_17348 = (0);
var state_17387__$1 = (function (){var statearr_17403 = state_17387;
(statearr_17403[(10)] = inst_17363);

(statearr_17403[(7)] = inst_17347);

(statearr_17403[(8)] = inst_17348);

return statearr_17403;
})();
var statearr_17404_19371 = state_17387__$1;
(statearr_17404_19371[(2)] = null);

(statearr_17404_19371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17388 === (9))){
var inst_17347 = (state_17387[(7)]);
var inst_17361 = cljs.core.vec(inst_17347);
var state_17387__$1 = state_17387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17387__$1,(11),out,inst_17361);
} else {
if((state_val_17388 === (5))){
var inst_17347 = (state_17387[(7)]);
var inst_17348 = (state_17387[(8)]);
var inst_17351 = (state_17387[(9)]);
var inst_17356 = (state_17387[(11)]);
var inst_17355 = (inst_17347[inst_17348] = inst_17351);
var inst_17356__$1 = (inst_17348 + (1));
var inst_17357 = (inst_17356__$1 < n);
var state_17387__$1 = (function (){var statearr_17419 = state_17387;
(statearr_17419[(12)] = inst_17355);

(statearr_17419[(11)] = inst_17356__$1);

return statearr_17419;
})();
if(cljs.core.truth_(inst_17357)){
var statearr_17420_19389 = state_17387__$1;
(statearr_17420_19389[(1)] = (8));

} else {
var statearr_17421_19390 = state_17387__$1;
(statearr_17421_19390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17388 === (14))){
var inst_17380 = (state_17387[(2)]);
var inst_17381 = cljs.core.async.close_BANG_(out);
var state_17387__$1 = (function (){var statearr_17429 = state_17387;
(statearr_17429[(13)] = inst_17380);

return statearr_17429;
})();
var statearr_17430_19402 = state_17387__$1;
(statearr_17430_19402[(2)] = inst_17381);

(statearr_17430_19402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17388 === (10))){
var inst_17367 = (state_17387[(2)]);
var state_17387__$1 = state_17387;
var statearr_17431_19407 = state_17387__$1;
(statearr_17431_19407[(2)] = inst_17367);

(statearr_17431_19407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17388 === (8))){
var inst_17347 = (state_17387[(7)]);
var inst_17356 = (state_17387[(11)]);
var tmp17422 = inst_17347;
var inst_17347__$1 = tmp17422;
var inst_17348 = inst_17356;
var state_17387__$1 = (function (){var statearr_17432 = state_17387;
(statearr_17432[(7)] = inst_17347__$1);

(statearr_17432[(8)] = inst_17348);

return statearr_17432;
})();
var statearr_17433_19416 = state_17387__$1;
(statearr_17433_19416[(2)] = null);

(statearr_17433_19416[(1)] = (2));


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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_17450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17450[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_17450[(1)] = (1));

return statearr_17450;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_17387){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_17387);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e17454){var ex__14094__auto__ = e17454;
var statearr_17455_19427 = state_17387;
(statearr_17455_19427[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_17387[(4)]))){
var statearr_17462_19428 = state_17387;
(statearr_17462_19428[(1)] = cljs.core.first((state_17387[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19435 = state_17387;
state_17387 = G__19435;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_17387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_17387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_17463 = f__14288__auto__();
(statearr_17463[(6)] = c__14287__auto___19350);

return statearr_17463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17471 = arguments.length;
switch (G__17471) {
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
var c__14287__auto___19484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14288__auto__ = (function (){var switch__14090__auto__ = (function (state_17520){
var state_val_17521 = (state_17520[(1)]);
if((state_val_17521 === (7))){
var inst_17516 = (state_17520[(2)]);
var state_17520__$1 = state_17520;
var statearr_17522_19495 = state_17520__$1;
(statearr_17522_19495[(2)] = inst_17516);

(statearr_17522_19495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (1))){
var inst_17473 = [];
var inst_17474 = inst_17473;
var inst_17475 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17520__$1 = (function (){var statearr_17523 = state_17520;
(statearr_17523[(7)] = inst_17474);

(statearr_17523[(8)] = inst_17475);

return statearr_17523;
})();
var statearr_17524_19504 = state_17520__$1;
(statearr_17524_19504[(2)] = null);

(statearr_17524_19504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (4))){
var inst_17478 = (state_17520[(9)]);
var inst_17478__$1 = (state_17520[(2)]);
var inst_17479 = (inst_17478__$1 == null);
var inst_17480 = cljs.core.not(inst_17479);
var state_17520__$1 = (function (){var statearr_17528 = state_17520;
(statearr_17528[(9)] = inst_17478__$1);

return statearr_17528;
})();
if(inst_17480){
var statearr_17529_19506 = state_17520__$1;
(statearr_17529_19506[(1)] = (5));

} else {
var statearr_17530_19507 = state_17520__$1;
(statearr_17530_19507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (15))){
var inst_17474 = (state_17520[(7)]);
var inst_17508 = cljs.core.vec(inst_17474);
var state_17520__$1 = state_17520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17520__$1,(18),out,inst_17508);
} else {
if((state_val_17521 === (13))){
var inst_17503 = (state_17520[(2)]);
var state_17520__$1 = state_17520;
var statearr_17531_19508 = state_17520__$1;
(statearr_17531_19508[(2)] = inst_17503);

(statearr_17531_19508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (6))){
var inst_17474 = (state_17520[(7)]);
var inst_17505 = inst_17474.length;
var inst_17506 = (inst_17505 > (0));
var state_17520__$1 = state_17520;
if(cljs.core.truth_(inst_17506)){
var statearr_17532_19509 = state_17520__$1;
(statearr_17532_19509[(1)] = (15));

} else {
var statearr_17533_19510 = state_17520__$1;
(statearr_17533_19510[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (17))){
var inst_17513 = (state_17520[(2)]);
var inst_17514 = cljs.core.async.close_BANG_(out);
var state_17520__$1 = (function (){var statearr_17534 = state_17520;
(statearr_17534[(10)] = inst_17513);

return statearr_17534;
})();
var statearr_17535_19516 = state_17520__$1;
(statearr_17535_19516[(2)] = inst_17514);

(statearr_17535_19516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (3))){
var inst_17518 = (state_17520[(2)]);
var state_17520__$1 = state_17520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17520__$1,inst_17518);
} else {
if((state_val_17521 === (12))){
var inst_17474 = (state_17520[(7)]);
var inst_17493 = cljs.core.vec(inst_17474);
var state_17520__$1 = state_17520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17520__$1,(14),out,inst_17493);
} else {
if((state_val_17521 === (2))){
var state_17520__$1 = state_17520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17520__$1,(4),ch);
} else {
if((state_val_17521 === (11))){
var inst_17474 = (state_17520[(7)]);
var inst_17478 = (state_17520[(9)]);
var inst_17482 = (state_17520[(11)]);
var inst_17490 = inst_17474.push(inst_17478);
var tmp17536 = inst_17474;
var inst_17474__$1 = tmp17536;
var inst_17475 = inst_17482;
var state_17520__$1 = (function (){var statearr_17539 = state_17520;
(statearr_17539[(12)] = inst_17490);

(statearr_17539[(7)] = inst_17474__$1);

(statearr_17539[(8)] = inst_17475);

return statearr_17539;
})();
var statearr_17540_19522 = state_17520__$1;
(statearr_17540_19522[(2)] = null);

(statearr_17540_19522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (9))){
var inst_17475 = (state_17520[(8)]);
var inst_17486 = cljs.core.keyword_identical_QMARK_(inst_17475,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17520__$1 = state_17520;
var statearr_17541_19523 = state_17520__$1;
(statearr_17541_19523[(2)] = inst_17486);

(statearr_17541_19523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (5))){
var inst_17478 = (state_17520[(9)]);
var inst_17482 = (state_17520[(11)]);
var inst_17475 = (state_17520[(8)]);
var inst_17483 = (state_17520[(13)]);
var inst_17482__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17478) : f.call(null,inst_17478));
var inst_17483__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17482__$1,inst_17475);
var state_17520__$1 = (function (){var statearr_17542 = state_17520;
(statearr_17542[(11)] = inst_17482__$1);

(statearr_17542[(13)] = inst_17483__$1);

return statearr_17542;
})();
if(inst_17483__$1){
var statearr_17543_19533 = state_17520__$1;
(statearr_17543_19533[(1)] = (8));

} else {
var statearr_17547_19534 = state_17520__$1;
(statearr_17547_19534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (14))){
var inst_17478 = (state_17520[(9)]);
var inst_17482 = (state_17520[(11)]);
var inst_17495 = (state_17520[(2)]);
var inst_17496 = [];
var inst_17500 = inst_17496.push(inst_17478);
var inst_17474 = inst_17496;
var inst_17475 = inst_17482;
var state_17520__$1 = (function (){var statearr_17548 = state_17520;
(statearr_17548[(14)] = inst_17495);

(statearr_17548[(15)] = inst_17500);

(statearr_17548[(7)] = inst_17474);

(statearr_17548[(8)] = inst_17475);

return statearr_17548;
})();
var statearr_17549_19538 = state_17520__$1;
(statearr_17549_19538[(2)] = null);

(statearr_17549_19538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (16))){
var state_17520__$1 = state_17520;
var statearr_17550_19541 = state_17520__$1;
(statearr_17550_19541[(2)] = null);

(statearr_17550_19541[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (10))){
var inst_17488 = (state_17520[(2)]);
var state_17520__$1 = state_17520;
if(cljs.core.truth_(inst_17488)){
var statearr_17551_19543 = state_17520__$1;
(statearr_17551_19543[(1)] = (11));

} else {
var statearr_17552_19544 = state_17520__$1;
(statearr_17552_19544[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (18))){
var inst_17510 = (state_17520[(2)]);
var state_17520__$1 = state_17520;
var statearr_17556_19548 = state_17520__$1;
(statearr_17556_19548[(2)] = inst_17510);

(statearr_17556_19548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17521 === (8))){
var inst_17483 = (state_17520[(13)]);
var state_17520__$1 = state_17520;
var statearr_17562_19549 = state_17520__$1;
(statearr_17562_19549[(2)] = inst_17483);

(statearr_17562_19549[(1)] = (10));


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
var cljs$core$async$state_machine__14091__auto__ = null;
var cljs$core$async$state_machine__14091__auto____0 = (function (){
var statearr_17565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17565[(0)] = cljs$core$async$state_machine__14091__auto__);

(statearr_17565[(1)] = (1));

return statearr_17565;
});
var cljs$core$async$state_machine__14091__auto____1 = (function (state_17520){
while(true){
var ret_value__14092__auto__ = (function (){try{while(true){
var result__14093__auto__ = switch__14090__auto__(state_17520);
if(cljs.core.keyword_identical_QMARK_(result__14093__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14093__auto__;
}
break;
}
}catch (e17566){var ex__14094__auto__ = e17566;
var statearr_17567_19552 = state_17520;
(statearr_17567_19552[(2)] = ex__14094__auto__);


if(cljs.core.seq((state_17520[(4)]))){
var statearr_17568_19553 = state_17520;
(statearr_17568_19553[(1)] = cljs.core.first((state_17520[(4)])));

} else {
throw ex__14094__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14092__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19556 = state_17520;
state_17520 = G__19556;
continue;
} else {
return ret_value__14092__auto__;
}
break;
}
});
cljs$core$async$state_machine__14091__auto__ = function(state_17520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14091__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14091__auto____1.call(this,state_17520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14091__auto____0;
cljs$core$async$state_machine__14091__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14091__auto____1;
return cljs$core$async$state_machine__14091__auto__;
})()
})();
var state__14289__auto__ = (function (){var statearr_17572 = f__14288__auto__();
(statearr_17572[(6)] = c__14287__auto___19484);

return statearr_17572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14289__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

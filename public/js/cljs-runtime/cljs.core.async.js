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
cljs.core.async.t_cljs$core$async15238 = (function (f,blockable,meta15239){
this.f = f;
this.blockable = blockable;
this.meta15239 = meta15239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15240,meta15239__$1){
var self__ = this;
var _15240__$1 = this;
return (new cljs.core.async.t_cljs$core$async15238(self__.f,self__.blockable,meta15239__$1));
}));

(cljs.core.async.t_cljs$core$async15238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15240){
var self__ = this;
var _15240__$1 = this;
return self__.meta15239;
}));

(cljs.core.async.t_cljs$core$async15238.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15238.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15239","meta15239",-1323173018,null)], null);
}));

(cljs.core.async.t_cljs$core$async15238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15238");

(cljs.core.async.t_cljs$core$async15238.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15238.
 */
cljs.core.async.__GT_t_cljs$core$async15238 = (function cljs$core$async$__GT_t_cljs$core$async15238(f,blockable,meta15239){
return (new cljs.core.async.t_cljs$core$async15238(f,blockable,meta15239));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15236 = arguments.length;
switch (G__15236) {
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
return (new cljs.core.async.t_cljs$core$async15238(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__15287 = arguments.length;
switch (G__15287) {
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
var G__15304 = arguments.length;
switch (G__15304) {
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
var G__15326 = arguments.length;
switch (G__15326) {
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
var val_19712 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19712) : fn1.call(null,val_19712));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19712) : fn1.call(null,val_19712));
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
var G__15379 = arguments.length;
switch (G__15379) {
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
var n__5741__auto___19724 = n;
var x_19725 = (0);
while(true){
if((x_19725 < n__5741__auto___19724)){
(a[x_19725] = x_19725);

var G__19726 = (x_19725 + (1));
x_19725 = G__19726;
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
cljs.core.async.t_cljs$core$async15426 = (function (flag,meta15427){
this.flag = flag;
this.meta15427 = meta15427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15428,meta15427__$1){
var self__ = this;
var _15428__$1 = this;
return (new cljs.core.async.t_cljs$core$async15426(self__.flag,meta15427__$1));
}));

(cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15428){
var self__ = this;
var _15428__$1 = this;
return self__.meta15427;
}));

(cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15427","meta15427",-1911782357,null)], null);
}));

(cljs.core.async.t_cljs$core$async15426.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15426");

(cljs.core.async.t_cljs$core$async15426.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15426");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15426.
 */
cljs.core.async.__GT_t_cljs$core$async15426 = (function cljs$core$async$__GT_t_cljs$core$async15426(flag,meta15427){
return (new cljs.core.async.t_cljs$core$async15426(flag,meta15427));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15426(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15458 = (function (flag,cb,meta15459){
this.flag = flag;
this.cb = cb;
this.meta15459 = meta15459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15460,meta15459__$1){
var self__ = this;
var _15460__$1 = this;
return (new cljs.core.async.t_cljs$core$async15458(self__.flag,self__.cb,meta15459__$1));
}));

(cljs.core.async.t_cljs$core$async15458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15460){
var self__ = this;
var _15460__$1 = this;
return self__.meta15459;
}));

(cljs.core.async.t_cljs$core$async15458.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15458.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15458.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15458.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15458.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15459","meta15459",-498444898,null)], null);
}));

(cljs.core.async.t_cljs$core$async15458.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15458.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15458");

(cljs.core.async.t_cljs$core$async15458.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15458");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15458.
 */
cljs.core.async.__GT_t_cljs$core$async15458 = (function cljs$core$async$__GT_t_cljs$core$async15458(flag,cb,meta15459){
return (new cljs.core.async.t_cljs$core$async15458(flag,cb,meta15459));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15458(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
var port_19736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_19736)){
if((!(((port_19736.cljs$core$IFn$_invoke$arity$1 ? port_19736.cljs$core$IFn$_invoke$arity$1((1)) : port_19736.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__19737 = (i + (1));
i = G__19737;
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
return (function (p1__15478_SHARP_){
var G__15499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15478_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15499) : fret.call(null,G__15499));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15479_SHARP_){
var G__15503 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15479_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15503) : fret.call(null,G__15503));
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
var G__19749 = (i + (1));
i = G__19749;
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
var len__5876__auto___19750 = arguments.length;
var i__5877__auto___19751 = (0);
while(true){
if((i__5877__auto___19751 < len__5876__auto___19750)){
args__5882__auto__.push((arguments[i__5877__auto___19751]));

var G__19752 = (i__5877__auto___19751 + (1));
i__5877__auto___19751 = G__19752;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15519){
var map__15522 = p__15519;
var map__15522__$1 = cljs.core.__destructure_map(map__15522);
var opts = map__15522__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15511){
var G__15512 = cljs.core.first(seq15511);
var seq15511__$1 = cljs.core.next(seq15511);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15512,seq15511__$1);
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
var G__15542 = arguments.length;
switch (G__15542) {
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
var c__15122__auto___19759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_15628){
var state_val_15645 = (state_15628[(1)]);
if((state_val_15645 === (7))){
var inst_15617 = (state_15628[(2)]);
var state_15628__$1 = state_15628;
var statearr_15669_19762 = state_15628__$1;
(statearr_15669_19762[(2)] = inst_15617);

(statearr_15669_19762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (1))){
var state_15628__$1 = state_15628;
var statearr_15670_19763 = state_15628__$1;
(statearr_15670_19763[(2)] = null);

(statearr_15670_19763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (4))){
var inst_15586 = (state_15628[(7)]);
var inst_15586__$1 = (state_15628[(2)]);
var inst_15593 = (inst_15586__$1 == null);
var state_15628__$1 = (function (){var statearr_15687 = state_15628;
(statearr_15687[(7)] = inst_15586__$1);

return statearr_15687;
})();
if(cljs.core.truth_(inst_15593)){
var statearr_15692_19764 = state_15628__$1;
(statearr_15692_19764[(1)] = (5));

} else {
var statearr_15695_19765 = state_15628__$1;
(statearr_15695_19765[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (13))){
var state_15628__$1 = state_15628;
var statearr_15703_19766 = state_15628__$1;
(statearr_15703_19766[(2)] = null);

(statearr_15703_19766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (6))){
var inst_15586 = (state_15628[(7)]);
var state_15628__$1 = state_15628;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15628__$1,(11),to,inst_15586);
} else {
if((state_val_15645 === (3))){
var inst_15619 = (state_15628[(2)]);
var state_15628__$1 = state_15628;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15628__$1,inst_15619);
} else {
if((state_val_15645 === (12))){
var state_15628__$1 = state_15628;
var statearr_15734_19768 = state_15628__$1;
(statearr_15734_19768[(2)] = null);

(statearr_15734_19768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (2))){
var state_15628__$1 = state_15628;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15628__$1,(4),from);
} else {
if((state_val_15645 === (11))){
var inst_15607 = (state_15628[(2)]);
var state_15628__$1 = state_15628;
if(cljs.core.truth_(inst_15607)){
var statearr_15746_19769 = state_15628__$1;
(statearr_15746_19769[(1)] = (12));

} else {
var statearr_15747_19770 = state_15628__$1;
(statearr_15747_19770[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (9))){
var state_15628__$1 = state_15628;
var statearr_15752_19771 = state_15628__$1;
(statearr_15752_19771[(2)] = null);

(statearr_15752_19771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (5))){
var state_15628__$1 = state_15628;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15754_19774 = state_15628__$1;
(statearr_15754_19774[(1)] = (8));

} else {
var statearr_15755_19780 = state_15628__$1;
(statearr_15755_19780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (14))){
var inst_15615 = (state_15628[(2)]);
var state_15628__$1 = state_15628;
var statearr_15760_19781 = state_15628__$1;
(statearr_15760_19781[(2)] = inst_15615);

(statearr_15760_19781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (10))){
var inst_15604 = (state_15628[(2)]);
var state_15628__$1 = state_15628;
var statearr_15769_19782 = state_15628__$1;
(statearr_15769_19782[(2)] = inst_15604);

(statearr_15769_19782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15645 === (8))){
var inst_15598 = cljs.core.async.close_BANG_(to);
var state_15628__$1 = state_15628;
var statearr_15770_19783 = state_15628__$1;
(statearr_15770_19783[(2)] = inst_15598);

(statearr_15770_19783[(1)] = (10));


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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_15777 = [null,null,null,null,null,null,null,null];
(statearr_15777[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_15777[(1)] = (1));

return statearr_15777;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_15628){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_15628);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e15778){var ex__13786__auto__ = e15778;
var statearr_15779_19794 = state_15628;
(statearr_15779_19794[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_15628[(4)]))){
var statearr_15781_19795 = state_15628;
(statearr_15781_19795[(1)] = cljs.core.first((state_15628[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19797 = state_15628;
state_15628 = G__19797;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_15628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_15628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_15782 = f__15123__auto__();
(statearr_15782[(6)] = c__15122__auto___19759);

return statearr_15782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
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
var process__$1 = (function (p__15813){
var vec__15816 = p__15813;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15816,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15816,(1),null);
var job = vec__15816;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15122__auto___19805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_15854){
var state_val_15855 = (state_15854[(1)]);
if((state_val_15855 === (1))){
var state_15854__$1 = state_15854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15854__$1,(2),res,v);
} else {
if((state_val_15855 === (2))){
var inst_15850 = (state_15854[(2)]);
var inst_15851 = cljs.core.async.close_BANG_(res);
var state_15854__$1 = (function (){var statearr_15885 = state_15854;
(statearr_15885[(7)] = inst_15850);

return statearr_15885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15854__$1,inst_15851);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0 = (function (){
var statearr_15886 = [null,null,null,null,null,null,null,null];
(statearr_15886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__);

(statearr_15886[(1)] = (1));

return statearr_15886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1 = (function (state_15854){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_15854);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e15891){var ex__13786__auto__ = e15891;
var statearr_15895_19817 = state_15854;
(statearr_15895_19817[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_15854[(4)]))){
var statearr_15901_19821 = state_15854;
(statearr_15901_19821[(1)] = cljs.core.first((state_15854[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19830 = state_15854;
state_15854 = G__19830;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__ = function(state_15854){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1.call(this,state_15854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_15905 = f__15123__auto__();
(statearr_15905[(6)] = c__15122__auto___19805);

return statearr_15905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15909){
var vec__15910 = p__15909;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15910,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15910,(1),null);
var job = vec__15910;
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
var n__5741__auto___19848 = n;
var __19850 = (0);
while(true){
if((__19850 < n__5741__auto___19848)){
var G__15922_19855 = type;
var G__15922_19856__$1 = (((G__15922_19855 instanceof cljs.core.Keyword))?G__15922_19855.fqn:null);
switch (G__15922_19856__$1) {
case "compute":
var c__15122__auto___19859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19850,c__15122__auto___19859,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async){
return (function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = ((function (__19850,c__15122__auto___19859,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async){
return (function (state_15955){
var state_val_15957 = (state_15955[(1)]);
if((state_val_15957 === (1))){
var state_15955__$1 = state_15955;
var statearr_15981_19876 = state_15955__$1;
(statearr_15981_19876[(2)] = null);

(statearr_15981_19876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (2))){
var state_15955__$1 = state_15955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15955__$1,(4),jobs);
} else {
if((state_val_15957 === (3))){
var inst_15949 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15955__$1,inst_15949);
} else {
if((state_val_15957 === (4))){
var inst_15936 = (state_15955[(2)]);
var inst_15937 = process__$1(inst_15936);
var state_15955__$1 = state_15955;
if(cljs.core.truth_(inst_15937)){
var statearr_16005_19878 = state_15955__$1;
(statearr_16005_19878[(1)] = (5));

} else {
var statearr_16006_19879 = state_15955__$1;
(statearr_16006_19879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (5))){
var state_15955__$1 = state_15955;
var statearr_16010_19880 = state_15955__$1;
(statearr_16010_19880[(2)] = null);

(statearr_16010_19880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (6))){
var state_15955__$1 = state_15955;
var statearr_16013_19881 = state_15955__$1;
(statearr_16013_19881[(2)] = null);

(statearr_16013_19881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15957 === (7))){
var inst_15947 = (state_15955[(2)]);
var state_15955__$1 = state_15955;
var statearr_16014_19883 = state_15955__$1;
(statearr_16014_19883[(2)] = inst_15947);

(statearr_16014_19883[(1)] = (3));


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
});})(__19850,c__15122__auto___19859,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async))
;
return ((function (__19850,switch__13782__auto__,c__15122__auto___19859,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0 = (function (){
var statearr_16021 = [null,null,null,null,null,null,null];
(statearr_16021[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__);

(statearr_16021[(1)] = (1));

return statearr_16021;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1 = (function (state_15955){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_15955);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e16029){var ex__13786__auto__ = e16029;
var statearr_16034_19884 = state_15955;
(statearr_16034_19884[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_15955[(4)]))){
var statearr_16035_19885 = state_15955;
(statearr_16035_19885[(1)] = cljs.core.first((state_15955[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19886 = state_15955;
state_15955 = G__19886;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__ = function(state_15955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1.call(this,state_15955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__;
})()
;})(__19850,switch__13782__auto__,c__15122__auto___19859,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async))
})();
var state__15124__auto__ = (function (){var statearr_16039 = f__15123__auto__();
(statearr_16039[(6)] = c__15122__auto___19859);

return statearr_16039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
});})(__19850,c__15122__auto___19859,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async))
);


break;
case "async":
var c__15122__auto___19888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19850,c__15122__auto___19888,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async){
return (function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = ((function (__19850,c__15122__auto___19888,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async){
return (function (state_16059){
var state_val_16060 = (state_16059[(1)]);
if((state_val_16060 === (1))){
var state_16059__$1 = state_16059;
var statearr_16066_19892 = state_16059__$1;
(statearr_16066_19892[(2)] = null);

(statearr_16066_19892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (2))){
var state_16059__$1 = state_16059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16059__$1,(4),jobs);
} else {
if((state_val_16060 === (3))){
var inst_16057 = (state_16059[(2)]);
var state_16059__$1 = state_16059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16059__$1,inst_16057);
} else {
if((state_val_16060 === (4))){
var inst_16046 = (state_16059[(2)]);
var inst_16047 = async(inst_16046);
var state_16059__$1 = state_16059;
if(cljs.core.truth_(inst_16047)){
var statearr_16070_19893 = state_16059__$1;
(statearr_16070_19893[(1)] = (5));

} else {
var statearr_16073_19894 = state_16059__$1;
(statearr_16073_19894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (5))){
var state_16059__$1 = state_16059;
var statearr_16074_19895 = state_16059__$1;
(statearr_16074_19895[(2)] = null);

(statearr_16074_19895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (6))){
var state_16059__$1 = state_16059;
var statearr_16078_19897 = state_16059__$1;
(statearr_16078_19897[(2)] = null);

(statearr_16078_19897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16060 === (7))){
var inst_16055 = (state_16059[(2)]);
var state_16059__$1 = state_16059;
var statearr_16079_19898 = state_16059__$1;
(statearr_16079_19898[(2)] = inst_16055);

(statearr_16079_19898[(1)] = (3));


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
});})(__19850,c__15122__auto___19888,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async))
;
return ((function (__19850,switch__13782__auto__,c__15122__auto___19888,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0 = (function (){
var statearr_16080 = [null,null,null,null,null,null,null];
(statearr_16080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__);

(statearr_16080[(1)] = (1));

return statearr_16080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1 = (function (state_16059){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_16059);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e16083){var ex__13786__auto__ = e16083;
var statearr_16085_19899 = state_16059;
(statearr_16085_19899[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_16059[(4)]))){
var statearr_16086_19900 = state_16059;
(statearr_16086_19900[(1)] = cljs.core.first((state_16059[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19902 = state_16059;
state_16059 = G__19902;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__ = function(state_16059){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1.call(this,state_16059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__;
})()
;})(__19850,switch__13782__auto__,c__15122__auto___19888,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async))
})();
var state__15124__auto__ = (function (){var statearr_16089 = f__15123__auto__();
(statearr_16089[(6)] = c__15122__auto___19888);

return statearr_16089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
});})(__19850,c__15122__auto___19888,G__15922_19855,G__15922_19856__$1,n__5741__auto___19848,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15922_19856__$1))));

}

var G__19907 = (__19850 + (1));
__19850 = G__19907;
continue;
} else {
}
break;
}

var c__15122__auto___19908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_16137){
var state_val_16138 = (state_16137[(1)]);
if((state_val_16138 === (7))){
var inst_16133 = (state_16137[(2)]);
var state_16137__$1 = state_16137;
var statearr_16159_19914 = state_16137__$1;
(statearr_16159_19914[(2)] = inst_16133);

(statearr_16159_19914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (1))){
var state_16137__$1 = state_16137;
var statearr_16166_19916 = state_16137__$1;
(statearr_16166_19916[(2)] = null);

(statearr_16166_19916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (4))){
var inst_16110 = (state_16137[(7)]);
var inst_16110__$1 = (state_16137[(2)]);
var inst_16111 = (inst_16110__$1 == null);
var state_16137__$1 = (function (){var statearr_16168 = state_16137;
(statearr_16168[(7)] = inst_16110__$1);

return statearr_16168;
})();
if(cljs.core.truth_(inst_16111)){
var statearr_16171_19918 = state_16137__$1;
(statearr_16171_19918[(1)] = (5));

} else {
var statearr_16172_19919 = state_16137__$1;
(statearr_16172_19919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (6))){
var inst_16110 = (state_16137[(7)]);
var inst_16117 = (state_16137[(8)]);
var inst_16117__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16118 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16125 = [inst_16110,inst_16117__$1];
var inst_16126 = (new cljs.core.PersistentVector(null,2,(5),inst_16118,inst_16125,null));
var state_16137__$1 = (function (){var statearr_16182 = state_16137;
(statearr_16182[(8)] = inst_16117__$1);

return statearr_16182;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16137__$1,(8),jobs,inst_16126);
} else {
if((state_val_16138 === (3))){
var inst_16135 = (state_16137[(2)]);
var state_16137__$1 = state_16137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16137__$1,inst_16135);
} else {
if((state_val_16138 === (2))){
var state_16137__$1 = state_16137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16137__$1,(4),from);
} else {
if((state_val_16138 === (9))){
var inst_16130 = (state_16137[(2)]);
var state_16137__$1 = (function (){var statearr_16188 = state_16137;
(statearr_16188[(9)] = inst_16130);

return statearr_16188;
})();
var statearr_16189_19932 = state_16137__$1;
(statearr_16189_19932[(2)] = null);

(statearr_16189_19932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (5))){
var inst_16115 = cljs.core.async.close_BANG_(jobs);
var state_16137__$1 = state_16137;
var statearr_16193_19937 = state_16137__$1;
(statearr_16193_19937[(2)] = inst_16115);

(statearr_16193_19937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16138 === (8))){
var inst_16117 = (state_16137[(8)]);
var inst_16128 = (state_16137[(2)]);
var state_16137__$1 = (function (){var statearr_16198 = state_16137;
(statearr_16198[(10)] = inst_16128);

return statearr_16198;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16137__$1,(9),results,inst_16117);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0 = (function (){
var statearr_16203 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__);

(statearr_16203[(1)] = (1));

return statearr_16203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1 = (function (state_16137){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_16137);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e16206){var ex__13786__auto__ = e16206;
var statearr_16207_19940 = state_16137;
(statearr_16207_19940[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_16137[(4)]))){
var statearr_16208_19941 = state_16137;
(statearr_16208_19941[(1)] = cljs.core.first((state_16137[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19942 = state_16137;
state_16137 = G__19942;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__ = function(state_16137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1.call(this,state_16137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_16218 = f__15123__auto__();
(statearr_16218[(6)] = c__15122__auto___19908);

return statearr_16218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));


var c__15122__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_16280){
var state_val_16284 = (state_16280[(1)]);
if((state_val_16284 === (7))){
var inst_16268 = (state_16280[(2)]);
var state_16280__$1 = state_16280;
var statearr_16295_19945 = state_16280__$1;
(statearr_16295_19945[(2)] = inst_16268);

(statearr_16295_19945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (20))){
var state_16280__$1 = state_16280;
var statearr_16302_19947 = state_16280__$1;
(statearr_16302_19947[(2)] = null);

(statearr_16302_19947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (1))){
var state_16280__$1 = state_16280;
var statearr_16309_19949 = state_16280__$1;
(statearr_16309_19949[(2)] = null);

(statearr_16309_19949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (4))){
var inst_16221 = (state_16280[(7)]);
var inst_16221__$1 = (state_16280[(2)]);
var inst_16222 = (inst_16221__$1 == null);
var state_16280__$1 = (function (){var statearr_16316 = state_16280;
(statearr_16316[(7)] = inst_16221__$1);

return statearr_16316;
})();
if(cljs.core.truth_(inst_16222)){
var statearr_16323_19951 = state_16280__$1;
(statearr_16323_19951[(1)] = (5));

} else {
var statearr_16328_19952 = state_16280__$1;
(statearr_16328_19952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (15))){
var inst_16239 = (state_16280[(8)]);
var state_16280__$1 = state_16280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16280__$1,(18),to,inst_16239);
} else {
if((state_val_16284 === (21))){
var inst_16261 = (state_16280[(2)]);
var state_16280__$1 = state_16280;
var statearr_16375_19953 = state_16280__$1;
(statearr_16375_19953[(2)] = inst_16261);

(statearr_16375_19953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (13))){
var inst_16264 = (state_16280[(2)]);
var state_16280__$1 = (function (){var statearr_16394 = state_16280;
(statearr_16394[(9)] = inst_16264);

return statearr_16394;
})();
var statearr_16396_19956 = state_16280__$1;
(statearr_16396_19956[(2)] = null);

(statearr_16396_19956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (6))){
var inst_16221 = (state_16280[(7)]);
var state_16280__$1 = state_16280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16280__$1,(11),inst_16221);
} else {
if((state_val_16284 === (17))){
var inst_16250 = (state_16280[(2)]);
var state_16280__$1 = state_16280;
if(cljs.core.truth_(inst_16250)){
var statearr_16401_19961 = state_16280__$1;
(statearr_16401_19961[(1)] = (19));

} else {
var statearr_16402_19962 = state_16280__$1;
(statearr_16402_19962[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (3))){
var inst_16270 = (state_16280[(2)]);
var state_16280__$1 = state_16280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16280__$1,inst_16270);
} else {
if((state_val_16284 === (12))){
var inst_16231 = (state_16280[(10)]);
var state_16280__$1 = state_16280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16280__$1,(14),inst_16231);
} else {
if((state_val_16284 === (2))){
var state_16280__$1 = state_16280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16280__$1,(4),results);
} else {
if((state_val_16284 === (19))){
var state_16280__$1 = state_16280;
var statearr_16409_19964 = state_16280__$1;
(statearr_16409_19964[(2)] = null);

(statearr_16409_19964[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (11))){
var inst_16231 = (state_16280[(2)]);
var state_16280__$1 = (function (){var statearr_16410 = state_16280;
(statearr_16410[(10)] = inst_16231);

return statearr_16410;
})();
var statearr_16412_19965 = state_16280__$1;
(statearr_16412_19965[(2)] = null);

(statearr_16412_19965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (9))){
var state_16280__$1 = state_16280;
var statearr_16414_19966 = state_16280__$1;
(statearr_16414_19966[(2)] = null);

(statearr_16414_19966[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (5))){
var state_16280__$1 = state_16280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16416_19967 = state_16280__$1;
(statearr_16416_19967[(1)] = (8));

} else {
var statearr_16420_19969 = state_16280__$1;
(statearr_16420_19969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (14))){
var inst_16239 = (state_16280[(8)]);
var inst_16244 = (state_16280[(11)]);
var inst_16239__$1 = (state_16280[(2)]);
var inst_16243 = (inst_16239__$1 == null);
var inst_16244__$1 = cljs.core.not(inst_16243);
var state_16280__$1 = (function (){var statearr_16424 = state_16280;
(statearr_16424[(8)] = inst_16239__$1);

(statearr_16424[(11)] = inst_16244__$1);

return statearr_16424;
})();
if(inst_16244__$1){
var statearr_16427_19971 = state_16280__$1;
(statearr_16427_19971[(1)] = (15));

} else {
var statearr_16428_19974 = state_16280__$1;
(statearr_16428_19974[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (16))){
var inst_16244 = (state_16280[(11)]);
var state_16280__$1 = state_16280;
var statearr_16429_19975 = state_16280__$1;
(statearr_16429_19975[(2)] = inst_16244);

(statearr_16429_19975[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (10))){
var inst_16228 = (state_16280[(2)]);
var state_16280__$1 = state_16280;
var statearr_16430_19977 = state_16280__$1;
(statearr_16430_19977[(2)] = inst_16228);

(statearr_16430_19977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (18))){
var inst_16247 = (state_16280[(2)]);
var state_16280__$1 = state_16280;
var statearr_16431_19979 = state_16280__$1;
(statearr_16431_19979[(2)] = inst_16247);

(statearr_16431_19979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16284 === (8))){
var inst_16225 = cljs.core.async.close_BANG_(to);
var state_16280__$1 = state_16280;
var statearr_16432_19981 = state_16280__$1;
(statearr_16432_19981[(2)] = inst_16225);

(statearr_16432_19981[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0 = (function (){
var statearr_16435 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__);

(statearr_16435[(1)] = (1));

return statearr_16435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1 = (function (state_16280){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_16280);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e16436){var ex__13786__auto__ = e16436;
var statearr_16437_19985 = state_16280;
(statearr_16437_19985[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_16280[(4)]))){
var statearr_16438_19986 = state_16280;
(statearr_16438_19986[(1)] = cljs.core.first((state_16280[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19987 = state_16280;
state_16280 = G__19987;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__ = function(state_16280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1.call(this,state_16280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13783__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_16443 = f__15123__auto__();
(statearr_16443[(6)] = c__15122__auto__);

return statearr_16443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));

return c__15122__auto__;
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
var G__16462 = arguments.length;
switch (G__16462) {
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
var G__16467 = arguments.length;
switch (G__16467) {
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
var G__16476 = arguments.length;
switch (G__16476) {
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
var c__15122__auto___20000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_16516){
var state_val_16517 = (state_16516[(1)]);
if((state_val_16517 === (7))){
var inst_16510 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16522_20001 = state_16516__$1;
(statearr_16522_20001[(2)] = inst_16510);

(statearr_16522_20001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (1))){
var state_16516__$1 = state_16516;
var statearr_16523_20003 = state_16516__$1;
(statearr_16523_20003[(2)] = null);

(statearr_16523_20003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (4))){
var inst_16490 = (state_16516[(7)]);
var inst_16490__$1 = (state_16516[(2)]);
var inst_16492 = (inst_16490__$1 == null);
var state_16516__$1 = (function (){var statearr_16524 = state_16516;
(statearr_16524[(7)] = inst_16490__$1);

return statearr_16524;
})();
if(cljs.core.truth_(inst_16492)){
var statearr_16528_20004 = state_16516__$1;
(statearr_16528_20004[(1)] = (5));

} else {
var statearr_16531_20005 = state_16516__$1;
(statearr_16531_20005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (13))){
var state_16516__$1 = state_16516;
var statearr_16533_20006 = state_16516__$1;
(statearr_16533_20006[(2)] = null);

(statearr_16533_20006[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (6))){
var inst_16490 = (state_16516[(7)]);
var inst_16497 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16490) : p.call(null,inst_16490));
var state_16516__$1 = state_16516;
if(cljs.core.truth_(inst_16497)){
var statearr_16534_20010 = state_16516__$1;
(statearr_16534_20010[(1)] = (9));

} else {
var statearr_16535_20017 = state_16516__$1;
(statearr_16535_20017[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (3))){
var inst_16512 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16516__$1,inst_16512);
} else {
if((state_val_16517 === (12))){
var state_16516__$1 = state_16516;
var statearr_16539_20020 = state_16516__$1;
(statearr_16539_20020[(2)] = null);

(statearr_16539_20020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (2))){
var state_16516__$1 = state_16516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16516__$1,(4),ch);
} else {
if((state_val_16517 === (11))){
var inst_16490 = (state_16516[(7)]);
var inst_16501 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16516__$1,(8),inst_16501,inst_16490);
} else {
if((state_val_16517 === (9))){
var state_16516__$1 = state_16516;
var statearr_16544_20023 = state_16516__$1;
(statearr_16544_20023[(2)] = tc);

(statearr_16544_20023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (5))){
var inst_16494 = cljs.core.async.close_BANG_(tc);
var inst_16495 = cljs.core.async.close_BANG_(fc);
var state_16516__$1 = (function (){var statearr_16545 = state_16516;
(statearr_16545[(8)] = inst_16494);

return statearr_16545;
})();
var statearr_16547_20025 = state_16516__$1;
(statearr_16547_20025[(2)] = inst_16495);

(statearr_16547_20025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (14))){
var inst_16508 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
var statearr_16548_20026 = state_16516__$1;
(statearr_16548_20026[(2)] = inst_16508);

(statearr_16548_20026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (10))){
var state_16516__$1 = state_16516;
var statearr_16551_20031 = state_16516__$1;
(statearr_16551_20031[(2)] = fc);

(statearr_16551_20031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16517 === (8))){
var inst_16503 = (state_16516[(2)]);
var state_16516__$1 = state_16516;
if(cljs.core.truth_(inst_16503)){
var statearr_16553_20033 = state_16516__$1;
(statearr_16553_20033[(1)] = (12));

} else {
var statearr_16554_20034 = state_16516__$1;
(statearr_16554_20034[(1)] = (13));

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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_16557 = [null,null,null,null,null,null,null,null,null];
(statearr_16557[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_16557[(1)] = (1));

return statearr_16557;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_16516){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_16516);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e16559){var ex__13786__auto__ = e16559;
var statearr_16560_20036 = state_16516;
(statearr_16560_20036[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_16516[(4)]))){
var statearr_16564_20037 = state_16516;
(statearr_16564_20037[(1)] = cljs.core.first((state_16516[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20040 = state_16516;
state_16516 = G__20040;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_16516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_16516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_16570 = f__15123__auto__();
(statearr_16570[(6)] = c__15122__auto___20000);

return statearr_16570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
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
var c__15122__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_16620){
var state_val_16621 = (state_16620[(1)]);
if((state_val_16621 === (7))){
var inst_16614 = (state_16620[(2)]);
var state_16620__$1 = state_16620;
var statearr_16632_20043 = state_16620__$1;
(statearr_16632_20043[(2)] = inst_16614);

(statearr_16632_20043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16621 === (1))){
var inst_16572 = init;
var inst_16573 = inst_16572;
var state_16620__$1 = (function (){var statearr_16633 = state_16620;
(statearr_16633[(7)] = inst_16573);

return statearr_16633;
})();
var statearr_16638_20044 = state_16620__$1;
(statearr_16638_20044[(2)] = null);

(statearr_16638_20044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16621 === (4))){
var inst_16576 = (state_16620[(8)]);
var inst_16576__$1 = (state_16620[(2)]);
var inst_16577 = (inst_16576__$1 == null);
var state_16620__$1 = (function (){var statearr_16641 = state_16620;
(statearr_16641[(8)] = inst_16576__$1);

return statearr_16641;
})();
if(cljs.core.truth_(inst_16577)){
var statearr_16645_20045 = state_16620__$1;
(statearr_16645_20045[(1)] = (5));

} else {
var statearr_16646_20046 = state_16620__$1;
(statearr_16646_20046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16621 === (6))){
var inst_16573 = (state_16620[(7)]);
var inst_16576 = (state_16620[(8)]);
var inst_16598 = (state_16620[(9)]);
var inst_16598__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16573,inst_16576) : f.call(null,inst_16573,inst_16576));
var inst_16606 = cljs.core.reduced_QMARK_(inst_16598__$1);
var state_16620__$1 = (function (){var statearr_16655 = state_16620;
(statearr_16655[(9)] = inst_16598__$1);

return statearr_16655;
})();
if(inst_16606){
var statearr_16660_20048 = state_16620__$1;
(statearr_16660_20048[(1)] = (8));

} else {
var statearr_16662_20049 = state_16620__$1;
(statearr_16662_20049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16621 === (3))){
var inst_16616 = (state_16620[(2)]);
var state_16620__$1 = state_16620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16620__$1,inst_16616);
} else {
if((state_val_16621 === (2))){
var state_16620__$1 = state_16620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16620__$1,(4),ch);
} else {
if((state_val_16621 === (9))){
var inst_16598 = (state_16620[(9)]);
var inst_16573 = inst_16598;
var state_16620__$1 = (function (){var statearr_16668 = state_16620;
(statearr_16668[(7)] = inst_16573);

return statearr_16668;
})();
var statearr_16669_20051 = state_16620__$1;
(statearr_16669_20051[(2)] = null);

(statearr_16669_20051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16621 === (5))){
var inst_16573 = (state_16620[(7)]);
var state_16620__$1 = state_16620;
var statearr_16673_20052 = state_16620__$1;
(statearr_16673_20052[(2)] = inst_16573);

(statearr_16673_20052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16621 === (10))){
var inst_16612 = (state_16620[(2)]);
var state_16620__$1 = state_16620;
var statearr_16679_20053 = state_16620__$1;
(statearr_16679_20053[(2)] = inst_16612);

(statearr_16679_20053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16621 === (8))){
var inst_16598 = (state_16620[(9)]);
var inst_16608 = cljs.core.deref(inst_16598);
var state_16620__$1 = state_16620;
var statearr_16684_20054 = state_16620__$1;
(statearr_16684_20054[(2)] = inst_16608);

(statearr_16684_20054[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13783__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13783__auto____0 = (function (){
var statearr_16692 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16692[(0)] = cljs$core$async$reduce_$_state_machine__13783__auto__);

(statearr_16692[(1)] = (1));

return statearr_16692;
});
var cljs$core$async$reduce_$_state_machine__13783__auto____1 = (function (state_16620){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_16620);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e16696){var ex__13786__auto__ = e16696;
var statearr_16697_20059 = state_16620;
(statearr_16697_20059[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_16620[(4)]))){
var statearr_16700_20060 = state_16620;
(statearr_16700_20060[(1)] = cljs.core.first((state_16620[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20064 = state_16620;
state_16620 = G__20064;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13783__auto__ = function(state_16620){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13783__auto____1.call(this,state_16620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13783__auto____0;
cljs$core$async$reduce_$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13783__auto____1;
return cljs$core$async$reduce_$_state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_16705 = f__15123__auto__();
(statearr_16705[(6)] = c__15122__auto__);

return statearr_16705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));

return c__15122__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15122__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_16714){
var state_val_16715 = (state_16714[(1)]);
if((state_val_16715 === (1))){
var inst_16709 = cljs.core.async.reduce(f__$1,init,ch);
var state_16714__$1 = state_16714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16714__$1,(2),inst_16709);
} else {
if((state_val_16715 === (2))){
var inst_16711 = (state_16714[(2)]);
var inst_16712 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16711) : f__$1.call(null,inst_16711));
var state_16714__$1 = state_16714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16714__$1,inst_16712);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13783__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13783__auto____0 = (function (){
var statearr_16718 = [null,null,null,null,null,null,null];
(statearr_16718[(0)] = cljs$core$async$transduce_$_state_machine__13783__auto__);

(statearr_16718[(1)] = (1));

return statearr_16718;
});
var cljs$core$async$transduce_$_state_machine__13783__auto____1 = (function (state_16714){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_16714);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e16719){var ex__13786__auto__ = e16719;
var statearr_16720_20069 = state_16714;
(statearr_16720_20069[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_16714[(4)]))){
var statearr_16721_20070 = state_16714;
(statearr_16721_20070[(1)] = cljs.core.first((state_16714[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20071 = state_16714;
state_16714 = G__20071;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13783__auto__ = function(state_16714){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13783__auto____1.call(this,state_16714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13783__auto____0;
cljs$core$async$transduce_$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13783__auto____1;
return cljs$core$async$transduce_$_state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_16724 = f__15123__auto__();
(statearr_16724[(6)] = c__15122__auto__);

return statearr_16724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));

return c__15122__auto__;
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
var G__16728 = arguments.length;
switch (G__16728) {
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
var c__15122__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_16758){
var state_val_16759 = (state_16758[(1)]);
if((state_val_16759 === (7))){
var inst_16739 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
var statearr_16766_20078 = state_16758__$1;
(statearr_16766_20078[(2)] = inst_16739);

(statearr_16766_20078[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (1))){
var inst_16733 = cljs.core.seq(coll);
var inst_16734 = inst_16733;
var state_16758__$1 = (function (){var statearr_16767 = state_16758;
(statearr_16767[(7)] = inst_16734);

return statearr_16767;
})();
var statearr_16768_20082 = state_16758__$1;
(statearr_16768_20082[(2)] = null);

(statearr_16768_20082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (4))){
var inst_16734 = (state_16758[(7)]);
var inst_16737 = cljs.core.first(inst_16734);
var state_16758__$1 = state_16758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16758__$1,(7),ch,inst_16737);
} else {
if((state_val_16759 === (13))){
var inst_16752 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
var statearr_16775_20084 = state_16758__$1;
(statearr_16775_20084[(2)] = inst_16752);

(statearr_16775_20084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (6))){
var inst_16742 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
if(cljs.core.truth_(inst_16742)){
var statearr_16777_20089 = state_16758__$1;
(statearr_16777_20089[(1)] = (8));

} else {
var statearr_16778_20090 = state_16758__$1;
(statearr_16778_20090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (3))){
var inst_16756 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16758__$1,inst_16756);
} else {
if((state_val_16759 === (12))){
var state_16758__$1 = state_16758;
var statearr_16781_20094 = state_16758__$1;
(statearr_16781_20094[(2)] = null);

(statearr_16781_20094[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (2))){
var inst_16734 = (state_16758[(7)]);
var state_16758__$1 = state_16758;
if(cljs.core.truth_(inst_16734)){
var statearr_16784_20095 = state_16758__$1;
(statearr_16784_20095[(1)] = (4));

} else {
var statearr_16787_20096 = state_16758__$1;
(statearr_16787_20096[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (11))){
var inst_16749 = cljs.core.async.close_BANG_(ch);
var state_16758__$1 = state_16758;
var statearr_16789_20098 = state_16758__$1;
(statearr_16789_20098[(2)] = inst_16749);

(statearr_16789_20098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (9))){
var state_16758__$1 = state_16758;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16790_20100 = state_16758__$1;
(statearr_16790_20100[(1)] = (11));

} else {
var statearr_16791_20101 = state_16758__$1;
(statearr_16791_20101[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (5))){
var inst_16734 = (state_16758[(7)]);
var state_16758__$1 = state_16758;
var statearr_16793_20102 = state_16758__$1;
(statearr_16793_20102[(2)] = inst_16734);

(statearr_16793_20102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (10))){
var inst_16754 = (state_16758[(2)]);
var state_16758__$1 = state_16758;
var statearr_16808_20105 = state_16758__$1;
(statearr_16808_20105[(2)] = inst_16754);

(statearr_16808_20105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16759 === (8))){
var inst_16734 = (state_16758[(7)]);
var inst_16744 = cljs.core.next(inst_16734);
var inst_16734__$1 = inst_16744;
var state_16758__$1 = (function (){var statearr_16809 = state_16758;
(statearr_16809[(7)] = inst_16734__$1);

return statearr_16809;
})();
var statearr_16812_20106 = state_16758__$1;
(statearr_16812_20106[(2)] = null);

(statearr_16812_20106[(1)] = (2));


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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_16815 = [null,null,null,null,null,null,null,null];
(statearr_16815[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_16815[(1)] = (1));

return statearr_16815;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_16758){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_16758);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e16817){var ex__13786__auto__ = e16817;
var statearr_16818_20111 = state_16758;
(statearr_16818_20111[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_16758[(4)]))){
var statearr_16820_20112 = state_16758;
(statearr_16820_20112[(1)] = cljs.core.first((state_16758[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20114 = state_16758;
state_16758 = G__20114;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_16758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_16758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_16824 = f__15123__auto__();
(statearr_16824[(6)] = c__15122__auto__);

return statearr_16824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));

return c__15122__auto__;
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
var G__16831 = arguments.length;
switch (G__16831) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_20124 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_20124(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20126 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_20126(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20131 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_20131(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20137 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_20137(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16893 = (function (ch,cs,meta16894){
this.ch = ch;
this.cs = cs;
this.meta16894 = meta16894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16895,meta16894__$1){
var self__ = this;
var _16895__$1 = this;
return (new cljs.core.async.t_cljs$core$async16893(self__.ch,self__.cs,meta16894__$1));
}));

(cljs.core.async.t_cljs$core$async16893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16895){
var self__ = this;
var _16895__$1 = this;
return self__.meta16894;
}));

(cljs.core.async.t_cljs$core$async16893.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16893.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16893.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16893.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16893.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16894","meta16894",1891447769,null)], null);
}));

(cljs.core.async.t_cljs$core$async16893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16893");

(cljs.core.async.t_cljs$core$async16893.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16893.
 */
cljs.core.async.__GT_t_cljs$core$async16893 = (function cljs$core$async$__GT_t_cljs$core$async16893(ch,cs,meta16894){
return (new cljs.core.async.t_cljs$core$async16893(ch,cs,meta16894));
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
var m = (new cljs.core.async.t_cljs$core$async16893(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15122__auto___20146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_17134){
var state_val_17136 = (state_17134[(1)]);
if((state_val_17136 === (7))){
var inst_17122 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17138_20147 = state_17134__$1;
(statearr_17138_20147[(2)] = inst_17122);

(statearr_17138_20147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (20))){
var inst_16993 = (state_17134[(7)]);
var inst_17007 = cljs.core.first(inst_16993);
var inst_17008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17007,(0),null);
var inst_17009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17007,(1),null);
var state_17134__$1 = (function (){var statearr_17147 = state_17134;
(statearr_17147[(8)] = inst_17008);

return statearr_17147;
})();
if(cljs.core.truth_(inst_17009)){
var statearr_17148_20149 = state_17134__$1;
(statearr_17148_20149[(1)] = (22));

} else {
var statearr_17149_20150 = state_17134__$1;
(statearr_17149_20150[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (27))){
var inst_17054 = (state_17134[(9)]);
var inst_17056 = (state_17134[(10)]);
var inst_17063 = (state_17134[(11)]);
var inst_16954 = (state_17134[(12)]);
var inst_17063__$1 = cljs.core._nth(inst_17054,inst_17056);
var inst_17064 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17063__$1,inst_16954,done);
var state_17134__$1 = (function (){var statearr_17159 = state_17134;
(statearr_17159[(11)] = inst_17063__$1);

return statearr_17159;
})();
if(cljs.core.truth_(inst_17064)){
var statearr_17160_20157 = state_17134__$1;
(statearr_17160_20157[(1)] = (30));

} else {
var statearr_17161_20159 = state_17134__$1;
(statearr_17161_20159[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (1))){
var state_17134__$1 = state_17134;
var statearr_17162_20161 = state_17134__$1;
(statearr_17162_20161[(2)] = null);

(statearr_17162_20161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (24))){
var inst_16993 = (state_17134[(7)]);
var inst_17014 = (state_17134[(2)]);
var inst_17016 = cljs.core.next(inst_16993);
var inst_16964 = inst_17016;
var inst_16965 = null;
var inst_16966 = (0);
var inst_16967 = (0);
var state_17134__$1 = (function (){var statearr_17164 = state_17134;
(statearr_17164[(13)] = inst_17014);

(statearr_17164[(14)] = inst_16964);

(statearr_17164[(15)] = inst_16965);

(statearr_17164[(16)] = inst_16966);

(statearr_17164[(17)] = inst_16967);

return statearr_17164;
})();
var statearr_17168_20163 = state_17134__$1;
(statearr_17168_20163[(2)] = null);

(statearr_17168_20163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (39))){
var state_17134__$1 = state_17134;
var statearr_17175_20164 = state_17134__$1;
(statearr_17175_20164[(2)] = null);

(statearr_17175_20164[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (4))){
var inst_16954 = (state_17134[(12)]);
var inst_16954__$1 = (state_17134[(2)]);
var inst_16955 = (inst_16954__$1 == null);
var state_17134__$1 = (function (){var statearr_17177 = state_17134;
(statearr_17177[(12)] = inst_16954__$1);

return statearr_17177;
})();
if(cljs.core.truth_(inst_16955)){
var statearr_17178_20170 = state_17134__$1;
(statearr_17178_20170[(1)] = (5));

} else {
var statearr_17179_20173 = state_17134__$1;
(statearr_17179_20173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (15))){
var inst_16967 = (state_17134[(17)]);
var inst_16964 = (state_17134[(14)]);
var inst_16965 = (state_17134[(15)]);
var inst_16966 = (state_17134[(16)]);
var inst_16986 = (state_17134[(2)]);
var inst_16987 = (inst_16967 + (1));
var tmp17172 = inst_16965;
var tmp17173 = inst_16966;
var tmp17174 = inst_16964;
var inst_16964__$1 = tmp17174;
var inst_16965__$1 = tmp17172;
var inst_16966__$1 = tmp17173;
var inst_16967__$1 = inst_16987;
var state_17134__$1 = (function (){var statearr_17180 = state_17134;
(statearr_17180[(18)] = inst_16986);

(statearr_17180[(14)] = inst_16964__$1);

(statearr_17180[(15)] = inst_16965__$1);

(statearr_17180[(16)] = inst_16966__$1);

(statearr_17180[(17)] = inst_16967__$1);

return statearr_17180;
})();
var statearr_17182_20176 = state_17134__$1;
(statearr_17182_20176[(2)] = null);

(statearr_17182_20176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (21))){
var inst_17020 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17186_20177 = state_17134__$1;
(statearr_17186_20177[(2)] = inst_17020);

(statearr_17186_20177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (31))){
var inst_17063 = (state_17134[(11)]);
var inst_17067 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17063);
var state_17134__$1 = state_17134;
var statearr_17191_20179 = state_17134__$1;
(statearr_17191_20179[(2)] = inst_17067);

(statearr_17191_20179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (32))){
var inst_17056 = (state_17134[(10)]);
var inst_17053 = (state_17134[(19)]);
var inst_17054 = (state_17134[(9)]);
var inst_17055 = (state_17134[(20)]);
var inst_17069 = (state_17134[(2)]);
var inst_17079 = (inst_17056 + (1));
var tmp17183 = inst_17054;
var tmp17184 = inst_17055;
var tmp17185 = inst_17053;
var inst_17053__$1 = tmp17185;
var inst_17054__$1 = tmp17183;
var inst_17055__$1 = tmp17184;
var inst_17056__$1 = inst_17079;
var state_17134__$1 = (function (){var statearr_17202 = state_17134;
(statearr_17202[(21)] = inst_17069);

(statearr_17202[(19)] = inst_17053__$1);

(statearr_17202[(9)] = inst_17054__$1);

(statearr_17202[(20)] = inst_17055__$1);

(statearr_17202[(10)] = inst_17056__$1);

return statearr_17202;
})();
var statearr_17207_20182 = state_17134__$1;
(statearr_17207_20182[(2)] = null);

(statearr_17207_20182[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (40))){
var inst_17093 = (state_17134[(22)]);
var inst_17099 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17093);
var state_17134__$1 = state_17134;
var statearr_17209_20185 = state_17134__$1;
(statearr_17209_20185[(2)] = inst_17099);

(statearr_17209_20185[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (33))){
var inst_17082 = (state_17134[(23)]);
var inst_17084 = cljs.core.chunked_seq_QMARK_(inst_17082);
var state_17134__$1 = state_17134;
if(inst_17084){
var statearr_17215_20186 = state_17134__$1;
(statearr_17215_20186[(1)] = (36));

} else {
var statearr_17216_20187 = state_17134__$1;
(statearr_17216_20187[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (13))){
var inst_16977 = (state_17134[(24)]);
var inst_16983 = cljs.core.async.close_BANG_(inst_16977);
var state_17134__$1 = state_17134;
var statearr_17220_20188 = state_17134__$1;
(statearr_17220_20188[(2)] = inst_16983);

(statearr_17220_20188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (22))){
var inst_17008 = (state_17134[(8)]);
var inst_17011 = cljs.core.async.close_BANG_(inst_17008);
var state_17134__$1 = state_17134;
var statearr_17222_20189 = state_17134__$1;
(statearr_17222_20189[(2)] = inst_17011);

(statearr_17222_20189[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (36))){
var inst_17082 = (state_17134[(23)]);
var inst_17086 = cljs.core.chunk_first(inst_17082);
var inst_17087 = cljs.core.chunk_rest(inst_17082);
var inst_17088 = cljs.core.count(inst_17086);
var inst_17053 = inst_17087;
var inst_17054 = inst_17086;
var inst_17055 = inst_17088;
var inst_17056 = (0);
var state_17134__$1 = (function (){var statearr_17224 = state_17134;
(statearr_17224[(19)] = inst_17053);

(statearr_17224[(9)] = inst_17054);

(statearr_17224[(20)] = inst_17055);

(statearr_17224[(10)] = inst_17056);

return statearr_17224;
})();
var statearr_17225_20193 = state_17134__$1;
(statearr_17225_20193[(2)] = null);

(statearr_17225_20193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (41))){
var inst_17082 = (state_17134[(23)]);
var inst_17101 = (state_17134[(2)]);
var inst_17102 = cljs.core.next(inst_17082);
var inst_17053 = inst_17102;
var inst_17054 = null;
var inst_17055 = (0);
var inst_17056 = (0);
var state_17134__$1 = (function (){var statearr_17229 = state_17134;
(statearr_17229[(25)] = inst_17101);

(statearr_17229[(19)] = inst_17053);

(statearr_17229[(9)] = inst_17054);

(statearr_17229[(20)] = inst_17055);

(statearr_17229[(10)] = inst_17056);

return statearr_17229;
})();
var statearr_17231_20198 = state_17134__$1;
(statearr_17231_20198[(2)] = null);

(statearr_17231_20198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (43))){
var state_17134__$1 = state_17134;
var statearr_17239_20199 = state_17134__$1;
(statearr_17239_20199[(2)] = null);

(statearr_17239_20199[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (29))){
var inst_17110 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17240_20202 = state_17134__$1;
(statearr_17240_20202[(2)] = inst_17110);

(statearr_17240_20202[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (44))){
var inst_17119 = (state_17134[(2)]);
var state_17134__$1 = (function (){var statearr_17241 = state_17134;
(statearr_17241[(26)] = inst_17119);

return statearr_17241;
})();
var statearr_17242_20203 = state_17134__$1;
(statearr_17242_20203[(2)] = null);

(statearr_17242_20203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (6))){
var inst_17042 = (state_17134[(27)]);
var inst_17041 = cljs.core.deref(cs);
var inst_17042__$1 = cljs.core.keys(inst_17041);
var inst_17044 = cljs.core.count(inst_17042__$1);
var inst_17045 = cljs.core.reset_BANG_(dctr,inst_17044);
var inst_17052 = cljs.core.seq(inst_17042__$1);
var inst_17053 = inst_17052;
var inst_17054 = null;
var inst_17055 = (0);
var inst_17056 = (0);
var state_17134__$1 = (function (){var statearr_17244 = state_17134;
(statearr_17244[(27)] = inst_17042__$1);

(statearr_17244[(28)] = inst_17045);

(statearr_17244[(19)] = inst_17053);

(statearr_17244[(9)] = inst_17054);

(statearr_17244[(20)] = inst_17055);

(statearr_17244[(10)] = inst_17056);

return statearr_17244;
})();
var statearr_17245_20205 = state_17134__$1;
(statearr_17245_20205[(2)] = null);

(statearr_17245_20205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (28))){
var inst_17053 = (state_17134[(19)]);
var inst_17082 = (state_17134[(23)]);
var inst_17082__$1 = cljs.core.seq(inst_17053);
var state_17134__$1 = (function (){var statearr_17246 = state_17134;
(statearr_17246[(23)] = inst_17082__$1);

return statearr_17246;
})();
if(inst_17082__$1){
var statearr_17247_20208 = state_17134__$1;
(statearr_17247_20208[(1)] = (33));

} else {
var statearr_17249_20209 = state_17134__$1;
(statearr_17249_20209[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (25))){
var inst_17056 = (state_17134[(10)]);
var inst_17055 = (state_17134[(20)]);
var inst_17060 = (inst_17056 < inst_17055);
var inst_17061 = inst_17060;
var state_17134__$1 = state_17134;
if(cljs.core.truth_(inst_17061)){
var statearr_17250_20212 = state_17134__$1;
(statearr_17250_20212[(1)] = (27));

} else {
var statearr_17254_20213 = state_17134__$1;
(statearr_17254_20213[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (34))){
var state_17134__$1 = state_17134;
var statearr_17257_20214 = state_17134__$1;
(statearr_17257_20214[(2)] = null);

(statearr_17257_20214[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (17))){
var state_17134__$1 = state_17134;
var statearr_17259_20219 = state_17134__$1;
(statearr_17259_20219[(2)] = null);

(statearr_17259_20219[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (3))){
var inst_17124 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17134__$1,inst_17124);
} else {
if((state_val_17136 === (12))){
var inst_17029 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17260_20221 = state_17134__$1;
(statearr_17260_20221[(2)] = inst_17029);

(statearr_17260_20221[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (2))){
var state_17134__$1 = state_17134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17134__$1,(4),ch);
} else {
if((state_val_17136 === (23))){
var state_17134__$1 = state_17134;
var statearr_17262_20223 = state_17134__$1;
(statearr_17262_20223[(2)] = null);

(statearr_17262_20223[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (35))){
var inst_17108 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17263_20224 = state_17134__$1;
(statearr_17263_20224[(2)] = inst_17108);

(statearr_17263_20224[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (19))){
var inst_16993 = (state_17134[(7)]);
var inst_16999 = cljs.core.chunk_first(inst_16993);
var inst_17000 = cljs.core.chunk_rest(inst_16993);
var inst_17001 = cljs.core.count(inst_16999);
var inst_16964 = inst_17000;
var inst_16965 = inst_16999;
var inst_16966 = inst_17001;
var inst_16967 = (0);
var state_17134__$1 = (function (){var statearr_17270 = state_17134;
(statearr_17270[(14)] = inst_16964);

(statearr_17270[(15)] = inst_16965);

(statearr_17270[(16)] = inst_16966);

(statearr_17270[(17)] = inst_16967);

return statearr_17270;
})();
var statearr_17271_20229 = state_17134__$1;
(statearr_17271_20229[(2)] = null);

(statearr_17271_20229[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (11))){
var inst_16964 = (state_17134[(14)]);
var inst_16993 = (state_17134[(7)]);
var inst_16993__$1 = cljs.core.seq(inst_16964);
var state_17134__$1 = (function (){var statearr_17275 = state_17134;
(statearr_17275[(7)] = inst_16993__$1);

return statearr_17275;
})();
if(inst_16993__$1){
var statearr_17277_20230 = state_17134__$1;
(statearr_17277_20230[(1)] = (16));

} else {
var statearr_17278_20231 = state_17134__$1;
(statearr_17278_20231[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (9))){
var inst_17034 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17279_20232 = state_17134__$1;
(statearr_17279_20232[(2)] = inst_17034);

(statearr_17279_20232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (5))){
var inst_16962 = cljs.core.deref(cs);
var inst_16963 = cljs.core.seq(inst_16962);
var inst_16964 = inst_16963;
var inst_16965 = null;
var inst_16966 = (0);
var inst_16967 = (0);
var state_17134__$1 = (function (){var statearr_17280 = state_17134;
(statearr_17280[(14)] = inst_16964);

(statearr_17280[(15)] = inst_16965);

(statearr_17280[(16)] = inst_16966);

(statearr_17280[(17)] = inst_16967);

return statearr_17280;
})();
var statearr_17282_20234 = state_17134__$1;
(statearr_17282_20234[(2)] = null);

(statearr_17282_20234[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (14))){
var state_17134__$1 = state_17134;
var statearr_17290_20241 = state_17134__$1;
(statearr_17290_20241[(2)] = null);

(statearr_17290_20241[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (45))){
var inst_17116 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17292_20242 = state_17134__$1;
(statearr_17292_20242[(2)] = inst_17116);

(statearr_17292_20242[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (26))){
var inst_17042 = (state_17134[(27)]);
var inst_17112 = (state_17134[(2)]);
var inst_17113 = cljs.core.seq(inst_17042);
var state_17134__$1 = (function (){var statearr_17294 = state_17134;
(statearr_17294[(29)] = inst_17112);

return statearr_17294;
})();
if(inst_17113){
var statearr_17296_20245 = state_17134__$1;
(statearr_17296_20245[(1)] = (42));

} else {
var statearr_17297_20246 = state_17134__$1;
(statearr_17297_20246[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (16))){
var inst_16993 = (state_17134[(7)]);
var inst_16996 = cljs.core.chunked_seq_QMARK_(inst_16993);
var state_17134__$1 = state_17134;
if(inst_16996){
var statearr_17299_20247 = state_17134__$1;
(statearr_17299_20247[(1)] = (19));

} else {
var statearr_17300_20248 = state_17134__$1;
(statearr_17300_20248[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (38))){
var inst_17105 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17307_20250 = state_17134__$1;
(statearr_17307_20250[(2)] = inst_17105);

(statearr_17307_20250[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (30))){
var state_17134__$1 = state_17134;
var statearr_17310_20251 = state_17134__$1;
(statearr_17310_20251[(2)] = null);

(statearr_17310_20251[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (10))){
var inst_16965 = (state_17134[(15)]);
var inst_16967 = (state_17134[(17)]);
var inst_16976 = cljs.core._nth(inst_16965,inst_16967);
var inst_16977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16976,(0),null);
var inst_16978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16976,(1),null);
var state_17134__$1 = (function (){var statearr_17312 = state_17134;
(statearr_17312[(24)] = inst_16977);

return statearr_17312;
})();
if(cljs.core.truth_(inst_16978)){
var statearr_17320_20254 = state_17134__$1;
(statearr_17320_20254[(1)] = (13));

} else {
var statearr_17321_20257 = state_17134__$1;
(statearr_17321_20257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (18))){
var inst_17023 = (state_17134[(2)]);
var state_17134__$1 = state_17134;
var statearr_17324_20258 = state_17134__$1;
(statearr_17324_20258[(2)] = inst_17023);

(statearr_17324_20258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (42))){
var state_17134__$1 = state_17134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17134__$1,(45),dchan);
} else {
if((state_val_17136 === (37))){
var inst_17082 = (state_17134[(23)]);
var inst_17093 = (state_17134[(22)]);
var inst_16954 = (state_17134[(12)]);
var inst_17093__$1 = cljs.core.first(inst_17082);
var inst_17095 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17093__$1,inst_16954,done);
var state_17134__$1 = (function (){var statearr_17330 = state_17134;
(statearr_17330[(22)] = inst_17093__$1);

return statearr_17330;
})();
if(cljs.core.truth_(inst_17095)){
var statearr_17332_20261 = state_17134__$1;
(statearr_17332_20261[(1)] = (39));

} else {
var statearr_17334_20262 = state_17134__$1;
(statearr_17334_20262[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17136 === (8))){
var inst_16967 = (state_17134[(17)]);
var inst_16966 = (state_17134[(16)]);
var inst_16970 = (inst_16967 < inst_16966);
var inst_16971 = inst_16970;
var state_17134__$1 = state_17134;
if(cljs.core.truth_(inst_16971)){
var statearr_17336_20265 = state_17134__$1;
(statearr_17336_20265[(1)] = (10));

} else {
var statearr_17337_20266 = state_17134__$1;
(statearr_17337_20266[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13783__auto__ = null;
var cljs$core$async$mult_$_state_machine__13783__auto____0 = (function (){
var statearr_17340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17340[(0)] = cljs$core$async$mult_$_state_machine__13783__auto__);

(statearr_17340[(1)] = (1));

return statearr_17340;
});
var cljs$core$async$mult_$_state_machine__13783__auto____1 = (function (state_17134){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_17134);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e17341){var ex__13786__auto__ = e17341;
var statearr_17342_20273 = state_17134;
(statearr_17342_20273[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_17134[(4)]))){
var statearr_17343_20274 = state_17134;
(statearr_17343_20274[(1)] = cljs.core.first((state_17134[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20275 = state_17134;
state_17134 = G__20275;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13783__auto__ = function(state_17134){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13783__auto____1.call(this,state_17134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13783__auto____0;
cljs$core$async$mult_$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13783__auto____1;
return cljs$core$async$mult_$_state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_17350 = f__15123__auto__();
(statearr_17350[(6)] = c__15122__auto___20146);

return statearr_17350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
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
var G__17358 = arguments.length;
switch (G__17358) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_20282 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_20282(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20287 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_20287(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20289 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20289(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20293 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_20293(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20295 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20295(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___20297 = arguments.length;
var i__5877__auto___20298 = (0);
while(true){
if((i__5877__auto___20298 < len__5876__auto___20297)){
args__5882__auto__.push((arguments[i__5877__auto___20298]));

var G__20300 = (i__5877__auto___20298 + (1));
i__5877__auto___20298 = G__20300;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17425){
var map__17426 = p__17425;
var map__17426__$1 = cljs.core.__destructure_map(map__17426);
var opts = map__17426__$1;
var statearr_17427_20303 = state;
(statearr_17427_20303[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17428_20305 = state;
(statearr_17428_20305[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_17429_20307 = state;
(statearr_17429_20307[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17417){
var G__17418 = cljs.core.first(seq17417);
var seq17417__$1 = cljs.core.next(seq17417);
var G__17419 = cljs.core.first(seq17417__$1);
var seq17417__$2 = cljs.core.next(seq17417__$1);
var G__17420 = cljs.core.first(seq17417__$2);
var seq17417__$3 = cljs.core.next(seq17417__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17418,G__17419,G__17420,seq17417__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17453 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17454){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17454 = meta17454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17455,meta17454__$1){
var self__ = this;
var _17455__$1 = this;
return (new cljs.core.async.t_cljs$core$async17453(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17454__$1));
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17455){
var self__ = this;
var _17455__$1 = this;
return self__.meta17454;
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17453.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17454","meta17454",1288682459,null)], null);
}));

(cljs.core.async.t_cljs$core$async17453.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17453");

(cljs.core.async.t_cljs$core$async17453.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17453");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17453.
 */
cljs.core.async.__GT_t_cljs$core$async17453 = (function cljs$core$async$__GT_t_cljs$core$async17453(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17454){
return (new cljs.core.async.t_cljs$core$async17453(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17454));
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
var m = (new cljs.core.async.t_cljs$core$async17453(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15122__auto___20322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_17558){
var state_val_17559 = (state_17558[(1)]);
if((state_val_17559 === (7))){
var inst_17510 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
if(cljs.core.truth_(inst_17510)){
var statearr_17567_20323 = state_17558__$1;
(statearr_17567_20323[(1)] = (8));

} else {
var statearr_17570_20324 = state_17558__$1;
(statearr_17570_20324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (20))){
var inst_17503 = (state_17558[(7)]);
var state_17558__$1 = state_17558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17558__$1,(23),out,inst_17503);
} else {
if((state_val_17559 === (1))){
var inst_17484 = calc_state();
var inst_17486 = cljs.core.__destructure_map(inst_17484);
var inst_17487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17486,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17486,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17486,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17490 = inst_17484;
var state_17558__$1 = (function (){var statearr_17577 = state_17558;
(statearr_17577[(8)] = inst_17487);

(statearr_17577[(9)] = inst_17488);

(statearr_17577[(10)] = inst_17489);

(statearr_17577[(11)] = inst_17490);

return statearr_17577;
})();
var statearr_17583_20326 = state_17558__$1;
(statearr_17583_20326[(2)] = null);

(statearr_17583_20326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (24))){
var inst_17494 = (state_17558[(12)]);
var inst_17490 = inst_17494;
var state_17558__$1 = (function (){var statearr_17589 = state_17558;
(statearr_17589[(11)] = inst_17490);

return statearr_17589;
})();
var statearr_17590_20327 = state_17558__$1;
(statearr_17590_20327[(2)] = null);

(statearr_17590_20327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (4))){
var inst_17503 = (state_17558[(7)]);
var inst_17505 = (state_17558[(13)]);
var inst_17502 = (state_17558[(2)]);
var inst_17503__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17502,(0),null);
var inst_17504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17502,(1),null);
var inst_17505__$1 = (inst_17503__$1 == null);
var state_17558__$1 = (function (){var statearr_17591 = state_17558;
(statearr_17591[(7)] = inst_17503__$1);

(statearr_17591[(14)] = inst_17504);

(statearr_17591[(13)] = inst_17505__$1);

return statearr_17591;
})();
if(cljs.core.truth_(inst_17505__$1)){
var statearr_17592_20329 = state_17558__$1;
(statearr_17592_20329[(1)] = (5));

} else {
var statearr_17593_20330 = state_17558__$1;
(statearr_17593_20330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (15))){
var inst_17495 = (state_17558[(15)]);
var inst_17529 = (state_17558[(16)]);
var inst_17529__$1 = cljs.core.empty_QMARK_(inst_17495);
var state_17558__$1 = (function (){var statearr_17601 = state_17558;
(statearr_17601[(16)] = inst_17529__$1);

return statearr_17601;
})();
if(inst_17529__$1){
var statearr_17602_20337 = state_17558__$1;
(statearr_17602_20337[(1)] = (17));

} else {
var statearr_17603_20338 = state_17558__$1;
(statearr_17603_20338[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (21))){
var inst_17494 = (state_17558[(12)]);
var inst_17490 = inst_17494;
var state_17558__$1 = (function (){var statearr_17604 = state_17558;
(statearr_17604[(11)] = inst_17490);

return statearr_17604;
})();
var statearr_17605_20341 = state_17558__$1;
(statearr_17605_20341[(2)] = null);

(statearr_17605_20341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (13))){
var inst_17520 = (state_17558[(2)]);
var inst_17521 = calc_state();
var inst_17490 = inst_17521;
var state_17558__$1 = (function (){var statearr_17606 = state_17558;
(statearr_17606[(17)] = inst_17520);

(statearr_17606[(11)] = inst_17490);

return statearr_17606;
})();
var statearr_17607_20342 = state_17558__$1;
(statearr_17607_20342[(2)] = null);

(statearr_17607_20342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (22))){
var inst_17550 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
var statearr_17609_20344 = state_17558__$1;
(statearr_17609_20344[(2)] = inst_17550);

(statearr_17609_20344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (6))){
var inst_17504 = (state_17558[(14)]);
var inst_17508 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17504,change);
var state_17558__$1 = state_17558;
var statearr_17612_20349 = state_17558__$1;
(statearr_17612_20349[(2)] = inst_17508);

(statearr_17612_20349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (25))){
var state_17558__$1 = state_17558;
var statearr_17613_20350 = state_17558__$1;
(statearr_17613_20350[(2)] = null);

(statearr_17613_20350[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (17))){
var inst_17496 = (state_17558[(18)]);
var inst_17504 = (state_17558[(14)]);
var inst_17532 = (inst_17496.cljs$core$IFn$_invoke$arity$1 ? inst_17496.cljs$core$IFn$_invoke$arity$1(inst_17504) : inst_17496.call(null,inst_17504));
var inst_17533 = cljs.core.not(inst_17532);
var state_17558__$1 = state_17558;
var statearr_17616_20352 = state_17558__$1;
(statearr_17616_20352[(2)] = inst_17533);

(statearr_17616_20352[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (3))){
var inst_17554 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17558__$1,inst_17554);
} else {
if((state_val_17559 === (12))){
var state_17558__$1 = state_17558;
var statearr_17621_20353 = state_17558__$1;
(statearr_17621_20353[(2)] = null);

(statearr_17621_20353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (2))){
var inst_17490 = (state_17558[(11)]);
var inst_17494 = (state_17558[(12)]);
var inst_17494__$1 = cljs.core.__destructure_map(inst_17490);
var inst_17495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17494__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17494__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17494__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17558__$1 = (function (){var statearr_17625 = state_17558;
(statearr_17625[(12)] = inst_17494__$1);

(statearr_17625[(15)] = inst_17495);

(statearr_17625[(18)] = inst_17496);

return statearr_17625;
})();
return cljs.core.async.ioc_alts_BANG_(state_17558__$1,(4),inst_17497);
} else {
if((state_val_17559 === (23))){
var inst_17541 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
if(cljs.core.truth_(inst_17541)){
var statearr_17629_20360 = state_17558__$1;
(statearr_17629_20360[(1)] = (24));

} else {
var statearr_17630_20361 = state_17558__$1;
(statearr_17630_20361[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (19))){
var inst_17536 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
var statearr_17631_20363 = state_17558__$1;
(statearr_17631_20363[(2)] = inst_17536);

(statearr_17631_20363[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (11))){
var inst_17504 = (state_17558[(14)]);
var inst_17517 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17504);
var state_17558__$1 = state_17558;
var statearr_17634_20364 = state_17558__$1;
(statearr_17634_20364[(2)] = inst_17517);

(statearr_17634_20364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (9))){
var inst_17495 = (state_17558[(15)]);
var inst_17504 = (state_17558[(14)]);
var inst_17524 = (state_17558[(19)]);
var inst_17524__$1 = (inst_17495.cljs$core$IFn$_invoke$arity$1 ? inst_17495.cljs$core$IFn$_invoke$arity$1(inst_17504) : inst_17495.call(null,inst_17504));
var state_17558__$1 = (function (){var statearr_17639 = state_17558;
(statearr_17639[(19)] = inst_17524__$1);

return statearr_17639;
})();
if(cljs.core.truth_(inst_17524__$1)){
var statearr_17640_20365 = state_17558__$1;
(statearr_17640_20365[(1)] = (14));

} else {
var statearr_17641_20370 = state_17558__$1;
(statearr_17641_20370[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (5))){
var inst_17505 = (state_17558[(13)]);
var state_17558__$1 = state_17558;
var statearr_17642_20371 = state_17558__$1;
(statearr_17642_20371[(2)] = inst_17505);

(statearr_17642_20371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (14))){
var inst_17524 = (state_17558[(19)]);
var state_17558__$1 = state_17558;
var statearr_17643_20372 = state_17558__$1;
(statearr_17643_20372[(2)] = inst_17524);

(statearr_17643_20372[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (26))){
var inst_17546 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
var statearr_17644_20373 = state_17558__$1;
(statearr_17644_20373[(2)] = inst_17546);

(statearr_17644_20373[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (16))){
var inst_17538 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
if(cljs.core.truth_(inst_17538)){
var statearr_17648_20374 = state_17558__$1;
(statearr_17648_20374[(1)] = (20));

} else {
var statearr_17649_20375 = state_17558__$1;
(statearr_17649_20375[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (10))){
var inst_17552 = (state_17558[(2)]);
var state_17558__$1 = state_17558;
var statearr_17650_20376 = state_17558__$1;
(statearr_17650_20376[(2)] = inst_17552);

(statearr_17650_20376[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (18))){
var inst_17529 = (state_17558[(16)]);
var state_17558__$1 = state_17558;
var statearr_17651_20377 = state_17558__$1;
(statearr_17651_20377[(2)] = inst_17529);

(statearr_17651_20377[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17559 === (8))){
var inst_17503 = (state_17558[(7)]);
var inst_17512 = (inst_17503 == null);
var state_17558__$1 = state_17558;
if(cljs.core.truth_(inst_17512)){
var statearr_17652_20383 = state_17558__$1;
(statearr_17652_20383[(1)] = (11));

} else {
var statearr_17653_20384 = state_17558__$1;
(statearr_17653_20384[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13783__auto__ = null;
var cljs$core$async$mix_$_state_machine__13783__auto____0 = (function (){
var statearr_17660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17660[(0)] = cljs$core$async$mix_$_state_machine__13783__auto__);

(statearr_17660[(1)] = (1));

return statearr_17660;
});
var cljs$core$async$mix_$_state_machine__13783__auto____1 = (function (state_17558){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_17558);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e17662){var ex__13786__auto__ = e17662;
var statearr_17663_20393 = state_17558;
(statearr_17663_20393[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_17558[(4)]))){
var statearr_17667_20395 = state_17558;
(statearr_17667_20395[(1)] = cljs.core.first((state_17558[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20397 = state_17558;
state_17558 = G__20397;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13783__auto__ = function(state_17558){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13783__auto____1.call(this,state_17558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13783__auto____0;
cljs$core$async$mix_$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13783__auto____1;
return cljs$core$async$mix_$_state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_17668 = f__15123__auto__();
(statearr_17668[(6)] = c__15122__auto___20322);

return statearr_17668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_20405 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_20405(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20408 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_20408(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20418 = (function() {
var G__20419 = null;
var G__20419__1 = (function (p){
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
var G__20419__2 = (function (p,v){
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
G__20419 = function(p,v){
switch(arguments.length){
case 1:
return G__20419__1.call(this,p);
case 2:
return G__20419__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20419.cljs$core$IFn$_invoke$arity$1 = G__20419__1;
G__20419.cljs$core$IFn$_invoke$arity$2 = G__20419__2;
return G__20419;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17701 = arguments.length;
switch (G__17701) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20418(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20418(p,v);
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
cljs.core.async.t_cljs$core$async17725 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17726){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17726 = meta17726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17727,meta17726__$1){
var self__ = this;
var _17727__$1 = this;
return (new cljs.core.async.t_cljs$core$async17725(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17726__$1));
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17727){
var self__ = this;
var _17727__$1 = this;
return self__.meta17726;
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17725.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17726","meta17726",-625867120,null)], null);
}));

(cljs.core.async.t_cljs$core$async17725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17725");

(cljs.core.async.t_cljs$core$async17725.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17725.
 */
cljs.core.async.__GT_t_cljs$core$async17725 = (function cljs$core$async$__GT_t_cljs$core$async17725(ch,topic_fn,buf_fn,mults,ensure_mult,meta17726){
return (new cljs.core.async.t_cljs$core$async17725(ch,topic_fn,buf_fn,mults,ensure_mult,meta17726));
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
var G__17708 = arguments.length;
switch (G__17708) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17703_SHARP_){
if(cljs.core.truth_((p1__17703_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17703_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17703_SHARP_.call(null,topic)))){
return p1__17703_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17703_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17725(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15122__auto___20433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_17821){
var state_val_17822 = (state_17821[(1)]);
if((state_val_17822 === (7))){
var inst_17817 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17831_20434 = state_17821__$1;
(statearr_17831_20434[(2)] = inst_17817);

(statearr_17831_20434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (20))){
var state_17821__$1 = state_17821;
var statearr_17839_20435 = state_17821__$1;
(statearr_17839_20435[(2)] = null);

(statearr_17839_20435[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (1))){
var state_17821__$1 = state_17821;
var statearr_17846_20436 = state_17821__$1;
(statearr_17846_20436[(2)] = null);

(statearr_17846_20436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (24))){
var inst_17800 = (state_17821[(7)]);
var inst_17809 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17800);
var state_17821__$1 = state_17821;
var statearr_17847_20438 = state_17821__$1;
(statearr_17847_20438[(2)] = inst_17809);

(statearr_17847_20438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (4))){
var inst_17740 = (state_17821[(8)]);
var inst_17740__$1 = (state_17821[(2)]);
var inst_17744 = (inst_17740__$1 == null);
var state_17821__$1 = (function (){var statearr_17852 = state_17821;
(statearr_17852[(8)] = inst_17740__$1);

return statearr_17852;
})();
if(cljs.core.truth_(inst_17744)){
var statearr_17853_20439 = state_17821__$1;
(statearr_17853_20439[(1)] = (5));

} else {
var statearr_17854_20440 = state_17821__$1;
(statearr_17854_20440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (15))){
var inst_17794 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17857_20441 = state_17821__$1;
(statearr_17857_20441[(2)] = inst_17794);

(statearr_17857_20441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (21))){
var inst_17814 = (state_17821[(2)]);
var state_17821__$1 = (function (){var statearr_17860 = state_17821;
(statearr_17860[(9)] = inst_17814);

return statearr_17860;
})();
var statearr_17861_20442 = state_17821__$1;
(statearr_17861_20442[(2)] = null);

(statearr_17861_20442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (13))){
var inst_17768 = (state_17821[(10)]);
var inst_17772 = cljs.core.chunked_seq_QMARK_(inst_17768);
var state_17821__$1 = state_17821;
if(inst_17772){
var statearr_17863_20445 = state_17821__$1;
(statearr_17863_20445[(1)] = (16));

} else {
var statearr_17866_20446 = state_17821__$1;
(statearr_17866_20446[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (22))){
var inst_17806 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
if(cljs.core.truth_(inst_17806)){
var statearr_17867_20447 = state_17821__$1;
(statearr_17867_20447[(1)] = (23));

} else {
var statearr_17868_20448 = state_17821__$1;
(statearr_17868_20448[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (6))){
var inst_17740 = (state_17821[(8)]);
var inst_17800 = (state_17821[(7)]);
var inst_17802 = (state_17821[(11)]);
var inst_17800__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17740) : topic_fn.call(null,inst_17740));
var inst_17801 = cljs.core.deref(mults);
var inst_17802__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17801,inst_17800__$1);
var state_17821__$1 = (function (){var statearr_17872 = state_17821;
(statearr_17872[(7)] = inst_17800__$1);

(statearr_17872[(11)] = inst_17802__$1);

return statearr_17872;
})();
if(cljs.core.truth_(inst_17802__$1)){
var statearr_17875_20449 = state_17821__$1;
(statearr_17875_20449[(1)] = (19));

} else {
var statearr_17877_20450 = state_17821__$1;
(statearr_17877_20450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (25))){
var inst_17811 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17880_20451 = state_17821__$1;
(statearr_17880_20451[(2)] = inst_17811);

(statearr_17880_20451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (17))){
var inst_17768 = (state_17821[(10)]);
var inst_17785 = cljs.core.first(inst_17768);
var inst_17786 = cljs.core.async.muxch_STAR_(inst_17785);
var inst_17787 = cljs.core.async.close_BANG_(inst_17786);
var inst_17788 = cljs.core.next(inst_17768);
var inst_17753 = inst_17788;
var inst_17754 = null;
var inst_17755 = (0);
var inst_17756 = (0);
var state_17821__$1 = (function (){var statearr_17882 = state_17821;
(statearr_17882[(12)] = inst_17787);

(statearr_17882[(13)] = inst_17753);

(statearr_17882[(14)] = inst_17754);

(statearr_17882[(15)] = inst_17755);

(statearr_17882[(16)] = inst_17756);

return statearr_17882;
})();
var statearr_17883_20452 = state_17821__$1;
(statearr_17883_20452[(2)] = null);

(statearr_17883_20452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (3))){
var inst_17819 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17821__$1,inst_17819);
} else {
if((state_val_17822 === (12))){
var inst_17796 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17888_20454 = state_17821__$1;
(statearr_17888_20454[(2)] = inst_17796);

(statearr_17888_20454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (2))){
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17821__$1,(4),ch);
} else {
if((state_val_17822 === (23))){
var state_17821__$1 = state_17821;
var statearr_17891_20456 = state_17821__$1;
(statearr_17891_20456[(2)] = null);

(statearr_17891_20456[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (19))){
var inst_17802 = (state_17821[(11)]);
var inst_17740 = (state_17821[(8)]);
var inst_17804 = cljs.core.async.muxch_STAR_(inst_17802);
var state_17821__$1 = state_17821;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17821__$1,(22),inst_17804,inst_17740);
} else {
if((state_val_17822 === (11))){
var inst_17753 = (state_17821[(13)]);
var inst_17768 = (state_17821[(10)]);
var inst_17768__$1 = cljs.core.seq(inst_17753);
var state_17821__$1 = (function (){var statearr_17897 = state_17821;
(statearr_17897[(10)] = inst_17768__$1);

return statearr_17897;
})();
if(inst_17768__$1){
var statearr_17899_20462 = state_17821__$1;
(statearr_17899_20462[(1)] = (13));

} else {
var statearr_17900_20463 = state_17821__$1;
(statearr_17900_20463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (9))){
var inst_17798 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17904_20467 = state_17821__$1;
(statearr_17904_20467[(2)] = inst_17798);

(statearr_17904_20467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (5))){
var inst_17750 = cljs.core.deref(mults);
var inst_17751 = cljs.core.vals(inst_17750);
var inst_17752 = cljs.core.seq(inst_17751);
var inst_17753 = inst_17752;
var inst_17754 = null;
var inst_17755 = (0);
var inst_17756 = (0);
var state_17821__$1 = (function (){var statearr_17918 = state_17821;
(statearr_17918[(13)] = inst_17753);

(statearr_17918[(14)] = inst_17754);

(statearr_17918[(15)] = inst_17755);

(statearr_17918[(16)] = inst_17756);

return statearr_17918;
})();
var statearr_17921_20471 = state_17821__$1;
(statearr_17921_20471[(2)] = null);

(statearr_17921_20471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (14))){
var state_17821__$1 = state_17821;
var statearr_17930_20472 = state_17821__$1;
(statearr_17930_20472[(2)] = null);

(statearr_17930_20472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (16))){
var inst_17768 = (state_17821[(10)]);
var inst_17774 = cljs.core.chunk_first(inst_17768);
var inst_17775 = cljs.core.chunk_rest(inst_17768);
var inst_17776 = cljs.core.count(inst_17774);
var inst_17753 = inst_17775;
var inst_17754 = inst_17774;
var inst_17755 = inst_17776;
var inst_17756 = (0);
var state_17821__$1 = (function (){var statearr_17934 = state_17821;
(statearr_17934[(13)] = inst_17753);

(statearr_17934[(14)] = inst_17754);

(statearr_17934[(15)] = inst_17755);

(statearr_17934[(16)] = inst_17756);

return statearr_17934;
})();
var statearr_17937_20473 = state_17821__$1;
(statearr_17937_20473[(2)] = null);

(statearr_17937_20473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (10))){
var inst_17754 = (state_17821[(14)]);
var inst_17756 = (state_17821[(16)]);
var inst_17753 = (state_17821[(13)]);
var inst_17755 = (state_17821[(15)]);
var inst_17762 = cljs.core._nth(inst_17754,inst_17756);
var inst_17763 = cljs.core.async.muxch_STAR_(inst_17762);
var inst_17764 = cljs.core.async.close_BANG_(inst_17763);
var inst_17765 = (inst_17756 + (1));
var tmp17926 = inst_17755;
var tmp17927 = inst_17754;
var tmp17928 = inst_17753;
var inst_17753__$1 = tmp17928;
var inst_17754__$1 = tmp17927;
var inst_17755__$1 = tmp17926;
var inst_17756__$1 = inst_17765;
var state_17821__$1 = (function (){var statearr_17941 = state_17821;
(statearr_17941[(17)] = inst_17764);

(statearr_17941[(13)] = inst_17753__$1);

(statearr_17941[(14)] = inst_17754__$1);

(statearr_17941[(15)] = inst_17755__$1);

(statearr_17941[(16)] = inst_17756__$1);

return statearr_17941;
})();
var statearr_17945_20478 = state_17821__$1;
(statearr_17945_20478[(2)] = null);

(statearr_17945_20478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (18))){
var inst_17791 = (state_17821[(2)]);
var state_17821__$1 = state_17821;
var statearr_17949_20484 = state_17821__$1;
(statearr_17949_20484[(2)] = inst_17791);

(statearr_17949_20484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17822 === (8))){
var inst_17756 = (state_17821[(16)]);
var inst_17755 = (state_17821[(15)]);
var inst_17759 = (inst_17756 < inst_17755);
var inst_17760 = inst_17759;
var state_17821__$1 = state_17821;
if(cljs.core.truth_(inst_17760)){
var statearr_17955_20486 = state_17821__$1;
(statearr_17955_20486[(1)] = (10));

} else {
var statearr_17958_20487 = state_17821__$1;
(statearr_17958_20487[(1)] = (11));

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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_17961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17961[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_17961[(1)] = (1));

return statearr_17961;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_17821){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_17821);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e17964){var ex__13786__auto__ = e17964;
var statearr_17965_20488 = state_17821;
(statearr_17965_20488[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_17821[(4)]))){
var statearr_17966_20492 = state_17821;
(statearr_17966_20492[(1)] = cljs.core.first((state_17821[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20493 = state_17821;
state_17821 = G__20493;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_17821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_17821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_17977 = f__15123__auto__();
(statearr_17977[(6)] = c__15122__auto___20433);

return statearr_17977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
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
var G__18000 = arguments.length;
switch (G__18000) {
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
var G__18012 = arguments.length;
switch (G__18012) {
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
var G__18028 = arguments.length;
switch (G__18028) {
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
var c__15122__auto___20514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_18185){
var state_val_18186 = (state_18185[(1)]);
if((state_val_18186 === (7))){
var state_18185__$1 = state_18185;
var statearr_18194_20517 = state_18185__$1;
(statearr_18194_20517[(2)] = null);

(statearr_18194_20517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (1))){
var state_18185__$1 = state_18185;
var statearr_18203_20518 = state_18185__$1;
(statearr_18203_20518[(2)] = null);

(statearr_18203_20518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (4))){
var inst_18081 = (state_18185[(7)]);
var inst_18080 = (state_18185[(8)]);
var inst_18083 = (inst_18081 < inst_18080);
var state_18185__$1 = state_18185;
if(cljs.core.truth_(inst_18083)){
var statearr_18205_20520 = state_18185__$1;
(statearr_18205_20520[(1)] = (6));

} else {
var statearr_18206_20521 = state_18185__$1;
(statearr_18206_20521[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (15))){
var inst_18143 = (state_18185[(9)]);
var inst_18160 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18143);
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18185__$1,(17),out,inst_18160);
} else {
if((state_val_18186 === (13))){
var inst_18143 = (state_18185[(9)]);
var inst_18143__$1 = (state_18185[(2)]);
var inst_18147 = cljs.core.some(cljs.core.nil_QMARK_,inst_18143__$1);
var state_18185__$1 = (function (){var statearr_18228 = state_18185;
(statearr_18228[(9)] = inst_18143__$1);

return statearr_18228;
})();
if(cljs.core.truth_(inst_18147)){
var statearr_18241_20524 = state_18185__$1;
(statearr_18241_20524[(1)] = (14));

} else {
var statearr_18242_20525 = state_18185__$1;
(statearr_18242_20525[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (6))){
var state_18185__$1 = state_18185;
var statearr_18247_20526 = state_18185__$1;
(statearr_18247_20526[(2)] = null);

(statearr_18247_20526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (17))){
var inst_18162 = (state_18185[(2)]);
var state_18185__$1 = (function (){var statearr_18263 = state_18185;
(statearr_18263[(10)] = inst_18162);

return statearr_18263;
})();
var statearr_18264_20529 = state_18185__$1;
(statearr_18264_20529[(2)] = null);

(statearr_18264_20529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (3))){
var inst_18167 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18185__$1,inst_18167);
} else {
if((state_val_18186 === (12))){
var _ = (function (){var statearr_18265 = state_18185;
(statearr_18265[(4)] = cljs.core.rest((state_18185[(4)])));

return statearr_18265;
})();
var state_18185__$1 = state_18185;
var ex18259 = (state_18185__$1[(2)]);
var statearr_18266_20530 = state_18185__$1;
(statearr_18266_20530[(5)] = ex18259);


if((ex18259 instanceof Object)){
var statearr_18268_20531 = state_18185__$1;
(statearr_18268_20531[(1)] = (11));

(statearr_18268_20531[(5)] = null);

} else {
throw ex18259;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (2))){
var inst_18079 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18080 = cnt;
var inst_18081 = (0);
var state_18185__$1 = (function (){var statearr_18281 = state_18185;
(statearr_18281[(11)] = inst_18079);

(statearr_18281[(8)] = inst_18080);

(statearr_18281[(7)] = inst_18081);

return statearr_18281;
})();
var statearr_18282_20536 = state_18185__$1;
(statearr_18282_20536[(2)] = null);

(statearr_18282_20536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (11))){
var inst_18108 = (state_18185[(2)]);
var inst_18110 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18185__$1 = (function (){var statearr_18283 = state_18185;
(statearr_18283[(12)] = inst_18108);

return statearr_18283;
})();
var statearr_18284_20539 = state_18185__$1;
(statearr_18284_20539[(2)] = inst_18110);

(statearr_18284_20539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (9))){
var inst_18081 = (state_18185[(7)]);
var _ = (function (){var statearr_18286 = state_18185;
(statearr_18286[(4)] = cljs.core.cons((12),(state_18185[(4)])));

return statearr_18286;
})();
var inst_18127 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18081) : chs__$1.call(null,inst_18081));
var inst_18128 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18081) : done.call(null,inst_18081));
var inst_18129 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18127,inst_18128);
var ___$1 = (function (){var statearr_18287 = state_18185;
(statearr_18287[(4)] = cljs.core.rest((state_18185[(4)])));

return statearr_18287;
})();
var state_18185__$1 = state_18185;
var statearr_18288_20542 = state_18185__$1;
(statearr_18288_20542[(2)] = inst_18129);

(statearr_18288_20542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (5))){
var inst_18140 = (state_18185[(2)]);
var state_18185__$1 = (function (){var statearr_18291 = state_18185;
(statearr_18291[(13)] = inst_18140);

return statearr_18291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18185__$1,(13),dchan);
} else {
if((state_val_18186 === (14))){
var inst_18150 = cljs.core.async.close_BANG_(out);
var state_18185__$1 = state_18185;
var statearr_18294_20544 = state_18185__$1;
(statearr_18294_20544[(2)] = inst_18150);

(statearr_18294_20544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (16))){
var inst_18165 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18299_20547 = state_18185__$1;
(statearr_18299_20547[(2)] = inst_18165);

(statearr_18299_20547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (10))){
var inst_18081 = (state_18185[(7)]);
var inst_18132 = (state_18185[(2)]);
var inst_18134 = (inst_18081 + (1));
var inst_18081__$1 = inst_18134;
var state_18185__$1 = (function (){var statearr_18302 = state_18185;
(statearr_18302[(14)] = inst_18132);

(statearr_18302[(7)] = inst_18081__$1);

return statearr_18302;
})();
var statearr_18304_20553 = state_18185__$1;
(statearr_18304_20553[(2)] = null);

(statearr_18304_20553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (8))){
var inst_18138 = (state_18185[(2)]);
var state_18185__$1 = state_18185;
var statearr_18305_20554 = state_18185__$1;
(statearr_18305_20554[(2)] = inst_18138);

(statearr_18305_20554[(1)] = (5));


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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_18308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18308[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_18308[(1)] = (1));

return statearr_18308;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_18185){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_18185);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e18311){var ex__13786__auto__ = e18311;
var statearr_18312_20561 = state_18185;
(statearr_18312_20561[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_18185[(4)]))){
var statearr_18314_20564 = state_18185;
(statearr_18314_20564[(1)] = cljs.core.first((state_18185[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20565 = state_18185;
state_18185 = G__20565;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_18185){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_18185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_18317 = f__15123__auto__();
(statearr_18317[(6)] = c__15122__auto___20514);

return statearr_18317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
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
var G__18324 = arguments.length;
switch (G__18324) {
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
var c__15122__auto___20575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_18381){
var state_val_18382 = (state_18381[(1)]);
if((state_val_18382 === (7))){
var inst_18347 = (state_18381[(7)]);
var inst_18348 = (state_18381[(8)]);
var inst_18347__$1 = (state_18381[(2)]);
var inst_18348__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18347__$1,(0),null);
var inst_18349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18347__$1,(1),null);
var inst_18351 = (inst_18348__$1 == null);
var state_18381__$1 = (function (){var statearr_18396 = state_18381;
(statearr_18396[(7)] = inst_18347__$1);

(statearr_18396[(8)] = inst_18348__$1);

(statearr_18396[(9)] = inst_18349);

return statearr_18396;
})();
if(cljs.core.truth_(inst_18351)){
var statearr_18401_20582 = state_18381__$1;
(statearr_18401_20582[(1)] = (8));

} else {
var statearr_18402_20583 = state_18381__$1;
(statearr_18402_20583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (1))){
var inst_18334 = cljs.core.vec(chs);
var inst_18335 = inst_18334;
var state_18381__$1 = (function (){var statearr_18403 = state_18381;
(statearr_18403[(10)] = inst_18335);

return statearr_18403;
})();
var statearr_18404_20585 = state_18381__$1;
(statearr_18404_20585[(2)] = null);

(statearr_18404_20585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (4))){
var inst_18335 = (state_18381[(10)]);
var state_18381__$1 = state_18381;
return cljs.core.async.ioc_alts_BANG_(state_18381__$1,(7),inst_18335);
} else {
if((state_val_18382 === (6))){
var inst_18373 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18409_20587 = state_18381__$1;
(statearr_18409_20587[(2)] = inst_18373);

(statearr_18409_20587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (3))){
var inst_18375 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18381__$1,inst_18375);
} else {
if((state_val_18382 === (2))){
var inst_18335 = (state_18381[(10)]);
var inst_18339 = cljs.core.count(inst_18335);
var inst_18340 = (inst_18339 > (0));
var state_18381__$1 = state_18381;
if(cljs.core.truth_(inst_18340)){
var statearr_18416_20590 = state_18381__$1;
(statearr_18416_20590[(1)] = (4));

} else {
var statearr_18421_20591 = state_18381__$1;
(statearr_18421_20591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (11))){
var inst_18335 = (state_18381[(10)]);
var inst_18366 = (state_18381[(2)]);
var tmp18411 = inst_18335;
var inst_18335__$1 = tmp18411;
var state_18381__$1 = (function (){var statearr_18426 = state_18381;
(statearr_18426[(11)] = inst_18366);

(statearr_18426[(10)] = inst_18335__$1);

return statearr_18426;
})();
var statearr_18427_20595 = state_18381__$1;
(statearr_18427_20595[(2)] = null);

(statearr_18427_20595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (9))){
var inst_18348 = (state_18381[(8)]);
var state_18381__$1 = state_18381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18381__$1,(11),out,inst_18348);
} else {
if((state_val_18382 === (5))){
var inst_18371 = cljs.core.async.close_BANG_(out);
var state_18381__$1 = state_18381;
var statearr_18440_20596 = state_18381__$1;
(statearr_18440_20596[(2)] = inst_18371);

(statearr_18440_20596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (10))){
var inst_18369 = (state_18381[(2)]);
var state_18381__$1 = state_18381;
var statearr_18446_20598 = state_18381__$1;
(statearr_18446_20598[(2)] = inst_18369);

(statearr_18446_20598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18382 === (8))){
var inst_18335 = (state_18381[(10)]);
var inst_18347 = (state_18381[(7)]);
var inst_18348 = (state_18381[(8)]);
var inst_18349 = (state_18381[(9)]);
var inst_18361 = (function (){var cs = inst_18335;
var vec__18343 = inst_18347;
var v = inst_18348;
var c = inst_18349;
return (function (p1__18321_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18321_SHARP_);
});
})();
var inst_18362 = cljs.core.filterv(inst_18361,inst_18335);
var inst_18335__$1 = inst_18362;
var state_18381__$1 = (function (){var statearr_18467 = state_18381;
(statearr_18467[(10)] = inst_18335__$1);

return statearr_18467;
})();
var statearr_18473_20601 = state_18381__$1;
(statearr_18473_20601[(2)] = null);

(statearr_18473_20601[(1)] = (2));


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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_18476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18476[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_18476[(1)] = (1));

return statearr_18476;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_18381){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_18381);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e18483){var ex__13786__auto__ = e18483;
var statearr_18484_20603 = state_18381;
(statearr_18484_20603[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_18381[(4)]))){
var statearr_18487_20604 = state_18381;
(statearr_18487_20604[(1)] = cljs.core.first((state_18381[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20605 = state_18381;
state_18381 = G__20605;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_18381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_18381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_18491 = f__15123__auto__();
(statearr_18491[(6)] = c__15122__auto___20575);

return statearr_18491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
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
var G__18508 = arguments.length;
switch (G__18508) {
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
var c__15122__auto___20608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_18576){
var state_val_18577 = (state_18576[(1)]);
if((state_val_18577 === (7))){
var inst_18546 = (state_18576[(7)]);
var inst_18546__$1 = (state_18576[(2)]);
var inst_18551 = (inst_18546__$1 == null);
var inst_18552 = cljs.core.not(inst_18551);
var state_18576__$1 = (function (){var statearr_18601 = state_18576;
(statearr_18601[(7)] = inst_18546__$1);

return statearr_18601;
})();
if(inst_18552){
var statearr_18606_20611 = state_18576__$1;
(statearr_18606_20611[(1)] = (8));

} else {
var statearr_18611_20612 = state_18576__$1;
(statearr_18611_20612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (1))){
var inst_18538 = (0);
var state_18576__$1 = (function (){var statearr_18618 = state_18576;
(statearr_18618[(8)] = inst_18538);

return statearr_18618;
})();
var statearr_18619_20613 = state_18576__$1;
(statearr_18619_20613[(2)] = null);

(statearr_18619_20613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (4))){
var state_18576__$1 = state_18576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18576__$1,(7),ch);
} else {
if((state_val_18577 === (6))){
var inst_18571 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
var statearr_18629_20615 = state_18576__$1;
(statearr_18629_20615[(2)] = inst_18571);

(statearr_18629_20615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (3))){
var inst_18573 = (state_18576[(2)]);
var inst_18574 = cljs.core.async.close_BANG_(out);
var state_18576__$1 = (function (){var statearr_18631 = state_18576;
(statearr_18631[(9)] = inst_18573);

return statearr_18631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18576__$1,inst_18574);
} else {
if((state_val_18577 === (2))){
var inst_18538 = (state_18576[(8)]);
var inst_18540 = (inst_18538 < n);
var state_18576__$1 = state_18576;
if(cljs.core.truth_(inst_18540)){
var statearr_18632_20617 = state_18576__$1;
(statearr_18632_20617[(1)] = (4));

} else {
var statearr_18633_20619 = state_18576__$1;
(statearr_18633_20619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (11))){
var inst_18538 = (state_18576[(8)]);
var inst_18562 = (state_18576[(2)]);
var inst_18564 = (inst_18538 + (1));
var inst_18538__$1 = inst_18564;
var state_18576__$1 = (function (){var statearr_18637 = state_18576;
(statearr_18637[(10)] = inst_18562);

(statearr_18637[(8)] = inst_18538__$1);

return statearr_18637;
})();
var statearr_18638_20621 = state_18576__$1;
(statearr_18638_20621[(2)] = null);

(statearr_18638_20621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (9))){
var state_18576__$1 = state_18576;
var statearr_18639_20622 = state_18576__$1;
(statearr_18639_20622[(2)] = null);

(statearr_18639_20622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (5))){
var state_18576__$1 = state_18576;
var statearr_18641_20623 = state_18576__$1;
(statearr_18641_20623[(2)] = null);

(statearr_18641_20623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (10))){
var inst_18568 = (state_18576[(2)]);
var state_18576__$1 = state_18576;
var statearr_18642_20626 = state_18576__$1;
(statearr_18642_20626[(2)] = inst_18568);

(statearr_18642_20626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18577 === (8))){
var inst_18546 = (state_18576[(7)]);
var state_18576__$1 = state_18576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18576__$1,(11),out,inst_18546);
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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_18648 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18648[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_18648[(1)] = (1));

return statearr_18648;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_18576){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_18576);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e18656){var ex__13786__auto__ = e18656;
var statearr_18658_20629 = state_18576;
(statearr_18658_20629[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_18576[(4)]))){
var statearr_18660_20631 = state_18576;
(statearr_18660_20631[(1)] = cljs.core.first((state_18576[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20632 = state_18576;
state_18576 = G__20632;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_18576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_18576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_18664 = f__15123__auto__();
(statearr_18664[(6)] = c__15122__auto___20608);

return statearr_18664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
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
cljs.core.async.t_cljs$core$async18700 = (function (f,ch,meta18678,_,fn1,meta18701){
this.f = f;
this.ch = ch;
this.meta18678 = meta18678;
this._ = _;
this.fn1 = fn1;
this.meta18701 = meta18701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18702,meta18701__$1){
var self__ = this;
var _18702__$1 = this;
return (new cljs.core.async.t_cljs$core$async18700(self__.f,self__.ch,self__.meta18678,self__._,self__.fn1,meta18701__$1));
}));

(cljs.core.async.t_cljs$core$async18700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18702){
var self__ = this;
var _18702__$1 = this;
return self__.meta18701;
}));

(cljs.core.async.t_cljs$core$async18700.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18700.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18670_SHARP_){
var G__18708 = (((p1__18670_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18670_SHARP_) : self__.f.call(null,p1__18670_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18708) : f1.call(null,G__18708));
});
}));

(cljs.core.async.t_cljs$core$async18700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18678","meta18678",1609554622,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18677","cljs.core.async/t_cljs$core$async18677",2123675909,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18701","meta18701",-348920234,null)], null);
}));

(cljs.core.async.t_cljs$core$async18700.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18700.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18700");

(cljs.core.async.t_cljs$core$async18700.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18700");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18700.
 */
cljs.core.async.__GT_t_cljs$core$async18700 = (function cljs$core$async$__GT_t_cljs$core$async18700(f,ch,meta18678,_,fn1,meta18701){
return (new cljs.core.async.t_cljs$core$async18700(f,ch,meta18678,_,fn1,meta18701));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18677 = (function (f,ch,meta18678){
this.f = f;
this.ch = ch;
this.meta18678 = meta18678;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18679,meta18678__$1){
var self__ = this;
var _18679__$1 = this;
return (new cljs.core.async.t_cljs$core$async18677(self__.f,self__.ch,meta18678__$1));
}));

(cljs.core.async.t_cljs$core$async18677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18679){
var self__ = this;
var _18679__$1 = this;
return self__.meta18678;
}));

(cljs.core.async.t_cljs$core$async18677.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18677.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18677.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18677.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18677.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18700(self__.f,self__.ch,self__.meta18678,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18725 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18725) : self__.f.call(null,G__18725));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18677.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18677.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18677.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18678","meta18678",1609554622,null)], null);
}));

(cljs.core.async.t_cljs$core$async18677.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18677.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18677");

(cljs.core.async.t_cljs$core$async18677.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18677");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18677.
 */
cljs.core.async.__GT_t_cljs$core$async18677 = (function cljs$core$async$__GT_t_cljs$core$async18677(f,ch,meta18678){
return (new cljs.core.async.t_cljs$core$async18677(f,ch,meta18678));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18677(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18740 = (function (f,ch,meta18741){
this.f = f;
this.ch = ch;
this.meta18741 = meta18741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18742,meta18741__$1){
var self__ = this;
var _18742__$1 = this;
return (new cljs.core.async.t_cljs$core$async18740(self__.f,self__.ch,meta18741__$1));
}));

(cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18742){
var self__ = this;
var _18742__$1 = this;
return self__.meta18741;
}));

(cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18740.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18741","meta18741",-1512099744,null)], null);
}));

(cljs.core.async.t_cljs$core$async18740.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18740");

(cljs.core.async.t_cljs$core$async18740.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18740");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18740.
 */
cljs.core.async.__GT_t_cljs$core$async18740 = (function cljs$core$async$__GT_t_cljs$core$async18740(f,ch,meta18741){
return (new cljs.core.async.t_cljs$core$async18740(f,ch,meta18741));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18740(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18800 = (function (p,ch,meta18801){
this.p = p;
this.ch = ch;
this.meta18801 = meta18801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18802,meta18801__$1){
var self__ = this;
var _18802__$1 = this;
return (new cljs.core.async.t_cljs$core$async18800(self__.p,self__.ch,meta18801__$1));
}));

(cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18802){
var self__ = this;
var _18802__$1 = this;
return self__.meta18801;
}));

(cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18800.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18801","meta18801",-267812927,null)], null);
}));

(cljs.core.async.t_cljs$core$async18800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18800");

(cljs.core.async.t_cljs$core$async18800.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18800.
 */
cljs.core.async.__GT_t_cljs$core$async18800 = (function cljs$core$async$__GT_t_cljs$core$async18800(p,ch,meta18801){
return (new cljs.core.async.t_cljs$core$async18800(p,ch,meta18801));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18800(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18832 = arguments.length;
switch (G__18832) {
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
var c__15122__auto___20659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_18869){
var state_val_18870 = (state_18869[(1)]);
if((state_val_18870 === (7))){
var inst_18864 = (state_18869[(2)]);
var state_18869__$1 = state_18869;
var statearr_18882_20662 = state_18869__$1;
(statearr_18882_20662[(2)] = inst_18864);

(statearr_18882_20662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (1))){
var state_18869__$1 = state_18869;
var statearr_18884_20663 = state_18869__$1;
(statearr_18884_20663[(2)] = null);

(statearr_18884_20663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (4))){
var inst_18844 = (state_18869[(7)]);
var inst_18844__$1 = (state_18869[(2)]);
var inst_18849 = (inst_18844__$1 == null);
var state_18869__$1 = (function (){var statearr_18890 = state_18869;
(statearr_18890[(7)] = inst_18844__$1);

return statearr_18890;
})();
if(cljs.core.truth_(inst_18849)){
var statearr_18891_20664 = state_18869__$1;
(statearr_18891_20664[(1)] = (5));

} else {
var statearr_18893_20665 = state_18869__$1;
(statearr_18893_20665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (6))){
var inst_18844 = (state_18869[(7)]);
var inst_18854 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18844) : p.call(null,inst_18844));
var state_18869__$1 = state_18869;
if(cljs.core.truth_(inst_18854)){
var statearr_18899_20675 = state_18869__$1;
(statearr_18899_20675[(1)] = (8));

} else {
var statearr_18901_20676 = state_18869__$1;
(statearr_18901_20676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (3))){
var inst_18867 = (state_18869[(2)]);
var state_18869__$1 = state_18869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18869__$1,inst_18867);
} else {
if((state_val_18870 === (2))){
var state_18869__$1 = state_18869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18869__$1,(4),ch);
} else {
if((state_val_18870 === (11))){
var inst_18857 = (state_18869[(2)]);
var state_18869__$1 = state_18869;
var statearr_18902_20680 = state_18869__$1;
(statearr_18902_20680[(2)] = inst_18857);

(statearr_18902_20680[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (9))){
var state_18869__$1 = state_18869;
var statearr_18903_20682 = state_18869__$1;
(statearr_18903_20682[(2)] = null);

(statearr_18903_20682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (5))){
var inst_18852 = cljs.core.async.close_BANG_(out);
var state_18869__$1 = state_18869;
var statearr_18907_20683 = state_18869__$1;
(statearr_18907_20683[(2)] = inst_18852);

(statearr_18907_20683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (10))){
var inst_18860 = (state_18869[(2)]);
var state_18869__$1 = (function (){var statearr_18911 = state_18869;
(statearr_18911[(8)] = inst_18860);

return statearr_18911;
})();
var statearr_18915_20684 = state_18869__$1;
(statearr_18915_20684[(2)] = null);

(statearr_18915_20684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18870 === (8))){
var inst_18844 = (state_18869[(7)]);
var state_18869__$1 = state_18869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18869__$1,(11),out,inst_18844);
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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_18921 = [null,null,null,null,null,null,null,null,null];
(statearr_18921[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_18921[(1)] = (1));

return statearr_18921;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_18869){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_18869);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e18925){var ex__13786__auto__ = e18925;
var statearr_18926_20687 = state_18869;
(statearr_18926_20687[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_18869[(4)]))){
var statearr_18927_20690 = state_18869;
(statearr_18927_20690[(1)] = cljs.core.first((state_18869[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20692 = state_18869;
state_18869 = G__20692;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_18869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_18869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_18929 = f__15123__auto__();
(statearr_18929[(6)] = c__15122__auto___20659);

return statearr_18929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18938 = arguments.length;
switch (G__18938) {
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
var c__15122__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_19022){
var state_val_19023 = (state_19022[(1)]);
if((state_val_19023 === (7))){
var inst_19017 = (state_19022[(2)]);
var state_19022__$1 = state_19022;
var statearr_19027_20695 = state_19022__$1;
(statearr_19027_20695[(2)] = inst_19017);

(statearr_19027_20695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (20))){
var inst_18977 = (state_19022[(7)]);
var inst_18998 = (state_19022[(2)]);
var inst_18999 = cljs.core.next(inst_18977);
var inst_18959 = inst_18999;
var inst_18960 = null;
var inst_18961 = (0);
var inst_18962 = (0);
var state_19022__$1 = (function (){var statearr_19028 = state_19022;
(statearr_19028[(8)] = inst_18998);

(statearr_19028[(9)] = inst_18959);

(statearr_19028[(10)] = inst_18960);

(statearr_19028[(11)] = inst_18961);

(statearr_19028[(12)] = inst_18962);

return statearr_19028;
})();
var statearr_19031_20701 = state_19022__$1;
(statearr_19031_20701[(2)] = null);

(statearr_19031_20701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (1))){
var state_19022__$1 = state_19022;
var statearr_19032_20704 = state_19022__$1;
(statearr_19032_20704[(2)] = null);

(statearr_19032_20704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (4))){
var inst_18948 = (state_19022[(13)]);
var inst_18948__$1 = (state_19022[(2)]);
var inst_18949 = (inst_18948__$1 == null);
var state_19022__$1 = (function (){var statearr_19033 = state_19022;
(statearr_19033[(13)] = inst_18948__$1);

return statearr_19033;
})();
if(cljs.core.truth_(inst_18949)){
var statearr_19034_20707 = state_19022__$1;
(statearr_19034_20707[(1)] = (5));

} else {
var statearr_19035_20708 = state_19022__$1;
(statearr_19035_20708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (15))){
var state_19022__$1 = state_19022;
var statearr_19041_20710 = state_19022__$1;
(statearr_19041_20710[(2)] = null);

(statearr_19041_20710[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (21))){
var state_19022__$1 = state_19022;
var statearr_19043_20712 = state_19022__$1;
(statearr_19043_20712[(2)] = null);

(statearr_19043_20712[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (13))){
var inst_18962 = (state_19022[(12)]);
var inst_18959 = (state_19022[(9)]);
var inst_18960 = (state_19022[(10)]);
var inst_18961 = (state_19022[(11)]);
var inst_18972 = (state_19022[(2)]);
var inst_18974 = (inst_18962 + (1));
var tmp19037 = inst_18959;
var tmp19038 = inst_18960;
var tmp19039 = inst_18961;
var inst_18959__$1 = tmp19037;
var inst_18960__$1 = tmp19038;
var inst_18961__$1 = tmp19039;
var inst_18962__$1 = inst_18974;
var state_19022__$1 = (function (){var statearr_19044 = state_19022;
(statearr_19044[(14)] = inst_18972);

(statearr_19044[(9)] = inst_18959__$1);

(statearr_19044[(10)] = inst_18960__$1);

(statearr_19044[(11)] = inst_18961__$1);

(statearr_19044[(12)] = inst_18962__$1);

return statearr_19044;
})();
var statearr_19046_20716 = state_19022__$1;
(statearr_19046_20716[(2)] = null);

(statearr_19046_20716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (22))){
var state_19022__$1 = state_19022;
var statearr_19047_20718 = state_19022__$1;
(statearr_19047_20718[(2)] = null);

(statearr_19047_20718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (6))){
var inst_18948 = (state_19022[(13)]);
var inst_18957 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18948) : f.call(null,inst_18948));
var inst_18958 = cljs.core.seq(inst_18957);
var inst_18959 = inst_18958;
var inst_18960 = null;
var inst_18961 = (0);
var inst_18962 = (0);
var state_19022__$1 = (function (){var statearr_19052 = state_19022;
(statearr_19052[(9)] = inst_18959);

(statearr_19052[(10)] = inst_18960);

(statearr_19052[(11)] = inst_18961);

(statearr_19052[(12)] = inst_18962);

return statearr_19052;
})();
var statearr_19058_20721 = state_19022__$1;
(statearr_19058_20721[(2)] = null);

(statearr_19058_20721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (17))){
var inst_18977 = (state_19022[(7)]);
var inst_18985 = cljs.core.chunk_first(inst_18977);
var inst_18986 = cljs.core.chunk_rest(inst_18977);
var inst_18987 = cljs.core.count(inst_18985);
var inst_18959 = inst_18986;
var inst_18960 = inst_18985;
var inst_18961 = inst_18987;
var inst_18962 = (0);
var state_19022__$1 = (function (){var statearr_19064 = state_19022;
(statearr_19064[(9)] = inst_18959);

(statearr_19064[(10)] = inst_18960);

(statearr_19064[(11)] = inst_18961);

(statearr_19064[(12)] = inst_18962);

return statearr_19064;
})();
var statearr_19069_20726 = state_19022__$1;
(statearr_19069_20726[(2)] = null);

(statearr_19069_20726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (3))){
var inst_19019 = (state_19022[(2)]);
var state_19022__$1 = state_19022;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19022__$1,inst_19019);
} else {
if((state_val_19023 === (12))){
var inst_19007 = (state_19022[(2)]);
var state_19022__$1 = state_19022;
var statearr_19074_20729 = state_19022__$1;
(statearr_19074_20729[(2)] = inst_19007);

(statearr_19074_20729[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (2))){
var state_19022__$1 = state_19022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19022__$1,(4),in$);
} else {
if((state_val_19023 === (23))){
var inst_19015 = (state_19022[(2)]);
var state_19022__$1 = state_19022;
var statearr_19078_20731 = state_19022__$1;
(statearr_19078_20731[(2)] = inst_19015);

(statearr_19078_20731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (19))){
var inst_19002 = (state_19022[(2)]);
var state_19022__$1 = state_19022;
var statearr_19080_20732 = state_19022__$1;
(statearr_19080_20732[(2)] = inst_19002);

(statearr_19080_20732[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (11))){
var inst_18959 = (state_19022[(9)]);
var inst_18977 = (state_19022[(7)]);
var inst_18977__$1 = cljs.core.seq(inst_18959);
var state_19022__$1 = (function (){var statearr_19085 = state_19022;
(statearr_19085[(7)] = inst_18977__$1);

return statearr_19085;
})();
if(inst_18977__$1){
var statearr_19089_20733 = state_19022__$1;
(statearr_19089_20733[(1)] = (14));

} else {
var statearr_19094_20734 = state_19022__$1;
(statearr_19094_20734[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (9))){
var inst_19009 = (state_19022[(2)]);
var inst_19010 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19022__$1 = (function (){var statearr_19098 = state_19022;
(statearr_19098[(15)] = inst_19009);

return statearr_19098;
})();
if(cljs.core.truth_(inst_19010)){
var statearr_19101_20736 = state_19022__$1;
(statearr_19101_20736[(1)] = (21));

} else {
var statearr_19102_20737 = state_19022__$1;
(statearr_19102_20737[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (5))){
var inst_18951 = cljs.core.async.close_BANG_(out);
var state_19022__$1 = state_19022;
var statearr_19104_20738 = state_19022__$1;
(statearr_19104_20738[(2)] = inst_18951);

(statearr_19104_20738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (14))){
var inst_18977 = (state_19022[(7)]);
var inst_18983 = cljs.core.chunked_seq_QMARK_(inst_18977);
var state_19022__$1 = state_19022;
if(inst_18983){
var statearr_19110_20739 = state_19022__$1;
(statearr_19110_20739[(1)] = (17));

} else {
var statearr_19113_20740 = state_19022__$1;
(statearr_19113_20740[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (16))){
var inst_19005 = (state_19022[(2)]);
var state_19022__$1 = state_19022;
var statearr_19115_20742 = state_19022__$1;
(statearr_19115_20742[(2)] = inst_19005);

(statearr_19115_20742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19023 === (10))){
var inst_18960 = (state_19022[(10)]);
var inst_18962 = (state_19022[(12)]);
var inst_18970 = cljs.core._nth(inst_18960,inst_18962);
var state_19022__$1 = state_19022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19022__$1,(13),out,inst_18970);
} else {
if((state_val_19023 === (18))){
var inst_18977 = (state_19022[(7)]);
var inst_18990 = cljs.core.first(inst_18977);
var state_19022__$1 = state_19022;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19022__$1,(20),out,inst_18990);
} else {
if((state_val_19023 === (8))){
var inst_18962 = (state_19022[(12)]);
var inst_18961 = (state_19022[(11)]);
var inst_18964 = (inst_18962 < inst_18961);
var inst_18965 = inst_18964;
var state_19022__$1 = state_19022;
if(cljs.core.truth_(inst_18965)){
var statearr_19122_20746 = state_19022__$1;
(statearr_19122_20746[(1)] = (10));

} else {
var statearr_19123_20747 = state_19022__$1;
(statearr_19123_20747[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13783__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13783__auto____0 = (function (){
var statearr_19132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19132[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13783__auto__);

(statearr_19132[(1)] = (1));

return statearr_19132;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13783__auto____1 = (function (state_19022){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_19022);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e19134){var ex__13786__auto__ = e19134;
var statearr_19136_20748 = state_19022;
(statearr_19136_20748[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_19022[(4)]))){
var statearr_19137_20749 = state_19022;
(statearr_19137_20749[(1)] = cljs.core.first((state_19022[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20750 = state_19022;
state_19022 = G__20750;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13783__auto__ = function(state_19022){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13783__auto____1.call(this,state_19022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13783__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13783__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_19138 = f__15123__auto__();
(statearr_19138[(6)] = c__15122__auto__);

return statearr_19138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));

return c__15122__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19149 = arguments.length;
switch (G__19149) {
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
var G__19165 = arguments.length;
switch (G__19165) {
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
var G__19176 = arguments.length;
switch (G__19176) {
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
var c__15122__auto___20765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_19207){
var state_val_19208 = (state_19207[(1)]);
if((state_val_19208 === (7))){
var inst_19200 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
var statearr_19218_20766 = state_19207__$1;
(statearr_19218_20766[(2)] = inst_19200);

(statearr_19218_20766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (1))){
var inst_19181 = null;
var state_19207__$1 = (function (){var statearr_19219 = state_19207;
(statearr_19219[(7)] = inst_19181);

return statearr_19219;
})();
var statearr_19220_20767 = state_19207__$1;
(statearr_19220_20767[(2)] = null);

(statearr_19220_20767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (4))){
var inst_19184 = (state_19207[(8)]);
var inst_19184__$1 = (state_19207[(2)]);
var inst_19186 = (inst_19184__$1 == null);
var inst_19187 = cljs.core.not(inst_19186);
var state_19207__$1 = (function (){var statearr_19225 = state_19207;
(statearr_19225[(8)] = inst_19184__$1);

return statearr_19225;
})();
if(inst_19187){
var statearr_19233_20768 = state_19207__$1;
(statearr_19233_20768[(1)] = (5));

} else {
var statearr_19235_20769 = state_19207__$1;
(statearr_19235_20769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (6))){
var state_19207__$1 = state_19207;
var statearr_19248_20771 = state_19207__$1;
(statearr_19248_20771[(2)] = null);

(statearr_19248_20771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (3))){
var inst_19203 = (state_19207[(2)]);
var inst_19204 = cljs.core.async.close_BANG_(out);
var state_19207__$1 = (function (){var statearr_19250 = state_19207;
(statearr_19250[(9)] = inst_19203);

return statearr_19250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19207__$1,inst_19204);
} else {
if((state_val_19208 === (2))){
var state_19207__$1 = state_19207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19207__$1,(4),ch);
} else {
if((state_val_19208 === (11))){
var inst_19184 = (state_19207[(8)]);
var inst_19194 = (state_19207[(2)]);
var inst_19181 = inst_19184;
var state_19207__$1 = (function (){var statearr_19254 = state_19207;
(statearr_19254[(10)] = inst_19194);

(statearr_19254[(7)] = inst_19181);

return statearr_19254;
})();
var statearr_19256_20773 = state_19207__$1;
(statearr_19256_20773[(2)] = null);

(statearr_19256_20773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (9))){
var inst_19184 = (state_19207[(8)]);
var state_19207__$1 = state_19207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19207__$1,(11),out,inst_19184);
} else {
if((state_val_19208 === (5))){
var inst_19184 = (state_19207[(8)]);
var inst_19181 = (state_19207[(7)]);
var inst_19189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19184,inst_19181);
var state_19207__$1 = state_19207;
if(inst_19189){
var statearr_19263_20774 = state_19207__$1;
(statearr_19263_20774[(1)] = (8));

} else {
var statearr_19265_20775 = state_19207__$1;
(statearr_19265_20775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (10))){
var inst_19197 = (state_19207[(2)]);
var state_19207__$1 = state_19207;
var statearr_19266_20776 = state_19207__$1;
(statearr_19266_20776[(2)] = inst_19197);

(statearr_19266_20776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19208 === (8))){
var inst_19181 = (state_19207[(7)]);
var tmp19261 = inst_19181;
var inst_19181__$1 = tmp19261;
var state_19207__$1 = (function (){var statearr_19280 = state_19207;
(statearr_19280[(7)] = inst_19181__$1);

return statearr_19280;
})();
var statearr_19281_20779 = state_19207__$1;
(statearr_19281_20779[(2)] = null);

(statearr_19281_20779[(1)] = (2));


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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_19285 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19285[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_19285[(1)] = (1));

return statearr_19285;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_19207){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_19207);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e19294){var ex__13786__auto__ = e19294;
var statearr_19295_20787 = state_19207;
(statearr_19295_20787[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_19207[(4)]))){
var statearr_19296_20788 = state_19207;
(statearr_19296_20788[(1)] = cljs.core.first((state_19207[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20789 = state_19207;
state_19207 = G__20789;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_19207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_19207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_19300 = f__15123__auto__();
(statearr_19300[(6)] = c__15122__auto___20765);

return statearr_19300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19311 = arguments.length;
switch (G__19311) {
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
var c__15122__auto___20794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_19356){
var state_val_19357 = (state_19356[(1)]);
if((state_val_19357 === (7))){
var inst_19352 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19363_20795 = state_19356__$1;
(statearr_19363_20795[(2)] = inst_19352);

(statearr_19363_20795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (1))){
var inst_19316 = (new Array(n));
var inst_19317 = inst_19316;
var inst_19318 = (0);
var state_19356__$1 = (function (){var statearr_19369 = state_19356;
(statearr_19369[(7)] = inst_19317);

(statearr_19369[(8)] = inst_19318);

return statearr_19369;
})();
var statearr_19373_20797 = state_19356__$1;
(statearr_19373_20797[(2)] = null);

(statearr_19373_20797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (4))){
var inst_19321 = (state_19356[(9)]);
var inst_19321__$1 = (state_19356[(2)]);
var inst_19322 = (inst_19321__$1 == null);
var inst_19323 = cljs.core.not(inst_19322);
var state_19356__$1 = (function (){var statearr_19378 = state_19356;
(statearr_19378[(9)] = inst_19321__$1);

return statearr_19378;
})();
if(inst_19323){
var statearr_19380_20802 = state_19356__$1;
(statearr_19380_20802[(1)] = (5));

} else {
var statearr_19381_20803 = state_19356__$1;
(statearr_19381_20803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (15))){
var inst_19346 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19385_20804 = state_19356__$1;
(statearr_19385_20804[(2)] = inst_19346);

(statearr_19385_20804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (13))){
var state_19356__$1 = state_19356;
var statearr_19386_20805 = state_19356__$1;
(statearr_19386_20805[(2)] = null);

(statearr_19386_20805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (6))){
var inst_19318 = (state_19356[(8)]);
var inst_19342 = (inst_19318 > (0));
var state_19356__$1 = state_19356;
if(cljs.core.truth_(inst_19342)){
var statearr_19392_20810 = state_19356__$1;
(statearr_19392_20810[(1)] = (12));

} else {
var statearr_19393_20811 = state_19356__$1;
(statearr_19393_20811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (3))){
var inst_19354 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19356__$1,inst_19354);
} else {
if((state_val_19357 === (12))){
var inst_19317 = (state_19356[(7)]);
var inst_19344 = cljs.core.vec(inst_19317);
var state_19356__$1 = state_19356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19356__$1,(15),out,inst_19344);
} else {
if((state_val_19357 === (2))){
var state_19356__$1 = state_19356;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19356__$1,(4),ch);
} else {
if((state_val_19357 === (11))){
var inst_19333 = (state_19356[(2)]);
var inst_19337 = (new Array(n));
var inst_19317 = inst_19337;
var inst_19318 = (0);
var state_19356__$1 = (function (){var statearr_19403 = state_19356;
(statearr_19403[(10)] = inst_19333);

(statearr_19403[(7)] = inst_19317);

(statearr_19403[(8)] = inst_19318);

return statearr_19403;
})();
var statearr_19404_20815 = state_19356__$1;
(statearr_19404_20815[(2)] = null);

(statearr_19404_20815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (9))){
var inst_19317 = (state_19356[(7)]);
var inst_19331 = cljs.core.vec(inst_19317);
var state_19356__$1 = state_19356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19356__$1,(11),out,inst_19331);
} else {
if((state_val_19357 === (5))){
var inst_19317 = (state_19356[(7)]);
var inst_19318 = (state_19356[(8)]);
var inst_19321 = (state_19356[(9)]);
var inst_19326 = (state_19356[(11)]);
var inst_19325 = (inst_19317[inst_19318] = inst_19321);
var inst_19326__$1 = (inst_19318 + (1));
var inst_19327 = (inst_19326__$1 < n);
var state_19356__$1 = (function (){var statearr_19408 = state_19356;
(statearr_19408[(12)] = inst_19325);

(statearr_19408[(11)] = inst_19326__$1);

return statearr_19408;
})();
if(cljs.core.truth_(inst_19327)){
var statearr_19409_20816 = state_19356__$1;
(statearr_19409_20816[(1)] = (8));

} else {
var statearr_19410_20817 = state_19356__$1;
(statearr_19410_20817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (14))){
var inst_19349 = (state_19356[(2)]);
var inst_19350 = cljs.core.async.close_BANG_(out);
var state_19356__$1 = (function (){var statearr_19414 = state_19356;
(statearr_19414[(13)] = inst_19349);

return statearr_19414;
})();
var statearr_19415_20821 = state_19356__$1;
(statearr_19415_20821[(2)] = inst_19350);

(statearr_19415_20821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (10))){
var inst_19340 = (state_19356[(2)]);
var state_19356__$1 = state_19356;
var statearr_19419_20824 = state_19356__$1;
(statearr_19419_20824[(2)] = inst_19340);

(statearr_19419_20824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19357 === (8))){
var inst_19317 = (state_19356[(7)]);
var inst_19326 = (state_19356[(11)]);
var tmp19412 = inst_19317;
var inst_19317__$1 = tmp19412;
var inst_19318 = inst_19326;
var state_19356__$1 = (function (){var statearr_19421 = state_19356;
(statearr_19421[(7)] = inst_19317__$1);

(statearr_19421[(8)] = inst_19318);

return statearr_19421;
})();
var statearr_19423_20828 = state_19356__$1;
(statearr_19423_20828[(2)] = null);

(statearr_19423_20828[(1)] = (2));


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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_19427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19427[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_19427[(1)] = (1));

return statearr_19427;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_19356){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_19356);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e19432){var ex__13786__auto__ = e19432;
var statearr_19436_20831 = state_19356;
(statearr_19436_20831[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_19356[(4)]))){
var statearr_19437_20835 = state_19356;
(statearr_19437_20835[(1)] = cljs.core.first((state_19356[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20837 = state_19356;
state_19356 = G__20837;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_19356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_19356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_19445 = f__15123__auto__();
(statearr_19445[(6)] = c__15122__auto___20794);

return statearr_19445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19462 = arguments.length;
switch (G__19462) {
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
var c__15122__auto___20841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15123__auto__ = (function (){var switch__13782__auto__ = (function (state_19543){
var state_val_19544 = (state_19543[(1)]);
if((state_val_19544 === (7))){
var inst_19534 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
var statearr_19567_20842 = state_19543__$1;
(statearr_19567_20842[(2)] = inst_19534);

(statearr_19567_20842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (1))){
var inst_19476 = [];
var inst_19477 = inst_19476;
var inst_19478 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19543__$1 = (function (){var statearr_19568 = state_19543;
(statearr_19568[(7)] = inst_19477);

(statearr_19568[(8)] = inst_19478);

return statearr_19568;
})();
var statearr_19571_20847 = state_19543__$1;
(statearr_19571_20847[(2)] = null);

(statearr_19571_20847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (4))){
var inst_19483 = (state_19543[(9)]);
var inst_19483__$1 = (state_19543[(2)]);
var inst_19484 = (inst_19483__$1 == null);
var inst_19486 = cljs.core.not(inst_19484);
var state_19543__$1 = (function (){var statearr_19574 = state_19543;
(statearr_19574[(9)] = inst_19483__$1);

return statearr_19574;
})();
if(inst_19486){
var statearr_19585_20849 = state_19543__$1;
(statearr_19585_20849[(1)] = (5));

} else {
var statearr_19588_20850 = state_19543__$1;
(statearr_19588_20850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (15))){
var inst_19477 = (state_19543[(7)]);
var inst_19526 = cljs.core.vec(inst_19477);
var state_19543__$1 = state_19543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19543__$1,(18),out,inst_19526);
} else {
if((state_val_19544 === (13))){
var inst_19519 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
var statearr_19594_20852 = state_19543__$1;
(statearr_19594_20852[(2)] = inst_19519);

(statearr_19594_20852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (6))){
var inst_19477 = (state_19543[(7)]);
var inst_19521 = inst_19477.length;
var inst_19522 = (inst_19521 > (0));
var state_19543__$1 = state_19543;
if(cljs.core.truth_(inst_19522)){
var statearr_19596_20856 = state_19543__$1;
(statearr_19596_20856[(1)] = (15));

} else {
var statearr_19598_20857 = state_19543__$1;
(statearr_19598_20857[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (17))){
var inst_19531 = (state_19543[(2)]);
var inst_19532 = cljs.core.async.close_BANG_(out);
var state_19543__$1 = (function (){var statearr_19605 = state_19543;
(statearr_19605[(10)] = inst_19531);

return statearr_19605;
})();
var statearr_19607_20858 = state_19543__$1;
(statearr_19607_20858[(2)] = inst_19532);

(statearr_19607_20858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (3))){
var inst_19536 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19543__$1,inst_19536);
} else {
if((state_val_19544 === (12))){
var inst_19477 = (state_19543[(7)]);
var inst_19509 = cljs.core.vec(inst_19477);
var state_19543__$1 = state_19543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19543__$1,(14),out,inst_19509);
} else {
if((state_val_19544 === (2))){
var state_19543__$1 = state_19543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19543__$1,(4),ch);
} else {
if((state_val_19544 === (11))){
var inst_19477 = (state_19543[(7)]);
var inst_19483 = (state_19543[(9)]);
var inst_19492 = (state_19543[(11)]);
var inst_19506 = inst_19477.push(inst_19483);
var tmp19614 = inst_19477;
var inst_19477__$1 = tmp19614;
var inst_19478 = inst_19492;
var state_19543__$1 = (function (){var statearr_19627 = state_19543;
(statearr_19627[(12)] = inst_19506);

(statearr_19627[(7)] = inst_19477__$1);

(statearr_19627[(8)] = inst_19478);

return statearr_19627;
})();
var statearr_19628_20860 = state_19543__$1;
(statearr_19628_20860[(2)] = null);

(statearr_19628_20860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (9))){
var inst_19478 = (state_19543[(8)]);
var inst_19501 = cljs.core.keyword_identical_QMARK_(inst_19478,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19543__$1 = state_19543;
var statearr_19635_20861 = state_19543__$1;
(statearr_19635_20861[(2)] = inst_19501);

(statearr_19635_20861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (5))){
var inst_19483 = (state_19543[(9)]);
var inst_19492 = (state_19543[(11)]);
var inst_19478 = (state_19543[(8)]);
var inst_19496 = (state_19543[(13)]);
var inst_19492__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19483) : f.call(null,inst_19483));
var inst_19496__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19492__$1,inst_19478);
var state_19543__$1 = (function (){var statearr_19640 = state_19543;
(statearr_19640[(11)] = inst_19492__$1);

(statearr_19640[(13)] = inst_19496__$1);

return statearr_19640;
})();
if(inst_19496__$1){
var statearr_19642_20862 = state_19543__$1;
(statearr_19642_20862[(1)] = (8));

} else {
var statearr_19644_20864 = state_19543__$1;
(statearr_19644_20864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (14))){
var inst_19483 = (state_19543[(9)]);
var inst_19492 = (state_19543[(11)]);
var inst_19511 = (state_19543[(2)]);
var inst_19513 = [];
var inst_19514 = inst_19513.push(inst_19483);
var inst_19477 = inst_19513;
var inst_19478 = inst_19492;
var state_19543__$1 = (function (){var statearr_19647 = state_19543;
(statearr_19647[(14)] = inst_19511);

(statearr_19647[(15)] = inst_19514);

(statearr_19647[(7)] = inst_19477);

(statearr_19647[(8)] = inst_19478);

return statearr_19647;
})();
var statearr_19648_20866 = state_19543__$1;
(statearr_19648_20866[(2)] = null);

(statearr_19648_20866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (16))){
var state_19543__$1 = state_19543;
var statearr_19656_20867 = state_19543__$1;
(statearr_19656_20867[(2)] = null);

(statearr_19656_20867[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (10))){
var inst_19503 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
if(cljs.core.truth_(inst_19503)){
var statearr_19657_20868 = state_19543__$1;
(statearr_19657_20868[(1)] = (11));

} else {
var statearr_19658_20869 = state_19543__$1;
(statearr_19658_20869[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (18))){
var inst_19528 = (state_19543[(2)]);
var state_19543__$1 = state_19543;
var statearr_19659_20870 = state_19543__$1;
(statearr_19659_20870[(2)] = inst_19528);

(statearr_19659_20870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19544 === (8))){
var inst_19496 = (state_19543[(13)]);
var state_19543__$1 = state_19543;
var statearr_19660_20871 = state_19543__$1;
(statearr_19660_20871[(2)] = inst_19496);

(statearr_19660_20871[(1)] = (10));


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
var cljs$core$async$state_machine__13783__auto__ = null;
var cljs$core$async$state_machine__13783__auto____0 = (function (){
var statearr_19665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19665[(0)] = cljs$core$async$state_machine__13783__auto__);

(statearr_19665[(1)] = (1));

return statearr_19665;
});
var cljs$core$async$state_machine__13783__auto____1 = (function (state_19543){
while(true){
var ret_value__13784__auto__ = (function (){try{while(true){
var result__13785__auto__ = switch__13782__auto__(state_19543);
if(cljs.core.keyword_identical_QMARK_(result__13785__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13785__auto__;
}
break;
}
}catch (e19667){var ex__13786__auto__ = e19667;
var statearr_19668_20873 = state_19543;
(statearr_19668_20873[(2)] = ex__13786__auto__);


if(cljs.core.seq((state_19543[(4)]))){
var statearr_19670_20874 = state_19543;
(statearr_19670_20874[(1)] = cljs.core.first((state_19543[(4)])));

} else {
throw ex__13786__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13784__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20875 = state_19543;
state_19543 = G__20875;
continue;
} else {
return ret_value__13784__auto__;
}
break;
}
});
cljs$core$async$state_machine__13783__auto__ = function(state_19543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13783__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13783__auto____1.call(this,state_19543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13783__auto____0;
cljs$core$async$state_machine__13783__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13783__auto____1;
return cljs$core$async$state_machine__13783__auto__;
})()
})();
var state__15124__auto__ = (function (){var statearr_19671 = f__15123__auto__();
(statearr_19671[(6)] = c__15122__auto___20841);

return statearr_19671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15124__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

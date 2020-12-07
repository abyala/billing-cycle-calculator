goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47049 = arguments.length;
switch (G__47049) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47050 = (function (f,blockable,meta47051){
this.f = f;
this.blockable = blockable;
this.meta47051 = meta47051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47052,meta47051__$1){
var self__ = this;
var _47052__$1 = this;
return (new cljs.core.async.t_cljs$core$async47050(self__.f,self__.blockable,meta47051__$1));
}));

(cljs.core.async.t_cljs$core$async47050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47052){
var self__ = this;
var _47052__$1 = this;
return self__.meta47051;
}));

(cljs.core.async.t_cljs$core$async47050.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47050.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47051","meta47051",216579124,null)], null);
}));

(cljs.core.async.t_cljs$core$async47050.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47050.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47050");

(cljs.core.async.t_cljs$core$async47050.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47050");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47050.
 */
cljs.core.async.__GT_t_cljs$core$async47050 = (function cljs$core$async$__GT_t_cljs$core$async47050(f__$1,blockable__$1,meta47051){
return (new cljs.core.async.t_cljs$core$async47050(f__$1,blockable__$1,meta47051));
});

}

return (new cljs.core.async.t_cljs$core$async47050(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47060 = arguments.length;
switch (G__47060) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47104 = arguments.length;
switch (G__47104) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__47112 = arguments.length;
switch (G__47112) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_49425 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49425) : fn1.call(null,val_49425));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49425) : fn1.call(null,val_49425));
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
var G__47116 = arguments.length;
switch (G__47116) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___49433 = n;
var x_49434 = (0);
while(true){
if((x_49434 < n__4613__auto___49433)){
(a[x_49434] = x_49434);

var G__49435 = (x_49434 + (1));
x_49434 = G__49435;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47120 = (function (flag,meta47121){
this.flag = flag;
this.meta47121 = meta47121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47122,meta47121__$1){
var self__ = this;
var _47122__$1 = this;
return (new cljs.core.async.t_cljs$core$async47120(self__.flag,meta47121__$1));
}));

(cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47122){
var self__ = this;
var _47122__$1 = this;
return self__.meta47121;
}));

(cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47121","meta47121",1875214580,null)], null);
}));

(cljs.core.async.t_cljs$core$async47120.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47120");

(cljs.core.async.t_cljs$core$async47120.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47120");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47120.
 */
cljs.core.async.__GT_t_cljs$core$async47120 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47120(flag__$1,meta47121){
return (new cljs.core.async.t_cljs$core$async47120(flag__$1,meta47121));
});

}

return (new cljs.core.async.t_cljs$core$async47120(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47134 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47134 = (function (flag,cb,meta47135){
this.flag = flag;
this.cb = cb;
this.meta47135 = meta47135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47136,meta47135__$1){
var self__ = this;
var _47136__$1 = this;
return (new cljs.core.async.t_cljs$core$async47134(self__.flag,self__.cb,meta47135__$1));
}));

(cljs.core.async.t_cljs$core$async47134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47136){
var self__ = this;
var _47136__$1 = this;
return self__.meta47135;
}));

(cljs.core.async.t_cljs$core$async47134.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47134.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47134.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47134.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47135","meta47135",-1343149161,null)], null);
}));

(cljs.core.async.t_cljs$core$async47134.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47134");

(cljs.core.async.t_cljs$core$async47134.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47134");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47134.
 */
cljs.core.async.__GT_t_cljs$core$async47134 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47134(flag__$1,cb__$1,meta47135){
return (new cljs.core.async.t_cljs$core$async47134(flag__$1,cb__$1,meta47135));
});

}

return (new cljs.core.async.t_cljs$core$async47134(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47139_SHARP_){
var G__47141 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47139_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47141) : fret.call(null,G__47141));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47140_SHARP_){
var G__47142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47140_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47142) : fret.call(null,G__47142));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49444 = (i + (1));
i = G__49444;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___49448 = arguments.length;
var i__4737__auto___49450 = (0);
while(true){
if((i__4737__auto___49450 < len__4736__auto___49448)){
args__4742__auto__.push((arguments[i__4737__auto___49450]));

var G__49452 = (i__4737__auto___49450 + (1));
i__4737__auto___49450 = G__49452;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47149){
var map__47150 = p__47149;
var map__47150__$1 = (((((!((map__47150 == null))))?(((((map__47150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47150):map__47150);
var opts = map__47150__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47147){
var G__47148 = cljs.core.first(seq47147);
var seq47147__$1 = cljs.core.next(seq47147);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47148,seq47147__$1);
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
var G__47157 = arguments.length;
switch (G__47157) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__46965__auto___49458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_47217){
var state_val_47218 = (state_47217[(1)]);
if((state_val_47218 === (7))){
var inst_47204 = (state_47217[(2)]);
var state_47217__$1 = state_47217;
var statearr_47233_49459 = state_47217__$1;
(statearr_47233_49459[(2)] = inst_47204);

(statearr_47233_49459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47218 === (1))){
var state_47217__$1 = state_47217;
var statearr_47234_49460 = state_47217__$1;
(statearr_47234_49460[(2)] = null);

(statearr_47234_49460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47218 === (4))){
var inst_47169 = (state_47217[(7)]);
var inst_47169__$1 = (state_47217[(2)]);
var inst_47179 = (inst_47169__$1 == null);
var state_47217__$1 = (function (){var statearr_47235 = state_47217;
(statearr_47235[(7)] = inst_47169__$1);

return statearr_47235;
})();
if(cljs.core.truth_(inst_47179)){
var statearr_47236_49463 = state_47217__$1;
(statearr_47236_49463[(1)] = (5));

} else {
var statearr_47237_49464 = state_47217__$1;
(statearr_47237_49464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47218 === (13))){
var state_47217__$1 = state_47217;
var statearr_47238_49465 = state_47217__$1;
(statearr_47238_49465[(2)] = null);

(statearr_47238_49465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47218 === (6))){
var inst_47169 = (state_47217[(7)]);
var state_47217__$1 = state_47217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47217__$1,(11),to,inst_47169);
} else {
if((state_val_47218 === (3))){
var inst_47210 = (state_47217[(2)]);
var state_47217__$1 = state_47217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47217__$1,inst_47210);
} else {
if((state_val_47218 === (12))){
var state_47217__$1 = state_47217;
var statearr_47240_49466 = state_47217__$1;
(statearr_47240_49466[(2)] = null);

(statearr_47240_49466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47218 === (2))){
var state_47217__$1 = state_47217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47217__$1,(4),from);
} else {
if((state_val_47218 === (11))){
var inst_47193 = (state_47217[(2)]);
var state_47217__$1 = state_47217;
if(cljs.core.truth_(inst_47193)){
var statearr_47245_49467 = state_47217__$1;
(statearr_47245_49467[(1)] = (12));

} else {
var statearr_47246_49468 = state_47217__$1;
(statearr_47246_49468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47218 === (9))){
var state_47217__$1 = state_47217;
var statearr_47247_49469 = state_47217__$1;
(statearr_47247_49469[(2)] = null);

(statearr_47247_49469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47218 === (5))){
var state_47217__$1 = state_47217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47250_49470 = state_47217__$1;
(statearr_47250_49470[(1)] = (8));

} else {
var statearr_47251_49471 = state_47217__$1;
(statearr_47251_49471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47218 === (14))){
var inst_47202 = (state_47217[(2)]);
var state_47217__$1 = state_47217;
var statearr_47252_49472 = state_47217__$1;
(statearr_47252_49472[(2)] = inst_47202);

(statearr_47252_49472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47218 === (10))){
var inst_47189 = (state_47217[(2)]);
var state_47217__$1 = state_47217;
var statearr_47255_49474 = state_47217__$1;
(statearr_47255_49474[(2)] = inst_47189);

(statearr_47255_49474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47218 === (8))){
var inst_47186 = cljs.core.async.close_BANG_(to);
var state_47217__$1 = state_47217;
var statearr_47256_49476 = state_47217__$1;
(statearr_47256_49476[(2)] = inst_47186);

(statearr_47256_49476[(1)] = (10));


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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_47257 = [null,null,null,null,null,null,null,null];
(statearr_47257[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_47257[(1)] = (1));

return statearr_47257;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_47217){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_47217);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e47258){var ex__46563__auto__ = e47258;
var statearr_47259_49477 = state_47217;
(statearr_47259_49477[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_47217[(4)]))){
var statearr_47260_49478 = state_47217;
(statearr_47260_49478[(1)] = cljs.core.first((state_47217[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49479 = state_47217;
state_47217 = G__49479;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_47217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_47217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_47261 = f__46966__auto__();
(statearr_47261[(6)] = c__46965__auto___49458);

return statearr_47261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
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
var process = (function (p__47265){
var vec__47267 = p__47265;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47267,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47267,(1),null);
var job = vec__47267;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46965__auto___49480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_47282){
var state_val_47283 = (state_47282[(1)]);
if((state_val_47283 === (1))){
var state_47282__$1 = state_47282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47282__$1,(2),res,v);
} else {
if((state_val_47283 === (2))){
var inst_47277 = (state_47282[(2)]);
var inst_47279 = cljs.core.async.close_BANG_(res);
var state_47282__$1 = (function (){var statearr_47301 = state_47282;
(statearr_47301[(7)] = inst_47277);

return statearr_47301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47282__$1,inst_47279);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0 = (function (){
var statearr_47302 = [null,null,null,null,null,null,null,null];
(statearr_47302[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__);

(statearr_47302[(1)] = (1));

return statearr_47302;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1 = (function (state_47282){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_47282);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e47303){var ex__46563__auto__ = e47303;
var statearr_47304_49483 = state_47282;
(statearr_47304_49483[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_47282[(4)]))){
var statearr_47305_49484 = state_47282;
(statearr_47305_49484[(1)] = cljs.core.first((state_47282[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49485 = state_47282;
state_47282 = G__49485;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__ = function(state_47282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1.call(this,state_47282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_47310 = f__46966__auto__();
(statearr_47310[(6)] = c__46965__auto___49480);

return statearr_47310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47312){
var vec__47314 = p__47312;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47314,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47314,(1),null);
var job = vec__47314;
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
var n__4613__auto___49486 = n;
var __49487 = (0);
while(true){
if((__49487 < n__4613__auto___49486)){
var G__47317_49488 = type;
var G__47317_49489__$1 = (((G__47317_49488 instanceof cljs.core.Keyword))?G__47317_49488.fqn:null);
switch (G__47317_49489__$1) {
case "compute":
var c__46965__auto___49491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49487,c__46965__auto___49491,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async){
return (function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = ((function (__49487,c__46965__auto___49491,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async){
return (function (state_47331){
var state_val_47332 = (state_47331[(1)]);
if((state_val_47332 === (1))){
var state_47331__$1 = state_47331;
var statearr_47337_49494 = state_47331__$1;
(statearr_47337_49494[(2)] = null);

(statearr_47337_49494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (2))){
var state_47331__$1 = state_47331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47331__$1,(4),jobs);
} else {
if((state_val_47332 === (3))){
var inst_47329 = (state_47331[(2)]);
var state_47331__$1 = state_47331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47331__$1,inst_47329);
} else {
if((state_val_47332 === (4))){
var inst_47321 = (state_47331[(2)]);
var inst_47322 = process(inst_47321);
var state_47331__$1 = state_47331;
if(cljs.core.truth_(inst_47322)){
var statearr_47339_49495 = state_47331__$1;
(statearr_47339_49495[(1)] = (5));

} else {
var statearr_47340_49497 = state_47331__$1;
(statearr_47340_49497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (5))){
var state_47331__$1 = state_47331;
var statearr_47346_49498 = state_47331__$1;
(statearr_47346_49498[(2)] = null);

(statearr_47346_49498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (6))){
var state_47331__$1 = state_47331;
var statearr_47347_49499 = state_47331__$1;
(statearr_47347_49499[(2)] = null);

(statearr_47347_49499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47332 === (7))){
var inst_47327 = (state_47331[(2)]);
var state_47331__$1 = state_47331;
var statearr_47348_49504 = state_47331__$1;
(statearr_47348_49504[(2)] = inst_47327);

(statearr_47348_49504[(1)] = (3));


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
});})(__49487,c__46965__auto___49491,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async))
;
return ((function (__49487,switch__46559__auto__,c__46965__auto___49491,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0 = (function (){
var statearr_47349 = [null,null,null,null,null,null,null];
(statearr_47349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__);

(statearr_47349[(1)] = (1));

return statearr_47349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1 = (function (state_47331){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_47331);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e47354){var ex__46563__auto__ = e47354;
var statearr_47355_49505 = state_47331;
(statearr_47355_49505[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_47331[(4)]))){
var statearr_47357_49506 = state_47331;
(statearr_47357_49506[(1)] = cljs.core.first((state_47331[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49507 = state_47331;
state_47331 = G__49507;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__ = function(state_47331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1.call(this,state_47331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__;
})()
;})(__49487,switch__46559__auto__,c__46965__auto___49491,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async))
})();
var state__46967__auto__ = (function (){var statearr_47370 = f__46966__auto__();
(statearr_47370[(6)] = c__46965__auto___49491);

return statearr_47370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
});})(__49487,c__46965__auto___49491,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async))
);


break;
case "async":
var c__46965__auto___49508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49487,c__46965__auto___49508,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async){
return (function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = ((function (__49487,c__46965__auto___49508,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async){
return (function (state_47387){
var state_val_47388 = (state_47387[(1)]);
if((state_val_47388 === (1))){
var state_47387__$1 = state_47387;
var statearr_47396_49509 = state_47387__$1;
(statearr_47396_49509[(2)] = null);

(statearr_47396_49509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47388 === (2))){
var state_47387__$1 = state_47387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47387__$1,(4),jobs);
} else {
if((state_val_47388 === (3))){
var inst_47385 = (state_47387[(2)]);
var state_47387__$1 = state_47387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47387__$1,inst_47385);
} else {
if((state_val_47388 === (4))){
var inst_47377 = (state_47387[(2)]);
var inst_47378 = async(inst_47377);
var state_47387__$1 = state_47387;
if(cljs.core.truth_(inst_47378)){
var statearr_47409_49518 = state_47387__$1;
(statearr_47409_49518[(1)] = (5));

} else {
var statearr_47411_49519 = state_47387__$1;
(statearr_47411_49519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47388 === (5))){
var state_47387__$1 = state_47387;
var statearr_47416_49520 = state_47387__$1;
(statearr_47416_49520[(2)] = null);

(statearr_47416_49520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47388 === (6))){
var state_47387__$1 = state_47387;
var statearr_47417_49521 = state_47387__$1;
(statearr_47417_49521[(2)] = null);

(statearr_47417_49521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47388 === (7))){
var inst_47383 = (state_47387[(2)]);
var state_47387__$1 = state_47387;
var statearr_47418_49522 = state_47387__$1;
(statearr_47418_49522[(2)] = inst_47383);

(statearr_47418_49522[(1)] = (3));


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
});})(__49487,c__46965__auto___49508,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async))
;
return ((function (__49487,switch__46559__auto__,c__46965__auto___49508,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0 = (function (){
var statearr_47431 = [null,null,null,null,null,null,null];
(statearr_47431[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__);

(statearr_47431[(1)] = (1));

return statearr_47431;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1 = (function (state_47387){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_47387);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e47439){var ex__46563__auto__ = e47439;
var statearr_47441_49523 = state_47387;
(statearr_47441_49523[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_47387[(4)]))){
var statearr_47446_49524 = state_47387;
(statearr_47446_49524[(1)] = cljs.core.first((state_47387[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49525 = state_47387;
state_47387 = G__49525;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__ = function(state_47387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1.call(this,state_47387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__;
})()
;})(__49487,switch__46559__auto__,c__46965__auto___49508,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async))
})();
var state__46967__auto__ = (function (){var statearr_47447 = f__46966__auto__();
(statearr_47447[(6)] = c__46965__auto___49508);

return statearr_47447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
});})(__49487,c__46965__auto___49508,G__47317_49488,G__47317_49489__$1,n__4613__auto___49486,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47317_49489__$1)].join('')));

}

var G__49526 = (__49487 + (1));
__49487 = G__49526;
continue;
} else {
}
break;
}

var c__46965__auto___49528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_47476){
var state_val_47477 = (state_47476[(1)]);
if((state_val_47477 === (7))){
var inst_47472 = (state_47476[(2)]);
var state_47476__$1 = state_47476;
var statearr_47484_49529 = state_47476__$1;
(statearr_47484_49529[(2)] = inst_47472);

(statearr_47484_49529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (1))){
var state_47476__$1 = state_47476;
var statearr_47486_49530 = state_47476__$1;
(statearr_47486_49530[(2)] = null);

(statearr_47486_49530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (4))){
var inst_47454 = (state_47476[(7)]);
var inst_47454__$1 = (state_47476[(2)]);
var inst_47456 = (inst_47454__$1 == null);
var state_47476__$1 = (function (){var statearr_47492 = state_47476;
(statearr_47492[(7)] = inst_47454__$1);

return statearr_47492;
})();
if(cljs.core.truth_(inst_47456)){
var statearr_47497_49531 = state_47476__$1;
(statearr_47497_49531[(1)] = (5));

} else {
var statearr_47498_49532 = state_47476__$1;
(statearr_47498_49532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (6))){
var inst_47460 = (state_47476[(8)]);
var inst_47454 = (state_47476[(7)]);
var inst_47460__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47463 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47464 = [inst_47454,inst_47460__$1];
var inst_47465 = (new cljs.core.PersistentVector(null,2,(5),inst_47463,inst_47464,null));
var state_47476__$1 = (function (){var statearr_47499 = state_47476;
(statearr_47499[(8)] = inst_47460__$1);

return statearr_47499;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47476__$1,(8),jobs,inst_47465);
} else {
if((state_val_47477 === (3))){
var inst_47474 = (state_47476[(2)]);
var state_47476__$1 = state_47476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47476__$1,inst_47474);
} else {
if((state_val_47477 === (2))){
var state_47476__$1 = state_47476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47476__$1,(4),from);
} else {
if((state_val_47477 === (9))){
var inst_47469 = (state_47476[(2)]);
var state_47476__$1 = (function (){var statearr_47506 = state_47476;
(statearr_47506[(9)] = inst_47469);

return statearr_47506;
})();
var statearr_47508_49537 = state_47476__$1;
(statearr_47508_49537[(2)] = null);

(statearr_47508_49537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (5))){
var inst_47458 = cljs.core.async.close_BANG_(jobs);
var state_47476__$1 = state_47476;
var statearr_47511_49539 = state_47476__$1;
(statearr_47511_49539[(2)] = inst_47458);

(statearr_47511_49539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (8))){
var inst_47460 = (state_47476[(8)]);
var inst_47467 = (state_47476[(2)]);
var state_47476__$1 = (function (){var statearr_47512 = state_47476;
(statearr_47512[(10)] = inst_47467);

return statearr_47512;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47476__$1,(9),results,inst_47460);
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
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0 = (function (){
var statearr_47513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__);

(statearr_47513[(1)] = (1));

return statearr_47513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1 = (function (state_47476){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_47476);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e47516){var ex__46563__auto__ = e47516;
var statearr_47517_49540 = state_47476;
(statearr_47517_49540[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_47476[(4)]))){
var statearr_47518_49541 = state_47476;
(statearr_47518_49541[(1)] = cljs.core.first((state_47476[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49542 = state_47476;
state_47476 = G__49542;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__ = function(state_47476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1.call(this,state_47476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_47519 = f__46966__auto__();
(statearr_47519[(6)] = c__46965__auto___49528);

return statearr_47519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));


var c__46965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_47557){
var state_val_47558 = (state_47557[(1)]);
if((state_val_47558 === (7))){
var inst_47553 = (state_47557[(2)]);
var state_47557__$1 = state_47557;
var statearr_47560_49547 = state_47557__$1;
(statearr_47560_49547[(2)] = inst_47553);

(statearr_47560_49547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (20))){
var state_47557__$1 = state_47557;
var statearr_47561_49548 = state_47557__$1;
(statearr_47561_49548[(2)] = null);

(statearr_47561_49548[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (1))){
var state_47557__$1 = state_47557;
var statearr_47562_49549 = state_47557__$1;
(statearr_47562_49549[(2)] = null);

(statearr_47562_49549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (4))){
var inst_47522 = (state_47557[(7)]);
var inst_47522__$1 = (state_47557[(2)]);
var inst_47523 = (inst_47522__$1 == null);
var state_47557__$1 = (function (){var statearr_47563 = state_47557;
(statearr_47563[(7)] = inst_47522__$1);

return statearr_47563;
})();
if(cljs.core.truth_(inst_47523)){
var statearr_47565_49557 = state_47557__$1;
(statearr_47565_49557[(1)] = (5));

} else {
var statearr_47567_49558 = state_47557__$1;
(statearr_47567_49558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (15))){
var inst_47535 = (state_47557[(8)]);
var state_47557__$1 = state_47557;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47557__$1,(18),to,inst_47535);
} else {
if((state_val_47558 === (21))){
var inst_47548 = (state_47557[(2)]);
var state_47557__$1 = state_47557;
var statearr_47569_49559 = state_47557__$1;
(statearr_47569_49559[(2)] = inst_47548);

(statearr_47569_49559[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (13))){
var inst_47550 = (state_47557[(2)]);
var state_47557__$1 = (function (){var statearr_47570 = state_47557;
(statearr_47570[(9)] = inst_47550);

return statearr_47570;
})();
var statearr_47571_49564 = state_47557__$1;
(statearr_47571_49564[(2)] = null);

(statearr_47571_49564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (6))){
var inst_47522 = (state_47557[(7)]);
var state_47557__$1 = state_47557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47557__$1,(11),inst_47522);
} else {
if((state_val_47558 === (17))){
var inst_47543 = (state_47557[(2)]);
var state_47557__$1 = state_47557;
if(cljs.core.truth_(inst_47543)){
var statearr_47580_49565 = state_47557__$1;
(statearr_47580_49565[(1)] = (19));

} else {
var statearr_47581_49569 = state_47557__$1;
(statearr_47581_49569[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (3))){
var inst_47555 = (state_47557[(2)]);
var state_47557__$1 = state_47557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47557__$1,inst_47555);
} else {
if((state_val_47558 === (12))){
var inst_47532 = (state_47557[(10)]);
var state_47557__$1 = state_47557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47557__$1,(14),inst_47532);
} else {
if((state_val_47558 === (2))){
var state_47557__$1 = state_47557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47557__$1,(4),results);
} else {
if((state_val_47558 === (19))){
var state_47557__$1 = state_47557;
var statearr_47598_49570 = state_47557__$1;
(statearr_47598_49570[(2)] = null);

(statearr_47598_49570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (11))){
var inst_47532 = (state_47557[(2)]);
var state_47557__$1 = (function (){var statearr_47600 = state_47557;
(statearr_47600[(10)] = inst_47532);

return statearr_47600;
})();
var statearr_47601_49575 = state_47557__$1;
(statearr_47601_49575[(2)] = null);

(statearr_47601_49575[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (9))){
var state_47557__$1 = state_47557;
var statearr_47602_49578 = state_47557__$1;
(statearr_47602_49578[(2)] = null);

(statearr_47602_49578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (5))){
var state_47557__$1 = state_47557;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47603_49579 = state_47557__$1;
(statearr_47603_49579[(1)] = (8));

} else {
var statearr_47604_49580 = state_47557__$1;
(statearr_47604_49580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (14))){
var inst_47535 = (state_47557[(8)]);
var inst_47535__$1 = (state_47557[(2)]);
var inst_47536 = (inst_47535__$1 == null);
var inst_47537 = cljs.core.not(inst_47536);
var state_47557__$1 = (function (){var statearr_47605 = state_47557;
(statearr_47605[(8)] = inst_47535__$1);

return statearr_47605;
})();
if(inst_47537){
var statearr_47607_49588 = state_47557__$1;
(statearr_47607_49588[(1)] = (15));

} else {
var statearr_47608_49589 = state_47557__$1;
(statearr_47608_49589[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (16))){
var state_47557__$1 = state_47557;
var statearr_47609_49593 = state_47557__$1;
(statearr_47609_49593[(2)] = false);

(statearr_47609_49593[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (10))){
var inst_47529 = (state_47557[(2)]);
var state_47557__$1 = state_47557;
var statearr_47610_49594 = state_47557__$1;
(statearr_47610_49594[(2)] = inst_47529);

(statearr_47610_49594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (18))){
var inst_47540 = (state_47557[(2)]);
var state_47557__$1 = state_47557;
var statearr_47611_49595 = state_47557__$1;
(statearr_47611_49595[(2)] = inst_47540);

(statearr_47611_49595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47558 === (8))){
var inst_47526 = cljs.core.async.close_BANG_(to);
var state_47557__$1 = state_47557;
var statearr_47613_49596 = state_47557__$1;
(statearr_47613_49596[(2)] = inst_47526);

(statearr_47613_49596[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0 = (function (){
var statearr_47617 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__);

(statearr_47617[(1)] = (1));

return statearr_47617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1 = (function (state_47557){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_47557);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e47618){var ex__46563__auto__ = e47618;
var statearr_47619_49603 = state_47557;
(statearr_47619_49603[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_47557[(4)]))){
var statearr_47620_49604 = state_47557;
(statearr_47620_49604[(1)] = cljs.core.first((state_47557[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49605 = state_47557;
state_47557 = G__49605;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__ = function(state_47557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1.call(this,state_47557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46560__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_47621 = f__46966__auto__();
(statearr_47621[(6)] = c__46965__auto__);

return statearr_47621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));

return c__46965__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47623 = arguments.length;
switch (G__47623) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__47625 = arguments.length;
switch (G__47625) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__47630 = arguments.length;
switch (G__47630) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__46965__auto___49618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_47657){
var state_val_47658 = (state_47657[(1)]);
if((state_val_47658 === (7))){
var inst_47653 = (state_47657[(2)]);
var state_47657__$1 = state_47657;
var statearr_47659_49619 = state_47657__$1;
(statearr_47659_49619[(2)] = inst_47653);

(statearr_47659_49619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47658 === (1))){
var state_47657__$1 = state_47657;
var statearr_47660_49620 = state_47657__$1;
(statearr_47660_49620[(2)] = null);

(statearr_47660_49620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47658 === (4))){
var inst_47634 = (state_47657[(7)]);
var inst_47634__$1 = (state_47657[(2)]);
var inst_47635 = (inst_47634__$1 == null);
var state_47657__$1 = (function (){var statearr_47661 = state_47657;
(statearr_47661[(7)] = inst_47634__$1);

return statearr_47661;
})();
if(cljs.core.truth_(inst_47635)){
var statearr_47662_49621 = state_47657__$1;
(statearr_47662_49621[(1)] = (5));

} else {
var statearr_47663_49622 = state_47657__$1;
(statearr_47663_49622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47658 === (13))){
var state_47657__$1 = state_47657;
var statearr_47668_49625 = state_47657__$1;
(statearr_47668_49625[(2)] = null);

(statearr_47668_49625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47658 === (6))){
var inst_47634 = (state_47657[(7)]);
var inst_47640 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47634) : p.call(null,inst_47634));
var state_47657__$1 = state_47657;
if(cljs.core.truth_(inst_47640)){
var statearr_47673_49626 = state_47657__$1;
(statearr_47673_49626[(1)] = (9));

} else {
var statearr_47678_49627 = state_47657__$1;
(statearr_47678_49627[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47658 === (3))){
var inst_47655 = (state_47657[(2)]);
var state_47657__$1 = state_47657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47657__$1,inst_47655);
} else {
if((state_val_47658 === (12))){
var state_47657__$1 = state_47657;
var statearr_47680_49628 = state_47657__$1;
(statearr_47680_49628[(2)] = null);

(statearr_47680_49628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47658 === (2))){
var state_47657__$1 = state_47657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47657__$1,(4),ch);
} else {
if((state_val_47658 === (11))){
var inst_47634 = (state_47657[(7)]);
var inst_47644 = (state_47657[(2)]);
var state_47657__$1 = state_47657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47657__$1,(8),inst_47644,inst_47634);
} else {
if((state_val_47658 === (9))){
var state_47657__$1 = state_47657;
var statearr_47692_49629 = state_47657__$1;
(statearr_47692_49629[(2)] = tc);

(statearr_47692_49629[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47658 === (5))){
var inst_47637 = cljs.core.async.close_BANG_(tc);
var inst_47638 = cljs.core.async.close_BANG_(fc);
var state_47657__$1 = (function (){var statearr_47693 = state_47657;
(statearr_47693[(8)] = inst_47637);

return statearr_47693;
})();
var statearr_47694_49630 = state_47657__$1;
(statearr_47694_49630[(2)] = inst_47638);

(statearr_47694_49630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47658 === (14))){
var inst_47651 = (state_47657[(2)]);
var state_47657__$1 = state_47657;
var statearr_47695_49631 = state_47657__$1;
(statearr_47695_49631[(2)] = inst_47651);

(statearr_47695_49631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47658 === (10))){
var state_47657__$1 = state_47657;
var statearr_47696_49632 = state_47657__$1;
(statearr_47696_49632[(2)] = fc);

(statearr_47696_49632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47658 === (8))){
var inst_47646 = (state_47657[(2)]);
var state_47657__$1 = state_47657;
if(cljs.core.truth_(inst_47646)){
var statearr_47700_49633 = state_47657__$1;
(statearr_47700_49633[(1)] = (12));

} else {
var statearr_47701_49634 = state_47657__$1;
(statearr_47701_49634[(1)] = (13));

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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_47702 = [null,null,null,null,null,null,null,null,null];
(statearr_47702[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_47702[(1)] = (1));

return statearr_47702;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_47657){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_47657);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e47703){var ex__46563__auto__ = e47703;
var statearr_47705_49635 = state_47657;
(statearr_47705_49635[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_47657[(4)]))){
var statearr_47707_49636 = state_47657;
(statearr_47707_49636[(1)] = cljs.core.first((state_47657[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49637 = state_47657;
state_47657 = G__49637;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_47657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_47657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_47709 = f__46966__auto__();
(statearr_47709[(6)] = c__46965__auto___49618);

return statearr_47709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
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
var c__46965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_47735){
var state_val_47736 = (state_47735[(1)]);
if((state_val_47736 === (7))){
var inst_47731 = (state_47735[(2)]);
var state_47735__$1 = state_47735;
var statearr_47740_49638 = state_47735__$1;
(statearr_47740_49638[(2)] = inst_47731);

(statearr_47740_49638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (1))){
var inst_47713 = init;
var inst_47714 = inst_47713;
var state_47735__$1 = (function (){var statearr_47741 = state_47735;
(statearr_47741[(7)] = inst_47714);

return statearr_47741;
})();
var statearr_47744_49639 = state_47735__$1;
(statearr_47744_49639[(2)] = null);

(statearr_47744_49639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (4))){
var inst_47717 = (state_47735[(8)]);
var inst_47717__$1 = (state_47735[(2)]);
var inst_47718 = (inst_47717__$1 == null);
var state_47735__$1 = (function (){var statearr_47746 = state_47735;
(statearr_47746[(8)] = inst_47717__$1);

return statearr_47746;
})();
if(cljs.core.truth_(inst_47718)){
var statearr_47747_49643 = state_47735__$1;
(statearr_47747_49643[(1)] = (5));

} else {
var statearr_47748_49644 = state_47735__$1;
(statearr_47748_49644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (6))){
var inst_47714 = (state_47735[(7)]);
var inst_47721 = (state_47735[(9)]);
var inst_47717 = (state_47735[(8)]);
var inst_47721__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47714,inst_47717) : f.call(null,inst_47714,inst_47717));
var inst_47722 = cljs.core.reduced_QMARK_(inst_47721__$1);
var state_47735__$1 = (function (){var statearr_47752 = state_47735;
(statearr_47752[(9)] = inst_47721__$1);

return statearr_47752;
})();
if(inst_47722){
var statearr_47753_49645 = state_47735__$1;
(statearr_47753_49645[(1)] = (8));

} else {
var statearr_47754_49646 = state_47735__$1;
(statearr_47754_49646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (3))){
var inst_47733 = (state_47735[(2)]);
var state_47735__$1 = state_47735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47735__$1,inst_47733);
} else {
if((state_val_47736 === (2))){
var state_47735__$1 = state_47735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47735__$1,(4),ch);
} else {
if((state_val_47736 === (9))){
var inst_47721 = (state_47735[(9)]);
var inst_47714 = inst_47721;
var state_47735__$1 = (function (){var statearr_47757 = state_47735;
(statearr_47757[(7)] = inst_47714);

return statearr_47757;
})();
var statearr_47758_49650 = state_47735__$1;
(statearr_47758_49650[(2)] = null);

(statearr_47758_49650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (5))){
var inst_47714 = (state_47735[(7)]);
var state_47735__$1 = state_47735;
var statearr_47761_49652 = state_47735__$1;
(statearr_47761_49652[(2)] = inst_47714);

(statearr_47761_49652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (10))){
var inst_47729 = (state_47735[(2)]);
var state_47735__$1 = state_47735;
var statearr_47763_49653 = state_47735__$1;
(statearr_47763_49653[(2)] = inst_47729);

(statearr_47763_49653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47736 === (8))){
var inst_47721 = (state_47735[(9)]);
var inst_47725 = cljs.core.deref(inst_47721);
var state_47735__$1 = state_47735;
var statearr_47767_49654 = state_47735__$1;
(statearr_47767_49654[(2)] = inst_47725);

(statearr_47767_49654[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__46560__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46560__auto____0 = (function (){
var statearr_47771 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47771[(0)] = cljs$core$async$reduce_$_state_machine__46560__auto__);

(statearr_47771[(1)] = (1));

return statearr_47771;
});
var cljs$core$async$reduce_$_state_machine__46560__auto____1 = (function (state_47735){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_47735);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e47772){var ex__46563__auto__ = e47772;
var statearr_47773_49656 = state_47735;
(statearr_47773_49656[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_47735[(4)]))){
var statearr_47774_49657 = state_47735;
(statearr_47774_49657[(1)] = cljs.core.first((state_47735[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49659 = state_47735;
state_47735 = G__49659;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46560__auto__ = function(state_47735){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46560__auto____1.call(this,state_47735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46560__auto____0;
cljs$core$async$reduce_$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46560__auto____1;
return cljs$core$async$reduce_$_state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_47775 = f__46966__auto__();
(statearr_47775[(6)] = c__46965__auto__);

return statearr_47775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));

return c__46965__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_47787){
var state_val_47788 = (state_47787[(1)]);
if((state_val_47788 === (1))){
var inst_47782 = cljs.core.async.reduce(f__$1,init,ch);
var state_47787__$1 = state_47787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47787__$1,(2),inst_47782);
} else {
if((state_val_47788 === (2))){
var inst_47784 = (state_47787[(2)]);
var inst_47785 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47784) : f__$1.call(null,inst_47784));
var state_47787__$1 = state_47787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47787__$1,inst_47785);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46560__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46560__auto____0 = (function (){
var statearr_47792 = [null,null,null,null,null,null,null];
(statearr_47792[(0)] = cljs$core$async$transduce_$_state_machine__46560__auto__);

(statearr_47792[(1)] = (1));

return statearr_47792;
});
var cljs$core$async$transduce_$_state_machine__46560__auto____1 = (function (state_47787){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_47787);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e47793){var ex__46563__auto__ = e47793;
var statearr_47794_49660 = state_47787;
(statearr_47794_49660[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_47787[(4)]))){
var statearr_47795_49661 = state_47787;
(statearr_47795_49661[(1)] = cljs.core.first((state_47787[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49662 = state_47787;
state_47787 = G__49662;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46560__auto__ = function(state_47787){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46560__auto____1.call(this,state_47787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46560__auto____0;
cljs$core$async$transduce_$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46560__auto____1;
return cljs$core$async$transduce_$_state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_47796 = f__46966__auto__();
(statearr_47796[(6)] = c__46965__auto__);

return statearr_47796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));

return c__46965__auto__;
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
var G__47801 = arguments.length;
switch (G__47801) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__46965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_47832){
var state_val_47833 = (state_47832[(1)]);
if((state_val_47833 === (7))){
var inst_47811 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47839_49668 = state_47832__$1;
(statearr_47839_49668[(2)] = inst_47811);

(statearr_47839_49668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (1))){
var inst_47805 = cljs.core.seq(coll);
var inst_47806 = inst_47805;
var state_47832__$1 = (function (){var statearr_47840 = state_47832;
(statearr_47840[(7)] = inst_47806);

return statearr_47840;
})();
var statearr_47841_49672 = state_47832__$1;
(statearr_47841_49672[(2)] = null);

(statearr_47841_49672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (4))){
var inst_47806 = (state_47832[(7)]);
var inst_47809 = cljs.core.first(inst_47806);
var state_47832__$1 = state_47832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47832__$1,(7),ch,inst_47809);
} else {
if((state_val_47833 === (13))){
var inst_47826 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47842_49675 = state_47832__$1;
(statearr_47842_49675[(2)] = inst_47826);

(statearr_47842_49675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (6))){
var inst_47814 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47814)){
var statearr_47843_49676 = state_47832__$1;
(statearr_47843_49676[(1)] = (8));

} else {
var statearr_47844_49677 = state_47832__$1;
(statearr_47844_49677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (3))){
var inst_47830 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47832__$1,inst_47830);
} else {
if((state_val_47833 === (12))){
var state_47832__$1 = state_47832;
var statearr_47845_49681 = state_47832__$1;
(statearr_47845_49681[(2)] = null);

(statearr_47845_49681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (2))){
var inst_47806 = (state_47832[(7)]);
var state_47832__$1 = state_47832;
if(cljs.core.truth_(inst_47806)){
var statearr_47846_49686 = state_47832__$1;
(statearr_47846_49686[(1)] = (4));

} else {
var statearr_47847_49687 = state_47832__$1;
(statearr_47847_49687[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (11))){
var inst_47823 = cljs.core.async.close_BANG_(ch);
var state_47832__$1 = state_47832;
var statearr_47848_49688 = state_47832__$1;
(statearr_47848_49688[(2)] = inst_47823);

(statearr_47848_49688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (9))){
var state_47832__$1 = state_47832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47849_49695 = state_47832__$1;
(statearr_47849_49695[(1)] = (11));

} else {
var statearr_47850_49696 = state_47832__$1;
(statearr_47850_49696[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (5))){
var inst_47806 = (state_47832[(7)]);
var state_47832__$1 = state_47832;
var statearr_47851_49697 = state_47832__$1;
(statearr_47851_49697[(2)] = inst_47806);

(statearr_47851_49697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (10))){
var inst_47828 = (state_47832[(2)]);
var state_47832__$1 = state_47832;
var statearr_47852_49698 = state_47832__$1;
(statearr_47852_49698[(2)] = inst_47828);

(statearr_47852_49698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47833 === (8))){
var inst_47806 = (state_47832[(7)]);
var inst_47818 = cljs.core.next(inst_47806);
var inst_47806__$1 = inst_47818;
var state_47832__$1 = (function (){var statearr_47854 = state_47832;
(statearr_47854[(7)] = inst_47806__$1);

return statearr_47854;
})();
var statearr_47856_49699 = state_47832__$1;
(statearr_47856_49699[(2)] = null);

(statearr_47856_49699[(1)] = (2));


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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_47858 = [null,null,null,null,null,null,null,null];
(statearr_47858[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_47858[(1)] = (1));

return statearr_47858;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_47832){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_47832);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e47859){var ex__46563__auto__ = e47859;
var statearr_47860_49700 = state_47832;
(statearr_47860_49700[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_47832[(4)]))){
var statearr_47861_49701 = state_47832;
(statearr_47861_49701[(1)] = cljs.core.first((state_47832[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49702 = state_47832;
state_47832 = G__49702;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_47832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_47832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_47862 = f__46966__auto__();
(statearr_47862[(6)] = c__46965__auto__);

return statearr_47862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));

return c__46965__auto__;
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
var G__47864 = arguments.length;
switch (G__47864) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var cljs$core$async$Mux$muxch_STAR_$dyn_49712 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_49712(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49715 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_49715(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49717 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_49717(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49729 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_49729(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47876 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47876 = (function (ch,cs,meta47877){
this.ch = ch;
this.cs = cs;
this.meta47877 = meta47877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47878,meta47877__$1){
var self__ = this;
var _47878__$1 = this;
return (new cljs.core.async.t_cljs$core$async47876(self__.ch,self__.cs,meta47877__$1));
}));

(cljs.core.async.t_cljs$core$async47876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47878){
var self__ = this;
var _47878__$1 = this;
return self__.meta47877;
}));

(cljs.core.async.t_cljs$core$async47876.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47876.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47876.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47876.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47876.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47876.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47877","meta47877",-1398478586,null)], null);
}));

(cljs.core.async.t_cljs$core$async47876.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47876");

(cljs.core.async.t_cljs$core$async47876.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async47876");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47876.
 */
cljs.core.async.__GT_t_cljs$core$async47876 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47876(ch__$1,cs__$1,meta47877){
return (new cljs.core.async.t_cljs$core$async47876(ch__$1,cs__$1,meta47877));
});

}

return (new cljs.core.async.t_cljs$core$async47876(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__46965__auto___49736 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_48028){
var state_val_48029 = (state_48028[(1)]);
if((state_val_48029 === (7))){
var inst_48024 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48030_49737 = state_48028__$1;
(statearr_48030_49737[(2)] = inst_48024);

(statearr_48030_49737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (20))){
var inst_47923 = (state_48028[(7)]);
var inst_47935 = cljs.core.first(inst_47923);
var inst_47936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47935,(0),null);
var inst_47937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47935,(1),null);
var state_48028__$1 = (function (){var statearr_48031 = state_48028;
(statearr_48031[(8)] = inst_47936);

return statearr_48031;
})();
if(cljs.core.truth_(inst_47937)){
var statearr_48034_49738 = state_48028__$1;
(statearr_48034_49738[(1)] = (22));

} else {
var statearr_48036_49739 = state_48028__$1;
(statearr_48036_49739[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (27))){
var inst_47972 = (state_48028[(9)]);
var inst_47889 = (state_48028[(10)]);
var inst_47965 = (state_48028[(11)]);
var inst_47967 = (state_48028[(12)]);
var inst_47972__$1 = cljs.core._nth(inst_47965,inst_47967);
var inst_47975 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47972__$1,inst_47889,done);
var state_48028__$1 = (function (){var statearr_48039 = state_48028;
(statearr_48039[(9)] = inst_47972__$1);

return statearr_48039;
})();
if(cljs.core.truth_(inst_47975)){
var statearr_48040_49740 = state_48028__$1;
(statearr_48040_49740[(1)] = (30));

} else {
var statearr_48042_49741 = state_48028__$1;
(statearr_48042_49741[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (1))){
var state_48028__$1 = state_48028;
var statearr_48043_49743 = state_48028__$1;
(statearr_48043_49743[(2)] = null);

(statearr_48043_49743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (24))){
var inst_47923 = (state_48028[(7)]);
var inst_47942 = (state_48028[(2)]);
var inst_47943 = cljs.core.next(inst_47923);
var inst_47898 = inst_47943;
var inst_47899 = null;
var inst_47900 = (0);
var inst_47901 = (0);
var state_48028__$1 = (function (){var statearr_48044 = state_48028;
(statearr_48044[(13)] = inst_47899);

(statearr_48044[(14)] = inst_47900);

(statearr_48044[(15)] = inst_47942);

(statearr_48044[(16)] = inst_47901);

(statearr_48044[(17)] = inst_47898);

return statearr_48044;
})();
var statearr_48045_49747 = state_48028__$1;
(statearr_48045_49747[(2)] = null);

(statearr_48045_49747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (39))){
var state_48028__$1 = state_48028;
var statearr_48053_49748 = state_48028__$1;
(statearr_48053_49748[(2)] = null);

(statearr_48053_49748[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (4))){
var inst_47889 = (state_48028[(10)]);
var inst_47889__$1 = (state_48028[(2)]);
var inst_47890 = (inst_47889__$1 == null);
var state_48028__$1 = (function (){var statearr_48055 = state_48028;
(statearr_48055[(10)] = inst_47889__$1);

return statearr_48055;
})();
if(cljs.core.truth_(inst_47890)){
var statearr_48056_49750 = state_48028__$1;
(statearr_48056_49750[(1)] = (5));

} else {
var statearr_48057_49752 = state_48028__$1;
(statearr_48057_49752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (15))){
var inst_47899 = (state_48028[(13)]);
var inst_47900 = (state_48028[(14)]);
var inst_47901 = (state_48028[(16)]);
var inst_47898 = (state_48028[(17)]);
var inst_47917 = (state_48028[(2)]);
var inst_47919 = (inst_47901 + (1));
var tmp48050 = inst_47899;
var tmp48051 = inst_47900;
var tmp48052 = inst_47898;
var inst_47898__$1 = tmp48052;
var inst_47899__$1 = tmp48050;
var inst_47900__$1 = tmp48051;
var inst_47901__$1 = inst_47919;
var state_48028__$1 = (function (){var statearr_48058 = state_48028;
(statearr_48058[(13)] = inst_47899__$1);

(statearr_48058[(14)] = inst_47900__$1);

(statearr_48058[(18)] = inst_47917);

(statearr_48058[(16)] = inst_47901__$1);

(statearr_48058[(17)] = inst_47898__$1);

return statearr_48058;
})();
var statearr_48062_49754 = state_48028__$1;
(statearr_48062_49754[(2)] = null);

(statearr_48062_49754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (21))){
var inst_47946 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48068_49755 = state_48028__$1;
(statearr_48068_49755[(2)] = inst_47946);

(statearr_48068_49755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (31))){
var inst_47972 = (state_48028[(9)]);
var inst_47978 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47972);
var state_48028__$1 = state_48028;
var statearr_48070_49756 = state_48028__$1;
(statearr_48070_49756[(2)] = inst_47978);

(statearr_48070_49756[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (32))){
var inst_47964 = (state_48028[(19)]);
var inst_47965 = (state_48028[(11)]);
var inst_47967 = (state_48028[(12)]);
var inst_47966 = (state_48028[(20)]);
var inst_47980 = (state_48028[(2)]);
var inst_47983 = (inst_47967 + (1));
var tmp48065 = inst_47964;
var tmp48066 = inst_47965;
var tmp48067 = inst_47966;
var inst_47964__$1 = tmp48065;
var inst_47965__$1 = tmp48066;
var inst_47966__$1 = tmp48067;
var inst_47967__$1 = inst_47983;
var state_48028__$1 = (function (){var statearr_48071 = state_48028;
(statearr_48071[(19)] = inst_47964__$1);

(statearr_48071[(21)] = inst_47980);

(statearr_48071[(11)] = inst_47965__$1);

(statearr_48071[(12)] = inst_47967__$1);

(statearr_48071[(20)] = inst_47966__$1);

return statearr_48071;
})();
var statearr_48073_49758 = state_48028__$1;
(statearr_48073_49758[(2)] = null);

(statearr_48073_49758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (40))){
var inst_47996 = (state_48028[(22)]);
var inst_48001 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47996);
var state_48028__$1 = state_48028;
var statearr_48076_49765 = state_48028__$1;
(statearr_48076_49765[(2)] = inst_48001);

(statearr_48076_49765[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (33))){
var inst_47987 = (state_48028[(23)]);
var inst_47989 = cljs.core.chunked_seq_QMARK_(inst_47987);
var state_48028__$1 = state_48028;
if(inst_47989){
var statearr_48077_49766 = state_48028__$1;
(statearr_48077_49766[(1)] = (36));

} else {
var statearr_48078_49767 = state_48028__$1;
(statearr_48078_49767[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (13))){
var inst_47910 = (state_48028[(24)]);
var inst_47914 = cljs.core.async.close_BANG_(inst_47910);
var state_48028__$1 = state_48028;
var statearr_48079_49768 = state_48028__$1;
(statearr_48079_49768[(2)] = inst_47914);

(statearr_48079_49768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (22))){
var inst_47936 = (state_48028[(8)]);
var inst_47939 = cljs.core.async.close_BANG_(inst_47936);
var state_48028__$1 = state_48028;
var statearr_48084_49771 = state_48028__$1;
(statearr_48084_49771[(2)] = inst_47939);

(statearr_48084_49771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (36))){
var inst_47987 = (state_48028[(23)]);
var inst_47991 = cljs.core.chunk_first(inst_47987);
var inst_47992 = cljs.core.chunk_rest(inst_47987);
var inst_47993 = cljs.core.count(inst_47991);
var inst_47964 = inst_47992;
var inst_47965 = inst_47991;
var inst_47966 = inst_47993;
var inst_47967 = (0);
var state_48028__$1 = (function (){var statearr_48085 = state_48028;
(statearr_48085[(19)] = inst_47964);

(statearr_48085[(11)] = inst_47965);

(statearr_48085[(12)] = inst_47967);

(statearr_48085[(20)] = inst_47966);

return statearr_48085;
})();
var statearr_48086_49772 = state_48028__$1;
(statearr_48086_49772[(2)] = null);

(statearr_48086_49772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (41))){
var inst_47987 = (state_48028[(23)]);
var inst_48003 = (state_48028[(2)]);
var inst_48004 = cljs.core.next(inst_47987);
var inst_47964 = inst_48004;
var inst_47965 = null;
var inst_47966 = (0);
var inst_47967 = (0);
var state_48028__$1 = (function (){var statearr_48087 = state_48028;
(statearr_48087[(19)] = inst_47964);

(statearr_48087[(11)] = inst_47965);

(statearr_48087[(25)] = inst_48003);

(statearr_48087[(12)] = inst_47967);

(statearr_48087[(20)] = inst_47966);

return statearr_48087;
})();
var statearr_48088_49773 = state_48028__$1;
(statearr_48088_49773[(2)] = null);

(statearr_48088_49773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (43))){
var state_48028__$1 = state_48028;
var statearr_48091_49774 = state_48028__$1;
(statearr_48091_49774[(2)] = null);

(statearr_48091_49774[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (29))){
var inst_48012 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48093_49775 = state_48028__$1;
(statearr_48093_49775[(2)] = inst_48012);

(statearr_48093_49775[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (44))){
var inst_48021 = (state_48028[(2)]);
var state_48028__$1 = (function (){var statearr_48094 = state_48028;
(statearr_48094[(26)] = inst_48021);

return statearr_48094;
})();
var statearr_48095_49776 = state_48028__$1;
(statearr_48095_49776[(2)] = null);

(statearr_48095_49776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (6))){
var inst_47956 = (state_48028[(27)]);
var inst_47955 = cljs.core.deref(cs);
var inst_47956__$1 = cljs.core.keys(inst_47955);
var inst_47957 = cljs.core.count(inst_47956__$1);
var inst_47958 = cljs.core.reset_BANG_(dctr,inst_47957);
var inst_47963 = cljs.core.seq(inst_47956__$1);
var inst_47964 = inst_47963;
var inst_47965 = null;
var inst_47966 = (0);
var inst_47967 = (0);
var state_48028__$1 = (function (){var statearr_48096 = state_48028;
(statearr_48096[(19)] = inst_47964);

(statearr_48096[(11)] = inst_47965);

(statearr_48096[(28)] = inst_47958);

(statearr_48096[(27)] = inst_47956__$1);

(statearr_48096[(12)] = inst_47967);

(statearr_48096[(20)] = inst_47966);

return statearr_48096;
})();
var statearr_48097_49777 = state_48028__$1;
(statearr_48097_49777[(2)] = null);

(statearr_48097_49777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (28))){
var inst_47964 = (state_48028[(19)]);
var inst_47987 = (state_48028[(23)]);
var inst_47987__$1 = cljs.core.seq(inst_47964);
var state_48028__$1 = (function (){var statearr_48098 = state_48028;
(statearr_48098[(23)] = inst_47987__$1);

return statearr_48098;
})();
if(inst_47987__$1){
var statearr_48099_49778 = state_48028__$1;
(statearr_48099_49778[(1)] = (33));

} else {
var statearr_48101_49780 = state_48028__$1;
(statearr_48101_49780[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (25))){
var inst_47967 = (state_48028[(12)]);
var inst_47966 = (state_48028[(20)]);
var inst_47969 = (inst_47967 < inst_47966);
var inst_47970 = inst_47969;
var state_48028__$1 = state_48028;
if(cljs.core.truth_(inst_47970)){
var statearr_48104_49782 = state_48028__$1;
(statearr_48104_49782[(1)] = (27));

} else {
var statearr_48105_49783 = state_48028__$1;
(statearr_48105_49783[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (34))){
var state_48028__$1 = state_48028;
var statearr_48106_49785 = state_48028__$1;
(statearr_48106_49785[(2)] = null);

(statearr_48106_49785[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (17))){
var state_48028__$1 = state_48028;
var statearr_48107_49786 = state_48028__$1;
(statearr_48107_49786[(2)] = null);

(statearr_48107_49786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (3))){
var inst_48026 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48028__$1,inst_48026);
} else {
if((state_val_48029 === (12))){
var inst_47951 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48110_49787 = state_48028__$1;
(statearr_48110_49787[(2)] = inst_47951);

(statearr_48110_49787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (2))){
var state_48028__$1 = state_48028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48028__$1,(4),ch);
} else {
if((state_val_48029 === (23))){
var state_48028__$1 = state_48028;
var statearr_48112_49788 = state_48028__$1;
(statearr_48112_49788[(2)] = null);

(statearr_48112_49788[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (35))){
var inst_48010 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48113_49789 = state_48028__$1;
(statearr_48113_49789[(2)] = inst_48010);

(statearr_48113_49789[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (19))){
var inst_47923 = (state_48028[(7)]);
var inst_47927 = cljs.core.chunk_first(inst_47923);
var inst_47928 = cljs.core.chunk_rest(inst_47923);
var inst_47929 = cljs.core.count(inst_47927);
var inst_47898 = inst_47928;
var inst_47899 = inst_47927;
var inst_47900 = inst_47929;
var inst_47901 = (0);
var state_48028__$1 = (function (){var statearr_48114 = state_48028;
(statearr_48114[(13)] = inst_47899);

(statearr_48114[(14)] = inst_47900);

(statearr_48114[(16)] = inst_47901);

(statearr_48114[(17)] = inst_47898);

return statearr_48114;
})();
var statearr_48115_49796 = state_48028__$1;
(statearr_48115_49796[(2)] = null);

(statearr_48115_49796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (11))){
var inst_47923 = (state_48028[(7)]);
var inst_47898 = (state_48028[(17)]);
var inst_47923__$1 = cljs.core.seq(inst_47898);
var state_48028__$1 = (function (){var statearr_48116 = state_48028;
(statearr_48116[(7)] = inst_47923__$1);

return statearr_48116;
})();
if(inst_47923__$1){
var statearr_48117_49801 = state_48028__$1;
(statearr_48117_49801[(1)] = (16));

} else {
var statearr_48118_49802 = state_48028__$1;
(statearr_48118_49802[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (9))){
var inst_47953 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48119_49803 = state_48028__$1;
(statearr_48119_49803[(2)] = inst_47953);

(statearr_48119_49803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (5))){
var inst_47896 = cljs.core.deref(cs);
var inst_47897 = cljs.core.seq(inst_47896);
var inst_47898 = inst_47897;
var inst_47899 = null;
var inst_47900 = (0);
var inst_47901 = (0);
var state_48028__$1 = (function (){var statearr_48120 = state_48028;
(statearr_48120[(13)] = inst_47899);

(statearr_48120[(14)] = inst_47900);

(statearr_48120[(16)] = inst_47901);

(statearr_48120[(17)] = inst_47898);

return statearr_48120;
})();
var statearr_48121_49804 = state_48028__$1;
(statearr_48121_49804[(2)] = null);

(statearr_48121_49804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (14))){
var state_48028__$1 = state_48028;
var statearr_48122_49805 = state_48028__$1;
(statearr_48122_49805[(2)] = null);

(statearr_48122_49805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (45))){
var inst_48018 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48123_49806 = state_48028__$1;
(statearr_48123_49806[(2)] = inst_48018);

(statearr_48123_49806[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (26))){
var inst_47956 = (state_48028[(27)]);
var inst_48014 = (state_48028[(2)]);
var inst_48015 = cljs.core.seq(inst_47956);
var state_48028__$1 = (function (){var statearr_48125 = state_48028;
(statearr_48125[(29)] = inst_48014);

return statearr_48125;
})();
if(inst_48015){
var statearr_48126_49810 = state_48028__$1;
(statearr_48126_49810[(1)] = (42));

} else {
var statearr_48127_49811 = state_48028__$1;
(statearr_48127_49811[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (16))){
var inst_47923 = (state_48028[(7)]);
var inst_47925 = cljs.core.chunked_seq_QMARK_(inst_47923);
var state_48028__$1 = state_48028;
if(inst_47925){
var statearr_48128_49812 = state_48028__$1;
(statearr_48128_49812[(1)] = (19));

} else {
var statearr_48129_49813 = state_48028__$1;
(statearr_48129_49813[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (38))){
var inst_48007 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48135_49814 = state_48028__$1;
(statearr_48135_49814[(2)] = inst_48007);

(statearr_48135_49814[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (30))){
var state_48028__$1 = state_48028;
var statearr_48136_49815 = state_48028__$1;
(statearr_48136_49815[(2)] = null);

(statearr_48136_49815[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (10))){
var inst_47899 = (state_48028[(13)]);
var inst_47901 = (state_48028[(16)]);
var inst_47909 = cljs.core._nth(inst_47899,inst_47901);
var inst_47910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47909,(0),null);
var inst_47911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47909,(1),null);
var state_48028__$1 = (function (){var statearr_48141 = state_48028;
(statearr_48141[(24)] = inst_47910);

return statearr_48141;
})();
if(cljs.core.truth_(inst_47911)){
var statearr_48144_49816 = state_48028__$1;
(statearr_48144_49816[(1)] = (13));

} else {
var statearr_48145_49817 = state_48028__$1;
(statearr_48145_49817[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (18))){
var inst_47949 = (state_48028[(2)]);
var state_48028__$1 = state_48028;
var statearr_48147_49818 = state_48028__$1;
(statearr_48147_49818[(2)] = inst_47949);

(statearr_48147_49818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (42))){
var state_48028__$1 = state_48028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48028__$1,(45),dchan);
} else {
if((state_val_48029 === (37))){
var inst_47889 = (state_48028[(10)]);
var inst_47987 = (state_48028[(23)]);
var inst_47996 = (state_48028[(22)]);
var inst_47996__$1 = cljs.core.first(inst_47987);
var inst_47998 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47996__$1,inst_47889,done);
var state_48028__$1 = (function (){var statearr_48153 = state_48028;
(statearr_48153[(22)] = inst_47996__$1);

return statearr_48153;
})();
if(cljs.core.truth_(inst_47998)){
var statearr_48156_49819 = state_48028__$1;
(statearr_48156_49819[(1)] = (39));

} else {
var statearr_48158_49820 = state_48028__$1;
(statearr_48158_49820[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48029 === (8))){
var inst_47900 = (state_48028[(14)]);
var inst_47901 = (state_48028[(16)]);
var inst_47903 = (inst_47901 < inst_47900);
var inst_47904 = inst_47903;
var state_48028__$1 = state_48028;
if(cljs.core.truth_(inst_47904)){
var statearr_48162_49822 = state_48028__$1;
(statearr_48162_49822[(1)] = (10));

} else {
var statearr_48164_49823 = state_48028__$1;
(statearr_48164_49823[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__46560__auto__ = null;
var cljs$core$async$mult_$_state_machine__46560__auto____0 = (function (){
var statearr_48167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48167[(0)] = cljs$core$async$mult_$_state_machine__46560__auto__);

(statearr_48167[(1)] = (1));

return statearr_48167;
});
var cljs$core$async$mult_$_state_machine__46560__auto____1 = (function (state_48028){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_48028);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e48175){var ex__46563__auto__ = e48175;
var statearr_48176_49826 = state_48028;
(statearr_48176_49826[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_48028[(4)]))){
var statearr_48177_49827 = state_48028;
(statearr_48177_49827[(1)] = cljs.core.first((state_48028[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49829 = state_48028;
state_48028 = G__49829;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46560__auto__ = function(state_48028){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46560__auto____1.call(this,state_48028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46560__auto____0;
cljs$core$async$mult_$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46560__auto____1;
return cljs$core$async$mult_$_state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_48181 = f__46966__auto__();
(statearr_48181[(6)] = c__46965__auto___49736);

return statearr_48181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
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
var G__48186 = arguments.length;
switch (G__48186) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var cljs$core$async$Mix$admix_STAR_$dyn_49835 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_49835(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49841 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_49841(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49859 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49859(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49864 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_49864(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49873 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49873(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49881 = arguments.length;
var i__4737__auto___49882 = (0);
while(true){
if((i__4737__auto___49882 < len__4736__auto___49881)){
args__4742__auto__.push((arguments[i__4737__auto___49882]));

var G__49886 = (i__4737__auto___49882 + (1));
i__4737__auto___49882 = G__49886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48239){
var map__48240 = p__48239;
var map__48240__$1 = (((((!((map__48240 == null))))?(((((map__48240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48240):map__48240);
var opts = map__48240__$1;
var statearr_48242_49890 = state;
(statearr_48242_49890[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_48246_49891 = state;
(statearr_48246_49891[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_48247_49896 = state;
(statearr_48247_49896[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48223){
var G__48224 = cljs.core.first(seq48223);
var seq48223__$1 = cljs.core.next(seq48223);
var G__48225 = cljs.core.first(seq48223__$1);
var seq48223__$2 = cljs.core.next(seq48223__$1);
var G__48226 = cljs.core.first(seq48223__$2);
var seq48223__$3 = cljs.core.next(seq48223__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48224,G__48225,G__48226,seq48223__$3);
}));

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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48248 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta48249){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta48249 = meta48249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48250,meta48249__$1){
var self__ = this;
var _48250__$1 = this;
return (new cljs.core.async.t_cljs$core$async48248(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta48249__$1));
}));

(cljs.core.async.t_cljs$core$async48248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48250){
var self__ = this;
var _48250__$1 = this;
return self__.meta48249;
}));

(cljs.core.async.t_cljs$core$async48248.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async48248.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48248.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48248.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48248.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48248.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48248.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async48248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta48249","meta48249",1429193530,null)], null);
}));

(cljs.core.async.t_cljs$core$async48248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48248");

(cljs.core.async.t_cljs$core$async48248.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48248.
 */
cljs.core.async.__GT_t_cljs$core$async48248 = (function cljs$core$async$mix_$___GT_t_cljs$core$async48248(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48249){
return (new cljs.core.async.t_cljs$core$async48248(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta48249));
});

}

return (new cljs.core.async.t_cljs$core$async48248(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46965__auto___49931 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_48358){
var state_val_48359 = (state_48358[(1)]);
if((state_val_48359 === (7))){
var inst_48267 = (state_48358[(2)]);
var state_48358__$1 = state_48358;
var statearr_48362_49932 = state_48358__$1;
(statearr_48362_49932[(2)] = inst_48267);

(statearr_48362_49932[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (20))){
var inst_48279 = (state_48358[(7)]);
var state_48358__$1 = state_48358;
var statearr_48363_49936 = state_48358__$1;
(statearr_48363_49936[(2)] = inst_48279);

(statearr_48363_49936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (27))){
var state_48358__$1 = state_48358;
var statearr_48364_49937 = state_48358__$1;
(statearr_48364_49937[(2)] = null);

(statearr_48364_49937[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (1))){
var inst_48254 = (state_48358[(8)]);
var inst_48254__$1 = calc_state();
var inst_48256 = (inst_48254__$1 == null);
var inst_48257 = cljs.core.not(inst_48256);
var state_48358__$1 = (function (){var statearr_48365 = state_48358;
(statearr_48365[(8)] = inst_48254__$1);

return statearr_48365;
})();
if(inst_48257){
var statearr_48367_49938 = state_48358__$1;
(statearr_48367_49938[(1)] = (2));

} else {
var statearr_48369_49943 = state_48358__$1;
(statearr_48369_49943[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (24))){
var inst_48315 = (state_48358[(9)]);
var inst_48304 = (state_48358[(10)]);
var inst_48329 = (state_48358[(11)]);
var inst_48329__$1 = (inst_48304.cljs$core$IFn$_invoke$arity$1 ? inst_48304.cljs$core$IFn$_invoke$arity$1(inst_48315) : inst_48304.call(null,inst_48315));
var state_48358__$1 = (function (){var statearr_48370 = state_48358;
(statearr_48370[(11)] = inst_48329__$1);

return statearr_48370;
})();
if(cljs.core.truth_(inst_48329__$1)){
var statearr_48371_49944 = state_48358__$1;
(statearr_48371_49944[(1)] = (29));

} else {
var statearr_48372_49945 = state_48358__$1;
(statearr_48372_49945[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (4))){
var inst_48270 = (state_48358[(2)]);
var state_48358__$1 = state_48358;
if(cljs.core.truth_(inst_48270)){
var statearr_48373_49947 = state_48358__$1;
(statearr_48373_49947[(1)] = (8));

} else {
var statearr_48374_49948 = state_48358__$1;
(statearr_48374_49948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (15))){
var inst_48297 = (state_48358[(2)]);
var state_48358__$1 = state_48358;
if(cljs.core.truth_(inst_48297)){
var statearr_48375_49949 = state_48358__$1;
(statearr_48375_49949[(1)] = (19));

} else {
var statearr_48376_49950 = state_48358__$1;
(statearr_48376_49950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (21))){
var inst_48302 = (state_48358[(12)]);
var inst_48302__$1 = (state_48358[(2)]);
var inst_48304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48302__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48302__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48302__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48358__$1 = (function (){var statearr_48377 = state_48358;
(statearr_48377[(12)] = inst_48302__$1);

(statearr_48377[(13)] = inst_48306);

(statearr_48377[(10)] = inst_48304);

return statearr_48377;
})();
return cljs.core.async.ioc_alts_BANG_(state_48358__$1,(22),inst_48307);
} else {
if((state_val_48359 === (31))){
var inst_48337 = (state_48358[(2)]);
var state_48358__$1 = state_48358;
if(cljs.core.truth_(inst_48337)){
var statearr_48378_49960 = state_48358__$1;
(statearr_48378_49960[(1)] = (32));

} else {
var statearr_48379_49961 = state_48358__$1;
(statearr_48379_49961[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (32))){
var inst_48314 = (state_48358[(14)]);
var state_48358__$1 = state_48358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48358__$1,(35),out,inst_48314);
} else {
if((state_val_48359 === (33))){
var inst_48302 = (state_48358[(12)]);
var inst_48279 = inst_48302;
var state_48358__$1 = (function (){var statearr_48382 = state_48358;
(statearr_48382[(7)] = inst_48279);

return statearr_48382;
})();
var statearr_48383_49962 = state_48358__$1;
(statearr_48383_49962[(2)] = null);

(statearr_48383_49962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (13))){
var inst_48279 = (state_48358[(7)]);
var inst_48286 = inst_48279.cljs$lang$protocol_mask$partition0$;
var inst_48287 = (inst_48286 & (64));
var inst_48288 = inst_48279.cljs$core$ISeq$;
var inst_48289 = (cljs.core.PROTOCOL_SENTINEL === inst_48288);
var inst_48290 = ((inst_48287) || (inst_48289));
var state_48358__$1 = state_48358;
if(cljs.core.truth_(inst_48290)){
var statearr_48384_49964 = state_48358__$1;
(statearr_48384_49964[(1)] = (16));

} else {
var statearr_48385_49965 = state_48358__$1;
(statearr_48385_49965[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (22))){
var inst_48315 = (state_48358[(9)]);
var inst_48314 = (state_48358[(14)]);
var inst_48313 = (state_48358[(2)]);
var inst_48314__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48313,(0),null);
var inst_48315__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48313,(1),null);
var inst_48316 = (inst_48314__$1 == null);
var inst_48317 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48315__$1,change);
var inst_48318 = ((inst_48316) || (inst_48317));
var state_48358__$1 = (function (){var statearr_48386 = state_48358;
(statearr_48386[(9)] = inst_48315__$1);

(statearr_48386[(14)] = inst_48314__$1);

return statearr_48386;
})();
if(cljs.core.truth_(inst_48318)){
var statearr_48387_49970 = state_48358__$1;
(statearr_48387_49970[(1)] = (23));

} else {
var statearr_48388_49972 = state_48358__$1;
(statearr_48388_49972[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (36))){
var inst_48302 = (state_48358[(12)]);
var inst_48279 = inst_48302;
var state_48358__$1 = (function (){var statearr_48389 = state_48358;
(statearr_48389[(7)] = inst_48279);

return statearr_48389;
})();
var statearr_48390_49973 = state_48358__$1;
(statearr_48390_49973[(2)] = null);

(statearr_48390_49973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (29))){
var inst_48329 = (state_48358[(11)]);
var state_48358__$1 = state_48358;
var statearr_48391_49974 = state_48358__$1;
(statearr_48391_49974[(2)] = inst_48329);

(statearr_48391_49974[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (6))){
var state_48358__$1 = state_48358;
var statearr_48392_49976 = state_48358__$1;
(statearr_48392_49976[(2)] = false);

(statearr_48392_49976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (28))){
var inst_48325 = (state_48358[(2)]);
var inst_48326 = calc_state();
var inst_48279 = inst_48326;
var state_48358__$1 = (function (){var statearr_48393 = state_48358;
(statearr_48393[(15)] = inst_48325);

(statearr_48393[(7)] = inst_48279);

return statearr_48393;
})();
var statearr_48394_49977 = state_48358__$1;
(statearr_48394_49977[(2)] = null);

(statearr_48394_49977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (25))){
var inst_48351 = (state_48358[(2)]);
var state_48358__$1 = state_48358;
var statearr_48396_49978 = state_48358__$1;
(statearr_48396_49978[(2)] = inst_48351);

(statearr_48396_49978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (34))){
var inst_48349 = (state_48358[(2)]);
var state_48358__$1 = state_48358;
var statearr_48399_49979 = state_48358__$1;
(statearr_48399_49979[(2)] = inst_48349);

(statearr_48399_49979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (17))){
var state_48358__$1 = state_48358;
var statearr_48400_49980 = state_48358__$1;
(statearr_48400_49980[(2)] = false);

(statearr_48400_49980[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (3))){
var state_48358__$1 = state_48358;
var statearr_48402_49981 = state_48358__$1;
(statearr_48402_49981[(2)] = false);

(statearr_48402_49981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (12))){
var inst_48353 = (state_48358[(2)]);
var state_48358__$1 = state_48358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48358__$1,inst_48353);
} else {
if((state_val_48359 === (2))){
var inst_48254 = (state_48358[(8)]);
var inst_48259 = inst_48254.cljs$lang$protocol_mask$partition0$;
var inst_48260 = (inst_48259 & (64));
var inst_48261 = inst_48254.cljs$core$ISeq$;
var inst_48262 = (cljs.core.PROTOCOL_SENTINEL === inst_48261);
var inst_48263 = ((inst_48260) || (inst_48262));
var state_48358__$1 = state_48358;
if(cljs.core.truth_(inst_48263)){
var statearr_48407_49982 = state_48358__$1;
(statearr_48407_49982[(1)] = (5));

} else {
var statearr_48408_49983 = state_48358__$1;
(statearr_48408_49983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (23))){
var inst_48314 = (state_48358[(14)]);
var inst_48320 = (inst_48314 == null);
var state_48358__$1 = state_48358;
if(cljs.core.truth_(inst_48320)){
var statearr_48409_49984 = state_48358__$1;
(statearr_48409_49984[(1)] = (26));

} else {
var statearr_48410_49985 = state_48358__$1;
(statearr_48410_49985[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (35))){
var inst_48340 = (state_48358[(2)]);
var state_48358__$1 = state_48358;
if(cljs.core.truth_(inst_48340)){
var statearr_48411_49987 = state_48358__$1;
(statearr_48411_49987[(1)] = (36));

} else {
var statearr_48412_49988 = state_48358__$1;
(statearr_48412_49988[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (19))){
var inst_48279 = (state_48358[(7)]);
var inst_48299 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48279);
var state_48358__$1 = state_48358;
var statearr_48413_49990 = state_48358__$1;
(statearr_48413_49990[(2)] = inst_48299);

(statearr_48413_49990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (11))){
var inst_48279 = (state_48358[(7)]);
var inst_48283 = (inst_48279 == null);
var inst_48284 = cljs.core.not(inst_48283);
var state_48358__$1 = state_48358;
if(inst_48284){
var statearr_48417_49991 = state_48358__$1;
(statearr_48417_49991[(1)] = (13));

} else {
var statearr_48420_49992 = state_48358__$1;
(statearr_48420_49992[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (9))){
var inst_48254 = (state_48358[(8)]);
var state_48358__$1 = state_48358;
var statearr_48424_49996 = state_48358__$1;
(statearr_48424_49996[(2)] = inst_48254);

(statearr_48424_49996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (5))){
var state_48358__$1 = state_48358;
var statearr_48426_49997 = state_48358__$1;
(statearr_48426_49997[(2)] = true);

(statearr_48426_49997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (14))){
var state_48358__$1 = state_48358;
var statearr_48428_49998 = state_48358__$1;
(statearr_48428_49998[(2)] = false);

(statearr_48428_49998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (26))){
var inst_48315 = (state_48358[(9)]);
var inst_48322 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_48315);
var state_48358__$1 = state_48358;
var statearr_48429_50001 = state_48358__$1;
(statearr_48429_50001[(2)] = inst_48322);

(statearr_48429_50001[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (16))){
var state_48358__$1 = state_48358;
var statearr_48432_50002 = state_48358__$1;
(statearr_48432_50002[(2)] = true);

(statearr_48432_50002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (38))){
var inst_48345 = (state_48358[(2)]);
var state_48358__$1 = state_48358;
var statearr_48436_50004 = state_48358__$1;
(statearr_48436_50004[(2)] = inst_48345);

(statearr_48436_50004[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (30))){
var inst_48306 = (state_48358[(13)]);
var inst_48315 = (state_48358[(9)]);
var inst_48304 = (state_48358[(10)]);
var inst_48332 = cljs.core.empty_QMARK_(inst_48304);
var inst_48333 = (inst_48306.cljs$core$IFn$_invoke$arity$1 ? inst_48306.cljs$core$IFn$_invoke$arity$1(inst_48315) : inst_48306.call(null,inst_48315));
var inst_48334 = cljs.core.not(inst_48333);
var inst_48335 = ((inst_48332) && (inst_48334));
var state_48358__$1 = state_48358;
var statearr_48438_50005 = state_48358__$1;
(statearr_48438_50005[(2)] = inst_48335);

(statearr_48438_50005[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (10))){
var inst_48254 = (state_48358[(8)]);
var inst_48275 = (state_48358[(2)]);
var inst_48276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48275,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48275,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48275,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48279 = inst_48254;
var state_48358__$1 = (function (){var statearr_48442 = state_48358;
(statearr_48442[(7)] = inst_48279);

(statearr_48442[(16)] = inst_48277);

(statearr_48442[(17)] = inst_48276);

(statearr_48442[(18)] = inst_48278);

return statearr_48442;
})();
var statearr_48444_50008 = state_48358__$1;
(statearr_48444_50008[(2)] = null);

(statearr_48444_50008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (18))){
var inst_48294 = (state_48358[(2)]);
var state_48358__$1 = state_48358;
var statearr_48447_50009 = state_48358__$1;
(statearr_48447_50009[(2)] = inst_48294);

(statearr_48447_50009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (37))){
var state_48358__$1 = state_48358;
var statearr_48449_50010 = state_48358__$1;
(statearr_48449_50010[(2)] = null);

(statearr_48449_50010[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48359 === (8))){
var inst_48254 = (state_48358[(8)]);
var inst_48272 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_48254);
var state_48358__$1 = state_48358;
var statearr_48450_50011 = state_48358__$1;
(statearr_48450_50011[(2)] = inst_48272);

(statearr_48450_50011[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__46560__auto__ = null;
var cljs$core$async$mix_$_state_machine__46560__auto____0 = (function (){
var statearr_48454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48454[(0)] = cljs$core$async$mix_$_state_machine__46560__auto__);

(statearr_48454[(1)] = (1));

return statearr_48454;
});
var cljs$core$async$mix_$_state_machine__46560__auto____1 = (function (state_48358){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_48358);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e48455){var ex__46563__auto__ = e48455;
var statearr_48457_50012 = state_48358;
(statearr_48457_50012[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_48358[(4)]))){
var statearr_48458_50015 = state_48358;
(statearr_48458_50015[(1)] = cljs.core.first((state_48358[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50021 = state_48358;
state_48358 = G__50021;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46560__auto__ = function(state_48358){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46560__auto____1.call(this,state_48358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46560__auto____0;
cljs$core$async$mix_$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46560__auto____1;
return cljs$core$async$mix_$_state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_48463 = f__46966__auto__();
(statearr_48463[(6)] = c__46965__auto___49931);

return statearr_48463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_50023 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50023(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50025 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50025(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50031 = (function() {
var G__50032 = null;
var G__50032__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50032__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50032 = function(p,v){
switch(arguments.length){
case 1:
return G__50032__1.call(this,p);
case 2:
return G__50032__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50032.cljs$core$IFn$_invoke$arity$1 = G__50032__1;
G__50032.cljs$core$IFn$_invoke$arity$2 = G__50032__2;
return G__50032;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48478 = arguments.length;
switch (G__48478) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50031(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50031(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__48483 = arguments.length;
switch (G__48483) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48479_SHARP_){
if(cljs.core.truth_((p1__48479_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48479_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48479_SHARP_.call(null,topic)))){
return p1__48479_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48479_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48484 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48484 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48485){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48485 = meta48485;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48486,meta48485__$1){
var self__ = this;
var _48486__$1 = this;
return (new cljs.core.async.t_cljs$core$async48484(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48485__$1));
}));

(cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48486){
var self__ = this;
var _48486__$1 = this;
return self__.meta48485;
}));

(cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48484.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48484.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48485","meta48485",961003048,null)], null);
}));

(cljs.core.async.t_cljs$core$async48484.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48484.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48484");

(cljs.core.async.t_cljs$core$async48484.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48484");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48484.
 */
cljs.core.async.__GT_t_cljs$core$async48484 = (function cljs$core$async$__GT_t_cljs$core$async48484(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48485){
return (new cljs.core.async.t_cljs$core$async48484(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48485));
});

}

return (new cljs.core.async.t_cljs$core$async48484(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46965__auto___50039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_48570){
var state_val_48571 = (state_48570[(1)]);
if((state_val_48571 === (7))){
var inst_48564 = (state_48570[(2)]);
var state_48570__$1 = state_48570;
var statearr_48573_50043 = state_48570__$1;
(statearr_48573_50043[(2)] = inst_48564);

(statearr_48573_50043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (20))){
var state_48570__$1 = state_48570;
var statearr_48574_50044 = state_48570__$1;
(statearr_48574_50044[(2)] = null);

(statearr_48574_50044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (1))){
var state_48570__$1 = state_48570;
var statearr_48575_50045 = state_48570__$1;
(statearr_48575_50045[(2)] = null);

(statearr_48575_50045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (24))){
var inst_48547 = (state_48570[(7)]);
var inst_48556 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48547);
var state_48570__$1 = state_48570;
var statearr_48579_50046 = state_48570__$1;
(statearr_48579_50046[(2)] = inst_48556);

(statearr_48579_50046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (4))){
var inst_48499 = (state_48570[(8)]);
var inst_48499__$1 = (state_48570[(2)]);
var inst_48500 = (inst_48499__$1 == null);
var state_48570__$1 = (function (){var statearr_48580 = state_48570;
(statearr_48580[(8)] = inst_48499__$1);

return statearr_48580;
})();
if(cljs.core.truth_(inst_48500)){
var statearr_48581_50049 = state_48570__$1;
(statearr_48581_50049[(1)] = (5));

} else {
var statearr_48582_50050 = state_48570__$1;
(statearr_48582_50050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (15))){
var inst_48541 = (state_48570[(2)]);
var state_48570__$1 = state_48570;
var statearr_48583_50051 = state_48570__$1;
(statearr_48583_50051[(2)] = inst_48541);

(statearr_48583_50051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (21))){
var inst_48561 = (state_48570[(2)]);
var state_48570__$1 = (function (){var statearr_48584 = state_48570;
(statearr_48584[(9)] = inst_48561);

return statearr_48584;
})();
var statearr_48585_50052 = state_48570__$1;
(statearr_48585_50052[(2)] = null);

(statearr_48585_50052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (13))){
var inst_48523 = (state_48570[(10)]);
var inst_48525 = cljs.core.chunked_seq_QMARK_(inst_48523);
var state_48570__$1 = state_48570;
if(inst_48525){
var statearr_48586_50053 = state_48570__$1;
(statearr_48586_50053[(1)] = (16));

} else {
var statearr_48587_50054 = state_48570__$1;
(statearr_48587_50054[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (22))){
var inst_48553 = (state_48570[(2)]);
var state_48570__$1 = state_48570;
if(cljs.core.truth_(inst_48553)){
var statearr_48588_50055 = state_48570__$1;
(statearr_48588_50055[(1)] = (23));

} else {
var statearr_48589_50056 = state_48570__$1;
(statearr_48589_50056[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (6))){
var inst_48547 = (state_48570[(7)]);
var inst_48549 = (state_48570[(11)]);
var inst_48499 = (state_48570[(8)]);
var inst_48547__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48499) : topic_fn.call(null,inst_48499));
var inst_48548 = cljs.core.deref(mults);
var inst_48549__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48548,inst_48547__$1);
var state_48570__$1 = (function (){var statearr_48590 = state_48570;
(statearr_48590[(7)] = inst_48547__$1);

(statearr_48590[(11)] = inst_48549__$1);

return statearr_48590;
})();
if(cljs.core.truth_(inst_48549__$1)){
var statearr_48592_50057 = state_48570__$1;
(statearr_48592_50057[(1)] = (19));

} else {
var statearr_48593_50058 = state_48570__$1;
(statearr_48593_50058[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (25))){
var inst_48558 = (state_48570[(2)]);
var state_48570__$1 = state_48570;
var statearr_48594_50059 = state_48570__$1;
(statearr_48594_50059[(2)] = inst_48558);

(statearr_48594_50059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (17))){
var inst_48523 = (state_48570[(10)]);
var inst_48532 = cljs.core.first(inst_48523);
var inst_48533 = cljs.core.async.muxch_STAR_(inst_48532);
var inst_48534 = cljs.core.async.close_BANG_(inst_48533);
var inst_48535 = cljs.core.next(inst_48523);
var inst_48509 = inst_48535;
var inst_48510 = null;
var inst_48511 = (0);
var inst_48512 = (0);
var state_48570__$1 = (function (){var statearr_48595 = state_48570;
(statearr_48595[(12)] = inst_48510);

(statearr_48595[(13)] = inst_48509);

(statearr_48595[(14)] = inst_48512);

(statearr_48595[(15)] = inst_48511);

(statearr_48595[(16)] = inst_48534);

return statearr_48595;
})();
var statearr_48596_50060 = state_48570__$1;
(statearr_48596_50060[(2)] = null);

(statearr_48596_50060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (3))){
var inst_48567 = (state_48570[(2)]);
var state_48570__$1 = state_48570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48570__$1,inst_48567);
} else {
if((state_val_48571 === (12))){
var inst_48543 = (state_48570[(2)]);
var state_48570__$1 = state_48570;
var statearr_48600_50061 = state_48570__$1;
(statearr_48600_50061[(2)] = inst_48543);

(statearr_48600_50061[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (2))){
var state_48570__$1 = state_48570;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48570__$1,(4),ch);
} else {
if((state_val_48571 === (23))){
var state_48570__$1 = state_48570;
var statearr_48603_50062 = state_48570__$1;
(statearr_48603_50062[(2)] = null);

(statearr_48603_50062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (19))){
var inst_48549 = (state_48570[(11)]);
var inst_48499 = (state_48570[(8)]);
var inst_48551 = cljs.core.async.muxch_STAR_(inst_48549);
var state_48570__$1 = state_48570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48570__$1,(22),inst_48551,inst_48499);
} else {
if((state_val_48571 === (11))){
var inst_48523 = (state_48570[(10)]);
var inst_48509 = (state_48570[(13)]);
var inst_48523__$1 = cljs.core.seq(inst_48509);
var state_48570__$1 = (function (){var statearr_48604 = state_48570;
(statearr_48604[(10)] = inst_48523__$1);

return statearr_48604;
})();
if(inst_48523__$1){
var statearr_48605_50063 = state_48570__$1;
(statearr_48605_50063[(1)] = (13));

} else {
var statearr_48606_50064 = state_48570__$1;
(statearr_48606_50064[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (9))){
var inst_48545 = (state_48570[(2)]);
var state_48570__$1 = state_48570;
var statearr_48608_50065 = state_48570__$1;
(statearr_48608_50065[(2)] = inst_48545);

(statearr_48608_50065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (5))){
var inst_48506 = cljs.core.deref(mults);
var inst_48507 = cljs.core.vals(inst_48506);
var inst_48508 = cljs.core.seq(inst_48507);
var inst_48509 = inst_48508;
var inst_48510 = null;
var inst_48511 = (0);
var inst_48512 = (0);
var state_48570__$1 = (function (){var statearr_48614 = state_48570;
(statearr_48614[(12)] = inst_48510);

(statearr_48614[(13)] = inst_48509);

(statearr_48614[(14)] = inst_48512);

(statearr_48614[(15)] = inst_48511);

return statearr_48614;
})();
var statearr_48616_50070 = state_48570__$1;
(statearr_48616_50070[(2)] = null);

(statearr_48616_50070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (14))){
var state_48570__$1 = state_48570;
var statearr_48620_50071 = state_48570__$1;
(statearr_48620_50071[(2)] = null);

(statearr_48620_50071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (16))){
var inst_48523 = (state_48570[(10)]);
var inst_48527 = cljs.core.chunk_first(inst_48523);
var inst_48528 = cljs.core.chunk_rest(inst_48523);
var inst_48529 = cljs.core.count(inst_48527);
var inst_48509 = inst_48528;
var inst_48510 = inst_48527;
var inst_48511 = inst_48529;
var inst_48512 = (0);
var state_48570__$1 = (function (){var statearr_48622 = state_48570;
(statearr_48622[(12)] = inst_48510);

(statearr_48622[(13)] = inst_48509);

(statearr_48622[(14)] = inst_48512);

(statearr_48622[(15)] = inst_48511);

return statearr_48622;
})();
var statearr_48623_50077 = state_48570__$1;
(statearr_48623_50077[(2)] = null);

(statearr_48623_50077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (10))){
var inst_48510 = (state_48570[(12)]);
var inst_48509 = (state_48570[(13)]);
var inst_48512 = (state_48570[(14)]);
var inst_48511 = (state_48570[(15)]);
var inst_48517 = cljs.core._nth(inst_48510,inst_48512);
var inst_48518 = cljs.core.async.muxch_STAR_(inst_48517);
var inst_48519 = cljs.core.async.close_BANG_(inst_48518);
var inst_48520 = (inst_48512 + (1));
var tmp48617 = inst_48510;
var tmp48618 = inst_48509;
var tmp48619 = inst_48511;
var inst_48509__$1 = tmp48618;
var inst_48510__$1 = tmp48617;
var inst_48511__$1 = tmp48619;
var inst_48512__$1 = inst_48520;
var state_48570__$1 = (function (){var statearr_48624 = state_48570;
(statearr_48624[(17)] = inst_48519);

(statearr_48624[(12)] = inst_48510__$1);

(statearr_48624[(13)] = inst_48509__$1);

(statearr_48624[(14)] = inst_48512__$1);

(statearr_48624[(15)] = inst_48511__$1);

return statearr_48624;
})();
var statearr_48625_50081 = state_48570__$1;
(statearr_48625_50081[(2)] = null);

(statearr_48625_50081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (18))){
var inst_48538 = (state_48570[(2)]);
var state_48570__$1 = state_48570;
var statearr_48626_50082 = state_48570__$1;
(statearr_48626_50082[(2)] = inst_48538);

(statearr_48626_50082[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48571 === (8))){
var inst_48512 = (state_48570[(14)]);
var inst_48511 = (state_48570[(15)]);
var inst_48514 = (inst_48512 < inst_48511);
var inst_48515 = inst_48514;
var state_48570__$1 = state_48570;
if(cljs.core.truth_(inst_48515)){
var statearr_48630_50084 = state_48570__$1;
(statearr_48630_50084[(1)] = (10));

} else {
var statearr_48631_50085 = state_48570__$1;
(statearr_48631_50085[(1)] = (11));

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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_48637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48637[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_48637[(1)] = (1));

return statearr_48637;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_48570){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_48570);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e48640){var ex__46563__auto__ = e48640;
var statearr_48641_50088 = state_48570;
(statearr_48641_50088[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_48570[(4)]))){
var statearr_48643_50089 = state_48570;
(statearr_48643_50089[(1)] = cljs.core.first((state_48570[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50090 = state_48570;
state_48570 = G__50090;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_48570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_48570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_48648 = f__46966__auto__();
(statearr_48648[(6)] = c__46965__auto___50039);

return statearr_48648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
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
var G__48658 = arguments.length;
switch (G__48658) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__48673 = arguments.length;
switch (G__48673) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__48689 = arguments.length;
switch (G__48689) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__46965__auto___50094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_48759){
var state_val_48760 = (state_48759[(1)]);
if((state_val_48760 === (7))){
var state_48759__$1 = state_48759;
var statearr_48763_50096 = state_48759__$1;
(statearr_48763_50096[(2)] = null);

(statearr_48763_50096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (1))){
var state_48759__$1 = state_48759;
var statearr_48767_50097 = state_48759__$1;
(statearr_48767_50097[(2)] = null);

(statearr_48767_50097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (4))){
var inst_48706 = (state_48759[(7)]);
var inst_48705 = (state_48759[(8)]);
var inst_48708 = (inst_48706 < inst_48705);
var state_48759__$1 = state_48759;
if(cljs.core.truth_(inst_48708)){
var statearr_48770_50098 = state_48759__$1;
(statearr_48770_50098[(1)] = (6));

} else {
var statearr_48771_50099 = state_48759__$1;
(statearr_48771_50099[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (15))){
var inst_48744 = (state_48759[(9)]);
var inst_48750 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48744);
var state_48759__$1 = state_48759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48759__$1,(17),out,inst_48750);
} else {
if((state_val_48760 === (13))){
var inst_48744 = (state_48759[(9)]);
var inst_48744__$1 = (state_48759[(2)]);
var inst_48745 = cljs.core.some(cljs.core.nil_QMARK_,inst_48744__$1);
var state_48759__$1 = (function (){var statearr_48776 = state_48759;
(statearr_48776[(9)] = inst_48744__$1);

return statearr_48776;
})();
if(cljs.core.truth_(inst_48745)){
var statearr_48779_50100 = state_48759__$1;
(statearr_48779_50100[(1)] = (14));

} else {
var statearr_48780_50101 = state_48759__$1;
(statearr_48780_50101[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (6))){
var state_48759__$1 = state_48759;
var statearr_48783_50102 = state_48759__$1;
(statearr_48783_50102[(2)] = null);

(statearr_48783_50102[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (17))){
var inst_48752 = (state_48759[(2)]);
var state_48759__$1 = (function (){var statearr_48791 = state_48759;
(statearr_48791[(10)] = inst_48752);

return statearr_48791;
})();
var statearr_48792_50103 = state_48759__$1;
(statearr_48792_50103[(2)] = null);

(statearr_48792_50103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (3))){
var inst_48757 = (state_48759[(2)]);
var state_48759__$1 = state_48759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48759__$1,inst_48757);
} else {
if((state_val_48760 === (12))){
var _ = (function (){var statearr_48794 = state_48759;
(statearr_48794[(4)] = cljs.core.rest((state_48759[(4)])));

return statearr_48794;
})();
var state_48759__$1 = state_48759;
var ex48787 = (state_48759__$1[(2)]);
var statearr_48795_50105 = state_48759__$1;
(statearr_48795_50105[(5)] = ex48787);


if((ex48787 instanceof Object)){
var statearr_48800_50106 = state_48759__$1;
(statearr_48800_50106[(1)] = (11));

(statearr_48800_50106[(5)] = null);

} else {
throw ex48787;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (2))){
var inst_48704 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48705 = cnt;
var inst_48706 = (0);
var state_48759__$1 = (function (){var statearr_48804 = state_48759;
(statearr_48804[(7)] = inst_48706);

(statearr_48804[(11)] = inst_48704);

(statearr_48804[(8)] = inst_48705);

return statearr_48804;
})();
var statearr_48807_50107 = state_48759__$1;
(statearr_48807_50107[(2)] = null);

(statearr_48807_50107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (11))){
var inst_48718 = (state_48759[(2)]);
var inst_48719 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48759__$1 = (function (){var statearr_48808 = state_48759;
(statearr_48808[(12)] = inst_48718);

return statearr_48808;
})();
var statearr_48810_50108 = state_48759__$1;
(statearr_48810_50108[(2)] = inst_48719);

(statearr_48810_50108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (9))){
var inst_48706 = (state_48759[(7)]);
var _ = (function (){var statearr_48812 = state_48759;
(statearr_48812[(4)] = cljs.core.cons((12),(state_48759[(4)])));

return statearr_48812;
})();
var inst_48727 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48706) : chs__$1.call(null,inst_48706));
var inst_48728 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48706) : done.call(null,inst_48706));
var inst_48729 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48727,inst_48728);
var ___$1 = (function (){var statearr_48813 = state_48759;
(statearr_48813[(4)] = cljs.core.rest((state_48759[(4)])));

return statearr_48813;
})();
var state_48759__$1 = state_48759;
var statearr_48816_50109 = state_48759__$1;
(statearr_48816_50109[(2)] = inst_48729);

(statearr_48816_50109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (5))){
var inst_48741 = (state_48759[(2)]);
var state_48759__$1 = (function (){var statearr_48819 = state_48759;
(statearr_48819[(13)] = inst_48741);

return statearr_48819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48759__$1,(13),dchan);
} else {
if((state_val_48760 === (14))){
var inst_48747 = cljs.core.async.close_BANG_(out);
var state_48759__$1 = state_48759;
var statearr_48820_50110 = state_48759__$1;
(statearr_48820_50110[(2)] = inst_48747);

(statearr_48820_50110[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (16))){
var inst_48755 = (state_48759[(2)]);
var state_48759__$1 = state_48759;
var statearr_48822_50111 = state_48759__$1;
(statearr_48822_50111[(2)] = inst_48755);

(statearr_48822_50111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (10))){
var inst_48706 = (state_48759[(7)]);
var inst_48732 = (state_48759[(2)]);
var inst_48735 = (inst_48706 + (1));
var inst_48706__$1 = inst_48735;
var state_48759__$1 = (function (){var statearr_48823 = state_48759;
(statearr_48823[(7)] = inst_48706__$1);

(statearr_48823[(14)] = inst_48732);

return statearr_48823;
})();
var statearr_48824_50115 = state_48759__$1;
(statearr_48824_50115[(2)] = null);

(statearr_48824_50115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48760 === (8))){
var inst_48739 = (state_48759[(2)]);
var state_48759__$1 = state_48759;
var statearr_48829_50119 = state_48759__$1;
(statearr_48829_50119[(2)] = inst_48739);

(statearr_48829_50119[(1)] = (5));


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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_48838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48838[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_48838[(1)] = (1));

return statearr_48838;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_48759){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_48759);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e48839){var ex__46563__auto__ = e48839;
var statearr_48840_50120 = state_48759;
(statearr_48840_50120[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_48759[(4)]))){
var statearr_48841_50125 = state_48759;
(statearr_48841_50125[(1)] = cljs.core.first((state_48759[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50126 = state_48759;
state_48759 = G__50126;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_48759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_48759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_48843 = f__46966__auto__();
(statearr_48843[(6)] = c__46965__auto___50094);

return statearr_48843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));


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
var G__48850 = arguments.length;
switch (G__48850) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46965__auto___50132 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_48886){
var state_val_48887 = (state_48886[(1)]);
if((state_val_48887 === (7))){
var inst_48863 = (state_48886[(7)]);
var inst_48861 = (state_48886[(8)]);
var inst_48861__$1 = (state_48886[(2)]);
var inst_48863__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48861__$1,(0),null);
var inst_48864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48861__$1,(1),null);
var inst_48865 = (inst_48863__$1 == null);
var state_48886__$1 = (function (){var statearr_48893 = state_48886;
(statearr_48893[(9)] = inst_48864);

(statearr_48893[(7)] = inst_48863__$1);

(statearr_48893[(8)] = inst_48861__$1);

return statearr_48893;
})();
if(cljs.core.truth_(inst_48865)){
var statearr_48896_50136 = state_48886__$1;
(statearr_48896_50136[(1)] = (8));

} else {
var statearr_48897_50137 = state_48886__$1;
(statearr_48897_50137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (1))){
var inst_48851 = cljs.core.vec(chs);
var inst_48852 = inst_48851;
var state_48886__$1 = (function (){var statearr_48898 = state_48886;
(statearr_48898[(10)] = inst_48852);

return statearr_48898;
})();
var statearr_48899_50138 = state_48886__$1;
(statearr_48899_50138[(2)] = null);

(statearr_48899_50138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (4))){
var inst_48852 = (state_48886[(10)]);
var state_48886__$1 = state_48886;
return cljs.core.async.ioc_alts_BANG_(state_48886__$1,(7),inst_48852);
} else {
if((state_val_48887 === (6))){
var inst_48882 = (state_48886[(2)]);
var state_48886__$1 = state_48886;
var statearr_48900_50142 = state_48886__$1;
(statearr_48900_50142[(2)] = inst_48882);

(statearr_48900_50142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (3))){
var inst_48884 = (state_48886[(2)]);
var state_48886__$1 = state_48886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48886__$1,inst_48884);
} else {
if((state_val_48887 === (2))){
var inst_48852 = (state_48886[(10)]);
var inst_48854 = cljs.core.count(inst_48852);
var inst_48855 = (inst_48854 > (0));
var state_48886__$1 = state_48886;
if(cljs.core.truth_(inst_48855)){
var statearr_48905_50143 = state_48886__$1;
(statearr_48905_50143[(1)] = (4));

} else {
var statearr_48906_50144 = state_48886__$1;
(statearr_48906_50144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (11))){
var inst_48852 = (state_48886[(10)]);
var inst_48875 = (state_48886[(2)]);
var tmp48901 = inst_48852;
var inst_48852__$1 = tmp48901;
var state_48886__$1 = (function (){var statearr_48908 = state_48886;
(statearr_48908[(10)] = inst_48852__$1);

(statearr_48908[(11)] = inst_48875);

return statearr_48908;
})();
var statearr_48909_50148 = state_48886__$1;
(statearr_48909_50148[(2)] = null);

(statearr_48909_50148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (9))){
var inst_48863 = (state_48886[(7)]);
var state_48886__$1 = state_48886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48886__$1,(11),out,inst_48863);
} else {
if((state_val_48887 === (5))){
var inst_48880 = cljs.core.async.close_BANG_(out);
var state_48886__$1 = state_48886;
var statearr_48910_50149 = state_48886__$1;
(statearr_48910_50149[(2)] = inst_48880);

(statearr_48910_50149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (10))){
var inst_48878 = (state_48886[(2)]);
var state_48886__$1 = state_48886;
var statearr_48911_50150 = state_48886__$1;
(statearr_48911_50150[(2)] = inst_48878);

(statearr_48911_50150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48887 === (8))){
var inst_48864 = (state_48886[(9)]);
var inst_48863 = (state_48886[(7)]);
var inst_48852 = (state_48886[(10)]);
var inst_48861 = (state_48886[(8)]);
var inst_48870 = (function (){var cs = inst_48852;
var vec__48857 = inst_48861;
var v = inst_48863;
var c = inst_48864;
return (function (p1__48848_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48848_SHARP_);
});
})();
var inst_48871 = cljs.core.filterv(inst_48870,inst_48852);
var inst_48852__$1 = inst_48871;
var state_48886__$1 = (function (){var statearr_48912 = state_48886;
(statearr_48912[(10)] = inst_48852__$1);

return statearr_48912;
})();
var statearr_48913_50155 = state_48886__$1;
(statearr_48913_50155[(2)] = null);

(statearr_48913_50155[(1)] = (2));


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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_48914 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48914[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_48914[(1)] = (1));

return statearr_48914;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_48886){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_48886);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e48915){var ex__46563__auto__ = e48915;
var statearr_48916_50156 = state_48886;
(statearr_48916_50156[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_48886[(4)]))){
var statearr_48917_50159 = state_48886;
(statearr_48917_50159[(1)] = cljs.core.first((state_48886[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50163 = state_48886;
state_48886 = G__50163;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_48886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_48886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_48918 = f__46966__auto__();
(statearr_48918[(6)] = c__46965__auto___50132);

return statearr_48918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
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
var G__48920 = arguments.length;
switch (G__48920) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46965__auto___50182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_48945){
var state_val_48946 = (state_48945[(1)]);
if((state_val_48946 === (7))){
var inst_48927 = (state_48945[(7)]);
var inst_48927__$1 = (state_48945[(2)]);
var inst_48928 = (inst_48927__$1 == null);
var inst_48929 = cljs.core.not(inst_48928);
var state_48945__$1 = (function (){var statearr_48947 = state_48945;
(statearr_48947[(7)] = inst_48927__$1);

return statearr_48947;
})();
if(inst_48929){
var statearr_48948_50183 = state_48945__$1;
(statearr_48948_50183[(1)] = (8));

} else {
var statearr_48949_50185 = state_48945__$1;
(statearr_48949_50185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (1))){
var inst_48922 = (0);
var state_48945__$1 = (function (){var statearr_48950 = state_48945;
(statearr_48950[(8)] = inst_48922);

return statearr_48950;
})();
var statearr_48951_50187 = state_48945__$1;
(statearr_48951_50187[(2)] = null);

(statearr_48951_50187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (4))){
var state_48945__$1 = state_48945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48945__$1,(7),ch);
} else {
if((state_val_48946 === (6))){
var inst_48940 = (state_48945[(2)]);
var state_48945__$1 = state_48945;
var statearr_48952_50188 = state_48945__$1;
(statearr_48952_50188[(2)] = inst_48940);

(statearr_48952_50188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (3))){
var inst_48942 = (state_48945[(2)]);
var inst_48943 = cljs.core.async.close_BANG_(out);
var state_48945__$1 = (function (){var statearr_48953 = state_48945;
(statearr_48953[(9)] = inst_48942);

return statearr_48953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48945__$1,inst_48943);
} else {
if((state_val_48946 === (2))){
var inst_48922 = (state_48945[(8)]);
var inst_48924 = (inst_48922 < n);
var state_48945__$1 = state_48945;
if(cljs.core.truth_(inst_48924)){
var statearr_48954_50189 = state_48945__$1;
(statearr_48954_50189[(1)] = (4));

} else {
var statearr_48955_50190 = state_48945__$1;
(statearr_48955_50190[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (11))){
var inst_48922 = (state_48945[(8)]);
var inst_48932 = (state_48945[(2)]);
var inst_48933 = (inst_48922 + (1));
var inst_48922__$1 = inst_48933;
var state_48945__$1 = (function (){var statearr_48956 = state_48945;
(statearr_48956[(10)] = inst_48932);

(statearr_48956[(8)] = inst_48922__$1);

return statearr_48956;
})();
var statearr_48957_50191 = state_48945__$1;
(statearr_48957_50191[(2)] = null);

(statearr_48957_50191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (9))){
var state_48945__$1 = state_48945;
var statearr_48958_50192 = state_48945__$1;
(statearr_48958_50192[(2)] = null);

(statearr_48958_50192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (5))){
var state_48945__$1 = state_48945;
var statearr_48959_50193 = state_48945__$1;
(statearr_48959_50193[(2)] = null);

(statearr_48959_50193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (10))){
var inst_48937 = (state_48945[(2)]);
var state_48945__$1 = state_48945;
var statearr_48960_50201 = state_48945__$1;
(statearr_48960_50201[(2)] = inst_48937);

(statearr_48960_50201[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48946 === (8))){
var inst_48927 = (state_48945[(7)]);
var state_48945__$1 = state_48945;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48945__$1,(11),out,inst_48927);
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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_48961 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48961[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_48961[(1)] = (1));

return statearr_48961;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_48945){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_48945);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e48962){var ex__46563__auto__ = e48962;
var statearr_48963_50202 = state_48945;
(statearr_48963_50202[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_48945[(4)]))){
var statearr_48964_50203 = state_48945;
(statearr_48964_50203[(1)] = cljs.core.first((state_48945[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50204 = state_48945;
state_48945 = G__50204;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_48945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_48945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_48965 = f__46966__auto__();
(statearr_48965[(6)] = c__46965__auto___50182);

return statearr_48965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48969 = (function (f,ch,meta48970){
this.f = f;
this.ch = ch;
this.meta48970 = meta48970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48971,meta48970__$1){
var self__ = this;
var _48971__$1 = this;
return (new cljs.core.async.t_cljs$core$async48969(self__.f,self__.ch,meta48970__$1));
}));

(cljs.core.async.t_cljs$core$async48969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48971){
var self__ = this;
var _48971__$1 = this;
return self__.meta48970;
}));

(cljs.core.async.t_cljs$core$async48969.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48969.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48969.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48972 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48972 = (function (f,ch,meta48970,_,fn1,meta48973){
this.f = f;
this.ch = ch;
this.meta48970 = meta48970;
this._ = _;
this.fn1 = fn1;
this.meta48973 = meta48973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48974,meta48973__$1){
var self__ = this;
var _48974__$1 = this;
return (new cljs.core.async.t_cljs$core$async48972(self__.f,self__.ch,self__.meta48970,self__._,self__.fn1,meta48973__$1));
}));

(cljs.core.async.t_cljs$core$async48972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48974){
var self__ = this;
var _48974__$1 = this;
return self__.meta48973;
}));

(cljs.core.async.t_cljs$core$async48972.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48968_SHARP_){
var G__48976 = (((p1__48968_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48968_SHARP_) : self__.f.call(null,p1__48968_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48976) : f1.call(null,G__48976));
});
}));

(cljs.core.async.t_cljs$core$async48972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48970","meta48970",-184677669,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48969","cljs.core.async/t_cljs$core$async48969",-1825800650,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48973","meta48973",-775333194,null)], null);
}));

(cljs.core.async.t_cljs$core$async48972.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48972");

(cljs.core.async.t_cljs$core$async48972.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48972");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48972.
 */
cljs.core.async.__GT_t_cljs$core$async48972 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48972(f__$1,ch__$1,meta48970__$1,___$2,fn1__$1,meta48973){
return (new cljs.core.async.t_cljs$core$async48972(f__$1,ch__$1,meta48970__$1,___$2,fn1__$1,meta48973));
});

}

return (new cljs.core.async.t_cljs$core$async48972(self__.f,self__.ch,self__.meta48970,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48977 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48977) : self__.f.call(null,G__48977));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48969.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48970","meta48970",-184677669,null)], null);
}));

(cljs.core.async.t_cljs$core$async48969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48969");

(cljs.core.async.t_cljs$core$async48969.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48969.
 */
cljs.core.async.__GT_t_cljs$core$async48969 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48969(f__$1,ch__$1,meta48970){
return (new cljs.core.async.t_cljs$core$async48969(f__$1,ch__$1,meta48970));
});

}

return (new cljs.core.async.t_cljs$core$async48969(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48979 = (function (f,ch,meta48980){
this.f = f;
this.ch = ch;
this.meta48980 = meta48980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48981,meta48980__$1){
var self__ = this;
var _48981__$1 = this;
return (new cljs.core.async.t_cljs$core$async48979(self__.f,self__.ch,meta48980__$1));
}));

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48981){
var self__ = this;
var _48981__$1 = this;
return self__.meta48980;
}));

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48980","meta48980",289431379,null)], null);
}));

(cljs.core.async.t_cljs$core$async48979.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48979");

(cljs.core.async.t_cljs$core$async48979.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48979");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48979.
 */
cljs.core.async.__GT_t_cljs$core$async48979 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48979(f__$1,ch__$1,meta48980){
return (new cljs.core.async.t_cljs$core$async48979(f__$1,ch__$1,meta48980));
});

}

return (new cljs.core.async.t_cljs$core$async48979(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48982 = (function (p,ch,meta48983){
this.p = p;
this.ch = ch;
this.meta48983 = meta48983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48984,meta48983__$1){
var self__ = this;
var _48984__$1 = this;
return (new cljs.core.async.t_cljs$core$async48982(self__.p,self__.ch,meta48983__$1));
}));

(cljs.core.async.t_cljs$core$async48982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48984){
var self__ = this;
var _48984__$1 = this;
return self__.meta48983;
}));

(cljs.core.async.t_cljs$core$async48982.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48982.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48982.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48982.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48982.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48982.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48982.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48983","meta48983",2138222862,null)], null);
}));

(cljs.core.async.t_cljs$core$async48982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48982");

(cljs.core.async.t_cljs$core$async48982.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async48982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48982.
 */
cljs.core.async.__GT_t_cljs$core$async48982 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48982(p__$1,ch__$1,meta48983){
return (new cljs.core.async.t_cljs$core$async48982(p__$1,ch__$1,meta48983));
});

}

return (new cljs.core.async.t_cljs$core$async48982(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48986 = arguments.length;
switch (G__48986) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46965__auto___50262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_49011){
var state_val_49012 = (state_49011[(1)]);
if((state_val_49012 === (7))){
var inst_49007 = (state_49011[(2)]);
var state_49011__$1 = state_49011;
var statearr_49013_50265 = state_49011__$1;
(statearr_49013_50265[(2)] = inst_49007);

(statearr_49013_50265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49012 === (1))){
var state_49011__$1 = state_49011;
var statearr_49014_50266 = state_49011__$1;
(statearr_49014_50266[(2)] = null);

(statearr_49014_50266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49012 === (4))){
var inst_48993 = (state_49011[(7)]);
var inst_48993__$1 = (state_49011[(2)]);
var inst_48994 = (inst_48993__$1 == null);
var state_49011__$1 = (function (){var statearr_49015 = state_49011;
(statearr_49015[(7)] = inst_48993__$1);

return statearr_49015;
})();
if(cljs.core.truth_(inst_48994)){
var statearr_49016_50270 = state_49011__$1;
(statearr_49016_50270[(1)] = (5));

} else {
var statearr_49017_50272 = state_49011__$1;
(statearr_49017_50272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49012 === (6))){
var inst_48993 = (state_49011[(7)]);
var inst_48998 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48993) : p.call(null,inst_48993));
var state_49011__$1 = state_49011;
if(cljs.core.truth_(inst_48998)){
var statearr_49018_50273 = state_49011__$1;
(statearr_49018_50273[(1)] = (8));

} else {
var statearr_49019_50274 = state_49011__$1;
(statearr_49019_50274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49012 === (3))){
var inst_49009 = (state_49011[(2)]);
var state_49011__$1 = state_49011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49011__$1,inst_49009);
} else {
if((state_val_49012 === (2))){
var state_49011__$1 = state_49011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49011__$1,(4),ch);
} else {
if((state_val_49012 === (11))){
var inst_49001 = (state_49011[(2)]);
var state_49011__$1 = state_49011;
var statearr_49020_50276 = state_49011__$1;
(statearr_49020_50276[(2)] = inst_49001);

(statearr_49020_50276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49012 === (9))){
var state_49011__$1 = state_49011;
var statearr_49023_50279 = state_49011__$1;
(statearr_49023_50279[(2)] = null);

(statearr_49023_50279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49012 === (5))){
var inst_48996 = cljs.core.async.close_BANG_(out);
var state_49011__$1 = state_49011;
var statearr_49024_50280 = state_49011__$1;
(statearr_49024_50280[(2)] = inst_48996);

(statearr_49024_50280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49012 === (10))){
var inst_49004 = (state_49011[(2)]);
var state_49011__$1 = (function (){var statearr_49025 = state_49011;
(statearr_49025[(8)] = inst_49004);

return statearr_49025;
})();
var statearr_49027_50283 = state_49011__$1;
(statearr_49027_50283[(2)] = null);

(statearr_49027_50283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49012 === (8))){
var inst_48993 = (state_49011[(7)]);
var state_49011__$1 = state_49011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49011__$1,(11),out,inst_48993);
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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_49031 = [null,null,null,null,null,null,null,null,null];
(statearr_49031[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_49031[(1)] = (1));

return statearr_49031;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_49011){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_49011);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e49032){var ex__46563__auto__ = e49032;
var statearr_49033_50286 = state_49011;
(statearr_49033_50286[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_49011[(4)]))){
var statearr_49034_50289 = state_49011;
(statearr_49034_50289[(1)] = cljs.core.first((state_49011[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50294 = state_49011;
state_49011 = G__50294;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_49011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_49011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_49035 = f__46966__auto__();
(statearr_49035[(6)] = c__46965__auto___50262);

return statearr_49035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49037 = arguments.length;
switch (G__49037) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__46965__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_49106){
var state_val_49107 = (state_49106[(1)]);
if((state_val_49107 === (7))){
var inst_49102 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49111_50303 = state_49106__$1;
(statearr_49111_50303[(2)] = inst_49102);

(statearr_49111_50303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (20))){
var inst_49071 = (state_49106[(7)]);
var inst_49082 = (state_49106[(2)]);
var inst_49083 = cljs.core.next(inst_49071);
var inst_49057 = inst_49083;
var inst_49058 = null;
var inst_49059 = (0);
var inst_49060 = (0);
var state_49106__$1 = (function (){var statearr_49113 = state_49106;
(statearr_49113[(8)] = inst_49060);

(statearr_49113[(9)] = inst_49059);

(statearr_49113[(10)] = inst_49082);

(statearr_49113[(11)] = inst_49057);

(statearr_49113[(12)] = inst_49058);

return statearr_49113;
})();
var statearr_49114_50308 = state_49106__$1;
(statearr_49114_50308[(2)] = null);

(statearr_49114_50308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (1))){
var state_49106__$1 = state_49106;
var statearr_49115_50309 = state_49106__$1;
(statearr_49115_50309[(2)] = null);

(statearr_49115_50309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (4))){
var inst_49046 = (state_49106[(13)]);
var inst_49046__$1 = (state_49106[(2)]);
var inst_49047 = (inst_49046__$1 == null);
var state_49106__$1 = (function (){var statearr_49118 = state_49106;
(statearr_49118[(13)] = inst_49046__$1);

return statearr_49118;
})();
if(cljs.core.truth_(inst_49047)){
var statearr_49119_50311 = state_49106__$1;
(statearr_49119_50311[(1)] = (5));

} else {
var statearr_49120_50312 = state_49106__$1;
(statearr_49120_50312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (15))){
var state_49106__$1 = state_49106;
var statearr_49126_50313 = state_49106__$1;
(statearr_49126_50313[(2)] = null);

(statearr_49126_50313[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (21))){
var state_49106__$1 = state_49106;
var statearr_49127_50314 = state_49106__$1;
(statearr_49127_50314[(2)] = null);

(statearr_49127_50314[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (13))){
var inst_49060 = (state_49106[(8)]);
var inst_49059 = (state_49106[(9)]);
var inst_49057 = (state_49106[(11)]);
var inst_49058 = (state_49106[(12)]);
var inst_49067 = (state_49106[(2)]);
var inst_49068 = (inst_49060 + (1));
var tmp49121 = inst_49059;
var tmp49122 = inst_49057;
var tmp49123 = inst_49058;
var inst_49057__$1 = tmp49122;
var inst_49058__$1 = tmp49123;
var inst_49059__$1 = tmp49121;
var inst_49060__$1 = inst_49068;
var state_49106__$1 = (function (){var statearr_49128 = state_49106;
(statearr_49128[(8)] = inst_49060__$1);

(statearr_49128[(9)] = inst_49059__$1);

(statearr_49128[(14)] = inst_49067);

(statearr_49128[(11)] = inst_49057__$1);

(statearr_49128[(12)] = inst_49058__$1);

return statearr_49128;
})();
var statearr_49129_50315 = state_49106__$1;
(statearr_49129_50315[(2)] = null);

(statearr_49129_50315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (22))){
var state_49106__$1 = state_49106;
var statearr_49131_50316 = state_49106__$1;
(statearr_49131_50316[(2)] = null);

(statearr_49131_50316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (6))){
var inst_49046 = (state_49106[(13)]);
var inst_49055 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49046) : f.call(null,inst_49046));
var inst_49056 = cljs.core.seq(inst_49055);
var inst_49057 = inst_49056;
var inst_49058 = null;
var inst_49059 = (0);
var inst_49060 = (0);
var state_49106__$1 = (function (){var statearr_49132 = state_49106;
(statearr_49132[(8)] = inst_49060);

(statearr_49132[(9)] = inst_49059);

(statearr_49132[(11)] = inst_49057);

(statearr_49132[(12)] = inst_49058);

return statearr_49132;
})();
var statearr_49133_50317 = state_49106__$1;
(statearr_49133_50317[(2)] = null);

(statearr_49133_50317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (17))){
var inst_49071 = (state_49106[(7)]);
var inst_49075 = cljs.core.chunk_first(inst_49071);
var inst_49076 = cljs.core.chunk_rest(inst_49071);
var inst_49077 = cljs.core.count(inst_49075);
var inst_49057 = inst_49076;
var inst_49058 = inst_49075;
var inst_49059 = inst_49077;
var inst_49060 = (0);
var state_49106__$1 = (function (){var statearr_49138 = state_49106;
(statearr_49138[(8)] = inst_49060);

(statearr_49138[(9)] = inst_49059);

(statearr_49138[(11)] = inst_49057);

(statearr_49138[(12)] = inst_49058);

return statearr_49138;
})();
var statearr_49139_50318 = state_49106__$1;
(statearr_49139_50318[(2)] = null);

(statearr_49139_50318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (3))){
var inst_49104 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49106__$1,inst_49104);
} else {
if((state_val_49107 === (12))){
var inst_49091 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49144_50319 = state_49106__$1;
(statearr_49144_50319[(2)] = inst_49091);

(statearr_49144_50319[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (2))){
var state_49106__$1 = state_49106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49106__$1,(4),in$);
} else {
if((state_val_49107 === (23))){
var inst_49100 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49145_50320 = state_49106__$1;
(statearr_49145_50320[(2)] = inst_49100);

(statearr_49145_50320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (19))){
var inst_49086 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49146_50322 = state_49106__$1;
(statearr_49146_50322[(2)] = inst_49086);

(statearr_49146_50322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (11))){
var inst_49071 = (state_49106[(7)]);
var inst_49057 = (state_49106[(11)]);
var inst_49071__$1 = cljs.core.seq(inst_49057);
var state_49106__$1 = (function (){var statearr_49148 = state_49106;
(statearr_49148[(7)] = inst_49071__$1);

return statearr_49148;
})();
if(inst_49071__$1){
var statearr_49149_50323 = state_49106__$1;
(statearr_49149_50323[(1)] = (14));

} else {
var statearr_49150_50324 = state_49106__$1;
(statearr_49150_50324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (9))){
var inst_49093 = (state_49106[(2)]);
var inst_49094 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49106__$1 = (function (){var statearr_49151 = state_49106;
(statearr_49151[(15)] = inst_49093);

return statearr_49151;
})();
if(cljs.core.truth_(inst_49094)){
var statearr_49154_50326 = state_49106__$1;
(statearr_49154_50326[(1)] = (21));

} else {
var statearr_49155_50327 = state_49106__$1;
(statearr_49155_50327[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (5))){
var inst_49049 = cljs.core.async.close_BANG_(out);
var state_49106__$1 = state_49106;
var statearr_49158_50328 = state_49106__$1;
(statearr_49158_50328[(2)] = inst_49049);

(statearr_49158_50328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (14))){
var inst_49071 = (state_49106[(7)]);
var inst_49073 = cljs.core.chunked_seq_QMARK_(inst_49071);
var state_49106__$1 = state_49106;
if(inst_49073){
var statearr_49159_50329 = state_49106__$1;
(statearr_49159_50329[(1)] = (17));

} else {
var statearr_49161_50330 = state_49106__$1;
(statearr_49161_50330[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (16))){
var inst_49089 = (state_49106[(2)]);
var state_49106__$1 = state_49106;
var statearr_49162_50331 = state_49106__$1;
(statearr_49162_50331[(2)] = inst_49089);

(statearr_49162_50331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49107 === (10))){
var inst_49060 = (state_49106[(8)]);
var inst_49058 = (state_49106[(12)]);
var inst_49065 = cljs.core._nth(inst_49058,inst_49060);
var state_49106__$1 = state_49106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49106__$1,(13),out,inst_49065);
} else {
if((state_val_49107 === (18))){
var inst_49071 = (state_49106[(7)]);
var inst_49080 = cljs.core.first(inst_49071);
var state_49106__$1 = state_49106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49106__$1,(20),out,inst_49080);
} else {
if((state_val_49107 === (8))){
var inst_49060 = (state_49106[(8)]);
var inst_49059 = (state_49106[(9)]);
var inst_49062 = (inst_49060 < inst_49059);
var inst_49063 = inst_49062;
var state_49106__$1 = state_49106;
if(cljs.core.truth_(inst_49063)){
var statearr_49164_50334 = state_49106__$1;
(statearr_49164_50334[(1)] = (10));

} else {
var statearr_49165_50335 = state_49106__$1;
(statearr_49165_50335[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__46560__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46560__auto____0 = (function (){
var statearr_49168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49168[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46560__auto__);

(statearr_49168[(1)] = (1));

return statearr_49168;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46560__auto____1 = (function (state_49106){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_49106);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e49171){var ex__46563__auto__ = e49171;
var statearr_49172_50336 = state_49106;
(statearr_49172_50336[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_49106[(4)]))){
var statearr_49173_50337 = state_49106;
(statearr_49173_50337[(1)] = cljs.core.first((state_49106[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50338 = state_49106;
state_49106 = G__50338;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46560__auto__ = function(state_49106){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46560__auto____1.call(this,state_49106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46560__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46560__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_49177 = f__46966__auto__();
(statearr_49177[(6)] = c__46965__auto__);

return statearr_49177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));

return c__46965__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49182 = arguments.length;
switch (G__49182) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49186 = arguments.length;
switch (G__49186) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49190 = arguments.length;
switch (G__49190) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46965__auto___50348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_49218){
var state_val_49219 = (state_49218[(1)]);
if((state_val_49219 === (7))){
var inst_49213 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
var statearr_49220_50351 = state_49218__$1;
(statearr_49220_50351[(2)] = inst_49213);

(statearr_49220_50351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (1))){
var inst_49193 = null;
var state_49218__$1 = (function (){var statearr_49221 = state_49218;
(statearr_49221[(7)] = inst_49193);

return statearr_49221;
})();
var statearr_49222_50352 = state_49218__$1;
(statearr_49222_50352[(2)] = null);

(statearr_49222_50352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (4))){
var inst_49198 = (state_49218[(8)]);
var inst_49198__$1 = (state_49218[(2)]);
var inst_49199 = (inst_49198__$1 == null);
var inst_49200 = cljs.core.not(inst_49199);
var state_49218__$1 = (function (){var statearr_49223 = state_49218;
(statearr_49223[(8)] = inst_49198__$1);

return statearr_49223;
})();
if(inst_49200){
var statearr_49224_50354 = state_49218__$1;
(statearr_49224_50354[(1)] = (5));

} else {
var statearr_49225_50355 = state_49218__$1;
(statearr_49225_50355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (6))){
var state_49218__$1 = state_49218;
var statearr_49226_50356 = state_49218__$1;
(statearr_49226_50356[(2)] = null);

(statearr_49226_50356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (3))){
var inst_49215 = (state_49218[(2)]);
var inst_49216 = cljs.core.async.close_BANG_(out);
var state_49218__$1 = (function (){var statearr_49227 = state_49218;
(statearr_49227[(9)] = inst_49215);

return statearr_49227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49218__$1,inst_49216);
} else {
if((state_val_49219 === (2))){
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49218__$1,(4),ch);
} else {
if((state_val_49219 === (11))){
var inst_49198 = (state_49218[(8)]);
var inst_49207 = (state_49218[(2)]);
var inst_49193 = inst_49198;
var state_49218__$1 = (function (){var statearr_49228 = state_49218;
(statearr_49228[(7)] = inst_49193);

(statearr_49228[(10)] = inst_49207);

return statearr_49228;
})();
var statearr_49229_50362 = state_49218__$1;
(statearr_49229_50362[(2)] = null);

(statearr_49229_50362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (9))){
var inst_49198 = (state_49218[(8)]);
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49218__$1,(11),out,inst_49198);
} else {
if((state_val_49219 === (5))){
var inst_49193 = (state_49218[(7)]);
var inst_49198 = (state_49218[(8)]);
var inst_49202 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49198,inst_49193);
var state_49218__$1 = state_49218;
if(inst_49202){
var statearr_49231_50368 = state_49218__$1;
(statearr_49231_50368[(1)] = (8));

} else {
var statearr_49232_50369 = state_49218__$1;
(statearr_49232_50369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (10))){
var inst_49210 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
var statearr_49233_50374 = state_49218__$1;
(statearr_49233_50374[(2)] = inst_49210);

(statearr_49233_50374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (8))){
var inst_49193 = (state_49218[(7)]);
var tmp49230 = inst_49193;
var inst_49193__$1 = tmp49230;
var state_49218__$1 = (function (){var statearr_49234 = state_49218;
(statearr_49234[(7)] = inst_49193__$1);

return statearr_49234;
})();
var statearr_49235_50382 = state_49218__$1;
(statearr_49235_50382[(2)] = null);

(statearr_49235_50382[(1)] = (2));


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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_49236 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49236[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_49236[(1)] = (1));

return statearr_49236;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_49218){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_49218);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e49237){var ex__46563__auto__ = e49237;
var statearr_49238_50384 = state_49218;
(statearr_49238_50384[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_49218[(4)]))){
var statearr_49239_50385 = state_49218;
(statearr_49239_50385[(1)] = cljs.core.first((state_49218[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50386 = state_49218;
state_49218 = G__50386;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_49218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_49218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_49240 = f__46966__auto__();
(statearr_49240[(6)] = c__46965__auto___50348);

return statearr_49240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49244 = arguments.length;
switch (G__49244) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46965__auto___50394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_49283){
var state_val_49286 = (state_49283[(1)]);
if((state_val_49286 === (7))){
var inst_49278 = (state_49283[(2)]);
var state_49283__$1 = state_49283;
var statearr_49288_50399 = state_49283__$1;
(statearr_49288_50399[(2)] = inst_49278);

(statearr_49288_50399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (1))){
var inst_49245 = (new Array(n));
var inst_49246 = inst_49245;
var inst_49247 = (0);
var state_49283__$1 = (function (){var statearr_49289 = state_49283;
(statearr_49289[(7)] = inst_49246);

(statearr_49289[(8)] = inst_49247);

return statearr_49289;
})();
var statearr_49290_50400 = state_49283__$1;
(statearr_49290_50400[(2)] = null);

(statearr_49290_50400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (4))){
var inst_49250 = (state_49283[(9)]);
var inst_49250__$1 = (state_49283[(2)]);
var inst_49251 = (inst_49250__$1 == null);
var inst_49252 = cljs.core.not(inst_49251);
var state_49283__$1 = (function (){var statearr_49293 = state_49283;
(statearr_49293[(9)] = inst_49250__$1);

return statearr_49293;
})();
if(inst_49252){
var statearr_49294_50406 = state_49283__$1;
(statearr_49294_50406[(1)] = (5));

} else {
var statearr_49295_50407 = state_49283__$1;
(statearr_49295_50407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (15))){
var inst_49272 = (state_49283[(2)]);
var state_49283__$1 = state_49283;
var statearr_49296_50408 = state_49283__$1;
(statearr_49296_50408[(2)] = inst_49272);

(statearr_49296_50408[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (13))){
var state_49283__$1 = state_49283;
var statearr_49297_50410 = state_49283__$1;
(statearr_49297_50410[(2)] = null);

(statearr_49297_50410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (6))){
var inst_49247 = (state_49283[(8)]);
var inst_49268 = (inst_49247 > (0));
var state_49283__$1 = state_49283;
if(cljs.core.truth_(inst_49268)){
var statearr_49298_50411 = state_49283__$1;
(statearr_49298_50411[(1)] = (12));

} else {
var statearr_49299_50412 = state_49283__$1;
(statearr_49299_50412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (3))){
var inst_49280 = (state_49283[(2)]);
var state_49283__$1 = state_49283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49283__$1,inst_49280);
} else {
if((state_val_49286 === (12))){
var inst_49246 = (state_49283[(7)]);
var inst_49270 = cljs.core.vec(inst_49246);
var state_49283__$1 = state_49283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49283__$1,(15),out,inst_49270);
} else {
if((state_val_49286 === (2))){
var state_49283__$1 = state_49283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49283__$1,(4),ch);
} else {
if((state_val_49286 === (11))){
var inst_49262 = (state_49283[(2)]);
var inst_49263 = (new Array(n));
var inst_49246 = inst_49263;
var inst_49247 = (0);
var state_49283__$1 = (function (){var statearr_49300 = state_49283;
(statearr_49300[(7)] = inst_49246);

(statearr_49300[(8)] = inst_49247);

(statearr_49300[(10)] = inst_49262);

return statearr_49300;
})();
var statearr_49301_50426 = state_49283__$1;
(statearr_49301_50426[(2)] = null);

(statearr_49301_50426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (9))){
var inst_49246 = (state_49283[(7)]);
var inst_49260 = cljs.core.vec(inst_49246);
var state_49283__$1 = state_49283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49283__$1,(11),out,inst_49260);
} else {
if((state_val_49286 === (5))){
var inst_49250 = (state_49283[(9)]);
var inst_49246 = (state_49283[(7)]);
var inst_49247 = (state_49283[(8)]);
var inst_49255 = (state_49283[(11)]);
var inst_49254 = (inst_49246[inst_49247] = inst_49250);
var inst_49255__$1 = (inst_49247 + (1));
var inst_49256 = (inst_49255__$1 < n);
var state_49283__$1 = (function (){var statearr_49302 = state_49283;
(statearr_49302[(12)] = inst_49254);

(statearr_49302[(11)] = inst_49255__$1);

return statearr_49302;
})();
if(cljs.core.truth_(inst_49256)){
var statearr_49303_50431 = state_49283__$1;
(statearr_49303_50431[(1)] = (8));

} else {
var statearr_49304_50432 = state_49283__$1;
(statearr_49304_50432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (14))){
var inst_49275 = (state_49283[(2)]);
var inst_49276 = cljs.core.async.close_BANG_(out);
var state_49283__$1 = (function (){var statearr_49306 = state_49283;
(statearr_49306[(13)] = inst_49275);

return statearr_49306;
})();
var statearr_49307_50436 = state_49283__$1;
(statearr_49307_50436[(2)] = inst_49276);

(statearr_49307_50436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (10))){
var inst_49266 = (state_49283[(2)]);
var state_49283__$1 = state_49283;
var statearr_49308_50437 = state_49283__$1;
(statearr_49308_50437[(2)] = inst_49266);

(statearr_49308_50437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49286 === (8))){
var inst_49246 = (state_49283[(7)]);
var inst_49255 = (state_49283[(11)]);
var tmp49305 = inst_49246;
var inst_49246__$1 = tmp49305;
var inst_49247 = inst_49255;
var state_49283__$1 = (function (){var statearr_49309 = state_49283;
(statearr_49309[(7)] = inst_49246__$1);

(statearr_49309[(8)] = inst_49247);

return statearr_49309;
})();
var statearr_49310_50439 = state_49283__$1;
(statearr_49310_50439[(2)] = null);

(statearr_49310_50439[(1)] = (2));


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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_49311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49311[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_49311[(1)] = (1));

return statearr_49311;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_49283){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_49283);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e49312){var ex__46563__auto__ = e49312;
var statearr_49313_50445 = state_49283;
(statearr_49313_50445[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_49283[(4)]))){
var statearr_49314_50446 = state_49283;
(statearr_49314_50446[(1)] = cljs.core.first((state_49283[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50447 = state_49283;
state_49283 = G__50447;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_49283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_49283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_49318 = f__46966__auto__();
(statearr_49318[(6)] = c__46965__auto___50394);

return statearr_49318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49321 = arguments.length;
switch (G__49321) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__46965__auto___50452 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_49366){
var state_val_49367 = (state_49366[(1)]);
if((state_val_49367 === (7))){
var inst_49362 = (state_49366[(2)]);
var state_49366__$1 = state_49366;
var statearr_49371_50453 = state_49366__$1;
(statearr_49371_50453[(2)] = inst_49362);

(statearr_49371_50453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49367 === (1))){
var inst_49325 = [];
var inst_49326 = inst_49325;
var inst_49327 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49366__$1 = (function (){var statearr_49372 = state_49366;
(statearr_49372[(7)] = inst_49326);

(statearr_49372[(8)] = inst_49327);

return statearr_49372;
})();
var statearr_49373_50454 = state_49366__$1;
(statearr_49373_50454[(2)] = null);

(statearr_49373_50454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49367 === (4))){
var inst_49330 = (state_49366[(9)]);
var inst_49330__$1 = (state_49366[(2)]);
var inst_49331 = (inst_49330__$1 == null);
var inst_49332 = cljs.core.not(inst_49331);
var state_49366__$1 = (function (){var statearr_49374 = state_49366;
(statearr_49374[(9)] = inst_49330__$1);

return statearr_49374;
})();
if(inst_49332){
var statearr_49375_50456 = state_49366__$1;
(statearr_49375_50456[(1)] = (5));

} else {
var statearr_49376_50457 = state_49366__$1;
(statearr_49376_50457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49367 === (15))){
var inst_49356 = (state_49366[(2)]);
var state_49366__$1 = state_49366;
var statearr_49377_50458 = state_49366__$1;
(statearr_49377_50458[(2)] = inst_49356);

(statearr_49377_50458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49367 === (13))){
var state_49366__$1 = state_49366;
var statearr_49378_50460 = state_49366__$1;
(statearr_49378_50460[(2)] = null);

(statearr_49378_50460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49367 === (6))){
var inst_49326 = (state_49366[(7)]);
var inst_49351 = inst_49326.length;
var inst_49352 = (inst_49351 > (0));
var state_49366__$1 = state_49366;
if(cljs.core.truth_(inst_49352)){
var statearr_49379_50464 = state_49366__$1;
(statearr_49379_50464[(1)] = (12));

} else {
var statearr_49380_50465 = state_49366__$1;
(statearr_49380_50465[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49367 === (3))){
var inst_49364 = (state_49366[(2)]);
var state_49366__$1 = state_49366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49366__$1,inst_49364);
} else {
if((state_val_49367 === (12))){
var inst_49326 = (state_49366[(7)]);
var inst_49354 = cljs.core.vec(inst_49326);
var state_49366__$1 = state_49366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49366__$1,(15),out,inst_49354);
} else {
if((state_val_49367 === (2))){
var state_49366__$1 = state_49366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49366__$1,(4),ch);
} else {
if((state_val_49367 === (11))){
var inst_49334 = (state_49366[(10)]);
var inst_49330 = (state_49366[(9)]);
var inst_49344 = (state_49366[(2)]);
var inst_49345 = [];
var inst_49346 = inst_49345.push(inst_49330);
var inst_49326 = inst_49345;
var inst_49327 = inst_49334;
var state_49366__$1 = (function (){var statearr_49381 = state_49366;
(statearr_49381[(7)] = inst_49326);

(statearr_49381[(8)] = inst_49327);

(statearr_49381[(11)] = inst_49344);

(statearr_49381[(12)] = inst_49346);

return statearr_49381;
})();
var statearr_49382_50469 = state_49366__$1;
(statearr_49382_50469[(2)] = null);

(statearr_49382_50469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49367 === (9))){
var inst_49326 = (state_49366[(7)]);
var inst_49342 = cljs.core.vec(inst_49326);
var state_49366__$1 = state_49366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49366__$1,(11),out,inst_49342);
} else {
if((state_val_49367 === (5))){
var inst_49334 = (state_49366[(10)]);
var inst_49327 = (state_49366[(8)]);
var inst_49330 = (state_49366[(9)]);
var inst_49334__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49330) : f.call(null,inst_49330));
var inst_49335 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49334__$1,inst_49327);
var inst_49336 = cljs.core.keyword_identical_QMARK_(inst_49327,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49337 = ((inst_49335) || (inst_49336));
var state_49366__$1 = (function (){var statearr_49383 = state_49366;
(statearr_49383[(10)] = inst_49334__$1);

return statearr_49383;
})();
if(cljs.core.truth_(inst_49337)){
var statearr_49384_50471 = state_49366__$1;
(statearr_49384_50471[(1)] = (8));

} else {
var statearr_49385_50472 = state_49366__$1;
(statearr_49385_50472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49367 === (14))){
var inst_49359 = (state_49366[(2)]);
var inst_49360 = cljs.core.async.close_BANG_(out);
var state_49366__$1 = (function (){var statearr_49387 = state_49366;
(statearr_49387[(13)] = inst_49359);

return statearr_49387;
})();
var statearr_49388_50475 = state_49366__$1;
(statearr_49388_50475[(2)] = inst_49360);

(statearr_49388_50475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49367 === (10))){
var inst_49349 = (state_49366[(2)]);
var state_49366__$1 = state_49366;
var statearr_49389_50479 = state_49366__$1;
(statearr_49389_50479[(2)] = inst_49349);

(statearr_49389_50479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49367 === (8))){
var inst_49334 = (state_49366[(10)]);
var inst_49326 = (state_49366[(7)]);
var inst_49330 = (state_49366[(9)]);
var inst_49339 = inst_49326.push(inst_49330);
var tmp49386 = inst_49326;
var inst_49326__$1 = tmp49386;
var inst_49327 = inst_49334;
var state_49366__$1 = (function (){var statearr_49390 = state_49366;
(statearr_49390[(7)] = inst_49326__$1);

(statearr_49390[(8)] = inst_49327);

(statearr_49390[(14)] = inst_49339);

return statearr_49390;
})();
var statearr_49391_50480 = state_49366__$1;
(statearr_49391_50480[(2)] = null);

(statearr_49391_50480[(1)] = (2));


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
var cljs$core$async$state_machine__46560__auto__ = null;
var cljs$core$async$state_machine__46560__auto____0 = (function (){
var statearr_49392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49392[(0)] = cljs$core$async$state_machine__46560__auto__);

(statearr_49392[(1)] = (1));

return statearr_49392;
});
var cljs$core$async$state_machine__46560__auto____1 = (function (state_49366){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_49366);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e49393){var ex__46563__auto__ = e49393;
var statearr_49394_50481 = state_49366;
(statearr_49394_50481[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_49366[(4)]))){
var statearr_49395_50482 = state_49366;
(statearr_49395_50482[(1)] = cljs.core.first((state_49366[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50483 = state_49366;
state_49366 = G__50483;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
cljs$core$async$state_machine__46560__auto__ = function(state_49366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46560__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46560__auto____1.call(this,state_49366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46560__auto____0;
cljs$core$async$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46560__auto____1;
return cljs$core$async$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_49399 = f__46966__auto__();
(statearr_49399[(6)] = c__46965__auto___50452);

return statearr_49399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

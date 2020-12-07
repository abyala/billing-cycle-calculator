goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52355 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52356 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52356);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___52529 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___52529)){
var new_db_52530 = temp__5735__auto___52529;
var fexpr__52362_52531 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52362_52531.cljs$core$IFn$_invoke$arity$1 ? fexpr__52362_52531.cljs$core$IFn$_invoke$arity$1(new_db_52530) : fexpr__52362_52531.call(null,new_db_52530));
} else {
}

var seq__52363 = cljs.core.seq(effects_without_db);
var chunk__52364 = null;
var count__52365 = (0);
var i__52366 = (0);
while(true){
if((i__52366 < count__52365)){
var vec__52378 = chunk__52364.cljs$core$IIndexed$_nth$arity$2(null,i__52366);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52378,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52378,(1),null);
var temp__5733__auto___52532 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52532)){
var effect_fn_52533 = temp__5733__auto___52532;
(effect_fn_52533.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52533.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52533.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52534 = seq__52363;
var G__52535 = chunk__52364;
var G__52536 = count__52365;
var G__52537 = (i__52366 + (1));
seq__52363 = G__52534;
chunk__52364 = G__52535;
count__52365 = G__52536;
i__52366 = G__52537;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52363);
if(temp__5735__auto__){
var seq__52363__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52363__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52363__$1);
var G__52538 = cljs.core.chunk_rest(seq__52363__$1);
var G__52539 = c__4556__auto__;
var G__52540 = cljs.core.count(c__4556__auto__);
var G__52541 = (0);
seq__52363 = G__52538;
chunk__52364 = G__52539;
count__52365 = G__52540;
i__52366 = G__52541;
continue;
} else {
var vec__52382 = cljs.core.first(seq__52363__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52382,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52382,(1),null);
var temp__5733__auto___52542 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52542)){
var effect_fn_52543 = temp__5733__auto___52542;
(effect_fn_52543.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52543.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52543.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52545 = cljs.core.next(seq__52363__$1);
var G__52546 = null;
var G__52547 = (0);
var G__52548 = (0);
seq__52363 = G__52545;
chunk__52364 = G__52546;
count__52365 = G__52547;
i__52366 = G__52548;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51740__auto___52549 = re_frame.interop.now();
var duration__51741__auto___52550 = (end__51740__auto___52549 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51741__auto___52550,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51740__auto___52549);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52355);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___52551 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___52551)){
var new_db_52552 = temp__5735__auto___52551;
var fexpr__52386_52553 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52386_52553.cljs$core$IFn$_invoke$arity$1 ? fexpr__52386_52553.cljs$core$IFn$_invoke$arity$1(new_db_52552) : fexpr__52386_52553.call(null,new_db_52552));
} else {
}

var seq__52387 = cljs.core.seq(effects_without_db);
var chunk__52388 = null;
var count__52389 = (0);
var i__52390 = (0);
while(true){
if((i__52390 < count__52389)){
var vec__52413 = chunk__52388.cljs$core$IIndexed$_nth$arity$2(null,i__52390);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52413,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52413,(1),null);
var temp__5733__auto___52555 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52555)){
var effect_fn_52556 = temp__5733__auto___52555;
(effect_fn_52556.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52556.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52556.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52559 = seq__52387;
var G__52560 = chunk__52388;
var G__52561 = count__52389;
var G__52562 = (i__52390 + (1));
seq__52387 = G__52559;
chunk__52388 = G__52560;
count__52389 = G__52561;
i__52390 = G__52562;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52387);
if(temp__5735__auto__){
var seq__52387__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52387__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52387__$1);
var G__52565 = cljs.core.chunk_rest(seq__52387__$1);
var G__52566 = c__4556__auto__;
var G__52567 = cljs.core.count(c__4556__auto__);
var G__52568 = (0);
seq__52387 = G__52565;
chunk__52388 = G__52566;
count__52389 = G__52567;
i__52390 = G__52568;
continue;
} else {
var vec__52419 = cljs.core.first(seq__52387__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52419,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52419,(1),null);
var temp__5733__auto___52570 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52570)){
var effect_fn_52572 = temp__5733__auto___52570;
(effect_fn_52572.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52572.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52572.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52576 = cljs.core.next(seq__52387__$1);
var G__52577 = null;
var G__52578 = (0);
var G__52579 = (0);
seq__52387 = G__52576;
chunk__52388 = G__52577;
count__52389 = G__52578;
i__52390 = G__52579;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__52427){
var map__52428 = p__52427;
var map__52428__$1 = (((((!((map__52428 == null))))?(((((map__52428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52428):map__52428);
var effect = map__52428__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52428__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52428__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__52431 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52432 = null;
var count__52433 = (0);
var i__52434 = (0);
while(true){
if((i__52434 < count__52433)){
var effect = chunk__52432.cljs$core$IIndexed$_nth$arity$2(null,i__52434);
re_frame.fx.dispatch_later(effect);


var G__52586 = seq__52431;
var G__52587 = chunk__52432;
var G__52588 = count__52433;
var G__52589 = (i__52434 + (1));
seq__52431 = G__52586;
chunk__52432 = G__52587;
count__52433 = G__52588;
i__52434 = G__52589;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52431);
if(temp__5735__auto__){
var seq__52431__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52431__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52431__$1);
var G__52592 = cljs.core.chunk_rest(seq__52431__$1);
var G__52593 = c__4556__auto__;
var G__52594 = cljs.core.count(c__4556__auto__);
var G__52595 = (0);
seq__52431 = G__52592;
chunk__52432 = G__52593;
count__52433 = G__52594;
i__52434 = G__52595;
continue;
} else {
var effect = cljs.core.first(seq__52431__$1);
re_frame.fx.dispatch_later(effect);


var G__52597 = cljs.core.next(seq__52431__$1);
var G__52598 = null;
var G__52599 = (0);
var G__52600 = (0);
seq__52431 = G__52597;
chunk__52432 = G__52598;
count__52433 = G__52599;
i__52434 = G__52600;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__52452 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__52453 = null;
var count__52454 = (0);
var i__52455 = (0);
while(true){
if((i__52455 < count__52454)){
var vec__52468 = chunk__52453.cljs$core$IIndexed$_nth$arity$2(null,i__52455);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52468,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52468,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___52606 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52606)){
var effect_fn_52607 = temp__5733__auto___52606;
(effect_fn_52607.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52607.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52607.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__52608 = seq__52452;
var G__52609 = chunk__52453;
var G__52610 = count__52454;
var G__52611 = (i__52455 + (1));
seq__52452 = G__52608;
chunk__52453 = G__52609;
count__52454 = G__52610;
i__52455 = G__52611;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52452);
if(temp__5735__auto__){
var seq__52452__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52452__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52452__$1);
var G__52614 = cljs.core.chunk_rest(seq__52452__$1);
var G__52615 = c__4556__auto__;
var G__52616 = cljs.core.count(c__4556__auto__);
var G__52617 = (0);
seq__52452 = G__52614;
chunk__52453 = G__52615;
count__52454 = G__52616;
i__52455 = G__52617;
continue;
} else {
var vec__52483 = cljs.core.first(seq__52452__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52483,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52483,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___52619 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52619)){
var effect_fn_52625 = temp__5733__auto___52619;
(effect_fn_52625.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52625.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52625.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__52626 = cljs.core.next(seq__52452__$1);
var G__52627 = null;
var G__52628 = (0);
var G__52629 = (0);
seq__52452 = G__52626;
chunk__52453 = G__52627;
count__52454 = G__52628;
i__52455 = G__52629;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52495 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52496 = null;
var count__52497 = (0);
var i__52498 = (0);
while(true){
if((i__52498 < count__52497)){
var event = chunk__52496.cljs$core$IIndexed$_nth$arity$2(null,i__52498);
re_frame.router.dispatch(event);


var G__52636 = seq__52495;
var G__52637 = chunk__52496;
var G__52638 = count__52497;
var G__52639 = (i__52498 + (1));
seq__52495 = G__52636;
chunk__52496 = G__52637;
count__52497 = G__52638;
i__52498 = G__52639;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52495);
if(temp__5735__auto__){
var seq__52495__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52495__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52495__$1);
var G__52641 = cljs.core.chunk_rest(seq__52495__$1);
var G__52642 = c__4556__auto__;
var G__52643 = cljs.core.count(c__4556__auto__);
var G__52644 = (0);
seq__52495 = G__52641;
chunk__52496 = G__52642;
count__52497 = G__52643;
i__52498 = G__52644;
continue;
} else {
var event = cljs.core.first(seq__52495__$1);
re_frame.router.dispatch(event);


var G__52645 = cljs.core.next(seq__52495__$1);
var G__52646 = null;
var G__52647 = (0);
var G__52648 = (0);
seq__52495 = G__52645;
chunk__52496 = G__52646;
count__52497 = G__52647;
i__52498 = G__52648;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52519 = cljs.core.seq(value);
var chunk__52520 = null;
var count__52521 = (0);
var i__52522 = (0);
while(true){
if((i__52522 < count__52521)){
var event = chunk__52520.cljs$core$IIndexed$_nth$arity$2(null,i__52522);
clear_event(event);


var G__52649 = seq__52519;
var G__52650 = chunk__52520;
var G__52651 = count__52521;
var G__52652 = (i__52522 + (1));
seq__52519 = G__52649;
chunk__52520 = G__52650;
count__52521 = G__52651;
i__52522 = G__52652;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52519);
if(temp__5735__auto__){
var seq__52519__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52519__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52519__$1);
var G__52653 = cljs.core.chunk_rest(seq__52519__$1);
var G__52654 = c__4556__auto__;
var G__52655 = cljs.core.count(c__4556__auto__);
var G__52656 = (0);
seq__52519 = G__52653;
chunk__52520 = G__52654;
count__52521 = G__52655;
i__52522 = G__52656;
continue;
} else {
var event = cljs.core.first(seq__52519__$1);
clear_event(event);


var G__52658 = cljs.core.next(seq__52519__$1);
var G__52659 = null;
var G__52660 = (0);
var G__52661 = (0);
seq__52519 = G__52658;
chunk__52520 = G__52659;
count__52521 = G__52660;
i__52522 = G__52661;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

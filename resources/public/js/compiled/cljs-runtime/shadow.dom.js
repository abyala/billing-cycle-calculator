goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50321 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_50321(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50325 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_50325(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49441 = coll;
var G__49442 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49441,G__49442) : shadow.dom.lazy_native_coll_seq.call(null,G__49441,G__49442));
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
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
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
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49451 = arguments.length;
switch (G__49451) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49454 = arguments.length;
switch (G__49454) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49457 = arguments.length;
switch (G__49457) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49462 = arguments.length;
switch (G__49462) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49475 = arguments.length;
switch (G__49475) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49482 = arguments.length;
switch (G__49482) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49496){if((e49496 instanceof Object)){
var e = e49496;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49496;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49514 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49515 = null;
var count__49516 = (0);
var i__49517 = (0);
while(true){
if((i__49517 < count__49516)){
var el = chunk__49515.cljs$core$IIndexed$_nth$arity$2(null,i__49517);
var handler_50363__$1 = ((function (seq__49514,chunk__49515,count__49516,i__49517,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49514,chunk__49515,count__49516,i__49517,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50363__$1);


var G__50364 = seq__49514;
var G__50365 = chunk__49515;
var G__50366 = count__49516;
var G__50367 = (i__49517 + (1));
seq__49514 = G__50364;
chunk__49515 = G__50365;
count__49516 = G__50366;
i__49517 = G__50367;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49514);
if(temp__5735__auto__){
var seq__49514__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49514__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49514__$1);
var G__50370 = cljs.core.chunk_rest(seq__49514__$1);
var G__50371 = c__4556__auto__;
var G__50372 = cljs.core.count(c__4556__auto__);
var G__50373 = (0);
seq__49514 = G__50370;
chunk__49515 = G__50371;
count__49516 = G__50372;
i__49517 = G__50373;
continue;
} else {
var el = cljs.core.first(seq__49514__$1);
var handler_50376__$1 = ((function (seq__49514,chunk__49515,count__49516,i__49517,el,seq__49514__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49514,chunk__49515,count__49516,i__49517,el,seq__49514__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50376__$1);


var G__50378 = cljs.core.next(seq__49514__$1);
var G__50379 = null;
var G__50380 = (0);
var G__50381 = (0);
seq__49514 = G__50378;
chunk__49515 = G__50379;
count__49516 = G__50380;
i__49517 = G__50381;
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
var G__49538 = arguments.length;
switch (G__49538) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var seq__49550 = cljs.core.seq(events);
var chunk__49551 = null;
var count__49552 = (0);
var i__49553 = (0);
while(true){
if((i__49553 < count__49552)){
var vec__49566 = chunk__49551.cljs$core$IIndexed$_nth$arity$2(null,i__49553);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49566,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50389 = seq__49550;
var G__50390 = chunk__49551;
var G__50391 = count__49552;
var G__50392 = (i__49553 + (1));
seq__49550 = G__50389;
chunk__49551 = G__50390;
count__49552 = G__50391;
i__49553 = G__50392;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49550);
if(temp__5735__auto__){
var seq__49550__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49550__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49550__$1);
var G__50395 = cljs.core.chunk_rest(seq__49550__$1);
var G__50396 = c__4556__auto__;
var G__50397 = cljs.core.count(c__4556__auto__);
var G__50398 = (0);
seq__49550 = G__50395;
chunk__49551 = G__50396;
count__49552 = G__50397;
i__49553 = G__50398;
continue;
} else {
var vec__49572 = cljs.core.first(seq__49550__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49572,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50401 = cljs.core.next(seq__49550__$1);
var G__50402 = null;
var G__50403 = (0);
var G__50404 = (0);
seq__49550 = G__50401;
chunk__49551 = G__50402;
count__49552 = G__50403;
i__49553 = G__50404;
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
var seq__49584 = cljs.core.seq(styles);
var chunk__49585 = null;
var count__49586 = (0);
var i__49587 = (0);
while(true){
if((i__49587 < count__49586)){
var vec__49600 = chunk__49585.cljs$core$IIndexed$_nth$arity$2(null,i__49587);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49600,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50413 = seq__49584;
var G__50414 = chunk__49585;
var G__50415 = count__49586;
var G__50416 = (i__49587 + (1));
seq__49584 = G__50413;
chunk__49585 = G__50414;
count__49586 = G__50415;
i__49587 = G__50416;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49584);
if(temp__5735__auto__){
var seq__49584__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49584__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49584__$1);
var G__50422 = cljs.core.chunk_rest(seq__49584__$1);
var G__50423 = c__4556__auto__;
var G__50424 = cljs.core.count(c__4556__auto__);
var G__50425 = (0);
seq__49584 = G__50422;
chunk__49585 = G__50423;
count__49586 = G__50424;
i__49587 = G__50425;
continue;
} else {
var vec__49606 = cljs.core.first(seq__49584__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49606,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49606,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50427 = cljs.core.next(seq__49584__$1);
var G__50428 = null;
var G__50429 = (0);
var G__50430 = (0);
seq__49584 = G__50427;
chunk__49585 = G__50428;
count__49586 = G__50429;
i__49587 = G__50430;
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
var G__49613_50433 = key;
var G__49613_50434__$1 = (((G__49613_50433 instanceof cljs.core.Keyword))?G__49613_50433.fqn:null);
switch (G__49613_50434__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

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
var ks_50449 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_50449,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_50449,"aria-");
}
})())){
el.setAttribute(ks_50449,value);
} else {
(el[ks_50449] = value);
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
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
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49640){
var map__49641 = p__49640;
var map__49641__$1 = (((((!((map__49641 == null))))?(((((map__49641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49641):map__49641);
var props = map__49641__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49641__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49647 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49647,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49647,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49647,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49651 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49651,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49651;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49658 = arguments.length;
switch (G__49658) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49664){
var vec__49665 = p__49664;
var seq__49666 = cljs.core.seq(vec__49665);
var first__49667 = cljs.core.first(seq__49666);
var seq__49666__$1 = cljs.core.next(seq__49666);
var nn = first__49667;
var first__49667__$1 = cljs.core.first(seq__49666__$1);
var seq__49666__$2 = cljs.core.next(seq__49666__$1);
var np = first__49667__$1;
var nc = seq__49666__$2;
var node = vec__49665;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49670 = nn;
var G__49671 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49670,G__49671) : create_fn.call(null,G__49670,G__49671));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49673 = nn;
var G__49674 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49673,G__49674) : create_fn.call(null,G__49673,G__49674));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49678 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49678,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49678,(1),null);
var seq__49682_50486 = cljs.core.seq(node_children);
var chunk__49683_50487 = null;
var count__49684_50488 = (0);
var i__49685_50489 = (0);
while(true){
if((i__49685_50489 < count__49684_50488)){
var child_struct_50493 = chunk__49683_50487.cljs$core$IIndexed$_nth$arity$2(null,i__49685_50489);
var children_50494 = shadow.dom.dom_node(child_struct_50493);
if(cljs.core.seq_QMARK_(children_50494)){
var seq__49723_50495 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50494));
var chunk__49725_50496 = null;
var count__49726_50497 = (0);
var i__49727_50498 = (0);
while(true){
if((i__49727_50498 < count__49726_50497)){
var child_50499 = chunk__49725_50496.cljs$core$IIndexed$_nth$arity$2(null,i__49727_50498);
if(cljs.core.truth_(child_50499)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50499);


var G__50500 = seq__49723_50495;
var G__50501 = chunk__49725_50496;
var G__50502 = count__49726_50497;
var G__50503 = (i__49727_50498 + (1));
seq__49723_50495 = G__50500;
chunk__49725_50496 = G__50501;
count__49726_50497 = G__50502;
i__49727_50498 = G__50503;
continue;
} else {
var G__50504 = seq__49723_50495;
var G__50505 = chunk__49725_50496;
var G__50506 = count__49726_50497;
var G__50507 = (i__49727_50498 + (1));
seq__49723_50495 = G__50504;
chunk__49725_50496 = G__50505;
count__49726_50497 = G__50506;
i__49727_50498 = G__50507;
continue;
}
} else {
var temp__5735__auto___50508 = cljs.core.seq(seq__49723_50495);
if(temp__5735__auto___50508){
var seq__49723_50510__$1 = temp__5735__auto___50508;
if(cljs.core.chunked_seq_QMARK_(seq__49723_50510__$1)){
var c__4556__auto___50511 = cljs.core.chunk_first(seq__49723_50510__$1);
var G__50515 = cljs.core.chunk_rest(seq__49723_50510__$1);
var G__50516 = c__4556__auto___50511;
var G__50517 = cljs.core.count(c__4556__auto___50511);
var G__50518 = (0);
seq__49723_50495 = G__50515;
chunk__49725_50496 = G__50516;
count__49726_50497 = G__50517;
i__49727_50498 = G__50518;
continue;
} else {
var child_50519 = cljs.core.first(seq__49723_50510__$1);
if(cljs.core.truth_(child_50519)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50519);


var G__50524 = cljs.core.next(seq__49723_50510__$1);
var G__50525 = null;
var G__50526 = (0);
var G__50527 = (0);
seq__49723_50495 = G__50524;
chunk__49725_50496 = G__50525;
count__49726_50497 = G__50526;
i__49727_50498 = G__50527;
continue;
} else {
var G__50528 = cljs.core.next(seq__49723_50510__$1);
var G__50529 = null;
var G__50530 = (0);
var G__50531 = (0);
seq__49723_50495 = G__50528;
chunk__49725_50496 = G__50529;
count__49726_50497 = G__50530;
i__49727_50498 = G__50531;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50494);
}


var G__50532 = seq__49682_50486;
var G__50533 = chunk__49683_50487;
var G__50534 = count__49684_50488;
var G__50535 = (i__49685_50489 + (1));
seq__49682_50486 = G__50532;
chunk__49683_50487 = G__50533;
count__49684_50488 = G__50534;
i__49685_50489 = G__50535;
continue;
} else {
var temp__5735__auto___50536 = cljs.core.seq(seq__49682_50486);
if(temp__5735__auto___50536){
var seq__49682_50537__$1 = temp__5735__auto___50536;
if(cljs.core.chunked_seq_QMARK_(seq__49682_50537__$1)){
var c__4556__auto___50538 = cljs.core.chunk_first(seq__49682_50537__$1);
var G__50539 = cljs.core.chunk_rest(seq__49682_50537__$1);
var G__50540 = c__4556__auto___50538;
var G__50541 = cljs.core.count(c__4556__auto___50538);
var G__50542 = (0);
seq__49682_50486 = G__50539;
chunk__49683_50487 = G__50540;
count__49684_50488 = G__50541;
i__49685_50489 = G__50542;
continue;
} else {
var child_struct_50546 = cljs.core.first(seq__49682_50537__$1);
var children_50547 = shadow.dom.dom_node(child_struct_50546);
if(cljs.core.seq_QMARK_(children_50547)){
var seq__49730_50550 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50547));
var chunk__49732_50551 = null;
var count__49733_50552 = (0);
var i__49734_50553 = (0);
while(true){
if((i__49734_50553 < count__49733_50552)){
var child_50554 = chunk__49732_50551.cljs$core$IIndexed$_nth$arity$2(null,i__49734_50553);
if(cljs.core.truth_(child_50554)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50554);


var G__50555 = seq__49730_50550;
var G__50556 = chunk__49732_50551;
var G__50557 = count__49733_50552;
var G__50558 = (i__49734_50553 + (1));
seq__49730_50550 = G__50555;
chunk__49732_50551 = G__50556;
count__49733_50552 = G__50557;
i__49734_50553 = G__50558;
continue;
} else {
var G__50559 = seq__49730_50550;
var G__50560 = chunk__49732_50551;
var G__50561 = count__49733_50552;
var G__50562 = (i__49734_50553 + (1));
seq__49730_50550 = G__50559;
chunk__49732_50551 = G__50560;
count__49733_50552 = G__50561;
i__49734_50553 = G__50562;
continue;
}
} else {
var temp__5735__auto___50563__$1 = cljs.core.seq(seq__49730_50550);
if(temp__5735__auto___50563__$1){
var seq__49730_50564__$1 = temp__5735__auto___50563__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49730_50564__$1)){
var c__4556__auto___50565 = cljs.core.chunk_first(seq__49730_50564__$1);
var G__50566 = cljs.core.chunk_rest(seq__49730_50564__$1);
var G__50567 = c__4556__auto___50565;
var G__50568 = cljs.core.count(c__4556__auto___50565);
var G__50569 = (0);
seq__49730_50550 = G__50566;
chunk__49732_50551 = G__50567;
count__49733_50552 = G__50568;
i__49734_50553 = G__50569;
continue;
} else {
var child_50570 = cljs.core.first(seq__49730_50564__$1);
if(cljs.core.truth_(child_50570)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50570);


var G__50571 = cljs.core.next(seq__49730_50564__$1);
var G__50572 = null;
var G__50573 = (0);
var G__50574 = (0);
seq__49730_50550 = G__50571;
chunk__49732_50551 = G__50572;
count__49733_50552 = G__50573;
i__49734_50553 = G__50574;
continue;
} else {
var G__50575 = cljs.core.next(seq__49730_50564__$1);
var G__50576 = null;
var G__50577 = (0);
var G__50578 = (0);
seq__49730_50550 = G__50575;
chunk__49732_50551 = G__50576;
count__49733_50552 = G__50577;
i__49734_50553 = G__50578;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50547);
}


var G__50579 = cljs.core.next(seq__49682_50537__$1);
var G__50580 = null;
var G__50581 = (0);
var G__50582 = (0);
seq__49682_50486 = G__50579;
chunk__49683_50487 = G__50580;
count__49684_50488 = G__50581;
i__49685_50489 = G__50582;
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
var seq__49759 = cljs.core.seq(node);
var chunk__49760 = null;
var count__49761 = (0);
var i__49762 = (0);
while(true){
if((i__49762 < count__49761)){
var n = chunk__49760.cljs$core$IIndexed$_nth$arity$2(null,i__49762);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50594 = seq__49759;
var G__50595 = chunk__49760;
var G__50596 = count__49761;
var G__50597 = (i__49762 + (1));
seq__49759 = G__50594;
chunk__49760 = G__50595;
count__49761 = G__50596;
i__49762 = G__50597;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49759);
if(temp__5735__auto__){
var seq__49759__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49759__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49759__$1);
var G__50598 = cljs.core.chunk_rest(seq__49759__$1);
var G__50599 = c__4556__auto__;
var G__50600 = cljs.core.count(c__4556__auto__);
var G__50601 = (0);
seq__49759 = G__50598;
chunk__49760 = G__50599;
count__49761 = G__50600;
i__49762 = G__50601;
continue;
} else {
var n = cljs.core.first(seq__49759__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50602 = cljs.core.next(seq__49759__$1);
var G__50603 = null;
var G__50604 = (0);
var G__50605 = (0);
seq__49759 = G__50602;
chunk__49760 = G__50603;
count__49761 = G__50604;
i__49762 = G__50605;
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
var G__49784 = arguments.length;
switch (G__49784) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49794 = arguments.length;
switch (G__49794) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49808 = arguments.length;
switch (G__49808) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50619 = arguments.length;
var i__4737__auto___50620 = (0);
while(true){
if((i__4737__auto___50620 < len__4736__auto___50619)){
args__4742__auto__.push((arguments[i__4737__auto___50620]));

var G__50621 = (i__4737__auto___50620 + (1));
i__4737__auto___50620 = G__50621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49831_50625 = cljs.core.seq(nodes);
var chunk__49832_50626 = null;
var count__49833_50627 = (0);
var i__49834_50628 = (0);
while(true){
if((i__49834_50628 < count__49833_50627)){
var node_50629 = chunk__49832_50626.cljs$core$IIndexed$_nth$arity$2(null,i__49834_50628);
fragment.appendChild(shadow.dom._to_dom(node_50629));


var G__50630 = seq__49831_50625;
var G__50631 = chunk__49832_50626;
var G__50632 = count__49833_50627;
var G__50633 = (i__49834_50628 + (1));
seq__49831_50625 = G__50630;
chunk__49832_50626 = G__50631;
count__49833_50627 = G__50632;
i__49834_50628 = G__50633;
continue;
} else {
var temp__5735__auto___50634 = cljs.core.seq(seq__49831_50625);
if(temp__5735__auto___50634){
var seq__49831_50635__$1 = temp__5735__auto___50634;
if(cljs.core.chunked_seq_QMARK_(seq__49831_50635__$1)){
var c__4556__auto___50636 = cljs.core.chunk_first(seq__49831_50635__$1);
var G__50637 = cljs.core.chunk_rest(seq__49831_50635__$1);
var G__50638 = c__4556__auto___50636;
var G__50639 = cljs.core.count(c__4556__auto___50636);
var G__50640 = (0);
seq__49831_50625 = G__50637;
chunk__49832_50626 = G__50638;
count__49833_50627 = G__50639;
i__49834_50628 = G__50640;
continue;
} else {
var node_50641 = cljs.core.first(seq__49831_50635__$1);
fragment.appendChild(shadow.dom._to_dom(node_50641));


var G__50642 = cljs.core.next(seq__49831_50635__$1);
var G__50643 = null;
var G__50644 = (0);
var G__50645 = (0);
seq__49831_50625 = G__50642;
chunk__49832_50626 = G__50643;
count__49833_50627 = G__50644;
i__49834_50628 = G__50645;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49825){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49825));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49874_50646 = cljs.core.seq(scripts);
var chunk__49875_50647 = null;
var count__49876_50648 = (0);
var i__49877_50649 = (0);
while(true){
if((i__49877_50649 < count__49876_50648)){
var vec__49887_50650 = chunk__49875_50647.cljs$core$IIndexed$_nth$arity$2(null,i__49877_50649);
var script_tag_50651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49887_50650,(0),null);
var script_body_50652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49887_50650,(1),null);
eval(script_body_50652);


var G__50654 = seq__49874_50646;
var G__50655 = chunk__49875_50647;
var G__50656 = count__49876_50648;
var G__50657 = (i__49877_50649 + (1));
seq__49874_50646 = G__50654;
chunk__49875_50647 = G__50655;
count__49876_50648 = G__50656;
i__49877_50649 = G__50657;
continue;
} else {
var temp__5735__auto___50660 = cljs.core.seq(seq__49874_50646);
if(temp__5735__auto___50660){
var seq__49874_50662__$1 = temp__5735__auto___50660;
if(cljs.core.chunked_seq_QMARK_(seq__49874_50662__$1)){
var c__4556__auto___50663 = cljs.core.chunk_first(seq__49874_50662__$1);
var G__50664 = cljs.core.chunk_rest(seq__49874_50662__$1);
var G__50665 = c__4556__auto___50663;
var G__50666 = cljs.core.count(c__4556__auto___50663);
var G__50667 = (0);
seq__49874_50646 = G__50664;
chunk__49875_50647 = G__50665;
count__49876_50648 = G__50666;
i__49877_50649 = G__50667;
continue;
} else {
var vec__49897_50669 = cljs.core.first(seq__49874_50662__$1);
var script_tag_50670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49897_50669,(0),null);
var script_body_50671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49897_50669,(1),null);
eval(script_body_50671);


var G__50672 = cljs.core.next(seq__49874_50662__$1);
var G__50673 = null;
var G__50674 = (0);
var G__50675 = (0);
seq__49874_50646 = G__50672;
chunk__49875_50647 = G__50673;
count__49876_50648 = G__50674;
i__49877_50649 = G__50675;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49907){
var vec__49913 = p__49907;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49913,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49913,(1),null);
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
var G__49924 = arguments.length;
switch (G__49924) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
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
var seq__49939 = cljs.core.seq(style_keys);
var chunk__49940 = null;
var count__49941 = (0);
var i__49942 = (0);
while(true){
if((i__49942 < count__49941)){
var it = chunk__49940.cljs$core$IIndexed$_nth$arity$2(null,i__49942);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50684 = seq__49939;
var G__50685 = chunk__49940;
var G__50686 = count__49941;
var G__50687 = (i__49942 + (1));
seq__49939 = G__50684;
chunk__49940 = G__50685;
count__49941 = G__50686;
i__49942 = G__50687;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49939);
if(temp__5735__auto__){
var seq__49939__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49939__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49939__$1);
var G__50689 = cljs.core.chunk_rest(seq__49939__$1);
var G__50690 = c__4556__auto__;
var G__50691 = cljs.core.count(c__4556__auto__);
var G__50692 = (0);
seq__49939 = G__50689;
chunk__49940 = G__50690;
count__49941 = G__50691;
i__49942 = G__50692;
continue;
} else {
var it = cljs.core.first(seq__49939__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50693 = cljs.core.next(seq__49939__$1);
var G__50694 = null;
var G__50695 = (0);
var G__50696 = (0);
seq__49939 = G__50693;
chunk__49940 = G__50694;
count__49941 = G__50695;
i__49942 = G__50696;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49952,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49963 = k49952;
var G__49963__$1 = (((G__49963 instanceof cljs.core.Keyword))?G__49963.fqn:null);
switch (G__49963__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49952,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49966){
var vec__49967 = p__49966;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49967,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49967,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49951){
var self__ = this;
var G__49951__$1 = this;
return (new cljs.core.RecordIter((0),G__49951__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49953,other49954){
var self__ = this;
var this49953__$1 = this;
return (((!((other49954 == null)))) && ((this49953__$1.constructor === other49954.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49953__$1.x,other49954.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49953__$1.y,other49954.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49953__$1.__extmap,other49954.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49951){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49993 = cljs.core.keyword_identical_QMARK_;
var expr__49994 = k__4388__auto__;
if(cljs.core.truth_((pred__49993.cljs$core$IFn$_invoke$arity$2 ? pred__49993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49994) : pred__49993.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49994)))){
return (new shadow.dom.Coordinate(G__49951,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49993.cljs$core$IFn$_invoke$arity$2 ? pred__49993.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49994) : pred__49993.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49994)))){
return (new shadow.dom.Coordinate(self__.x,G__49951,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49951),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49951){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49951,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49958){
var extmap__4419__auto__ = (function (){var G__50007 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49958,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49958)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50007);
} else {
return G__50007;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49958),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49958),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50018,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50024 = k50018;
var G__50024__$1 = (((G__50024 instanceof cljs.core.Keyword))?G__50024.fqn:null);
switch (G__50024__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50018,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50026){
var vec__50027 = p__50026;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50027,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50027,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50017){
var self__ = this;
var G__50017__$1 = this;
return (new cljs.core.RecordIter((0),G__50017__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50019,other50020){
var self__ = this;
var this50019__$1 = this;
return (((!((other50020 == null)))) && ((this50019__$1.constructor === other50020.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50019__$1.w,other50020.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50019__$1.h,other50020.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50019__$1.__extmap,other50020.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50017){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50036 = cljs.core.keyword_identical_QMARK_;
var expr__50037 = k__4388__auto__;
if(cljs.core.truth_((pred__50036.cljs$core$IFn$_invoke$arity$2 ? pred__50036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50037) : pred__50036.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50037)))){
return (new shadow.dom.Size(G__50017,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50036.cljs$core$IFn$_invoke$arity$2 ? pred__50036.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50037) : pred__50036.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50037)))){
return (new shadow.dom.Size(self__.w,G__50017,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50017),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50017){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50017,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50022){
var extmap__4419__auto__ = (function (){var G__50047 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50022,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50022)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50047);
} else {
return G__50047;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50022),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50022),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__50764 = (i + (1));
var G__50765 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50764;
ret = G__50765;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50073){
var vec__50074 = p__50073;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50074,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50079 = arguments.length;
switch (G__50079) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
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
var G__50771 = ps;
var G__50772 = (i + (1));
el__$1 = G__50771;
i = G__50772;
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
var vec__50116 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50116,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50116,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50116,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50121_50779 = cljs.core.seq(props);
var chunk__50122_50780 = null;
var count__50123_50781 = (0);
var i__50124_50782 = (0);
while(true){
if((i__50124_50782 < count__50123_50781)){
var vec__50139_50783 = chunk__50122_50780.cljs$core$IIndexed$_nth$arity$2(null,i__50124_50782);
var k_50784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50139_50783,(0),null);
var v_50785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50139_50783,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_50784);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50784),v_50785);


var G__50793 = seq__50121_50779;
var G__50794 = chunk__50122_50780;
var G__50795 = count__50123_50781;
var G__50796 = (i__50124_50782 + (1));
seq__50121_50779 = G__50793;
chunk__50122_50780 = G__50794;
count__50123_50781 = G__50795;
i__50124_50782 = G__50796;
continue;
} else {
var temp__5735__auto___50797 = cljs.core.seq(seq__50121_50779);
if(temp__5735__auto___50797){
var seq__50121_50798__$1 = temp__5735__auto___50797;
if(cljs.core.chunked_seq_QMARK_(seq__50121_50798__$1)){
var c__4556__auto___50799 = cljs.core.chunk_first(seq__50121_50798__$1);
var G__50800 = cljs.core.chunk_rest(seq__50121_50798__$1);
var G__50801 = c__4556__auto___50799;
var G__50802 = cljs.core.count(c__4556__auto___50799);
var G__50803 = (0);
seq__50121_50779 = G__50800;
chunk__50122_50780 = G__50801;
count__50123_50781 = G__50802;
i__50124_50782 = G__50803;
continue;
} else {
var vec__50145_50804 = cljs.core.first(seq__50121_50798__$1);
var k_50805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50145_50804,(0),null);
var v_50806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50145_50804,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_50805);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50805),v_50806);


var G__50807 = cljs.core.next(seq__50121_50798__$1);
var G__50808 = null;
var G__50809 = (0);
var G__50810 = (0);
seq__50121_50779 = G__50807;
chunk__50122_50780 = G__50808;
count__50123_50781 = G__50809;
i__50124_50782 = G__50810;
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
var vec__50160 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50160,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50160,(1),null);
var seq__50164_50812 = cljs.core.seq(node_children);
var chunk__50166_50813 = null;
var count__50167_50814 = (0);
var i__50168_50815 = (0);
while(true){
if((i__50168_50815 < count__50167_50814)){
var child_struct_50816 = chunk__50166_50813.cljs$core$IIndexed$_nth$arity$2(null,i__50168_50815);
if((!((child_struct_50816 == null)))){
if(typeof child_struct_50816 === 'string'){
var text_50817 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50817),child_struct_50816].join(''));
} else {
var children_50818 = shadow.dom.svg_node(child_struct_50816);
if(cljs.core.seq_QMARK_(children_50818)){
var seq__50213_50819 = cljs.core.seq(children_50818);
var chunk__50215_50820 = null;
var count__50216_50821 = (0);
var i__50217_50822 = (0);
while(true){
if((i__50217_50822 < count__50216_50821)){
var child_50823 = chunk__50215_50820.cljs$core$IIndexed$_nth$arity$2(null,i__50217_50822);
if(cljs.core.truth_(child_50823)){
node.appendChild(child_50823);


var G__50824 = seq__50213_50819;
var G__50825 = chunk__50215_50820;
var G__50826 = count__50216_50821;
var G__50827 = (i__50217_50822 + (1));
seq__50213_50819 = G__50824;
chunk__50215_50820 = G__50825;
count__50216_50821 = G__50826;
i__50217_50822 = G__50827;
continue;
} else {
var G__50828 = seq__50213_50819;
var G__50829 = chunk__50215_50820;
var G__50830 = count__50216_50821;
var G__50831 = (i__50217_50822 + (1));
seq__50213_50819 = G__50828;
chunk__50215_50820 = G__50829;
count__50216_50821 = G__50830;
i__50217_50822 = G__50831;
continue;
}
} else {
var temp__5735__auto___50832 = cljs.core.seq(seq__50213_50819);
if(temp__5735__auto___50832){
var seq__50213_50833__$1 = temp__5735__auto___50832;
if(cljs.core.chunked_seq_QMARK_(seq__50213_50833__$1)){
var c__4556__auto___50834 = cljs.core.chunk_first(seq__50213_50833__$1);
var G__50835 = cljs.core.chunk_rest(seq__50213_50833__$1);
var G__50836 = c__4556__auto___50834;
var G__50837 = cljs.core.count(c__4556__auto___50834);
var G__50838 = (0);
seq__50213_50819 = G__50835;
chunk__50215_50820 = G__50836;
count__50216_50821 = G__50837;
i__50217_50822 = G__50838;
continue;
} else {
var child_50840 = cljs.core.first(seq__50213_50833__$1);
if(cljs.core.truth_(child_50840)){
node.appendChild(child_50840);


var G__50841 = cljs.core.next(seq__50213_50833__$1);
var G__50842 = null;
var G__50843 = (0);
var G__50844 = (0);
seq__50213_50819 = G__50841;
chunk__50215_50820 = G__50842;
count__50216_50821 = G__50843;
i__50217_50822 = G__50844;
continue;
} else {
var G__50845 = cljs.core.next(seq__50213_50833__$1);
var G__50846 = null;
var G__50847 = (0);
var G__50848 = (0);
seq__50213_50819 = G__50845;
chunk__50215_50820 = G__50846;
count__50216_50821 = G__50847;
i__50217_50822 = G__50848;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50818);
}
}


var G__50849 = seq__50164_50812;
var G__50850 = chunk__50166_50813;
var G__50851 = count__50167_50814;
var G__50852 = (i__50168_50815 + (1));
seq__50164_50812 = G__50849;
chunk__50166_50813 = G__50850;
count__50167_50814 = G__50851;
i__50168_50815 = G__50852;
continue;
} else {
var G__50853 = seq__50164_50812;
var G__50854 = chunk__50166_50813;
var G__50855 = count__50167_50814;
var G__50856 = (i__50168_50815 + (1));
seq__50164_50812 = G__50853;
chunk__50166_50813 = G__50854;
count__50167_50814 = G__50855;
i__50168_50815 = G__50856;
continue;
}
} else {
var temp__5735__auto___50857 = cljs.core.seq(seq__50164_50812);
if(temp__5735__auto___50857){
var seq__50164_50858__$1 = temp__5735__auto___50857;
if(cljs.core.chunked_seq_QMARK_(seq__50164_50858__$1)){
var c__4556__auto___50859 = cljs.core.chunk_first(seq__50164_50858__$1);
var G__50860 = cljs.core.chunk_rest(seq__50164_50858__$1);
var G__50861 = c__4556__auto___50859;
var G__50862 = cljs.core.count(c__4556__auto___50859);
var G__50863 = (0);
seq__50164_50812 = G__50860;
chunk__50166_50813 = G__50861;
count__50167_50814 = G__50862;
i__50168_50815 = G__50863;
continue;
} else {
var child_struct_50864 = cljs.core.first(seq__50164_50858__$1);
if((!((child_struct_50864 == null)))){
if(typeof child_struct_50864 === 'string'){
var text_50865 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50865),child_struct_50864].join(''));
} else {
var children_50866 = shadow.dom.svg_node(child_struct_50864);
if(cljs.core.seq_QMARK_(children_50866)){
var seq__50232_50867 = cljs.core.seq(children_50866);
var chunk__50234_50868 = null;
var count__50235_50869 = (0);
var i__50236_50870 = (0);
while(true){
if((i__50236_50870 < count__50235_50869)){
var child_50874 = chunk__50234_50868.cljs$core$IIndexed$_nth$arity$2(null,i__50236_50870);
if(cljs.core.truth_(child_50874)){
node.appendChild(child_50874);


var G__50875 = seq__50232_50867;
var G__50876 = chunk__50234_50868;
var G__50877 = count__50235_50869;
var G__50878 = (i__50236_50870 + (1));
seq__50232_50867 = G__50875;
chunk__50234_50868 = G__50876;
count__50235_50869 = G__50877;
i__50236_50870 = G__50878;
continue;
} else {
var G__50879 = seq__50232_50867;
var G__50880 = chunk__50234_50868;
var G__50881 = count__50235_50869;
var G__50882 = (i__50236_50870 + (1));
seq__50232_50867 = G__50879;
chunk__50234_50868 = G__50880;
count__50235_50869 = G__50881;
i__50236_50870 = G__50882;
continue;
}
} else {
var temp__5735__auto___50883__$1 = cljs.core.seq(seq__50232_50867);
if(temp__5735__auto___50883__$1){
var seq__50232_50884__$1 = temp__5735__auto___50883__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50232_50884__$1)){
var c__4556__auto___50885 = cljs.core.chunk_first(seq__50232_50884__$1);
var G__50886 = cljs.core.chunk_rest(seq__50232_50884__$1);
var G__50887 = c__4556__auto___50885;
var G__50888 = cljs.core.count(c__4556__auto___50885);
var G__50889 = (0);
seq__50232_50867 = G__50886;
chunk__50234_50868 = G__50887;
count__50235_50869 = G__50888;
i__50236_50870 = G__50889;
continue;
} else {
var child_50890 = cljs.core.first(seq__50232_50884__$1);
if(cljs.core.truth_(child_50890)){
node.appendChild(child_50890);


var G__50891 = cljs.core.next(seq__50232_50884__$1);
var G__50892 = null;
var G__50893 = (0);
var G__50894 = (0);
seq__50232_50867 = G__50891;
chunk__50234_50868 = G__50892;
count__50235_50869 = G__50893;
i__50236_50870 = G__50894;
continue;
} else {
var G__50895 = cljs.core.next(seq__50232_50884__$1);
var G__50896 = null;
var G__50897 = (0);
var G__50898 = (0);
seq__50232_50867 = G__50895;
chunk__50234_50868 = G__50896;
count__50235_50869 = G__50897;
i__50236_50870 = G__50898;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50866);
}
}


var G__50899 = cljs.core.next(seq__50164_50858__$1);
var G__50900 = null;
var G__50901 = (0);
var G__50902 = (0);
seq__50164_50812 = G__50899;
chunk__50166_50813 = G__50900;
count__50167_50814 = G__50901;
i__50168_50815 = G__50902;
continue;
} else {
var G__50903 = cljs.core.next(seq__50164_50858__$1);
var G__50904 = null;
var G__50905 = (0);
var G__50906 = (0);
seq__50164_50812 = G__50903;
chunk__50166_50813 = G__50904;
count__50167_50814 = G__50905;
i__50168_50815 = G__50906;
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
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
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

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50907 = arguments.length;
var i__4737__auto___50908 = (0);
while(true){
if((i__4737__auto___50908 < len__4736__auto___50907)){
args__4742__auto__.push((arguments[i__4737__auto___50908]));

var G__50911 = (i__4737__auto___50908 + (1));
i__4737__auto___50908 = G__50911;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50263){
var G__50264 = cljs.core.first(seq50263);
var seq50263__$1 = cljs.core.next(seq50263);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50264,seq50263__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__50278 = arguments.length;
switch (G__50278) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__46965__auto___50921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46966__auto__ = (function (){var switch__46559__auto__ = (function (state_50292){
var state_val_50293 = (state_50292[(1)]);
if((state_val_50293 === (1))){
var state_50292__$1 = state_50292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50292__$1,(2),once_or_cleanup);
} else {
if((state_val_50293 === (2))){
var inst_50288 = (state_50292[(2)]);
var inst_50290 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50292__$1 = (function (){var statearr_50302 = state_50292;
(statearr_50302[(7)] = inst_50288);

return statearr_50302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50292__$1,inst_50290);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46560__auto__ = null;
var shadow$dom$state_machine__46560__auto____0 = (function (){
var statearr_50304 = [null,null,null,null,null,null,null,null];
(statearr_50304[(0)] = shadow$dom$state_machine__46560__auto__);

(statearr_50304[(1)] = (1));

return statearr_50304;
});
var shadow$dom$state_machine__46560__auto____1 = (function (state_50292){
while(true){
var ret_value__46561__auto__ = (function (){try{while(true){
var result__46562__auto__ = switch__46559__auto__(state_50292);
if(cljs.core.keyword_identical_QMARK_(result__46562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46562__auto__;
}
break;
}
}catch (e50305){var ex__46563__auto__ = e50305;
var statearr_50306_50922 = state_50292;
(statearr_50306_50922[(2)] = ex__46563__auto__);


if(cljs.core.seq((state_50292[(4)]))){
var statearr_50307_50925 = state_50292;
(statearr_50307_50925[(1)] = cljs.core.first((state_50292[(4)])));

} else {
throw ex__46563__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50926 = state_50292;
state_50292 = G__50926;
continue;
} else {
return ret_value__46561__auto__;
}
break;
}
});
shadow$dom$state_machine__46560__auto__ = function(state_50292){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46560__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46560__auto____1.call(this,state_50292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46560__auto____0;
shadow$dom$state_machine__46560__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46560__auto____1;
return shadow$dom$state_machine__46560__auto__;
})()
})();
var state__46967__auto__ = (function (){var statearr_50310 = f__46966__auto__();
(statearr_50310[(6)] = c__46965__auto___50921);

return statearr_50310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46967__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

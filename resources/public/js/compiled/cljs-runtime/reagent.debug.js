goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__48889__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48889 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48890__i = 0, G__48890__a = new Array(arguments.length -  0);
while (G__48890__i < G__48890__a.length) {G__48890__a[G__48890__i] = arguments[G__48890__i + 0]; ++G__48890__i;}
  args = new cljs.core.IndexedSeq(G__48890__a,0,null);
} 
return G__48889__delegate.call(this,args);};
G__48889.cljs$lang$maxFixedArity = 0;
G__48889.cljs$lang$applyTo = (function (arglist__48891){
var args = cljs.core.seq(arglist__48891);
return G__48889__delegate(args);
});
G__48889.cljs$core$IFn$_invoke$arity$variadic = G__48889__delegate;
return G__48889;
})()
);

(o.error = (function() { 
var G__48892__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48894__i = 0, G__48894__a = new Array(arguments.length -  0);
while (G__48894__i < G__48894__a.length) {G__48894__a[G__48894__i] = arguments[G__48894__i + 0]; ++G__48894__i;}
  args = new cljs.core.IndexedSeq(G__48894__a,0,null);
} 
return G__48892__delegate.call(this,args);};
G__48892.cljs$lang$maxFixedArity = 0;
G__48892.cljs$lang$applyTo = (function (arglist__48895){
var args = cljs.core.seq(arglist__48895);
return G__48892__delegate(args);
});
G__48892.cljs$core$IFn$_invoke$arity$variadic = G__48892__delegate;
return G__48892;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

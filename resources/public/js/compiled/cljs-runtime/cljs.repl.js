goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53852){
var map__53853 = p__53852;
var map__53853__$1 = (((((!((map__53853 == null))))?(((((map__53853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53853):map__53853);
var m = map__53853__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53853__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53853__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53857_54069 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53858_54070 = null;
var count__53859_54071 = (0);
var i__53860_54072 = (0);
while(true){
if((i__53860_54072 < count__53859_54071)){
var f_54073 = chunk__53858_54070.cljs$core$IIndexed$_nth$arity$2(null,i__53860_54072);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54073], 0));


var G__54074 = seq__53857_54069;
var G__54075 = chunk__53858_54070;
var G__54076 = count__53859_54071;
var G__54077 = (i__53860_54072 + (1));
seq__53857_54069 = G__54074;
chunk__53858_54070 = G__54075;
count__53859_54071 = G__54076;
i__53860_54072 = G__54077;
continue;
} else {
var temp__5735__auto___54078 = cljs.core.seq(seq__53857_54069);
if(temp__5735__auto___54078){
var seq__53857_54079__$1 = temp__5735__auto___54078;
if(cljs.core.chunked_seq_QMARK_(seq__53857_54079__$1)){
var c__4556__auto___54080 = cljs.core.chunk_first(seq__53857_54079__$1);
var G__54081 = cljs.core.chunk_rest(seq__53857_54079__$1);
var G__54082 = c__4556__auto___54080;
var G__54083 = cljs.core.count(c__4556__auto___54080);
var G__54084 = (0);
seq__53857_54069 = G__54081;
chunk__53858_54070 = G__54082;
count__53859_54071 = G__54083;
i__53860_54072 = G__54084;
continue;
} else {
var f_54085 = cljs.core.first(seq__53857_54079__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54085], 0));


var G__54086 = cljs.core.next(seq__53857_54079__$1);
var G__54087 = null;
var G__54088 = (0);
var G__54089 = (0);
seq__53857_54069 = G__54086;
chunk__53858_54070 = G__54087;
count__53859_54071 = G__54088;
i__53860_54072 = G__54089;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54090 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54090], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54090)))?cljs.core.second(arglists_54090):arglists_54090)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53865_54091 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53866_54092 = null;
var count__53867_54093 = (0);
var i__53868_54094 = (0);
while(true){
if((i__53868_54094 < count__53867_54093)){
var vec__53880_54095 = chunk__53866_54092.cljs$core$IIndexed$_nth$arity$2(null,i__53868_54094);
var name_54096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53880_54095,(0),null);
var map__53883_54097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53880_54095,(1),null);
var map__53883_54098__$1 = (((((!((map__53883_54097 == null))))?(((((map__53883_54097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53883_54097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53883_54097):map__53883_54097);
var doc_54099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53883_54098__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53883_54098__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54096], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54100], 0));

if(cljs.core.truth_(doc_54099)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54099], 0));
} else {
}


var G__54101 = seq__53865_54091;
var G__54102 = chunk__53866_54092;
var G__54103 = count__53867_54093;
var G__54104 = (i__53868_54094 + (1));
seq__53865_54091 = G__54101;
chunk__53866_54092 = G__54102;
count__53867_54093 = G__54103;
i__53868_54094 = G__54104;
continue;
} else {
var temp__5735__auto___54105 = cljs.core.seq(seq__53865_54091);
if(temp__5735__auto___54105){
var seq__53865_54106__$1 = temp__5735__auto___54105;
if(cljs.core.chunked_seq_QMARK_(seq__53865_54106__$1)){
var c__4556__auto___54107 = cljs.core.chunk_first(seq__53865_54106__$1);
var G__54108 = cljs.core.chunk_rest(seq__53865_54106__$1);
var G__54109 = c__4556__auto___54107;
var G__54110 = cljs.core.count(c__4556__auto___54107);
var G__54111 = (0);
seq__53865_54091 = G__54108;
chunk__53866_54092 = G__54109;
count__53867_54093 = G__54110;
i__53868_54094 = G__54111;
continue;
} else {
var vec__53885_54112 = cljs.core.first(seq__53865_54106__$1);
var name_54113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53885_54112,(0),null);
var map__53888_54114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53885_54112,(1),null);
var map__53888_54115__$1 = (((((!((map__53888_54114 == null))))?(((((map__53888_54114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53888_54114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53888_54114):map__53888_54114);
var doc_54116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53888_54115__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53888_54115__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54113], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54117], 0));

if(cljs.core.truth_(doc_54116)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54116], 0));
} else {
}


var G__54118 = cljs.core.next(seq__53865_54106__$1);
var G__54119 = null;
var G__54120 = (0);
var G__54121 = (0);
seq__53865_54091 = G__54118;
chunk__53866_54092 = G__54119;
count__53867_54093 = G__54120;
i__53868_54094 = G__54121;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__53892 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53893 = null;
var count__53894 = (0);
var i__53895 = (0);
while(true){
if((i__53895 < count__53894)){
var role = chunk__53893.cljs$core$IIndexed$_nth$arity$2(null,i__53895);
var temp__5735__auto___54126__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54126__$1)){
var spec_54127 = temp__5735__auto___54126__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54127)], 0));
} else {
}


var G__54128 = seq__53892;
var G__54129 = chunk__53893;
var G__54130 = count__53894;
var G__54131 = (i__53895 + (1));
seq__53892 = G__54128;
chunk__53893 = G__54129;
count__53894 = G__54130;
i__53895 = G__54131;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__53892);
if(temp__5735__auto____$1){
var seq__53892__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53892__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53892__$1);
var G__54132 = cljs.core.chunk_rest(seq__53892__$1);
var G__54133 = c__4556__auto__;
var G__54134 = cljs.core.count(c__4556__auto__);
var G__54135 = (0);
seq__53892 = G__54132;
chunk__53893 = G__54133;
count__53894 = G__54134;
i__53895 = G__54135;
continue;
} else {
var role = cljs.core.first(seq__53892__$1);
var temp__5735__auto___54138__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54138__$2)){
var spec_54139 = temp__5735__auto___54138__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54139)], 0));
} else {
}


var G__54142 = cljs.core.next(seq__53892__$1);
var G__54143 = null;
var G__54144 = (0);
var G__54145 = (0);
seq__53892 = G__54142;
chunk__53893 = G__54143;
count__53894 = G__54144;
i__53895 = G__54145;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54146 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54147 = cljs.core.ex_cause(t);
via = G__54146;
t = G__54147;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__53918 = datafied_throwable;
var map__53918__$1 = (((((!((map__53918 == null))))?(((((map__53918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53918):map__53918);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53918__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53918__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53918__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53919 = cljs.core.last(via);
var map__53919__$1 = (((((!((map__53919 == null))))?(((((map__53919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53919):map__53919);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53919__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53919__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53919__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53920 = data;
var map__53920__$1 = (((((!((map__53920 == null))))?(((((map__53920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53920):map__53920);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53920__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53920__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53920__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53921 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53921__$1 = (((((!((map__53921 == null))))?(((((map__53921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53921):map__53921);
var top_data = map__53921__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53921__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53937 = phase;
var G__53937__$1 = (((G__53937 instanceof cljs.core.Keyword))?G__53937.fqn:null);
switch (G__53937__$1) {
case "read-source":
var map__53948 = data;
var map__53948__$1 = (((((!((map__53948 == null))))?(((((map__53948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53948):map__53948);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53948__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53948__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53954 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53954__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53954,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53954);
var G__53954__$2 = (cljs.core.truth_((function (){var fexpr__53961 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53961.cljs$core$IFn$_invoke$arity$1 ? fexpr__53961.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53961.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53954__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53954__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53954__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53954__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53976 = top_data;
var G__53976__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53976,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53976);
var G__53976__$2 = (cljs.core.truth_((function (){var fexpr__53977 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53977.cljs$core$IFn$_invoke$arity$1 ? fexpr__53977.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53977.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53976__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53976__$1);
var G__53976__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53976__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53976__$2);
var G__53976__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53976__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53976__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53976__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53976__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53978 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53978,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53978,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53978,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53978,(3),null);
var G__53981 = top_data;
var G__53981__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53981,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53981);
var G__53981__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53981__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53981__$1);
var G__53981__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53981__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53981__$2);
var G__53981__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53981__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53981__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53981__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53981__$4;
}

break;
case "execution":
var vec__53993 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53993,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53993,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53993,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53993,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53900_SHARP_){
var or__4126__auto__ = (p1__53900_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54007 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54007.cljs$core$IFn$_invoke$arity$1 ? fexpr__54007.cljs$core$IFn$_invoke$arity$1(p1__53900_SHARP_) : fexpr__54007.call(null,p1__53900_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54008 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54008__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54008,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54008);
var G__54008__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54008__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54008__$1);
var G__54008__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54008__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54008__$2);
var G__54008__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54008__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54008__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54008__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54008__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53937__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54023){
var map__54024 = p__54023;
var map__54024__$1 = (((((!((map__54024 == null))))?(((((map__54024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54024):map__54024);
var triage_data = map__54024__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54024__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54024__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54024__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54024__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54024__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54024__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54024__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54024__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__54028 = phase;
var G__54028__$1 = (((G__54028 instanceof cljs.core.Keyword))?G__54028.fqn:null);
switch (G__54028__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54029 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54030 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54031 = loc;
var G__54032 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54033_54152 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54034_54153 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54035_54154 = true;
var _STAR_print_fn_STAR__temp_val__54036_54155 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54035_54154);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54036_54155);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54021_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54021_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54034_54153);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54033_54152);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54029,G__54030,G__54031,G__54032) : format.call(null,G__54029,G__54030,G__54031,G__54032));

break;
case "macroexpansion":
var G__54038 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54039 = cause_type;
var G__54040 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54041 = loc;
var G__54042 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54038,G__54039,G__54040,G__54041,G__54042) : format.call(null,G__54038,G__54039,G__54040,G__54041,G__54042));

break;
case "compile-syntax-check":
var G__54043 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54044 = cause_type;
var G__54045 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54046 = loc;
var G__54047 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54043,G__54044,G__54045,G__54046,G__54047) : format.call(null,G__54043,G__54044,G__54045,G__54046,G__54047));

break;
case "compilation":
var G__54048 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54049 = cause_type;
var G__54050 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54051 = loc;
var G__54052 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54048,G__54049,G__54050,G__54051,G__54052) : format.call(null,G__54048,G__54049,G__54050,G__54051,G__54052));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54053 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54054 = symbol;
var G__54055 = loc;
var G__54056 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54057_54156 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54058_54157 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54059_54158 = true;
var _STAR_print_fn_STAR__temp_val__54060_54159 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54059_54158);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54060_54159);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54022_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54022_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54058_54157);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54057_54156);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54053,G__54054,G__54055,G__54056) : format.call(null,G__54053,G__54054,G__54055,G__54056));
} else {
var G__54063 = "Execution error%s at %s(%s).\n%s\n";
var G__54064 = cause_type;
var G__54065 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54066 = loc;
var G__54067 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54063,G__54064,G__54065,G__54066,G__54067) : format.call(null,G__54063,G__54064,G__54065,G__54066,G__54067));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54028__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

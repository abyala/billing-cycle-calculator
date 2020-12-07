goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52899 = arguments.length;
var i__4737__auto___52900 = (0);
while(true){
if((i__4737__auto___52900 < len__4736__auto___52899)){
args__4742__auto__.push((arguments[i__4737__auto___52900]));

var G__52901 = (i__4737__auto___52900 + (1));
i__4737__auto___52900 = G__52901;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52573){
var G__52575 = cljs.core.first(seq52573);
var seq52573__$1 = cljs.core.next(seq52573);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52575,seq52573__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52620 = cljs.core.seq(sources);
var chunk__52621 = null;
var count__52622 = (0);
var i__52623 = (0);
while(true){
if((i__52623 < count__52622)){
var map__52666 = chunk__52621.cljs$core$IIndexed$_nth$arity$2(null,i__52623);
var map__52666__$1 = (((((!((map__52666 == null))))?(((((map__52666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52666):map__52666);
var src = map__52666__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52666__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52666__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52666__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52666__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52670){var e_52902 = e52670;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52902);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52902.message)].join('')));
}

var G__52903 = seq__52620;
var G__52904 = chunk__52621;
var G__52905 = count__52622;
var G__52906 = (i__52623 + (1));
seq__52620 = G__52903;
chunk__52621 = G__52904;
count__52622 = G__52905;
i__52623 = G__52906;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52620);
if(temp__5735__auto__){
var seq__52620__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52620__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52620__$1);
var G__52907 = cljs.core.chunk_rest(seq__52620__$1);
var G__52908 = c__4556__auto__;
var G__52909 = cljs.core.count(c__4556__auto__);
var G__52910 = (0);
seq__52620 = G__52907;
chunk__52621 = G__52908;
count__52622 = G__52909;
i__52623 = G__52910;
continue;
} else {
var map__52673 = cljs.core.first(seq__52620__$1);
var map__52673__$1 = (((((!((map__52673 == null))))?(((((map__52673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52673):map__52673);
var src = map__52673__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52678){var e_52911 = e52678;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52911);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52911.message)].join('')));
}

var G__52912 = cljs.core.next(seq__52620__$1);
var G__52913 = null;
var G__52914 = (0);
var G__52915 = (0);
seq__52620 = G__52912;
chunk__52621 = G__52913;
count__52622 = G__52914;
i__52623 = G__52915;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__52681 = cljs.core.seq(js_requires);
var chunk__52682 = null;
var count__52683 = (0);
var i__52684 = (0);
while(true){
if((i__52684 < count__52683)){
var js_ns = chunk__52682.cljs$core$IIndexed$_nth$arity$2(null,i__52684);
var require_str_52916 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52916);


var G__52917 = seq__52681;
var G__52918 = chunk__52682;
var G__52919 = count__52683;
var G__52920 = (i__52684 + (1));
seq__52681 = G__52917;
chunk__52682 = G__52918;
count__52683 = G__52919;
i__52684 = G__52920;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52681);
if(temp__5735__auto__){
var seq__52681__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52681__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52681__$1);
var G__52921 = cljs.core.chunk_rest(seq__52681__$1);
var G__52922 = c__4556__auto__;
var G__52923 = cljs.core.count(c__4556__auto__);
var G__52924 = (0);
seq__52681 = G__52921;
chunk__52682 = G__52922;
count__52683 = G__52923;
i__52684 = G__52924;
continue;
} else {
var js_ns = cljs.core.first(seq__52681__$1);
var require_str_52925 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52925);


var G__52926 = cljs.core.next(seq__52681__$1);
var G__52927 = null;
var G__52928 = (0);
var G__52929 = (0);
seq__52681 = G__52926;
chunk__52682 = G__52927;
count__52683 = G__52928;
i__52684 = G__52929;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52690){
var map__52691 = p__52690;
var map__52691__$1 = (((((!((map__52691 == null))))?(((((map__52691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52691):map__52691);
var msg = map__52691__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52691__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52691__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52693(s__52694){
return (new cljs.core.LazySeq(null,(function (){
var s__52694__$1 = s__52694;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52694__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__52699 = cljs.core.first(xs__6292__auto__);
var map__52699__$1 = (((((!((map__52699 == null))))?(((((map__52699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52699):map__52699);
var src = map__52699__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__52694__$1,map__52699,map__52699__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52691,map__52691__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52693_$_iter__52695(s__52696){
return (new cljs.core.LazySeq(null,((function (s__52694__$1,map__52699,map__52699__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52691,map__52691__$1,msg,info,reload_info){
return (function (){
var s__52696__$1 = s__52696;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52696__$1);
if(temp__5735__auto____$1){
var s__52696__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52696__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__52696__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__52698 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__52697 = (0);
while(true){
if((i__52697 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__52697);
cljs.core.chunk_append(b__52698,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52930 = (i__52697 + (1));
i__52697 = G__52930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52698),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52693_$_iter__52695(cljs.core.chunk_rest(s__52696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52698),null);
}
} else {
var warning = cljs.core.first(s__52696__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52693_$_iter__52695(cljs.core.rest(s__52696__$2)));
}
} else {
return null;
}
break;
}
});})(s__52694__$1,map__52699,map__52699__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52691,map__52691__$1,msg,info,reload_info))
,null,null));
});})(s__52694__$1,map__52699,map__52699__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52691,map__52691__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52693(cljs.core.rest(s__52694__$1)));
} else {
var G__52931 = cljs.core.rest(s__52694__$1);
s__52694__$1 = G__52931;
continue;
}
} else {
var G__52932 = cljs.core.rest(s__52694__$1);
s__52694__$1 = G__52932;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52703_52933 = cljs.core.seq(warnings);
var chunk__52704_52934 = null;
var count__52705_52935 = (0);
var i__52706_52936 = (0);
while(true){
if((i__52706_52936 < count__52705_52935)){
var map__52715_52937 = chunk__52704_52934.cljs$core$IIndexed$_nth$arity$2(null,i__52706_52936);
var map__52715_52938__$1 = (((((!((map__52715_52937 == null))))?(((((map__52715_52937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52715_52937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52715_52937):map__52715_52937);
var w_52939 = map__52715_52938__$1;
var msg_52940__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715_52938__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715_52938__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715_52938__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52715_52938__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52943)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52941),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52942),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52940__$1)].join(''));


var G__52944 = seq__52703_52933;
var G__52945 = chunk__52704_52934;
var G__52946 = count__52705_52935;
var G__52947 = (i__52706_52936 + (1));
seq__52703_52933 = G__52944;
chunk__52704_52934 = G__52945;
count__52705_52935 = G__52946;
i__52706_52936 = G__52947;
continue;
} else {
var temp__5735__auto___52948 = cljs.core.seq(seq__52703_52933);
if(temp__5735__auto___52948){
var seq__52703_52949__$1 = temp__5735__auto___52948;
if(cljs.core.chunked_seq_QMARK_(seq__52703_52949__$1)){
var c__4556__auto___52950 = cljs.core.chunk_first(seq__52703_52949__$1);
var G__52951 = cljs.core.chunk_rest(seq__52703_52949__$1);
var G__52952 = c__4556__auto___52950;
var G__52953 = cljs.core.count(c__4556__auto___52950);
var G__52954 = (0);
seq__52703_52933 = G__52951;
chunk__52704_52934 = G__52952;
count__52705_52935 = G__52953;
i__52706_52936 = G__52954;
continue;
} else {
var map__52718_52955 = cljs.core.first(seq__52703_52949__$1);
var map__52718_52956__$1 = (((((!((map__52718_52955 == null))))?(((((map__52718_52955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52718_52955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52718_52955):map__52718_52955);
var w_52957 = map__52718_52956__$1;
var msg_52958__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52718_52956__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52718_52956__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52718_52956__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52718_52956__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52961)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52959),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52960),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52958__$1)].join(''));


var G__52962 = cljs.core.next(seq__52703_52949__$1);
var G__52963 = null;
var G__52964 = (0);
var G__52965 = (0);
seq__52703_52933 = G__52962;
chunk__52704_52934 = G__52963;
count__52705_52935 = G__52964;
i__52706_52936 = G__52965;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52689_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52689_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52725){
var map__52726 = p__52725;
var map__52726__$1 = (((((!((map__52726 == null))))?(((((map__52726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52726):map__52726);
var msg = map__52726__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52726__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52730 = cljs.core.seq(updates);
var chunk__52732 = null;
var count__52733 = (0);
var i__52734 = (0);
while(true){
if((i__52734 < count__52733)){
var path = chunk__52732.cljs$core$IIndexed$_nth$arity$2(null,i__52734);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52778_52966 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52782_52967 = null;
var count__52783_52968 = (0);
var i__52784_52969 = (0);
while(true){
if((i__52784_52969 < count__52783_52968)){
var node_52970 = chunk__52782_52967.cljs$core$IIndexed$_nth$arity$2(null,i__52784_52969);
if(cljs.core.not(node_52970.shadow$old)){
var path_match_52971 = shadow.cljs.devtools.client.browser.match_paths(node_52970.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52971)){
var new_link_52972 = (function (){var G__52793 = node_52970.cloneNode(true);
G__52793.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52971),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52793;
})();
(node_52970.shadow$old = true);

(new_link_52972.onload = ((function (seq__52778_52966,chunk__52782_52967,count__52783_52968,i__52784_52969,seq__52730,chunk__52732,count__52733,i__52734,new_link_52972,path_match_52971,node_52970,path,map__52726,map__52726__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52970);
});})(seq__52778_52966,chunk__52782_52967,count__52783_52968,i__52784_52969,seq__52730,chunk__52732,count__52733,i__52734,new_link_52972,path_match_52971,node_52970,path,map__52726,map__52726__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52971], 0));

goog.dom.insertSiblingAfter(new_link_52972,node_52970);


var G__52973 = seq__52778_52966;
var G__52974 = chunk__52782_52967;
var G__52975 = count__52783_52968;
var G__52976 = (i__52784_52969 + (1));
seq__52778_52966 = G__52973;
chunk__52782_52967 = G__52974;
count__52783_52968 = G__52975;
i__52784_52969 = G__52976;
continue;
} else {
var G__52977 = seq__52778_52966;
var G__52978 = chunk__52782_52967;
var G__52979 = count__52783_52968;
var G__52980 = (i__52784_52969 + (1));
seq__52778_52966 = G__52977;
chunk__52782_52967 = G__52978;
count__52783_52968 = G__52979;
i__52784_52969 = G__52980;
continue;
}
} else {
var G__52981 = seq__52778_52966;
var G__52982 = chunk__52782_52967;
var G__52983 = count__52783_52968;
var G__52984 = (i__52784_52969 + (1));
seq__52778_52966 = G__52981;
chunk__52782_52967 = G__52982;
count__52783_52968 = G__52983;
i__52784_52969 = G__52984;
continue;
}
} else {
var temp__5735__auto___52985 = cljs.core.seq(seq__52778_52966);
if(temp__5735__auto___52985){
var seq__52778_52986__$1 = temp__5735__auto___52985;
if(cljs.core.chunked_seq_QMARK_(seq__52778_52986__$1)){
var c__4556__auto___52987 = cljs.core.chunk_first(seq__52778_52986__$1);
var G__52988 = cljs.core.chunk_rest(seq__52778_52986__$1);
var G__52989 = c__4556__auto___52987;
var G__52990 = cljs.core.count(c__4556__auto___52987);
var G__52991 = (0);
seq__52778_52966 = G__52988;
chunk__52782_52967 = G__52989;
count__52783_52968 = G__52990;
i__52784_52969 = G__52991;
continue;
} else {
var node_52992 = cljs.core.first(seq__52778_52986__$1);
if(cljs.core.not(node_52992.shadow$old)){
var path_match_52993 = shadow.cljs.devtools.client.browser.match_paths(node_52992.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52993)){
var new_link_52994 = (function (){var G__52795 = node_52992.cloneNode(true);
G__52795.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52993),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52795;
})();
(node_52992.shadow$old = true);

(new_link_52994.onload = ((function (seq__52778_52966,chunk__52782_52967,count__52783_52968,i__52784_52969,seq__52730,chunk__52732,count__52733,i__52734,new_link_52994,path_match_52993,node_52992,seq__52778_52986__$1,temp__5735__auto___52985,path,map__52726,map__52726__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52992);
});})(seq__52778_52966,chunk__52782_52967,count__52783_52968,i__52784_52969,seq__52730,chunk__52732,count__52733,i__52734,new_link_52994,path_match_52993,node_52992,seq__52778_52986__$1,temp__5735__auto___52985,path,map__52726,map__52726__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52993], 0));

goog.dom.insertSiblingAfter(new_link_52994,node_52992);


var G__52995 = cljs.core.next(seq__52778_52986__$1);
var G__52996 = null;
var G__52997 = (0);
var G__52998 = (0);
seq__52778_52966 = G__52995;
chunk__52782_52967 = G__52996;
count__52783_52968 = G__52997;
i__52784_52969 = G__52998;
continue;
} else {
var G__52999 = cljs.core.next(seq__52778_52986__$1);
var G__53000 = null;
var G__53001 = (0);
var G__53002 = (0);
seq__52778_52966 = G__52999;
chunk__52782_52967 = G__53000;
count__52783_52968 = G__53001;
i__52784_52969 = G__53002;
continue;
}
} else {
var G__53003 = cljs.core.next(seq__52778_52986__$1);
var G__53004 = null;
var G__53005 = (0);
var G__53006 = (0);
seq__52778_52966 = G__53003;
chunk__52782_52967 = G__53004;
count__52783_52968 = G__53005;
i__52784_52969 = G__53006;
continue;
}
}
} else {
}
}
break;
}


var G__53007 = seq__52730;
var G__53008 = chunk__52732;
var G__53009 = count__52733;
var G__53010 = (i__52734 + (1));
seq__52730 = G__53007;
chunk__52732 = G__53008;
count__52733 = G__53009;
i__52734 = G__53010;
continue;
} else {
var G__53011 = seq__52730;
var G__53012 = chunk__52732;
var G__53013 = count__52733;
var G__53014 = (i__52734 + (1));
seq__52730 = G__53011;
chunk__52732 = G__53012;
count__52733 = G__53013;
i__52734 = G__53014;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52730);
if(temp__5735__auto__){
var seq__52730__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52730__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52730__$1);
var G__53015 = cljs.core.chunk_rest(seq__52730__$1);
var G__53016 = c__4556__auto__;
var G__53017 = cljs.core.count(c__4556__auto__);
var G__53018 = (0);
seq__52730 = G__53015;
chunk__52732 = G__53016;
count__52733 = G__53017;
i__52734 = G__53018;
continue;
} else {
var path = cljs.core.first(seq__52730__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52796_53019 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52800_53020 = null;
var count__52801_53021 = (0);
var i__52802_53022 = (0);
while(true){
if((i__52802_53022 < count__52801_53021)){
var node_53023 = chunk__52800_53020.cljs$core$IIndexed$_nth$arity$2(null,i__52802_53022);
if(cljs.core.not(node_53023.shadow$old)){
var path_match_53024 = shadow.cljs.devtools.client.browser.match_paths(node_53023.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53024)){
var new_link_53025 = (function (){var G__52812 = node_53023.cloneNode(true);
G__52812.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53024),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52812;
})();
(node_53023.shadow$old = true);

(new_link_53025.onload = ((function (seq__52796_53019,chunk__52800_53020,count__52801_53021,i__52802_53022,seq__52730,chunk__52732,count__52733,i__52734,new_link_53025,path_match_53024,node_53023,path,seq__52730__$1,temp__5735__auto__,map__52726,map__52726__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53023);
});})(seq__52796_53019,chunk__52800_53020,count__52801_53021,i__52802_53022,seq__52730,chunk__52732,count__52733,i__52734,new_link_53025,path_match_53024,node_53023,path,seq__52730__$1,temp__5735__auto__,map__52726,map__52726__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53024], 0));

goog.dom.insertSiblingAfter(new_link_53025,node_53023);


var G__53026 = seq__52796_53019;
var G__53027 = chunk__52800_53020;
var G__53028 = count__52801_53021;
var G__53029 = (i__52802_53022 + (1));
seq__52796_53019 = G__53026;
chunk__52800_53020 = G__53027;
count__52801_53021 = G__53028;
i__52802_53022 = G__53029;
continue;
} else {
var G__53030 = seq__52796_53019;
var G__53031 = chunk__52800_53020;
var G__53032 = count__52801_53021;
var G__53033 = (i__52802_53022 + (1));
seq__52796_53019 = G__53030;
chunk__52800_53020 = G__53031;
count__52801_53021 = G__53032;
i__52802_53022 = G__53033;
continue;
}
} else {
var G__53034 = seq__52796_53019;
var G__53035 = chunk__52800_53020;
var G__53036 = count__52801_53021;
var G__53037 = (i__52802_53022 + (1));
seq__52796_53019 = G__53034;
chunk__52800_53020 = G__53035;
count__52801_53021 = G__53036;
i__52802_53022 = G__53037;
continue;
}
} else {
var temp__5735__auto___53038__$1 = cljs.core.seq(seq__52796_53019);
if(temp__5735__auto___53038__$1){
var seq__52796_53039__$1 = temp__5735__auto___53038__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52796_53039__$1)){
var c__4556__auto___53040 = cljs.core.chunk_first(seq__52796_53039__$1);
var G__53041 = cljs.core.chunk_rest(seq__52796_53039__$1);
var G__53042 = c__4556__auto___53040;
var G__53043 = cljs.core.count(c__4556__auto___53040);
var G__53044 = (0);
seq__52796_53019 = G__53041;
chunk__52800_53020 = G__53042;
count__52801_53021 = G__53043;
i__52802_53022 = G__53044;
continue;
} else {
var node_53045 = cljs.core.first(seq__52796_53039__$1);
if(cljs.core.not(node_53045.shadow$old)){
var path_match_53046 = shadow.cljs.devtools.client.browser.match_paths(node_53045.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53046)){
var new_link_53047 = (function (){var G__52817 = node_53045.cloneNode(true);
G__52817.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53046),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52817;
})();
(node_53045.shadow$old = true);

(new_link_53047.onload = ((function (seq__52796_53019,chunk__52800_53020,count__52801_53021,i__52802_53022,seq__52730,chunk__52732,count__52733,i__52734,new_link_53047,path_match_53046,node_53045,seq__52796_53039__$1,temp__5735__auto___53038__$1,path,seq__52730__$1,temp__5735__auto__,map__52726,map__52726__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53045);
});})(seq__52796_53019,chunk__52800_53020,count__52801_53021,i__52802_53022,seq__52730,chunk__52732,count__52733,i__52734,new_link_53047,path_match_53046,node_53045,seq__52796_53039__$1,temp__5735__auto___53038__$1,path,seq__52730__$1,temp__5735__auto__,map__52726,map__52726__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53046], 0));

goog.dom.insertSiblingAfter(new_link_53047,node_53045);


var G__53048 = cljs.core.next(seq__52796_53039__$1);
var G__53049 = null;
var G__53050 = (0);
var G__53051 = (0);
seq__52796_53019 = G__53048;
chunk__52800_53020 = G__53049;
count__52801_53021 = G__53050;
i__52802_53022 = G__53051;
continue;
} else {
var G__53052 = cljs.core.next(seq__52796_53039__$1);
var G__53053 = null;
var G__53054 = (0);
var G__53055 = (0);
seq__52796_53019 = G__53052;
chunk__52800_53020 = G__53053;
count__52801_53021 = G__53054;
i__52802_53022 = G__53055;
continue;
}
} else {
var G__53056 = cljs.core.next(seq__52796_53039__$1);
var G__53057 = null;
var G__53058 = (0);
var G__53059 = (0);
seq__52796_53019 = G__53056;
chunk__52800_53020 = G__53057;
count__52801_53021 = G__53058;
i__52802_53022 = G__53059;
continue;
}
}
} else {
}
}
break;
}


var G__53060 = cljs.core.next(seq__52730__$1);
var G__53061 = null;
var G__53062 = (0);
var G__53063 = (0);
seq__52730 = G__53060;
chunk__52732 = G__53061;
count__52733 = G__53062;
i__52734 = G__53063;
continue;
} else {
var G__53064 = cljs.core.next(seq__52730__$1);
var G__53065 = null;
var G__53066 = (0);
var G__53067 = (0);
seq__52730 = G__53064;
chunk__52732 = G__53065;
count__52733 = G__53066;
i__52734 = G__53067;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52821){
var map__52822 = p__52821;
var map__52822__$1 = (((((!((map__52822 == null))))?(((((map__52822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52822):map__52822);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52822__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52833){
var map__52835 = p__52833;
var map__52835__$1 = (((((!((map__52835 == null))))?(((((map__52835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52835):map__52835);
var _ = map__52835__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52835__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52838,done,error){
var map__52839 = p__52838;
var map__52839__$1 = (((((!((map__52839 == null))))?(((((map__52839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52839):map__52839);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52839__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52842,done,error){
var map__52844 = p__52842;
var map__52844__$1 = (((((!((map__52844 == null))))?(((((map__52844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52844):map__52844);
var msg = map__52844__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52844__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52844__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52844__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52846){
var map__52847 = p__52846;
var map__52847__$1 = (((((!((map__52847 == null))))?(((((map__52847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52847):map__52847);
var src = map__52847__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52847__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52852 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52852) : done.call(null,G__52852));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52859){
var map__52860 = p__52859;
var map__52860__$1 = (((((!((map__52860 == null))))?(((((map__52860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52860):map__52860);
var msg__$1 = map__52860__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52860__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52874){var ex = e52874;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52880){
var map__52881 = p__52880;
var map__52881__$1 = (((((!((map__52881 == null))))?(((((map__52881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52881):map__52881);
var env = map__52881__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52881__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52887){
var map__52888 = p__52887;
var map__52888__$1 = (((((!((map__52888 == null))))?(((((map__52888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52888):map__52888);
var msg = map__52888__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52888__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52893){
var map__52894 = p__52893;
var map__52894__$1 = (((((!((map__52894 == null))))?(((((map__52894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52894):map__52894);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52894__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52894__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__52896){
var map__52897 = p__52896;
var map__52897__$1 = (((((!((map__52897 == null))))?(((((map__52897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52897):map__52897);
var svc = map__52897__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52897__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

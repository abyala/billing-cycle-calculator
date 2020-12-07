goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__48130,p__48131){
var map__48132 = p__48130;
var map__48132__$1 = (((((!((map__48132 == null))))?(((((map__48132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48132):map__48132);
var svc = map__48132__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48132__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48132__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48132__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48133 = p__48131;
var map__48133__$1 = (((((!((map__48133 == null))))?(((((map__48133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48133):map__48133);
var msg = map__48133__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48133__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48133__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48133__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48133__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__48151,p__48152){
var map__48154 = p__48151;
var map__48154__$1 = (((((!((map__48154 == null))))?(((((map__48154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48154):map__48154);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48154__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__48155 = p__48152;
var map__48155__$1 = (((((!((map__48155 == null))))?(((((map__48155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48155):map__48155);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48155__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__48168,p__48169){
var map__48171 = p__48168;
var map__48171__$1 = (((((!((map__48171 == null))))?(((((map__48171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48171):map__48171);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48171__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48171__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48172 = p__48169;
var map__48172__$1 = (((((!((map__48172 == null))))?(((((map__48172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48172):map__48172);
var msg = map__48172__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48172__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__48182,tid){
var map__48184 = p__48182;
var map__48184__$1 = (((((!((map__48184 == null))))?(((((map__48184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48184):map__48184);
var svc = map__48184__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48184__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__48198 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__48199 = null;
var count__48200 = (0);
var i__48201 = (0);
while(true){
if((i__48201 < count__48200)){
var vec__48213 = chunk__48199.cljs$core$IIndexed$_nth$arity$2(null,i__48201);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48213,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48213,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48227 = seq__48198;
var G__48228 = chunk__48199;
var G__48229 = count__48200;
var G__48230 = (i__48201 + (1));
seq__48198 = G__48227;
chunk__48199 = G__48228;
count__48200 = G__48229;
i__48201 = G__48230;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48198);
if(temp__5735__auto__){
var seq__48198__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48198__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48198__$1);
var G__48231 = cljs.core.chunk_rest(seq__48198__$1);
var G__48232 = c__4556__auto__;
var G__48233 = cljs.core.count(c__4556__auto__);
var G__48234 = (0);
seq__48198 = G__48231;
chunk__48199 = G__48232;
count__48200 = G__48233;
i__48201 = G__48234;
continue;
} else {
var vec__48216 = cljs.core.first(seq__48198__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48216,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48216,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__48235 = cljs.core.next(seq__48198__$1);
var G__48236 = null;
var G__48237 = (0);
var G__48238 = (0);
seq__48198 = G__48235;
chunk__48199 = G__48236;
count__48200 = G__48237;
i__48201 = G__48238;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__48193_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__48193_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__48194_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__48194_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__48195_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__48195_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__48196_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__48196_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__48220){
var map__48221 = p__48220;
var map__48221__$1 = (((((!((map__48221 == null))))?(((((map__48221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48221):map__48221);
var svc = map__48221__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48221__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48221__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

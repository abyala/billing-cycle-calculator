goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__50157 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__50158 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__50158);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__50170 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__50171 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__50171);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__50170);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__50157);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__50186 = arguments.length;
switch (G__50186) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__50205_50227 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__50206_50228 = null;
var count__50207_50229 = (0);
var i__50208_50230 = (0);
while(true){
if((i__50208_50230 < count__50207_50229)){
var v_50231 = chunk__50206_50228.cljs$core$IIndexed$_nth$arity$2(null,i__50208_50230);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_50231);


var G__50238 = seq__50205_50227;
var G__50239 = chunk__50206_50228;
var G__50240 = count__50207_50229;
var G__50241 = (i__50208_50230 + (1));
seq__50205_50227 = G__50238;
chunk__50206_50228 = G__50239;
count__50207_50229 = G__50240;
i__50208_50230 = G__50241;
continue;
} else {
var temp__5735__auto___50242 = cljs.core.seq(seq__50205_50227);
if(temp__5735__auto___50242){
var seq__50205_50243__$1 = temp__5735__auto___50242;
if(cljs.core.chunked_seq_QMARK_(seq__50205_50243__$1)){
var c__4556__auto___50244 = cljs.core.chunk_first(seq__50205_50243__$1);
var G__50245 = cljs.core.chunk_rest(seq__50205_50243__$1);
var G__50246 = c__4556__auto___50244;
var G__50247 = cljs.core.count(c__4556__auto___50244);
var G__50248 = (0);
seq__50205_50227 = G__50245;
chunk__50206_50228 = G__50246;
count__50207_50229 = G__50247;
i__50208_50230 = G__50248;
continue;
} else {
var v_50249 = cljs.core.first(seq__50205_50243__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_50249);


var G__50250 = cljs.core.next(seq__50205_50243__$1);
var G__50251 = null;
var G__50252 = (0);
var G__50253 = (0);
seq__50205_50227 = G__50250;
chunk__50206_50228 = G__50251;
count__50207_50229 = G__50252;
i__50208_50230 = G__50253;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map

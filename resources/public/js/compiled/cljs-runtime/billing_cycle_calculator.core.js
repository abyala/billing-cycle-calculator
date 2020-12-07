goog.provide('billing_cycle_calculator.core');
billing_cycle_calculator.core.dev_setup = (function billing_cycle_calculator$core$dev_setup(){
if(billing_cycle_calculator.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
billing_cycle_calculator.core.mount_root = (function billing_cycle_calculator$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [billing_cycle_calculator.views.main_panel], null),root_el);
});
billing_cycle_calculator.core.init = (function billing_cycle_calculator$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("billing-cycle-calculator.events","initialize-db","billing-cycle-calculator.events/initialize-db",1560564388)], null));

billing_cycle_calculator.core.dev_setup();

return billing_cycle_calculator.core.mount_root();
});

//# sourceMappingURL=billing_cycle_calculator.core.js.map

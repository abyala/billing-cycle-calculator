goog.provide('billing_cycle_calculator.business_logic');
billing_cycle_calculator.business_logic.days_between = (function billing_cycle_calculator$business_logic$days_between(start,end){
if(cljs.core.truth_(cljs_time.core.before_QMARK_(start,end))){
return cljs_time.core.in_days(cljs_time.core.interval(start,end));
} else {
return (- (billing_cycle_calculator.business_logic.days_between.cljs$core$IFn$_invoke$arity$2 ? billing_cycle_calculator.business_logic.days_between.cljs$core$IFn$_invoke$arity$2(end,start) : billing_cycle_calculator.business_logic.days_between.call(null,end,start)));
}
});
billing_cycle_calculator.business_logic.output_fields = (function billing_cycle_calculator$business_logic$output_fields(cycle_start,existing_future_stmt){
var output = (function billing_cycle_calculator$business_logic$output_fields_$_output(stmt,letter){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-stmt","next-stmt",-1618225431),stmt,new cljs.core.Keyword(null,"next-letter","next-letter",-1237020052),letter], null);
});
if((!((cycle_start == null)))){
var days_ago = billing_cycle_calculator.business_logic.days_between(cycle_start,cljs_time.core.today());
if((days_ago < (47))){
return output(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cycle_start,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((47))),cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cycle_start,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((92))));
} else {
if((!((existing_future_stmt == null)))){
return output(existing_future_stmt,cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(existing_future_stmt,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((15))));
} else {
return output(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))),cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((46))));

}
}
} else {
return null;
}
});

//# sourceMappingURL=billing_cycle_calculator.business_logic.js.map

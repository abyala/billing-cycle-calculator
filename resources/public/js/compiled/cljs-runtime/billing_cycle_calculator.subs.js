goog.provide('billing_cycle_calculator.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("billing-cycle-calculator.subs","name","billing-cycle-calculator.subs/name",-1873422045),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("billing-cycle-calculator.subs","cycle-start","billing-cycle-calculator.subs/cycle-start",1053736839),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"cycle-start","cycle-start",2020689629).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("billing-cycle-calculator.subs","existing-future","billing-cycle-calculator.subs/existing-future",-1536292655),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"existing-future","existing-future",-610369493).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("billing-cycle-calculator.subs","next-statement","billing-cycle-calculator.subs/next-statement",554887641),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"next-statement","next-statement",-1813902953).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("billing-cycle-calculator.subs","next-letter","billing-cycle-calculator.subs/next-letter",-846529178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"next-letter","next-letter",-1237020052).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
billing_cycle_calculator.subs.days_between = (function billing_cycle_calculator$subs$days_between(start,end){
return cljs_time.core.in_days(cljs_time.core.interval(start,end));
});
billing_cycle_calculator.subs.output_fields = (function billing_cycle_calculator$subs$output_fields(cycle_start,existing_future_stmt){
if((!((cycle_start == null)))){
var days_ago = billing_cycle_calculator.subs.days_between(cycle_start,cljs_time.core.today());
if((days_ago < (47))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cycle_start,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((47))),cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cycle_start,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((92)))], null);
} else {
if((!((existing_future_stmt == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [existing_future_stmt,cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(existing_future_stmt,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((15)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))),cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.today(),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((46)))], null);

}
}
} else {
return null;
}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("billing-cycle-calculator.subs","set-output-fields","billing-cycle-calculator.subs/set-output-fields",388831739),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("billing-cycle-calculator.subs","cycle-start","billing-cycle-calculator.subs/cycle-start",1053736839)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("billing-cycle-calculator.subs","existing-future","billing-cycle-calculator.subs/existing-future",-1536292655)], null),(function (p__44909,_){
var vec__44910 = p__44909;
var cycle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44910,(0),null);
var existing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44910,(1),null);
var temp__5733__auto__ = billing_cycle_calculator.subs.output_fields(cycle,existing);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__44913 = temp__5733__auto__;
var next_stmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44913,(0),null);
var next_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44913,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("billing-cycle-calculator.events","output-fields-updated","billing-cycle-calculator.events/output-fields-updated",474514637),next_stmt,next_letter], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("billing-cycle-calculator.events","output-fields-updated","billing-cycle-calculator.events/output-fields-updated",474514637),null,null], null));
}
})], 0));

//# sourceMappingURL=billing_cycle_calculator.subs.js.map

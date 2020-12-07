goog.provide('billing_cycle_calculator.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("billing-cycle-calculator.events","initialize-db","billing-cycle-calculator.events/initialize-db",1560564388),(function (_,___$1){
return billing_cycle_calculator.db.default_db;
}));
billing_cycle_calculator.events.input_field_event_fx = (function billing_cycle_calculator$events$input_field_event_fx(db,date,field){
var new_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,field,date);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword("billing-cycle-calculator.events","input-fields-updated","billing-cycle-calculator.events/input-fields-updated",-652715004),new_db], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("billing-cycle-calculator.events","cycle-start-updated","billing-cycle-calculator.events/cycle-start-updated",-1702486473),(function (p__44886,p__44887){
var map__44888 = p__44886;
var map__44888__$1 = (((((!((map__44888 == null))))?(((((map__44888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44888):map__44888);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44888__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44889 = p__44887;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44889,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44889,(1),null);
return billing_cycle_calculator.events.input_field_event_fx(db,date,new cljs.core.Keyword(null,"cycle-start","cycle-start",2020689629));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("billing-cycle-calculator.events","existing-future-statement-date-updated","billing-cycle-calculator.events/existing-future-statement-date-updated",-71288842),(function (p__44893,p__44894){
var map__44895 = p__44893;
var map__44895__$1 = (((((!((map__44895 == null))))?(((((map__44895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44895):map__44895);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44895__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__44896 = p__44894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44896,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44896,(1),null);
return billing_cycle_calculator.events.input_field_event_fx(db,date,new cljs.core.Keyword(null,"existing-future","existing-future",-610369493));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("billing-cycle-calculator.events","output-fields-updated","billing-cycle-calculator.events/output-fields-updated",474514637),(function (db,p__44900){
var vec__44901 = p__44900;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44901,(0),null);
var next_stmt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44901,(1),null);
var next_letter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44901,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"next-statement","next-statement",-1813902953),next_stmt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"next-letter","next-letter",-1237020052),next_letter], 0));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("billing-cycle-calculator.events","input-fields-updated","billing-cycle-calculator.events/input-fields-updated",-652715004),(function (p__44904){
var map__44905 = p__44904;
var map__44905__$1 = (((((!((map__44905 == null))))?(((((map__44905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44905):map__44905);
var cycle_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44905__$1,new cljs.core.Keyword(null,"cycle-start","cycle-start",2020689629));
var existing_future = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44905__$1,new cljs.core.Keyword(null,"existing-future","existing-future",-610369493));
var map__44907 = billing_cycle_calculator.business_logic.output_fields(cycle_start,existing_future);
var map__44907__$1 = (((((!((map__44907 == null))))?(((((map__44907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44907):map__44907);
var next_stmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44907__$1,new cljs.core.Keyword(null,"next-stmt","next-stmt",-1618225431));
var next_letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44907__$1,new cljs.core.Keyword(null,"next-letter","next-letter",-1237020052));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("billing-cycle-calculator.events","output-fields-updated","billing-cycle-calculator.events/output-fields-updated",474514637),next_stmt,next_letter], null));
}));

//# sourceMappingURL=billing_cycle_calculator.events.js.map


shadow.cljs.devtools.client.env.module_loaded('app');

try { billing_cycle_calculator.core.init(); } catch (e) { console.error("An error occurred when calling (billing-cycle-calculator.core/init)"); throw(e); }
(ns billing-cycle-calculator.subs
  (:require
    [re-frame.core :as rf]
    [billing-cycle-calculator.business-logic :as biz]
    [billing-cycle-calculator.events :as events]))

(rf/reg-sub
  ::name
  (fn [db] (:name db)))

(rf/reg-sub
  ::cycle-start
  (fn [db] (:cycle-start db)))

(rf/reg-sub
  ::existing-future
  (fn [db] (:existing-future db)))

(rf/reg-sub
  ::next-statement
  (fn [db] (:next-statement db)))

(rf/reg-sub
  ::next-letter
  (fn [db] (:next-letter db)))

(rf/reg-sub
  ::set-output-fields

  :<- [::cycle-start]
  :<- [::existing-future]

  (fn [[cycle existing] _]
    (if-let [{:keys [:next-stmt :next-letter]} (biz/output-fields cycle existing)]
      (rf/dispatch [::events/output-fields-updated next-stmt next-letter])
      (rf/dispatch [::events/output-fields-updated nil nil]))))

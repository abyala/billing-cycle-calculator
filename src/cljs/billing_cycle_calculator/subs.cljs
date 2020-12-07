(ns billing-cycle-calculator.subs
  (:require
    [re-frame.core :as rf]
    [cljs-time.core :refer [in-days interval today plus days]]
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

(defn days-between [start end]
  (in-days (interval start end)))

(defn output-fields [cycle-start existing-future-stmt]
  (when (some? cycle-start)
    (let [days-ago (days-between cycle-start (today))]
      (cond
        (< days-ago 47) [(plus cycle-start (days 47))
                         (plus cycle-start (days 92))]
        (some? existing-future-stmt) [existing-future-stmt
                                      (plus existing-future-stmt (days 15))]
        :else [(plus (today) (days 1))
               (plus (today) (days 46))]))))

(rf/reg-sub
  ::set-output-fields

  :<- [::cycle-start]
  :<- [::existing-future]

  (fn [[cycle existing] _]
    (if-let [[next-stmt next-letter] (output-fields cycle existing)]
      (rf/dispatch [::events/output-fields-updated next-stmt next-letter])
      (rf/dispatch [::events/output-fields-updated nil nil]))))

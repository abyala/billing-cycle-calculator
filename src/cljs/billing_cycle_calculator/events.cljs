(ns billing-cycle-calculator.events
  (:require
    [clojure.string :as str]
    [re-frame.core :as rf]
    [billing-cycle-calculator.db :as db]
    [billing-cycle-calculator.business-logic :as biz]))

(rf/reg-event-db
  ::initialize-db
  (fn [_ _]
    db/default-db))

(defn input-field-event-fx [db date field]
  (let [new-db (assoc db field date)]
    {:db new-db
     ::input-fields-updated new-db}))

(rf/reg-event-fx
  ::cycle-start-updated
  (fn [{db :db} [_ date]]
    (input-field-event-fx db date :cycle-start)))

(rf/reg-event-fx
  ::existing-future-statement-date-updated
  (fn [{db :db} [_ date]]
    (input-field-event-fx db date :existing-future)))

(rf/reg-event-db
  ::output-fields-updated
  (fn [db [_ next-stmt next-letter]]
    (assoc db :next-statement next-stmt
              :next-letter next-letter)))

(rf/reg-fx
  ::input-fields-updated
  (fn [{:keys [:cycle-start :existing-future]}]
    (let [{:keys [:next-stmt :next-letter]} (biz/output-fields cycle-start existing-future)]
      (rf/dispatch [::output-fields-updated next-stmt next-letter]))))
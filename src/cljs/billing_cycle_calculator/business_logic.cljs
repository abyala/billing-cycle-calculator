(ns billing-cycle-calculator.business-logic
  (:require [cljs-time.core :refer [in-days interval today plus days before? after?]]))

(defn days-between [start end]
  (if (after? start end)
    (- (days-between end start))
    (in-days (interval start end))))

(defn output-fields [cycle-start existing-future-stmt]
  (letfn [(output [stmt letter] {:next-stmt stmt :next-letter letter})]
    (when (some? cycle-start)
      (let [days-ago (days-between cycle-start (today))]
        (cond
          (< days-ago 47) (output (plus cycle-start (days 47))
                                  (plus cycle-start (days 92)))
          (some? existing-future-stmt) (output existing-future-stmt
                                               (plus existing-future-stmt (days 15)))
          :else (output (plus (today) (days 1))
                        (plus (today) (days 46))))))))

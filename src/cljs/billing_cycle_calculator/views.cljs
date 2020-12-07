(ns billing-cycle-calculator.views
  (:require
    [re-frame.core :as rf]
    [billing-cycle-calculator.events :as events]
    [billing-cycle-calculator.subs :as subs]
    [cljs-time.format :refer [parse-local unparse formatter]]))

(defn format-date [s]
  (if (some? s)
    (unparse (formatter "MM/dd/yyyy") s)
    ""))

(defn date-picker [field]
  [:input {:type      "date"
           :on-change #(rf/dispatch-sync [field (-> % .-target .-value parse-local)])}])

(defn formatted-date-text [field]
  [:input {:type "text" :readOnly true :enabled "false" :tabIndex -1 :value (format-date @field)}])

(defn main-panel []
  (let [next-statement (rf/subscribe [::subs/next-statement])
        next-letter (rf/subscribe [::subs/next-letter])]
    [:div
     [:table {:padding "100"}
      [:tbody
       [:tr
        [:th "Input Fields"]
        [:th "Output Fields"]]
       [:tr {:height 20}
        [:td {:width "250"}
         [:div
          {:title "Oldest date of service where balance is coming from"}
          "Cycle Start:"]]
        [:td {:width "250"}
         [:div "Next Statement Date:"]]]
       [:tr
        [:td
         [date-picker ::events/cycle-start-updated]]
        [:td
         [formatted-date-text next-statement]]]
       [:tr {:height 30}]
       [:tr {:height 30}
        [:td
         [:div
          {:title "If patient has been receiving statements within the Stmt Hx tab, then enter the next statement date set in the future."}
          "Existing Future Statement Date:"]]
        [:td
         [:div "Next Letter Date:"]]]
       [:tr
        [:td
         [date-picker ::events/existing-future-statement-date-updated]]
        [:td
         [formatted-date-text next-letter]]]]]]))

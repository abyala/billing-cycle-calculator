package com.example.vaadin;

import com.vaadin.annotations.Theme;
import com.vaadin.data.HasValue;
import com.vaadin.server.VaadinRequest;
import com.vaadin.spring.annotation.SpringUI;
import com.vaadin.ui.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

@SpringUI
@Theme("Vaadin")
public class VaadinUI extends UI implements HasValue.ValueChangeListener<LocalDate> {
    private static final DateTimeFormatter DATE_FORMAT = DateTimeFormatter.ofPattern("M/d/yyyy");
    private final DateField cycleDateField = new DateField("Cycle Start (MM/DD/YYYY) *");
    private final DateField existingStatementField = new DateField("Existing Future Statement Date **");
    private final TextField nextStatementDateField = new TextField("Next Statement Date");
    private final TextField letterDateField = new TextField("Next Letter Date");
    private final Label cycleDateLabel = new Label("* Oldest date of service where balance is coming from.");
    private final Label existingStatementLabel = new Label("** If patient has been receiving statements within the Stmt Hx tab, then enter the next statement date set in the future.");

    @Override
    protected void init(VaadinRequest request) {
        nextStatementDateField.setReadOnly(true);
        letterDateField.setReadOnly(true);

        final VerticalLayout inputLayout = new VerticalLayout();
        inputLayout.addComponent(new Label("Input Fields"));
        inputLayout.addComponent(cycleDateField);
        inputLayout.addComponent(existingStatementField);

        final VerticalLayout outputLayout = new VerticalLayout();
        outputLayout.addComponent(new Label("Output Fields"));
        outputLayout.addComponent(nextStatementDateField);
        outputLayout.addComponent(letterDateField);

        final HorizontalLayout allDataLayout = new HorizontalLayout();
        allDataLayout.addComponent(inputLayout);
        allDataLayout.addComponent(outputLayout);

        final VerticalLayout overallLayout = new VerticalLayout();
        overallLayout.addComponent(allDataLayout);
        overallLayout.addComponent(cycleDateLabel);
        overallLayout.addComponent(existingStatementLabel);

        cycleDateField.setDateFormat("MM/dd/yyyy");
        existingStatementField.setDateFormat("MM/dd/yyyy");
        cycleDateField.addValueChangeListener(this);
        existingStatementField.addValueChangeListener(this);

        setContent(overallLayout);
    }

    @Override
    public void valueChange(HasValue.ValueChangeEvent<LocalDate> event) {
        final LocalDate cycleDate = cycleDateField.getValue();
        if (cycleDate == null) {
            setDateFields(null, null);
            return;
        }

        final int daysAgo = daysSince(cycleDate);
        if (daysAgo < 47) {
            setDateFields(cycleDate.plusDays(47), cycleDate.plusDays(92));
        } else {
            final LocalDate existingStatementDate = existingStatementField.getValue();
            if (existingStatementDate == null) {
                setDateFields(LocalDate.now().plusDays(1), LocalDate.now().plusDays(46));
            } else {
                setDateFields(existingStatementDate, existingStatementDate.plusDays(15));
            }
        }
    }

    private int daysSince(LocalDate cycleDate) {
        return (int) ChronoUnit.DAYS.between(cycleDate, LocalDate.now());
    }

    private void setDateFields(LocalDate nextStatementDate, LocalDate letterDate) {
        nextStatementDateField.setValue(nextStatementDate == null ? "" : nextStatementDate.format(DATE_FORMAT));
        letterDateField.setValue(letterDate == null ? "" : letterDate.format(DATE_FORMAT));
    }
}

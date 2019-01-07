package com.example.vaadin;

import com.vaadin.annotations.Theme;
import com.vaadin.data.HasValue;
import com.vaadin.server.VaadinRequest;
import com.vaadin.spring.annotation.SpringUI;
import com.vaadin.ui.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.time.temporal.ChronoUnit;

@SpringUI
@Theme("Vaadin")
public class VaadinUI extends UI implements HasValue.ValueChangeListener<String> {
    private static final DateTimeFormatter DATE_FORMAT = DateTimeFormatter.ofPattern("M/d/yyyy");
    private final TextField cycleDateField = new TextField("Cycle Start (MM/DD/YYYY)");
    private final TextField existingStatementField = new TextField("Existing Future Statement Date*");
    private final TextField nextStatementDateField = new TextField("Next Statement Date");
    private final TextField letterDateField = new TextField("Next Letter Date");
    private final Label existingStatementLabel = new Label("* Only use if account has been receiving recent monthly statements related to the balance.");

    @Override
    protected void init(VaadinRequest request) {
        existingStatementField.setVisible(false);
        existingStatementLabel.setVisible(false);
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
        overallLayout.addComponent(existingStatementLabel);

        cycleDateField.addValueChangeListener(this);
        existingStatementField.addValueChangeListener(this);

        setContent(overallLayout);
    }

    @Override
    public void valueChange(HasValue.ValueChangeEvent<String> event) {
        final LocalDate cycleDate = parseDate(cycleDateField);
        if (cycleDate == null) {
            setDateFields(false, null, null);
            return;
        }

        final int daysAgo = daysSince(cycleDate);
        if (daysAgo < 47) {
            setDateFields(false, cycleDate.plusDays(47), cycleDate.plusDays(92));
        } else {
            final LocalDate existingStatementDate = parseDate(existingStatementField);
            if (existingStatementDate == null) {
                setDateFields(true, LocalDate.now().plusDays(1), LocalDate.now().plusDays(46));
            } else {
                setDateFields(true, existingStatementDate, existingStatementDate.plusDays(15));
            }
        }
    }

    private int daysSince(LocalDate cycleDate) {
        return (int) ChronoUnit.DAYS.between(cycleDate, LocalDate.now());
    }

    private LocalDate parseDate(TextField field) {
        try {
            return LocalDate.parse(field.getValue(), DATE_FORMAT);
        } catch (DateTimeParseException e) {
            return null;
        }
    }

    private void setDateFields(boolean enableExistingStatement, LocalDate nextStatementDate, LocalDate letterDate) {
        existingStatementField.setVisible(enableExistingStatement);
        existingStatementLabel.setVisible(enableExistingStatement);
        if (!enableExistingStatement) {
            existingStatementField.setValue("");
        }

        nextStatementDateField.setValue(nextStatementDate == null ? "" : nextStatementDate.format(DATE_FORMAT));
        letterDateField.setValue(letterDate == null ? "" : letterDate.format(DATE_FORMAT));
    }
}

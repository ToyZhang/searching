package com.vo;

import java.math.BigDecimal;

/**
 * Created by zhangtuoyu on 2016-11-03.
 */
public class TCSL_VO_BussPrice {
    private String date;
    private BigDecimal income;
    private BigDecimal lastIncome;
    private BigDecimal lastYIncome;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public BigDecimal getIncome() {
        return income;
    }

    public void setIncome(BigDecimal income) {
        this.income = income;
    }

    public BigDecimal getLastIncome() {
        return lastIncome;
    }

    public void setLastIncome(BigDecimal lastIncome) {
        this.lastIncome = lastIncome;
    }

    public BigDecimal getLastYIncome() {
        return lastYIncome;
    }

    public void setLastYIncome(BigDecimal lastYIncome) {
        this.lastYIncome = lastYIncome;
    }
}

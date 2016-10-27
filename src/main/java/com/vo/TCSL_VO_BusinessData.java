package com.vo;

import java.math.BigDecimal;

/**
 * Created by zhangtuoyu on 2016-10-27.
 */
public class TCSL_VO_BusinessData {
    private String NAME;
    private BigDecimal PRICE; //营业额
    private BigDecimal AVGPRICE; //平均房价
    private String MMONEY; //入住率

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public BigDecimal getPRICE() {
        return PRICE;
    }

    public void setPRICE(BigDecimal PRICE) {
        this.PRICE = PRICE;
    }

    public BigDecimal getAVGPRICE() {
        return AVGPRICE;
    }

    public void setAVGPRICE(BigDecimal AVGPRICE) {
        this.AVGPRICE = AVGPRICE;
    }

    public String getMMONEY() {
        return MMONEY;
    }

    public void setMMONEY(String MMONEY) {
        this.MMONEY = MMONEY;
    }
}

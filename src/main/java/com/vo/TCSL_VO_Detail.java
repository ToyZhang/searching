package com.vo;

import java.math.BigDecimal;

/**
 * Created by zhangtuoyu on 2016-11-01.
 */
public class TCSL_VO_Detail {
    private String CNAME;
    private String CGUESTNAME;
    private BigDecimal MPRICE;
    private String date;
    private String SHOPID;

    public String getCNAME() {
        return CNAME;
    }

    public void setCNAME(String CNAME) {
        this.CNAME = CNAME;
    }

    public String getCGUESTNAME() {
        return CGUESTNAME;
    }

    public void setCGUESTNAME(String CGUESTNAME) {
        this.CGUESTNAME = CGUESTNAME;
    }

    public BigDecimal getMPRICE() {
        return MPRICE;
    }

    public void setMPRICE(BigDecimal MPRICE) {
        this.MPRICE = MPRICE;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getSHOPID() {
        return SHOPID;
    }

    public void setSHOPID(String SHOPID) {
        this.SHOPID = SHOPID;
    }
}

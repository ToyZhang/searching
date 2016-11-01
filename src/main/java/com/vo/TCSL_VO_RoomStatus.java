package com.vo;

/**
 * Created by zhangtuoyu on 2016-11-01.
 */
public class TCSL_VO_RoomStatus {
    private String ROOMNAME;
    private String ROOMTYPE;
    private String ROOMSTATE;
    private Integer IFLG;
    private String SHOPID;
    private Integer COUNT;

    public String getROOMNAME() {
        return ROOMNAME;
    }

    public void setROOMNAME(String ROOMNAME) {
        this.ROOMNAME = ROOMNAME;
    }

    public String getROOMTYPE() {
        return ROOMTYPE;
    }

    public void setROOMTYPE(String ROOMTYPE) {
        this.ROOMTYPE = ROOMTYPE;
    }

    public String getROOMSTATE() {
        return ROOMSTATE;
    }

    public void setROOMSTATE(String ROOMSTATE) {
        this.ROOMSTATE = ROOMSTATE;
    }

    public Integer getIFLG() {
        return IFLG;
    }

    public void setIFLG(Integer IFLG) {
        this.IFLG = IFLG;
    }

    public String getSHOPID() {
        return SHOPID;
    }

    public void setSHOPID(String SHOPID) {
        this.SHOPID = SHOPID;
    }

    public Integer getCOUNT() {
        return COUNT;
    }

    public void setCOUNT(Integer COUNT) {
        this.COUNT = COUNT;
    }
}

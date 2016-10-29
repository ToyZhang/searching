package com.vo;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-10-27.
 */
public class TCSL_VO_BusinessData {
    private String NAME;
    private BigDecimal PRICE; //营业额
    private BigDecimal AVGPRICE; //平均房价
    private String MMONEY; //入住率
    private String DATE; //日期
    private BigDecimal NUM; //售房数
    private List<String> dateList; //营业走势日期列表
    private List<BigDecimal> priceList; //营业走势金额列表
    private List<TCSL_VO_BusinessData> busStatusList; //营业情况列表
    private List<TCSL_VO_BusinessData> closeDetailList; //结算明细列表
    private List<TCSL_VO_BusinessData> itemSaleList; //品项销售列表
    private List<TCSL_VO_BusinessData> collectDetailList; //收款明细列表
    private List<TCSL_VO_BusinessData> busTargetList; //营业指标列表

    public BigDecimal getNUM() {
        return NUM;
    }

    public void setNUM(BigDecimal NUM) {
        this.NUM = NUM;
    }

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

    public String getDATE() {
        return DATE;
    }

    public void setDATE(String DATE) {
        this.DATE = DATE;
    }

    public List<String> getDateList() {
        return dateList;
    }

    public void setDateList(List<String> dateList) {
        this.dateList = dateList;
    }

    public List<BigDecimal> getPriceList() {
        return priceList;
    }

    public void setPriceList(List<BigDecimal> priceList) {
        this.priceList = priceList;
    }

    public List<TCSL_VO_BusinessData> getBusStatusList() {
        return busStatusList;
    }

    public void setBusStatusList(List<TCSL_VO_BusinessData> busStatusList) {
        this.busStatusList = busStatusList;
    }

    public List<TCSL_VO_BusinessData> getCloseDetailList() {
        return closeDetailList;
    }

    public void setCloseDetailList(List<TCSL_VO_BusinessData> closeDetailList) {
        this.closeDetailList = closeDetailList;
    }

    public List<TCSL_VO_BusinessData> getItemSaleList() {
        return itemSaleList;
    }

    public void setItemSaleList(List<TCSL_VO_BusinessData> itemSaleList) {
        this.itemSaleList = itemSaleList;
    }

    public List<TCSL_VO_BusinessData> getCollectDetailList() {
        return collectDetailList;
    }

    public void setCollectDetailList(List<TCSL_VO_BusinessData> collectDetailList) {
        this.collectDetailList = collectDetailList;
    }

    public List<TCSL_VO_BusinessData> getBusTargetList() {
        return busTargetList;
    }

    public void setBusTargetList(List<TCSL_VO_BusinessData> busTargetList) {
        this.busTargetList = busTargetList;
    }
}

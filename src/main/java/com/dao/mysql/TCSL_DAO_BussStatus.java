package com.dao.mysql;

import com.vo.TCSL_VO_BusinessData;
import org.apache.ibatis.annotations.Param;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-10-28.
 */
public interface TCSL_DAO_BussStatus {
    /**
     * 查询营业情况相关参数
     * @param shopId
     * @param startDate
     * @param endDate
     * @param cId  营业情况(1-1);结算明细(1-2)
     * @return
     */
    List<TCSL_VO_BusinessData> queryBussParam(
        @Param("SHOPID") String shopId,
        @Param("STARTDATE") String startDate,
        @Param("ENDDATE") String endDate,
        @Param("CID") String cId
    );

    /**
     * 查询售房数
     * @param shopId
     * @param startDate
     * @param endDate
     * @return
     */
    BigDecimal querySaleRoomNum(
        @Param("SHOPID") String shopId,
        @Param("STARTDATE") String startDate,
        @Param("ENDDATE") String endDate
    );

    /**
     * 查询平均房价
     * @param shopId
     * @param startDate
     * @param endDate
     * @return
     */
    BigDecimal queryAvgRoomPrice(
        @Param("SHOPID") String shopId,
        @Param("STARTDATE") String startDate,
        @Param("ENDDATE") String endDate
    );

    /**
     * 按时间段查询入住数
     * @param shopId
     * @param startDate
     * @param endDate
     * @return
     */
    List<BigDecimal> queryCheckInNum(
        @Param("SHOPID") String shopId,
        @Param("STARTDATE") String startDate,
        @Param("ENDDATE") String endDate
    );

    /**
     * 按时间段查询入住率
     * @param shopId
     * @param startDate
     * @param endDate
     * @return
     */
    List<BigDecimal> queryCheckInPercent(
        @Param("SHOPID") String shopId,
        @Param("STARTDATE") String startDate,
        @Param("ENDDATE") String endDate
    );
}

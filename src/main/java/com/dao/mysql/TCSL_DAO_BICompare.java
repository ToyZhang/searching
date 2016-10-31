package com.dao.mysql;

import com.vo.TCSL_VO_BusinessData;
import org.apache.ibatis.annotations.Param;

/**
 * Created by zhangtuoyu on 2016-10-31.
 */
public interface TCSL_DAO_BICompare {
    //查询营业额
    TCSL_VO_BusinessData queryBussVolumeByDayLast(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryBussVolumeByDay(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryBussVolumeByWeekLast(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryBussVolumeByWeek(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryBussVolumeByMonthLast(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryBussVolumeByMonth(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryBussVolumeByQuarterLast(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryBussVolumeByQuarter(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryBussVolumeByYearLast(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryBussVolumeByYear(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    //查询平均房价
    TCSL_VO_BusinessData queryAvgRoomPriceByDayLast(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryAvgRoomPriceByDay(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryAvgRoomPriceByWeekLast(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryAvgRoomPriceByWeek(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryAvgRoomPriceByMonthLast(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryAvgRoomPriceByMonth(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryAvgRoomPriceByQuarterLast(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryAvgRoomPriceByQuarter(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryAvgRoomPriceByYearLast(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryAvgRoomPriceByYear(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData querySaleRoomNumByDayLast(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData querySaleRoomNumByDay(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData querySaleRoomNumByWeekLast(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData querySaleRoomNumByWeek(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData querySaleRoomNumByMonthLast(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData querySaleRoomNumByMonth(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData querySaleRoomNumByQuarterLast(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData querySaleRoomNumByQuarter(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData querySaleRoomNumByYearLast(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );
    TCSL_VO_BusinessData querySaleRoomNumByYear(
            @Param("SHOPID") String shopId,
            @Param("DATE") String date
    );

}

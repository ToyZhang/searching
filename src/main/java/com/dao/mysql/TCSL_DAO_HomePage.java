package com.dao.mysql;

import com.vo.TCSL_VO_BusinessData;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by zhangtuoyu on 2016-10-27.
 */
public interface TCSL_DAO_HomePage {
    List<TCSL_VO_BusinessData> queryBussPrice(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryAvgPrice(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    TCSL_VO_BusinessData queryCheckInPercent(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
    List<TCSL_VO_BusinessData> queryBussPriceByWeek(
        @Param("SHOPID") String shopId,
        @Param("DATE") String date
    );
}

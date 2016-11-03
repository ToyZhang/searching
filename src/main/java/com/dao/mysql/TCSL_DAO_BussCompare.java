package com.dao.mysql;

import org.apache.ibatis.annotations.Param;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-11-03.
 */
public interface TCSL_DAO_BussCompare {
    List<BigDecimal> queryById(
        @Param("STARTDATE") String startDate,
        @Param("ENDDATE") String endDate,
        @Param("SHOPID") String shopId
    );
}

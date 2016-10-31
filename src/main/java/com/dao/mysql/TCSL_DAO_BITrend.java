package com.dao.mysql;

import com.vo.TCSL_VO_BusinessData;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by zhangtuoyu on 2016-10-31.
 */
public interface TCSL_DAO_BITrend {
    /**
     * 查询营业额
     * @param shopId 商户id
     * @param date 截止日期
     * @param scope 时间范围
     * @return
     */
    List<TCSL_VO_BusinessData> queryBussData(
        @Param("SHOPID") String shopId,
        @Param("DTYYR") String date,
        @Param("SCOPE") int scope
    );

    /**
     * 查询平均房价
     * @param shopId 商户id
     * @param date 截止日期
     * @param scope 时间范围
     * @return
     */
    List<TCSL_VO_BusinessData> queryAvgRoomPrice(
        @Param("SHOPID") String shopId,
        @Param("DTYYR") String date,
        @Param("SCOPE") int scope
    );
    /**
     * 查询售房数
     * @param shopId 商户id
     * @param date 截止日期
     * @param scope 时间范围
     * @return
     */
    List<TCSL_VO_BusinessData> querySaleRoomNum(
        @Param("SHOPID") String shopId,
        @Param("DTYYR") String date,
        @Param("SCOPE") int scope
    );
}

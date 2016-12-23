package com.dao.mysql;

import com.vo.TCSL_VO_RoomStatus;
import org.apache.ibatis.annotations.Param;

import java.math.BigDecimal;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-11-01.
 */
public interface TCSL_DAO_RoomStatus {
    /**
     * 查询各类房态列表
     * @param shopId
     * @return
     */
    List<TCSL_VO_RoomStatus> queryById(
        @Param("SHOPID") String shopId
    );

    /**
     * 查询各类房间总数
     * @param shopId
     * @return
     */
    List<TCSL_VO_RoomStatus> queryRoomCount(
        @Param("SHOPID") String shopId
    );

    /**
     * 查询当日平均房价
     * @param shopId
     * @return
     */
    BigDecimal queryAvgRoomPrice(
        @Param("SHOPID") String shopId
    );

    /**
     * 查询当日入住率
     * @return
     */
    BigDecimal queryCheckInPercent(

    );

}

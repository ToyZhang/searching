package com.dao.mysql;

import com.vo.TCSL_VO_OrderNum;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by zhangtuoyu on 2016-11-01.
 */
public interface TCSL_DAO_OrderStatus {
    List<TCSL_VO_OrderNum> queryById(
        @Param("SHOPID") String shopId
    );
}

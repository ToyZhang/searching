package com.dao.mysql;

import com.vo.TCSL_VO_Detail;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by zhangtuoyu on 2016-11-01.
 */
public interface TCSL_DAO_Detail {
    List<TCSL_VO_Detail> queryById(
        @Param("SHOPID") String shopId
    );
}

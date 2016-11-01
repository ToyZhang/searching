package com.dao.mysql;

import com.vo.TCSL_VO_RoomUseNum;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by zhangtuoy on 2016-11-01.
 */
public interface TCSL_DAO_EmployNum {
    List<TCSL_VO_RoomUseNum> queryById(
        @Param("SHOPID") String shopId
    );
}

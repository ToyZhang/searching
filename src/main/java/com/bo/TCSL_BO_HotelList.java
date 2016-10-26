package com.bo;

import com.dao.oracle.TCSL_DAO_ORACLE_Shop;
import com.vo.TCSL_VO_Result;
import com.vo.TCSL_VO_Shop;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-10-26.
 */
@Repository
public class TCSL_BO_HotelList {
    @Resource
    TCSL_DAO_ORACLE_Shop daoOracleShop;

    public TCSL_VO_Result queryNameById(List<String> shopIds){
        TCSL_VO_Result result = new TCSL_VO_Result();
        List<TCSL_VO_Shop> nameList = daoOracleShop.queryNameById(shopIds);
        result.setRet(0);
        result.setContent(nameList);
        return result;
    }
}

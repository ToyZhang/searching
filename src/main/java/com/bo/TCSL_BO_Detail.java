package com.bo;

import com.dao.mysql.TCSL_DAO_Detail;
import com.vo.TCSL_VO_Detail;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-11-01.
 */
@Repository
public class TCSL_BO_Detail {
    @Resource
    TCSL_DAO_Detail daoDetail;

    public TCSL_VO_Result queryById(String shopId){
        TCSL_VO_Result result = new TCSL_VO_Result();
        List<TCSL_VO_Detail> detailList = daoDetail.queryById(shopId);
        result.setRet(0);
        result.setContent(detailList);
        return result;
    }
}

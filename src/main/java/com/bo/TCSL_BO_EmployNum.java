package com.bo;

import com.dao.mysql.TCSL_DAO_EmployNum;
import com.vo.TCSL_VO_Result;
import com.vo.TCSL_VO_RoomUseNum;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-11-01.
 */
@Repository
public class TCSL_BO_EmployNum {
    @Resource
    TCSL_DAO_EmployNum daoEmployNum;

    public TCSL_VO_Result queryById(String shopId){
        TCSL_VO_Result result = new TCSL_VO_Result();
        List<TCSL_VO_RoomUseNum> list = daoEmployNum.queryById(shopId);
        result.setRet(0);
        result.setContent(list);
        return result;
    }
}

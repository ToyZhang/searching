package com.bo;

import com.dao.mysql.TCSL_DAO_BITrend;
import com.vo.TCSL_VO_BusinessData;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-10-31.
 */
@Repository
public class TCSL_BO_BITrend {

    @Resource
    TCSL_DAO_BITrend daoBussStatus;

    /**
     * 查询营业额
     * @param shopId 商户id
     * @param date 截止日期
     * @param scope 时间范围
     * @param menuId 查询菜单类型
     * @return
     */
    public TCSL_VO_Result queryBussData(String shopId,String date,int scope,String menuId){
        TCSL_VO_Result result = new TCSL_VO_Result();
        List<TCSL_VO_BusinessData> dataList = new ArrayList<TCSL_VO_BusinessData>();
        //查询营业额
        if("myBtnYYE".equals(menuId)){
            result.setRet(0);
            dataList = daoBussStatus.queryBussData(shopId,date,scope);
        }
        //查询平均房价
        if("myBtnPJFJ".equals(menuId)){
            result.setRet(0);
            dataList = daoBussStatus.queryAvgRoomPrice(shopId,date,scope);
        }
        //查询售房数
        if("myBtnSFS".equals(menuId)){
            result.setRet(0);
            dataList = daoBussStatus.querySaleRoomNum(shopId,date,scope);
        }
        result.setContent(dataList);
        return result;
    }
}

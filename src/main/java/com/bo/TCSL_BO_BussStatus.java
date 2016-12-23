package com.bo;

import com.dao.mysql.TCSL_DAO_BussStatus;
import com.vo.TCSL_VO_BusinessData;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-10-28.
 */
@Repository
public class TCSL_BO_BussStatus {
    @Resource
    TCSL_DAO_BussStatus daoBussStatus;

    public TCSL_VO_Result queryById(String shopId,String startDate,String endDate){
        TCSL_VO_Result result = new TCSL_VO_Result();
        TCSL_VO_BusinessData businessData = new TCSL_VO_BusinessData();
        //营业情况列表
        List<TCSL_VO_BusinessData> bussStatus =
                daoBussStatus.queryBussParam(shopId,startDate,endDate,"1-1");
        businessData.setBusStatusList(bussStatus);
        //结算明细列表
        List<TCSL_VO_BusinessData> closeDetailList = daoBussStatus.queryBussParam(shopId,startDate,endDate,"1-2");
        businessData.setCloseDetailList(closeDetailList);
        //品项销售列表
        List<TCSL_VO_BusinessData> itemSaleList = daoBussStatus.queryBussParam(shopId,startDate,endDate,"2");
        businessData.setItemSaleList(itemSaleList);
        //收款明细列表
        List<TCSL_VO_BusinessData> collecDetailList = daoBussStatus.queryBussParam(shopId,startDate,endDate,"1-7");
        businessData.setCollectDetailList(collecDetailList);
        //营业指标列表
        List<TCSL_VO_BusinessData> bussTargetList = new ArrayList<TCSL_VO_BusinessData>();
        //获取营业指标--售房数
        BigDecimal saleRoomNum = daoBussStatus.querySaleRoomNum(shopId,startDate,endDate);
        TCSL_VO_BusinessData saleRoomData = new TCSL_VO_BusinessData();
        saleRoomData.setNAME("售房数");
        saleRoomData.setNUM(saleRoomNum);

        //获取营业指标--平均房价
        BigDecimal avgRoomPrice = daoBussStatus.queryAvgRoomPrice(shopId,startDate,endDate);
        TCSL_VO_BusinessData avgRoomPriceData = new TCSL_VO_BusinessData();
        avgRoomPriceData.setNAME("平均房价");
        avgRoomPriceData.setPRICE(avgRoomPrice);

        //获取营业指标--入住率
        List<BigDecimal> totalRoomList = new ArrayList<BigDecimal>(); //该时间段每天房间总数
        List<BigDecimal> checkInNum = daoBussStatus.queryCheckInNum(shopId,startDate,endDate); //查询该时间段每天入住数
        List<BigDecimal> checkInPercentByDay = daoBussStatus.queryCheckInPercent(shopId,startDate,endDate); //查询该时间段每天入住率
        BigDecimal checkInTotal = new BigDecimal(0.00); //该时间段入住总数
        //计算该时间段中每天房间总数  该日房间总数 = 该日入住房数/该日入住率
        for (int i = 0; i<checkInNum.size();i++){
            checkInTotal = checkInTotal.add(checkInNum.get(i));
            BigDecimal num = checkInNum.get(i);
            BigDecimal percent = checkInPercentByDay.get(i);
            BigDecimal totalRoomNum = num.divide(percent,0, RoundingMode.HALF_UP);
            totalRoomList.add(totalRoomNum);
        }
        BigDecimal totalRoomNum = new BigDecimal(0.00); //该时间段房间总数
        for(int i=0; i<totalRoomList.size(); i++){
            totalRoomNum = totalRoomNum.add(totalRoomList.get(i));
        }
        //判断总房数是否为0
        BigDecimal checkInPercent = new BigDecimal(0.00);
        Boolean compareResult = (totalRoomNum.compareTo(BigDecimal.ZERO) == 0); //true 总房数为0  false 总房数不为0
        if(!compareResult){ //总房数不为0
            checkInPercent = checkInTotal.divide(totalRoomNum,2, RoundingMode.HALF_UP);
        }
        TCSL_VO_BusinessData checkInData = new TCSL_VO_BusinessData();
        checkInData.setNAME("入住率");
        checkInData.setMMONEY((checkInPercent.multiply(new BigDecimal(100)))+"%");
        bussTargetList.add(checkInData);
        //售房数不为null，平均房价不为null，总房数不为0
        if((saleRoomData.getNUM() != null) && (avgRoomPrice != null) && (compareResult == false)){
            bussTargetList.add(saleRoomData);
            bussTargetList.add(avgRoomPriceData);
            businessData.setBusTargetList(bussTargetList);
        }
        result.setRet(0);
        result.setContent(businessData);
        return result;
    }

}

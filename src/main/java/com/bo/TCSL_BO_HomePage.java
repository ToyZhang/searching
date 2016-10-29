package com.bo;

import com.dao.mysql.TCSL_DAO_HomePage;
import com.vo.TCSL_VO_BusinessData;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-10-27.
 */
@Repository
public class TCSL_BO_HomePage {
    @Resource
    TCSL_DAO_HomePage daoHomePage;

    /**
     * 查询主页相关信息
     * 营业额
     * 平均房价
     * 入住率
     * @param shopId
     * @param date
     * @return
     */
    public TCSL_VO_Result queryById(String shopId,String date){
        TCSL_VO_Result result = new TCSL_VO_Result();
        TCSL_VO_BusinessData businessData = new TCSL_VO_BusinessData();
        //查询营业额
        List<TCSL_VO_BusinessData> priceList = daoHomePage.queryBussPrice(shopId,date);
        BigDecimal totalPrice = new BigDecimal(0.00);
        for (int i=0; i<priceList.size(); i++){
            TCSL_VO_BusinessData itemPrice = priceList.get(i);
            if(itemPrice != null){
                BigDecimal price = itemPrice.getPRICE();
                totalPrice = totalPrice.add(price);
            }
        }
        businessData.setPRICE(totalPrice);
        //查询平均房价
        TCSL_VO_BusinessData avgInfo = daoHomePage.queryAvgPrice(shopId,date);
        if(avgInfo != null){
            BigDecimal avgPrice = avgInfo.getAVGPRICE().setScale(2,BigDecimal.ROUND_HALF_UP);
            businessData.setAVGPRICE(avgPrice);
        }
        //查询入住率
        TCSL_VO_BusinessData checkInPercent = daoHomePage.queryCheckInPercent(shopId,date);
        if(checkInPercent != null){
            Double percent = Double.parseDouble(checkInPercent.getMMONEY());
            String percentStr = String.valueOf(percent * 100);
            businessData.setMMONEY(percentStr);
        }
        //查询一周营业趋势
        List<TCSL_VO_BusinessData> list = daoHomePage.queryBussPriceByWeek(shopId,date);
        List<String> dateList = new ArrayList<String>();
        List<BigDecimal> bussPriceList = new ArrayList<BigDecimal>();
        for(int i=0; i<list.size(); i++) {
            String bussDate = list.get(i).getDATE();
            BigDecimal bussPrice = list.get(i).getPRICE();
            dateList.add(bussDate);
            bussPriceList.add(bussPrice);
        }
        businessData.setDateList(dateList);
        businessData.setPriceList(bussPriceList);
        result.setRet(0);
        result.setContent(businessData);
        return result;
    }
}

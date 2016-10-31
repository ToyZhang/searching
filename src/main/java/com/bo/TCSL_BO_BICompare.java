package com.bo;

import com.dao.mysql.TCSL_DAO_BICompare;
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
public class TCSL_BO_BICompare {
    @Resource
    TCSL_DAO_BICompare daoBiCompare;

    public TCSL_VO_Result queryBussData(String shopId,String date,String menuId){
        TCSL_VO_Result result = new TCSL_VO_Result();
        List<TCSL_VO_BusinessData> resultList = new ArrayList<TCSL_VO_BusinessData>();
        if("myBtnYYE".equals(menuId)){
            //查询日营业额
            TCSL_VO_BusinessData bussVolumeByDayLast = daoBiCompare.queryBussVolumeByDayLast(shopId,date);
            if(bussVolumeByDayLast == null){
                bussVolumeByDayLast = new TCSL_VO_BusinessData();
            }
            bussVolumeByDayLast.setNAME("前一日");
            resultList.add(bussVolumeByDayLast);
            TCSL_VO_BusinessData bussVolumeByDay = daoBiCompare.queryBussVolumeByDay(shopId,date);
            if(bussVolumeByDay == null){
                bussVolumeByDay = new TCSL_VO_BusinessData();
            }
            bussVolumeByDay.setNAME("当日");
            resultList.add(bussVolumeByDay);
            //查询周营业额
            TCSL_VO_BusinessData bussVolumeByWeekLast = daoBiCompare.queryBussVolumeByWeekLast(shopId,date);
            if(bussVolumeByWeekLast == null){
                bussVolumeByWeekLast = new TCSL_VO_BusinessData();
            }
            bussVolumeByWeekLast.setNAME("前一周");
            resultList.add(bussVolumeByWeekLast);
            TCSL_VO_BusinessData bussVolumeByWeek = daoBiCompare.queryBussVolumeByWeek(shopId,date);
            if(bussVolumeByWeek == null){
                bussVolumeByWeek = new TCSL_VO_BusinessData();
            }
            bussVolumeByWeek.setNAME("本周");
            resultList.add(bussVolumeByWeek);
            //查询月营业额
            TCSL_VO_BusinessData bussVolumeByMonthLast = daoBiCompare.queryBussVolumeByMonthLast(shopId,date);
            if(bussVolumeByMonthLast == null){
                bussVolumeByMonthLast = new TCSL_VO_BusinessData();
            }
            bussVolumeByMonthLast.setNAME("前一月");
            resultList.add(bussVolumeByMonthLast);
            TCSL_VO_BusinessData bussVolumeByMonth = daoBiCompare.queryBussVolumeByMonth(shopId,date);
            if(bussVolumeByMonth == null){
                bussVolumeByMonth = new TCSL_VO_BusinessData();
            }
            bussVolumeByMonth.setNAME("本月");
            resultList.add(bussVolumeByMonth);
            //查询季度营业额
            TCSL_VO_BusinessData bussVolumeByQuarterLast = daoBiCompare.queryBussVolumeByQuarterLast(shopId,date);
            if(bussVolumeByQuarterLast == null){
                bussVolumeByQuarterLast = new TCSL_VO_BusinessData();
            }
            bussVolumeByQuarterLast.setNAME("前一季");
            resultList.add(bussVolumeByQuarterLast);
            TCSL_VO_BusinessData bussVolumeByQuarter = daoBiCompare.queryBussVolumeByQuarter(shopId,date);
            if(bussVolumeByQuarter == null){
                bussVolumeByQuarter = new TCSL_VO_BusinessData();
            }
            bussVolumeByQuarter.setNAME("本季");
            resultList.add(bussVolumeByQuarter);
            //查询年营业额
            TCSL_VO_BusinessData bussVolumeByYearLast = daoBiCompare.queryBussVolumeByYearLast(shopId,date);
            if(bussVolumeByYearLast == null){
                bussVolumeByYearLast = new TCSL_VO_BusinessData();
            }
            bussVolumeByYearLast.setNAME("前一年");
            resultList.add(bussVolumeByYearLast);
            TCSL_VO_BusinessData bussVolumeByYear = daoBiCompare.queryBussVolumeByYear(shopId,date);
            if(bussVolumeByYear == null){
                bussVolumeByYear = new TCSL_VO_BusinessData();
            }
            bussVolumeByYear.setNAME("本年");
            resultList.add(bussVolumeByYear);
            result.setRet(0);
        }
        if("myBtnPJFJ".equals(menuId)){
            //查询日平均房价
            TCSL_VO_BusinessData avgRoomPriceByDayLast = daoBiCompare.queryAvgRoomPriceByDayLast(shopId,date);
            if(avgRoomPriceByDayLast == null){
                avgRoomPriceByDayLast = new TCSL_VO_BusinessData();
            }
            avgRoomPriceByDayLast.setNAME("前一日");
            resultList.add(avgRoomPriceByDayLast);
            TCSL_VO_BusinessData avgRoomPriceByDay = daoBiCompare.queryAvgRoomPriceByDay(shopId,date);
            if(avgRoomPriceByDay == null){
                avgRoomPriceByDay = new TCSL_VO_BusinessData();
            }
            avgRoomPriceByDay.setNAME("当日");
            resultList.add(avgRoomPriceByDay);
            //查询周平均房价
            TCSL_VO_BusinessData avgRoomPriceByWeekLast = daoBiCompare.queryAvgRoomPriceByWeekLast(shopId,date);
            if(avgRoomPriceByWeekLast == null){
                avgRoomPriceByWeekLast = new TCSL_VO_BusinessData();
            }
            avgRoomPriceByWeekLast.setNAME("前一周");
            resultList.add(avgRoomPriceByWeekLast);
            TCSL_VO_BusinessData avgRoomPriceByWeek = daoBiCompare.queryAvgRoomPriceByWeek(shopId,date);
            if(avgRoomPriceByWeek == null){
                avgRoomPriceByWeek = new TCSL_VO_BusinessData();
            }
            avgRoomPriceByWeek.setNAME("本周");
            resultList.add(avgRoomPriceByWeek);
            //查询月平均房价
            TCSL_VO_BusinessData avgRoomPriceByMonthLast = daoBiCompare.queryAvgRoomPriceByMonthLast(shopId,date);
            if(avgRoomPriceByMonthLast == null){
                avgRoomPriceByMonthLast = new TCSL_VO_BusinessData();
            }
            avgRoomPriceByMonthLast.setNAME("前一月");
            resultList.add(avgRoomPriceByMonthLast);
            TCSL_VO_BusinessData avgRoomPriceByMonth = daoBiCompare.queryAvgRoomPriceByMonth(shopId,date);
            if(avgRoomPriceByMonth == null){
                avgRoomPriceByMonth = new TCSL_VO_BusinessData();
            }
            avgRoomPriceByMonth.setNAME("本月");
            resultList.add(avgRoomPriceByMonth);
            //查询季平均房价
            TCSL_VO_BusinessData avgRoomPriceByQuarterLast = daoBiCompare.queryAvgRoomPriceByQuarterLast(shopId,date);
            if(avgRoomPriceByQuarterLast == null){
                avgRoomPriceByQuarterLast = new TCSL_VO_BusinessData();
            }
            avgRoomPriceByQuarterLast.setNAME("前一季");
            resultList.add(avgRoomPriceByQuarterLast);
            TCSL_VO_BusinessData avgRoomPriceByQuarter = daoBiCompare.queryAvgRoomPriceByQuarter(shopId,date);
            if(avgRoomPriceByQuarter == null){
                avgRoomPriceByQuarter = new TCSL_VO_BusinessData();
            }
            avgRoomPriceByQuarter.setNAME("本季");
            resultList.add(avgRoomPriceByQuarter);
            //查询年平均房价
            TCSL_VO_BusinessData avgRoomPriceByYearLast = daoBiCompare.queryAvgRoomPriceByYearLast(shopId,date);
            if(avgRoomPriceByYearLast == null){
                avgRoomPriceByYearLast = new TCSL_VO_BusinessData();
            }
            avgRoomPriceByYearLast.setNAME("前一年");
            resultList.add(avgRoomPriceByYearLast);
            TCSL_VO_BusinessData avgRoomPriceByYear = daoBiCompare.queryAvgRoomPriceByYear(shopId,date);
            if(avgRoomPriceByYear == null){
                avgRoomPriceByYear = new TCSL_VO_BusinessData();
            }
            avgRoomPriceByYear.setNAME("本年");
            resultList.add(avgRoomPriceByYear);
            result.setRet(0);
        }
        if("myBtnSFS".equals(menuId)){
            //查询日售房数
            TCSL_VO_BusinessData saleRoomNumByDayLast = daoBiCompare.querySaleRoomNumByDayLast(shopId,date);
            if(saleRoomNumByDayLast == null){
                saleRoomNumByDayLast = new TCSL_VO_BusinessData();
            }
            saleRoomNumByDayLast.setNAME("前一日");
            resultList.add(saleRoomNumByDayLast);
            TCSL_VO_BusinessData saleRoomNumByDay = daoBiCompare.querySaleRoomNumByDay(shopId,date);
            if(saleRoomNumByDay == null){
                saleRoomNumByDay = new TCSL_VO_BusinessData();
            }
            saleRoomNumByDay.setNAME("当日");
            resultList.add(saleRoomNumByDay);
            //查询周售房数
            TCSL_VO_BusinessData saleRoomNumByWeekLast = daoBiCompare.querySaleRoomNumByWeekLast(shopId,date);
            if(saleRoomNumByWeekLast == null){
                saleRoomNumByWeekLast = new TCSL_VO_BusinessData();
            }
            saleRoomNumByWeekLast.setNAME("前一周");
            resultList.add(saleRoomNumByWeekLast);
            TCSL_VO_BusinessData saleRoomNumByWeek = daoBiCompare.querySaleRoomNumByWeek(shopId,date);
            if(saleRoomNumByWeek == null){
                saleRoomNumByWeek = new TCSL_VO_BusinessData();
            }
            saleRoomNumByWeek.setNAME("本周");
            resultList.add(saleRoomNumByWeek);
            //查询月售房数
            TCSL_VO_BusinessData saleRoomNumByMonthLast = daoBiCompare.querySaleRoomNumByMonthLast(shopId,date);
            if(saleRoomNumByMonthLast == null){
                saleRoomNumByMonthLast = new TCSL_VO_BusinessData();
            }
            saleRoomNumByMonthLast.setNAME("前一月");
            resultList.add(saleRoomNumByMonthLast);
            TCSL_VO_BusinessData saleRoomNumByMonth = daoBiCompare.querySaleRoomNumByMonth(shopId,date);
            if(saleRoomNumByMonth == null){
                saleRoomNumByMonth = new TCSL_VO_BusinessData();
            }
            saleRoomNumByMonth.setNAME("本月");
            resultList.add(saleRoomNumByMonth);
            //查询季售房数
            TCSL_VO_BusinessData saleRoomNumByQuarterLast = daoBiCompare.querySaleRoomNumByQuarterLast(shopId,date);
            if(saleRoomNumByQuarterLast == null){
                saleRoomNumByQuarterLast = new TCSL_VO_BusinessData();
            }
            saleRoomNumByQuarterLast.setNAME("前一季");
            resultList.add(saleRoomNumByQuarterLast);
            TCSL_VO_BusinessData saleRoomNumByQuarter = daoBiCompare.querySaleRoomNumByQuarter(shopId,date);
            if(saleRoomNumByQuarter == null){
                saleRoomNumByQuarter = new TCSL_VO_BusinessData();
            }
            saleRoomNumByQuarter.setNAME("本季");
            resultList.add(saleRoomNumByQuarter);
            //查询年售房数
            TCSL_VO_BusinessData saleRoomNumByYearLast = daoBiCompare.querySaleRoomNumByYearLast(shopId,date);
            if(saleRoomNumByYearLast == null){
                saleRoomNumByYearLast = new TCSL_VO_BusinessData();
            }
            saleRoomNumByYearLast.setNAME("前一年");
            resultList.add(saleRoomNumByYearLast);
            TCSL_VO_BusinessData saleRoomNumByYear = daoBiCompare.querySaleRoomNumByYear(shopId,date);
            if(saleRoomNumByYear == null){
                saleRoomNumByYear = new TCSL_VO_BusinessData();
            }
            saleRoomNumByYear.setNAME("本年");
            resultList.add(saleRoomNumByYear);
            result.setRet(0);
        }
        result.setContent(resultList);
        return result;
    }
}

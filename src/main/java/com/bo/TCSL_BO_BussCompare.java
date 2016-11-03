package com.bo;

import com.dao.mysql.TCSL_DAO_BussCompare;
import com.vo.TCSL_VO_BussPrice;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by zhagntuoyu on 2016-11-03.
 */
@Repository
public class TCSL_BO_BussCompare {
    @Resource
    TCSL_DAO_BussCompare daoBussCompare;
    /**
     * 查询全年营业额
     * @param shopId
     * @return
     */
    public TCSL_VO_Result queryById(String shopId){
        String startDate = "";
        String endDate = "";
        TCSL_VO_Result result = new TCSL_VO_Result();
        List<TCSL_VO_BussPrice> list = new ArrayList<TCSL_VO_BussPrice>();
        //获取系统时间当前所在年
        SimpleDateFormat fm = new SimpleDateFormat("YYYY");
        Date now = new Date();
        String currentYear = fm.format(now);
        currentYear = "2015";
        //获取系统时间前一年时间
        Calendar curr = Calendar.getInstance();
        curr.setTime(now);
        curr.add(Calendar.YEAR,-1);
        Date lastDate = curr.getTime();
        String lastYear = fm.format(lastDate);
        lastYear = "2014";
        //获取一月营业额
        startDate = currentYear + "-01-01";
        endDate = currentYear + "-01-31";
        List<BigDecimal> januaryList = daoBussCompare.queryById(startDate,endDate,shopId);
        BigDecimal januaryPrice = getTotalPrice(januaryList);
        TCSL_VO_BussPrice january = new TCSL_VO_BussPrice();
        january.setDate(currentYear+"年1月");
        january.setIncome(januaryPrice);
        //获取前一年12月份营业额
        startDate = lastYear + "-12-01";
        endDate = lastYear + "-12-31";
        List<BigDecimal> lastMonthList = daoBussCompare.queryById(startDate,endDate,shopId);
        BigDecimal lastMonthPrice = getTotalPrice(lastMonthList);
        january.setLastIncome(lastMonthPrice);
        //获取去年一月营业额
        startDate = lastYear + "-01-01";
        endDate = lastYear + "-01-31";
        List<BigDecimal> lastJanList = daoBussCompare.queryById(startDate,endDate,shopId);
        BigDecimal lastJanPrice = getTotalPrice(lastJanList);
        january.setLastYIncome(lastJanPrice);
        list.add(january);
        //获取2-12月营业额
        for(int i = 2; i<=12; i++) {
            TCSL_VO_BussPrice month = new TCSL_VO_BussPrice();
            month.setDate(currentYear+"年"+i+"月");
            //获取当月营业额
            startDate = currentYear + "-0" + i + "-01";
            endDate = currentYear + "-0" + i + "-31";
            List<BigDecimal> monthPriceList = daoBussCompare.queryById(startDate,endDate,shopId);
            BigDecimal monthPrice = getTotalPrice(monthPriceList);
            month.setIncome(monthPrice);
            //获取上月营业额
            int index = i-2;
            BigDecimal lastIncome = list.get(index).getIncome();
            month.setLastIncome(lastIncome);
            //获取去年该月营业额
            startDate = lastYear + "-0" + i + "-01";
            endDate = lastYear + "-0" + i + "-31";
            List<BigDecimal> lastYearList = daoBussCompare.queryById(startDate,endDate,shopId);
            BigDecimal price = getTotalPrice(lastYearList);
            month.setLastYIncome(price);
            list.add(month);
        }
        result.setRet(0);
        result.setContent(list);
        return result;
    }

    /**
     * 计算该月各项金额综合
     * @param list
     * @return
     */
    public BigDecimal getTotalPrice(List<BigDecimal> list){
        BigDecimal result = new BigDecimal(0.00);
        for (BigDecimal value : list) {
            result = result.add(value);
        }
        return result;
    }
}

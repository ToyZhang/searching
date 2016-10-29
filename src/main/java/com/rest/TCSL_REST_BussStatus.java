package com.rest;

import com.bo.TCSL_BO_BussStatus;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by zhangtuoyu on 2016-10-28.
 */
@Controller
@RequestMapping("bussStatus")
public class TCSL_REST_BussStatus {
    @Resource
    TCSL_BO_BussStatus boBussStatus;

    @RequestMapping("/queryById")
    @ResponseBody
    public TCSL_VO_Result queryById(HttpServletRequest request, HttpServletResponse response){
        String shopId = request.getParameter("shopId");
        String startDate = request.getParameter("startDate");
        String endDate = request.getParameter("endDate");
        shopId = "8576";
        startDate = "2015-08-19";
        endDate = "2015-08-25";
        TCSL_VO_Result result = boBussStatus.queryById(shopId,startDate,endDate);
        return result;
    }
}

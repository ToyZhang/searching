package com.rest;

import com.bo.TCSL_BO_BITrend;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by zhangtuoyu on 2016-10-31.
 */
@Controller
@RequestMapping("BITrend")
public class TCSL_REST_BITrend {
    @Resource
    TCSL_BO_BITrend boBiTrend;

    @RequestMapping("/queryBussData")
    @ResponseBody
    public TCSL_VO_Result queryBussData(HttpServletRequest request, HttpServletResponse response){
        String shopId = request.getParameter("shopId");
        String date = request.getParameter("date");
        int scope = Integer.parseInt(request.getParameter("scope"));
        String menuId = request.getParameter("menuId");
        TCSL_VO_Result result = boBiTrend.queryBussData(shopId,date,scope,menuId);
        return result;
    }
}

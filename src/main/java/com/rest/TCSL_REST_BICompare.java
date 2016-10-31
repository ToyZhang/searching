package com.rest;

import com.bo.TCSL_BO_BICompare;
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
@RequestMapping("BICompare")
public class TCSL_REST_BICompare {
    @Resource
    TCSL_BO_BICompare boBiCompare;

    @RequestMapping("/queryBussData")
    @ResponseBody
    public TCSL_VO_Result queryBussData(HttpServletRequest request, HttpServletResponse response){
        String shopId = request.getParameter("shopId");
        String date = request.getParameter("date");
        String menuId = request.getParameter("menuId");
        TCSL_VO_Result result = boBiCompare.queryBussData(shopId,date,menuId);
        return result;
    }
}

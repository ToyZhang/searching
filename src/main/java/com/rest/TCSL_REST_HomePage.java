package com.rest;

import com.bo.TCSL_BO_HomePage;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by zhangtuoyu on 2016-10-27.
 */
@Controller
@RequestMapping("homePage")
public class TCSL_REST_HomePage {
    @Resource
    TCSL_BO_HomePage boHomePage;

    @RequestMapping("/queryById")
    @ResponseBody
    public TCSL_VO_Result queryById(HttpServletRequest request, HttpServletResponse response){
        String shopId = request.getParameter("shopId");
        String date = request.getParameter("date");
        TCSL_VO_Result result = boHomePage.queryById(shopId,date);
        return result;
    }
}

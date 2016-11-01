package com.rest;

import com.bo.TCSL_BO_OrderStatus;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by zhangtuoyu on 2016-11-01.
 */
@Controller
@RequestMapping("orderStatus")
public class TCSL_REST_OrderStatus {
    @Resource
    TCSL_BO_OrderStatus boOrderStatus;

    @RequestMapping("/queryById")
    @ResponseBody
    public TCSL_VO_Result queryById(HttpServletRequest request, HttpServletResponse response){
        String shopId = request.getParameter("shopId");
        TCSL_VO_Result result = boOrderStatus.queryById(shopId);
        return result;
    }
}

package com.rest;

import com.dao.mysql.TCSL_DAO_htOrder;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by zhangtuoyu on 2016-10-26.
 */
@Controller
@RequestMapping("/test")
public class HelloWorld {
    @Resource
    TCSL_DAO_htOrder daoHtOrder;

    @RequestMapping("/hello")
    @ResponseBody
    public TCSL_VO_Result helloWorld(HttpServletRequest request, HttpServletResponse response){
        TCSL_VO_Result result = new TCSL_VO_Result();
        return result;
    }

}

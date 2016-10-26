package com.rest;

import com.dao.mysql.TCSL_DAO_htOrder;
import net.sf.json.JSONArray;
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
    public JSONArray helloWorld(HttpServletRequest request, HttpServletResponse response){
        JSONArray result = JSONArray.fromObject(daoHtOrder.queryAll());
        return result;
    }

}

package com.rest;

import com.bo.TCSL_BO_HotelList;
import com.vo.TCSL_VO_Result;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-10-26.
 */
@Controller
@RequestMapping("hotelList")
public class TCSL_REST_HotelList {
    @Resource
    TCSL_BO_HotelList boHotelList;

    @RequestMapping("/queryNameById")
    @ResponseBody
    public TCSL_VO_Result queryNameById(HttpServletRequest request, HttpServletResponse response,
                                        @RequestParam(value = "shopIds[]",required = false,defaultValue = "") String[] ids){
        List<String> shopIds = Arrays.asList(ids);
        TCSL_VO_Result result = boHotelList.queryNameById(shopIds);
        return result;
    }

}

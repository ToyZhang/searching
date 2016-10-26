package com.dao.oracle;

import com.vo.TCSL_VO_Shop;

import java.util.List;

/**
 * Created by zhangtuoyu on 2016-10-26.
 */
public interface TCSL_DAO_ORACLE_Shop {
    List<TCSL_VO_Shop> queryNameById(
        List<String> shopIds
    );
}

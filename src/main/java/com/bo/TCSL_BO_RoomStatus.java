package com.bo;

import com.dao.mysql.TCSL_DAO_RoomStatus;
import com.vo.TCSL_VO_Result;
import com.vo.TCSL_VO_RoomStatus;
import com.vo.TCSL_VO_RoomStatusData;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-11-01.
 */
@Repository
public class TCSL_BO_RoomStatus {
    @Resource
    TCSL_DAO_RoomStatus daoRoomStatus;

    public TCSL_VO_Result queryById(String shopId){
        TCSL_VO_Result result = new TCSL_VO_Result();
        TCSL_VO_RoomStatusData roomData = new TCSL_VO_RoomStatusData();
        //房态列表
        List<TCSL_VO_RoomStatus> roomStatusList = daoRoomStatus.queryById(shopId);
        roomData.setRoomStatusList(roomStatusList);
        //查询各种类型房间总数   脏 净 维修 占用
        List<TCSL_VO_RoomStatus> roomCountList = daoRoomStatus.queryRoomCount(shopId);
        for (TCSL_VO_RoomStatus room : roomCountList) {
            if(room != null){
                switch (room.getROOMSTATE()){
                    case "占用":
                            roomData.setUseRoomCount(room.getCOUNT());
                            continue;
                    case "脏房":
                            roomData.setDirtyRoomCount(room.getCOUNT());
                            continue;
                    case "净房":
                            roomData.setCleanRoomCount(room.getCOUNT());
                            continue;
                    case "维修":
                            roomData.setRepairRoomCount(room.getCOUNT());
                            continue;
                }
            }
        }
        //查询当日的平均房价
        Date date = new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String dateStr = format.format(date);
        BigDecimal avgPrice = daoRoomStatus.queryAvgRoomPrice(shopId,dateStr);
        roomData.setAvgRoomPrice(avgPrice);
        //查询当日的入住率
        BigDecimal checkInPercent = daoRoomStatus.queryCheckInPercent(shopId,dateStr);
        if(checkInPercent != null){
            checkInPercent = checkInPercent.multiply(new BigDecimal(100));
        }
        roomData.setCheckInPercent(checkInPercent);
        result.setRet(0);
        result.setContent(roomData);
        return result;
    }
}

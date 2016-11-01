package com.vo;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by zhangtuoyu on 2016-11-01.
 */
public class TCSL_VO_RoomStatusData {
    private List roomStatusList = new ArrayList<TCSL_VO_RoomStatus>(); //房间状态列表
    private Integer cleanRoomCount; //净房总数
    private Integer dirtyRoomCount; //脏房总数
    private Integer useRoomCount; //占用房间总数
    private Integer repairRoomCount; //修理房间总数
    private BigDecimal avgRoomPrice; //平均房价
    private BigDecimal checkInPercent; //入住率

    public List getRoomStatusList() {
        return roomStatusList;
    }

    public void setRoomStatusList(List roomStatusList) {
        this.roomStatusList = roomStatusList;
    }

    public Integer getCleanRoomCount() {
        return cleanRoomCount;
    }

    public void setCleanRoomCount(Integer cleanRoomCount) {
        this.cleanRoomCount = cleanRoomCount;
    }

    public Integer getDirtyRoomCount() {
        return dirtyRoomCount;
    }

    public void setDirtyRoomCount(Integer dirtyRoomCount) {
        this.dirtyRoomCount = dirtyRoomCount;
    }

    public Integer getUseRoomCount() {
        return useRoomCount;
    }

    public void setUseRoomCount(Integer useRoomCount) {
        this.useRoomCount = useRoomCount;
    }

    public Integer getRepairRoomCount() {
        return repairRoomCount;
    }

    public void setRepairRoomCount(Integer repairRoomCount) {
        this.repairRoomCount = repairRoomCount;
    }

    public BigDecimal getAvgRoomPrice() {
        return avgRoomPrice;
    }

    public void setAvgRoomPrice(BigDecimal avgRoomPrice) {
        this.avgRoomPrice = avgRoomPrice;
    }

    public BigDecimal getCheckInPercent() {
        return checkInPercent;
    }

    public void setCheckInPercent(BigDecimal checkInPercent) {
        this.checkInPercent = checkInPercent;
    }
}

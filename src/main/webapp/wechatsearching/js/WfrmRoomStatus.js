var shopId;
var tr; //房态图列表行
var btnDisplayRepair = true; //显示维修按钮状态    true  false
var index;
$(function(){
	window.parent.hideCanlender();
	window.parent.showBtnRepair();
	$('#menuTitle', window.parent.document).html("实时房态");
	shopId = getCookie("shopId");
    init();
})
function init(){
	if(btnDisplayRepair == true){
		$('#btnRepair', window.parent.document).attr("class","am-btn am-btn-success am-round");
	}else{
		$('#btnRepair', window.parent.document).attr("class","am-btn am-btn-default am-round");
	}
	var requestPath = getRequestPath();
	//TODO 测试数据
	shopId = "1221";
	$.ajax({
        //请求方式
        type:"post",
        //请求路径
        url:requestPath+'roomStatus/queryById',
        //是否异步请求
        async:true,
        //传参
        data:{
            shopId:shopId
        },
        //发送请求前执行方法
//		beforeSend:function(){ },
        //成功返回后调用函数
        success:function(data){
            if(data.ret == 0){
            	var content = data.content;
            	//初始化各房型数量
            	var cleanRoomCount = content.cleanRoomCount; //净房数量
            	var dirtyRoomCount = content.dirtyRoomCount; //脏房数量
            	var useRoomCount = content.useRoomCount; //占用房数量
            	var repairRoomCount = content.repairRoomCount; //维修房数量
            	if(cleanRoomCount != null && cleanRoomCount != "" && cleanRoomCount !== undefined){
            		$("#cleanRoomCount").html("净/"+cleanRoomCount);
            	}
            	if(dirtyRoomCount != null && dirtyRoomCount != "" && dirtyRoomCount !== undefined){
            		$("#dirtyRoomCount").html("脏/"+dirtyRoomCount);
            	}
            	if(useRoomCount != null && useRoomCount != "" && useRoomCount !== undefined){
            		$("#useRoomCount").html("占用/"+useRoomCount);
            	}
            	if(repairRoomCount != null && repairRoomCount != "" && repairRoomCount !== undefined){
            		$("#repairRoomCount").html("维修/"+repairRoomCount);
            	}
            	//初始化仪表盘数据
            	var priceValue = content.avgRoomPrice;
            	var percentValue = content.checkInPercent;
            	if(priceValue != null && percentValue != null){
            		freshGaugeChart(priceValue,percentValue);
            	}
            	//清空房态表
            	$("#table1").children().remove();
            	index = 0;
            	//初始化房态图表
            	var roomList = content.roomStatusList;
            	for(i=0; i<roomList.length; i++){
            		var room = roomList[i];
            		var roomState = room.roomstate;
            		//过滤维修房
            		if(roomState == "维修" && btnDisplayRepair == false){
						continue;
					}
            		createRoomItem(room);
            	}
            }
            //绑定表格内容鼠标悬浮事件
			var divContent = $("#table1");
		    divContent.children().find('td').each(function(i,n){
		 	var obj = $(n);
		  	obj.popover({
		    	content: obj.attr("name"),
		    	trigger :'hover'
	  		});
    });
        },
        //调用出错执行的函数
//		error:function(){ }
  	});
}
/**
 * 创建房态图表
 * @param {Object} room 房间信息
 */
function createRoomItem(room){
	var roomName = room.roomname;
	var roomState = room.roomstate;
	var roomType = room.roomtype;
	if(index == 0 || index%6 == 0){
		tr = document.createElement("tr");
		tr.className = "am-sm-only-text-center";
		tr.style = "height: 35px;vertical-align:middle;margin:5px;padding:10px;";
		$("#table1").append(tr);
	}
	var td = document.createElement("td");
	td.colSpan = '2';
	td.setAttribute("name",roomType);
	td.innerHTML = roomName;
	if(roomState == "占用"){
		td.className = "am-btn-danger am-text-top";
		td.style = "height: 35px;vertical-align:middle;border:2px solid;";
	}
	if(roomState == "脏房"){
		td.className = "am-btn-default am-text-top";
		td.style = "height: 35px;vertical-align:middle;border:2px solid #ffffff;";
	}
	if(roomState == "净房"){
		td.className = "am-btn-success am-text-top";
		td.style = "height: 35px;vertical-align:middle;border:2px solid;";
	}
	if(roomState == "维修"){
		td.className = "am-btn-primary am-text-top";
		td.style = "height: 35px;vertical-align:middle;border:2px solid;";
	}
	tr.appendChild(td);
	index = index + 1;
}
/**
 * 刷新仪表盘数据
 * @param {Object} priceValue
 * @param {Object} percentValue
 */
function freshGaugeChart(priceValue,percentValue){
	require.config({
        paths: {
            echarts: '../api/Echart/dist'
        }
    });
    require(
		[
			'echarts',
			'echarts/chart/pie',
			'echarts/chart/bar',
			'echarts/chart/gauge'
		],
	    function(ec) {
			// 入住率
			var myChartpingjunfangjia = ec.init(document.getElementById('pingjunfangjia'));

			var optionpingjunfangjia = {
				tooltip: {
					formatter: "{a} <br/>{c} {b}"
				},
				toolbox: {
					show: false,
					feature: {
						mark: {
							show: true
						},
						restore: {
							show: true
						},
						saveAsImage: {
							show: true
						}
					}
				},
				series: [{
					name: '入住率',
					type: 'gauge',
					center: ['65%', '55%'],
					radius: '82%',
					z: 3,
					min: 0,
					max: 100,
					splitNumber: 10,
					axisLine: { // 坐标轴线
						lineStyle: { // 属性lineStyle控制线条样式
							width: 10
						}
					},
					axisTick: { // 坐标轴小标记
						length: 15, // 属性length控制线长
						lineStyle: { // 属性lineStyle控制线条样式
							color: 'auto'
						}
					},
					splitLine: { // 分隔线
						length: 20, // 属性length控制线长
						lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
							color: 'auto'
						}
					},
					title: {
						textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							fontWeight: 'bolder',
							fontSize: 15,
							fontStyle: 'italic'
						}
					},
					detail: {
						textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							fontWeight: 'bolder'
						}
					},
					data: [{
						value: percentValue,
						name: '%'
					}]
				}, {
					name: '平均房价',
					type: 'gauge',
					center: ['25%', '55%'], // 默认全局居中
					radius: '60%',
					min: 0,
					max: 200,
					endAngle: 45,
					splitNumber: 7,
					axisLine: {
						// 坐标轴线
						lineStyle: { // 属性lineStyle控制线条样式
							width: 8
						}
					},
					axisTick: {
						show: false, // 坐标轴小标记
						length: 12, // 属性length控制线长
						lineStyle: { // 属性lineStyle控制线条样式
							color: 'auto'
						}
					},
					splitLine: {
						show: false, // 分隔线
						length: 2011, // 属性length控制线长
						lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
							color: 'auto'
						}
					},
					axisLabal: {
						show: false,
					},
					pointer: {
						width: 5
					},
					title: {
						textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							fontWeight: 'bolder',
							fontSize: 10,
							fontStyle: 'italic'
						}
					},
					detail: {
						textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
							fontWeight: 'bolder'
						}
					},
					data: [{
						value: priceValue,
						name: ''
					}]
				}]
			};
			loadingTicket = setTimeout(function() {
				myChartpingjunfangjia.hideLoading();
				// 为echarts对象加载数据
				myChartpingjunfangjia.setOption(optionpingjunfangjia);
			}, 10);
		}
    )
}
/**
 * 刷新页面
 */
function refresh(){
    window.location.reload();
}
/**
 * 刷新显示内容   显示维修房/不显示维修房
 */
function changeDisplayStatus(){
	if(btnDisplayRepair == true){  //显示  -> 不显示
		btnDisplayRepair = false;
		$("#repairRoomCount").hide();
		init();
		$('#btnRepair', window.parent.document).attr("class","am-btn am-btn-default am-round");
	}else{ //不显示 ->显示
		btnDisplayRepair = true;
		$("#repairRoomCount").show();
		init();
		$('#btnRepair', window.parent.document).attr("class","am-btn am-btn-success am-round");
	}
}

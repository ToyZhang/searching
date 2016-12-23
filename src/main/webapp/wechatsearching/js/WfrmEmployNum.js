var shopId;
$(function(){
	window.parent.hideCanlender();
	window.parent.hideBtnRepair();
	$('#menuTitle', window.parent.document).html("房间占用数");
	shopId = getCookie("shopId");
	init();
})
function init(){
	var requestPath = getRequestPath();
//	//TODO 测试数据
//	shopId = "1221";
	$.ajax({
        //请求方式
        type:"post",
        //请求路径
        url:requestPath+RESOURCE_PROJECT_NAME+'employNum/queryById',
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
            	var roomTypeArr = [];
            	var numArr = [];
            	for(var i=0;i<content.length;i++){
            		var count = content[i].count;
            		var roomType = content[i].roomtype;
            		roomTypeArr.push(roomType);
            		numArr.push(count);
            	}
            	freshChart(roomTypeArr,numArr);
            }
        },
        //调用出错执行的函数
//		error:function(){ }
  });
	
}
/**
 * 刷新房间使用数图表
 * @param {Object} roomTypeArr 房型数组
 * @param {Object} numArr 房型占用量数组
 */
function freshChart(roomTypeArr,numArr){
	// 路径配置
	require.config({
		paths: {
			echarts: '../api/Echart/dist'
		}
	});
	require(
		[
			'echarts',
			'echarts/chart/pie',
			'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
		],
		function(ec) {
				//日经营指标
				var myChartDay = ec.init(document.getElementById('day'));
				myChartDay.showLoading({
					text: '加载中...',
					effect: 'ring',
					textStyle: {
						fontSize: 15
					}
				});
				var optionDay = {
					title: {
						x: 'center',
						text: ""
					},
					tooltip: {
						trigger: 'item'
					},
					calculable: false,
					grid: {
						x: 31,
						borderWidth: 0,
						x2: 1,
						y: 80,
						y2: 20
					},
					xAxis: [{
						type: 'category',
						show: true,
						data: roomTypeArr,
						position: 'bottom',
						splitLine: {
							show: false
						},
						axisTick: {
							show: false,
						},
						axisLine: {
							show: false,
						},
					}],
					yAxis: [{
						type: 'value',
						show: false,
						splitLine: {
							show: false
						},
						lineStyle: {
							color: ['#ccc'],
							width: 12,
							type: 'solid'
						}
					}],
					series: [{
						name: '占用数',
						type: 'bar',
						itemStyle: {
							normal: {
								color: function(params) {
									// build a color map as your need.
									var colorList = [
										'#C6E579', '#F4E001', '#F0805A','#C6E579', '#F4E001', '#F0805A','#C6E579', '#F4E001', 										'#F0805A','#C6E579', '#F4E001', '#F0805A'
									];
									return colorList[params.dataIndex]
								},
								barBorderRadius: [5, 5, 5, 5],
								label: {
									show: true,
									position: 'top',
									formatter: '{c}'
								}
							}
						},
						data: numArr
					}]
				};
				loadingTicket = setTimeout(function() {
					myChartDay.hideLoading();
					// 为echarts对象加载数据
					myChartDay.setOption(optionDay);
				
				}, 10);
		}
	);
}
/**
 * 刷新页面
 */
function refresh(){
    window.location.reload();
}

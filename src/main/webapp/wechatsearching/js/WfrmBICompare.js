var shopId;
var menuId;
$(function(){
	window.parent.hideCanlender();
	window.parent.hideBtnRepair();
	$('#menuTitle', window.parent.document).html("经营指标对比");
	shopId = getCookie("shopId");
	//按钮绑定点击事件
	$("button").on('click',function(e){
		var menu = e.target;
		var id = menu.id;
		switch(id){
			case "myBtnYYE":
				$("#myBtnYYE").removeClass().attr("class", 'am-btn am-btn-primary am-active am-round');
				$("#myBtnPJFJ").removeClass().attr("class", 'am-btn am-btn-default am-round');
                $("#myBtnSFS").removeClass().attr("class", 'am-btn am-btn-default am-round');
				menuId = "myBtnYYE";
				init();
				return ;
			case "myBtnPJFJ":
				$("#myBtnYYE").removeClass().attr("class", 'am-btn am-btn-default am-round');
                $("#myBtnPJFJ").removeClass().attr("class", 'am-btn am-btn-primary am-active am-round');
                $("#myBtnSFS").removeClass().attr("class", 'am-btn am-btn-default am-round');
				menuId = "myBtnPJFJ";
				init();
				return;
			case "myBtnSFS":
				$("#myBtnYYE").removeClass().attr("class", 'am-btn am-btn-default am-round');
                $("#myBtnPJFJ").removeClass().attr("class", 'am-btn am-btn-default am-round');
                $("#myBtnSFS").removeClass().attr("class", 'am-btn am-btn-primary am-active am-round');
				menuId = "myBtnSFS";
				init();
				return;
		}
		console.info("点击菜单",id);
	});
	//初始化显示营业额数据
	menuId = "myBtnYYE";
	init();
})
function init(){
	var date = (new Date().toLocaleString().split(" "))[0];
	//TODO 测试数据
	shopId = "8576";
	date = "2015-08-25";
	var requestPath = getRequestPath();
	$.ajax({
        //请求方式
        type:"post",
        //请求路径
        url:requestPath+'BICompare/queryBussData',
        //是否异步请求
        async:true,
        //传参
        data:{
            shopId:shopId,
            date:date,
            menuId:menuId
        },
        //发送请求前执行方法
//		beforeSend:function(){ },
        //成功返回后调用函数
        success:function(data){
            if(data.ret == 0){
            	var content = data.content;
            	if(content.length == 0){
            		return ;
            	}
            	var dayArr = [];
            	var dayValueArr = [];
            	var weekArr = [];
            	var weekValueArr = [];
            	var monthArr = [];
            	var monthValueArr = [];
            	var quarterArr = [];
            	var quarterValueArr = [];
            	var yearArr = [];
            	var yearValueArr = [];
            	for(var i=0; i<content.length; i++){
            		var name = content[i].name;
            		var value = content[i].price;
            		if(name == "前一日"){
            			dayArr.push(name);
            			if(value == null || value == "" || value === undefined){
            				dayValueArr.push(0);
            			}else{
            				dayValueArr.push(value);
            			}
            		}
            		if(name == "当日"){
            			dayArr.push(name);
            			if(value == null || value == "" || value === undefined){
            				dayValueArr.push(0);
            			}else{
            				dayValueArr.push(value);
            			}
            		}
            		if(name == "前一周"){
            			weekArr.push(name);
            			if(value == null || value == "" || value === undefined){
            				weekValueArr.push(0);
            			}else{
            				weekValueArr.push(value);
            			}
            		}
            		if(name == "本周"){
            			weekArr.push(name);
            			if(value == null || value == "" || value === undefined){
            				weekValueArr.push(0);
            			}else{
            				weekValueArr.push(value);
            			}
            		}
            		if(name == "前一月"){
            			monthArr.push(name);
            			if(value == null || value == "" || value === undefined){
            				monthValueArr.push(0);
            			}else{
            				monthValueArr.push(value);
            			}
            		}
            		if(name == "本月"){
            			monthArr.push(name);
            			if(value == null || value == "" || value === undefined){
            				monthValueArr.push(0);
            			}else{
            				monthValueArr.push(value);
            			}
            		}
            		if(name == "前一季"){
            			quarterArr.push(name);
            			if(value == null || value == "" || value === undefined){
            				quarterValueArr.push(0);
            			}else{
            				quarterValueArr.push(value);
            			}
            		}
            		if(name == "本季"){
            			quarterArr.push(name);
            			if(value == null || value == "" || value === undefined){
            				quarterValueArr.push(0);
            			}else{
            				quarterValueArr.push(value);
            			}
            		}
            		if(name == "前一年"){
            			yearArr.push(name);
            			if(value == null || value == "" || value === undefined){
            				yearValueArr.push(0);
            			}else{
            				yearValueArr.push(value);
            			}
            		}
            		if(name == "本年"){
            			yearArr.push(name);
            			if(value == null || value == "" || value === undefined){
            				yearValueArr.push(0);
            			}else{
            				yearValueArr.push(value);
            			}
            		}
            	}
            	freshChart(dayArr,dayValueArr,'day','     日经营指标对比');
            	freshChart(weekArr,weekValueArr,'week','     周经营指标对比');
            	freshChart(monthArr,monthValueArr,'month','     月经营指标对比');
            	freshChart(quarterArr,quarterValueArr,'quarter','     季经营指标对比');
            	freshChart(yearArr,yearValueArr,'year','     年经营指标对比');
            }
        },
        //调用出错执行的函数
//		error:function(){ }
  });
}
function freshChart(dayArr,dayValueArr,type,title){
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
				var myChartDay = ec.init(document.getElementById(type));
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
						text: title
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
						data: dayArr,
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
						name: '营业额',
						type: 'bar',
						itemStyle: {
							normal: {
								color: function(params) {
									// build a color map as your need.
									var colorList = [
										'#C6E579', '#F4E001', '#F0805A'
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
						data: dayValueArr
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

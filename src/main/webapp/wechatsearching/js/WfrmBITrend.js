var shopId; //商户Id
var scope; //查询天数范围
var menuId; //点击菜单Id
$(function(){
	window.parent.hideCanlender();
	window.parent.hideBtnRepair();
	$('#menuTitle', window.parent.document).html("经营指标走势");
	shopId = getCookie("shopId");
	//绑定按钮点击事件
	$('button').on('click',function(e){
		var button = e.target;
		var id = button.id;
		switch(id){
			case "myBtnYYE":
				$("#myBtnYYE").removeClass().attr("class", 'am-btn am-btn-primary am-active am-round');
				$("#myBtnPJFJ").removeClass().attr("class", 'am-btn am-btn-default am-round');
                $("#myBtnSFS").removeClass().attr("class", 'am-btn am-btn-default am-round');
				menuId = "myBtnYYE";
				init();
				return;
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
			case "myBtn7Day":
				$("#myBtn7Day").removeClass().attr("class", 'am-btn am-btn-primary am-active am-round');
				$("#myBtn15Day").removeClass().attr("class", 'am-btn am-btn-default am-round');
                $("#myBtn30Day").removeClass().attr("class", 'am-btn am-btn-default am-round');
				scope = 7;
				init();
				return;
			case "myBtn15Day":
				$("#myBtn7Day").removeClass().attr("class", 'am-btn am-btn-default am-round');
				$("#myBtn15Day").removeClass().attr("class", 'am-btn am-btn-primary am-active am-round');
                $("#myBtn30Day").removeClass().attr("class", 'am-btn am-btn-default am-round');
				scope = 15;
				init();
				return;
			case "myBtn30Day":
				$("#myBtn7Day").removeClass().attr("class", 'am-btn am-btn-default am-round');
				$("#myBtn15Day").removeClass().attr("class", 'am-btn am-btn-default am-round');
                $("#myBtn30Day").removeClass().attr("class", 'am-btn am-btn-primary am-active am-round');
				scope = 30;
				init();
				return;
		}
	});
	//初始查询一周的营业额	
	menuId = "myBtnYYE";
	scope = 7;
	init();
    
})
function init(){
	var date = (new Date().toLocaleString().split(" "))[0];
//	//TODO 测试数据
// 	shopId = "8576"; //本地库测试使用
//	date = "2015-08-25";
	var requestPath = getRequestPath();
	$.ajax({
        //请求方式
        type:"post",
        //请求路径
        url:requestPath+RESOURCE_PROJECT_NAME+'BITrend/queryBussData',
        //是否异步请求
        async:true,
        //传参
        data:{
            shopId:shopId,
            date:date,
            scope:scope,
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
				var valueArr = [];
				var dateArr = [];
				for(var i=0; i<content.length; i++){
					valueArr.push(content[i].price);
					dateArr.push(content[i].date);
				}
    			refreshChart(valueArr,dateArr);
            }
        },
        //调用出错执行的函数
//		error:function(){ }
  });
}
/**
 * 刷新图形
 * @param {Object} valueArr
 * @param {Object} dateArr
 */
function refreshChart(valueArr,dateArr){
	var unitFront; //单位前
	var unitBack; //单位后
	var des; //描述
	switch (menuId){
		case "myBtnYYE":
            unitFront = "¥";
            unitBack = "";
            des = "收入";
			break;
		case "myBtnPJFJ":
            unitFront = "¥";
            unitBack = "";
            des = "收入";
			break;
		case "myBtnSFS":
            unitFront = "";
            unitBack = "间";
            des = "售出";
            break;
	}
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
				// 营业收入趋势图
				var myChart = ec.init(document.getElementById('shouru'));
				myChart.showLoading({
					text: '加载中...',
					effect: 'ring',
					textStyle: {
						fontSize: 15
					}
				});                     
             	var placeHoledStyle = {
			        normal: {
			            barBorderColor: 'rgba(0,0,0,0)',
			            color: 'rgba(0,0,0,0)'
			        },
			        emphasis: {
			            barBorderColor: 'rgba(0,0,0,0)',
			            color: 'rgba(0,0,0,0)'
			        }
			    };
			    var dataStyle = {
			        normal: {
			            color: function (params) {
			                // build a color map as your need.
			                var colorList = [
								'#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
								'#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
								'#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0', '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
								'#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
								'#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'
							];
			                return colorList[params.dataIndex]
			            },
			            barBorderRadius: [5, 5, 5, 5],
			            label: {
			                color: '#87cefa',
			                show: true,
			                position: 'right',
			                formatter: unitFront+'{c}'+unitBack
			            }
			        }
			    };
			    var option = {
					        grid: {
					            x: 41,
					            borderWidth: 0,
					            x2: 21,
					            y: 1,
					            width: 260
					        },
					        title: {
					            x: 'center'
					        },
					        tooltip: {
					            trigger: 'axis',
					            axisPointer: { // 坐标轴指示器，坐标轴触发有效
					                type: 'line' // 默认为直线，可选为：'line' | 'shadow'
					            },
					            formatter: '{b}<br/>{a0}:'+unitFront+'{c0}'+unitBack+'<br/>'
					        },
					        xAxis: [{
					            show: false,
					            type: 'value',
					            position: 'top',
					            splitLine: {
					                show: false
					            },
					            axisLabel: {
					                show: false
					            }
					        }],
					        yAxis: [{
					            type: 'category',
					            splitLine: {
					                show: false
					            },
					            data: dateArr
					        }],
					        series: [{
					            name: des,
					            type: 'bar',
					            stack: '总量',
					            itemStyle: dataStyle,
					            data: valueArr
					        }, {
					            name: 'ZTW',
					            type: 'bar',
					            stack: '总量',
					            itemStyle: placeHoledStyle,
					            data: [29, 50, 69, 61]
					        }]
					    };
					    loadingTicket = setTimeout(function () {
					        myChart.hideLoading();
					        // 为echarts对象加载数据
					        myChart.setOption(option);
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

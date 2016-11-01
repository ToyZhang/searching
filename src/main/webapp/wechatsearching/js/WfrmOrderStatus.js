var shopId;
$(function(){
	window.parent.hideCanlender();
	$('#menuTitle', window.parent.document).html("预订情况");
	shopId = getCookie("shopId");
	init();
})
function init(){
	var requestPath = getRequestPath();
	//TODO 测试数据
	shopId = "1221";
	$.ajax({
        //请求方式
        type:"post",
        //请求路径
        url:requestPath+'orderStatus/queryById',
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
            	var valueArr = [];
				var dateArr = [];
            	for(var i=0;i<content.length;i++){
            		var count = content[i].count;
            		var date = content[i].date;
            		valueArr.push(count);
            		if(i == 0){
            			dateArr.push("占位");
            		}
            		dateArr.push(date);
            		if(i == content.length-1){
            			dateArr.push("占位");
            		}
            	}
            	freshChart(valueArr,dateArr);
            }
        },
        //调用出错执行的函数
//		error:function(){ }
  });
	
}
function freshChart(value,date){
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
			'echarts/chart/bar',
			'echarts/chart/line'
		],
		function(ec) {
				//日经营指标
				var myChart = ec.init(document.getElementById('shouru'));
				myChart.showLoading({
					text: '加载中...',
					effect: 'ring',
					textStyle: {
						fontSize: 15
					}
				});
				var data = value;
			    var gap = 0;
			    var total = 0;
			    var maxIndex;
			    var dataArray = (function () {
			    	debugger;
			        var max = Math.max.apply(Math, data);
			        var min = Math.min.apply(Math, data);
			        gap = Math.round((max - min));
			        var nd = [{
			            value: data[0] + gap,
			            symbol: 'none'
			        }];
			        for (var i = 0, l = data.length; i < l; i++) {
			            if (data[i] == max) {
			                maxIndex = i;
			            }
			            total += data[i];
			            nd.push(data[i] + gap);
			        }
			        nd.push({
			            value: data[data.length - 1] + gap,
			            symbol: 'none'
			        });
			        return nd;
			    })();
			    option = {
			        backgroundColor: '#fff',
			        title: {
			            text: '  近一周预订数据',
			            subtext: '  点击图中圆点显示每日预订数量',
			            x: 'center'
			        },
			        tooltip: {
			            trigger: 'item',
			            formatter: function (params) {
			                if (params.seriesName == '占比') {
			                    return '总量 : ' + total + '<br/>' + params.name + ' : ' + params.value + '<br/>' + '占比 : ' + 										params.percent + '%';
			                } else if (params.name != '占位') {
			                    update(params);
			                    return params.seriesName + '<br/>' + params.name;
			                }
			            },
			            axisPointer: {
			                type: 'none'
			            }
			        },
			        grid: {
			            backgroundColor: '#ccc',
			            borderWidth: 0
			        },
			        xAxis: [{
			            type: 'category',
			            boundaryGap: false,
			            show: false,
			            data: date
			        }],
			        yAxis: [{
			            type: 'value',
			            boundaryGap: [0, 0.5],
			            show: false
			        }],
			        animation: true,
			        series: [{
				            name: '预订量',
				            type: 'line',
				            symbol: 'emptyCircle',
				            symbolSize: 6,
				            showAllSymbol: false,
				            smooth: false,
				            itemStyle: {
				                normal: {
				                    areaStyle: {
				                        type: 'default'
				                    }
				                }
				            },
				            data: dataArray
			        	}, 
			        	{
				            name: '遮罩',
				            type: 'pie',
				            clickable: false,
				            tooltip: {
				                show: false
				            },
				            radius: [100, 180],
				            itemStyle: {
				                normal: {
				                    color: '#fff',
				                    label: {
				                        show: false
				                    },
				                    labelLine: {
				                        show: false
				                    }
				                },
				                emphasis: {
				                    color: 'rgba(0,0,0,0)'
				                }
				            },
				            data: [{
				                value: 100,
				                name: '直接访问'
				            }]
			        	}, 
			        	{
				            name: '占比',
				            type: 'pie',
				            clickable: false,
				            clockWise: true,
				            radius: [110, 125],
				            data: [{
				                itemStyle: {
				                    normal: {
				                        label: {
				                            position: 'inside',
				                            formatter: '\n{b} : {c}\n\n( {d}% )',
				                            textStyle: {
				                                fontSize: 15,
				                                baseline: 'top',
				                                color: '#1e90ff'
				                            }
				                        },
				                        labelLine: {
				                            show: false
				                        }
				                    }
				                }
			            	}, 
			            	{
				                name: '其他',
				                tooltip: {
				                    show: false
				                },
				                itemStyle: {
				                    normal: {
				                        color: '#fff',
				                        label: {
				                            show: false
				                        },
				                        labelLine: {
				                            show: false
				                        }
				                    }
				                }
			            	}]
			        	}]
			    };

			    function changePieSeries(params) {
			        var curData = params.value - gap;
			        option.series[2].startAngle = -90 + (curData / total * 360) / 2;
			        option.series[2].data[0].name = params.name;
			        option.series[2].data[0].value = curData;
			        option.series[2].data[1].value = total - curData;
			        for (var i = 1, l = option.series[0].data.length - 1; i < l; i++) {
			            if (option.series[0].data[i].symbol) {
			                option.series[0].data[i].symbol = 'emptyCircle';
			                option.series[0].data[i].symbolSize = 6;
			            }
			        }
			        option.series[0].data[params.dataIndex] = {
			            name: params.name,
			            value: params.value,
			            symbol: 'emptyDiamond',
			            symbolSize: 10
			        }
			    }

			    function update(params) {
			        changePieSeries(params);
			        option.animation = true;
			        myChart.setOption(option);
			    }
			    changePieSeries({
			        name: option.xAxis[0].data[maxIndex + 1],
			        value: option.series[0].data[maxIndex + 1],
			        dataIndex: maxIndex + 1
			    });
				
				loadingTicket = setTimeout(function() {
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

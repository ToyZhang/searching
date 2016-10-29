$(function(){
	window.parent.showCanlender();
    $('#menuTitle', window.parent.document).html("首页");
    //初始化营业时间
    var startDate = new Date().toLocaleDateString();
    $('#dataDate').text(startDate);
    //初始化门店名称
    var shopName = getCookie("shopName");
    $("#myShopName",window.parent.document).html(shopName);
    init(startDate);
})

function init(date){
	var shopId = getCookie("shopId");
	//TODO 假数据写死
	shopId = "8576";
	date = "2015-08-25";
	var requestPath = getRequestPath();
	$.ajax({
        //请求方式
        type:"post",
        //请求路径
        url:requestPath+'homePage/queryById',
        //是否异步请求
        async:true,
        //传参
        data:{
            shopId:shopId,
            date:date
        },
        //发送请求前执行方法
//		beforeSend:function(){ },
        //成功返回后调用函数
        success:function(data){
            if(data.ret == 0){
            	var content = data.content;
            	var price = content.price;
            	var avgPrice = content.avgprice;
            	var checkInPercent = content.mmoney;
            	$("#myAllYYE").html(price);
            	var dateList = content.dateList;
            	var priceList = content.priceList;
            	createAvgPriceItem(avgPrice);
            	createCheckInPercent(checkInPercent);
            	createPriceTrend(dateList,priceList);
            	
            }
        },
        //调用出错执行的函数
//		error:function(){ }
  	});
}
/**
 * 日期菜单改变事件
 * @param date
 */
function onchange_date(date) {
    $('#my-start',window.parent.document).text(date);
    $('#dataDate').text(date);
    init(date);
}
/**
 * 创建平均房价图形
 * @param {Object} avgPrice 平均房价
 */
function createAvgPriceItem(avgPrice){
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
				var myChartpingjunfangjia = ec.init(document.getElementById('avgRoomPrice'));
				myChartpingjunfangjia.showLoading({
					text: '加载中...',
					effect: 'ring',
					textStyle: {
						fontSize: 15
					}
				});                     
             	var dataStyle = {
					normal: {
						color: '#87cefa',
						label: {
							show: false
						},
						labelLine: {
							show: false
						}
					}
				};
				var placeHolderStyle = {
					normal: {
						color: '#EBEBEB',
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
				};		
				var optionpingjunfangjia = {

                	tooltip: {
			           
			        },

					title: {
						text: '￥'+ avgPrice,
						subtext: '  平均房价',
						x: 90,
						y: '40',
						itemGap: 2,
						textStyle: {
							color: 'rgba(30,144,255,0.8)',
							fontFamily: '微软雅黑',
							fontSize: 23,
							fontWeight: 'bolder'
						},
						subtextStyle: {
							color: 'rgba(30,144,255,0.8)',
							fontFamily: '微软雅黑',
						},
					},
					calculable: false,
					grid: {
						borderWidth: 0,
						x: 31,
						x2: 1,
						height: 80,
						y: 1
					},
					xAxis: [{
						type: 'category',
						show: false,
						data: ['平均房价', 'Bar', 'Scatter', 'K', 'Pie']
					}],
					yAxis: [{
						type: 'value',
						show: false
					}],
					series: [{
						type: 'bar',
						itemStyle: dataStyle,
						data: [avgPrice]
					}]
				};
				loadingTicket = setTimeout(function() {
					if(myChartpingjunfangjia != null){
						myChartpingjunfangjia.hideLoading();
						myChartpingjunfangjia.setOption(optionpingjunfangjia);
					}
				}, 10);
			}
		);
}
function createCheckInPercent(checkInPercent){
	checkInPercent = checkInPercent - 0;
	if(checkInPercent >= 100){
		checkInPercent = 100
	}
	// 路径配置
    require.config({
        paths: {
            echarts: '../api/Echart/dist'
        }
    });
    // 使用
	require(
		[
			'echarts',
			'echarts/chart/pie',
			'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
		],
		function(ec) {	
				var myChartruzhulv = ec.init(document.getElementById('checkInPercent'));						
			myChartruzhulv.showLoading({
				text: '加载中...',
				effect: 'ring',
				textStyle: {
					fontSize: 15
				}
			});
           	var dataStyle = {
				normal: {
					color: '#87cefa',
					label: {
						show: false
					},
					labelLine: {
						show: false
					}
				}
			};
			var placeHolderStyle = {
				normal: {
					color: '#EBEBEB',
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
			};					

		var optionruzhulv = {
         tooltip: {					           
		        },
                calculable: false,
				title: {
					text: checkInPercent+'%',
					subtext: '入住率',
					x: 90,
					y: 40,
					itemGap: 2,
					textStyle: {
						color: 'rgba(30,144,255,0.8)',
						fontFamily: '微软雅黑',
						fontSize: 23,
						fontWeight: 'bolder'
					},
					subtextStyle: {
						color: 'rgba(30,144,255,0.8)',
						fontFamily: '微软雅黑',
					}
				},
				series: [{
					center: ['30%', '50%'],
					
					type: 'pie',
					clockWise: false,
					radius: [20, 32],
					itemStyle: dataStyle,
					data: [{
						value: parseInt(checkInPercent),
						name: '入住率'
					}, {
						value: 100-parseInt(checkInPercent),
						
						itemStyle: placeHolderStyle
					}]
				}]
			};
		
			loadingTicket = setTimeout(function() {
				myChartruzhulv.hideLoading();	
				myChartruzhulv.setOption(optionruzhulv);							
			}, 10);
		}
	);
}
/**
 * 创建营业走势图形
 * @param {Object} dateList
 * @param {Object} priceList
 */
function createPriceTrend(dateList,priceList){
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
		function (ec){
			// 营业收入趋势图
		    var myChart = ec.init(document.getElementById('shouru'));
		    myChart.showLoading({
		        text: '加载中...',
		        effect: 'ring',
		        textStyle: {
		            fontSize: 15
		        }
		    });
		    var option = {
		    	 grid: {
		            x: 43,
		            x2: 1,
		            height: 250,
		            y: 40
		        },
		        title: {
		            text: '营业收入趋势',
		            textStyle: {
		                color: 'rgba(30,144,255,0.8)',
		                fontFamily: '微软雅黑',
		                fontSize: 20,
		                fontWeight: 'bolder'
		            }
		        },
		        tooltip: {
					           
		        },
		        calculable: false,
		        xAxis: [{

                    show: true,
		            type: 'category',
		            data: dateList,
                     splitLine: {
		                show: false
		            },
		            axisLabel: {
		                show: true
		            }
		        }],
		        yAxis: [{
                    show: true,
		            type: 'value',
                    splitLine: {
		                show: false
		            },
		        }],
		        series: [{
		            name: '营业收入',
		            type: 'bar',
		            itemStyle: {
		                normal: {
		                    color: '#87cefa',
		                    barBorderRadius: [5, 5, 5, 5]
		                },
		                emphasis: {
		                    color: '#87cefa',
		                    barBorderRadius: [5, 5, 5, 5]
		                }
		            },
		            data: priceList
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



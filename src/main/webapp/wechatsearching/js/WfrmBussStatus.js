$(function(){
	$('#menuTitle', window.parent.document).html("营业情况汇总");
	window.parent.hideCanlender();
	var startDate = new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toLocaleDateString();
    var endDate = new Date().toLocaleDateString();
    var $alert = $('#my-alert');
    $('#my-start').datepicker().on('changeDate.datepicker.amui', function(event) {
        $alert.hide();
        startDate = new Date(event.date);
        $('#my-start').text($('#my-start').data('date'));
        $(this).datepicker('close');
  	});
  	
    $('#my-end').datepicker().on('changeDate.datepicker.amui', function(event) {
        if (event.date.valueOf() < startDate.valueOf()) {
          $alert.find('p').text('结束日期应大于开始日期！').end().show();
        } else {
            $alert.hide();
            endDate = new Date(event.date);
            $('#my-end').text($('#my-end').data('date'));
            init(startDate,endDate);
        }
        $(this).datepicker('close');
  	});
	//初始查询当天->前一天数据
	init(startDate,endDate);
    
})
function init(startDate,endDate){
	startDate = dateFormat(startDate);
	endDate = dateFormat(endDate);
	var shopId = getCookie("shopId");
	//TODO 假数据写死
	shopId = "8576";
	startDate = "2015-08-19";
	endDate = "2015-08-25";
	var requestPath = getRequestPath();
	$.ajax({
        //请求方式
        type:"post",
        //请求路径
        url:requestPath+'bussStatus/queryById',
        //是否异步请求
        async:true,
        //传参
        data:{
            shopId:shopId,
            startDate:startDate,
            endDate:endDate
        },
        //发送请求前执行方法
//		beforeSend:function(){ },
        //成功返回后调用函数
        success:function(data){
            if(data.ret == 0){
            	$("#myTable").children().remove();
            	var content = data.content;
            	var busStatusList = content.busStatusList;
            	var a = busStatusList.length;
            	if(busStatusList != null && busStatusList.length > 0){
            		createBusStatusItem(busStatusList);
            	}
            	var closeDetailList = content.closeDetailList;
            	if(closeDetailList != null && closeDetailList.length > 0){
            		createCloseDetailItem(closeDetailList);
            	}
            	var itemSaleList = content.itemSaleList;
            	if(itemSaleList != null && itemSaleList.length > 0){
            		createSaleItem(itemSaleList);
            	}
            	var collectDetailList = content.collectDetailList;
            	if(collectDetailList != null && collectDetailList.length > 0){
            		createCollectDetailItem(collectDetailList);
            	}
            	var busTargetList = content.busTargetList;
            	if(busTargetList != null && busTargetList.length > 0){
            		createBussTargetItem(busTargetList);
            	}
            }
        },
        //调用出错执行的函数
//		error:function(){ }
	});
}
/**
 * 创建营业情况内容
 * @param {Object} busStatusList
 * <tr><td>{0}</td><td>￥{1}</td></tr><tr>
 */
function createBusStatusItem(busStatusList){
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.innerHTML = "<th colspan='3' class='am-text-left'>营业情况(收付实现)</th>";
	tr.appendChild(th);
	$("#myTable").append(tr);
	var totalPrice = 0;
	for(var i=0; i<busStatusList.length; i++){
		var name = busStatusList[i].name;
		var price = busStatusList[i].price - 0;
		totalPrice = totalPrice + price;
		var itemTr = document.createElement("tr");
		itemTr.style = "text-align:center";
		var nameTd = document.createElement("td");
		nameTd.innerHTML = name;
		var priceTd = document.createElement("td");
		priceTd.innerHTML = "￥"+price;
		itemTr.appendChild(nameTd);
		itemTr.appendChild(priceTd);
		$("#myTable").append(itemTr);
		if(i == (busStatusList.length-1)){
			var totalTr = document.createElement("tr");
			totalTr.style = "text-align:center";
			var totalNameTd = document.createElement("td");
			totalNameTd.innerHTML = "总额";
			var totalPriceTd = document.createElement("td");
			totalPriceTd.innerHTML = "￥"+totalPrice;
			totalTr.appendChild(totalNameTd);
			totalTr.appendChild(totalPriceTd);
			$("#myTable").append(totalTr);
		}
	}
	
}
/**
 * 创建结算明细内容
 * @param {Object} closeDetailList
 */
function createCloseDetailItem(closeDetailList){
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.innerHTML = "<th colspan='3' class='am-text-left'>结算明细(收付实现)</th>";
	tr.appendChild(th);
	$("#myTable").append(tr);
	var totalPrice = 0;
	for(var i=0; i<closeDetailList.length; i++){
		var name = closeDetailList[i].name;
		var price = closeDetailList[i].price - 0;
		totalPrice = totalPrice + price;
		var itemTr = document.createElement("tr");
		itemTr.style = "text-align:center";
		var nameTd = document.createElement("td");
		nameTd.innerHTML = name;
		var priceTd = document.createElement("td");
		priceTd.innerHTML = "￥"+price;
		itemTr.appendChild(nameTd);
		itemTr.appendChild(priceTd);
		$("#myTable").append(itemTr);
		if(i == (closeDetailList.length-1)){
			var totalTr = document.createElement("tr");
			totalTr.style = "text-align:center";
			var totalNameTd = document.createElement("td");
			totalNameTd.innerHTML = "总额";
			var totalPriceTd = document.createElement("td");
			totalPriceTd.innerHTML = "￥"+totalPrice;
			totalTr.appendChild(totalNameTd);
			totalTr.appendChild(totalPriceTd);
			$("#myTable").append(totalTr);
		}
	}
}
/**
 * 创建品项销售内容
 * @param {Object} itemSaleList
 */
function createSaleItem(itemSaleList){
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.innerHTML = "<th colspan='3' class='am-text-left'>结算明细(收付实现)</th>";
	tr.appendChild(th);
	$("#myTable").append(tr);
	var totalPrice = 0;
	for(var i=0; i<itemSaleList.length; i++){
		var name = itemSaleList[i].name;
		var price = itemSaleList[i].price - 0;
		totalPrice = totalPrice + price;
		var itemTr = document.createElement("tr");
		itemTr.style = "text-align:center";
		var nameTd = document.createElement("td");
		nameTd.innerHTML = name;
		var priceTd = document.createElement("td");
		priceTd.innerHTML = "￥"+price;
		itemTr.appendChild(nameTd);
		itemTr.appendChild(priceTd);
		$("#myTable").append(itemTr);
		if(i == (itemSaleList.length-1)){
			var totalTr = document.createElement("tr");
			totalTr.style = "text-align:center";
			var totalNameTd = document.createElement("td");
			totalNameTd.innerHTML = "总额";
			var totalPriceTd = document.createElement("td");
			totalPriceTd.innerHTML = "￥"+totalPrice;
			totalTr.appendChild(totalNameTd);
			totalTr.appendChild(totalPriceTd);
			$("#myTable").append(totalTr);
		}
	}
}
/**
 * 创建收款明细内容
 * @param {Object} collectDetailList
 */
function createCollectDetailItem(collectDetailList){
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.innerHTML = "<th colspan='3' class='am-text-left'>收款明细(权责发生)</th>";
	tr.appendChild(th);
	$("#myTable").append(tr);
	var totalPrice = 0;
	for(var i=0; i<collectDetailList.length; i++){
		var name = collectDetailList[i].name;
		var price = collectDetailList[i].price - 0;
		totalPrice = totalPrice + price;
		var itemTr = document.createElement("tr");
		itemTr.style = "text-align:center";
		var nameTd = document.createElement("td");
		nameTd.innerHTML = name;
		var priceTd = document.createElement("td");
		priceTd.innerHTML = "￥"+price;
		itemTr.appendChild(nameTd);
		itemTr.appendChild(priceTd);
		$("#myTable").append(itemTr);
		if(i == (collectDetailList.length-1)){
			var totalTr = document.createElement("tr");
			totalTr.style = "text-align:center";
			var totalNameTd = document.createElement("td");
			totalNameTd.innerHTML = "总额";
			var totalPriceTd = document.createElement("td");
			totalPriceTd.innerHTML = "￥"+totalPrice;
			totalTr.appendChild(totalNameTd);
			totalTr.appendChild(totalPriceTd);
			$("#myTable").append(totalTr);
		}
	}
}
/**
 * 创建营业指标内容
 * @param {Object} busTargetList
 */
function createBussTargetItem(busTargetList){
	var tr = document.createElement("tr");
	var th = document.createElement("th");
	th.innerHTML = "<th colspan='3' class='am-text-left'>营业指标(权责发生)</th>";
	tr.appendChild(th);
	$("#myTable").append(tr);
	for(var i=0; i<busTargetList.length; i++){
		var name = busTargetList[i].name;
		var data;
		if(name == "售房数"){
			data = busTargetList[i].num;
		}
		if(name == "平均房价"){
			data = "￥"+busTargetList[i].price;
		}
		if(name == "入住率"){
			data = busTargetList[i].mmoney;
		}
		var itemTr = document.createElement("tr");
		itemTr.style = "text-align:center";
		var nameTd = document.createElement("td");
		nameTd.innerHTML = name;
		var dataTd = document.createElement("td");
		dataTd.innerHTML = data;
		itemTr.appendChild(nameTd);
		itemTr.appendChild(dataTd);
		$("#myTable").append(itemTr);
	}
}
function refresh(){
	window.location.reload();
}
function showCalendar(){
	$("#myCalendarDiv").toggle();
}

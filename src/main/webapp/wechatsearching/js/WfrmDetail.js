var shopId;
$(function(){
	window.parent.hideCanlender();
	window.parent.hideBtnRepair();
	$('#menuTitle', window.parent.document).html("在住明细");
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
        url:requestPath+RESOURCE_PROJECT_NAME+'detail/queryById',
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
            	for(var i=0;i<content.length;i++){
            		createItem(content[i]);
            	}
            }
        },
        //调用出错执行的函数
//		error:function(){ }
  });
}
/**
 * 创建在住信息
 * @param {Object} info 明细信息
 */
function createItem(info){
	var tr = document.createElement("tr");
	//房间号
	var roomNum = info.cname;
	var roomNumTd = document.createElement("td");
	roomNumTd.style = "text-align:center;width:50px;"
	roomNumTd.innerHTML = roomNum;
	tr.appendChild(roomNumTd);
	//客户名称
	var customer = info.cguestname;
	var customerTd = document.createElement("td");
	customerTd.style = "text-align:center;";
	customerTd.innerHTML = customer;
	tr.appendChild(customerTd);
	//房价
	var price = info.mprice;
	var priceTd = document.createElement("td");
	priceTd.style = "text-align:center;width:50px;";
	priceTd.innerHTML = price;
	tr.appendChild(priceTd);
	//入住日期
	var date = info.date;
	var dateTd = document.createElement("td");
	dateTd.style = "text-align:center;";
	dateTd.innerHTML = date;
	tr.appendChild(dateTd);
	$("#details").append(tr);
}
/**
 * 刷新页面
 */
function refresh(){
    window.location.reload();
}

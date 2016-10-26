var shopIds; //门店id数组
$(function(){
	console.info("酒店列表加载");
	var params = getRequestParam();
	var shopIdStr = params["shopid"];
	if(shopIdStr.indexOf(",") > 0){ //一个微信号对应多个门店
		shopIds = shopIdStr.split(",");
		init();
	}else{ //一个微信号对应一个门店
		window.location.href = "../templates/WfrmHomePage.html?shopid="+shopIdStr;
	}
})
function init(){
	var requestPath = getRequestPath();
	$.ajax({
        //请求方式
        type:"post",
        //请求路径
        url:requestPath+'hotelList/queryNameById',
        //是否异步请求
        async:true,
        //传参
        data:{
            shopIds:shopIds
        },
        //发送请求前执行方法
//		beforeSend:function(){ },
        //成功返回后调用函数
        success:function(data){
            if(data.ret == 0){
            	debugger;
            	var content = data.content; //商户信息  名称 商户号
            	for(var i = 0; i<content.length;i++){
            		createItem(content[i]);
            	}
            	$('a').on('click',function(e){
					var shop = e.target;
					var shopId = shop.id;
					if(shopId != null && shopId != "" && shopId !== undefined){
						onclick_goShop(shopId);
					}
				});
            }
        },
        //调用出错执行的函数
//		error:function(){ }
  	});
}
function createItem(shopInfo){
	var shopName = shopInfo.name;
	var shopId = shopInfo.code;
	var li = document.createElement("li");
	var a = document.createElement("a");
	a.id = shopId;
	li.appendChild(a);
	$("#shopList").appendChild(li);
}
function onclick_refresh(){
	window.reload();
}
function onclick_goShop(shopId){
	console.info("前往酒店"+shopId);
}

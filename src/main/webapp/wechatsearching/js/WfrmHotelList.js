var shopIds = []; //门店id数组
$(function(){
	var params = getRequestParam();
	var shopIdStr = params["shopid"];
	if(shopIdStr.indexOf(",") > 0){ //一个微信号对应多个门店
		shopIds = shopIdStr.split(",");
	}else{ //一个微信号对应一个门店
        saveCookie("shopId",shopIdStr,1);
        shopIds.push(shopIdStr);
	}
	init();
})
/**
 * 初始化商户列表
 */
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
            	var content = data.content; //商户信息  名称 商户号
            	var length = content.length;
            	if(length > 1){
            		for(var i = 0; i<length;i++){
            			createItem(content[i]);
            		}
            	}else if(length == 1){
            		var shopInfo = content[0];
            		var shopName = shopInfo.name;
            		saveCookie("shopName",shopName,1);
            		window.location.href = "../templates/WfrmMain.html";
            	}
            	//绑定商户点击事件
            	$('li').on('click',function(e){
					var shop = e.target;
					var shopInfo = shop.id.split("-zty-");
					var shopId = shopInfo[0];
					var shopName = shopInfo[1];
					if(shopId != null && shopId != "" && shopId !== undefined){
						onclick_goShop(shopId,shopName);
					}
				});
            }
        },
        //调用出错执行的函数
//		error:function(){ }
  	});
}
/**
 * 创建商户
 * @param shopInfo 商户信息 (name,shopId)
 */
function createItem(shopInfo){
	var shopName = shopInfo.name;
	var shopId = shopInfo.code;
	var li = document.createElement("li");
	li.style.cursor = "pointer";
	var a = document.createElement("a");
	a.id = shopId+"-zty-"+shopName;
	a.innerHTML = shopName;
	li.appendChild(a);
	$("#shopList").append(li);
}
/**
 * 刷新页面
 */
function onclick_refresh(){
    window.location.reload();
}
/**
 * 跳转商户
 * @param shopId 商户id
 */
function onclick_goShop(shopId,shopName){
    saveCookie("shopId",shopId,1);
    saveCookie("shopName",shopName,1);
    window.location.href = "../templates/WfrmMain.html";
}

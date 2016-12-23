var shopId;
$(function(){
	window.parent.hideCanlender();
	window.parent.hideBtnRepair();
	$('#menuTitle', window.parent.document).html("营收对比情况");
	shopId = getCookie("shopId");
	init();
})
function init(){
	var requestPath = getRequestPath();
//	//TODO 测试数据
//	shopId = "8576";
	$.ajax({
        //请求方式
        type:"post",
        //请求路径
        url:requestPath+RESOURCE_PROJECT_NAME+'bussCompare/queryById',
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
 * 创建月营收对比项
 * @param {Object} item
 * Example:
 * <tr><strong style="margin: 5px 0px 5px 41px;font-size: 1.2em;">2016年8月</strong></tr>
					<tr>
						<td><ul style="list-style-type:none">
							<li>本月营收</li>
							<li style="color: #E59075;font-weight: 900;">467259.2</li>
						</ul></td>
						<td><ul style="list-style-type:none">
								<li>上月同期营收</li>
								<li style="color: #E59075;font-weight: 900;">448599.04</li>
								<li>百分比<strong>104.16%</strong></li>
						</ul></td>
						<td><ul style="list-style-type:none">
								<li>去年同期营收</li>
								<li style="color: #E59075;font-weight: 900;">0</li>
								<li>百分比<strong>25%</strong></li>
						</ul></td>
					</tr>
 */
function createItem(item){
	var date = item.date; //日期   YYYY年M月
	var income = item.income - 0; //本月营收
	var lastIncome = item.lastIncome - 0; //上月同期营收
	var lastYIncome = item.lastYIncome - 0; //去年同期营收
	var monthPercent = ""; //本月营收/上月营收 *100(%)
	var yearPercent = ""; //本月营收/去年同期营收 *100(%)
	//计算月对比结果
	var value = (income/lastIncome) * 100 + "";
	//判断月对比结果是否有小数点,只显示小数点后两位
	var idnex = value.indexOf(".");
	var length;
	if(idnex == -1){
		length = value.length;
	}else{
		length = value.indexOf(".") + 3; 
	}
	//判断月对比结果是否有效
	if(value == "NaN" || value == "Infinity" || value == "0"){
		monthPercent = "";
	}else{
		monthPercent = value.substring(0,length) + "%";
	}
	
	//计算年同期对比结果
	value = (income/lastYIncome) * 100 + "";
	//判断年同期对比结果是否有小数点，只显示小数点后两位
	idnex = value.indexOf(".");
	var length;
	if(idnex == -1){
		length = value.length;
	}else{
		length = value.indexOf(".") + 3; 
	}
	//判断年同期对比结果是否有效
	if(value == "NaN" || value == "Infinity" || value == "0"){
		yearPercent = "";
	}else{
		yearPercent = value.substring(0,length) + "%";
	}
	//创建日期标题
	var dateTr = document.createElement("tr");
	var dateStrong = document.createElement("strong");
	dateStrong.className = "dateTitle";
	dateStrong.innerHTML = date;
	dateTr.appendChild(dateStrong);
	$("#dataContent").append(dateTr);
	//创建营收信息
	//本月营收
	var infoTr = document.createElement("tr");
	var nowTd = document.createElement("td");
	var nowUl = document.createElement("ul");
	var nowTitleLi = document.createElement("li");
	nowTitleLi.innerHTML = "本月营收";
	var nowDataLi = document.createElement("li");
	nowDataLi.className = "bussData";
	nowDataLi.innerHTML = income;
	nowUl.appendChild(nowTitleLi);
	nowUl.appendChild(nowDataLi);
	nowTd.appendChild(nowUl);
	infoTr.appendChild(nowTd);
	//上月营收
	var monthTd = document.createElement("td");
	var monthUl = document.createElement("ul");
	var monthTitleLi = document.createElement("li");
	monthTitleLi.innerHTML = "上月同期营收";
	monthUl.appendChild(monthTitleLi);
	var monthDataLi = document.createElement("li");
	monthDataLi.className = "bussData";
	monthDataLi.innerHTML = lastIncome;
	monthUl.appendChild(monthDataLi);
	var monthPercentLi = document.createElement("li");
	monthPercentLi.innerHTML = "百分比：";
	var monthStrong = document.createElement("strong");
	monthStrong.innerHTML = monthPercent;
	monthPercentLi.appendChild(monthStrong);
	monthUl.appendChild(monthPercentLi);
	monthTd.appendChild(monthUl);
	infoTr.appendChild(monthTd);
	//去年同期营收
	var yearTd = document.createElement("td");
	var yearUl = document.createElement("ul");
	var yearTitleLi = document.createElement("li");
	yearTitleLi.innerHTML = "去年同期营收";
	yearUl.appendChild(yearTitleLi);
	var yearDataLi = document.createElement("li");
	yearDataLi.className = "bussData";
	yearDataLi.innerHTML = lastYIncome;
	yearUl.appendChild(yearDataLi);
	var yearPercentLi = document.createElement("li");
	yearPercentLi.innerHTML = "百分比：";
	var yearStrong = document.createElement("strong");
	yearStrong.innerHTML = yearPercent;
	yearPercentLi.appendChild(yearStrong);
	yearUl.appendChild(yearPercentLi);
	yearTd.appendChild(yearUl);
	infoTr.appendChild(yearTd);
	$("#dataContent").append(infoTr);
}
/**
 * 刷新页面
 */
function refresh(){
    window.location.reload();
}
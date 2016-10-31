/**
 * 函数名：getRequestParam
 * 描述：获取请求路径中的参数
 * Example:http://requestPath/WfrmMain.html?参数一=123&参数二=456
 * 方法返回参数数组,console结果为:[参数一:"123",参数二:"456"]
 */
function getRequestParam(){
	var url = location.search;
	var paramArray = [];
	var params = url.substring(1).split("&");
	for(var i=0;i<params.length;i++){
		var key = params[i].split("=")[0];
		var value = params[i].split("=")[1];
		paramArray[key] = value;
	}
	return paramArray;
}
/**
 * 获取后台接口请求路径
 */
function getRequestPath(){
	var localPaths = (window.document.location.href).split("/",3);
    var requestPath;
    for(var i = 0; i < localPaths.length; i++){
    	if(i == 2){
    		requestPath = "http://"+localPaths[i]+"/";
    	}
    }
    return requestPath;
}
/**
 * 保存cookie
 * @param name 变量名称
 * @param value 变量值
 * @param days 该cookie保存天数
 * @returns {boolean}
 */
function  saveCookie(name,value,days) {
	var d = new Date();
	d.setTime(d.getTime()+ (days * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = name + "=" +encodeURIComponent(value) + ";" + expires;
	return true;
}
/**
 * 获取cookie中指定参数
 * @param cookieName
 * @returns value
 */
function getCookie(cookieName) {
	var strCookie = document.cookie;
	var arrCookie = strCookie.split("; ");
	for(var i = 0; i < arrCookie.length; i++){
		var arr = arrCookie[i].split("=");
		if(cookieName == arr[0]){
			return decodeURIComponent(arr[1]);
		}
	}
	return "";
}
/**
 * 清除cookie
 * @param {Object} name 变量名称
 */
function removeCookie(name){
	saveCookie(name,"",-1);
}
/**
 * 日期格式化 YYYY-MM-DD
 * @param {Object} strTime
 */
function dateFormat(strTime){
	var date = new Date(strTime);
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}

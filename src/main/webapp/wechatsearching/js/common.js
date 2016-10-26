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
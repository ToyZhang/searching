$(function(){
	window.parent.hideCanlender();
	window.parent.hideBtnRepair();
	$('#menuTitle', window.parent.document).html("关于我们");
})
/**
 * 刷新页面
 */
function refresh(){
    window.location.reload();
}

$(function(){ 
    onclick_btnHomePage();
})
/**
 * 点击刷新事件
 */
function onclick_btnRefresh() {
    displayContent.window.refresh();
}
/**
 * 日期菜单点击事件
 */
function onclick_date() {
    var date = $('#my-start').data('date');
    //调用子页面方法
    displayContent.window.onchange_date(date);
}
/**
 * 主页 点击事件
 */
function onclick_btnHomePage() {
	$('#my-start').datepicker().on('changeDate.datepicker.amui', function (event) {
        onclick_date();
    });
    var src = "../templates/WfrmHomePage.html";
    window.open(src,'displayContent');
}
/**
 * 营业情况汇总 点击事件
 */
function  onclick_btnBusStatus() {
    var src = "../templates/WfrmBussStatus.html";
    window.open(src,'displayContent');
}
/**
 * 营业指标走势 点击事件
 */
function onclick_btnBITrend() {
	var src = "../templates/WfrmBITrend.html";
    window.open(src,'displayContent');
}
/**
 * 营业指标对比 点击事件
 */
function onclick_btnBICompare() {
	var src = "../templates/WfrmBICompare.html";
    window.open(src,'displayContent');
}
/**
 * 实时房态 点击事件
 */
function onclick_btnRoomStatus() {
	var src = "../templates/WfrmRoomStatus.html";
    window.open(src,'displayContent');
}
/**
 * 占用数 点击事件
 */
function onclick_btnEmployNum() {
	var src = "../templates/WfrmEmployNum.html";
    window.open(src,'displayContent');
}
/**
 * 在住明细 点击事件
 */
function onclick_btnDetail() {
	var src = "../templates/WfrmDetail.html";
    window.open(src,'displayContent');
}
/**
 * 预订情况 点击事件
 */
function onclick_btnOrderStatus() {
	var src = "../templates/WfrmOrderStatus.html";
    window.open(src,'displayContent');
}
/**
 * 关于 点击事件
 */
function onclick_btnAbout() {
    console.info("关于 点击事件");
}
function showCanlender(){
	$("#my-start").show();
}
function hideCanlender(){
	$("#my-start").hide();
}


$(function(){
    $('#my-start').datepicker().on('changeDate.datepicker.amui', function (event) {
        onclick_date();
    });
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
    var src = "../templates/WfrmHomePage.html";
    window.open(src,'displayContent');
}
/**
 * 营业情况汇总 点击事件
 */
function  onclick_btnBusStatus() {
    console.info("点击营业数据汇总");
}
/**
 * 营业指标走势 点击事件
 */
function onclick_btnBITrend() {
    console.info("点击营业指标数据");
}
/**
 * 营业指标对比 点击事件
 */
function onclick_btnBICompare() {
    console.info("营业指标对比点击事件");
}
/**
 * 实时房态 点击事件
 */
function onclick_btnRoomStatus() {
    console.info("实时房态点击事件");
}
/**
 * 占用数 点击事件
 */
function onclick_btnEmployNum() {
    console.info("占用数点击事件");
}
/**
 * 在住明细 点击事件
 */
function onclick_btnDetail() {
    console.info("在住明细点击事件");
}
/**
 * 预订情况 点击事件
 */
function onclick_btnOrderStatus() {
    console.info("预订情况点击事件");
}
/**
 * 关于 点击事件
 */
function onclick_btnAbout() {
    console.info("关于 点击事件");
}


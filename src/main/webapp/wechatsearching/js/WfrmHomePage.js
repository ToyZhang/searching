$(function(){
	console.info("加载主页面");
	var params = getRequestParam();
	var shopIdStr = params["shopid"];
	console.info("该酒店的id是"+shopIdStr);
	var startDate = new Date().toLocaleDateString();
	$('#dataDate').text(startDate);
    $('#my-start').datepicker().on('changeDate.datepicker.amui', function (event) {
        $('#my-start').text($('#my-start').data('date'));
        $('#dataDate').text($('#my-start').data('date'));
	});
})
function refresh(){
	
}
function showCalendar(){
	
}


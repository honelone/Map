//------------------分-----------割---------线------------------
$(function() {
	$('.info-list-close').on('click', function() {
		hideAllInfoList();
	});
});
//显示对应弹窗
function showInfoList(that, id, name) {
	hideAllInfoList();
	$('#' + id).offset({left:$(that).offset().left - 40});
	$('#' + id + ' .info-list-title').html(name);
	if($('#' + id).css("display")=='none'){
		$('#' + id).fadeToggle();
	}else{
		$('#' + id).fadeOut(); 
    }
}
//隐藏窗口
function hideInfoList(id) {
	$('#' + id).fadeOut(); 
}
//隐藏函数合集
function hideAllInfoList() {
	hideInfoList('xueyuan');
	hideInfoList('chanxue');
	hideInfoList('jiaoxue');
	hideInfoList('gongyu');
	hideInfoList('jiashu');
	hideInfoList('qita');
	hideInfoList('road');
	hideInfoList('theme');
}
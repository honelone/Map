//------------------分-----------割---------线------------------
//添加标注到当前位置，设置其图标，不可拽动，不可清除
var myIcon = new BMap.Icon("images/fox.gif", new BMap.Size(300,157));
var marker = new BMap.Marker(point,{icon:myIcon});
map.addOverlay(marker); 
marker.disableDragging();
marker.disableMassClear();
//------------------分-----------割---------线------------------
//创建变量，起点，终点，起点标志，终点标志，
var start_marker;
var end_marker;
var start_point;
var end_point;
var carMk;
//------------------分-----------割---------线------------------
//设置起点位置，设置起始标志可拖拽，并获取其经纬度赋值给起点
function start(){
	var lng = marker.getPosition().lng;
	var lat = marker.getPosition().lat;
	
	start_point = new BMap.Point(lng,lat);
	start_marker = new BMap.Marker(start_point);
	map.addOverlay(start_marker);
	start_marker.enableDragging();
	//start_marker.setAnimation(BMAP_ANIMATION_BOUNCE);
}
//------------------分-----------割---------线------------------
//与起点类似
function end(){
	var lng = marker.getPosition().lng;
	var lat = marker.getPosition().lat;
	end_point = new BMap.Point(lng,lat);
	end_marker = new BMap.Marker(end_point);
	map.addOverlay(end_marker);
	end_marker.enableDragging();
	//end_marker.setAnimation(BMAP_ANIMATION_BOUNCE);
}
//------------------分-----------割---------线------------------
//驾车路径
function trans(){	
		var myIcon = new BMap.Icon("images/Mario.png", new BMap.Size(32, 70));
		var trans = new BMap.DrivingRoute(map, {
									renderOptions: {
										map: map,
										panel: "r-result",
										enableDragging : true ,
									}, 
		});
		trans.search(start_point,end_point);
}
//步行路径
function walking(){	
		var myIcon = new BMap.Icon("images/Mario.png", new BMap.Size(32, 70));
		var walking = new BMap.WalkingRoute(map, {
									renderOptions: {
										map: map,
										panel: "r-result",
										enableDragging : true ,
										autoViewport : true
									}, 
		});
		walking.search(start_point,end_point);
}
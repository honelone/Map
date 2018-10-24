//------------------分-----------割---------线------------------
//获取学院列表dock0
var sel0 = document.getElementById('stylelist0');
for(var key in dock0){
	var item = new Option(dock0[key].name,key);
	sel0.options.add(item);
}
//添加改变事件
function changePosition0(k){
	var icon_poi = new BMap.Icon("images/building.png",new BMap.Size(50,50));
	var marker_poi = new BMap.Marker(dock0[k].point,{icon:icon_poi});  // 创建标注
	map.addOverlay(marker_poi); // 将标注添加到地图中
	marker_poi.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	map.centerAndZoom(dock0[k].point,22);
	var infoWindow = new BMap.InfoWindow(dock0_sContent[k]);//创建信息窗口对象
	marker_poi.addEventListener("click",function(){
		this.openInfoWindow(infoWindow);
	});
}
//------------------分-----------割---------线------------------
//获取产学研究列表dock1
var sel1 = document.getElementById('stylelist1');
for(var key in dock1){
	var item = new Option(dock1[key].name,key);
	sel1.options.add(item);
}
//添加改变事件
function changePosition1(k){
	var icon_poi = new BMap.Icon("images/building.png",new BMap.Size(50,50));
	var marker_poi = new BMap.Marker(dock1[k].point,{icon:icon_poi});  // 创建标注
	map.addOverlay(marker_poi); // 将标注添加到地图中
	marker_poi.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	map.centerAndZoom(dock1[k].point,22);
	var infoWindow = new BMap.InfoWindow(dock1_sContent[k]);//创建信息窗口对象
	marker_poi.addEventListener("click",function(){
		this.openInfoWindow(infoWindow);
	});
}
//------------------分-----------割---------线------------------
//获取学生公寓列表dock3
var sel3 = document.getElementById('stylelist3');
for(var key in dock3){
	var item = new Option(dock3[key].name,key);
	sel3.options.add(item);
}
//添加改变事件
function changePosition3(k){
	var marker_poi = new BMap.Marker(dock3[k].point);  // 创建标注
	map.addOverlay(marker_poi); // 将标注添加到地图中
	marker_poi.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	map.centerAndZoom(dock3[k].point,22);
	var infoWindow = new BMap.InfoWindow(dock3_sContent[k]);//创建信息窗口对象
	marker_poi.addEventListener("click",function(){
		this.openInfoWindow(infoWindow);
	});
}
//------------------分-----------割---------线------------------
//获取其它建筑列表dock5
var sel5 = document.getElementById('stylelist5');
for(var key in dock5){
	var item = new Option(dock5[key].name,key);
	sel5.options.add(item);
}
//添加改变事件
function changePosition5(k){
	var marker_poi = new BMap.Marker(dock5[k].point);  // 创建标注
	map.addOverlay(marker_poi); // 将标注添加到地图中
	marker_poi.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	map.centerAndZoom(dock5[k].point,22);
	var infoWindow = new BMap.InfoWindow(dock5_sContent[k]);//创建信息窗口对象
	marker_poi.addEventListener("click",function(){
		this.openInfoWindow(infoWindow);
	});
}
//------------------分-----------割---------线------------------
//获取主题列表
var sel7 = document.getElementById('stylelist7');
for(var key in mapstyles){
	var style = mapstyles[key];
	var item = new  Option(style.title,key);
	sel7.options.add(item);
}
//------------------分-----------割---------线------------------
//添加主题改变事件
function changeMapStyle(style){
		map.setMapStyle(
			{
				style:style
			}
		);
}

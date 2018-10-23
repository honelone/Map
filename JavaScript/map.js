//------------------分-----------割---------线------------------
// 创建Map实例,设置地图允许的最小/大级别，移除地图信息点击显示
var map = new BMap.Map("allmap",{minZoom:16,maxZoom:30,enableMapClick:false}); 
var point = new BMap.Point(104.194,30.83);
map.centerAndZoom(point,17);
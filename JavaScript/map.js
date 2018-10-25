//------------------分-----------割---------线------------------
// 创建Map实例,设置地图允许的最小/大级别，移除地图信息点击显示
var map = new BMap.Map("allmap",{minZoom:16,maxZoom:30,enableMapClick:false}); 
var point = new BMap.Point(104.188837,30.82628);
map.centerAndZoom(point,17);

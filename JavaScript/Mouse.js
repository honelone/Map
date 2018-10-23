//------------------分-----------割---------线------------------
//创建右键菜单
var menu = new BMap.ContextMenu();
var myDis = new BMapLib.DistanceTool(map);
var txtMenuItem = [
	{
		text:'~放大地图~',
		callback:function(){map.zoomIn()}
	},
	{
		text:'~缩小地图~',
		callback:function(){map.zoomOut()}
	},
	{
		text:'~平面地图~',
		callback:function(){map.setMapType(BMAP_NORMAL_MAP)}
	},
	{
		text:'~卫星地图~',
		callback:function(){map.setMapType(BMAP_HYBRID_MAP)}
	},
	{
		text:'~启用滚动~',
		callback:function(){map.enableScrollWheelZoom(true)}
	},
	{
		text:'~禁用滚动~',
		callback:function(){map.disableScrollWheelZoom(true)}
	},
	{
		text:'~开启测距~',
		callback:function(){myDis.open()}
	},
	{
		text:'~关闭测距~',
		callback:function(){myDis.close()}
	},
	{
		text:'~图标拖拽~',
		callback:function(){marker.enableDragging()}
	},
	{
		text:'~禁止拖拽~',
		callback:function(){marker.disableDragging()}
	}
];
for(var i=0; i < txtMenuItem.length; i++){
	menu.addItem(new BMap.MenuItem(txtMenuItem[i].text,txtMenuItem[i].callback,100));
	menu.addSeparator();
}
map.addContextMenu(menu);
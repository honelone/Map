//------------------分-----------割---------线------------------
//左上角，添加比例尺与默认缩放平移控件，
var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT});
var top_left_navigation = new BMap.NavigationControl();
map.addControl(top_left_control);        
map.addControl(top_left_navigation);
// 覆盖区域图层测试，添加全景控件
map.addTileLayer(new BMap.PanoramaCoverageLayer());
var stCtrl = new BMap.PanoramaControl();
stCtrl.setOffset(new BMap.Size(1845, 135));//设置x,y轴偏移
map.addControl(stCtrl);	
// 添加带有定位的导航控件
var navigationControl = new BMap.NavigationControl({
		anchor: BMAP_ANCHOR_TOP_LEFT,
		type: BMAP_NAVIGATION_CONTROL_LARGE,
		enableGeolocation: false
	});
map.addControl(navigationControl);
//------------------分-----------割---------线------------------
//添加自定义的覆盖物1-------路径规划面板
function ZoomControl_Center1(){
    this.defaultAnchor = BMAP_ANCHOR_BOTTOM_RIGHT;
    this.defaultOffset = new BMap.Size(20, 10);
}
ZoomControl_Center1.prototype = new BMap.Control();
ZoomControl_Center1.prototype.initialize = function(map){
    var diva = document.createElement("div");            
    diva.innerHTML = "<img src='images/profile.gif' width='150px' height='150px'>";
    diva.style.cursor = "pointer";
    
    diva.onclick = function(){
        var x = document.getElementById("r-result");
        if($("#r-result").css("display")=='none'){//如果是隐藏的
            //$("#r-result").css("display","block");//display属性设置为block（显示）
			$("#r-result").fadeToggle();
        }else{
            //$("#r-result").css("display","none");
			$("#r-result").fadeOut(); 
        }
    }
    map.getContainer().appendChild(diva);
    return diva;
};
map.addControl(new ZoomControl_Center1());
openUserInfoDiv();
//覆盖层显示内容--------面板
function openUserInfoDiv(){
    var newDiv = document.createElement("div");
    newDiv.id = "r-result";
    newDiv.style.position = "absolute";
    newDiv.style.zIndex = "99";  
    newDiv.style.width ="15%";
	newDiv.style.height ="50%";
    newDiv.style.top = "15%";
    newDiv.style.right = "2%";
    newDiv.style.background = "#ffffff";
    newDiv.style.opacity = "0.8";
    newDiv.style.display="none";          //隐藏
    //newDiv.style.visibility="hidden";   //隐藏
    document.getElementById("allmap").appendChild(newDiv);
}
//------------------分-----------割---------线------------------
//添加自定义的覆盖物2------清除覆盖物
function ZoomControl_Center2(){
    this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
    this.defaultOffset = new BMap.Size(20, 10);
}
ZoomControl_Center2.prototype = new BMap.Control();
ZoomControl_Center2.prototype.initialize = function(map){
    var divb = document.createElement("div");            
    divb.innerHTML = "<img src='images/delet.ico' width='80px' height='80px'>";
    divb.style.cursor = "pointer";
    
    divb.onclick = function(){
	map.clearOverlays();
    }
    map.getContainer().appendChild(divb);
    return divb;
};
map.addControl(new ZoomControl_Center2());

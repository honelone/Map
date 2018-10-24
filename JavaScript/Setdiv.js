//生成学院设置弹窗0
var div001 = document.createElement("div");
div001.setAttribute("id","xueyuan");
div001.setAttribute("class","info_list");
	var div002 = document.createElement("div");		
		var div003 = document.createElement("div");
		div003.setAttribute("class","info-list-title");		
		var img0 = document.createElement("img");
		img0.setAttribute("class","info-list-close");
		img0.src = "images/close.png";		
	div002.appendChild(div003);
	div002.appendChild(img0);	
	var div004 = document.createElement("div");
	div004.setAttribute("class","info-list-content");
	var select0 = document.createElement("select");
		select0.setAttribute("id","stylelist0");
		select0.setAttribute("onchange","changePosition0(this.value)");
		select0.setAttribute("multiple","multiple");
	div004.appendChild(select0);
div001.appendChild(div002);
div001.appendChild(div004);
document.body.appendChild(div001);	
//------------------分-----------割---------线------------------
//生成产学研究弹窗1
var div101 = document.createElement("div");
div101.setAttribute("id","chanxue");
div101.setAttribute("class","info_list");
	var div102 = document.createElement("div");		
		var div103 = document.createElement("div");
		div103.setAttribute("class","info-list-title");		
		var img1 = document.createElement("img");
		img1.setAttribute("class","info-list-close");
		img1.src = "images/close.png";		
	div102.appendChild(div103);
	div102.appendChild(img1);	
	var div104 = document.createElement("div");
	div104.setAttribute("class","info-list-content");
	var select1 = document.createElement("select");
		select1.setAttribute("id","stylelist1");
		select1.setAttribute("onchange","changePosition1(this.value)");
		select1.setAttribute("multiple","multiple");
	div104.appendChild(select1);
div101.appendChild(div102);
div101.appendChild(div104);
document.body.appendChild(div101);
//------------------分-----------割---------线------------------	
//生成学生公寓弹窗3
var div301 = document.createElement("div");
div301.setAttribute("id","gongyu");
div301.setAttribute("class","info_list");
	var div302 = document.createElement("div");		
		var div303 = document.createElement("div");
		div303.setAttribute("class","info-list-title");		
		var img3 = document.createElement("img");
		img3.setAttribute("class","info-list-close");
		img3.src = "images/close.png";		
	div302.appendChild(div303);
	div302.appendChild(img3);	
	var div304 = document.createElement("div");
	div304.setAttribute("class","info-list-content");
	var select3 = document.createElement("select");
		select3.setAttribute("id","stylelist3");
		select3.setAttribute("onchange","changePosition3(this.value)");
		select3.setAttribute("multiple","multiple");
	div304.appendChild(select3);
div301.appendChild(div302);
div301.appendChild(div304);
document.body.appendChild(div301);
/*
//------------------分-----------割---------线------------------	
//生成家属楼宇弹窗4
var div401 = document.createElement("div");
div401.setAttribute("id","jiashu");
div401.setAttribute("class","info_list");
	var div402 = document.createElement("div");		
		var div403 = document.createElement("div");
		div403.setAttribute("class","info-list-title");		
		var img4 = document.createElement("img");
		img4.setAttribute("class","info-list-close");
		img4.src = "images/close.png";		
	div402.appendChild(div403);
	div402.appendChild(img4);	
	var div404 = document.createElement("div");
	div404.setAttribute("class","info-list-content");
	var select4 = document.createElement("select");
		select4.setAttribute("id","stylelist4");
		select4.setAttribute("onchange","changePosition4(this.value)");
		select4.setAttribute("multiple","multiple");
	div404.appendChild(select4);
div401.appendChild(div402);
div401.appendChild(div404);
document.body.appendChild(div401);*/
//------------------分-----------割---------线------------------	
//生成其它建筑弹窗5
var div501 = document.createElement("div");
div501.setAttribute("id","qita");
div501.setAttribute("class","info_list");
	var div502 = document.createElement("div");		
		var div503 = document.createElement("div");
		div503.setAttribute("class","info-list-title");		
		var img5 = document.createElement("img");
		img5.setAttribute("class","info-list-close");
		img5.src = "images/close.png";		
	div502.appendChild(div503);
	div502.appendChild(img5);	
	var div504 = document.createElement("div");
	div504.setAttribute("class","info-list-content");
	var select5 = document.createElement("select");
		select5.setAttribute("id","stylelist5");
		select5.setAttribute("onchange","changePosition5(this.value)");
		select5.setAttribute("multiple","multiple");
	div504.appendChild(select5);
div501.appendChild(div502);
div501.appendChild(div504);
document.body.appendChild(div501);
//------------------分-----------割---------线------------------	
//生成路径规划弹窗6
var div601 = document.createElement("div");
div601.setAttribute("id","road");
div601.setAttribute("class","info_list");
	var div602 = document.createElement("div");		
		var div603 = document.createElement("div");
		div603.setAttribute("class","info-list-title");		
		var img6 = document.createElement("img");
		img6.setAttribute("class","info-list-close");
		img6.src = "images/close.png";		
	div602.appendChild(div603);
	div602.appendChild(img6);	
	var div604 = document.createElement("div");
	div604.setAttribute("class","info-list-content");		
		var button_ul = document.createElement("ul");		
			var button_li1 = document.createElement("li");
				var start_button1 = document.createElement("button");	
					start_button1.setAttribute("class","button-image");
					start_button1.innerHTML = "起点";
					start_button1.setAttribute("onclick","this,start()");
					//start_button1.onclick = "start";
				button_li1.appendChild(start_button1);
				
			var button_li2 = document.createElement("li");
				var start_button2 = document.createElement("button");	
					start_button2.setAttribute("class","button-image");
					start_button2.innerHTML = "终点";
					start_button2.setAttribute("onclick","this,end()");
					//start_button2.onclick = "end";
				button_li2.appendChild(start_button2);
				
			var button_li3 = document.createElement("li");
				var start_button3 = document.createElement("button");	
					start_button3.setAttribute("class","button-image");
					start_button3.innerHTML = "驾车";
					start_button3.setAttribute("onclick","this,trans()");
					//start_button3.onclick = "trans";	
				button_li3.appendChild(start_button3);
			var button_li4 = document.createElement("li");
				var start_button4 = document.createElement("button");	
					start_button4.setAttribute("class","button-image");
					start_button4.innerHTML = "步行";
					start_button4.setAttribute("onclick","this,walking()");
					//start_button3.onclick = "clearRoad";	
				button_li4.appendChild(start_button4);
			button_ul.appendChild(button_li1);
			button_ul.appendChild(button_li2);
			button_ul.appendChild(button_li3);		
			button_ul.appendChild(button_li4);	
			div604.appendChild(button_ul);
div601.appendChild(div602);
div601.appendChild(div604);
document.body.appendChild(div601);
//------------------分-----------割---------线------------------
//生成主题选择弹窗7
var div701 = document.createElement("div");
div701.setAttribute("id","theme");
div701.setAttribute("class","info_list");
	var div702 = document.createElement("div");		
		var div703 = document.createElement("div");
		div703.setAttribute("class","info-list-title");		
		var img7 = document.createElement("img");
		img7.setAttribute("class","info-list-close");
		img7.src = "images/close.png";		
	div702.appendChild(div703);
	div702.appendChild(img7);	
	var div704 = document.createElement("div");
	div704.setAttribute("class","info-list-content");
	var select7 = document.createElement("select");
		select7.setAttribute("id","stylelist7");
		select7.setAttribute("onchange","changeMapStyle(this.value)");
		select7.setAttribute("multiple","multiple");
	div704.appendChild(select7);
div701.appendChild(div702);
div701.appendChild(div704);
document.body.appendChild(div701);
/*
//------------------分-----------割---------线------------------
//生成教学研究弹窗2
var div201 = document.createElement("div");
div201.setAttribute("id","result");
div201.setAttribute("class","info_list");
	var div202 = document.createElement("div");		
		var div203 = document.createElement("div");
		div203.setAttribute("class","info-list-title");		
		var img2 = document.createElement("img");
		img2.setAttribute("class","info-list-close");
		img2.src = "images/close.png";		
	div202.appendChild(div203);
	div202.appendChild(img2);	
	var div204 = document.createElement("div");
	div204.setAttribute("class","info-list-content");
	var select2 = document.createElement("select");
		select2.setAttribute("id","stylelist2");
		//select2.setAttribute("onchange","changePosition1(this.value)");
		select2.setAttribute("multiple","multiple");
	div204.appendChild(select2);
div201.appendChild(div202);
div201.appendChild(div204);
document.body.appendChild(div201);*/

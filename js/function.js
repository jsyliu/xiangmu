//获取元素 页面加载
function $(sel,obj){
	var obj = obj || document;

	
	if (typeof sel == "function") {
		window.onload=function(){
			sel();
		}
	}else if (typeof sel == "string") {
		if (sel.charAt(0) == ".") {
			return getClass(sel.slice(1),obj);
		}else if (sel.charAt(0) == "#") {
			return obj.getElementById(sel.slice(1));
		}else if (/^[a-z|1-6]{1,10}$/g.test(sel)){
			return obj.getElementsByTagName(sel);
		}else{
			console.error("非法输入");
		}
	}
}

//// 通过类名获取元素
function getClass(sel,obj){
	var obj = obj||document;
	if (obj.getElementsByClassName) {
		return obj.getElementsByClassName(sel);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName("*");
		for (var i=0; i<alls.length; i++) {
			if (check(alls[i].className,sel)) {
				arr.push(alls[i])
			}
		}		   
		return arr;
	}
}

function check (oldclass,newclass) {
	var newarr=oldclass.split(" "); 
	for (var i=0; i<newarr.length; i++) {
		if (newarr[i]==newclass) {
			return true;
		}
	}
	return false;
}


//// 获取或设置元素的文本内容
function getText (obj,value) {
	if(value==undefined){
		if(obj.innerText){
			return obj.innerText;
		}else{
			return obj.textContent;
		}
	}else{
		if(obj.innerText){
			obj.innerText=value;
		}else{
			obj.textContent=value;
		}
	}
}

//// 获取元素的样式
function getStyle (obj,prop) {
	if (obj.currentStyle == undefined) {
		return window.getComputedStyle(obj,null)[prop];
	}else{
		return obj.currentStyle[prop];
	}
}





function getEleChild(obj){
	var arr = obj.childNodes;
	var newarr=[];

	for (var i = 0; i < arr.length; i++) {
		if(arr[i].nodeType==1){
			newarr.push(arr[i]);
	}
}
	return newarr;
}



function firstEleChild(obj){
	return getEleChild(obj)[0]; 
}



function firstEleChild(obj){
	return getEleChild(obj)[getEleChild(obj).length-1]; 
}



//插入一个节点
function insertAfter(newobj,befobj){
	var parent = befobj.parentNode;
	var next= nextSiblingeLE(befobj);
	if(next==null){
		parent.appendChild(newobj);
	}else{
		parent.insertAfter(newobj,next);
	}
}



//获取后一个兄弟节点
function nextSiblingEle(box){
	var next = box.nextSibling;
	if(next==null){
		return null;
	}
	while(next.nodeType!=1){
		next = next.nextSibling;
		if(next==null){
			return null;
		}

	}return next;
}




//获取前一个兄弟节点
function previousSiblingEle(box){
	var shang = box.previousSibling;
	if(shang==null){
		return null;
	}
	while(shang.nodeType!=1){
	shang= shang.previousSibling;
	if(shang==null){
		return null;
	}

	}return shang;
}




//获取文档与边框的距离
	function offsetWindow(){
		var x=document.documentElement.clientWidth;
		var y=document.documentElement.clientHeight;
		return {width:x,height:y};
	}


//获取位置
	function getPosition(obj){
		var x=obj.offsetLeft;
		var y=obj.offsetTop;

		var parent = obj.parentNode;
		while(parent.nodename != "BODY"){

			if(getstyle(parent,"position")=="absolute"||getstyle(parent,"position")=="relative"){
				x+=parseInt(getstyle(parent,"borderLeftwidth"))
				x+=parent.offsetLeft;
				y+=parseInt(getstyle(parent,"borderTopwidth"))
				y+=parent.offsetTop;
			}
			parent=parent.parentNode;
		}
		return {top:y,left:x};
	}


//滚动事件
	function mouseWheel(obj,shang,xia){
		obj.addEventListener("mousewheel",scrollFn,false);//谷歌及其他
		obj.addEventListener("DOMMouseScroll",scrollFn,false);//火狐

		function scrollFn(e){
			if(e.wheelDelta){
				if(e.wheelDelta > 0){
					shang();
				}else{
					xia();
				}
			}else{
				if(e.detail < 0){
					shang();
				}else{
					xia();
				}
			}
		}
	}
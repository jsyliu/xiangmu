//// 通过类名来获取元素
function getClass(sel,obj){
	var obj=obj || document;
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sel);
	}else{
		var arr=[];
		// 获取所有元素
		var div=document.getElementsByTagName('*')
			// 遍历所有的元素
			for (var i = 0; i < div.length; i++) {
				// 获取每一个元素的类名
				var str=div[i].className;
				// 判断是否满足类名的条件
				if (check(str,div)) {
					arr.push(div[i]);
				}
			}return arr;
		}
			function check(sel1,sel2){
				// 将类名的字符串转换为数组
				var arrnew=sel1.split(" ");
				//将以个元素的每一个类名遍历
				for (var i = 0; i < arrnew.length; i++){
					// 当传入的类名匹配是为真
					if(arrnew[i]==sel2){
						return true;
					}
				}
				return false;
		    }
		    // console.log(getClass("aa"));					
				
	}



//// 获取元素的样式
function getStyle(obj,prop){
	if(obj.currentStyle == undefined){
		return window.getComputedStyle(obj,null)[prop];
	}else{
		return obj.currentStyle[prop];
	}
}



function $(sel,obj){
	var obj =obj || document;
	if(typeof sel =="function"){    
		window.onload=function(){
			sel();
		}
	}else if(typeof sel=="string"){    
		if(sel.charAt(0) == "."){
			return getClass(sel.slice(1),obj);
		}else if(sel.charAt(0) == "#"){
			return obj.getElementById(sel.slice(1));
		}else if(/^[a-z | 1-6]{1-10}$/g.test(sel)){  
			return obj.getElementsByTagName(sel);
		}else{
			console.error("非法输入");
		}
	}
}

// getStyle(aa,"width")
			
//获取元素的文本
function getText (obj,value){
	if(value == undenfined){
		return obj.innerText;
	}else{
		obj.innerText = value;
	}
}
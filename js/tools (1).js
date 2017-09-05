//获取元素外部样式
function getStyle(obj,attr){    //获取非行间样式，obj是对象，attr是值
			   if(obj.currentStyle){   //针对ie获取非行间样式
			        return obj.currentStyle[attr];
			   }else{
			        return getComputedStyle(obj,false)[attr];   //针对非ie
				};	
};



//获取？号后面参数--search
function GetQueryString(name){
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     console.log(r);
     if(r!=null){
     	 return   decodeURI(r[2]);
     } 
     return null;
}



//获取#号后面
function getUrlHash(name) {
           var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
           var r = window.location.hash.substr(1).match(reg);
            if (r != null) {
            	return unescape(r[2])
            }else{
            	return null;
            }  
        }



//设置cookie
function setCookie(name,value,days){
	var mydate=new Date();
	mydate.setMinutes(mydate.getMinutes()+days);
	document.cookie=name+"="+escape(value)+
	((days==null)?"":";expires="+mydate.toGMTString());
}



//获取cookie值
function getCookie(name){
	var x=document.cookie
	var y=x.split("; ")
	for(i=0;i<y.length;i++){
		var z=y[i].split("=")
		if(name==z[0]){
			return unescape(z[1])
			break;
		}
	}
}

//判断是否存在cookie
function checkCookie(name){
	var x=document.cookie.indexOf(name+"=")
	if(x!=-1){
		return true
	}else{
		return false
	}	
}

//删除cookie
function delCookie(name){
	var myval=getCookie(name)
	var mydate=new Date()
//	mydate.setTime(mydate.getTime()-1)
     mydate.setDate(0)//设置时间为1970年
	if(myval){	
document.cookie=name+"="+escape(myval)+";expires="+mydate.toGMTString()		
	}
}


//获取cookie数组
function getAll(){
	var get=getCookie("datas");
	var myJson=JSON.parse(get)
	return myJson;
}
//是否存在商品id
function checkup(id){
	var mycook=getAll()
	var ext=false
	for(i=0;i<mycook.length;i++){
		if(mycook[i].pid==id){
			ext=true
			break;
			
		}
		
		
	}
	return ext
	
}
//获取总数量
function getTotal(){
var listObj=getAll();
var total=0; 
	for(var i=0;i<listObj.length;i++){
	
		total=total+Number(listObj[i].pcount);
	}
		return total;


}
//更新商品数量
function updateNum(id,num){
	var listObj1=getAll()
	for(i=0;i<listObj1.length;i++){
		if(listObj1[i].pid==id){
			listObj1[i].pcount=listObj1[i].pcount+num
		}

	}
	var listobj=JSON.stringify(listObj1)
	setCookie("datas",listobj,50)
	console.log(listobj)
}


//获取输入内容的字节
function GetBytes(str){
		         var len = str.length;
		         var bytes = len;
      		for(var i=0; i<len; i++){
      			//ASCII是用来表示英文字符的一种编码规范，每个ASCII字符占用1个字节（8bits）
				//      因此，ASCII编码可以表示的最大字符数是256，其实英文字符并没有那么多，一般只用前128个（最高位为0），
				//其中包括了控制字符、数字、大小写字母和其他一些符号
                    if (str.charCodeAt(i) > 256) {
                    	//if 里只有一句语句时候可以省略
                    	bytes++;
                    }
             }       	
      			
        		 return bytes;
		}


//ajax封装
function ajax(fangshi,url,data,success){
	
	var xhr=null;
	try{
					xhr=new XMLHttpRequest();
				}catch(err){
					xhr=new ActiveXObject("Microsoft.XMLHTTP")
				}
   if(fangshi=="get"&&data){
   	url+="?"+data
   }
	xhr.open(fangshi,url,true)			

	if(fangshi=="post"){
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
				xhr.send(data);
	}else{
		xhr.send()
	}
		xhr.onreadystatechange=function(){
					if(xhr.readyState==4&&xhr.status==200){
						 success(xhr.responseText);
					}	
		}		
}

//拖拽
function drag(ele){
	this.ele=ele;
	this.dowm();
}
drag.prototype.dowm=function(){
	var that=this;
	this.ele.onmousedown=function(e){
		var e=e||event
		var disX=e.clientX-this.offsetLeft;
		var disY=e.clientY-this.offsetTop;
		that.move(disX,disY)
	}
}
drag.prototype.move=function(x,y){
	var that=this;
	document.onmousemove=function(e){
		var e=e||event;
		that.ele.style.left=e.clientX-x+"px";
		that.ele.style.top=e.clientY-y+"px"
		that.up()
	}
}
drag.prototype.up=function(){
	this.ele.onmouseup=function(){
		document.onmousemove=null
	}
}

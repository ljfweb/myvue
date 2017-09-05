$(function(){
	
	var str_shoppingCar="";
//获取购物车cookie	
	var listObj=getAll();
//判断cookie内是否存在数据	
	if(listObj.length==0){
	$('.null_box').css("display","block")
	$('#tab').css("display","none")
}else{
	$('.null_box').css("display","none")

//加载购物车页面
	$.each(listObj, function(i,ele) {
		str_shoppingCar+='<tr pid="'+listObj[i].pid+'" weight="'+listObj[i].weight+'">'
		+'<td><input type="checkbox" checked="checked" class="ck" /></td>'
						+'<td><img src="'+listObj[i].imgSrc+'"/><a href="javascript:void(0)">'+listObj[i].pdes+'</a></td>'
						+'<td>'+listObj[i].price+'</td>'
						+'<td></td>'
						+'<td><button class="down">-</button><input class="num" type="text" value="'+listObj[i].pcount+'"  /><button class="up">+</button></td>'
						+'<td>'+Math.round(listObj[i].weight*listObj[i].pcount*1000)/1000+'</td>'
						+'<td style="color:#ea5404;">'+Math.round(listObj[i].pcount*listObj[i].price*1000)/1000+'</td>'
						+'<td>现货</td>'
						+'<td><a href="javascript:void(0)>收藏</a>"<a href="javascript:void(0)" class="del_btn">删除</a></td>'
		+'</tr>'
	})
	
	
	
};
 $('#tab').append(str_shoppingCar)
 //加载总价格
 	$('.totle_text:eq(1)').html(getTotal())
  //加载总价格	
 	 $('.price_total_text').html(getTotal())
  //加载总重量 
 		 $('.totle_weight').html(getWeight())
 
 //删除所选的
	$('.del_btn').click(function(){
		var pid=$(this).parent().parent().attr("pid")
//获取商品id		
		var checkBox=$(this).parent().parent().children("td:eq(0)").children()
//移除tr		
		$(this).parent().parent().remove()
		$.each(listObj,function(i,ele) {
			
			if(listObj[i].pid==pid){
//判断pid等于商品id				
//删除购物车cookie数组 第i项				
				listObj.splice(i,1)
//判断如果被选中，更新总价格和总重量			
				if(checkBox.attr("checked")){
					$('.totle_text:eq(1)').html(getTotal())
	  	 $('.totle_weight').html(getWeight())
	  	  $('.price_total_text').html(getTotal())
	          }
//停止循环				
				return false;
			}
		});
//重新设置购物车cookie	
		var arrSt=JSON.stringify(listObj)
         setCookie("datas",arrSt,50)
	})

//减少事件
	$('.down').click(function(){
		var inp_value=$(this).next(".num").attr("value")
		var pid=$(this).parent().parent().attr("pid")
		var weight=$(this).parent().parent().attr("weight")
		var checkBox=$(this).parent().parent().children("td:eq(0)").children()
//判断输出框		
		if(inp_value<=1){
//值小于等于1时  让值等于1			
		inp_value=1
		$(this).next(".num").attr("value",inp_value)
	}else{
//让值减1	
		inp_value=parseInt(inp_value)-1
		$(this).next(".num").attr("value",inp_value)
	}
	   var inner_price=$(this).parent().parent().children("td:eq(2)").html()
//让重量更新数据	  
		$(this).parent().next("td").html(  Math.round(inp_value*weight*1000)/1000)
//让小计更新数据		
		$(this).parent().next().next().html(  Math.round(inp_value*inner_price*1000)/1000)
//设置cookie数组		
	$.each(listObj, function(i,ele) {
		if(listObj[i].pid==pid){
			if(listObj[i].pcount<=1){
		listObj[i].pcount=1
		}else{
//找到商品id那项 数量减1			
			listObj[i].pcount--
		}
//更新总价格 总重量		
		if(checkBox.attr("checked")){
					$('.totle_text:eq(1)').html(getTotal())
	  	 $('.totle_weight').html(getWeight())
	  	  $('.price_total_text').html(getTotal())
	          }
//停止循环		
		return false;
		}
	});	
//重新设置cookie
		var arrSt=JSON.stringify(listObj)
setCookie("datas",arrSt,50)		
		
	})
	
	
$('.num').blur(function(){
	console.log($(this).attr("value"))
	var value=parseInt($(this).attr("value"))
	var pid=$(this).parent().parent().attr("pid")
	var weight=$(this).parent().parent().attr("weight")
	var checkBox=$(this).parent().parent().children("td:eq(0)").children()
	var inner_price=$(this).parent().parent().children("td:eq(2)").html()
	if(value<=1){
		value=1
		$(this).parent().next("td").html(  Math.round(value*weight*1000)/1000)
		$(this).parent().next().next().html(  Math.round(value*inner_price*1000)/1000)
		 
	}else if(isNaN(value)){
		alert("请输出数字")
	}else{
	
   $(this).parent().next("td").html(  Math.round(value*weight*1000)/1000)
	$(this).parent().next().next().html(  Math.round(value*inner_price*1000)/1000)
   }
	$.each(listObj, function(i,ele) {
		if(listObj[i].pid==pid){
			
			listObj[i].pcount=value
		
		if(checkBox.attr("checked")){
					$('.totle_text:eq(1)').html(getTotal())
	  	            $('.totle_weight').html(getWeight())
	  	            $('.price_total_text').html(getTotal())
	          }
		return false;
		}
	});	
	var arrSt=JSON.stringify(listObj)
setCookie("datas",arrSt,50)	
	
})






//增加事件
	$('.up').click(function(){
		var inp_value=$(this).prev(".num").attr("value")
		var pid=$(this).parent().parent().attr("pid")
		var weight=$(this).parent().parent().attr("weight")
		var checkBox=$(this).parent().parent().children("td:eq(0)").children()
		inp_value=parseInt(inp_value)+1
		$(this).prev(".num").attr("value",inp_value)
	
	   var inner_price=$(this).parent().parent().children("td:eq(2)").html()
	  
		$(this).parent().next("td").html(  Math.round(inp_value*weight*1000)/1000)
		$(this).parent().next().next().html(  Math.round(inp_value*inner_price*1000)/1000)
	$.each(listObj, function(i,ele) {
		if(listObj[i].pid==pid){
			
			listObj[i].pcount++
		
		if(checkBox.attr("checked")){
					$('.totle_text:eq(1)').html(getTotal())
	  	            $('.totle_weight').html(getWeight())
	  	            $('.price_total_text').html(getTotal())
	          }
		return false;
		}
	});	

		var arrSt=JSON.stringify(listObj)
setCookie("datas",arrSt,50)		
		
	})

$('.ck').change(function(){
		ischeckAll();
			$('.totle_text:eq(1)').html(getTotal())
	  	            $('.totle_weight').html(getWeight())
	  	            $('.price_total_text').html(getTotal())
})
	
	function getTotal(){
		cks=document.querySelectorAll(".ck");
 	      var sum=0;
	for(var i=0;i<cks.length;i++){
 			if(cks[i].checked==true){
 				var tr=cks[i].parentNode.parentNode;
 				var temp=tr.children[6].innerHTML;
 				sum+=Number(temp); 
 			}
 		}
	
 		return Math.floor(sum*1000)/1000;
	
	
	}
	
	function getWeight(){
		cks=document.querySelectorAll(".ck");
 	      var sum=0;
	for(var i=0;i<cks.length;i++){
 			if(cks[i].checked==true){
 				var tr=cks[i].parentNode.parentNode;
 				var temp=tr.children[5].innerHTML;
 				sum+=Number(temp); 
 			}
 		}
	
 		return Math.floor(sum*1000)/1000;
	
	
	}
	function ischeckAll(){
  	var flag=true;
  	for(var i=0;i<cks.length;i++){
  		if(cks[i].checked==false){
  			flag=false;
  		}
  	}
	  	if(flag){
	  		checkup.checked=true;
	  	}else{
	  		checkup.checked=false;
	  	}	
  }

	
	$('.del_select').click(function(){
		
		for(k=0;k<cks.length;k++){
	if(cks[k].checked){
		var tr=cks[k].parentNode.parentNode
		tr.remove()
		var pid=tr.getAttribute("pid")
		for(j=0;j<listObj.length;j++){
			if(listObj[j].pid==pid){
					listObj.splice(j,1)
					 $('.price_total_text').html(0)
					 $('.totle_text:eq(1)').html(0)
			}	
		}	
//		if(tbody.children.length==0){
//      box.style.display="block"
//	      tab.style.display="none"
//	}
	
	}

}
	var arrSt=JSON.stringify(listObj)
setCookie("datas",arrSt,50)
		
		
	})
	
	$('.del_all').click(function(){
		
		
		
			
					listObj.splice(0,listObj.length)
					 $('.price_total_text').html(0)
					 $('.totle_text:eq(1)').html(0)
					 
		
		$('#tbody tr').remove()
		var arrSt=JSON.stringify(listObj)
setCookie("datas",arrSt,50)
		
		
	})
	
	
	
	
})



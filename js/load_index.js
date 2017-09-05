$(function(){
//获取购物车cookie	
	var get=getCookie("datas")
	if(get==undefined){
//没有购物车cookie时，设置为[]  包着里面内容		
setCookie("datas","[]",50)
//重新设置cookie
get=getCookie("datas")
}
//更新商品数量总数	
	$('.shoppingCar_pcount').html(getTotal())
//当有地址cookie是   中间地址框消失	
	if(checkCookie("address")){
		$('#mask_box').css("display","none")
    	$('#mask_layer').css("display","none")
    	
	}

	
//设置4个数组
//第一个数组商品原价 -  会员价    在10~15之间的
//第二个数组为商品原价 -  会员价  大于20
//第三个数组只有肉类
//第四个数组为全部数据
	var arr_first=[]
	var arr_second=[]
	var arr_third=[]
	var arr_four=[]

//循环所有肉类
	$.each(list_food.meat,function(i,ele){
		var k=list_food.meat[i].data
		$.each(k,function(i,ele){
			arr_third.push(k[i])
			arr_four.push(k[i])
			var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
//判断 商品原价 -  会员价		
			if(x>=10&&x<=15){
				
				arr_first.push(k[i])
				
			}
			if(x>20){
				arr_second.push(k[i])
			}
		})
	})

//循环所有海鲜
	$.each(list_food.seafood,function(i,ele){
		var k=list_food.seafood[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				arr_four.push(k[i])
//判断 商品原价 -  会员价						
			if(x>=10&&x<=15){
				arr_first.push(k[i])
				
			}
			if(x>20){
				arr_second.push(k[i])
			}
		})
	})
	
//循环所有零食
	$.each(list_food.snacks,function(i,ele){
		var k=list_food.snacks[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				arr_four.push(k[i])
				
			if(x>=10&&x<=15){
				arr_first.push(k[i])
				
			}
			if(x>20){
				arr_second.push(k[i])
			}
		})
	})

//循环所有牛奶
	$.each(list_food.milk,function(i,ele){
		var k=list_food.milk[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				arr_four.push(k[i])
				
			if(x>=10&&x<=15){
				arr_first.push(k[i])
				
			}
			if(x>20){
				arr_second.push(k[i])
			}
		})
	})
//循环所有茶饮	
	$.each(list_food.tea,function(i,ele){
		var k=list_food.tea[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				arr_four.push(k[i])
			
			if(x>=10&&x<=15){
				arr_first.push(k[i])
				
			}
			if(x>20){
				arr_second.push(k[i])
			}
		})
	})
//循环所有酒类	
	$.each(list_food.wine,function(i,ele){
		var k=list_food.wine[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				arr_four.push(k[i])
			
			if(x>=10&&x<=15){
				arr_first.push(k[i])
				
			}
			if(x>20){
				arr_second.push(k[i])
			}
		})
	})
//循环所有水果蔬菜	
	$.each(list_fruit.kind,function(i,ele){
		var k=list_fruit.kind[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				arr_four.push(k[i])
				
			if(x>=10&&x<=15){
				arr_first.push(k[i])
				
			}
			if(x>20){
				arr_second.push(k[i])
			}
		})
	})
//循环所有干货和油类	
	$.each(list_grain.kind,function(i,ele){
		var k=list_grain.kind[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				arr_four.push(k[i])
			
			if(x>=10&&x<=15){
				arr_first.push(k[i])
				
			}
			if(x>20){
				arr_second.push(k[i])
			}
		})
	})
	
	
	var str_first=""
     var str_second=""
      

//加载   优惠数据
	$.each(arr_first,function(i,ele){
			str_first+='<li pid="'+arr_first[i].id +'" weight="'+arr_first[i].weight+'">'
						+'<a class="f15 index_per_text new_html" href="javascript:void(0)" title="'+arr_first[i].name+'">'+arr_first[i].name+'</a>'
						+'<span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+arr_first[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+arr_first[i].vipPrice+'</span>'
					
						+'<a href="javascript:void(0)" class="index_per_shoppongCar new_html">	<img src="'+arr_first[i].src+'" title="'+arr_first[i].name+'"/>'
						
						+'  <a class="shoppingCar " href="javascript:void(0)" >'
						 + '	<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 +' </a>'
						+'</a>'
					
					+'</li>'	
	})
	$('#index_per_first').append(str_first)

//加载限时区域数据
	$.each(arr_second,function(i,ele){
	
			str_second+='<li pid="'+arr_second[i].id +'" weight="'+arr_second[i].weight+'">'
					+'<a href="javascript:void(0)" class="new_html">'
									+'<img src="'+arr_second[i].src+'" title="'+arr_second[i].name+'"/>'
								+'</a>'
								+'<a href="javascript:void(0)" class="f14 index_time_imgTitle new_html" style="display: inline-block;height: 18px;overflow: hidden;">'+arr_second[i].name+'</a>'
								+'<span class="f14" style="color: #f33f00;font-weight: bold;">'+arr_second[i].price+'</span><br />'
								+'<span class="f14">会员价</span>&nbsp;<span class="f14" style="color: #f33f00;font-weight: bold;">'+arr_second[i].vipPrice+'</span><br />'
								+'<button class="qianggou" >抢购</button>'
					
					+'</li>'

	})
	$('.index_time_bottom ul').append(str_second)
	
	var str_product_first=""
	var str_product_second=""

//加载水果数据
	$.each(list_fruit.kind[0].data,function(i,ele){
//加载前4个		
	  if(i>3){
	  	return false;
	  }
//判断是否有会员价	  
	  if(list_fruit.kind[0].data[i].vipPrice==""){
	  	str_product_first+='<dl class="product_first" pid="'+list_fruit.kind[0].data[i].id +'" weight="'+list_fruit.kind[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_fruit.kind[0].data[i].src+'" title="'+list_fruit.kind[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_fruit.kind[0].data[i].name+'">'+list_fruit.kind[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_fruit.kind[0].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }
//有会员价时：	  
	  else{
	  	str_product_first+='<dl class="product_first" pid="'+list_fruit.kind[0].data[i].id +'" weight="'+list_fruit.kind[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_fruit.kind[0].data[i].src+'" title="'+list_fruit.kind[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_fruit.kind[0].data[i].name+'">'+list_fruit.kind[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_fruit.kind[0].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_fruit.kind[0].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	  
		
	})
	
//加载蔬菜数据	
	$.each(list_fruit.kind[1].data,function(i,ele){
//加载前4个			
	  if(i>3){
	  	return false;
	  }
//判断是否有会员价	  
	  if(list_fruit.kind[1].data[i].vipPrice==""){
	  	str_product_first+='<dl class="product_first" pid="'+list_fruit.kind[1].data[i].id +'" weight="'+list_fruit.kind[1].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_fruit.kind[1].data[i].src+'" title="'+list_fruit.kind[1].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_fruit.kind[1].data[i].name+'">'+list_fruit.kind[1].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_fruit.kind[1].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }
//有会员价时：	  
	  else{
	  	str_product_first+='<dl class="product_first" pid="'+list_fruit.kind[1].data[i].id +'" weight="'+list_fruit.kind[1].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_fruit.kind[1].data[i].src+'" title="'+list_fruit.kind[1].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_fruit.kind[1].data[i].name+'">'+list_fruit.kind[1].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_fruit.kind[1].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_fruit.kind[1].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	  
		
	})
	$('#product_fruit .product_type_mid_img').append(str_product_first)
	
	$.each(list_food.meat[0].data,function(i,ele){
	  if(i>3){
	  	return false;
	  }
	  if(list_food.meat[0].data[i].vipPrice==""){
	  	str_product_second+='<dl class="product_first" pid="'+list_food.meat[0].data[i].id +'" weight="'+list_food.meat[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.meat[0].data[i].src+'" title="'+list_food.meat[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.meat[0].data[i].name+'">'+list_food.meat[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.meat[0].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }else{
	  	str_product_second+='<dl class="product_first" pid="'+list_food.meat[0].data[i].id +'"  weight="'+list_food.meat[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.meat[0].data[i].src+'" title="'+list_food.meat[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.meat[0].data[i].name+'">'+list_food.meat[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.meat[0].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_food.meat[0].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	  
		
	})
	$.each(list_food.seafood[1].data,function(i,ele){
	  if(i>3){
	  	return false;
	  }
	  if(list_food.seafood[1].data[i].vipPrice==""){
	  	str_product_second+='<dl class="product_first" pid="'+list_food.seafood[1].data[i].id +'" weight="'+list_food.seafood[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.seafood[1].data[i].src+'" title="'+list_food.seafood[1].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.seafood[1].data[i].name+'">'+list_food.seafood[1].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.seafood[1].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }else{
	  	str_product_second+='<dl class="product_first" pid="'+list_food.seafood[1].data[i].id +'" weight="'+list_food.seafood[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.seafood[1].data[i].src+'" title="'+list_food.seafood[1].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.seafood[1].data[i].name+'">'+list_food.seafood[1].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.seafood[1].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_food.seafood[1].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	  
		
	})
	$('#product_meat .product_type_mid_img').append(str_product_second)
	var str_product_third=""
	$.each(arr_first,function(i,ele){
		
		str_product_third+='<dl class="product_first" pid="'+arr_first[i].id +'" weight="'+arr_first[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+arr_first[i].src+'" title="'+arr_first[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail"	style="color: #666666;" title="'+arr_first[i].name+'">'+arr_first[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+arr_first[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+arr_first[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
		
	})
	$('#product_milk .product_type_mid_img').append(str_product_third)
	var str_product_fourth=""
	$.each(list_grain.kind[0].data,function(i,ele){
	  if(i>3){
	  	return false;
	  }
	  if(list_grain.kind[0].data[i].vipPrice==""){
	  	str_product_fourth+='<dl class="product_first" pid="'+list_grain.kind[0].data[i].id +'"  weight="'+list_grain.kind[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_grain.kind[0].data[i].src+'" title="'+list_grain.kind[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_grain.kind[0].data[i].name+'">'+list_grain.kind[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_grain.kind[0].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }else{
	  	str_product_fourth+='<dl class="product_first" pid="'+list_grain.kind[0].data[i].id +'" "  weight="'+list_grain.kind[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_grain.kind[0].data[i].src+'" title="'+list_grain.kind[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_grain.kind[0].data[i].name+'">'+list_grain.kind[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_grain.kind[0].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_grain.kind[0].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	  
		
	})
	$.each(list_grain.kind[1].data,function(i,ele){
	  
	  if(list_grain.kind[1].data[i].vipPrice==""){
	  	str_product_fourth+='<dl class="product_first" pid="'+list_grain.kind[1].data[i].id +'" "  weight="'+list_grain.kind[1].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_grain.kind[1].data[i].src+'" title="'+list_grain.kind[1].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_grain.kind[1].data[i].name+'">'+list_grain.kind[1].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_grain.kind[1].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }else{
	  	str_product_first+='<dl class="product_first" pid="'+list_grain.kind[1].data[i].id +'" "  weight="'+list_grain.kind[1].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_grain.kind[1].data[i].src+'" title="'+list_grain.kind[1].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_grain.kind[1].data[i].name+'">'+list_grain.kind[1].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_grain.kind[1].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_grain.kind[1].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	  
		
	})
	$('#product_grain .product_type_mid_img').append(str_product_fourth)
	var str_product_fifth=""
	$.each(list_food.snacks[0].data, function(i,ele) {
		 if(list_food.snacks[0].data[i].vipPrice==""){
	  	str_product_fifth+='<dl class="product_first" pid="'+list_food.snacks[0].data[i].id +'" weight="'+list_food.snacks[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.snacks[0].data[i].src+'" title="'+list_food.snacks[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.snacks[0].data[i].name+'">'+list_food.snacks[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.snacks[0].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }else{
	  	str_product_fifth+='<dl class="product_first" pid="'+list_food.snacks[0].data[i].id +'" weight="'+list_food.snacks[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.snacks[0].data[i].src+'" title="'+list_food.snacks[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.snacks[0].data[i].name+'">'+list_food.snacks[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.snacks[0].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_food.snacks[0].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	});
	$('#product_snacks .product_type_mid_img').append(str_product_fifth)
		var str_product_sixth=""
	$.each(list_food.milk[0].data, function(i,ele) {
		 if(list_food.milk[0].data[i].vipPrice==""){
	  	str_product_sixth+='<dl class="product_first" pid="'+list_food.milk[0].data[i].id +'" weight="'+list_food.milk[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.milk[0].data[i].src+'" title="'+list_food.milk[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.milk[0].data[i].name+'">'+list_food.milk[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.milk[0].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }else{
	  	str_product_sixth+='<dl class="product_first" pid="'+list_food.milk[0].data[i].id +'" weight="'+list_food.milk[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.milk[0].data[i].src+'" title="'+list_food.milk[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.milk[0].data[i].name+'">'+list_food.milk[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.milk[0].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_food.milk[0].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	});
	$.each(list_food.tea[0].data, function(i,ele) {
		 if(list_food.tea[0].data[i].vipPrice==""){
	  	str_product_sixth+='<dl class="product_first" pid="'+list_food.tea[0].data[i].id +'" weight="'+list_food.tea[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.tea[0].data[i].src+'" title="'+list_food.tea[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.tea[0].data[i].name+'">'+list_food.tea[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.tea[0].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }else{
	  	str_product_sixth+='<dl class="product_first" pid="'+list_food.tea[0].data[i].id +'" weight="'+list_food.tea[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.tea[0].data[i].src+'" title="'+list_food.tea[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.tea[0].data[i].name+'">'+list_food.tea[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.tea[0].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_food.tea[0].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	});
	
	$('#product_drink .product_type_mid_img').append(str_product_sixth)
	  var str_product_seventh="";
     $.each(list_food.tea[0].data, function(i,ele) {
		 if(list_food.tea[0].data[i].vipPrice==""){
	  	str_product_seventh+='<dl class="product_first" pid="'+list_food.tea[0].data[i].id +'" weight="'+list_food.tea[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.tea[0].data[i].src+'" title="'+list_food.tea[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.tea[0].data[i].name+'">'+list_food.tea[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.tea[0].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }else{
	  	str_product_seventh+='<dl class="product_first" pid="'+list_food.tea[0].data[i].id +'" weight="'+list_food.tea[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.tea[0].data[i].src+'" title="'+list_food.tea[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.tea[0].data[i].name+'">'+list_food.tea[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.tea[0].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_food.tea[0].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	});
	 $.each(list_food.wine[0].data, function(i,ele) {
		 if(list_food.wine[0].data[i].vipPrice==""){
	  	str_product_seventh+='<dl class="product_first" pid="'+list_food.wine[0].data[i].id +'" weight="'+list_food.wine[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.wine[0].data[i].src+'" title="'+list_food.wine[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.wine[0].data[i].name+'">'+list_food.wine[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.wine[0].data[i].price+'</span>'
								+'</dd>'
							+'</dl>'
	  }else{
	  	str_product_seventh+='<dl class="product_first" pid="'+list_food.wine[0].data[i].id +'" weight="'+list_food.wine[0].data[i].weight+'">'
		          +'<dt>'
								+'<a href="javascript:void(0)" class="product_imgBox new_detail">'
									+'<img src="'+list_food.wine[0].data[i].src+'" title="'+list_food.wine[0].data[i].name+'">'
									+'</a>'
									+'<div class="shoppingCar_product" >'
						+'<img src="img/QQ图片20170703110227.png"><span class="f14" style="color: white;margin-left: 55px;line-height: 24px;">加入购物车</span>'
						 
						+ '</div>' 
						+' </dt>'
		                +'<dd>'
								
								+'<a href="javascript:void(0)" class="new_detail" style="color: #666666;" title="'+list_food.wine[0].data[i].name+'">'+list_food.wine[0].data[i].name
								+'</a></dd>'
								+'<dd><span class="f13" style="color: #f33f00;">￥</span><span class="f15" style="color: #f33f00;">'+list_food.wine[0].data[i].price+'</span><span style="margin-left: 12px;">会员价</span><span style="color: #f43f00;">￥</span><span class="f15" style="color: #f43f00;">'+list_food.wine[0].data[i].vipPrice+'</span>'
								+'</dd>'
							+'</dl>'
	  	
	  }
	});
	$('#product_wine .product_type_mid_img').append(str_product_seventh)
	var str_address_huadong=""
	var str_address_huanan=""
	var str_address_huabei=""
	var str_address_huazhong=""
	var str_address_dongbei=""
	var str_address_xinan=""
	var str_address_xibei=""
   $.each(list_address.huadong,function(i,ele){
   	
   	str_address_huadong+='<li><a href="javascript:void(0)">'+list_address.huadong[i] +'</a></li>'
								
   	
   })
  
    $.each(list_address.huanan,function(i,ele){
   	
   	str_address_huanan+='<li><a href="javascript:void(0)">'+list_address.huanan[i] +'</a></li>'
								
   	
   })
    $.each(list_address.huabei,function(i,ele){
   	
   	str_address_huabei+='<li><a href="javascript:void(0)">'+list_address.huabei[i] +'</a></li>'
								
   	
   })
    $.each(list_address.huazhong,function(i,ele){
   	
   	str_address_huazhong+='<li><a href="javascript:void(0)">'+list_address.huazhong[i] +'</a></li>'
								
   	
   })
    $.each(list_address.dongbei,function(i,ele){
   	
   	str_address_dongbei+='<li><a href="javascript:void(0)">'+list_address.dongbei[i] +'</a></li>'
								
   	
   })
    $.each(list_address.xinan,function(i,ele){
   	
   	str_address_xinan+='<li><a href="javascript:void(0)">'+list_address.xinan[i] +'</a></li>'
								
   	
   })
    $.each(list_address.xibei,function(i,ele){
   	
   	str_address_xibei+='<li><a href="javascript:void(0)">'+list_address.xibei[i] +'</a></li>'
								
   	
   })
    
    
    
   $('#mask_box .huadong ul').append(str_address_huadong)
   $('#mask_box .huanan ul').append(str_address_huanan)
    $('#mask_box .huabei ul').append(str_address_huabei)
    $('#mask_box .huazhong ul').append(str_address_huazhong)
     $('#mask_box .dongbei ul').append(str_address_dongbei)
      $('#mask_box .xinan ul').append(str_address_xinan)
       $('#mask_box .xibei ul').append(str_address_xibei)
    
    
    
    
   
   $('.address_right li ul li a').toggle(function(){
   		var li_index= $(this).parent().parent().parent().index()
   		if($('.creat_ul')){
   			 $('.creat_sanjiao2').remove()
			 $('.creat_sanjiao1').remove()
   			$('.address_right li ul li a').css({"background":"white","color":"black"})
   			$('#mask_box').css("height","360px")
   				$('#mask_box .mask_box_bottom').css("height","254px")
   			$('.creat_ul').parent().css("height","35px")
   			var lis_index=$('.creat_ul').parent().index()
   	     $('.address_left li').eq(lis_index).css("height","35px")
   			 	$('.creat_ul').remove();
   			 	
   		}
   			$(this).parent().parent().parent().append('<ul class="creat_ul"></ul>')
     $('.creat_ul').append('<div class="creat_sanjiao1"></div><div class="creat_sanjiao2"></div>')
      var k=$(this).parent().offset().left
      var t=$(this).parent().offset().top
      
     $('.creat_sanjiao1').css({"left":k-458,"top":"-16px"})
     $('.creat_sanjiao2').css({"left":k-457,"top":"-14px"})
    
   
   
		 var str_ul=""
		 
		 var that=$(this)

	  $.each(list_address.huadong, function(i,ele) {
		  	if(list_address.huadong[i]==that.html()){
	  		$.each(list_address.huadongshi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.huadongshi[i][j]+'</a></li>'
	  		})
	  	}
		  });
		  $.each(list_address.huanan, function(i,ele) {
		  	if(list_address.huanan[i]==that.html()){
	  		$.each(list_address.huananshi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.huananshi[i][j]+'</a></li>'
	  		})
	  	}
		  });
		  $.each(list_address.huabei, function(i,ele) {
		  	if(list_address.huabei[i]==that.html()){
	  		$.each(list_address.huabeishi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.huabeishi[i][j]+'</a></li>'
	  		})
	  	}
		  });
		  $.each(list_address.huazhong, function(i,ele) {
		  	if(list_address.huazhong[i]==that.html()){
	  		$.each(list_address.huazhongshi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.huazhongshi[i][j]+'</a></li>'
	  		})
	  	}
		  });
		  $.each(list_address.xibei, function(i,ele) {
		  	if(list_address.xibei[i]==that.html()){
	  		$.each(list_address.xibeishi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.xibeishi[i][j]+'</a></li>'
	  		})
	  	}
		  });
		  $.each(list_address.dongbei, function(i,ele) {
		  	if(list_address.dongbei[i]==that.html()){
	  		$.each(list_address.dongbeishi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.dongbeishi[i][j]+'</a></li>'
	  		})
	  	}
		  });
		  $.each(list_address.xinan, function(i,ele) {
		  	if(list_address.xinan[i]==that.html()){
	  		$.each(list_address.xinanshi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.xinanshi[i][j]+'</a></li>'
	  		})
	  	}
		  });
		  
		  
		$('.creat_ul').append(str_ul)
		var ul_h=$('.creat_ul').innerHeight()
	
		
		$(this).css({"background":"#69c002","color":"white"})
		$('#mask_box').css("height",360+ul_h)
		$('#mask_box .mask_box_bottom').css("height",254+ul_h)
		$(this).parent().parent().parent().css("height",35+ul_h)
		$('.address_left li').eq(li_index).css("height",35+ul_h)
		
		 $('.creat_ul .creat_li a').click(function(){
    	$('#mask_box').css("display","none")
    	$('#mask_layer').css("display","none")
   	  $('.creat_ul').remove()
   	  var a_value=$(this).html()
   	  setCookie("address",a_value,1000)
   	  var x=getCookie("address")
    
    	
    	$('.header_top_address .address_text').html(x)
   })
	},function(){
		if($('.creat_ul')){
			 $('.creat_sanjiao2').remove()
			 $('.creat_sanjiao1').remove()
			$('.address_right li ul li a').css({"background":"white","color":"black"})
   			$('#mask_box').css("height","360px")
   				$('#mask_box .mask_box_bottom').css("height","254px")
   			$('.creat_ul').parent().css("height","35px")
   			var lis_index=$('.creat_ul').parent().index()
   	     $('.address_left li').eq(lis_index).css("height","35px")
   			 	$('.creat_ul').remove();
   			 	
   		}

	}
   )
   var str_scroll=""
   $.each(arr_four, function(i,ele) {
   	str_scroll+='<div class="scroll">'
							+'<a href="javascript:void(0)"><img src="'+arr_four[i].src+'" class="scroll_img"></a>'
							+'<a href="javascript:void(0)" class="scroll_top">'+arr_four[i].name+'</a>'
							+'<a href="javascript:void(0)" class="scroll_bottom">很好吃</a>'
							+'</div>'
   });
   
  $('.index_bottom_wrap').append(str_scroll)
  var t=0
 var clone_scroll=$(".index_bottom_wrap div").first().clone();
 var clone_scrollsecond=$(".index_bottom_wrap div").first().next('.scroll').clone();
 $(".index_bottom_wrap").append(clone_scroll);
 $(".index_bottom_wrap").append(clone_scrollsecond)
  var scroll_size = $(".index_bottom_wrap div").size();
  var timer2=setInterval(function(){
 change_scroll()
 },2000);
 
  $(".index_bottom_scroll").hover(function(){
  clearInterval(timer2);
 },function(){
  timer2=setInterval(change_scroll,2000);
 })
  
  
  function change_scroll(){
				 t+=2
		   	move_scroll()
			}
  
  
  function move_scroll(){
  if(t>scroll_size){
   $(".index_bottom_wrap").css({top:0});
   t=1;
  }
  if(t==-1){
   $(".index_bottom_wrap").css({top:-(scroll_size-1)*81});
   t=scroll_size-2;
  }
 
  $(".index_bottom_wrap").stop().animate({top:-t*81},500);
 
  
 }
$(".index_bottom_toggle").click(function(){
	var x=Math.floor(Math.random()*arr_four.length)
	var y=Math.floor(Math.random()*arr_four.length)
	var k=Math.floor(Math.random()*arr_four.length)
	var z=Math.floor(Math.random()*arr_four.length)
	
	$('.index_bottom_right_img:eq(0) img').attr("src",arr_four[x].src)
	$('.index_bottom_right_img:eq(0) .index_bottom_right_img_cover').html(arr_four[x].name+"<br />☞97%")
	$('.index_bottom_right_img:eq(1) img').attr("src",arr_four[y].src)
	$('.index_bottom_right_img:eq(1) .index_bottom_right_img_cover').html(arr_four[y].name+"<br />☞97%")
	$('.index_bottom_right_img:eq(2) img').attr("src",arr_four[k].src)
	$('.index_bottom_right_img:eq(2) .index_bottom_right_img_cover').html(arr_four[k].name+"<br />☞97%")
	$('.index_bottom_right_img:eq(3) img').attr("src",arr_four[z].src)
	$('.index_bottom_right_img:eq(3) .index_bottom_right_img_cover').html(arr_four[z].name+"<br />☞97%")
})

$('.index_bottom_right input').focus(function(){
	$(this).removeAttr("placeholder")
})
$('.index_bottom_right input').blur(function(){
				if(!$(this).value){
					$(this).attr("placeholder","请填写邮箱订阅促销")
				}
			})

$('.shoppingCar').click(function(e){
	var clone_img=$(this).prev().clone()
	var x=$(this).parent().offset().left+85
	var y=$(this).parent().offset().top+250
	clone_img.addClass('creat_img')
	$("body").append(clone_img)
	var fix_x=$('.fix_box_second').offset().left
	var fix_y=$('.fix_box_second').offset().top
	$('.creat_img').css({"top":y,"left":x})
	$('.creat_img').animate({"top":y-100},500).animate({"top":fix_y-20,"left":fix_x-20},1000).fadeOut(150)
	var lis=$(this).parent()
	var pid=lis.attr("pid")
	var pdes=lis.children("a:eq(0)").html()
	var price=lis.children("span:eq(1)").html()
	var imgSrc=lis.children(".index_per_shoppongCar").children().attr("src")
	var weight=lis.attr("weight")
	  if(checkup(pid)){
    updateNum(pid,1)
 
    }else{
    	  var json={
    	 weight:weight,
    	pid:pid,
    	imgSrc:imgSrc,
    	pdes:pdes,
    	price:price,
    	pcount:1
    }
   var get=getCookie("datas")
  var getcookie=JSON.parse(get)

   getcookie.push(json)
   var mycookie=JSON.stringify(getcookie)
   setCookie("datas",mycookie,50)
var arr_cookie=getAll()
	if(arr_cookie.length>0){
		console.log(arr_cookie)
	  $('.shoppingCar_div').hover(function(){
				$('.shoppingCar_goods').hide()
		$('.shoppingCar_box_detail').show()
		},function(){
			$('.shoppingCar_box_detail').hide()
		})
		var str=""
		var str_weight=""
		var str_price=""
		$.each(arr_cookie,function(i){
			str+='<li pid="'+arr_cookie[i].pid+'">'
									+'<a href="javascript:void"><img src="'+arr_cookie[i].imgSrc+'"></a>'
									+'<a href="javascript:void(0)" class="shoppingCar_box_detail_text">'+arr_cookie[i].pdes+'</a><span class="shoppingCar_box_detail_text_color">¥</span><span class="shoppingCar_box_detail_text_color" style="margin-right: 2px;">'+arr_cookie[i].price+'</span><span>X</span><span>'+arr_cookie[i].pcount+'</span>'
									+'<span class="shoppingCar_box_detail_weight">'+arr_cookie[i].weight+'kg</span><a href="javascript:void(0)" class="del_detail">删除</a>'
							+'</li>'
			str_weight=	Math.round(arr_cookie[i].weight*arr_cookie[i].pcount*1000)/1000
			str_price=Math.round(arr_cookie[i].price*arr_cookie[i].pcount*100)/100
		})
		$('.shoppingCar_box_detail_box').append(str)
		$('.pcount_detail').html(getTotal())
		$('.price_total_total').html(str_price)
		$('.weight_detail').html(str_weight)
	}
    }
   $('.shoppingCar_pcount').html(getTotal())
	$('.shoppingCar_num').html(getTotal())	
})

$('.qianggou').click(function(e){
	var clone_img=$(this).parent().children("a:eq(0)").children().clone()
	var x=$(this).parent().offset().left+85
	var y=$(this).parent().offset().top+250
	clone_img.addClass('creat_img')
	$("body").append(clone_img)
	var fix_x=$('.fix_box_second').offset().left
	var fix_y=$('.fix_box_second').offset().top
	$('.creat_img').css({"top":y,"left":x})
	$('.creat_img').animate({"top":y-100},500).animate({"top":fix_y-20,"left":fix_x-20},1000).fadeOut(150)
	var lis=$(this).parent()
	var pid=lis.attr("pid")
	var imgSrc=lis.children("a:eq(0)").children().attr("src")
	var pdes=lis.children("a:eq(1)").html()
	var price=lis.children("span:eq(0)").html()
	var weight=lis.attr("weight")
	if(checkup(pid)){
    updateNum(pid,1)
 
    }else{
    	  var json={
    	weight:weight,
    	pid:pid,
    	imgSrc:imgSrc,
    	pdes:pdes,
    	price:price,
    	pcount:1
    }
   var get=getCookie("datas")
  var getcookie=JSON.parse(get)
  
   getcookie.push(json)
   var mycookie=JSON.stringify(getcookie)
   setCookie("datas",mycookie,50)
 var arr_cookie=getAll()
	if(arr_cookie.length>0){
		console.log(arr_cookie)
	  $('.shoppingCar_div').hover(function(){
				$('.shoppingCar_goods').hide()
		$('.shoppingCar_box_detail').show()
		},function(){
			$('.shoppingCar_box_detail').hide()
		})
		var str=""
		var str_weight=""
		var str_price=""
		$.each(arr_cookie,function(i){
			str+='<li pid="'+arr_cookie[i].pid+'">'
									+'<a href="javascript:void"><img src="'+arr_cookie[i].imgSrc+'"></a>'
									+'<a href="javascript:void(0)" class="shoppingCar_box_detail_text">'+arr_cookie[i].pdes+'</a><span class="shoppingCar_box_detail_text_color">¥</span><span class="shoppingCar_box_detail_text_color" style="margin-right: 2px;">'+arr_cookie[i].price+'</span><span>X</span><span>'+arr_cookie[i].pcount+'</span>'
									+'<span class="shoppingCar_box_detail_weight">'+arr_cookie[i].weight+'kg</span><a href="javascript:void(0)" class="del_detail">删除</a>'
							+'</li>'
			str_weight=	Math.round(arr_cookie[i].weight*arr_cookie[i].pcount*1000)/1000
			str_price=Math.round(arr_cookie[i].price*arr_cookie[i].pcount*100)/100
		})
		$('.shoppingCar_box_detail_box').append(str)
		$('.pcount_detail').html(getTotal())
		$('.price_total_total').html(str_price)
		$('.weight_detail').html(str_weight)
		
		
	}
    }
   $('.shoppingCar_pcount').html(getTotal())
	$('.shoppingCar_num').html(getTotal())	

})

$('.shoppingCar_product').click(function(e){
	var clone_img=$(this).prev().clone()
	var x=$(this).parent().offset().left+85
	var y=$(this).parent().offset().top+250
	clone_img.addClass('creat_img')
	$("body").append(clone_img)
	var fix_x=$('.fix_box_second').offset().left
	var fix_y=$('.fix_box_second').offset().top
	$('.creat_img').css({"top":y,"left":x})
	$('.creat_img').animate({"top":y-100},500).animate({"top":fix_y-20,"left":fix_x-20},1000).fadeOut(150)
	var dls=$(this).parent().parent()
	var pid=dls.attr("pid")
	var imgSrc=$(this).prev().children().attr("src")
	var pdes=dls.children("dd:eq(0)").children().html()
	var price=dls.children("dd:eq(1)").children("span:eq(1)").html()
	var weight=dls.attr("weight")
	if(checkup(pid)){
    updateNum(pid,1)
 
    }else{
    	  var json={
    	weight:weight,
    	pid:pid,
    	imgSrc:imgSrc,
    	pdes:pdes,
    	price:price,
    	pcount:1
    }
   var get=getCookie("datas")
  var getcookie=JSON.parse(get)
  
   getcookie.push(json)
   var mycookie=JSON.stringify(getcookie)
   setCookie("datas",mycookie,50)
 var arr_cookie=getAll()
	if(arr_cookie.length>0){
		console.log(arr_cookie)
	  $('.shoppingCar_div').hover(function(){
				$('.shoppingCar_goods').hide()
		$('.shoppingCar_box_detail').show()
		},function(){
			$('.shoppingCar_box_detail').hide()
		})
		var str=""
		var str_weight=""
		var str_price=""
		$.each(arr_cookie,function(i){
			str+='<li pid="'+arr_cookie[i].pid+'">'
									+'<a href="javascript:void"><img src="'+arr_cookie[i].imgSrc+'"></a>'
									+'<a href="javascript:void(0)" class="shoppingCar_box_detail_text">'+arr_cookie[i].pdes+'</a><span class="shoppingCar_box_detail_text_color">¥</span><span class="shoppingCar_box_detail_text_color" style="margin-right: 2px;">'+arr_cookie[i].price+'</span><span>X</span><span>'+arr_cookie[i].pcount+'</span>'
									+'<span class="shoppingCar_box_detail_weight">'+arr_cookie[i].weight+'kg</span><a href="javascript:void(0)" class="del_detail">删除</a>'
							+'</li>'
			str_weight=	Math.round(arr_cookie[i].weight*arr_cookie[i].pcount*1000)/1000
			str_price=Math.round(arr_cookie[i].price*arr_cookie[i].pcount*100)/100
		})
		$('.shoppingCar_box_detail_box').append(str)
		$('.pcount_detail').html(getTotal())
		$('.price_total_total').html(str_price)
		$('.weight_detail').html(str_weight)
		
		
	}
    }
   $('.shoppingCar_pcount').html(getTotal())
	$('.shoppingCar_num').html(getTotal())	

})
//把id传到？号后面
$('.new_html').click(function(){
	window.location.href="goods_detail.html?"+$(this).parent().attr("pid")
})
//把id传到？号后面
$('.new_detail').click(function(){
	window.location.href="goods_detail.html?"+$(this).parent().parent().attr("pid")
})

})


$(function(){
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
	$('.del_detail').click(function(){
		var pid=$(this).parent().attr("pid")
		$.each(arr_cookie, function(i) {
			if(pid==arr_cookie[i].pid){
			arr_cookie.splice(i,1)	
			return false;
			}
		});
		
		var arrSt=JSON.stringify(arr_cookie)
         setCookie("datas",arrSt,50)
		$(this).parent().remove()
		
		$('.shoppingCar_pcount').html(getTotal())
	$('.shoppingCar_num').html(getTotal())	
		
	})
	
	
//显示购物车里面物品数量	
	$('.shoppingCar_num').html(getTotal())	
//我的优选 2级菜单样式	
			$('.header_top_nav_first').mouseover(function(){
				$('.header_top_nav_first').css("color","#669900")
			})
			$('.header_top_nav_first').mouseout(function(){
				$('.header_top_nav_first').css("color","#969696")
			})

//帮助中心 2级菜单样式
				$('.header_top_help_first').mouseover(function(){
				$('.header_top_help_first').css("color","#669900")
				
			})
			$('.header_top_help_first').mouseout(function(){
				$('.header_top_help_first').css("color","#969696")
			})

//3级导航 关闭按钮
            $('.header_goods_box_close').click(function(){
            	$(this).parent().css("display","none")
            })
 //3级导航出现与消失           
            $('.header_goods_box li').hover(function(){
            	$(this).children('ul.header_goods_box_list').css("display","block")
            },function(){
            	$(this).children('ul.header_goods_box_list').css("display","none")
            }
            )
            
//输入框获取焦点 文字消失            
			$('#inp_first').focus(function(){
				$(this).removeAttr("placeholder")
				
			})
//输入框失去焦点时  如果没输入内容 文字再次出现  			
			$('#inp_first').blur(function(){
				if(!$(this).value){
					$(this).attr("placeholder","小龙虾")
				}
			})
			
			
 //关闭地址框			
			$('.mask_box_img').click(function(){
				$('.address_box').css("display","none")

			})
			
//悬浮   地址框出现与消失			
			$('.header_top_address').hover(function(){
				
				$('.address_box').css("display","block")
			},function(){
					$('.address_box').css("display","none")
			}
			)
			
//获取地址Cookie			
			if(checkCookie("address")){
		
    	var x=getCookie("address")
   
 //让地址小框出现地址   	
    	$('.header_top_address .address_text').html(x)
    
	}
	
		var str_huadong=""
	var str_huanan=""
	var str_huabei=""
	var str_huazhong=""
	var str_dongbei=""
	var str_xinan=""
	var str_xibei=""
//生成华东地区省份	
   $.each(list_address.huadong,function(i,ele){
   	
   	str_huadong+='<li><a href="javascript:void(0)">'+list_address.huadong[i] +'</a></li>'
								
   	
   })
  //生成华南地区省份	
    $.each(list_address.huanan,function(i,ele){
   	
   	str_huanan+='<li><a href="javascript:void(0)">'+list_address.huanan[i] +'</a></li>'
								
   	
   })
    //生成华北地区省份	
    $.each(list_address.huabei,function(i,ele){
   	
   	str_huabei+='<li><a href="javascript:void(0)">'+list_address.huabei[i] +'</a></li>'
								
   	
   })
    //生成华中地区省份	
    $.each(list_address.huazhong,function(i,ele){
   	
   	str_huazhong+='<li><a href="javascript:void(0)">'+list_address.huazhong[i] +'</a></li>'
								
   	
   })
    //生成东北地区省份	
    $.each(list_address.dongbei,function(i,ele){
   	
   	str_dongbei+='<li><a href="javascript:void(0)">'+list_address.dongbei[i] +'</a></li>'
								
   	
   })
    //生成西南地区省份	
    $.each(list_address.xinan,function(i,ele){
   	
   	str_xinan+='<li><a href="javascript:void(0)">'+list_address.xinan[i] +'</a></li>'
								
   	
   })
    //生成西北地区省份	
    $.each(list_address.xibei,function(i,ele){
   	
   	str_xibei+='<li><a href="javascript:void(0)">'+list_address.xibei[i] +'</a></li>'
								
   	
   })
    
    
    
   $('.address_box  .huadong ul').append(str_huadong)
   $('.address_box  .huanan ul').append(str_huanan)
    $('.address_box  .huabei ul').append(str_huabei)
    $('.address_box  .huazhong ul').append(str_huazhong)
     $('.address_box  .dongbei ul').append(str_dongbei)
      $('.address_box  .xinan ul').append(str_xinan)
       $('.address_box  .xibei ul').append(str_xibei)
    
    
    
    
//点击省份  
   $('.address_box .address_region li ul li a').toggle(function(){
   	$('.address_box').css("display","block")
   		var li_index= $(this).parent().parent().parent().index()
 //判断是否存在已经生成的ul元素  		
   		if($('.creat_ul')){
 //如果有把全部样式改成原来的效果  			
   			$('.address_box .address_region li ul li a').css({"background":"white","color":"black"})
//把生成的三角形删除 			
   			 $('.creat_sanjiao2').remove()
			 $('.creat_sanjiao1').remove()
			 
   			$('.address_box').css("height","441px")
   				$('.address_box .mask_box_bottom').css("height","175px")
   			$('.creat_ul').parent().css("height","25px")
 //把原有的  生成的ul移除		
   			 	$('.creat_ul').remove();
   			 	
   		}
//在 .address_region 下的 li元素内加入一个ul元素
   	$(this).parent().parent().parent().append('<ul class="creat_ul"></ul>')
//在新生成的ul元素内  添加两个三角形   	
    $('.creat_ul').append('<div class="creat_sanjiao1"></div><div class="creat_sanjiao2"></div>')
//获取父元素 离最近定位父元素的距离    
		  var k=$(this).parent().offset().left
//调整三角形  生成的位置		  
		$('.address_box  .creat_sanjiao1').css({"left":k-221,"top":"-16px"})
     $('.address_box  .creat_sanjiao2').css({"left":k-220,"top":"-14px"})
		var str_ul=""
		 
		 var that=$(this)
//添加华东省下的市
	  $.each(list_address.huadong, function(i,ele) {
		  	if(list_address.huadong[i]==that.html()){
	  		$.each(list_address.huadongshi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.huadongshi[i][j]+'</a></li>'
	  		})
	  	}
		  });

//添加华南省下的市
		  $.each(list_address.huanan, function(i,ele) {
		  	if(list_address.huanan[i]==that.html()){
	  		$.each(list_address.huananshi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.huananshi[i][j]+'</a></li>'
	  		})
	  	}
		  });

//添加华北省下的市
		  $.each(list_address.huabei, function(i,ele) {
		  	if(list_address.huabei[i]==that.html()){
	  		$.each(list_address.huabeishi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.huabeishi[i][j]+'</a></li>'
	  		})
	  	}
		  });
//添加华中省下的市		  
		  $.each(list_address.huazhong, function(i,ele) {
		  	if(list_address.huazhong[i]==that.html()){
	  		$.each(list_address.huazhongshi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.huazhongshi[i][j]+'</a></li>'
	  		})
	  	}
		  });
//添加西北省下的市		  
		  $.each(list_address.xibei, function(i,ele) {
		  	if(list_address.xibei[i]==that.html()){
	  		$.each(list_address.xibeishi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.xibeishi[i][j]+'</a></li>'
	  		})
	  	}
		  });
//添加东北省下的市		  
		  $.each(list_address.dongbei, function(i,ele) {
		  	if(list_address.dongbei[i]==that.html()){
	  		$.each(list_address.dongbeishi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.dongbeishi[i][j]+'</a></li>'
	  		})
	  	}
		  });
//添加西南省下的市		  
		  $.each(list_address.xinan, function(i,ele) {
		  	if(list_address.xinan[i]==that.html()){
	  		$.each(list_address.xinanshi[i],function(j,ele){
	  			str_ul+='<li class="creat_li"><a href="javascript:void(0)">'+list_address.xinanshi[i][j]+'</a></li>'
	  		})
	  	}
		  });
		  
		  
		$('.creat_ul').append(str_ul)
//获取添加了li后  ul元素的高度		
		var ul_h=$('.creat_ul').innerHeight()
		console.log(li_index)
//更改样式		
			$(this).css({"background":"#69c002","color":"white"})
		
		$('.address_box').css("height",305+ul_h)
		$('.address_box .mask_box_bottom').css("height",175+ul_h)
//要生成ul 的父元素增加高度		
		$(this).parent().parent().parent().css("height",25+ul_h)
	
//点击 市   事件		
		 $('.creat_ul .creat_li a').click(function(){
//把生成的ul移除      	
   	  $('.creat_ul').remove()
//获取点击的市  的内容   	  
   	  var a_value=$(this).html()
//设置   地址cookie   	  
   	  setCookie("address",a_value,1000)
   	  $('.address_box').css("display","none")
//刷新页面   	  
   	 window.location.reload()
   
   })
	},function(){
//再次点击事件
//判断是否存在生成ul
		if($('.creat_ul')){
//如果有就把所有新生成的元素都移除
//样式都改回原来
			 $('.creat_sanjiao2').remove()
			 $('.creat_sanjiao1').remove()
		$('.address_box .address_region li ul li a').css({"background":"white","color":"black"})
   		$('.address_box').css("height","305px")
   				$('.address_box .mask_box_bottom').css("height","175px")
   			$('.creat_ul').parent().css("height","25px")
   			
   			 	$('.creat_ul').remove();
   			 	
   		}
		 	

	}
   )
			
			
			
			
		})
		

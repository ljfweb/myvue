$(function(){

	$(window).scroll(function(){
		 if(document.body.scrollTop>200){
   	$('.fix_box_fifth').css("display","block")
   }else{
   		$('.fix_box_fifth').css("display","none")
   }
   if(document.body.scrollTop>450){
   	$('.share_box').css("top","23px")
   }else{
   		$('.share_box').css("top","-313px")
   }
   
   
   if(document.body.scrollTop>650){
   	$('.goods_more').css({"position":"fixed","top":"0"})
   	$('.saoma').show()
   }else{
   		$('.goods_more').css("position","static")
   		 	$('.saoma').hide()
   }
	
	})
	$('.fix_box_second').hover(function(){
		$('.fix_box_second .img_box').css("display","block")
	},function(){
		
		$('.fix_box_second .img_box').css("display","none")
	})
	$('.fix_box_fourth').hover(function(){
		$('.fix_box_fourth .cover_box').css("display","block");
		$('.update_link').show()
		$('.update_link').stop().animate({"width":"360","border":"1px solid #dadada"},1000)
	},function(){
		
		$('.fix_box_fourth .cover_box').css("display","none")

		$('.update_link').stop().animate({"width":"0"},1000)
	})
	$('.fix_box_fifth').click(function(){
			
			window.scrollTo(0,0)
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	if(parseInt($('.goods_detail_inp').attr("value"))<=1){
	
		$('.goods_detail_down').attr("disabled")
	}
	
	
	$('.goods_detail_up').click(function(){
		var x=parseInt($('.goods_detail_inp').attr("value"))
		$('.goods_detail_inp').attr("value",x+1)
	})
	
	
	$('.goods_detail_down').click(function(){
		if(parseInt($('.goods_detail_inp').attr("value"))<=1){
		$('.goods_detail_inp').attr("value",1)
		$('.goods_detail_down').attr("disabled")
	}else{
		$('.goods_detail_down').removeAttr("disabled","")
		var x=parseInt($('.goods_detail_inp').attr("value"))
		$('.goods_detail_inp').attr("value",x-1)
	}
		
	})
	
	
	
	var arr=[]
	$.each(list_food.meat,function(i,ele){
		var k=list_food.meat[i].data
		$.each(k,function(i,ele){
		
			var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
			if(x>=10&&x<=15){
				
				arr.push(k[i])
				
			}
			
		})
	})
	$.each(list_food.seafood,function(i,ele){
		var k=list_food.seafood[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
			
				
			if(x>=10&&x<=15){
				arr.push(k[i])
				
			}
			
		})
	})
	$.each(list_food.snacks,function(i,ele){
		var k=list_food.snacks[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
			
				
			if(x>=10&&x<=15){
				arr.push(k[i])
				
			}
			
		})
	})
	$.each(list_food.milk,function(i,ele){
		var k=list_food.milk[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				
				
			if(x>=10&&x<=15){
				arr.push(k[i])
				
			}
			
		})
	})
	$.each(list_food.tea,function(i,ele){
		var k=list_food.tea[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				
			
			if(x>=10&&x<=15){
				arr.push(k[i])
				
			}
			
		})
	})
	$.each(list_food.wine,function(i,ele){
		var k=list_food.wine[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				
			
			if(x>=10&&x<=15){
				arr.push(k[i])
				
			}
			
		})
	})
	$.each(list_fruit.kind,function(i,ele){
		var k=list_fruit.kind[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
				
				
			if(x>=10&&x<=15){
				arr.push(k[i])
				
			}
			
		})
	})
	$.each(list_grain.kind,function(i,ele){
		var k=list_grain.kind[i].data
		$.each(k,function(i,ele){
				var x=parseFloat(k[i].price)-parseFloat(k[i].vipPrice)
			
			
			if(x>=10&&x<=15){
				arr.push(k[i])
				
			}
			
		})
	})
	
	var hashname=window.location.search.substr(1);
	var goods_str_first=""
	var goods_str_second=""
$.each(arr, function(i) {
	if(arr[i].id==hashname){
		console.log("aa")
	goods_str_first='<div class="goods_title">'
				+'<span style="font-size:14px ;font-weight: bold;">食品</span><span>></span><span>'+arr[i].mold+'</span><span>></span><span>'+arr[i].higher+'</span><span>></span><span>'+arr[i].brank+'</span><span>></span><span>'+arr[i].name+'</span>'
			+'</div>'
			+'<div class="goods_detail">'
			+'<div class="goods_detail_left">'
				+'<div class="goods_slide">'
					+'<div class="goods_slide_top">︿</div>'
					+'<div class="goods_slide_wrap">'
						+'<ul class="goods_detail_box">'
							+'<li>'
								+'<img src="image/small_'+arr[i].id+'_1_1.jpg">'
							+'</li>'
							+'<li>'
								+'<img src="image/small_'+arr[i].id+'_1_2.jpg">'
							+'</li>'
							+'<li>'
								+'<img src="image/small_'+arr[i].id+'_1_3.jpg">'
							+'</li>'
							+'<li>'
								+'<img src="image/small_'+arr[i].id+'_1_4.jpg">'
							+'</li>'
							+'<li>'
								+'<img src="image/small_'+arr[i].id+'_1_5.jpg">'
							+'</li>'
							+'<li>'
								+'<img src="image/small_'+arr[i].id+'_1_6.jpg">'
							+'</li>'
							+'<li>'
								+'<img src="image/small_'+arr[i].id+'_1_7.jpg">'
							+'</li>'
							+'<li>'
								+'<img src="image/small_'+arr[i].id+'_1_8.jpg">'
							+'</li>'
						+'</ul>'
						
					+'</div>'
					+'<div class="goods_slide_down">﹀</div>'
					
				
				+'</div>'
				+'<ul class="goods_slide_right">'
					
					+'<li><img src="image/middle_'+arr[i].id+'_1_1.jpg"></li>'
					+'<li><img src="image/middle_'+arr[i].id+'_1_2.jpg"></li>'
					+'<li><img src="image/middle_'+arr[i].id+'_1_3.jpg"></li>'
					+'<li><img src="image/middle_'+arr[i].id+'_1_4.jpg"></li>'
					+'<li><img src="image/middle_'+arr[i].id+'_1_5.jpg"></li>'
					+'<li><img src="image/middle_'+arr[i].id+'_1_6.jpg"></li>'
					+'<li><img src="image/middle_'+arr[i].id+'_1_7.jpg"></li>'
					+'<li><img src="image/middle_'+arr[i].id+'_1_8.jpg"></li>'
					+'<div id="mark"></div>'
				+'</ul>'
				+'<div class="big_img">'
					
				+'</div>'
				+'<div class="goods_detail_left_bottom">'
					+'<div class="share">'
						+'<div class="share_img"></div><span style="cursor: pointer;">分享到：</span>'
					+'<ul class="share_box">'
							+'<h3>分享到</h3>'
							+'<li>'
								+'<div style="background-position:-4px 545px ;"></div><span>一键分享</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -80px ;"></div><span>qq空间</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -120px ;"></div><span>新浪微博</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px 66px ;"></div><span>百度收藏</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -200px ;"></div><span>人人网</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -240px ;"></div><span>腾讯微博</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -2195px ;"></div><span>百度相册</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -280px ;"></div><span>开心网</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -320px ;"></div><span>腾讯朋友</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -600px ;"></div><span>百度贴吧</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -400px ;"></div><span>豆瓣网</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -440px ;"></div><span>搜狐微博</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px -160px ;"></div><span>百度新首页</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px 385px ;"></div><span>qq好友</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px 785px ;"></div><span>和讯微博</span>'
							+'</li>'
							+'<li>'
								+'<div style="background-position:-4px 0px ;"></div><span>更多++</span>'
							+'</li>'
							+'<h4>'
								+'<div class="p_img"></div><span>百度分享</span>'
							+'</h4>'
						+'</ul>'
					+'</div>'
					+'<div class="share_icon" style="background-position:-4px -80px ;"></div>'
					+'<div class="share_icon" style="background-position:-4px -120px ;"></div>'
					+'<div class="share_icon" style="background-position:-4px -240px ;"></div>'
					+'<div class="share_icon" style="background-position:-4px -200px ;"></div>'
					+'<div class="shoucang" >'
						+'<div></div><a href="javascript:void(0)">收藏商品</a>'
					+'</div>'
				+'</div>'
			+'</div>'
			+'<div class="goods_detail_right">'
				+'<div class="goods_detail_right_ziying">自营'
				+'</div><span class="goods_detail_title">'+arr[i].name+'</span>'
				+'<div class="goods_detail_price">'
				+'<button>开通优选会员</button>'
					+'<span style="color: white;position: absolute;bottom: 16px;left: 10px;font-size: 16px;">￥</span><span class="goods_detail_big_price">'+arr[i].price+'</span><div class="goods_detail_line"></div>'
					+'<span style="color:white;position: absolute;left: 120px;bottom: 20px;">优选会员价： </span><span style="color: white;position: absolute;bottom: 20px;left: 190px;font-size: 16px;">￥</span><span class="goods_detail_big_vipPrice">'+arr[i].vipPrice+'</span>'
					+'<div class="goods_detail_img"></div>'
					+'<div class="goods_detail_price_san">'
						+'<div></div>'
					+'</div>'
				+'</div>'
				+'<span style="float: left;margin-left:34px ;">促销赠品：</span><div style="float: left;width: 30px;height: 15px;color: white;background: #6f9a09;text-align: center;line-height: 15px;margin-right: 12px;position: relative;top: 2px;">直降</div><span style="float: left;">优选会员可优惠14元</span><span style="float: left;color: #df0000;">【优选会员专享】</span><br />'
			+'<span style="margin-left: 60px;">送至：</span><div class="address"></div><br />'
		+'<hr style="margin-bottom: 20px;margin-top: 20px;" />'
			+'<input type="text" value="1" class="goods_detail_inp"/>  <input type="button" value="+" class="goods_detail_up"/><input type="button" value="-" class="goods_detail_down" />'
			+'<div class="shoppingCar_box">'
			+'<div class="shoppingCar_btn">'
				+'<div></div><span>加入购物车</span>'
				
			+'</div>'
			+'<div class="shoppingCar_success">'
					+'<img src="image/QQ图片20170713000840.png" id="shopping_close"/>'
					+'<p style="margin-top:18px ;text-align: center;font-size: 16px;">该商品已成功放入购物车！</p>'
					+'<span style="margin-left: 115px;">购物车共计</span><span></span><span>件商品，合计</span><span></span><span>元</span><br />'
				+'<button style="margin-left: 115px;"><<继续购物</button>	<button>去结算>></button>'
				+'</div>'
			+'</div>'
			+'<button class="buy">一键购买</button>'
			+'<div class="download_link"></div>'
			+'</div>'	
			+'</div>'
			+'<div class="goods_detail_second">'
				+'<img src="image/'+arr[i].id+'.png"><br />'
				+'<span class="goods_detail_text">品牌:</span><a href="javascript:void(0)">'+arr[i].brank+'</a><br />'
				+'<span class="goods_detail_text">产地:</span><a href="javascript:void(0)">'+arr[i].from +'</a><br />'
				+'<span class="goods_detail_text">规格:</span><span>'+arr[i].weight*1000+'</span><br />'
				+'<span class="goods_detail_text">重量:</span><span>'+arr[i].weight+'</span><br />'
				+'<span class="goods_detail_text">产品编号:</span><span>'+arr[i].id+'</span>'
				+'<img src="image/QQ图片20170712103408.png" style="margin-top: 5px;margin-bottom: 5px;"/>'
				+'<div class="evalute">'
					+'<span class="evalute_text">好评率</span><div class="evalute_tiao"></div><span class="evalute_per">'+arr[i].good_per+'%</span>'
					+'<br />'
					+'<span class="evalute_discuss">'+arr[i].dis_num+'条评论</span>'
					+'<div class="evalute_discuss_box">'
						+'<span>小白白：不错不错不错不错</span>'
						+'<div class="evalute_discuss_san"></div>'
				+'</div>'
				+'</div>'
			+'</div>'
		
		
	
	goods_str_second='<div class="goods_left">'
				+'<h3>相关分类</h3>'
				+'<p>精品'+arr[i].higher+'</p>'
				+'<ul class="goods_class">'
				+'</ul>'
			+'</div>'
			+'<div class="goods_right">'
			+'<ul class="goods_more">'
				+'<li>商品介绍</li>'
				+'<li>售后服务</li>'
				+'<li>评价('+arr[i].dis_num+')</li>'
				+'<div class="goods_shoppingCar">'
					+'<div></div><span>加入购物车</span>'
				+'</div>'
				+'<div class="saoma">'
					+'<div>'
						+'<img src="image/QQ图片20170713112356.png">'
					+'</div>'
				+'</div>'
			+'</ul>'
			+'<div class="goods_toggle">'
				+'<div class="goods_toggle_int">'
					+'<div class="goods_toggle_detail">'
						+'<span style="margin-left: 55px;margin-right: 18px;line-height: 30px;">保质期:</span><span >'+arr[i].date +'(天)</span>'
						+'<span style="margin-left:278px ;margin-right:18px ;">储存条件:</span><span>'+arr[i].storage +'</span><br />'
						+'<span style="margin-left: 25px;margin-right: 18px;line-height: 30px;">重量(含包装):</span><span>'+arr[i].weight+'(kg)</span>'
						+'<span style="margin-left:278px ;margin-right:18px ;">销量单位:</span><span>'+arr[i].unit+'</span><br />'
						+'<span style="margin-left: 68px;margin-right: 18px;line-height: 30px;">产地:</span><span>'+arr[i].from +'</span>'
						+'<span style="margin-left:295px ;margin-right:18px ;">规格:</span><span>'+arr[i].weight*1000+'g</span><br />'
						+'<span style="margin-left: 45px;margin-right: 15px;">温馨提示:</span><span>'
					    +'顺丰优选所售商品均经过严格的供应商资质审查、商品审查、入库全检、出货全检流程。由于部分商品存在厂家更换包装、不同批次、不同生产</span><br />'
						+'<span style="margin-left:113px ;">日期、不同生产工厂等情况，导致商品实物与图片存在微小差异，因此请您以收到的商品实物为准，同时我们会尽量做到及时更新，由此给您带来不便敬请谅解，谢谢！'
						+'</span><br />'
						+'<span style="margin-left: 45px;margin-right: 9px;">价格说明：</span><span>划线价 商品展示的划线价格为参考价，该价格可能是商品在优选平台上曾经展示过的销售价或优选门店销售过的价格、该价格可能是品牌专柜标价、商品吊牌价</span><br />'
						+'<span style="margin-left: 113px;">或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物</span><br />'
						+'<span style="margin-left: 113px;">时展示的不一致，该价格仅供您参考。</span><br />'
+'<span style="margin-left: 113px;">优选价 优选会员价为商品的销售价，是您最终决定是否购买商品的依据。（“优选会员价”是完成注册并成功支付会费的会员享受的销售价）</span>'
					+'</div>'
					+'<span>如果您发现商品信息存在问题，</span><a href="javascript:void(0)" style="color: #4c9811;">欢迎纠错</a><br />'
					+'<div class="goods_toggle_img_box">'
						+'<img src="image/7aefa5dd655285326038180e87ddd5b7.gif" />'
						
					+'</div>'
					
				+'</div>'
			
					+'<div class="after_sale">'
						+'<div class="after_sale_box_first">'
							+'<div class="after_sale_box_first_mid">'
								+'<img src="image/img (1).png"><span>顺丰优选所售商品均经过严格的供应商资质审查、商品审查、入库全检、出货全检流程。由于部分商品存在厂家更换包装、不同批次、不同生产日期、不同生产工厂等情况，导致商品实物与图片存在微小差异，因此请您以收到的商品实物为准，同时我们会尽量做到及时更新，由此给您带来不便敬请谅解，谢谢！</span>'
							+'</div>'
						+'</div>'
						+'<div class="shu"></div><span class="big_text">商品签收提示</span><span class="small_text">Notice for goods receipt</span>'
						+'<div class="sign_in">'
							+'<span>若您收到的商品存在任何质量问题或单货不符，请当场拒收整个包裹，顺丰优选将为您办理退款服务。</span>'
							+'<img src="image/banner.jpg" style="margin-top: 5px;margin-bottom: 5px;">'
							+'<span style="font-size:16px ;line-height: 20px;">您也可以先对整个包裹做签收，再针对存在异常的商品做退换货处理，此时请务必在业务员在场情况下立即联系顺丰优选客服，客服人员将会根据您反映实际状况为您做出相应处理；为了保护您的权益，建议您尽量不要委托他人代为签收；如由他人代为签收商品而没有在配送人员在场的情况下验货，则视为您所订购商品无任何问题。</span>'
						+'</div>'
							+'<div class="shu"></div><span class="big_text">退换货政策</span><span class="small_text">Return & Exchange Policy</span>'
							+'<ul class="policy">'
								+'<li>'
									+'<img src="image/img_1.jpg">'
									+'<span>水果、蔬菜、水产、肉类等生鲜易腐食品，请您在签收前检查商品的品质，此类商品一经签收将不予以办理退换货；</span>'
								+'</li>'
								+'<li>'
									+'<img src="image/img_2.jpg" />'
									+'<span>除生鲜易腐食品外，其他食品仅支持质量问题退换货，不支持无理由退换货，一经签收非质量问题不予以办理； '
+'若签收后24小时内您发现验货时无法发现的质量问题，请致电4009-111-111与客服中心联系，并提交相关食品检验部门的质检证明，顺丰优选将上门为您处理；</span>'
								+'</li>'
								+'<li>'
									+'<img src="image/img_3.jpg">'
									+'<span>非食品类商品，顺丰优选承诺可为您提供7天无理由退换货服务；'
+'若是由非质量问题引起的退换货，须确保商品及包装保持顺丰优选出售时原状，且配件、赠品齐全，不影响二次销售；</span>'
								+'</li>'
								+'<li>'
									+'<img src="image/img_4.jpg">'
									+'优选国际商品不提供七天无理由退货服务，质量问题只提供退货服务，不提供换货服务；如需换货，请先退货，再重新下单。'
								+'</li>'
							+'</ul>'
							+'<div class="shu"></div><span class="big_text">以下情况不予办理退换货：</span><span class="small_text">Goods can’t be returned or exchanged in the following situation</span><a class="a_text" href="javascript:void(0)">详细退换货政策说明</a>'
							+'<div class="condition_box">'
								+'<span>1、任何非顺丰优选出售的商品； </span><br />'
								+'<span>2、换货商品只能针对同一商品、同一价位的更换，不支持商品间换货及差价换货； </span><br>'
								+'<span>3、任何已使用过的商品，有质量问题的除外； </span><br />'
								+'<span>4、任何因您个人原因导致超过保质期的商品； </span><br />'
								+'<span>5、未经授权的误用、疏忽、滥用、事故、改动、不正确的使用方法所造成的商品质量问题，或撕毁、涂改标贴、防伪标记的商品不予退换货； </span><br />'
								+'<span>6、任何因非正常使用及保管导致出现质量问题的商品。</span>'
							+'</div>'
					+'</div>'
			
				
			+'</div>'
			+'<div class="evaluate_box">'
				+'<h3>用户评价</h3>'
				+'<div class="degree">'
					+'<span style="margin-left: 100px;">好评度</span><span class="bigdegree">'+arr[i].good_per+'</span><span class="degree_sign">%</span>'
				+'</div>'
				+'<ul class="degree_mid">'
					+'<li><span>好评</span><div class="degree_tiao">'
						 +'<div class="degree_tiao_color"></div>'
					+'</div><span class="degree_per">'+arr[i].good_per+'%</span>'
					+'</li><br />'
					+'<li><span>中评</span><div class="degree_tiao">'
						 +'<div class="degree_tiao_color"></div></div><span class="degree_per">'+arr[i].mid_per+'%</span>'
					+'</li><br />'
					+'<li><span>差评</span><div class="degree_tiao">'
						+'<div class="degree_tiao_color"></div>'
					+'</div><span class="degree_per">0%</span>'
					+'</li>'
					+'</ul>'
				+'<div class="shaidan">'
					+'<span class="shaidan_text">购买过商品，参与评价晒单，可获得积分哦~~</span><br />'
					+'<div class="pingjia">马上评价</div><a class="a_jifen" href="javascript:void(0)">[如何获取积分]</a>'
				+'</div>'
			+'</div>'
			+'<a class="pingjia_list" href="javascript:void(0)">全部评价('+arr[i].dis_num+')</a>'
			+'<a class="pingjia_list" href="javascript:void(0)">好评('+Math.round(arr[i].good_per*arr[i].dis_num/100)+')</a>'
			+'<a class="pingjia_list" href="javascript:void(0)">中评('+Math.round(arr[i].mid_per*arr[i].dis_num/100)+')</a>'
			+'<a class="pingjia_list" href="javascript:void(0)">差评('+(100-arr[i].good_per-arr[i].mid_per)*arr[i].dis_num/100+')</a>'
			+'<a class="pingjia_list" href="javascript:void(0)">有晒单(0)</a>'
			+'<div class="all_evaluate">'
				+'<div class="all">'
					+'<img src="image/QQ图片20170712225825.png" />'
					+'<img src="image/QQ图片20170712230115.png"  class="all_img"/>'
					+'<img src="image/QQ图片20170712225825.png" />'
					+'<img src="image/QQ图片20170712230115.png" class="all_img"/>'
					+'<img src="image/QQ图片20170712225825.png" />'
					+'<img src="image/QQ图片20170712230115.png" class="all_img"/>'
					+'<img src="image/QQ图片20170712225825.png" />'
					+'<a class="all_evaluate_a" href="javascript:void(0)">[查看全部评价]</a>'
						+'<img src="image/QQ图片20170712231513.png" class="all_evaluate_img">'
				+'</div>'
				+'<div class="good">'
					+'<img src="image/QQ图片20170712225825.png" />'
					+'<img src="image/QQ图片20170712225825.png" />'
					+'<img src="image/QQ图片20170712225825.png" />'
					+'<img src="image/QQ图片20170712225825.png" />'
					+'<img src="image/QQ图片20170712225825.png" />'
					+'<a class="all_evaluate_a" href="javascript:void(0)">[查看全部评价]</a>'
					+'<img src="image/QQ图片20170712231513.png" class="all_evaluate_img">'
				+'</div>'
				+'<div class="mid">'
					+'<img src="image/QQ图片20170712230115.png"  class="all_img"/>'
				+'</div>'
				+'<div class="all_none">'
					+'<span>暂无评价数据！</span><br />'
					+'<a class="all_evaluate_a" href="javascript:void(0)">[查看全部评价]</a>'
						+'<img src="image/QQ图片20170712231513.png" class="all_evaluate_img">'
				+'</div>'
				+'<div class="all_none">'
					+'<span>暂无评价数据！</span><br />'
					+'<a class="all_evaluate_a" href="javascript:void(0)">[查看全部评价]</a>'
						+'<img src="image/QQ图片20170712231513.png" class="all_evaluate_img">'
				+'</div>'
			+'</div>'
			+'<img src="image/ystitle.jpg" style="margin-bottom:5px ;">'
			+'<div class="length_box">'
				+'<ul class="small_box">'
					+'<li><div></div></li>'
					+'<li><div style="background-position:-150px 0 ;"></div></li>'
					+'<li><div style="background-position:-290px 0 ;"></div></li>'
					+'<li><div style="background-position:-460px 0 ;"></div></li>'
					+'<li><div style="background-position:-620px 0 ;"></div></li>'
					+'<li><div style="background-position:-775px 0 ;"></div></li>'
				+'</ul>'
				+'<div class="length_slide">'
					+'<ul>'
						+'<li>'
							+'<img src="image/yspic7801.jpg">'
						+'</li>'
						+'<li>'
								+'<img src="image/yspic7802.jpg">'
						+'</li>'
						+'<li>'
								+'<img src="image/yspic7803.jpg">'
						+'</li>'
						+'<li>'
								+'<img src="image/yspic7804.jpg">'
						+'</li>'
						+'<li>'
								+'<img src="image/yspic7805.jpg">'
						+'</li>'
						+'<li>'
								+'<img src="image/yspic7806.jpg">'
						+'</li>'
					+'</ul>'
				+'</div>'
			+'</div>'
			
		+'</div>'
			+'<div class="goods_left">'
				+'<h3>相关品牌</h3>'
				
				+'<ul class="goods_class">'
					
				+'</ul>'
			+'</div>'
			+'<div class="more_buy">购买此商品的顾客还买了'
			+'</div>'
			+'<div class="more_buy">浏览此商品的顾客还浏览了'
			+'</div>'
	$('#mid').append(goods_str_first)
$('#goods_box').append(goods_str_second)	
	$('.degree_tiao_color:eq(0)').css("width",arr[i].good_per)	
	$('.degree_tiao_color:eq(1)').css("width",arr[i].mid_per)	
	var classify_li=""
	var img_str=""
	var related_brank_li=""
	$.each(arr[i].classify,function(k){
		classify_li+='<li>'+arr[i].classify[k]+'</li>'	
		console.log(classify_li)
	})
	$('.goods_class:eq(0)').append(classify_li)	
	var x=arr[i].img_pcount
	for(var j=1;j<=x;j++){
		img_str+='<img src="image/'+hashname+'_'+j+'.jpg" />'
	}
	$('.goods_toggle_img_box').append(img_str)
	
	
		$.each(arr[i].related_brank,function(z){
		related_brank_li+='<li>'+arr[i].related_brank[z]+'</li>'	
	})
	$('.goods_class:eq(1)').append(related_brank_li)		
	}
});

	console.log(hashname)
	var get=getCookie("datas")
	if(get==undefined){
setCookie("datas","[]",50)
get=getCookie("datas")
}
	$('#top').load('public/header.html');
		$('#bottom').load("public/footer.html");
	     $('.shoppingCar_pcount').html(getTotal())
	$('.shoppingCar_num').html(getTotal())	
	var n=0;
	var m=0
	$('.goods_slide_top').click(function(){
		if(n<=0){
			n=0
		}else{
			n--
		}
		
		
		$('.goods_detail_box').stop().animate({"top":60*-n},1000)
		
		
		
	})
	$('.goods_slide_down').click(function(){
		
		if(n>=3){
			n=3
		}else{
			n++
		}
		
		$('.goods_detail_box').stop().animate({"top":60*-n,},1000)
		
		
		
	})
	$('.goods_detail_box').children('li:eq(0)').css("border", "1px solid #669900")
	$('.goods_slide_right li:eq(0)').css("display","block")
	$('.goods_detail_box li').hover(function(){
		var index=$(this).index()
		$(this).css("border", "1px solid #669900").siblings().css("border", "1px solid transparent")
		$('.goods_slide_right li').eq(index).css("display","block").siblings().css("display","none")
		
	})
	$('.goods_slide_right li').mouseover(function(){
		$(this).parent().children('#mark').css("display","block")
		var src=$(this).children().attr("src")
		var k=src.split("middle").join("big")

		var str='<img src="'+k+'" id="bigImg_show">'
		$('.big_img').append(str)
	       $(document).mousemove(function(e){
	       	var x=e.pageX-$('.goods_slide_right').offset().left-$('#mark').width()/2
	     
				var y=e.pageY-$('.goods_slide_right').offset().top-$('#mark').height()/2;
				x=x<0?0:x
				y=y<0?0:y
				var xmax=$('.goods_slide_right').width()-$('#mark').width()
				var ymax=$('.goods_slide_right').height()-$('#mark').height()
				x=x>xmax?xmax:x
				y=y>ymax?ymax:y
				$('#mark').css({"left":x,"top":y})
				
			var xbili=$('#bigImg_show').width()/$('.goods_slide_right').width()
			var ybili=$('#bigImg_show').height()/$('.goods_slide_right').height()
				
				
	       	$('#bigImg_show').css({"left":xbili*-x,"top":ybili*-y})
	       	
	       })
		
		
	})
	$('#mark').hover(function(){
		$(this).css("cursor","move")
		$('.big_img').css("display","block")
		
		
	},function(){
		$(document).mousemove=null
		$(this).css("display","none")
			$('.big_img').css("display","none")
			$('.big_img').children().remove()
	}
	)
	
	$('.goods_more li').click(function(){
		$(this).css({"background":"#6c9c0a","color":"white"}).siblings("li").css({"background":"white","color":"#565656"})
	})
	
	$('.shoppingCar_btn').click(function(){
		$(this).unbind("click")
		$(this).children(".shoppingCar_success").unbind("click")
		$.each(arr, function(i,ele) {
			if(arr[i].id==hashname){
				var str=""
			var pid=arr[i].id;
			var pdes=arr[i].name
			var price=arr[i].price
			var imgSrc=arr[i].src
			var weight=arr[i].weight
			console.log($('.goods_detail_inp').attr("value"))
			
			
			var pcount=parseInt($('.goods_detail_inp').attr("value"))
			if(checkup(pid)){
    updateNum(pid,pcount)
 
    }else{
    	  var json={
    	weight:weight,
    	pid:pid,
    	imgSrc:imgSrc,
    	pdes:pdes,
    	price:price,
    	pcount:pcount
    }
   var get=getCookie("datas")
  var getcookie=JSON.parse(get)
  console.log(getcookie)
   getcookie.push(json)
   var mycookie=JSON.stringify(getcookie)
   setCookie("datas",mycookie,50)
 console.log(mycookie)
    }
      $('.shoppingCar_pcount').html(getTotal())
	$('.shoppingCar_num').html(getTotal())	
	$('.shoppingCar_success').show()
    $('.shoppingCar_success span:eq(1)').html(getTotal())
    var get_cookie=getAll()
    
    console.log(typeof get_cookie)
    $.each(get_cookie, function(i,ele) {
    	console.log(get_cookie[i].price)
    	str+=Math.round(get_cookie[i].price*get_cookie[i].pcount*1000)/1000
    	
    });
$('.shoppingCar_success span:eq(3)').html(str)
			}
		});
		
		
	})
	$('.goods_toggle .goods_toggle_int').show()
	$('#shopping_close').click(function(e){
		
		$('.shoppingCar_success').css("display","none")
	})
	
	$('.goods_more li:eq(0)').click(function(){
	   window.scrollTo(0,650)
		$('.goods_toggle .goods_toggle_int').show().siblings("div").hide()
	})
		$('.goods_more li:eq(1)').click(function(){
	 window.scrollTo(0,650)
		$('.goods_toggle .after_sale').show().siblings("div").hide()
	})
		$('.goods_more li:eq(2)').click(function(){
	 window.scrollTo(0,650)
		$('.goods_toggle .goods_toggle_int').hide()
		$('.goods_toggle .after_sale').hide()
	})
		$('.small_box li').hover(function(){
			var index=$(this).index()
			console.log(index)
			$(this).css({"background":"white"}).siblings().css("background","transparent")
			$('.length_slide ul').stop().animate({"left":-index*780},500)
		})

$('.pingjia_list').eq(0).css({"text-decoration":"underline","color":"#ea5404","font-weight":"bold"})
$('.all_evaluate div:eq(0)').show()
$('.pingjia_list').click(function(){
	var index=$(this).index('.pingjia_list')
	$(this).css({"text-decoration":"underline","color":"#ea5404","font-weight":"bold"}).siblings(".pingjia_list").css({"text-decoration":"none","color":"#666666","font-weight":"100"})
	$('.all_evaluate div').eq(index).show().siblings().hide()
})

})

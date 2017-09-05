$(function(){
//window滚动事件
	$(window).scroll(function(){
	
		 if(document.body.scrollTop||document.documentElement.scrollTop>200){
//回到消失出现			 	
   	$('.fix_box_fifth').css("display","block")
   }else{
//回到顶部消失   	
   		$('.fix_box_fifth').css("display","none")
   }
		var x=document.body.scrollTop||document.documentElement.scrollTop
	  console.log(x)
//地址框  根据屏幕滚动而运动	  
		$('#mask_box').stop(true).animate({top:x+135+"px"},500)
	
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

		$('.update_link').animate({"width":"0"},1000)
	})
	
	
	
	
	
	var flag1=true;
//顶部载入	
	$('#header').load('public/header.html');
//底部载入	
		$('#footer').load("public/footer.html");
		
//大轮播图		
	         var n=0;
//克隆第一张	         
			var clone=$(".silde_wrap li").first().clone();
			$(".silde_wrap").append(clone);
//获取轮播图图片数量			
			var len=$('.silde_wrap li').length
//生成小点		
			for(var i=0;i<len-1;i++){
				$("#silde_numbtn").append("<li></li>");		
 }
//生成小点内容			
			for(var j=0;j<len-1;j++){
				$("#silde_numbtn li").eq(j).html(j+1)
			}
//设置第一个样式				
		$("#silde_numbtn li").first().addClass("active")	
	$('.index_topBox .silde_bg li').first().css("display","block")
//获取图片宽度	
			var width=$('.silde_wrap img').innerWidth()
//小点悬浮事件			
		$('#silde_numbtn li').hover(function(){
//获取下标			
				var y=$(this).index()
					n=y;	
		$(".silde_wrap").stop().animate({left:-y*width},500);
       $(this).addClass('active').siblings().removeClass('active');
		$('.index_topBox .silde_bg li').eq(n).css("display","block").siblings().css("display","none");		
			})
		
//设置定时器		
		   var timer=setInterval(function(){
		  change()
		   },5000)
//鼠标悬浮，清除定时器
			$('.index_top').hover(function(){
				clearInterval(timer)
			},function(){
				timer=setInterval(change,5000)
			}
			)
//下标增加函数			
			function change(){
				 	n++
		   	move()
			}
//移动函数
			function move(){
			
				if(n==len){
					$('#silde_numbtn li:eq(0)').unbind()
					$('.silde_wrap').css({left:0});
					n=1
				}else if(n==-1){
					$('.silde_wrap').css({left:-(n-1)*width});
					n=len-2
				}

				$('.silde_wrap').stop().animate({left:-n*width},1000);

				  if(n==len-1){
   $("#silde_numbtn li").eq(0).addClass('active').siblings().removeClass('active');
 //根据下标，背景出现  
   $('.index_topBox .silde_bg li').eq(0).css("display","block").siblings().css("display","none")
  }else{
   $("#silde_numbtn li").eq(n).addClass('active').siblings().removeClass('active');
  //根据下标，背景出现    
    $('.index_topBox .silde_bg li').eq(n).css("display","block").siblings().css("display","none")
  }}
	

//右边 悬浮背景颜色变化
	$('.index_top_img .index_top_img_box').hover(function(){
		var k=$(this).index()	
		$('.index_top_img_cover').eq(k).css("display","none")
	$(this).siblings().find('.index_top_img_cover').css('display',"block");		
	},function(){
		$('.index_top_img_cover').css('display',"none");})

//底部小轮播图
	var k=0
	var clone_little=$(".lunbo_little li").first().clone();
	$(".lunbo_little").append(clone_little);
	var len_little=$('.lunbo_little li').length
	var width_little=$('.lunbo_little li').innerWidth()
	$('.index_bottom_lunbo_toggle').eq(0).css("background","#7abd54")
		$('.index_bottom_lunbo_toggle').hover(function(){
			var y=$(this).index('.index_bottom_lunbo_toggle')
				k=y;
			$(this).css("background","#7abd54").siblings(".index_bottom_lunbo_toggle").css("background"," #dcdcdc")
			$(".lunbo_little").stop().animate({left:-y*width_little},500);
		})
		
		$("#index_bottom_lunbo_down").click(function(){
  k--;
 move_little();
 })
		$("#index_bottom_lunbo_up").click(function(){
  k++;
 move_little();
 })
		change_little()
		function change_little(){
				 	k++
		   	move_little()
			}

			function move_little(){
			
				if(k==len_little){
					$('.lunbo_little').css({left:0});
					k=1
				}else if(k==-1){
					$('.lunbo_little').css({left:-(k-1)*width_little});
					k=len_little-2
				}
				
				
		$('.lunbo_little').stop().animate({left:-k*width_little},1000);
				
				
				  if(k==len_little-1){
   $(".index_bottom_lunbo_toggle").eq(0).css("background","#7abd54").siblings(".index_bottom_lunbo_toggle").css("background"," #dcdcdc")

}else{
   $(".index_bottom_lunbo_toggle").eq(k).css("background","#7abd54").siblings(".index_bottom_lunbo_toggle").css("background"," #dcdcdc")
   
}
			}
			
//设置定时器			
		setInterval(function(){
			jishi(2017,7,17)
		},1000)
//定时器函数		
		function jishi(year,month,day){
			var endTime=new Date(year,month-1,day);
			var nowTime=new Date()
			var diff=endTime.getTime()-nowTime.getTime();
            var s=parseInt(diff/1000%60);
				var fen=parseInt(diff/1000/60%60);
				var hour=parseInt(diff/1000/60/60);
				hour_bai=parseInt(hour/10)
				hour_ge=hour%10
				fen_bai=parseInt(fen/10)
					fen_ge=fen%10
				s_bai=parseInt(s/10)	
				s_ge=s%10	
//把时，分，秒赋值								
			$('.hour_bai').html(hour_bai)	
          $('.hour_ge').html(hour_ge)	
          $('.min_bai').html(fen_bai)	
          $('.min_ge').html(fen_ge)	
           $('.second_bai').html(s_bai)	
          $('.second_ge').html(s_ge)	
		}
		
		$('.fix_box_fifth').click(function(){
			
			window.scrollTo(0,0)
		})
})



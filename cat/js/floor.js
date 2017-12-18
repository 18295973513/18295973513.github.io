$(function(){
	//banner
	var imgs=$(".img-ban>li");
	var width=imgs.width();
	var dian=$(".bt-yuan>li");
	console.log(imgs,width,dian)
	var box=$(".img-ban");
	var now=0;
	var next=0;
	var flag=true;
	function move(){
		flag=false;
		next=now+1;
		if(next>=imgs.length){
			next=0;
		}

	    imgs.eq(next).animate({opacity:1},1000,function(){
			flag=true;
		}).addClass("zindex").end().eq(now).animate({opacity:0},1000).removeClass("zindex");

	    dian.eq(now).removeClass("active").end().eq(next).addClass("active");


	    now=next;
	    }
	    var t=setInterval(move,3000);
	    $(box).hover(function(){
	    	clearInterval(t);
	    },function(){
	    	t=setInterval(move,3000);
	    })
        dian.each(function(index,value){
	        console.log(value)
	        $(value).mouseenter(function(){
	            console.log(1)
	            if (flag){
	                flag=false;
	                imgs.eq(index).animate({opacity:1},1000,function(){
						flag=true;
					});
					imgs.eq(now).animate({opacity:0},1000).removeClass("zindex").removeClass("active").end().eq(index).addClass("zindex");
	            
					dian.eq(now).removeClass("active").end().eq(index).addClass("active");
	                now=index;
		            }
		    	})
	  	})


      // 视频
      var dpls=$(`.live-video>ul`);       
      var ttm=setInterval(moveyi,3000); 
      var boxx=$(`.live-video`);
      var leftt=$(`.slide-page-prev`);  
      var rightt=$(`.slide-page-next`);
      console.log(leftt,rightt)
      var widthh=boxx.width();
      console.log(dpls,boxx,widthh)
	  function moveyi(){
	        if(dpls.position().left==0){
	          $(dpls).animate({left: -widthh},2000);
	          $(rightt).css('color','#B0B0B0').hide();
	        }
	        if(dpls.position().left==-widthh){
	          $(dpls).animate({left: 0},2000);
	          $(leftt).css('color','#B0B0B0').show();
	          $(leftt).hide();
	          
	        }
	         if(dpls.position().left==0){
	          $(dpls).animate({left: -widthh},2000);
	          $(rightt).css('color','#B0B0B0').hide();
	          $(leftt).show();
	        }
	        
	      }
     	$(boxx).hover(function(){
     		clearInterval(ttm);
     	},function(){
     		ttm=setInterval(moveyi,3000);
     	})
	    $(rightt).click(function(){
	    	$(leftt).show().css(color,'#B0B0B0');
	    	$(rightt).css(color,'#FF6700').hide();
	      	$(dpls).animate({left: -widthh},2000);
	    })
	     $(leftt).click(function(){
	     	$(rightt).show().css(color,'#B0B0B0');
	     	$(leftt).css(color,'#FF6700').hide();
	        $(dpls).animate({left: 0},2000); 
	    })



	    var lisall=$('.live-slide-item');
		var imggs=$('.J_live-cover');
		console.log(imggs,lisall);		
		lisall.each(function(index,value){
			$(value).mouseenter(function(){
				console.log($(value));
				for(var i=0;i<lisall.length;i++){
	    			imggs.eq(i).removeClass('active');
				}
					imggs.eq(index).addClass('active');
			})
		})


		var floors=$('.mlrs');//获取所有的楼层
		console.log(floors)
		var nav=$('.nav-box>.yanse');//获取绝对定位的楼层
		var color=[];
		var flag=true;//控制出来的动作
		var flag1=false;//控制回去的动作
		var top=$('.topmost');
		var navpar=$('.nav-box')
		var lback=$('.nav-box>li:last-child');
		console.log(lback);
		var lback1=$('.qian7');
		var lback2=$('.qian7>.qian-wenzi');
		var topmain=$('topmost-main');

		var color=['#EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945'];
		var current=0;
		$(window).scroll(function(){//获取滚动条距离
			// var scrollTop=$(document.body).scrollTop ? $(document.body):$(document.documentElement);
			var scrollTop=$(document.body).scrollTop();
			console.log(scrollTop)

			floors.each( function(index,value) {
				if(scrollTop>=$(value).position().top-400){
					console.log(1);
					$(navpar).stop().animate({width:40,height:400,opacity:1}, 100);
					$(top).stop().slideDown(200);;
					for(var i=0;i<nav.length;i++){
						nav.eq(i).css('background','#626262');
					}
					nav.eq(index).css('background',color[index]);
					// index==i;
					// current=index;
				}
			});
			if(scrollTop<1500){
				$(navpar).stop().animate({width:0,height:0,opacity:0},100);
				$(top).stop().slideUp(200);
			}
		});
		nav.each( function(index,value){
			$(value).click(function(){
				console.log(index);
				$(document.body).animate({scrollTop:floors[index].offsetTop})
				current=index;
			})
			$(value).mouseenter(function(){
				$(this).css("background",color[index]);
			})
			$(value).mouseleave(function(){
				if(current==index){
					return;
				}
				$(this).css("background","#626262");
			})
		});
		lback.click(function(){
			$(document.body).animate({scrollTop:0});
		})
		lback1.click(function(){
			$(document.body).animate({scrollTop:0});
		});
		lback2.click(function(){
			$(document.body).animate({scrollTop:0});
		})

})


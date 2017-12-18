$(function(){
	$('#dowebok').fullpage({
		verticalCentered: false,
		'navigation': true,
		navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验'],
		scrollingSpeed: 1000,

	});
});

// window.onload=function(){
// 	var box=document.querySelector('.box');
// 	var lis=document.querySelectorAll('.section');
// 	var circles=document.querySelectorAll('.navigation li');
// 	console.log(lis,circles,circles.length)
// 	var flag=true;
// 	    function mousewheel(box,upfun,downfun){
// 	    		//判断浏览器是否支持addE,如果支持使用addE,谷歌，火狐，不支持，用attachEvent
// 	    		if(box.attachEvent){
// 	    			box.attachEvent('onmousewheel',wheel);
// 	    		}else{
// 	    			box.addEventListener('mousewheel', wheel)	//谷歌
// 	    			box.addEventListener('DOMMouseScroll',wheel)//火狐
// 	    		}
// 	    		function wheel(e){
// 	    			//将事件对象做兼容，现代浏览器支持e,ie低版本window.event;
// 	    				var e=e||window.event;
// 	    				//阻止浏览器默认动作，现在浏览器支持.preventDefault(),ie低版本e.returnValue
// 	    				if(e.preventDefault){
// 	    					e.preventDefault();
// 	    				}else{
// 	    					e.returnValue=false;
// 	    				}//阻止默认动作，是一个函数

// 	    				//用来处理判断鼠标滚轮的方向
// 	    				var ma=e.wheelDelta||e.detail;
// 	    				if(ma==120||ma==-3){
// 	    					upfun();
// 	    					console.log('向上')
	    					
// 	    				}else if(ma==-120||ma==3){
// 	    					downfun();
// 	    					console.log('向下')
	    					
// 	    				}
// 	    			}

// 	    	}
// 	    	var now=0;
// 	    	var next=0;
// 	    	var height=document.documentElement.clientHeight;
// 	    	var heights=parseInt(getComputedStyle(lis[0],null).height);
// 	    	console.log(heights)
// 	    	var div=document.querySelector('.dowebok');

// 	    	mousewheel(box,function(){
// 	    		if(flag){
//     			flag=false;
// 	    		next=now-1;
// 	    		if(next<0){
// 	    			next=lis.length-1;
// 	    		}
// 	    		lis[next].style.top='-100%';
// 	    		animate(lis[now],{top:height});
// 	    		animate(lis[next],{top:0},function(){
// 	    			flag=true;
// 	    		})};
// 	    		circles[now].classList.remove("active");
// 	    		circles[next].classList.add("active");
// 	    		now=next;
// 	    	},function(){
// 	    		if(flag){
//     			flag=false;
// 	    		next=now+1;
// 	    		if(next>=lis.length){
// 	    			next=0;
// 	    		}
// 	    		lis[next].style.top='100%';
// 	    		animate(lis[now],{top:-height});
// 	    		animate(lis[next],{top:0},function(){
// 	    			flag=true;
// 	    		})};
// 	    		circles[now].classList.remove("active");
// 	    		circles[next].classList.add("active");
// 	    		now=next;
// 	    	});
//     		for(let i=0;i<circles.length;i++){
//     			circles[i].onclick=function(){
//     			if(i<now){
//     				if(flag){
//     					flag=false;
//     					lis[i].style.top='-100%';
//     					console.log(lis[i].style.top);
//     					animate(lis[now],{top:height});
//     					animate(lis[i],{top:0},function(){
//     						flag=true;
//     					});
//     					circles[now].classList.remove('active')
//     					circles[i].classList.add('active');
//     					now=i;
//     				}
//     			}else if(i>now){
//     				if(flag){
//     					flag=false;
//     					lis[i].style.top='100%';
// 			    		animate(lis[now],{top:-height});
// 			    		animate(lis[i],{top:0},function(){
// 			    			flag=true;
// 			    		});
// 			    		circles[now].classList.remove("active");
// 			    		circles[i].classList.add("active");
//     					now=i;
//     				}
//     			}else{
//     				flag=true;
//     				}
//     			}
//     		}
    	
    		
// }

$(function(){
    // $('img').lazyload();
  // banner
    let box=$('.zhanshi');
    let ul=$('ul.banner-tu');
    let lis=$('li',ul);
    let circles=$('.square .circle');
    let width=lis.first().outerWidth();
    let right=$('.xyz');
    let left=$('.syz');
        var now=0;
        var next=0;         
        var flag=true;
        function move(way="r"){
          if(way=='l'){
            next=now-1;
            if(next<0){
              next=lis.length-1;
            }
            
          }else if(way=="r"){
            next=now+1;
            if(next>=lis.length){
              next=0;
            }       
          }
          lis.eq(next).animate({opacity:1},1000,function(){flag=true;}).addClass("zindex").end().eq(now).animate({opacity:0},1000).removeClass("zindex");
          circles.eq(now).removeClass("active").end().eq(next).addClass("active");
          now=next;
          }
          var t=setInterval(move,2000)
          left.click(function(){
            if(flag){
              flag=false;
              move('l');
            }
          })
          right.click(function(){
            if(flag){
              flag=false;
              move('r');
            }
          })
        
          $(box).hover(function(){
            clearInterval(t);
          },function(){
            t=setInterval(move,3000);
          })
          circles.each(function(index,value){
            $(value).mouseover(function(){
          console.log(1)
            if (flag){
              flag=false;
              lis.eq(index).animate({opacity:1},1000,function(){
                flag=true;
              });
              lis.eq(now).animate({opacity:0},1000).removeClass("zindex").removeClass("active").end().eq(index).addClass("zindex");
                  
              circles.eq(now).removeClass("active").end().eq(index).addClass("active");
                      now=index;
                    }
              })
          })
        move();



// 单品搭配

    var liz=$('.dapei-zi21 li');
    var lis3=$('.bianhuan li');
    var liz1=$('.dapei-zi3 li');
    var lis1=$('.bianhuan2 li');
    var liz2=$('.dapei-zi2 li');
    var lis2=$('.bianhuan3 li');  
    function dapei(fun1,fun2){  
      fun1.each(function(index,value){
        $(value).mouseenter(function(){
          for(var i=0;i<fun1.length;i++){
            fun1.eq(i).removeClass("active");
            fun2.eq(i).removeClass("active");
          }
          $(this).addClass("active");
          fun2.eq(index).addClass("active");
        })
      })
    }
    var dp1=new dapei(liz,lis3);
    var dp2=new dapei(liz1,lis1);
    var dp3=new dapei(liz2,lis2);
   
    
// 图书
   
    var bbigbox=$('#nrpltp1');
    var yyuan=$(".yuandian div");
    var ttushu=$("#nrpltp1>.nr-boxx>.nr-box");
    var ttwidth=ttushu.first().width();
    var ttljt1=$("#nrpltp1>.xiangyou");
    var ttrjt1=$("#nrpltp1>.xiangyou2");


    var bigbox2=$('#nrpltp2');
    var yuan2=$(".yuandian-1 div");
    var tushu2=$("#nrpltp2>.nr-boxx>.nr-box");
    var twidth2=tushu2.first().width();
    var tleft2=$("#nrpltp2>.xiangyou");
    var tright2=$("#nrpltp2>.xiangyou2");


    var bigbox3=$('#nrpltp3');
    var yuan3=$(".yuandian-2 div");
    var tushu3=$("#nrpltp3>.nr-boxx>.nr-box");
    var twidth3=tushu3.first().width();
    var tleft3=$("#nrpltp3>.xiangyou");
    var tright3=$("#nrpltp3>.xiangyou2");


    var bigbox4=$('#nrpltp4');
    var yuan4=$(".yuandian-3>div");
    var tushu4=$("#nrpltp4>.nr-boxx>.nr-box");
    var twidth4=tushu4.first().width();
    var tleft4=$("#nrpltp4>.xiangyou");
    var tright4=$("#nrpltp4>.xiangyou2");


    var bigbox5=$('.sp-star1');
    var starbox=$('.sp-star1>.mingxing-danpin');
    var star=$(".sp-star1>.mingxing-danpin>.sp-star-box");
    var twidth5=star.first().width();
    var tleft5=$(".hz-left1");
    var tright5=$(".hz-right1");


    var ts1=new tushupl(bbigbox,yyuan,ttushu,ttwidth,ttljt1,ttrjt1);
    var ts2=new tushupl(bigbox2,yuan2,tushu2,twidth2,tleft2,tright2);
    var ts3=new tushupl(bigbox3,yuan3,tushu3,twidth3,tleft3,tright3);
    var ts4=new tushupl(bigbox4,yuan4,tushu4,twidth4,tleft4,tright4); 
    var ts5=new tushupl(bigbox5,yuan4,star,twidth5,tleft5,tright5);  
    function tushupl(bigbox,yuan,tushu,twidth,tljt1,trjt1){
      var tnow1=0;
      var tnext1=0;
      var tflag=true;
      tljt1.click(function(){
          if(tflag){
            tflag=false;
            tnext1=tnow1-1;
            if(tnext1<0){
              tnext1=0;
              tushu.eq(tnext1).css('left','0')
            }else{
              tushu.eq(tnext1).css('left','-twidth+"px"')
            }
            tushu.eq(tnow1).stop().animate({left:twidth});
            tushu.eq(tnext1).stop().animate({left:0},function(){
              tflag=true;
            });
            yuan.eq(tnow1).removeClass('active');
            yuan.eq(tnext1).addClass('active');
            tnow1=tnext1;   
          }
        })
        trjt1.click(function(){
          if(tflag){
            tflag=false;
            tnext1=tnow1+1;
            if(tnext1>=tushu.length){
               tnext1=tushu.length-1;
                tushu.eq(tnext1).css('left','0')
            }else{
               tushu.eq(tnext1).css('left','twidth+"px"')
            }

            tushu.eq(tnow1).stop().animate({left:-twidth});
            tushu.eq(tnext1).stop().animate({left:0},function(){
              tflag=true;
            });
            yuan.eq(tnow1).removeClass('active');
            yuan.eq(tnext1).addClass('active');

            tnow1=tnext1;
          }
        })
        for(let i=0;i<yuan.length;i++){
          yuan.eq(i).click(function(){
            if(tflag){
              tflag=false;     
                if(i>tnow1){
                  tnext1=i;
                    tushu.eq(i).css('left','twidth+"px"').animate({left:0},function(){
                      tflag=true;
                    });
                    tushu.eq(tnow1).stop().animate({left:-twidth});
                    yuan.eq(tnow1).stop().removeClass('active');
                    yuan.eq(i).addClass('active');
                    tnow1=i;
                }else if(i<tnow1){
                    tushu.eq(i).css('left','-twidth+"px"').animate({left:0},function(){
                      tflag=true;
                    });
                    tushu.eq(tnow1).animate({left:twidth});
                    yuan.eq(tnow1).removeClass('active');
                    yuan.eq(i).addClass('active');
                    tnow1=i;  
                }else{
                  tflag=true;
                }
              }
            })
          }
    }
   

    var dpls=$(`.sp-star>ul`),      
    ttm=setInterval(moveyi,3000), 
    boxx=$(`.sp-star`),
    jhe=$(`.hezi`),
    leftt=$(`.hz-left`),  
    rightt=$(`.hz-right`);
    console.log(leftt,rightt)
    var widthh=boxx.width();
    console.log(widthh)
    function moveyi(){
      if(dpls.position().left==0){
        dpls.stop().animate({left:-widthh}, 1000);
        leftt.css('color','#B5B5B5');
        rightt.css('color','#E0E0E0');        
      }
      if(dpls.position().left==-1226+'px'){
        dpls.stop().animate({left:0}, 1000);
        leftt.css('color','#E0E0E0');
        rightt.css('color','#B5B5B5');      
      }
       if(dpls.position().left==0+'px'){
        dpls.stop().animate({left:-widthh}, 1000);
        leftt.css('color','#B5B5B5');
        rightt.css('color','#E0E0E0');
      }
      $(boxx).hover(function(){
         clearInterval(ttm);
      },function(){
          ttm=setInterval(moveyi,3000);
      })
      
    }
   
    rightt.click(function(){
        rightt.css('color','#FF6700');
        leftt.css('color','#E0E0E0');
        dpls.animate({left:-widthh}, 1000,function(){
          rightt.css('color','#E0E0E0');
          leftt.css('color','#B5B5B5');
        });
    })
     leftt.click(function(){
        leftt.css('color','#FF6700');
        rightt.css('color','#E0E0E0');
        dpls.animate({left:0}, 1000,function(){
          rightt.css('color','#B5B5B5');
          leftt.css('color','#E0E0E0');
        });  
    })
    var bigbigbox=$('.nav')
    var liscang=$(`.shouji-hezibox`)
    var imgscang=$('.container')
    var navboxxs=$('.container>ul')
    var heightcang=navboxxs.first().height();
    console.log(heightcang)
    liscang.each( function(index, value) {
            $(value).mouseenter(function(){ 
                imgscang.css('borderTop','1px solid #ccc').stop().animate({height:heightcang}, 500,function(){
                    imgscang.css('background','#fff').css('opacity','1');
                });
              
                for(var i=0;i<liscang.length;i++){
                  navboxxs.eq(i).stop().removeClass("active");                  
                }
                navboxxs.eq(index).stop().addClass("active");
            });
            $(value).mouseleave(function(){
                imgscang.stop().animate({height:0}, 500,function(){
                    imgscang.css('borderTop','0px solid #ccc');
                });
            });
            
    });
    navboxxs.each( function(index, value) {
            $(value).mouseenter(function(){ 
                imgscang.css('borderTop','1px solid #ccc').stop().animate({height:heightcang}, 500,function(){
                    imgscang.css('background','#fff').css('opacity','1');
                });
    
                 for(var i=0;i<liscang.length;i++){
                  navboxxs.eq(i).stop().removeClass("active");
                }
                navboxxs.eq(index).stop().addClass("active");
            });
            $(value).mouseleave(function(){
                imgscang.stop().animate({height:0}, 500,function(){
                    imgscang.css('borderTop','0px solid #ccc');
                });
            });
            
    });


    var listgw=$(`#gouwuche`)
    var navboxgw=$('.cart-menu')
    var heightgw=navboxgw.height();
    console.log(navboxgw,listgw,heightgw)
    listgw.mouseenter(function(){
        // navboxgw.style.display = 'block';
        navboxgw.show();
        navboxgw.animate({height:heightgw}, 100);
        // animate(navboxgw,{height:heightgw},100);
    })
    listgw.mouseleave(function(){
        navboxgw.animate({height:0}, 100,function(){
          // navboxgw.style.display = 'none';
          navboxgw.hide();
        });
    })


})



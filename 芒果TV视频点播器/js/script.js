// JavaScript Document
var i = 0;
var time = 0;
//点播图标效果
$(".con ul li").hover(function(){

	$(".con ul li a").css("opacity","0.8");

    },function(){

	$(".con ul li a").css("opacity","0");

    })
//鼠标移上小图产生的效果
$(".nav ul li").hover(function(){

	$(this).addClass("active").siblings().removeClass("active");

	i=$(this).index();

	$(".con ul li").eq(i).stop(true,true).fadeIn(300).siblings().stop(true,true).fadeOut(300);
    
    clearInterval(time);

	},function(){

	    time=setInterval("junmper()",3000);

	})
//自动轮播
function junmper(){

	i++;

	if(i>6)

	i=0;

	$(".nav ul li").eq(i).addClass("active").siblings().removeClass("active");

	$(".con ul li").eq(i).fadeIn(300).siblings().fadeOut(300);

	}

       time=setInterval("junmper()",3000);

/*总结
  1.点播的图标可以放在a里面
*/






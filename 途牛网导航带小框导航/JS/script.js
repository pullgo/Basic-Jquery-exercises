// JavaScript Document
var i = 0;
var time = 0;
$(".pic ul li").hover(function(){
	$(".prev").fadeIn(300);
},function(){
	$(".prev").fadeOut(300);
})

$(".pic ul li").hover(function(){
	$(".next").fadeIn(300);
},function(){
	$(".next").fadeOut(300);
})

$(".nav ul li").hover(function(){
	i=$(this).index();
	$(".pic ul li").eq(i).fadeIn(100).siblings().fadeOut(100);
	$(this).addClass("bg").siblings().removeClass("bg");//this表示nav ul li
    clearInterval(time);
},function(){
	time=setInterval("junmper()",2000);
})

$(".prev").click(function(){
	i--;
	if (i<0)
	i=5;
	$(".pic ul li").eq(i).fadeIn(100).siblings().fadeOut(100);
	$(".nav ul li").eq(i).addClass("bg").siblings().removeClass("bg");
})

$(".next").click(function(){
	i++;
	if (i>5)
	i=0;
	$(".pic ul li").eq(i).fadeIn(100).siblings().fadeOut(100);
	$(".nav ul li").eq(i).addClass("bg").siblings().removeClass("bg");
})


$(".prev").hover(function(){
    clearInterval(time);
},function(){
    time=setInterval("junmper()",2000);
})

$(".next").hover(function(){
    clearInterval(time);
},function(){
    time=setInterval("junmper()",2000);
})


function junmper(){
	i++;
	if (i>5)
	i=0;
	$(".pic ul li").eq(i).fadeIn(100).siblings().fadeOut(100);
	$(".nav ul li").eq(i).addClass("bg").siblings().removeClass("bg");
}
    time=setInterval("junmper()",2000);







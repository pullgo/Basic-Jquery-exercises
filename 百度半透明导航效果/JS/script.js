// JavaScript Document
 var d = 0;//当前点
 var z = 1;//之前点
 var i = -1;

$(".nav ul li").click(function(){

	$(this).addClass("bg").siblings().removeClass("bg");

	d = $(this).index();

	if(d > z){

	$(".con img").eq(z).animate({top:"-315px"},400);

	$(".con img").eq(d).css("top","315px");//移动到位置之前先把图片放到最下面 才可以由下往上移动
	
	$(".con img").eq(d).animate({top:"0px"},400);

	z = d;//z下标随d的变化而变化

	}else{

	$(".con img").eq(z).animate({top:"315px"},400);

	$(".con img").eq(d).css("top","-315px");

	$(".con img").eq(d).animate({top:"0px"},400);

	z = d;

	}

	});

$("a").click(function(){

	$(".head").animate({height:"288px"},500);

    });

$(".right").click(function(){

	$(".head").animate({height:"0px"},500);

    });

$(".huanfu_bgcon img").hover(function(){

	i=$(this).index();

	$(".huanfu_see").css("background",'url(./images/bg'+i+'.jpg)');

	$(".huanfu_see").css("background-size","264px 180px");

})

$(".huanfu_bgcon img").click(function(){

	$("body").css("background",'url(./images/bg'+i+'.jpg)');

	$("body").css("background-size","1280px 960px");
})













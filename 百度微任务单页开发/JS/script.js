// JavaScript Document
 var d = 0;
 var z = 0;
 var s = 0;
$(".nav ul li").click(function(){
	
	z = d;
	
	d = $(this).index();
	
	$(this).find("img").attr("src",'images/'+d+'.png');
	
	if(z!=d){
	
	$(".nav ul li").eq(z).find("img").attr("src",'images/nav'+z+'.png');
	
	}
	
	s = 160+160*d;
	
	$(".bar").animate({width:s},500);
	
	$(".con ul li").eq(d).show().siblings().hide();
	
	})
	
$(".nav ul li").hover(function(){
	
	$(this).addClass("bg").siblings().removeClass("bg");
	
	})

function junmper(){
	
	
	}	
	
	setInterval("junmper()",5000);
	
	
	
	
	
	
	
	
	
	
	
	
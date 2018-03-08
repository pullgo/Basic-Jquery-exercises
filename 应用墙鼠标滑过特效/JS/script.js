// JavaScript Document
$("ul li").mouseover(function(){
	$(this).css("background","#1A1A1A");
	$(this).css("border","2px solid ##666");
})
$("ul li").mouseout(function(){
	$(this).css("background","#000");
	$(this).css("border","1px solid ##666");
})
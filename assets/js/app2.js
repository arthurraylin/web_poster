$( document ).ready(function() {


var $C_rainbow = $(".C_rainbow");
var $C_pink = $(".C_pink");


 $('.touch').click(function(){

 	$C_rainbow.removeClass('hide');
 	$C_pink.removeClass('hide');

 	$C_rainbow.addClass('C_rainbow_activate');
 	$C_pink.addClass('C_pink_activate');

	$(".touch").css("cursor", "default");


 	setTimeout(function(){ 
 	
 	  $(".touch").html('The Gems');

	  }, 23000);

 	setTimeout(function(){ 
 	
 	  $(".touch2").removeClass('hide');

	  }, 26000);

 });

var $C_skyblue = $(".C_skyblue");
var $C_green = $ (".C_green");


 $('.touch2').click(function(){

 	$C_skyblue.removeClass('hide');
 	$C_green.removeClass('hide');

 	$C_skyblue.addClass('C_skygreen_activate');
 	$C_green.addClass('C_green_activate');


 	setTimeout(function(){ 
 	
 	  $(".content1-1").removeClass('hide');

	  }, 23000);

 	setTimeout(function(){ 
 	
 	  $(".content1-2").removeClass('hide');

	  }, 26000);

 	setTimeout(function(){
 	  
 	  $(".touch3").removeClass('hide');

 	}, 29000);

 });

var $C_mikey = $(".C_mikey");
var $C_red = $ (".C_red");


 $('.touch3').click(function(){

 	$C_mikey.removeClass('hide');
 	$C_red.removeClass('hide');

 	$C_mikey.addClass('C_mikey_activate');
 	$C_red.addClass('C_red_activate');

	$(".touch3").css("cursor", "default");

 	setTimeout(function(){ 
 	
 	  $(".touch3").html('SEE YOU SOON!');

	  }, 23000);


 });







});
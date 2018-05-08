$( document ).ready(function() {

var S1 = $('.S1');
var S2 = $('.S2');
var S3 = $('.S3');
var S4 = $('.S4');

 $('.crystal2').mouseenter(function(){
 	var button_name = $(this).data('button');

 	S2.removeClass('hide');
 	S2.removeClass('fade-out');

 });
 $('.crystal2').mouseleave(function(){
 	var button_name = $(this).data('button');

 	S2.addClass('fade-out');

 });


 $('.crystal1').mouseenter(function(){
 	var button_name = $(this).data('button');

 	S1.removeClass('hide');
 	S1.removeClass('fade-out');

 });
 $('.crystal1').mouseleave(function(){
 	var button_name = $(this).data('button');

 	S1.addClass('fade-out');

 });

 $('.crystal3').mouseenter(function(){
 	var button_name = $(this).data('button');

 	S3.removeClass('hide');
 	S3.removeClass('fade-out');

 });
 $('.crystal3').mouseleave(function(){
 	var button_name = $(this).data('button');

 	S3.addClass('fade-out');

 });

 $('.crystal4').mouseenter(function(){
 	var button_name = $(this).data('button');

 	S4.removeClass('hide');
 	S4.removeClass('fade-out');

 });
 $('.crystal4').mouseleave(function(){
 	var button_name = $(this).data('button');

 	S4.addClass('fade-out');

 });




});
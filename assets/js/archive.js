$( document ).ready(function() {

var gem1 = $('.gem1');
var gem2 = $('.gem2');
var gem3 = $('.gem3');
var gem4 = $('.gem4');
var gem5 = $('.gem5');

var poster1 = $('.poster1');
var poster2 = $('.poster2');
var poster3 = $('.poster3');
var poster4 = $('.poster4');
var poster5 = $('.poster5');

 gem1.mouseenter(function(){

 	poster1.removeClass('hide');

 });
 gem1.mouseleave(function(){

 	poster1.addClass('hide');

 });


 gem2.mouseenter(function(){

 	poster2.removeClass('hide');

 });
 gem2.mouseleave(function(){

 	poster2.addClass('hide');

 });


 gem3.mouseenter(function(){

 	poster3.removeClass('hide');

 });
 gem3.mouseleave(function(){

 	poster3.addClass('hide');

 });


 gem4.mouseenter(function(){

 	poster4.removeClass('hide');

 });
 gem4.mouseleave(function(){

 	poster4.addClass('hide');

 });


 gem5.mouseenter(function(){

 	poster5.removeClass('hide');

 });
 gem5.mouseleave(function(){

 	poster5.addClass('hide');

 });




});
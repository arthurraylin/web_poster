$( document ).ready(function() {

	$(".midline").click(function(){

		$(".top-right").addClass("top-right-active");
		$(".top-left").addClass("top-left-active");

		$(".midline").css("cursor","default");

		setTimeout(function(){
			$(".top-mid").addClass("top-mid-active")
		}, 10000);

	});

	$(".invitation").click(function(){

		$(".bottom-right").addClass("bottom-right-active");
		$(".bottom-left").addClass("bottom-left-active");

		$(".invitation").css("cursor","default");

		setTimeout(function(){
			$(".bottom-mid").addClass("bottom-mid-active")
		}, 2000);

	});

});
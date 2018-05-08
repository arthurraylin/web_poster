$( document ).ready(function() {

	$(".G").click(function(){

		$(".G_gem_stick").addClass("G_growing");

		$(".border .G").css("cursor", "default");

		setTimeout(function(){
			$(".reen").removeClass("hide");
		}, 30000);

	});

	$(".E").click(function(){

		$(".E_gem_stick").addClass("E_growing");

		$(".border .E").css("cursor", "default");

		setTimeout(function(){
			$(".ye").removeClass("hide");
		}, 23000);

	});

	$(".M").click(function(){

		$(".M_gem_stick").addClass("M_growing");

		$(".border .M").css("cursor", "default");

		setTimeout(function(){
			$(".onster").removeClass("hide");
		}, 40000);

	});


	$(".green-curtain").mouseenter(function(){

		$(".green-curtain").addClass("green-curtain-active");

	});

	$(".green-curtain").mouseleave(function(){

		$(".green-curtain").removeClass("green-curtain-active");

	});

});
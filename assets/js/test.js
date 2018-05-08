$(document).ready(function(){

    $(document).mousemove(function(event) {

        if (event.pageX % 100 == 0 || event.pageY % 100 == 0) {

        	var randX = Math.floor(Math.random() * (window.innerWidth - 100));
        	var randY = Math.floor(Math.random() * (window.innerHeight - 100));
        	console.log(randX);

        	var htmlToAppend = "<div class='block' style='top: " + randY + "px; left: " + randX + "px; '></div>"

	        $('.wrapper').append(htmlToAppend);
        }

    });

});

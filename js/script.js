$(function(){
	var map,
		lastCity;


	spin();

	function spin(){
		$(".roller ul").css('animation', 'scroll-numbers 1s linear infinite');
		$(".stop").text("Stop").off().on("click", stop);
	}

	function stop(){
		var randomIndex = pickRandomIndex();
		var city = $($(".roller li").get(randomIndex)).text();
		var top = (randomIndex * -2);
		$(".roller ul").css({  "top": top+"em", "animation": "none"  });
		geocodeAddress(city);
		$(".stop").text("Respin").off().on("click", spin);
	}

	function pickRandomIndex(){
		return Math.floor(Math.random() * ($(".roller li").length - 1 + 1));
	}


});



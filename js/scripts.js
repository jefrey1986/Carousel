$(function(){
	var carouselList = $("#carousel ul");
	var leftButton = $("#left");
	var rightButton = $("#right")

	setInterval(function() {
		$(carouselList).animate({marginLeft:-400},500,function() {
			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");
			$(lastItem).after($(firstItem));
			//$(carouselList).find("li:last").after($(carouselList).find("li:first"))
			$(carouselList).css({marginLeft:0});
		})
	},5000); 

	function slideLeft(){
		$(carouselList).animate({marginLeft:-400},500,function() {
			var firstItem = carouselList.find("li:first");
			var lastItem = carouselList.find("li:last");
			$(lastItem).after($(firstItem));
			$(carouselList).css({marginLeft:0});
		})
	};

	function slideRight(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		$(lastItem).before($(firstItem));
		$(carouselList).css({marginLeft:-400});
		$(carouselList).animate({marginLeft:0},500);
	};

	leftButton.click(function(){
		slideLeft();
	}); 

	rightButton.click(function(){
		slideRight();
	}); 

});  

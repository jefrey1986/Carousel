$(function(){
	var carouselList = $("#carousel ul");
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");

	setInterval(function() {
		$(carouselList).animate({marginLeft:0},500,function() {
			//$(lastItem).after($(firstItem));
			$(carouselList).find("li:last").after($(carouselList).find("li:first"))
			$(carouselList).css({marginLeft:0});
		})
	},3000);
});  

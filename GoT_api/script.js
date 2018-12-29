$(document).ready(function() {
	
	$('#baratheon').on('click', function(){
		$.get("https://anapioficeandfire.com/api/houses/14", getHouseInfo)
	})
	$('#lannister').on('click', function(){
		$.get("https://anapioficeandfire.com/api/houses/229", getHouseInfo)
	})
	$('#stark').on('click', function(){
		$.get("https://anapioficeandfire.com/api/houses/362", getHouseInfo)
	})
	$('#targaryen').on('click', function(){
		$.get("https://anapioficeandfire.com/api/houses/300", getHouseInfo)
	})
	function getHouseInfo(data){
		var houseInfo;
		houseInfo = data;
		$('#name').replaceWith("<p id='name'>" + houseInfo.name + "</p>")
		$('#region').replaceWith("<p id='region'>" + houseInfo.region + "</p>")
		$('#words').replaceWith("<p id='words'>" + houseInfo.words + "</p>")
		$('#titles').replaceWith("<p id='titles'>" + houseInfo.titles + "</p>")
	}

});


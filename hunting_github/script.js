$( function() {

	$('button').click(function(){
		$.get("https://api.github.com/users/robinrobing", displayName)
		// Notice that displayName is a function that takes in 1 parameter (this is the data that comes back from the API)
		function displayName(data) {
			$('#name').html('<h1>' + data.name + '</h1>');
			//console.log(data.name);
		};
	});

});
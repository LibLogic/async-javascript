window.onload = function(){
	
	function handleError(jqXHR, textStatus, error){
		console.log(error);
	}
	
	function handleSuccess(data){
		console.log(data);
	}
	
	$.ajax({
		type: "GET",
		url: "data/tweets.json",
		success: cbTweets,
		error: handleError
	});

	function cbTweets(data){
		console.log(data);
		$.ajax({
			type: "GET",
			url: "data/friends.json",
			success: cbVideos,
			error: handleError
		});			
	}
		
	function cbVideos(data){
		console.log(data);
		$.ajax({
			type: "GET",
			url: "data/videos.json",
			success: function(data){
				console.log(data);
			},
			error: handleError
		});						
	}
};
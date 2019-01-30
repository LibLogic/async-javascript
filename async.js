window.onload = function(){
	
	// var http = new XMLHttpRequest();
	
	// http.open('GET', 'data/tweets.json', true);
	// http.send();

	// http.onreadystatechange = function(){
	// 		if(http.readyState == 4 && http.status == 200){
	// 			// console.log(JSON.parse(http.response));
	// 		}
	// };
	
	$.get("data/tweets.json", function(data){
		console.log(data);
	});
	
};
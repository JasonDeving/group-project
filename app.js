var queryURL = "https://restcountries.eu/rest/v1/all";
console.log(queryURL);
$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	console.log(response);
});

// var googlemapapiKEY = "AIzaSyAAjy2pGN7KvOJ12ZmSqWsq7Up6iV7IBPU";
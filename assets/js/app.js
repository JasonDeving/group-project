var queryURL = "https://restcountries.eu/rest/v1/all";
console.log(queryURL);
$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	for(var i = 0; response.length > i; i++) {
		console.log(response[i].name)
		console.log(response[i].capital)
		console.log(response[i].timezones)
		console.log(response[i].latlng[0] + " , " + response[i].latlng[1])
		console.log(response[i].altSpellings[0].toLowerCase())
	}
});

// var googlemapapiKEY = "AIzaSyAAjy2pGN7KvOJ12ZmSqWsq7Up6iV7IBPU";








function initialize() {
  var mapOptions = {
     center: new google.maps.LatLng(-34.397, 150.644),
     zoom: 1,
     minZoom: 1
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);
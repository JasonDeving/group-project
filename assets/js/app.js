var queryURL = "https://restcountries.eu/rest/v1/all";
console.log(queryURL);
$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	console.log(response.length);
	console.log(response[0].name);
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
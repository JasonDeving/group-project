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




// display whole map when website loads
function initialize() {
  var mapOptions = {
     center: new google.maps.LatLng(0, 0),
     zoom: 2
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  drawMarkers(map);
}

google.maps.event.addDomListener(window, 'load', initialize);




// click on USA and zoom into it on map
function clickUSA(){
  var mapOptions = { 
  	center: new google.maps.LatLng(38.134557,-97.844238), 
  	zoom: 5 
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, 'click', clickUSA);



// function drawMarkers(map){
// 	var marker = new google.maps.Marker({
// 	    position: google.maps.LatLng(38.134557,-97.844238),
// 	    map: map
// 	});
// }







// $('#locate-country').on('click', function(){
// 	var country = $('#country-input').val().trim();
// 	SetMapAddress(country);
// 	return false;
// });






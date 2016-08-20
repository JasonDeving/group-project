// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  
  var broadway = {
    info: '<strong>Chipotle on Broadway</strong><br>\
          5224 N Broadway St<br> Chicago, IL 60640<br>\
          <a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
    lat: 41.976816,
    long: -87.659916
  };

  var belmont = {
    info: '<strong>Chipotle on Belmont</strong><br>\
          1025 W Belmont Ave<br> Chicago, IL 60657<br>\
          <a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
    lat: 41.939670,
    long: -87.655167
  };

  var sheridan = {
    info: '<strong>Chipotle on Sheridan</strong><br>\r\
          6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
          <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
    lat: 42.002707,
    long: -87.661236
  };

  var locations = [
      [broadway.info, broadway.lat, broadway.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2],
    ];

<<<<<<< HEAD
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(41.976816, -87.659916),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, i;
=======
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
>>>>>>> refs/remotes/origin/master

  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

<<<<<<< HEAD
    google.maps.event.addListener(marker, 'click', (function (marker, i) {
      return function () {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
=======


// click on USA and zoom into it on map
function clickUSA(){
  var mapOptions = { 
  	center: new google.maps.LatLng(38.134557,-97.844238), 
  	zoom: 5 
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
>>>>>>> refs/remotes/origin/master
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





<<<<<<< HEAD
  
    var queryURL = "https://restcountries.eu/rest/v1/all", response;
    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    		// beginnning of for loop
    	for(var i = 0; response.length > i; i++) {

    		console.log(response[i].name);
    		console.log(response[i].capital);
    		console.log(response[i].timezones[0]);
    		console.log(response[i].latlng[0] + " , " + response[i].latlng[1]);
    		console.log(response[i].altSpellings[0].toLowerCase());
    		console.log(response[i].currencies[0]);
    		console.log(response[i].languages[0]);
      }
  });
// END FUNCTION
=======
>>>>>>> refs/remotes/origin/master

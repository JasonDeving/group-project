// var googlemapapiKEY = "AIzaSyAAjy2pGN7KvOJ12ZmSqWsq7Up6iV7IBPU";

var queryURL = "https://restcountries.eu/rest/v1/all";
$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	// beginnning of for loop
	// for(var i = 0; response.length > i; i++) {

	// 	console.log(response[i].name);
	// 	console.log(response[i].capital);
	// 	console.log(response[i].timezones[0]);
	// 	console.log(response[i].latlng[0] + " , " + response[i].latlng[1]);
	// 	console.log(response[i].altSpellings[0].toLowerCase());
	// 	console.log(response[i].currencies[0]);
	// 	console.log(response[i].languages[0]);
	
	//  function initMap() {
 //        var blah = {lat: 0, lng: 0};
 //        var map = new google.maps.Map(document.getElementById('map-canvas'), {
 //          zoom: 4,
 //          center: blah
 //        });

 //        var contentString = '<div id="content">'+
 //            '<div id="siteNotice">'+
 //            '</div>'+ '<h1>' + response[i].name + '</h1>' +
 //            '<ul>'+
 //            '<li>' + 'Capital: ' + response[i].capital + '</li>'
 //            '<li>' + 'Time Zone: ' + response[i].timezones[0] + '</li>'
 //            '<li>' + 'Language Spoken: ' + response[i].languages[0] + '</li>'
 //            '</ul>'+
 //            '</div>'+
 //            '</div>';

 //        var infowindow = new google.maps.InfoWindow({
 //          content: contentString
 //        });

 //        var marker = new google.maps.Marker({
 //          position: response[i].name,
 //          map: map,
 //          title: 'Country: ' + response[i].name
 //        });
 //        marker.addListener('click', function() {
 //          infowindow.open(map, marker);
 //        });
 //      }
 //      // end of forloop
 //  }
});
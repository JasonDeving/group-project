function initMap() {
  
  // var broadway = {
  //   info: '<strong>Chipotle on Broadway</strong><br>\
  //         5224 N Broadway St<br> Chicago, IL 60640<br>\
  //         <a href="https://goo.gl/maps/jKNEDz4SyyH2">Get Directions</a>',
  //   lat: 41.976816,
  //   long: -87.659916
  // };

  // var belmont = {
  //   info: '<strong>Chipotle on Belmont</strong><br>\
  //         1025 W Belmont Ave<br> Chicago, IL 60657<br>\
  //         <a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
  //   lat: 41.939670,
  //   long: -87.655167
  // };

  // var sheridan = {
  //   info: '<strong>Chipotle on Sheridan</strong><br>\r\
  //         6600 N Sheridan Rd<br> Chicago, IL 60626<br>\
  //         <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
  //   lat: 42.002707,
  //   long: -87.661236
  // };
  // var canada = {
  //   info: '<strong>Canada</strong><br>\r\
  //         Britich Columbia<br> somewhere in canada<br>\
  //         <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
  //   lat: 50.8123389,
  //   long: -130.1681518
  // };

  // var locations = [
  //     [broadway.info, broadway.lat, broadway.long, 0],
  //     [belmont.info, belmont.lat, belmont.long, 1],
  //     [sheridan.info, sheridan.lat, sheridan.long, 2],
  //     [canada.info, canada.lat, canada.long, 3],
  //   ];
var locations = [];
var queryURL = "https://restcountries.eu/rest/v1/all";
    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
          // beginnning of for loop
          console.log(response);
        for(var i = 0; response.length > i; i++) {

          // console.log(response[i].name);
          // console.log(response[i].capital);
          // console.log(response[i].latlng[0] + " , " + response[i].latlng[1]);
          // console.log(response[i].altSpellings[0].toLowerCase());
          // console.log(response[i].currencies[0]);
          // console.log(response[i].languages[0]);


          response[i].name = {
            info: response[i].name,
            lat: response[i].latlng[0],
            long: response[i].latlng[1]
          }
          locations.push([response[i].name.info, response[i].name.lat, response[i].name.long, i])
        }
        console.log(locations);
          var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(41.976816, -87.659916),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infowindow = new google.maps.InfoWindow({});

        var marker, i;

        for (i = 0; i < locations.length; i++) {
          console.log(locations[i][1], locations[i][2]);
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
          });
          google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
        console.log("inside the unction " + locations.length);
    });

  // don't touch below only
  // var map = new google.maps.Map(document.getElementById('map'), {
  //   zoom: 2,
  //   center: new google.maps.LatLng(41.976816, -87.659916),
  //   mapTypeId: google.maps.MapTypeId.ROADMAP
  // });

  // var infowindow = new google.maps.InfoWindow({});

  // var marker, i;

  // for (i = 0; i < locations.length; i++) {
  //   marker = new google.maps.Marker({
  //     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
  //     map: map
  //   });

  //   google.maps.event.addListener(marker, 'click', (function (marker, i) {
  //     return function () {
  //       infowindow.setContent(locations[i][0]);
  //       infowindow.open(map, marker);
  //     }
  //   })(marker, i));
  // }
}




  
    
// END FUNCTION


var queryURL = "http://api.undata-api.org/organizations?format=json&app_id=dacca604&app_key=2ad8e773f78a38755c09c0a9841e393d";
// https://api.seer.cancer.gov/rest/disease/latest?type=HEMATO&q=Burkitt
console.log(queryURL);
$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	console.log(response[0].full_name);
});

// var googlemapapiKEY = "AIzaSyAAjy2pGN7KvOJ12ZmSqWsq7Up6iV7IBPU";
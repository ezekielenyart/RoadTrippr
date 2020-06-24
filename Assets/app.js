$(document).ready(function() {
    
// Call API for trueWay directions for routing information
var startPoint = ["44.9778","93.2650"];
var endPoint = [];
var directions = {
	"async": true,
	"crossDomain": true,
	"url": "https://trueway-directions2.p.rapidapi.com/FindDrivingPath?origin=40.629041%252C-74.025606&destination=40.627177%252C-73.980853",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "trueway-directions2.p.rapidapi.com",
		"x-rapidapi-key": "d5ede8fb76msh257bfd78eae8972p1c7e40jsn9f3602b7f9eb"
	}
}

$.ajax(directions).done(function (dirResp) {
	console.log(JSON.stringify(dirResp) + "Directions");
});

// Api call for nearby places.
var pointSelected = [,];
var places = {
	"async": true,
	"crossDomain": true,
	"url": "https://trueway-places.p.rapidapi.com/FindPlacesNearby?type=cafe&radius=150&language=en&location=37.783366%252C-122.402325",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "trueway-places.p.rapidapi.com",
		"x-rapidapi-key": "d5ede8fb76msh257bfd78eae8972p1c7e40jsn9f3602b7f9eb"
	}
}

$.ajax(places).done(function (responsePlaces) {
  
    
	console.log(JSON.stringify(responsePlaces) + "Places");
});


// MAPBOX
mapboxgl.accessToken = 'pk.eyJ1IjoibmF0aGFuc3p1IiwiYSI6ImNrYnM5dXRvbTAxZ2UyeG1uemozNjdteGoifQ.umqce5kG624MLhs1ywGAng';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});

// Onclick event for the save button click
$("#saveBtn").click(function() {
    console.log("Save button clicked")
    // after click, assign the value of the location search to a variable
    var searchValue = $("#").val();
});



// Keep this here!
});
$(document).ready(function () {

    // Call API for trueWay directions for routing information
    // var startPoint = ["44.9778","93.2650"];
    // var endPoint = ["44.8041","93.1669"];
    // var directions = {
    // 	"async": true,
    // 	"crossDomain": true,
    // 	"url": "https://trueway-directions2.p.rapidapi.com/FindDrivingPath?origin=" + startPoint[0] + "%252C" + startPoint[1] + "&destination=" + endPoint[0] + "%252C" + endPoint[1],
    // 	"method": "GET",
    // 	"headers": {
    // 		"x-rapidapi-host": "trueway-directions2.p.rapidapi.com",
    // 		"x-rapidapi-key": "d5ede8fb76msh257bfd78eae8972p1c7e40jsn9f3602b7f9eb"
    // 	}
    // }

    // $.ajax(directions).done(function (dirResp) {
    // 	console.log(JSON.stringify(dirResp) + "Directions");
    // });


    // MAPBOX
    mapboxgl.accessToken = 'pk.eyJ1IjoibmF0aGFuc3p1IiwiYSI6ImNrYnM5dXRvbTAxZ2UyeG1uemozNjdteGoifQ.umqce5kG624MLhs1ywGAng';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11'
    });

    // Onclick event for the save button click
    $("#saveBtn").click(function () {
        console.log("Save button clicked")
        // after click, assign the value of the location search to a variable
        var searchValue = $("#startingInput").val();
        
        console.log(searchValue)
    });

    map.on('click', function (e) {
        $('#info').innerHTML =
            // e.point is the x, y coordinates of the mousemove event relative
            // to the top-left corner of the map
            // JSON.stringify(e.point) +
            // '<br />' +
            // e.lngLat is the longitude, latitude geographical position of the event
            JSON.stringify(e.lngLat.wrap());
            // Set variable pointSelected equal to the longitude and latitude             
            var pointSelected = e.lngLat
            // var pointLatLong = [$(this)]
            console.log(pointSelected.lat)
            // Api call for nearby places.
            var places = {
            "async": true,
            "crossDomain": true,
            // Format of the url is [latitude, longitude]
            "url": "https://trueway-places.p.rapidapi.com/FindPlacesNearby?radius=150&language=en&location=" + pointSelected.lat + "%252C" + pointSelected.lng,
            // 37.783366%252C-122.402325
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "trueway-places.p.rapidapi.com",
                "x-rapidapi-key": "d5ede8fb76msh257bfd78eae8972p1c7e40jsn9f3602b7f9eb"
            }
    }

    $.ajax(places).done(function (responsePlaces) {


        console.log(JSON.stringify(responsePlaces) + "Places");
    });
            
        console.log(e.lngLat)
    });





    // var placeSearch = {
    // 	"async": true,
    // 	"crossDomain": true,
    // 	"url": "https://trueway-places.p.rapidapi.com/FindPlaceByText?language=en&text=Children's%20Creativity%20Museum",
    // 	"method": "GET",
    // 	"headers": {
    // 		"x-rapidapi-host": "trueway-places.p.rapidapi.com",
    // 		"x-rapidapi-key": "d5ede8fb76msh257bfd78eae8972p1c7e40jsn9f3602b7f9eb"
    // 	}
    // }

    // $.ajax(placeSearch).done(function (responsePlace) {
    // 	console.log(responsePlace);
    // });



    // Keep this here!
});
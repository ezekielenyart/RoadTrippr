// Stand up Friday Morning

// Accomplished
// -dynamically rendered nearby items from object to button list and then to our stops added list (kinda broken still)
// -styled buttons to fit better
// -links under the buttons
// -cleared previous results when you click again
// -Add Stop list render 1 time per place click
// -Resize the map
// 	

// To do:
// -Assign icons to key words
// -dynamically render response all items to carousel instead of row
// -Additional styling
// -Utilize local storage to save stop list
// -Animations?
// -change the map api to return more types of location than just cafes
// -expand the Lat and Long


// If type searched equals type present, push that object into new array



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
        center: [-98.5795, 39.8283],
        zoom: 3,
        style: 'mapbox://styles/mapbox/streets-v11'
    });
    // This is supposed to be putting markers on the map, but I couldn't figure out how to get it to work
    // var marker = new mapboxgl.Marker()
    //     .setLngLat([12.550343, 55.665957])
    //     .addTo(map);

    // Add geolocate control to the map.
    map.addControl(
        new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        })
    );

    // Onclick event for the save button click
    $("#saveBtn").click(function () {
        // console.log("Save button clicked")
        // after click, assign the value of the location search to a variable
        var searchValue = $("#startingInput").val();
        var marker = new mapboxgl.Marker()
        .setLngLat([pointSelected.lng, pointSelected.lat])
        .addTo(map);
        // console.log(searchValue)
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
            // console.log(pointSelected.lat)
            
            
            // Api call for nearby places.
            var stopSearch = "bar";
            var places = {
            "async": true,
            "crossDomain": true,
            // Format of the url is [latitude, longitude]
            "url": "https://trueway-places.p.rapidapi.com/FindPlacesNearby?type=" + stopSearch + "&radius=2000&language=en&location=" + pointSelected.lat + "%252C" + pointSelected.lng,
            // 37.783366%252C-122.402325
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "trueway-places.p.rapidapi.com",
                "x-rapidapi-key": "d5ede8fb76msh257bfd78eae8972p1c7e40jsn9f3602b7f9eb"
            }}
    // }    var marker = new mapboxgl.Marker()
    //     .setLngLat([12.550343, 55.665957])
    //     .addTo(map);

    // stopSearch = $("#stopSearch").value
    // console.log(stopSearch + "stopSearch")
            $("#stopSearch").on("click", function(){
            
            })


    $.ajax(places).done(function (responsePlaces) {
        $("#search-results").html("");
        
        // Stop option 1 info from api object to stop option cards
        // console.log(JSON.stringify(responsePlaces) + "Places");
        // console.log("Longitude and Latitude: " + e.lngLat);
        // Stop option 1 info from api object to stop option cards
         // select the name, address, and website of the  first result from the response object
        //  FOR LOOP
         for (i=0; i < 10; i++){
         var stop1NameData = (responsePlaces[Object.keys(responsePlaces)[0]][i].name)
         var stop1AddressData = (responsePlaces[Object.keys(responsePlaces)[0]][i].address)
         var stop1WebsiteData = (responsePlaces[Object.keys(responsePlaces)[0]][i].website)
        //  console.log("Name Data" + stop1NameData);

       
          // add the text of the 1st result's name, address, and website to the stop option div
        //   assign Icons based on response type
        //  var stopIcons = "";


            
            

        // TESTING 

        // 

        var nearbyPlaceLi = $("<li>").addClass("class filler");
        var addStopBtn = $("<button>").addClass("btn btn-success addStopBtn");
        var placeTitle = $("<h4>").text(stop1NameData).addClass("col-12");
        var placeAddress = $("<p>").text(stop1AddressData).addClass("col-12");
        var placeLink = $("<a>").text("More Information").attr("id", "placeLink");
        placeLink.addClass("itemLink text-center")
        placeLink.attr({"target": "_blank", "href": stop1WebsiteData});
        addStopBtn.append(placeTitle, placeAddress);  
        nearbyPlaceLi.append(addStopBtn, placeLink);
        

        // TESTING

        //  $("#stopOption1Name").text(stop1NameData)
        //  $("#stopOption1Address").text(stop1AddressData)
        //  $("#stopOption1Website").text(stop1WebsiteData)
        //  nearbyPlaceLi.append(placeTitle, placeAddress, placeLink, addStopBtn)
         $("#search-results").append(nearbyPlaceLi)
        // console.log(JSON.stringify(responsePlaces) + "Places");
        // console.log(e.lngLat)
        
        

        // Add Stop function for buttons on stop options
        // when user clicks the Add Stop button...
       


    }
    

    $(".addStopBtn").click(function(){


        var stopArray = [];
        

        // create a list item with the location details inside of the ol in the stop list div
        
        // select text from the stop option div h1
        var stopOpt1Name = this.textContent
        // var stopOpt1Name = $("#stopOption1Name").text();

        // console.log(this.textContent)

        // add stop
        stopArray.push(stopOpt1Name)
        // console.log("stop array: " + stopArray)


            // set a variable for the id stoplist, the ordered list of saved stops
            // $("#stopList").empty();
                var stopList = $("#stopList");
            for (i = 0; i <= stopArray.length; i++){
                var newStop = $("<li>").text(stopArray[i]);
                stopList.append(newStop)
            }
    
            // console.log("this object: " + this)
        
        // console.log("add button clicked");
        console.log(stopArray);


        
        
    });


  




        console.log("stop1 name for list: " + stopOpt1Name)


        })

    });       
        
    
    

    // $("#addStopBtn").click(function(){
    //     console.log(this);
    //     console.log(this.textContent);
    // });

    





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



//   





//  |  Keep this here!
//  V
    });
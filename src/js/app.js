var locations = [{
    title: "Nara Sushi",
    location: {
        lat: 37.790912,
        lng: -122.42078
    }
}, {
    title: "Wayo Sushi",
    location: {
        lat: 37.7886,
        lng: -122.421868
    }
}, {
    title: "Sudachi Sushi & Korean BBQ",
    location: {
        lat: 37.7875653,
        lng: -122.420459
    }
}, {
    title: "Sushi Boat",
    location: {
        lat: 37.78716444969067,
        lng: -122.409693
    }
}, {
    title: "Maru Sushi",
    location: {
        lat: 37.78960361061905,
        lng: -122.40871786760785
    }
}, {
    title: "Sakana Sushi & Grill",
    location: {
        lat: 37.787843977022874,
        lng: -122.41172790527344
    }
}, {
    title: "Live Sushi Bar",
    location: {
        lat: 37.76467,
        lng: -122.40351304
    }
}, {
    title: "Akiko’s Restaurant & Sushi Bar",
    location: {
        lat: 37.7905592751754,
        lng: -122.4046978354454
    }
}, {
    title: "Okoze Sushi",
    location: {
        lat: 37.79913516819813,
        lng: -122.41938691474148
    }
}, {
    title: "Kyoto Sushi",
    location: {
        lat: 37.787157187910296,
        lng: -122.4220061302185
    }
}, {
    title: "Akiko's Sushi Bar",
    location: {
        lat: 37.788762910495414,
        lng: -122.41025551612472
    }
}, {
    title: "Nara",
    location: {
        lat: 37.772124658240934,
        lng: -122.43081801884333
    }
}, {
    title: "Sushi on North Beach",
    location: {
        lat: 37.801578,
        lng: -122.41222363333333
    }
}, {
    title: "Elephant Sushi",
    location: {
        lat: 37.78153661500664,
        lng: -122.4169313047121
    }
}, {
    title: "Domo Sushi",
    location: {
        lat: 37.77603201110472,
        lng: -122.42610991001129
    }
}, {
    title: "Godzila Sushi",
    location: {
        lat: 37.786223,
        lng: -122.440042
    }
}, {
    title: "Ace Wasabi's Rock-N-Roll Sushi",
    location: {
        lat: 37.80019083869483,
        lng: -122.43791275114773
    }
}, {
    title: "Blowfish Sushi to Die For",
    location: {
        lat: 37.75963095,
        lng: -122.410067
    }
}, {
    title: "Naracamiche",
    location: {
        lat: 37.7894922684423,
        lng: -122.40643900901115
    }
}, {
    title: "Sushi Time",
    location: {
        lat: 37.76447345365353,
        lng: -122.43209543787728
    }
}];

var map;

// Create a new blank array for all the listing markers.
var markers = [];

// Create placemarkers array to use in multiple functions to have control
// over the number of places that show.
var placeMarkers = [];



function initMap() {
    // Create a styles array to use with the map.
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 37.787994,
            lng: -122.42078
        },
        zoom: 13,
        mapTypeControl: false
    });


    // ___________________ AUTO COMPLETE __________________
    // This autocomplete is for use in the search within time entry box.
    var searchBox = new google.maps.places.SearchBox(
        document.getElementById('places-search'));
    // Bias the searchbox to within the bounds of the map.
    searchBox.setBounds(map.getBounds());





    var largeInfowindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();




    // The following group uses the location array to create an array of markers on initialize.
    for (var i = 0; i < locations.length; i++) {
        // Get the position from the location array.
        var position = locations[i].location;
        var title = locations[i].title;
        // Create a marker per location, and put into markers array.
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
        });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open the large infowindow at each marker.
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
        bounds.extend(markers[i].position);

    }
    map.fitBounds(bounds);


    // Listen for the event fired when the user selects a prediction from the
    // picklist and retrieve more details for that place.
    searchBox.addListener('places_changed', function() {
        searchBoxPlaces(this);
    });

    // Listen for the event fired when the user selects a prediction and clicks
    // "go" more details for that place.
    document.getElementById('go-places').addEventListener('click', textSearchPlaces);

} //end initMap



// This function populates the infowindow when the marker is clicked. We'll only allow
// one infowindow which will open at the marker that is clicked, and populate based
// on that markers position.
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        // Clear the infowindow content to give the streetview time to load.
        infowindow.setContent('');
        infowindow.marker = marker;
        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
        });
        var streetViewService = new google.maps.StreetViewService();
        var radius = 50;
        // In case the status is OK, which means the pano was found, compute the
        // position of the streetview image, then calculate the heading, then get a
        // panorama from that and set the options
        function getStreetView(data, status) {
            if (status == google.maps.StreetViewStatus.OK) {
                var nearStreetViewLocation = data.location.latLng;
                var heading = google.maps.geometry.spherical.computeHeading(nearStreetViewLocation, marker.position);
                // ------------------------- AJAX -----------------------------------
                var fourSqAPI = {
                    "client_id": "ITE0R1YK5FQLKGDOZSBEPT1NK1WOJNMXI2MF23UZK4CFJV1Q",
                    "client_secret": "TETG0XTAT4LTIYCXOFUGXYCCOU4ZMOMI4X4BGEJGZMLNJPCQ",
                };

                var FSurl = 'https://api.foursquare.com/v2/venues/search?client_id=' + fourSqAPI.client_id + '&client_secret=' + fourSqAPI.client_secret + '&v=20130815' +
                    '&ll=' + locations[0].location.lat + ',' + locations[0].location.lng + '&limit=1' + '&query=' + locations[0].title;


                var returnResult = $.ajax({
                    url: FSurl,
                    dataType: 'json',
                    type: 'get',
                    cashe: false,
                    success: function(data) {
                        //looping data and push retrieved data into locations object
                        $(data.response.venues).each(function(index, value) {

                        });
                    }
                });






                infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');

                var panoramaOptions = {
                    position: nearStreetViewLocation,
                    pov: {
                        heading: heading,
                        pitch: 30
                    }
                };
                var panorama = new google.maps.StreetViewPanorama(
                    document.getElementById('pano'), panoramaOptions);
            } else {
                infowindow.setContent('<div>' + marker.title + '</div>' +
                    '<div>No Street View Found</div>');
            }
        }
        // Use streetview service to get the closest streetview image within
        // 50 meters of the markers position
        streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
        // Open the infowindow on the correct marker.
        infowindow.open(map, marker);
    }
}

// This function will loop through the listings and hide them all.
function hideMarkers(markers) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}

// This function fires when the user selects a searchbox picklist item.
// It will do a nearby search using the selected query string or place.
function searchBoxPlaces(searchBox) {
    hideMarkers(placeMarkers);
    var places = searchBox.getPlaces();
    // For each place, get the icon, name and location.
    createMarkersForPlaces(places);
    if (places.length == 0) {
        window.alert('We did not find any places matching that search!');
    }
}


// This function firest when the user select "go" on the places search.
// It will do a nearby search using the entered query string or place.
function textSearchPlaces() {
    var bounds = map.getBounds();
    hideMarkers(placeMarkers);
    var placesService = new google.maps.places.PlacesService(map);
    placesService.textSearch({
        query: document.getElementById('places-search').value,
        bounds: bounds
    }, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            createMarkersForPlaces(results);
        }
    });
}


// This function creates markers for each place found in either places search.
function createMarkersForPlaces(places) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < places.length; i++) {
        var place = places[i];
        var icon = {
            url: place.icon,
            size: new google.maps.Size(35, 35),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(15, 34),
            scaledSize: new google.maps.Size(25, 25)
        };
        // Create a marker for each place.
        var marker = new google.maps.Marker({
            map: map,
            icon: icon,
            title: place.name,
            position: place.geometry.location,
            id: place.id
        });
        // If a marker is clicked, do a place details search on it in the next function.
        marker.addListener('click', function() {
            getPlacesDetails(this, place);
        });
        placeMarkers.push(marker);
        if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
        } else {
            bounds.extend(place.geometry.location);
        }
    }
    map.fitBounds(bounds);
}

var get4sInfo = function(loc) {

    $.ajax({
        url: url,
        dataType: 'json',
        type: 'get',
        cashe: false,
        success: function(data) {
            //looping data and push retrieved data into locations object
            $(data.response.venues).each(function(index, value) {
                var su = {
                    title: value.name,
                    location: {
                        lat: value.location.lat,
                        lng: value.location.lng
                    },
                };
                locations.push(su);
            });
        }
    });
}

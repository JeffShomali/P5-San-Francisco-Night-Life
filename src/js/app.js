"use strict";

var locations = [{
    name: "Saga Night Club",
    formattedPhone: "(415) 882-4435",
    address: "750 Harrison St",
    lat: 37.7817,
    lng: -122.399002,
    postalCode: "94107",
    city: "San Francisco",
    state: "CA",
    url: 'www.example.com',
    filter: ['Night Club', 'Night Life', 'Dance']
}, {

    name: "El Toro Night Club",
    formattedPhone: "(415) 468-0670",
    address: "2470 San Bruno Ave",
    lat: 37.73076295852661,
    lng: -122.404949,
    postalCode: "94134",
    city: "San Francisco",
    state: "CA",
    url: 'www.example.com',
    filter: ['Night Club', 'Night Life', 'Dance']
}, {

    name: "el toro night club",
    formattedPhone: "(415) 882-4435",
    lat: 37.7306713,
    lng: -122.4052746,
    postalCode: "94105",
    city: "San Francisco",
    state: "CA",
    url: 'www.example.com',
    filter: ['Night Club', 'Night Life', 'Dance']
}, {

    name: "Temple Night Club",
    formattedPhone: "(415) 882-4435",
    address: "540 Howard St",
    lat: 37.81815270099963,
    lng: -122.34477495801933,
    postalCode: "94105",
    city: "San Francisco",
    state: "CA",
    url: 'www.example.com',
    filter: ['Night Club', 'Night Life', 'Dance']
}, {

    name: "Study all night Club",
    formattedPhone: "(415) 882-4435",
    lat: 37.721531,
    lng: -122.459652,
    postalCode: "94105",
    city: "San Francisco",
    state: "CA",
    url: 'www.example.com',
    filter: ['Night Club', 'Night Life', 'Dance']

}, {
    name: "Wayo Sushi",
    formattedPhone: "(415) 474-8369",
    address: "1407 Van Ness Ave",
    lat: 37.7886,
    lng: -122.421868,
    postalCode: "94109",
    city: "San Francisco",
    state: "CA",
    url: "http://sushiboat-hub.com",
    filter: ['sushi', 'food', 'bar']
}, {
    name: "Nara Sushi",
    formattedPhone: "(415) 567-1515",
    address: "1515 Polk St",
    lat: 37.790912,
    lng: -122.42078,
    postalCode: "94109",
    city: "San Francisco",
    state: "CA",
    url: "http://sushiboat-hub.com",
    filter: ['sushi', 'food', 'bar']
}, {
    name: "Sushi Boat",
    formattedPhone: "(415) 781-5111",
    address: "389 Geary St",
    lat: 37.78716444969067,
    lng: -122.409693,
    postalCode: "94102",
    city: "San Francisco",
    state: "CA",
    url: "http://sushiboat-hub.com",
    filter: ['sushi', 'food', 'bar']

}, {
    name: "Sakana Sushi & Grill",
    formattedPhone: "(415) 775-7644",
    address: "605 Post St",
    lat: 37.787843977022874,
    lng: -122.41172790527344,
    postalCode: "94109",
    city: "San Francisco",
    state: "CA",
    url: "http://sfsakana.com",
    filter: ['sushi', 'food', 'bar']
}, {
    name: "Maru Sushi",
    formattedPhone: "(415) 393-9911",
    address: "529 Powell St",
    lat: 37.78960361061905,
    lng: -122.40871786760785,
    postalCode: "94108",
    city: "San Francisco",
    state: "CA",
    url: "http://sushiboat-hub.com",
    filter: ['sushi', 'food', 'bar']
}, {
    name: "Akiko’s Restaurant & Sushi Bar",
    formattedPhone: "(415) 397-3218",
    address: "431 Bush St",
    lat: 37.7905592751754,
    lng: -122.4046978354454,
    postalCode: "94108",
    city: "San Francisco",
    state: "CA",
    url: "http://akikosrestaurant.com",
    filter: ['sushi', 'food', 'bar']

}, {
    name: "Okoze Sushi",
    formattedPhone: "(415) 567-3397",
    address: "1207 Union St",
    lat: 37.79913516819813,
    lng: -122.41938691474148,
    postalCode: "94109",
    city: "San Francisco",
    state: "CA",
    url: "http://sushiboat-hub.com",
    filter: ['sushi', 'food', 'bar']
}, {
    name: "Sudachi Sushi & Korean BBQ",
    formattedPhone: "(415) 931-6951",
    address: "1217 Sutter St",
    lat: 37.7875653,
    lng: -122.420459,
    postalCode: "94109",
    city: "San Francisco",
    state: "CA",
    url: "http://sudachisf.net",
    filter: ['sushi', 'food', 'bar']
}, {
    name: "Live Sushi Bar",
    formattedPhone: "(415) 861-8610",
    address: "2001 17th St",
    lat: 37.76467,
    lng: -122.40351304,
    postalCode: "94103",
    city: "San Francisco",
    state: "CA",
    url: "http://www.livesushibar.com/",
    filter: ['sushi', 'food', 'bar']
}, {
    name: "Elephant Sushi",
    formattedPhone: "(415) 359-9001",
    address: "380 Golden Gate Ave",
    lat: 37.78153661500664,
    lng: -122.4169313047121,
    postalCode: "94102",
    city: "San Francisco",
    state: "CA",
    url: "http://elephantsushi.com",
    filter: ['sushi', 'food', 'bar']
}, {
    name: "Oaktown 8s Square Dance club",
    formattedPhone: "(415) 633-3900",
    address: "747 Market St",
    lat: 37.81148696748271,
    lng: -122.26081093886104,
    postalCode: "94109",
    city: "Oakland",
    state: "CA",
    url: "http://www.SmallFryDanceClub.com",
    filter: ['Dance']
}, {

    name: "Equinox Sports Club San Francisco",
    formattedPhone: "(415) 633-3900",
    address: "747 Market St",
    lat: 37.786451314671154,
    lng: -122.40423113107681,
    postalCode: "94103",
    city: "San Francisco",
    state: "CA",
    url: "http://www.facebook.com/equinox",
    filter: ['Dance']

}, {
    name: "Liholiho Yacht Club",
    formattedPhone: "(415) 440-5446",
    address: "871 Sutter St",
    lat: 37.78836869881094,
    lng: -122.4145862541547,
    postalCode: "94109",
    city: "San Francisco",
    state: "CA",
    url: "http://liholihoyachtclub.com",
    filter: ['Dance']
}, {

    name: "Napa Dance Club",
    formattedPhone: "(415) 633-3900",
    address: "747 Market St",
    lat: 37.489222,
    lng: -122.239173,
    postalCode: "94062",
    city: "Redwood City",
    state: "CA",
    url: "http://www.SmallFryDanceClub.com",
    filter: ['Dance']
}, {

    name: "Small Fry Dance Club",
    formattedPhone: "(650) 393-5593",
    address: "1528 S El Camino Real Ste 208",
    lat: 37.55348327633724,
    lng: -122.3159408569336,
    postalCode: "94402",
    city: "San Mateo",
    state: "CA",
    url: "http://www.SmallFryDanceClub.com",
    filter: ['Dance']
}];


//Night Mode Style
var styleArray = [{
    "featureType": "all",
    "elementType": "labels",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{
        "saturation": 36
    }, {
        "color": "#000000"
    }, {
        "lightness": 40
    }]
}, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#000000"
    }, {
        "lightness": 16
    }]
}, {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 20
    }]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 17
    }, {
        "weight": 1.2
    }]
}, {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#ed5929"
    }]
}, {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#c4c4c4"
    }]
}, {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#ed5929"
    }]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 20
    }]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 21
    }, {
        "visibility": "on"
    }]
}, {
    "featureType": "poi.business",
    "elementType": "geometry",
    "stylers": [{
        "visibility": "on"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#ed5929"
    }, {
        "lightness": "0"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
        "visibility": "off"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#ffffff"
    }]
}, {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "color": "#ed5929"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 18
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#575757"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#ffffff"
    }]
}, {
    "featureType": "road.arterial",
    "elementType": "labels.text.stroke",
    "stylers": [{
        "color": "#2c2c2c"
    }]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 16
    }]
}, {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [{
        "color": "#999999"
    }]
}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 19
    }]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 17
    }]
}];


var fourSquareAPI = {
     "client_id": "ITE0R1YK5FQLKGDOZSBEPT1NK1WOJNMXI2MF23UZK4CFJV1Q",
     "client_secret": "TETG0XTAT4LTIYCXOFUGXYCCOU4ZMOMI4X4BGEJGZMLNJPCQ",
};

var googleMapObject = {
    map: {},
    options: {
        center: {
            lat: 37.7886,
            lng: -122.4218
        },
        zoom: 13,
        mapTypeControl: false,
        styles: styleArray
    },

    largeInfoWindow: new google.maps.InfoWindow(),
    infoWindowContent: '<div class="info-window"><div class="window-title">%name%</div><div class="window-address">%address%</div></div>',

    initMap: function(viewM) {

        googleMapObject.map = new google.maps.Map(document.getElementById('map'), googleMapObject.options);
        if (viewM.initialized && !viewM.hasMarkers) viewM.showMarkers();
    }
};


    // ___________________ AUTO COMPLETE __________________
    // This autocomplete is for use in the search within time entry box.
    var searchBox = new google.maps.places.SearchBox(
        document.getElementById('places-search'));
    // Bias the searchbox to within the bounds of the map.
    searchBox.setBounds(map.getBounds());


    // Initiate InfoWindow
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

                var markerLenght = markers.length;
                for (var i = 0; i < markerLenght; i++) {
                    var foursquareAPIurl = 'https://api.foursquare.com/v2/venues/search?client_id=' + fourSqAPI.client_id + '&client_secret=' + fourSqAPI.client_secret + '&v=20130815' +
                        '&ll=' + markers[i].position.lat() + ',' + markers[i].position.lng() + '&limit=10' + '&query=' + markers[i].title;


                    $.ajax({
                        url: foursquareAPIurl,
                        dataType: 'json',
                        type: 'get',
                        cashe: false,
                        success: function(data) {

                            //looping data and push retrieved data into locations object
                            $(data.response.venues).each(function(index, value) {
                                title = value.name;
                                phone = value.contact.formattedPhone;
                                address = value.location.formattedAddress;

                            });
                        }
                    });
                    infowindow.setContent('<div>' + title + '<br>' + phone + '<br>' + address.city + '</div><div id="pano"></div>');
                } //end loop


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

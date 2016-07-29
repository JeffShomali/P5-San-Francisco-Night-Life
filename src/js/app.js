

var map;

// Create a new blank array for all the listing markers.
var markers = [];

function initMap() {
    // Create a styles array to use with the map.

    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 37.787994,
            lng: -122.423776
        },
        zoom: 13,
        mapTypeControl: false
    });


    var locations = [{
        title: 'Sushi Zone',
        location: {
            lat: 37.787994,
            lng: -122.423776
        }
    }, {
        title: 'Ryoko\'s Japanese Restaurant and Bar',
        location: {
            lat: 37.788518,
            lng: -122.411857
        }
    }, {
        title: 'Okoze Sushi',
        location: {
            lat: 37.799002,
            lng: -122.419299
        }
    }, {
        title: 'Koo',
        location: {
            lat: 37.764384,
            lng: -122.462354
        }
    }, {
        title: 'Wayo Sushi Restaurant',
        location: {
            lat: 37.788692,
            lng: -122.422235
        }
    }, {
        title: 'Saru Sushi Bar',
        location: {
            lat: 37.751824,
            lng: -122.428783
        }
    }];


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
}

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
               var heading = google.maps.geometry.spherical.computeHeading(
                   nearStreetViewLocation, marker.position);
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

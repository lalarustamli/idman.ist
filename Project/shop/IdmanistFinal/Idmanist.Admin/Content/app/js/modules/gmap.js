export const loadGmaps = () => {
  if($('#storeLocations').length > 0){
    var stationList = [
      {
        "latlng": [
          47.604981, -122.334249
        ],
        name: `
        <span class="list-group-item-body"><img src="assets/img/locations/shop_1.jpg" alt="" class="img-rounded max-w-75 m-r-10"></span>
        <div class="list-group-item-body">
        <span class="list-group-item-heading">Big House Coffee</span>
        <span class="list-group-item-text block">999 Third Avenue, Seattle, WA</span>
        <span class="list-group-item-text block">Open until 9:00 PM</span>
        </div>
        `
      }, {
        "latlng": [
          47.605666, -122.335108
        ],
        name:`
        <span class="list-group-item-body"><img src="assets/img/locations/shop_2.jpg" alt="" class="img-rounded max-w-75 m-r-10"></span>
        <div class="list-group-item-body">
        <span class="list-group-item-heading">Big House Coffee</span>
        <span class="list-group-item-text block">1000 Second Avenue, Seattle, WA</span>
        <span class="list-group-item-text block">Open until 9:00 PM</span>
        </div>
        `
      }, {
        "latlng": [
          47.603710, -122.335673
        ],
        name:`
        <span class="list-group-item-body"><img src="assets/img/locations/shop_3.jpg" alt="" class="img-rounded max-w-75 m-r-10"></span>
        <div class="list-group-item-body">
        <span class="list-group-item-heading">Big House Coffee</span>
        <span class="list-group-item-text block">823 First Ave, Seattle, WA </span>
        <span class="list-group-item-text block">Open until 9:00 PM</span>
        </div>
        `
      }, {
        "latlng": [
          47.606006,-122.336716
        ],
        name:`
        <span class="list-group-item-body"><img src="assets/img/locations/shop_4.jpg" alt="" class="img-rounded max-w-75 m-r-10"></span>
        <div class="list-group-item-body">
        <span class="list-group-item-heading">Big House Coffee</span>
        <span class="list-group-item-text block">1191 2nd Avenue, Seattle, WA</span>
        <span class="list-group-item-text block">Open until 9:00 PM</span>
        </div>
        `
      }, {
        "latlng": [
          47.607285,-122.334292
        ],
        name:`
        <span class="list-group-item-body"><img src="assets/img/locations/shop_5.jpg" alt="" class="img-rounded max-w-75 m-r-10"></span>
        <div class="list-group-item-body">
        <span class="list-group-item-heading">Big House Coffee</span>
        <span class="list-group-item-text block">1125 4th Avenue, Seattle, WA</span>
        <span class="list-group-item-text block">Open until 9:00 PM</span>
        </div>
        `
      }, {
        "latlng": [
          47.607058,-122.336067
        ],
        name:`
        <span class="list-group-item-body"><img src="assets/img/locations/shop_6.jpg" alt="" class="img-rounded max-w-75 m-r-10"></span>
        <div class="list-group-item-body">
        <span class="list-group-item-heading">Big House Coffee</span>
        <span class="list-group-item-text block">1201 3rd Ave, Seattle, WA</span>
        <span class="list-group-item-text block">Open until 9:00 PM</span>
        </div>
        `
      }, {
        "latlng": [
          47.607058,-122.336067
        ],
        name:`
        <span class="list-group-item-body"><img src="assets/img/locations/shop_7.jpg" alt="" class="img-rounded max-w-75 m-r-10"></span>
        <div class="list-group-item-body">
        <span class="list-group-item-heading">Big House Coffee</span>
        <span class="list-group-item-text block">621 2nd Ave, Seattle, WA</span>
        <span class="list-group-item-text block">Open until 9:00 PM</span>
        </div>
        `
      }, {
        "latlng": [
          47.604505,-122.330604
        ],
        name:`
        <span class="list-group-item-body"><img src="assets/img/locations/shop_8.jpg" alt="" class="img-rounded max-w-75 m-r-10"></span>
        <div class="list-group-item-body">
        <span class="list-group-item-heading">Big House Coffee</span>
        <span class="list-group-item-text block">701 5th Avenue, Seattle, WA</span>
        <span class="list-group-item-text block">Open until 9:00 PM</span>
        </div>
        `
      }, {
        "latlng": [
          47.605708,-122.330206
        ],
        name:`
        <span class="list-group-item-body"><img src="assets/img/locations/shop_9.jpg" alt="" class="img-rounded max-w-75 m-r-10"></span>
        <div class="list-group-item-body">
        <span class="list-group-item-heading">Big House Coffee</span>
        <span class="list-group-item-text block">800 5th Ave Seattle, WA</span>
        <span class="list-group-item-text block">Open until 9:00 PM</span>
        </div>
        `
      }, {
        "latlng": [
          47.607636,-122.338118
        ],
        name:`
        <span class="list-group-item-body"><img src="assets/img/locations/shop_10.jpg" alt="" class="img-rounded max-w-75 m-r-10"></span>
        <div class="list-group-item-body">
        <span class="list-group-item-heading">Big House Coffee</span>
        <span class="list-group-item-text block">1301 2nd Ave, Seattle, WA</span>
        <span class="list-group-item-text block">Open until 9:00 PM</span>
        </div>
        `
      }
    ];
    var infoWnd,
    mapCanvas;
    function initialize() {
      var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(47.604981, -122.334249),
        styles: [
          {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "on"
              }, {
                "color": "#e0efef"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "visibility": "on"
              }, {
                "hue": "#1900ff"
              }, {
                "color": "#c0e8e8"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "lightness": 100
              }, {
                "visibility": "simplified"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "on"
              }, {
                "lightness": 700
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
              {
                "color": "#8bdadb"
              }
            ]
          }
        ]
      };
      var mapDiv = document.getElementById("storeLocations");
      mapCanvas = new google.maps.Map(mapDiv, mapOptions);
      mapCanvas.setMapTypeId(google.maps.MapTypeId.ROADMAP);
      infoWnd = new google.maps.InfoWindow();
      var bounds = new google.maps.LatLngBounds();
      var station,
      i,
      latlng;
      for (i in stationList) {
        station = stationList[i];
        latlng = new google.maps.LatLng(station.latlng[0], station.latlng[1]);
        bounds.extend(latlng);
        var marker = createMarker(mapCanvas, latlng, station.name);
        createMarkerButton(marker);
      }
      mapCanvas.fitBounds(bounds);
    }
    function createMarker(map, latlng, title) {
      var image = new google.maps.MarkerImage("assets/img/icons/misc/coffee-icon.png", null, null, null, new google.maps.Size(64,64));
      var marker = new google.maps.Marker({position: latlng, map: map, title: title,icon:image});
      google.maps.event.addListener(marker, "click", function() {
        infoWnd.setContent("<strong>" + title + "</title>");
        infoWnd.open(map, marker);
      });
      return marker;
    }
    function createMarkerButton(marker) {
      var ul = document.getElementById("marker_list");
      var li = document.createElement("li");
      var title = marker.getTitle();
      li.innerHTML = title;
      ul.appendChild(li);
      $('#marker_list li').addClass('list-group-item');
      google.maps.event.addDomListener(li, "click", function() {
        google.maps.event.trigger(marker, "click");
      });
    }
    google.maps.event.addDomListener(window, "load", initialize);
  
  
  }
};

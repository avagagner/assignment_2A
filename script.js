var map = L.map('map').setView([38.639145926581065,-90.28468464683782], 10);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "Scottish Arms",
        "popupContent": "<b>Scottish Arms</b><br>Scottish Food"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.24674730564345,
          38.63672876590212
        ]
      }
    },
     {
      "type": "Feature",
      "properties": {
        "Name": "2Shae Cafe",
        "popupContent": "<b>2Shae Cafe</b><br>Breakfast"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.2744901289432,
          38.64751484426265
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Scarlett's",
        "popupContent": "<b>Scarlett's</b><br>Wine Bar"
        
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.25104626536422,
          38.6381617632889
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Mi Ranchito",
        "popupContent": "<b>Mi Ranchito</b><br>Mexican"
       
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.30894447950988,
          38.661539699331904
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Lorenzo's Trattoria",
        "popupContent": "<b>Lorenzo's Trattoria</b><br>Italian"
       
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27511168787689,
          38.6171484198663
        ]
      }
    }
  ]
};

L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(map);

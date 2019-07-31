var ourLoc;
var view;
var map;

//37.3951° N, 121.9200° W are Cadence Design Systems coordinates

function init(){
  ourLoc=ol.proj.fromLonLat([-121.9200, 37.338]); //in my openlayers project, my location is in those brackets.
  view = new ol.View({ //tells map to center on ourLoc when you open map
    center: ourLoc,
    zoom: 6
  });
  map = new ol.Map({   //put into div where 'map' is.
    target: 'map',    //there is a comma because this is part of a list.
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    loadTilesWhileAnimating: true,
    view:view
  });
}
function panMap(){
  view.animate({
    center:ourLoc,   
    duration:2000
  });
}
window.onload = init; //run this init function when page loads.

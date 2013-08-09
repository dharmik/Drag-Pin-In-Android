var MapModule = require('ti.map');
 
var win = Ti.UI.createWindow({fullscreen: false});
var anno = MapModule.createAnnotation({latitude: -33.87365, image: 'KS_nav_ui.png', longitude: 151.20689, title: "Drag Me", subtitle: "Sydney is quite chill", draggable: true});
var anno2 = MapModule.createAnnotation({latitude: -33.86365, pincolor: MapModule.ANNOTATION_BLUE, longitude: 151.21689, title: "Drag Me 2", subtitle: "This is anno2", draggable: true});
var anno3 = MapModule.createAnnotation({latitude: -33.85365, longitude: 151.20689, title: "anno3", subtitle: "This is anno3", draggable: false});
 
var map = MapModule.createView({
    userLocation: true,
    mapType: MapModule.NORMAL_TYPE,
    animate: true,
    annotations: [anno, anno2, anno3],
    region: {latitude: -33.87365, longitude: 151.20689, latitudeDelta: 0.1, longitudeDelta: 0.1 }, //Sydney
    top: '30%'
});
 
map.addEventListener('pinchangedragstate', function(e) {
    Ti.API.info(e.title + ": newState=" + e.newState + ", lat=" + e.annotation.latitude + ", lon=" + e.annotation.longitude);
});
 
var b = Ti.UI.createButton({
    title: "Toggle draggable for anno3",
    top: 0
});
b.addEventListener('click', function(){
    anno3.draggable = !anno3.draggable;
    Ti.API.info("anno3.draggable = " + anno3.draggable);
});
 
win.add(b);
win.add(map);
win.open();


/*var MapModule = require('ti.map');
var win = Titanium.UI.createWindow();

var mountainView = MapModule.createAnnotation({
    latitude:37.390749,
    longitude:-122.081651,
    title:"Appcelerator Headquarters",
    subtitle:'Mountain View, CA',
    pincolor:MapModule.ANNOTATION_RED,
    myid:1 // Custom property to uniquely identify this annotation.
});

var mapview = MapModule.createView({
    mapType: MapModule.NORMAL_TYPE,
    region: {latitude:33.74511, longitude:-84.38993,
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    regionFit:true,
    userLocation:true,
    annotations:[mountainView]
});

win.add(mapview);
// Handle click events on any annotations on this map.
mapview.addEventListener('click', function(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
});
win.open();
*/


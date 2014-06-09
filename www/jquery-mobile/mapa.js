//    document.addEventListener("deviceready", onDeviceReady, false);
   // var clave=getURLvar('valor');
    function mapa() {
          var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(
        function(tx) {
            var diver="D"+clave;
            var gastr="G"+clave;
            var histo="H"+clave;
            var emerg="E"+clave;
        tx.executeSql('SELECT * FROM diversion where clave=?',[diver],writediversion);
        tx.executeSql('SELECT * FROM gastronomia where clave=?',[gastr],writegastronomia);
       tx.executeSql('SELECT * FROM historicos where clave=?',[histo],writehistoricos);
        tx.executeSql('SELECT * FROM emergencia where clave=?',[emerg],writeemergencias);
         
    });
      // navigator.geolocation.getCurrentPosition(onSuccess);
           show_map();
    }
  function show_map(){
    if ($('#map_canvas').is(':hidden'))setTimeout(function(){initialize()},1000);
    }
    
//function getURLvar(var_name){
//  var re = new RegExp(var_name + "(?:=([^&]*))?", "i");
//  var pm = re.exec(decodeURIComponent(location.search));
//  if(pm === null) return undefined;
//  return pm[1] || "";
//}
    var placediversion = new Array();
    var placediversiondescr =new Array();
function writediversion(tx, results){  
   placediversion.length=0;
   placediversiondescr.length=0;
    var len = results.rows.length;
    var nuevo=[];
    for (var i=0; i<len; i++){
        placediversiondescr.push(new Array());
    placediversion.push(results.rows.item(i).coordenadas);
    placediversiondescr[i] = new Array();
    nuevo=[results.rows.item(i).actividad,results.rows.item(i).coordenadas,i,"<h3>"+results.rows.item(i).actividad+"</h3>"+results.rows.item(i).descripcion];
      for(j=0;j<len;j++){
    placediversiondescr[i].push(nuevo[j]);
        }
    }
    
}
    
    var placegastronomia = new Array();
    var placegastronomiadescr =new Array();    
function writegastronomia(tx, results){
    placegastronomia.length=0;
    placegastronomiadescr.length=0;
    var len = results.rows.length;
    var nuevo=[];
    for (var i=0; i<len; i++){
        placegastronomiadescr.push(new Array());
    placegastronomia.push(results.rows.item(i).coordenadas);
    placegastronomiadescr[i] = new Array();
    nuevo=[results.rows.item(i).restaurante,results.rows.item(i).coordenadas,i,"<h3>"+results.rows.item(i).restaurante+"</h3>"+results.rows.item(i).especialidad];
      for(j=0;j<len;j++){
    placegastronomiadescr[i].push(nuevo[j]);
        }
    }
   
}
    var placehistoricos = new Array();
    var placehistoricosdescr = new Array();
function writehistoricos(tx, results){
    placehistoricos.length=0;
    placehistoricosdescr.length=0;
    var len = results.rows.length;
    var nuevo=[];
    for (var i=0; i<len; i++){
        placehistoricosdescr.push(new Array());
     placehistoricos.push(results.rows.item(i).coordenadas);
    placehistoricosdescr[i] = new Array();
    nuevo=[results.rows.item(i).lugar,results.rows.item(i).coordenadas,i,"<h3>"+results.rows.item(i).lugar+"</h3>"+results.rows.item(i).descripcion];
      for(j=0;j<len;j++){
    placehistoricosdescr[i].push(nuevo[j]);
        }
    }
    
}
    var placeemergencias = new Array();
    var placeemergenciasdescr = new Array();
function writeemergencias(tx, results){
    placeemergencias.length=0;
    placeemergenciasdescr.length=0;
    var len = results.rows.length;
    var nuevo=[];
    for (var i=0; i<len; i++){
        placeemergenciasdescr.push(new Array());
    placeemergencias.push(results.rows.item(i).coordenadas);
    placeemergenciasdescr[i] = new Array();
    nuevo=[results.rows.item(i).servicio,results.rows.item(i).coordenadas,i,"<h3>"+results.rows.item(i).servicio+"</h3>"+results.rows.item(i).domicilio];
      for(j=0;j<len;j++){
    placeemergenciasdescr[i].push(nuevo[j]);
        }
    }
    
}

function onSuccess(position) {     
		var latitude = position.coords.latitude; // Latitud
		var longitude = position.coords.longitude; // Longitud
		var initialLocation = new google.maps.LatLng(latitude, longitude);
        var image="img/smiley_happy.png";        
		var marker = new google.maps.Marker({
			position: initialLocation,            
			map: map,            
			title: "Estás aquí",
            icon: image
		});        
	}

    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    
    
var markers = [];
      var iterator = 0;
      var map;
      function initialize() {
       var haightAshbury = new google.maps.LatLng(24.802788529491355,-107.37934106249998);
        var mapOptions = {
          zoom: 7,
          center: haightAshbury,
          mapTypeId: google.maps.MapTypeId.ROADMAPs
        };
        map = new google.maps.Map(document.getElementById('map_canvas'),
            mapOptions);
	   infowindow = new google.maps.InfoWindow({
                content: "loading..."
            }); 
            navigator.geolocation.getCurrentPosition(onSuccess);       
      }
      function actividades() {
        deleteOverlays();       
        for (var i = 0; i < placediversion.length; i++) {
            var sss=placediversion[i].split(',');
            var lat=parseFloat(sss[0]);
            var lon=parseFloat(sss[1]);            
           marker = new google.maps.Marker({
                       position: new google.maps.LatLng(lat,lon),                                           
                       map: map,
                        title:placediversiondescr[i][0],
                        zIndex:placediversiondescr[i][2],
                        html: placediversiondescr[i][3],
                       animation: google.maps.Animation.DROP                       
                     });
                     markers.push(marker);
                     var contentString = "Some content";
                     map.setZoom(12);
                     map.panTo(marker.position);

            google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
                     
            }   
      }      
      function restaurantes() {
        deleteOverlays();
        for (var i = 0; i < placegastronomia.length; i++) {
            var sss=placegastronomia[i].split(',');
            var lat=parseFloat(sss[0]);
            var lon=parseFloat(sss[1]);  
           marker = new google.maps.Marker({
                       position: new google.maps.LatLng(lat,lon),
                       map: map,
                        title:placegastronomiadescr[i][0],
                        zIndex:placegastronomiadescr[i][2],
                        html: placegastronomiadescr[i][3],
                       animation: google.maps.Animation.DROP                       
                     });                     
                     markers.push(marker);
                     var contentString = "Algunos contenidos";
                     map.setZoom(12);
                     map.panTo(marker.position);
                    

            google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });                     
            }   
      }
       function historicos() {
        deleteOverlays();
        for (var i = 0; i < placehistoricos.length; i++) {
                var sss=placehistoricos[i].split(',');
                var lat=parseFloat(sss[0]);
                var lon=parseFloat(sss[1]);
           marker = new google.maps.Marker({
                       position: new google.maps.LatLng(lat,lon),
                       map: map,
                        title:placehistoricosdescr[i][0],
                        zIndex: placehistoricosdescr[i][2],
                        html: placehistoricosdescr[i][3],
                       animation: google.maps.Animation.DROP                       
                     });
                     
                     markers.push(marker);
                     var contentString = "Algunos contenidos";
                     map.setZoom(12);
                     map.panTo(marker.position);

            google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
                     
            }   
      }
      function emergencias() {
        deleteOverlays();
        for (var i = 0; i < placeemergencias.length; i++) {
            var sss=placeemergencias[i].split(',');
                var lat=parseFloat(sss[0]);
                var lon=parseFloat(sss[1]);             
           marker = new google.maps.Marker({
                       position: new google.maps.LatLng(lat,lon),
                       map: map,
                        title:placeemergenciasdescr[i][0],
                        zIndex: placeemergenciasdescr[i][2],
                        html: placeemergenciasdescr[i][3],
                       animation: google.maps.Animation.DROP                       
                     });                     
                     markers.push(marker);
                     var contentString = "Algunos contenidos";
                      map.setZoom(12);
                      map.panTo(marker.position);

            google.maps.event.addListener(marker, "click", function () {
                infowindow.setContent(this.html);
                infowindow.open(map, this);
            });
                     
            }   
      }

      
      function setAllMap(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }
       function deleteOverlays() {
               setAllMap(null);
               markers = [];
             }
      //google.maps.event.addDomListener(window, 'load', initialize);
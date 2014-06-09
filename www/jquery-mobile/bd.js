    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
	//	navigator.splashscreen.hide();         
		//document.addEventListener("offline", onOffline, false);    
        var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(populateDB);
        
       // checkConnection();
        
 }



 var online;
 function checkConnection() {
        var networkState = navigator.network.connection.type;
        var states = {};
    states[Connection.UNKNOWN]  = '1';
    states[Connection.ETHERNET] = '1';
    states[Connection.WIFI]     = '1';
    states[Connection.CELL_2G]  = '1';
    states[Connection.CELL_3G]  = '1';
    states[Connection.CELL_4G]  = '1';
    states[Connection.NONE]     = '0';
    online=states[networkState];
    if (online=='0'){showAlert();}
    }
        
function showAlert() {
    navigator.notification.alert(
    'Algunas caracteristicas no estaran disponibles',     // mensaje (message)
    'Sin internet',            // titulo (title)
    'Cerrar'                // nombre del bot�n (buttonName)
    );
    }


function transaction_error(tx, error) {
    alert("Database Error: " + error);
}

function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS clima');
	tx.executeSql('DROP TABLE IF EXISTS gastronomia');
    tx.executeSql('DROP TABLE IF EXISTS diversion');
    tx.executeSql('DROP TABLE IF EXISTS emergencia');
    tx.executeSql('DROP TABLE IF EXISTS historicos');
    tx.executeSql('DROP TABLE IF EXISTS undia');
    tx.executeSql('DROP TABLE IF EXISTS desimggas');
    tx.executeSql('DROP TABLE IF EXISTS desimghis');
    tx.executeSql('DROP TABLE IF EXISTS desimgdia');
    tx.executeSql('DROP TABLE IF EXISTS imgdiv');
    tx.executeSql('CREATE TABLE IF NOT EXISTS clima(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,iframe,js,imagen)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS gastronomia(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS diversion(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,actividad,horario,direccion,contactos,coordenadas,descripcion)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS emergencia(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,servicio,telefono,domicilio,municipio,coordenadas,img)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS historicos(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,lugar,horario,direccion,coordenadas,descripcion,imagen)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS undia(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,hora,actividad)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS desimggas(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,descripcion,imagen)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS desimghis(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,descripcion,imagen)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS desimgdia(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,titulo,descripcion,imagen)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS imgdiv(id INTEGER PRIMARY KEY AUTOINCREMENT,clave,imagen)');

////////clima completo
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C01','<div id="TT_RyBkEkkEEffcdQGA7AqzjzjjDWlALfI16jhjxjcikEe"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_RyBkEkkEEffcdQGA7AqzjzjjDWlALfI16jhjxjcikEe"></script>','img/ahome/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C02','<div id="TT_tChkk1kEkBUc88IU7AqzjjDzzWuU1zD16jhjBDZyE1e"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_tChkk1kEkBUc88IU7AqzjjDzzWuU1zD16jhjBDZyE1e"></script>','img/angostura/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C03','<div id="TT_vCeEEEEkEMrBnQGKKfqjDzzDDWaK1ptEpzhzxjZiEku"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_vCeEEEEkEMrBnQGKKfqjDzzDDWaK1ptEpzhzxjZiEku"></script>','img/badiraguato/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C04','<div id="TT_RihE1kEkkBB9YFsUKAVjzjDDzWnUTz11JzxDxzsC11W"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_RihE1kEkkBB9YFsUKAVjzjDDzWnUTz11JzxDxzsC11W"></script>','img/concordia/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C05','<div id="TT_vCBEEkE1kCjBEFGA7AqjDjzzjWaALf11JjxzxzsyEEu"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_vCBEEkE1kCjBEFGA7AqjDjzzjWaALf11JjxzxzsyEEu"></script>','img/cosala/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C06','<div id="TT_vihEEE1k1B8BYFhU7fVDjjDzD6aU1zWE6zhjhDciE1W"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_vihEEE1k1B8BYFhU7fVDjjDzD6aU1zWE6zhjhDciE1W"></script>','img/culiacan/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C07','<div id="TT_tCeEk1kkknKa4FhK7AVjjjjzD6uK1pl1JjBDxzsyk1W"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_tCeEk1kkknKa4FhK7AVjjjjzD6uK1pl1JjBDxzsyk1W"></script>','img/choix/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C08','<div id="TT_Ryh11kkk18U9YFsUjfqDjjzzjWlUMzz1pjxzxjciEkW"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_Ryh11kkk18U9YFsUjfqDjjzzjWlUMzz1pjxzxjciEkW"></script>','img/elota/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C09','<div id="TT_tCBEkkEkEhA9EehAKfVzjjzDDWuATfd1pzhjhjsik1W"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_tCBEkkEkEhA9EehAKfVzjjzDDWuATfd1pzhjhjsik1W"></script>','img/escuinapa/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C10','<div id="TT_Rie11EEkkrrB48hK7AqDzDjzD6aK1pM1pDxDBzZCEke"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_Rie11EEkkrrB48hK7AqDzDjzD6aK1pM1pDxDBzZCEke"></script>','img/el_fuerte/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C11','<div id="TT_vihE1kkEkcY9Y8GUjAVzzzzzzWuULz8EpzBDxjcCkkW"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_vihE1kkEkcY9Y8GUjAVzzzzzzWuULz8EpzBDxjcCkkW"></script>','img/guasave/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C12','<div id="TT_vihk1k11kaDBYFsUKAqjDjzjD6uULzzkJjBDBzcC11W"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_vihk1k11kaDBYFsUKAqjDjzjD6uULzzkJjBDBzcC11W"></script>','img/mazatlan/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C13','<div id="TT_RCe1EE1EEQMc4esKKAVjjDDjDWaK1pQE6jhjBjZC11W"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_RCe1EE1EEQMc4esKKAVjjDDjDWaK1pQE6jhjBjZC11W"></script>','img/mocorito/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C14','<div id="TT_tieEEkkkEtSc4eGKjfqjDzzjzWlKLpM1pzBjhjsyEku"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_tieEEkkkEtSc4eGKjfqjDzzjzWlKLpM1pzBjhjsyEku"></script>','img/el_rosario/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C15','<div id="TT_Rih1kkkkkaYaYeGUKfVDzjzzz6lUMz8kJDhjxDZyEke"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_Rih1kkkkkaYaYeGUKfVDzjzzz6lUMz8kJDhjxDZyEke"></script>','img/salvador_alvarado/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C16','<div id="TT_vihkEkkE1a1aYeIU7AVzzDjjz6nUMzD1pDxjxDcC11u"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_vihkEkkE1a1aYeIU7AVzzDjjz6nUMzD1pDxjxDcC11u"></script>','img/san_ignacio/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C17','<div id="TT_RCekk1EEkQ4Bp8sKKfVjjjjDjWlKMplEpzhDBzZykkW"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_RCekk1EEkQ4Bp8sKKfVjjjjDjWlKMplEpzhDBzZykkW"></script>','img/sinaloa_de_leyva/portada.jpg']);
tx.executeSql('INSERT INTO clima(clave,iframe,js,imagen) VALUES(?,?,?,?)',['C18','<div id="TT_vCeEE1E11KQc48GK7fVzzDzjzWlKTpQkpzhzBDsCkku"></div>','<script type="text/javascript" src="http:www.tutiempo.net/widget/eltiempo_vCeEE1E11KQc48GK7fVzzDzjzWlKTpQkpzhzBDsCkku"></script>','img/navolato/portada.jpg']);

///////gastronomia  
//ahome espa�ol
//tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Restaurante Santa Anita','Gabriel leyva y Miguel Hidalgo','25.789370361019625,-108.99567246437073','Lunes-Domingo 7:00am-11:00pm','816 7046','Cocina Internacional','Cocina regional']);
//tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Patio 618','Canuto Ibarra 618 sur, 81248 Los Mochis','25.7904657,-108.985882','Lunes-Mi�rcoles 7:30-23:30 Jueves-S�bado 7:30-13:30 Domingos 8:00-18-00','812 4370','Cocina Internacional','Cafeteria']);
//tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Manzara Gaudir','Antonio Rosales 569�Centro, Los Mochis, Sinaloa 81200','25.7911099,-108.9995277','Lunes-Domingo 9:30-11:00pm','815 1818','Cocina Internacional','Ensaladas y extensa cava de vinos y cerveza']);
//tx.executeSql('INSERT INTO gastronomia (clave,restaurante,direccion,coordenadas,horario,telefono,especialidad,otros) VALUES (?,?,?,?,?,?,?,?)',['G01E','Mr. Owen�s ','Gabriel leyva y lazaro cardenas','25.797620561768806,-108.98949265480042','Lunes � Mi�rcoles de 6:00am-12:00pm  Jueves- S�bado de 6:00am-1:00pm','818 1042','Cocina Internacional','Cortes finos y vinos.']);

////////diversion
//ahome espa�ol
//tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Cerro de la memoria','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.80664998110525,-108.96858215332031','Hace poco tiempo la fe cat�lica llev� a la cima del cerro una gigantesca estatua de la Virgen del Valle, quien es visitada constantemente por los creyentes.']);
//tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Puerto de Topolobampo','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.599384035660474,-109.05303955078125','Topolobampo es una gran bah�a formada por muchas ensenadas, islas y esteros, todas ba�adas por el Mar de Cort�s. Fue fundado en 1886 por el Americano, Albert K. Owen. Aqu� podr�s empezar tu recorrido tur�stico a bordo de lanchas dirigidas por locales.']);
//tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Isla El Farallon','','','Sinaloa Tours: 8184993<br/>SoleiTours: 8122005 ','25.43579246205943,-109.37679290771484','Es una saliente rocosa marina, la 2a. m�s grande del mundo en su g�nero, se encuentra incrustada en medio del Mar de Cort�s, es considerada como patrimonio de la humanidad. Se le reconoce como un santuario y h�bitat natural para cientos de focas y lobos marinos que se albergan durante los meses de octubre a abril, adem�s de delfines y toninas que permanecen todo el a�o.']);
//tx.executeSql('INSERT INTO diversion (clave,actividad,horario,direccion,contactos,coordenadas,descripcion) VALUES (?,?,?,?,?,?,?)', ['D01E','Isla de Pajaros','','','Sr. Guadalupe  Elguezebal: 6681 015185','25.618888581489173,-109.0121841430664','Se localiza en las inmediaciones de la bah�a de Topolobampo; en esta isla viven diferentes especies de patos, garzas, pel�canos y otras aves.']);

////emergencias completo
//ahome
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Cruz Roja','812-6117','Guillermo Prieto 701��Centro, 81200 Los Mochis, Sinaloa','Ahome','25.793587946254974,-108.98969650268555','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Hospital','816 9000','Bouelvard Jiquilpan 639��Sector Fatima, 81700 Los Mochis, Sinaloa','Ahome','25.790419458353274,-108.9858341217041','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Polic�a','815 6391','Blvd. Centenario y Blvd. Macario Gaxiola ','Ahome','25.768005785430802,-108.99171352386475','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Turismo','8152600','Plaza punto, blvd. Rosales esquina con centenario','Ahome','25.78431666051942,-109.00349378585815','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Farmacias','815 7779','Blvd. Rosales esquina con H. Valdez ','Ahome','25.799619431200615,-108.99393439292908','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E01E','Taxis','812 1597','Leyva 370 centro, Los Mochis.','Ahome','25.78964664358165,-108.99484634399414','<img src="img/taxi.png" />']);
//angostura
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E02E','Cruz Roja','<a href="tel:+52 6977 340339">016977 340 339</a>','CLL GABRIEL LEYVA SOLANO S/N, ANGOSTURA CENTRO, ANGOSTURA, C.P 81600, SIN','ANGOSTURA','25.366702876885426,-108.15684850447235','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E02E','Hospital','01697 7340 470','FRANCISCO I MADERO 94, ANGOSTURA CENTRO, ANGOSTURA, C.P 81600, SIN','ANGOSTURA','25.366811454188283,-108.1565995953448','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E02E','Polic�a','01 697 7340 033','CARRETERA GUAM�CHIL � ANGOSTURA KM. 13.3 C.P. 81600 ','ANGOSTURA','25.36490358126189,-108.15414483778534','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E02E','Turismo','016977340004 /075','CRR A ANGOSTURA S/N, ANGOSTURA CENTRO, ANGOSTURA,�C.P 81600,�SIN','ANGOSTURA','25.365033489183638,-108.15403540287173','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E02E','Farmacias','(697) 734 0872','CLL CONSTITUCION 21, ANGOSTURA CENTRO, ANGOSTURA, C.P 81600, SIN','ANGOSTURA','25.366964625498067,-108.15618760777818','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E02E','Taxis','(697) 734 0045','CRR A ANGOSTURA 84, ANGOSTURA CENTRO, ANGOSTURA, C.P 81600, SIN','ANGOSTURA','25.364009739573184,-108.16029889755975','<img src="img/taxi.png" />']);
//badiraguato
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E03E','Cruz Roja','16977410445','Gabriel Leyva s/n','Badiraguato','25.36200595657845, -107.55090477930679','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E03E','Hospital','16977410027','Gabriel Leyva s/n','Badiraguato','25.351137613169385,-107.55496027933731','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E03E','Polic�a','16977410109','Blvd.Juan S.Millan s/n','Badiraguato','25.36542816751639,-107.55347165333404','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E03E','Turismo','16977410108','Gabriel Leyva s/n','Badiraguato','25.362427679024893,-107.55106302963867','<img src="img/turismo.png" />']);
//concordia
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E04E','Cruz Roja','(694) 96 8 10 16','Carretera Mazatlan-Durango','Concordia','32.3575091,-117.05006459999998','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E04E','Hospital','(694) 96 8 03 38','Carretera Mazatlan-Durango','Concordia','32.3575091,-117.05006459999998','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E04E','Polic�a','(694) 96 8 03 76','Esquina, Fco. Javier Mina y Benito Juarez. Col. Centro','Concordia','23.2862511,-106.069279','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E04E','Turismo','(694) 96 8 00 02','Esquina, Fco. Javier Mina y Benito Juarez. Col. Centro','Concordia','23.2862511,-106.069279','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E04E','"Progreso"','(694) 96 8 55 88','Benito Juarez #18. col. Centro','Concordia','23.2874068,-106.0684286','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E04E','"Las Populares"','(694) 96 8 10 20','Benito Juarez y Angel Flores Col. Centro','Concordia','23.2880556,-106.06777779999999','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E04E','"San Sebastian"','(694) 96 80 007','Miguel Hidalgo y Angel Flores Col. Centro','Concordia','23.2880556,-106.06777779999999','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E04E','"Similares"','(694) 96 8 05 00','Vicente Guerrero #5 Local 2. Col. Centro','Concordia','23.2888744,-106.0672553','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E04E','Taxis','(669)165 28 78','Carretera Mazatlan-Durango','Concordia','23.2880556,-106.06777779999999','<img src="img/taxi.png" />']);
//cosala
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Cruz Roja','01 696 9650318','Carretera Internacional s/n    Magisteria','Cosal�','24.410869352970398,-106.69567286630098','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Hospital santos ballardo','01 696 96 5 0111 /0311','Calle Guerrero s/n Col Centro','Cosal�','24.41078060090469,-106.69084176920319','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Polic�a','01 696 9650 340/060','Rosales s/n Zona Centro','Cosal�','24.41213941209543,-106.69082879682009','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Turismo','01696 965 11 19','Rosales y Gabriel Leyva s/n Zona Centro','Cosal�','24.411809686435234,-106.69169783254091 ','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Farmacias','16969650827','Gabriel Leyva Solano s/n','Cosal�','24.4115165962365,-106.69256686826174','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Taxis','045 696 108 92 78','Gabriel Leyva Solano s/n','Cosal�','24.411719317029853,-106.69163345952455','<img src="img/taxi.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E05E','Hospital','01 696 9650011 / 96 50311','Vicente Guerrero s/n zona centro','Cosal�','24.4075712,-106.6877465','<img src="img/hospital.png" />']);
//culican
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E06E','Cruz Roja','6677520707    060','Leyva solano y Paliza ','Culiac�n','24.80257985665335, -107.39258318446122','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E06E','Hospital','6677137230','Av Alvaro Obregon y Dr. Romero','Culiac�n','24.819992310835737,-107.39629536173783','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E06E','Polic�a','6677130110','Bachigualato','Culiac�n','24.796482971881247,-107.40039377711258','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E06E','Turismo','6677142461','Av. 16 de Septiembre #1726 Local a-1','Culiac�n','24.796508538517518,-107.41074308059655','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E06E','Taxis','667 716 1760','Rub� 352, 80000','Culiac�n','24.80135608588004,-107.39554945879974','<img src="img/taxi.png" />']);
//choix
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Cruz Roja','698 866 0777','CLL 20 DE NOVIEMBRE 80, CHOIX CENTRO','Choix','26.712622,-108.323923','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Hospital','698 866 0015','20 de Noviembre 1�Centro, 81700 Choix, Sinaloa','Choix','26.712837,-108.323482','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Polic�a','698 866 0121','Blvd. Jos� �ngel Espinoza Ferrusquilla, Choix, Sin','Choix','26.704561,-108.329392','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Turismo','698 106 1627','Calle Juarez # 5 col. Centro','Choix','26.706782,-108.321647','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Farmacias','698 866 0026','Vicente Guerrero 14 Centro, Choix','Choix','26.708983,-108.32277','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E07E','Taxis','698 866 0112','calle Francisco R. Serrano Col. Centro','Choix','26.708253,-108.323001','<img src="img/taxi.png" />']);
//elota
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E08E','Cruz Roja','9610009','Colonia Loma Linda. av.Gabriel Leyva s/n. ','Elota','23.919201,-106.88690200000002','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E08E','Hospital','9611478','Colonia Arroyito. Bulevar Luis Donaldo Colosio s/n','Elota','23.9209978,-106.886554700000001','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E08E','Polic�a','9610167','Colonia Miramar. Av.Chamisal entre Guadalupe Victoria y Sur 10.','Elota','37.6735925,-1.6968357000000651','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E08E','Turismo','9610111','Colonia Centro.Av.Gabriel Leyva Solano s/n.','Elota','23.9168852,-160.8909730000002','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E08E','Farmacias','9616553','Colonia Centro Av. pino Suarez.Local 5.','Elota','23.918737155731275,-106.89470977801818','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E08E','Taxis','6961052587','Colonia Centro Av. Pino Suarez Local 5.','Elota','23.918737155731275,-106.89470977801818','<img src="img/taxi.png" />']);
//escuinapa
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E09E','Cruz Roja','(695) 953-31-55','Hidalgo y Occidente s/n','Escuinapa','22.500278,-105.465978','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E09E','Hospital Gral.','(695) 953-03-08','Gabriel Leyva # 300','Escuinapa','22.495385,-105.463819','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E09E','Polic�a Mpal.','(695) 953-00-18 y 113 gratis desde celular.','Fco. I. Madero y Av. De la Juventud','Escuinapa','22.494277,- 105.463181','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E09E','Turismo Mpal.','(695) 950019 ext. 807','Palacio Municipal s/n','Escuinapa','22.500620,-105.464011','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E09E','Farmacias','Farmacia San Juan. Tel: (695) 9531727','Benito Juarez','Escuinapa','22.500554,-105.463511','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E09E','Taxis','(695) 9530055','Centro','Escuinapa','22.500723,-105.463982','<img src="img/taxi.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E09E','IMSS','01 695 953 0405','Carretera Internacional Kil�metro 11.6, Centro, 82400�','Escuinapa','22.500450,-105.460555','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E09E','ISSSTE','01 (695) 953 0999','Av. Sandra Calderon s/n','Escuinapa','22.493770,-105.470635','<img src="img/hospital.png" />']);
//el fuerte
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E10E','Hospital Rural No.12 IMSS Antonio Cece�a','01 698 893 0469','Torres Centro, El Fuerte, Sin.','El Fuerte','26.406883,-108.620121','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E10E','Servicios de Salud de Sinaloa','01 698 894 0462','Carretera Mochis-San Blas Kilometro 35.5 Col. 8 de Octubre, Centro 81800','El Fuerte','26.072990, -108.771404','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E10E','Policia Ministerial del Estado de Sinaloa','01 698 893 0654','Jos� Mar�a Morelos 501 Centro, 81820','El Fuerte','26.424193,-108.617331','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E10E','Turismo ','01 698 893 0145','5 de Mayo s/n Col. Centro 81820','El Fuerte','26.421529,-108.619743','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E10E','Seguridad Publica','698 893 0307','carretera El Fuerte- Los Mochis','El Fuerte','26.402955,-108.621717','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E10E','Bomberos','698 893 1707','carretera El Fuerte- Los Mochis','El Fuerte','26.406453,-108.619557','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E10E','Cruz Roja','698 893 0307','carretera El Fuerte- Los Mochis','El Fuerte','26.406422,-108.619493','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E10E','Protecci�n Civil','698 109 5399','carretera El Fuerte- Los Mochis','El Fuerte','26.407001,-108.620067','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E10E','Farmacias','698 893 0986','santos degollado # 211 col centro','El Fuerte','26.42102,-108.620937','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E10E','Taxis','698 106 3980','Constituci�n','El Fuerte','26.41954,-108.620912','<img src="img/taxi.png" />']);
//guasave
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Cruz Roja','(687) 872 0423','Avenida Doctor de la Torre y Boulevard Alfonso G. Calder�n.','Guasave','25.560489,-108.467245','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Hospital IMSS','(687) 872 0603','Boulevard 16 de Septiembre y Macario Gaxiola','Guasave','25.569572,-108.462578','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Polic�a','(687) 872 1232','Carretera Le�n Fonseca SN, Ocoro, 81103 Guasave, Sinaloa ?','Guasave','25.588849,-108.461446','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Turismo','(687) 872 9234','Av. Lazaro C�rdenas No. 109, Colonia del Bosque','Guasave','25.564796,-108.471118','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Taxis','687 872 0309','16 de Septiembre 1038  Centro, 81000 Guasave, Sinaloa','Guasave','25.577479,-108.463597','<img src="img/taxi.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Bomberos','687 872-0422','Francisco Gonz�lez Bocanegra y L�pez Mateos, colonia �ngel Flores, C.P. 81000','Guasave','25.560416,-108.467857','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E11E','Polic�a Municipal de Tr�nsito','(687) 872 1818','Adolfo L�pez Mateos y F. �ngeles','Guasave','25.565091,-108.471365','<img src="img/policia.png" />']);
//mazatlan
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Cruz Roja','(669) 9 85 15 14 ','Calle Gral. I Zaragoza No. 1801 ','Mazatl�n','23.207537858672794,-106.4121235221985','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Hospital','(669) 9 86 56 76 ','Av. Kumate y Rafael Buelna','Mazatl�n','23.24281635743909,-106.44077197069589','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Polic�a Ministerial Tur�stica ','(669) 9 14 32 22 ','Av.  Playa Gaviotas No. 202 Local 9 Zona Dorada','Mazatl�n','23.24159781958606,-106.44963956354599','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Turismo','(669) 9 15 66 00 ','Av. Del Mar No. 882 Fracc. Teller�as ','Mazatl�n','23.229120797697032,-106.43068082982961','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Farmacias','(669) 9 13 42 77 ','Av. Camar�n S�balo N0. 100','Mazatl�n','23.245250870512052,-106.45315238650818','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Taxis','(669) 9 86 11 11','Eduardo Valdez Vizcarra 820 Estadio ','Mazatl�n','23.238481368568813,-106.43234715218011','<img src="img/taxi.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Taxis','(669) 9 85 28 28 ','Rio P�nuco 129 Col Ferrocarrilera','Mazatl�n','23.2154572,-106.41720750000002','<img src="img/taxi.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Pulmon�as ','(669) 9 85 07 01 ','Angel Flores 1113 - A Entre Carvajal Tte. Azueta Col. Centro ','Mazatl�n','23.200616208297795,-106.41868697546312','<img src="img/taxi.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Aurigas ','(669) 9 81 35 35 ','Calle Los Delfines s/n Fracc. Alarcon ','Mazatl�n','23.238496856631602,-106.44549020234376','<img src="img/taxi.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Proteccion civil','(669) 9 84 44 99 ext. 2200','Agustin Melgar y Rafael Buelna Tenorio s/n Col. Benito Ju�rez','Mazatl�n','23.230289645940786,-106.4072419004408','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Profeco','(669) 9 82 36 70/  9 82 52 08','Calle 21 de marzo No. 208 Col. Centro.','Mazatl�n','23.20058518239806,-106.42140028722815','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E12E','Angeles Verdes','078,  9 82 2416 ','Emilio Barragan y Prolongaci�n  Carnaval  s/n  2do Piso.','Mazatl�n','23.18694262638797,-106.42127863735658','<img src="img/policia.png" />']);
//mocorito
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E13E','Cruz Roja','6737350298','Carretera Mocorito - Guamuchil','Mocorito','25.4676802,-108.09047090000001','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E13E','Hospital','6737350299','Obreg�n e Hidalgo S/N','Mocorito','25.48187535255978,-107.92278917202759','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E13E','Polic�a','6737350129','Madero centro historico','Mocorito','25.485739665369177,-107.92227150568772','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E13E','Turismo','6737350292','Miguel Hidalgo #32','Mocorito','25.4676802,-108.09047090000001','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E13E','taxis','673 735 0500','Juarez y dr Jose Ley','Mocorito','25.482993982200725,-107.92108596930314','<img src="img/taxi.png" />']);
//el rosario
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E14E','Cruz Roja','6949521045','carretera internac. No. 15','Rosario','22.998416,-105.857338','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E14E','Hospital','6949522070','calle 20 de Noviembre','Rosario','22.995041,-105.856627','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E14E','Polic�a','6949520551','Av. Conalep s/n Av. Rotarismo','Rosario','22.992220,-105.864385','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E14E','Turismo','6941150051','Angel Flores  s/n, Col. Centro','Rosario','22.991039,-105.853694','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E14E','Farmacias','6949522255','Angel Flores  s/n, Col. Centro','Rosario','22.990721,-105.854703','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E14E','Taxis','6949520124','Plazuela Municipal','Rosario','22.990024,-105.854579','<img src="img/taxi.png" />']);
//salvador alvarado
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E15E','Cruz Roja','673-7320543','Carr. Internacional Sur Km. 1524 S/n (Bebelamas Infonavit). 81460','SALVADOR ALVARADO','25.4545200758969,-108.07374328305','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E15E','Hospital','673732-03-65','Agustina Ramirez y Nicolas Bravo C.P. 81400','SALVADOR ALVARADO','25.4630318,-108.0836497999','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E15E','Polic�a','732-0637, 38 Y 39;','UNIDAD MUNICIPAL DE PROTECCI�N CIVIL DE SALVADOR ALVARADO','SALVADOR ALVARADO','25.455488766959785,-108.07706830713198','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E15E','Turismo','6731157673','Presidencia Municipal','SALVADOR ALVARADO','25.4457651,-108.0688104000','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E15E','Farmacias','01 673 732 5360','Ignacio Zaragoza SN, centro','SALVADOR ALVARADO','25.4599898,-108.08246810000','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E15E','Taxis','01 673 732 5544','Agustina Ram�rez 145','SALVADOR ALVARADO','25.4599898,-108.08246810000','<img src="img/taxi.png" />']);
//san ignacio
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E16E','CRUZ ROJA','(696) 962-5500','Calle Gabriel Leyva # 191, San Ignacio Centro, San Ignacio,�C.P 82910,�Sin.','SAN IGNACIO','23.937748922730567,-106.43138629685046','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E16E','HOSPITAL INTEGRAL','(696) 963-0183','Calle Gabriel Leyva, entre callejon #2 y calle sin nombre, San Ignacio.','SAN IGNACIO','23.944684040409403,-106.42323506365415','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E16E','POLIC�A','(696) 962-5537 Y (696) 962-5186','Calle Gabriel Leyva y 5 de Mayo s/n, Col. Centro, Palacio Municipal. San Ignacio C.P. 82900, Sin.','SAN IGNACIO�','23.939276200511873,-106.42414701471921','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E16E','TURISMO','(696) 962-5254','Calle Gabriel Leyva y 5 de Mayo s/n, Col. Centro, Palacio Municipal. San Ignacio C.P. 82900, Sin.','SAN IGNACIO�','23.94028620414026,-106.42483902464505','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E16E','FARMACIAS','(696) 962-5345','Calle Gabriel Leyva s/n Centro, San Ignacio.','SAN IGNACIO','23.939035955766656,-106.4282347012579','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E16E','CENTRO DE SALUD','(696) 962-5055','Avenida Sacrificio, Calle Labastida Ochoa, San Ignacio.','SAN IGNACIO','23.93997977183587,-106.43083107958444','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E16E','IMSS','(696) 962-5427 y (696) 962-5273','Avenida Sacrificio, Calle Labastida Ochoa, San Ignacio.','SAN IGNACIO','23.901325048965,-106.43129778395303','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E16E','ISSSTE','(696) 962-5407','Carretera a Coyotitan, Col. Laveaga, San Ignacio.','SAN IGNACIO','23.938006330364548,-106.4311422158301','<img src="img/hospital.png" />']);
//sinaloa de leyva
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E17E','Cruz Roja','01 687 875 0623','Benito Juarez y Daniel Gamez #70 ','Sinaloa de Leyva, Sinaloa','25.82125366357,-108.22208077797927','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E17E','Hospital','01 687 875 0212','Benito Ju�rez 898�','Sinaloa de Leyva, Sinaloa','25.81654064161274,-108.22967679390945','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E17E','Polic�a','01 687 875 0066','Eligio Rojo s/n.','Sinaloa de Leyva, Sinaloa','25.821813805347272,-108.2225528467659','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E17E','Turismo','01 687 875 0339','Hidalgo y Morelos','Sinaloa de Leyva, Sinaloa','25.822306341617175,-108.22200567612686','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E17E','Farmacias','01 687 875 0203','Madero y Dr. De la torre','Sinaloa de Leyva, Sinaloa','25.81634748097399,-108.23013813386001','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E17E','Taxis','01 687 140 4188','Dr. De la torre y Obregon.','Sinaloa de Leyva, Sinaloa','25.822412574661694,-108.22287471184768','<img src="img/taxi.png" />']);
//navolato
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E18E','Cruz Roja','672 7270255','alameda s/n','navolato','24.7663349655051,-107.69617228619','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E18E','Hospital','672 7340072','calzada almada s/n','navolato','24.763373350566,-107.6946487914','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E18E','Polic�a','672 7270228','benito juaez no. 7 nte. ','navolato','24.764444995704,-107.69810347669','<img src="img/policia.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E18E','Turismo','672 7270933 ext. 1331','Jes�s Almada No. 508 pte. Col. Centro,','navolato','24.7663349655051,-107.69617228619','<img src="img/turismo.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E18E','Farmacias','(672)727-1000','ANGEL FLORES 76, SATAYA, NAVOLATO','navolato','24.750555367255,-107.6913892107','<img src="img/hospital.png" />']);
tx.executeSql('INSERT INTO emergencia(clave,servicio,telefono,domicilio,municipio,coordenadas,img) VALUES(?,?,?,?,?,?,?)',['E18E','Taxis','667 164 7540','Av General Alvaro Obreg�n 2259','culiacan','24.762944689922,-107.7010646354','<img src="img/taxi.png" />']);








////historicos
//ahome espa�ol
//tx.executeSql('INSERT INTO historicos(clave,lugar,horario,direccion,coordenadas,descripcion,imagen) VALUES(?,?,?,?,?,?,?)',['H01E','Jard�n Bot�nico Benjam�n F. Johnston ','Lunes a Domingo de 05:00 a 21:00 horas','Rosales sin numero. Col. Americana�Los Mochis�Sinaloa','25.78837406424281,-109.00188446044922','La apertura de este bello lugar al publico fue el 6 de mayo de 1963, desde entonces cuenta con un magnifico centro de observaci�n, estudio y esparcimiento.','img/ahome/personaje_portada.jpg']);
//Angostura
//Badiraguato
//Concordia
//Cosal�
//Culiac�n
//Choix
//Elota
//Escuinapa
//El Fuerte
//Guasave
//Mazatl�n
//Mocorito
//Rosario
//Salvador Alvarado
//San Ignacio
//Sinaloa
//Navolato


////Actividad 24 horas completo
//ahome
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','08:00 hrs','Desayuno cualquier hotel que nos visite']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','09:00 hrs','Visita al Jardin Botanico']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','10:00 hrs','Museo regional valle del Fuerte']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','11:00 hrs','Paseo por la plazuela 27 de septiembre, visitando el centro en general']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','12:00 hrs','Salida a topolobampo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','13:00 hrs','Recorrido Ohuira Bay, el Malecon y Paseo en lancha']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','14:00 hrs','Comida en la Isla el Maviri']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','15:00 hrs','*Comida']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','16:00 hrs','Regreso a Los mochis (parada en la cueva de los murcielagos)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','17:00 hrs','Plaza Paseo, Plaza Punto o Plaza Encuentro, cualquiera de los 5 Casinos']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','18:00 hrs','Visita a la pergola, caminar el Cerro de la Memoria para ver la ciudad con una amplia vista y ver el sunset.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','19:00 hrs','Cena']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A01E','20:00 hrs','Bares en la Plaza Punto']);
//angostura
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','08:00 hrs','Desayuno']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','09:00 hrs','traslado a cooperativa brianta del pacifico']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','10:00 hrs','Bahia Santa Maria  isla la coyotia']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','11:00 hrs','Bahia Santa Maria dunas de altamura']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','12:00 hrs','Bahia Santa Maria Isla de los pajaros']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','13:00 hrs','Bahia Santa Maria  avistamiento de delfines']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','14:00 hrs','Bahia Santa Maria comida (isla el guadaron)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','15:00 hrs','Bahia Santa Maria comida ( isla el guadaron)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','16:00 hrs','Bahia Santa Maria Isla de los pajaros azules( el rancho)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','17:00 hrs','Regreso al Pueblo de la Reforma']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A02E','18:00 hrs','Fin del dia']);
//badiraguato
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','08:00 hrs',' desayuno']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','09:00 hrs','Traslado a Surutato']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','10:00 hrs','Traslado a Surutato']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','11:00 hrs','Traslado a Surutato']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','12:00 hrs','senderismo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','13:00 hrs','senderismo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','14:00 hrs','senderismo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','15:00 hrs','Comida']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','16:00 hrs','Tirolesa Caba�as la meza']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','17:00 hrs','Mirador']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','18:00 hrs','Coffe Break']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','18:00 hrs','Fin del dia']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A03E','20:00 hrs','pernota']);
//Concordia
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','08:00 hrs','Desayuno en la "Reserva de La Chara Pinta", Ejido el Palmito, Concordia']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','09:00 hrs','Recorrido por la Reserva, observacion de aves y senderismo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','10:00 hrs','Recorrido por la Reserva, observacion de aves y senderismo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','11:00 hrs','Salida a Copala, Concordia.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','12:00 hrs','Traslado a Copala, Concordia. ']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','13:00 hrs','Comida Copala, Concordia.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','14:00 hrs','Comida Copala, Concordia.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','15:00 hrs','Recorrido por Copala']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','16:00 hrs','Salida a la cabecera municipal de Concordia.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','17:00 hrs','Recorrido artesanal']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','18:00 hrs','Recorrido por el Boulevard de las mueblerias de Mesillas, Concordia']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','19:00 hrs','Descanso']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A04E','20:00 hrs','Cena, Restaurant Granero']);
//Cosal�
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','08:00 hrs','Llegada al Pueblo y desayuno']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','09:00 hrs','Traslado a la Reserva Ecol�gica']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','10:00 hrs','Tirolesa']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','11:00 hrs','Tirolesa']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','12:00 hrs','Senderismo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','13:00 hrs','Visita a Museo y a las guacamayas']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','14:00 hrs','Regreso al pueblo y comida ']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','15:00 hrs','Traslado a Vado Hondo ']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','16:00 hrs','Tiempo de recreaci�n']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','17:00 hrs','Tiempo de recreaci�n']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','18:00 hrs','Regreso al pueblo visita a museo ']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','19:00 hrs','Paseo por las calles del pueblo, plazuela y kiosko']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A05E','20:00 hrs','Cena y Descanso ']);
//Culiac�n
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','08:00 hrs',' Desayuno']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','09:00 hrs','Traslado Zoologico']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','10:00 hrs','Zool�gico']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','11:00 hrs','Zool�gico']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','12:00 hrs','Traslado Jard�n Bot�nico']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','13:00 hrs','Jard�n Bot�nico']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','14:00 hrs','MIA (museo interactivo sobre las adicciones)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','15:00 hrs','Comida']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','16:00 hrs','Traslado Centro de Ciencias']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','17:00 hrs','Centro de Ciencias']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','18:00 hrs','Traslado parque las Riberas']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','19:00 hrs','Paseo del Angel -Barrio Historico-Cena.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A06E','20:00 hrs','Descanso']);
//Choix
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','08:00 - 09:00 hrs','LLEGAR AL CENTRO REPRODUCTOR DE ALEVINES']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','10:00 - 11:00 hrs','VISITAR LAS INSTALACIONES DE LA PRESA LUIS DONALDO COLOSIO MURRIETA "HUITES"']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','12:00 hrs','SALIR A AGUAS TERMALES DE AGUA CALIENTE DE BACA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','13:00 - 14:00 hrs','COMIDA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','15:00 hrs','LLEGAR A LA CABECERA MUNICIPAL']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','16:00 hrs','SALIDA A LA COMUNIDAD INDIGENA DE BAYMENA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','17:00 hrs','MUESTRA GASTRONOMICA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','18:00 hrs','DEMOSTRACIONES DE DANZAS INDIGENAS']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','20:00 hrs','FIN DEL TOUR']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','','OTRO RECORRIDO']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','08:00 hrs','Desayuno Baymena y Danza Ind�gena']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','09:30 hrs','Recorrido por el vaso de la presa en lancha']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','11:30 hrs','Aguas termales de Juibaca, Cortina, Rio y Puente Huites']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','13:00 hrs','Comida tipica en Agua Caliente de Baca y Aguas termales']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','14:00 hrs','Traslado a Las Cruces']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','14:30 hrs','Caba�as.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','15:30 hrs','Regreso a Cabecera municipal de Choix']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','16:30 hrs','Recorrido por la cabecera municipal']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A07E','18:00 hrs','FIN DEL TOUR']);
//Elota
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','08:00 hrs','DESAYUNO EN ELOTA PUEBLO SE�ORIAL']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','09:00 hrs','RECORRIDO AL CHORITO (PLATICA DEL LUGAR, DE ENAMORADOS)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','10:00 hrs','PANTEON DE ELOTA (LEYENDA DE LA TUMBA ENCADENADA)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','11:00 hrs','VISITA AL MUSEO COMUNITARIO DE ELOTA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','12:00 hrs','TRANSLADO A LA CABECERA MUNICIPAL DE LA CRUZ ELOTA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','13:00 hrs','VISITA LA PLAZUELA Y MUSEO MUNICIPAL']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','14:00 hrs','COMIDA EN PLAYA CEUTA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','15:00 hrs','TIEMPO DE ESPARCIMIENTO EN EL MALECON PLAYA CEUTA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','16:00 hrs','VISITA AL CAMPAMENTO Y MUSEO DE LA TORTUGA MARINA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','17:00 hrs','PLATICA DE CONSERVACION DE LA TORTUGA MARINA Y VISITA AL MUSEO ']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','18:00 hrs','VISITA AL CORRAL DE ENCUBACION Y MUESTREO DE NIDOS ']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','19:00 hrs','ACTO DE LIBERACION DE CRIAS DE LA TORTUGA MARINA ']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A08E','20:00 hrs','TIEMPO DE ESPARCIMIENTO Y DESPEDIDA']);
//Escuinapa
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A09E','08:00 hrs','Llegada a la cabecera municipal en el centro de Escuinapa']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A09E','09:00 hrs','Inicia recorrido por la plazuela Corona, Parrroquia, parque, area gastronomica, mercado y palacio municipal.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A09E','10:00 hrs','Salida hacia Marismas Nacionales, Rancho salineros, Celaya (sacado de coco) y/o visita en el CIP�s, playa espiritu.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A09E','11:00 hrs','Partida hacia Teacap�n, para paseos en panga a isla de pajaros y bahia de Teacap�n, asi como a playa Las Lupitas y Cuatro Surcos, ademas del malecon.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A09E','12:00 hrs','Recorrido en Jardin Botanico, Antonio Hass en Teacapan.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A09E','13:00 hrs','Visita a la cooperativa de ecoturismo "El Mezcal", recepcion con el juego del ulama (infantil), comida, paseos en kayak y safaris fotograficos en la zona.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A09E','14:00 hrs','Termino del recorrido en el centro de Escuinapa.']);
//El Fuerte
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','07:00 hrs','Voy a correr por el malecon para tener condici�n y poder atrapar a los chicos malos.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','08:30 hrs','Desayuno 2 huevos estrellados con chilaquiles y un jugo de fruta de la regi�n en el hotel posada hidalgo (Se necesita estar bien nutrido para hacer mi trabajo)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','09:00 hrs','Me subo a la balsa que recorre el R�o Fuerte y disfruto de la variedad de flora y fauna, aprovecho para visitar el cerro de la m�scara y analizar los petrograbados.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','11:30 hrs','Doy un paseo por el centro hist�rico de nuestro pueblo m�gico (Palacio municipal, Casa de la cultura, mansi�n orrantia, etc..)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','13:00 hrs','Como unos ricos callos de lobina y cauques a la mantequilla en el restaurante Diligencias.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','15:00 hrs','Visito el museo del mirador y vuelvo a vivir la historia de grandes personajes de nuestro pueblo m�gico y tomo fotograf�as panor�micas del R�o Fuerte.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','16:30 hrs','Paso a los portales a tomar una nieve y veo las nuevas artesanias que estan en venta']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','17:00 hrs','Hago un recorrido por los hoteles que son edificios hist�ricos para verificar que se encuentren bien todos los turistas.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','18:30 hrs','Me preparo porque tengo show todos los d�as en mi casa "Hotel posada Hidalgo"']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','20:30 hrs','Ceno en el mes�n del general una rica lobina flameada.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A10E','21:30 hrs','Descansar']);
//Guasave
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','08:00 hrs','Salida de la Ciudad de Guasave rumbo a Boca del R�o']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','09:00 hrs','Desayuno en Boca del R�o']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','11:00 hrs','Salida a Playa Las Glorias']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','12:00 hrs','Tiempo Libre']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','13:00 hrs','Comida en Playa Las Glorias']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','14:00 hrs','Salida hacia la Pitahaya']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','15:00 hrs','Visita guiada por la granja de ostiones (La Pitahaya)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','16:00 hrs','Recorrido en lancha por la Bah�a de Macapule']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','17:00 hrs','Visita a la isla Macapule e Isla de Los P�jaros']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','18:00 hrs','Llegada a la Pitahaya y salida a Guasave']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A11E','19:00 hrs','Llegada a la ciudad de Guasave']);
//Mazatl�n
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A12E','08:00 - 09:00 hrs','Desayuno y traslado al centro de la ciudad recorriendo el malec�n a bordo de una "pulmon�a", transporte t�pico del puerto. ']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A12E','10:00 hrs','Visite La Catedral de Mazatl�n y Mercado Pino Su�rez']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A12E','11:00 - 13:00 hrs','Visite El Teatro �ngela la Peralta y los Museos: Arqueol�gico, de Arte, y Casa Machado']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A12E','14:00 hrs','Comida']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A12E','15:00 - 17:00 hrs','Traslado al Acuario Mazatl�n, en donde disfrutar� de los espect�culos de Lobos Marinos, Aves, exhibici�n de buceo y animales cazadores.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A12E','18:00 hrs','Realice un paseo en caminata por el Malec�n para disfrutar de atardeceres fascinantes']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A12E','19:00 - 20:00 hrs','Visite la Zona dorada donde Ud. encontrar� artesanias, hoteles y finos restaurantes.']);
//Mocorito
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','08:00 hrs','Desayuno']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','09:00 hrs','F�brica de jamonsillos y/o panaderia']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','10:00 hrs','rustico caf�']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','11:00 hrs','visita al museo de historia regional']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','12:00 hrs','visita a la presidencia muncipal']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','13:00 hrs','Comida']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','14:00 hrs','Descanso']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','15:00 hrs','Recorrido por centro historico ( iglesia,escuela lic. Benito Juarez,casa de la cultura,centro cultural dr Jose Ley Dominguez)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','17:00 hrs','Compras ( Gastronomia,artesania etc.)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','18:00 hrs','Viernes de Plaza']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','19:00 hrs','Baile y recorrido por la plazuela Miguel Hidalgo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','20:00 hrs','Callejon de la Raquel (espectaculos de globos de papel de china)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A13E','20:30 hrs','Pernocta y cena']);
//Rosario
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A14E','08:00 hrs','Desayuno en el Restaurant El Tiro de San Antonio']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A14E','09:30 hrs','Visita Iglesia de Ntra. Se�ora del Rosario, tumba y monumento de Lola Beltran, Museo de la virgen de Rosario,y tienda artesanal de dulces tipicos']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A14E','11:00 hrs','Visita al Panteon Espa�ol']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A14E','12:00 hrs','Visita a los Vestigios de la Iglesia y visita al museo lola Beltran']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A14E','13:00 hrs','Visita a la Laguan del Iguanero']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A14E','14:00 hrs','Comida en el Restaurant Bellavista']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A14E','16:00 hrs','Visita Centro de El Rosario, Fabrica el Manantial(lugar donde se elabora rel refresco de vainilla Tonicol)']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A14E','18:00 hrs','Visita a la Capilla de la Santa Cruz']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A14E','19:00 hrs','Visita a la plazuela municipal, Palacio y Plazuela Gabriel Leyva Zolano']);
//Salvador Alvarado
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','08:00 hrs','Llegada al pueblo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','09:00 hrs','Desayuno']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','10:00 hrs','Visita al museo Pedro Infante']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','11:00 hrs','Visita al museo Pedro Infante']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','12:00 hrs','Paseo por las calles del pueblo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','13:00 hrs','Comida']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','14:00 hrs','Descanso']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','15:00 hrs','Visita museo del evora']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','16:00 hrs','Visita museo del evora']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','17:00 hrs','Visita plazuela pedro infante']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','18:00 hrs','Recorrido  por iglesia ']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','19:00 hrs','Cena']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A15E','20:00 hrs','Descanso']);
//San Ignacio
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','08:00 hrs','LLEGADA AL PUEBLO DE SAN JAVIER, RECORRIDO POR LA PLAZUELA Y MUSEO.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','09:00 hrs','CHARLA CON HABITANTES  SOBRE HISTORIA DEL PUEBLO Y SOBRE EL RECORRIDO.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','10:00 hrs','DESAYUNO EN EL RETAURANT TIPICO DEL LUGAR ( "EL TIRITO" ).']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','11:00 hrs','SALIDA RUMBO A CABAZAN.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','11:15 hrs','VISITA AL MUSEO DEL JAGUAR Y ATRACTIVOS DEL PUEBLO DE CABAZAN.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','12:00 hrs','APERITIVOS EN EL RESTAURANT "EL MES�N DE LAS MISIONES".']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','12:30 hrs','SALIDA RUMBO A LA LABOR']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','13:00 hrs','LLEGADA A LA LABOR Y RECORRIDO POR LA HACIENDA, CAPILLA Y MUSEO DEL LUGAR.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','14:00 hrs','SALIDA HACIA SAN IGNACIO.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','14:30 hrs','LLEGADA A SAN IGNACIO Y COMIDA DE BIENVENIDA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','15:30 hrs','RECORRIDO  POR LOS LUGARES TIPICOS DE LA CABECERA, LA IGLESIA, PLAZUELA, EL MUSEO, LA CASA DEL DIABLO.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','17:00 hrs','CAMINATA Y ATARDECER EN  EL CRISTO DE LA MESA']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A16E','18:15 hrs','REGRESO A LA CIUDAD DE ORIGEN']);
//Sinaloa
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A17E','09:00 hrs','Pueblo Se�orial Sinaloa de Leyva. Desayuno.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A17E','10:00 hrs','Tour por el centro historico']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A17E','11:00 hrs','recorrido por el templo y plazuela Mpal.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A17E','12:00 hrs','Visita casa de la cultura']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A17E','13:00 hrs','Ruinas de Templo Viejo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A17E','14:00 hrs','Comida']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A17E','15:00 hrs','Visita al Centro Ceremonial Mayo-Yoreme de Ocoroni.']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A17E','16:00 hrs','Visita al Cerro del monje']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A17E','17:00 hrs','Recorrido por el malecon']);
//Navolato
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','08:00 hrs','llegada al pueblo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','09:00 hrs','desayuno']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','10:00 hrs','paseo por la plaza Vicente Guerrero']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','11:00 hrs','visita isla cortez']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','12:00 hrs','isla cortez actividades']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','13:00 hrs','isla cortez actividades']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','14:00 hrs','comida isla cortes']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','15:00 hrs','comida isla cortes']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','16:00 hrs','regreso al centro del pueblo']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','17:00 hrs','parada en el ingenio la primavera']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','18:00 hrs','recorrifo por iglesia San Francisco de Asis']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','19:00 hrs','cena y descanso']);
tx.executeSql('INSERT INTO undia(clave,hora,actividad) VALUES(?,?,?)',['A18E','20:00 hrs','cena y descanso']);

//descripciones e imagenes gastronomia completo
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG01E','Los Mochis  cuenta con los mejores mariscos de la regi�n, entre ellos el camar�n, pescado zarandeado, callos de hacha,  por su cercania a la costa. Adem�s contamos con comida t�pica como Barbacoa, Coricos, Pan de mujer, entre otros. Ahome se distingue por su gastronom�a.','img/ahome/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG02E','En las obras del siglo XIX predominan algunos casos neocl�sicos y otros m�s ecl�cticos, sin embargo la tipolog�a del municipio de angostura la define el tradicional simplificado con influencia neocl�sica.','img/angostura/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG03E','la gastronom�a del lugar que visitamos, se convierte en uno de los encantos principales. Es una aventura por la cultura de lugar por el que viajamos, una manera de conocer el pasado, presente y futuro, de acercarte a las personas que all� viven, todo a trav�s de la gastronom�a y Badiraguato no se queda atras con la gran riqueza gastronomica que podras encontrar.','img/badiraguato/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG04E','Alimentos, Cazuela, colachi, aguachile y pozole. Dulces Arroz con leche, capirotada y jamoncillos. Bebidas Horchata, agua de cebada y frutas y los famosos y tradicionales raspados de leche quemada.','img/concordia/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG05E','La cabecera municipal es en s� todo un espect�culo maravilloso, para quien lo visita y para los propios lugare�os. El lugar es de arquitectura tipo colonial tiene sus calles empedradas y faroles en cada esquina, as� como sus casas t�picas. De los edificios de mayor relevancia se encuentran: el templo edificado en honor a Santa Ursula, construido en el siglo XVIII en lo alto de su fachada conserva un reloj de sol. El propio Palacio Municipal es digno de admirarse, la capilla de la Virgen de Guadalupe y otro lugar muy concurrido es sin duda la Plaza de Armas.','img/cosala/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG06E','La cocina culichi es parte de la culinaria Mexicana y prueba de ello son los ricos quesos, salsas, barbacoa, marlin, chicharr�n, los ricos , las ricas gorditas, la machaca, el inigualable asado a la plaza, el chorizo, chilorio, jocoque, cabrer�a, frijoles refritos y que decir de los sabrosos mariscos como los camarones aguachile, los callos de hacha, pescado empanizado, camarones al ajillo,molcajetes de marisco, asi como su extensa variedad en postres como ; pan de mujer,natas,empanadas de calabaza, piloncillo y mucho mas... Prueba Culiacan.1','img/culiacan/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG07E','Choix cuenta con una gran variedad de platillos t�picos como el Guacavaqui, carne machaca, capirotada, atoles blancos y de pinoles, entre otros. En la cabecera municipal se han hecho costumbre platillos a base de lobina (pez predominante en la presa) como: los chicharrones de lobina, callos de lobina, filete zarandeado, filete montado, molcajete, y algunos m�s. La bebida t�pica es el pinole de maiz y otras frutas de temporada.','img/choix/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG08E','En la tipolog�a formal de la arquitectura construida durante el periodo novohispano de elota, se destacan variantes del barroco tales como purista, interest�pite y neostilo.','img/elota/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG09E','La arquitectura novohispana de Escuinapa, no obstante mostrar una caracter�stica expresi�n est�tica evocando un rasgo de equilibrio y firmeza, discrepa con el desarrollo formal del resto de los elementos de la estructura compositiva.','img/escuinapa/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG10E','Tenemos una gran variedad de platillos t�picos: machaca, caldillo, picadillo, arroz, guacabaqui, barbacoa, tamales de pi�a, de carne, de elote y de dulce. En la cabecera municipal se han hecho costumbre los platillos a base de lobina como: los chicharrones, callos, alb�ndigas, filete zarandeado, empanizado o flameado, as� como las mariscadas y los langostinos (cauques) preparados de diferentes maneras. En dulces encontramos pepitorias, jamoncillos, cocadas, capirotada, tacuarines (coricos),coyotas, semitas, melcocha, bu�uelos, gorditas de queso.','img/el_fuerte/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG11E','Guasave por ser un municipio l�der en la producci�n de alimentos ofrece una amplia oferta gastron�mica en la que destacan los pescados y mariscos, teniendo como ejemplo los chicharrones, zarandeado, aguachiles y ceviche, tambi�n cuenta con una variedad de platillos t�picos como tamales, gallina pinta y barbacoa, entre otros, siendo la gastronom�a un elemento fundamental en la cultura Guasavense.ales, gallina pinta y barbacoa, entre otros, siendo la gastronom�a un elemento fundamental en la cultura Guasavense','img/guasave/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG12E','En la gastronom�a mazatleca abundan ingredientes procedentes del mar de la m�s alta calidad, creando exquisitos y aut�nticos platillos conocidos en todo el mundo, como el aguachile de camar�n, callo de hacha y su famoso pescado zarandeado.','img/mazatlan/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG13E','Mocorito, "La Atenas de Sinaloa", es una cr�nica que da testimonio de acontecimientos, personajes,costumbres,cultura e historia; sin faltar la gastronomia que es una de las mas ricas y variadas de la region del evora. Cuna del chilorio, de la carne machaca, jamoncillos,palomas y una gama muy diversa de sabores que conquista con la magia de sus ingredientes hasta el paladar mas exigente.','img/mocorito/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG14E','Las muestras materiales dejadas por la presencia jesuita en la regi�n, existen en abundancia. Expres�ndose en los restos arquitect�nicos de bajareque, adobe, ladrillo y piedra localizados hacia el norte y al sur-oriente de la zona central de Sinaloa principalmente. Mostrando las evidencias tecnol�gicas, constantes tipol�gicas y variantes regionales en la composici�n formal y funcional de las estructuras misionales que la Compa��a de Jes�s construy�. ','img/el_rosario/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG15E','El platillo denominado la cazuela, pollos asados a la le�a; los tamales de puerco y elote; el chilorio; la comida elaborada con base en pescados y mariscos como los famosos callos de hacha; la machaca de camar�n y de marlin y el pescado zarandeado. Son tradicionales los tacos de carne asada. Dulces,Arroz con leche, pipitorias y capirotada.','img/salvador_alvarado/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG16E','San Ignacio considerado como la m�s mestiza pues basa sus platos en carne de res, cerdo y venado, adem�s de productos l�cteos como queso asadero, jocoque y natas. Machaca, carne seca, chilorio, chorizo y caldillo de carne deshebrada con verduras y huevo son algunos platillos que se preparan.','img/san_ignacio/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG17E','Sinaloa es reconocida en su gastronomia por su gran variedad de platillos  autoctonos como quelites con queso, calabacitas en colachi y el guacabaque, pozole, menudo etc.','img/sinaloa_de_leyva/gastronomia.jpg']);
tx.executeSql('INSERT INTO desimggas(clave,descripcion,imagen) VALUES(?,?,?)',['DG18E','Fue construido en el siglo XX con un estilo neocl�sico. Destacan su curioso p�rtico con arcos de medio punto que crea una especie de balc�n para la ventana del coro, y las torres que enmarcan la fachada, con sus tres cuerpos con arcos de medio punto.','img/navolato/gastronomia.jpg']);

//descripciones e imagenes historicos completo
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH01E','A pesar de su corta edad Los Mochis cuenta con lugares historicos donde podemos encontrar evidencia de la  gran historia de la ciudad, como el Ingenio Azucarero que es b�sicamente el motivo de creaci�n de la ciudad, el jard�n bot�nico casa y patio de diversi�n del fundador de la ciudad Benjamin F. Johnston, estamos seguro que les va a encantar, Descubralo !! ','img/ahome/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH02E','En las obras del siglo XIX predominan algunos casos neocl�sicos y otros m�s ecl�cticos, sin embargo la tipolog�a del municipio de angostura la define el tradicional simplificado con influencia neocl�sica.','img/angostura/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH03E','La tipolog�a formal en la arquitectura habitacional que durante el periodo novohispano se edific� en Badiraguato, muestra tambi�n la variante del barroco tablerado, circunscrito b�sicamente a la producci�n de la arquitectura dom�stica, no obstante tambi�n se emple� como recurso formal en algunas obras del g�nero religioso.','img/badiraguato/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH04E','Al este de Mazatl�n, a ra�z de las vetas de oro y plata quese descubrieran en la regi�n, en 1565 fue fundado este pueblo como Villa de San Sebasti�n. Colmado de episodios que evidencian su estrat�gica importancia en el pasado, hoy CONCORDIA es la viva imagen del lugar que se esmera por cautivar con su a�eja arquitectura, tradiciones y recursos naturales.','img/concordia/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH05E','La cabecera municipal es en s� todo un espect�culo maravilloso, para quien lo visita y para los propios lugare�os. El lugar es de arquitectura tipo colonial tiene sus calles empedradas y faroles en cada esquina, as� como sus casas t�picas. De los edificios de mayor relevancia se encuentran: el templo edificado en honor a Santa Ursula, construido en el siglo XVIII en lo alto de su fachada conserva un reloj de sol. El propio Palacio Municipal es digno de admirarse, la capilla de la Virgen de Guadalupe y otro lugar muy concurrido es sin duda la Plaza de Armas.','img/cosala/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH06E','La cocina culichi es parte de la culinaria Mexicana y prueba de ello son los ricos quesos, salsas, barbacoa, marlin, chicharr�n, los ricos , las ricas gorditas, la machaca, el inigualable asado a la plaza, el chorizo, chilorio, jocoque, cabrer�a, frijoles refritos y que decir de los sabrosos mariscos como los camarones aguachile, los callos de hacha, pescado empanizado, camarones al ajillo,molcajetes de marisco, asi como su extensa variedad en postres como ; pan de mujer,natas,empanadas de calabaza, piloncillo y mucho mas...Prueba Culiacan','img/culiacan/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH07E','Debido a su geografia, historia y cultura cuentan con diversas actividades que involucran las tradiciones y costumbres de su gente.','img/choix/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH08E','En la tipolog�a formal de la arquitectura construida durante el periodo novohispano de elota, se destacan variantes del barroco tales como purista, interest�pite y neostilo.','img/elota/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH09E','La arquitectura novohispana de Escuinapa, no obstante mostrar una caracter�stica expresi�n est�tica evocando un rasgo de equilibrio y firmeza, discrepa con el desarrollo formal del resto de los elementos de la estructura compositiva.','img/escuinapa/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH10E','Fortaleza de la historia, la arquitectura y la perseverancia, esta joya colonial sinaloense de el noroeste mexicano guarda en su pasado los cimientos que la enaltecen. Primero como Villa de San Juan Bautista de Carapoa (1564), luego como Villa de San Felipe y Santiago (1583), y por �ltimo como El Fuerte de Montesclaros (1610), el deseo ferviente por levantar un gran pueblo pas� a constituirlo en cabecera de misi�n jesuita (s. XVII y XVIII) hasta encumbrarlo, en 1824, nada m�s ni nada menos que en la primera capital del Estado de Occidente, conformado por los territorios de Sonora y Sinaloa.','img/el_fuerte/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH11E','Guasave cuenta con pueblos de profundas tradiciones con legado  material, art�stico y artesanal, contamos con sitios arqueol�gicos, petroglifos, Islas, Playas, Museos y una gran diversidad de flora y fauna.','img/guasave/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH12E','La Perla del Pacifico se distingue por su cultura milenaria, que se da a partir del encuentro natural de la cultura de Totorames y Xiximes con las costumbres de los primeros pobladores provenientes de China, Europa Occidental y Estados Unidos dando origen a la poblaci�n actual de Mazatl�n. </br></br>Esta cultura puede ser apreciada en un recorrido por las calles del Centro Hist�rico y viviendo la experiencia del Carnaval de Mazatl�n.','img/mazatlan/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH13E','Mocorito, "La Atenas de Sinaloa", es una cr�nica que da testimonio de acontecimientos, personajes,costumbres,cultura e historia; sin faltar la gastronomia que es una de las mas ricas y variadas de la region del evora. Cuna del chilorio, de la carne machaca, jamoncillos,palomas y una gama muy diversa de sabores que conquista con la magia de sus ingredientes hasta el paladar mas exigente. ','img/mocorito/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH14E','Las muestras materiales dejadas por la presencia jesuita en la regi�n, existen en abundancia. Expres�ndose en los restos arquitect�nicos de bajareque, adobe, ladrillo y piedra localizados hacia el norte y al sur-oriente de la zona central de Sinaloa principalmente. Mostrando las evidencias tecnol�gicas, constantes tipol�gicas y variantes regionales en la composici�n formal y funcional de las estructuras misionales que la Compa��a de Jes�s construy�. ','img/el_rosario/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH15E','','img/salvador_alvarado/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH16E','Las primeras manifestaciones surgieron al mediar el siglo XVII, perdurando todav�a hasta la primera mitad del siglo XVIII. Esta variante se caracteriz� por la omisi�n de la columna en la estructura formal.','img/san_ignacio/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH17E','Si el nombre de este pueblo es causa de interrogantes, es porque tiene una poderosa raz�n hist�rica. Cuando los espa�oles llegaron al lugar (1583), ocupado por la naci�n de los sinaloas, lo bautizaron como Villa de San Felipe y Santiago de Sinaloa, nombre que se extendi� a la entidad donde se asienta. �ste es el origen del patrimonio cultural de una peque�a ciudad serrana que convive con el pasado arquitect�nico de sus edificios, con sus tradiciones que se aferran a perdurar, y con un marco natural que s�lo espera tu visita para enamorar.','img/sinaloa_de_leyva/historicos.jpg']);
tx.executeSql('INSERT INTO desimghis(clave,descripcion,imagen) VALUES(?,?,?)',['DH18E','Comenzando a construir sus fachadas  en el siglo XX con un estilo neocl�sico. Destacan sus curiosos  detalles que realzan la historia de  este municipio.','img/navolato/historicos.jpg']);

////descripciones e imagenes un dia completo
/* ahome */tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA01E','Un d�a en Ahome','','img/ahome/24horas.jpg']);
/*angostura*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA02E','Un d�a en Angostura','','img/angostura/24horas.jpg']);
/*badiraguato*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA03E','Un d�a en Badiraguato','','img/badiraguato/24horas.jpg']);
/*Concordia*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA04E','Un d�a en Concordia','','img/concordia/24horas.jpg']);
/*Cosal�*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA05E','Un d�a en Cosal�','','img/cosala/24horas.jpg']);
/*Culiac�n*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA06E','Un d�a en Culiac�n','','img/culiacan/24horas.jpg']);
/*Choix*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA07E','Un d�a en Choix','','img/choix/24horas.jpg']);
/*Elota*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA08E','Un d�a en Elota','','img/elota/24horas.jpg']);
/*Escuinapa*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA09E','Un d�a en Escuinapa','','img/escuinapa/24horas.jpg']);
/*El Fuerte*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA10E','Un d�a en El Fuerte','','img/el_fuerte/24horas.jpg']);
/*Guasave*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA11E','Un d�a en Guasave','','img/guasave/24horas.jpg']);
/*Mazatl�n*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA12E','Un d�a en Mazatl�n','','img/mazatlan/24horas.jpg']);
/*Mocorito*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA13E','Un d�a en Mocorito','','img/mocorito/24horas.jpg']);
/*Rosario*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA14E','Un d�a en Rosario','','img/el_rosario/24horas.jpg']);
/*Salvador Alvarado*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA15E','Un d�a en Salvador Alvarado','','img/salvador_alvarado/24horas.jpg']);
/*San Ignacio*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA16E','Un d�a en San Ignacio','','img/san_ignacio/24horas.jpg']);
/*Sinaloa*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA17E','Un d�a en Sinaloa','','img/sinaloa_de_leyva/24horas.jpg']);
/*Navolato*/tx.executeSql('INSERT INTO desimgdia(clave,titulo,descripcion,imagen) VALUES(?,?,?,?)',['DA18E','Un d�a en Navolato','','img/Navolato/24horas.jpg']);

//////imagenes divercion completo
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI01E','img/ahome/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI02E','img/angostura/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI03E','img/badiraguato/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI04E','img/concordia/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI05E','img/cosala/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI06E','img/culiacan/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI07E','img/choix/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI08E','img/elota/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI09E','img/escuinapa/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI10E','img/el_fuerte/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI11E','img/guasave/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI12E','img/mazatlan/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI13E','img/mocorito/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI14E','img/el_rosario/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI15E','img/salvador_alvarado/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI16E','img/san_ignacio/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI17E','img/sinaloa_de_leyva/actividades.jpg']);
tx.executeSql('INSERT INTO imgdiv(clave,imagen) VALUES(?,?)',['DI18E','img/navolato/actividades.jpg']);
}
 var clave;
//if(!clave){
//    
////var url=location;
//var valor=String(location).split('?');
//var clm=String(valor[1]).split('');
//var sc="C"+clm[0]+clm[1];
//checkConnection();
//loadclave(valor[1],sc);
//console.log(valor[1])
//console.log(sc);
//}
function back(){
//  var ie=clave.split('');
//  if (ie[2]=='E'){
    $.mobile.navigate( '#municipios',{transition : 'slide'} );
 // }else{
//    $.mobile.navigate( '#municipios_ingles',{transition : 'slide'} );
//  }
clave='';
console.log('clave='+clave);
}

function loadclave(clv,clvcl){
    clave=clv;
    console.log(clvcl);    
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM clima where clave=?',[clvcl],showclima);
    });
}
function showclima(tx, results){
    var len = results.rows.length;
    for (var i=0; i<len; i++){
        $('#imgprincipal').prop('src',results.rows.item(i).imagen);
        if (online=='1'){ 
            $('#fiel').html(results.rows.item(i).iframe+"<br>"+results.rows.item(i).js).show();
            }
}
}

//gastronomia
function loadgastronomia(){
    console.log(clave);
    var clavegastronomia="G"+clave;
    var clavegastronomia1="DG"+clave;
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM gastronomia WHERE clave=?',[clavegastronomia],showgastronomia);
        tx.executeSql('SELECT * FROM desimggas WHERE clave=?',[clavegastronomia1],showgastronomia1);
    });
}
function showgastronomia(tx, results){
    var len = results.rows.length;
    $('#contgas').html('');
        for (var i=0; i<len; i++){
            $('#contgas').append("<div data-role='collapsible'><h3 ><span style='left: -30px;' data-icon='star' data-role='button' data-theme='b'></span><span>"+results.rows.item(i).restaurante+"</span></h3><ul style='padding: 0;font-size: small;'><li class='listas'><h1>Especialidad:</h1><h2>"+results.rows.item(i).especialidad+"</h2></li><li style='margin-left: 10%;'><p style='margin: 1.5em 5px .6em;'>Direcci&oacute;n: <b>"+results.rows.item(i).direccion+"</b></p><p style='margin: 0.5em 5px .6em;'>Tel&eacute;fono: <b>"+results.rows.item(i).telefono+"</b></p></li></ul></div>");
        //uid=results.rows.item(i).clave;          
        }
        $("#contgas").collapsibleset( );
}
function showgastronomia1(tx, results){
    console.log('ejecutando');
    var len = results.rows.length;
        for (var i=0; i<len; i++){
            console.log('imagen: '+results.rows.item(i).imagen);
         $('#imggastronomia').prop('src',results.rows.item(i).imagen);
         $('#desgas').html(results.rows.item(i).descripcion);
         }
}
//diversion
function loaddiversion(){
    var clavediversion="D"+clave;
    var clavediversion1="DI"+clave;
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(
        function(tx) {              
        tx.executeSql('SELECT * FROM diversion where clave=?',[clavediversion],showdiversion);
        tx.executeSql('SELECT * FROM imgdiv where clave=?',[clavediversion1],showdiversion1);
    }); 
}

function showdiversion(tx, results){
    var len = results.rows.length;
    console.log(len);
    var inf;
    var info=clave.split("");
    if (info[2]=='I'){inf="Information";}else if(info[2]=='E'){inf="Informaci�n";}
    $('#contdiv').html('');
        for (var i=0; i<len; i++){
           $('#contdiv').append("<div data-role='collapsible'><h3>"+results.rows.item(i).actividad+"</h3><p>"+results.rows.item(i).descripcion+"</p><p>"+inf+":<br/><strong>"+results.rows.item(i).contactos+"</strong> </p></div>")         
        }
        $("#contdiv").collapsibleset( "refresh" );
}
function showdiversion1(tx, results){
    var len = results.rows.length;    
        for (var i=0; i<len; i++){
         $('#imgdiversion').prop('src',results.rows.item(i).imagen);
         }
}
//emergencia
function loademergencia(){
    var claveemergencia="E"+clave;
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM emergencia where clave=?',[claveemergencia],showemergencia);
    }); 
}

function showemergencia(tx, results){
    var len = results.rows.length;
    console.log(len+'emergencia');
    $('#conteme').html('');
        for (var i=0; i<len; i++){
          $('#conteme').append("<li>"+results.rows.item(i).img+"<h1 style='margin-top: -10px;'>"+results.rows.item(i).servicio+"</h1><p>"+results.rows.item(i).domicilio+"<br />Tel: <b>"+results.rows.item(i).telefono+"</b></p></li>");
        }
        $("#conteme").listview('refresh');
}
//historicos
function loadhis(){
    var clavehisto="H"+clave;
    var clavehisto1="DH"+clave;
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM deshis where clave=?',[clavehisto1],showunhis1);
        tx.executeSql('SELECT * FROM historicos where clave=?',[clavehisto],showunhis);        
    }); 
}
function showunhis(tx, results){
    var len = results.rows.length;
    console.log(len+'un dia');
    $("#contund").html('');
        for (var i=0; i<len; i++){
         $("#contund").append("<li><h2>"+results.rows.item(i).hora+"</h2><h6>"+results.rows.item(i).actividad+"</h6></li>");
          }
        $("#contund").listview('refresh');
}
function showunhis1(tx, results){
    var len = results.rows.length;
        for (var i=0; i<len; i++){
         $('#imgprincipal24').prop('src',results.rows.item(i).imagen);
         $('#descripcion24').html(results.rows.item(i).descripcion);
         $('#nomper').html(results.rows.item(i).titulo);
          }
}
//un dia
function loadundia(){
    var claveundia="A"+clave;
    var claveundia1="DA"+clave;
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM desimgdia where clave=?',[claveundia1],showundia1);
        tx.executeSql('SELECT * FROM undia where clave=?',[claveundia],showundia);
    }); 
}

function showundia(tx, results){
    var len = results.rows.length;
    console.log(len+'un dia');
    $("#contund").html('');
        for (var i=0; i<len; i++){
         $("#contund").append("<li><h2>"+results.rows.item(i).hora+"</h2><h6>"+results.rows.item(i).actividad+"</h6></li>");
          }
        $("#contund").listview('refresh');
}
function showundia1(tx, results){
    var len = results.rows.length;
        for (var i=0; i<len; i++){
         $('#imgprincipal24').prop('src',results.rows.item(i).imagen);
         $('#descripcion24').html(results.rows.item(i).descripcion);
         $('#nomper').html(results.rows.item(i).titulo);
          }
}

//lugares historicos
function loadhis(){
    var claveundia="H"+clave;
    var claveundia1="DH"+clave;
   var db = window.openDatabase("Database", "1.0", "Cordova Demo", 9000000);
        db.transaction(
        function(tx) {
        tx.executeSql('SELECT * FROM desimghis where clave=?',[claveundia1],showunhis1);
        tx.executeSql('SELECT * FROM historicos where clave=?',[claveundia],showunhis);
    }); 
}

function showunhis(tx, results){
    var len = results.rows.length;
    console.log(len+'un dia');
    $("#iGallery").html('');
        for (var i=0; i<len; i++){
         $("#iGallery").append("<li><a title='<h3>"+results.rows.item(i).lugar+"</h3>"+results.rows.item(i).descripcion+"' href='"+results.rows.item(i).imagen+"'><img src='"+results.rows.item(i).imagen+"' /></a></li>");
          }
          $('#iGallery').imageflip();
}
function showunhis1(tx, results){
    var len = results.rows.length;
        for (var i=0; i<len; i++){
         $('#imgprinhis').prop('src',results.rows.item(i).imagen);
         $('#descriphis').html(results.rows.item(i).descripcion);
          }
}
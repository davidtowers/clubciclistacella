/**
 * Fichero: socios.js;
 * Autor: David Torres Sánchez;
 * Descripción: Fichero que realiza una conexión con una base de datos Firebase en tiempo real
 				y va recorriendo los datos con el fin de crear la estructua necesaria e incrustar 
 				los datos recibidos;
 * Versión: 6;
 * Fecha última modificación: 24/01/2019;
 */

/* Función que inicializa la conexión con la base de datos de Firebase */
function inicializarFirebase() {
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyBv3P0Gql6yOFlUw6KVsl_eiRsOiG6sKHM",
		authDomain: "club-ciclista-cella.firebaseapp.com",
		databaseURL: "https://club-ciclista-cella.firebaseio.com",
		projectId: "club-ciclista-cella",
		storageBucket: "club-ciclista-cella.appspot.com",
		messagingSenderId: "791452010733"
	};
	firebase.initializeApp(config);
}

/* Función que inicializa y carga los socios en la página .html con el formato deseado */
function cargarSocios() {
	inicializarFirebase();

	var database = firebase.database().ref().child('Socios');
	database.once('value', function(snapshot){
	    if(snapshot.exists()){
	        var socio = '';
	        var imagenSocio = "img/socio.jpg";
	        var imagenSocia = "img/socia.jpg";

	        snapshot.forEach(function(data){
	            var descripcion = data.val().descripcion;
	            var nombre = data.val().nombre;
	            var sexo = data.val().sexo;
	            var imagenPerfil = "";

	            if (sexo == 'H') {
	            	imagenPerfil = imagenSocio;
	            } else {
	            	imagenPerfil = imagenSocia;
	            }

	            socio += '<div class="col-lg-4 col-sm-6 text-center mb-4">';
	            socio += '<img class="rounded-circle img-fluid d-block mx-auto" src=' + imagenPerfil + '>';
	            socio += '<h3>' + nombre + '</h3>';
	            socio += '<p>' + descripcion + '</p>';
	            socio += '</div>';

	        });

	        $('#socios').append(socio);/* socios es el id de la estructura de destino */
	    }
	});
}
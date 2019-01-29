/**
 * Fichero: salidas-widget-tiempo.js;
 * Autor: David Torres Sánchez;
 * Descripción: Fichero necesario para poder actualizar el widget del tiempo
 				que está en las salidas del club. El script llama a su vez a otro
 				script. Lo que hace es recibir los datos metereológicos y los muestra
 				en el campo correspondiente.;
 * Versión: 3;
 * Fecha última modificación: 28/01/2019;
 */

function cargarWidgetTiempo() {
	!function(d,s,id) {
		var js,fjs=d.getElementsByTagName(s)[0];
		if(!d.getElementById(id)) {
			js=d.createElement(s);
			js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
			fjs.parentNode.insertBefore(js,fjs);
		}
	} 

	(document,'script','weatherwidget-io-js');
}


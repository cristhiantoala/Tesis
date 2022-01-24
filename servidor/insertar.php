<?php

// archivos necesarios
require_once 'config.php';
require_once 'conexion.php';

// obtengo puntero de conexion con la db
$dbConn = conectar();
// agregamos una noticia en la db
// si se envio el formulario

	// definimos las variables
$coordenadas 	= $_POST['coordenadas'];
$teclas 		= $_POST['tecla'];
$res 	= $_POST['respuestas'];
	
	
	// si no hay errores registramos al noticia
		// inserto los datos de registro en la db
		$query  = "INSERT INTO `test` (mouse,teclado,emocion) VALUES ('$coordenadas','$teclas','$res')";
		$result = mysqli_query($dbConn,$query);
		header("Location: ../");
		die;
	
		
?>

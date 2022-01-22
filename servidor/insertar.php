<?php

// archivos necesarios
require_once 'config.php';
require_once 'conexion.php';

// obtengo puntero de conexion con la db
$dbConn = conectar();
// agregamos una noticia en la db
// si se envio el formulario
echo "hola1";

	// definimos las variables
$coordenadas 	= $_POST['coordenadas'];
$teclas 		= $_POST['tecla'];
$res 	= $_POST['respuestas'];
	
echo $teclas;	
die;
	// si no hay errores registramos al noticia
		// inserto los datos de registro en la db
		$query  = "INSERT INTO `data` (mouse,teclado,emocion) VALUES ('$coordenadas','$teclas','$res')";
		$result = mysqli_query($dbConn,$query);
		/*$query  = "INSERT INTO `data` (teclado) VALUES ('$teclas')";
		$result = mysqli_query($dbConn,$query);
		$query  = "INSERT INTO `data` (emocion) VALUES ('$res')";
		$result = mysqli_query($dbConn,$query);*/
		header("Location: ../");
		die;
	
		
?>

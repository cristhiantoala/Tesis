<?php
// archivos necesarios
require_once 'config.php';
require_once 'conexion.php';

// obtengo puntero de conexion con la db
$dbConn = conectar();
$filas=file('..\textFiles\emotion_level.txt');
    foreach($filas as $value){
        $query = "INSERT INTO `emociones` (emocion) VALUES ('$value')";
        $result = mysqli_query($dbConn,$query);
    } ?>
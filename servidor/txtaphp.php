<?php
// archivos necesarios
require_once 'config2.php';
require_once 'conexion.php';

// obtengo puntero de conexion con la db
$dbConn = conectar();
$filas=file('..\textFiles\emotion_level.txt');
$string="";
$res=implode($string, $filas);

   
 $filas2=file('..\textFiles\key_log.txt');
    $string="";
    $res2=implode($string, $filas2);


$filas3=file('..\textFiles\mouse_log.txt');
$string="";
$res3=implode($string, $filas3);

$query  = "INSERT INTO `data` (mouse,teclado,emocion) VALUES ('$res3','$res2','$res')";
    $result = mysqli_query($dbConn,$query);
    ?>


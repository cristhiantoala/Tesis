<?php

function conectar () {
	
//	$db_con = mysql_pconnect (DB_SERVER,DB_USER,DB_PASS);
	$db_con = mysqli_connect (DB_SERVER,DB_USER,DB_PASS);
	if (!$db_con) return false; 
//	if (!mysqli_select_db (DB_NAME, $db_con)) return false;
	if (!mysqli_select_db ($db_con, DB_NAME)) return false;
<<<<<<< HEAD
	echo "conectó wiiiiii";
=======
	echo "conectó";
>>>>>>> 683d8f7e47d999dec28694a619640400fe4789e6
	return $db_con; 

}

?>

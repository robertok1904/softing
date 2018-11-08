<?php 	

try {

	$connection = new PDO('mysql:host=localhost;dbname=contacto','root','');
	echo "conexion exitosa";

	echo $nombre = $_POST['nombre'];
	echo $correo = $_POST['correo'];
	echo $empresa = $_POST['empresa'];
	echo $mensaje = $_POST['mensaje'];


	
} catch (PDOException $e){
	echo "Error: " . $e->getMessage();
}


 ?>
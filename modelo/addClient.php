<?php
require 'Funciones.php';
conectar();

    $conexion = mysqli_connect('localhost', 'root', '', 'facturacion');
    mysqli_set_charset($conexion, 'utf8');



    if (!empty($_POST["cuit"])) 
	{
$nombre=         strip_tags($_POST["nombre"]);
$apellido=       strip_tags($_POST["apellido"]);
$cuit=           $_POST["cuit"];

    $insert= "INSERT INTO clientes (nombre,apellido,cuit) VALUES ('$nombre','$apellido','$cuit')";
    
    $resultado = mysqli_query($conexion,$insert);
   

 }



?>

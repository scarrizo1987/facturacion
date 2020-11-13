
<?php

$conexion=null;

function conectar()
{
       global $conexion;
       $conexion=mysqli_connect('localhost','root','','facturacion')
       or die ("no se puede conectar");
       mysqli_set_charset($conexion,'utf8');
}

function haIniciadoSesion()
  {
    session_start();
    return isset( $_SESSION['usuario'] );
  }


function validarLogin($usuario, $pass) //valido seccion
{
		global $conexion;
		$consulta = "SELECT * FROM usuarios WHERE usuario='".$usuario."' AND clave='".$pass."'" ;
        $respuesta = mysqli_query($conexion, $consulta);
        $contar = mysqli_num_rows($respuesta);

if($contar==0){
    return false;
}
else{
    return true;
}

}


function desconectar()		
{
		global $conexion;
		mysqli_close($conexion);
		
   }



?>



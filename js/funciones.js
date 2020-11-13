

function agregardatos(codigo,tipo,descripcion,precio){

	cadena="codigo=" + codigo + 
			"&tipo=" + tipo +
			"&descripcion=" + descripcion +
			"&precio=" + precio;

	$.ajax({
		type:"POST",
		url:"php/agregarDatos.php",
		data:cadena,
		success:function(r){
			if(r==1){
				$('#tabla').load('componentes/tabla.php');
				alertify.success("agregado con exito :)");
			}else{
				alertify.error("Fallo el servidor :(");
			}
		}
	});

}

function agregaform(datos){

	d=datos.split('||');

	$('#idpersona').val(d[0]);
	$('#codigou').val(d[1]);
	$('#tipou').val(d[2]);
	$('#descripcionu').val(d[3]);
	$('#preciou').val(d[4]);
	
}

function actualizaDatos(){


	id=$('#idpersona').val();
	codigo=$('#codigou').val();
	tipo=$('#tipou').val();
	descripcion=$('#descripcionu').val();
	precio=$('#preciou').val();

	cadena= "id=" + id +
			"&codigo=" + codigo + 
			"&tipo=" + tipo +
			"&descripcion=" +descripcion +
			"&precio=" + precio;

	$.ajax({
		type:"POST",
		url:"php/actualizaDatos.php",
		data:cadena,
		success:function(r){
			
			if(r==1){
				$('#tabla').load('componentes/tabla.php');
				alertify.success("Actualizado con exito :)");
			}else{
				alertify.error("Fallo el servidor :(");
			}
		}
	});

}

function preguntarSiNo(id){
	alertify.confirm('Eliminar Datos', '¿Esta seguro de eliminar este registro?', 
					function(){ eliminarDatos(id) }
                , function(){ alertify.error('Se cancelo')});
}

function eliminarDatos(id){

	cadena="id=" + id;

		$.ajax({
			type:"POST",
			url:"php/eliminarDatos.php",
			data:cadena,
			success:function(r){
				if(r==1){
					$('#tabla').load('componentes/tabla.php');
					alertify.success("Eliminado con exito!");
				}else{
					alertify.error("Fallo el servidor :(");
				}
			}
		});
}
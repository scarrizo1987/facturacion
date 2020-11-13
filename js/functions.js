$(function(){

	// Lista de Clientes
	$.post('cliente.php' ).done( function(respuesta)
	{
		$('#cliente' ).html( respuesta );
	});

	// lista clientes
	$('#cliente').change(function()
	{
		var carreras = $(this).val();
		//localidad segun cliente
		$.post('localidad.php', {carrerasE: carreras} ).done( function( respuesta )
		{
			$( '#localidad' ).html( respuesta );	
		});

		$.post('cuit.php', {carrerasE: carreras} ).done( function( respuesta )
		{
			$( '#cuit' ).html( respuesta );	
		});


	});
	
})


$(function(){

	// Lista de productos
	$.post('cod.php' ).done( function(respuesta)
	{
		$('#codigo' ).html( respuesta );
	});

	
	// lista productos
	$('#codigo').change(function()
	{
		var carreras = $(this).val();
		// Lista de precio
		$.post('precio.php', {carrerasE: carreras} ).done( function( respuesta )
		{
			$( '#precio' ).html( respuesta );	
		});
		$.post('producto.php', {carrerasE: carreras} ).done( function( respuesta )
		{
			$( '#producto' ).html( respuesta );	
		});






	});
	




})


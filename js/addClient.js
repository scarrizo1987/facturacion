
function enviarDatos(){
var nombre= $('#nombre').val();
var apellido= $('#apellido').val();
var cuit= $('#cuit').val();
var dataen ='nombre='+nombre+'&apellido='+apellido+'&cuit='+cuit;
$.ajax({
type: 'post',
url:'../modelo/addClient.php',
data:dataen,
success:function(resp){
  swal({
  title: "Registro Guardado",
  text: "Presione acceptar",
  icon: "success",
  button: "Aceptar",
});
  //vacio los campos
var nombre= $('#nombre').val("");
var apellido=$('#apellido').val("");
var cuit=$('#cuit').val("");

}
});
return false;
}
<?php
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $bd = "registrocontactos";

    $conexion = mysqli_connect ($servidor, $usuario, $clave, $bd);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Contactos</title>
</head>
<body>
    <form action="#" name="registrocontactos" method="post">
        <input type="text" name="Nombre" placeholder="nombre">
        <input type="text" name="Telefono" placeholder="telefono">
        <input type="text" name="Correo" placeholder="correo">
        <input type="text" name="Comentarios" placeholder="comentarios">

        <input type="submit" name="registro">
    </form>
</body>
</html>

<?php
if(isset($_POST['registro'])){
    $nombre=$_POST['Nombre'];
    $telefono=$_POST['Telefono'];
    $correo=$_POST['Correo'];
    $comentarios=$_POST['Comentarios'];

    $guardar = "INSERT INTO registros VALUES ('$nombre','$telefono','$correo','$comentarios','')";

    $ejecutar = mysqli_query ($conexion,$guardar);
}
#KIMBERLY JAZMIN TREJO ESTRADA
?>

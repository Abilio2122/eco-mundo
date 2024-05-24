<!DOCTYPE html>

<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>conexion mysql</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
       <?php
           $enlace = mysqli_connect("127.0.0.1","root","superadministrador","ejemplo");
        if(!$enlace){
            die("no pudo conectarce a la base de datos ". mysqli_error());
        }
        echo "conexion exitosa";
        mysqli_close($enlace);

       ?>
        
        <script src="" async defer></script>
    </body>
</html>
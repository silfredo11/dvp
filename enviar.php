<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["nombre"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telefono = trim($_POST["telefono"]);
    $mensaje = trim($_POST["mensaje"]);

    // Aquí escribe el correo electrónico donde deseas recibir los mensajes.
    $destinatario = "ibarrasilfredo@gmail.com";

    // Asunto del correo
    $asunto = "Nuevo mensaje de $nombre";

    // Construye el cuerpo del mensaje.
    $contenido_del_correo = "Nombre: $nombre\n";
    $contenido_del_correo .= "Email: $email\n\n";
    $contenido_del_correo .= "Teléfono: $telefono\n\n";
    $contenido_del_correo .= "Mensaje:\n$mensaje\n";

    // Cabeceras para el correo electrónico
    $cabeceras = "From: $nombre <$email>";

    // Envía el correo electrónico
    if (mail($destinatario, $asunto, $contenido_del_correo, $cabeceras)) {
        // Código a ejecutar si el correo se envió exitosamente
        echo "<p>Gracias por contactarnos, $nombre. Te responderemos a la brevedad.</p>";
    } else {
        // Código a ejecutar si el correo no se pudo enviar
        echo "<p>Lo sentimos, ocurrió un error al enviar tu mensaje. Por favor intenta de nuevo más tarde.</p>";
    }
} else {
    // No es una petición POST, redirige al formulario
    header("Location: el_nombre_de_tu_formulario.html");
}
?>

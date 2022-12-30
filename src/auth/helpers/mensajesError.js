
export const mensajesError = ( errorMessage ) =>{

    const mensajeError = errorMessage.split("(")[1].split(")")[0];

    switch ( mensajeError ) {

        case "auth/email-already-exists": return "El correo ya esta registrado"
        case "auth/id-token-expired"    : return "El token de usuario caduco"
        case "auth/id-token-revoked"    : return "El token de usuario se elimino"
        case "auth/internal-error"      : return "Error de servidor, contacte al administrador"
        case "auth/invalid-credential"  : return "Credenciales invalidas"
        case "auth/invalid-display-name": return "El nombre de usuario no debe estar vacio"
        case "auth/invalid-email"       : return "Correo electronico invalido"
        case "auth/invalid-password"    : return "Contraseña incorrecta"
        case "auth/user-not-found"      : return "Usuario no encontrado"
        case "auth/wrong-password"      : return "Contraseña incorrecta"
        case "popup-closed-by-user"     : return "El usuario cerro el PopUp de autenticacion con externos"
        case "provider-already-linked"  : return "Ya hay un usuario relacionado a ese provider"
        case "redirect-cancelled-by-user": return "El usuario cancelo la redireccion"
        case "user-cancelled"           : return "El usuario cancelo la operacion"
        case "auth/account-exists-with-different-credential": return "Ya hay un usuario asociado a esas credenciales"
        case "auth/email-already-in-use": return "El correo ya esta registrado"

        default: return errorMessage;
    }
}
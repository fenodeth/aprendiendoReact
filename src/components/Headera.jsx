import React from 'react';

function Headera({titulo}) {
    // Aca va todo el codigo js
    /*const edad = 18;

    let mensaje;

    if(edad >= 18){
        mensaje = 'Eres mayor de edad';
    } else {
        mensaje = 'Eres menor de edad';
    }*/


    return(
        // Las llaves demarcan codigo js
        <h1 id="encabezado" className="encabezado">{titulo}</h1>
    );
}

export default Headera;
